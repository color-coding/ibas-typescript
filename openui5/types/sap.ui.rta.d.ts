/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
   namespace ui {
      namespace rta {
         namespace service {
            /**
             * <p>Provides necessary functionality to get and execute actions on controls. Actions are UI operations available in RTA such as rename, remove, move etc.</p>
             */
            namespace Action {
               /**
                * <p>Returns a list of available actions for the specified control(s).</p>
                * @param {string | string[]} vControlIds <p>Control ID or an array of IDs to get actions for</p>
                * @param {string} sActionId <p>Action ID to be executed on the specified controls</p>
                * @returns any <p>Result of the operation</p>
                */
               function execute(vControlIds: string | string[], sActionId: string): any;
               /**
                * <p>Returns a list of available actions for the specified control(s).</p><p>Example:</p><p><pre>
               [
                   {
                       "id": "CTX_RENAME",
                       "text": "Rename",
                       "enabled": false,
                       "rank": 10,
                       "icon": "sap-icon://edit"
                   },
                   {
                       "id": "CTX_ADD_ELEMENTS_AS_SIBLING",
                       "text": "Add Field",
                       "enabled": false,
                       "rank": 20,
                       "icon": "sap-icon://add",
                       "group": "Add"
                   },
                   {
                       "id": "CTX_REMOVE",
                       "text": "Remove",
                       "enabled": true,
                       "rank": 60,
                       "icon": "sap-icon://hide"
                   },
                   {
                       "id": "CTX_CUT",
                       "text": "Cut",
                       "enabled": false,
                       "rank": 70,
                       "icon": "sap-icon://scissors"
                   },
                   {
                       "id": "CTX_PASTE",
                       "text": "Paste",
                       "enabled": false,
                       "rank": 80,
                       "icon": "sap-icon://paste"
                   }
               ]
               </pre></p>
                * @param {string | string[]} vControlIds <p>Control ID or an array of IDs to get actions for</p>
                * @returns sap.ui.rta.service.Action.ActionObject[] <p>List of available actions</p>
                */
               function get(vControlIds: string | string[]): sap.ui.rta.service.Action.ActionObject[];
               /**
                * <p>Object containing the detailed information about the action.</p><p><pre>
               {
                  id: &lt;string&gt;, // ID of the action
                  group: &lt;string&gt;, // Group name, in case the action has been grouped with other action(s)
                  icon: &lt;string&gt;, // Icon name
                  enabled: &lt;boolean&gt;, // Indicates whether the action is active and can be executed
                  rank: &lt;int&gt;, // Sorting rank for visual representation of the action position
                  text: &lt;string&gt;, // Action name
               }
               </pre></p>
                */
               export interface ActionObject {
               }
            }
         }
      }
   }
}
declare namespace sap {
   namespace ui {
      namespace rta {
         namespace service {
            /**
             * <p>Provides functionality to create ControllerExtensions</p>
             */
            namespace ControllerExtension {
               /**
                * <p>Creates a change that adds an extension to the controller associated with the given view. Throws an error if the information is not complete. As of now, this only creates the change with a reference to a file. The consumer has to take care of creating that file and adding it to the backend.</p>
                * @param {any} sCodeRef <p>Name of the file, without path, with the extension '.js'. Must comply to UI5 module naming convention. Has to be unique and must not conflict with other already defined modules.</p>
                * @param {string} sViewId <p>ID of the view whose controller should be extended</p>
                * @returns any <p>Returns the definition of the newly created change</p>
                */
               function add(sCodeRef: any, sViewId: string): any;
               /**
                * <p>Gets the Controller Extension template from the DesignTimeMetadata of the given view and returns it as a string wrapped in a promise. If there is no template specified, a default template will be returned.</p>
                * @param {string} sViewId <p>ID of the view whose template should be retrieved</p>
                * @returns Promise<any> <p>Returns a promise that resolves with the template as string or rejects when the file was not found</p>
                */
               function getTemplate(sViewId: string): Promise<any>;
            }
         }
      }
   }
}
declare namespace sap {
   namespace ui {
      namespace rta {
         namespace service {
            /**
             * <p>Provides necessary functionality to get tree model data for an outline. Takes into consideration different designtime root elements.</p>
             */
            namespace Outline {
               /**
                * <p>Returns an outline model data associated with the rta instance, starting from the passed control. If no control is passed, the root control(s) of the respective rta instance is taken as the initial control. Throws an error if the control id parameter is not a valid control with a stable id.</p>
                * @param {string} sId <p>the id of the control to start with. If omitted the root control(s) is used</p>
                * @param {number} iDepth <p>the depth of childNode levels that should be returned based on the given control</p>
                * @returns sap.ui.rta.service.Outline.OutlineObject <p>an array containing outline data for each root control</p>
                */
               function get(sId?: string, iDepth?: number): sap.ui.rta.service.Outline.OutlineObject;
               /**
                * <p>Object containing an outline of available nodes.</p>
                */
               export interface OutlineObject {
               }
            }
         }
      }
   }
}
declare namespace sap {
   namespace ui {
      namespace rta {
         namespace service {
            /**
             * <p>Provides necessary functionality to retrieve design time metadata properties. Takes into consideration control metadata properties, design time metadata properties, annotations, label and name.</p>
             */
            namespace Property {
               /**
                * <p>Returns an object containing design time properties for the passed control's id. Throws an error if the control id parameter is not a valid control with a stable id.</p><p>Example:</p><p><pre>
                   {
                      "properties": {
                         "dtMetadataProperty2": {
                            "value": {
                               "mockKey2": "dtMetadataProperty2"
                            },
                            "virtual": false,
                            "ignore": false
                            },
                         "virtualProperty1": {
                            "value": "Virtual property value 1",
                            "virtual": true,
                            "type": "Virtual property type",
                            "name": "Virtual Property Name 1",
                            "ignore": false,
                            "possibleValues": [
                               "possibleValue1",
                               "possibleValue2"
                            ]
                         },
                         "metadataProperty1": {
                            "value": "metadataPropertyValue1",
                            "virtual": false,
                            "type": "metadataPropertyType1",
                            "name": "metadataPropertyName1",
                            "ignore": false,
                            "binding": {
                               "parts": [
                               {
                                  "path": "path1",
                                  "model": "model1"
                               },
                               {
                                  "path": "path2",
                                  "model": "model2"
                               }
                               ],
                               "bindingValues": {
                                  "values": "Binding Value",
                                  "originalValues": "Original Binding Value"
                               },
                               "bindingString": "bindingString"
                            }
                         }
                      },
                      "annotations": {
                         "annotation1": {
                            "namespace": "com.sap.mock.vocabularies",
                            "annotation": "annotation1",
                            "whiteList": {
                               "properties": [
                                  "Property1",
                                  "Property2",
                                  "Property3"
                               ]
                            },
                            "ignore": false,
                            "appliesTo": [
                               "Page/Button"
                            ],
                            "links": {
                               "developer": [
                               {
                                  "href": "annotation1.html",
                                  "text": "Annotation 1 Text 1"
                               },
                               {
                                  "href": "annotation2.html",
                                  "text": "Annotation 1 Text 2"
                               }
                               ]
                            }
                         }
                      },
                      "name": {
                         "singular": "Singular Control Name",
                         "plural": "Plural Control Name"
                      },
                      "label": "dt-metadata label",
                      "links": {
                               "developer": [
                               {
                                  "href": "Links.html",
                                  "text": "Links Text 1"
                               }
                               ]
                       }
                   }
               </pre></p>
                * @param {string} sControlId <p>the id of the control to start with.</p>
                * @returns sap.ui.rta.service.Property.PropertyObject <p>an object containing relevant property data for the passed control</p>
                */
               function get(sControlId: string): sap.ui.rta.service.Property.PropertyObject;
               /**
                * <p>Object containing the detailed information about design time properties of the passed control.</p>
                */
               export interface PropertyObject {
               }
            }
         }
      }
   }
}
declare namespace sap {
   namespace ui {
      namespace rta {
         namespace service {
            /**
             * <p>Provides functionality to get and set selection on controls.</p>
             */
            export class Selection {
               /**
                * <p>Adds the specified controls to the current selection.</p>
                * @param {string | string[]} vControlIds <p>Control IDs to be selected</p>
                * @returns boolean <p>true if the selection has changed</p>
                */
               static add(vControlIds: string | string[]): boolean;
               /**
                * <p>Gets list of currently selected controls.</p>
                * @returns string[] <p>Selected control IDs</p>
                */
               static get(): string[];
               /**
                * <p>Removes the selection from the specified controls.</p>
                * @param {string | string[]} vControlIds <p>Control IDs from which to remove the selection</p>
                * @returns boolean <p>true if the selection has changed</p>
                */
               static remove(vControlIds: string | string[]): boolean;
               /**
                * <p>Resets the current selection.</p>
                * @returns boolean <p>true if completed successfully (false if there is nothing to reset)</p>
                */
               static reset(): boolean;
               /**
                * <p>Deselects the current selection and selects the specified list of controls.</p>
                * @param {string | string[]} vControlIds <p>Control IDs to be selected</p>
                * @returns boolean <p>true if the selection has changed</p>
                */
               static set(vControlIds: string | string[]): boolean;
            }
         }
      }
   }
}
declare namespace sap {
   namespace ui {
      /**
       */
      namespace rta {
         /**
          * <h3>Overview</h3><p> This client is used to access the <code>sap.ui.RuntimeAuthoring</code> instance that is running in a separate window.</p><h4>Example:</h4><p> <pre>
         sap.ui.require(['sap/ui/rta/Client'], function (RTAClient) {
             var oRTAClient = new RTAClient({
                 window: <Receiving window>,
                 origin: <Origin of receiving window>
             });
         
             oRTAClient.getService('selection').then(function (oSelectionService) {
                 oSelectionService.add('__button0').then(
                     function (vResult) {
                         // vResult contains response from add() function of sap.ui.rta.service.Selection
                     },
                     function (vError) {
                         // Error that happens during the operation
                     }
                 );
             });
         });
         </pre></p>
          */
         export class Client extends sap.ui.base.ManagedObject {
            /**
             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             */
            constructor();
            /**
             * <p>Destroys the client. After an object has been destroyed, it can no longer be used.</p>
             */
            destroy(): void;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.rta.Client/methods/getOrigin" data-sap-ui-target="getOrigin">origin</a>.</p><p>Receiving window origin; a valid origin has to be specified, see <a target="blank" href="https://html.spec.whatwg.org/multipage/origin.html#origin">https://html.spec.whatwg.org/multipage/origin.html#origin</a>
            <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
            title="Information published on non SAP site" class="sapUISDKExternalLink"/></p>
             * @returns string <p>Value of property <code>origin</code></p>
             */
            getOrigin(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.rta.Client/methods/getWindow" data-sap-ui-target="getWindow">window</a>.</p><p>Receiving window object; has to be a different window than the window in which this client is used</p>
             * @returns any <p>Value of property <code>window</code></p>
             */
            getWindow(): any;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.rta.Client/methods/getOrigin" data-sap-ui-target="getOrigin">origin</a>.</p><p>Receiving window origin; a valid origin has to be specified, see <a target="blank" href="https://html.spec.whatwg.org/multipage/origin.html#origin">https://html.spec.whatwg.org/multipage/origin.html#origin</a>
            <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
            title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sOrigin <p>New value for property <code>origin</code></p>
             * @returns sap.ui.rta.Client <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setOrigin(sOrigin: string): sap.ui.rta.Client;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.rta.Client/methods/getWindow" data-sap-ui-target="getWindow">window</a>.</p><p>Receiving window object; has to be a different window than the window in which this client is used</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {any} oWindow <p>New value for property <code>window</code></p>
             * @returns sap.ui.rta.Client <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setWindow(oWindow: any): sap.ui.rta.Client;
         }
      }
   }
}
