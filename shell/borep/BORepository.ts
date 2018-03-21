﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../ibas/3rdparty/crypto-js.d.ts" />

namespace shell {
    export namespace bo {
        /** 创建业务仓库 */
        export function createRepository(): IBORepositoryShell {
            if (ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false)) {
                return new BORepositoryShellOffline();
            } else {
                return new BORepositoryShell();
            }
        }
        /**
         * 业务仓库-壳-远程
         */
        class BORepositoryShell extends ibas.BORepositoryApplication implements IBORepositoryShell {
            /**
             * 创建此模块的后端与前端数据的转换者
             */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter();
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
             * 用户密码登录
             * @param caller 用户密码登录调用者
             */
            userConnect(caller: IUserConnectCaller): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                // 使用此模块库加载器
                let require: Require = ibas.requires.create({
                    context: shell.CONSOLE_NAME,
                });
                let minLibrary: boolean = ibas.config.get(ibas.CONFIG_ITEM_USE_MINIMUM_LIBRARY, false);
                require(["../ibas/3rdparty/crypto-js" + (minLibrary ? ibas.SIGN_MIN_LIBRARY : "")],
                    function (cryptoJS: CryptoJS.Hashes): void {
                        let method: string =
                            ibas.strings.format("userConnect?user={0}&password={1}", caller.user, cryptoJS.MD5(caller.password));
                        remoteRepository.callRemoteMethod(method, undefined, caller);
                    }, function (error: RequireError): void {
                        // 加载js库失败
                        let opRslt: ibas.IOperationResult<any> = new ibas.OperationResult();
                        opRslt.resultCode = -901;
                        opRslt.message = error.message;
                        caller.onCompleted(opRslt);
                    });
            }
            /**
             * 用户口令登录
             * @param caller 用户口令登录调用者
             */
            tokenConnect(caller: ITokenConnectCaller): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string = ibas.strings.format("tokenConnect?token={0}", caller.token);
                remoteRepository.callRemoteMethod(method, undefined, caller);
            }

            /**
             * 查询用户模块
             * @param caller 用户检索调用者
             */
            fetchUserModules(caller: IUserMethodCaller<IUserModule>): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchUserModules?user={0}&platform={1}&token={2}",
                        caller.user, caller.platform, this.token);
                remoteRepository.callRemoteMethod(method, undefined, caller);
            }

            /**
             * 查询用户角色权限
             * @param caller 用户检索调用者
             */
            fetchUserPrivileges(caller: IUserMethodCaller<IUserPrivilege>): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchUserPrivileges?user={0}&platform={1}&token={2}",
                        caller.user, caller.platform, this.token);
                remoteRepository.callRemoteMethod(method, undefined, caller);
            }

            /**
             * 查询用户查询
             * @param caller 调用者
             */
            fetchUserQueries(caller: IUserQueriesCaller): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchUserQueries?user={0}&queryId={1}&token={2}",
                        caller.user, caller.queryId, this.token);
                remoteRepository.callRemoteMethod(method, undefined, caller);
            }

            /**
             * 保存用户查询
             * @param caller 调用者
             */
            saveUserQuery(caller: ibas.ISaveCaller<IUserQuery>): void {
                this.save("UserQuery", caller);
            }

            /**
             * 业务对象信息查询
             * @param caller 调用者
             */
            fetchBOInfos(caller: IBOInfoCaller): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchBOInfos?boName={0}&token={1}",
                        caller.boName, this.token);
                remoteRepository.callRemoteMethod(method, undefined, caller);
            }
        }
        /**
         * 业务仓库应用
         */
        class BORepositoryShellOffline extends BORepositoryShell {
            constructor() {
                super();
                // 重新获取离线状态
                let name: string = super.constructor.name;
                // 获取此仓库离线状态
                this.offline = ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE + "|" + name, this.offline);
            }
            /**
             * 创建此模块的后端与前端数据的转换者
             */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter();
            }

            /**
             * 用户登录
             * @param caller 登录者
             */
            userConnect(caller: IUserConnectCaller): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "code";
                condition.value = caller.user;
                condition = criteria.conditions.create();
                condition.alias = "token";
                condition.value = caller.password;

                let fetchCaller: ibas.IFetchCaller<User> = {
                    criteria: criteria,
                    onCompleted(opRsltFetch: ibas.IOperationResult<User>): void {
                        let user: User = opRsltFetch.resultObjects.firstOrDefault();
                        let opRslt: ibas.IOperationResult<any> = new ibas.OperationResult();
                        if (ibas.objects.isNull(user)) {
                            opRslt.resultCode = -1;
                            opRslt.message = ibas.i18n.prop("shell_user_and_password_not_match");
                        } else {
                            opRslt.resultCode = 0;
                            opRslt.userSign = ibas.uuids.random();
                            opRslt.resultObjects.add(user);
                        }
                        caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    }
                };
                this.fetch("User", fetchCaller);
            }
            /**
             * 用户口令登录
             * @param caller 用户口令登录者
             */
            tokenConnect(caller: ITokenConnectCaller): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "token";
                condition.value = caller.token;

                let fetchCaller: ibas.IFetchCaller<User> = {
                    criteria: criteria,
                    onCompleted(opRsltFetch: ibas.IOperationResult<User>): void {
                        let user: User = opRsltFetch.resultObjects.firstOrDefault();
                        let opRslt: ibas.IOperationResult<any> = new ibas.OperationResult();
                        if (ibas.objects.isNull(user)) {
                            opRslt.resultCode = -1;
                            opRslt.message = ibas.i18n.prop("shell_user_and_password_not_match");
                        } else {
                            opRslt.resultCode = 0;
                            opRslt.userSign = ibas.uuids.random();
                            opRslt.resultObjects.add(user);
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
            fetchUserModules(caller: IUserMethodCaller<IUserModule>): void {
                let fetchCaller: ibas.IFetchCaller<UserModule> = {
                    criteria: null,
                    onCompleted(opRslt: ibas.IOperationResult<UserModule>): void {
                        caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    }
                };
                this.fetch("UserModule", fetchCaller);
            }

            /**
             * 查询用户角色权限
             * @param caller 用户检索者
             */
            fetchUserPrivileges(caller: IUserMethodCaller<IUserPrivilege>): void {
                let fetchCaller: ibas.IFetchCaller<UserPrivilege> = {
                    criteria: null,
                    onCompleted(opRslt: ibas.IOperationResult<UserPrivilege>): void {
                        caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    }
                };
                this.fetch("UserPrivilege", fetchCaller);
            }
            /**
             * 查询用户查询
             * @param caller 调用者
             */
            fetchUserQueries(caller: IUserQueriesCaller): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "id";
                condition.value = caller.queryId;

                let fetchCaller: ibas.IFetchCaller<UserQuery> = {
                    criteria: criteria,
                    onCompleted: caller.onCompleted,
                };
                this.fetch("UserQuery", fetchCaller);
            }
            /**
             * 业务对象信息查询
             * @param caller 调用者
             */
            fetchBOInfos(caller: IBOInfoCaller): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                if (!ibas.strings.isEmpty(caller.boCode)) {
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "code";
                    condition.value = caller.boCode;
                } else if (!ibas.strings.isEmpty(caller.boName)) {
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "code";
                    condition.value = caller.boName;
                }
                if (criteria.conditions.length === 0) {
                    // 无效的参数
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "boCode"));
                }
                let fetchCaller: ibas.IFetchCaller<BOInfo> = {
                    criteria: criteria,
                    onCompleted: caller.onCompleted,
                };
                this.fetch("BOInfo", fetchCaller);
            }
        }

        // 注册业务对象仓库到工厂
        if (!ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false)) {
            boFactory.register(ibas.BO_REPOSITORY_CONNECT, BORepositoryShell);
        } else {
            boFactory.register(ibas.BO_REPOSITORY_CONNECT, BORepositoryShellOffline);
        }

    }
}
