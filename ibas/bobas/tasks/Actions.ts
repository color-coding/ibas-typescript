/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { objects, emMessageLevel, dates } from "../data/index";
import { Configuration } from "../configuration/Configuration";
import { Logger } from "../messages/Logger";
/**
 * 动作
 */
export abstract class Action {
    private config: Configuration;
    /**
     * 添加配置
     * @param key 配置项
     * @param value 值
     */
    public addConfig(key: string, value: any): void {
        if (objects.isNull(this.config)) {
            this.config = new Configuration();
        }
        this.config.set(key, value);
        this.log(emMessageLevel.INFO,
            "action: [{0}] got configuration [{1} - {2}].", objects.isNull(this.name) ? this.id : this.name, key, value);
    }
    /**
     * 获取配置
     * @param key 配置项
     */
    protected getConfig(key: string): any;
    /**
     * 获取配置
     * @param key 配置项
     * @param defalut 默认值
     */
    protected getConfig<T>(key: string, defalut: T): T;
    protected getConfig(): any {
        if (objects.isNull(this.config)) {
            this.config = new Configuration();
        }
        return this.config.get.call(this.config, arguments);
    }
    private logger: Logger;
    /**
     * 记录消息
     * @param level 消息级别
     * @param message 消息格式
     * @param pars 格式内容
     */
    protected log(level: emMessageLevel, message: string, ...pars: any[]): void;
    /**
     * 记录消息
     * @param message 内容
     * @param pars 格式内容
     */
    protected log(message: string, ...pars: any[]): void;
    protected log(): void {
        if (objects.isNull(this.logger)) {
            this.logger = new Logger();
        }
        return this.logger.log.call(this.logger, arguments);
    }
    /** 标识 */
    id: string;
    /** 名称 */
    name: string;
    /** 开始时间 */
    startTime: Date;
    /** 结束时间 */
    endTime: Date;
    isRunning(): boolean {
        if (objects.isNull(this.startTime)) {
            return false;
        }
        if (!objects.isNull(this.endTime)) {
            return false;
        }
        return true;
    }
    /** 进行 */
    do(): void {
        let done: boolean = false;
        this.startTime = new Date();
        this.endTime = undefined;
        this.log(emMessageLevel.INFO,
            "action: [{0}] is starting at [{1}].", objects.isNull(this.name) ? this.id : this.name, this.startTime);
        try {
            done = this.run();
        } catch (error) {
            this.log(emMessageLevel.ERROR,
                "action: [{0}] error [{1}].", objects.isNull(this.name) ? this.id : this.name, error);
        }
        if (done) {
            // 任务完成
            this.done();
        }
    }
    /** 完成 */
    protected done(): void {
        // 任务执行完成
        this.endTime = new Date();
        this.log(emMessageLevel.INFO,
            "action: [{0}] was completed at [{1}], during [{2}]s.", objects.isNull(this.name) ? this.id : this.name, this.endTime,
            dates.difference(dates.emDifferenceType.SECOND, this.endTime, this.startTime));
    }
    /** 运行（需要实现） */
    protected abstract run(): boolean;
}