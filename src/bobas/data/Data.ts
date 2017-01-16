/**
 * 模块索引文件，此文件集中导出类
 */

export * from './ArrayList';


export module string {

    export function format(format: string, ...args: any[]): string {
        var result = format;
        if (args.length > 0) {
            if (args.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if (args[key] != undefined) {
                        var reg = new RegExp("\\{" + key + "\\}", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < args.length; i++) {
                    if (args[i] != undefined) {
                        var reg = new RegExp("\\{" + i + "\\}", "g");
                        result = result.replace(reg, args[i]);
                    }
                }
            }
        }
        return result;
    }
}