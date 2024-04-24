/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace extension {
        namespace m {
            class RichTooltip extends ui.core.TooltipBase {

                getWidth(): sap.ui.core.CSSSize;

                setWidth(sWidth?: sap.ui.core.CSSSize): this;

                /** 获取内容 */
                getContent(): sap.ui.core.Control[];
                /**
                 * 增加内容
                 * @param oContent 内容
                 */
                addContent(oContent: sap.ui.core.Control): this;
            }
        }
    }
}