/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { object, ArrayList } from "../../bobas/index";
import { IBOChooseView } from "./Applications.d";
import { BOQueryApplication } from "./Applications";
import { IBOChooseService, IBOChooseServiceContract } from "../services/index";

/**
 * 业务对象选择应用
 */
export abstract class BOChooseApplication<T extends IBOChooseView, D> extends BOQueryApplication<T> {

    /** 注册视图，重载需要回掉此方法 */
    protected registerView(): void {
        super.registerView();
        this.view.chooseDataEvent = this.chooseData;
        this.view.newDataEvent = this.newData;
    }
    /** 选择数据，参数：数据 */
    protected abstract chooseData(datas: D[]): void;
    /** 新建数据 */
    protected abstract newData(): void;
}
/**
 * 业务对象选择服务
 * 类型参数：视图，选择数据，服务契约
 */
export abstract class BOChooseService<T extends IBOChooseView, D> extends BOChooseApplication<T, D>
    implements IBOChooseService {

    /** 完成 */
    onCompleted: Function;
    /** 触发完成事件 */
    protected fireCompleted(selecteds: D[] | D): void {
        // 关闭视图
        this.close();
        if (object.isNull(this.onCompleted)) {
            return;
        }
        // 转换返回类型
        let list = new ArrayList();
        if (selecteds instanceof Array) {
            // 当是数组时
            for (let item of selecteds) {
                list.add(item);
            }
        } else {
            // 非数组,认为是单对象
            list.add(selecteds);
        }
        if (list.length === 0) {
            // 没有数据不触发事件
            return;
        }
        try {
            // 调用完成事件
            this.onCompleted.apply(this.onCompleted, list);
        } catch (error) {
            // 完成事件出错
            this.messages(error);
        }
    }
    /** 选择数据后,直接触发完成事件 */
    protected chooseData(datas: D[]): void {
        this.fireCompleted(datas);
    }
}