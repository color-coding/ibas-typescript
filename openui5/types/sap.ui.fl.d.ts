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
         * <p><p>This is the library for SAPUI5 flexibility. It includes the handling of changes made on applications, such as descriptor changes, app variants, UI changes, control variants (a.k.a. views), and personalization, as well as APIs for consumers. In addition, it provides the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a> control, which enables applications to use control variants (views).</p></p>
         */
        namespace fl {
            /**
             * <p><p>Object containing information about a component if no instance is available.</p></p>
             */
            export interface ComponentSelector {
            }
            /**
             * <p><p>Object containing information about a control if no instance is available.</p></p>
             */
            export interface ElementSelector {
            }
            /**
             * <p><p>Object containing information about a version.</p></p>
             */
            export interface Version {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p><p>The <code>sap.ui.fl.apply</code> namespace contains all code to apply flexibility changes on application startup.</p></p>
             */
            namespace apply {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                /**
                 */
                namespace _internal {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace changes {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        /**
                         */
                        namespace descriptor {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             */
                            namespace app {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_addAnnotationsToOData</code>. Adds new annotations to an existing OData data source in the manifest.json under path sap.app.dataSources.</p><p>Available only for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddAnnotationsToOData {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_addNewDataSource</code>. Adds a new data source to the manifest.json file under the path sap.app.dataSources.</p><p>Available only for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddNewDataSource {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_setInbounds</code>. Overwrites all existing inbounds with new inbounds <code>sap.app/crossNavigation/inbounds</code> to the app.</p><p>Available for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddNewInbound {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_addNewOutbound</code>. Adds a new outbound <code>sap.app/crossNavigation/outbounds</code> to the app.</p><p>Available for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddNewOutbound {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_addTechnicalAttributes</code>. Adds tags to sap.app/tags/technicalAttributes.</p><p>Available only for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddTechnicalAttributes {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_changeDataSource</code>. Changes a property of a specific <code>sap.app/dataSource</code> node in the manifest. Only supports <code>operation == "UPDATE"</code> and <code>operation == "UPSERT"</code>.</p><p>Only available during build time see <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace ChangeDataSource {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_changeInbound</code>. Sets the title of the app by changing the manifest value <code>sap.app/crossNavigation/inbounds</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace ChangeInbound {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_changeModel</code>. Changes the settings object of the model by changing the manifest value <code>sap.ui5/models/modelId</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace ChangeModel {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_changeOutbound</code>. Changes the outbound object of the app by changing the manifest value <code>sap.app/crossNavigation/outbounds</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace ChangeOutbound {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_removeAllInboundsExceptOne</code>. Removes all inbounds except one <code>sap.app/crossNavigation/inbounds</code>.</p><p>Available for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace RemoveAllInboundsExceptOne {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_setAch</code>. Sets and overwrites string for <code>sap.app/ach</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetAch {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_setDescription</code>. Sets the description of the app by changing the manifest value <code>sap.app/description</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace SetDescription {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace app {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_setTitle</code>. Sets the title of the app by changing the manifest value <code>sap.app/title</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace SetTitle {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             */
                            namespace fiori {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace fiori {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_fiori_setAbstract</code>. Sets and overwrites boolean flag (only to <code>false</code>) for <code>sap.fiori/abstract</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetAbstract {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace fiori {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_fiori_cloudDevAdaptationStatus</code>. Sets and overwrites string for <code>sap.fiori/cloudDevAdaptationStatus</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetCloudDevAdaptationStatus {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace fiori {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_fiori_setRegistrationIds</code>. Sets and overwrites new array for <code>sap.fiori/registrationIds</code>. Creates new <code>sap.fiori</code> node if necesssary.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetRegistrationIds {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             */
                            namespace ovp {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ovp {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ovp_addNewCard</code>. Adds a new card by changing the manifest value <code>sap.ovp/cards</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace AddNewCard {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ovp {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_app_changeCard</code>. Sets key user card changes by changing the manifest value <code>sap.ovp/cards</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace ChangeCard {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ovp {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ovp_removeCard</code>. Deletes the card by changing the manifest value <code>sap.ovp/cards</code>.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace DeleteCard {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace platform {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_platform_cf_setUI5VersionNumber</code>. Upserts string value at <code>sap.platform.cf/ui5VersionNumber</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetUI5VersionNumber {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             * <p><p>Loads and registers all descriptor change mergers for client-side merging.</p></p>
                             */
                            namespace Registration {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             * <p><p>Loads and registers all change handlers used during the build. Includes all change handlers used during runtime.</p></p>
                             */
                            namespace RegistrationBuild {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             */
                            namespace ui5 {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_addComponentUsages</code>. Adds component usages under <code>sap.ui5/componentUsages</code> node and creates parent node if not yet existing. Throws exception if to be added component usage already exists.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddComponentUsages {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_addLibraries</code>. Loops over one change which might contain several libraries. If one library already exists, merge it, else add new library to manifest.</p><p>Available for both runtime and build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.Registration">sap.ui.fl.apply._internal.changes.descriptor.Registration</a>.</p></p>
                                 */
                                namespace AddLibrary {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_addNewModel</code>. Adds a new model to the manifest.json under path sap.ui5.models. It can also make changes to the path sap.app.dataSources. It supports different types of models (for example: ResourceModel and OData).</p><p>Available only for build <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddNewModel {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_addNewModelEnhanceWith</code>. Adds a <code>settings/enhanceWith</code> node of an existing model with a path to an i18n properties file relative to the location of the manifest. Only works for referenced models of type <code>sap.ui.model.resource.ResourceModel</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace AddNewModelEnhanceWith {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_setFlexExtensionPointEnabled</code>. Sets and overwrites boolean flag for <code>sap.ui5/flexExtensionPointEnabled</code>.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetFlexExtensionPointEnabled {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            namespace ui5 {
                                /**
                                 * <p><p>Descriptor change merger for change type <code>appdescr_ui5_setMinUI5Version</code>. Sets minUI5Version to manifest node <code>sap.ui5/dependencies/minUI5Version</code>. Only updates minUI5Version if the new version is higher than the old version.</p><p>Only available during build time <a target="_self" href="api/sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild">sap.ui.fl.apply._internal.changes.descriptor.RegistrationBuild</a>.</p></p>
                                 */
                                namespace SetMinUI5Version {
                                }
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        /**
                         * <p><p>Util class for Applier/ChangeReverter.</p></p>
                         */
                        namespace Utils {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Base Connector for requesting data from session or local storage</p></p>
                         */
                        namespace ObjectStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace controlVariants {
                        /**
                         * <p><p>URL handler utility for <code>sap.ui.fl variants</code> (see <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a>)</p></p>
                         */
                        namespace URLHandler {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace flexObjects {
                        /**
                         * <p>Flexibility Annotation Change Class.</p>
                         */
                        export class AnnotationChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Flexibility AnnotationChange Class. Changes annotations on underlying V2 and V4 models.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>Flexibility AppDescriptor Change Class.</p>
                         */
                        export class AppDescriptorChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Flexibility AppDescriptorChange Class. Changes a specified part of the manifest.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>CompVariant instance</p>
                         */
                        export class CompVariant extends sap.ui.fl.apply._internal.flexObjects.Variant {
                            /**
                             * <p>Flexibility CompVariant class. Stores variant content and related information.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             * @param {any} mPropertyBag <p>Initial object properties</p>
                             */
                            constructor(mPropertyBag: any);
                        }
                        /**
                         * <p>ControllerExtensionChange instance</p>
                         */
                        export class ControllerExtensionChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Flexibility ControllerExtensionChange class.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             * @param {any} mPropertyBag <p>Initial object properties</p>
                             */
                            constructor(mPropertyBag: any);
                        }
                        /**
                         * <p>Base class for any flex object</p>
                         */
                        export class FlexObject extends sap.ui.base.ManagedObject {
                            /**
                             * <p>Base class for any flex object.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        namespace FlexObject {
                            /**
                             */
                            export interface FlexObjectMetadata {
                            }
                            /**
                             */
                            export interface SupportInformation {
                            }
                        }
                        /**
                         * <p>FlVariant instance</p>
                         */
                        export class FlVariant extends sap.ui.fl.apply._internal.flexObjects.Variant {
                            /**
                             * <p>Flexibility variant class. Stores variant content, changes and related information.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             * @param {any} mPropertyBag <p>Initial object properties</p>
                             */
                            constructor(mPropertyBag: any);
                        }
                        /**
                         * <p>Flexibility class UIChange</p>
                         */
                        export class UIChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Base class for all UI Changes</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         */
                        export class UpdatableChange extends sap.ui.fl.apply._internal.flexObjects.UIChange {
                            /**
                             * <p>Flexibility change class. Stores change content and related information. This class also be updated as well as reverted.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>Base class for all variants</p>
                         */
                        export class Variant extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Base class for all variants.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>Flexibility VariantChange Change Class.</p>
                         */
                        export class VariantChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Flexibility VariantChange Class</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             */
                            constructor();
                        }
                        /**
                         * <p>Flexibility VariantManagementChange Change Class.</p>
                         */
                        export class VariantManagementChange extends sap.ui.fl.apply._internal.flexObjects.FlexObject {
                            /**
                             * <p>Flexibility VariantManagementChange Class</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexObjects {
                        /**
                         * <p><p>Helper class to create any flex object.</p></p>
                         */
                        namespace FlexObjectFactory {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace flexState {
                        /**
                         * <p>Base class for data selectors</p>
                         */
                        export class DataSelector extends sap.ui.base.ManagedObject {
                            /**
                             * <p>Base class for data selectors. The ID of the data selector should hint on the return type, i.e. plural for arrays and otherwise singular.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace changes {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace changes {
                            /**
                             * <p><p>Includes functionality needed for all change dependency handling</p></p>
                             */
                            namespace DependencyHandler {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace changes {
                            /**
                             * <p><p>Handler class to manipulate extension point changes. Extension point changes are extended by the extension point information that is required when the flex change is applied.</p></p>
                             */
                            namespace ExtensionPointState {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace changes {
                            /**
                             * <p><p>UI Changes State Stores the dependency maps between UI changes.</p></p>
                             */
                            namespace UIChangesState {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace compVariants {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace compVariants {
                            /**
                             * <p><p>Handler class provide data of smart control variant changes and its map.</p></p>
                             */
                            namespace CompVariantManagementState {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace controlVariants {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace controlVariants {
                            /**
                             * <p><p>Handler class to manipulate control variant changes in a variants map. See also <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a>.</p></p>
                             */
                            namespace VariantManagementState {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace controlVariants {
                            /**
                             * <p><p>Provides functionality for managing variants in the "apply" context. For example: switching variants. See also <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a>.</p></p>
                             */
                            namespace VariantManagerApply {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace FlexObjectState {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         * <p><p>Flex state class to persist maps and raw state (cache) for a given component reference. The persistence happens inside an object mapped to the component reference, with the following properties:</p><p>{ storageResponse: { changes: {...}, // see Loader.js }, runtimePersistence: { flexObjects: [...], runtimeOnlyData: { liveDependencyMap: {...}, flexObjects: [...], // e.g. standard variants, so they survive cache invalidation lazyVariantsLoaded: [...] // VM references / persistency keys for which all variants were loaded (lazy loading) } }, maxLayer: <string>, emptyState: <boolean>, skipLoadBundle: <boolean>, componentId: "<componentId>", componentData: {...} }</p></p>
                         */
                        namespace FlexState {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         * <p><p>Collection of functions to initialize the FlexState maps</p></p>
                         */
                        namespace InitialPrepareFunctions {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         * <p><p>Class for loading Flex Data from the backend via the Connectors.</p></p>
                         */
                        namespace Loader {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace UI2Personalization {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        namespace UI2Personalization {
                            /**
                             * <p><p>Handler class to UI2 Personalization</p></p>
                             */
                            namespace UI2PersonalizationState {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace preprocessors {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace variants {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                /**
                 * <p><p>The <code>sap.ui.fl.apply.api</code> namespace contains public APIs that can be used during app startup, e.g. to wait for changes to be applied or to access the current variant and switch variants.</p></p>
                 */
                namespace api {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to register and retrieve annotation change handlers.</p></p>
                     */
                    namespace AnnotationChangeHandlerAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API for applications to work with control variants. See also <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a>.</p></p>
                     */
                    namespace ControlVariantApplyAPI {
                        /**
                         * <p>Activates the passed variant applicable to the passed control/component. The corresponding variant management control must be available when this function is called. If the variant is not found and the backend supports lazy loading, a backend request is made to fetch the variant. If the flag standardVariant is set to true, the standard variant is activated and the variantReference is ignored: in this scenario, the passed element must be the variant management control.</p>
                         * @param {any} mPropertyBag <p>Object with parameters as properties</p>
                         * @returns Promise<any> <p>Resolves after the variant is activated or rejects if an error occurs</p>
                         */
                        function activateVariant(mPropertyBag: any): Promise<any>;
                        /**
                         * <p>Saves a function that will be called after a variant has been applied with the new variant as parameter. Even if the same variant is selected again the callback is called. The function also performs a sanity check after the control has been rendered. If the passed variant control ID does not match the responsible variant management control, the callback will not be saved. Optionally this function is also called after the initial variant is applied without a sanity check.</p>
                         * @param {any} mPropertyBag <p>Object with parameters as properties</p>
                         */
                        function attachVariantApplied(mPropertyBag: any): void;
                        /**
                         * <p>Clears URL technical parameter <code>sap-ui-fl-control-variant-id</code> for control variants. Use this method in case you normally want the variant parameter in the URL, but have a few special navigation patterns where you want to clear it. If you don't want that parameter in general, set the <code>updateVariantInURL</code> parameter on your variant management control to <code>false</code>. SAP Fiori elements use this method. If a variant management control is given as a parameter, only parameters specific to that control are cleared.</p>
                         * @param {any} mPropertyBag <p>Object with parameters as properties</p>
                         */
                        function clearVariantParameterInURL(mPropertyBag: any): void;
                        /**
                         * <p>Removes the saved callback for the given control and variant management control.</p>
                         * @param {any} mPropertyBag <p>Object with parameters as properties</p>
                         */
                        function detachVariantApplied(mPropertyBag: any): void;
                        /**
                         * <p>Returns the current variant reference for a given variant management reference and control.</p>
                         * @param {any} mPropertyBag <p>Object with parameters as properties</p>
                         * @returns string <p>Current variant reference</p>
                         */
                        function getCurrentVariantReference(mPropertyBag: any): string;
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to handle default delegates.</p></p>
                     */
                    namespace DelegateMediatorAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to handle specific information about the extension points into the application.</p></p>
                     */
                    namespace ExtensionPointRegistryAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to get specific information about the <code>sap.ui.fl</code> runtime.</p></p>
                     */
                    namespace FlexRuntimeInfoAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to handle specific functionalities for the <code>sap.ui.comp</code> library.</p></p>
                     */
                    namespace SmartVariantManagementApplyAPI {
                        /**
                         */
                        export interface LoadVariantsResponse {
                        }
                        /**
                         * <p><p>Object containing data for a SmartVariantManagement control.</p></p>
                         */
                        export interface Response {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace api {
                    /**
                     * <p><p>Provides an API to access UI2 personalization.</p></p>
                     */
                    namespace UI2PersonalizationApplyAPI {
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
            namespace changeHandler {
                /**
                 * <p>Default change handler for annotations.</p>
                 */
                var ChangeAnnotation: any;
                /**
                 */
                export class BaseAddViaDelegate {
                    /**
                     * <p>Returns an instance of the addViaDelegate change handler</p>
                     * @param {any} mAddViaDelegateSettings <p>The settings required for the addViaDelegate action</p>
                     * @returns any <p>The addViaDelegate change handler object</p>
                     */
                    static createAddViaDelegateChangeHandler(mAddViaDelegateSettings: any): any;
                    /**
                     * <p>Base Change Handler for AddViaDelegate</p>
                     */
                    constructor();
                }
                /**
                 */
                export class BaseRename {
                    /**
                     * <p>Base Change Handler for Rename</p>
                     */
                    constructor();
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace changeHandler {
                /**
                 * <p><p>Base functionality for all change handlers, which provides some reuse methods</p></p>
                 */
                namespace Base {
                    /**
                     * <p>Instantiates an XML fragment inside a change.</p>
                     * @param {sap.ui.fl.apply._internal.flexObjects.FlexObject} oChange <p>Change object with instructions to be applied on the control</p>
                     * @param {any} mPropertyBag <p>Property bag</p>
                     * @returns HTMLElement[] | sap.ui.core.Element[] <p>Array with the nodes/instances of the controls of the fragment</p>
                     */
                    function instantiateFragment(oChange: sap.ui.fl.apply._internal.flexObjects.FlexObject, mPropertyBag: any): any;
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p><p>Namespace containing interfaces and base classes of connectors to implement a connection to a specific end point capable of storing flexibility entities as well as providing information about its capabilities.</p></p>
             */
            namespace connectors {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p><p>Descriptor Related</p></p>
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
                 * <p><p>Descriptor Related Apis</p></p>
                 */
                namespace api {
                    /**
                     */
                    export enum AnnotationsInsertPositionType {
                        /**
                         */
                        BEGINNING = "BEGINNING",
                        /**
                         */
                        END = "END",
                    }
                    /**
                     */
                    export class DescriptorChange {
                        /**
                         * <p>Descriptor Change</p>
                         * @param {any} mChangeFile <p>change file</p>
                         * @param {sap.ui.fl.descriptorRelated.api.DescriptorInlineChange} oInlineChange <p>inline change object</p>
                         * @param {any} oAppComponent <p>Application component</p>
                         */
                        constructor(mChangeFile: any, oInlineChange: any, oAppComponent: any);
                    }
                    /**
                     */
                    export class DescriptorChangeFactory {
                        /**
                         * <p>Factory for Descriptor Changes</p>
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
        namespace fl {
            namespace descriptorRelated {
                namespace api {
                    /**
                     * <p><p>Factory for Descriptor Inline Changes</p></p>
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
                     * <p><p>Factory for app variants.</p></p>
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
             * <p><p>The <code>sap.ui.fl.initial</code> namespace should contain all code that is necessary to hook into the UI5 core and detect if SAPUI5 flexibility has changes or other flex objects that need processing. If there is nothing to process, any further flex processing is stopped to avoid runtime impact for end users.</p></p>
             */
            namespace initial {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                /**
                 * <p><p>The <code>sap.ui.fl.initial._internal</code> namespace contains internals that are used during app startup, e.g. to load the flex data and resolve or bootstrap the <code>sap.ui.fl.apply</code> for applying changes.</p></p>
                 */
                namespace _internal {
                    /**
                     * <p>Settings class</p>
                     */
                    export class Settings extends sap.ui.base.ManagedObject {
                        /**
                         * <p>Holds all the system settings. Properties are classified as information or write operation. Write operations must have a layer configuration to determine which layers support the feature</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
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
        namespace fl {
            namespace initial {
                namespace _internal {
                    /**
                     * <p><p>The <code>sap.ui.fl.initial._internal.connectors</code> namespace contains modules to load flex entities from different sources. The <code>flexibilityServices</code> parameter in the <code>sap.ui.core.Configuration</code> defines which connectors are in use. The <code>Configuration</code> is not limited to these connectors and can include every connector extending <code>sap.ui.fl.interfaces.BaseLoadConnector</code> and <code>sap.ui.fl.write.connectors.BaseConnector</code>.</p></p>
                     */
                    namespace connectors {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Base connector for requesting flexibility data from a back end.</p></p>
                         */
                        namespace BackendConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting all data from SAPUI5 Flexibility KeyUser service - including personalization.</p></p>
                         */
                        namespace BtpServiceConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from SAPUI5 Flexibility KeyUser service.</p></p>
                         */
                        namespace KeyUserConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from an LRep based back end.</p></p>
                         */
                        namespace LrepConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from a Neo LRep based back end.</p></p>
                         */
                        namespace NeoLrepConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from SAPUI5 Flexibility Personalization service.</p></p>
                         */
                        namespace PersonalizationConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting flexibility data generated as part of the applications build step.</p></p>
                         */
                        namespace StaticFileConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Util class for Connector implementations (apply).</p></p>
                         */
                        namespace Utils {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    namespace preprocessors {
                        /**
                         */
                        namespace ComponentLifecycleHooks {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    /**
                     * <p><p>Abstraction providing an API to handle communication with persistence like back ends, local & session storage or work spaces.</p></p>
                     */
                    namespace Storage {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    /**
                     * <p><p>ConnectorFeaturesMerger class for Connector implementations (initial).</p></p>
                     */
                    namespace StorageFeaturesMerger {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                namespace _internal {
                    /**
                     * <p><p>Util class for Storage implementations (apply); In addition the ObjectPathConnector and ObjectStorageConnector makes use of this class since they are very low level connector implementations without preparing structures of responses.</p></p>
                     */
                    namespace StorageUtils {
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
             * <p><p>The <code>sap.ui.fl.interfaces</code> namespace contains only interface jsdoc descriptions. It does not contain running code.</p></p>
             */
            namespace interfaces {
                /**
                 * <p><p>Base class for connectors.</p></p>
                 */
                export interface BaseLoadConnector {
                }
                /**
                 * <p><p>Interface for SAPUI5 flexibility delegates. Such delegates can be attached to controls to let key users add additional properties from metadata.</p></p><h4>Example:</h4><p><p> <pre>
                &ltmvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:f="sap.ui.layout.form" xmlns:fl="sap.ui.fl" &gt
                    &ltf:Form id="idForm"
                        fl:delegate='{
                            "name":"some/library/DelegateName",
                            "payload":{
                                "modelName":"Books"
                            }
                        }'
                    &gt...&lt/f:Form&gt
                    ...
                &lt/mvc:View&gt
                </pre></p></p>
                 */
                export interface Delegate {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace interfaces {
                /**
                 */
                namespace delegate {
                    /**
                     * <p><p>Object containing the control representations.</p></p>
                     */
                    export interface LayoutControlInfo {
                    }
                    /**
                     * <p><p>Object containing metadata properties and nodes. Deep structure.</p></p>
                     */
                    export interface PropertyInfo {
                    }
                    /**
                     * <p><p>Object containing information about properties represented on the UI. The property may be hidden, but was placed by someone before, so you would like to reveal it instead of recreating it.</p></p>
                     */
                    export interface RepresentedPropertyInfo {
                    }
                    /**
                     * <p><p>Object containing the control representations.</p></p>
                     */
                    export interface SpecificControlInfo {
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
             * <p><p>The <code>sap.ui.fl.interfaces</code> namespace contains only interface jsdoc descriptions. It does not contain running code.</p></p>
             */
            namespace registry {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             */
            namespace support {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                /**
                 */
                namespace _internal {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                namespace _internal {
                    /**
                     * <p><p>Returns an array with all UI Changes for the application. WARNING: No deep clone - Returns original object references to ensure that prototype methods stay intact. Do not mutate.</p></p>
                     */
                    namespace getAllUIChanges {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                namespace _internal {
                    /**
                     * <p><p>Provides an object with the changes for the current application as well as further information. I.e. if the changes were applied and their dependencies. WARNING: No deep clone - Returns original object references to ensure that prototype methods stay intact. Do not mutate.</p></p>
                     */
                    namespace getChangeDependencies {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                namespace _internal {
                    /**
                     * <p><p>Returns an array with several FlexObject infos for the application. WARNING: No deep clone - Returns original object references to ensure that prototype methods stay intact. Do not mutate.</p></p>
                     */
                    namespace getFlexObjectInfos {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                namespace _internal {
                    /**
                     * <p><p>Provides an object with the flex Settings. WARNING: No deep clone - Returns original object references to ensure that prototype methods stay intact. Do not mutate.</p></p>
                     */
                    namespace getFlexSettings {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                /**
                 */
                namespace api {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace support {
                namespace api {
                    /**
                     * <p><p>Provides an API for support tools</p></p>
                     */
                    namespace SupportAPI {
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
             * <p><p>Provides utility functions for the SAPUI5 flexibility library</p></p>
             */
            namespace Utils {
                /**
                 */
                export class FakePromise {
                    /**
                     * <p>Class that behaves like a promise (es6), but is synchronous. Implements <code>then</code> and <code>catch</code> functions. After instantiating can be used similar to standard Promises but synchronously. As soon as one of the callback functions returns a Promise the asynchronous Promise replaces the FakePromise in further processing.</p>
                     * @param {any} vInitialValue <p>value on resolve FakePromise</p>
                     * @param {any} vError <p>value on reject FakePromise</p>
                     * @param {string} sInitialPromiseIdentifier <p>value identifies previous promise in chain. If the identifier is passed to the function and don't match with the FakePromiseIdentifier then native Promise execution is used for further processing</p>
                     */
                    constructor(vInitialValue: any, vError: any, sInitialPromiseIdentifier: string);
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p><p>The <code>sap.ui.fl.variants</code> namespace contains the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a> control and its internals.</p></p>
             */
            namespace variants {
                /**
                 * <p>Can be used to manage variants. You can use this control in most controls that are enabled for <i>key user adaptation</i>.<br> <b>Note: </b>On the user interface, variants are generally referred to as "views".</p>
                 */
                export class VariantManagement extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>VariantManagement</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds a control to the association <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/for">for</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vFor <p>The control to add; if empty, nothing is inserted</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addFor(vFor: sap.ui.core.ID | sap.ui.core.Control): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/cancel">cancel</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when users press the Cancel button inside the Save As dialog.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachCancel(oData: any, fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/initialized">initialized</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when the model and context are set.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachInitialized(oData: any, fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/manage">manage</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when users apply changes to variants in the Manage Views dialog.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachManage(oData: any, fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/save">save</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when the Save View dialog or the Save As dialog is closed with the Save button.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSave(oData: any, fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/select">select</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.fl.variants.VariantManagement</code> itself.</p><p>This event is fired when a new variant is selected.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.fl.variants.VariantManagement</code> itself</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/cancel">cancel</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachCancel(fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/initialized">initialized</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachInitialized(fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/manage">manage</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachManage(fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/save">save</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSave(fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/select">select</a> event of this <code>sap.ui.fl.variants.VariantManagement</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/cancel">cancel</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireCancel(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/initialized">initialized</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireInitialized(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/manage">manage</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireManage(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/save">save</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSave(mParameters?: any): this;
                    /**
                     * <p>Fires event <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): this;
                    /**
                     * <p>Gets the variant key that is currently selected in the VM control. Can be different to the actually selected variant in the state during a variant switch.</p>
                     * @returns string | null <p>Key of the currently selected variant. In case the model is not yet set <code>null</code> will be returned</p>
                     */
                    getCurrentVariantKey(): string | null;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getDisplayTextForExecuteOnSelectionForStandardVariant">displayTextForExecuteOnSelectionForStandardVariant</a>.</p><p>Defines the Apply Automatically text for the standard variant in the Manage Views dialog if the application controls this behavior. <p> <b>Note:</b> The usage of this property is restricted to <code>sap.fe</code> components only.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns string <p>Value of property <code>displayTextForExecuteOnSelectionForStandardVariant</code></p>
                     */
                    getDisplayTextForExecuteOnSelectionForStandardVariant(): string;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getEditable">editable</a>.</p><p>Indicates whether the buttons on My Views are visible.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>editable</code></p>
                     */
                    getEditable(): boolean;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getExecuteOnSelectionForStandardDefault">executeOnSelectionForStandardDefault</a>.</p><p>Determines the behavior for Apply Automatically if the standard variant is marked as the default variant.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>executeOnSelectionForStandardDefault</code></p>
                     */
                    getExecuteOnSelectionForStandardDefault(): boolean;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getFor">for</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getFor(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>Default value is <code>Auto</code>.</p>
                     * @returns sap.ui.core.TitleLevel <p>Value of property <code>headerLevel</code></p>
                     */
                    getHeaderLevel(): sap.ui.core.TitleLevel;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getInErrorState">inErrorState</a>.</p><p>Indicates whether the control is in error state. If set to <code>true</code>, an error message will be displayed when the variant is opened.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>inErrorState</code></p>
                     */
                    getInErrorState(): boolean;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getMaxWidth">maxWidth</a>.</p><p>Sets the maximum width of the control.</p><p>Default value is <code>"100%"</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>maxWidth</code></p>
                     */
                    getMaxWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getModelName">modelName</a>.</p><p>The name of the model containing the data.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns string <p>Value of property <code>modelName</code></p>
                     */
                    getModelName(): string;
                    /**
                     * <p>Determines whether the current variant is modified.</p>
                     * @returns boolean <p>Returns <code>true</code>, if the current variant is modified, otherwise <code>false</code></p>
                     */
                    getModified(): boolean;
                    /**
                     * <p>Registers an invalidation event that is fired when the width of the control is changed. <b>Note:</b> This is required by the <a target="_self" href="api/sap.m.IOverflowToolbarContent">sap.m.IOverflowToolbarContent</a> interface.</p>
                     * @returns any <p>Configuration information for the <a target="_self" href="api/sap.m.IOverflowToolbarContent">sap.m.IOverflowToolbarContent</a> interface</p>
                     */
                    protected getOverflowToolbarConfig(): any;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getResetOnContextChange">resetOnContextChange</a>.</p><p>If set to <code>false</code>, it does not reset the <code>VariantManagement</code> control to the default variant if its binding context is changed. <p> <b>Note:</b> The <code>VariantManagement</code> control itself is not affected by this property. It is only used internally by the SAPUI5 flexibility layer.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>resetOnContextChange</code></p>
                     */
                    getResetOnContextChange(): boolean;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getShowSetAsDefault">showSetAsDefault</a>.</p><p>Indicates whether the functionality of setting a default variant is enabled. The Default column in Manage Views and the Set as Default checkbox in Save View will be disabled if set to <code>false</code>.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>showSetAsDefault</code></p>
                     */
                    getShowSetAsDefault(): boolean;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getTitleStyle">titleStyle</a>.</p><p>Defines the style of the title. For more information, see <a target="_self" href="api/sap.m.Title#methods/setTitleStyle">sap.m.Title#setTitleStyle</a>.</p><p>Default value is <code>Auto</code>.</p>
                     * @returns sap.ui.core.TitleLevel <p>Value of property <code>titleStyle</code></p>
                     */
                    getTitleStyle(): sap.ui.core.TitleLevel;
                    /**
                     * <p>Gets current value of property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getUpdateVariantInURL">updateVariantInURL</a>.</p><p>Indicates whether the current variant is updated based on the passed information in the URL. <p> <b>Note:</b> The <code>VariantManagement</code> control itself is not affected by this property. It is only used internally by the SAPUI5 flexibility layer.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>updateVariantInURL</code></p>
                     */
                    getUpdateVariantInURL(): boolean;
                    /**
                     * <p>Gets all variants.</p>
                     * @returns any[] <p>All variants; if the model is not yet set, an empty array will be returned.</p>
                     */
                    getVariants(): any[];
                    /**
                     * <p>Removes all the controls in the association named <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getFor">for</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllFor(): any;
                    /**
                     * <p>Removes an for from the association named <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getFor">for</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vFor <p>The for to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID | null <p>The removed for or <code>null</code></p>
                     */
                    removeFor(vFor: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
                    /**
                     * <p>Sets the new selected variant.</p>
                     * @param {string} sKey <p>Key of the variant that is selected</p>
                     */
                    setCurrentVariantKey(sKey: string): void;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getDisplayTextForExecuteOnSelectionForStandardVariant">displayTextForExecuteOnSelectionForStandardVariant</a>.</p><p>Defines the Apply Automatically text for the standard variant in the Manage Views dialog if the application controls this behavior. <p> <b>Note:</b> The usage of this property is restricted to <code>sap.fe</code> components only.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {string} sDisplayTextForExecuteOnSelectionForStandardVariant <p>New value for property <code>displayTextForExecuteOnSelectionForStandardVariant</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDisplayTextForExecuteOnSelectionForStandardVariant(sDisplayTextForExecuteOnSelectionForStandardVariant?: string): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getEditable">editable</a>.</p><p>Indicates whether the buttons on My Views are visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEditable(bEditable?: boolean): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getExecuteOnSelectionForStandardDefault">executeOnSelectionForStandardDefault</a>.</p><p>Determines the behavior for Apply Automatically if the standard variant is marked as the default variant.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bExecuteOnSelectionForStandardDefault <p>New value for property <code>executeOnSelectionForStandardDefault</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setExecuteOnSelectionForStandardDefault(bExecuteOnSelectionForStandardDefault?: boolean): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
                     * @param {sap.ui.core.TitleLevel} sHeaderLevel <p>New value for property <code>headerLevel</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHeaderLevel(sHeaderLevel?: sap.ui.core.TitleLevel): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getInErrorState">inErrorState</a>.</p><p>Indicates whether the control is in error state. If set to <code>true</code>, an error message will be displayed when the variant is opened.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bInErrorState <p>New value for property <code>inErrorState</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setInErrorState(bInErrorState?: boolean): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getMaxWidth">maxWidth</a>.</p><p>Sets the maximum width of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
                     * @param {sap.ui.core.CSSSize} sMaxWidth <p>New value for property <code>maxWidth</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMaxWidth(sMaxWidth?: sap.ui.core.CSSSize): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getModelName">modelName</a>.</p><p>The name of the model containing the data.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {string} sModelName <p>New value for property <code>modelName</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setModelName(sModelName?: string): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getResetOnContextChange">resetOnContextChange</a>.</p><p>If set to <code>false</code>, it does not reset the <code>VariantManagement</code> control to the default variant if its binding context is changed. <p> <b>Note:</b> The <code>VariantManagement</code> control itself is not affected by this property. It is only used internally by the SAPUI5 flexibility layer.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bResetOnContextChange <p>New value for property <code>resetOnContextChange</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setResetOnContextChange(bResetOnContextChange?: boolean): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getShowSetAsDefault">showSetAsDefault</a>.</p><p>Indicates whether the functionality of setting a default variant is enabled. The Default column in Manage Views and the Set as Default checkbox in Save View will be disabled if set to <code>false</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bShowSetAsDefault <p>New value for property <code>showSetAsDefault</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowSetAsDefault(bShowSetAsDefault?: boolean): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getTitleStyle">titleStyle</a>.</p><p>Defines the style of the title. For more information, see <a target="_self" href="api/sap.m.Title#methods/setTitleStyle">sap.m.Title#setTitleStyle</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
                     * @param {sap.ui.core.TitleLevel} sTitleStyle <p>New value for property <code>titleStyle</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTitleStyle(sTitleStyle?: sap.ui.core.TitleLevel): this;
                    /**
                     * <p>Sets a new value for property <a target="_self" href="api/sap.ui.fl.variants.VariantManagement#methods/getUpdateVariantInURL">updateVariantInURL</a>.</p><p>Indicates whether the current variant is updated based on the passed information in the URL. <p> <b>Note:</b> The <code>VariantManagement</code> control itself is not affected by this property. It is only used internally by the SAPUI5 flexibility layer.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bUpdateVariantInURL <p>New value for property <code>updateVariantInURL</code></p>
                     * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setUpdateVariantInURL(bUpdateVariantInURL?: boolean): this;
                }
                /**
                 * <p>Variant model implementation for JSON format.</p>
                 */
                export class VariantModel extends sap.ui.model.json.JSONModel {
                    /**
                     * <p>Constructor for a new sap.ui.fl.variants.VariantModel model.</p>
                     * @param {any} oData <p>Either the URL where to load the JSON from or a JS object</p>
                     * @param {any} mPropertyBag <p>Map of properties required for the constructor</p>
                     */
                    constructor(oData: any, mPropertyBag: any);
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace variants {
                /**
                 */
                namespace context {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace variants {
                namespace context {
                    /**
                     * <p><p>Provides a UI component for context sharing.</p></p>
                     */
                    namespace Component {
                        /**
                         * <p><p>Object containing selected contexts.</p></p>
                         */
                        export interface SelectedContexts {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace variants {
                /**
                 * <p><p>Manager for all FlVariant related tasks that are triggered by a user interaction.</p></p>
                 */
                namespace VariantManager {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            /**
             * <p><p>The <code>sap.ui.fl.write</code> namespace contains all code to create, update, and reset flex objects. Additional common functionality needed by personalization dialogs or tools like key user adaptation are part of the namespace.</p></p>
             */
            namespace write {
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                /**
                 */
                namespace _internal {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     */
                    namespace appVariant {
                        /**
                         */
                        export class AppVariant extends sap.ui.base.ManagedObject {
                            /**
                             * <p>App variant.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                             * @param {any} mPropertyBag <p>Parameters</p>
                             */
                            constructor(mPropertyBag: any);
                        }
                        /**
                         */
                        export class AppVariantInlineChange extends sap.ui.base.ManagedObject {
                            /**
                             * <p>App variant inline change.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject</a> can be used.</p>
                             * @param {any} mPropertyBag <p>Parameters of the inline change for the provided change type</p>
                             */
                            constructor(mPropertyBag: any);
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace appVariant {
                        /**
                         * <p><p>Internal factory for app variants</p></p>
                         */
                        namespace AppVariantFactory {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace appVariant {
                        /**
                         * <p><p>Internal factory for app variant inline changes.</p></p>
                         */
                        namespace AppVariantInlineChangeFactory {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     * <p><p>Namespace containing all types of connectors to write flex data. The usage of the connectors is restricted to the <code>sap.ui.fl</code> library.</p></p>
                     */
                    namespace connectors {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Base connector for saving and deleting data flexibility data from an back end.</p></p>
                         */
                        namespace BackendConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for saving and deleting data from SAPUI5 Flexibility KeyUser service - including personalization.</p></p>
                         */
                        namespace BtpServiceConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector that saves the data in an internal object.</p></p>
                         */
                        namespace JsObjectConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for saving and deleting data from SAPUI5 Flexibility KeyUser service.</p></p>
                         */
                        namespace KeyUserConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for saving data to the <code>window.localStorage</code>.</p></p>
                         */
                        namespace LocalStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from an LRep-based back end.</p></p>
                         */
                        namespace LrepConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for requesting data from a Neo LRep-based back end.</p></p>
                         */
                        namespace NeoLrepConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Empty connector since we don't support writing to a file.</p></p>
                         */
                        namespace ObjectPathConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Base Connector for requesting data from session or local storage</p></p>
                         */
                        namespace ObjectStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for communication with SAPUI5 Flexibility Personalization Service</p></p>
                         */
                        namespace PersonalizationConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Connector for saving data to the <code>window.SessionStorage</code>.</p></p>
                         */
                        namespace SessionStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>This connector is used by Flexibility Support Chrome extension. It replaces the default connector and allows to apply changes from the JSON file which has been created by the Flexibility Data Export Tool</p></p>
                         */
                        namespace SupportLocalStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace connectors {
                        /**
                         * <p><p>Util class for Connector implementations (write).</p></p>
                         */
                        namespace Utils {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     */
                    namespace extensionPoint {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     */
                    namespace fieldExtensibility {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace fieldExtensibility {
                        /**
                         * <p><p>Abstraction providing an API to handle an ABAP extension variant. Serves also as base class and dummy implementation.</p></p>
                         */
                        namespace ABAPExtensibilityVariant {
                            /**
                             * <p>Creates a new subclass of class sap.ui.fl.write._internal.fieldExtensibility.ABAPExtensibilityVariant with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.</p><p><code>oClassInfo</code> might contain the same kind of information as described in <a target="_self" href="api/sap.ui.base.Object#methods/sap.ui.base.Object.extend">sap.ui.base.Object.extend</a>.</p>
                             * @param {string} sClassName <p>Name of the class being created</p>
                             * @param {any} oClassInfo <p>Object literal with information about the class</p>
                             * @param {Function} FNMetaImpl <p>Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class</p>
                             * @returns Function <p>Created class / constructor function</p>
                             */
                            function extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;
                            /**
                             * <p>Returns a metadata object for class sap.ui.fl.write._internal.fieldExtensibility.ABAPExtensibilityVariant.</p>
                             * @returns sap.ui.base.Metadata <p>Metadata object describing this class</p>
                             */
                            function getMetadata(): sap.ui.base.Metadata;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace fieldExtensibility {
                        /**
                         * <p><p>Extension variant for ABAP multi tenant environments (via so called Predefined Fields)</p></p>
                         */
                        namespace MultiTenantABAPExtensibilityVariant {
                            /**
                             * <p>Creates a new subclass of class sap.ui.fl.write._internal.fieldExtensibility.MultiTenantABAPExtensibilityVariant with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.</p><p><code>oClassInfo</code> might contain the same kind of information as described in <a target="_self" href="api/sap.ui.fl.write._internal.fieldExtensibility.ABAPExtensibilityVariant#methods/sap.ui.fl.write._internal.fieldExtensibility.ABAPExtensibilityVariant.extend">sap.ui.fl.write._internal.fieldExtensibility.ABAPExtensibilityVariant.extend</a>.</p>
                             * @param {string} sClassName <p>Name of the class being created</p>
                             * @param {any} oClassInfo <p>Object literal with information about the class</p>
                             * @param {Function} FNMetaImpl <p>Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class</p>
                             * @returns Function <p>Created class / constructor function</p>
                             */
                            function extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;
                            /**
                             * <p>Returns a metadata object for class sap.ui.fl.write._internal.fieldExtensibility.MultiTenantABAPExtensibilityVariant.</p>
                             * @returns sap.ui.base.Metadata <p>Metadata object describing this class</p>
                             */
                            function getMetadata(): sap.ui.base.Metadata;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace fieldExtensibility {
                        /**
                         * <p><p>Extension variant for ABAP single tenant environnments (via so called Custom Fields)</p></p>
                         */
                        namespace SingleTenantABAPExtensibilityVariant {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     */
                    namespace flexState {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        namespace changes {
                            /**
                             * <p><p>Central class for the management of UIChanges within the flex states.</p></p>
                             */
                            namespace UIChangeManager {
                                /**
                                 * <p>Adds new UIChanges and returns the IDs of the new UIChanges.</p>
                                 * @param {string} sReference <p>Flex reference of the application</p>
                                 * @param {any} aChanges <p>Array with complete and finalized JSON object representation of the file content of the UIChanges or UIChange instances</p>
                                 * @param {sap.ui.core.Component} oAppComponent <p>Application component instance</p>
                                 * @returns sap.ui.fl.apply._internal.flexObjects.FlexObject[] <p>The newly added UIChanges</p>
                                 */
                                function addDirtyChanges(sReference: string, aChanges: any, oAppComponent: sap.ui.core.Component): any;
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
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace compVariants {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        namespace compVariants {
                            /**
                             * <p><p>CompVariant state class to handle the state of the compVariants and its changes. This class is in charge of updating the maps stored in the <code>sap.ui.fl.apply._internal.flexState.FlexState</code>.</p></p>
                             */
                            namespace CompVariantState {
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
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        /**
                         * <p><p>Central class for operations on the flex states and flex objects.</p></p>
                         */
                        namespace FlexObjectManager {
                            /**
                             * <p>Adds new dirty flex objects.</p>
                             * @param {string} sReference <p>Flex reference of the application</p>
                             * @param {string} sComponentId <p>ID of the component</p>
                             * @param {any} aFlexObjects <p>JSON object representation of flex objects or flex object instances</p>
                             * @returns sap.ui.fl.apply._internal.flexObjects.FlexObject[] <p>The prepared flex objects</p>
                             */
                            function addDirtyFlexObjects(sReference: string, sComponentId: string, aFlexObjects: any): any;
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        namespace UI2Personalization {
                            /**
                             * <p><p>Handler class to UI2 Personalization write functions</p></p>
                             */
                            namespace UI2PersonalizationState {
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
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     * <p><p>Abstraction providing an API to handle communication with persistencies like back ends, local & session storage or work spaces.</p></p>
                     */
                    namespace Storage {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    /**
                     */
                    namespace Versions {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                /**
                 * <p><p>The <code>sap.ui.fl.write.api</code> namespace contains public APIs to work with flex objects.</p></p>
                 */
                namespace api {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for tools to create, update, delete app variants.</p></p>
                     */
                    namespace AppVariantWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Namespace containing interfaces and base classes of connectors to implement a connection to a specific end point capable of storing flexibility entities as well as providing information about its capabilities.</p></p>
                     */
                    namespace connectors {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    namespace connectors {
                        /**
                         * <p><p>Abstract connector class for requesting data from a storage. The inherited objects must implement the <code>storage</code> object.</p></p>
                         */
                        namespace ObjectStorageConnector {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for creating and managing context-based adaptation.</p></p>
                     */
                    namespace ContextBasedAdaptationsAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for creating and managing the component for variant management context sharing.</p></p>
                     */
                    namespace ContextSharingAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for controls to implement personalization.</p></p>
                     */
                    namespace ControlPersonalizationWriteAPI {
                        /**
                         * <p><p>Object containing attributes of a change, along with the control to which this change should be applied.</p></p>
                         */
                        export interface PersonalizationChange {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API that enables tools such as <a target="_self" href="api/sap.ui.rta">sap.ui.rta</a> to manage with control variants. See also <a target="_self" href="api/sap.ui.fl.variants.VariantManager">sap.ui.fl.variants.VariantManager</a>.</p></p>
                     */
                    namespace ControlVariantWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API to determine which features are available for flexibility.</p></p>
                     */
                    namespace FeaturesAPI {
                        /**
                         * <p>Checks if key user rights are available for the current user. Application developers can use this API to decide if the key user adaptation feature should be visible to the current user. This only applies if key user adaptation should be handled standalone without an SAP Fiori launchpad.</p>
                         * @returns any <p>Resolves to a boolean indicating if the key user role is assigned to the user</p>
                         */
                        function isKeyUser(): any;
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Abstraction providing an API to handle <code>FieldExtensibility</code>.</p></p>
                     */
                    namespace FieldExtensibility {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API to reset containers.</p></p>
                     */
                    namespace LocalResetAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for tools to query, provide, save or reset <a target="_self" href="api/sap.ui.fl.apply._internal.flexObjects.FlexObject">sap.ui.fl.apply._internal.flexObjects.FlexObject</a>s.</p></p>
                     */
                    namespace PersistenceWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API to get information about reload behavior in case of a draft and/or personalization changes.</p></p>
                     */
                    namespace ReloadInfoAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for tools to create, update, delete app variants only for ABAP systems.</p></p>
                     */
                    namespace SmartBusinessWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API to handle specific functionalities for <a target="_self" href="api/sap.ui.comp.smartvariants.SmartVariantManagement">sap.ui.comp.smartvariants.SmartVariantManagement</a>.</p></p>
                     */
                    namespace SmartVariantManagementWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for tools like <a target="_self" href="api/sap.ui.rta">sap.ui.rta</a> to get source languages, download XLIFF files or upload translations.</p></p>
                     */
                    namespace TranslationAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API to write UI2 personalization.</p></p>
                     */
                    namespace UI2PersonalizationWriteAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace api {
                    /**
                     * <p><p>Provides an API for tools like <a target="_self" href="api/sap.ui.rta">sap.ui.rta</a> to activate, discard and retrieve versions.</p></p>
                     */
                    namespace VersionsAPI {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                /**
                 */
                namespace connectors {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace connectors {
                    /**
                     * <p><p>Base class for connectors.</p></p>
                     */
                    namespace BaseConnector {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace communication {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace initial {
                /**
                 */
                namespace api {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    namespace changes {
                        namespace descriptor {
                            /**
                             */
                            namespace platform {
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
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace connectors {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace controlVariants {
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace apply {
                namespace _internal {
                    /**
                     */
                    namespace extensionPoint {
                        /**
                         */
                        export class Registry {
                            /**
                             * <p>Object to register extension points to track their locations.</p>
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
        namespace fl {
            namespace initial {
                namespace _internal {
                    /**
                     */
                    namespace preprocessors {
                        /**
                         */
                        export class ControllerExtension {
                            /**
                             * <p>Provides the Controller Extensions to the ControllerExtensionProvider from the core</p>
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
        namespace fl {
            /**
             */
            namespace transport {
                /**
                 * <p>The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.</p>
                 */
                export class TransportDialog extends sap.m.Dialog {
                    /**
                     * <p>Constructor for a new transport/TransportDialog.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.Dialog#constructor">sap.m.Dialog</a> can be used.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
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
            namespace util {
                /**
                 * <p>Error indicating that the reason for throwing was not an actual issue but rather a cancelation of the current action.</p>
                 */
                export class CancelError {
                    /**
                     */
                    constructor();
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace changes {
                        }
                    }
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace fl {
            namespace write {
                namespace _internal {
                    namespace flexState {
                        /**
                         */
                        namespace UI2Personalization {
                        }
                    }
                }
            }
        }
    }
}
