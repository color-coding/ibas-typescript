/**
* 状态跟踪对象
*/
export interface ITrackable {
    /**
    * 是否新建
    */
    readonly isNew: boolean;
    /**
    * 是否修改
    */
    readonly isDirty: boolean;
    /**
    * 是否删除
    */
    readonly isDeleted: boolean;
    /**
    * 是否能够保存
    */
    readonly isSavable: boolean;
    /**
    * 是否有效
    */
    readonly isVaild: boolean;
    /**
    * 是否加载数据中
    */
    isLoading: boolean;

    /**
     * 标记为未修改
     * 
     * @param recursive 递归
     */
    markOld(recursive: boolean): void;

    /**
     * 标记为新
     * 
     * @param recursive 递归
     */
    markNew(recursive: boolean): void;

    /**
     * 标记为删除
     * 
     * @param recursive 递归
     */
    markDeleted(recursive: boolean): void;

    /**
     * 对象置为脏
     * 
     * @param recursive 递归
     */
    markDirty(recursive: boolean): void;

    /**
     * 清除删除标记
     *
     * @param recursive 递归
     */
    clearDeleted(recursive: boolean): void;
}
