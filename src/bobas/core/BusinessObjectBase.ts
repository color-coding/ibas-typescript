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
}
