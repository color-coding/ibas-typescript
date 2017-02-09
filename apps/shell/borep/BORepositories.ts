/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, OperationMessages, OperationResult,
    IDataConverter, BORepositoryApplication
} from "../../../ibas/bobas/bobas";
import {
    IModule
} from "../../../ibas/bsbas/bsbas";
import {
    IBORepositorySystem
} from "../../../ibas/bsbas/systems/Systems";
import { DataConverter4Shell } from "./DataConverters";


/**
 * 业务仓库应用
 */
export class BORepositoryShellSimple implements IBORepositorySystem {
	/**
	 * 用户登录
	 * @param user 用户
	 * @param passwrod 密码
	 * @param callBack 回掉方法，参数：IOperationMessages
	 */
    connect(user: String, password: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }

	/**
	 * 查询用户模块
	 * @param userCode 用户
	 * @param callBack 回掉方法，参数：IOperationResult<IModule>
	 */
    fetchUserModules(userCode: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }

	/**
	 * 查询用户角色
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<string>
	 */
    fetchUserRoles(userCode: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }

	/**
	 * 查询用户角色权限
	 * @param token 用户口令
	 * @param callBack 回掉方法，参数：IOperationResult<IPrivilege>
	 */
    fetchUserPrivileges(userCode: String, callBack: Function): void {
        let opRslt: OperationMessages = new OperationResult();
        callBack.apply(opRslt);
    }
}
/**
 * 业务仓库-壳-远程
 */
export class BORepositoryShell extends BORepositoryApplication {

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

}

