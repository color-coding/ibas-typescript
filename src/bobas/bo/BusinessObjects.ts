import { IBusinessObject } from '../core/IBusinessObject';
import { BusinessObjectListBase } from '../core/BusinessObjectListBase';

/**
 * 业务对象集合基类
 */
export abstract class BusinessObjects<T extends IBusinessObject> extends BusinessObjectListBase<T> {

}