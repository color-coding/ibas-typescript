/// <reference path="../../3rdparty/jquery.d.ts" />
/**
 * 模块索引文件，此文件集中导出类
 */
import { string } from '../data/Data';
import { logger } from '../messages/Messages';
import { emMessageLevel } from '../messages/Messages';
import { i18n } from '../i18n/I18N';

/**
 * 配置
 */
export class Configuration {

    /**
    * 配置文件地址
    */
    static CONFIG_FILE_URL: string = "config.json";
    static ROOT_FILE_NAME: string = "/bobas.js";

    /**
     * 获取当前库路径
     */
    static rootUrl = function () {
        let root = window.document.location.origin;
        var docScripts = window.document.getElementsByTagName('script');
        for (var i = 0; i < docScripts.length; i++) {
            var atr = docScripts[i].attributes.getNamedItem('src');
            if (atr === undefined || atr === null) {
                continue;
            }
            if (atr.value.endsWith(Configuration.ROOT_FILE_NAME)) {
                let tmp = atr.value.slice(0, atr.value.lastIndexOf(Configuration.ROOT_FILE_NAME));
                break;
            }
        }
        return root;
    }();

    constructor() {
        // 加载配置
        this.load();
    }


    private items: Map<string, string> = new Map<string, string>();

    /**
     * 加载配置文件
     */
    load(): void {
        let address = string.format("{0}/{1}", Configuration.rootUrl, Configuration.CONFIG_FILE_URL);
        var JQryAjxSetting: JQueryAjaxSettings = {
            url: address,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function (xhr, status, error) {
                logger.log(emMessageLevel.FATAL, i18n.prop("msg_load_config_file_faild", status, error));
            },
            success: function (data) {
                logger.log(emMessageLevel.DEBUG, i18n.prop("msg_load_config_file_successful"));

            },
        };
        jQuery.ajax(JQryAjxSetting);
    }
}

/**
 * 发布的配置实例
 */
export const config: Configuration = new Configuration();

