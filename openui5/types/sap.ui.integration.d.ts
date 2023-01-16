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
             * <p>Represents an action, which appears in the header of <a target="_self" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a>. Useful in <code>Component</code> card and <code>Extension</code>.</p>
             */
            export class ActionDefinition extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new <code>ActionDefinition</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new ActionDefinition, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new ActionDefinition.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.ActionDefinition#events/press">press</a> event of this <code>sap.ui.integration.ActionDefinition</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.ActionDefinition</code> itself.</p><p>Fired when the action button is pressed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.ActionDefinition</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.ActionDefinition#events/press">press</a> event of this <code>sap.ui.integration.ActionDefinition</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.ActionDefinition#events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): this;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getButtonType">buttonType</a>.</p><p>The type of the action button.</p><p>Default value is <code>Transparent</code>.</p>
                 * @returns sap.m.ButtonType <p>Value of property <code>buttonType</code></p>
                 */
                getButtonType(): sap.m.ButtonType;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getEnabled">enabled</a>.</p><p>Indicates whether the user can interact with the action button or not. <b>Note</b>: Disabled controls cannot be focused and they are out of the navigation tab-chain.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enabled</code></p>
                 */
                getEnabled(): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getIcon">icon</a>.</p><p>The icon of the action button.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getParameters">parameters</a>.</p><p>The parameters of the action.</p>
                 * @returns any <p>Value of property <code>parameters</code></p>
                 */
                getParameters(): any;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getText">text</a>.</p><p>The text of the action button.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>text</code></p>
                 */
                getText(): string;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getType">type</a>.</p><p>The type of the action.</p>
                 * @returns sap.ui.integration.CardActionType <p>Value of property <code>type</code></p>
                 */
                getType(): sap.ui.integration.CardActionType;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getVisible">visible</a>.</p><p>Whether the action button should be visible on the screen.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getButtonType">buttonType</a>.</p><p>The type of the action button.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Transparent</code>.</p>
                 * @param {sap.m.ButtonType} sButtonType <p>New value for property <code>buttonType</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setButtonType(sButtonType?: sap.m.ButtonType): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getEnabled">enabled</a>.</p><p>Indicates whether the user can interact with the action button or not. <b>Note</b>: Disabled controls cannot be focused and they are out of the navigation tab-chain.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnabled(bEnabled?: boolean): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getIcon">icon</a>.</p><p>The icon of the action button.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getParameters">parameters</a>.</p><p>The parameters of the action.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oParameters <p>New value for property <code>parameters</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setParameters(oParameters: any): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getText">text</a>.</p><p>The text of the action button.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sText <p>New value for property <code>text</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setText(sText?: string): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getType">type</a>.</p><p>The type of the action.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.integration.CardActionType} sType <p>New value for property <code>type</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setType(sType: sap.ui.integration.CardActionType): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.ActionDefinition#methods/getVisible">visible</a>.</p><p>Whether the action button should be visible on the screen.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible?: boolean): this;
            }
            /**
             * <p><p>Defines the layout type of the List card attributes.</p></p>
             */
            export enum AttributesLayoutType {
                /**
                 * <p>One column.</p>
                 */
                OneColumn = "OneColumn",
                /**
                 * <p>Two columns.</p>
                 */
                TwoColumns = "TwoColumns",
            }
            /**
             * <p><p>Enumeration of possible card action types.</p></p>
             */
            export enum CardActionType {
                /**
                 * <p>Used for custom actions.</p>
                 */
                Custom = "Custom",
                /**
                 * <p>Date selection. Available only for Calendar cards.</p>
                 */
                DateChange = "DateChange",
                /**
                 * <p>Used for hiding the appeared details about the card.</p>
                 */
                HideCard = "HideCard",
                /**
                 * <p>Month selection. Available only for Calendar cards.</p>
                 */
                MonthChange = "MonthChange",
                /**
                 * <p>Used for navigation actions.</p>
                 */
                Navigation = "Navigation",
                /**
                 * <p>Used for showing more details about the card.</p>
                 */
                ShowCard = "ShowCard",
                /**
                 * <p>Used for submit actions.</p>
                 */
                Submit = "Submit",
            }
            /**
             * <p><p>Defines the areas in a card.</p></p>
             */
            export enum CardArea {
                /**
                 * <p>The content area.</p>
                 */
                Content = "Content",
                /**
                 * <p>The filters area.</p>
                 */
                Filters = "Filters",
                /**
                 * <p>The header.</p>
                 */
                Header = "Header",
            }
            /**
             * <p><p>Possible data modes for <code><a target="_self" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a></code>.</p></p>
             */
            export enum CardDataMode {
                /**
                 * <p>When in this mode, the card can make requests.</p>
                 */
                Active = "Active",
                /**
                 * <p>When in this mode, the card starts processing the manifest when the card is in the viewport.</p>
                 */
                Auto = "Auto",
                /**
                 * <p>When in this mode, the card cannot make requests.</p>
                 */
                Inactive = "Inactive",
            }
            /**
             * <p><p>An object type that represents card menu action properties.</p></p>
             */
            export interface CardMenuAction {
                /**
                 * <p>The type of the action.</p>
                 */
                type: any;
                /**
                 * <p>The text of the action button.</p>
                 */
                text: any;
                /**
                 * <p>The icon of the action button.</p>
                 */
                icon: any;
                /**
                 * <p>The tooltip of the action button.</p>
                 */
                tooltip: any;
                /**
                 * <p>The type of the action button.</p>
                 */
                buttonType: any;
                /**
                 * <p>If the action is enabled. Default value is <code>true</code>.</p>
                 */
                enabled: any;
                /**
                 * <p>If the action is visible. Default value is <code>true</code>.</p>
                 */
                visible: any;
                /**
                 * <p>The action function.</p>
                 */
                action: any;
                /**
                 * <p>The parameters of the action.</p>
                 */
                parameters: any;
            }
            /**
             * <p>Brings JavaScript capabilities for an <a target="_self" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> where custom logic can be implemented.</p>
             */
            export class Designtime extends sap.ui.base.ManagedObject {
                /**
                 * <p>Constructor for a new <code>Designtime</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject</a> can be used.</p>
                 * @param {string} sId <p>ID for the new Designtime, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new Designtime.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Returns an interface to the card, which uses this extension.</p>
                 * @returns sap.ui.integration.widgets.CardFacade <p>An interface to the card.</p>
                 */
                getCard(): sap.ui.integration.widgets.CardFacade;
            }
            /**
             * <p>Brings JavaScript capabilities for an <a target="_self" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> where custom logic can be implemented.</p>
             */
            export class Extension extends sap.ui.base.ManagedObject {
                /**
                 * <p>Constructor for a new <code>Extension</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new extension, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new extension.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.Extension#events/action">action</a> event of this <code>sap.ui.integration.Extension</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Extension</code> itself.</p><p>Fired when an action is triggered in the card.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Extension</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachAction(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.Extension#events/action">action</a> event of this <code>sap.ui.integration.Extension</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachAction(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.Extension#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireAction(mParameters?: any): boolean;
                /**
                 * <p>Returns an interface to the card, which uses this extension.</p>
                 * @returns sap.ui.integration.widgets.CardFacade <p>An interface to the card.</p>
                 */
                getCard(): sap.ui.integration.widgets.CardFacade;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.Extension#methods/getFormatters">formatters</a>.</p><p>The formatters, which can be used in the manifest.</p>
                 * @returns any <p>Value of property <code>formatters</code></p>
                 */
                getFormatters(): any;
                /**
                 * <p>Override this method to lazy load dependencies for the extension.</p>
                 * @returns Promise<any> <p>Returns a promise. The card will wait for this promise to be resolved before continuing with the initialization.</p>
                 */
                loadDependencies(): Promise<any>;
                /**
                 * <p>Called when the card is ready.</p>
                 */
                onCardReady(): void;
            }
            /**
             * <p>Provides application-level functions and services to an integration card.</p><p>Examples may include, but are not limited to options like: share a card, remove a card.</p>
             */
            export class Host extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new <code>Host</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new host, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new host.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.Host#events/action">action</a> event of this <code>sap.ui.integration.Host</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Host</code> itself.</p><p>Fired when an action is triggered.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Host</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachAction(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.Host#events/cardConfigurationChange">cardConfigurationChange</a> event of this <code>sap.ui.integration.Host</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Host</code> itself.</p><p>Fired when some card configuration settings are changed as a result of user interaction. For example - filter value is changed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Host</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCardConfigurationChange(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.Host#events/cardStateChanged">cardStateChanged</a> event of this <code>sap.ui.integration.Host</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Host</code> itself.</p><p>Fired when the state of a card is changed. For example - the card is ready, new page is selected inside the card, a filter is changed or data is refreshed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Host</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCardStateChanged(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.Host#events/message">message</a> event of this <code>sap.ui.integration.Host</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Host</code> itself.</p><p>Fired when a message from channels like navigator.serviceWorker is received.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Host</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachMessage(oData: any, fnFunction: any, oListener?: any): this;
                /**
                 * <p>This functions is called when a CSRF token has expired.</p>
                 * @param {any} mCSRFTokenConfig <p>The CSRF token configuration.</p>
                 */
                csrfTokenExpired(mCSRFTokenConfig: any): void;
                /**
                 * <p>This functions is called when a CSRF token is fetched.</p>
                 * @param {any} mCSRFTokenConfig <p>The CSRF token configuration.</p>
                 * @param {Promise<any>} pCSRFTokenValuePromise <p>A promise which resolves the CSRF token to its value.</p>
                 */
                csrfTokenFetched(mCSRFTokenConfig: any, pCSRFTokenValuePromise: Promise<any>): void;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.Host#events/action">action</a> event of this <code>sap.ui.integration.Host</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachAction(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.Host#events/cardConfigurationChange">cardConfigurationChange</a> event of this <code>sap.ui.integration.Host</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCardConfigurationChange(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.Host#events/cardStateChanged">cardStateChanged</a> event of this <code>sap.ui.integration.Host</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCardStateChanged(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.Host#events/message">message</a> event of this <code>sap.ui.integration.Host</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachMessage(fnFunction: any, oListener?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.Host#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireAction(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.Host#events/cardConfigurationChange">cardConfigurationChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCardConfigurationChange(mParameters?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.Host#events/cardStateChanged">cardStateChanged</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCardStateChanged(mParameters?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.integration.Host#events/message">message</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireMessage(mParameters?: any): this;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.Host#methods/getActions">actions</a>.</p><p>The actions configuration.</p>
                 * @returns sap.ui.integration.CardMenuAction[] <p>Value of property <code>actions</code></p>
                 */
                getActions(): sap.ui.integration.CardMenuAction[];
                /**
                 * <p>Returns the context object for the Card Editor design-time environment Contexts can be used to configure Cards with information available in the host environment. Each entry in the list should contain design-time information. A label, placeholder, and description should be provided.</p><p>Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged on user" } } } ... }</p><p>The context information and texts should be translated as they appear in the design-time UI of the Card Editor.</p>
                 * @returns Promise<any> <p>A promise which contains the context structure.</p>
                 */
                getContexts(): Promise<any>;
                /**
                 * <p>Resolves the value for a given path in the context of the host Contexts can be used to configure Cards with information available in the host environment.</p><p>Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged on user" } } } ... }</p><p>Example path to the current user id of the context sPath = "sap.workzone/currentUser/id" parameter: { userId: { value: "{context>sap.workzone/currentUser/id}" resolves to UserId } }</p>
                 * @param {string} sPath <p>The path to a context</p>
                 * @returns Promise<any> <p>A promise which resolves with the value of this context.</p>
                 */
                getContextValue(sPath: string): Promise<any>;
                /**
                 * <p>Resolves the CSRF token and returns a Promise with its value.</p>
                 * @param {any} mCSRFTokenConfig <p>The CSRF token configuration.</p>
                 * @returns Promise<any> <p>A promise which resolves the CSRF token to its value.</p>
                 */
                getCsrfToken(mCSRFTokenConfig: any): Promise<any>;
                /**
                 * <p>Resolves the destination and returns its URL.</p>
                 * @param {string} sDestinationName <p>The name of the destination.</p>
                 * @param {sap.ui.integration.widgets.Card} oCard <p>The card that depends on the destination. Most often the name which is used in the SAP Cloud Platform.</p>
                 * @returns Promise<any> <p>A promise which resolves with the URL of the destination.</p>
                 */
                getDestination(sDestinationName: string, oCard: sap.ui.integration.widgets.Card): Promise<any>;
                /**
                 * <p>Returns the list of destinations for the Card Editor design-time environment List entries are objects that contain at least the name. { "name": "DestinationName" }</p>
                 * @returns Promise<any> <p>A promise which resolves with the list of destinations.</p>
                 */
                getDestinations(): Promise<any>;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.Host#methods/getResolveDestination">resolveDestination</a>.</p><p>A function that resolves the given destination name to a URL.</p><p>The Card calls this function when it needs to send a request to a destination. Function returns the URL to which the request is sent.</p><p>If a card depends on a destination, but this callback is not implemented, an error will be logged.</p><p>The callback receives <code>destinationName</code> as parameter and returns a string with the URL. Or alternatively the callback may return a <code>Promise</code> with the URL as an argument.</p>
                 * @returns Function <p>Value of property <code>resolveDestination</code></p>
                 */
                getResolveDestination(): Function;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.Host#methods/getActions">actions</a>.</p><p>The actions configuration.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.integration.CardMenuAction[]} sActions <p>New value for property <code>actions</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setActions(sActions: sap.ui.integration.CardMenuAction[]): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.Host#methods/getResolveDestination">resolveDestination</a>.</p><p>A function that resolves the given destination name to a URL.</p><p>The Card calls this function when it needs to send a request to a destination. Function returns the URL to which the request is sent.</p><p>If a card depends on a destination, but this callback is not implemented, an error will be logged.</p><p>The callback receives <code>destinationName</code> as parameter and returns a string with the URL. Or alternatively the callback may return a <code>Promise</code> with the URL as an argument.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {Function} fnResolveDestination <p>New value for property <code>resolveDestination</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setResolveDestination(fnResolveDestination: Function): this;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        namespace iconEditor {
                            /**
                             * <p><p>Validates if the provided value belongs to the icon pool.</p></p>
                             */
                            namespace IsInIconPool {
                                /**
                                 * <p>Validator function</p>
                                 * @param {boolean | string} vValue <p>Value to validate</p>
                                 * @returns boolean <p>Validation result</p>
                                 */
                                function validate(vValue: boolean | string): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         * <p><p>Factory for the creation of <code>BasePropertyEditor</code> instances.</p></p>
                         */
                        namespace PropertyEditorFactory {
                            /**
                             * <p>Creates a new <code>BasePropertyEditor</code> instance of the given editor type.</p>
                             * @param {string} sPropertyType <p>Type of the property editor to create</p>
                             * @returns any <p>Promise resolving to the created editor</p>
                             */
                            function create(sPropertyType: string): any;
                            /**
                             * <p>Deregisters all editor types and removes the loaded classes.</p>
                             */
                            function deregisterAllTypes(): void;
                            /**
                             * <p>Deregisters a type and removes the loaded property editor class.</p>
                             * @param {string} sType <p>Editor type to deregister</p>
                             */
                            function deregisterType(sType: string): void;
                            /**
                             * <p>Registers classes for the given editor types. If an editor type is already registered, it will be skipped and must first be deregistered using the <code>PropertyEditorFactory.deregisterType</code> function.</p>
                             * @param {any} mTypes <p>Map containing pairs of editor type and the path to load the class from</p>
                             * @returns any <p>Resolves with a map with name and object of the registered PropertyEditors</p>
                             */
                            function registerTypes(mTypes: any): any;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value is a boolean or binding string.</p></p>
                         */
                        namespace IsBoolean {
                            /**
                             * <p>Validator function</p>
                             * @param {boolean | string} vValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(vValue: boolean | string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value can be parsed to a valid date.</p></p>
                         */
                        namespace IsDate {
                            /**
                             * <p>Validator function</p>
                             * @param {string} sDateString <p>Date string to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(sDateString: string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value is an integer or binding string.</p></p>
                         */
                        namespace IsInteger {
                            /**
                             * <p>Validator function</p>
                             * @param {number | string} vValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(vValue: number | string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value is a number or binding string.</p></p>
                         */
                        namespace IsNumber {
                            /**
                             * <p>Validator function</p>
                             * @param {number | string} vValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(vValue: number | string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value is one of the given keys.</p></p>
                         */
                        namespace IsSelectedKey {
                            /**
                             * <p>Validator function</p>
                             * @param {string} sValue <p>Key to validate</p>
                             * @param {any} oConfig <p>Validator config</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(sValue: string, oConfig: any): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if none of the provided values is an invalid binding.</p></p>
                         */
                        namespace IsStringList {
                            /**
                             * <p>Validator function</p>
                             * @param {string[]} aValue <p>Strings to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(aValue: string[]): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided key is unique in a list of given keys.</p></p>
                         */
                        namespace IsUniqueKey {
                            /**
                             * <p>Validator function</p>
                             * @param {string} sValue <p>New key value to validate</p>
                             * @param {any} oConfig <p>Validator config</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(sValue: string, oConfig: any): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided list contains no duplicates.</p></p>
                         */
                        namespace IsUniqueList {
                            /**
                             * <p>Validator function</p>
                             * @param {string} aValue <p>List to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(aValue: string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value is a valid binding.</p></p>
                         */
                        namespace IsValidBinding {
                            /**
                             * <p>Validator function</p>
                             * @param {string} sValue <p>Value to validate</p>
                             * @param {any} oConfig <p>Validator config</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(sValue: string, oConfig: any): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value doesn't exceed the maximum length.</p></p>
                         */
                        namespace MaxLength {
                            /**
                             * <p>Validator function</p>
                             * @param {boolean | string} vValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(vValue: boolean | string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Validates if the provided value doesn't contain a binding.</p></p>
                         */
                        namespace NotABinding {
                            /**
                             * <p>Validator function</p>
                             * @param {string} sValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(sValue: string): boolean;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace validator {
                        /**
                         * <p><p>Registry for property editor validators.</p></p>
                         */
                        namespace ValidatorRegistry {
                            /**
                             * <p>Deregisters all validators.</p>
                             */
                            function deregisterAllValidators(): void;
                            /**
                             * <p>Deregisters the given validator type and cancels the loading.</p>
                             * @param {string} sName <p>Validator type to deregister</p>
                             */
                            function deregisterValidators(sName: string): void;
                            /**
                             * <p>Returns the validator for the given type if it was loaded.</p>
                             * @param {string} sName <p>Validator type</p>
                             * @returns any <p>Validator</p>
                             */
                            function getValidator(sName: string): any;
                            /**
                             * <p>Checks whether the given validator type was registered but not loaded yet.</p>
                             * @param {string} sName <p>Validator type</p>
                             * @returns boolean <p>Whether the validator was registered</p>
                             */
                            function isRegistered(sName: string): boolean;
                            /**
                             * <p>Ready check to make sure that all registered validators were loaded.</p>
                             * @returns Promise<any> <p>Promise which resolves when all validators are ready</p>
                             */
                            function ready(): Promise<any>;
                            /**
                             * <p>Registers the given validator types. If a validator type is already registered, it will be skipped and must first be deregistered using the <code>ValidatorRegistry.deregisterValidator</code> function.</p>
                             * @param {any} mNames <p>Validator types and paths to register</p>
                             */
                            function registerValidators(mNames: any): void;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace util {
                /**
                 * <p><p>Util class for preprocessing of card manifests.</p></p>
                 */
                namespace ManifestResolver {
                }
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
            namespace designtime {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                /**
                 */
                namespace baseEditor {
                    /**
                     * <h3>Overview</h3><p> Configurable JSON editor </p><h4>Example</h4><p> <pre>
                    sap.ui.require(["sap/ui/integration/designtime/baseEditor/BaseEditor"], function (Editor) {
                        var oJson = {
                            root: {
                                context: {
                                    id: "404",
                                    name: "Kate",
                                    role: "End User"
                                },
                                foo: {
                                    bar: true
                                }
                            }
                        };
                        var oEditor = new Editor();
                        oEditor.setJson(oJson);
                        oEditor.setConfig({
                            "context": "root/context",
                            "properties" : {
                                "name": {
                                    "label": "Name",
                                    "path": "name",
                                    "type": "string"
                                },
                                "role": {
                                    "label": "Role",
                                    "path": "role",
                                    "type": "enum",
                                    "enum": ["Developer", "Key User", "End User"]
                                },
                                "department": {
                                    "label": "Department",
                                    "path": "department",
                                    "type": "enum",
                                    "enum": ["Sales", "HR", "Development"],
                                    "visible": "{= ${context>/role} === 'Key User'}"
                                }
                            },
                            "propertyEditors": {
                                "enum" : "sap/ui/integration/designtime/baseEditor/propertyEditors/enumStringEditor/EnumStringEditor",
                                "string" : "sap/ui/integration/designtime/baseEditor/propertyEditors/stringEditor/StringEditor"
                            }
                        });
                        oEditor.attachJsonChange(function(oEvent) {
                            var oJson = oEvent.getParameter("json");
                            // live change
                        })
                        oEditor.placeAt("content");
                    })
                    </pre></p>
                     */
                    export class BaseEditor extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>Renders one of the <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor">property editors</a> based on a specified <code>propertyName</code> or custom <code>config</code>.</p>
                     */
                    export class PropertyEditor extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>Renders a group of <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor">property editors</a> based on specified <code>tags</code> or custom <code>config</code>.</p>
                     */
                    export class PropertyEditors extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    /**
                     */
                    namespace util {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    /**
                     */
                    namespace layout {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace layout {
                        /**
                         */
                        namespace Form {
                            /**
                             * <p><p>Group definition. Defines list of fields (property editors) which should be included in the group.</p></p>
                             */
                            export interface Group {
                            }
                            /**
                             * <p><p>Group Item definition.</p></p>
                             */
                            export interface GroupItem {
                            }
                            /**
                             * <p><p>Object declaration for property editor configuration.</p></p>
                             */
                            export interface PropertyEditorConfig {
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    /**
                     */
                    namespace propertyEditor {
                        /**
                         * <p>Base class for property editor implementations.</p>
                         */
                        export class BasePropertyEditor extends sap.ui.core.Control {
                            /**
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                            /**
                             * <p>Sets the editor value. If no value is provided, the default value provided in the config will be used instead. This method triggers the ready check, therefore it should also be called when overridden in complex editors.</p>
                             * @param {any} vValue <p>Editor value that was already processed by a custom setValue implementation</p>
                             * @param {boolean} bSuppressValidation <p>Whether to set the value regardless of the validation result, false by default</p>
                             */
                            setValue(vValue: any, bSuppressValidation: boolean): void;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace arrayEditor {
                            /**
                             * <p>Constructor for a new <code>ArrayEditor</code>.</p><p>This property editor allows you to edit arrays in a flat way. To get notified about changes made with the editor, you can use the <code>valueChange</code> event.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowAddAndRemove</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow adding and removing array items</td> </tr> <tr> <td><code>allowSorting</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow changing the order of array items</td> </tr> <tr> <td><code>collapsibleItems</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to render collapsible groups for array items or the plain array editor style</td> </tr> <tr> <td><code>showItemLabel</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to show the item label in the plain array editor</td> </tr> <tr> <td><code>template</code></td> <td><code>object</code></td> <td><code>{}</code></td> <td>Editor configurations for the nested editors of each item</td> </tr> </table></p>
                             */
                            export class ArrayEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace booleanEditor {
                            /**
                             * <p>Constructor for a new <code>BooleanEditor</code>. This allows you to set boolean values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a boolean or binding string to the provided callback function when the state changes.</p>
                             */
                            export class BooleanEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace codeEditor {
                            /**
                             * <p>Constructor for a new <code>CodeEditor</code>. This allows to set code text values for a specified property. The editor is rendered as a <a target="_self" href="api/sap.ui.CodeEditor">sap.ui.CodeEditor</a> inside a <a target="_self" href="api/sap.m.Dialog">sap.m.Dialog</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as an object to the provided callback function when the user saves changes in the dialog.</p>
                             */
                            export class CodeEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace dateEditor {
                            /**
                             * <p>Constructor for a new <code>DateEditor</code>. This allows to set date values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.DatePicker">sap.m.DatePicker</a>.</p>
                             */
                            export class DateEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace dateTimeEditor {
                            /**
                             * <p>Constructor for a new <code>DateTimeEditor</code>. This allows to set datetime values for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.DateTimePicker">sap.m.DateTimePicker</a>.</p>
                             */
                            export class DateTimeEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.dateEditor.DateEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.dateEditor.DateEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.dateEditor.DateEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace enumStringEditor {
                            /**
                             * <p>Constructor for a new <code>EnumStringEditor</code>. This allows to select from predefined string values or to provide binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowCustomValues</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>Whether custom values can be set instead of selecting items</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> </table></p>
                             */
                            export class EnumStringEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace groupEditor {
                            /**
                             * <p>Constructor for a new <code>GroupEditor</code>. This allows to set a group title or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.Title">sap.m.Title</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class GroupEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace iconEditor {
                            /**
                             * <p>Constructor for a <code>IconEditor</code>. This allows to set icon URIs or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.Input">sap.m.Input</a> with a <a target="_self" href="api/sap.m.SelectDialog">sap.m.SelectDialog</a> value help. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string containing an icon URI or as a binding string to the provided callback function when the user edits the input or selects an item in the dialog.</p>
                             */
                            export class IconEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace integerEditor {
                            /**
                             * <p>Constructor for a new <code>IntegerEditor</code>. This allows you to set integer values or binding paths for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.Input">sap.m.Input</a>, which prevents non-integer user input unless it is a valid binding path.</p>
                             */
                            export class IntegerEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.numberEditor.NumberEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.numberEditor.NumberEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.numberEditor.NumberEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace jsonEditor {
                            /**
                             * <p>Constructor for a new <code>JsonEditor</code>. This allows to set json text values for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.ui.codeeditor.CodeEditor">sap.ui.codeeditor.CodeEditor</a> inside a <a target="_self" href="api/sap.m.Dialog">sap.m.Dialog</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as an object to the provided callback function when the user saves changes in the dialog.</p>
                             */
                            export class JsonEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace listEditor {
                            /**
                             * <p>Constructor for a new <code>ListEditor</code>. This editor allows to add items to and remove items from string arrays. The editor is rendered as a <a target="_self" href="api/sap.m.MultiInput">sap.m.MultiInput</a>.</p>
                             */
                            export class ListEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace mapEditor {
                            /**
                             * <p>Constructor for a new <code>MapEditor</code> for editing key-value pairs with primitive values. To get notified about changes made with the editor, you can attach a handler to the <code>valueChange</code> event.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowKeyChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the key attribute of map entries</td> </tr> <tr> <td><code>allowTypeChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the type of map entries</td> </tr> <tr> <td><code>allowAddAndRemove</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow adding and removing map entries</td> </tr> <tr> <td><code>allowedTypes</code></td> <td><code>string[]</code></td> <td><code>["string"]</code></td> <td>List of editor types which are supported in the map</td> </tr> <tr> <td><code>includeInvalidEntries</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to show entries with invalid types if the <code>StringEditor</code> cannot be used as a fallback</td> </tr> <tr> <td><code>allowSorting</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow changing the order of items.</td> </tr> <tr> <td><code>addItemLabelI18n</code></td> <td><code>string</code></td> <td><code>BASE_EDITOR.MAP.DEFAULT_TYPE</code></td> <td>I18n key for the item in the "Add: Item" label, e.g. "Add: Parameter" by default</td> </tr> <tr> <td><code>defaultType</code></td> <td><code>string</code></td> <td><code>null</code></td> <td>Default type for all map items. If <code>null</code>, the editor will try to derive the type from the value or fall back to "string"</td> </tr> </table></p>
                             */
                            export class MapEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace multiSelectEditor {
                            /**
                             * <p>Constructor for a new <code>MultiSelectEditor</code>. This allows to select from predefined list or to provide binding list for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.MultiComboBox">sap.m.MultiComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowCustomValues</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>Whether custom values can be set instead of selecting items</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> </table></p>
                             */
                            export class MultiSelectEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace numberEditor {
                            /**
                             * <p>Constructor for a new <code>NumberEditor</code>. This allows you to set numeric values or binding paths for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.Input">sap.m.Input</a>, which prevents non-numeric user input unless it is a valid binding path. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property value as a number or binding string to the provided callback function when the state changes.</p>
                             */
                            export class NumberEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace objectArrayEditor {
                            /**
                             * <p>Constructor for a new <code>ObjectArrayEditor</code>. This allows to set a code editor or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.TextArea">sap.m.TextArea</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>type</code></td> <td><code>string</code></td> <td><code>json</code></td> <td>The type of the code in the editor used for syntax highlighting</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class ObjectArrayEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.codeEditor.CodeEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.codeEditor.CodeEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.codeEditor.CodeEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace selectEditor {
                            /**
                             * <p>Constructor for a new <code>SelectEditor</code>. This allows to select from predefined string values or to provide binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowCustomValues</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>Whether custom values can be set instead of selecting items</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> </table></p>
                             */
                            export class SelectEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace separatorEditor {
                            /**
                             * <p>Constructor for a new <code>SeparatorEditor</code>. This allows to add a separator between parameters. The editor is rendered as a <a target="_self" href="api/sap.m.ToolbarSpacer">sap.m.ToolbarSpacer</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class SeparatorEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace stringEditor {
                            /**
                             * <p>Constructor for a new <code>StringEditor</code>. This allows to set string values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.Input">sap.m.Input</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string or binding string to the provided callback function when the user edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>enabled</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether the underlying control should be enabled</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>placeholder</code></td> <td><code>string</code></td> <td></td> <td>Placeholder for the input field</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class StringEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace textAreaEditor {
                            /**
                             * <p>Constructor for a new <code>TextAreaEditor</code>. This allows to set a code editor or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" href="api/sap.m.TextArea">sap.m.TextArea</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>type</code></td> <td><code>string</code></td> <td><code>json</code></td> <td>The type of the code in the editor used for syntax highlighting</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class TextAreaEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace baseEditor {
                    /**
                     */
                    namespace validator {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                /**
                 */
                namespace cardEditor {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    /**
                     */
                    namespace propertyEditor {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace complexMapEditor {
                            /**
                             * <p>Constructor for a new <code>ComplexMapEditor</code> for editing key-value pairs with object values.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowKeyChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to render an editor for the key attribute of map entries</td> </tr> <tr> <td><code>allowAddAndRemove</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow adding and removing map entries</td> </tr> <tr> <td><code>keyLabel</code></td> <td><code>string</code></td> <td><code>"Key"</code></td> <td>The label to show for the <code>key</code> field. Default is the localized string "Key".</td> </tr> </table></p>
                             */
                            export class ComplexMapEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace destinationsEditor {
                            /**
                             * <p>Constructor for a new <code>DestinationsEditor</code>.</p><h3>Configuration</h3><p>Configuration is inherited from <a target="_self" href="api/sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor">sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor</a></p><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowedValues</code></td> <td><code>string[]</code></td> <td><code>[]</code></td> <td>Allowed destination values</td> </tr> </table></p>
                             */
                            export class DestinationsEditor extends sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor#constructor">sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace filtersEditor {
                            /**
                             * <p>Constructor for a new <code>FiltersEditor</code>.</p><h3>Configuration</h3><p>Configuration is inherited from <a target="_self" href="api/sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor">sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor</a></p><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowedTypes</code></td> <td><code>string[]</code></td> <td><code>[]</code></td> <td>Allowed filter types</td> </tr> </table></p>
                             */
                            export class FiltersEditor extends sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor#constructor">sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace iconEditor {
                            /**
                             * <p>Constructor for a new <code>IconEditor</code>. This allows to set icon Object properties for a specified property of a JSON object. The type of the icon can be "icon", "text" or "picture" Properties of the icon are "src", "text" "alt", "shape"</p>
                             */
                            export class IconEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace cardEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace parametersEditor {
                            /**
                             * <p>Constructor for a new <code>ParametersEditor</code> for editing key-value pairs with primitive values, labels and persisted type information.</p><h3>Configuration</h3><p>Configuration is inherited from <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor">sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor</a></p><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowLabelChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the label of parameters</td> </tr> </table></p>
                             */
                            export class ParametersEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor#constructor">sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor</a> can be used.</p>
                                 */
                                constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                /**
                 */
                namespace editor {
                    /**
                     */
                    export class CardPreview extends sap.ui.core.Control {
                        /**
                         * <p>Constructor for a new <code>Preview</code> that show a image, abstract live preview</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace editor {
                /**
                 * <p><p>Facade of the <a target="_self" href="api/sap.ui.integration.editor.Editor">sap.ui.integration.editor.Editor</a> control.</p></p>
                 */
                export interface EditorFacade {
                }
                /**
                 */
                export class EditorResourceBundles {
                    /**
                     */
                    constructor();
                }
                /**
                 * <p>Brings JavaScript capabilities for an <a target="_self" href="api/sap.ui.integration.editor.Editor">sap.ui.integration.editor.Editor</a> where custom logic can be implemented.</p>
                 */
                export class Extension extends sap.ui.integration.Extension {
                    /**
                     * <p>Constructor for a new <code>Extension</code>.</p>
                     * @param {string} sId <p>ID for the new extension, generated automatically if no ID is given.</p>
                     * @param {any} mSettings <p>Initial settings for the new extension.</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Returns an interface to the editor, which uses this extension.</p>
                     * @returns sap.ui.integration.widgets.CardFacade <p>An interface to the card.</p>
                     */
                    getEditor(): sap.ui.integration.widgets.CardFacade;
                    /**
                     * <p>Called when the editor is ready.</p>
                     */
                    onEditorReady(): void;
                }
                /**
                 */
                export class Settings extends sap.ui.core.Control {
                    /**
                     * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.core.Control#constructor">sap.ui.core.Control</a> can be used.</p>
                     */
                    constructor();
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace editor {
                /**
                 */
                namespace fields {
                    /**
                     */
                    export class BaseField extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class BooleanField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class DateField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class DateTimeField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class DestinationField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>Group Field which will contains multi parameters via Panel/Tab</p>
                     */
                    export class GroupField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class IntegerField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class NumberField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>Object Field with object value such as {"key": "key1"}</p>
                     */
                    export class ObjectField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>Object List Field with object list value, such as [{"key": "key1"}, {"key": "key2"}]</p>
                     */
                    export class ObjectListField extends sap.ui.integration.editor.fields.ObjectField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.ObjectField#constructor">sap.ui.integration.editor.fields.ObjectField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class StringField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                    /**
                     * <p>String List Field with string list value, such as ["value1", "value2"]</p>
                     */
                    export class StringListField extends sap.ui.integration.editor.fields.BaseField {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.editor.fields.BaseField#constructor">sap.ui.integration.editor.fields.BaseField</a> can be used.</p>
                         */
                        constructor();
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace editor {
                namespace fields {
                    /**
                     */
                    namespace fragment {
                        /**
                         * <p>Visualization Fragment Control</p>
                         */
                        export class Controller extends sap.ui.core.mvc.Controller {
                            /**
                             */
                            constructor();
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace editor {
                namespace fields {
                    /**
                     */
                    namespace viz {
                        /**
                         */
                        export class ColorSelect extends sap.ui.integration.editor.fields.viz.VizBase {
                            /**
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         */
                        export class IconSelect extends sap.ui.integration.editor.fields.viz.VizBase {
                            /**
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         */
                        export class ShapeSelect extends sap.ui.integration.editor.fields.viz.VizBase {
                            /**
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>Visualization Base Control</p>
                         */
                        export class VizBase extends sap.ui.core.Control {
                            /**
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace services {
                /**
                 */
                export class Service {
                    /**
                     * <p>Base class for all services. To inherit use the extend method <code>Service.extend</code></p>
                     */
                    constructor();
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace util {
                /**
                 * <p>Fetches and provides CSRF tokens for data requests. Tokens are shared between cards per user session.</p>
                 */
                export class CsrfTokenHandler extends sap.ui.base.Object {
                    /**
                     * <p>Constructor for a new <code>CsrfTokenHandler</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.base.Object#constructor">sap.ui.base.Object</a> can be used.</p>
                     * @param {sap.ui.integration.Host} oHost <p>The Host which will be used for resolve CSRF tokens.</p>
                     * @param {any} oConfiguration <p>The CSRF configuration from the manifest.</p>
                     */
                    constructor(oHost: sap.ui.integration.Host, oConfiguration: any);
                    /**
                     * <p>Deletes a token based on a data configuration object which contains a CSRF placeholder in its headers property.</p>
                     * @param {any} oDataConfig <p>Data configuration object</p>
                     */
                    resetTokenByRequest(oDataConfig: any): void;
                    /**
                     * <p>Resolves CSRF placeholders to actual values within a data configuration object.</p>
                     * @param {any} oDataConfig <p>Data configuration object</p>
                     * @returns Promise<any> <p>A promise which resolves with the data configuration object containing resolved CSRF token values</p>
                     */
                    resolveToken(oDataConfig: any): Promise<any>;
                    /**
                     * <p>Saves a reference to the DataProviderFactory to create own data requests. Those CSRF placeholders may contain destinations placeholders which need to be resolved prior to making the request.</p>
                     * @param {sap.ui.integration.util.DataProviderFactory} oDataProviderFactory <p>the factory</p>
                     */
                    setDataProviderFactory(oDataProviderFactory: sap.ui.integration.util.DataProviderFactory): void;
                }
                /**
                 * <p>Provides data for the card, card header and card content by reading the "data" part of the card manifest. Hides the complexity of working with different data providers like: - static JSON data - data services which implements the interface <code>sap.ui.integration.services.Data</code> class - AJAX calls like <code>sap.ui.integration.cards.Data</code> class Allows for an extensible way to add more data providers.</p>
                 */
                export class DataProvider extends sap.ui.base.ManagedObject {
                    /**
                     * <p>Constructor for a new <code>DataProvider</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new data provider, generated automatically if no ID is given.</p>
                     * @param {any} mSettings <p>Initial settings for the new data provider.</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * @returns string <p>Details about the provider, to be used for logging.</p>
                     */
                    protected getDetails(): string;
                }
                /**
                 * <p>A factory class which creates a data provider based on data settings and stores the created instance. When destroyed, all data providers created by this class are also destroyed.</p>
                 */
                export class DataProviderFactory extends sap.ui.base.Object {
                    /**
                     */
                    constructor();
                }
                /**
                 */
                export class RequestDataProvider extends sap.ui.integration.util.DataProvider {
                    /**
                     * <p>Constructor for a new <code>RequestDataProvider</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new data provider, generated automatically if no ID is given.</p>
                     * @param {any} mSettings <p>Initial settings for the new data provider.</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                }
                /**
                 * <p>Represents a card which can work without being rendered.</p>
                 */
                export class SkeletonCard extends sap.ui.integration.widgets.Card {
                    /**
                     * <p>Constructor for a new <code>SkeletonCard</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.integration.widgets.Card#constructor">sap.ui.integration.widgets.Card</a> can be used.</p>
                     */
                    constructor();
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace widgets {
                /**
                 * <p>A control that represents a container with a header and content.</p><h3>Overview</h3><p> Cards are small user interface elements which provide the most important information from an app, related to a specific role or task. The information is represented in a compact manner, allowing for actions to be executed. Cards can be described as small representations of an app which can be integrated in different systems.</p><p>The integration card is defined in a declarative way, using a manifest.json to be: <ul> <li>Easily integrated into apps</li> <li>Easily reused across apps</li> <li>Understandable by other technologies</li> <li>Self-contained (has a built-in functionality and doesn't need external configuration)</li> <li>Dynamic parameter handling</li> <li>Clear separation of the roles of the card and app developers</li> </ul></p><p>The role of the card developer is to describe the card in a manifest.json file and define: <ul> <li>Header</li> <li>Content</li> <li>Data source</li> <li>Possible actions</li> </ul></p><p>The role of the app developer is to integrate the card into the app and define: <ul> <li>The dimensions of the card inside a layout of choice, using the <code>width</code> and <code>height</code> properties</li> <li>The behavior for the actions described in the manifest.json file, using the action event</li> </ul></p><p><strong>You can learn more about integration cards in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/ui/integration/demokit/cardExplorer/index.html">Card Explorer</a>
                            <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
                            title="Information published on SAP site" class="sapUISDKExternalLink"/></strong></p><p><i>When to use</i> <ul> <li>When you want to reuse the card across apps.</li> <li>When you need easy integration and configuration.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you need more header and content flexibility.</li> <li>When you have to achieve simple card visualization. For such cases, use: <a target="_self" href="api/sap.f.Card">sap.f.Card</a>.</li> <li>When you have to use an application model. For such cases, use: <a target="_self" href="api/sap.f.Card">sap.f.Card</a>.</li> <li>When you need complex behavior. For such cases, use: <a target="_self" href="api/sap.f.Card">sap.f.Card</a>.</li> </ul></p>
                 */
                export class Card extends sap.f.CardBase {
                    /**
                     * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some actionDefinition to the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p>
                     * @param {sap.ui.integration.ActionDefinition} oActionDefinition <p>The actionDefinition to add; if empty, nothing is inserted</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addActionDefinition(oActionDefinition: sap.ui.integration.ActionDefinition): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when an action is triggered on the card.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachAction(oData: any, fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/configurationChange">configurationChange</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when some configuration settings are changed as a result of user interaction. For example - filter value is changed.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachConfigurationChange(oData: any, fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestApplied">manifestApplied</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when card utilities (like <code>DataProviderFactory</code>) and the card elements (like header) are created and initialized.</p><p>Note: The card's content may not be available yet because it may depend on other resources to load.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachManifestApplied(oData: any, fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when the manifest is loaded.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachManifestReady(oData: any, fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/stateChanged">stateChanged</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when the state of the card is changed. For example - the card is ready, new page is selected, a filter is changed or data is refreshed.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {any} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachStateChanged(oData: any, fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Destroys all the actionDefinitions in the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyActionDefinitions(): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachAction(fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/configurationChange">configurationChange</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachConfigurationChange(fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestApplied">manifestApplied</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachManifestApplied(fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachManifestReady(fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.integration.widgets.Card#events/stateChanged">stateChanged</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachStateChanged(fnFunction: any, oListener?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.integration.widgets.Card#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns boolean <p>Whether or not to prevent the default action</p>
                     */
                    protected fireAction(mParameters?: any): boolean;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.integration.widgets.Card#events/configurationChange">configurationChange</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireConfigurationChange(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestApplied">manifestApplied</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireManifestApplied(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireManifestReady(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.integration.widgets.Card#events/stateChanged">stateChanged</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireStateChanged(mParameters?: any): this;
                    /**
                     * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p><p>Actions definitions from which actions in the header menu of the card are created. <b>Note</b>: This aggregation is destroyed when the property <code>manifest</code> changes.</p>
                     * @returns sap.ui.integration.ActionDefinition[] 
                     */
                    getActionDefinitions(): sap.ui.integration.ActionDefinition[];
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p>
                     * @returns sap.ui.core.URI <p>Value of property <code>baseUrl</code></p>
                     */
                    getBaseUrl(): sap.ui.core.URI;
                    /**
                     * <p>Gets values of manifest parameters combined with the parameters from <code>parameters</code> property.</p><p><b>Notes</b></p><p>- Use this method when the manifest is ready. Check <code>manifestReady</code> event.</p><p>- Use when developing a Component card.</p>
                     * @returns any <p>Object containing parameters in format <code>{parameterKey: parameterValue}</code>.</p>
                     */
                    getCombinedParameters(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getDataMode">dataMode</a>.</p><p>Defines the state of the <code>Card</code>. When set to <code>Inactive</code>, the <code>Card</code> doesn't make requests.</p><p>Default value is <code>Active</code>.</p>
                     * @returns sap.ui.integration.CardDataMode <p>Value of property <code>dataMode</code></p>
                     */
                    getDataMode(): sap.ui.integration.CardDataMode;
                    /**
                     * <p>Returns the DOM Element that should get the focus.</p>
                     * @returns HTMLElement <p>Returns the DOM Element that should get the focus</p>
                     */
                    protected getFocusDomRef(): HTMLElement;
                    /**
                     * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getHost(): sap.ui.core.ID;
                    /**
                     * <p>Gets the instance of the <code>host</code> association.</p>
                     * @returns sap.ui.integration.Host <p>The host object associated with this card.</p>
                     */
                    getHostInstance(): sap.ui.integration.Host;
                    /**
                     * <p>Overwrites getter for card manifest.</p>
                     * @returns string|Object <p>Cloned of the parameters.</p>
                     */
                    getManifest(): string | any;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getManifestChanges">manifestChanges</a>.</p><p>Defines a list of configuration settings, which will be merged into the original manifest.</p><p>This can be a list of flexibility changes generated during designtime.</p><p>Each item in the array represents a separate level of changes. For example, the first item might be created by an administrator, the second by a page administrator and the third by the end user.</p><p>The order of the items is the order in which the changes will be merged on top of each other. So the last item will overwrite the previous items where the paths match.</p><p>Example: <pre>
                    [
                        {
                            // Administrator
                            "/sap.card/header/title": "My Configured Title in Default Language",
                            "/sap.card/content/maxItems": 10,
                            "texts": {
                                "en-US": {
                                    "/sap.card/header/title": "My Configured Title in US-English"
                                }
                            }
                        },
                        {
                            // Page administrator
                            "/sap.card/content/maxItems": 5
                        },
                        {
                            // End user
                         "/sap.card/header/title": "Title by End User",
                            "/sap.card/content/maxItems": 8
                        }
                    ]
                    </pre></p>
                     * @returns object[] <p>Value of property <code>manifestChanges</code></p>
                     */
                    getManifestChanges(): object[];
                    /**
                     * <p>Returns a value from the Manifest based on the specified path.</p><p><b>Note</b> Use this method when the manifest is ready. Check <code>manifestReady</code> event.</p>
                     * @param {string} sPath <p>The path to return a value for.</p>
                     * @returns any <p>The value at the specified path.</p>
                     */
                    getManifestEntry(sPath: string): any;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getReferenceId">referenceId</a>.</p><p>Optional property which can be used by the host to reference the card. It will be forwarded to any children cards. Does not affect the card behavior.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns string <p>Value of property <code>referenceId</code></p>
                     */
                    getReferenceId(): string;
                    /**
                     * <p>Gets translated text from the i18n properties files configured for this card.</p><p>For more details see <a target="_self" href="api/module:sap/base/i18n/ResourceBundle#methods/getText">module:sap/base/i18n/ResourceBundle#getText</a>.</p>
                     * @param {string} sKey <p>Key to retrieve the text for</p>
                     * @param {string[]} aArgs <p>List of parameter values which should replace the placeholders "{<i>n</i>}" (<i>n</i> is the index) in the found locale-specific string value. Note that the replacement is done whenever <code>aArgs</code> is given, no matter whether the text contains placeholders or not and no matter whether <code>aArgs</code> contains a value for <i>n</i> or not.</p>
                     * @param {boolean} bIgnoreKeyFallback <p>If set, <code>undefined</code> is returned instead of the key string, when the key is not found in any bundle or fallback bundle.</p>
                     * @returns string <p>The value belonging to the key, if found; otherwise the key itself or <code>undefined</code> depending on <code>bIgnoreKeyFallback</code>.</p>
                     */
                    getTranslatedText(sKey: string, aArgs?: string[], bIgnoreKeyFallback?: boolean): string;
                    /**
                     * <p>Hides the loading placeholders on the whole card, or a particular section of the card.</p>
                     * @param {sap.ui.integration.CardArea} eCardArea <p>Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'. Leave empty to hide loading placeholders on all areas of the card.</p>
                     */
                    hideLoadingPlaceholders(eCardArea?: sap.ui.integration.CardArea): void;
                    /**
                     * <p>Checks for the provided <code>sap.ui.integration.ActionDefinition</code> in the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.integration.ActionDefinition} oActionDefinition <p>The actionDefinition whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfActionDefinition(oActionDefinition: sap.ui.integration.ActionDefinition): number;
                    /**
                     * <p>Inserts a actionDefinition into the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p>
                     * @param {sap.ui.integration.ActionDefinition} oActionDefinition <p>The actionDefinition to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the actionDefinition should be inserted at; for a negative value of <code>iIndex</code>, the actionDefinition is inserted at position 0; for a value greater than the current size of the aggregation, the actionDefinition is inserted at the last position</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertActionDefinition(oActionDefinition: sap.ui.integration.ActionDefinition, iIndex: number): this;
                    /**
                     * @returns boolean <p>If the card is ready or not.</p>
                     */
                    isReady(): boolean;
                    /**
                     * <p>Loads the module designtime/Card.designtime or the module given in "sap.card": { "designtime": "designtime/Own.designtime" } This file should contain the designtime configuration for the card.</p><p>Returns a promise that resolves with an object { designtime: the designtime modules response manifest: the complete manifest json } The promise is rejected if the module cannot be loaded with an object: { error: "Card.designtime not found" }</p>
                     * @returns Promise<any> <p>Promise resolves after the designtime configuration is loaded.</p>
                     */
                    loadDesigntime(): Promise<any>;
                    /**
                     * <p>Refreshes the card by re-applying the manifest settings and triggering all data requests.</p>
                     */
                    refresh(): void;
                    /**
                     * <p>Refreshes the card data by triggering all data requests.</p>
                     */
                    refreshData(): void;
                    /**
                     * <p>Removes a actionDefinition from the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p>
                     * @param {number | string | sap.ui.integration.ActionDefinition} vActionDefinition <p>The actionDefinition to remove or its index or id</p>
                     * @returns sap.ui.integration.ActionDefinition|null <p>The removed actionDefinition or <code>null</code></p>
                     */
                    removeActionDefinition(vActionDefinition: number | string | sap.ui.integration.ActionDefinition): sap.ui.integration.ActionDefinition | null;
                    /**
                     * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getActionDefinitions">actionDefinitions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.integration.ActionDefinition[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllActionDefinitions(): sap.ui.integration.ActionDefinition[];
                    /**
                     * <p>Performs an HTTP request using the given configuration.</p>
                     * @param {any} oConfiguration <p>The configuration of the request.</p>
                     * @returns Promise<any> <p>Resolves when the request is successful, rejects otherwise.</p>
                     */
                    request(oConfiguration: any): Promise<any>;
                    /**
                     * <p>Resolves the destination and returns its URL.</p>
                     * @param {string} sKey <p>The destination's key used in the configuration.</p>
                     * @returns Promise<any> <p>A promise which resolves with the URL of the destination.</p>
                     */
                    resolveDestination(sKey: string): Promise<any>;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.URI} sBaseUrl <p>New value for property <code>baseUrl</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBaseUrl(sBaseUrl?: sap.ui.core.URI): this;
                    /**
                     * <p>Sets a new value for the <code>dataMode</code> property.</p>
                     * @param {sap.ui.integration.CardDataMode} sMode <p>The mode to set to the Card.</p>
                     * @returns this <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setDataMode(sMode: sap.ui.integration.CardDataMode): this;
                    /**
                     * <p>Sets the associated <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} oHost <p>ID of an element which becomes the new target of this host association; alternatively, an element instance may be given</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHost(oHost: sap.ui.core.ID | sap.ui.core.Control): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getManifest">manifest</a>.</p><p>The URL of the manifest or an object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {any} oManifest <p>New value for property <code>manifest</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManifest(oManifest?: any): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getManifestChanges">manifestChanges</a>.</p><p>Defines a list of configuration settings, which will be merged into the original manifest.</p><p>This can be a list of flexibility changes generated during designtime.</p><p>Each item in the array represents a separate level of changes. For example, the first item might be created by an administrator, the second by a page administrator and the third by the end user.</p><p>The order of the items is the order in which the changes will be merged on top of each other. So the last item will overwrite the previous items where the paths match.</p><p>Example: <pre>
                    [
                        {
                            // Administrator
                            "/sap.card/header/title": "My Configured Title in Default Language",
                            "/sap.card/content/maxItems": 10,
                            "texts": {
                                "en-US": {
                                    "/sap.card/header/title": "My Configured Title in US-English"
                                }
                            }
                        },
                        {
                            // Page administrator
                            "/sap.card/content/maxItems": 5
                        },
                        {
                            // End user
                         "/sap.card/header/title": "Title by End User",
                            "/sap.card/content/maxItems": 8
                        }
                    ]
                    </pre></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {object[]} sManifestChanges <p>New value for property <code>manifestChanges</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManifestChanges(sManifestChanges: object[]): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.integration.widgets.Card#methods/getReferenceId">referenceId</a>.</p><p>Optional property which can be used by the host to reference the card. It will be forwarded to any children cards. Does not affect the card behavior.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {string} sReferenceId <p>New value for property <code>referenceId</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setReferenceId(sReferenceId?: string): this;
                    /**
                     * <p>Displays the loading placeholders on the whole card, or a particular area of the card. <b>Note:</b> Only areas that contain binding will receive a loading placeholder.</p>
                     * @param {sap.ui.integration.CardArea} eCardArea <p>Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'. Leave empty to show loading placeholders on all areas of the card.</p>
                     */
                    showLoadingPlaceholders(eCardArea?: sap.ui.integration.CardArea): void;
                    /**
                     * <p>Displays a message strip above the content with the given text. There can be only 1 message displayed. If there is a previous message, it is removed. Can be used only after the <code>manifestApplied</code> event is fired.</p>
                     * @param {string} sMessage <p>The message.</p>
                     * @param {sap.ui.core.MessageType} sType <p>Type of the message.</p>
                     */
                    showMessage(sMessage: string, sType: sap.ui.core.MessageType): void;
                    /**
                     * <p>Triggers an action inside the card.</p><p>Use this method if you need to trigger an action programmatically from inside an <code>Extension</code> or from a Component card.</p><p>For other use cases use the manifest to define the actions. See <a target="_blank" rel="noopener noreferrer" href="https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions">https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions</a>
                                <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
                                title="Information published on SAP site" class="sapUISDKExternalLink"/></p><h3>Example</h3><p> <pre>
                    oCard.triggerAction({
                        type: "Navigation",
                        parameters: {
                            url: "...",
                            target: "_blank"
                        }
                    });
                    </pre></p>
                     * @param {any} oAction <p>The settings of the action.</p>
                     */
                    triggerAction(oAction: any): void;
                    /**
                     * <p>Causes all of the controls within the Card that support validation to validate their data.</p>
                     * @returns boolean <p>if all of the controls validated successfully; otherwise, false</p>
                     */
                    validateControls(): boolean;
                }
                /**
                 * <p><p>Facade of the <a target="_self" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> control.</p></p>
                 */
                export interface CardFacade {
                }
            }
        }
    }
}
