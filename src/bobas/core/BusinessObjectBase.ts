import { TrackableBase } from './TrackableBase';
import { IBusinessObject } from './IBusinessObject';

/**
 * 业务对象基础
 */
export abstract class BusinessObjectBase<T extends IBusinessObject> extends TrackableBase implements IBusinessObject {

    constructor() {
        super();
    }

    /**
     * 获取属性值
     */
    getProperty<P>(property: string): P {
        return undefined;
    }

    /**
     * 设置属性值
     */
    setProperty<P>(property: string, value: P) {

    }

    /**
     * 获取对象属性
     * 
     * @param recursive 递归
     */
    getProperties(recursive: boolean): Map<string, any> {
        let properties = new Map();
        // 遍历属性名称
        for (let item of Object.getOwnPropertyNames(this)) {
            let name: string = item;
            let value = this[name];
            properties.set(name, value);
            if (recursive) {
                // 遍历子项
                if (Array.isArray(value)) {
                    // 数组子项，生成格式为： items[0].name {object}
                    let index = 0;
                    for (let sub of value) {
                        let subName = name + "[" + index + "]";
                        properties.set(subName, sub);
                        if (sub.getProperties !== undefined) {
                            for (let subSub of sub.getProperties(recursive)) {
                                let subSubName = subName + "." + subSub[0];
                                properties.set(subSubName, subSub[1]);
                            }
                        }
                        index++;
                    }
                } else if (value.getProperties !== undefined) {
                    // 存在此方法，则调用，生成格式： user.userCode
                    for (let sub of value.getProperties(recursive)) {
                        let subName = name + "." + sub[0];
                        properties.set(subName, sub[1]);
                    }
                }
            }
        }
        return properties;
    }

    protected getChildBOs(): Map<string, IBusinessObject> {
        let childs = new Map();
        // 遍历属性名称
        for (let item of this.getProperties(true)) {
            let name: string = item[0];
            let value = item[1];
            if (value.getChildBOs !== undefined) {
                // 存在此方法，认为是个BO
                childs.set(name, value);
            }
        }
        return childs;
    }

    /**
    * 标记为未修改
    */
    markOld(recursive: boolean): void {
        super.markOld(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value = item[1];
                if (value.markOld !== undefined) {
                    value.markOld(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 标记为新
     */
    markNew(recursive: boolean): void {
        super.markNew(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value = item[1];
                if (value.markNew !== undefined) {
                    value.markNew(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 标记为删除
     */
    markDeleted(recursive: boolean): void {
        super.markDeleted(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value = item[1];
                if (value.markDeleted !== undefined) {
                    value.markDeleted(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 对象置为脏
     */
    markDirty(recursive: boolean): void {
        super.markDirty(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value = item[1];
                if (value.markDirty !== undefined) {
                    value.markDirty(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void {
        super.clearDeleted(recursive);
        if (recursive !== undefined && recursive === true) {
            for (let item of this.getChildBOs()) {
                let value = item[1];
                if (value.clearDeleted !== undefined) {
                    value.clearDeleted(false);// 此处不再递归，因为已处于递归环境
                }
            }
        }
    }
}
