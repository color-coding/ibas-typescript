/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./DataDeclaration.ts" />

namespace shell {

    export namespace bo {
        /**
         * Shel 模块的数据转换者
         */
        export class DataConverter extends ibas.DataConverter4j {

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
                if (ibas.objects.instanceOf(data, User)) {
                    let newData: User = data;
                    let remote: bo4j.IUser = {
                        type: User.name,
                        Id: newData.id,
                        Code: newData.code,
                        Name: newData.name,
                        Super: newData.super,
                        Token: newData.token,
                        Belong: newData.belong
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, UserModule)) {
                    let newData: UserModule = data;
                    let remote: bo4j.IUserModule = {
                        type: UserModule.name,
                        Id: newData.id,
                        Name: newData.name,
                        Repository: newData.repository,
                        Address: newData.address,
                        Category: newData.category,
                        Console: newData.console,
                        Index: newData.index,
                        Authorise: ibas.enums.toString(ibas.emAuthoriseType, newData.authorise),
                        Runtime: newData.runtime
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, UserPrivilege)) {
                    let newData: UserPrivilege = data;
                    let remote: bo4j.IUserPrivilege = {
                        type: UserPrivilege.name,
                        Source: ibas.enums.toString(ibas.emPrivilegeSource, newData.source),
                        Target: newData.target,
                        Value: ibas.enums.toString(ibas.emAuthoriseType, newData.value)
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, UserQuery)) {
                    let newData: UserQuery = data;
                    let rCriteria: any = undefined;
                    if (!ibas.objects.isNull(newData.criteria)) {
                        rCriteria = this.convert(newData.criteria, null);
                    }
                    let remote: bo4j.IUserQuery = {
                        type: UserQuery.name,
                        Id: newData.id,
                        Name: newData.name,
                        Order: newData.order,
                        User: newData.user,
                        Criteria: JSON.stringify(rCriteria)
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, BOInfo)) {
                    let newData: BOInfo = data;
                    let properties: bo4j.IBOPropertyInfo[] = [];
                    for (let item of newData.properties) {
                        properties.push(this.convert(item, null));
                    }
                    let remote: bo4j.IBOInfo = {
                        type: BOInfo.name,
                        Code: newData.code,
                        Name: newData.name,
                        Type: newData.type,
                        Properties: properties
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, BOPropertyInfo)) {
                    let newData: BOPropertyInfo = data;
                    let values: bo4j.IBOPropertyValue[] = [];
                    for (let item of newData.values) {
                        values.push(this.convert(item, null));
                    }
                    let remote: bo4j.IBOPropertyInfo = {
                        type: BOPropertyInfo.name,
                        Property: newData.property,
                        Searched: newData.searched,
                        Editable: newData.editable,
                        Description: newData.description,
                        Values: values
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, BOPropertyValue)) {
                    let newData: BOPropertyValue = data;
                    let remote: bo4j.IBOPropertyValue = {
                        type: BOPropertyInfo.name,
                        Value: newData.value,
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
                if (data.type === User.name) {
                    let remote: bo4j.IUser = data;
                    let newData: User = new User();
                    newData.id = remote.Id;
                    newData.code = remote.Code;
                    newData.name = remote.Name;
                    newData.super = remote.Super;
                    newData.token = remote.Token !== undefined ? remote.Token : remote.Password;
                    newData.belong = remote.Belong;
                    return newData;
                } else if (data.type === UserModule.name) {
                    let remote: bo4j.IUserModule = data;
                    let newData: UserModule = new UserModule();
                    newData.id = remote.Id;
                    newData.name = remote.Name;
                    newData.repository = remote.Repository;
                    newData.address = remote.Address;
                    newData.category = remote.Category;
                    newData.console = remote.Console;
                    newData.index = remote.Index;
                    newData.authorise = ibas.enums.valueOf(ibas.emAuthoriseType, remote.Authorise);
                    newData.runtime = remote.Runtime;
                    return newData;
                } else if (data.type === UserPrivilege.name) {
                    let remote: bo4j.IUserPrivilege = data;
                    let newData: UserPrivilege = new UserPrivilege();
                    newData.source = ibas.enums.valueOf(ibas.emPrivilegeSource, remote.Source);
                    newData.target = remote.Target;
                    newData.value = ibas.enums.valueOf(ibas.emAuthoriseType, remote.Value);
                    return newData;
                } else if (data.type === UserQuery.name) {
                    let remote: bo4j.IUserQuery = data;
                    let newData: UserQuery = new UserQuery();
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
                } else if (data.type === BOInfo.name) {
                    let remote: bo4j.IBOInfo = data;
                    let newData: BOInfo = new BOInfo();
                    newData.code = remote.Code;
                    newData.name = remote.Name;
                    newData.type = remote.Type;
                    newData.properties = new Array<BOPropertyInfo>();
                    for (let item of remote.Properties) {
                        item.type = BOPropertyInfo.name;
                        newData.properties.push(this.parsing(item, null));
                    }
                    return newData;
                } else if (data.type === BOPropertyInfo.name) {
                    let remote: bo4j.IBOPropertyInfo = data;
                    let newData: BOPropertyInfo = new BOPropertyInfo();
                    newData.property = remote.Property;
                    newData.searched = remote.Searched;
                    newData.description = remote.Description;
                    newData.editable = remote.Editable;
                    newData.values = new Array<BOPropertyValue>();
                    for (let item of remote.Values) {
                        item.type = BOPropertyValue.name;
                        newData.values.push(this.parsing(item, null));
                    }
                    return newData;
                } else if (data.type === BOPropertyValue.name) {
                    let remote: bo4j.IBOPropertyValue = data;
                    let newData: BOPropertyValue = new BOPropertyValue();
                    newData.value = remote.Value;
                    newData.description = remote.Description;
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
        /** 模块业务对象工厂 */
        export const boFactory: ibas.BOFactory = new ibas.BOFactory();
    }
}