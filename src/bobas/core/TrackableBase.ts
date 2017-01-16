import { ITrackable } from './ITrackable';
import { BindableBase } from './BindableBase';

 /**
 * 状态跟踪对象
 */
export abstract class TrackableBase extends BindableBase implements ITrackable {

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
    set isNew(value: boolean) {
        this.new = value;
        this.firePropertyChanged("isNew");
    }

    private dirty: boolean;
    /**
     * 是否修改
     */
    get isDirty(): boolean {
        return this.dirty;
    }
    set isDirty(value: boolean) {
        this.dirty = value;
        this.firePropertyChanged("isDirty");
    }

    private deleted: boolean;
    /**
     * 是否刪除
     */
    get isDeleted(): boolean {
        return this.deleted;
    }
    set isDeleted(value: boolean) {
        this.deleted = value;
        this.firePropertyChanged("isDeleted");
    }

    private loading: boolean;
    /**
     * 是否加载
     */
    get isLoading(): boolean {
        return this.loading;
    }
    set isLoading(value: boolean) {
        this.loading = value;
        this.firePropertyChanged("isLoading");
    }

    private savable: boolean;
    /**
     * 是否有效
     */
    get isSavable(): boolean {
        return this.savable;
    }
    set isSavable(value: boolean) {
        this.savable = value;
        this.firePropertyChanged("isSavable");
    }

    private vaild: boolean;
    /**
     * 是否有效
     */
    get isVaild(): boolean {
        return this.vaild;
    }
    set isVaild(value: boolean) {
        this.vaild = value;
        this.firePropertyChanged("isVaild");
    }

    /**
     * 标记为未修改
     */
    markOld(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = false;
        this.isDeleted = false;
    }

    /**
     * 标记为新
     */
    markNew(recursive: boolean): void {
        this.isNew = true;
        this.isDirty = true;
        this.isDeleted = false;
    }

    /**
     * 标记为删除
     */
    markDeleted(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = true;
        this.isDeleted = true;
    }

    /**
     * 对象置为脏
     */
    markDirty(recursive: boolean): void {
        this.isNew = false;
        this.isDirty = true;
    }

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void {
        this.isDirty = true;
        this.isDeleted = false;
    }
}