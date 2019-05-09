/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace m {
            /**
             * 下拉框-行政地区
             */
            class RegionComboBox extends ComboBox {
                /** 获取-语言 */
                getLanguage(): string;
                /** 设置-语言 */
                setLanguage(value: string): RegionComboBox;
                /** 获取-数据地址 */
                getDataUrl(): string;
                /** 设置-数据地址 */
                setDataUrl(value: string): RegionComboBox;
                /**
                 * 加载可选项
                 * @param group 组
                 * @param selector 选择器，加载完可选项后调用
                 */
                initItems(group?: string, selector?: (combobox: RegionComboBox) => void): RegionComboBox;
                /** 加载可选项 */
                newItem(data: { id: string, name: string }): RegionComboBox;
            }
            /**
             * 下拉框-行政地区-国
             */
            class CountryComboBox extends RegionComboBox {

            }
            /**
             * 下拉框-行政地区-省
             */
            class ProvinceComboBox extends RegionComboBox {

            }
            /**
             * 下拉框-行政地区-市
             */
            class CityComboBox extends RegionComboBox {

            }
            /**
             * 下拉框-行政地区-地区
             */
            class DistrictComboBox extends RegionComboBox {

            }
            /**
             * 
             * 地址区
             */
            class AddressArea extends sap.ui.core.Control {
                /**
                 * 构造
                 * @param {string} sId 唯一标记，不要赋值
                 * @param {any} mSettings 
                 *     绑定值-国家：country
                 *     绑定值-省：province
                 *     绑定值-市：city
                 *     绑定值-区：district
                 *     绑定值-街道：street
                 *     绑定值-邮编：zipcode
                 *     绑定值-全地址（省市区街道）：address
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * 设置属性值
                 * @param sPropertyName 属性名称
                 * @param oValue 值
                 * @param bSuppressInvalidate 立即
                 */
                protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;
                /**
                 * 绑定属性
                 * @param sName 属性名称
                 * @param oBindingInfo 绑定信息
                 */
                bindProperty(sName: string, oBindingInfo: any): this;

                /** 获取-语言 */
                getLanguage(): string;
                /** 获取-是否可编辑 */
                getEditable(): string;
                /** 获取-国家 */
                getCountry(): string;
                /** 获取-省 */
                getProvince(): string;
                /** 获取-市 */
                getCity(): string;
                /** 获取-区 */
                getDistrict(): string;
                /** 获取-街道 */
                getStreet(): string;
                /** 获取-邮编 */
                getZipCode(): string;
                /** 获取-国家是否可见 */
                getCountryVisible(): boolean;
                /** 获取-省是否可见 */
                getProvinceVisible(): boolean;
                /** 获取-市是否可见 */
                getCityVisible(): boolean;
                /** 获取-区是否可见 */
                getDistrictVisible(): boolean;
                /** 获取-街道是否可见 */
                getStreetVisible(): boolean;
                /** 获取-邮编是否可见 */
                getZipCodeVisible(): boolean;
                /** 获取-全地址 */
                getAddress(): string;
                /** 设置-语言 */
                setLanguage(value: string): AddressArea;
                /** 设置-是否可编辑 */
                setEditable(value: boolean): AddressArea;
                /** 设置-国家 */
                setCountry(value: string): AddressArea;
                /** 设置-省 */
                setProvince(value: string): AddressArea;
                /** 设置-市 */
                setCity(value: string): AddressArea;
                /** 设置-区 */
                setDistrict(value: string): AddressArea;
                /** 设置-街道 */
                setStreet(value: string): AddressArea;
                /** 设置-邮编 */
                setZipCode(value: string): AddressArea;
                /** 设置-国家是否可见 */
                setCountryVisible(value: boolean): AddressArea;
                /** 设置-省是否可见 */
                setProvinceVisible(value: boolean): AddressArea;
                /** 设置-市是否可见 */
                setCityVisible(value: boolean): AddressArea;
                /** 设置-区是否可见 */
                setDistrictVisible(value: boolean): AddressArea;
                /** 设置-街道是否可见 */
                setStreetVisible(value: boolean): AddressArea;
                /** 设置-邮编是否可见 */
                setZipCodeVisible(value: boolean): AddressArea;
                /** 设置监听地址改变事件 */
                attachAddressChange(oData: any, fnFunction: Function, oListener?: any): AddressArea;
                /** 取消监听地址改变事件 */
                detachAddressChange(fnFunction: Function, oListener?: any): AddressArea;
                /** 触发地址改变事件 */
                protected fireAddressChange(param: { address: string, }): AddressArea;
                /** 设置地址 */
                protected setAddress(): AddressArea;
            }
        }
    }
}
