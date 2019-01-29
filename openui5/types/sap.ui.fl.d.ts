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
         * <p>SAPUI5 library for UI Flexibility and Descriptor Changes and Descriptor Variants.</p>
         */
        namespace fl {
            /**
             */
            export class LrepConnector {
                /**
                 * <p>Registers a callback for a sent request to the back end. The callback is only called once for each change. Each call is done with an object similar to the resolve of the promises containing a <code>status</code> of the response from the back end i.e. <code>success</code>, a <code>response</code> containing the change processed in this request</p>
                 * @param {Function} fCallback <p>function called after all related promises are resolved</p>
                 */
                static attachSentRequest(fCallback: Function): void;
                /**
                 * <p>Deregisters a callback for a sent request to the back end if the callback was registered</p>
                 * @param {Function} fCallback <p>function called after all related promises are resolved</p>
                 */
                static detachSentRequest(fCallback: Function): void;
                /**
                 * <p>Gets the availability status of the flexibility service.</p>
                 * @returns Promise<any> <p>Promise resolved with a boolean value of the availability status</p>
                 */
                static isFlexServiceAvailable(): Promise<any>;
                /**
                 * <p>Provides the connectivity to the LRep & UI5 Flexibility Services REST-routes</p>
                 * @param {any} mParameters <p>map of parameters, see below</p>
                 */
                constructor(mParameters?: any);
                /**
                 * <p>Creates a change or variant via REST call.</p>
                 * @param {any} oPayload <p>The content which is send to the server</p>
                 * @param {String} sChangelist <p>The transport ID.</p>
                 * @param {Boolean} bIsVariant <p>is variant?</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                create(oPayload: any, sChangelist: String, bIsVariant: Boolean): any;
                /**
                 * <p>Delete a change or variant via REST call.</p>
                 * @param {String} mParameters <p>property bag</p>
                 * @param {Boolean} bIsVariant <p>is it a variant?</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                deleteChange(mParameters: String, bIsVariant: Boolean): any;
                /**
                 * <p>Delete a file via REST call.</p>
                 * @param {String} sNamespace <p>The abap package goes here. It is needed to identify the change.</p>
                 * @param {String} sName <p>Name of the change</p>
                 * @param {String} sType <p>File type extension</p>
                 * @param {String} sLayer <p>File layer</p>
                 * @param {String} sChangelist <p>The transport ID, optional</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                deleteFile(sNamespace: String, sName: String, sType: String, sLayer: String, sChangelist: String): any;
                /**
                 * <p>Retrieves the file attributes for a given resource in the LREP.</p>
                 * @param {String} sNamespace <p>The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".</p>
                 * @param {String} sName <p>Name of the change</p>
                 * @param {String} sType <p>File type extension</p>
                 * @param {String} sLayer <p>File layer</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                getFileAttributes(sNamespace: String, sName: String, sType: String, sLayer: String): any;
                /**
                 * <p>Authenticated access to a resource in the Lrep</p>
                 * @param {String} sNamespace <p>The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".</p>
                 * @param {String} sName <p>Name of the change</p>
                 * @param {String} sType <p>File type extension</p>
                 * @param {Boolean} bIsRuntime <p>The stored file content is handed over to the lrep provider that can dynamically adjust the content to the runtime context (e.g. do text replacement to the users' logon language) before</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                getStaticResource(sNamespace: String, sName: String, sType: String, bIsRuntime: Boolean): any;
                /**
                 * <p>Retrieves the content for a given namespace and layer via REST call.</p>
                 * @param {String} sNamespace <p>The file namespace goes here. It is needed to identify the change.</p>
                 * @param {String} sLayer <p>File layer</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                listContent(sNamespace: String, sLayer: String): any;
                /**
                 * <p>Loads the changes for the given component class name.</p>
                 * @param {any} oComponent <p>Contains component data needed for reading changes</p>
                 * @param {{ [key: string]: any }} mPropertyBag <p>Contains additional data needed for reading changes</p>
                 * @returns Promise<any> <p>Returns a Promise with the changes (changes, contexts, optional messagebundle), <code>componentClassName</code> and <code>etag</code> value; in case modules are present the Promise is resolved after the module request is finished</p>
                 */
                loadChanges(oComponent: any, mPropertyBag?: { [key: string]: any }): Promise<any>;
                /**
                 * <p>Loads flexibility settings.</p>
                 * @returns Promise<any> <p>Returns a Promise with the flexibility settings content</p>
                 */
                loadSettings(): Promise<any>;
                /**
                 * <p>Send a request to the back end</p>
                 * @param {String} sUri <p>Relative URL for this request</p>
                 * @param {String} sMethod <p>HTTP-method to be used by this request (default GET)</p>
                 * @param {any} oData <p>Payload of the request</p>
                 * @param {any} mOptions <p>Additional options which should be used in the request</p>
                 * @returns Promise<any> <p>Returns a promise to the result of the request</p>
                 */
                send(sUri: String, sMethod?: String, oData?: any, mOptions?: any): Promise<any>;
                /**
                 * <p>Update a change or variant via REST call.</p>
                 * @param {any} oPayload <p>The content which is send to the server</p>
                 * @param {String} sChangeName <p>Name of the change</p>
                 * @param {String} sChangelist <p>(optional) The transport ID.</p>
                 * @param {Boolean} bIsVariant <p>is variant?</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                update(oPayload: any, sChangeName: String, sChangelist: String, bIsVariant: Boolean): any;
                /**
                 * <p>Upserts a given change or variant via REST call.</p>
                 * @param {String} sNamespace <p>The abap package goes here. It is needed to identify the change.</p>
                 * @param {String} sName <p>Name of the change</p>
                 * @param {String} sType <p>File type extension</p>
                 * @param {String} sLayer <p>File layer</p>
                 * @param {String} sContent <p>File content to be saved as string</p>
                 * @param {String} sContentType <p>Content type (e.g. application/json, text/plain, ...), default: application/json</p>
                 * @param {String} sChangelist <p>The transport ID, optional</p>
                 * @returns any <p>Returns the result from the request</p>
                 */
                upsert(sNamespace: String, sName: String, sType: String, sLayer: String, sContent: String, sContentType: String, sChangelist: String): any;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p>Provides an API to handle specific functionality for personalized changes.</p>
             */
            namespace ControlPersonalizationAPI {
                /**
                 * <p>Activates the passed variant applicable to the passed control/component.</p>
                 * @param {sap.ui.base.ManagedObject | string} vElement <p>The component or control (instance or ID) on which the variantModel is set</p>
                 * @param {string} sVariantReference <p>The variant reference which needs to be activated</p>
                 * @returns Promise<any> <p>Returns Promise that resolves after the variant is updated or rejects when an error occurs</p>
                 */
                function activateVariant(vElement: sap.ui.base.ManagedObject | string, sVariantReference: string): Promise<any>;
                /**
                 * <p>Creates personalization changes, adds them to the flex persistence (not yet saved) and applies them to the control.</p>
                 * @param {any} mPropertyBag <p>Changes along with other settings that need to be added</p>
                 * @returns Promise<any> <p>Returns Promise resolving to an array of successfully applied changes, after the changes have been written to the map of dirty changes and applied to the control</p>
                 */
                function addPersonalizationChanges(mPropertyBag: any): Promise<any>;
                /**
                 * <p>Clears URL technical parameter 'sap-ui-fl-control-variant-id' for control variants. If a variant management control is given as parameter, only parameters specific to that control are cleared.</p>
                 * @param {sap.ui.base.ManagedObject} oVariantManagementControl <p>The variant management control for which the URL technical parameter has to be cleared</p>
                 */
                function clearVariantParameterInURL(oVariantManagementControl?: sap.ui.base.ManagedObject): void;
                /**
                 * <p>Determines the availability of an encompassing variant management control.</p>
                 * @param {sap.ui.base.ManagedObject} oControl <p>The control which should be tested for an encompassing variant management control</p>
                 * @returns boolean <p>Returns true if a variant management control is encompassing the given control, else false</p>
                 */
                function hasVariantManagement(oControl: sap.ui.base.ManagedObject): boolean;
                /**
                 * <p>Saves unsaved changes added to <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.ChangePersistence" data-sap-ui-target="ChangePersistence">sap.ui.fl.ChangePersistence</a>.</p>
                 * @param {any[]} aChanges <p>Array of changes to be saved</p>
                 * @param {sap.ui.base.ManagedObject} oManagedObject <p>A managed object instance which has an application component responsible, on which changes need to be saved</p>
                 * @returns Promise<any> <p>Returns Promise which is resolved when the passed array of changes have been saved</p>
                 */
                function saveChanges(aChanges: any[], oManagedObject: sap.ui.base.ManagedObject): Promise<any>;
                /**
                 * <p>Object containing attributes of a change, along with the control to which this change should be applied.</p>
                 */
                export interface PersonalizationChange {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p>Descriptor Related</p>
             */
            namespace descriptorRelated {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace descriptorRelated {
                /**
                 * <p>Descriptor Related Apis</p>
                 */
                namespace api {
                    /**
                     */
                    export class DescriptorChange {
                        /**
                         * <p>Descriptor Change</p>
                         * @param {any} mChangeFile <p>change file</p>
                         * @param {sap.ui.fl.descriptorRelated.api.DescriptorInlineChange} oInlineChange <p>inline change object</p>
                         * @param {sap.ui.fl.registry.Settings} oSettings <p>settings</p>
                         */
                        constructor(mChangeFile: any, oInlineChange: sap.ui.fl.descriptorRelated.api.DescriptorInlineChange, oSettings: object);
                    }
                    /**
                     */
                    export class DescriptorChangeFactory {
                        /**
                         * <p>Factory for Descriptor Changes</p>
                         */
                        constructor();
                    }
                    /**
                     */
                    export class DescriptorInlineChange {
                        /**
                         * <p>Descriptor Inline Change</p>
                         * @param {string} sChangeType <p>change type</p>
                         * @param {any} mParameters <p>parameters of the inline change for the provided change type</p>
                         * @param {any} mTexts <p>texts for the inline change</p>
                         */
                        constructor(sChangeType: string, mParameters?: any, mTexts?: any);
                    }
                    /**
                     */
                    export class DescriptorVariant {
                        /**
                         * <p>App variant/CDM app config</p>
                         * @param {any} mParameters <p>parameters</p>
                         * @param {any} mFileContent <p>file content of the existing app variant/CDM app config to be provided if app variant/CDM app config shall be created from an existing</p>
                         * @param {boolean} bDeletion <p>deletion indicator to be provided if app variant/CDM app config shall be deleted</p>
                         * @param {sap.ui.fl.registry.Settings} oSettings <p>settings</p>
                         */
                        constructor(mParameters: any, mFileContent: any, bDeletion: boolean, oSettings: object);
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace descriptorRelated {
                namespace api {
                    /**
                     * <p>Factory for Descriptor Inline Changes</p>
                     */
                    namespace DescriptorInlineChangeFactory {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace descriptorRelated {
                namespace api {
                    /**
                     * <p>Factory for App variant/CDM app configs</p>
                     */
                    namespace DescriptorVariantFactory {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             */
            namespace transport {
                /**
                 * <p>The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.</p>
                 */
                export class TransportDialog extends sap.m.Dialog {
                    /**
                     * <p>Constructor for a new transport/TransportDialog.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/cancel" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/cancel">cancel</a> event of this <code>sap.ui.fl.transport.TransportDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.transport.TransportDialog</code> itself.</p><p>This event will be fired when the user clicks the Cancel button on the dialog.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.transport.TransportDialog</code> itself</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachCancel(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/ok" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/ok">ok</a> event of this <code>sap.ui.fl.transport.TransportDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.transport.TransportDialog</code> itself.</p><p>This event will be fired when the user clicks the OK button on the dialog.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.transport.TransportDialog</code> itself</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachOk(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/cancel" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/cancel">cancel</a> event of this <code>sap.ui.fl.transport.TransportDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachCancel(fnFunction: Function, oListener: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/ok" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/ok">ok</a> event of this <code>sap.ui.fl.transport.TransportDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachOk(fnFunction: Function, oListener: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/cancel" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/cancel">cancel</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireCancel(mParameters?: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/events/ok" data-sap-ui-target="sap.ui.fl.transport.TransportDialog/events/ok">ok</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.transport.TransportDialog <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireOk(mParameters?: any): sap.ui.fl.transport.TransportDialog;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/methods/getHidePackage" data-sap-ui-target="getHidePackage">hidePackage</a>.</p><p>Flag indicating whether the selection of an ABAP package is to be hidden or not.</p>
                     * @returns boolean <p>Value of property <code>hidePackage</code></p>
                     */
                    getHidePackage(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/methods/getLrepObject" data-sap-ui-target="getLrepObject">lrepObject</a>.</p><p>The LREP object for which as transport request has to be selected</p>
                     * @returns any <p>Value of property <code>lrepObject</code></p>
                     */
                    getLrepObject(): any;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/methods/getPkg" data-sap-ui-target="getPkg">pkg</a>.</p><p>An ABAP package that can be used as default for the ABAP package selection.</p>
                     * @returns string <p>Value of property <code>pkg</code></p>
                     */
                    getPkg(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.transport.TransportDialog/methods/getTransports" data-sap-ui-target="getTransports">transports</a>.</p><p>The set of ABAP transport requests that can be selected by a user.</p>
                     * @returns any <p>Value of property <code>transports</code></p>
                     */
                    getTransports(): any;
                }
                /**
                 */
                export class TransportSelection {
                    /**
                     * @param {sap.ui.fl.Utils} Utils <p>a reference to the flexibility utilities implementation.</p>
                     * @param {sap.ui.fl.transport.Transports} Transports <p>a reference to the transport service implementation.</p>
                     * @param {sap.ui.fl.transport.TransportDialog} TransportDialog <p>a reference to the transport dialog implementation.</p>
                     * @param {sap.ui.fl.registry.Settings} FlexSettings <p>a reference to the settings implementation</p>
                     */
                    constructor(Utils: object, Transports: object, TransportDialog: sap.ui.fl.transport.TransportDialog, FlexSettings: object);
                    /**
                     * <p>Prepare all changes and assign them to an existing transport.</p>
                     * @param {any} oTransportInfo <p>object containing the package name and the transport</p>
                     * @param {any[]} aAllLocalChanges <p>array that includes all local changes</p>
                     * @returns Promise<any> <p>Returns a Promise which resolves without parameters</p>
                     */
                    _prepareChangesForTransport(oTransportInfo: any, aAllLocalChanges: any[]): Promise<any>;
                    /**
                     * <p>Checks transport info object</p>
                     * @param {any} oTransportInfo <p>transport info object</p>
                     * @returns boolean <p>returns true if transport info is complete</p>
                     */
                    checkTransportInfo(oTransportInfo?: any): boolean;
                    /**
                     * <p>Opens the transport selection dialog</p>
                     * @param {sap.ui.fl.Change} oChange <p>the change for which the transport information should be retrieved</p>
                     * @param {any} oControl 
                     * @returns Promise<any> <p>promise that resolves</p>
                     */
                    openTransportSelection(oChange: object, oControl: any): Promise<any>;
                    /**
                     * <p>Selects a transport request for a given LREP object. First checks if the Adaptation Transport Organizer (ATO) is enabled If ATO is enabled and the layered repository object is in the CUSTOMER layer, the request 'ATO_NOTIFICATION' has to be used. This request triggers in the back end that the change is added to an ATO collection. If ATO is not enabled or LREP object not in CUSTOMER layer: If the LREP object is already assigned to an open transport request or the LREP object is assigned to a local ABAP package, no dialog to select a transport is started. Instead the success callback is invoked directly. The transport dialog is shown if a package or a transport request has still to be selected, so if more than one transport request is available for the current user and the LREP object is not locked in an open transport request.</p>
                     * @param {any} oObjectInfo <p>the LREP object, which has the attributes name, name space, type, layer and package.</p>
                     * @param {Function} fOkay <p>call-back to be invoked when a transport request has successfully been selected.</p>
                     * @param {Function} fError <p>call-back to be invoked when an error occurred during selection of a transport request.</p>
                     * @param {boolean} bCompactMode <p>flag indicating whether the transport dialog should be opened in compact mode.</p>
                     * @param {any} oControl <p>Control instance</p>
                     */
                    selectTransport(oObjectInfo: any, fOkay: Function, fError: Function, bCompactMode: boolean, oControl: any): void;
                    /**
                     * <p>Sets the transports for all changes.</p>
                     * @param {any[]} aChanges <p>array of {sap.ui.fl.Change}</p>
                     * @param {any} oControl <p>object of the root control for the transport</p>
                     * @returns Promise<any> <p>promise that resolves without parameters</p>
                     */
                    setTransports(aChanges: any[], oControl: any): Promise<any>;
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             */
            namespace variants {
                /**
                 * <p>Returns the map with all changes to be reverted and applied when switching variants</p>
                 */
                export interface SwitchChanges {
                    /**
                     * <p>an array of changes to be reverted</p>
                     */
                    changesToBeReverted: any[];
                    /**
                     * <p>an array of changes to be applied</p>
                     */
                    changesToBeApplied: any[];
                }
                /**
                 * <p>The <code>VariantManagement</code> control can be used to manage variants.</p><h3>Usage</h3><p>You can use this control in most controls that are enabled for <i>UI adaptation at runtime</i>.</p>
                 */
                export class VariantManagement extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new VariantManagement.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some for into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getFor" data-sap-ui-target="getFor">for</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vFor <p>The for to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addFor(vFor: sap.ui.core.ID | sap.ui.core.Control): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/initialized" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/initialized">initialized</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when the model and context are set.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachInitialized(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/manage" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/manage">manage</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when users apply changes to variants in the Manage Variants dialog.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachManage(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/save" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/save">save</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when the Save Variant dialog is closed with OK for a variant.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSave(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/select" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/select">select</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when a new variant is selected.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/initialized" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/initialized">initialized</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachInitialized(fnFunction: Function, oListener: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/manage" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/manage">manage</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachManage(fnFunction: Function, oListener: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/save" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/save">save</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSave(fnFunction: Function, oListener: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/select" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/select">select</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/initialized" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/initialized">initialized</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireInitialized(mParameters?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/manage" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/manage">manage</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireManage(mParameters?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/save" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/save">save</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSave(mParameters?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/events/select" data-sap-ui-target="sap.ui.fl.variants.VariantManagement/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Gets the currently selected variant key.</p>
                     * @returns String <p>The currently selected variant key. In case the model is yet not set <code>null</code> will be returned.</p>
                     */
                    getCurrentVariantKey(): String;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Indicates that the control is in edit state. If set to <code>false</code> the footer of the views list will be hidden.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>editable</code></p>
                     */
                    getEditable(): boolean;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getFor" data-sap-ui-target="getFor">for</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getFor(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getInErrorState" data-sap-ui-target="getInErrorState">inErrorState</a>.</p><p>Indicates that the control is in error state. If set to <code>true</code> error message will be displayed whenever the variant is opened.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>inErrorState</code></p>
                     */
                    getInErrorState(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getManualVariantKey" data-sap-ui-target="getManualVariantKey">manualVariantKey</a>.</p><p>If set to<code>true</code>, the key for a vendor variant will be added manually.<br> <b>Node:</b>This flag is only used internally in the app variant scenarios.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>manualVariantKey</code></p>
                     */
                    getManualVariantKey(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getModelName" data-sap-ui-target="getModelName">modelName</a>.</p><p>Determines the name of the model. The binding context will be defined by the current ID. <p> <b>Note:</b> In a UI adaptation scenario, this property is not used at all because the model name is <i>$FlexVariants</i></p>
                     * @returns string <p>Value of property <code>modelName</code></p>
                     */
                    getModelName(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getShowExecuteOnSelection" data-sap-ui-target="getShowExecuteOnSelection">showExecuteOnSelection</a>.</p><p>Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>showExecuteOnSelection</code></p>
                     */
                    getShowExecuteOnSelection(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getShowSetAsDefault" data-sap-ui-target="getShowSetAsDefault">showSetAsDefault</a>.</p><p>Indicates that set as default is visible in the Save Variant and the Manage Variants dialogs.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>showSetAsDefault</code></p>
                     */
                    getShowSetAsDefault(): boolean;
                    /**
                     * <p>Returns the title control of the VariantManagement. Usage in RTA scenario.</p>
                     * @returns sap.m.Title <p>title part of the VariantManagement control.</p>
                     */
                    protected getTitle(): sap.m.Title;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getUpdateVariantInURL" data-sap-ui-target="getUpdateVariantInURL">updateVariantInURL</a>.</p><p>Determines the intention of setting the current variant based on passed information. <p> <b>Note:</b> The VariantManagement control does not react in any way to this property.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>updateVariantInURL</code></p>
                     */
                    getUpdateVariantInURL(): boolean;
                    /**
                     * <p>Retrieves all variants.</p>
                     * @returns any[] <p>with all variants. In case the model is yet not set an empty array will be returned.</p>
                     */
                    getVariants(): any[];
                    /**
                     * <p>Opens the manage dialog.</p>
                     * @param {boolean} bCreateAlways <p>in case this is set to <code>true</code> the former dialog will be destroyed, before a new one is created.</p>
                     */
                    openManagementDialog(bCreateAlways: boolean): void;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getFor" data-sap-ui-target="getFor">for</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllFor(): sap.ui.core.ID[];
                    /**
                     * <p>Removes an for from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getFor" data-sap-ui-target="getFor">for</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vFor <p>The for to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed for or <code>null</code></p>
                     */
                    removeFor(vFor: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Sets the new selected variant.</p>
                     * @param {String} sKey <p>the variant key which should be selected.</p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>the current instance of <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement" data-sap-ui-target="VariantManagement">sap.ui.fl.variants.VariantManagement</a>.</p>
                     */
                    setCurrentVariantKey(sKey: String): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Indicates that the control is in edit state. If set to <code>false</code> the footer of the views list will be hidden.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEditable(bEditable: boolean): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getInErrorState" data-sap-ui-target="getInErrorState">inErrorState</a>.</p><p>Indicates that the control is in error state. If set to <code>true</code> error message will be displayed whenever the variant is opened.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bInErrorState <p>New value for property <code>inErrorState</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setInErrorState(bInErrorState: boolean): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getManualVariantKey" data-sap-ui-target="getManualVariantKey">manualVariantKey</a>.</p><p>If set to<code>true</code>, the key for a vendor variant will be added manually.<br> <b>Node:</b>This flag is only used internally in the app variant scenarios.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bManualVariantKey <p>New value for property <code>manualVariantKey</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManualVariantKey(bManualVariantKey: boolean): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getModelName" data-sap-ui-target="getModelName">modelName</a>.</p><p>Determines the name of the model. The binding context will be defined by the current ID. <p> <b>Note:</b> In a UI adaptation scenario, this property is not used at all because the model name is <i>$FlexVariants</i></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sModelName <p>New value for property <code>modelName</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setModelName(sModelName: string): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getShowExecuteOnSelection" data-sap-ui-target="getShowExecuteOnSelection">showExecuteOnSelection</a>.</p><p>Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bShowExecuteOnSelection <p>New value for property <code>showExecuteOnSelection</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowExecuteOnSelection(bShowExecuteOnSelection: boolean): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getShowSetAsDefault" data-sap-ui-target="getShowSetAsDefault">showSetAsDefault</a>.</p><p>Indicates that set as default is visible in the Save Variant and the Manage Variants dialogs.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bShowSetAsDefault <p>New value for property <code>showSetAsDefault</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowSetAsDefault(bShowSetAsDefault: boolean): sap.ui.fl.variants.VariantManagement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.fl.variants.VariantManagement/methods/getUpdateVariantInURL" data-sap-ui-target="getUpdateVariantInURL">updateVariantInURL</a>.</p><p>Determines the intention of setting the current variant based on passed information. <p> <b>Note:</b> The VariantManagement control does not react in any way to this property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bUpdateVariantInURL <p>New value for property <code>updateVariantInURL</code></p>
                     * @returns sap.ui.fl.variants.VariantManagement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setUpdateVariantInURL(bUpdateVariantInURL: boolean): sap.ui.fl.variants.VariantManagement;
                }
                /**
                 * <p>Variant Model implementation for JSON format</p>
                 */
                export class VariantModel extends sap.ui.model.json.JSONModel {
                    /**
                     * <p>Constructor for a new sap.ui.fl.variants.VariantModel model.</p>
                     * @param {any} oData <p>either the URL where to load the JSON from or a JS object</p>
                     * @param {any} oFlexController <p>the FlexController instance for the component which uses the variant model</p>
                     * @param {any} oAppComponent <p>Application component instance that is currently loading</p>
                     * @param {boolean} bObserve <p>whether to observe the JSON data for property changes (experimental)</p>
                     */
                    constructor(oData: any, oFlexController: any, oAppComponent: any, bObserve: boolean);
                    /**
                     * <p>Returns the current variant for a given variant management control</p>
                     * @param {string} sVariantManagementReference <p>The variant management reference</p>
                     * @returns string <p>The current variant reference</p>
                     */
                    getCurrentVariantReference(sVariantManagementReference: string): string;
                }
            }
        }
    }
}
