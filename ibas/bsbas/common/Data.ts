/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace ibas {
    /** 系统用户-标记 */
    export const SYSTEM_USER_ID: number = -9;
    /** 位置用户-标记 */
    export const UNKNOWN_USER_ID: number = -1;

    /** 配置项目-审批方法 */
    export const CONFIG_ITEM_APPROVAL_WAY: string = "approvalWay";
    /** 配置项目-组织方式 */
    export const CONFIG_ITEM_ORGANIZATION_WAY: string = "organizationWay";
    /** 配置项目-权限判断方式 */
    export const CONFIG_ITEM_OWNERSHIP_WAY: string = "ownershipWay";

    /** 配置项目-格式-日期 */
    export const CONFIG_ITEM_FORMAT_DATE: string = "format|Date";
    /** 配置项目-格式-时间 */
    export const CONFIG_ITEM_FORMAT_TIME: string = "format|Time";
    /** 配置项目-格式-日期时间 */
    export const CONFIG_ITEM_FORMAT_DATETIME: string = "format|DateTime";
    /** 配置项目-小数位 */
    export const CONFIG_ITEM_DECIMAL_PLACES: string = "decimalPlaces";
    /** 配置项目-小数位-价格 */
    export const CONFIG_ITEM_DECIMAL_PLACES_PRICE: string = "decimalPlaces|Price";
    /** 配置项目-小数位-数量 */
    export const CONFIG_ITEM_DECIMAL_PLACES_QUANTITY: string = "decimalPlaces|Quantity";
    /** 配置项目-小数位-率 */
    export const CONFIG_ITEM_DECIMAL_PLACES_RATE: string = "decimalPlaces|Rate";
    /** 配置项目-小数位-总计 */
    export const CONFIG_ITEM_DECIMAL_PLACES_SUM: string = "decimalPlaces|Sum";
    /** 配置项目-小数位-单位数量 */
    export const CONFIG_ITEM_DECIMAL_PLACES_MEASUREMENT: string = "decimalPlaces|Measurement";
}