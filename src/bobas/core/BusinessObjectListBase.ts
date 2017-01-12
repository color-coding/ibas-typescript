import {BusinessObjectBase} from './BusinessObjectBase';

/**
 * 业务对象集合基础
 */
export abstract class BusinessObjectListBase<T extends BusinessObjectBase<any>> extends Array<T> {
    
    constructor() {
        super();
    }
   
    /**
     * 创建子项
     */
    abstract create(): T;
}