import { List } from '../data/ArrayList';
import { IBusinessObject } from './IBusinessObject';

/**
* 业务对象集合
*/
export interface IBusinessObjectList<T extends IBusinessObject> extends List<T> {
    /**
    * 新建并添加子项
    */
    create(): T;

}