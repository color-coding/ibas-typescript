/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类
export * from "./Material";
export * from "./Customer";
export * from "./SalesOrder";

// 注册业务对象到工厂
import * as ibas from "ibas/index";
import { Material } from "./Material";
ibas.boFactory.register(Material.BUSINESS_OBJECT_CODE, Material);
import { Customer } from "./Customer";
ibas.boFactory.register(Customer.BUSINESS_OBJECT_CODE, Customer);
import { SalesOrder } from "./SalesOrder";
ibas.boFactory.register(SalesOrder.BUSINESS_OBJECT_CODE, SalesOrder);
