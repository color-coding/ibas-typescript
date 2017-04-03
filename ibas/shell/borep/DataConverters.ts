/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "../../index";
import * as bo from "./bo/Systems";

/**
 * Shel 模块的数据转换者
 */
export class DataConverter4Shell extends ibas.DataConverter4ibas {
    /**
     * 创建业务对象转换者
     */
    protected createBOConverter(): ibas.BOConverter {
        return new ShellBOConverter();
    }
}
/**
 * Shell 模块的业务对象转换者
 */
export class ShellBOConverter extends ibas.BOConverter {

    constructor() {
        super();
        this.init();
    }

    private init() {
        // 注册业务对象映射

        // 注册枚举映射

    }

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): ibas.IBusinessObject {
        return data;
    }

    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected convertData(boName: string, property: string, value
        : any): any {

        // 不做处理，原始返回
        return value;
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value
        : any): any {
        if (typeof value === "string") {
            // 日期类型，直接转换
            if (value.indexOf("T") > 0 && value.indexOf("-") > 0 && value.indexOf(":") > 0) {
                // 字符格式为日期，yyyy-MM-ddThh:mm:ss
                return this.parsingDate(value);
            }


        }
        // 不做处理，原始返回
        return value;
    }
}
/**
 * 离线的数据转换者
 */
export class DataConverter4Offline extends ibas.DataConverter {
    /**
     * 转换数据
     * @param data 当前类型数据
     * @param sign 操作标记
     * @returns 转换的数据
     */
    convert(data: any, sign: string): string {
        return data;
    }
    /**
     * 解析数据
     * @param data 原始数据
     * @param sign 操作标记
     * @returns 当前类型数据
     */
    parsing(data: any, sign: string): any {
        if (sign === "users.json") {
            let user: bo.User = new bo.User();
            user.id = data.id;
            user.code = data.user;
            user.name = data.name;
            user.password = data.password;
            user.super = data.super;
            return user;
        } else if (sign === "usermodules.json") {
            let module = new bo.UserModule();
            module.id = data.id;
            module.name = data.name;
            module.index = data.index;
            module.category = data.category;
            module.address = data.address;
            return module;
        } else if (sign === "userprivileges.json") {
            let privilege = new bo.UserPrivilege();
            privilege.source = ibas.enums.valueOf(ibas.emPrivilegeSource, data.source);
            privilege.target = data.target;
            privilege.value = ibas.enums.valueOf(ibas.emAuthoriseType, data.value);
            return privilege;
        } else if (sign === "userqueries.json") {
            let query = new bo.UserQuery();
            query.id = data.id;
            query.name = data.name;
            query.order = data.order;
            query.criteria = new ibas.Criteria();// 此处没有处理转换
            return query;
        } else if (sign === "boinfos.json") {
            let boInfo = new bo.BOInfo();
            boInfo.code = data.code;
            boInfo.name = data.name;
            boInfo.type = data.type;
            boInfo.properties = new Array();
            for (let pItem of data.properties) {
                let propertyInfo = new bo.BOPropertyInfo();
                propertyInfo.property = pItem.property;
                propertyInfo.description = pItem.description;
                propertyInfo.searched = pItem.searched;
                boInfo.properties.push(propertyInfo);
            }
            return boInfo;
        }
        return data;
    }
}