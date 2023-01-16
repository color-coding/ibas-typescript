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
            namespace enablement {
                /**
                 * <p><p>sap.ui.fl Delegate to be used in elementActionTests.</p></p>
                 */
                namespace TestDelegate {
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
                 * <p><p>Provides necessary functionality to get and execute actions on controls. Actions are UI operations available in key user adaptation such as rename, remove, move etc.</p></p>
                 */
                namespace Action {
                    /**
                     * <p>Returns a list of available actions for the specified control(s).</p>
                     * @param {string | string[]} vControlIds <p>Control ID or an array of IDs to get actions for</p>
                     * @param {string} sActionId <p>Action ID to be executed on the specified controls</p>
                     * @returns any <p>Result of the operation wrapped in a promise.</p>
                     */
                    function execute(vControlIds: string | string[], sActionId: string): any;
                    /**
                     * <p>Returns a list of available actions for the specified control(s) wrapped in a promise.</p><p>Example:</p><p><pre>
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
                            "icon": "sap-icon://decline"
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
                     * @returns any <p>List of available actions wrapped in a promise</p>
                     */
                    function get(vControlIds: string | string[]): any;
                    /**
                     * <p><p>Object containing the detailed information about the action.</p><p><pre>
                    {
                       id: &lt;string&gt;, // ID of the action
                       group: &lt;string&gt;, // Group name, in case the action has been grouped with other action(s)
                       icon: &lt;string&gt;, // Icon name
                       enabled: &lt;boolean&gt;, // Indicates whether the action is active and can be executed
                       rank: &lt;int&gt;, // Sorting rank for visual representation of the action position
                       text: &lt;string&gt;, // Action name
                    }
                    </pre></p></p>
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
                 * <p><p>Provides functionality to create <code>ControllerExtensions</code>.</p></p>
                 */
                namespace ControllerExtension {
                    /**
                     * <p>Creates a change that adds an extension to the controller associated with the given view. Throws an error if the information is not complete. As of now, this only creates the change with a reference to a file. The consumer has to take care of creating that file and adding it to the backend.</p>
                     * @param {string} sCodeRef <p>Name of the file, without path, with the extension <code>.js</code>. Must comply to UI5 module naming convention. Has to be unique and must not conflict with other already defined modules.</p>
                     * @param {string} sViewId <p>ID of the view whose controller should be extended</p>
                     * @returns any <p>Definition of the newly created change</p>
                     */
                    function add(sCodeRef: string, sViewId: string): any;
                    /**
                     * <p>Gets the controller extension template from the <code>DesignTimeMetadata</code> of the given view and returns it as a string wrapped in a promise. If there is no template specified, a default template will be returned.</p>
                     * @param {string} sViewId <p>ID of the view whose template should be retrieved</p>
                     * @returns Promise<any> <p>Promise that resolves with the template as string or rejects when the file was not found</p>
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
                 * <p><p>Provides necessary functionality to get tree model data for an outline. Takes into consideration different design time root elements.</p></p>
                 */
                namespace Outline {
                    /**
                     * <p>Returns an outline model data associated with the key user adaptation instance, starting from the passed control. If no control is passed, the root control(s) of the respective key user adaptation instance is taken as the initial control. Throws an error if the control ID parameter is not a valid control with a stable ID.</p>
                     * @param {string} sId <p>ID of the control to start with. If omitted the root control(s) is used.</p>
                     * @param {number} iDepth <p>Depth of <code>childNode</code> levels that should be returned based on the given control</p>
                     * @returns sap.ui.rta.service.Outline.OutlineObject <p>Array containing outline data for each root control</p>
                     */
                    function get(sId?: string, iDepth?: number): sap.ui.rta.service.Outline.OutlineObject;
                    /**
                     * <p><p>Object containing an outline of available nodes.</p></p>
                     */
                    export interface ExtensionPointInfo {
                    }
                    /**
                     * <p><p>Object containing an outline of available nodes.</p></p>
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
                 * <p><p>Provides necessary functionality to retrieve design time metadata properties. Takes into consideration control metadata properties, design time metadata properties, annotations, label and name.</p></p>
                 */
                namespace Property {
                    /**
                     * <p>Returns an object containing design time properties for the passed control's ID. Throws an error if the control ID parameter is not a valid control with a stable ID.</p><p>Example:</p><p><pre>
                        {
                            "properties": {
                                <...>,
                                "virtualProperty1": {
                                    <...>
                                },
                                "metadataProperty1": {
                                    <...>
                                }
                            },
                            "annotations": {
                                "annotation1": {
                                    <...>
                                },
                                <...>
                            },
                            "links": {
                                <...>
                            },
                            <...>
                        }
                    </pre></p>
                     * @param {string} sControlId <p>ID of the control to start with</p>
                     * @returns sap.ui.rta.service.Property.PropertyObject <p>Object containing relevant property data for the passed control</p>
                     */
                    function get(sControlId: string): sap.ui.rta.service.Property.PropertyObject;
                    /**
                     * <p><p>Object containing the detailed information about design time properties of the passed control.</p></p>
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
                 * <p><p>Provides functionality to get and set selection on controls.</p></p>
                 */
                export class Selection {
                    /**
                     * <p>Adds the specified controls to the current selection.</p>
                     * @param {string | string[]} vControlIds <p>Control IDs to be selected</p>
                     * @returns boolean <p><code>true</code> if the selection has changed</p>
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
                     * @returns boolean <p><code>true</code> if the selection has changed</p>
                     */
                    static remove(vControlIds: string | string[]): boolean;
                    /**
                     * <p>Resets the current selection.</p>
                     * @returns boolean <p><code>true</code> if completed successfully (<code>false</code> if there is nothing to reset)</p>
                     */
                    static reset(): boolean;
                    /**
                     * <p>Deselects the current selection and selects the specified list of controls.</p>
                     * @param {string | string[]} vControlIds <p>Control IDs to be selected</p>
                     * @returns boolean <p><code>true</code> if the selection has changed</p>
                     */
                    static set(vControlIds: string | string[]): boolean;
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
                 * <p><p>Service to register message event listeners for the communication with the Flex Support web extension.</p><p>This is implemented as a service and not as part of the injected script because there is no easy way to retrieve the RuntimeAuthoring instance otherwise.</p></p>
                 */
                namespace SupportTools {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace rta {
            namespace util {
                /**
                 * <p><p>Static class to handle all the reload related functionality for UI Adaptation</p></p>
                 */
                namespace ReloadManager {
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
                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 */
                constructor();
                /**
                 * <p>Destroys the client. After an object has been destroyed, it can no longer be used.</p>
                 */
                destroy(): void;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace rta {
            /**
             */
            namespace api {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace rta {
            /**
             */
            namespace enablement {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace rta {
            /**
             */
            namespace service {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace rta {
            /**
             */
            namespace util {
            }
        }
    }
}
