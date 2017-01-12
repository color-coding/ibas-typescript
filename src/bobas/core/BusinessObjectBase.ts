import {TrackableBase} from './TrackableBase';

/**
 * 业务对象基础
 */
export abstract class BusinessObjectBase<T> extends TrackableBase {

    constructor() {
        super();
    }

    /**
     * 获取属性值
     */
    static getProperty<P>(property: string): P {
        return undefined;
    }
    
    /**
     * 设置属性值
     */
    static setProperty<P>(property: string, value: P) {
        
    }
}
