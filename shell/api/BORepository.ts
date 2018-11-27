/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace bo {
        /**
         * 登录调用者
         */
        export interface IConnectCaller extends ibas.IMethodCaller<IUser> {
        }
        /**
         * 用户密码登录调用者
         */
        export interface IUserConnectCaller extends IConnectCaller {
            /** 用户 */
            user: string;
            /** 密码 */
            password: string;
        }
        /**
         * 用户口令登录调用者
         */
        export interface ITokenConnectCaller extends IConnectCaller {
            /** 口令 */
            token: string;
        }
        /**
         * 用户相关调用者
         */
        export interface IUserMethodCaller<P> extends ibas.IMethodCaller<P> {
            /** 用户 */
            user: string;
            /** 平台 */
            platform?: string;
        }
        /**
         * 用户查询调用者
         */
        export interface IUserQueriesCaller extends IUserMethodCaller<IUserQuery> {
            /** 查询标识 */
            queryId: string;
        }
        /**
         * 业务对象信息调用者
         */
        export interface IBOInfoCaller extends ibas.IMethodCaller<IBOInfo> {
            /** 业务对象编码（主） */
            boCode: string;
            /** 对象名称（主或子项） */
            boName?: string;
            /** 不使用缓存 */
            noCached?: boolean;
            /**
             * 调用完成
             * @param opRslt
             */
            onCompleted(opRslt: ibas.IOperationResult<IBOInfo>): void;
        }
        /** 登录仓库 */
        export interface IBORepositoryConnect {
            /**
             * 远程服务地址
             */
            address: string;
            /**
             * 用户密码登录
             * @param caller 调用者
             */
            userConnect(caller: IUserConnectCaller): void;
            /**
             * 用户口令登录
             * @param caller 调用者
             */
            tokenConnect(caller: ITokenConnectCaller): void;
        }
        /** 系统仓库 */
        export interface IBORepositoryShell extends IBORepositoryConnect {

            /**
             * 查询用户模块
             * @param caller 调用者
             */
            fetchUserModules(caller: IUserMethodCaller<IUserModule>): void;

            /**
             * 查询用户权限
             * @param caller 调用者
             */
            fetchUserPrivileges(caller: IUserMethodCaller<IUserPrivilege>): void;

            /**
             * 查询用户查询
             * @param caller 调用者
             */
            fetchUserQueries(caller: IUserQueriesCaller): void;

            /**
             * 保存用户查询
             * 当被保存的查询没有条件时则认为是删除
             * @param caller 调用者
             */
            saveUserQuery(caller: ibas.ISaveCaller<IUserQuery>): void;

            /**
             * 业务对象信息查询
             * @param caller 调用者
             */
            fetchBOInfos(caller: IBOInfoCaller): void;
        }
    }
}