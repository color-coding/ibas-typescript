/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    /**
     * <p>SAP UxAP</p>
     */
    namespace uxap {
        /**
         * <p>Displays the titles of the sections and subsections in the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">ObjectPageLayout</a> and allows the user to scroll to the respective content.</p><h3>Overview</h3><p>The <code>AnchorBar</code> is internally generated as a menu in the <code>ObjectPageLayout</code>. It displays the sections and subsections and allows the user to directly scroll to the respective content by selecting them, while it remains visible at the top of the page (below the page header).</p>
         */
        export class AnchorBar extends sap.m.Toolbar {
            /**
             * <p>Constructor for a new <code>AnchorBar</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>This method is a hook for the RenderManager that gets called during the rendering of child Controls. It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.</p>
             * @param {sap.ui.core.Control} oElement <p>The Control that gets rendered by the RenderManager</p>
             * @param {any} mAriaProps <p>The mapping of "aria-" prefixed attributes</p>
             */
            protected enhanceAccessibilityState(oElement: sap.ui.core.Control, mAriaProps: any): void;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getBackgroundDesign" data-sap-ui-target="getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of the <code>AnchorBar</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p>
             * @returns sap.m.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
             */
            getBackgroundDesign(): sap.m.BackgroundDesign;
            /**
             * <p>Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.</p>
             * @returns any <p>The <code>sap.ui.core.delegate.ScrollEnablement</code> instance</p>
             */
            getScrollDelegate(): any;
            /**
             * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getSelectedButton" data-sap-ui-target="getSelectedButton">selectedButton</a>, or <code>null</code>.</p>
             * @returns sap.ui.core.ID 
             */
            getSelectedButton(): sap.ui.core.ID;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getShowPopover" data-sap-ui-target="getShowPopover">showPopover</a>.</p><p>Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showPopover</code></p>
             */
            getShowPopover(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getUpperCase" data-sap-ui-target="getUpperCase">upperCase</a>.</p><p>Determines whether the Anchor bar items are displayed in upper case.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>upperCase</code></p>
             */
            getUpperCase(): boolean;
            /**
             * <p>Scroll to a specific Section.</p>
             * @param {string} sId <p>The Section ID to scroll to</p>
             * @param {number} iDuration <p>Scroll duration (in ms). Default value is 0.</p>
             */
            scrollToSection(sId: string, iDuration: number): void;
            /**
             * <p>Sets the value of the <code>backgroundDesign</code> property.</p>
             * @param {sap.m.BackgroundDesign} sBackgroundDesign <p>new value of the <code>backgroundDesign</code></p>
             * @returns sap.uxap.AnchorBar <p><code>this</code> to allow method chaining</p>
             */
            setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): sap.uxap.AnchorBar;
            /**
             * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getSelectedButton" data-sap-ui-target="getSelectedButton">selectedButton</a>.</p>
             * @param {sap.ui.core.ID | sap.m.Button} oSelectedButton <p>ID of an element which becomes the new target of this selectedButton association; alternatively, an element instance may be given</p>
             * @returns sap.uxap.AnchorBar <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSelectedButton(oSelectedButton: sap.ui.core.ID | sap.m.Button): sap.uxap.AnchorBar;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getShowPopover" data-sap-ui-target="getShowPopover">showPopover</a>.</p><p>Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowPopover <p>New value for property <code>showPopover</code></p>
             * @returns sap.uxap.AnchorBar <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowPopover(bShowPopover: boolean): sap.uxap.AnchorBar;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.AnchorBar/methods/getUpperCase" data-sap-ui-target="getUpperCase">upperCase</a>.</p><p>Determines whether the Anchor bar items are displayed in upper case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bUpperCase <p>New value for property <code>upperCase</code></p>
             * @returns sap.uxap.AnchorBar <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setUpperCase(bUpperCase: boolean): sap.uxap.AnchorBar;
        }
        /**
         * <p>The main element that holds the content that is displayed in an <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">ObjectPageLayout</a>, but not necessarily only there.</p><h3>Overview</h3><p>The blocks give the flexibility to combine different content types.</p><p>A block is a control that: <ul> <li>Has modes and a view associated to each mode. At rendering time, the view associated to the mode is rendered.</li> <li>Can use all view types for storing its internal control tree (XML, JS, JSON, HTML)</li> </ul></p><p>As any UI5 view, the XML view can have a controller which automatically comes with a <code>this.oParentBlock</code> attribute (so that the controller can interact with the block). If the controller implements the <code>onParentBlockModeChange</code> method, this method will be called with the <code>sMode</code> parameter when the view is used or reused by the block.<br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/2978f6064742456ebed31c5ccf4d051d" data-sap-ui-target="2978f6064742456ebed31c5ccf4d051d">Creating Blocks</a></li></ul></p>
         */
        export class BlockBase extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new <code>BlockBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some mapping to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p>
             * @param {sap.uxap.ModelMapping} oMapping <p>The mapping to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addMapping(oMapping: sap.uxap.ModelMapping): sap.uxap.BlockBase;
            /**
             * <p>Destroys all the mappings in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyMappings(): sap.uxap.BlockBase;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getColumnLayout" data-sap-ui-target="getColumnLayout">columnLayout</a>.</p><p>Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and "auto".</p><p>Default value is <code>auto</code>.</p>
             * @returns sap.uxap.BlockBaseColumnLayout <p>Value of property <code>columnLayout</code></p>
             */
            getColumnLayout(): sap.uxap.BlockBaseColumnLayout;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getFormAdjustment" data-sap-ui-target="getFormAdjustment">formAdjustment</a>.</p><p>Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.</p><p>Default value is <code>BlockColumns</code>.</p>
             * @returns sap.uxap.BlockBaseFormAdjustment <p>Value of property <code>formAdjustment</code></p>
             */
            getFormAdjustment(): sap.uxap.BlockBaseFormAdjustment;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p><p>Map external UI5 model and internal Block model</p>
             * @returns sap.uxap.ModelMapping[] 
             */
            getMappings(): sap.uxap.ModelMapping[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>Determines the mode of the block. When block is used inside ObjectPage this mode is inherited my the SubSection. The mode of the block is changed when SubSection mode changes.</p>
             * @returns string <p>Value of property <code>mode</code></p>
             */
            getMode(): string;
            /**
             * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getSelectedView" data-sap-ui-target="getSelectedView">selectedView</a>, or <code>null</code>.</p>
             * @returns sap.ui.core.ID 
             */
            getSelectedView(): sap.ui.core.ID;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getShowSubSectionMore" data-sap-ui-target="getShowSubSectionMore">showSubSectionMore</a>.</p><p>Determines whether the show more button should be shown.</p><p><b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code> and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showSubSectionMore</code></p>
             */
            getShowSubSectionMore(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Determines the visibility of the block.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visible</code></p>
             */
            getVisible(): boolean;
            /**
             * <p>Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.uxap.ModelMapping} oMapping <p>The mapping whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfMapping(oMapping: sap.uxap.ModelMapping): number;
            /**
             * <p>Inserts a mapping into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p>
             * @param {sap.uxap.ModelMapping} oMapping <p>The mapping to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the mapping should be inserted at; for a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value greater than the current size of the aggregation, the mapping is inserted at the last position</p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertMapping(oMapping: sap.uxap.ModelMapping, iIndex: number): sap.uxap.BlockBase;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.uxap.ModelMapping[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllMappings(): sap.uxap.ModelMapping[];
            /**
             * <p>Removes a mapping from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getMappings" data-sap-ui-target="getMappings">mappings</a>.</p>
             * @param {number | string | sap.uxap.ModelMapping} vMapping <p>The mapping to remove or its index or id</p>
             * @returns sap.uxap.ModelMapping <p>The removed mapping or <code>null</code></p>
             */
            removeMapping(vMapping: number | string | sap.uxap.ModelMapping): sap.uxap.ModelMapping;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getFormAdjustment" data-sap-ui-target="getFormAdjustment">formAdjustment</a>.</p><p>Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>BlockColumns</code>.</p>
             * @param {sap.uxap.BlockBaseFormAdjustment} sFormAdjustment <p>New value for property <code>formAdjustment</code></p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFormAdjustment(sFormAdjustment: sap.uxap.BlockBaseFormAdjustment): sap.uxap.BlockBase;
            /**
             * <p>Set the view mode for this particular block.</p>
             * @param {string} sMode <p>the mode to apply to the control (that should be synchronized with view declared)</p>
             * @returns any <p>this</p>
             */
            setMode(sMode: string): any;
            /**
             * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getSelectedView" data-sap-ui-target="getSelectedView">selectedView</a>.</p>
             * @param {sap.ui.core.ID | sap.ui.core.Control} oSelectedView <p>ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given</p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSelectedView(oSelectedView: sap.ui.core.ID | sap.ui.core.Control): sap.uxap.BlockBase;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BlockBase/methods/getShowSubSectionMore" data-sap-ui-target="getShowSubSectionMore">showSubSectionMore</a>.</p><p>Determines whether the show more button should be shown.</p><p><b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code> and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowSubSectionMore <p>New value for property <code>showSubSectionMore</code></p>
             * @returns sap.uxap.BlockBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowSubSectionMore(bShowSubSectionMore: boolean): sap.uxap.BlockBase;
        }
        /**
         * <p>Used by the <code>BlockBase</code> control to define if it should do automatic adjustment of its nested forms.</p>
         */
        export enum BlockBaseFormAdjustment {
            /**
             * <p>Any form within the block will be automatically adjusted to have as many columns as the colspan of its parent block.</p>
             */
            BlockColumns = "BlockColumns",
            /**
             * <p>No automatic adjustment of forms.</p>
             */
            None = "None",
            /**
             * <p>Any form within the block will be automatically adjusted to have only one column.</p>
             */
            OneColumn = "OneColumn",
        }
        /**
         * <p>Represents the navigation steps up to the current location in the app.</p><h3>Overview</h3><p>The <code>BreadCrumbs</code> control allows the users to quickly navigate to a previous location on the path that got them to the current location by choosing the displayed navigation steps.</p><p>It has two main modes of operation: <ul> <li>A trail of links followed by separators, when there's enough space for the control to fit on one line.</li> <li>A dropdown list with the links, when the trail of links wouldn't fit on one line.</li> </ul></p>
         */
        export class BreadCrumbs extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new <code>BreadCrumbs</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some link to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p>
             * @param {sap.m.Link} oLink <p>The link to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addLink(oLink: sap.m.Link): sap.uxap.BreadCrumbs;
            /**
             * <p>Destroys the currentLocation in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getCurrentLocation" data-sap-ui-target="getCurrentLocation">currentLocation</a>.</p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyCurrentLocation(): sap.uxap.BreadCrumbs;
            /**
             * <p>Destroys all the links in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyLinks(): sap.uxap.BreadCrumbs;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getCurrentLocation" data-sap-ui-target="getCurrentLocation">currentLocation</a>.</p><p>The current/last element in the BreadCrumbs path.</p>
             * @returns sap.m.Text 
             */
            getCurrentLocation(): sap.m.Text;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p><p>A list of all the active link elements in the BreadCrumbs control.</p>
             * @returns sap.m.Link[] 
             */
            getLinks(): sap.m.Link[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getShowCurrentLocation" data-sap-ui-target="getShowCurrentLocation">showCurrentLocation</a>.</p><p>Sets the visibility of the current/last element in the BreadCrumbs path.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showCurrentLocation</code></p>
             */
            getShowCurrentLocation(): boolean;
            /**
             * <p>Checks for the provided <code>sap.m.Link</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.m.Link} oLink <p>The link whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfLink(oLink: sap.m.Link): number;
            /**
             * <p>Inserts a link into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p>
             * @param {sap.m.Link} oLink <p>The link to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the link should be inserted at; for a negative value of <code>iIndex</code>, the link is inserted at position 0; for a value greater than the current size of the aggregation, the link is inserted at the last position</p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertLink(oLink: sap.m.Link, iIndex: number): sap.uxap.BreadCrumbs;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.m.Link[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllLinks(): sap.m.Link[];
            /**
             * <p>Removes a link from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getLinks" data-sap-ui-target="getLinks">links</a>.</p>
             * @param {number | string | sap.m.Link} vLink <p>The link to remove or its index or id</p>
             * @returns sap.m.Link <p>The removed link or <code>null</code></p>
             */
            removeLink(vLink: number | string | sap.m.Link): sap.m.Link;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getCurrentLocation" data-sap-ui-target="getCurrentLocation">currentLocation</a>.</p>
             * @param {sap.m.Text} oCurrentLocation <p>The currentLocation to set</p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setCurrentLocation(oCurrentLocation: sap.m.Text): sap.uxap.BreadCrumbs;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.BreadCrumbs/methods/getShowCurrentLocation" data-sap-ui-target="getShowCurrentLocation">showCurrentLocation</a>.</p><p>Sets the visibility of the current/last element in the BreadCrumbs path.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowCurrentLocation <p>New value for property <code>showCurrentLocation</code></p>
             * @returns sap.uxap.BreadCrumbs <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowCurrentLocation(bShowCurrentLocation: boolean): sap.uxap.BreadCrumbs;
        }
        /**
         * <p>A select that displays items on a hierarchy of 2 levels.</p><p>If a provided item has a custom data named <code>secondLevel</code>, then it will be displayed as a second level, otherwise it would be displayed as a first level.</p>
         */
        export class HierarchicalSelect extends sap.m.Select {
            /**
             * <p>Constructor for a new <code>HierarchicalSelect</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.HierarchicalSelect/methods/getUpperCase" data-sap-ui-target="getUpperCase">upperCase</a>.</p><p>Determines whether the HierarchicalSelect items are displayed in upper case.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>upperCase</code></p>
             */
            getUpperCase(): boolean;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.HierarchicalSelect/methods/getUpperCase" data-sap-ui-target="getUpperCase">upperCase</a>.</p><p>Determines whether the HierarchicalSelect items are displayed in upper case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bUpperCase <p>New value for property <code>upperCase</code></p>
             * @returns sap.uxap.HierarchicalSelect <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setUpperCase(bUpperCase: boolean): sap.uxap.HierarchicalSelect;
        }
        /**
         * <p>Interface for controls that are eligible for the <code>headerContent</code> aggregation of the <code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a></code>.</p><p>Controls that implement this interface: <ul> <li><code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent" data-sap-ui-target="ObjectPageHeaderContent">sap.uxap.ObjectPageHeaderContent</a></code> - <code>ObjectPageLayout</code>'s classic header content</code></li> <li><code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageDynamicHeaderContent" data-sap-ui-target="ObjectPageDynamicHeaderContent">sap.uxap.ObjectPageDynamicHeaderContent</a></code> - <code>ObjectPageLayout</code>'s dynamic header content</code></li> </ul></p><p>For more information on the types of header available for the <code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">ObjectPageLayout</a></code>, see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a>.</p><p>For details regarding the differences and similarities between the available headers, see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/9c9d94fd28284539a9a5a57e9caf82a8" data-sap-ui-target="9c9d94fd28284539a9a5a57e9caf82a8">Object Page Headers Comparison</a>.</p>
         */
        export interface IHeaderContent {
        }
        /**
         * <p>Interface for controls that are eligible for the <code>headerTitle</code> aggregation of the <code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a></code>.</p><p>Controls that implement this interface: <ul> <li><code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader" data-sap-ui-target="ObjectPageHeader">sap.uxap.ObjectPageHeader</a></code> - <code>ObjectPageLayout</code>'s classic header</code></li> <li><code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageDynamicHeaderTitle" data-sap-ui-target="ObjectPageDynamicHeaderTitle">sap.uxap.ObjectPageDynamicHeaderTitle</a></code> - <code>ObjectPageLayout</code>'s dynamic header</code></li> </ul></p><p>For more information on the types of header available for the <code><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">ObjectPageLayout</a></code>, see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a>.</p><p>For details regarding the differences and similarities between the available headers, see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/9c9d94fd28284539a9a5a57e9caf82a8" data-sap-ui-target="9c9d94fd28284539a9a5a57e9caf82a8">Object Page Headers Comparison</a>.</p>
         */
        export interface IHeaderTitle {
        }
        /**
         * <p>Used by the <code>ObjectSectionBase</code> control to define the importance of the content contained in it.</p>
         */
        export enum Importance {
            /**
             * <p>High importance of the content.</p>
             */
            High = "High",
            /**
             * <p>Low importance of the content.</p>
             */
            Low = "Low",
            /**
             * <p>Medium importance of the content.</p>
             */
            Medium = "Medium",
        }
        /**
         * <p>Defines the entity that will be passed to the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p>
         */
        export class ModelMapping extends sap.ui.core.Element {
            /**
             * <p>Constructor for a new <code>ModelMapping</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getExternalModelName" data-sap-ui-target="getExternalModelName">externalModelName</a>.</p><p>Determines the external model name.</p>
             * @returns string <p>Value of property <code>externalModelName</code></p>
             */
            getExternalModelName(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getExternalPath" data-sap-ui-target="getExternalPath">externalPath</a>.</p><p>Determines the external path.</p>
             * @returns string <p>Value of property <code>externalPath</code></p>
             */
            getExternalPath(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getInternalModelName" data-sap-ui-target="getInternalModelName">internalModelName</a>.</p><p>Determines the internal model name.</p><p>Default value is <code>Model</code>.</p>
             * @returns string <p>Value of property <code>internalModelName</code></p>
             */
            getInternalModelName(): string;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getExternalModelName" data-sap-ui-target="getExternalModelName">externalModelName</a>.</p><p>Determines the external model name.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sExternalModelName <p>New value for property <code>externalModelName</code></p>
             * @returns sap.uxap.ModelMapping <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setExternalModelName(sExternalModelName: string): sap.uxap.ModelMapping;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getExternalPath" data-sap-ui-target="getExternalPath">externalPath</a>.</p><p>Determines the external path.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sExternalPath <p>New value for property <code>externalPath</code></p>
             * @returns sap.uxap.ModelMapping <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setExternalPath(sExternalPath: string): sap.uxap.ModelMapping;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ModelMapping/methods/getInternalModelName" data-sap-ui-target="getInternalModelName">internalModelName</a>.</p><p>Determines the internal model name.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Model</code>.</p>
             * @param {string} sInternalModelName <p>New value for property <code>internalModelName</code></p>
             * @returns sap.uxap.ModelMapping <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setInternalModelName(sInternalModelName: string): sap.uxap.ModelMapping;
        }
        /**
         * <p>Settings for accessible landmarks which can be applied to the container elements of a <code>sap.uxap.ObjectPageLayout</code> control. These landmarks are used by assistive technologies (such as screenreaders) to provide a meaningful page overview.</p>
         */
        export class ObjectPageAccessibleLandmarkInfo extends sap.ui.core.Element {
            /**
             * <p>Constructor for a new <code>sap.uxap.ObjectPageAccessibleLandmarkInfo</code> element.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new element</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getContentLabel" data-sap-ui-target="getContentLabel">contentLabel</a>.</p><p>Texts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
             * @returns string <p>Value of property <code>contentLabel</code></p>
             */
            getContentLabel(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getContentRole" data-sap-ui-target="getContentRole">contentRole</a>.</p><p>Landmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>None</code>.</p>
             * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>contentRole</code></p>
             */
            getContentRole(): sap.ui.core.AccessibleLandmarkRole;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getFooterLabel" data-sap-ui-target="getFooterLabel">footerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
             * @returns string <p>Value of property <code>footerLabel</code></p>
             */
            getFooterLabel(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getFooterRole" data-sap-ui-target="getFooterRole">footerRole</a>.</p><p>Landmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>None</code>.</p>
             * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>footerRole</code></p>
             */
            getFooterRole(): sap.ui.core.AccessibleLandmarkRole;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getHeaderLabel" data-sap-ui-target="getHeaderLabel">headerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
             * @returns string <p>Value of property <code>headerLabel</code></p>
             */
            getHeaderLabel(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getHeaderRole" data-sap-ui-target="getHeaderRole">headerRole</a>.</p><p>Landmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>Banner</code>.</p>
             * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>headerRole</code></p>
             */
            getHeaderRole(): sap.ui.core.AccessibleLandmarkRole;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getNavigationLabel" data-sap-ui-target="getNavigationLabel">navigationLabel</a>.</p><p>Texts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
             * @returns string <p>Value of property <code>navigationLabel</code></p>
             */
            getNavigationLabel(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getNavigationRole" data-sap-ui-target="getNavigationRole">navigationRole</a>.</p><p>Landmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>Navigation</code>.</p>
             * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>navigationRole</code></p>
             */
            getNavigationRole(): sap.ui.core.AccessibleLandmarkRole;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getRootLabel" data-sap-ui-target="getRootLabel">rootLabel</a>.</p><p>Texts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
             * @returns string <p>Value of property <code>rootLabel</code></p>
             */
            getRootLabel(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getRootRole" data-sap-ui-target="getRootRole">rootRole</a>.</p><p>Landmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>Region</code>.</p>
             * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>rootRole</code></p>
             */
            getRootRole(): sap.ui.core.AccessibleLandmarkRole;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getContentLabel" data-sap-ui-target="getContentLabel">contentLabel</a>.</p><p>Texts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sContentLabel <p>New value for property <code>contentLabel</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setContentLabel(sContentLabel: string): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getContentRole" data-sap-ui-target="getContentRole">contentRole</a>.</p><p>Landmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
             * @param {sap.ui.core.AccessibleLandmarkRole} sContentRole <p>New value for property <code>contentRole</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setContentRole(sContentRole: sap.ui.core.AccessibleLandmarkRole): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getFooterLabel" data-sap-ui-target="getFooterLabel">footerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sFooterLabel <p>New value for property <code>footerLabel</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFooterLabel(sFooterLabel: string): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getFooterRole" data-sap-ui-target="getFooterRole">footerRole</a>.</p><p>Landmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
             * @param {sap.ui.core.AccessibleLandmarkRole} sFooterRole <p>New value for property <code>footerRole</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFooterRole(sFooterRole: sap.ui.core.AccessibleLandmarkRole): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getHeaderLabel" data-sap-ui-target="getHeaderLabel">headerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sHeaderLabel <p>New value for property <code>headerLabel</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeaderLabel(sHeaderLabel: string): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getHeaderRole" data-sap-ui-target="getHeaderRole">headerRole</a>.</p><p>Landmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Banner</code>.</p>
             * @param {sap.ui.core.AccessibleLandmarkRole} sHeaderRole <p>New value for property <code>headerRole</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeaderRole(sHeaderRole: sap.ui.core.AccessibleLandmarkRole): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getNavigationLabel" data-sap-ui-target="getNavigationLabel">navigationLabel</a>.</p><p>Texts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sNavigationLabel <p>New value for property <code>navigationLabel</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setNavigationLabel(sNavigationLabel: string): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getNavigationRole" data-sap-ui-target="getNavigationRole">navigationRole</a>.</p><p>Landmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Navigation</code>.</p>
             * @param {sap.ui.core.AccessibleLandmarkRole} sNavigationRole <p>New value for property <code>navigationRole</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setNavigationRole(sNavigationRole: sap.ui.core.AccessibleLandmarkRole): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getRootLabel" data-sap-ui-target="getRootLabel">rootLabel</a>.</p><p>Texts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sRootLabel <p>New value for property <code>rootLabel</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setRootLabel(sRootLabel: string): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo/methods/getRootRole" data-sap-ui-target="getRootRole">rootRole</a>.</p><p>Landmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Region</code>.</p>
             * @param {sap.ui.core.AccessibleLandmarkRole} sRootRole <p>New value for property <code>rootRole</code></p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setRootRole(sRootRole: sap.ui.core.AccessibleLandmarkRole): sap.uxap.ObjectPageAccessibleLandmarkInfo;
        }
        /**
         * <p>Used by the <code>sap.uxap.component.Component</code> how to initialize the <code>ObjectPageLayout</code> sections and subsections.</p>
         */
        export enum ObjectPageConfigurationMode {
            /**
             * <p>Determines the JSON model.</p>
             */
            JsonModel = "JsonModel",
            /**
             * <p>Determines the JSON URL.</p>
             */
            JsonURL = "JsonURL",
        }
        /**
         * <p>Header content for the dynamic header of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><h3>Overview</h3><p>The <code>ObjectPageDynamicHeaderContent</code> represents the movable part of the <code>ObjectPageLayout</code>'s dynamic header. It can contain any control and scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.</p><p>Documentation links: <ul> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a></li> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/6e340c119ddd4c778b315f65a0432420" data-sap-ui-target="6e340c119ddd4c778b315f65a0432420">Object Page Dynamic Header</a></li> </ul></p>
         */
        export class ObjectPageDynamicHeaderContent extends sap.f.DynamicPageHeader implements sap.uxap.IHeaderContent {
            /**
             * <p>Constructor for a new <code>ObjectPageDynamicHeaderContent</code>.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
        }
        /**
         * <p>Represents the static part (header title) of the dynamic header of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><h3>Overview</h3><p>The <code>ObjectPageDynamicHeaderTitle</code> is used to represent the most important details of the displayed business object, such as the object title and actions that the user can perform.</p><p><b>Note:</b> The <code>ObjectPageDynamicHeaderTitle</code> is meant to be used inside the <code>ObjectPageLayout</code> control. Any other usage is not supported and can lead to unexpected behavior.<br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/9c9d94fd28284539a9a5a57e9caf82a8" data-sap-ui-target="9c9d94fd28284539a9a5a57e9caf82a8">Object Page Headers Comparison</a></li></ul></p>
         */
        export class ObjectPageDynamicHeaderTitle extends sap.f.DynamicPageTitle implements sap.uxap.IHeaderTitle {
            /**
             * <p>Constructor for a new <code>ObjectPageDynamicHeaderTitle</code>.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
        }
        /**
         * <p>Represents the static part (header title) of the classic header of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><h3>Overview</h3><p>The <code>ObjectPageHeader</code> is used to display the basic information about a business object, such as title/description/picture, as well as a list of common actions.</p><p><b>Note:</b> The <code>ObjectPageHeader</code> is meant to be used inside the <code>ObjectPageLayout</code> control. Any other usage is not supported and can lead to unexpected behavior.<br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/9c9d94fd28284539a9a5a57e9caf82a8" data-sap-ui-target="9c9d94fd28284539a9a5a57e9caf82a8">Object Page Headers Comparison</a></li><li><a target="blank" href="https://experience.sap.com/fiori-design-web/object-page/">UX Guidelines: Object Page</a>
        <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png" 
        title="Information published on SAP site" class="sapUISDKExternalLink"/></li></ul></p>
         */
        export class ObjectPageHeader extends sap.ui.core.Control implements sap.uxap.IHeaderTitle {
            /**
             * <p>Constructor for a new <code>ObjectPageHeader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some action to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {sap.ui.core.Control} oAction <p>The action to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addAction(oAction: sap.ui.core.Control): sap.uxap.ObjectPageHeader;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markChangesPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markChangesPress">markChangesPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.</p><p>The event is fired when the unsaved changes button is pressed</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachMarkChangesPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markLockedPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markLockedPress">markLockedPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.</p><p>The event is fired when the Locked button is pressed</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachMarkLockedPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/titleSelectorPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/titleSelectorPress">titleSelectorPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.</p><p>The event is fired when the objectPage header title selector (down-arrow) is pressed</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachTitleSelectorPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Destroys all the actions in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyActions(): sap.uxap.ObjectPageHeader;
            /**
             * <p>Destroys the breadcrumbs in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getBreadcrumbs" data-sap-ui-target="getBreadcrumbs">breadcrumbs</a>.</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyBreadcrumbs(): sap.uxap.ObjectPageHeader;
            /**
             * <p>Destroys the navigationBar in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getNavigationBar" data-sap-ui-target="getNavigationBar">navigationBar</a>.</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyNavigationBar(): sap.uxap.ObjectPageHeader;
            /**
             * <p>Destroys the sideContentButton in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getSideContentButton" data-sap-ui-target="getSideContentButton">sideContentButton</a>.</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroySideContentButton(): sap.uxap.ObjectPageHeader;
            /**
             * <p>Destroys the titleSelectorTooltip in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getTitleSelectorTooltip" data-sap-ui-target="getTitleSelectorTooltip">titleSelectorTooltip</a>.</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyTitleSelectorTooltip(): sap.uxap.ObjectPageHeader;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markChangesPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markChangesPress">markChangesPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachMarkChangesPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markLockedPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markLockedPress">markLockedPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachMarkLockedPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/titleSelectorPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/titleSelectorPress">titleSelectorPress</a> event of this <code>sap.uxap.ObjectPageHeader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachTitleSelectorPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markChangesPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markChangesPress">markChangesPress</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireMarkChangesPress(mParameters?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/markLockedPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/markLockedPress">markLockedPress</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireMarkLockedPress(mParameters?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageHeader/events/titleSelectorPress" data-sap-ui-target="sap.uxap.ObjectPageHeader/events/titleSelectorPress">titleSelectorPress</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireTitleSelectorPress(mParameters?: any): sap.uxap.ObjectPageHeader;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p><p>List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.</p>
             * @returns sap.ui.core.Control[] 
             */
            getActions(): sap.ui.core.Control[];
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getBreadcrumbs" data-sap-ui-target="getBreadcrumbs">breadcrumbs</a>.</p><p>The breadcrumbs displayed in the <code>ObjectPageHeader</code>. If this aggregation is set, the <code>breadCrumbsLinks</code> aggregation is omitted.</p>
             * @returns sap.m.Breadcrumbs 
             */
            getBreadcrumbs(): sap.m.Breadcrumbs;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsActionAreaAlwaysVisible" data-sap-ui-target="getIsActionAreaAlwaysVisible">isActionAreaAlwaysVisible</a>.</p><p>Determines whether the action buttons should always be visible or visible only when the header is snapped.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>isActionAreaAlwaysVisible</code></p>
             */
            getIsActionAreaAlwaysVisible(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectIconAlwaysVisible" data-sap-ui-target="getIsObjectIconAlwaysVisible">isObjectIconAlwaysVisible</a>.</p><p>Determines whether the icon should always be visible or visible only when the header is snapped.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>isObjectIconAlwaysVisible</code></p>
             */
            getIsObjectIconAlwaysVisible(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectSubtitleAlwaysVisible" data-sap-ui-target="getIsObjectSubtitleAlwaysVisible">isObjectSubtitleAlwaysVisible</a>.</p><p>Determines whether the subtitle should always be visible or visible only when the header is snapped.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>isObjectSubtitleAlwaysVisible</code></p>
             */
            getIsObjectSubtitleAlwaysVisible(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectTitleAlwaysVisible" data-sap-ui-target="getIsObjectTitleAlwaysVisible">isObjectTitleAlwaysVisible</a>.</p><p>Determines whether the title should always be visible or visible only when the header is snapped.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>isObjectTitleAlwaysVisible</code></p>
             */
            getIsObjectTitleAlwaysVisible(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkChanges" data-sap-ui-target="getMarkChanges">markChanges</a>.</p><p>Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>markChanges</code></p>
             */
            getMarkChanges(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkFavorite" data-sap-ui-target="getMarkFavorite">markFavorite</a>.</p><p>Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>markFavorite</code></p>
             */
            getMarkFavorite(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkFlagged" data-sap-ui-target="getMarkFlagged">markFlagged</a>.</p><p>Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>markFlagged</code></p>
             */
            getMarkFlagged(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkLocked" data-sap-ui-target="getMarkLocked">markLocked</a>.</p><p>Set the locked state of the objectPageHeader.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>markLocked</code></p>
             */
            getMarkLocked(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getNavigationBar" data-sap-ui-target="getNavigationBar">navigationBar</a>.</p><p>An instance of sap.m.Bar to be embedded in the header</p>
             * @returns sap.m.Bar 
             */
            getNavigationBar(): sap.m.Bar;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageAlt" data-sap-ui-target="getObjectImageAlt">objectImageAlt</a>.</p><p>The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property</p><p>Default value is <code>empty string</code>.</p>
             * @returns string <p>Value of property <code>objectImageAlt</code></p>
             */
            getObjectImageAlt(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageDensityAware" data-sap-ui-target="getObjectImageDensityAware">objectImageDensityAware</a>.</p><p>The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>objectImageDensityAware</code></p>
             */
            getObjectImageDensityAware(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageShape" data-sap-ui-target="getObjectImageShape">objectImageShape</a>.</p><p>Determines whether the picture should be displayed in a square or with a circle-shaped mask.</p><p>Default value is <code>Square</code>.</p>
             * @returns sap.uxap.ObjectPageHeaderPictureShape <p>Value of property <code>objectImageShape</code></p>
             */
            getObjectImageShape(): sap.uxap.ObjectPageHeaderPictureShape;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageURI" data-sap-ui-target="getObjectImageURI">objectImageURI</a>.</p><p>The URL of the image, representing the business object</p>
             * @returns string <p>Value of property <code>objectImageURI</code></p>
             */
            getObjectImageURI(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectSubtitle" data-sap-ui-target="getObjectSubtitle">objectSubtitle</a>.</p><p>The description of the object</p>
             * @returns string <p>Value of property <code>objectSubtitle</code></p>
             */
            getObjectSubtitle(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectTitle" data-sap-ui-target="getObjectTitle">objectTitle</a>.</p><p>The title of the object</p>
             * @returns string <p>Value of property <code>objectTitle</code></p>
             */
            getObjectTitle(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowMarkers" data-sap-ui-target="getShowMarkers">showMarkers</a>.</p><p>Indicates if object page header title supports showing markers such as flagged and favorite.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showMarkers</code></p>
             */
            getShowMarkers(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowPlaceholder" data-sap-ui-target="getShowPlaceholder">showPlaceholder</a>.</p><p>Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showPlaceholder</code></p>
             */
            getShowPlaceholder(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowTitleSelector" data-sap-ui-target="getShowTitleSelector">showTitleSelector</a>.</p><p>When set to true, the selector arrow icon/image is shown and can be pressed.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showTitleSelector</code></p>
             */
            getShowTitleSelector(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getSideContentButton" data-sap-ui-target="getSideContentButton">sideContentButton</a>.</p><p>A button that is used for opening the side content of the page or some additional content.</p>
             * @returns sap.m.Button 
             */
            getSideContentButton(): sap.m.Button;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getTitleSelectorTooltip" data-sap-ui-target="getTitleSelectorTooltip">titleSelectorTooltip</a>.</p><p>A custom tooltip for the title selector button.</p><p>The custom tooltip will be visible if the <code>showTitleSelector</code> property is set to <code>true</code>.</p><p><b>Note:</b> If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The default tooltip text is "Related options".</p>
             * @returns sap.ui.core.TooltipBase|string 
             */
            getTitleSelectorTooltip(): sap.ui.core.TooltipBase | string;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oAction <p>The action whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfAction(oAction: sap.ui.core.Control): number;
            /**
             * <p>Inserts a action into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {sap.ui.core.Control} oAction <p>The action to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertAction(oAction: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageHeader;
            /**
             * <p>Removes a action from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {number | string | sap.ui.core.Control} vAction <p>The action to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed action or <code>null</code></p>
             */
            removeAction(vAction: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllActions(): sap.ui.core.Control[];
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getBreadcrumbs" data-sap-ui-target="getBreadcrumbs">breadcrumbs</a>.</p>
             * @param {sap.m.Breadcrumbs} oBreadcrumbs <p>The breadcrumbs to set</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setBreadcrumbs(oBreadcrumbs: sap.m.Breadcrumbs): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsActionAreaAlwaysVisible" data-sap-ui-target="getIsActionAreaAlwaysVisible">isActionAreaAlwaysVisible</a>.</p><p>Determines whether the action buttons should always be visible or visible only when the header is snapped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bIsActionAreaAlwaysVisible <p>New value for property <code>isActionAreaAlwaysVisible</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIsActionAreaAlwaysVisible(bIsActionAreaAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectIconAlwaysVisible" data-sap-ui-target="getIsObjectIconAlwaysVisible">isObjectIconAlwaysVisible</a>.</p><p>Determines whether the icon should always be visible or visible only when the header is snapped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bIsObjectIconAlwaysVisible <p>New value for property <code>isObjectIconAlwaysVisible</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIsObjectIconAlwaysVisible(bIsObjectIconAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectSubtitleAlwaysVisible" data-sap-ui-target="getIsObjectSubtitleAlwaysVisible">isObjectSubtitleAlwaysVisible</a>.</p><p>Determines whether the subtitle should always be visible or visible only when the header is snapped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bIsObjectSubtitleAlwaysVisible <p>New value for property <code>isObjectSubtitleAlwaysVisible</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIsObjectSubtitleAlwaysVisible(bIsObjectSubtitleAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getIsObjectTitleAlwaysVisible" data-sap-ui-target="getIsObjectTitleAlwaysVisible">isObjectTitleAlwaysVisible</a>.</p><p>Determines whether the title should always be visible or visible only when the header is snapped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bIsObjectTitleAlwaysVisible <p>New value for property <code>isObjectTitleAlwaysVisible</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIsObjectTitleAlwaysVisible(bIsObjectTitleAlwaysVisible: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkChanges" data-sap-ui-target="getMarkChanges">markChanges</a>.</p><p>Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bMarkChanges <p>New value for property <code>markChanges</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setMarkChanges(bMarkChanges: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkFavorite" data-sap-ui-target="getMarkFavorite">markFavorite</a>.</p><p>Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bMarkFavorite <p>New value for property <code>markFavorite</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setMarkFavorite(bMarkFavorite: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkFlagged" data-sap-ui-target="getMarkFlagged">markFlagged</a>.</p><p>Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bMarkFlagged <p>New value for property <code>markFlagged</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setMarkFlagged(bMarkFlagged: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getMarkLocked" data-sap-ui-target="getMarkLocked">markLocked</a>.</p><p>Set the locked state of the objectPageHeader.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bMarkLocked <p>New value for property <code>markLocked</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setMarkLocked(bMarkLocked: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getNavigationBar" data-sap-ui-target="getNavigationBar">navigationBar</a>.</p>
             * @param {sap.m.Bar} oNavigationBar <p>The navigationBar to set</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setNavigationBar(oNavigationBar: sap.m.Bar): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageAlt" data-sap-ui-target="getObjectImageAlt">objectImageAlt</a>.</p><p>The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
             * @param {string} sObjectImageAlt <p>New value for property <code>objectImageAlt</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectImageAlt(sObjectImageAlt: string): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageDensityAware" data-sap-ui-target="getObjectImageDensityAware">objectImageDensityAware</a>.</p><p>The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bObjectImageDensityAware <p>New value for property <code>objectImageDensityAware</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectImageDensityAware(bObjectImageDensityAware: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageShape" data-sap-ui-target="getObjectImageShape">objectImageShape</a>.</p><p>Determines whether the picture should be displayed in a square or with a circle-shaped mask.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Square</code>.</p>
             * @param {sap.uxap.ObjectPageHeaderPictureShape} sObjectImageShape <p>New value for property <code>objectImageShape</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectImageShape(sObjectImageShape: sap.uxap.ObjectPageHeaderPictureShape): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectImageURI" data-sap-ui-target="getObjectImageURI">objectImageURI</a>.</p><p>The URL of the image, representing the business object</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sObjectImageURI <p>New value for property <code>objectImageURI</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectImageURI(sObjectImageURI: string): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectSubtitle" data-sap-ui-target="getObjectSubtitle">objectSubtitle</a>.</p><p>The description of the object</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sObjectSubtitle <p>New value for property <code>objectSubtitle</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectSubtitle(sObjectSubtitle: string): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getObjectTitle" data-sap-ui-target="getObjectTitle">objectTitle</a>.</p><p>The title of the object</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sObjectTitle <p>New value for property <code>objectTitle</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setObjectTitle(sObjectTitle: string): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowMarkers" data-sap-ui-target="getShowMarkers">showMarkers</a>.</p><p>Indicates if object page header title supports showing markers such as flagged and favorite.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowMarkers <p>New value for property <code>showMarkers</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowMarkers(bShowMarkers: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowPlaceholder" data-sap-ui-target="getShowPlaceholder">showPlaceholder</a>.</p><p>Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowPlaceholder <p>New value for property <code>showPlaceholder</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowPlaceholder(bShowPlaceholder: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getShowTitleSelector" data-sap-ui-target="getShowTitleSelector">showTitleSelector</a>.</p><p>When set to true, the selector arrow icon/image is shown and can be pressed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowTitleSelector <p>New value for property <code>showTitleSelector</code></p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowTitleSelector(bShowTitleSelector: boolean): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getSideContentButton" data-sap-ui-target="getSideContentButton">sideContentButton</a>.</p>
             * @param {sap.m.Button} oSideContentButton <p>The sideContentButton to set</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSideContentButton(oSideContentButton: sap.m.Button): sap.uxap.ObjectPageHeader;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader/methods/getTitleSelectorTooltip" data-sap-ui-target="getTitleSelectorTooltip">titleSelectorTooltip</a>.</p>
             * @param {sap.ui.core.TooltipBase | string} vTitleSelectorTooltip <p>The titleSelectorTooltip to set</p>
             * @returns sap.uxap.ObjectPageHeader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTitleSelectorTooltip(vTitleSelectorTooltip: sap.ui.core.TooltipBase | string): sap.uxap.ObjectPageHeader;
        }
        /**
         * <p>A Button that is used in the <code>actions</code> aggregation of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeader" data-sap-ui-target="ObjectPageHeader">sap.uxap.ObjectPageHeader</a>.</p>
         */
        export class ObjectPageHeaderActionButton extends sap.m.Button {
            /**
             * <p>Constructor for a new <code>ObjectPageHeaderActionButton</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getHideIcon" data-sap-ui-target="getHideIcon">hideIcon</a>.</p><p>Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>hideIcon</code></p>
             */
            getHideIcon(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getHideText" data-sap-ui-target="getHideText">hideText</a>.</p><p>Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>hideText</code></p>
             */
            getHideText(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getImportance" data-sap-ui-target="getImportance">importance</a>.</p><p>Determines the order in which the button overflows.</p><p>Default value is <code>High</code>.</p>
             * @returns sap.uxap.Importance <p>Value of property <code>importance</code></p>
             */
            getImportance(): sap.uxap.Importance;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getHideIcon" data-sap-ui-target="getHideIcon">hideIcon</a>.</p><p>Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bHideIcon <p>New value for property <code>hideIcon</code></p>
             * @returns sap.uxap.ObjectPageHeaderActionButton <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHideIcon(bHideIcon: boolean): sap.uxap.ObjectPageHeaderActionButton;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getHideText" data-sap-ui-target="getHideText">hideText</a>.</p><p>Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bHideText <p>New value for property <code>hideText</code></p>
             * @returns sap.uxap.ObjectPageHeaderActionButton <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHideText(bHideText: boolean): sap.uxap.ObjectPageHeaderActionButton;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderActionButton/methods/getImportance" data-sap-ui-target="getImportance">importance</a>.</p><p>Determines the order in which the button overflows.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>High</code>.</p>
             * @param {sap.uxap.Importance} sImportance <p>New value for property <code>importance</code></p>
             * @returns sap.uxap.ObjectPageHeaderActionButton <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setImportance(sImportance: sap.uxap.Importance): sap.uxap.ObjectPageHeaderActionButton;
        }
        /**
         * <p>Header content for the classic header of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><h3>Overview</h3><p>The <code>ObjectPageHeaderContent</code> represents the movable part of the <code>ObjectPageLayout</code>'s classic header. It can contain any control and scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.</p><p>Documentation links: <ul> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a></li> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/0fecbce45e39406aa939bd25e89823f4" data-sap-ui-target="0fecbce45e39406aa939bd25e89823f4">Object Page Classic Header</a></li> <li><a target="blank" href="https://experience.sap.com/fiori-design-web/object-page/">UX Guidelines: Object Page</a>
        <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png" 
        title="Information published on SAP site" class="sapUISDKExternalLink"/></li> </ul></p>
         */
        export class ObjectPageHeaderContent extends sap.ui.core.Control implements sap.uxap.IHeaderContent {
            /**
             * <p>Constructor for a new <code>ObjectPageHeaderContent</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageHeaderContent <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addContent(oContent: sap.ui.core.Control): sap.uxap.ObjectPageHeaderContent;
            /**
             * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @returns sap.uxap.ObjectPageHeaderContent <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyContent(): sap.uxap.ObjectPageHeaderContent;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The list of Objects of type sap.ui.core.Control.</p>
             * @returns sap.ui.core.Control[] 
             */
            getContent(): sap.ui.core.Control[];
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfContent(oContent: sap.ui.core.Control): number;
            /**
             * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageHeaderContent <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageHeaderContent;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllContent(): sap.ui.core.Control[];
            /**
             * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderContent/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
             */
            removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
        }
        /**
         * <p>Used by the <code>ObjectPageHeader</code> control to define which design to use.</p>
         */
        export enum ObjectPageHeaderDesign {
            /**
             * <p>Dark theme for the <code>ObjectPageHeader</code>.</p>
             */
            Dark = "Dark",
            /**
             * <p>Light theme for the <code>ObjectPageHeader</code>.</p>
             */
            Light = "Light",
        }
        /**
         * <p>A <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.LayoutData" data-sap-ui-target="LayoutData">sap.ui.core.LayoutData</a> element that can be added to controls used in the <code>headerContent</code> aggregation of the <code>ObjectPageLayout</code>.</p><p><b>Note:</b> This element is only taken into account when the <code>sap.uxap.ObjectPageLayout</code> control is used together with <code>sap.uxap.ObjectPageHeader</code> as value of <code>headerTitle</code>.</p>
         */
        export class ObjectPageHeaderLayoutData extends sap.ui.core.LayoutData {
            /**
             * <p>Constructor for a new <code>ObjectPageHeaderLayoutData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getShowSeparatorAfter" data-sap-ui-target="getShowSeparatorAfter">showSeparatorAfter</a>.</p><p>If this property is set the control will display a separator after it.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showSeparatorAfter</code></p>
             */
            getShowSeparatorAfter(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getShowSeparatorBefore" data-sap-ui-target="getShowSeparatorBefore">showSeparatorBefore</a>.</p><p>If this property is set the control will display a separator before it.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showSeparatorBefore</code></p>
             */
            getShowSeparatorBefore(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleL" data-sap-ui-target="getVisibleL">visibleL</a>.</p><p>If this property is set the control will be visible (or not) in a large sized layout.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visibleL</code></p>
             */
            getVisibleL(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleM" data-sap-ui-target="getVisibleM">visibleM</a>.</p><p>If this property is set the control will be visible (or not) in a medium sized layout.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visibleM</code></p>
             */
            getVisibleM(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleS" data-sap-ui-target="getVisibleS">visibleS</a>.</p><p>If this property is set the control will be visible (or not) in a small sized layout.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visibleS</code></p>
             */
            getVisibleS(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>If this property is set the control will take the provided size.</p><p>Default value is <code>auto</code>.</p>
             * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
             */
            getWidth(): sap.ui.core.CSSSize;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getShowSeparatorAfter" data-sap-ui-target="getShowSeparatorAfter">showSeparatorAfter</a>.</p><p>If this property is set the control will display a separator after it.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowSeparatorAfter <p>New value for property <code>showSeparatorAfter</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowSeparatorAfter(bShowSeparatorAfter: boolean): sap.uxap.ObjectPageHeaderLayoutData;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getShowSeparatorBefore" data-sap-ui-target="getShowSeparatorBefore">showSeparatorBefore</a>.</p><p>If this property is set the control will display a separator before it.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowSeparatorBefore <p>New value for property <code>showSeparatorBefore</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowSeparatorBefore(bShowSeparatorBefore: boolean): sap.uxap.ObjectPageHeaderLayoutData;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleL" data-sap-ui-target="getVisibleL">visibleL</a>.</p><p>If this property is set the control will be visible (or not) in a large sized layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bVisibleL <p>New value for property <code>visibleL</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setVisibleL(bVisibleL: boolean): sap.uxap.ObjectPageHeaderLayoutData;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleM" data-sap-ui-target="getVisibleM">visibleM</a>.</p><p>If this property is set the control will be visible (or not) in a medium sized layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bVisibleM <p>New value for property <code>visibleM</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setVisibleM(bVisibleM: boolean): sap.uxap.ObjectPageHeaderLayoutData;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getVisibleS" data-sap-ui-target="getVisibleS">visibleS</a>.</p><p>If this property is set the control will be visible (or not) in a small sized layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bVisibleS <p>New value for property <code>visibleS</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setVisibleS(bVisibleS: boolean): sap.uxap.ObjectPageHeaderLayoutData;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageHeaderLayoutData/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>If this property is set the control will take the provided size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
             * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
             * @returns sap.uxap.ObjectPageHeaderLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setWidth(sWidth: sap.ui.core.CSSSize): sap.uxap.ObjectPageHeaderLayoutData;
        }
        /**
         * <p>Used by the <code>ObjectPageHeader</code> control to define which shape to use for the image.</p>
         */
        export enum ObjectPageHeaderPictureShape {
            /**
             * <p>Circle shape for the images in the <code>ObjectPageHeader</code>.</p>
             */
            Circle = "Circle",
            /**
             * <p>Square shape for the images in the <code>ObjectPageHeader</code>.</p>
             */
            Square = "Square",
        }
        /**
         * <p>A layout that allows apps to easily display information related to a business object.</p><h3>Overview</h3><p>The <code>ObjectPageLayout</code> layout is composed of a header (title and content), an optional anchor bar and block content wrapped in sections and subsections that structure the information.</p><h3>Structure</h3><p>An <code>ObjectPageLayout</code> control is used to put together all parts of an Object page - Header, optional Anchor Bar and Sections/Subsections.</p><h4>Header</h4><p> The <code>ObjectPageLayout</code> implements the snapping header concept. This means that the upper part of the header (Header Title) always stays visible, while the lower part (Header Content) can scroll out of view.</p><p>Header Title is displayed at the top of the header and always remains visible above the scrollable content of the page. It contains the title and most prominent details of the object.</p><p>The Header Content scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.</p><h4>Anchor Bar</h4><p> The Anchor Bar is an automatically generated internal menu that shows the titles of the sections and subsections and allows the user to scroll to the respective section and subsection content.</p><h4>Sections, Subsections, Blocks</h4><p> The content of the page that appears bellow the header is composed of blocks structured into sections and subsections.</p><h3>Usage</h3><p> Use the <code>ObjectPageLayout</code> if: <ul> <li>The users need to see, edit, or create an item with all its details.</li> <li>Users need to get an overview of an object and interact with different parts of the object.</li> </ul></p><h3>Responsive behavior</h3><p>The <code>ObjectPageLayout</code> is responsive and adapts to all screen sizes.<br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/d2ef0099542d44dc868719d908e576d0" data-sap-ui-target="d2ef0099542d44dc868719d908e576d0">Object Page Headers</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/370b67986497463187336fa130aebbf1" data-sap-ui-target="370b67986497463187336fa130aebbf1">Anchor Bar</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/4527729576cb4a4888275b6935aad03a" data-sap-ui-target="4527729576cb4a4888275b6935aad03a">Object Page Blocks</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/2978f6064742456ebed31c5ccf4d051d" data-sap-ui-target="2978f6064742456ebed31c5ccf4d051d">Creating Blocks</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/bc410e94e46540efa02857e15aae583f" data-sap-ui-target="bc410e94e46540efa02857e15aae583f">Object Page Scrolling</a></li><li><a target="blank" href="https://experience.sap.com/fiori-design-web/snapping-header/">UX Guidelines: Object Page - Snapping Header</a>
        <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png" 
        title="Information published on SAP site" class="sapUISDKExternalLink"/></li></ul></p>
         */
        export class ObjectPageLayout extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new <code>ObjectPageLayout</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some headerContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p>
             * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addHeaderContent(oHeaderContent: sap.ui.core.Control): sap.uxap.ObjectPageLayout;
            /**
             * <p>Adds some section to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p>
             * @param {sap.uxap.ObjectPageSection} oSection <p>The section to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addSection(oSection: sap.uxap.ObjectPageSection): sap.uxap.ObjectPageLayout;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/editHeaderButtonPress" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/editHeaderButtonPress">editHeaderButtonPress</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.</p><p>The event is fired when the Edit Header button is pressed</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachEditHeaderButtonPress(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/navigate" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/navigate">navigate</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.</p><p>The event is fired when the selected section is changed using the navigation.</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachNavigate(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/toggleAnchorBar" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/toggleAnchorBar">toggleAnchorBar</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.</p><p>The event is fired when the Anchor bar is switched from moving to fixed or the other way round.</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachToggleAnchorBar(oData: any, fnFunction: Function, oListener?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Destroys the footer in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyFooter(): sap.uxap.ObjectPageLayout;
            /**
             * <p>Destroys all the headerContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyHeaderContent(): sap.uxap.ObjectPageLayout;
            /**
             * <p>Destroys the headerTitle in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderTitle" data-sap-ui-target="getHeaderTitle">headerTitle</a>.</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyHeaderTitle(): sap.uxap.ObjectPageLayout;
            /**
             * <p>Destroys the landmarkInfo in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getLandmarkInfo" data-sap-ui-target="getLandmarkInfo">landmarkInfo</a>.</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyLandmarkInfo(): sap.uxap.ObjectPageLayout;
            /**
             * <p>Destroys all the sections in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroySections(): sap.uxap.ObjectPageLayout;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/editHeaderButtonPress" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/editHeaderButtonPress">editHeaderButtonPress</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachEditHeaderButtonPress(fnFunction: Function, oListener: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/navigate" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/navigate">navigate</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachNavigate(fnFunction: Function, oListener: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/toggleAnchorBar" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/toggleAnchorBar">toggleAnchorBar</a> event of this <code>sap.uxap.ObjectPageLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachToggleAnchorBar(fnFunction: Function, oListener: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/editHeaderButtonPress" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/editHeaderButtonPress">editHeaderButtonPress</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireEditHeaderButtonPress(mParameters?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/navigate" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/navigate">navigate</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireNavigate(mParameters?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.uxap.ObjectPageLayout/events/toggleAnchorBar" data-sap-ui-target="sap.uxap.ObjectPageLayout/events/toggleAnchorBar">toggleAnchorBar</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireToggleAnchorBar(mParameters?: any): sap.uxap.ObjectPageLayout;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getAlwaysShowContentHeader" data-sap-ui-target="getAlwaysShowContentHeader">alwaysShowContentHeader</a>.</p><p>Determines whether Header Content will always be expanded on desktop.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>alwaysShowContentHeader</code></p>
             */
            getAlwaysShowContentHeader(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getBackgroundDesignAnchorBar" data-sap-ui-target="getBackgroundDesignAnchorBar">backgroundDesignAnchorBar</a>.</p><p>Determines the background color of the <code>AnchorBar</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesignAnchorBar</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p>
             * @returns sap.m.BackgroundDesign <p>Value of property <code>backgroundDesignAnchorBar</code></p>
             */
            getBackgroundDesignAnchorBar(): sap.m.BackgroundDesign;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getEnableLazyLoading" data-sap-ui-target="getEnableLazyLoading">enableLazyLoading</a>.</p><p>Enable lazy loading for the Object page Subsections.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>enableLazyLoading</code></p>
             */
            getEnableLazyLoading(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getFlexEnabled" data-sap-ui-target="getFlexEnabled">flexEnabled</a>.</p><p>Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>flexEnabled</code></p>
             */
            getFlexEnabled(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p><p>Object page floating footer.</p>
             * @returns sap.m.IBar 
             */
            getFooter(): sap.m.IBar;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p><p>Object page header content - the dynamic part of the Object page header.</p>
             * @returns sap.ui.core.Control[] 
             */
            getHeaderContent(): sap.ui.core.Control[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContentPinnable" data-sap-ui-target="getHeaderContentPinnable">headerContentPinnable</a>.</p><p>Determines whether the Header Content area can be pinned.</p><p>When set to <code>true</code>, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.</p><p><b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>headerContentPinnable</code></p>
             */
            getHeaderContentPinnable(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderTitle" data-sap-ui-target="getHeaderTitle">headerTitle</a>.</p><p>Object page header title - the upper, always static, part of the Object page header.</p>
             * @returns sap.uxap.IHeaderTitle 
             */
            getHeaderTitle(): sap.uxap.IHeaderTitle;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>Determines the height of the ObjectPage.</p><p>Default value is <code>100%</code>.</p>
             * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
             */
            getHeight(): sap.ui.core.CSSSize;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getIsChildPage" data-sap-ui-target="getIsChildPage">isChildPage</a>.</p><p>Determines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>isChildPage</code></p>
             */
            getIsChildPage(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getLandmarkInfo" data-sap-ui-target="getLandmarkInfo">landmarkInfo</a>.</p><p>Accessible landmark settings to be applied on the containers of the <code>sap.uxap.ObjectPageLayout</code> control.</p><p>If not set, no landmarks will be written.</p>
             * @returns sap.uxap.ObjectPageAccessibleLandmarkInfo 
             */
            getLandmarkInfo(): sap.uxap.ObjectPageAccessibleLandmarkInfo;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getPreserveHeaderStateOnScroll" data-sap-ui-target="getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Notes:</b> <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li> <li>Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.</li></ul></p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>preserveHeaderStateOnScroll</code></p>
             */
            getPreserveHeaderStateOnScroll(): boolean;
            /**
             * <p>Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling</p>
             * @returns any 
             */
            getScrollDelegate(): any;
            /**
             * <p>Returns the UI5 ID of the Section that is currently being scrolled.</p>
             * @returns string 
             */
            getScrollingSectionId(): string;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p><p>The sections that make up the Object page content area.</p>
             * @returns sap.uxap.ObjectPageSection[] 
             */
            getSections(): sap.uxap.ObjectPageSection[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSectionTitleLevel" data-sap-ui-target="getSectionTitleLevel">sectionTitleLevel</a>.</p><p>Determines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.</p><p><br><b>Note:</b> <ul> <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title. </li></p><p><li> The <code>ObjectPageSubSection</code> title would have <code>aria-level</code> one level lower than the defined. For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li></p><p><li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level. In this case the value of this property will be ignored. </li> </ul></p><p>Default value is <code>Auto</code>.</p>
             * @returns sap.ui.core.TitleLevel <p>Value of property <code>sectionTitleLevel</code></p>
             */
            getSectionTitleLevel(): sap.ui.core.TitleLevel;
            /**
             * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSelectedSection" data-sap-ui-target="getSelectedSection">selectedSection</a>, or <code>null</code>.</p>
             * @returns sap.ui.core.ID 
             */
            getSelectedSection(): sap.ui.core.ID;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowAnchorBar" data-sap-ui-target="getShowAnchorBar">showAnchorBar</a>.</p><p>Determines whether the Navigation bar (Anchor bar) is displayed.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showAnchorBar</code></p>
             */
            getShowAnchorBar(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowAnchorBarPopover" data-sap-ui-target="getShowAnchorBarPopover">showAnchorBarPopover</a>.</p><p>Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showAnchorBarPopover</code></p>
             */
            getShowAnchorBarPopover(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowEditHeaderButton" data-sap-ui-target="getShowEditHeaderButton">showEditHeaderButton</a>.</p><p>Determines whether an Edit button will be displayed in Header Content.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showEditHeaderButton</code></p>
             */
            getShowEditHeaderButton(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowFooter" data-sap-ui-target="getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showFooter</code></p>
             */
            getShowFooter(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowHeaderContent" data-sap-ui-target="getShowHeaderContent">showHeaderContent</a>.</p><p>Determines the visibility of the Header content (headerContent aggregation).</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showHeaderContent</code></p>
             */
            getShowHeaderContent(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowOnlyHighImportance" data-sap-ui-target="getShowOnlyHighImportance">showOnlyHighImportance</a>.</p><p>Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showOnlyHighImportance</code></p>
             */
            getShowOnlyHighImportance(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowTitleInHeaderContent" data-sap-ui-target="getShowTitleInHeaderContent">showTitleInHeaderContent</a>.</p><p>Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li></p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>showTitleInHeaderContent</code></p>
             */
            getShowTitleInHeaderContent(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSubSectionLayout" data-sap-ui-target="getSubSectionLayout">subSectionLayout</a>.</p><p>Determines whether Subsection titles are displayed on top or to the left of the Subsection content.</p><p>Default value is <code>TitleOnTop</code>.</p>
             * @returns sap.uxap.ObjectPageSubSectionLayout <p>Value of property <code>subSectionLayout</code></p>
             */
            getSubSectionLayout(): sap.uxap.ObjectPageSubSectionLayout;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getToggleHeaderOnTitleClick" data-sap-ui-target="getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>. If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.</p><p><b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>toggleHeaderOnTitleClick</code></p>
             */
            getToggleHeaderOnTitleClick(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUpperCaseAnchorBar" data-sap-ui-target="getUpperCaseAnchorBar">upperCaseAnchorBar</a>.</p><p>Determines whether the Anchor bar items are displayed in upper case.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>upperCaseAnchorBar</code></p>
             */
            getUpperCaseAnchorBar(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUseIconTabBar" data-sap-ui-target="getUseIconTabBar">useIconTabBar</a>.</p><p>Use tab navigation mode instead of the default Anchor bar mode. <br><b>Note: </b>Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>useIconTabBar</code></p>
             */
            getUseIconTabBar(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUseTwoColumnsForLargeScreen" data-sap-ui-target="getUseTwoColumnsForLargeScreen">useTwoColumnsForLargeScreen</a>.</p><p>Determines whether the to use two column layout for the L screen size.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>useTwoColumnsForLargeScreen</code></p>
             */
            getUseTwoColumnsForLargeScreen(): boolean;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfHeaderContent(oHeaderContent: sap.ui.core.Control): number;
            /**
             * <p>Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.uxap.ObjectPageSection} oSection <p>The section whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfSection(oSection: sap.uxap.ObjectPageSection): number;
            /**
             * <p>Inserts a headerContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p>
             * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the headerContent should be inserted at; for a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertHeaderContent(oHeaderContent: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageLayout;
            /**
             * <p>Inserts a section into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p>
             * @param {sap.uxap.ObjectPageSection} oSection <p>The section to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the section should be inserted at; for a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value greater than the current size of the aggregation, the section is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertSection(oSection: sap.uxap.ObjectPageSection, iIndex: number): sap.uxap.ObjectPageLayout;
            /**
             * <p>This triggers rerendering of itself and its children.</p>
             * @param {sap.ui.base.ManagedObject} oOrigin <p>Child control for which the method was called</br> If the child is an instance of <code>sap.uxap.ObjectPageSection</code> that corresponds to an inactive tab, the invalidation will be suppressed (in iconTabBar mode)</p>
             */
            protected invalidate(oOrigin?: sap.ui.base.ManagedObject): void;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllHeaderContent(): sap.ui.core.Control[];
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.uxap.ObjectPageSection[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllSections(): sap.uxap.ObjectPageSection[];
            /**
             * <p>Removes a headerContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContent" data-sap-ui-target="getHeaderContent">headerContent</a>.</p>
             * @param {number | string | sap.ui.core.Control} vHeaderContent <p>The headerContent to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed headerContent or <code>null</code></p>
             */
            removeHeaderContent(vHeaderContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Removes a section from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSections" data-sap-ui-target="getSections">sections</a>.</p>
             * @param {number | string | sap.uxap.ObjectPageSection} vSection <p>The section to remove or its index or id</p>
             * @returns sap.uxap.ObjectPageSection <p>The removed section or <code>null</code></p>
             */
            removeSection(vSection: number | string | sap.uxap.ObjectPageSection): sap.uxap.ObjectPageSection;
            /**
             * <p>Scrolls the Object page to the given Section.</p>
             * @param {string} sId <p>The Section ID to scroll to</p>
             * @param {number} iDuration <p>Scroll duration (in ms). Default value is 0</p>
             * @param {number} iOffset <p>Additional pixels to scroll</p>
             */
            scrollToSection(sId: string, iDuration: number, iOffset: number): void;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getAlwaysShowContentHeader" data-sap-ui-target="getAlwaysShowContentHeader">alwaysShowContentHeader</a>.</p><p>Determines whether Header Content will always be expanded on desktop.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bAlwaysShowContentHeader <p>New value for property <code>alwaysShowContentHeader</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setAlwaysShowContentHeader(bAlwaysShowContentHeader: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets the value of the <code>backgroundDesignAnchorBar</code> property.</p>
             * @param {sap.m.BackgroundDesign} sBackgroundDesignAnchorBar <p>new value of the <code>backgroundDesignAnchorBar</code></p>
             * @returns sap.uxap.ObjectPageLayout <p><code>this</code> to allow method chaining</p>
             */
            setBackgroundDesignAnchorBar(sBackgroundDesignAnchorBar: sap.m.BackgroundDesign): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getEnableLazyLoading" data-sap-ui-target="getEnableLazyLoading">enableLazyLoading</a>.</p><p>Enable lazy loading for the Object page Subsections.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bEnableLazyLoading <p>New value for property <code>enableLazyLoading</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setEnableLazyLoading(bEnableLazyLoading: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getFlexEnabled" data-sap-ui-target="getFlexEnabled">flexEnabled</a>.</p><p>Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bFlexEnabled <p>New value for property <code>flexEnabled</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFlexEnabled(bFlexEnabled: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
             * @param {sap.m.IBar} oFooter <p>The footer to set</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFooter(oFooter: sap.m.IBar): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderContentPinnable" data-sap-ui-target="getHeaderContentPinnable">headerContentPinnable</a>.</p><p>Determines whether the Header Content area can be pinned.</p><p>When set to <code>true</code>, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.</p><p><b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bHeaderContentPinnable <p>New value for property <code>headerContentPinnable</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeaderContentPinnable(bHeaderContentPinnable: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeaderTitle" data-sap-ui-target="getHeaderTitle">headerTitle</a>.</p>
             * @param {sap.uxap.IHeaderTitle} oHeaderTitle <p>The headerTitle to set</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeaderTitle(oHeaderTitle: sap.uxap.IHeaderTitle): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>Determines the height of the ObjectPage.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
             * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeight(sHeight: sap.ui.core.CSSSize): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getIsChildPage" data-sap-ui-target="getIsChildPage">isChildPage</a>.</p><p>Determines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bIsChildPage <p>New value for property <code>isChildPage</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIsChildPage(bIsChildPage: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getLandmarkInfo" data-sap-ui-target="getLandmarkInfo">landmarkInfo</a>.</p>
             * @param {sap.uxap.ObjectPageAccessibleLandmarkInfo} oLandmarkInfo <p>The landmarkInfo to set</p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setLandmarkInfo(oLandmarkInfo: sap.uxap.ObjectPageAccessibleLandmarkInfo): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getPreserveHeaderStateOnScroll" data-sap-ui-target="getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Notes:</b> <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li> <li>Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.</li></ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bPreserveHeaderStateOnScroll <p>New value for property <code>preserveHeaderStateOnScroll</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setPreserveHeaderStateOnScroll(bPreserveHeaderStateOnScroll: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSectionTitleLevel" data-sap-ui-target="getSectionTitleLevel">sectionTitleLevel</a>.</p><p>Determines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.</p><p><br><b>Note:</b> <ul> <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title. </li></p><p><li> The <code>ObjectPageSubSection</code> title would have <code>aria-level</code> one level lower than the defined. For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li></p><p><li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level. In this case the value of this property will be ignored. </li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
             * @param {sap.ui.core.TitleLevel} sSectionTitleLevel <p>New value for property <code>sectionTitleLevel</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSectionTitleLevel(sSectionTitleLevel: sap.ui.core.TitleLevel): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets the section that should be selected.</p><p>The section can either be given by itself or by its id.</p><p>Note that an argument of <code>null</code> will cause the first visible section be set as <code>selectedSection</code>. This is because the <code>sap.uxap.ObjectPageLayout</code> should always have one of its sections selected (unless it has 0 visible sections).</p>
             * @param {string | sap.uxap.ObjectPageSection} sId <p>The ID or the section instance that should be selected Note that <code>null</code> or <code>undefined</code> are not valid arguments</p>
             * @returns sap.uxap.ObjectPageLayout <p>Returns <code>this</code> to allow method chaining</p>
             */
            setSelectedSection(sId: string | sap.uxap.ObjectPageSection): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowAnchorBar" data-sap-ui-target="getShowAnchorBar">showAnchorBar</a>.</p><p>Determines whether the Navigation bar (Anchor bar) is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowAnchorBar <p>New value for property <code>showAnchorBar</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowAnchorBar(bShowAnchorBar: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowAnchorBarPopover" data-sap-ui-target="getShowAnchorBarPopover">showAnchorBarPopover</a>.</p><p>Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowAnchorBarPopover <p>New value for property <code>showAnchorBarPopover</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowAnchorBarPopover(bShowAnchorBarPopover: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowEditHeaderButton" data-sap-ui-target="getShowEditHeaderButton">showEditHeaderButton</a>.</p><p>Determines whether an Edit button will be displayed in Header Content.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowEditHeaderButton <p>New value for property <code>showEditHeaderButton</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowEditHeaderButton(bShowEditHeaderButton: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowFooter" data-sap-ui-target="getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowFooter <p>New value for property <code>showFooter</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowFooter(bShowFooter: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowHeaderContent" data-sap-ui-target="getShowHeaderContent">showHeaderContent</a>.</p><p>Determines the visibility of the Header content (headerContent aggregation).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowHeaderContent <p>New value for property <code>showHeaderContent</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowHeaderContent(bShowHeaderContent: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowOnlyHighImportance" data-sap-ui-target="getShowOnlyHighImportance">showOnlyHighImportance</a>.</p><p>Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowOnlyHighImportance <p>New value for property <code>showOnlyHighImportance</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowOnlyHighImportance(bShowOnlyHighImportance: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getShowTitleInHeaderContent" data-sap-ui-target="getShowTitleInHeaderContent">showTitleInHeaderContent</a>.</p><p>Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.</p><p><b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bShowTitleInHeaderContent <p>New value for property <code>showTitleInHeaderContent</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowTitleInHeaderContent(bShowTitleInHeaderContent: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getSubSectionLayout" data-sap-ui-target="getSubSectionLayout">subSectionLayout</a>.</p><p>Determines whether Subsection titles are displayed on top or to the left of the Subsection content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>TitleOnTop</code>.</p>
             * @param {sap.uxap.ObjectPageSubSectionLayout} sSubSectionLayout <p>New value for property <code>subSectionLayout</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSubSectionLayout(sSubSectionLayout: sap.uxap.ObjectPageSubSectionLayout): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getToggleHeaderOnTitleClick" data-sap-ui-target="getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>. If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.</p><p><b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bToggleHeaderOnTitleClick <p>New value for property <code>toggleHeaderOnTitleClick</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setToggleHeaderOnTitleClick(bToggleHeaderOnTitleClick: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUpperCaseAnchorBar" data-sap-ui-target="getUpperCaseAnchorBar">upperCaseAnchorBar</a>.</p><p>Determines whether the Anchor bar items are displayed in upper case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bUpperCaseAnchorBar <p>New value for property <code>upperCaseAnchorBar</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setUpperCaseAnchorBar(bUpperCaseAnchorBar: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUseIconTabBar" data-sap-ui-target="getUseIconTabBar">useIconTabBar</a>.</p><p>Use tab navigation mode instead of the default Anchor bar mode. <br><b>Note: </b>Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bUseIconTabBar <p>New value for property <code>useIconTabBar</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setUseIconTabBar(bUseIconTabBar: boolean): sap.uxap.ObjectPageLayout;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout/methods/getUseTwoColumnsForLargeScreen" data-sap-ui-target="getUseTwoColumnsForLargeScreen">useTwoColumnsForLargeScreen</a>.</p><p>Determines whether the to use two column layout for the L screen size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bUseTwoColumnsForLargeScreen <p>New value for property <code>useTwoColumnsForLargeScreen</code></p>
             * @returns sap.uxap.ObjectPageLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setUseTwoColumnsForLargeScreen(bUseTwoColumnsForLargeScreen: boolean): sap.uxap.ObjectPageLayout;
        }
        /**
         * <p>A helper element that enables a "stashed-based" lazy loading approach for the content of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection" data-sap-ui-target="ObjectPageSubSection">sap.uxap.ObjectPageSubSection</a> control.</p><p><code>ObjectPageLazyLoader</code> is intended to be used in a declarative way only (for example, in a view) with the <code>stashed</code> property set to <code>true</code>, and is recommended to be used only once per subsection as its sole content.</p><p><code>ObjectPageLazyLoader</code> utilizes UI5's stashing mechanism and is a lightweight alternative to the native block-based Lazy Loading of the <code>ObjectPageLayout</code>. Wrapping the content of a subsection in an <code>ObjectPageLazyLoader</code> with <code>stashed=true</code> will make the content unstash automatically as the user scrolls.</p><p><b>Note:</b> Subsections are required to have an ID when used with <code>ObjectPageLazyLoader</code>.</p>
         */
        export class ObjectPageLazyLoader extends sap.ui.core.Element {
            /**
             * <p>Constructor for a new <code>ObjectPageLazyLoader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageLazyLoader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addContent(oContent: sap.ui.core.Control): sap.uxap.ObjectPageLazyLoader;
            /**
             * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @returns sap.uxap.ObjectPageLazyLoader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyContent(): sap.uxap.ObjectPageLazyLoader;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Controls to be displayed after this element is unstashed</p>
             * @returns sap.ui.core.Control[] 
             */
            getContent(): sap.ui.core.Control[];
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfContent(oContent: sap.ui.core.Control): number;
            /**
             * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageLazyLoader <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageLazyLoader;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllContent(): sap.ui.core.Control[];
            /**
             * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLazyLoader/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
             * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
             */
            removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
        }
        /**
         * <p>Top-level information container of an <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><p>The <code>ObjectPageSection</code>'s purpose is to aggregate subsections.</p><p><b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.</p>
         */
        export class ObjectPageSection extends sap.uxap.ObjectPageSectionBase {
            /**
             * <p>Constructor for a new <code>ObjectPageSection</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some subSection to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p>
             * @param {sap.uxap.ObjectPageSubSection} oSubSection <p>The subSection to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addSubSection(oSubSection: sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSection;
            /**
             * <p>Destroys all the subSections in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroySubSections(): sap.uxap.ObjectPageSection;
            /**
             * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSelectedSubSection" data-sap-ui-target="getSelectedSubSection">selectedSubSection</a>, or <code>null</code>.</p>
             * @returns sap.ui.core.ID 
             */
            getSelectedSubSection(): sap.ui.core.ID;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getShowTitle" data-sap-ui-target="getShowTitle">showTitle</a>.</p><p>Determines whether to display the Section title or not.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>showTitle</code></p>
             */
            getShowTitle(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p><p>The list of Subsections.</p>
             * @returns sap.uxap.ObjectPageSubSection[] 
             */
            getSubSections(): sap.uxap.ObjectPageSubSection[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getTitleUppercase" data-sap-ui-target="getTitleUppercase">titleUppercase</a>.</p><p>Determines whether the Section title is displayed in upper case.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>titleUppercase</code></p>
             */
            getTitleUppercase(): boolean;
            /**
             * <p>Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.uxap.ObjectPageSubSection} oSubSection <p>The subSection whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfSubSection(oSubSection: sap.uxap.ObjectPageSubSection): number;
            /**
             * <p>Inserts a subSection into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p>
             * @param {sap.uxap.ObjectPageSubSection} oSubSection <p>The subSection to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the subSection should be inserted at; for a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value greater than the current size of the aggregation, the subSection is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertSubSection(oSubSection: sap.uxap.ObjectPageSubSection, iIndex: number): sap.uxap.ObjectPageSection;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.uxap.ObjectPageSubSection[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllSubSections(): sap.uxap.ObjectPageSubSection[];
            /**
             * <p>Removes a subSection from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSubSections" data-sap-ui-target="getSubSections">subSections</a>.</p>
             * @param {number | string | sap.uxap.ObjectPageSubSection} vSubSection <p>The subSection to remove or its index or id</p>
             * @returns sap.uxap.ObjectPageSubSection <p>The removed subSection or <code>null</code></p>
             */
            removeSubSection(vSubSection: number | string | sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getSelectedSubSection" data-sap-ui-target="getSelectedSubSection">selectedSubSection</a>.</p>
             * @param {sap.ui.core.ID | sap.uxap.ObjectPageSubSection} oSelectedSubSection <p>ID of an element which becomes the new target of this selectedSubSection association; alternatively, an element instance may be given</p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSelectedSubSection(oSelectedSubSection: sap.ui.core.ID | sap.uxap.ObjectPageSubSection): sap.uxap.ObjectPageSection;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getShowTitle" data-sap-ui-target="getShowTitle">showTitle</a>.</p><p>Determines whether to display the Section title or not.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bShowTitle <p>New value for property <code>showTitle</code></p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setShowTitle(bShowTitle: boolean): sap.uxap.ObjectPageSection;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSection/methods/getTitleUppercase" data-sap-ui-target="getTitleUppercase">titleUppercase</a>.</p><p>Determines whether the Section title is displayed in upper case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bTitleUppercase <p>New value for property <code>titleUppercase</code></p>
             * @returns sap.uxap.ObjectPageSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTitleUppercase(bTitleUppercase: boolean): sap.uxap.ObjectPageSection;
        }
        /**
         * <p>An abstract container for sections and subsections in the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p>
         */
        export abstract class ObjectPageSectionBase extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new <code>ObjectPageSectionBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Explicitly ask to connect to the UI5 model tree</p>
             */
            connectToModels(): void;
            /**
             * <p>Destroys the customAnchorBarButton in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getCustomAnchorBarButton" data-sap-ui-target="getCustomAnchorBarButton">customAnchorBarButton</a>.</p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyCustomAnchorBarButton(): sap.uxap.ObjectPageSectionBase;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getCustomAnchorBarButton" data-sap-ui-target="getCustomAnchorBarButton">customAnchorBarButton</a>.</p><p>The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.</p><p>If you want to change some of the button properties, you would need to bind them to a model.</p>
             * @returns sap.m.Button 
             */
            getCustomAnchorBarButton(): sap.m.Button;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getImportance" data-sap-ui-target="getImportance">importance</a>.</p><p>Determines whether the section will be hidden on low resolutions.</p><p>Default value is <code>High</code>.</p>
             * @returns sap.uxap.Importance <p>Value of property <code>importance</code></p>
             */
            getImportance(): sap.uxap.Importance;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Section Title</p>
             * @returns string <p>Value of property <code>title</code></p>
             */
            getTitle(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getTitleLevel" data-sap-ui-target="getTitleLevel">titleLevel</a>.</p><p>Determines the ARIA level of the <code>ObjectPageSectionBase</code> title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.</p><p><b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6, instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6. <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.</p><p>Default value is <code>Auto</code>.</p>
             * @returns sap.ui.core.TitleLevel <p>Value of property <code>titleLevel</code></p>
             */
            getTitleLevel(): sap.ui.core.TitleLevel;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible ObjectPageSectionBase are not rendered</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visible</code></p>
             */
            getVisible(): boolean;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getCustomAnchorBarButton" data-sap-ui-target="getCustomAnchorBarButton">customAnchorBarButton</a>.</p>
             * @param {sap.m.Button} oCustomAnchorBarButton <p>The customAnchorBarButton to set</p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setCustomAnchorBarButton(oCustomAnchorBarButton: sap.m.Button): sap.uxap.ObjectPageSectionBase;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getImportance" data-sap-ui-target="getImportance">importance</a>.</p><p>Determines whether the section will be hidden on low resolutions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>High</code>.</p>
             * @param {sap.uxap.Importance} sImportance <p>New value for property <code>importance</code></p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setImportance(sImportance: sap.uxap.Importance): sap.uxap.ObjectPageSectionBase;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Section Title</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {string} sTitle <p>New value for property <code>title</code></p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTitle(sTitle: string): sap.uxap.ObjectPageSectionBase;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getTitleLevel" data-sap-ui-target="getTitleLevel">titleLevel</a>.</p><p>Determines the ARIA level of the <code>ObjectPageSectionBase</code> title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.</p><p><b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6, instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6. <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
             * @param {sap.ui.core.TitleLevel} sTitleLevel <p>New value for property <code>titleLevel</code></p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): sap.uxap.ObjectPageSectionBase;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSectionBase/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible ObjectPageSectionBase are not rendered</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
             * @returns sap.uxap.ObjectPageSectionBase <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setVisible(bVisible: boolean): sap.uxap.ObjectPageSectionBase;
        }
        /**
         * <p>Second-level information container of an <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">sap.uxap.ObjectPageLayout</a>.</p><p>An <code>ObjectPageSubSection</code> may only be used within sections in the <code>ObjectPageLayout</code>. Subsections are used to display primary information in the <code>blocks</code> aggregation (always visible) and not-so-important information in the <code>moreBlocks</code> aggregation. The content in the <code>moreBlocks</code> aggregation is initially hidden, but may be accessed with a "See more" (...) button.</p><p><b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.</p>
         */
        export class ObjectPageSubSection extends sap.uxap.ObjectPageSectionBase {
            /**
             * <p>Constructor for a new <code>ObjectPageSubSection</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some action to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {sap.ui.core.Control} oAction <p>The action to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addAction(oAction: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Adds some block to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>.</p>
             * @param {sap.ui.core.Control} oBlock <p>The block to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addBlock(oBlock: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Adds some moreBlock to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>.</p>
             * @param {sap.ui.core.Control} oMoreBlock <p>The moreBlock to add; if empty, nothing is inserted</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addMoreBlock(oMoreBlock: sap.ui.core.Control): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Destroys all the actions in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyActions(): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Destroys all the blocks in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>.</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyBlocks(): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Destroys all the moreBlocks in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>.</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyMoreBlocks(): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p><p>Actions available for this Subsection</p>
             * @returns sap.ui.core.Control[] 
             */
            getActions(): sap.ui.core.Control[];
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>.</p><p>Controls to be displayed in the subsection</p><p><b>Note:</b> The SAP Fiori Design guidelines require that the <code>ObjectPageHeader</code>'s content and the <code>ObjectPage</code>'s subsection content are aligned vertically. When using <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form" data-sap-ui-target="Form">sap.ui.layout.form.Form</a>, <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.Panel" data-sap-ui-target="Panel">sap.m.Panel</a>, <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.Table" data-sap-ui-target="Table">sap.m.Table</a> and <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.List" data-sap-ui-target="List">sap.m.List</a> in the subsection content area of <code>ObjectPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapUxAPObjectPageSubSectionAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).</p><p>Example:</p><p><pre>
            <code> &lt;Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"&gt;&lt;/Panel&gt; </code>
            </pre></p>
             * @returns sap.ui.core.Control[] 
             */
            getBlocks(): sap.ui.core.Control[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.</p><p>Default value is <code>Collapsed</code>.</p>
             * @returns sap.uxap.ObjectPageSubSectionMode <p>Value of property <code>mode</code></p>
             */
            getMode(): sap.uxap.ObjectPageSubSectionMode;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>.</p><p>Additional controls to display when the Show more / See all / (...) button is pressed</p>
             * @returns sap.ui.core.Control[] 
             */
            getMoreBlocks(): sap.ui.core.Control[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getTitleUppercase" data-sap-ui-target="getTitleUppercase">titleUppercase</a>.</p><p>Determines whether the Subsection title is displayed in upper case.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>titleUppercase</code></p>
             */
            getTitleUppercase(): boolean;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oAction <p>The action whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfAction(oAction: sap.ui.core.Control): number;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oBlock <p>The block whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfBlock(oBlock: sap.ui.core.Control): number;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oMoreBlock <p>The moreBlock whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfMoreBlock(oMoreBlock: sap.ui.core.Control): number;
            /**
             * <p>Inserts a action into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {sap.ui.core.Control} oAction <p>The action to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertAction(oAction: sap.ui.core.Control, iIndex: number): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Adds an <code>sap.uxap.BlockBase</code> instance to the <code>blocks</code> aggregation.</p><p><b>Note:</b> The <code>insertBlock</code> method is not supported by design. If used, it works as an <code>addBlock</code>, adding a single block to the end of the <code>blocks</code> aggregation.</p>
             * @param {sap.uxap.BlockBase} oObject <p>The <code>sap.uxap.BlockBase</code> instance</p>
             * @param {number} iIndex <p>The insertion index</p>
             * @returns sap.uxap.ObjectPageSubSection <p>The <code>sap.uxap.ObjectPageSubSection</code> instance</p>
             */
            insertBlock(oObject: sap.uxap.BlockBase, iIndex: number): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Adds an <code>sap.uxap.BlockBase</code> instance to the <code>moreBlocks</code> aggregation.</p><p><b>Note:</b> The <code>insertMoreBlock</code> method is not supported by design. If used, it works as an <code>addMoreBlock</code>, adding a single block to the end of the <code>moreBlocks</code> aggregation.</p>
             * @param {sap.uxap.BlockBase} oObject <p>The <code>sap.uxap.BlockBase</code> instance</p>
             * @param {number} iIndex <p>The insertion index</p>
             * @returns sap.uxap.ObjectPageSubSection <p>The <code>sap.uxap.ObjectPageSubSection</code> instance</p>
             */
            insertMoreBlock(oObject: sap.uxap.BlockBase, iIndex: number): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Removes a action from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p>
             * @param {number | string | sap.ui.core.Control} vAction <p>The action to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed action or <code>null</code></p>
             */
            removeAction(vAction: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getActions" data-sap-ui-target="getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllActions(): sap.ui.core.Control[];
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllBlocks(): sap.ui.core.Control[];
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllMoreBlocks(): sap.ui.core.Control[];
            /**
             * <p>Removes a block from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getBlocks" data-sap-ui-target="getBlocks">blocks</a>.</p>
             * @param {number | string | sap.ui.core.Control} vBlock <p>The block to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed block or <code>null</code></p>
             */
            removeBlock(vBlock: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Removes a moreBlock from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMoreBlocks" data-sap-ui-target="getMoreBlocks">moreBlocks</a>.</p>
             * @param {number | string | sap.ui.core.Control} vMoreBlock <p>The moreBlock to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed moreBlock or <code>null</code></p>
             */
            removeMoreBlock(vMoreBlock: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Collapsed</code>.</p>
             * @param {sap.uxap.ObjectPageSubSectionMode} sMode <p>New value for property <code>mode</code></p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setMode(sMode: sap.uxap.ObjectPageSubSectionMode): sap.uxap.ObjectPageSubSection;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageSubSection/methods/getTitleUppercase" data-sap-ui-target="getTitleUppercase">titleUppercase</a>.</p><p>Determines whether the Subsection title is displayed in upper case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bTitleUppercase <p>New value for property <code>titleUppercase</code></p>
             * @returns sap.uxap.ObjectPageSubSection <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTitleUppercase(bTitleUppercase: boolean): sap.uxap.ObjectPageSubSection;
        }
        /**
         * <p>Used by the <code>ObjectPagSubSection</code> control to define which layout to apply.</p>
         */
        export enum ObjectPageSubSectionLayout {
            /**
             * <p>Title and actions on the left, inside the block area.</p>
             */
            TitleOnLeft = "TitleOnLeft",
            /**
             * <p>Title and actions on top of the block area.</p>
             */
            TitleOnTop = "TitleOnTop",
        }
        /**
         * <p>Used by the <code>ObjectPageLayout</code> control to define which layout to use (either Collapsed or Expanded).</p>
         */
        export enum ObjectPageSubSectionMode {
            /**
             * <p>Collapsed mode of display of the <code>ObjectPageLayout</code>.</p>
             */
            Collapsed = "Collapsed",
            /**
             * <p>Expanded mode of displaying the <code>ObjectPageLayout</code>.</p>
             */
            Expanded = "Expanded",
        }
    }
}
declare namespace sap {
    namespace uxap {
        /**
         * <p>Used by the <code>BlockBase</code> control to define how many columns should it be assigned by the <code>objectPageSubSection</code>. The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout subsectionLayout property), 1, 2 or 3 (This may not be a valid value for some <code>subSectionLayout</code>, for example, asking for 3 columns in a 2 column layout would raise warnings).</p>
         */
        export type BlockBaseColumnLayout = string;
    }
}
