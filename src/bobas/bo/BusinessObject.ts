import { IBusinessObject } from '../core/IBusinessObject';
import { BusinessObjectBase } from '../core/BusinessObjectBase';

/**
 * 业务对象基类
 */
export abstract class BusinessObject<T extends IBusinessObject> extends BusinessObjectBase<T> {

}