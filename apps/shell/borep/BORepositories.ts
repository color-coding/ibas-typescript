/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, OperationMessages, OperationResult,
    IDataConverter, BORepositoryApplication,
    IOperationResult, RemoteListener, i18n, config, url
} from "../../../ibas/bsbas/bsbas";
import {
    IBORepositorySystem
} from "../../../ibas/bsbas/systems/Systems";
import { DataConverter4Shell, DataConverter4Offline } from "./DataConverters";
import { User } from "./bo/User";
import { UserModule } from "./bo/UserModule";


/**
 * 业务仓库-壳-远程
 */
export class BORepositoryShell extends BORepositoryApplication implements IBORepositorySystem {

    private converter: DataConverter4Shell;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): IDataConverter {
        if (object.isNull(this.converter)) {
            this.converter = new DataConverter4Shell();
        }
        return this.converter;
    }
	/**
	 * 用户登录
	 * @param user 用户
	 * @param passwrod 密码
	 * @param callBack 回掉方法，参数：IOperationResult<IUser>
	 */
    connect(user: String, password: String, callBack: Function): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户模块
	 * @param userCode 用户
	 * @param callBack 回掉方法，参数：IOperationResult<IUserModule>
	 */
    fetchUserModules(userCode: String, callBack: Function): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户角色
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IUserRole>
	 */
    fetchUserRoles(userCode: String, callBack: Function): void {
        throw new Error("unrealized method.");
    }

	/**
	 * 查询用户角色权限
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IUserPrivilege>
	 */
    fetchUserPrivileges(userCode: String, callBack: Function): void {
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
        let listener: RemoteListener = {
            method: method,
            onCompleted(settings: any): void {
                if (!object.isNull(callBack)) {
                    let offlineSettings = null;
                    if (!object.isNull(settings) && !object.isNull(settings.offlineSettings)) {
                        offlineSettings = settings.offlineSettings;
                    }
                    callBack.call(callBack, offlineSettings);
                }
            }
        };
        this.callRemoteMethod(method, null, listener);
    }
    /** 重载远程调用方法参数 */
    protected createAjaxSettings(method: string, data: any): JQueryAjaxSettings {
        // 重写ajax设置
        if (method === "config.json") {
            // 特殊方法的处理
            let ajxSetting: JQueryAjaxSettings = super.createAjaxSettings(method, data);
            ajxSetting.type = "GET";
            return ajxSetting;
        }
        return super.createAjaxSettings(method, data);
    }
    private offlineConverter: DataConverter4Offline;
    /**
     * 创建此模块的后端与前端数据的转换者
     */
    protected createDataConverter(): IDataConverter {
        if (object.isNull(this.offlineConverter)) {
            this.offlineConverter = new DataConverter4Offline();
        }
        return this.offlineConverter;
    }
	/**
	 * 用户登录
	 * @param user 用户
	 * @param passwrod 密码
	 * @param callBack 回掉方法，参数：IOperationResult<IUser>
	 */
    connect(user: String, password: String, callBack: Function): void {
        let func = function (offlineSettings: any): void {
            let opRslt = new OperationResult();
            opRslt.resultCode = -1;
            opRslt.message = i18n.prop("sys_shell_user_and_password_not_match");
            if (!object.isNull(offlineSettings)
                && !object.isNull(offlineSettings.users)
                && Array.isArray(offlineSettings.users)) {
                for (let item of offlineSettings.users) {
                    if (item.user === user
                        && item.password === password) {
                        opRslt.resultCode = 0;
                        opRslt.message = "";
                        let user: User = new User();
                        user.userCode = item.user;
                        user.userName = item.name;
                        opRslt.resultObjects.add(user);
                        break;
                    }
                }
            }
            callBack.call(callBack, opRslt);
        };
        this.fetchOfflineSettings(func);
    }

	/**
	 * 查询用户模块
	 * @param userCode 用户
	 * @param callBack 回掉方法，参数：IOperationResult<IUserModule>
	 */
    fetchUserModules(userCode: String, callBack: Function): void {
        let func = function (offlineSettings: any): void {
            let opRslt = new OperationResult();
            if (!object.isNull(offlineSettings)
                && !object.isNull(offlineSettings.modules)
                && Array.isArray(offlineSettings.modules)) {
                for (let item of offlineSettings.modules) {
                    let module = new UserModule();
                    module.id = item.id;
                    module.name = item.name;
                    module.category = item.category;
                    module.address = item.address;
                    module.console = item.console;
                    module.description = i18n.prop(module.name);
                    // 修正地址
                    if (!object.isNull(module.address) && module.address.startsWith(url.ROOT_URL_SIGN)) {
                        module.address = document.location.href + module.address.substring(url.ROOT_URL_SIGN.length);
                    }
                    opRslt.resultObjects.add(module);
                }
            }
            callBack.call(callBack, opRslt);
        };
        this.fetchOfflineSettings(func);
    }

	/**
	 * 查询用户角色
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IUserRole>
	 */
    fetchUserRoles(userCode: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }

	/**
	 * 查询用户角色权限
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IUserPrivilege>
	 */
    fetchUserPrivileges(userCode: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }
}