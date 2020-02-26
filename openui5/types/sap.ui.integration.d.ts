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
             * <p><p>Enumeration of possible card action types.</p></p>
             */
            export enum CardActionType {
                /**
                 * <p>Used for navigation actions</p>
                 */
                Navigation = "Navigation",
                /**
                 * <p>Used for navigation actions</p>
                 */
                Submit = "Submit",
            }
            /**
             * <p><p>Possible data modes for <code><a target="_self" class="jsdoclink" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a></code>.</p></p>
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
                             * @returns Promise<any> <p>Promise resolving to the created editor</p>
                             */
                            function create(sPropertyType: string): Promise<any>;
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
                             */
                            function registerTypes(mTypes: any): void;
                        }
                    }
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
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                        /**
                         * <p>Adds some content to the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        addContent(oContent: sap.ui.core.Control): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="jsonChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/jsonChange">jsonChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachJsonChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsReady" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/propertyEditorsReady">propertyEditorsReady</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyEditorsReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Destroys all the content in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        destroyContent(): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="jsonChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/jsonChange">jsonChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachJsonChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsReady" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/propertyEditorsReady">propertyEditorsReady</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachPropertyEditorsReady(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="jsonChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/jsonChange">jsonChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireJsonChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsReady" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/propertyEditorsReady">propertyEditorsReady</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected firePropertyEditorsReady(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getConfig">config</a>.</p>
                         * @returns any <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any;
                        /**
                         * <p>Gets content of aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @returns sap.ui.core.Control[] 
                         */
                        getContent(): sap.ui.core.Control[];
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getJson" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getJson">json</a>.</p>
                         * @returns any <p>Value of property <code>json</code></p>
                         */
                        getJson(): any;
                        /**
                         * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                         * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                         * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                         */
                        indexOfContent(oContent: sap.ui.core.Control): number;
                        /**
                         * <p>Inserts a content into the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                         * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Removes all the controls from the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                         * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                         */
                        removeAllContent(): sap.ui.core.Control[];
                        /**
                         * <p>Removes a content from the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                         * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                         */
                        removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getConfig">config</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oConfig <p>New value for property <code>config</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setConfig(oConfig: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getJson" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getJson">json</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oJson <p>New value for property <code>json</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setJson(oJson: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                    }
                    /**
                     * <p>Renders one of the <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor">property editors</a> based on a specified <code>propertyName</code> or custom <code>config</code>.</p>
                     */
                    export class PropertyEditor extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyEditorChange">propertyEditorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyNameChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyNameChange">propertyNameChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyNameChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachValueChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachEditorChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyEditorChange">propertyEditorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachPropertyEditorChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyNameChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyNameChange">propertyNameChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachPropertyNameChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachReady(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachValueChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireEditorChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyEditorChange">propertyEditorChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected firePropertyEditorChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyNameChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyNameChange">propertyNameChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected firePropertyNameChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/ready">ready</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireReady(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/valueChange">valueChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireValueChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getConfig">config</a>.</p>
                         * @returns any <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any;
                        /**
                         * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getEditor">editor</a>, or <code>null</code>.</p>
                         * @returns sap.ui.core.ID 
                         */
                        getEditor(): sap.ui.core.ID;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getPropertyName" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getPropertyName">propertyName</a>.</p>
                         * @returns string <p>Value of property <code>propertyName</code></p>
                         */
                        getPropertyName(): string;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getRenderLabel">renderLabel</a>.</p>
                         * @returns boolean <p>Value of property <code>renderLabel</code></p>
                         */
                        getRenderLabel(): boolean;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getConfig">config</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oConfig <p>New value for property <code>config</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setConfig(oConfig: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getEditor">editor</a>.</p>
                         * @param {sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor} oEditor <p>ID of an element which becomes the new target of this editor association; alternatively, an element instance may be given</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setEditor(oEditor: sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getPropertyName" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getPropertyName">propertyName</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {string} sPropertyName <p>New value for property <code>propertyName</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setPropertyName(sPropertyName: string): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getRenderLabel">renderLabel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {boolean} bRenderLabel <p>New value for property <code>renderLabel</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setRenderLabel(bRenderLabel: boolean): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                    }
                    /**
                     * <p>Renders a group of <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor">property editors</a> based on specified <code>tags</code> or custom <code>config</code>.</p>
                     */
                    export class PropertyEditors extends sap.ui.core.Control {
                        /**
                         * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                         */
                        constructor();
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachInit(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/propertyEditorsChange">propertyEditorsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyEditorsChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="tagsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/tagsChange">tagsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachTagsChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachEditorChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachInit(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/propertyEditorsChange">propertyEditorsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachPropertyEditorsChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachReady(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="tagsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/tagsChange">tagsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachTagsChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/configChange">configChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/editorChange">editorChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireEditorChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/init">init</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireInit(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/propertyEditorsChange">propertyEditorsChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected firePropertyEditorsChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/ready">ready</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireReady(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="tagsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/tagsChange">tagsChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireTagsChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getConfig">config</a>.</p>
                         * @returns any[] <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any[];
                        /**
                         * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getEditor">editor</a>, or <code>null</code>.</p>
                         * @returns sap.ui.core.ID 
                         */
                        getEditor(): sap.ui.core.ID;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabels" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getRenderLabels">renderLabels</a>.</p>
                         * @returns boolean <p>Value of property <code>renderLabels</code></p>
                         */
                        getRenderLabels(): boolean;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getTags" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getTags">tags</a>.</p>
                         * @returns any <p>Value of property <code>tags</code></p>
                         */
                        getTags(): any;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getConfig">config</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any[]} sConfig <p>New value for property <code>config</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setConfig(sConfig: any[]): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getEditor">editor</a>.</p>
                         * @param {sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor} oEditor <p>ID of an element which becomes the new target of this editor association; alternatively, an element instance may be given</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setEditor(oEditor: sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabels" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getRenderLabels">renderLabels</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {boolean} bRenderLabels <p>New value for property <code>renderLabels</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setRenderLabels(bRenderLabels: boolean): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getTags" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getTags">tags</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oTags <p>New value for property <code>tags</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setTags(oTags: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
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
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachValueChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Destroys the content in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getContent">content</a>.</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            destroyContent(): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachReady(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachValueChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/ready">ready</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireReady(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/valueChange">valueChange</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireValueChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getConfig">config</a>.</p>
                             * @returns any <p>Value of property <code>config</code></p>
                             */
                            getConfig(): any;
                            /**
                             * <p>Gets content of aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getContent">content</a>.</p>
                             * @returns sap.ui.core.Control 
                             */
                            getContent(): sap.ui.core.Control;
                            /**
                             * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getRenderLabel">renderLabel</a>.</p><p>Default value is <code>true</code>.</p>
                             * @returns boolean <p>Value of property <code>renderLabel</code></p>
                             */
                            getRenderLabel(): boolean;
                            /**
                             * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getConfig">config</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                             * @param {any} oConfig <p>New value for property <code>config</code></p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            setConfig(oConfig: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Sets the aggregated <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getContent">content</a>.</p>
                             * @param {sap.ui.core.Control} oContent <p>The content to set</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            setContent(oContent: sap.ui.core.Control): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getRenderLabel">renderLabel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                             * @param {boolean} bRenderLabel <p>New value for property <code>renderLabel</code></p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            setRenderLabel(bRenderLabel: boolean): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
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
                             * <p>Constructor for a new <code>ArrayEditor</code>.</p><p>This property editor allows you to edit arrays in a flat way.</p><p>To get notified about changes made with the editor, you can use the <code>valueChange</code> event.</p>
                             */
                            export class ArrayEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.arrayEditor.ArrayEditor#methods/getValue">value</a>.</p>
                                 * @returns any <p>Value of property <code>value</code></p>
                                 */
                                getValue(): any;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.arrayEditor.ArrayEditor#methods/getValue">value</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                                 * @param {any} oValue <p>New value for property <code>value</code></p>
                                 * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.arrayEditor.ArrayEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setValue(oValue: any): sap.ui.integration.designtime.baseEditor.propertyEditor.arrayEditor.ArrayEditor;
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
                             * <p>Constructor for a new <code>BooleanEditor</code>. This allows you to set boolean values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a boolean or binding string to the provided callback function when the state changes.</p>
                             */
                            export class BooleanEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>EnumStringEditor</code>. This allows to select from predefined string values or to provide binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p>
                             */
                            export class EnumStringEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>IconEditor</code>. This allows to set icon URIs or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a> with a <a target="_self" class="jsdoclink" href="api/sap.m.SelectDialog">sap.m.SelectDialog</a> value help. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string containing an icon URI or as a binding string to the provided callback function when the user edits the input or selects an item in the dialog.</p>
                             */
                            export class IconEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>JsonEditor</code>. This allows to set json text values for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.ui.CodeEditor">sap.ui.CodeEditor</a> inside a <a target="_self" class="jsdoclink" href="api/sap.m.Dialog">sap.m.Dialog</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as an object to the provided callback function when the user saves changes in the dialog.</p>
                             */
                            export class JsonEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>MapEditor</code>. This allows you to edit key-value pairs. To get notified about changes made with the editor, you can attach a handler to the <code>valueChange</code> event.</p>
                             */
                            export class MapEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>NumberEditor</code>. This allows you to set numeric values or binding paths for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a>, which prevents non-numeric user input unless it is a valid binding path. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property value as a number or binding string to the provided callback function when the state changes.</p>
                             */
                            export class NumberEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>StringEditor</code>. This allows to set string values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string or binding string to the provided callback function when the user edits the input.</p>
                             */
                            export class StringEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
}
declare namespace sap {
    namespace ui {
        namespace integration {
            /**
             */
            namespace widgets {
                /**
                 * <p>A control that represents a container with a header and content.</p><h3>Overview</h3><p> Cards are small user interface elements which provide the most important information from an app, related to a specific role or task. The information is represented in a compact manner, allowing for actions to be executed. Cards can be described as small representations of an app which can be integrated in different systems.</p><p>The integration card is defined in a declarative way, using a manifest.json to be: <ul> <li>Easily integrated into apps</li> <li>Easily reused across apps</li> <li>Understandable by other technologies</li> <li>Self-contained (has a built-in functionality and doesn't need external configuration)</li> <li>Dynamic parameter handling</li> <li>Clear separation of the roles of the card and app developers</li> </ul></p><p>The role of the card developer is to describe the card in a manifest.json file and define: <ul> <li>Header</li> <li>Content</li> <li>Data source</li> <li>Possible actions</li> </ul></p><p>The role of the app developer is to integrate the card into the app and define: <ul> <li>The dimensions of the card inside a layout of choice, using the <code>width</code> and <code>height</code> properties</li> <li>The behavior for the actions described in the manifest.json file, using the action event</li> </ul></p><p><strong>You can learn more about integration cards in the <a href="test-resources/sap/ui/integration/demokit/cardExplorer/index.html">Card Explorer</a></strong></p><p><i>When to use</i> <ul> <li>When you want to reuse the card across apps.</li> <li>When you need easy integration and configuration.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you need more header and content flexibility.</li> <li>When you have to achieve simple card visualization. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">Card</a>.</li> <li>When you have to use an application model. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">Card</a>.</li> <li>When you need complex behavior. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">Card</a>.</li> </ul></p>
                 */
                export class Card extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.widgets.Card#events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when an action is triggered on the card.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachAction(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="manifestReady" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when the manifest is loaded.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachManifestReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.widgets.Card#events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="manifestReady" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachManifestReady(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.widgets.Card#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns boolean <p>Whether or not to prevent the default action</p>
                     */
                    protected fireAction(mParameters?: any): boolean;
                    /**
                     * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="manifestReady" href="api/sap.ui.integration.widgets.Card#events/manifestReady">manifestReady</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireManifestReady(mParameters?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getBaseUrl" href="api/sap.ui.integration.widgets.Card#methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p>
                     * @returns sap.ui.core.URI <p>Value of property <code>baseUrl</code></p>
                     */
                    getBaseUrl(): sap.ui.core.URI;
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
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getDataMode" href="api/sap.ui.integration.widgets.Card#methods/getDataMode">dataMode</a>.</p><p>Defines the state of the <code>Card</code>. When set to <code>Inactive</code>, the <code>Card</code> doesn't make requests.</p><p>Default value is <code>Active</code>.</p>
                     * @returns sap.ui.integration.CardDataMode <p>Value of property <code>dataMode</code></p>
                     */
                    getDataMode(): sap.ui.integration.CardDataMode;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getHeight" href="api/sap.ui.integration.widgets.Card#methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>Default value is <code>auto</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                     */
                    getHeight(): sap.ui.core.CSSSize;
                    /**
                     * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getHost" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getHost(): sap.ui.core.ID;
                    /**
                     * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getHostConfigurationId" href="api/sap.ui.integration.widgets.Card#methods/getHostConfigurationId">hostConfigurationId</a>, or <code>null</code>.</p>
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
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getWidth" href="api/sap.ui.integration.widgets.Card#methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>Default value is <code>100%</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
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
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getBaseUrl" href="api/sap.ui.integration.widgets.Card#methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.URI} sBaseUrl <p>New value for property <code>baseUrl</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBaseUrl(sBaseUrl: sap.ui.core.URI): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for the <code>dataMode</code> property.</p>
                     * @param {sap.ui.integration.CardDataMode} sMode <p>The mode to set to the Card.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setDataMode(sMode: sap.ui.integration.CardDataMode): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getHeight" href="api/sap.ui.integration.widgets.Card#methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                     * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getHost" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} oHost <p>ID of an element which becomes the new target of this host association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHost(oHost: sap.ui.core.ID | sap.ui.core.Control): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getHostConfigurationId" href="api/sap.ui.integration.widgets.Card#methods/getHostConfigurationId">hostConfigurationId</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} oHostConfigurationId <p>ID of an element which becomes the new target of this hostConfigurationId association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHostConfigurationId(oHostConfigurationId: sap.ui.core.ID | sap.ui.core.Control): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getManifest" href="api/sap.ui.integration.widgets.Card#methods/getManifest">manifest</a>.</p><p>The URL of the manifest or an object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {any} oManifest <p>New value for property <code>manifest</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManifest(oManifest: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getParameters" href="api/sap.ui.integration.widgets.Card#methods/getParameters">parameters</a>.</p><p>The parameters used in the manifest.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oParameters <p>New value for property <code>parameters</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setParameters(oParameters: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getWidth" href="api/sap.ui.integration.widgets.Card#methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
                }
            }
        }
    }
}
