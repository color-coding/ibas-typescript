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
         * <p><p>Namespace for UI5 Web Components Retrofit libraries</p></p>
         */
        namespace webc {
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace webc {
            /**
             * <p><p>UI5 library: sap.ui.webc.common</p></p>
             */
            namespace common {
                /**
                 * <p>Base Class for Web Components. Web Components are agnostic UI elements which can be integrated into the UI5 programming model by using this wrapper control. This wrapper control takes care to propagate the properties, the aggregations and the events. It also ensures to render the control and put the aggregated controls in the dedicated slots of the Web Component.</p>
                 */
                export class WebComponent extends sap.ui.core.Control {
                    /**
                     * <p>Constructs and initializes a Web Component Wrapper with the given <code>sId</code> and settings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     */
                    constructor();
                }
                /**
                 */
                export class WebComponentMetadata extends sap.ui.core.ElementMetadata {
                    /**
                     * <p>Creates a new metadata object for a WebComponent Wrapper subclass.</p>
                     * @param {string} sClassName <p>fully qualified name of the class that is described by this metadata object</p>
                     * @param {any} oClassInfo <p>static info to construct the metadata from</p>
                     */
                    constructor(sClassName: string, oClassInfo: any);
                    /**
                     * <p>Returns the list of public getters, proxied by the Component Wrapper to the component itself</p>
                     * @returns any[] 
                     */
                    getGetters(): any[];
                    /**
                     * <p>Returns the list of public methods, proxied by the Component Wrapper to the component itself</p>
                     * @returns any[] 
                     */
                    getMethods(): any[];
                    /**
                     * <p>Returns the tag, used to render the Component Wrapper</p>
                     * @returns string 
                     */
                    getTag(): string;
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
