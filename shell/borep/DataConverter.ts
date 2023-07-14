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
                        Belong: newData.belong,
                        Identities: ibas.strings.valueOf(newData.identities)
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
                        Value: ibas.enums.toString(ibas.emAuthoriseType, newData.value),
                        Automatic: newData.automatic === true ? "YES" : "NO"
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, UserConfig)) {
                    let newData: UserConfig = data;
                    let remote: bo4j.IUserConfig = {
                        type: UserConfig.name,
                        Group: newData.group,
                        Key: newData.key,
                        Value: newData.value
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
                } else if (ibas.objects.instanceOf(data, BizObjectInfo)) {
                    let newData: BizObjectInfo = data;
                    let properties: bo4j.IBizPropertyInfo[] = [];
                    for (let item of newData.properties) {
                        properties.push(this.convert(item, null));
                    }
                    let remote: bo4j.IBizObjectInfo = {
                        type: BizObjectInfo.name,
                        Code: newData.code,
                        Name: newData.name,
                        Type: newData.type,
                        Properties: properties
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, BizPropertyInfo)) {
                    let newData: BizPropertyInfo = data;
                    let values: bo4j.IBizPropertyValue[] = [];
                    for (let item of newData.values) {
                        values.push(this.convert(item, null));
                    }
                    let remote: bo4j.IBizPropertyInfo = {
                        type: BizPropertyInfo.name,
                        Name: newData.name,
                        Alias: newData.alias,
                        Position: newData.position,
                        DataType: newData.dataType,
                        EditType: newData.editType,
                        EditSize: newData.editSize,
                        Searched: newData.searched,
                        Systemed: newData.systemed,
                        Description: newData.description,
                        Required: newData.required,
                        Authorised: newData.authorised ? ibas.enums.toString(ibas.emAuthoriseType, newData.authorised) : undefined,
                        LinkedObject: newData.linkedObject,
                        Values: values
                    };
                    return remote;
                } else if (ibas.objects.instanceOf(data, BizPropertyValue)) {
                    let newData: BizPropertyValue = data;
                    let remote: bo4j.IBizPropertyValue = {
                        type: BizPropertyValue.name,
                        Value: newData.value,
                        Description: newData.description,
                        Default: newData.default,
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
                    newData.identities = new ibas.ArrayList<string>();
                    if (!ibas.strings.isEmpty(remote.Identities)) {
                        for (let item of remote.Identities.split(ibas.DATA_SEPARATOR)) {
                            if (newData.identities.contain(item)) {
                                continue;
                            }
                            newData.identities.add(item);
                        }
                    }
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
                    newData.automatic = remote.Automatic === "YES" ? true : false;
                    return newData;
                } else if (data.type === UserConfig.name) {
                    let remote: bo4j.IUserConfig = data;
                    let newData: UserConfig = new UserConfig();
                    newData.group = remote.Group;
                    newData.key = remote.Key;
                    newData.value = remote.Value;
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
                } else if (data.type === BizObjectInfo.name) {
                    let remote: bo4j.IBizObjectInfo = data;
                    let newData: BizObjectInfo = new BizObjectInfo();
                    newData.code = remote.Code;
                    newData.name = remote.Name;
                    newData.type = remote.Type;
                    newData.properties = new Array<BizPropertyInfo>();
                    if (remote.Properties instanceof Array) {
                        for (let item of remote.Properties) {
                            item.type = BizPropertyInfo.name;
                            newData.properties.push(this.parsing(item, null));
                        }
                    }
                    return newData;
                } else if (data.type === BizPropertyInfo.name) {
                    let remote: bo4j.IBizPropertyInfo = data;
                    let newData: BizPropertyInfo = new BizPropertyInfo();
                    newData.name = remote.Name;
                    newData.description = remote.Description;
                    newData.alias = remote.Alias;
                    newData.position = remote.Position;
                    newData.dataType = remote.DataType;
                    newData.editType = remote.EditType;
                    newData.editSize = remote.EditSize;
                    newData.searched = remote.Searched;
                    newData.systemed = remote.Systemed;
                    newData.required = remote.Required;
                    newData.authorised = ibas.strings.isEmpty(remote.Authorised) ? undefined : ibas.enums.valueOf(ibas.emAuthoriseType, remote.Authorised);
                    newData.linkedObject = remote.LinkedObject;
                    newData.values = new Array<BizPropertyValue>();
                    if (remote.Values instanceof Array) {
                        for (let item of remote.Values) {
                            item.type = BizPropertyValue.name;
                            newData.values.push(this.parsing(item, null));
                        }
                    }
                    return newData;
                } else if (data.type === BizPropertyValue.name) {
                    let remote: bo4j.IBizPropertyValue = data;
                    let newData: BizPropertyValue = new BizPropertyValue();
                    newData.value = remote.Value;
                    newData.description = remote.Description;
                    newData.default = remote.Default;
                    return newData;
                } else if (data.type === UserFunction.name) {
                    let remote: bo4j.IUserFunction = data;
                    let newData: UserFunction = new UserFunction();
                    newData.id = remote.Id;
                    newData.description = remote.Description;
                    newData.icon = remote.Icon;
                    if (remote.Items instanceof Array) {
                        for (let item of remote.Items) {
                            item.type = UserFunction.name;
                            newData.items.push(this.parsing(item, sign));
                        }
                    }
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