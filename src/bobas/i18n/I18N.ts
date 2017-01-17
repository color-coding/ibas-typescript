/**
 * 模块索引文件，此文件集中导出类
 */

import { string } from '../data/Data';

/**
 * 配置
 */
export class I18N {

    constructor() {
    }
    /**
     * 输出描述
     * @param key 检索值
     * @param args 替代内容
     */
    prop(key: string, ...args: any[]): string {
        return string.format(key, args);
    }
}


/**
 * 发布的配置实例
 */
export const i18n: I18N = new I18N();