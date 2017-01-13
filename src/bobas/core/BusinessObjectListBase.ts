import { IBusinessObject } from './IBusinessObject';
import { IBusinessObjectList } from './IBusinessObjectList';
import { ArrayList } from '../data/ArrayList';

/**
 * 业务对象集合基础
 */
export abstract class BusinessObjectListBase<T extends IBusinessObject> extends ArrayList<T> implements IBusinessObjectList<T> {
    
    constructor() {
        super();
    }
   
    /**
     * 创建子项
     */
    abstract create(): T;


}