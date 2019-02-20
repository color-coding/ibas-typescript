/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace trainingtesting {
    export namespace app {
        /** 应用-数据类型 */
        export class DemoDataApp extends ibas.Application<IDemoDataView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "5294d752-eb49-4978-8e09-ee2f8a9139bd";
            /** 应用名称 */
            static APPLICATION_NAME: string = "trainingtestingothers_app_data";

            constructor() {
                super();
                this.id = DemoDataApp.APPLICATION_ID;
                this.name = DemoDataApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                this.view.stringDataEvent = this.stringData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                this.myData = new DemoData();
                this.myData.dateTime = ibas.dates.now();
                this.myData.time = ibas.dates.time();
                this.myData.canceled = ibas.emYesNo.YES;
                this.myData.documentStatus = ibas.emDocumentStatus.RELEASED;
                this.myData.numeric = ibas.numbers.toInt(Math.random() * 1000);
                this.myData.decimal = Math.random() * 100;
                this.myData.quantity = Math.random() * 100;
                this.myData.price = Math.random() * 100;
                this.myData.measurement = Math.random() * 100;
                this.myData.sum = Math.random() * 100;
                this.myData.rate = Math.random() * 100;
                this.myData.percentage = Math.random() * 100;
                this.view.showData(this.myData);
            }
            private myData: DemoData;
            private stringData(): void {
                let converter: bo.DataConverter = new bo.DataConverter();
                let data: string = JSON.stringify(converter.convert(this.myData, undefined));
                this.view.showDataString(data);
            }
        }
        /** 视图-数据类型 */
        export interface IDemoDataView extends ibas.IView {
            /** 显示数据 */
            showData(data: DemoData): void;
            /** 显示数据串 */
            stringDataEvent: Function;
            /** 显示数据 */
            showDataString(data: string): void;
        }
        export class DemoData extends ibas.BusinessObject<DemoData> {
            static PROPERTY_ALPHANUMERIC_NAME: string = "Alphanumeric";
            get alphanumeric(): string {
                return this.getProperty<string>(DemoData.PROPERTY_ALPHANUMERIC_NAME);
            }
            set alphanumeric(value: string) {
                this.setProperty(DemoData.PROPERTY_ALPHANUMERIC_NAME, value);
            }
            static PROPERTY_NUMERIC_NAME: string = "Numeric";
            get numeric(): number {
                return this.getProperty<number>(DemoData.PROPERTY_NUMERIC_NAME);
            }
            set numeric(value: number) {
                this.setProperty(DemoData.PROPERTY_NUMERIC_NAME, value);
            }
            static PROPERTY_DECIMAL_NAME: string = "Decimal";
            get decimal(): number {
                return this.getProperty<number>(DemoData.PROPERTY_DECIMAL_NAME);
            }
            set decimal(value: number) {
                this.setProperty(DemoData.PROPERTY_DECIMAL_NAME, value);
            }
            static PROPERTY_PRICE_NAME: string = "Price";
            get price(): number {
                return this.getProperty<number>(DemoData.PROPERTY_PRICE_NAME);
            }
            set price(value: number) {
                this.setProperty(DemoData.PROPERTY_PRICE_NAME, value);
            }
            static PROPERTY_QUANTITY_NAME: string = "Quantity";
            get quantity(): number {
                return this.getProperty<number>(DemoData.PROPERTY_QUANTITY_NAME);
            }
            set quantity(value: number) {
                this.setProperty(DemoData.PROPERTY_QUANTITY_NAME, value);
            }
            static PROPERTY_RATE_NAME: string = "Rate";
            get rate(): number {
                return this.getProperty<number>(DemoData.PROPERTY_RATE_NAME);
            }
            set rate(value: number) {
                this.setProperty(DemoData.PROPERTY_RATE_NAME, value);
            }
            static PROPERTY_SUM_NAME: string = "Sum";
            get sum(): number {
                return this.getProperty<number>(DemoData.PROPERTY_SUM_NAME);
            }
            set sum(value: number) {
                this.setProperty(DemoData.PROPERTY_SUM_NAME, value);
            }
            static PROPERTY_MEASUREMENT_NAME: string = "Measurement";
            get measurement(): number {
                return this.getProperty<number>(DemoData.PROPERTY_MEASUREMENT_NAME);
            }
            set measurement(value: number) {
                this.setProperty(DemoData.PROPERTY_MEASUREMENT_NAME, value);
            }
            static PROPERTY_PERCENTAGE_NAME: string = "Percentage";
            get percentage(): number {
                return this.getProperty<number>(DemoData.PROPERTY_PERCENTAGE_NAME);
            }
            set percentage(value: number) {
                this.setProperty(DemoData.PROPERTY_PERCENTAGE_NAME, value);
            }
            static PROPERTY_DATETIME_NAME: string = "DateTime";
            get dateTime(): Date {
                return this.getProperty<Date>(DemoData.PROPERTY_DATETIME_NAME);
            }
            set dateTime(value: Date) {
                this.setProperty(DemoData.PROPERTY_DATETIME_NAME, value);
            }
            static PROPERTY_TIME_NAME: string = "Time";
            get time(): number {
                return this.getProperty<number>(DemoData.PROPERTY_TIME_NAME);
            }
            set time(value: number) {
                this.setProperty(DemoData.PROPERTY_TIME_NAME, value);
            }
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(DemoData.PROPERTY_CANCELED_NAME);
            }
            set canceled(value: ibas.emYesNo) {
                this.setProperty(DemoData.PROPERTY_CANCELED_NAME, value);
            }
            static PROPERTY_DOCUMENTSTATUS_NAME: string = "DocumentStatus";
            get documentStatus(): ibas.emDocumentStatus {
                return this.getProperty<ibas.emDocumentStatus>(DemoData.PROPERTY_DOCUMENTSTATUS_NAME);
            }
            set documentStatus(value: ibas.emDocumentStatus) {
                this.setProperty(DemoData.PROPERTY_DOCUMENTSTATUS_NAME, value);
            }
            criteria(): ibas.ICriteria {
                throw new Error("Method not implemented.");
            }
            toString(): string {
                throw new Error("Method not implemented.");
            }
            protected init(): void {
            }
        }
    }
}