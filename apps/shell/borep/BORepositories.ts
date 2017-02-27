/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../../ibas/index";
import * as sys from "../../../ibas/bsbas/systems/index";
import { DataConverter4Shell, DataConverter4Offline } from "./DataConverters";
import * as bo from "./bo/index";


/**
 * 业务仓库-壳-远程
 */
export class BORepositoryShell extends ibas.BORepositoryApplication implements sys.IBORepositorySystem {

    private converter: DataConverter4Shell;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): ibas.IDataConverter {
        if (ibas.object.isNull(this.converter)) {
            this.converter = new DataConverter4Shell();
        }
        return this.converter;
    }
	/**
	 * 用户登录
	 * @param listener 登录监听者
	 */
    connect(listener: sys.ConnectCaller): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户模块
	 * @param listener 用户检索监听者
	 */
    fetchUserModules(listener: sys.UserMethodsCaller<sys.IUserModule>): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户角色
	 * @param listener 用户检索监听者
	 */
    fetchUserRoles(listener: sys.UserMethodsCaller<sys.IUserRole>): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户角色权限
	 * @param listener 用户检索监听者
	 */
    fetchUserPrivileges(listener: sys.UserMethodsCaller<sys.IUserPrivilege>): void {
        throw new Error("unrealized method.");
    }
}

/**
 * 业务仓库应用
 */
export class BORepositoryShellOffLine extends BORepositoryShell {

    /** 获取离线配置 */
    private fetchOfflineSettings(callBack: Function): void {
        this.address = document.location.href;
        let method: string = "config.json";
        let caller: ibas.MethodCaller = {
            onCompleted(settings: any): void {
                if (!ibas.object.isNull(callBack)) {
                    let offlineSettings: any = null;
                    if (!ibas.object.isNull(settings) && !ibas.object.isNull(settings.offlineSettings)) {
                        offlineSettings = settings.offlineSettings;
                    }
                    callBack.call(callBack, offlineSettings);
                }
            }
        };
        this.callRemoteMethod(method, null, caller);
    }
    private offlineConverter: DataConverter4Offline;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): ibas.IDataConverter {
        if (ibas.object.isNull(this.offlineConverter)) {
            this.offlineConverter = new DataConverter4Offline();
        }
        return this.offlineConverter;
    }

	/**
	 * 用户登录
	 * @param caller 登录者
	 */
    connect(caller: sys.ConnectCaller): void {
        let callBack = function (offlineSettings: any): void {
            let opRslt = new ibas.OperationResult();
            opRslt.resultCode = -1;
            opRslt.message = ibas.i18n.prop("sys_shell_user_and_password_not_match");
            if (!ibas.object.isNull(offlineSettings)
                && !ibas.object.isNull(offlineSettings.users)
                && Array.isArray(offlineSettings.users)) {
                for (let item of offlineSettings.users) {
                    if (item.user === caller.user
                        && item.password === caller.password) {
                        opRslt.resultCode = 0;
                        opRslt.message = "";
                        let user: bo.User = new bo.User();
                        user.userCode = item.user;
                        user.userName = item.name;
                        opRslt.resultObjects.add(user);
                        break;
                    }
                }
            }
            caller.onCompleted.call(ibas.object.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        this.fetchOfflineSettings(callBack);
    }

	/**
	 * 查询用户模块
	 * @param caller 用户检索者
	 */
    fetchUserModules(caller: sys.UserMethodsCaller<sys.IUserModule>): void {
        let callBack = function (offlineSettings: any): void {
            let opRslt = new ibas.OperationResult();
            if (!ibas.object.isNull(offlineSettings)
                && !ibas.object.isNull(offlineSettings.modules)
                && Array.isArray(offlineSettings.modules)) {
                for (let item of offlineSettings.modules) {
                    let module = new bo.UserModule();
                    module.id = item.id;
                    module.name = item.name;
                    module.category = item.category;
                    module.address = item.address;
                    module.console = item.console;
                    module.description = ibas.i18n.prop(module.name);
                    opRslt.resultObjects.add(module);
                }
            }
            caller.onCompleted.call(ibas.object.isNull(caller.caller) ? caller : caller.caller, opRslt);
        };
        this.fetchOfflineSettings(callBack);
    }


	/**
	 * 查询用户角色
	 * @param caller 用户检索者
	 */
    fetchUserRoles(caller: sys.UserMethodsCaller<sys.IUserRole>): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户角色权限
	 * @param caller 用户检索者
	 */
    fetchUserPrivileges(caller: sys.UserMethodsCaller<sys.IUserPrivilege>): void {
        throw new Error("unrealized method.");
    }
}