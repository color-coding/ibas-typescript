/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import { i18n, emTimingMode } from "ibas/index";
export class Timing {
    /** 默认间隔 */
    static TIMEINTERVAL: number = 50000;
    constructor(timingName: string, tMode: emTimingMode) {
        this.name = timingName;
        this.TimingMode = tMode;
        this.timeInterval = Timing.TIMEINTERVAL;
        this.runFunction = function (): void {
            throw new Error(i18n.prop("sys_not_provided_timing_method"));
        };
    }
    /**
     * 定时器名称
     */
    public name: string;
    /**
     * 定时器运行间隔(毫秒)
     */
    public timeInterval: number;
    /**
     * 定时器运行函数
     */
    public runFunction: Function;
    /**
     * 定时器运行ID
     */
    private intervalpid: number;
    /**
     * 定时器运行函数
     */
    public TimingMode: emTimingMode;
    /**
     * 定时器开启
     */
    public start(): void {
        switch (this.TimingMode) {
            case emTimingMode.INTERVAL:
                if (Timing.systemIntervals.has(name)) {
                    throw new Error(i18n.prop("sys_Interval_working", name));
                }
                this.intervalpid = setInterval(this.runFunction, this.timeInterval);
                Timing.systemIntervals.set(this.name, this);
                break;
            case emTimingMode.SINGLE:
                setTimeout(this.runFunction,this.timeInterval);
        }

    }
    /**
     * 关闭当前定时器
     */
    public close(): void {
        let timing: Timing = Timing.getInterval(this.name);
        clearInterval(this.intervalpid);
    }
    /**
     * 关闭指定定时器
     */
    public static close(name: string): void {
        let timing: Timing = Timing.getInterval(name);
        clearInterval(timing.intervalpid);
    }
    /**
     * 获取指定定时器
     */
    public static getInterval(name: string): Timing {
        if (Timing.systemIntervals.has(name)) {
            // 使用全局注册对象
            return Timing.systemIntervals.get(name);
        }
        throw new Error(i18n.prop("sys_Interval_not_registered", name));
    }
    /** 全局 */
    private static systemIntervals: Map<string, Timing> = function (): Map<string, Timing> {
        if ((<any>window).ibas === undefined) {
            (<any>window).ibas = {};
        }
        if ((<any>window).ibas.systemIntervals === undefined) {
            (<any>window).ibas.systemIntervals = new Map();
        }
        return (<any>window).ibas.systemIntervals;
    }();
}