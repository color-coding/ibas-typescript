/**
 * 模块索引文件，此文件集中导出类
 */

export * from './Message';
export * from './Logger';

import {Logger} from './Logger';
export const logger: Logger = new Logger();
