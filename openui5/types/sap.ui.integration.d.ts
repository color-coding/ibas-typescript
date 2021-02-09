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
                 * <p>Used for custom actions</p>
                 */
                Custom = "Custom",
                /**
                 * <p>Used for navigation actions</p>
                 */
                Navigation = "Navigation",
                /**
                 * <p>Used for submit actions</p>
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
            /**
             * <p><p>An object type that represents card menu action properties.</p></p>
             */
            export interface CardMenuAction {
                /**
                 * <p>The type of the action.</p>
                 */
                type: sap.ui.integration.CardActionType;
                /**
                 * <p>The text of the action button.</p>
                 */
                text: string;
                /**
                 * <p>The icon of the action button.</p>
                 */
                icon: sap.ui.core.URI;
                /**
                 * <p>The tooltip of the action button.</p>
                 */
                tooltip: string;
                /**
                 * <p>The type of the action button.</p>
                 */
                buttonType: sap.m.ButtonType;
                /**
                 * <p>If the action is enabled. Default value is <code>true</code>.</p>
                 */
                enabled: boolean | Function;
                /**
                 * <p>If the action is visible. Default value is <code>true</code>.</p>
                 */
                visible: boolean | Function;
                /**
                 * <p>The action function.</p>
                 */
                action: Function;
                /**
                 * <p>The parameters of the action.</p>
                 */
                parameters: any;
            }
            /**
             * <p>Brings JavaScript capabilities for an <a target="_self" class="jsdoclink" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> where custom logic can be implemented.</p>
             */
            export class Designtime extends sap.ui.base.ManagedObject {
                /**
                 * <p>Constructor for a new <code>Designtime</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject</a> can be used.</p>
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
             * <p>Brings JavaScript capabilities for an <a target="_self" class="jsdoclink" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> where custom logic can be implemented.</p>
             */
            export class Extension extends sap.ui.base.ManagedObject {
                /**
                 * <p>Constructor for a new <code>Extension</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new extension, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new extension.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Extension#events/action">action</a> event of this <code>sap.ui.integration.Extension</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Extension</code> itself.</p><p>Fired when an action is triggered in the card.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Extension</code> itself</p>
                 * @returns sap.ui.integration.Extension <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachAction(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.Extension;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Extension#events/action">action</a> event of this <code>sap.ui.integration.Extension</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.integration.Extension <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.Extension;
                /**
                 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Extension#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireAction(mParameters?: any): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getActions" href="api/sap.ui.integration.Extension#methods/getActions">actions</a>.</p><p>The actions configuration.</p>
                 * @returns sap.ui.integration.CardMenuAction[] <p>Value of property <code>actions</code></p>
                 */
                getActions(): sap.ui.integration.CardMenuAction[];
                /**
                 * <p>Returns an interface to the card, which uses this extension.</p>
                 * @returns sap.ui.integration.widgets.CardFacade <p>An interface to the card.</p>
                 */
                getCard(): sap.ui.integration.widgets.CardFacade;
                /**
                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getFormatters" href="api/sap.ui.integration.Extension#methods/getFormatters">formatters</a>.</p><p>The formatters, which can be used in the manifest.</p>
                 * @returns any <p>Value of property <code>formatters</code></p>
                 */
                getFormatters(): any;
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
                 * <p>Constructor for a new <code>Host</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new host, generated automatically if no ID is given.</p>
                 * @param {any} mSettings <p>Initial settings for the new host.</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Host#events/action">action</a> event of this <code>sap.ui.integration.Host</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.Host</code> itself.</p><p>Fired when an action is triggered.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.Host</code> itself</p>
                 * @returns sap.ui.integration.Host <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachAction(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.Host;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Host#events/action">action</a> event of this <code>sap.ui.integration.Host</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.integration.Host <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.Host;
                /**
                 * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.Host#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireAction(mParameters?: any): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getActions" href="api/sap.ui.integration.Host#methods/getActions">actions</a>.</p><p>The actions configuration.</p>
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
                 * <p>Resolves the destination and returns its URL.</p>
                 * @param {string} sDestinationName <p>The name of the destination. Most often the name which is used in the SAP Cloud Platform.</p>
                 * @returns Promise<any> <p>A promise which resolves with the URL of the destination.</p>
                 */
                getDestination(sDestinationName: string): Promise<any>;
                /**
                 * <p>Returns the list of destinations for the Card Editor design-time environment List entries are objects that contain at least the name. { "name": "DestinationName" }</p>
                 * @returns Promise<any> <p>A promise which resolves with the list of destinations.</p>
                 */
                getDestinations(): Promise<any>;
                /**
                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getResolveDestination" href="api/sap.ui.integration.Host#methods/getResolveDestination">resolveDestination</a>.</p><p>A function that resolves the given destination name to a URL.</p><p>The Card calls this function when it needs to send a request to a destination. Function returns the URL to which the request is sent.</p><p>If a card depends on a destination, but this callback is not implemented, an error will be logged.</p><p>The callback receives <code>destinationName</code> as parameter and returns a string with the URL. Or alternatively the callback may return a <code>Promise</code> with the URL as an argument.</p>
                 * @returns Function <p>Value of property <code>resolveDestination</code></p>
                 */
                getResolveDestination(): Function;
                /**
                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getActions" href="api/sap.ui.integration.Host#methods/getActions">actions</a>.</p><p>The actions configuration.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.integration.CardMenuAction[]} sActions <p>New value for property <code>actions</code></p>
                 * @returns sap.ui.integration.Host <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setActions(sActions: sap.ui.integration.CardMenuAction[]): sap.ui.integration.Host;
                /**
                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getResolveDestination" href="api/sap.ui.integration.Host#methods/getResolveDestination">resolveDestination</a>.</p><p>A function that resolves the given destination name to a URL.</p><p>The Card calls this function when it needs to send a request to a destination. Function returns the URL to which the request is sent.</p><p>If a card depends on a destination, but this callback is not implemented, an error will be logged.</p><p>The callback receives <code>destinationName</code> as parameter and returns a string with the URL. Or alternatively the callback may return a <code>Promise</code> with the URL as an argument.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {Function} fnResolveDestination <p>New value for property <code>resolveDestination</code></p>
                 * @returns sap.ui.integration.Host <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setResolveDestination(fnResolveDestination: Function): sap.ui.integration.Host;
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
                         * <p><p>Validates if the provided value is a boolean or binding string.</p></p>
                         */
                        namespace IsJSONObject {
                            /**
                             * <p>Validator function</p>
                             * @param {any} vValue <p>Value to validate</p>
                             * @returns boolean <p>Validation result</p>
                             */
                            function validate(vValue: any): boolean;
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
                /**
                 */
                export class Preview extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>Preview</code> that show a image, abstract live preview</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
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
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when config has been changed.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when designtime metadata has been changed by a <code>propertyEditor</code>.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachDesigntimeMetadataChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="jsonChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/jsonChange">jsonChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when any property has been changed by the <code>propertyEditor</code>.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachJsonChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsReady" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/propertyEditorsReady">propertyEditorsReady</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code> itself.</p><p>Fired when all property editors for the given JSON and configuration are created. TODO: remove this public event.</p>
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
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.BaseEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachDesigntimeMetadataChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
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
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/configChange">configChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireDesigntimeMetadataChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
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
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getConfig">config</a>.</p><p>Configuration Map config.context {string} Path in the JSON that will be edited e.g. <code>"path/subpath"</code> for <code>json.path.subpath</code> config.properties {Object<string,object>} Defines which fields in the context are editable config.properties.<key>.label {string} of the property to show on the UI config.properties.<key>.type {string} of the property (property editor for this type will be shown) config.properties.<key>.path {string} that will be changed, relative to the context. Example: If the context is <code>root</code> and the path is <code>header/name</code>, the <code>json.root.header.name</code> field is to be changed config.properties.<key>.value {string|boolean} (Optional) value of the property. A binding relative to the context (model name) should be used. Example: <code>{context>header/name}</code> will create a binding <code>json.root.header.name</code> config.properties.<key>.tags {array} Strings to categorize the property config.properties.<key>.visible {string|boolean} Should be used as a binding relative to the context to define the conditions under which this property should be changeable, e.g. <code>{= ${context>anotherProperty} === 'someValue'}</code> config.properties.<key>.<other configurations> {any} It is possible to define additional configurations in this namespace. These configurations will be passed to the dedicated property editor. Binding strings relative to context model are supported as well, e.g. <code>{= ${context>someProperty} + ${context>anotherProperty}}</code> config.propertyEditors {Object<string,string>} Defines which property editors should be loaded. Key is the property type and value is the editor module path. Example: <code>propertyEditors: {"string": "sap/ui/integration/designtime/controls/propertyEditors/StringEditor"}</code> defines the module responsible for all properties with the type <code>string</code> config.i18n {string|array} Module path or array of paths for i18n property files. i18n binding, for example, <code>{i18n>key}</code> is available in the <code>/properties<code> section, e.g. for <code>label</code></p><p>Default value is <code>{ "i18n": [ "sap/ui/integration/designtime/baseEditor/i18n/i18n.properties" ] }</code>.</p>
                         * @returns any <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any;
                        /**
                         * <p>Gets content of aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getContent">content</a>.</p>
                         * @returns sap.ui.core.Control[] 
                         */
                        getContent(): sap.ui.core.Control[];
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getDesigntimeMetadata" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getDesigntimeMetadata">designtimeMetadata</a>.</p><p>Designtime-specific metadata to be changed in the editor. Note: If an object is passed as a parameter, it won't be mutated. <code>.getDesigntimeMetadata()</code> or <code>.attachDesigntimeMetadataChange()</code> should be used instead to get the changed object.</p>
                         * @returns any <p>Value of property <code>designtimeMetadata</code></p>
                         */
                        getDesigntimeMetadata(): any;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getJson" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getJson">json</a>.</p><p>JSON to be changed in the editor. Note: If an object is passed as a parameter, it won't be mutated. <code>.getJson()</code> or <code>.attachJsonChange()</code> should be used instead to get the changed object.</p>
                         * @returns any <p>Value of property <code>json</code></p>
                         */
                        getJson(): any;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayout" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getLayout">layout</a>.</p><p>Layout name. Standard layout types: list | form</p><p>Default value is <code>"list"</code>.</p>
                         * @returns string <p>Value of property <code>layout</code></p>
                         */
                        getLayout(): string;
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
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getConfig">config</a>.</p><p>Configuration Map config.context {string} Path in the JSON that will be edited e.g. <code>"path/subpath"</code> for <code>json.path.subpath</code> config.properties {Object<string,object>} Defines which fields in the context are editable config.properties.<key>.label {string} of the property to show on the UI config.properties.<key>.type {string} of the property (property editor for this type will be shown) config.properties.<key>.path {string} that will be changed, relative to the context. Example: If the context is <code>root</code> and the path is <code>header/name</code>, the <code>json.root.header.name</code> field is to be changed config.properties.<key>.value {string|boolean} (Optional) value of the property. A binding relative to the context (model name) should be used. Example: <code>{context>header/name}</code> will create a binding <code>json.root.header.name</code> config.properties.<key>.tags {array} Strings to categorize the property config.properties.<key>.visible {string|boolean} Should be used as a binding relative to the context to define the conditions under which this property should be changeable, e.g. <code>{= ${context>anotherProperty} === 'someValue'}</code> config.properties.<key>.<other configurations> {any} It is possible to define additional configurations in this namespace. These configurations will be passed to the dedicated property editor. Binding strings relative to context model are supported as well, e.g. <code>{= ${context>someProperty} + ${context>anotherProperty}}</code> config.propertyEditors {Object<string,string>} Defines which property editors should be loaded. Key is the property type and value is the editor module path. Example: <code>propertyEditors: {"string": "sap/ui/integration/designtime/controls/propertyEditors/StringEditor"}</code> defines the module responsible for all properties with the type <code>string</code> config.i18n {string|array} Module path or array of paths for i18n property files. i18n binding, for example, <code>{i18n>key}</code> is available in the <code>/properties<code> section, e.g. for <code>label</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>{ "i18n": [ "sap/ui/integration/designtime/baseEditor/i18n/i18n.properties" ] }</code>.</p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setConfig(): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getDesigntimeMetadata" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getDesigntimeMetadata">designtimeMetadata</a>.</p><p>Designtime-specific metadata to be changed in the editor. Note: If an object is passed as a parameter, it won't be mutated. <code>.getDesigntimeMetadata()</code> or <code>.attachDesigntimeMetadataChange()</code> should be used instead to get the changed object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oDesigntimeMetadata <p>New value for property <code>designtimeMetadata</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setDesigntimeMetadata(oDesigntimeMetadata: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getJson" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getJson">json</a>.</p><p>JSON to be changed in the editor. Note: If an object is passed as a parameter, it won't be mutated. <code>.getJson()</code> or <code>.attachJsonChange()</code> should be used instead to get the changed object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oJson <p>New value for property <code>json</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setJson(oJson: any): sap.ui.integration.designtime.baseEditor.BaseEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayout" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor#methods/getLayout">layout</a>.</p><p>Layout name. Standard layout types: list | form</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"list"</code>.</p>
                         * @param {string} sLayout <p>New value for property <code>layout</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.BaseEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setLayout(sLayout?: string): sap.ui.integration.designtime.baseEditor.BaseEditor;
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
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/beforeValueChange">beforeValueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires before the value of the nested property editor changes</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachBeforeValueChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when <code>config</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when the designtime metadata of the nested property editor changes</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachDesigntimeMetadataChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when the new editor changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when the wrapper is initialized.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachInit(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyEditorChange">propertyEditorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when the internal property editor changes, e.g. called after the initial initialization or after changing the <code>propertyName</code> or <code>config</code> properties.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyNameChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/propertyNameChange">propertyNameChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when <code>propertyName</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyNameChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when nested property editor is ready.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself.</p><p>Fires when the value of the nested property editor changes</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachValueChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/beforeValueChange">beforeValueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachBeforeValueChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachDesigntimeMetadataChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachEditorChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachInit(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
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
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/beforeValueChange">beforeValueChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireBeforeValueChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/configChange">configChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireDesigntimeMetadataChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/editorChange">editorChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireEditorChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#events/init">init</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireInit(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
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
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getConfig">config</a>.</p><p>Custom configuration object. If set, it has priority over <code>propertyName</code>. Example: <pre>
                        {
                            "label": "My property",
                            "type": "string",
                            "path": "header/status/text"
                        }
                        </pre> Where: <ul> <li><b>label</b> = text string for the property editor label</li> <li><b>type</b> = one of the registered property editor types in <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor configuration</a> (see <code>propertyEditors</code> section)</li> <li><b>path</b> = a binding path to get data from</li> </ul></p>
                         * @returns any <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any;
                        /**
                         * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getEditor">editor</a>, or <code>null</code>.</p>
                         * @returns sap.ui.core.ID 
                         */
                        getEditor(): sap.ui.core.ID;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getPropertyName" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getPropertyName">propertyName</a>.</p><p>Property name for which the configuration should be retrieved. The configuration for a specified name will be taken from the <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor</a> directly.</p>
                         * @returns string <p>Value of property <code>propertyName</code></p>
                         */
                        getPropertyName(): string;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getRenderLabel">renderLabel</a>.</p><p>Indicates whether the embedded <code>BasePropertyEditor</code> should render its label.</p>
                         * @returns boolean <p>Value of property <code>renderLabel</code></p>
                         */
                        getRenderLabel(): boolean;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getValue">value</a>.</p><p>Nested editor value</p>
                         * @returns any <p>Value of property <code>value</code></p>
                         */
                        getValue(): any;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getConfig">config</a>.</p><p>Custom configuration object. If set, it has priority over <code>propertyName</code>. Example: <pre>
                        {
                            "label": "My property",
                            "type": "string",
                            "path": "header/status/text"
                        }
                        </pre> Where: <ul> <li><b>label</b> = text string for the property editor label</li> <li><b>type</b> = one of the registered property editor types in <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor configuration</a> (see <code>propertyEditors</code> section)</li> <li><b>path</b> = a binding path to get data from</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
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
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getPropertyName" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getPropertyName">propertyName</a>.</p><p>Property name for which the configuration should be retrieved. The configuration for a specified name will be taken from the <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor</a> directly.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {string} sPropertyName <p>New value for property <code>propertyName</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setPropertyName(sPropertyName: string): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabel" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getRenderLabel">renderLabel</a>.</p><p>Indicates whether the embedded <code>BasePropertyEditor</code> should render its label.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {boolean} bRenderLabel <p>New value for property <code>renderLabel</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setRenderLabel(bRenderLabel: boolean): sap.ui.integration.designtime.baseEditor.PropertyEditor;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditor#methods/getValue">value</a>.</p><p>Nested editor value</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oValue <p>New value for property <code>value</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setValue(oValue: any): sap.ui.integration.designtime.baseEditor.PropertyEditor;
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
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when <code>config</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="editorChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/editorChange">editorChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when the new editor changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachEditorChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when the wrapper is initialized.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachInit(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutChange">layoutChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when <code>layout</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachLayoutChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutConfigChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutConfigChange">layoutConfigChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when <code>layoutConfig</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachLayoutConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="propertyEditorsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/propertyEditorsChange">propertyEditorsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when the internal <code>propertyEditors</code> aggregation changes, e.g. called after the initial initialization or after changing <code>tag</code> or <code>config</code> properties.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachPropertyEditorsChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when the nested editors are ready</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="tagsChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/tagsChange">tagsChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself.</p><p>Fires when <code>tags</code> changes.</p>
                         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                         * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                         * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code> itself</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        attachTagsChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Destroys the content in the aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getContent">content</a>.</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        destroyContent(): sap.ui.integration.designtime.baseEditor.PropertyEditors;
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
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutChange">layoutChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachLayoutChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutConfigChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutConfigChange">layoutConfigChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.PropertyEditors</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                         * @param {any} oListener <p>Context object on which the given function had to be called</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        detachLayoutConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
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
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutChange">layoutChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireLayoutChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="layoutConfigChange" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#events/layoutConfigChange">layoutConfigChange</a> to attached listeners.</p>
                         * @param {any} mParameters <p>Parameters to pass along with the event</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        protected fireLayoutConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
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
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getConfig">config</a>.</p><p>An array of custom configuration objects. If set, it has priority over <code>tags</code>. Example: <pre>
                        [
                            {
                                "label": "My property 1",
                                "type": "string",
                                "path": "path/to/my/property1"
                            },
                            {
                                "label": "My property 2",
                                "type": "string",
                                "path": "path/to/my/property2"
                            }
                        ]
                        </pre> Where: <ul> <li><b>label</b> = text string for the property editor label</li> <li><b>type</b> = one of the registered property editors types in <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor configuration</a> (see <code>propertyEditors</code> section)</li> <li><b>path</b> = a binding path to get data from</li> </ul></p>
                         * @returns any[] <p>Value of property <code>config</code></p>
                         */
                        getConfig(): any[];
                        /**
                         * <p>Gets content of aggregation <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getContent">content</a>.</p>
                         * @returns sap.ui.core.Control 
                         */
                        getContent(): sap.ui.core.Control;
                        /**
                         * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getEditor">editor</a>, or <code>null</code>.</p>
                         * @returns sap.ui.core.ID 
                         */
                        getEditor(): sap.ui.core.ID;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayout" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getLayout">layout</a>.</p><p>Default value is <code>"list"</code>.</p>
                         * @returns string <p>Value of property <code>layout</code></p>
                         */
                        getLayout(): string;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayoutConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getLayoutConfig">layoutConfig</a>.</p>
                         * @returns any <p>Value of property <code>layoutConfig</code></p>
                         */
                        getLayoutConfig(): any;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabels" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getRenderLabels">renderLabels</a>.</p><p>Indicates whether the embedded <code>BasePropertyEditor</code> instances should render their labels.</p>
                         * @returns boolean <p>Value of property <code>renderLabels</code></p>
                         */
                        getRenderLabels(): boolean;
                        /**
                         * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getTags" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getTags">tags</a>.</p><p>List of tags to render, e.g. <code>"header,content"</code>. Only the properties that contain both tags will be rendered.</p>
                         * @returns string <p>Value of property <code>tags</code></p>
                         */
                        getTags(): string;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getConfig">config</a>.</p><p>An array of custom configuration objects. If set, it has priority over <code>tags</code>. Example: <pre>
                        [
                            {
                                "label": "My property 1",
                                "type": "string",
                                "path": "path/to/my/property1"
                            },
                            {
                                "label": "My property 2",
                                "type": "string",
                                "path": "path/to/my/property2"
                            }
                        ]
                        </pre> Where: <ul> <li><b>label</b> = text string for the property editor label</li> <li><b>type</b> = one of the registered property editors types in <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.BaseEditor">BaseEditor configuration</a> (see <code>propertyEditors</code> section)</li> <li><b>path</b> = a binding path to get data from</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any[]} sConfig <p>New value for property <code>config</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setConfig(sConfig: any[]): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets the aggregated <a target="_self" class="jsdoclink scrollToMethod" data-target="getContent" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getContent">content</a>.</p>
                         * @param {sap.ui.core.Control} oContent <p>The content to set</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setContent(oContent: sap.ui.core.Control): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditor" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getEditor">editor</a>.</p>
                         * @param {sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor} oEditor <p>ID of an element which becomes the new target of this editor association; alternatively, an element instance may be given</p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setEditor(oEditor: sap.ui.core.ID | sap.ui.integration.designtime.baseEditor.BaseEditor): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayout" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getLayout">layout</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"list"</code>.</p>
                         * @param {string} sLayout <p>New value for property <code>layout</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setLayout(sLayout?: string): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getLayoutConfig" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getLayoutConfig">layoutConfig</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {any} oLayoutConfig <p>New value for property <code>layoutConfig</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setLayoutConfig(oLayoutConfig: any): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getRenderLabels" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getRenderLabels">renderLabels</a>.</p><p>Indicates whether the embedded <code>BasePropertyEditor</code> instances should render their labels.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {boolean} bRenderLabels <p>New value for property <code>renderLabels</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setRenderLabels(bRenderLabels: boolean): sap.ui.integration.designtime.baseEditor.PropertyEditors;
                        /**
                         * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getTags" href="api/sap.ui.integration.designtime.baseEditor.PropertyEditors#methods/getTags">tags</a>.</p><p>List of tags to render, e.g. <code>"header,content"</code>. Only the properties that contain both tags will be rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                         * @param {string} sTags <p>New value for property <code>tags</code></p>
                         * @returns sap.ui.integration.designtime.baseEditor.PropertyEditors <p>Reference to <code>this</code> in order to allow method chaining</p>
                         */
                        setTags(sTags: string): sap.ui.integration.designtime.baseEditor.PropertyEditors;
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
                             * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/beforeValueChange">beforeValueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires before value is changed</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachBeforeValueChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires when config is changed</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachConfigChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires when designtime metadata is changed</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachDesigntimeMetadataChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="fragmentChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/fragmentChange">fragmentChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires when fragment is changed</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachFragmentChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires when init is finished</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachInit(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="ready" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/ready">ready</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fired when the editor fragment was loaded and the <code>asyncInit</code> method was executed</p>
                             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            attachReady(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-target="valueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/valueChange">valueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code> itself.</p><p>Fires when value is changed</p>
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
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/beforeValueChange">beforeValueChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachBeforeValueChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/configChange">configChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachConfigChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachDesigntimeMetadataChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="fragmentChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/fragmentChange">fragmentChange</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachFragmentChange(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/init">init</a> event of this <code>sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                             * @param {any} oListener <p>Context object on which the given function had to be called</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            detachInit(fnFunction: Function, oListener?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
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
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="beforeValueChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/beforeValueChange">beforeValueChange</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireBeforeValueChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="configChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/configChange">configChange</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireConfigChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="designtimeMetadataChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/designtimeMetadataChange">designtimeMetadataChange</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireDesigntimeMetadataChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="fragmentChange" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/fragmentChange">fragmentChange</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireFragmentChange(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
                            /**
                             * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="init" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#events/init">init</a> to attached listeners.</p>
                             * @param {any} mParameters <p>Parameters to pass along with the event</p>
                             * @returns sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                             */
                            protected fireInit(mParameters?: any): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
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
                             * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getValue">value</a>.</p>
                             * @returns any <p>Value of property <code>value</code></p>
                             */
                            getValue(): any;
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
                            setRenderLabel(bRenderLabel?: boolean): sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor;
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
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor#methods/getValue">value</a>.</p>
                                 * @returns any <p>Value of property <code>value</code></p>
                                 */
                                getValue(): any;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.arrayEditor.ArrayEditor#methods/getValue">value</a>.</p>
                                 * @returns any <p>Value of property <code>value</code></p>
                                 */
                                getValue(): any;
                                /**
                                 * <p>Sets the editor value. If no value is provided, the default value provided in the config will be used instead. This method triggers the ready check, therefore it should also be called when overridden in complex editors.</p>
                                 * @param {any} vValue <p>Editor value that was already processed by a custom setValue implementation</p>
                                 * @param {boolean} bSuppressValidation <p>Whether to set the value regardless of the validation result, false by default</p>
                                 */
                                setValue(vValue: any, bSuppressValidation: boolean): void;
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
                        namespace dateEditor {
                            /**
                             * <p>Constructor for a new <code>DateEditor</code>. This allows to set date values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.DatePicker">sap.m.DatePicker</a>.</p>
                             */
                            export class DateEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                        namespace dateTimeEditor {
                            /**
                             * <p>Constructor for a new <code>DateTimeEditor</code>. This allows to set datetime values for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.DateTimePicker">sap.m.DateTimePicker</a>.</p>
                             */
                            export class DateTimeEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.dateEditor.DateEditor {
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
                             * <p>Constructor for a new <code>EnumStringEditor</code>. This allows to select from predefined string values or to provide binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowCustomValues</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>Whether custom values can be set instead of selecting items</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> </table></p>
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
                        namespace groupEditor {
                            /**
                             * <p>Constructor for a new <code>GroupEditor</code>. This allows to set a group title or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Title">sap.m.Title</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class GroupEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a <code>IconEditor</code>. This allows to set icon URIs or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a> with a <a target="_self" class="jsdoclink" href="api/sap.m.SelectDialog">sap.m.SelectDialog</a> value help. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string containing an icon URI or as a binding string to the provided callback function when the user edits the input or selects an item in the dialog.</p>
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
                        namespace integerEditor {
                            /**
                             * <p>Constructor for a new <code>IntegerEditor</code>. This allows you to set integer values or binding paths for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a>, which prevents non-integer user input unless it is a valid binding path.</p>
                             */
                            export class IntegerEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.numberEditor.NumberEditor {
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
                        namespace listEditor {
                            /**
                             * <p>Constructor for a new <code>ListEditor</code>. This editor allows to add items to and remove items from string arrays. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.MultiInput">sap.m.MultiInput</a>.</p>
                             */
                            export class ListEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>MapEditor</code> for editing key-value pairs with primitive values. To get notified about changes made with the editor, you can attach a handler to the <code>valueChange</code> event.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowKeyChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the key attribute of map entries</td> </tr> <tr> <td><code>allowTypeChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the type of map entries</td> </tr> <tr> <td><code>allowAddAndRemove</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow adding and removing map entries</td> </tr> <tr> <td><code>allowedTypes</code></td> <td><code>string[]</code></td> <td><code>["string"]</code></td> <td>List of editor types which are supported in the map</td> </tr> <tr> <td><code>includeInvalidEntries</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to show entries with invalid types if the <code>StringEditor</code> cannot be used as a fallback</td> </tr> <tr> <td><code>allowSorting</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow changing the order of items.</td> </tr> </table></p>
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
                        namespace selectEditor {
                            /**
                             * <p>Constructor for a new <code>SelectEditor</code>. This allows to select from predefined string values or to provide binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.ComboBox">sap.m.ComboBox</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string representing a valid option value or as a binding string to the provided callback function when the user selects a value or edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowCustomValues</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>Whether custom values can be set instead of selecting items</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> </table></p>
                             */
                            export class SelectEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>StringEditor</code>. This allows to set string values or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.Input">sap.m.Input</a>. To get notified about changes made with the editor, you can use the <code>attachValueChange</code> method, which passes the current property state as a string or binding string to the provided callback function when the user edits the input.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>enabled</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether the underlying control should be enabled</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>placeholder</code></td> <td><code>string</code></td> <td></td> <td>Placeholder for the input field</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
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
            namespace designtime {
                namespace baseEditor {
                    namespace propertyEditor {
                        /**
                         */
                        namespace textAreaEditor {
                            /**
                             * <p>Constructor for a new <code>TextAreaEditor</code>. This allows to set a code editor or binding strings for a specified property of a JSON object. The editor is rendered as a <a target="_self" class="jsdoclink" href="api/sap.m.TextArea">sap.m.TextArea</a>.</p><h3>Configuration</h3><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>type</code></td> <td><code>string</code></td> <td><code>json</code></td> <td>The type of the code in the editor used for syntax highlighting</td> </tr> <tr> <td><code>allowBindings</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether binding strings can be set instead of selecting items</td> </tr> <tr> <td><code>maxLength</code></td> <td><code>number</code></td> <td></td> <td>Maximum number of characters</td> </tr> </table></p>
                             */
                            export class TextAreaEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.BasePropertyEditor {
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
                             * <p>Constructor for a new <code>DestinationsEditor</code>.</p><h3>Configuration</h3><p>Configuration is inherited from <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor">sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor</a></p><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowedValues</code></td> <td><code>string[]</code></td> <td><code>[]</code></td> <td>Allowed destination values</td> </tr> </table></p>
                             */
                            export class DestinationsEditor extends sap.ui.integration.designtime.cardEditor.propertyEditor.complexMapEditor.ComplexMapEditor {
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
                             * <p>Constructor for a new <code>ParametersEditor</code> for editing key-value pairs with primitive values, labels and persisted type information.</p><h3>Configuration</h3><p>Configuration is inherited from <a target="_self" class="jsdoclink" href="api/sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor">sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor</a></p><p><table style="width:100%;"> <tr style="text-align:left"> <th>Option</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> <tr> <td><code>allowLabelChange</code></td> <td><code>boolean</code></td> <td><code>true</code></td> <td>Whether to allow editing the label of parameters</td> </tr> </table></p>
                             */
                            export class ParametersEditor extends sap.ui.integration.designtime.baseEditor.propertyEditor.mapEditor.MapEditor {
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
                /**
                 */
                namespace editor {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace integration {
            namespace designtime {
                namespace editor {
                    namespace fields {
                        /**
                         */
                        namespace viz {
                            /**
                             */
                            export class ColorSelect extends sap.ui.core.Control {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowCustomColors" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getAllowCustomColors">allowCustomColors</a>.</p><p>Default value is <code>false</code>.</p>
                                 * @returns boolean <p>Value of property <code>allowCustomColors</code></p>
                                 */
                                getAllowCustomColors(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getBackground" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getBackground">background</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>background</code></p>
                                 */
                                getBackground(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getColorEnum" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getColorEnum">colorEnum</a>.</p><p>Default value is <code>"sap.m.AvatarColor"</code>.</p>
                                 * @returns string <p>Value of property <code>colorEnum</code></p>
                                 */
                                getColorEnum(): string;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getColorValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getColorValue">colorValue</a>.</p><p>Default value is <code>empty string</code>.</p>
                                 * @returns string <p>Value of property <code>colorValue</code></p>
                                 */
                                getColorValue(): string;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getEditable">editable</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>editable</code></p>
                                 */
                                getEditable(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEnumValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getEnumValue">enumValue</a>.</p><p>Default value is <code>empty string</code>.</p>
                                 * @returns string <p>Value of property <code>enumValue</code></p>
                                 */
                                getEnumValue(): string;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowCustomColors" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getAllowCustomColors">allowCustomColors</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                                 * @param {boolean} bAllowCustomColors <p>New value for property <code>allowCustomColors</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setAllowCustomColors(bAllowCustomColors?: boolean): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getBackground" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getBackground">background</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bBackground <p>New value for property <code>background</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setBackground(bBackground?: boolean): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getColorEnum" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getColorEnum">colorEnum</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"sap.m.AvatarColor"</code>.</p>
                                 * @param {string} sColorEnum <p>New value for property <code>colorEnum</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setColorEnum(sColorEnum?: string): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getColorValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getColorValue">colorValue</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                                 * @param {string} sColorValue <p>New value for property <code>colorValue</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setColorValue(sColorValue?: string): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getEditable">editable</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setEditable(bEditable?: boolean): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEnumValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ColorSelect#methods/getEnumValue">enumValue</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                                 * @param {string} sEnumValue <p>New value for property <code>enumValue</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ColorSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setEnumValue(sEnumValue?: string): sap.ui.integration.designtime.editor.fields.viz.ColorSelect;
                            }
                            /**
                             */
                            export class IconSelect extends sap.ui.core.Control {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowFile" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getAllowFile">allowFile</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>allowFile</code></p>
                                 */
                                getAllowFile(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowNone" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getAllowNone">allowNone</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>allowNone</code></p>
                                 */
                                getAllowNone(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getEditable">editable</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>editable</code></p>
                                 */
                                getEditable(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getValue">value</a>.</p><p>Default value is <code>"sap-icon://accept"</code>.</p>
                                 * @returns string <p>Value of property <code>value</code></p>
                                 */
                                getValue(): string;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowFile" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getAllowFile">allowFile</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bAllowFile <p>New value for property <code>allowFile</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.IconSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setAllowFile(bAllowFile?: boolean): sap.ui.integration.designtime.editor.fields.viz.IconSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getAllowNone" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getAllowNone">allowNone</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bAllowNone <p>New value for property <code>allowNone</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.IconSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setAllowNone(bAllowNone?: boolean): sap.ui.integration.designtime.editor.fields.viz.IconSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getEditable">editable</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.IconSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setEditable(bEditable?: boolean): sap.ui.integration.designtime.editor.fields.viz.IconSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.editor.fields.viz.IconSelect#methods/getValue">value</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"sap-icon://accept"</code>.</p>
                                 * @param {string} sValue <p>New value for property <code>value</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.IconSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setValue(sValue?: string): sap.ui.integration.designtime.editor.fields.viz.IconSelect;
                            }
                            /**
                             */
                            export class ShapeSelect extends sap.ui.core.Control {
                                /**
                                 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                                 */
                                constructor();
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.ShapeSelect#methods/getEditable">editable</a>.</p><p>Default value is <code>true</code>.</p>
                                 * @returns boolean <p>Value of property <code>editable</code></p>
                                 */
                                getEditable(): boolean;
                                /**
                                 * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ShapeSelect#methods/getValue">value</a>.</p><p>Default value is <code>"Circle"</code>.</p>
                                 * @returns string <p>Value of property <code>value</code></p>
                                 */
                                getValue(): string;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getEditable" href="api/sap.ui.integration.designtime.editor.fields.viz.ShapeSelect#methods/getEditable">editable</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                                 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ShapeSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setEditable(bEditable?: boolean): sap.ui.integration.designtime.editor.fields.viz.ShapeSelect;
                                /**
                                 * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getValue" href="api/sap.ui.integration.designtime.editor.fields.viz.ShapeSelect#methods/getValue">value</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Circle"</code>.</p>
                                 * @param {string} sValue <p>New value for property <code>value</code></p>
                                 * @returns sap.ui.integration.designtime.editor.fields.viz.ShapeSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
                                 */
                                setValue(sValue?: string): sap.ui.integration.designtime.editor.fields.viz.ShapeSelect;
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
                namespace propertyEditors {
                    /**
                     */
                    export class BaseField extends sap.ui.core.Control {
                        /**
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
            namespace widgets {
                /**
                 * <p>A control that represents a container with a header and content.</p><h3>Overview</h3><p> Cards are small user interface elements which provide the most important information from an app, related to a specific role or task. The information is represented in a compact manner, allowing for actions to be executed. Cards can be described as small representations of an app which can be integrated in different systems.</p><p>The integration card is defined in a declarative way, using a manifest.json to be: <ul> <li>Easily integrated into apps</li> <li>Easily reused across apps</li> <li>Understandable by other technologies</li> <li>Self-contained (has a built-in functionality and doesn't need external configuration)</li> <li>Dynamic parameter handling</li> <li>Clear separation of the roles of the card and app developers</li> </ul></p><p>The role of the card developer is to describe the card in a manifest.json file and define: <ul> <li>Header</li> <li>Content</li> <li>Data source</li> <li>Possible actions</li> </ul></p><p>The role of the app developer is to integrate the card into the app and define: <ul> <li>The dimensions of the card inside a layout of choice, using the <code>width</code> and <code>height</code> properties</li> <li>The behavior for the actions described in the manifest.json file, using the action event</li> </ul></p><p><strong>You can learn more about integration cards in the <a href="test-resources/sap/ui/integration/demokit/cardExplorer/index.html">Card Explorer</a></strong></p><p><i>When to use</i> <ul> <li>When you want to reuse the card across apps.</li> <li>When you need easy integration and configuration.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you need more header and content flexibility.</li> <li>When you have to achieve simple card visualization. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">sap.f.Card</a>.</li> <li>When you have to use an application model. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">sap.f.Card</a>.</li> <li>When you need complex behavior. For such cases, use: <a target="_self" class="jsdoclink" href="api/sap.f.Card">sap.f.Card</a>.</li> </ul></p>
                 */
                export class Card extends sap.f.CardBase {
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
                     * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-target="action" href="api/sap.ui.integration.widgets.Card#events/action">action</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
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
                     * <p>Gets values of manifest parameters combined with the parameters from <code>parameters</code> property.</p><p><b>Notes</b></p><p>- Use this method when the manifest is ready. Check <code>manifestReady</code> event.</p><p>- Use when developing a Component card.</p>
                     * @returns any <p>Object containing parameters in format <code>{parameterKey: parameterValue}</code>.</p>
                     */
                    getCombinedParameters(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getDataMode" href="api/sap.ui.integration.widgets.Card#methods/getDataMode">dataMode</a>.</p><p>Defines the state of the <code>Card</code>. When set to <code>Inactive</code>, the <code>Card</code> doesn't make requests.</p><p>Default value is <code>Active</code>.</p>
                     * @returns sap.ui.integration.CardDataMode <p>Value of property <code>dataMode</code></p>
                     */
                    getDataMode(): sap.ui.integration.CardDataMode;
                    /**
                     * <p>Returns the DOM Element that should get the focus.</p>
                     * @returns HTMLElement <p>Returns the DOM Element that should get the focus</p>
                     */
                    protected getFocusDomRef(): HTMLElement;
                    /**
                     * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-target="getHost" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>, or <code>null</code>.</p>
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
                     * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-target="getManifestChanges" href="api/sap.ui.integration.widgets.Card#methods/getManifestChanges">manifestChanges</a>.</p><p>Defines a list of configuration settings, which will be merged into the original manifest.</p><p>This can be a list of flexibility changes generated during designtime.</p><p>Each level of changes is an item in the list. The change has property "content" which contains the configuration, which will be merged on top of the original <code>sap.card</code> section.</p><p>Example: <pre>
                    [
                        {"content": {"header": {"title": "My title"}}},
                        {"content": {"header": {"title": "My new title"}}}
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
                     * <p>Gets translated text from the i18n properties files configured for this card.</p><p>For more details see <a target="_self" class="jsdoclink" href="api/sap.base.i18n.ResourceBundle#methods/getText">sap.base.i18n.ResourceBundle#getText</a>.</p>
                     * @param {string} sKey <p>Key to retrieve the text for</p>
                     * @param {string[]} aArgs <p>List of parameter values which should replace the placeholders "{<i>n</i>}" (<i>n</i> is the index) in the found locale-specific string value. Note that the replacement is done whenever <code>aArgs</code> is given, no matter whether the text contains placeholders or not and no matter whether <code>aArgs</code> contains a value for <i>n</i> or not.</p>
                     * @param {boolean} bIgnoreKeyFallback <p>If set, <code>undefined</code> is returned instead of the key string, when the key is not found in any bundle or fallback bundle.</p>
                     * @returns string <p>The value belonging to the key, if found; otherwise the key itself or <code>undefined</code> depending on <code>bIgnoreKeyFallback</code>.</p>
                     */
                    getTranslatedText(sKey: string, aArgs?: string[], bIgnoreKeyFallback?: boolean): string;
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
                     * <p>Performs an HTTP request using the given configuration.</p>
                     * @param {any} oConfiguration <p>The configuration of the request.</p>
                     * @returns Promise<any> <p>Resolves when the request is successful, rejects otherwise.</p>
                     */
                    request(oConfiguration: any): Promise<any>;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getBaseUrl" href="api/sap.ui.integration.widgets.Card#methods/getBaseUrl">baseUrl</a>.</p><p>Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead of a URL.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.URI} sBaseUrl <p>New value for property <code>baseUrl</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBaseUrl(sBaseUrl?: sap.ui.core.URI): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for the <code>dataMode</code> property.</p>
                     * @param {sap.ui.integration.CardDataMode} sMode <p>The mode to set to the Card.</p>
                     * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setDataMode(sMode: sap.ui.integration.CardDataMode): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-target="getHost" href="api/sap.ui.integration.widgets.Card#methods/getHost">host</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} oHost <p>ID of an element which becomes the new target of this host association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHost(oHost: sap.ui.core.ID | sap.ui.core.Control): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getManifest" href="api/sap.ui.integration.widgets.Card#methods/getManifest">manifest</a>.</p><p>The URL of the manifest or an object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {any} oManifest <p>New value for property <code>manifest</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManifest(oManifest?: any): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-target="getManifestChanges" href="api/sap.ui.integration.widgets.Card#methods/getManifestChanges">manifestChanges</a>.</p><p>Defines a list of configuration settings, which will be merged into the original manifest.</p><p>This can be a list of flexibility changes generated during designtime.</p><p>Each level of changes is an item in the list. The change has property "content" which contains the configuration, which will be merged on top of the original <code>sap.card</code> section.</p><p>Example: <pre>
                    [
                        {"content": {"header": {"title": "My title"}}},
                        {"content": {"header": {"title": "My new title"}}}
                    ]
                    </pre></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {object[]} sManifestChanges <p>New value for property <code>manifestChanges</code></p>
                     * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setManifestChanges(sManifestChanges: object[]): sap.ui.integration.widgets.Card;
                    /**
                     * <p>Displays a message strip on top of the content with the given text.</p><p><b>Note</b> Currently only available for an Adaptive Card.</p>
                     * @param {string} sMessage <p>The message.</p>
                     * @param {sap.m.MessageType} sType <p>Type of the message.</p>
                     */
                    showMessage(sMessage: string, sType: sap.ui.core.MessageType): void;
                    /**
                     * <p>Triggers an action inside the card.</p><p>Use this method if you need to trigger an action programmatically from inside an <code>Extension</code> or from a Component card.</p><p>For other use cases use the manifest to define the actions. See <a target="_blank" rel="noopener" href="https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions">https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions</a>
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
                }
                /**
                 * <p><p>Facade of the <a target="_self" class="jsdoclink" href="api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a> control.</p></p>
                 */
                export interface CardFacade {
                }
            }
        }
    }
}
