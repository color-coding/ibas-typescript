/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../common/Data.ts" />
/// <reference path="../common/I18N.ts" />
/// <reference path="../common/Configuration.ts" />
/// <reference path="./BORepositoryCore.ts" />

namespace ibas {
    /** 模块仓库名称模板 */
    export const MODULE_REPOSITORY_NAME_TEMPLATE: string = "BORepository{0}";
    /** 配置项目-离线模式 */
    export const CONFIG_ITEM_OFFLINE_MODE: string = "offline";
    /** 配置项目-仓库离线模式 */
    export const CONFIG_ITEM_TEMPLATE_OFFLINE_MODE: string = "offline|{0}";
    /** 配置项目-远程仓库的默认地址模板 */
    export const CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS: string = "repositoryAddress|{0}";
    /** 配置项目-离线仓库的默认地址模板 */
    export const CONFIG_ITEM_TEMPLATE_OFFLINE_REPOSITORY_ADDRESS: string = "repositoryAddress|{0}Offline";
    /** 配置项目-用户口令 */
    export const CONFIG_ITEM_USER_TOKEN: string = "userToken";
    /** 配置项目-仓库用户口令 */
    export const CONFIG_ITEM_TEMPLATE_USER_TOKEN: string = "userToken|{0}";
    /**
     * 业务仓库应用
     */
    export interface IBORepositoryApplication {
        /**
         * 远程服务地址
         */
        address: string;
        /**
         * 访问口令
         */
        token: string;
        /**
         * 是否离线
         */
        offline: boolean;
    }
    /**
     * 业务仓库应用
     */
    export abstract class BORepositoryApplication implements IBORepositoryApplication {
        /**
         * 设置业务仓库信息（地址，口令，在线/离线）
         * @param boRepository 业务仓库
         * @param name 仓库配置名称
         */
        static repositoryInfo(boRepository: IBORepositoryApplication, name: string = undefined): void {
            if (strings.isEmpty(name)) {
                name = objects.nameOf(boRepository);
            }
            // 获取全局离线状态
            boRepository.offline = config.get(CONFIG_ITEM_OFFLINE_MODE, false);
            // 获取此仓库离线状态
            boRepository.offline = config.get(strings.format(CONFIG_ITEM_TEMPLATE_OFFLINE_MODE, name), boRepository.offline);
            // 获取远程仓库的默认地址
            let address: string;
            if (boRepository.offline) {
                // 离线状态，获取离线地址
                address = config.get(strings.format(CONFIG_ITEM_TEMPLATE_OFFLINE_REPOSITORY_ADDRESS, name));
            }
            // 没获取到离线地址，则在线地址
            if (strings.isEmpty(address)) {
                // 在线状态
                address = config.get(strings.format(CONFIG_ITEM_TEMPLATE_REMOTE_REPOSITORY_ADDRESS, name));
            }
            if (!strings.isEmpty(address)) {
                address = urls.normalize(address);
                boRepository.address = address;
                logger.log(emMessageLevel.DEBUG, "repository: [{0}] using address [{1}].", name, address);
            }
            // 用户口令，先获取仓库口令
            boRepository.token = config.get(strings.format(CONFIG_ITEM_TEMPLATE_USER_TOKEN, name));
            // 没有仓库口令，则使用全局口令
            if (strings.isEmpty(boRepository.token)) {
                boRepository.token = config.get(CONFIG_ITEM_USER_TOKEN);
            }
        }
        /** 构造 */
        constructor() {
            // 获取仓库信息
            BORepositoryApplication.repositoryInfo(this);
        }
        /** 远程地址 */
        address: string;
        /** 访问口令 */
        token: string;
        /** 是否离线 */
        offline: boolean;
        /** 创建读写业务仓库 */
        protected createRepository(): IBORepository {
            if (this.offline) {
                // 离线状态，使用文件仓库
                let boRepository: BOFileRepositoryAjax = new BOFileRepositoryAjax();
                boRepository.address = this.address;
                boRepository.token = this.token;
                boRepository.converter = this.createConverter();
                return boRepository;
            } else {
                // 在线状态，使用服务仓库
                let boRepository: BORepositoryAjax = new BORepositoryAjax();
                boRepository.address = this.address;
                boRepository.token = this.token;
                boRepository.converter = this.createConverter();
                return boRepository;
            }
        }
        /** 查询业务对象 */
        protected fetch<P>(boName: string, caller: IFetchCaller<P>): void {
            let boRepository: IBORepository = this.createRepository();
            if (objects.isNull(boRepository)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "boRepository"));
            }
            boRepository.fetch(boName, caller);
        }
        /** 保存业务对象 */
        protected save<P>(boName: string, caller: ISaveCaller<P>): void {
            if (this.offline) {
                throw new Error(i18n.prop("sys_operation_not_allowed_on_offline"));
            }
            let boRepository: IBORepository = this.createRepository();
            if (objects.isNull(boRepository)) {
                throw new Error(i18n.prop("sys_invalid_parameter", "boRepository"));
            }
            boRepository.save(boName, caller);
        }

        /** 创建数据转换者 */
        protected abstract createConverter(): IDataConverter;
    }


}