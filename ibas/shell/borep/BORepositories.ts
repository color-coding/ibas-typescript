/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as sys from "ibas/bsbas/systems/index";
import * as ibas from "ibas/index";
import { DataConverter4Shell, DataConverter4Offline } from "./DataConverters";
import * as bo from "./bo/Systems";

/**
 * 业务仓库-壳-远程
 */
export class BORepositoryShell extends ibas.BORepositoryApplication implements sys.IBORepositorySystem {

    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4Shell();
    }

    /** 创建远程仓库 */
    protected createRemoteRepository(): ibas.IRemoteRepository {
        let boRepository: ibas.BORepositoryAjax = new ibas.BORepositoryAjax();
        boRepository.address = this.address;
        boRepository.token = this.token;
        boRepository.converter = this.createConverter();
        return boRepository;
    }
	/**
	 * 用户登录
	 * @param listener 登录监听者
	 */
    connect(caller: sys.ConnectCaller): void {
        let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
        if (ibas.objects.isNull(remoteRepository)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "remoteRepository"));
        }
        this.token = undefined;
        let method = ibas.strings.format("userConnect?user={0}&password={1}", caller.user, caller.password);
        remoteRepository.callRemoteMethod(method, undefined, caller);
    }

	/**
	 * 查询用户模块
	 * @param listener 用户检索监听者
	 */
    fetchUserModules(caller: sys.UserMethodsCaller<sys.IUserModule>): void {
        let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
        if (ibas.objects.isNull(remoteRepository)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "remoteRepository"));
        }
        this.token = undefined;
        let method = ibas.strings.format("fetchUserModules?user={0}", caller.user);
        remoteRepository.callRemoteMethod(method, undefined, caller);
    }

	/**
	 * 查询用户角色权限
	 * @param listener 用户检索监听者
	 */
    fetchUserPrivileges(caller: sys.UserMethodsCaller<sys.IUserPrivilege>): void {
        let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
        if (ibas.objects.isNull(remoteRepository)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "remoteRepository"));
        }
        this.token = undefined;
        let method = ibas.strings.format("fetchUserPrivileges?user={0}", caller.user);
        remoteRepository.callRemoteMethod(method, undefined, caller);
    }

    /**
     * 查询用户查询
     * @param caller 监听者
     */
    fetchUserQueries(caller: sys.UserQueriesCaller): void {
        let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
        if (ibas.objects.isNull(remoteRepository)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "remoteRepository"));
        }
        this.token = undefined;
        let method = ibas.strings.format("fetchUserQueries?user={0}", caller.user);
        remoteRepository.callRemoteMethod(method, undefined, caller);
    }

	/**
	 * 保存用户查询
	 * @param caller 监听者
	 */
    saveUserQuery(caller: ibas.SaveCaller<sys.IUserQuery>): void {
        this.save("UserQuery", caller);
    }

	/**
	 * 业务对象信息查询
	 * @param caller 监听者
	 */
    fetchBOInfos(caller: sys.BOInfoCaller): void {
        let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
        if (ibas.objects.isNull(remoteRepository)) {
            throw new Error(ibas.i18n.prop("msg_invalid_parameter", "remoteRepository"));
        }
        this.token = undefined;
        let method = ibas.strings.format("fetchBOInfos?boName={0}", caller.boName);
        remoteRepository.callRemoteMethod(method, undefined, caller);
    }
}

/**
 * 业务仓库应用
 */
export class BORepositoryShellOffLine extends BORepositoryShell {

    constructor() {
        super();
        // 重新获取离线状态
        let name: string = super.constructor.name;
        // 获取此仓库离线状态
        this.offline = ibas.config.get(ibas.BORepositoryApplication.CONFIG_ITEM_OFFLINE_MODE + "|" + name, this.offline);
    }
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4Offline();
    }

	/**
	 * 用户登录
	 * @param caller 登录者
	 */
    connect(caller: sys.ConnectCaller): void {
        let criteria = new ibas.Criteria();
        let condition = criteria.conditions.create();
        condition.alias = "code";
        condition.value = caller.user;
        condition = criteria.conditions.create();
        condition.alias = "password";
        condition.value = caller.password;

        let fetchCaller: ibas.FetchCaller<bo.User> = {
            criteria: criteria,
            onCompleted(opRsltFetch): void {
                // 没有实现查询应用，手动过滤下
                let opRslt = new ibas.OperationResult();
                opRslt.resultCode = -1;
                opRslt.message = ibas.i18n.prop("sys_shell_user_and_password_not_match");
                for (let item of opRsltFetch.resultObjects) {
                    if (item.code === caller.user
                        && item.password === caller.password) {
                        opRslt.resultCode = 0;
                        opRslt.message = "ok.";
                        opRslt.resultObjects.add(item);
                        break;
                    }
                }
                caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.fetch("User", fetchCaller);
    }

	/**
	 * 查询用户模块
	 * @param caller 用户检索者
	 */
    fetchUserModules(caller: sys.UserMethodsCaller<sys.IUserModule>): void {
        let fetchCaller: ibas.FetchCaller<bo.UserModule> = {
            criteria: null,
            onCompleted(opRslt): void {
                caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.fetch("UserModule", fetchCaller);
    }

	/**
	 * 查询用户角色权限
	 * @param caller 用户检索者
	 */
    fetchUserPrivileges(caller: sys.UserMethodsCaller<sys.IUserPrivilege>): void {
        let fetchCaller: ibas.FetchCaller<bo.UserPrivilege> = {
            criteria: null,
            onCompleted(opRslt): void {
                caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.fetch("UserPrivilege", fetchCaller);
    }
    /**
     * 查询用户查询
     * @param caller 监听者
     */
    fetchUserQueries(caller: sys.UserQueriesCaller): void {
        let criteria = new ibas.Criteria();
        let condition = criteria.conditions.create();
        condition.alias = "id";
        condition.value = caller.queryId;

        let fetchCaller: ibas.FetchCaller<bo.UserQuery> = {
            criteria: null,
            onCompleted(opRsltFetch): void {
                // 没有实现查询应用，手动过滤下
                let opRslt = new ibas.OperationResult<bo.UserQuery>();
                for (let item of opRsltFetch.resultObjects) {
                    if (item.id !== caller.queryId) {
                        continue;
                    }
                    opRslt.resultObjects.add(item);
                }
                caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.fetch("UserQuery", fetchCaller);
    }
	/**
	 * 业务对象信息查询
	 * @param caller 监听者
	 */
    fetchBOInfos(caller: sys.BOInfoCaller): void {
        let criteria = new ibas.Criteria();
        let condition = criteria.conditions.create();
        condition.alias = "name";
        condition.value = caller.boName;

        let fetchCaller: ibas.FetchCaller<bo.BOInfo> = {
            criteria: null,
            onCompleted(opRsltFetch): void {
                // 没有实现查询应用，手动过滤下
                let opRslt = new ibas.OperationResult<bo.BOInfo>();
                for (let item of opRsltFetch.resultObjects) {
                    if (item.name !== caller.boName) {
                        continue;
                    }
                    opRslt.resultObjects.add(item);
                }
                caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
            }
        };
        this.fetch("BOInfo", fetchCaller);
    }
}