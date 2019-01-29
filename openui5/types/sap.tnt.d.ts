/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    /**
     * <p>SAPUI5 library with controls specialized for administrative applications.</p>
     */
    namespace tnt {
        /**
         * <p>The <code>InfoLabel</code> is a small non-interactive control which contains text information and non-semantic color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).</p><h3>Overview</h3><p>The control visualizes text information without user interaction. The text inside the control is always in upper case. It can have smaller or larger side paddings which can be specified by the <code>renderMode</code> property. The text-background color pair can be changed by setting a digit between 1 and 9 that corresponds to the 9 predefined color combinations of the <code>colorScheme</code> property. The control is designed to be vertically aligned with UI5 Input and Button control families. When using <code>InfoLabel</code> in non-editable <code>Forms</code>, <code>Tables</code>, etc., set <code>displayOnly=true</code> for best visual results.</p><h3>Usage Guidelines</h3><p> <ul> <li>If the text is longer than the width of the control, it doesn’t wrap. Instead, it’s represented as ellipsis. </li> <li>When truncated, the full text in the control is not visible. Therefore, it’s recommended to make more space for longer items to be fully displayed.</li> <li>Colors are not semantic and have no visual representation in sap_belize_hcb and sap_belize_hcw themes.</li> <li>The control shows plain text only, formatting is not visualized.</li> </ul></p>
         */
        export class InfoLabel extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new <code>InfoLabel</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Binds property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getText" data-sap-ui-target="getText">text</a> to model data.</p><p>See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/bindProperty" data-sap-ui-target="sap.ui.base.ManagedObject/methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
             * @param {any} oBindingInfo <p>The binding information</p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            bindText(oBindingInfo: any): sap.tnt.InfoLabel;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getColorScheme" data-sap-ui-target="getColorScheme">colorScheme</a>.</p><p>Specifies the fill and text color of the control. Accepts a digit as a value. You can choose from 9 predefined background and text color combinations. The color schemes are non-semantic, you can select them according to your own preferences. The default <code>colorScheme</code> is 7.</p><p>Default value is <code>7</code>.</p>
             * @returns number <p>Value of property <code>colorScheme</code></p>
             */
            getColorScheme(): number;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getDisplayOnly" data-sap-ui-target="getDisplayOnly">displayOnly</a>.</p><p>Determines if the <code>InfoLabel</code> is in <code>displayOnly</code> mode. When set to <code>true</code> the control size adjusts to fit other controls, for example non-editable <code>Forms</code>.</p><p>Default value is <code>false</code>.</p>
             * @returns boolean <p>Value of property <code>displayOnly</code></p>
             */
            getDisplayOnly(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getRenderMode" data-sap-ui-target="getRenderMode">renderMode</a>.</p><p>Specifies the type of the <code>InfoLabel</code> paddings - loose or narrow. <b>Note:</b> By default the padding is loose. It is recommended to use narrow (smaller) paddings for numeric texts.</p><p>Default value is <code>Loose</code>.</p>
             * @returns sap.tnt.RenderMode <p>Value of property <code>renderMode</code></p>
             */
            getRenderMode(): sap.tnt.RenderMode;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Specifies the text inside the <code>InfoLabel</code> control.</p><p>Default value is <code>empty string</code>.</p>
             * @returns string <p>Value of property <code>text</code></p>
             */
            getText(): string;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getTextDirection" data-sap-ui-target="getTextDirection">textDirection</a>.</p><p>Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.</p><p>Default value is <code>Inherit</code>.</p>
             * @returns sap.ui.core.TextDirection <p>Value of property <code>textDirection</code></p>
             */
            getTextDirection(): sap.ui.core.TextDirection;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the width of the <code>InfoLabel</code> control. By default, the <code>InfoLabel</code> control has the width of the content. Set this property to restrict the width to a custom value.</p>
             * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
             */
            getWidth(): sap.ui.core.CSSSize;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getColorScheme" data-sap-ui-target="getColorScheme">colorScheme</a>.</p><p>Specifies the fill and text color of the control. Accepts a digit as a value. You can choose from 9 predefined background and text color combinations. The color schemes are non-semantic, you can select them according to your own preferences. The default <code>colorScheme</code> is 7.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>7</code>.</p>
             * @param {number} iColorScheme <p>New value for property <code>colorScheme</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setColorScheme(iColorScheme: number): sap.tnt.InfoLabel;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getDisplayOnly" data-sap-ui-target="getDisplayOnly">displayOnly</a>.</p><p>Determines if the <code>InfoLabel</code> is in <code>displayOnly</code> mode. When set to <code>true</code> the control size adjusts to fit other controls, for example non-editable <code>Forms</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
             * @param {boolean} bDisplayOnly <p>New value for property <code>displayOnly</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setDisplayOnly(bDisplayOnly: boolean): sap.tnt.InfoLabel;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getRenderMode" data-sap-ui-target="getRenderMode">renderMode</a>.</p><p>Specifies the type of the <code>InfoLabel</code> paddings - loose or narrow. <b>Note:</b> By default the padding is loose. It is recommended to use narrow (smaller) paddings for numeric texts.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Loose</code>.</p>
             * @param {sap.tnt.RenderMode} sRenderMode <p>New value for property <code>renderMode</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setRenderMode(sRenderMode: sap.tnt.RenderMode): sap.tnt.InfoLabel;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Specifies the text inside the <code>InfoLabel</code> control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
             * @param {string} sText <p>New value for property <code>text</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setText(sText: string): sap.tnt.InfoLabel;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getTextDirection" data-sap-ui-target="getTextDirection">textDirection</a>.</p><p>Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Inherit</code>.</p>
             * @param {sap.ui.core.TextDirection} sTextDirection <p>New value for property <code>textDirection</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setTextDirection(sTextDirection: sap.ui.core.TextDirection): sap.tnt.InfoLabel;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the width of the <code>InfoLabel</code> control. By default, the <code>InfoLabel</code> control has the width of the content. Set this property to restrict the width to a custom value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setWidth(sWidth: sap.ui.core.CSSSize): sap.tnt.InfoLabel;
            /**
             * <p>Unbinds property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.InfoLabel/methods/getText" data-sap-ui-target="getText">text</a> from model data.</p>
             * @returns sap.tnt.InfoLabel <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            unbindText(): sap.tnt.InfoLabel;
        }
        /**
         * <p>The NavigationList control is an interactive control, which provides a choice of different items, ordered as a list.</p>
         */
        export class NavigationList extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new NavigationList.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some ariaDescribedBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
             * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): sap.tnt.NavigationList;
            /**
             * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
             * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.tnt.NavigationList;
            /**
             * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item to add; if empty, nothing is inserted</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addItem(oItem: sap.tnt.NavigationListItem): sap.tnt.NavigationList;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationList/events/itemSelect" data-sap-ui-target="sap.tnt.NavigationList/events/itemSelect">itemSelect</a> event of this <code>sap.tnt.NavigationList</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.NavigationList</code> itself.</p><p>Fired when an item is selected.</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationList</code> itself</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachItemSelect(oData: any, fnFunction: Function, oListener?: any): sap.tnt.NavigationList;
            /**
             * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyItems(): sap.tnt.NavigationList;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationList/events/itemSelect" data-sap-ui-target="sap.tnt.NavigationList/events/itemSelect">itemSelect</a> event of this <code>sap.tnt.NavigationList</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachItemSelect(fnFunction: Function, oListener: any): sap.tnt.NavigationList;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationList/events/itemSelect" data-sap-ui-target="sap.tnt.NavigationList/events/itemSelect">itemSelect</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireItemSelect(mParameters?: any): sap.tnt.NavigationList;
            /**
             * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
             * @returns sap.ui.core.ID[] 
             */
            getAriaDescribedBy(): sap.ui.core.ID[];
            /**
             * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
             * @returns sap.ui.core.ID[] 
             */
            getAriaLabelledBy(): sap.ui.core.ID[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Specifies if the control is in expanded or collapsed mode.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>expanded</code></p>
             */
            getExpanded(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>The items displayed in the list.</p>
             * @returns sap.tnt.NavigationListItem[] 
             */
            getItems(): sap.tnt.NavigationListItem[];
            /**
             * <p>Gets the currently selected <code>NavigationListItem</code>.</p>
             * @returns sap.tnt.NavigationListItem|null <p>The selected item or null if nothing is selected</p>
             */
            getSelectedItem(): sap.tnt.NavigationListItem | null;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the width of the control.</p>
             * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
             */
            getWidth(): sap.ui.core.CSSSize;
            /**
             * <p>Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfItem(oItem: sap.tnt.NavigationListItem): number;
            /**
             * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertItem(oItem: sap.tnt.NavigationListItem, iIndex: number): sap.tnt.NavigationList;
            /**
             * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
             * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllAriaDescribedBy(): sap.ui.core.ID[];
            /**
             * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
             * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllAriaLabelledBy(): sap.ui.core.ID[];
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.tnt.NavigationListItem[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllItems(): sap.tnt.NavigationListItem[];
            /**
             * <p>Removes an ariaDescribedBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
             * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
             * @returns sap.ui.core.ID <p>The removed ariaDescribedBy or <code>null</code></p>
             */
            removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
            /**
             * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
             * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
             * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
             */
            removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
            /**
             * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {number | string | sap.tnt.NavigationListItem} vItem <p>The item to remove or its index or id</p>
             * @returns sap.tnt.NavigationListItem <p>The removed item or <code>null</code></p>
             */
            removeItem(vItem: number | string | sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Specifies if the control is in expanded or collapsed mode.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bExpanded <p>New value for property <code>expanded</code></p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setExpanded(bExpanded: boolean): sap.tnt.NavigationList;
            /**
             * <p>Sets the association for selectedItem. Set <code>null</code> to deselect.</p>
             * @param {string | sap.tnt.NavigationListItem} selectedItem <p>The control to be set as selected</p>
             * @param {boolean} suppressInvalidate <p>If true, the managed object's invalidate method is not called</p>
             * @returns sap.tnt.NavigationList|null <p>The <code>selectedItem</code> association</p>
             */
            setSelectedItem(selectedItem: string | sap.tnt.NavigationListItem, suppressInvalidate: boolean): sap.tnt.NavigationList | null;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationList/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the width of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
             * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
             * @returns sap.tnt.NavigationList <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setWidth(sWidth: sap.ui.core.CSSSize): sap.tnt.NavigationList;
        }
        /**
         * <p>The NavigationListItem control represents an action, which can be selected by the user. It can provide sub items.</p>
         */
        export class NavigationListItem extends sap.ui.core.Item {
            /**
             * <p>Constructor for a new NavigationListItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item to add; if empty, nothing is inserted</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addItem(oItem: sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationListItem/events/select" data-sap-ui-target="sap.tnt.NavigationListItem/events/select">select</a> event of this <code>sap.tnt.NavigationListItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.NavigationListItem</code> itself.</p><p>Fired when this item is selected.</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.tnt.NavigationListItem</code> itself</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.tnt.NavigationListItem;
            /**
             * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyItems(): sap.tnt.NavigationListItem;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationListItem/events/select" data-sap-ui-target="sap.tnt.NavigationListItem/events/select">select</a> event of this <code>sap.tnt.NavigationListItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachSelect(fnFunction: Function, oListener: any): sap.tnt.NavigationListItem;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.NavigationListItem/events/select" data-sap-ui-target="sap.tnt.NavigationListItem/events/select">select</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireSelect(mParameters?: any): sap.tnt.NavigationListItem;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Specifies if the item is expanded.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>expanded</code></p>
             */
            getExpanded(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getHasExpander" data-sap-ui-target="getHasExpander">hasExpander</a>.</p><p>Specifies if the item has an expander.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>hasExpander</code></p>
             */
            getHasExpander(): boolean;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Specifies the icon for the item.</p><p>Default value is <code>empty string</code>.</p>
             * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
             */
            getIcon(): sap.ui.core.URI;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>The sub items.</p>
             * @returns sap.tnt.NavigationListItem[] 
             */
            getItems(): sap.tnt.NavigationListItem[];
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Specifies if the item should be shown.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>visible</code></p>
             */
            getVisible(): boolean;
            /**
             * <p>Checks for the provided <code>sap.tnt.NavigationListItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfItem(oItem: sap.tnt.NavigationListItem): number;
            /**
             * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {sap.tnt.NavigationListItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertItem(oItem: sap.tnt.NavigationListItem, iIndex: number): sap.tnt.NavigationListItem;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.tnt.NavigationListItem[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllItems(): sap.tnt.NavigationListItem[];
            /**
             * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
             * @param {number | string | sap.tnt.NavigationListItem} vItem <p>The item to remove or its index or id</p>
             * @returns sap.tnt.NavigationListItem <p>The removed item or <code>null</code></p>
             */
            removeItem(vItem: number | string | sap.tnt.NavigationListItem): sap.tnt.NavigationListItem;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Specifies if the item is expanded.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bExpanded <p>New value for property <code>expanded</code></p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setExpanded(bExpanded: boolean): sap.tnt.NavigationListItem;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getHasExpander" data-sap-ui-target="getHasExpander">hasExpander</a>.</p><p>Specifies if the item has an expander.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bHasExpander <p>New value for property <code>hasExpander</code></p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHasExpander(bHasExpander: boolean): sap.tnt.NavigationListItem;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Specifies the icon for the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
             * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setIcon(sIcon: sap.ui.core.URI): sap.tnt.NavigationListItem;
            /**
             * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.NavigationListItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Specifies if the item should be shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
             * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
             * @returns sap.tnt.NavigationListItem <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setVisible(bVisible: boolean): sap.tnt.NavigationListItem;
        }
        /**
         * <p>Predefined types of <code>InfoLabel</code></p>
         */
        export enum RenderMode {
            /**
             * <p>When type of the content of <code>InfoLabel</code> is text padding are loose</p>
             */
            Loose = "Loose",
            /**
             * <p>When type of the content of <code>InfoLabel</code> is numeric paddings are narrow</p>
             */
            Narrow = "Narrow",
        }
        /**
         * <p>The SideNavigation control is a container, which consists of flexible and fixed parts on top of each other. </p><h4>Responsive Behavior</h4><p> <ul> <li>The flexible part adapts its size to the fixed one.</li> <li>The flexible part has a scrollbar when the content is larger than the available space.</li> </ul> <b>Note:</b> In order for the SideNavigation to stretch properly, its parent layout control should only be the sap.tnt.ToolPage.</p>
         */
        export class SideNavigation extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new SideNavigation.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.SideNavigation/events/itemSelect" data-sap-ui-target="sap.tnt.SideNavigation/events/itemSelect">itemSelect</a> event of this <code>sap.tnt.SideNavigation</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.tnt.SideNavigation</code> itself.</p><p>Fired when an item is selected.</p>
             * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
             * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
             * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.tnt.SideNavigation</code> itself</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            attachItemSelect(oData: any, fnFunction: Function, oListener?: any): sap.tnt.SideNavigation;
            /**
             * <p>Binds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getItem" data-sap-ui-target="getItem">item</a> to model data.</p><p>See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/bindAggregation" data-sap-ui-target="sap.ui.base.ManagedObject/methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
             * @param {any} oBindingInfo <p>The binding information</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            bindItem(oBindingInfo: any): sap.tnt.SideNavigation;
            /**
             * <p>Destroys the fixedItem in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFixedItem" data-sap-ui-target="getFixedItem">fixedItem</a>.</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyFixedItem(): sap.tnt.SideNavigation;
            /**
             * <p>Destroys the footer in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyFooter(): sap.tnt.SideNavigation;
            /**
             * <p>Destroys the item in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getItem" data-sap-ui-target="getItem">item</a>.</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyItem(): sap.tnt.SideNavigation;
            /**
             * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.SideNavigation/events/itemSelect" data-sap-ui-target="sap.tnt.SideNavigation/events/itemSelect">itemSelect</a> event of this <code>sap.tnt.SideNavigation</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
             * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
             * @param {any} oListener <p>Context object on which the given function had to be called</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            detachItemSelect(fnFunction: Function, oListener: any): sap.tnt.SideNavigation;
            /**
             * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.tnt.SideNavigation/events/itemSelect" data-sap-ui-target="sap.tnt.SideNavigation/events/itemSelect">itemSelect</a> to attached listeners.</p>
             * @param {any} mParameters <p>Parameters to pass along with the event</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            protected fireItemSelect(mParameters?: any): sap.tnt.SideNavigation;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Specifies if the control is expanded.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>expanded</code></p>
             */
            getExpanded(): boolean;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFixedItem" data-sap-ui-target="getFixedItem">fixedItem</a>.</p><p>Defines the content inside the fixed part.</p>
             * @returns sap.tnt.NavigationList 
             */
            getFixedItem(): sap.tnt.NavigationList;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p><p>Defines the content inside the footer.</p>
             * @returns sap.tnt.NavigationList 
             */
            getFooter(): sap.tnt.NavigationList;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getItem" data-sap-ui-target="getItem">item</a>.</p><p>Defines the content inside the flexible part.</p>
             * @returns sap.tnt.NavigationList 
             */
            getItem(): sap.tnt.NavigationList;
            /**
             * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getSelectedItem" data-sap-ui-target="getSelectedItem">selectedItem</a>, or <code>null</code>.</p>
             * @returns sap.ui.core.ID 
             */
            getSelectedItem(): sap.ui.core.ID;
            /**
             * <p>Sets if the control is in expanded or collapsed mode.</p>
             * @param {boolean} isExpanded <p>Indication if the SideNavigation is expanded.</p>
             * @returns sap.tnt.SideNavigation <p>this SideNavigation reference for chaining.</p>
             */
            setExpanded(isExpanded: boolean): sap.tnt.SideNavigation;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFixedItem" data-sap-ui-target="getFixedItem">fixedItem</a>.</p>
             * @param {sap.tnt.NavigationList} oFixedItem <p>The fixedItem to set</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFixedItem(oFixedItem: sap.tnt.NavigationList): sap.tnt.SideNavigation;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
             * @param {sap.tnt.NavigationList} oFooter <p>The footer to set</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setFooter(oFooter: sap.tnt.NavigationList): sap.tnt.SideNavigation;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getItem" data-sap-ui-target="getItem">item</a>.</p>
             * @param {sap.tnt.NavigationList} oItem <p>The item to set</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setItem(oItem: sap.tnt.NavigationList): sap.tnt.SideNavigation;
            /**
             * <p>Sets the association for selectedItem</p>
             * @param {string | sap.tnt.NavigationListItem} selectedItem <p>The control to be set as selected</p>
             * @param {boolean} suppressInvalidate <p>If true, the managed object's invalidate method is not called</p>
             * @returns sap.tnt.SideNavigation|null <p>The <code>selectedItem</code> association</p>
             */
            setSelectedItem(selectedItem: string | sap.tnt.NavigationListItem, suppressInvalidate: boolean): sap.tnt.SideNavigation | null;
            /**
             * <p>Unbinds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation/methods/getItem" data-sap-ui-target="getItem">item</a> from model data.</p>
             * @returns sap.tnt.SideNavigation <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            unbindItem(): sap.tnt.SideNavigation;
        }
        /**
         * <p>The ToolHeader control is a horizontal container that is most commonly used to display buttons, labels, and other various input controls. </p><h4>Overview</h4><p> The ToolHeader control is based on <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.OverflowToolbar" data-sap-ui-target="OverflowToolbar">sap.m.OverflowToolbar</a>. It contains clearly structured menus of commands that are available across the various apps within the same tool layout. </p><h4>Usage</h4><p> <ul> <li>If an app implements side navigation in addition to the tool header menu, the menu icon must be the first item on the left-hand side of the tool header.</li> <li>The app menu and the side navigation must not have any dependencies and must work independently.</li> </ul></p>
         */
        export class ToolHeader extends sap.m.OverflowToolbar {
            /**
             * <p>Constructor for a new ToolHeader.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
        }
        /**
         * <p>The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control to specify where the overflow button is placed.</p>
         */
        export class ToolHeaderUtilitySeparator extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new ToolHeaderUtilitySeparator.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.Control/methods/constructor" data-sap-ui-target="sap.ui.core.Control/methods/constructor">sap.ui.core.Control</a> can be used.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
        }
        /**
         * <p>The ToolPage is a layout control, used to create a basic tools app that has a header, side navigation and contents area. </p><h4>Overview</h4><p> The control has three main areas - a header on top, navigation to the side and a content area that can hold any control. The header and side navigation use custom controls - <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolHeader" data-sap-ui-target="ToolHeader">sap.tnt.ToolHeader</a> and <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.SideNavigation" data-sap-ui-target="SideNavigation">sap.tnt.SideNavigation</a>. </p><h4>Usage</h4><p> The main usage of the sap.tnt controls is for scenarios in the tooling or administration space.</p>
         */
        export class ToolPage extends sap.ui.core.Control {
            /**
             * <p>Constructor for a new ToolPage.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
             * @param {string} sId <p>ID for the new control, generated automatically if no id is given</p>
             * @param {any} mSettings <p>Initial settings for the new control</p>
             */
            constructor(sId?: string, mSettings?: any);
            /**
             * <p>Adds some mainContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p>
             * @param {sap.ui.core.Control} oMainContent <p>The mainContent to add; if empty, nothing is inserted</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            addMainContent(oMainContent: sap.ui.core.Control): sap.tnt.ToolPage;
            /**
             * <p>Destroys the header in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyHeader(): sap.tnt.ToolPage;
            /**
             * <p>Destroys all the mainContents in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroyMainContents(): sap.tnt.ToolPage;
            /**
             * <p>Destroys the sideContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            destroySideContent(): sap.tnt.ToolPage;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p><p>The control to appear in the header area.</p>
             * @returns sap.tnt.ToolHeader 
             */
            getHeader(): sap.tnt.ToolHeader;
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p><p>The content section.</p>
             * @returns sap.ui.core.Control[] 
             */
            getMainContents(): sap.ui.core.Control[];
            /**
             * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p><p>The side menu of the layout.</p>
             * @returns sap.tnt.SideNavigation 
             */
            getSideContent(): sap.tnt.SideNavigation;
            /**
             * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getSideExpanded" data-sap-ui-target="getSideExpanded">sideExpanded</a>.</p><p>Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.</p><p>Default value is <code>true</code>.</p>
             * @returns boolean <p>Value of property <code>sideExpanded</code></p>
             */
            getSideExpanded(): boolean;
            /**
             * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>. and returns its index if found or -1 otherwise.</p>
             * @param {sap.ui.core.Control} oMainContent <p>The mainContent whose index is looked for</p>
             * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
             */
            indexOfMainContent(oMainContent: sap.ui.core.Control): number;
            /**
             * <p>Inserts a mainContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p>
             * @param {sap.ui.core.Control} oMainContent <p>The mainContent to insert; if empty, nothing is inserted</p>
             * @param {number} iIndex <p>The <code>0</code>-based index the mainContent should be inserted at; for a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent is inserted at the last position</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            insertMainContent(oMainContent: sap.ui.core.Control, iIndex: number): sap.tnt.ToolPage;
            /**
             * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
             * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
             */
            removeAllMainContents(): sap.ui.core.Control[];
            /**
             * <p>Removes a mainContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getMainContents" data-sap-ui-target="getMainContents">mainContents</a>.</p>
             * @param {number | string | sap.ui.core.Control} vMainContent <p>The mainContent to remove or its index or id</p>
             * @returns sap.ui.core.Control <p>The removed mainContent or <code>null</code></p>
             */
            removeMainContent(vMainContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p>
             * @param {sap.tnt.ToolHeader} oHeader <p>The header to set</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setHeader(oHeader: sap.tnt.ToolHeader): sap.tnt.ToolPage;
            /**
             * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.tnt.ToolPage/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p>
             * @param {sap.tnt.SideNavigation} oSideContent <p>The sideContent to set</p>
             * @returns sap.tnt.ToolPage <p>Reference to <code>this</code> in order to allow method chaining</p>
             */
            setSideContent(oSideContent: sap.tnt.SideNavigation): sap.tnt.ToolPage;
            /**
             * <p>Sets the expand/collapse state of the SideContent.</p>
             * @param {boolean} isSideExpanded <p>defines whether the SideNavigation is expanded.</p>
             * @returns sap.tnt.ToolPage <p>Pointer to the control instance for chaining</p>
             */
            setSideExpanded(isSideExpanded: boolean): sap.tnt.ToolPage;
            /**
             * <p>Toggles the expand/collapse state of the SideContent.</p>
             * @returns sap.tnt.ToolPage <p>Pointer to the control instance for chaining.</p>
             */
            toggleSideContentMode(): sap.tnt.ToolPage;
        }
    }
}
