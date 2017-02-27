/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    object, ArrayList, IOperationResult, ICriteria
} from "../data/index";
import { IBusinessObject, IBusinessObjectList } from "./BusinessObjectCore.d";


/**
 * 查询调用监听者
 */
export interface MethodCaller {
    /** 调用者，若设置值，则为onCompleted方法的this */
    caller?: any;
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: IOperationResult<any>);
}
/**
 * 查询调用者
 */
export interface FetchCaller<P> extends MethodCaller {
    /** 查询条件 */
    criteria: ICriteria;
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: IOperationResult<P>);
}
/**
 * 保存调用者
 */
export interface SaveCaller<P> extends MethodCaller {
    /** 被保存对象 */
    beSaved: P;
    /**
     * 调用完成
     * @param opRslt 结果
     */
    onCompleted(opRslt: IOperationResult<P>);
}
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
     * @param boName 业务对象名称
     * @param caller 查询监听者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>);
    /**
     * 保存数据
     * @param boName 业务对象名称
     * @param caller 保存监听者
     */
    save<P>(boName: string, caller: SaveCaller<P>);
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
    callRemoteMethod(method: string, data: any, caller: MethodCaller);
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
     * 转换数据
     * @param data 当前类型数据
     * @returns 转换的数据
     */
    convert(data: any): string;

    /**
     * 解析数据
     * @param data 原始数据
     * @returns 当前类型数据
     */
    parsing(data: any): any;
}

/**
 * 数据转换者
 */
export interface IBOConverter {
    /**
     * 转换业务对象数据
     * @param data 当前类型数据
     * @returns 转换的数据
     */
    convert(data: IBusinessObject): Object;

    /**
     * 解析业务对象数据
     * @param data 原始数据
     * @returns 当前类型数据
     */
    parsing(data: any): IBusinessObject;
}

/**
 * 远程数据转换者
 */
export interface IRemoteDataConverter extends IDataConverter {
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
     * @param data 远程数据
     * @returns 操作结果数据
     */
    parsing(data: any): IOperationResult<any>;
}
/**
 * 文件仓库
 */
export interface IFileRemoteRepository {
}