/**
 * 模块索引文件，此文件集中导出类
 */

export * from './ArrayList';

/**
 * 对字符串操作的封装方法
 */
export module string {
    /**
     * 格式化输出
     * @param format 格式，I'm {0} and good at {1}.
     * @param args 替换字符
     */
    export function format(format: string, ...args: any[]): string {
        var result = format;
        if (args.length > 0) {
            // 存在替代字符
            if (args.length == 1 && Array.isArray(args[0])) {
                // 替代字符变量自身是个数组，则使用数组里的内容替代
                args = args[0];
                for (let key in args) {
                    if (args[key] != undefined) {
                        let reg = new RegExp("\\{" + key + "\\}", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < args.length; i++) {
                    if (args[i] != undefined) {
                        let reg = new RegExp("\\{" + i + "\\}", "g");
                        result = result.replace(reg, args[i]);
                    }
                }
            }
        }
        return result;
    }

}