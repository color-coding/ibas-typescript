/**
 * Type definitions for OpenUI5 1.40
 * Project: http://openui5.org/
 * Definitions by: niuren.zhu <niuren.zhu@icloud.com>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */
import * as ibas from "ibas/index";
export class BORepsitory {
    rootUrl: string = ibas.urls.rootUrl("/openui5/index");
    keyAttribute: string;
    textAttribute: string;
    boName: string;
    repositoryName: string;
    selectedKey: string;
    criteria: ibas.ICriteria;
    provinces: Array<any>;
    citys: any;
    districts: any;
    constructor(repositoryName?: string, boName?: string, keyAttribute?: string,
        textAttribute?: string, criteria?: ibas.Criteria, selectedKey?: string) {
        this.repositoryName = repositoryName;
        this.boName = boName;
        this.keyAttribute = keyAttribute;
        this.textAttribute = textAttribute;
        this.criteria = criteria;
        this.selectedKey = selectedKey;
    }
    async getKeyTextList(): Promise<ibas.ArrayList<ibas.KeyText>> {
        let that: this = this;
        let promise: Promise<ibas.ArrayList<ibas.KeyText>> = new Promise<ibas.ArrayList<ibas.KeyText>>(resolve => {
            if (ibas.strings.isEmpty(that.repositoryName) || ibas.strings.isEmpty(that.boName)
                || ibas.strings.isEmpty(that.keyAttribute) || ibas.strings.isEmpty(that.textAttribute)
                || !that.criteria) {
                resolve(null);
            }
            let boRep: any = ibas.boFactory.create(this.repositoryName);
            let criteria: ibas.ICriteria = new ibas.Criteria();
            criteria = that.criteria;
            boRep[ibas.strings.format("fetch{0}", this.boName)]({
                criteria: criteria,
                onCompleted(opRslt: ibas.IOperationResult<any>): void {
                    if (opRslt.resultCode === 0) {
                        let keyTextList: ibas.ArrayList<ibas.KeyText> = new ibas.ArrayList<ibas.KeyText>();
                        for (let data of opRslt.resultObjects) {
                            let keyText: ibas.KeyText = new ibas.KeyText();
                            keyText.key = data.getProperty(that.keyAttribute);
                            keyText.text = data.getProperty(that.textAttribute);
                            keyTextList.push(keyText);
                        }
                        resolve(keyTextList);
                    } else {
                        resolve(null);
                    }
                }
            });
        });
        return promise;
    }
    async getProvinces(): Promise<boolean> {
        if (!ibas.strings.isEmpty(this.getLocalStorage("provinces"))) {
            this.provinces = this.getLocalStorage("provinces");
            return true;
        }
        let url: string = ibas.strings.format("{0}/extends/data/province.json", this.rootUrl);
        this.provinces = await this.load(url);
        this.addLocalStorage("provinces", JSON.stringify(this.provinces));
        if (ibas.objects.isNull(this.provinces)) {
            return false;
        } else {
            return true;
        }
    }
    async getCitys(): Promise<boolean> {
        if (!ibas.strings.isEmpty(this.getLocalStorage("citys"))) {
            this.citys = this.getLocalStorage("citys");
            return true;
        }
        let url: string = ibas.strings.format("{0}/extends/data/city.json", this.rootUrl);
        this.citys = await this.load(url);
        this.addLocalStorage("citys", JSON.stringify(this.citys));
        if (ibas.objects.isNull(this.citys)) {
            return false;
        } else {
            return true;
        }
    }
    async getDistricts(): Promise<boolean> {
        if (!ibas.strings.isEmpty(this.getLocalStorage("districts"))) {
            this.districts = this.getLocalStorage("districts");
            return true;
        }
        let url: string = ibas.strings.format("{0}/extends/data/district.json", this.rootUrl);
        this.districts = await this.load(url);
        this.addLocalStorage("districts", JSON.stringify(this.districts));
        if (ibas.objects.isNull(this.districts)) {
            return false;
        } else {
            return true;
        }
    }
    private async load(address: string): Promise<any> {
        let promise: Promise<any> = new Promise<any>(resolve => {
            var JQryAjxSetting: JQueryAjaxSettings = {
                url: address,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                cache: false,
                error: function (xhr: JQueryXHR, status: string, error: string): void {
                    console.warn(ibas.strings.format("config: load file [{2}] faild [{0} - {1}].", status, error, address));
                    resolve(null);
                },
                success: function (data: any): void {
                    console.log(ibas.strings.format("config: load file [{0}] successful.", address));
                    resolve(data);
                },
            };
            jQuery.ajax(JQryAjxSetting);
        });
        return promise;
    }
    addLocalStorage(name: string, value: any): void {
        window.localStorage.setItem(name, JSON.stringify(value));
    }
    getLocalStorage(name:string): any {
        return JSON.parse(window.localStorage.getItem(name));
    }
}
