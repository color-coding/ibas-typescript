import { object } from '../data/Data';
import { ArrayList } from '../data/ArrayList';

/**
* 属性改变监听者
*/
export interface PropertyChangedListener {
    /**
    * 属性改变
    */
    propertyChanged(property: string);
}

/**
 * 可监听的对象
 */
export abstract class BindableBase {

    constructor() {
    }

    private listeners: ArrayList<PropertyChangedListener>;
    /**
     * 注册监听事件
     * @param listener 监听者
     */
    registerListener(listener: PropertyChangedListener) {
        if (object.isNull(this.listeners)) {
            this.listeners = new ArrayList<PropertyChangedListener>();
        }
        this.listeners.push(listener);
    }

    /**
     * 移出监听事件
     * @param listener 监听者
     */
    removeListener(listener: PropertyChangedListener) {
        if (object.isNull(this.listeners)) {
            return;
        }
        for (let item of this.listeners) {
            if (item === listener) {
                this.listeners.remove(item);
            }
        }
    }

    /**
     * 通知属性改变
     */
    protected firePropertyChanged(property: string) {
        if (object.isNull(this.listeners)) {
            return;
        }
        for (let item of this.listeners) {
            item.propertyChanged(property);
        }
    }
}
