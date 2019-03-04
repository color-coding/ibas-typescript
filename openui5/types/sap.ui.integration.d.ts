/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace ui {
        /**
         * <p>SAPUI5 library with controls specialized for SAP Fiori apps.</p>
         */
        namespace integration {
        }
    }
}
/**
 */
declare namespace sap {
}
declare namespace sap {
    /**
     */
    namespace ui {
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace widgets {
                /**
                 * <p>A control that represents a small container with a header and content.</p>
                 */
                export class Card extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="#/api/sap.ui.base.ManagedObject/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Implements sap.f.ICard interface.</p>
                     * @returns sap.ui.core.Control <p>The content of the card</p>
                     */
                    protected getCardContent(): sap.ui.core.Control;
                    /**
                     * <p>Implements sap.f.ICard interface.</p>
                     * @returns sap.f.cards.IHeader <p>The header of the card</p>
                     */
                    protected getCardHeader(): sap.f.cards.IHeader;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHeight" href="#/api/sap.ui.integration.widgets.Card/methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>Default value is <code>auto</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                     */
                    getHeight(): sap.ui.core.CSSSize;
                    /**
                     * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHostConfigurationId" href="#/api/sap.ui.integration.widgets.Card/methods/getHostConfigurationId">hostConfigurationId</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getHostConfigurationId(): sap.ui.core.ID;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getManifest" href="#/api/sap.ui.integration.widgets.Card/methods/getManifest">manifest</a>.</p><p>The URL of the manifest or an object.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns any <p>Value of property <code>manifest</code></p>
                     */
                    getManifest(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getWidth" href="#/api/sap.ui.integration.widgets.Card/methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>Default value is <code>100%</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHeight" href="#/api/sap.ui.integration.widgets.Card/methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                     * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHostConfigurationId" href="#/api/sap.ui.integration.widgets.Card/methods/getHostConfigurationId">hostConfigurationId</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} oHostConfigurationId <p>ID of an element which becomes the new target of this hostConfigurationId association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHostConfigurationId(oHostConfigurationId: sap.ui.core.ID | sap.ui.core.Control): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Setter for card manifest.</p>
                     * @param {string | any} vValue <p>The manifest object or its URL.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setManifest(vValue: string | any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getWidth" href="#/api/sap.ui.integration.widgets.Card/methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
                }
            }
        }
    }
}
