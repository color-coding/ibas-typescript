/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    /**
     * Test 模块的数据转换者
     */
    export class DataConverter4Test extends ibas.DataConverter4j {
        /**
         * 创建业务对象转换者
         */
        protected createConverter(): ibas.BOConverter {
            return new TestBOConverter();
        }
    }

    /** 模块业务对象工厂 */
    export const boFactory: ibas.BOFactory = new ibas.BOFactory();
    /**
     * Test 模块的业务对象转换者
     */
    export class TestBOConverter extends ibas.BOConverter {

        constructor() {
            super();
        }

        /** 模块对象工厂 */
        protected factory(): ibas.BOFactory {
            return boFactory;
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
        protected convertData(boName: string, property: string, value: any): any {

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
        protected parsingData(boName: string, property: string, value: any): any {
            if (1 > 2) {
                // 特殊处理，否则使用默认
                return value;
            } else {
                return super.parsingData(boName, property, value);
            }
        }
    }

    /**
     * 业务仓库应用
     */
    export class BORepositoryTest extends ibas.BORepositoryApplication {
        /**
         * 创建此模块的后端与前端数据的转换者
         */
        protected createConverter(): ibas.IDataConverter {
            if (this.offline) {
                // 离线模式，直接转换数据
                return {
                    convert(data: any): string {
                        return data;
                    },
                    parsing(data: any): any {
                        return data;
                    }
                };
            }
            return new DataConverter4Test();
        }

        /**
         * 查询 销售订单
         * @param caller 查询者
         */
        fetchSalesOrder(caller: ibas.IFetchCaller<SalesOrder>): void {
            super.fetch("SalesOrder", caller);
        }

        /**
         * 保存 销售订单
         * @param caller 保存者
         */
        saveSalesOrder(caller: ibas.ISaveCaller<SalesOrder>): void {
            super.save("SalesOrder", caller);
        }
    }
}

