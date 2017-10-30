/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    IBORepositoryReadonly, IBORepository, IFileRepository,
    UploadFileCaller, LoadFileCaller, FetchCaller, SaveCaller,
    IFileRepositoryUpload, IFileRepositoryDownload, DownloadFileCaller
} from "./BORepositoryCore.d";

/** 只读业务仓库 */
export abstract class BORepositoryReadonly implements IBORepositoryReadonly {
    /**
     * 访问口令
     */
    private _token: string;
    get token(): string {
        return this._token;
    }
    set token(value: string) {
        this._token = value;
    }
    /**
     * 查询数据
     * @param boName 业务对象名称
     * @param caller 查询监听者
     */
    abstract fetch<P>(boName: string, caller: FetchCaller<P>): void;

}
/** 只读业务仓库 */
export abstract class BORepository extends BORepositoryReadonly implements IBORepository {
    /**
     * 保存数据
     * @param boName 业务对象名称
     * @param caller 保存监听者
     */
    abstract save<P>(boName: string, caller: SaveCaller<P>): void;
}
/** 只读文件仓库 */
export abstract class FileRepository implements IFileRepository {
    /**
     * 加载文件
     * @param fileName 文件名称
     * @param caller 调用者
     */
    abstract loadFile(fileName: string, caller: LoadFileCaller): void;
}
/** 文件仓库-上传 */
export abstract class FileRepositoryUpload implements IFileRepositoryUpload {
    /**
     * 上传文件
     * @param method 方法地址
     * @param caller 调用者
     */
    abstract uploadFile(method: string, caller: UploadFileCaller): void;
}
/** 文件仓库-下载 */
export abstract class FileRepositoryDownload implements IFileRepositoryDownload {
    /**
     * 下载文件
     * @param method 方法地址
     * @param caller 调用者
     */
    abstract downloadFile(method: string, caller: DownloadFileCaller): void;
}