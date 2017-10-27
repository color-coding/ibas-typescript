/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";
import { BORepositoryShell } from "../../borep/BORepositories";
import { UserQuery } from "../../borep/bo/Systems";

/**
 * 查询面板
 */
export class QueryPanel extends sys.QueryPanel<IQueryPanelView>  {
    /** 初始化 */
    protected init(callBack: Function): void {
        if (callBack instanceof Function) {
            setTimeout(callBack, 5);
        }
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 注册视图事件
        this.view.deleteQueryEvent = this.deleteQuery;
        this.view.saveQueryEvent = this.saveQuery;
        this.view.addQueryConditionEvent = this.addQueryCondition;
        this.view.removeQueryConditionEvent = this.removeQueryCondition;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        this.editQuery = <UserQuery>this.currentQuery();
        if (ibas.objects.isNull(this.editQuery)) {
            this.editQuery = new UserQuery();
            this.editQuery.id = this.listener.queryId;
            this.editQuery.name = ibas.i18n.prop("sys_shell_data_new") + ibas.i18n.prop("sys_query_panel");
            this.editQuery.order = 1;
            this.queries.add(this.editQuery);
            this.showQueries();
            this.view.usingQuery = (this.queries.length - 1).toString();
        }
        this.editQuery.target = this.targetName;
        if (ibas.objects.isNull(this.editQuery.criteria)) {
            this.editQuery.criteria = new ibas.Criteria();
            this.editQuery.criteria.businessObject = this.editQuery.target;
        }
        this.view.showQuery(this.editQuery);
        this.view.showQueryConditions(this.editQuery.criteria.conditions);
    }
    /** 工具条显示完成 */
    protected barShowed(): void {
        this.showQueries();
    }

    private showQueries(): void {
        if (ibas.objects.isNull(this.queries)) {
            return;
        }
        let keyValues: Array<ibas.KeyValue> = new Array<ibas.KeyValue>();
        for (let index: number = 0; index < this.queries.length; index++) {
            keyValues.push(new ibas.KeyValue(index.toString(), this.queries[index].name));
        }
        this.view.showQueries(keyValues);
    }
    private editQuery: UserQuery;

    private deleteQuery(): void {
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    // 去除查询后保存，表示删除
                    that.editQuery.criteria = null;
                    that.saveQuery();
                }
            }
        });
    }
    private saveQuery(): void {
        try {
            this.editQuery.user = ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_CODE);
            let that: this = this;
            let boRepository: BORepositoryShell = new BORepositoryShell();
            boRepository.saveUserQuery({
                beSaved: this.editQuery,
                onCompleted(opRslt: ibas.IOperationResult<sys.IUserQuery>): void {
                    try {
                        if (opRslt.resultCode !== 0) {
                            throw new Error(opRslt.message);
                        }
                        that.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("sys_shell_sucessful"));
                        // 操作成功，刷新数据，关闭界面
                        if (ibas.objects.isNull(that.editQuery.criteria)) {
                            // 没查询，表示删除
                            that.queries.remove(that.editQuery);
                            that.barShowed();
                        }
                        that.close();
                    } catch (error) {
                        that.messages(error);
                    }
                }
            });
        } catch (error) {
            this.messages(error);
        }
    }
    private addQueryCondition(): void {
        this.editQuery.criteria.conditions.create();
        this.view.showQueryConditions(this.editQuery.criteria.conditions);
    }
    private removeQueryCondition(condition: ibas.ICondition): void {
        this.editQuery.criteria.conditions.remove(condition);
        this.view.showQueryConditions(this.editQuery.criteria.conditions);
    }
}
/** 视图-查询面板 */
export interface IQueryPanelView extends sys.IQueryPanelView {
    /** 显示可用查询 */
    showQueries(datas: ibas.KeyValue[]): void;
    /** 删除查询 */
    deleteQueryEvent: Function;
    /** 保存查询 */
    saveQueryEvent: Function;
    /** 显示查询内容 */
    showQuery(data: UserQuery): void;
    /** 显示查询条件 */
    showQueryConditions(datas: ibas.ICondition[]): void;
    /** 添加查询条件 */
    addQueryConditionEvent: Function;
    /** 移出查询 */
    removeQueryConditionEvent: Function;
}
