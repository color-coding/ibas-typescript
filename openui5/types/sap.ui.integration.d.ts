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
					 * <h3>Overview</h3><p> Configurable JSON editor. </p><h4>Example:</h4><p> <pre>
						sap.ui.require(["sap/ui/integration/designtime/baseEditor/BaseEditor"], function(Editor) {
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
							oEditor.attachJsonChanged(function(oEvent) {
								var oJson = oEvent.getParameter("json");
								// live change
							})
							oEditor.placeAt("content");
						})
					</pre></p>
					 */
					export class BaseEditor extends sap.ui.core.Control {
						/**
						 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="#/api/sap.ui.base.ManagedObject/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 */
						constructor();
						/**
						 * <p>Adds some content to the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p>
						 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						addContent(oContent: sap.ui.core.Control): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="jsonChange" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/jsonChange">jsonChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when any property has been changed by the propertyEditor</p>
						 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
						 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
						 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						attachJsonChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="propertyEditorsReady" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/propertyEditorsReady">propertyEditorsReady</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when all property editors for the given json and config are created TODO: remove this public event</p>
						 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
						 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
						 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						attachPropertyEditorsReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Destroys all the content in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyContent(): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="jsonChange" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/jsonChange">jsonChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
						 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
						 * @param {any} oListener <p>Context object on which the given function had to be called</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						detachJsonChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="propertyEditorsReady" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/propertyEditorsReady">propertyEditorsReady</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
						 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
						 * @param {any} oListener <p>Context object on which the given function had to be called</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						detachPropertyEditorsReady(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="jsonChange" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/jsonChange">jsonChange</a> to attached listeners.</p>
						 * @param {any} mParameters <p>Parameters to pass along with the event</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						protected fireJsonChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="propertyEditorsReady" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/events/propertyEditorsReady">propertyEditorsReady</a> to attached listeners.</p>
						 * @param {any} mParameters <p>Parameters to pass along with the event</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						protected firePropertyEditorsReady(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getConfig" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getConfig">config</a>.</p><p>Configuration map config.context {string} path in the JSON, which will be edited e.g. "path/subpath" for json.path.subpath config.properties {map} defines, which fields in the context are editable config.properties.<key>.label {string} of the property to show in the UI config.properties.<key>.type {string} of the property (property editor for this type will be shown) config.properties.<key>.path {string} which will be changed, relative to the context e.g. if context is "root" and path is "header/name", json.root.header.name field is to be changed config.properties.<key>.value {string|boolean} (optional) value of the property, binding relative to context (model name) should be used, e.g. {context>header/name} will create a binding json.root.header.name config.properties.<key>.tags {array} strings to categorize the property config.properties.<key>.visible {string|boolean} should be used as binding relative to context to define conditions, when this property should be possible to change, e.g. {= ${context>anotherProperty} === 'someValue'} config.properties.<key>.<other configurations> {any} it is possible to define additional configurations in this namespace. This configurations will be passed to the dedicated property editor. Binding strings relative to context model are supported also, e.g. {= ${context>someProperty} + ${context>anotherProperty}}. config.propertyEditors {map} define, which property editors should be loaded. Key is property type and value is editor module path. E.g. propertyEditors: {"string": "sap/ui/integration/designtime/controls/propertyEditors/StringEditor"} defines module responsible for all properties with the type "string" config.i18n {string|array} module path or array of paths for i18n property files. i18n binding, e.g. {i18n>key} is available in the "properties" section, e.g. for "label"</p>
						 * @returns any <p>Value of property <code>config</code></p>
						 */
						getConfig(): any;
						/**
						 * <p>Gets content of aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p>
						 * @returns sap.ui.core.Control[] 
						 */
						getContent(): sap.ui.core.Control[];
						/**
						 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getJson" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getJson">json</a>.</p><p>JSON to be changed in the editor. Note: object passed as parameter won't be mutated, .getJson() or .attachJsonChange() should be used instead to get the changed object</p>
						 * @returns any <p>Value of property <code>json</code></p>
						 */
						getJson(): any;
						/**
						 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
						 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
						 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
						 */
						indexOfContent(oContent: sap.ui.core.Control): number;
						/**
						 * <p>Inserts a content into the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p>
						 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
						 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Removes all the controls from the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
						 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
						 */
						removeAllContent(): sap.ui.core.Control[];
						/**
						 * <p>Removes a content from the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getContent" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getContent">content</a>.</p>
						 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
						 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
						 */
						removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
						/**
						 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getConfig" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getConfig">config</a>.</p><p>Configuration map config.context {string} path in the JSON, which will be edited e.g. "path/subpath" for json.path.subpath config.properties {map} defines, which fields in the context are editable config.properties.<key>.label {string} of the property to show in the UI config.properties.<key>.type {string} of the property (property editor for this type will be shown) config.properties.<key>.path {string} which will be changed, relative to the context e.g. if context is "root" and path is "header/name", json.root.header.name field is to be changed config.properties.<key>.value {string|boolean} (optional) value of the property, binding relative to context (model name) should be used, e.g. {context>header/name} will create a binding json.root.header.name config.properties.<key>.tags {array} strings to categorize the property config.properties.<key>.visible {string|boolean} should be used as binding relative to context to define conditions, when this property should be possible to change, e.g. {= ${context>anotherProperty} === 'someValue'} config.properties.<key>.<other configurations> {any} it is possible to define additional configurations in this namespace. This configurations will be passed to the dedicated property editor. Binding strings relative to context model are supported also, e.g. {= ${context>someProperty} + ${context>anotherProperty}}. config.propertyEditors {map} define, which property editors should be loaded. Key is property type and value is editor module path. E.g. propertyEditors: {"string": "sap/ui/integration/designtime/controls/propertyEditors/StringEditor"} defines module responsible for all properties with the type "string" config.i18n {string|array} module path or array of paths for i18n property files. i18n binding, e.g. {i18n>key} is available in the "properties" section, e.g. for "label"</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
						 * @param {any} oConfig <p>New value for property <code>config</code></p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setConfig(oConfig: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
						/**
						 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getJson" href="#/api/sap.ui.integration.designtime.baseEditor.BaseEditor/methods/getJson">json</a>.</p><p>JSON to be changed in the editor. Note: object passed as parameter won't be mutated, .getJson() or .attachJsonChange() should be used instead to get the changed object</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
						 * @param {any} oJson <p>New value for property <code>json</code></p>
						 * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setJson(oJson: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
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
							 * <p>Constructor for a new <code>BooleanEditor</code>. This allows to set boolean values for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="#/api/sap.m.CheckBox">sap.m.CheckBox</a>. To get notified about changes made with the editor, you can use the <code>attachPropertyChanged</code> method, which passes the current property state as a boolean to the provided callback function when the state changes.</p>
							 */
							export class BooleanEditor {
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
							 * <p>Constructor for a new <code>NumberEditor</code>. This allows to set numeric values for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="#/api/sap.m.Input">sap.m.Input</a> of type <a target="_self" class="jsdoclink" href="#/api/Number">sap.m.InputType.Number</a>, which prevents non-numeric user input. To get notified about changes made with the editor, you can use the <code>attachPropertyChanged</code> method, which passes the current property value as a float to the provided callback function when the state changes.</p>
							 */
							export class NumberEditor {
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
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="manifestReady" href="#/api/sap.ui.integration.widgets.Card/events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when the manifest is loaded.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachManifestReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="manifestReady" href="#/api/sap.ui.integration.widgets.Card/events/manifestReady">manifestReady</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachManifestReady(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireAction(mParameters?: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="manifestReady" href="#/api/sap.ui.integration.widgets.Card/events/manifestReady">manifestReady</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireManifestReady(mParameters?: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getBaseUrl" href="#/api/sap.ui.integration.widgets.Card/methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p>
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
					 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getBaseUrl" href="#/api/sap.ui.integration.widgets.Card/methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
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
					 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getManifest" href="#/api/sap.ui.integration.widgets.Card/methods/getManifest">manifest</a>.</p><p>The URL of the manifest or an object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {any} oManifest <p>New value for property <code>manifest</code></p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setManifest(oManifest: any): sap.ui.integration.widgets.Card;
					/**
					 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getParameters" href="#/api/sap.ui.integration.widgets.Card/methods/getParameters">parameters</a>.</p><p>The parameters used in the manifest.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} oParameters <p>New value for property <code>parameters</code></p>
					 * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setParameters(oParameters: any): sap.ui.integration.widgets.Card;
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
