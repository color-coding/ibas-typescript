/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import { object, ArrayList, IOperationResult, ICriteria } from '../data/Data';
import { IBusinessObject, IBusinessObjectList } from './BusinessObjectCore.d';

/**
* 业务对象仓库
*/
export interface IBORepository {
    /**
    * 访问口令
    */
    token: string;
    /**
    * 查询数据
    * @param method 方法名称
    * @param criteria 查询
    */
    fetch<P>(method: string, criteria: ICriteria);
    /**
    * 保存数据
    * @param method 方法名称
    * @param bo 业务对象
    */
    save<P>(method: string, bo: IBusinessObject);
}

/**
* 远程调用监听者
*/
export interface RemoteListener {
    /**
    * 调用完成
    * @param opRslt 结果
    */
    onCompleted(opRslt: IOperationResult<any>);
}

/**
* 远程仓库
*/
export interface IRemoteRepository {

    /**
    * 远程服务地址
    */
    address: string;
    /**
    * 调用远程方法
    */
    callRemoteMethod(method: string, data: any, listener: RemoteListener);
}

/**
* 业务对象远程仓库
*/
export interface IBORemoteRepository extends IBORepository, IRemoteRepository {

}
/**
* 数据转换者
*/
export interface IDataConverter {
    /**
    * 转换查询为远程数据
    * @param criteria 查询
    * @returns 符合远程数据的字符串
    */
    convert(criteria: ICriteria): string;
    /**
    * 转换业务对象为远程数据
    * @param bo 业务对象
    * @returns 符合远程数据的字符串
    */
    convert(bo: IBusinessObject): string;
    /**
    * 解析远程数据
    * @param datas 远程数据
    * @returns 操作结果数据
    */
    parsing(...datas: any[]): IOperationResult<any>;
}
