/**
 * 数据类型设置
 */
export interface IDataTypeSetting {

    /* 绑定属性的描述 */
    description?: string;
    /* 验证方法 */
    validateValue?(oValue: any): Function;
    /* BO字段值到界面值的转换 */
    formatValue?(oValue: any): Function;
    /* 界面值到BO字段值的转换 */
    parseValue?(oValue: any): Function;
}
/**
 * 字母数字设置
 */
export interface IAlphanumericSetting extends IDataTypeSetting {
    /* 是否不允许为空 */
    notEmpty?: boolean;
}
/**
 * 数字类型设置
 */
export interface INumericSetting extends IDataTypeSetting {
    /** 最小值 */
    minValue?: number;
    /** 最大值 */
    maxValue?: number;
}
/**
 * 小数类型设置
 */
export interface IDecimalSetting extends IDataTypeSetting {
    /** 最小值 */
    minValue?: number;
    /** 最大值 */
    maxValue?: number;
    /** 小数位 */
    decimalPlaces?: number;
}
/**
 * 日期类型设置
 */
export interface IDateTimeSetting extends IDataTypeSetting {
    /** 格式 */
    format?: string;
}
/**
 * 时间类型设置
 */
export interface ITimeSetting extends IDataTypeSetting {
    /** 格式 */
    format?: string;
}