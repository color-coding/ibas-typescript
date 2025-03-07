﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace shell {
    export namespace bo {
        export namespace repository {
            /** 创建业务仓库 */
            export function create(): IBORepositoryShell {
                if (ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false)) {
                    return new BORepositoryShellOffline();
                } else {
                    return new BORepositoryShell();
                }
            }
        }
        /** 配置项目-连接方式 */
        export const CONFIG_ITEM_CONNECTION_WAY: string = "connectionWay";
        /** 连接方式-用户密码 */
        export const CONNECTION_WAY_USER_PASSWORD: string = "USER_PASSWORD";
        /** 连接方式-用户口令 */
        export const CONNECTION_WAY_USER_TOKEN: string = "USER_TOKEN";

        class ConnectRemoteRepositoryAjax extends ibas.RemoteRepositoryAjax {
            protected createHttpRequest(method: string): XMLHttpRequest {
                let methodUrl: string = this.methodUrl(method);
                let xhr: XMLHttpRequest = new XMLHttpRequest();
                xhr.open("POST", methodUrl, true);
                xhr.responseType = "json";
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                // token为头认证形式
                if (ibas.strings.isWith(this.token, ibas.HTTP_HEADER_TOKEN_AUTHORIZATION, undefined)) {
                    // xhr.withCredentials = true;
                    xhr.setRequestHeader("Authorization", this.token.substring(ibas.HTTP_HEADER_TOKEN_AUTHORIZATION.length));
                }
                return xhr;
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
                let builder: ibas.StringBuilder = new ibas.StringBuilder();
                builder.map(undefined, "");
                builder.map(null, "");
                builder.append("user");
                builder.append("=");
                builder.append(caller.user);
                builder.append("&");
                builder.append("password");
                builder.append("=");
                builder.append(btoa(encodeURIComponent(caller.password)));
                if (!ibas.strings.isEmpty(caller.verification)) {
                    builder.append("&");
                    builder.append("verification");
                    builder.append("=");
                    builder.append(btoa(encodeURIComponent(caller.verification)));
                }
                let remoteRepository: ibas.IRemoteRepository = new ConnectRemoteRepositoryAjax();
                remoteRepository.address = this.address;
                remoteRepository.converter = this.createConverter();
                remoteRepository.callRemoteMethod("userConnect", builder.toString(), (opRslt) => {
                    if (opRslt.resultCode === 0) {
                        ibas.config.set(CONFIG_ITEM_CONNECTION_WAY, CONNECTION_WAY_USER_PASSWORD);
                    }
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
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
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    if (opRslt.resultCode === 0) {
                        ibas.config.set(CONFIG_ITEM_CONNECTION_WAY, CONNECTION_WAY_USER_TOKEN);
                    }
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
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
                        caller.user, caller.platform, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
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
                        caller.user, caller.platform, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
            }
            /**
             * 查询用户角色配置
             * @param caller 用户检索调用者
             */
            fetchUserConfigs(caller: IUserMethodCaller<IUserConfig>): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchUserConfigs?user={0}&platform={1}&token={2}",
                        caller.user, caller.platform, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
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
                        caller.user, caller.queryId, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
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
            fetchBizObjectInfo(caller: IBizObjectInfoCaller): void {
                if (ibas.objects.isNull(caller.boCode)) {
                    // 没有查询条件，直接返回
                    caller.onCompleted(new ibas.OperationResult<IBizObjectInfo>());
                    return;
                }
                if (!caller.noCached) {
                    // 优先使用缓存数据
                    let data: DataWrapping = boInfoCache.get(caller.boCode);
                    if (data instanceof DataWrapping) {
                        if (data.data === EMPTY_BOINFO) {
                            // 代理数据，则稍后重试
                            setTimeout(() => this.fetchBizObjectInfo(caller), WAITING_TIME);
                        } else if (!data.check()) {
                            // 数据无效，则直接重试
                            caller.noCached = true;
                            this.fetchBizObjectInfo(caller);
                        } else {
                            let opRsltInfo: ibas.OperationResult<any> = new ibas.OperationResult<IBizObjectInfo>();
                            if (ibas.strings.isEmpty(caller.boName)) {
                                // 不要求名称，则直接返回
                                opRsltInfo.addResults(data.data);
                            } else {
                                // 要求名称，则全局查询
                                for (let item of boInfoCache.values()) {
                                    if (!(ibas.strings.equals(item.data.code, caller.boCode)
                                        || ibas.strings.isWith(item.data.code, caller.boCode + ".", null))) {
                                        continue;
                                    }
                                    if (!ibas.strings.equals(item.data.name, caller.boName)) {
                                        continue;
                                    }
                                    opRsltInfo.addResults(item.data);
                                }
                            }
                            caller.onCompleted(opRsltInfo);
                        } return;
                    } else {
                        // 创建代理数据，减少方法请求次数
                        boInfoCache.set(caller.boCode, new DataWrapping(EMPTY_BOINFO));
                    }
                }
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string = ibas.strings.format("fetchBizObjectInfo?user={0}&boCode={1}&token={2}", caller.user, caller.boCode, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt: ibas.IOperationResult<IBizObjectInfo>) => {
                    if (opRslt.resultCode === 0) {
                        let opRsltInfo: ibas.OperationResult<any> = new ibas.OperationResult<IBizObjectInfo>();
                        for (let item of opRslt.resultObjects) {
                            boInfoCache.set(item.code, new DataWrapping(item));
                            if (!ibas.strings.isEmpty(caller.boName)) {
                                if (!(ibas.strings.equals(item.code, caller.boCode)
                                    || ibas.strings.isWith(item.code, caller.boCode + ".", null))) {
                                    continue;
                                }
                                if (!ibas.strings.equals(item.name, caller.boName)) {
                                    continue;
                                }
                            } else {
                                if (!ibas.strings.equals(item.code, caller.boCode)) {
                                    continue;
                                }
                            }
                            opRsltInfo.addResults(item);
                        }
                        caller.onCompleted(opRsltInfo);
                    } else {
                        // 出错了
                        caller.onCompleted(opRslt);
                    }
                });
            }
            /**
             * 查询用户功能
             * @param caller 用户检索调用者
             */
            fetchUserFunctions(caller: IUserMethodCaller<IUserFunction>): void {
                let remoteRepository: ibas.IRemoteRepository = this.createRemoteRepository();
                if (ibas.objects.isNull(remoteRepository)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "remoteRepository"));
                }
                let method: string =
                    ibas.strings.format("fetchUserFunctions?user={0}&token={1}",
                        caller.user, ibas.tokens.content(this.token));
                remoteRepository.callRemoteMethod(method, undefined, (opRslt) => {
                    caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                });
            }
        }
        /** 空数据 */
        const EMPTY_BOINFO: IBizObjectInfo = {
            name: "__EMPTY__",
            code: "__EMPTY__",
            type: "__EMPTY__",
            properties: [],
        };
        /** 过期时间 */
        const EXPIRED_TIME: number = 900000;
        /** 等待时间 */
        const WAITING_TIME: number = 30;
        /** 业务对象信息缓存 */
        const boInfoCache: Map<string, DataWrapping> = new Map<string, DataWrapping>();
        /** 数据容器 */
        class DataWrapping {
            constructor(data: IBizObjectInfo) {
                this.data = data;
                if (this.data === null || this.data === EMPTY_BOINFO) {
                    this.time = (WAITING_TIME * 3) + ibas.dates.now().getTime();
                } else {
                    this.time = EXPIRED_TIME + ibas.dates.now().getTime();
                }
            }
            /** 时间 */
            time: number;
            /** 数据 */
            data: IBizObjectInfo;
            /** 检查数据是否有效 */
            check(): boolean {
                if (ibas.objects.isNull(this.data)) {
                    return false;
                }
                if (this.time < ibas.dates.now().getTime()) {
                    return false;
                }
                return true;
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
            fetchBizObjectInfo(caller: IBizObjectInfoCaller): void {
                let criteria: ibas.ICriteria = new ibas.Criteria();
                if (!ibas.strings.isEmpty(caller.boCode)) {
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = "code";
                    condition.value = caller.boCode;
                }
                if (criteria.conditions.length === 0) {
                    // 无效的参数
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "boCode"));
                }
                this.fetch("BizObjectInfo", {
                    criteria: criteria,
                    onCompleted: caller.onCompleted,
                });
            }
            /**
             * 查询用户角色配置
             * @param caller 用户检索调用者
             */
            fetchUserConfigs(caller: IUserMethodCaller<IUserConfig>): void {
                let fetchCaller: ibas.IFetchCaller<UserPrivilege> = {
                    criteria: null,
                    onCompleted(opRslt: ibas.IOperationResult<UserPrivilege>): void {
                        caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    }
                };
                this.fetch("UserConfig", fetchCaller);
            }
            /**
             * 查询用户功能
             * @param caller 用户检索调用者
             */
            fetchUserFunctions(caller: IUserMethodCaller<IUserFunction>): void {
                let fetchCaller: ibas.IFetchCaller<IUserFunction> = {
                    criteria: null,
                    onCompleted(opRslt: ibas.IOperationResult<UserFunction>): void {
                        caller.onCompleted.call(ibas.objects.isNull(caller.caller) ? caller : caller.caller, opRslt);
                    }
                };
                this.fetch("UserFunction", fetchCaller);
            }
        }

        // 注册业务对象仓库到工厂
        if (!ibas.config.get(ibas.CONFIG_ITEM_OFFLINE_MODE, false)) {
            boFactory.register(BO_REPOSITORY_CONNECT, BORepositoryShell);
            boFactory.register(BO_REPOSITORY_SHELL, BORepositoryShell);
        } else {
            boFactory.register(BO_REPOSITORY_CONNECT, BORepositoryShellOffline);
            boFactory.register(BO_REPOSITORY_SHELL, BORepositoryShellOffline);
        }

    }
}
