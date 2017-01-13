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
    * 是否加载数据中
    */
    readonly isLoading: boolean;
    /**
    * 是否能够保存
    */
    readonly isSavable: boolean;
    /**
    * 是否有效
    */
    readonly isVaild: boolean;
}
