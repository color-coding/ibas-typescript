/**
 * Type definitions for OpenUI5 1.40
 * Project: http://openui5.org/
 * Definitions by: niuren.zhu <niuren.zhu@icloud.com>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */
import * as ibas from "ibas/index";
export class BORepsitory {
    keyAttribute: string;
    textAttribute: string;
    boName: string;
    repositoryName: string;
    selectedKey: string;
    criteria: ibas.ICriteria;
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
}
