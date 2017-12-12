/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { objects, emMessageLevel, dates, strings } from "../data/index";
import { Configuration } from "../configuration/Configuration";
import { Logger, ILogger } from "../messages/index";
/**
 * 动作
 */
export abstract class Action {

    constructor();
    /**
     * 构造
     * @param logger 日志记录者
     */
    constructor(logger: ILogger);
    /** 构造实现 */
    constructor() {
        this.logger = arguments[0];
    }
    private config: Configuration;
    /**
     * 添加配置
     * @param key 配置项
     * @param value 值
     */
    addConfig(key: string, value: any): void {
        if (objects.isNull(this.config)) {
            this.config = new Configuration();
        }
        this.config.set(key, value);
        this.log(emMessageLevel.INFO,
            "new config item [{1} - {2}].", objects.isNull(this.name) ? this.id : this.name, key, value);
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
        return this.config.get.apply(this.config, arguments);
    }
    /** 日志记录者 */
    private logger: ILogger;
    /** 设置日志记录者 */
    setLogger(logger: ILogger): void {
        this.logger = logger;
    }
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
            // 未提供则使用默认
            this.logger = new Logger();
        }
        let pars: any[] = [];
        let heard: string = strings.format("[{0}]: ", objects.isNull(this.name) ? objects.getName(objects.getType(this)) : this.name);
        if (typeof arguments[0] === "number") {
            // 类型
            pars.push(arguments[0]);
            // 内容
            pars.push(heard + arguments[1]);
            for (let index: number = 2; index < arguments.length; index++) {
                pars.push(arguments[index]);
            }
        } else {
            // 类型
            pars.push(emMessageLevel.INFO);
            // 内容
            pars.push(heard + arguments[0]);
            for (let index: number = 1; index < arguments.length; index++) {
                pars.push(arguments[index]);
            }
        }
        return this.logger.log.apply(this.logger, pars);
    }
    /** 标识 */
    id: string;
    /** 名称 */
    name: string;
    /** 开始时间 */
    private _startTime: Date;
    get startTime(): Date {
        return this._startTime;
    }
    /** 结束时间 */
    private _endTime: Date;
    get endTime(): Date {
        return this._endTime;
    }
    /** 是否运行中 */
    isRunning(): boolean {
        if (objects.isNull(this._startTime)) {
            return false;
        }
        if (!objects.isNull(this._endTime)) {
            return false;
        }
        return true;
    }
    /** 进行 */
    do(): void {
        if (this.isRunning()) {
            throw new Error("action is running.");
        }
        let done: boolean = false;
        this._startTime = new Date();
        this._endTime = undefined;
        this.log(emMessageLevel.INFO,
            "action is starting at [{0}].", this.startTime.toLocaleString());
        try {
            done = this.run();
        } catch (error) {
            this.log(emMessageLevel.ERROR, "occurred error [{0}].", error);
        }
        if (done) {
            // 任务完成
            this.done();
        }
    }
    /** 完成 */
    protected done(): void {
        // 任务执行完成
        if (!this.isRunning()) {
            throw new Error("action is not running.");
        }
        this._endTime = new Date();
        this.log(emMessageLevel.INFO,
            "action was completed at [{0}], during [{1}]s.", this.endTime.toLocaleString(),
            dates.difference(dates.emDifferenceType.SECOND, this.endTime, this.startTime));
    }
    /** 停止（最好重载） */
    stop(): void {
        this.done();
    }
    /** 运行（需要实现） */
    protected abstract run(): boolean;
}