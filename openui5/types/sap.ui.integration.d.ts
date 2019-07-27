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
         * <p><p>SAPUI5 library with controls specialized for SAP Fiori apps.</p></p>
         */
        namespace integration {
            /**
             * <p><p>Possible data modes for <code><a target="_self" class="jsdoclink" href="#/api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a></code>.</p></p>
             */
            export enum CardDataMode {
                /**
                 * <p>When in this mode, the card can make requests.</p>
                 */
                Active = "Active",
                /**
                 * <p>When in this mode, the card cannot make requests.</p>
                 */
                Inactive = "Inactive",
            }
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
                 * <p>A control that represents a container with a header and content.</p><h3>Overview</h3><p> Cards are small user interface elements which provide the most important information from an app, related to a specific role or task. The information is represented in a compact manner, allowing for actions to be executed. Cards can be described as small representations of an app which can be integrated in different systems.</p><p>The integration card is defined in a declarative way, using a manifest.json to be: <ul> <li>Easily integrated into apps</li> <li>Easily reused across apps</li> <li>Understandable by other technologies</li> <li>Self-contained (has a built-in functionality and doesn't need external configuration)</li> <li>Dynamic parameter handling</li> <li>Clear separation of the roles of the card and app developers</li> </ul></p><p>The role of the card developer is to describe the card in a manifest.json file and define: <ul> <li>Header</li> <li>Content</li> <li>Data source</li> <li>Possible actions</li> </ul></p><p>The role of the app developer is to integrate the card into the app and define: <ul> <li>The dimensions of the card inside a layout of choice, using the <code>width</code> and <code>height</code> properties</li> <li>The behavior for the actions described in the manifest.json file, using the action event</li> </ul></p><p><strong>You can learn more about integration cards in the <a href="test-resources/sap/ui/integration/demokit/cardExplorer/index.html">Card Explorer</a></strong></p><p><i>When to use</i> <ul> <li>When you want to reuse the card across apps.</li> <li>When you need easy integration and configuration.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you need more header and content flexibility.</li> <li>When you have to achieve simple card visualization. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> <li>When you have to use an application model. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> <li>When you need complex behavior. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> </ul></p>
                 */
                export class Card extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="#/api/sap.ui.base.ManagedObject/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when an action is triggered on the card.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachAction(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireAction(mParameters?: any): sap.ui.integration.widgets.Card;
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
                     * <p>Implements sap.f.ICard interface.</p>
                     * @returns sap.f.cards.HeaderPosition <p>The position of the header of the card.</p>
                     */
                    protected getCardHeaderPosition(): sap.f.cards.HeaderPosition;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getDataMode" href="#/api/sap.ui.integration.widgets.Card/methods/getDataMode">dataMode</a>.</p><p>Defines the state of the <code>Card</code>. When set to <code>Inactive</code>, the <code>Card</code> doesn't make requests.</p><p>Default value is <code>Active</code>.</p>
                     * @returns sap.ui.integration.CardDataMode <p>Value of property <code>dataMode</code></p>
                     */
                    getDataMode(): sap.ui.integration.CardDataMode;
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
                     * <p>Overwrites getter for card manifest.</p>
                     * @returns string|Object <p>Cloned of the parameters.</p>
                     */
                    getManifest(): string | any;
                    /**
                     * <p>Overwrites getter for card parameters.</p>
                     * @returns any <p>A Clone of the parameters.</p>
                     */
                    getParameters(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getWidth" href="#/api/sap.ui.integration.widgets.Card/methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>Default value is <code>100%</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * @returns boolean <p>If the card is ready or not.</p>
                     */
                    isReady(): boolean;
                    /**
                     * <p>Refreshes the card by re-applying the manifest settings and triggering all data requests.</p>
                     */
                    refresh(): void;
                    /**
                     * <p>Sets a new value for the <code>dataMode</code> property.</p>
                     * @param {sap.ui.integration.CardDataMode} sMode <p>The mode to set to the Card.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setDataMode(sMode: sap.ui.integration.CardDataMode): sap.ui.integration.widgets.Card;
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
                     * <p>Overwrites setter for card manifest.</p>
                     * @param {string | any} vValue <p>The manifest object or its URL.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setManifest(vValue: string | any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Overwrites setter for card params.</p>
                     * @param {any} vValue <p>oParameters Parameters set in the card trough parameters property.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setParameters(vValue: any): sap.ui.integration.widgets.Card;
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
