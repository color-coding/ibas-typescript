/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../../../../ibas/index.d.ts" />
/// <reference path="./Material.ts" />
/// <reference path="./Customer.ts" />
/// <reference path="./SalesOrder.ts" />

namespace trainingtesting {
    export namespace bo {
        // 注册业务对象到工厂
        ibas.boFactory.register(Material.BUSINESS_OBJECT_CODE, Material);
        ibas.boFactory.register(Customer.BUSINESS_OBJECT_CODE, Customer);
        ibas.boFactory.register(SalesOrder.BUSINESS_OBJECT_CODE, SalesOrder);
    }
}
