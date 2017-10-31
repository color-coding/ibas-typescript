/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    objects, ArrayList, IOperationResult, ICriteria, ICondition
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
    criteria: ICriteria | ICondition[];
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
 * 业务对象仓库，只读
 */
export interface IBORepositoryReadonly {
    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询监听者
     */
    fetch<P>(boName: string, caller: FetchCaller<P>);
}
/**
 * 业务对象仓库
 */
export interface IBORepository extends IBORepositoryReadonly {
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
     * 访问口令
     */
    token: string;
    /**
     * 数据转换者
     */
    converter: IDataConverter
    /**
     * 调用远程方法
     * @param method 方法地址
     * @param data 数据
     * @param caller 调用者
     */
    callRemoteMethod(method: string, data: any, caller: MethodCaller): void;
}
/**
 * 加载文件调用者
 */
export interface LoadFileCaller extends MethodCaller {
    /** 协议类型 */
    contentType?: string;
    /** 数据类型 */
    dataType?: string;
}
/**
 * 文件仓库
 */
export interface IFileRepository {
    /**
     * 加载文件
     * @param fileName 文件名称
     * @param caller 调用者
     */
    load(fileName: string, caller: LoadFileCaller);
}
/**
 * 上传文件调用者
 */
export interface UploadFileCaller extends MethodCaller {
    /** 文件上传数据 */
    fileData: FormData;
}
/**
 * 文件上传仓库
 */
export interface IFileRepositoryUpload {
    /**
     * 上传文件
     * @param method 方法地址
     * @param caller 调用者
     */
    upload(method: string, caller: UploadFileCaller);
}
/**
 * 下载文件调用者
 */
export interface DownloadFileCaller extends MethodCaller {
    /** 下载条件 */
    criteria: ICriteria;
}
/**
 * 文件上传仓库
 */
export interface IFileRepositoryDownload {
    /**
     * 上传文件
     * @param method 方法地址
     * @param caller 调用者
     */
    download(method: string, caller: DownloadFileCaller);
}
/**
 * 数据转换者
 */
export interface IDataConverter {
    /**
     * 转换业务对象数据
     * @param data 本地类型
     * @param sign 特殊标记
     * @returns 目标类型
     */
    convert(data: any, sign: string): any;
    /**
     * 解析业务对象数据
     * @param data 目标类型
     * @param sign 特殊标记
     * @returns 本地类型
     */
    parsing(data: any, sign: string): any;
}
/**
 * 数据转换者
 * 泛型1，本地类型
 * 泛型2，目标类型
 */
export interface IBOConverter<L, T> {
    /**
     * 转换业务对象数据
     * @param data 本地类型
     * @returns 目标类型
     */
    convert(data: L): T;
    /**
     * 解析业务对象数据
     * @param data 目标类型
     * @returns 本地类型
     */
    parsing(data: T): L;

}