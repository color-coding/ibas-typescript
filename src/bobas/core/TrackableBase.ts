import {BindableBase} from './BindableBase';

 /**
 * 状态跟踪对象
 */
export abstract class TrackableBase extends BindableBase {
    
    constructor() {
        super();
        this.isNew = true;
        this.isDirty = true;
        this.isDeleted = false;
        this.isLoading = false;
        this.isSavable = true;
    }

    private new: boolean;
    /**
     * 是否新建
     */
    get isNew(): boolean {
        return this.new;
    }
    /**
     * 设置新建
     */
    set isNew(value: boolean) {
        this.new = value;
    }

    private dirty: boolean;
    /**
     * 是否修改
     */
    get isDirty(): boolean {
        return this.dirty;
    }
    /**
     * 设置修改
     */
    set isDirty(value: boolean) {
        this.dirty = value;
    }
    
    private deleted: boolean;
    /**
     * 是否刪除
     */
    get isDeleted(): boolean {
        return this.deleted;
    }
    /**
     * 设置刪除
     */
    set isDeleted(value: boolean) {
        this.deleted = value;
    }
    
    private loading: boolean;
    /**
     * 是否加载
     */
    get isLoading(): boolean {
        return this.loading;
    }
    /**
     * 设置加载
     */
    set isLoading(value: boolean) {
        this.loading = value;
    }
    
    private savable: boolean;
    /**
     * 是否有效
     */
    get isSavable(): boolean {
        return this.savable;
    }
    /**
     * 设置有效
     */
    set isSavable(value: boolean) {
        this.savable = value;
    }
    
    
}