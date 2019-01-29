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
         * <p>Table-like controls, mainly for desktop scenarios.</p>
         */
        namespace table {
            /**
             * <p>This column adds additional properties to the table column which are needed for the analytical binding and table</p>
             */
            export class AnalyticalColumn extends sap.ui.table.Column {
                /**
                 * <p>Constructor for a new AnalyticalColumn.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getGroupHeaderFormatter" data-sap-ui-target="getGroupHeaderFormatter">groupHeaderFormatter</a>.</p><p>If the column is grouped, this formatter is used to format the value in the group header</p>
                 * @returns any <p>Value of property <code>groupHeaderFormatter</code></p>
                 */
                getGroupHeaderFormatter(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getInResult" data-sap-ui-target="getInResult">inResult</a>.</p><p>Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>inResult</code></p>
                 */
                getInResult(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getLeadingProperty" data-sap-ui-target="getLeadingProperty">leadingProperty</a>.</p><p>Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.</p>
                 * @returns string <p>Value of property <code>leadingProperty</code></p>
                 */
                getLeadingProperty(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getShowIfGrouped" data-sap-ui-target="getShowIfGrouped">showIfGrouped</a>.</p><p>Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>showIfGrouped</code></p>
                 */
                getShowIfGrouped(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getSummed" data-sap-ui-target="getSummed">summed</a>.</p><p>If defined a sum for this column is calculated</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>summed</code></p>
                 */
                getSummed(): boolean;
                /**
                 * <p>Returns the information whether the column is groupable.</p><p>The column is groupable only if the following conditions are fulfilled: <ul> <li>The column must be child of an <code>AnalyticalTable</code>.</li> <li>The <code>rows</code> aggregation of the table must be bound.</li> <li>The metadata of the model must be loaded.</li> <li>The column's <code>leadingProperty</code> must be a sortable and filterable dimension.</li> </ul></p>
                 * @returns boolean <p><code>true</code> if the column is groupable</p>
                 */
                protected isGroupable(): boolean;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getGroupHeaderFormatter" data-sap-ui-target="getGroupHeaderFormatter">groupHeaderFormatter</a>.</p><p>If the column is grouped, this formatter is used to format the value in the group header</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oGroupHeaderFormatter <p>New value for property <code>groupHeaderFormatter</code></p>
                 * @returns sap.ui.table.AnalyticalColumn <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setGroupHeaderFormatter(oGroupHeaderFormatter: any): sap.ui.table.AnalyticalColumn;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getInResult" data-sap-ui-target="getInResult">inResult</a>.</p><p>Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bInResult <p>New value for property <code>inResult</code></p>
                 * @returns sap.ui.table.AnalyticalColumn <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setInResult(bInResult: boolean): sap.ui.table.AnalyticalColumn;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getLeadingProperty" data-sap-ui-target="getLeadingProperty">leadingProperty</a>.</p><p>Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sLeadingProperty <p>New value for property <code>leadingProperty</code></p>
                 * @returns sap.ui.table.AnalyticalColumn <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLeadingProperty(sLeadingProperty: string): sap.ui.table.AnalyticalColumn;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getShowIfGrouped" data-sap-ui-target="getShowIfGrouped">showIfGrouped</a>.</p><p>Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bShowIfGrouped <p>New value for property <code>showIfGrouped</code></p>
                 * @returns sap.ui.table.AnalyticalColumn <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowIfGrouped(bShowIfGrouped: boolean): sap.ui.table.AnalyticalColumn;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalColumn/methods/getSummed" data-sap-ui-target="getSummed">summed</a>.</p><p>If defined a sum for this column is calculated</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSummed <p>New value for property <code>summed</code></p>
                 * @returns sap.ui.table.AnalyticalColumn <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSummed(bSummed: boolean): sap.ui.table.AnalyticalColumn;
            }
            /**
             * <p>A column menu which is used by the analytical column</p>
             */
            export class AnalyticalColumnMenu extends sap.ui.table.ColumnMenu {
                /**
                 * <p>Constructor for a new AnalyticalColumnMenu.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
            }
            /**
             * <p>Table which handles analytical OData backends. The AnalyticalTable only works with an AnalyticalBinding and correctly annotated OData services. Please check on the SAP Annotations for OData Version 2.0 documentation for further details.<br><br><span>Documentation links:</span><ul><li><a target="blank" href="http://scn.sap.com/docs/DOC-44986">http://scn.sap.com/docs/DOC-44986</a>
            <img src="./resources/sap/ui/documentation/sdk/images/link-sap.png" 
            title="Information published on SAP site" class="sapUISDKExternalLink"/></li></ul></p>
             */
            export class AnalyticalTable extends sap.ui.table.Table {
                /**
                 * <p>Constructor for a new AnalyticalTable.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Collapses one or more rows.</p>
                 * @param {number | number[]} vRowIndex <p>A single index, or an array of indices of the rows to be collapsed</p>
                 * @returns sap.ui.table.AnalyticalTable <p><code>this</code> to allow method chaining</p>
                 */
                collapse(vRowIndex: number | number[]): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Collapses all nodes (and their child nodes if collapseRecursive is activated).</p>
                 * @returns sap.ui.table.AnalyticalTable <p><code>this</code> to allow method chaining</p>
                 */
                collapseAll(): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Expands one or more rows.</p>
                 * @param {number | number[]} vRowIndex <p>A single index or an array of indices of the rows to be expanded</p>
                 * @returns sap.ui.table.AnalyticalTable <p><code>this</code> to allow method chaining</p>
                 */
                expand(vRowIndex: number | number[]): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalTable/methods/getCollapseRecursive" data-sap-ui-target="getCollapseRecursive">collapseRecursive</a>.</p><p>Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.</p><p>Calling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and the binding supports this feature.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>collapseRecursive</code></p>
                 */
                getCollapseRecursive(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalTable/methods/getColumnVisibilityMenuSorter" data-sap-ui-target="getColumnVisibilityMenuSorter">columnVisibilityMenuSorter</a>.</p><p>Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.</p>
                 * @returns any <p>Value of property <code>columnVisibilityMenuSorter</code></p>
                 */
                getColumnVisibilityMenuSorter(): any;
                /**
                 * <p>Returns the context of a row by its index.</p>
                 * @param {number} iIndex <p>Index of the row to return the context from.</p>
                 * @returns any <p>The context of a row by its index</p>
                 */
                getContextByIndex(iIndex: number): any;
                /**
                 * <p>Returns an array containing the row indices of all selected tree nodes (in ascending order).</p><p>Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.</p>
                 * @returns number[] <p>an array containing all selected indices</p>
                 */
                getSelectedIndices(): number[];
                /**
                 * <p>Returns the total size of the data entries.</p>
                 * @returns number <p>The total size of the data entries</p>
                 */
                getTotalSize(): number;
                /**
                 * <p>Checks whether the row is expanded or collapsed.</p>
                 * @param {number} iRowIndex <p>The index of the row to be checked</p>
                 * @returns boolean <p><code>true</code> if the row is expanded, <code>false</code> if it is collapsed</p>
                 */
                isExpanded(iRowIndex: number): boolean;
                /**
                 * <p>Checks if the row at the given index is selected.</p>
                 * @param {number} iRowIndex <p>The row index for which the selection state should be retrieved</p>
                 * @returns boolean <p>true if the index is selected, false otherwise</p>
                 */
                isIndexSelected(iRowIndex: number): boolean;
                /**
                 * <p>All rows/tree nodes inside the range (including boundaries) will be deselected. The nodes are referenced with their absolute row index. Please be aware that the absolute row index only applies to the tree which is visualized by the <code>AnalyticalTable</code> control. Invisible nodes (collapsed child nodes) will not be taken into account.</p>
                 * @param {number} iFromIndex <p>The starting index of the range which will be deselected.</p>
                 * @param {number} iToIndex <p>The starting index of the range which will be deselected.</p>
                 * @returns sap.ui.table.AnalyticalTable <p>a reference to the <code>AnalyticalTable</code> control, can be used for chaining</p>
                 */
                removeSelectionInterval(iFromIndex: number, iToIndex: number): sap.ui.table.AnalyticalTable;
                /**
                 * <p>This function is used by some composite controls to force updating the AnalyticalInfo</p>
                 * @param {boolean} bSuppressRefresh <p>binding shall not refresh data</p>
                 * @param {boolean} bForceChange <p>forces the binding to fire a change event</p>
                 */
                protected resumeUpdateAnalyticalInfo(bSuppressRefresh: boolean, bForceChange: boolean): void;
                /**
                 * <p>Selects all available nodes/rows.</p><p>Explanation of the SelectAll function and what to expect from its behavior: All rows/nodes stored locally on the client are selected. In addition all subsequent rows/tree nodes, which will be paged into view are also immediately selected. However, due to obvious performance/network traffic reasons, the SelectAll function will NOT retrieve any data from the backend.</p>
                 * @returns sap.ui.table.AnalyticalTable <p>a reference to the <code>AnalyticalTable</code> control, can be used for chaining</p>
                 */
                selectAll(): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalTable/methods/getCollapseRecursive" data-sap-ui-target="getCollapseRecursive">collapseRecursive</a>.</p><p>Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.</p><p>Calling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and the binding supports this feature.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bCollapseRecursive <p>New value for property <code>collapseRecursive</code></p>
                 * @returns sap.ui.table.AnalyticalTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setCollapseRecursive(bCollapseRecursive: boolean): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.AnalyticalTable/methods/getColumnVisibilityMenuSorter" data-sap-ui-target="getColumnVisibilityMenuSorter">columnVisibilityMenuSorter</a>.</p><p>Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oColumnVisibilityMenuSorter <p>New value for property <code>columnVisibilityMenuSorter</code></p>
                 * @returns sap.ui.table.AnalyticalTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColumnVisibilityMenuSorter(oColumnVisibilityMenuSorter: any): sap.ui.table.AnalyticalTable;
                /**
                 * <p>In an <code>AnalyticalTable</code> control you can only select indices, which correspond to the currently visualized tree. Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not correspond to an <code>AnalyticalTable</code> row.</p>
                 * @param {number} iRowIndex <p>The row index which will be selected (in case it exists)</p>
                 * @returns sap.ui.table.AnalyticalTable <p>a reference to the <code>AnalyticalTable</code> control, can be used for chaining</p>
                 */
                setSelectedIndex(iRowIndex: number): sap.ui.table.AnalyticalTable;
                /**
                 * <p>Sets the selection of the <code>AnalyticalTable</code> control to the given range (including boundaries).</p><p><b>Note:</b> The previous selection will be lost/overridden. If this is not the required behavior, please use <code>addSelectionInterval</code> and <code>removeSelectionInterval</code>.</p>
                 * @param {number} iFromIndex <p>the start index of the selection range</p>
                 * @param {number} iToIndex <p>the end index of the selection range</p>
                 * @returns sap.ui.table.AnalyticalTable <p>a reference to the <code>AnalyticalTable</code> control, can be used for chaining</p>
                 */
                setSelectionInterval(iFromIndex: number, iToIndex: number): sap.ui.table.AnalyticalTable;
                /**
                 * <p>This function is used by some composite controls to avoid updating the AnalyticalInfo when several column are added to the table. In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo must be called.</p>
                 */
                protected suspendUpdateAnalyticalInfo(): void;
            }
            /**
             * <p>The column allows you to define column specific properties that will be applied when rendering the table.</p>
             */
            export class Column extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new Column.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some multiLabel to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p>
                 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addMultiLabel(oMultiLabel: sap.ui.core.Control): sap.ui.table.Column;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Column/events/columnMenuOpen" data-sap-ui-target="sap.ui.table.Column/events/columnMenuOpen">columnMenuOpen</a> event of this <code>sap.ui.table.Column</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Column</code> itself.</p><p>Fires before the column menu is opened.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Column</code> itself</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnMenuOpen(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Column;
                /**
                 * <p>Destroys the label in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyLabel(): sap.ui.table.Column;
                /**
                 * <p>Destroys the menu in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMenu" data-sap-ui-target="getMenu">menu</a>.</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyMenu(): sap.ui.table.Column;
                /**
                 * <p>Destroys all the multiLabels in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyMultiLabels(): sap.ui.table.Column;
                /**
                 * <p>Destroys the template in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getTemplate" data-sap-ui-target="getTemplate">template</a>.</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyTemplate(): sap.ui.table.Column;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Column/events/columnMenuOpen" data-sap-ui-target="sap.ui.table.Column/events/columnMenuOpen">columnMenuOpen</a> event of this <code>sap.ui.table.Column</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnMenuOpen(fnFunction: Function, oListener: any): sap.ui.table.Column;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Column/events/columnMenuOpen" data-sap-ui-target="sap.ui.table.Column/events/columnMenuOpen">columnMenuOpen</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnMenuOpen(mParameters?: any): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getAutoResizable" data-sap-ui-target="getAutoResizable">autoResizable</a>.</p><p>Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox</code></p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>autoResizable</code></p>
                 */
                getAutoResizable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getDefaultFilterOperator" data-sap-ui-target="getDefaultFilterOperator">defaultFilterOperator</a>.</p><p>If this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.</p>
                 * @returns string <p>Value of property <code>defaultFilterOperator</code></p>
                 */
                getDefaultFilterOperator(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFiltered" data-sap-ui-target="getFiltered">filtered</a>.</p><p>Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling <code>Column.sort()</code></p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>filtered</code></p>
                 */
                getFiltered(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterOperator" data-sap-ui-target="getFilterOperator">filterOperator</a>.</p><p>Filter operator to use when filtering this column.</p>
                 * @returns string <p>Value of property <code>filterOperator</code></p>
                 */
                getFilterOperator(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterProperty" data-sap-ui-target="getFilterProperty">filterProperty</a>.</p><p>Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.</p><p>A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.</p>
                 * @returns string <p>Value of property <code>filterProperty</code></p>
                 */
                getFilterProperty(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterType" data-sap-ui-target="getFilterType">filterType</a>.</p><p>Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: <code>sap.ui.model.type.Date</code> or an expression similar to the binding syntax, e.g.: <code>"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"</code>. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is <code>sap.ui.model.type.String</code>.</p>
                 * @returns any <p>Value of property <code>filterType</code></p>
                 */
                getFilterType(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterValue" data-sap-ui-target="getFilterValue">filterValue</a>.</p><p>Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>
                &gt; 50
                &lt; 100
                &gt;= 150
                &lt;= 200
                = 250
                != 300
                something    ends with
                something*    starts with
                something*   contains
                some..thing   between
                50..100       between
                </pre></p>
                 * @returns string <p>Value of property <code>filterValue</code></p>
                 */
                getFilterValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getGrouped" data-sap-ui-target="getGrouped">grouped</a>.</p><p>Indicates if the column is grouped.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>grouped</code></p>
                 */
                getGrouped(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getHAlign" data-sap-ui-target="getHAlign">hAlign</a>.</p><p>Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.</p><p>Default value is <code>Begin</code>.</p>
                 * @returns sap.ui.core.HorizontalAlign <p>Value of property <code>hAlign</code></p>
                 */
                getHAlign(): sap.ui.core.HorizontalAlign;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getHeaderSpan" data-sap-ui-target="getHeaderSpan">headerSpan</a>.</p><p>If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.</p><p>Default value is <code>1</code>.</p>
                 * @returns any <p>Value of property <code>headerSpan</code></p>
                 */
                getHeaderSpan(): any;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p><p>Label of the column which is displayed in the column header. This aggregation is for the standard behavior, where you only want to display one single row header. If a string is supplied, a default label control will be created. Which control this is depends on the loaded libraries.</p>
                 * @returns sap.ui.core.Control|string 
                 */
                getLabel(): sap.ui.core.Control | string;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMenu" data-sap-ui-target="getMenu">menu</a>.</p><p>The menu used by the column. By default the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.ColumnMenu" data-sap-ui-target="ColumnMenu">sap.ui.table.ColumnMenu</a> is used.</p><p><b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>.</p>
                 * @returns sap.ui.unified.Menu 
                 */
                getMenu(): sap.ui.unified.Menu;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>minWidth</code></p>
                 */
                getMinWidth(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p><p>Labels of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation if you want to use multiple headers per column.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getMultiLabels(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>The name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.</p>
                 * @returns string <p>Value of property <code>name</code></p>
                 */
                getName(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getResizable" data-sap-ui-target="getResizable">resizable</a>.</p><p>If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>resizable</code></p>
                 */
                getResizable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getShowFilterMenuEntry" data-sap-ui-target="getShowFilterMenuEntry">showFilterMenuEntry</a>.</p><p>Defines if the filter menu entry is displayed</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showFilterMenuEntry</code></p>
                 */
                getShowFilterMenuEntry(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getShowSortMenuEntry" data-sap-ui-target="getShowSortMenuEntry">showSortMenuEntry</a>.</p><p>Defines if the sort menu entries are displayed</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showSortMenuEntry</code></p>
                 */
                getShowSortMenuEntry(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSorted" data-sap-ui-target="getSorted">sorted</a>.</p><p>Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling <code>Column.sort()</code></p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>sorted</code></p>
                 */
                getSorted(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSortOrder" data-sap-ui-target="getSortOrder">sortOrder</a>.</p><p>This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code></p><p>Default value is <code>Ascending</code>.</p>
                 * @returns sap.ui.table.SortOrder <p>Value of property <code>sortOrder</code></p>
                 */
                getSortOrder(): sap.ui.table.SortOrder;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSortProperty" data-sap-ui-target="getSortProperty">sortProperty</a>.</p><p>Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.</p><p>A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.</p>
                 * @returns string <p>Value of property <code>sortProperty</code></p>
                 */
                getSortProperty(): string;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getTemplate" data-sap-ui-target="getTemplate">template</a>.</p><p>Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's properties or aggregations have been changed, the template has to be applied again via <code>setTemplate</code> for the changes to take effect. If a string is defined, a default text control will be created with its text property bound to the value of the string. The default template depends on the libraries loaded. If there is no template, the column will not be rendered in the table. The set of supported controls is limited. See section "<a class="jsdoclink scrollToMethod" target="_self" href="#/topic/148892ff9aea4a18b912829791e38f3e" data-sap-ui-target="148892ff9aea4a18b912829791e38f3e">Tables: Which One Should I Choose?</a>" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.</p>
                 * @returns sap.ui.core.Control|string 
                 */
                getTemplate(): sap.ui.core.Control | string;
                /**
                 * <p>Returns a column template clone. It either finds an unused clone or clones a new one from the column template.</p>
                 * @param {number} iIndex <p>Index of the column in the column aggregation of the table</p>
                 * @returns sap.ui.core.Control|null <p>Clone of the column template, or <code>null</code> if no column template is defined</p>
                 */
                protected getTemplateClone(iIndex: number): sap.ui.core.Control | null;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible controls are not rendered.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfMultiLabel(oMultiLabel: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a multiLabel into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p>
                 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the multiLabel should be inserted at; for a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value greater than the current size of the aggregation, the multiLabel is inserted at the last position</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertMultiLabel(oMultiLabel: sap.ui.core.Control, iIndex: number): sap.ui.table.Column;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllMultiLabels(): sap.ui.core.Control[];
                /**
                 * <p>Removes a multiLabel from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="getMultiLabels">multiLabels</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vMultiLabel <p>The multiLabel to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed multiLabel or <code>null</code></p>
                 */
                removeMultiLabel(vMultiLabel: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getAutoResizable" data-sap-ui-target="getAutoResizable">autoResizable</a>.</p><p>Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bAutoResizable <p>New value for property <code>autoResizable</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAutoResizable(bAutoResizable: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getDefaultFilterOperator" data-sap-ui-target="getDefaultFilterOperator">defaultFilterOperator</a>.</p><p>If this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sDefaultFilterOperator <p>New value for property <code>defaultFilterOperator</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDefaultFilterOperator(sDefaultFilterOperator: string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFiltered" data-sap-ui-target="getFiltered">filtered</a>.</p><p>Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling <code>Column.sort()</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bFiltered <p>New value for property <code>filtered</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFiltered(bFiltered: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterOperator" data-sap-ui-target="getFilterOperator">filterOperator</a>.</p><p>Filter operator to use when filtering this column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sFilterOperator <p>New value for property <code>filterOperator</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFilterOperator(sFilterOperator: string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterProperty" data-sap-ui-target="getFilterProperty">filterProperty</a>.</p><p>Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.</p><p>A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sFilterProperty <p>New value for property <code>filterProperty</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFilterProperty(sFilterProperty: string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterType" data-sap-ui-target="getFilterType">filterType</a>.</p><p>Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: <code>sap.ui.model.type.Date</code> or an expression similar to the binding syntax, e.g.: <code>"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"</code>. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is <code>sap.ui.model.type.String</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oFilterType <p>New value for property <code>filterType</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFilterType(oFilterType: any): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getFilterValue" data-sap-ui-target="getFilterValue">filterValue</a>.</p><p>Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>
                &gt; 50
                &lt; 100
                &gt;= 150
                &lt;= 200
                = 250
                != 300
                something    ends with
                something*    starts with
                something*   contains
                some..thing   between
                50..100       between
                </pre></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sFilterValue <p>New value for property <code>filterValue</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFilterValue(sFilterValue: string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getGrouped" data-sap-ui-target="getGrouped">grouped</a>.</p><p>Indicates if the column is grouped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bGrouped <p>New value for property <code>grouped</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setGrouped(bGrouped: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getHAlign" data-sap-ui-target="getHAlign">hAlign</a>.</p><p>Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Begin</code>.</p>
                 * @param {sap.ui.core.HorizontalAlign} sHAlign <p>New value for property <code>hAlign</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHAlign(sHAlign: sap.ui.core.HorizontalAlign): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getHeaderSpan" data-sap-ui-target="getHeaderSpan">headerSpan</a>.</p><p>If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {any} oHeaderSpan <p>New value for property <code>headerSpan</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeaderSpan(oHeaderSpan: any): sap.ui.table.Column;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p>
                 * @param {sap.ui.core.Control | string} vLabel <p>The label to set</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLabel(vLabel: sap.ui.core.Control | string): sap.ui.table.Column;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMenu" data-sap-ui-target="getMenu">menu</a>.</p>
                 * @param {sap.ui.unified.Menu} oMenu <p>The menu to set</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMenu(oMenu: sap.ui.unified.Menu): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMinWidth <p>New value for property <code>minWidth</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinWidth(iMinWidth: number): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>The name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sName <p>New value for property <code>name</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setName(sName: string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getResizable" data-sap-ui-target="getResizable">resizable</a>.</p><p>If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bResizable <p>New value for property <code>resizable</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setResizable(bResizable: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getShowFilterMenuEntry" data-sap-ui-target="getShowFilterMenuEntry">showFilterMenuEntry</a>.</p><p>Defines if the filter menu entry is displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowFilterMenuEntry <p>New value for property <code>showFilterMenuEntry</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowFilterMenuEntry(bShowFilterMenuEntry: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getShowSortMenuEntry" data-sap-ui-target="getShowSortMenuEntry">showSortMenuEntry</a>.</p><p>Defines if the sort menu entries are displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowSortMenuEntry <p>New value for property <code>showSortMenuEntry</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowSortMenuEntry(bShowSortMenuEntry: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSorted" data-sap-ui-target="getSorted">sorted</a>.</p><p>Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling <code>Column.sort()</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSorted <p>New value for property <code>sorted</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSorted(bSorted: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSortOrder" data-sap-ui-target="getSortOrder">sortOrder</a>.</p><p>This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Ascending</code>.</p>
                 * @param {sap.ui.table.SortOrder} sSortOrder <p>New value for property <code>sortOrder</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSortOrder(sSortOrder: sap.ui.table.SortOrder): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getSortProperty" data-sap-ui-target="getSortProperty">sortProperty</a>.</p><p>Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.</p><p>A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sSortProperty <p>New value for property <code>sortProperty</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSortProperty(sSortProperty: string): sap.ui.table.Column;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getTemplate" data-sap-ui-target="getTemplate">template</a>.</p>
                 * @param {sap.ui.core.Control | string} vTemplate <p>The template to set</p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTemplate(vTemplate: sap.ui.core.Control | string): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible controls are not rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible: boolean): sap.ui.table.Column;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.table.Column <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.table.Column;
                /**
                 * <p>Returns whether the column should be rendered.</p>
                 * @returns boolean <p>Returns <code>true</code>, if the column should be rendered</p>
                 */
                protected shouldRender(): boolean;
            }
            /**
             * <p>The column menu provides all common actions that can be performed on a column.</p>
             */
            export class ColumnMenu extends sap.ui.unified.Menu {
                /**
                 * <p>Constructor for a new ColumnMenu.</p><p><b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
            }
            /**
             * <p>Details about the group event to distinguish between different actions associated with grouping</p>
             */
            export enum GroupEventType {
                /**
                 * <p>Group Column</p>
                 */
                group = "group",
                /**
                 * <p>Show grouped column only as group header</p>
                 */
                hideGroupedColumn = "hideGroupedColumn",
                /**
                 * <p>Change the group order of the columns. Move column one position down in the group sequence</p>
                 */
                moveDown = "moveDown",
                /**
                 * <p>Change the group order of the columns. Move column one position up in the group sequence</p>
                 */
                moveUp = "moveUp",
                /**
                 * <p>Show grouped column also as a column, not just as group header</p>
                 */
                showGroupedColumn = "showGroupedColumn",
                /**
                 * <p>Ungroup Column</p>
                 */
                ungroup = "ungroup",
                /**
                 * <p>Ungroup All Columns</p>
                 */
                ungroupAll = "ungroupAll",
            }
            /**
             * <p>Navigation mode of the table</p>
             */
            export enum NavigationMode {
                /**
                 * <p>Uses the paginator control. This option must no longer be used. Using a scrollbar is the only navigation mode which is supported by the <code>sap.ui.table</code> library. The <code>navigationMode</code> property has always been a visual representation. No matter which navigation mode is used, data fetched from an OData service is loaded page-wise.<span class="sapUiDeprecated"><br>Deprecated as of version 1.38. replaced by <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.NavigationMode.Scrollbar" data-sap-ui-target="Scrollbar">sap.ui.table.NavigationMode.Scrollbar</a></span></p>
                 */
                Paginator = "Paginator",
                /**
                 * <p>Uses the scrollbar control.</p>
                 */
                Scrollbar = "Scrollbar",
            }
            /**
             * <p>The row.</p>
             */
            export class Row extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new Row.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some cell to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p>
                 * @param {sap.ui.core.Control} oCell <p>The cell to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Row <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addCell(oCell: sap.ui.core.Control): sap.ui.table.Row;
                /**
                 * <p>Destroys all the cells in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p>
                 * @returns sap.ui.table.Row <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyCells(): sap.ui.table.Row;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p><p>The controls for the cells.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getCells(): sap.ui.core.Control[];
                /**
                 * <p>Returns the index of the row in the table or -1 if not added to a table. This function considers the scroll position of the table and also takes fixed rows and fixed bottom rows into account.</p>
                 * @returns number <p>index of the row (considers scroll position and fixed rows)</p>
                 */
                getIndex(): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oCell <p>The cell whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfCell(oCell: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a cell into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p>
                 * @param {sap.ui.core.Control} oCell <p>The cell to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the cell should be inserted at; for a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value greater than the current size of the aggregation, the cell is inserted at the last position</p>
                 * @returns sap.ui.table.Row <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertCell(oCell: sap.ui.core.Control, iIndex: number): sap.ui.table.Row;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllCells(): sap.ui.core.Control[];
                /**
                 * <p>Removes a cell from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Row/methods/getCells" data-sap-ui-target="getCells">cells</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vCell <p>The cell to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed cell or <code>null</code></p>
                 */
                removeCell(vCell: number | string | sap.ui.core.Control): sap.ui.core.Control;
            }
            /**
             * <p>The <code>RowAction</code> control allows to display multiple action items which can be selected by the user. If more action items are available as the available space allows to display an overflow mechanism is provided. This control must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.</p>
             */
            export class RowAction extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new RowAction.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.table.RowActionItem} oItem <p>The item to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.RowAction <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addItem(oItem: sap.ui.table.RowActionItem): sap.ui.table.RowAction;
                /**
                 * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @returns sap.ui.table.RowAction <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyItems(): sap.ui.table.RowAction;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>The action items which should be displayed.</p>
                 * @returns sap.ui.table.RowActionItem[] 
                 */
                getItems(): sap.ui.table.RowActionItem[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Whether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.table.RowActionItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.table.RowActionItem} oItem <p>The item whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfItem(oItem: sap.ui.table.RowActionItem): number;
                /**
                 * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.table.RowActionItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
                 * @returns sap.ui.table.RowAction <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertItem(oItem: sap.ui.table.RowActionItem, iIndex: number): sap.ui.table.RowAction;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.table.RowActionItem[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllItems(): sap.ui.table.RowActionItem[];
                /**
                 * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {number | string | sap.ui.table.RowActionItem} vItem <p>The item to remove or its index or id</p>
                 * @returns sap.ui.table.RowActionItem <p>The removed item or <code>null</code></p>
                 */
                removeItem(vItem: number | string | sap.ui.table.RowActionItem): sap.ui.table.RowActionItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowAction/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Whether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns sap.ui.table.RowAction <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible: boolean): sap.ui.table.RowAction;
            }
            /**
             * <p>An action items to be displayed in a <code>RowAction</code> control. This element must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.</p>
             */
            export class RowActionItem extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new RowActionItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.RowActionItem/events/press" data-sap-ui-target="sap.ui.table.RowActionItem/events/press">press</a> event of this <code>sap.ui.table.RowActionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.RowActionItem</code> itself.</p><p>The <code>press</code> is fired when the user triggers the corresponding action.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.RowActionItem</code> itself</p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.RowActionItem;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.RowActionItem/events/press" data-sap-ui-target="sap.ui.table.RowActionItem/events/press">press</a> event of this <code>sap.ui.table.RowActionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: Function, oListener: any): sap.ui.table.RowActionItem;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.RowActionItem/events/press" data-sap-ui-target="sap.ui.table.RowActionItem/events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): sap.ui.table.RowActionItem;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The icon of the item.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>The text of the item. It is used as tooltip and for accessibility purposes.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>text</code></p>
                 */
                getText(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>The type of the item. Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly this setting is used.</p><p>Default value is <code>Custom</code>.</p>
                 * @returns sap.ui.table.RowActionType <p>Value of property <code>type</code></p>
                 */
                getType(): sap.ui.table.RowActionType;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Whether the item should be visible on the screen.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The icon of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.table.RowActionItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>The text of the item. It is used as tooltip and for accessibility purposes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sText <p>New value for property <code>text</code></p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setText(sText: string): sap.ui.table.RowActionItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>The type of the item. Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly this setting is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Custom</code>.</p>
                 * @param {sap.ui.table.RowActionType} sType <p>New value for property <code>type</code></p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setType(sType: sap.ui.table.RowActionType): sap.ui.table.RowActionItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowActionItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Whether the item should be visible on the screen.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns sap.ui.table.RowActionItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible: boolean): sap.ui.table.RowActionItem;
            }
            /**
             * <p>Row Action types.</p>
             */
            export enum RowActionType {
                /**
                 * <p>Custom defined Row Action.</p>
                 */
                Custom = "Custom",
                /**
                 * <p>Delete Row Action.</p>
                 */
                Delete = "Delete",
                /**
                 * <p>Navigation Row Action.</p>
                 */
                Navigation = "Navigation",
            }
            /**
             * <p>The <code>RowSettings</code> control allows you to configure a row. You can only use this control in the context of the <code>sap.ui.table.Table</code> control to define row settings.</p>
             */
            export class RowSettings extends sap.ui.core.Element {
                /**
                 * <p>Constructor for new RowSettings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowSettings/methods/getHighlight" data-sap-ui-target="getHighlight">highlight</a>.</p><p>The highlight state of the rows. If the highlight is set to <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.MessageType.None" data-sap-ui-target="None">sap.ui.core.MessageType.None</a> (default), no highlights are visible.</p><p>Default value is <code>None</code>.</p>
                 * @returns sap.ui.core.MessageType <p>Value of property <code>highlight</code></p>
                 */
                getHighlight(): sap.ui.core.MessageType;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.RowSettings/methods/getHighlight" data-sap-ui-target="getHighlight">highlight</a>.</p><p>The highlight state of the rows. If the highlight is set to <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.MessageType.None" data-sap-ui-target="None">sap.ui.core.MessageType.None</a> (default), no highlights are visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
                 * @param {sap.ui.core.MessageType} sHighlight <p>New value for property <code>highlight</code></p>
                 * @returns sap.ui.table.RowSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHighlight(sHighlight: sap.ui.core.MessageType): sap.ui.table.RowSettings;
            }
            /**
             * <p>Selection behavior of the table</p>
             */
            export enum SelectionBehavior {
                /**
                 * <p>Rows can be selected on the complete row.</p>
                 */
                Row = "Row",
                /**
                 * <p>Rows can only be selected on the row (and the selector is hidden).</p>
                 */
                RowOnly = "RowOnly",
                /**
                 * <p>Rows can only be selected on the row selector.</p>
                 */
                RowSelector = "RowSelector",
            }
            /**
             * <p>Selection mode of the table</p>
             */
            export enum SelectionMode {
                /**
                 * <p>Select multiple rows at a time.<span class="sapUiDeprecated"><br>Deprecated as of version 1.38. replaced by <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.SelectionMode.MultiToggle" data-sap-ui-target="MultiToggle">sap.ui.table.SelectionMode.MultiToggle</a></span></p>
                 */
                Multi = "Multi",
                /**
                 * <p>Select multiple rows at a time (toggle behavior).</p>
                 */
                MultiToggle = "MultiToggle",
                /**
                 * <p>No rows can be selected.</p>
                 */
                None = "None",
                /**
                 * <p>Select one row at a time.</p>
                 */
                Single = "Single",
            }
            /**
             * <p>Shared DOM Reference IDs of the table.</p><p>Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef() function.</p>
             */
            export enum SharedDomRef {
                /**
                 * <p>The element id of the Horizontal Scroll Bar of the sap.ui.table.Table.</p>
                 */
                HorizontalScrollBar = "HorizontalScrollBar",
                /**
                 * <p>The element id of the Vertical Scroll Bar of the sap.ui.table.Table.</p>
                 */
                VerticalScrollBar = "VerticalScrollBar",
            }
            /**
             * <p>Sort order of a column</p>
             */
            export enum SortOrder {
                /**
                 * <p>Sort Order: ascending.</p>
                 */
                Ascending = "Ascending",
                /**
                 * <p>Sort Order: descending.</p>
                 */
                Descending = "Descending",
            }
            /**
             * <p><p> Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The Table control supports desktop PCs and tablet devices. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices. </p> <p> In order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the rows. When the user scrolls, only the row contexts are changed but the rendered controls remain the same. This allows the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding the number of displayed columns. Keep the number as low as possible to improve performance. Due to the nature of tables, the used control for column templates also has a big influence on the performance. </p> <p> The Table control relies completely on data binding, and its supported feature set is tightly coupled to the data model and binding being used. </p><br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/148892ff9aea4a18b912829791e38f3e" data-sap-ui-target="148892ff9aea4a18b912829791e38f3e">Tables: Which One Should I Choose?</a></li></ul></p>
             */
            export class Table extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new Table.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.table.Table;
                /**
                 * <p>Adds some column to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p>
                 * @param {sap.ui.table.Column} oColumn <p>The column to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addColumn(oColumn: sap.ui.table.Column): sap.ui.table.Table;
                /**
                 * <p>Adds some extension to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p>
                 * @param {sap.ui.core.Control} oExtension <p>The extension to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addExtension(oExtension: sap.ui.core.Control): sap.ui.table.Table;
                /**
                 * <p>Adds some row to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p>
                 * @param {sap.ui.table.Row} oRow <p>The row to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addRow(oRow: sap.ui.table.Row): sap.ui.table.Table;
                /**
                 * <p>Adds the given selection interval to the selection. In case of single selection, only <code>iIndexTo</code> is added to the selection.</p>
                 * @param {number} iIndexFrom <p>Index from which the selection should start</p>
                 * @param {number} iIndexTo <p>Index up to which to select</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSelectionInterval(iIndexFrom: number, iIndexTo: number): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/beforeOpenContextMenu" data-sap-ui-target="sap.ui.table.Table/events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>Fired when the user requests the context menu for a table cell.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachBeforeOpenContextMenu(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/busyStateChanged" data-sap-ui-target="sap.ui.table.Table/events/busyStateChanged">busyStateChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the busy state of the table changes. It should only be used by composite controls.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachBusyStateChanged(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/cellClick" data-sap-ui-target="sap.ui.table.Table/events/cellClick">cellClick</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the user clicks a cell of the table (experimental!).</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCellClick(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnFreeze" data-sap-ui-target="sap.ui.table.Table/events/columnFreeze">columnFreeze</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a column of the table should be freezed</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnFreeze(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnMove" data-sap-ui-target="sap.ui.table.Table/events/columnMove">columnMove</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a table column is moved.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnMove(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnResize" data-sap-ui-target="sap.ui.table.Table/events/columnResize">columnResize</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a table column is resized.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnResize(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnSelect" data-sap-ui-target="sap.ui.table.Table/events/columnSelect">columnSelect</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a column of the table has been selected</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnVisibility" data-sap-ui-target="sap.ui.table.Table/events/columnVisibility">columnVisibility</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the visibility of a table column is changed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachColumnVisibility(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/customFilter" data-sap-ui-target="sap.ui.table.Table/events/customFilter">customFilter</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCustomFilter(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/filter" data-sap-ui-target="sap.ui.table.Table/events/filter">filter</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the table is filtered.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachFilter(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/firstVisibleRowChanged" data-sap-ui-target="sap.ui.table.Table/events/firstVisibleRowChanged">firstVisibleRowChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachFirstVisibleRowChanged(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/group" data-sap-ui-target="sap.ui.table.Table/events/group">group</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the table is grouped (experimental!).</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachGroup(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/paste" data-sap-ui-target="sap.ui.table.Table/events/paste">paste</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed from the context menu or with CTRL-V keyboard key combination.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPaste(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/rowSelectionChange" data-sap-ui-target="sap.ui.table.Table/events/rowSelectionChange">rowSelectionChange</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachRowSelectionChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/sort" data-sap-ui-target="sap.ui.table.Table/events/sort">sort</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the table is sorted.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSort(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.Table;
                /**
                 * <p>Triggers automatic resizing of a column to the widest content.</p>
                 * @param {number} iColIndex <p>The index of the column in the list of visible columns.</p>
                 */
                autoResizeColumn(iColIndex: number): void;
                /**
                 * <p>Binds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a> to model data.</p><p>See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/bindAggregation" data-sap-ui-target="sap.ui.base.ManagedObject/methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
                 * @param {any} oBindingInfo <p>The binding information</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                bindColumns(oBindingInfo: any): sap.ui.table.Table;
                /**
                 * <p>Binds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a> to model data.</p><p>See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/bindAggregation" data-sap-ui-target="sap.ui.base.ManagedObject/methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
                 * @param {any} oBindingInfo <p>The binding information</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                bindRows(oBindingInfo: any): sap.ui.table.Table;
                /**
                 * <p>Removes complete selection.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                clearSelection(): sap.ui.table.Table;
                /**
                 * <p>Destroys all the columns in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyColumns(): sap.ui.table.Table;
                /**
                 * <p>Destroys the contextMenu in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getContextMenu" data-sap-ui-target="getContextMenu">contextMenu</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContextMenu(): sap.ui.table.Table;
                /**
                 * <p>Destroys all the extension in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyExtension(): sap.ui.table.Table;
                /**
                 * <p>Destroys the footer in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyFooter(): sap.ui.table.Table;
                /**
                 * <p>Destroys the noData in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getNoData" data-sap-ui-target="getNoData">noData</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyNoData(): sap.ui.table.Table;
                /**
                 * <p>Destroys the rowActionTemplate in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowActionTemplate" data-sap-ui-target="getRowActionTemplate">rowActionTemplate</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyRowActionTemplate(): sap.ui.table.Table;
                /**
                 * <p>Destroys all the rows in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyRows(): sap.ui.table.Table;
                /**
                 * <p>Destroys the rowSettingsTemplate in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowSettingsTemplate" data-sap-ui-target="getRowSettingsTemplate">rowSettingsTemplate</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyRowSettingsTemplate(): sap.ui.table.Table;
                /**
                 * <p>Destroys the title in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyTitle(): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/beforeOpenContextMenu" data-sap-ui-target="sap.ui.table.Table/events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachBeforeOpenContextMenu(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/busyStateChanged" data-sap-ui-target="sap.ui.table.Table/events/busyStateChanged">busyStateChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachBusyStateChanged(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/cellClick" data-sap-ui-target="sap.ui.table.Table/events/cellClick">cellClick</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCellClick(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnFreeze" data-sap-ui-target="sap.ui.table.Table/events/columnFreeze">columnFreeze</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnFreeze(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnMove" data-sap-ui-target="sap.ui.table.Table/events/columnMove">columnMove</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnMove(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnResize" data-sap-ui-target="sap.ui.table.Table/events/columnResize">columnResize</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnResize(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnSelect" data-sap-ui-target="sap.ui.table.Table/events/columnSelect">columnSelect</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnSelect(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnVisibility" data-sap-ui-target="sap.ui.table.Table/events/columnVisibility">columnVisibility</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachColumnVisibility(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/customFilter" data-sap-ui-target="sap.ui.table.Table/events/customFilter">customFilter</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCustomFilter(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/filter" data-sap-ui-target="sap.ui.table.Table/events/filter">filter</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachFilter(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/firstVisibleRowChanged" data-sap-ui-target="sap.ui.table.Table/events/firstVisibleRowChanged">firstVisibleRowChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachFirstVisibleRowChanged(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/group" data-sap-ui-target="sap.ui.table.Table/events/group">group</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachGroup(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/paste" data-sap-ui-target="sap.ui.table.Table/events/paste">paste</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPaste(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/rowSelectionChange" data-sap-ui-target="sap.ui.table.Table/events/rowSelectionChange">rowSelectionChange</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachRowSelectionChange(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/sort" data-sap-ui-target="sap.ui.table.Table/events/sort">sort</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSort(fnFunction: Function, oListener: any): sap.ui.table.Table;
                /**
                 * <p>Filter the given column by the given value.</p>
                 * @param {sap.ui.table.Column} oColumn <p>Column to be filtered</p>
                 * @param {string} sValue <p>Filter value as string (will be converted)</p>
                 */
                filter(oColumn: sap.ui.table.Column, sValue: string): void;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/beforeOpenContextMenu" data-sap-ui-target="sap.ui.table.Table/events/beforeOpenContextMenu">beforeOpenContextMenu</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireBeforeOpenContextMenu(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/busyStateChanged" data-sap-ui-target="sap.ui.table.Table/events/busyStateChanged">busyStateChanged</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireBusyStateChanged(mParameters?: any): sap.ui.table.Table;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/cellClick" data-sap-ui-target="sap.ui.table.Table/events/cellClick">cellClick</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireCellClick(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnFreeze" data-sap-ui-target="sap.ui.table.Table/events/columnFreeze">columnFreeze</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnFreeze(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnMove" data-sap-ui-target="sap.ui.table.Table/events/columnMove">columnMove</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnMove(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnResize" data-sap-ui-target="sap.ui.table.Table/events/columnResize">columnResize</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnResize(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnSelect" data-sap-ui-target="sap.ui.table.Table/events/columnSelect">columnSelect</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnSelect(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/columnVisibility" data-sap-ui-target="sap.ui.table.Table/events/columnVisibility">columnVisibility</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireColumnVisibility(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/customFilter" data-sap-ui-target="sap.ui.table.Table/events/customFilter">customFilter</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCustomFilter(mParameters?: any): sap.ui.table.Table;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/filter" data-sap-ui-target="sap.ui.table.Table/events/filter">filter</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireFilter(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/firstVisibleRowChanged" data-sap-ui-target="sap.ui.table.Table/events/firstVisibleRowChanged">firstVisibleRowChanged</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireFirstVisibleRowChanged(mParameters?: any): sap.ui.table.Table;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/group" data-sap-ui-target="sap.ui.table.Table/events/group">group</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireGroup(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/paste" data-sap-ui-target="sap.ui.table.Table/events/paste">paste</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected firePaste(mParameters?: any): boolean;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/rowSelectionChange" data-sap-ui-target="sap.ui.table.Table/events/rowSelectionChange">rowSelectionChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireRowSelectionChange(mParameters?: any): sap.ui.table.Table;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.Table/events/sort" data-sap-ui-target="sap.ui.table.Table/events/sort">sort</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireSort(mParameters?: any): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAlternateRowColors" data-sap-ui-target="getAlternateRowColors">alternateRowColors</a>.</p><p>Enables alternating table row colors. Alternate row coloring is not available for the tree mode.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>alternateRowColors</code></p>
                 */
                getAlternateRowColors(): boolean;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Returns the control inside the cell with the given row index (in the <code>rows</code> aggregation) and column index (in the <code>columns</code> aggregation or in the list of visible columns only, depending on parameter <code>bVisibleColumnIndex</code>).</p>
                 * @param {number} iRowIndex <p>Index of row in the table's <code>rows</code> aggregation</p>
                 * @param {number} iColumnIndex <p>Index of column in the list of visible columns or in the <code>columns</code> aggregation, as indicated with <code>bVisibleColumnIndex</code></p>
                 * @param {boolean} bVisibleColumnIndex <p>If set to <code>true</code>, the given column index is interpreted as index in the list of visible columns, otherwise as index in the <code>columns</code> aggregation</p>
                 * @returns sap.ui.core.Control <p>Control inside the cell with the given row and column index or <code>null</code> if no such control exists</p>
                 */
                protected getCellControl(iRowIndex: number, iColumnIndex: number, bVisibleColumnIndex: boolean): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumnHeaderHeight" data-sap-ui-target="getColumnHeaderHeight">columnHeaderHeight</a>.</p><p>Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p><b>Note</b>: In a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="sap.ui.table.Column/methods/getMultiLabels">MultiLabel</a> scenario, the height is applied to each individual row of the table's header.</p>
                 * @returns number <p>Value of property <code>columnHeaderHeight</code></p>
                 */
                getColumnHeaderHeight(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumnHeaderVisible" data-sap-ui-target="getColumnHeaderVisible">columnHeaderVisible</a>.</p><p>Flag whether the column header is visible or not.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>columnHeaderVisible</code></p>
                 */
                getColumnHeaderVisible(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>Columns of the Table</p>
                 * @returns sap.ui.table.Column[] 
                 */
                getColumns(): sap.ui.table.Column[];
                /**
                 * <p>In contrast to the function <code>getFixedColumnCount</code> which returns the value of the property <code>fixedColumnCount</code>, this function returns the actual fixed column count computed based on the table width.</p><p><b>Note:</b> The computed column count is only available after the table is fully rendered.</p>
                 * @returns number <p>The actual fixed column count computed based on the table width.</p>
                 */
                protected getComputedFixedColumnCount(): number;
                /**
                 * <p>Returns the context of a row by its index. Please note that for server-based models like OData, the supplied index might not have been loaded yet. If the context is not available at the client, the binding will trigger a backend request and request this single context. Although this API looks synchronous it may not return a context but load it and fire a change event on the binding.</p><p>For server-based models you should consider to only make this API call when the index is within the currently visible scroll area.</p>
                 * @param {number} iIndex <p>Index of the row to return the context from.</p>
                 * @returns sap.ui.model.Context|null <p>The context at this index or null</p>
                 */
                getContextByIndex(iIndex: number): sap.ui.model.Context | null;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getContextMenu" data-sap-ui-target="getContextMenu">contextMenu</a>.</p><p>Defines the context menu for the table.</p><p><b>Note:</b> The context menu will also be available for the row selectors as well as in the row actions cell of the table control.</p><p>The custom context menu will not be shown in the group header rows and the sum row of the <code>AnalyticalTable</code> control.</p><p>If this aggregation is set, then the <code>enableCellFilter</code> property will have no effect.</p>
                 * @returns sap.ui.core.IContextMenu 
                 */
                getContextMenu(): sap.ui.core.IContextMenu;
                /**
                 * <p>Gets content of aggregation <code>dragDropConfig</code> which defines the drag-and-drop configuration.</p><p>The following restrictions apply: <ul> <li>Columns cannot be configured to be draggable.</li> <li>The following rows are not draggable: <ul> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> <li>Columns cannot be configured to be droppable.</li> <li>The following rows are not droppable: <ul> <li>The dragged row itself</li> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> </ul></p>
                 * @returns undefined <p>sap.ui.core.dnd.DragDropBase[]</p>
                 */
                getDragDropConfig(): undefined;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>editable</code></p>
                 */
                getEditable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableBusyIndicator" data-sap-ui-target="getEnableBusyIndicator">enableBusyIndicator</a>.</p><p>If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.Control/methods/setBusy" data-sap-ui-target="sap.ui.core.Control/methods/setBusy">sap.ui.core.Control#setBusy</a>.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>enableBusyIndicator</code></p>
                 */
                getEnableBusyIndicator(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableCellFilter" data-sap-ui-target="getEnableCellFilter">enableCellFilter</a>.</p><p>Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>enableCellFilter</code></p>
                 */
                getEnableCellFilter(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableColumnFreeze" data-sap-ui-target="getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Flag whether to show or hide the column menu item to freeze or unfreeze a column.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>enableColumnFreeze</code></p>
                 */
                getEnableColumnFreeze(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableColumnReordering" data-sap-ui-target="getEnableColumnReordering">enableColumnReordering</a>.</p><p>Flag to enable or disable column reordering</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enableColumnReordering</code></p>
                 */
                getEnableColumnReordering(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableCustomFilter" data-sap-ui-target="getEnableCustomFilter">enableCustomFilter</a>.</p><p>Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>enableCustomFilter</code></p>
                 */
                getEnableCustomFilter(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableGrouping" data-sap-ui-target="getEnableGrouping">enableGrouping</a>.</p><p>Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.</p><p>The following restrictions apply: <ul> <li>Only client models are supported (e.g. <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.model.json.JSONModel" data-sap-ui-target="JSONModel">sap.ui.model.json.JSONModel</a>). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul></p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>enableGrouping</code></p>
                 */
                getEnableGrouping(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableSelectAll" data-sap-ui-target="getEnableSelectAll">enableSelectAll</a>.</p><p>Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enableSelectAll</code></p>
                 */
                getEnableSelectAll(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p><p>Extension section of the Table. If not set, no extension area will be rendered. Note: In case a <code>sap.m.Toolbar</code> is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getExtension(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFirstVisibleRow" data-sap-ui-target="getFirstVisibleRow">firstVisibleRow</a>.</p><p>First visible row.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>firstVisibleRow</code></p>
                 */
                getFirstVisibleRow(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedBottomRowCount" data-sap-ui-target="getFixedBottomRowCount">fixedBottomRowCount</a>.</p><p>Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>fixedBottomRowCount</code></p>
                 */
                getFixedBottomRowCount(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedColumnCount" data-sap-ui-target="getFixedColumnCount">fixedColumnCount</a>.</p><p>Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.</p><p><b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul></p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>fixedColumnCount</code></p>
                 */
                getFixedColumnCount(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedRowCount" data-sap-ui-target="getFixedRowCount">fixedRowCount</a>.</p><p>Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>fixedRowCount</code></p>
                 */
                getFixedRowCount(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p><p>Control or text of footer section of the Table (if not set it will be hidden)</p>
                 * @returns sap.ui.core.Control|string 
                 */
                getFooter(): sap.ui.core.Control | string;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getGroupBy" data-sap-ui-target="getGroupBy">groupBy</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getGroupBy(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getMinAutoRowCount" data-sap-ui-target="getMinAutoRowCount">minAutoRowCount</a>.</p><p>This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.</p><p>Default value is <code>5</code>.</p>
                 * @returns number <p>Value of property <code>minAutoRowCount</code></p>
                 */
                getMinAutoRowCount(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getNoData" data-sap-ui-target="getNoData">noData</a>.</p><p>The value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text.</p>
                 * @returns sap.ui.core.Control|string 
                 */
                getNoData(): sap.ui.core.Control | string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowActionCount" data-sap-ui-target="getRowActionCount">rowActionCount</a>.</p><p>Number of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>rowActionCount</code></p>
                 */
                getRowActionCount(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowActionTemplate" data-sap-ui-target="getRowActionTemplate">rowActionTemplate</a>.</p><p>Template for row actions. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowActionTemplate</code> for the changes to take effect.</p>
                 * @returns sap.ui.table.RowAction 
                 */
                getRowActionTemplate(): sap.ui.table.RowAction;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowHeight" data-sap-ui-target="getRowHeight">rowHeight</a>.</p><p>Row height in pixel.</p><p>In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p>In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Fixed" data-sap-ui-target="Fixed">Fixed</a> or <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Interactive" data-sap-ui-target="Interactive">Interactive</a>, the value defines the minimum height, and the actual height can increase based on the content. If the mode is <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Auto" data-sap-ui-target="Auto">Auto</a>, the value defines the actual height, and any content that doesn't fit is cut off.</p><p>If no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.</p>
                 * @returns number <p>Value of property <code>rowHeight</code></p>
                 */
                getRowHeight(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p><p>Rows of the Table</p>
                 * @returns sap.ui.table.Row[] 
                 */
                getRows(): sap.ui.table.Row[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowSettingsTemplate" data-sap-ui-target="getRowSettingsTemplate">rowSettingsTemplate</a>.</p><p>Template for row settings. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowSettingsTemplate</code> for the changes to take effect.</p>
                 * @returns sap.ui.table.RowSettings 
                 */
                getRowSettingsTemplate(): sap.ui.table.RowSettings;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getSelectedIndex" data-sap-ui-target="getSelectedIndex">selectedIndex</a>.</p><p>Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.</p><p>Default value is <code>-1</code>.</p>
                 * @returns number <p>Value of property <code>selectedIndex</code></p>
                 */
                getSelectedIndex(): number;
                /**
                 * <p>Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".</p>
                 * @returns number[] <p>Selected indices</p>
                 */
                getSelectedIndices(): number[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getSelectionBehavior" data-sap-ui-target="getSelectionBehavior">selectionBehavior</a>.</p><p>Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.</p><p>Default value is <code>RowSelector</code>.</p>
                 * @returns sap.ui.table.SelectionBehavior <p>Value of property <code>selectionBehavior</code></p>
                 */
                getSelectionBehavior(): sap.ui.table.SelectionBehavior;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getSelectionMode" data-sap-ui-target="getSelectionMode">selectionMode</a>.</p><p>Selection mode of the Table. This property controls whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance. When the selection mode is changed, the current selection is removed. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionMode.None</code> is set.</p><p>Default value is <code>MultiToggle</code>.</p>
                 * @returns sap.ui.table.SelectionMode <p>Value of property <code>selectionMode</code></p>
                 */
                getSelectionMode(): sap.ui.table.SelectionMode;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowColumnVisibilityMenu" data-sap-ui-target="getShowColumnVisibilityMenu">showColumnVisibilityMenu</a>.</p><p>Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>showColumnVisibilityMenu</code></p>
                 */
                getShowColumnVisibilityMenu(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowNoData" data-sap-ui-target="getShowNoData">showNoData</a>.</p><p>Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showNoData</code></p>
                 */
                getShowNoData(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowOverlay" data-sap-ui-target="getShowOverlay">showOverlay</a>.</p><p>Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>showOverlay</code></p>
                 */
                getShowOverlay(): boolean;
                /**
                 * <p>Gets sorted columns in the order of which the sort API at the table or column was called. Sorting on binding level is not reflected here.</p>
                 * @returns sap.ui.table.Column[] <p>Array of sorted columns</p>
                 */
                getSortedColumns(): sap.ui.table.Column[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getThreshold" data-sap-ui-target="getThreshold">threshold</a>.</p><p>The <code>threshold</code> defines how many additional (not yet visible records) shall be pre-fetched to enable smooth scrolling. The threshold is always added to the <code>visibleRowCount</code>. If the <code>visibleRowCount</code> is 10 and the <code>threshold</code> is 100, there will be 110 records fetched with the initial load. If the <code>threshold</code> is lower than the <code>visibleRowCount</code>, the <code>visibleRowCount</code> will be used as the <code>threshold</code>. If the value is 0 then the thresholding is disabled.</p><p>Default value is <code>100</code>.</p>
                 * @returns number <p>Value of property <code>threshold</code></p>
                 */
                getThreshold(): number;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Control or text of title section of the Table (if not set it will be hidden)</p>
                 * @returns sap.ui.core.Control|string 
                 */
                getTitle(): sap.ui.core.Control | string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getVisibleRowCount" data-sap-ui-target="getVisibleRowCount">visibleRowCount</a>.</p><p>Number of visible rows of the table.</p><p>Default value is <code>10</code>.</p>
                 * @returns number <p>Value of property <code>visibleRowCount</code></p>
                 */
                getVisibleRowCount(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getVisibleRowCountMode" data-sap-ui-target="getVisibleRowCountMode">visibleRowCountMode</a>.</p><p>Defines how the table handles the visible rows in the table.</p><p>In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.</p><p>In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. </p><h3>Limitations</h3><p> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul></p><p>In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.</p><p>Default value is <code>Fixed</code>.</p>
                 * @returns sap.ui.table.VisibleRowCountMode <p>Value of property <code>visibleRowCountMode</code></p>
                 */
                getVisibleRowCountMode(): sap.ui.table.VisibleRowCountMode;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the Table.</p><p>Default value is <code>auto</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.table.Column</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.table.Column} oColumn <p>The column whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfColumn(oColumn: sap.ui.table.Column): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oExtension <p>The extension whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfExtension(oExtension: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.table.Row</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.table.Row} oRow <p>The row whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfRow(oRow: sap.ui.table.Row): number;
                /**
                 * <p>Inserts a column into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p>
                 * @param {sap.ui.table.Column} oColumn <p>The column to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the column should be inserted at; for a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted at the last position</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertColumn(oColumn: sap.ui.table.Column, iIndex: number): sap.ui.table.Table;
                /**
                 * <p>Inserts a extension into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p>
                 * @param {sap.ui.core.Control} oExtension <p>The extension to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the extension should be inserted at; for a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value greater than the current size of the aggregation, the extension is inserted at the last position</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertExtension(oExtension: sap.ui.core.Control, iIndex: number): sap.ui.table.Table;
                /**
                 * <p>Inserts a row into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p>
                 * @param {sap.ui.table.Row} oRow <p>The row to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the row should be inserted at; for a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value greater than the current size of the aggregation, the row is inserted at the last position</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertRow(oRow: sap.ui.table.Row, iIndex: number): sap.ui.table.Table;
                /**
                 * <p>Checks whether an index is selected.</p>
                 * @param {number} iIndex <p>Index to check for selection</p>
                 * @returns boolean <p>Whether the index is selected</p>
                 */
                isIndexSelected(iIndex: number): boolean;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.table.Column[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllColumns(): sap.ui.table.Column[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllExtension(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.table.Row[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllRows(): sap.ui.table.Row[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a column from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p>
                 * @param {number | string | sap.ui.table.Column} vColumn <p>The column to remove or its index or id</p>
                 * @returns sap.ui.table.Column <p>The removed column or <code>null</code></p>
                 */
                removeColumn(vColumn: number | string | sap.ui.table.Column): sap.ui.table.Column;
                /**
                 * <p>Removes a extension from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getExtension" data-sap-ui-target="getExtension">extension</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vExtension <p>The extension to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed extension or <code>null</code></p>
                 */
                removeExtension(vExtension: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a row from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a>.</p>
                 * @param {number | string | sap.ui.table.Row} vRow <p>The row to remove or its index or id</p>
                 * @returns sap.ui.table.Row <p>The removed row or <code>null</code></p>
                 */
                removeRow(vRow: number | string | sap.ui.table.Row): sap.ui.table.Row;
                /**
                 * <p>Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection.</p>
                 * @param {number} iIndexFrom <p>Index from which the deselection should start</p>
                 * @param {number} iIndexTo <p>Index up to which to deselect</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                removeSelectionInterval(iIndexFrom: number, iIndexTo: number): sap.ui.table.Table;
                /**
                 * <p>Add all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                selectAll(): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getAlternateRowColors" data-sap-ui-target="getAlternateRowColors">alternateRowColors</a>.</p><p>Enables alternating table row colors. Alternate row coloring is not available for the tree mode.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bAlternateRowColors <p>New value for property <code>alternateRowColors</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAlternateRowColors(bAlternateRowColors: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumnHeaderHeight" data-sap-ui-target="getColumnHeaderHeight">columnHeaderHeight</a>.</p><p>Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p><b>Note</b>: In a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Column/methods/getMultiLabels" data-sap-ui-target="sap.ui.table.Column/methods/getMultiLabels">MultiLabel</a> scenario, the height is applied to each individual row of the table's header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iColumnHeaderHeight <p>New value for property <code>columnHeaderHeight</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColumnHeaderHeight(iColumnHeaderHeight: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumnHeaderVisible" data-sap-ui-target="getColumnHeaderVisible">columnHeaderVisible</a>.</p><p>Flag whether the column header is visible or not.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bColumnHeaderVisible <p>New value for property <code>columnHeaderVisible</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColumnHeaderVisible(bColumnHeaderVisible: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getContextMenu" data-sap-ui-target="getContextMenu">contextMenu</a>.</p>
                 * @param {sap.ui.core.IContextMenu} oContextMenu <p>The contextMenu to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setContextMenu(oContextMenu: sap.ui.core.IContextMenu): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEditable(bEditable: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableBusyIndicator" data-sap-ui-target="getEnableBusyIndicator">enableBusyIndicator</a>.</p><p>If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.Control/methods/setBusy" data-sap-ui-target="sap.ui.core.Control/methods/setBusy">sap.ui.core.Control#setBusy</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bEnableBusyIndicator <p>New value for property <code>enableBusyIndicator</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableBusyIndicator(bEnableBusyIndicator: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableCellFilter" data-sap-ui-target="getEnableCellFilter">enableCellFilter</a>.</p><p>Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bEnableCellFilter <p>New value for property <code>enableCellFilter</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableCellFilter(bEnableCellFilter: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableColumnFreeze" data-sap-ui-target="getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Flag whether to show or hide the column menu item to freeze or unfreeze a column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bEnableColumnFreeze <p>New value for property <code>enableColumnFreeze</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableColumnFreeze(bEnableColumnFreeze: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableColumnReordering" data-sap-ui-target="getEnableColumnReordering">enableColumnReordering</a>.</p><p>Flag to enable or disable column reordering</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnableColumnReordering <p>New value for property <code>enableColumnReordering</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableColumnReordering(bEnableColumnReordering: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableCustomFilter" data-sap-ui-target="getEnableCustomFilter">enableCustomFilter</a>.</p><p>Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bEnableCustomFilter <p>New value for property <code>enableCustomFilter</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableCustomFilter(bEnableCustomFilter: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableGrouping" data-sap-ui-target="getEnableGrouping">enableGrouping</a>.</p><p>Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.</p><p>The following restrictions apply: <ul> <li>Only client models are supported (e.g. <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.model.json.JSONModel" data-sap-ui-target="JSONModel">sap.ui.model.json.JSONModel</a>). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bEnableGrouping <p>New value for property <code>enableGrouping</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableGrouping(bEnableGrouping: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getEnableSelectAll" data-sap-ui-target="getEnableSelectAll">enableSelectAll</a>.</p><p>Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnableSelectAll <p>New value for property <code>enableSelectAll</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnableSelectAll(bEnableSelectAll: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFirstVisibleRow" data-sap-ui-target="getFirstVisibleRow">firstVisibleRow</a>.</p><p>First visible row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iFirstVisibleRow <p>New value for property <code>firstVisibleRow</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFirstVisibleRow(iFirstVisibleRow: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedBottomRowCount" data-sap-ui-target="getFixedBottomRowCount">fixedBottomRowCount</a>.</p><p>Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iFixedBottomRowCount <p>New value for property <code>fixedBottomRowCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFixedBottomRowCount(iFixedBottomRowCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedColumnCount" data-sap-ui-target="getFixedColumnCount">fixedColumnCount</a>.</p><p>Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.</p><p><b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iFixedColumnCount <p>New value for property <code>fixedColumnCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFixedColumnCount(iFixedColumnCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFixedRowCount" data-sap-ui-target="getFixedRowCount">fixedRowCount</a>.</p><p>Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iFixedRowCount <p>New value for property <code>fixedRowCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFixedRowCount(iFixedRowCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getFooter" data-sap-ui-target="getFooter">footer</a>.</p>
                 * @param {sap.ui.core.Control | string} vFooter <p>The footer to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFooter(vFooter: sap.ui.core.Control | string): sap.ui.table.Table;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getGroupBy" data-sap-ui-target="getGroupBy">groupBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.table.Column} oGroupBy <p>ID of an element which becomes the new target of this groupBy association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setGroupBy(oGroupBy: sap.ui.core.ID | sap.ui.table.Column): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getMinAutoRowCount" data-sap-ui-target="getMinAutoRowCount">minAutoRowCount</a>.</p><p>This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>5</code>.</p>
                 * @param {number} iMinAutoRowCount <p>New value for property <code>minAutoRowCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinAutoRowCount(iMinAutoRowCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getNoData" data-sap-ui-target="getNoData">noData</a>.</p>
                 * @param {sap.ui.core.Control | string} vNoData <p>The noData to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setNoData(vNoData: sap.ui.core.Control | string): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowActionCount" data-sap-ui-target="getRowActionCount">rowActionCount</a>.</p><p>Number of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iRowActionCount <p>New value for property <code>rowActionCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRowActionCount(iRowActionCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowActionTemplate" data-sap-ui-target="getRowActionTemplate">rowActionTemplate</a>.</p>
                 * @param {sap.ui.table.RowAction} oRowActionTemplate <p>The rowActionTemplate to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRowActionTemplate(oRowActionTemplate: sap.ui.table.RowAction): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowHeight" data-sap-ui-target="getRowHeight">rowHeight</a>.</p><p>Row height in pixel.</p><p>In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p>In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Fixed" data-sap-ui-target="Fixed">Fixed</a> or <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Interactive" data-sap-ui-target="Interactive">Interactive</a>, the value defines the minimum height, and the actual height can increase based on the content. If the mode is <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.VisibleRowCountMode.Auto" data-sap-ui-target="Auto">Auto</a>, the value defines the actual height, and any content that doesn't fit is cut off.</p><p>If no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iRowHeight <p>New value for property <code>rowHeight</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRowHeight(iRowHeight: number): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRowSettingsTemplate" data-sap-ui-target="getRowSettingsTemplate">rowSettingsTemplate</a>.</p>
                 * @param {sap.ui.table.RowSettings} oRowSettingsTemplate <p>The rowSettingsTemplate to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRowSettingsTemplate(oRowSettingsTemplate: sap.ui.table.RowSettings): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getSelectedIndex" data-sap-ui-target="getSelectedIndex">selectedIndex</a>.</p><p>Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                 * @param {number} iSelectedIndex <p>New value for property <code>selectedIndex</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelectedIndex(iSelectedIndex: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getSelectionBehavior" data-sap-ui-target="getSelectionBehavior">selectionBehavior</a>.</p><p>Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>RowSelector</code>.</p>
                 * @param {sap.ui.table.SelectionBehavior} sSelectionBehavior <p>New value for property <code>selectionBehavior</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelectionBehavior(sSelectionBehavior: sap.ui.table.SelectionBehavior): sap.ui.table.Table;
                /**
                 * <p>Sets the given selection interval as selection. In case of single selection, only <code>iIndexTo</code> is selected.</p>
                 * @param {number} iIndexFrom <p>Index from which the selection should start</p>
                 * @param {number} iIndexTo <p>Index up to which to select</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelectionInterval(iIndexFrom: number, iIndexTo: number): sap.ui.table.Table;
                /**
                 * <p>Sets the selection mode. The current selection is lost.</p>
                 * @param {sap.ui.table.SelectionMode} sSelectionMode <p>the selection mode, see sap.ui.table.SelectionMode</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelectionMode(sSelectionMode: sap.ui.table.SelectionMode): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowColumnVisibilityMenu" data-sap-ui-target="getShowColumnVisibilityMenu">showColumnVisibilityMenu</a>.</p><p>Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bShowColumnVisibilityMenu <p>New value for property <code>showColumnVisibilityMenu</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowColumnVisibilityMenu(bShowColumnVisibilityMenu: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowNoData" data-sap-ui-target="getShowNoData">showNoData</a>.</p><p>Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowNoData <p>New value for property <code>showNoData</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowNoData(bShowNoData: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getShowOverlay" data-sap-ui-target="getShowOverlay">showOverlay</a>.</p><p>Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bShowOverlay <p>New value for property <code>showOverlay</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowOverlay(bShowOverlay: boolean): sap.ui.table.Table;
                /**
                 * <p>Sets the threshold value, which will be added to all data requests in case the Table is bound against an OData service.</p>
                 * @param {number} iThreshold <p>The threshold</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setThreshold(iThreshold: number): sap.ui.table.Table;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                 * @param {sap.ui.core.Control | string} vTitle <p>The title to set</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitle(vTitle: sap.ui.core.Control | string): sap.ui.table.Table;
                /**
                 * <p>Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the <code>title</code> attribute of this Element) or an instance of <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.TooltipBase" data-sap-ui-target="TooltipBase">sap.ui.core.TooltipBase</a>.</p><p>If a new tooltip is set, any previously set tooltip is deactivated.</p><p>Please note that tooltips are not rendered for the table. The tooltip property will be set but it won't effect the DOM.</p>
                 * @param {string | sap.ui.core.TooltipBase} vTooltip <p>The tooltip</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTooltip(vTooltip: string | sap.ui.core.TooltipBase): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getVisibleRowCount" data-sap-ui-target="getVisibleRowCount">visibleRowCount</a>.</p><p>Number of visible rows of the table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>10</code>.</p>
                 * @param {number} iVisibleRowCount <p>New value for property <code>visibleRowCount</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleRowCount(iVisibleRowCount: number): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getVisibleRowCountMode" data-sap-ui-target="getVisibleRowCountMode">visibleRowCountMode</a>.</p><p>Defines how the table handles the visible rows in the table.</p><p>In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.</p><p>In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. </p><h3>Limitations</h3><p> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul></p><p>In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Fixed</code>.</p>
                 * @param {sap.ui.table.VisibleRowCountMode} sVisibleRowCountMode <p>New value for property <code>visibleRowCountMode</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleRowCountMode(sVisibleRowCountMode: sap.ui.table.VisibleRowCountMode): sap.ui.table.Table;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the Table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.table.Table;
                /**
                 * <p>Sorts the given column ascending or descending.</p>
                 * @param {sap.ui.table.Column | undefined} oColumn <p>Column to be sorted or undefined to clear sorting</p>
                 * @param {sap.ui.table.SortOrder} oSortOrder <p>Sort order of the column (if undefined the default will be ascending)</p>
                 * @param {Boolean} bAdd <p>Set to true to add the new sort criterion to the existing sort criteria</p>
                 */
                sort(oColumn: sap.ui.table.Column | undefined, oSortOrder: sap.ui.table.SortOrder, bAdd: Boolean): void;
                /**
                 * <p>Unbinds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getColumns" data-sap-ui-target="getColumns">columns</a> from model data.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                unbindColumns(): sap.ui.table.Table;
                /**
                 * <p>Unbinds aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.Table/methods/getRows" data-sap-ui-target="getRows">rows</a> from model data.</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                unbindRows(): sap.ui.table.Table;
            }
            /**
             * <p>The TablePersoController can be used to connect a table with a persistence service.</p>
             */
            export class TablePersoController extends sap.ui.base.ManagedObject {
                /**
                 * <p>Constructor for a new TablePersoController.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getAutoSave" data-sap-ui-target="getAutoSave">autoSave</a>.</p><p>Auto save state</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>autoSave</code></p>
                 */
                getAutoSave(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getCustomDataKey" data-sap-ui-target="getCustomDataKey">customDataKey</a>.</p><p>By defining a custom data key the <code>TablePersoController</code> will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.</p><p>Default value is <code>persoKey</code>.</p>
                 * @returns string <p>Value of property <code>customDataKey</code></p>
                 */
                getCustomDataKey(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getPersoService" data-sap-ui-target="getPersoService">persoService</a>.</p><p>Personalization Service object. Needs to have the following methods: <ul> <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> </ul></p>
                 * @returns any <p>Value of property <code>persoService</code></p>
                 */
                getPersoService(): any;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getTable" data-sap-ui-target="getTable">table</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getTable(): sap.ui.core.ID;
                /**
                 * <p>Opens the personalization dialog for the Table to modify the visibility and the order of the columns.</p><p><i>Using this functionality will require to load the sap.m library because the personalization dialog is only available in this library for now.</i></p>
                 * @param {any} mSettings 
                 */
                openDialog(mSettings: any): void;
                /**
                 * <p>Refresh the personalizations (reloads data from service).</p>
                 * @returns any <p><code>jQuery Promise</code> which is resolved once the refresh is finished</p>
                 */
                refresh(): any;
                /**
                 * <p>Saves the current personalization state.</p>
                 * @returns any <p><code>jQuery Promise</code> which is resolved once the save is finished</p>
                 */
                savePersonalizations(): any;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getAutoSave" data-sap-ui-target="getAutoSave">autoSave</a>.</p><p>Auto save state</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bAutoSave <p>New value for property <code>autoSave</code></p>
                 * @returns sap.ui.table.TablePersoController <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAutoSave(bAutoSave: boolean): sap.ui.table.TablePersoController;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getCustomDataKey" data-sap-ui-target="getCustomDataKey">customDataKey</a>.</p><p>By defining a custom data key the <code>TablePersoController</code> will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>persoKey</code>.</p>
                 * @param {string} sCustomDataKey <p>New value for property <code>customDataKey</code></p>
                 * @returns sap.ui.table.TablePersoController <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setCustomDataKey(sCustomDataKey: string): sap.ui.table.TablePersoController;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getPersoService" data-sap-ui-target="getPersoService">persoService</a>.</p><p>Personalization Service object. Needs to have the following methods: <ul> <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oPersoService <p>New value for property <code>persoService</code></p>
                 * @returns sap.ui.table.TablePersoController <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPersoService(oPersoService: any): sap.ui.table.TablePersoController;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TablePersoController/methods/getTable" data-sap-ui-target="getTable">table</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.table.Table} oTable <p>ID of an element which becomes the new target of this table association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.table.TablePersoController <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTable(oTable: sap.ui.core.ID | sap.ui.table.Table): sap.ui.table.TablePersoController;
            }
            /**
             * <p>Different modes for setting the auto expand mode on tree or analytical bindings.</p>
             */
            export enum TreeAutoExpandMode {
            }
            /**
             * <p>The TreeTable control provides a comprehensive set of features to display hierarchical data.<br><br><span>Documentation links:</span><ul><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/a05fe0659b9c49729168a48697ce0000" data-sap-ui-target="a05fe0659b9c49729168a48697ce0000">sap.ui.table.TreeTable</a></li><li><a class="jsdoclink scrollToMethod" target="_self" href="#/topic/148892ff9aea4a18b912829791e38f3e" data-sap-ui-target="148892ff9aea4a18b912829791e38f3e">Tables: Which One Should I Choose?</a></li></ul></p>
             */
            export class TreeTable extends sap.ui.table.Table {
                /**
                 * <p>Constructor for a new TreeTable.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds the given selection interval to the selection. In case of single selection, only <code>iIndexTo</code> is added to the selection. Invisible nodes (collapsed child nodes) will not be regarded.</p><p>Please also take notice of the fact, that "addSelectionInterval" does not change any other selection. To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".</p>
                 * @param {number} iIndexFrom <p>Index from which the selection should start</p>
                 * @param {number} iIndexTo <p>Index up to which to select</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSelectionInterval(iIndexFrom: number, iIndexTo: number): sap.ui.table.Table;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.TreeTable/events/toggleOpenState" data-sap-ui-target="sap.ui.table.TreeTable/events/toggleOpenState">toggleOpenState</a> event of this <code>sap.ui.table.TreeTable</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.TreeTable</code> itself.</p><p>Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.TreeTable</code> itself</p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachToggleOpenState(oData: any, fnFunction: Function, oListener?: any): sap.ui.table.TreeTable;
                /**
                 * <p>Collapses one or more rows.</p>
                 * @param {number | number[]} vRowIndex <p>A single index or an array of indices of the rows to be collapsed</p>
                 * @returns sap.ui.table.TreeTable <p><code>this</code> to allow method chaining</p>
                 */
                collapse(vRowIndex: number | number[]): sap.ui.table.TreeTable;
                /**
                 * <p>Collapses all nodes (and lower if collapseRecursive is activated)</p>
                 * @returns sap.ui.table.TreeTable <p><code>this</code> to allow method chaining</p>
                 */
                collapseAll(): sap.ui.table.TreeTable;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.TreeTable/events/toggleOpenState" data-sap-ui-target="sap.ui.table.TreeTable/events/toggleOpenState">toggleOpenState</a> event of this <code>sap.ui.table.TreeTable</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachToggleOpenState(fnFunction: Function, oListener: any): sap.ui.table.TreeTable;
                /**
                 * <p>Expands one or more rows.</p>
                 * @param {number | number[]} vRowIndex <p>A single index or an array of indices of the rows to be expanded</p>
                 * @returns sap.ui.table.TreeTable <p><code>this</code> to allow method chaining</p>
                 */
                expand(vRowIndex: number | number[]): sap.ui.table.TreeTable;
                /**
                 * <p>Expands all nodes starting from the root level to the given level 'iLevel'.</p><p>Only supported with ODataModel v2, when running in OperationMode.Client or OperationMode.Auto. Fully supported for <code>sap.ui.model.ClientTreeBinding</code>, e.g. if you are using a <code>sap.ui.model.json.JSONModel</code>.</p><p>Please also see <code>sap.ui.model.odata.OperationMode</code>.</p>
                 * @param {number} iLevel <p>the level to which the trees shall be expanded</p>
                 * @returns sap.ui.table.TreeTable <p>a reference on the TreeTable control, can be used for chaining</p>
                 */
                expandToLevel(iLevel: number): sap.ui.table.TreeTable;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.table.TreeTable/events/toggleOpenState" data-sap-ui-target="sap.ui.table.TreeTable/events/toggleOpenState">toggleOpenState</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireToggleOpenState(mParameters?: any): sap.ui.table.TreeTable;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getCollapseRecursive" data-sap-ui-target="getCollapseRecursive">collapseRecursive</a>.</p><p>Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>collapseRecursive</code></p>
                 */
                getCollapseRecursive(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getGroupHeaderProperty" data-sap-ui-target="getGroupHeaderProperty">groupHeaderProperty</a>.</p><p>The property name of the rows data which will be displayed as a group header if the group mode is enabled</p>
                 * @returns string <p>Value of property <code>groupHeaderProperty</code></p>
                 */
                getGroupHeaderProperty(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getRootLevel" data-sap-ui-target="getRootLevel">rootLevel</a>.</p><p>The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>rootLevel</code></p>
                 */
                getRootLevel(): number;
                /**
                 * <p>Returns an array containing the row indices of all selected tree nodes (ordered ascending).</p><p>Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.</p>
                 * @returns number[] <p>an array containing all selected indices</p>
                 */
                getSelectedIndices(): number[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getUseGroupMode" data-sap-ui-target="getUseGroupMode">useGroupMode</a>.</p><p>If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>useGroupMode</code></p>
                 */
                getUseGroupMode(): boolean;
                /**
                 * <p>Checks whether the row is expanded or collapsed.</p>
                 * @param {number} iRowIndex <p>The index of the row to be checked</p>
                 * @returns boolean <p><code>true</code> if the row is expanded, <code>false</code> if it is collapsed</p>
                 */
                isExpanded(iRowIndex: number): boolean;
                /**
                 * <p>Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection. Invisible nodes (collapsed child nodes) will not be regarded.</p>
                 * @param {number} iIndexFrom <p>Index from which the deselection should start</p>
                 * @param {number} iIndexTo <p>Index up to which to deselect</p>
                 * @returns sap.ui.table.Table <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                removeSelectionInterval(iIndexFrom: number, iIndexTo: number): sap.ui.table.Table;
                /**
                 * <p>Selects all available nodes/rows.</p><p>All rows/tree nodes that are locally stored on the client and that are part of the currently visible tree are selected. Additional rows or tree nodes that come into view through scrolling or paging are also selected immediately as soon as they get visible. However, <code>SelectAll</code> does not retrieve any data from the back end in order to improve performance and reduce the network traffic.</p>
                 * @returns sap.ui.table.TreeTable <p>a reference on the TreeTable control, can be used for chaining</p>
                 */
                selectAll(): sap.ui.table.TreeTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getCollapseRecursive" data-sap-ui-target="getCollapseRecursive">collapseRecursive</a>.</p><p>Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bCollapseRecursive <p>New value for property <code>collapseRecursive</code></p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setCollapseRecursive(bCollapseRecursive: boolean): sap.ui.table.TreeTable;
                /**
                 * <p>Setter for property <code>fixedRowCount</code>.</p><p><b>This property is not supportd for the TreeTable and will be ignored!</b></p><p>Default value is <code>0</code></p>
                 * @param {number} iRowCount <p>New value for property <code>fixedRowCount</code></p>
                 * @returns sap.ui.table.TreeTable <p><code>this</code> to allow method chaining</p>
                 */
                setFixedRowCount(iRowCount: number): sap.ui.table.TreeTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getGroupHeaderProperty" data-sap-ui-target="getGroupHeaderProperty">groupHeaderProperty</a>.</p><p>The property name of the rows data which will be displayed as a group header if the group mode is enabled</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sGroupHeaderProperty <p>New value for property <code>groupHeaderProperty</code></p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setGroupHeaderProperty(sGroupHeaderProperty: string): sap.ui.table.TreeTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getRootLevel" data-sap-ui-target="getRootLevel">rootLevel</a>.</p><p>The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iRootLevel <p>New value for property <code>rootLevel</code></p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRootLevel(iRootLevel: number): sap.ui.table.TreeTable;
                /**
                 * <p>Sets the selected index In a TreeTable you can only select indices, which correspond to the currently visualized tree. Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because they do not correspond to a TreeTable row.</p>
                 * @param {number} iRowIndex <p>The row index which will be selected (if existing)</p>
                 * @returns sap.ui.table.TreeTable <p>a reference on the TreeTable control, can be used for chaining</p>
                 */
                setSelectedIndex(iRowIndex: number): sap.ui.table.TreeTable;
                /**
                 * <p>Sets the selection of the TreeTable to the given range (including boundaries). Beware: The previous selection will be lost/overridden. If this is not wanted, please use "addSelectionInterval" and "removeSelectionInterval". Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable.</p>
                 * @param {number} iFromIndex <p>the start index of the selection range</p>
                 * @param {number} iToIndex <p>the end index of the selection range</p>
                 * @returns sap.ui.table.TreeTable <p>a reference on the TreeTable control, can be used for chaining</p>
                 */
                setSelectionInterval(iFromIndex: number, iToIndex: number): sap.ui.table.TreeTable;
                /**
                 * <p>Allows to hide the tree structure (tree icons, indentation) in tree mode (property <code>useGroupMode</code> is set to <code>false</code>).</p><p>This option might be useful in some scenarios when actually a tree table must be used but under certain conditions the data is not hierarchical, because it contains leafs only.</p><p><b>Note:</b> In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy is not visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical data.</p>
                 * @param {boolean} bFlat <p>If set to <code>true</code>, the flat mode is enabled</p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected setUseFlatMode(bFlat: boolean): sap.ui.table.TreeTable;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.table.TreeTable/methods/getUseGroupMode" data-sap-ui-target="getUseGroupMode">useGroupMode</a>.</p><p>If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bUseGroupMode <p>New value for property <code>useGroupMode</code></p>
                 * @returns sap.ui.table.TreeTable <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUseGroupMode(bUseGroupMode: boolean): sap.ui.table.TreeTable;
            }
            /**
             * <p>VisibleRowCountMode of the table</p>
             */
            export enum VisibleRowCountMode {
                /**
                 * <p>The table automatically fills the height of the surrounding container.</p>
                 */
                Auto = "Auto",
                /**
                 * <p>The table always has as many rows as defined in the <code>visibleRowCount</code> property.</p>
                 */
                Fixed = "Fixed",
                /**
                 * <p>The user can change the <code>visibleRowCount</code> by dragging a resizer.</p>
                 */
                Interactive = "Interactive",
            }
        }
    }
}
