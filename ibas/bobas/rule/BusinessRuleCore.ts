/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 业务规则错误 */
    export class BusinessRuleError extends Error {

    }
    /** 业务规则 */
    export interface IBusinessRule {
        /**
         * 运行业务规则
         *
         * @param bo
         *            执行规则的业务对象
         * @param trigger
         *            触发者
         */
        execute(bo: IBusinessObject, trigger?: string): void;
        /**
         * 输入的属性集合
         *
         * 仅当属于此集合的属性变化时，才运行此规则
         */
        inputProperties: IList<string>;
        /**
         * 被影响的属性集合
         */
        affectedProperties: IList<string>;
    }
    /** 业务规则集合 */
    export interface IBusinessRules extends Iterable<IBusinessRule> {
        /** 是否已初始化 */
        initialized: boolean;
        /** 注册规则 */
        register(rules: IBusinessRule[]): void;
        /** 大小 */
        size(): number;
        /**
         * 运行业务规则
         * @param bo
         *            执行规则的业务对象
         * @param properties
         *            变化的属性
         */
        execute(bo: IBusinessObject, ...properties: string[]): void;
    }
    /** 业务规则管理员 */
    export interface IBusinessRulesManager {
        /**
         * 获取规则
         * @param type
         * @return
         */
        getRules(type: any): IBusinessRules;
    }
    const _rules: Map<any, IBusinessRules> = new Map<any, IBusinessRules>();
    class BusinessRulesManager implements IBusinessRulesManager {
        getRules(type: any): IBusinessRules {
            let items: IBusinessRules = _rules.get(type);
            if (objects.isNull(items)) {
                items = new BusinessRules();
                _rules.set(type, items);
            }
            return items;
        }
    }
    class BusinessRules extends Array implements IBusinessRules {
        constructor() {
            super();
            this.initialized = false;
        }
        initialized: boolean;
        /** 注册规则 */
        register(rules: IBusinessRule[] | IBusinessRule): void {
            if (rules instanceof Array) {
                for (let item of rules) {
                    this.push(item);
                }
            } else {
                this.push(rules);
            }
        }
        /** 大小 */
        size(): number {
            if (objects.isNull(this)) {
                return 0;
            }
            return this.length;
        }
        /**
         * 运行业务规则
         * @param bo
         *            执行规则的业务对象
         * @param properties
         *            变化的属性
         */
        execute(bo: IBusinessObject, ...properties: string[]): void {
            let rules: IList<IBusinessRule> = new ArrayList<IBusinessRule>();
            for (let rule of this) {
                // 只执行一次
                if (rules.contain(rule)) {
                    continue;
                }
                let done: boolean = false;
                for (let property of properties) {
                    if (objects.isNull(rule.inputProperties)) {
                        continue;
                    }
                    if (rule.inputProperties.contain(property)) {
                        done = true;
                        break;
                    }
                }
                if (done) {
                    rules.add(rule);
                }
            }
            for (let rule of rules) {
                rule.execute(bo, ibas.strings.valueOf(properties));
            }
        }
    }
    /** 业务规则 */
    export abstract class BusinessRule implements IBusinessRule {
        constructor() {
            this.name = objects.getName(objects.getType(this));
            this.inputProperties = new ArrayList<string>();
            this.affectedProperties = new ArrayList<string>();
        }
        /** 规则名称 */
        name: string;
        /** 输入的属性集合 */
        inputProperties: IList<string>;
        /** 被影响的属性集合 */
        affectedProperties: IList<string>;
        /** 运行业务规则 */
        abstract execute(bo: IBusinessObject, trigger: string): void;
    }
    /** 业务规则内容 */
    export class BusinessRuleContextCommon {
        constructor() {
            this.inputValues = new Map<string, any>();
            this.outputValues = new Map<string, any>();
        }
        source: IBusinessObject;
        inputValues: Map<string, any>;
        outputValues: Map<string, any>;
        trigger: string;
    }
    /** 普通业务规则 */
    export abstract class BusinessRuleCommon extends BusinessRule {
        /** 运行业务逻辑 */
        execute(bo: IBusinessObject, trigger: string = undefined): void {
            try {
                let context: BusinessRuleContextCommon = new BusinessRuleContextCommon();
                context.source = bo;
                context.trigger = trigger;
                if (!objects.isNull(this.inputProperties)) {
                    for (let item of this.inputProperties) {
                        context.inputValues.set(item, bo.getProperty(item));
                    }
                }
                logger.log(emMessageLevel.DEBUG, "rules: executing rule [{0} - {1}].", this.name, objects.getName(objects.getType(this)));
                this.compute(context);
                if (!objects.isNull(this.affectedProperties) && !objects.isNull(context.outputValues)) {
                    for (let item of this.affectedProperties) {
                        let value: any = context.outputValues.get(item);
                        if (value !== undefined) {
                            bo.setProperty(item, value);
                        }
                    }
                }
            } catch (error) {
                if (error instanceof BusinessRuleError) {
                    throw error;
                } else {
                    throw new BusinessRuleError(error);
                }
            }
        }
        /** 计算规则 */
        protected abstract compute(context: BusinessRuleContextCommon): void;
    }
    /** 业务规则内容 */
    export class BusinessRuleContextCollection {
        constructor() {
            this.inputValues = new Map<string, any[]>();
            this.outputValues = new Map<string, any>();
        }
        source: IBusinessObject;
        inputValues: Map<string, any[]>;
        outputValues: Map<string, any>;
    }
    /** 集合属性业务规则 */
    export abstract class BusinessRuleCollection extends BusinessRule {
        constructor(collection: string) {
            super();
            this.collection = collection;
        }
        /** 集合属性 */
        collection: string;
        /** 运行业务逻辑 */
        execute(bo: IBusinessObject): void {
            try {
                let context: BusinessRuleContextCommon = new BusinessRuleContextCommon();
                context.source = bo;
                if (!objects.isNull(this.collection) && !objects.isNull(this.inputProperties)) {
                    let boValues: any = bo.getProperty(this.collection);
                    if (boValues instanceof Array) {
                        for (let item of this.inputProperties) {
                            let values: ArrayList<any> = new ArrayList<any>();
                            for (let boValue of boValues) {
                                if (boValue instanceof TrackableBase) {
                                    if (boValue.isDeleted) {
                                        continue;
                                    }
                                }
                                values.add(boValue.getProperty(item));
                            }
                            context.inputValues.set(item, values);
                        }
                    }
                }
                logger.log(emMessageLevel.DEBUG, "rules: executing rule [{0} - {1}].", this.name, objects.getName(objects.getType(this)));
                this.compute(context);
                if (!objects.isNull(this.affectedProperties) && !objects.isNull(context.outputValues)) {
                    for (let item of this.affectedProperties) {
                        let value: any = context.outputValues.get(item);
                        if (value !== undefined) {
                            bo.setProperty(item, value);
                        }
                    }
                }
            } catch (error) {
                if (error instanceof BusinessRuleError) {
                    throw error;
                } else {
                    throw new BusinessRuleError(error);
                }
            }
        }
        /** 计算规则 */
        protected abstract compute(context: BusinessRuleContextCommon): void;
    }
    export const businessRulesManager: IBusinessRulesManager = new BusinessRulesManager();
}