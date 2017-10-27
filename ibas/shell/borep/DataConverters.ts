/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/Systems";
import * as shell from "./DataDeclarations.d";

/**
 * Shel 模块的数据转换者
 */
export class DataConverter4Shell extends ibas.DataConverter4j {

    createConverter(): ibas.IBOConverter<ibas.IBusinessObject, any> {
        return null;
    }
    /**
     * 转换数据
     * @param data 当前类型数据
     * @param sign 操作标记
     * @returns 转换的数据
     */
    convert(data: any, sign: string): any {
        if (ibas.objects.instanceOf(data, bo.User)) {
            let newData: bo.User = data;
            let remote: shell.User = {
                type: bo.User.name,
                Id: newData.id,
                Code: newData.code,
                Name: newData.name,
                Super: newData.super,
                Password: newData.password,
                Belong: newData.belong
            };
            return remote;
        } else if (ibas.objects.instanceOf(data, bo.UserModule)) {
            let newData: bo.UserModule = data;
            let remote: shell.UserModule = {
                type: bo.UserModule.name,
                Id: newData.id,
                Name: newData.name,
                Repository: newData.repository,
                Address: newData.address,
                Category: newData.category,
                Index: newData.index,
                Authorise: ibas.enums.toString(ibas.emAuthoriseType, newData.authorise),
            };
            return remote;
        } else if (ibas.objects.instanceOf(data, bo.UserPrivilege)) {
            let newData: bo.UserPrivilege = data;
            let remote: shell.UserPrivilege = {
                type: bo.UserPrivilege.name,
                Source: ibas.enums.toString(ibas.emPrivilegeSource, newData.source),
                Target: newData.target,
                Value: ibas.enums.toString(ibas.emAuthoriseType, newData.value)
            };
            return remote;
        } else if (ibas.objects.instanceOf(data, bo.UserQuery)) {
            let newData: bo.UserQuery = data;
            let rCriteria: any = undefined;
            if (!ibas.objects.isNull(newData.criteria)) {
                rCriteria = this.convert(newData.criteria, null);
            }
            let remote: shell.UserQuery = {
                type: bo.UserQuery.name,
                Id: newData.id,
                Name: newData.name,
                Order: newData.order,
                User: newData.user,
                Criteria: JSON.stringify(rCriteria)
            };
            return remote;
        } else if (ibas.objects.instanceOf(data, bo.BOInfo)) {
            let newData: bo.BOInfo = data;
            let properties: shell.BOPropertyInfo[] = [];
            for (let item of newData.properties) {
                properties.push(this.convert(item, null));
            }
            let remote: shell.BOInfo = {
                type: bo.BOInfo.name,
                Code: newData.code,
                Name: newData.name,
                Type: newData.type,
                Properties: properties
            };
            return remote;
        } else if (ibas.objects.instanceOf(data, bo.BOPropertyInfo)) {
            let newData: bo.BOPropertyInfo = data;
            let remote: shell.BOPropertyInfo = {
                type: bo.BOPropertyInfo.name,
                Property: newData.property,
                Searched: newData.searched,
                Editable: newData.editable,
                Description: newData.description
            };
            return remote;
        } else {
            return super.convert(data, sign);
        }
    }
    /**
     * 解析数据
     * @param data 原始数据
     * @param sign 操作标记
     * @returns 当前类型数据
     */
    parsing(data: any, sign: string): any {
        if (data.type === bo.User.name) {
            let remote: shell.User = data;
            let newData: bo.User = new bo.User();
            newData.id = remote.Id;
            newData.code = remote.Code;
            newData.name = remote.Name;
            newData.super = remote.Super;
            newData.password = remote.Password;
            newData.belong = remote.Belong;
            return newData;
        } else if (data.type === bo.UserModule.name) {
            let remote: shell.UserModule = data;
            let newData: bo.UserModule = new bo.UserModule();
            newData.id = remote.Id;
            newData.name = remote.Name;
            newData.repository = remote.Repository;
            newData.address = remote.Address;
            newData.category = remote.Category;
            newData.index = remote.Index;
            newData.authorise = ibas.enums.valueOf(ibas.emAuthoriseType, remote.Authorise);
            return newData;
        } else if (data.type === bo.UserPrivilege.name) {
            let remote: shell.UserPrivilege = data;
            let newData: bo.UserPrivilege = new bo.UserPrivilege();
            newData.source = ibas.enums.valueOf(ibas.emPrivilegeSource, remote.Source);
            newData.target = remote.Target;
            newData.value = ibas.enums.valueOf(ibas.emAuthoriseType, remote.Value);
            return newData;
        } else if (data.type === bo.UserQuery.name) {
            let remote: shell.UserQuery = data;
            let newData: bo.UserQuery = new bo.UserQuery();
            newData.id = remote.Id;
            newData.name = remote.Name;
            newData.order = remote.Order;
            if (!ibas.objects.isNull(remote.Criteria) || remote.Criteria.length > 0) {
                let jCriteria: any = JSON.parse(remote.Criteria);
                if (!ibas.objects.isNull(jCriteria)) {
                    jCriteria.type = ibas.Criteria.name;
                    newData.criteria = this.parsing(jCriteria, null);
                }
            }
            return newData;
        } else if (data.type === bo.BOInfo.name) {
            let remote: shell.BOInfo = data;
            let newData: bo.BOInfo = new bo.BOInfo();
            newData.code = remote.Code;
            newData.name = remote.Name;
            newData.type = remote.Type;
            newData.properties = new Array<bo.BOPropertyInfo>();
            for (let item of remote.Properties) {
                item.type = bo.BOPropertyInfo.name;
                newData.properties.push(this.parsing(item, null));
            }
            return newData;
        } else if (data.type === bo.BOPropertyInfo.name) {
            let remote: shell.BOPropertyInfo = data;
            let newData: bo.BOPropertyInfo = new bo.BOPropertyInfo();
            newData.property = remote.Property;
            newData.searched = remote.Searched;
            newData.description = remote.Description;
            newData.editable = remote.Editable;
            return newData;
        } else if (sign === "saveUserQuery") {
            // 此方法返回值，没有标记类型
            data.type = ibas.OperationMessage.name;
            return super.parsing(data, sign);
        } else {
            return super.parsing(data, sign);
        }
    }
}