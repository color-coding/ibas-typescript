/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/Systems";

/**
 * Shel 模块的数据转换者
 */
export class DataConverter4Shell implements ibas.IDataConverter {
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
        if (data.type === ibas.OperationResult.name) {
            let opRslt: ibas.IOperationResult<any> = new ibas.OperationResult();
            opRslt.signID = data.SignID;
            opRslt.time = ibas.dates.valueOf(data.Time);
            opRslt.userSign = data.UserSign;
            opRslt.resultCode = data.ResultCode;
            opRslt.message = data.Message;
            for (let item of data.ResultObjects) {
                opRslt.resultObjects.add(this.parsing(item, null));
            }
            for (let item of data.Informations) {
                let info: ibas.OperationInformation = new ibas.OperationInformation();
                info.name = item.Name;
                info.tag = item.Tag;
                info.contents = item.Contents;
                opRslt.informations.add(info);
            }
            return opRslt;
        } else if (data.type === bo.User.name) {
            let user: bo.User = new bo.User();
            user.id = data.Id;
            user.code = data.Code;
            user.name = data.Name;
            user.super = data.super;
            return user;
        } else if (data.type === bo.UserModule.name) {
            let userModule: bo.UserModule = new bo.UserModule();
            userModule.id = data.Id;
            userModule.name = data.Name;
            userModule.repository = data.Repository;
            userModule.address = data.Address;
            userModule.category = data.Category;
            return userModule;
        } else if (data.type === bo.UserPrivilege.name) {
            let userPrivilege: bo.UserPrivilege = new bo.UserPrivilege();
            userPrivilege.source = data.Source;
            userPrivilege.target = data.Target;
            userPrivilege.value = data.Value;
            return userPrivilege;
        } else if (data.type === bo.UserQuery.name) {
            let userQuery: bo.UserQuery = new bo.UserQuery();
            userQuery.id = data.Id;
            userQuery.name = data.Name;
            userQuery.criteria = null;
            return userQuery;
        } else if (data.type === bo.BOInfo.name) {
            let boInfo: bo.BOInfo = new bo.BOInfo();
            boInfo.code = data.code;
            boInfo.name = data.Name;
            boInfo.type = data.Type;
            for (let item of data.Properties) {
                boInfo.properties.push(this.parsing(item, null));
            }
            return boInfo;
        } else if (data.type === bo.BOPropertyInfo.name) {
            let propertyInfo: bo.BOPropertyInfo = new bo.BOPropertyInfo();
            propertyInfo.property = data.Property;
            propertyInfo.searched = data.Searched;
            propertyInfo.description = data.Description;
            return propertyInfo;
        } else {
            throw new Error(ibas.i18n.prop("msg_invaild_mapping_type", data.type));
        }
    }
}
/**
 * 离线的数据转换者
 */
export class DataConverter4Offline implements ibas.IDataConverter {
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
            let module: bo.UserModule = new bo.UserModule();
            module.id = data.id;
            module.name = data.name;
            module.index = data.index;
            module.category = data.category;
            module.address = data.address;
            module.repository = data.repository;
            return module;
        } else if (sign === "userprivileges.json") {
            let privilege: bo.UserPrivilege = new bo.UserPrivilege();
            privilege.source = ibas.enums.valueOf(ibas.emPrivilegeSource, data.source);
            privilege.target = data.target;
            privilege.value = ibas.enums.valueOf(ibas.emAuthoriseType, data.value);
            return privilege;
        } else if (sign === "userqueries.json") {
            let query: bo.UserQuery = new bo.UserQuery();
            query.id = data.id;
            query.name = data.name;
            query.order = data.order;
            query.criteria = new ibas.Criteria();// 此处没有处理转换
            return query;
        } else if (sign === "boinfos.json") {
            let boInfo: bo.BOInfo = new bo.BOInfo();
            boInfo.code = data.code;
            boInfo.name = data.name;
            boInfo.type = data.type;
            boInfo.properties = new Array();
            for (let pItem of data.properties) {
                let propertyInfo: bo.BOPropertyInfo = new bo.BOPropertyInfo();
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