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
		 * <p><p>OpenUI5 library that contains metadata-driven composite controls, which can be extended for use with any SAPUI5 model and data protocol.</p></p>
		 */
		namespace mdc {
			/**
			 * <p>The <code>Chart</code> control creates a chart based on metadata and the configuration specified.<br></p><p><b>Note:</b> The <code>Chart</code> control acts as a wrapper that is used to enhance an instance of a given chart control framework (in the following texts referred to as inner chart) with functionalities, such as a <code>toolbar</code>, <code>p13n</code>, and <code>VariantManagement</code>. The inner chart instance and its configuration must be provided via an implementation of a <code>ChartDelegate</code> module.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/52d065ab8bb740c58c834a0c985e3b9e">Chart Building Block (OData V4)</a></li></ul></p>
			 */
			export class Chart extends sap.ui.mdc.Control implements sap.ui.mdc.IFilterSource, sap.ui.mdc.IxState {
				/**
				 * <p>Constructor for a new Chart.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no id is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some chartAction to the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p>
				 * @param {sap.ui.core.Control} oChartAction <p>The chartAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addChartAction(oChartAction: sap.ui.core.Control): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Chart#events/selectionDetailsActionPressed">selectionDetailsActionPressed</a> event of this <code>sap.ui.mdc.Chart</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Chart</code> itself.</p><p>This event is fired when a <code>SelectionDetailsAction</code> is pressed.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Chart</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachSelectionDetailsActionPressed(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Destroys all the chartActions in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyChartActions(): this;
				/**
				 * <p>Destroys the noData in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getNoData">noData</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyNoData(): this;
				/**
				 * <p>Destroys the selectionDetailsActions in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getSelectionDetailsActions">selectionDetailsActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroySelectionDetailsActions(): this;
				/**
				 * <p>Destroys the variant in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getVariant">variant</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyVariant(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Chart#events/selectionDetailsActionPressed">selectionDetailsActionPressed</a> event of this <code>sap.ui.mdc.Chart</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachSelectionDetailsActionPressed(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Chart#events/selectionDetailsActionPressed">selectionDetailsActionPressed</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireSelectionDetailsActionPressed(mParameters?: any): this;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getActions">actions</a>.</p><p>This aggregation describes actions that are added to the chart toolbar.<br> For more information, see <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction">sap.ui.mdc.actiontoolbar.ActionToolbarAction</a>.</p><p><b>Note:</b> This aggregation is managed by the control, can only be populated during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired effects. Changes of the aggregation have to be made with the <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a>.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getActions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getAutoBindOnInit">autoBindOnInit</a>.</p><p>If set to <code>true</code>, the chart is automatically bound after initialization.<br> If set to <code>false</code>, the chart is bound after the first call to <code>rebind</code>.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>autoBindOnInit</code></p>
				 */
				getAutoBindOnInit(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p><p>Additional chart-related actions that are positioned together with other chart-generated actions, based on the <a target="_self" href="api/sap.ui.mdc.chart.ActionLayoutData">ActionLayoutData</a> provided.</p><p><b>Note:</b> All actions should use layout data of the <a target="_self" href="api/sap.ui.mdc.chart.ActionLayoutData">ActionLayoutData</a> type to ensure correct ordering. Actions that do not use this layout data will be placed after the chart-generated actions.<br> <b>Note:</b> As with other chart-generated actions, these actions are excluded from the UI adaptation.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getChartActions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartType">chartType</a>.</p><p>Specifies the type of chart to be created by the <code>Chart</code> control.</p><p>Default value is <code>"column"</code>.</p>
				 * @returns string <p>Value of property <code>chartType</code></p>
				 */
				getChartType(): string;
				/**
				 * <p>Getter for <code>Conditions</code> set in the personalization settings.</p>
				 * @returns any <p>Filters set in the chart</p>
				 */
				getConditions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/ChartDelegate">ChartDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/BaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.Chart#methods/getFilter">filter</a>, or <code>null</code>.</p>
				 * @returns sap.ui.core.ID | null 
				 */
				getFilter(): sap.ui.core.ID | null;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeader">header</a>.</p><p>Specifies header text that is shown in the chart.</p>
				 * @returns string <p>Value of property <code>header</code></p>
				 */
				getHeader(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header.<br> For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>Default value is <code>Auto</code>.</p>
				 * @returns sap.ui.core.TitleLevel <p>Value of property <code>headerLevel</code></p>
				 */
				getHeaderLevel(): sap.ui.core.TitleLevel;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderStyle">headerStyle</a>.</p><p>Defines style of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setTitleStyle">sap.m.Title#setTitleStyle</a>.</p>
				 * @returns sap.ui.core.TitleLevel <p>Value of property <code>headerStyle</code></p>
				 */
				getHeaderStyle(): sap.ui.core.TitleLevel;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderVisible">headerVisible</a>.</p><p>Determines whether the header text is shown in the chart. Regardless of its value, the given header text is used to label the chart correctly for accessibility purposes.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>headerVisible</code></p>
				 */
				getHeaderVisible(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeight">height</a>.</p><p>Defines the height of the chart.</p><p>Default value is <code>"100%"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
				 */
				getHeight(): sap.ui.core.CSSSize;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getIgnoreToolbarActions">ignoreToolbarActions</a>.</p><p>Specifies which actions must not be available in the chart's toolbar.</p><p>Default value is <code>[]</code>.</p>
				 * @returns sap.ui.mdc.enums.ChartToolbarActionType[] <p>Value of property <code>ignoreToolbarActions</code></p>
				 */
				getIgnoreToolbarActions(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getItems">items</a>.</p><p>This property describes the measures and dimensions visible in the chart. Changes in the personalization are also reflected here.</p><p><b>Note:</b> This aggregation is managed by the control, can only be populated during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired effects. Changes of the aggregation have to be made with the <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a>.</p>
				 * @returns sap.ui.mdc.chart.Item[] 
				 */
				getItems(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getLegendVisible">legendVisible</a>.</p><p>Enables the legend of the chart.<br> <b>Note:</b> The setter calls <code>setLegendVisible</code> of the delegate class.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>legendVisible</code></p>
				 */
				getLegendVisible(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getMinHeight">minHeight</a>.</p><p>Defines the minimum height of the chart.</p><p>Default value is <code>"400px"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>minHeight</code></p>
				 */
				getMinHeight(): sap.ui.core.CSSSize;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of the chart.</p><p>Default value is <code>"240px"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>minWidth</code></p>
				 */
				getMinWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getNoData">noData</a>.</p><p>Defines the custom visualization if there is no data available.<br> This control will be displayed on top of the chart when no data is visible inside the chart.<br> <b>Note:</b> If both a <code>noDataText</code> property and a <code>noData</code> aggregation are provided, the <code>noData</code> aggregation takes priority.<br> If the <code>noData</code> aggregation is undefined or set to null, the <code>noDataText</code> property is used instead.</p>
				 * @returns sap.ui.core.Control 
				 */
				getNoData(): sap.ui.core.Control;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getNoDataText">noDataText</a>.</p><p>Defines the no data text shown in the chart.</p><p>Default value is <code>"No data"</code>.</p>
				 * @returns string <p>Value of property <code>noDataText</code></p>
				 */
				getNoDataText(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getP13nMode">p13nMode</a>.</p><p>Specifies the personalization options available for the chart.<br> <b>Note:</b> The order of the provided options does not influence the arrangement of the icons on the UI.</p><p>Default value is <code>[]</code>.</p>
				 * @returns sap.ui.mdc.enums.ChartP13nMode[] <p>Value of property <code>p13nMode</code></p>
				 */
				getP13nMode(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getSelectionDetailsActions">selectionDetailsActions</a>.</p><p>Feeds details popover actions for data point selection in the chart.<br> For more information, see <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions">SelectionDetailsActions</a>.</p>
				 * @returns sap.ui.mdc.chart.SelectionDetailsActions 
				 */
				getSelectionDetailsActions(): sap.ui.mdc.chart.SelectionDetailsActions;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getShowChartTooltip">showChartTooltip</a>.</p><p>Controls the visibility of the chart tooltip.<br> <b>Note:</b> If set to <code>true</code>, a call of the <code>delegate.setChartTooltipVisibility</code> is triggered and can be used to make the <code>Chart</code> tooltip visible.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showChartTooltip</code></p>
				 */
				getShowChartTooltip(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getShowSelectionDetails">showSelectionDetails</a>.</p><p>Enables the Details button in the chart toolbar.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showSelectionDetails</code></p>
				 */
				getShowSelectionDetails(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getWidth">width</a>.</p><p>Defines the width of the chart.</p><p>Default value is <code>"100%"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
				 */
				getWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oAction <p>The action whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfAction(oAction: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oChartAction <p>The chartAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfChartAction(oChartAction: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.mdc.chart.Item</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.mdc.chart.Item} oItem <p>The item whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfItem(oItem: sap.ui.mdc.chart.Item): number;
				/**
				 * <p>Inserts a chartAction into the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p>
				 * @param {sap.ui.core.Control} oChartAction <p>The chartAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the chartAction should be inserted at; for a negative value of <code>iIndex</code>, the chartAction is inserted at position 0; for a value greater than the current size of the aggregation, the chartAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertChartAction(oChartAction: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Executes a rebind considering the provided external and inbuilt filtering.</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after rebind is executed, and rejects if rebind cannot be executed, for example because there are invalid filters.</p>
				 */
				rebind(): Promise<any>;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllChartActions(): any;
				/**
				 * <p>Removes a chartAction from the aggregation <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vChartAction <p>The chartAction to remove or its index or id</p>
				 * @returns sap.ui.core.Control | null <p>The removed chartAction or <code>null</code></p>
				 */
				removeChartAction(vChartAction: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getAutoBindOnInit">autoBindOnInit</a>.</p><p>If set to <code>true</code>, the chart is automatically bound after initialization.<br> If set to <code>false</code>, the chart is bound after the first call to <code>rebind</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bAutoBindOnInit <p>New value for property <code>autoBindOnInit</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setAutoBindOnInit(bAutoBindOnInit?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/ChartDelegate">ChartDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/BaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.Chart#methods/getFilter">filter</a>.</p>
				 * @param {sap.ui.core.ID | sap.ui.mdc.IFilter} oFilter <p>ID of an element which becomes the new target of this filter association; alternatively, an element instance may be given</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFilter(oFilter: sap.ui.core.ID | sap.ui.mdc.IFilter): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeader">header</a>.</p><p>Specifies header text that is shown in the chart.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sHeader <p>New value for property <code>header</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeader(sHeader?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header.<br> For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
				 * @param {sap.ui.core.TitleLevel} sHeaderLevel <p>New value for property <code>headerLevel</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderLevel(sHeaderLevel?: sap.ui.core.TitleLevel): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderStyle">headerStyle</a>.</p><p>Defines style of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setTitleStyle">sap.m.Title#setTitleStyle</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {sap.ui.core.TitleLevel} sHeaderStyle <p>New value for property <code>headerStyle</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderStyle(sHeaderStyle: sap.ui.core.TitleLevel): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeaderVisible">headerVisible</a>.</p><p>Determines whether the header text is shown in the chart. Regardless of its value, the given header text is used to label the chart correctly for accessibility purposes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bHeaderVisible <p>New value for property <code>headerVisible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderVisible(bHeaderVisible?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getHeight">height</a>.</p><p>Defines the height of the chart.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeight(sHeight?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getIgnoreToolbarActions">ignoreToolbarActions</a>.</p><p>Specifies which actions must not be available in the chart's toolbar.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sIgnoreToolbarActions <p>New value for property <code>ignoreToolbarActions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIgnoreToolbarActions(sIgnoreToolbarActions?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getLegendVisible">legendVisible</a>.</p><p>Enables the legend of the chart.<br> <b>Note:</b> The setter calls <code>setLegendVisible</code> of the delegate class.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bLegendVisible <p>New value for property <code>legendVisible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setLegendVisible(bLegendVisible?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getMinHeight">minHeight</a>.</p><p>Defines the minimum height of the chart.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"400px"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sMinHeight <p>New value for property <code>minHeight</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMinHeight(sMinHeight?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of the chart.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"240px"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sMinWidth <p>New value for property <code>minWidth</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMinWidth(sMinWidth?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Chart#methods/getNoData">noData</a>.</p>
				 * @param {sap.ui.core.Control} oNoData <p>The noData to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setNoData(oNoData: sap.ui.core.Control): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getP13nMode">p13nMode</a>.</p><p>Specifies the personalization options available for the chart.<br> <b>Note:</b> The order of the provided options does not influence the arrangement of the icons on the UI.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sP13nMode <p>New value for property <code>p13nMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setP13nMode(sP13nMode?: any): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Chart#methods/getSelectionDetailsActions">selectionDetailsActions</a>.</p>
				 * @param {sap.ui.mdc.chart.SelectionDetailsActions} oSelectionDetailsActions <p>The selectionDetailsActions to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSelectionDetailsActions(oSelectionDetailsActions: sap.ui.mdc.chart.SelectionDetailsActions): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getShowChartTooltip">showChartTooltip</a>.</p><p>Controls the visibility of the chart tooltip.<br> <b>Note:</b> If set to <code>true</code>, a call of the <code>delegate.setChartTooltipVisibility</code> is triggered and can be used to make the <code>Chart</code> tooltip visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowChartTooltip <p>New value for property <code>showChartTooltip</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowChartTooltip(bShowChartTooltip?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getShowSelectionDetails">showSelectionDetails</a>.</p><p>Enables the Details button in the chart toolbar.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowSelectionDetails <p>New value for property <code>showSelectionDetails</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowSelectionDetails(bShowSelectionDetails?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Chart#methods/getVariant">variant</a>.</p>
				 * @param {sap.ui.fl.variants.VariantManagement} oVariant <p>The variant to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setVariant(oVariant: sap.ui.fl.variants.VariantManagement): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Chart#methods/getWidth">width</a>.</p><p>Defines the width of the chart.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setWidth(sWidth?: sap.ui.core.CSSSize): this;
			}
			/**
			 * <p><p>Defines the personalization mode of the chart.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'ChartP13nMode'.</p></p>
			 */
			export enum ChartP13nMode {
				/**
				 * <p>Filter personalization is enabled.</p>
				 */
				Filter = "Filter",
				/**
				 * <p>Item personalization is enabled.</p>
				 */
				Item = "Item",
				/**
				 * <p>Sort personalization is enabled.</p>
				 */
				Sort = "Sort",
				/**
				 * <p>Chart type personalization is enabled.</p>
				 */
				Type = "Type",
			}
			/**
			 * <p><p>Defines the types of chart actions in the toolbar.<br> Can be used to remove some of the default <code>ToolbarAction</code>. For more information, see <a target="_self" href="api/sap.ui.mdc.Chart#methods/ignoreToolbarActions">sap.ui.mdc.Chart#ignoreToolbarActions</a>.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'ChartToolbarActionType'.</p></p>
			 */
			export enum ChartToolbarActionType {
				/**
				 * <p>Drill-down and drill-up action.</p>
				 */
				DrillDownUp = "DrillDownUp",
				/**
				 * <p>Legend action.</p>
				 */
				Legend = "Legend",
				/**
				 * <p>Zoom-in and zoom-out action.</p>
				 */
				ZoomInOut = "ZoomInOut",
			}
			/**
			 * <p>The base class for controls in the <code>sap.ui.mdc</code> library providing delegate-related functionality (see <a target="_self" href="api/sap.ui.mdc.mixin.DelegateMixin">sap.ui.mdc.mixin.DelegateMixin</a>).</p>
			 */
			export abstract class Control extends sap.ui.core.Control {
				/**
				 * <p>Creates and initializes a new control with the given <code>sId</code> and settings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>Optional ID for the new control; generated automatically if no non-empty ID is given <b>Note:</b> This can be omitted, no matter whether <code>mSettings</code> is given.</p>
				 * @param {any} mSettings <p>Object with initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Provides access to the delegate initialization <code>Promise</code>. <b>Note:</b> <code>initControlDelegate</code> must be called to start the delegate initialization</p>
				 * @returns any <p>Returns a <code>Promise</code> reflecting the delegate initialization</p>
				 */
				protected awaitControlDelegate(): any;
				/**
				 * <p>Provides access to the property helper initialization <code>Promise</code>.</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected awaitPropertyHelper(): any;
				/**
				 * <p>Finalize the propertyHelper using the control's delegate.</p>
				 * @param {any} aProperties <p>optional set of initial properties</p>
				 * @param {any} bFinal <p>flag for mark the propertyHelper as final</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected finalizePropertyHelper(aProperties?: any, bFinal?: any): any;
				/**
				 * <p>Returns the delegate instance, if available.</p>
				 * @returns any <p><code>typeUtil</code> made available by a delegate module</p>
				 */
				getControlDelegate(): any;
				/**
				 * <p>Returns the payload object set for the delegate property.</p>
				 * @returns any <p>Payload set for delegate property</p>
				 */
				getPayload(): any;
				/**
				 * <p>Returns the property helper instance, if available.</p>
				 * @returns any <p>The property helper</p>
				 */
				protected getPropertyHelper(): any;
				/**
				 * <p>Returns the <code>TypeMap</code> made available by a delegate module.</p>
				 * @returns any <p><code>TypeMap</code> object</p>
				 */
				getTypeMap(): any;
				/**
				 * <p>Loads and initializes the delegate module related to the enhanced control.</p>
				 * @param {any} oPreloadedModule <p>Preloaded delegate module</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves the delegate module, if available</p>
				 */
				protected initControlDelegate(oPreloadedModule?: any): any;
				/**
				 * <p>Loads and initializes the property helper related to the enhanced control.</p>
				 * @param {any} PropertyHelperClass <p>Custom property helper class</p>
				 * @param {any} aProperties <p>optional set of initial properties</p>
				 * @param {any} bFinal <p>flag for mark the propertyHelper as final</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected initPropertyHelper(PropertyHelperClass?: any, aProperties?: any, bFinal?: any): any;
				/**
				 * <p>Indicates if the control's propertyHelper already contains all available properties</p>
				 * @returns boolean <p>Returns a <code>boolean</code> indicating the propertyHelper's final state</p>
				 */
				protected isPropertyHelperFinal(): boolean;
			}
			/**
			 */
			export interface DelegateConfig {
				/**
				 * <p>Delegate module path</p>
				 */
				name: any;
				/**
				 * <p>defines application-specific information that can be used in the given delegate</p>
				 */
				payload?: any;
			}
			/**
			 * <p>The base class for composite elements in the <code>sap.ui.mdc</code> library providing delegate-related functionality (see <a target="_self" href="api/sap.ui.mdc.mixin.DelegateMixin">sap.ui.mdc.mixin.DelegateMixin</a>).</p>
			 */
			export abstract class Element extends sap.ui.core.Element {
				/**
				 * <p>Creates and initializes a new element with the given <code>sId</code> and settings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>Optional ID for the new element; generated automatically if no non-empty ID is given <b>Note:</b> This can be omitted, no matter whether <code>mSettings</code> is given.</p>
				 * @param {any} mSettings <p>Object with initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Provides access to the delegate initialization <code>Promise</code>. <b>Note:</b> <code>initControlDelegate</code> must be called to start the delegate initialization</p>
				 * @returns any <p>Returns a <code>Promise</code> reflecting the delegate initialization</p>
				 */
				protected awaitControlDelegate(): any;
				/**
				 * <p>Provides access to the property helper initialization <code>Promise</code>.</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected awaitPropertyHelper(): any;
				/**
				 * <p>Finalize the propertyHelper using the control's delegate.</p>
				 * @param {any} aProperties <p>optional set of initial properties</p>
				 * @param {any} bFinal <p>flag for mark the propertyHelper as final</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected finalizePropertyHelper(aProperties?: any, bFinal?: any): any;
				/**
				 * <p>Returns the delegate instance, if available.</p>
				 * @returns any <p><code>typeUtil</code> made available by a delegate module</p>
				 */
				getControlDelegate(): any;
				/**
				 * <p>Returns the payload object set for the delegate property.</p>
				 * @returns any <p>Payload set for delegate property</p>
				 */
				getPayload(): any;
				/**
				 * <p>Returns the property helper instance, if available.</p>
				 * @returns any <p>The property helper</p>
				 */
				protected getPropertyHelper(): any;
				/**
				 * <p>Returns the <code>TypeMap</code> made available by a delegate module.</p>
				 * @returns any <p><code>TypeMap</code> object</p>
				 */
				getTypeMap(): any;
				/**
				 * <p>Loads and initializes the delegate module related to the enhanced control.</p>
				 * @param {any} oPreloadedModule <p>Preloaded delegate module</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves the delegate module, if available</p>
				 */
				protected initControlDelegate(oPreloadedModule?: any): any;
				/**
				 * <p>Loads and initializes the property helper related to the enhanced control.</p>
				 * @param {any} PropertyHelperClass <p>Custom property helper class</p>
				 * @param {any} aProperties <p>optional set of initial properties</p>
				 * @param {any} bFinal <p>flag for mark the propertyHelper as final</p>
				 * @returns any <p>Returns a <code>Promise</code> that resolves with the property helper</p>
				 */
				protected initPropertyHelper(PropertyHelperClass?: any, aProperties?: any, bFinal?: any): any;
				/**
				 * <p>Indicates if the control's propertyHelper already contains all available properties</p>
				 * @returns boolean <p>Returns a <code>boolean</code> indicating the propertyHelper's final state</p>
				 */
				protected isPropertyHelperFinal(): boolean;
			}
			/**
			 * <p>The <code>Field</code> control is used to bind its value to data of a certain data type. Based on the data type settings, a default control is rendered by the <code>Field</code> as follows:</p><p><ul> <li>In display mode, usually a <a target="_self" href="api/sap.m.Text">Text</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, an <a target="_self" href="api/sap.m.ExpandableText">ExpandableText</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getFieldInfo">fieldInfo</a> is set and it is configured to be triggerable, a <a target="_self" href="api/sap.m.Link">Link</a> control is rendered. The <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> property is forwarded to the <a target="_self" href="api/sap.m.Link#methods/setWrapping">wrapping</a> property of the <a target="_self" href="api/sap.m.Link">Link</a> control.</li> <li>In edit mode, usually an <a target="_self" href="api/sap.m.Input">Input</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, a <a target="_self" href="api/sap.m.TextArea">TextArea</a> control is rendered.</li> <li>If a date type is used, a <a target="_self" href="api/sap.m.DatePicker">DatePicker</a> control is rendered.</li> <li>If a date/time type is used, a <a target="_self" href="api/sap.m.DateTimePicker">DateTimePicker</a> control is rendered.</li> <li>If a time type is used, a <a target="_self" href="api/sap.m.TimePicker">TimePicker</a> control is rendered.</li> <li>If a currency or unit type is used, two <a target="_self" href="api/sap.m.Input">Input</a> controls are rendered, one for number and one for unit.</li> </ul><br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/5260b9ca249f465ab33769b9edb442aa">Field Building Block (OData V4)</a></li></ul></p>
			 */
			export class Field extends sap.ui.mdc.field.FieldBase {
				/**
				 * <p>Constructor for a new <code>Field</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Field#events/change">change</a> event of this <code>sap.ui.mdc.Field</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Field</code> itself.</p><p>This event is fired when the <a target="_self" href="api/sap.ui.mdc.Field#methods/getValue">value</a> property of the field is changed by user interaction.</p><p><b>Note</b> This event is only triggered if the used content control has a change event.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Field</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachChange(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Binds property <a target="_self" href="api/sap.ui.mdc.Field#methods/getAdditionalValue">additionalValue</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
				 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				bindAdditionalValue(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
				/**
				 * <p>Binds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
				 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				bindConditions(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
				/**
				 * <p>Binds property <a target="_self" href="api/sap.ui.mdc.Field#methods/getValue">value</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
				 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				bindValue(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Field#events/change">change</a> event of this <code>sap.ui.mdc.Field</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachChange(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Field#events/change">change</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireChange(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Field#methods/getAdditionalValue">additionalValue</a>.</p><p>The additional value of the field.</p><p>To display the key and the description in one field, the description must be set on the <code>additionalValue</code> property.</p><p><b>Warning:</b> Don't use a <code>Formatter</code> in the binding of this property since this only allows one-way binding. Therefore, no parsing of user input and no model updates are possible.</p>
				 * @returns any <p>Value of property <code>additionalValue</code></p>
				 */
				getAdditionalValue(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>Default value is <code>[]</code>.</p>
				 * @returns object[] <p>Value of property <code>conditions</code></p>
				 */
				getConditions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
				 * @returns string <p>Value of property <code>dataType</code></p>
				 */
				getDataType(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
				 * @returns any <p>Value of property <code>dataTypeConstraints</code></p>
				 */
				getDataTypeConstraints(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
				 * @returns any <p>Value of property <code>dataTypeFormatOptions</code></p>
				 */
				getDataTypeFormatOptions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Field#methods/getValue">value</a>.</p><p>The value of the field.</p><p>To display the key and the description in one field, the key must be set on the <code>value</code> property.</p><p><b>Warning:</b> Don't use a <code>Formatter</code> in the binding of this property since this only allows one-way binding. Therefore, no parsing of user input and no model updates are possible.</p>
				 * @returns any <p>Value of property <code>value</code></p>
				 */
				getValue(): any;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Field#methods/getAdditionalValue">additionalValue</a>.</p><p>The additional value of the field.</p><p>To display the key and the description in one field, the description must be set on the <code>additionalValue</code> property.</p><p><b>Warning:</b> Don't use a <code>Formatter</code> in the binding of this property since this only allows one-way binding. Therefore, no parsing of user input and no model updates are possible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oAdditionalValue <p>New value for property <code>additionalValue</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setAdditionalValue(oAdditionalValue?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sConditions <p>New value for property <code>conditions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setConditions(sConditions?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
				 * @param {string} sDataType <p>New value for property <code>dataType</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataType(sDataType?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oDataTypeConstraints <p>New value for property <code>dataTypeConstraints</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataTypeConstraints(oDataTypeConstraints?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oDataTypeFormatOptions <p>New value for property <code>dataTypeFormatOptions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataTypeFormatOptions(oDataTypeFormatOptions?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMaxConditions">maxConditions</a>.</p><p>Sets the maximum number of conditions that are allowed for this field.</p><p>The default value of -1 indicates that an unlimited number of conditions can be defined.</p><p><b>Note:</b> If the data type used doesn't support multiple conditions, an error is thrown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
				 * @param {number} iMaxConditions <p>New value for property <code>maxConditions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMaxConditions(iMaxConditions?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Field#methods/getValue">value</a>.</p><p>The value of the field.</p><p>To display the key and the description in one field, the key must be set on the <code>value</code> property.</p><p><b>Warning:</b> Don't use a <code>Formatter</code> in the binding of this property since this only allows one-way binding. Therefore, no parsing of user input and no model updates are possible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oValue <p>New value for property <code>value</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setValue(oValue?: any): this;
				/**
				 * <p>Unbinds property <a target="_self" href="api/sap.ui.mdc.Field#methods/getAdditionalValue">additionalValue</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				unbindAdditionalValue(): this;
				/**
				 * <p>Unbinds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				unbindConditions(): this;
				/**
				 * <p>Unbinds property <a target="_self" href="api/sap.ui.mdc.Field#methods/getValue">value</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				unbindValue(): this;
			}
			/**
			 * <p>The <code>FilterBar</code> control is used to display filter attributes in a user-friendly manner to populate values for a query. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The Go button fires the search event, and the Adapt Filters button shows the filter dialog.<br> The <code>FilterBar</code> control creates and handles the filters based on the provided metadata information. The metadata information is provided via the <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a> implementation. This implementation has to be provided by the application.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/78386110817d43978ffd6988d1704e38">FilterBar Building Block (OData V4)</a></li></ul></p>
			 */
			export class FilterBar extends sap.ui.mdc.filterbar.FilterBarBase {
				/**
				 * <p>Constructor for a new FilterBar.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets the external conditions of the inner condition model. <b>Note:</b> This API returns only attributes related to the <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/setP13nMode">p13nMode</a> property configuration.</p>
				 * @returns sap.ui.mdc.State <p>Object containing the current status of the <code>FilterBarBase</code></p>
				 */
				getCurrentState(): sap.ui.mdc.State;
				/**
				 * <p>Returns the external conditions of the inner condition model. <b>Note:</b> This API returns only attributes related to the <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/setP13nMode">p13nMode</a> property configuration.</p>
				 * @returns sap.ui.mdc.State <p>Object containing the current status of the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control</p>
				 */
				getCurrentState(): sap.ui.mdc.State;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getP13nMode">p13nMode</a>.</p><p>Specifies the personalization options for the <code>FilterBar</code>.</p>
				 * @returns sap.ui.mdc.enums.FilterBarP13nMode[] <p>Value of property <code>p13nMode</code></p>
				 */
				getP13nMode(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getShowAdaptFiltersButton">showAdaptFiltersButton</a>.</p><p>Determines whether the Adapt Filters button is visible in the <code>FilterBar</code>.<br> <b>Note</b>: If the <code>p13nMode</code> property does not contain the value <code>Item</code>, it is ignored.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showAdaptFiltersButton</code></p>
				 */
				getShowAdaptFiltersButton(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getShowClearButton">showClearButton</a>.</p><p>Determines whether the Clear button is visible in the <code>FilterBar</code>.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>showClearButton</code></p>
				 */
				getShowClearButton(): boolean;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getP13nMode">p13nMode</a>.</p><p>Specifies the personalization options for the <code>FilterBar</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} sP13nMode <p>New value for property <code>p13nMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setP13nMode(sP13nMode: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getShowAdaptFiltersButton">showAdaptFiltersButton</a>.</p><p>Determines whether the Adapt Filters button is visible in the <code>FilterBar</code>.<br> <b>Note</b>: If the <code>p13nMode</code> property does not contain the value <code>Item</code>, it is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowAdaptFiltersButton <p>New value for property <code>showAdaptFiltersButton</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowAdaptFiltersButton(bShowAdaptFiltersButton?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/getShowClearButton">showClearButton</a>.</p><p>Determines whether the Clear button is visible in the <code>FilterBar</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bShowClearButton <p>New value for property <code>showClearButton</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowClearButton(bShowClearButton?: boolean): this;
			}
			/**
			 * <p><p>Defines the personalization mode of the filter bar.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'FilterBarP13nMode'.</p></p>
			 */
			export enum FilterBarP13nMode {
				/**
				 * <p>Filter item personalization is enabled.</p>
				 */
				Item = "Item",
				/**
				 * <p>Condition personalization is enabled.</p>
				 */
				Value = "Value",
			}
			/**
			 * <p><p>Acts a subset of the <code>FilterBarDelegate</code> that can be used in <a target="_self" href="api/module:sap/ui/mdc/TableDelegate#methods/sap/ui/mdc/TableDelegate.getFilterDelegate">TableDelegate.getFilterDelegate</a> or <a target="_self" href="api/module:sap/ui/mdc/ChartDelegate#methods/sap/ui/mdc/ChartDelegate.getFilterDelegate">Chart.getFilterDelegate</a> to enable inbuilt filtering.</p><p>It provides basic filter functionality, including <ul> <li>Adding filter fields</li> <li>Adding conditions</li> <li>Removing conditions</li> <li>Determining the validation state of filters</li> </ul></p></p>
			 */
			export interface FilterDelegateObject {
				/**
				 */
				addItem?: any;
				/**
				 */
				addCondition?: any;
				/**
				 */
				removeCondition?: any;
				/**
				 */
				determineValidationState?: any;
			}
			/**
			 * <p>The <code>FilterField</code> control is used to filter data based on the conditions. The conditions are managed in the corresponding <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>. That is why the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/bindConditions">conditions</a> property must be bound to the related conditions in the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>. The type of this data must be defined in the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a> property.</p><p>Based on the data type settings, a default control is rendered by the <code>FilterField</code> as follows:</p><p><ul> <li>In display mode, usually a <a target="_self" href="api/sap.m.Text">Text</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, an <a target="_self" href="api/sap.m.ExpandableText">ExpandableText</a> control is rendered.</li> <li>If multiple values are allowed, a <a target="_self" href="api/sap.m.Tokenizer">Tokenizer</a> control is rendered.</li> <li>In edit mode, usually an <a target="_self" href="api/sap.m.Input">Input</a> control is rendered.</li> <li>If multiple values are allowed, a <a target="_self" href="api/sap.m.MultiInput">MultiInput</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, a <a target="_self" href="api/sap.m.TextArea">TextArea</a> control is rendered.</li> <li>If a date type or a date/time type is used and only one condition is supported, a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control is rendered.</li> <li>If a date type is used and only single values are allowed, a <a target="_self" href="api/sap.m.DatePicker">DatePicker</a> control is rendered.</li> <li>If a date type is used and only single ranges are allowed, a <a target="_self" href="api/sap.m.DateRangeSelection">DateRangeSelection</a> control is rendered.</li> <li>If a date/time type is used and only single values are allowed, a <a target="_self" href="api/sap.m.DateTimePicker">DateTimePicker</a> control is rendered.</li> <li>If a time type is used and only single values are allowed, a <a target="_self" href="api/sap.m.TimePicker">TimePicker</a> control is rendered.</li> <li>If used for search, a <a target="_self" href="api/sap.m.SearchField">SearchField</a> control is rendered.</li> </ul><br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/2df783760a8e4540ad19ce5ec3ed91c8">FilterField Building Block (OData V4)</a></li></ul></p>
			 */
			export class FilterField extends sap.ui.mdc.field.FieldBase {
				/**
				 * <p>Constructor for a new <code>FilterField</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds an operator to the list of known operators.</p><p><b>Note:</b> If no operator is set, the used <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a> of the <code>FilterField</code> defines the set of default operators. The standard operators are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
				 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
				 * @returns this <p>Reference to <code>this</code> to allow method chaining</p>
				 */
				addOperator(vOperator: sap.ui.mdc.condition.Operator | string): this;
				/**
				 * <p>Adds an array of operators to the list of known operators.</p><p><b>Note:</b> <code>aOperators</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>, the instance itself, or multiple operators inside an array. The standard operators are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
				 * @param {any} aOperators <p>Array of operators</p>
				 * @returns this <p>Reference to <code>this</code> to allow method chaining</p>
				 */
				addOperators(aOperators: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.FilterField#events/change">change</a> event of this <code>sap.ui.mdc.FilterField</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.FilterField</code> itself.</p><p>This event is fired when the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> property of the <code>FilterField</code> is changed by a user interaction.</p><p><b>Note</b> This event is only triggered if the used content control has a change event.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.FilterField</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachChange(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.FilterField#events/change">change</a> event of this <code>sap.ui.mdc.FilterField</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachChange(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.FilterField#events/change">change</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireChange(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getAdditionalDataType">additionalDataType</a>.</p><p>The type of data for the description part of an "equal to" condition. This type is used to parse, format, and validate the value.</p><p>Here a data type instance can be provided or an object containing <code>name</code>, <code>formatOptions</code>, and <code>constraints</code>.</p>
				 * @returns any <p>Value of property <code>additionalDataType</code></p>
				 */
				getAdditionalDataType(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getDefaultOperator">defaultOperator</a>.</p><p>Default operator name for conditions. If empty, the relevant default operator depending on the data type used is taken.</p><p><b>Note:</b> <code>defaultOperator</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a> or the instance itself.</p>
				 * @returns string <p>Value of property <code>defaultOperator</code></p>
				 */
				getDefaultOperator(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getOperators">operators</a>.</p><p>Supported operator names for conditions.</p><p>If empty, default operators depending on used data type are taken. The standard operators are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p><p><b>Note:</b> If a custom control is used as <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContent">Content</a>, <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentEdit">ContentEdit</a>, or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentDisplay">ContentDisplay</a>, and the custom control only supports one operator (as no operator can be shown), only the required operator must be set. So the user input into the custom control creates a condition with the set operator, and a condition with this operator provides the value the custom control needs.</p><p>Default value is <code>[]</code>.</p>
				 * @returns string[] <p>Value of property <code>operators</code></p>
				 */
				getOperators(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getPropertyKey">propertyKey</a>.</p><p>Key of the property the <code>FilterField</code> represents.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>propertyKey</code></p>
				 */
				getPropertyKey(): string;
				/**
				 * <p>Removes all operators from the list of known operators.</p>
				 */
				removeAllOperators(): void;
				/**
				 * <p>Removes an operator from the list of known operators. The standard operators can are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
				 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
				 */
				removeOperator(vOperator: sap.ui.mdc.condition.Operator | string): void;
				/**
				 * <p>Removes all given operators from the list of known operators.</p><p><b>Note:</b> <code>aOperators</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>, the instance itself, or multiple operators inside an array. The standard operators are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
				 * @param {any} aOperators <p>Array of operators</p>
				 */
				removeOperators(aOperators: any): void;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getAdditionalDataType">additionalDataType</a>.</p><p>The type of data for the description part of an "equal to" condition. This type is used to parse, format, and validate the value.</p><p>Here a data type instance can be provided or an object containing <code>name</code>, <code>formatOptions</code>, and <code>constraints</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oAdditionalDataType <p>New value for property <code>additionalDataType</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setAdditionalDataType(oAdditionalDataType?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getDefaultOperator">defaultOperator</a>.</p><p>Default operator name for conditions. If empty, the relevant default operator depending on the data type used is taken.</p><p><b>Note:</b> <code>defaultOperator</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a> or the instance itself.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sDefaultOperator <p>New value for property <code>defaultOperator</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDefaultOperator(sDefaultOperator?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getOperators">operators</a>.</p><p>Supported operator names for conditions.</p><p>If empty, default operators depending on used data type are taken. The standard operators are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p><p><b>Note:</b> If a custom control is used as <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContent">Content</a>, <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentEdit">ContentEdit</a>, or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentDisplay">ContentDisplay</a>, and the custom control only supports one operator (as no operator can be shown), only the required operator must be set. So the user input into the custom control creates a condition with the set operator, and a condition with this operator provides the value the custom control needs.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sOperators <p>New value for property <code>operators</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setOperators(sOperators?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getPropertyKey">propertyKey</a>.</p><p>Key of the property the <code>FilterField</code> represents.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sPropertyKey <p>New value for property <code>propertyKey</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setPropertyKey(sPropertyKey?: string): this;
			}
			/**
			 * <p>The <code>Geomap</code> control creates a geomap based on metadata and the configuration specified.<br> <b>Note:</b> The geomap needs to be created inside the <code>GeomapDelegate</code>.</p>
			 */
			export class Geomap extends sap.ui.mdc.Control implements sap.ui.mdc.IFilterSource, sap.ui.mdc.IxState {
				/**
				 * <p>Constructor for a new Geomap.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no id is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Geomap#events/zoomChange">zoomChange</a> event of this <code>sap.ui.mdc.Geomap</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Geomap</code> itself.</p><p>This event is fired when zooming is performed on the map.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Geomap</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachZoomChange(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getItems">items</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyItems(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Geomap#events/zoomChange">zoomChange</a> event of this <code>sap.ui.mdc.Geomap</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachZoomChange(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Geomap#events/zoomChange">zoomChange</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireZoomChange(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getCenterLat">centerLat</a>.</p><p>Latitude of the point where the map is centered</p>
				 * @returns number <p>Value of property <code>centerLat</code></p>
				 */
				getCenterLat(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getCenterLng">centerLng</a>.</p><p>Longitude of the point where the map is centered</p>
				 * @returns number <p>Value of property <code>centerLng</code></p>
				 */
				getCenterLng(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/BaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableCopyrightControl">enableCopyrightControl</a>.</p><p>Enables the copyright control for the map</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableCopyrightControl</code></p>
				 */
				getEnableCopyrightControl(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableFullscreenControl">enableFullscreenControl</a>.</p><p>Enables the full screen control for the map</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableFullscreenControl</code></p>
				 */
				getEnableFullscreenControl(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableNavigationControl">enableNavigationControl</a>.</p><p>Enables the navigation & compas control for the map</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableNavigationControl</code></p>
				 */
				getEnableNavigationControl(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableScaleControl">enableScaleControl</a>.</p><p>Enables the scale control for the map</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableScaleControl</code></p>
				 */
				getEnableScaleControl(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableSelectionControl">enableSelectionControl</a>.</p><p>Enables the selection control for the map</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableSelectionControl</code></p>
				 */
				getEnableSelectionControl(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getHeader">header</a>.</p><p>Header text that appears in the geomap</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>header</code></p>
				 */
				getHeader(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getHeight">height</a>.</p><p>Defines the height of the geomap.</p><p>Default value is <code>"700px"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
				 */
				getHeight(): sap.ui.core.CSSSize;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getItems">items</a>.</p><p>Aggregates the items to be displayed in the geomap. Note: As items are custom elements defined as part of the webc library the type here could not be strictly defined or used a generic one so supported types are limited to those supported by the webc library.</p>
				 * @returns sap.ui.mdc.geomap.Item[] 
				 */
				getItems(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getWidth">width</a>.</p><p>Defines the width of the geomap.</p><p>Default value is <code>"700px"</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
				 */
				getWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getZoom">zoom</a>.</p><p>Zoom level of the map - the bigger, the more the map is zoomed</p>
				 * @returns number <p>Value of property <code>zoom</code></p>
				 */
				getZoom(): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.mdc.geomap.Item</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.mdc.geomap.Item} oItem <p>The item whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfItem(oItem: sap.ui.mdc.geomap.Item): number;
				/**
				 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getItems">items</a>.</p>
				 * @param {sap.ui.mdc.geomap.Item} oItem <p>The item to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertItem(oItem: sap.ui.mdc.geomap.Item, iIndex: number): this;
				/**
				 * <p>Executes a rebind considering the provided external and inbuilt filtering.</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after rebind is executed, and rejects if rebind cannot be executed, for example because there are invalid filters.</p>
				 */
				rebind(): Promise<any>;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getCenterLat">centerLat</a>.</p><p>Latitude of the point where the map is centered</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {number} fCenterLat <p>New value for property <code>centerLat</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCenterLat(fCenterLat: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getCenterLng">centerLng</a>.</p><p>Longitude of the point where the map is centered</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {number} fCenterLng <p>New value for property <code>centerLng</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCenterLng(fCenterLng: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/BaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableCopyrightControl">enableCopyrightControl</a>.</p><p>Enables the copyright control for the map</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableCopyrightControl <p>New value for property <code>enableCopyrightControl</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableCopyrightControl(bEnableCopyrightControl?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableFullscreenControl">enableFullscreenControl</a>.</p><p>Enables the full screen control for the map</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableFullscreenControl <p>New value for property <code>enableFullscreenControl</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableFullscreenControl(bEnableFullscreenControl?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableNavigationControl">enableNavigationControl</a>.</p><p>Enables the navigation & compas control for the map</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableNavigationControl <p>New value for property <code>enableNavigationControl</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableNavigationControl(bEnableNavigationControl?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableScaleControl">enableScaleControl</a>.</p><p>Enables the scale control for the map</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableScaleControl <p>New value for property <code>enableScaleControl</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableScaleControl(bEnableScaleControl?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getEnableSelectionControl">enableSelectionControl</a>.</p><p>Enables the selection control for the map</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableSelectionControl <p>New value for property <code>enableSelectionControl</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableSelectionControl(bEnableSelectionControl?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getHeader">header</a>.</p><p>Header text that appears in the geomap</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sHeader <p>New value for property <code>header</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeader(sHeader?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getHeight">height</a>.</p><p>Defines the height of the geomap.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"700px"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeight(sHeight?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getWidth">width</a>.</p><p>Defines the width of the geomap.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"700px"</code>.</p>
				 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setWidth(sWidth?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getZoom">zoom</a>.</p><p>Zoom level of the map - the bigger, the more the map is zoomed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {number} fZoom <p>New value for property <code>zoom</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setZoom(fZoom: number): this;
			}
			namespace Geomap {
				/**
				 * <p><p>Geomap <code>GeomapTypeObject</code> type.</p></p>
				 */
				export interface GeomapTypeObject {
					/**
					 * <p>Unique key of the geomap type</p>
					 */
					key: any;
					/**
					 * <p>URI for the icon for the current geomap type</p>
					 */
					icon: any;
					/**
					 * <p>Name of the current geomap type</p>
					 */
					text: any;
					/**
					 * <p>Whether the geomap type is the one currently used</p>
					 */
					selected: any;
				}
			}
			/**
			 * <p><p>Defines the growing options of the responsive table.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'GrowingMode'.</p></p>
			 */
			export enum GrowingMode {
				/**
				 * <p>Basic growing takes place (<code>growing</code> is set in the responsive table)</p>
				 */
				Basic = "Basic",
				/**
				 * <p>Growing does not take place (<code>growing</code> is not set in the responsive table)</p>
				 */
				None = "None",
				/**
				 * <p>Growing with <code>scroll</code> takes place (<code>growing</code> and <code>growingScrollToLoad</code> are set in the responsive table)</p>
				 */
				Scroll = "Scroll",
			}
			/**
			 * <p><p>Interface for subclasses of <a target="_self" href="api/sap.m.OverflowToolbarLayoutData">sap.m.OverflowToolbarLayoutData</a> that position actions within the toolbar and configure the overflow menu. Classes implementing this interface must provide a <code>position</code> property, which uses an enumeration to define the relative order of the actions. The sequence of the enumeration values determines the placement of the actions. Enumeration values can be organized into groups by using the same prefix ending with the <code>Actions</code> keyword, such as <code>ClipboardActionsCopy</code> and <code>ClipboardActionsPaste</code>.</p></p>
			 */
			export interface IActionLayoutData {
			}
			/**
			 * <p><p>Interface for controls or entities which can serve as filters in the <code>sap.ui.mdc.Table</code> & <code>sap.ui.mdc.Chart</code>.</p><p>The following methods need to be implemented:</p><p><ul> <li><code>getConditions</code> - Part of the <a target="_self" href="api/sap.ui.mdc.IFilterSource">sap.ui.mdc.IFilterSource</a> interface.</li> <li><code>validate</code> - The <code>validate</code> method should return a promise which resolves after the IFilter interface has handled its inner validation. The <code>getConditions</code> method will be called subsequently by the filtered control.</li> <li><code>getSearch</code> - <b>Note:</b> The <code>getSearch</code> method can optionally be implemented and should return a string for approximate string matching implemented in the backend.</li> </ul></p><p>The following events need to be implemented:</p><p><ul> <li><code>search</code> - This event should be fired once a filtering should be executed on the IFilter using control.</li> <li><code>filtersChanged</code> - <b>Note:</b> The <code>filtersChanged</code> event can optionally be implemented and should be fired whenever a filter value has changed. This event will be used to display an overlay on the IFilter consuming control.</li> </ul></p></p>
			 */
			export interface IFilter {
			}
			/**
			 * <p><p>Interface for controls or entities which are able to return a set of present conditions. The controls or entities have to implement the following APIs: <code>getConditions</code>.</p></p>
			 */
			export interface IFilterSource {
			}
			/**
			 * <p><p>Interface for controls or entities which support the appliance of an externalized state representation. The controls or entities have to implement the following APIs: <code>getCurrentState</code> & <code>initialized</code> methods.</p></p>
			 */
			export interface IxState {
			}
			/**
			 * <p>A <code>Link</code> element can be used inside a <code>fieldInfo</code> aggregation of <a target="_self" href="api/sap.ui.mdc.Field">sap.ui.mdc.Field</a> to enable navigation scenarios with one or more targets through direct navigation or by opening a <code>Panel</code>.<br> It can also be used to display additional content, such as <code>ContactDetails</code> on the <code>Panel</code>.<br> <b>Note:</b> The navigation targets and the behavior of the control are determined by the implementation of a <a target="_self" href="api/module:sap/ui/mdc/LinkDelegate">LinkDelegate</a>.</p>
			 */
			export class Link extends sap.ui.mdc.field.FieldInfoBase {
				/**
				 * <p>Constructor for the new <code>Link</code></p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Link#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>LinkDelegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>LinkDelegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/LinkDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Link#methods/getEnablePersonalization">enablePersonalization</a>.</p><p>Enables/disables the personalization settings for users and key users.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enablePersonalization</code></p>
				 */
				getEnablePersonalization(): boolean;
				/**
				 * <p>Retrieves the <code>AdditionalContent</code> objects depending on the given <code>LinkDelegate</code>. Caches the returned objects for further usage.</p>
				 * @returns any <p>Resolves an array of type <a target="_self" href="api/sap.ui.core.Control">sap.ui.core.Control</a></p>
				 */
				retrieveAdditionalContent(): any;
				/**
				 * <p>Calls the <code>modifyLinkItems</code> function of <code>Delegate</code> before returning the <code>LinkItem</code> objects.</p>
				 * @returns any <p>Resolves an array of type <a target="_self" href="api/sap.ui.mdc.link.LinkItem">sap.ui.mdc.link.LinkItem</a></p>
				 */
				retrieveLinkItems(): any;
				/**
				 * <p>Determines the <code>LinkType</code> object depending on the given <code>LinkDelegate</code>.</p>
				 * @returns any <p>Returns <code>undefined</code> or a <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a>, once resolved</p>
				 */
				retrieveLinkType(): any;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Link#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>LinkDelegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>LinkDelegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/LinkDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Link#methods/getEnablePersonalization">enablePersonalization</a>.</p><p>Enables/disables the personalization settings for users and key users.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnablePersonalization <p>New value for property <code>enablePersonalization</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnablePersonalization(bEnablePersonalization?: boolean): this;
				/**
				 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.Link#methods/getSourceControl">sourceControl</a>.</p>
				 * @param {sap.ui.core.ID | sap.ui.core.Control} oSourceControl <p>ID of an element which becomes the new target of this sourceControl association; alternatively, an element instance may be given</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSourceControl(oSourceControl: sap.ui.core.ID | sap.ui.core.Control): this;
			}
			/**
			 * <p><p>Enumeration of the <code>multiSelectMode</code> in <code>ListBase</code>.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'MultiSelectMode'.</p></p>
			 */
			export enum MultiSelectMode {
				/**
				 * <p>Renders the <code>clearAll</code> icon.</p>
				 */
				ClearAll = "ClearAll",
				/**
				 * <p>Renders the <code>selectAll</code> checkbox (default behavior).</p>
				 */
				Default = "Default",
			}
			/**
			 * <p>A <code>MultiValueField</code> control can hold multiple values. The values are stored as items. A <code>MultiValueField</code> control can be used to bind its items to data of a certain data type. Based on the data type settings, a default control is rendered by the <code>MultiValueField</code> control as follows:</p><p><ul> <li>In display mode, usually a <a target="_self" href="api/sap.m.Tokenizer">Tokenizer</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, an <a target="_self" href="api/sap.m.ExpandableText">ExpandableText</a> control is rendered.</li> <li>In edit mode, usually a <a target="_self" href="api/sap.m.MultiInput">MultiInput</a> control is rendered.</li> <li>If <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> is set, a <a target="_self" href="api/sap.m.TextArea">TextArea</a> control is rendered.</li> </ul></p>
			 */
			export class MultiValueField extends sap.ui.mdc.field.FieldBase {
				/**
				 * <p>Constructor for a new <code>MultiValueField</code> control.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p>
				 * @param {sap.ui.mdc.field.MultiValueFieldItem} oItem <p>The item to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addItem(oItem: sap.ui.mdc.field.MultiValueFieldItem): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.MultiValueField#events/change">change</a> event of this <code>sap.ui.mdc.MultiValueField</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.MultiValueField</code> itself.</p><p>This event is fired when the <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a> aggregation of the field is changed by user interaction.</p><p><b>Note</b> This event is only triggered if the used content control has a change event.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.MultiValueField</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachChange(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Binds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
				 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				bindConditions(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
				/**
				 * <p>Binds aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
				 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				bindItems(oBindingInfo: sap.ui.base.ManagedObject.AggregationBindingInfo): this;
				/**
				 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyItems(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.MultiValueField#events/change">change</a> event of this <code>sap.ui.mdc.MultiValueField</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachChange(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.MultiValueField#events/change">change</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireChange(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>Default value is <code>[]</code>.</p>
				 * @returns object[] <p>Value of property <code>conditions</code></p>
				 */
				getConditions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
				 * @returns string <p>Value of property <code>dataType</code></p>
				 */
				getDataType(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
				 * @returns any <p>Value of property <code>dataTypeConstraints</code></p>
				 */
				getDataTypeConstraints(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
				 * @returns any <p>Value of property <code>dataTypeFormatOptions</code></p>
				 */
				getDataTypeFormatOptions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/FieldBaseDelegate">FieldBaseDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/field/FieldBaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/MultiValueFieldDelegate">MultiValueFieldDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/field/MultiValueFieldDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p><p>Items of the <code>MultiValueField</code> control.</p><p>The items are not updated by user input or value help selection automatically. That's because an aggregation binding can only be updated by the model, not by the bound aggregation. Therefore, the <a target="_self" href="api/module:sap/ui/mdc/field/MultiValueFieldDelegate#methods/sap/ui/mdc/field/MultiValueFieldDelegate.updateItemsFromConditions">MultiValueFieldDelegate.updateItemsFromConditions</a> function needs to be implemented to update the items after a user interaction.</p>
				 * @returns sap.ui.mdc.field.MultiValueFieldItem[] 
				 */
				getItems(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a>.</p><p>If set, the <code>Field</code> is rendered using a multi-line control.</p><p>This property only affects types that support multiple lines.</p><p>This property is only used for single-value fields.</p><p><b>Note:</b> If the data type used doesn't support multiple lines, an error is thrown.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>multipleLines</code></p>
				 */
				getMultipleLines(): boolean;
				/**
				 * <p>Checks for the provided <code>sap.ui.mdc.field.MultiValueFieldItem</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.mdc.field.MultiValueFieldItem} oItem <p>The item whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfItem(oItem: sap.ui.mdc.field.MultiValueFieldItem): number;
				/**
				 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p>
				 * @param {sap.ui.mdc.field.MultiValueFieldItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertItem(oItem: sap.ui.mdc.field.MultiValueFieldItem, iIndex: number): this;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.mdc.field.MultiValueFieldItem[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllItems(): any;
				/**
				 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a>.</p>
				 * @param {number | string | sap.ui.mdc.field.MultiValueFieldItem} vItem <p>The item to remove or its index or id</p>
				 * @returns sap.ui.mdc.field.MultiValueFieldItem | null <p>The removed item or <code>null</code></p>
				 */
				removeItem(vItem: number | string | sap.ui.mdc.field.MultiValueFieldItem): sap.ui.mdc.field.MultiValueFieldItem | null;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sConditions <p>New value for property <code>conditions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setConditions(sConditions?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
				 * @param {string} sDataType <p>New value for property <code>dataType</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataType(sDataType?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oDataTypeConstraints <p>New value for property <code>dataTypeConstraints</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataTypeConstraints(oDataTypeConstraints?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {any} oDataTypeFormatOptions <p>New value for property <code>dataTypeFormatOptions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataTypeFormatOptions(oDataTypeFormatOptions?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/FieldBaseDelegate">FieldBaseDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/field/FieldBaseDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/MultiValueFieldDelegate">MultiValueFieldDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/field/MultiValueFieldDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMaxConditions">maxConditions</a>.</p><p>Sets the maximum number of conditions that are allowed for this field.</p><p>The default value of -1 indicates that an unlimited number of conditions can be defined.</p><p><b>Note:</b> If the data type used doesn't support multiple conditions, an error is thrown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
				 * @param {number} iMaxConditions <p>New value for property <code>maxConditions</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMaxConditions(iMaxConditions?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a>.</p><p>If set, the <code>Field</code> is rendered using a multi-line control.</p><p>This property only affects types that support multiple lines.</p><p>This property is only used for single-value fields.</p><p><b>Note:</b> If the data type used doesn't support multiple lines, an error is thrown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bMultipleLines <p>New value for property <code>multipleLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMultipleLines(bMultipleLines?: boolean): this;
				/**
				 * <p>Unbinds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				unbindConditions(): this;
				/**
				 * <p>Unbinds aggregation <a target="_self" href="api/sap.ui.mdc.MultiValueField#methods/getItems">items</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				unbindItems(): this;
			}
			/**
			 * <p><p>Defines the actions that can be used in the table.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'RowAction'.</p></p>
			 */
			export enum RowAction {
				/**
				 * <p>Navigation arrow (chevron) is shown in the table rows/items.</p>
				 */
				Navigation = "Navigation",
			}
			/**
			 * <p><p>Defines the row count mode of the GridTable.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'RowCountMode'.</p></p>
			 */
			export enum RowCountMode {
				/**
				 * <p>The table automatically fills the height of the surrounding container.</p>
				 */
				Auto = "Auto",
				/**
				 * <p>The table always has as many rows as defined in the <code>rowCount</code> property of <code>GridTableType</code>.</p>
				 */
				Fixed = "Fixed",
			}
			/**
			 * <p><p>Defines the mode of the table.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'SelectionMode'.</p></p>
			 */
			export enum SelectionMode {
				/**
				 * <p>Multiple rows/items can be selected at a time.</p>
				 */
				Multi = "Multi",
				/**
				 * <p>No rows/items can be selected (default).</p>
				 */
				None = "None",
				/**
				 * <p>Only one row/item can be selected at a time.</p>
				 */
				Single = "Single",
				/**
				 * <p>Only one row/item can be selected at a time. Should be used for navigation scenarios to indicate the navigated row/item. If this selection mode is used, no <code>rowPress</code> event is fired.</p>
				 */
				SingleMaster = "SingleMaster",
			}
			/**
			 * <p><p>The <code>State</code> object describes the interface to apply and retrieve the current adaptation state from mdc controls. The <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a> class can be used to programatically apply changes considered for the controls personalization to be part of its persistence.</p></p>
			 */
			export interface State {
				/**
				 * <p>Describes the filter conditions</p>
				 */
				filter?: any;
				/**
				 * <p>Describes the filter fields</p>
				 */
				items?: any;
				/**
				 * <p>Describes the sorter fields</p>
				 */
				sorters?: any;
				/**
				 * <p>Describes the grouped fields</p>
				 */
				groupLevels?: any;
				/**
				 * <p>Describes the aggregated fields</p>
				 */
				aggregations?: any;
			}
			/**
			 * <p>A metadata-driven table to simplify the usage of existing tables, such as the <code>ResponsiveTable</code> and <code>GridTable</code> controls. The metadata needs to be provided via the <a target="_self" href="api/module:sap/ui/mdc/TableDelegate">TableDelegate</a> implementation as <a target="_self" href="api/sap.ui.mdc.table.PropertyInfo">sap.ui.mdc.table.PropertyInfo</a> and <a target="_self" href="api/sap.ui.mdc.table.ComplexPropertyInfo">sap.ui.mdc.table.ComplexPropertyInfo</a>.</p><p><b>Note:</b> Read and write access to internal elements is not permitted. Such elements are, for example, the inner table including its children. This is independent of how access was gained. Internal elements and their types are subject to change without notice.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/3801656db27b4b7a9099b6ed5fa1d769">Table Building Block (OData V4)</a></li></ul></p>
			 */
			export class Table extends sap.ui.mdc.Control {
				/**
				 * <p>Constructor for a new <code>Table</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>Optional ID for the new control; generated automatically if no non-empty ID is given <b>Note:</b> The optional ID can be omitted, no matter whether <code>mSettings</code> is given or not.</p>
				 * @param {any} mSettings <p>Object with initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some tableAction to the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p>
				 * @param {sap.ui.core.Control} oTableAction <p>The tableAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTableAction(oTableAction: sap.ui.core.Control): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Table#events/beforeExport">beforeExport</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Table</code> itself.</p><p>This event is fired right before the export is triggered.</p><p>For more information about the export settings, see <a target="_self" href="api/sap.ui.export.Spreadsheet">sap.ui.export.Spreadsheet</a> or <a target="_self" href="topic/7e12e6b9154a4607be9d6072c72d609c">Spreadsheet Export Configuration</a>.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachBeforeExport(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Table</code> itself.</p><p>This event is fired when the user requests the context menu for the table.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachBeforeOpenContextMenu(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Table#events/paste">paste</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Table</code> itself.</p><p>This event is fired when the user pastes content from the clipboard to the table.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachPaste(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Table#events/rowPress">rowPress</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Table</code> itself.</p><p>This event is fired when a row is pressed.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachRowPress(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.Table#events/selectionChange">selectionChange</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.Table</code> itself.</p><p>This event is fired when the selection is changed.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachSelectionChange(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Clears the selection.</p>
				 */
				clearSelection(): void;
				/**
				 * <p>Destroys the cellSelector in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getCellSelector">cellSelector</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyCellSelector(): this;
				/**
				 * <p>Destroys the contextMenu in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getContextMenu">contextMenu</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyContextMenu(): this;
				/**
				 * <p>Destroys the copyProvider in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getCopyProvider">copyProvider</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyCopyProvider(): this;
				/**
				 * <p>Destroys the dataStateIndicator in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getDataStateIndicator">dataStateIndicator</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDataStateIndicator(): this;
				/**
				 * <p>Destroys the defaultExportSettings in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getDefaultExportSettings">defaultExportSettings</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDefaultExportSettings(): this;
				/**
				 * <p>Destroys the noData in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getNoData">noData</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyNoData(): this;
				/**
				 * <p>Destroys the quickFilter in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getQuickFilter">quickFilter</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyQuickFilter(): this;
				/**
				 * <p>Destroys the rowSettings in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getRowSettings">rowSettings</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyRowSettings(): this;
				/**
				 * <p>Destroys all the tableActions in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTableActions(): this;
				/**
				 * <p>Destroys the type in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getType">type</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyType(): this;
				/**
				 * <p>Destroys the variant in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getVariant">variant</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyVariant(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Table#events/beforeExport">beforeExport</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachBeforeExport(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachBeforeOpenContextMenu(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Table#events/paste">paste</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachPaste(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Table#events/rowPress">rowPress</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachRowPress(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.Table#events/selectionChange">selectionChange</a> event of this <code>sap.ui.mdc.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachSelectionChange(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Table#events/beforeExport">beforeExport</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
				protected fireBeforeExport(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
				protected fireBeforeOpenContextMenu(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Table#events/paste">paste</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected firePaste(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Table#events/rowPress">rowPress</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireRowPress(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.Table#events/selectionChange">selectionChange</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireSelectionChange(mParameters?: any): this;
				/**
				 * <p>Sets the focus on the row. If <code>bFirstInteractiveElement</code> is <code>true</code>, and there are interactive elements inside the row, sets the focus on the first interactive element. Otherwise sets the focus on the first data cell, if the type is <code>GridTableType</code>, and on the entire row, if the type is <code>ResponsiveTableType</code>. If the given index is not visible, the table scrolls to it automatically. In this case the same rules apply as in <a target="_self" href="api/sap.ui.mdc.Table#methods/scrollToIndex">#scrollToIndex</a>.</p>
				 * @param {number} iIndex <p>The index of the row that is to be focused</p>
				 * @param {boolean} bFirstInteractiveElement <p>Indicates whether to set the focus on the first interactive element inside the row</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after the focus has been set</p>
				 */
				focusRow(iIndex: number, bFirstInteractiveElement?: boolean): Promise<any>;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getActions">actions</a>.</p><p>Additional actions that will be available in the toolbar.</p><p><b>Note:</b> This aggregation is managed by the control, can only be populated during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired effects. Changes of the aggregation have to be made with the <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a>.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getActions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getAutoBindOnInit">autoBindOnInit</a>.</p><p>Determines whether to bind the table automatically after the initial creation or re-creation of the table.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>autoBindOnInit</code></p>
				 */
				getAutoBindOnInit(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getBusyIndicatorDelay">busyIndicatorDelay</a>.</p><p>The delay in milliseconds after which the busy indicator is shown.</p><p>Default value is <code>100</code>.</p>
				 * @returns number <p>Value of property <code>busyIndicatorDelay</code></p>
				 */
				getBusyIndicatorDelay(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getCellSelector">cellSelector</a>.</p><p>Defines an aggregation for the <code>CellSelector</code> plugin that provides cell selection capabilities.</p><p><b>Note:</b> The <code>CellSelector</code> is currently only available in combination with the <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a>. Please refer to <a target="_self" href="api/sap.m.plugins.CellSelector">sap.m.plugins.CellSelector</a> for additional restrictions.</p>
				 * @returns sap.m.plugins.CellSelector 
				 */
				getCellSelector(): sap.m.plugins.CellSelector;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getColumns">columns</a>.</p><p>Columns of the table.</p><p><b>Note:</b> This aggregation is managed by the control, can only be populated during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired effects. Changes of the aggregation have to be made with the <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a>.</p>
				 * @returns sap.ui.mdc.table.Column[] 
				 */
				getColumns(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getContextMenu">contextMenu</a>.</p><p>Defines the context menu for the rows.</p>
				 * @returns sap.ui.core.IContextMenu 
				 */
				getContextMenu(): sap.ui.core.IContextMenu;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getCopyProvider">copyProvider</a>.</p><p>Defines an aggregation for the <code>CopyProvider</code> plugin that provides copy to clipboard capabilities for the selected rows and creates a Copy button for the toolbar. To disable the copy function, including the Copy button in the toolbar, the <code>enabled</code> property of the <code>CopyProvider</code> must be set to <code>false</code>. To hide the Copy button from the toolbar, the <code>visible</code> property of the <code>CopyProvider</code> must be set to <code>false</code>.</p><p><b>Note:</b> The <a target="_self" href="api/sap.m.plugins.CopyProvider#methods/extractData">extractData</a> property of the <code>CopyProvider</code> must not be managed by the application. The <code>CopyProvider</code> requires a secure context to access the clipboard API. If the context is not secure, the plugin will not be added, and the Copy button will not be generated.</p>
				 * @returns sap.m.plugins.CopyProvider 
				 */
				getCopyProvider(): sap.m.plugins.CopyProvider;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getDataStateIndicator">dataStateIndicator</a>.</p><p><code>DataStateIndicator</code> plugin that can be used to show binding-related messages.</p>
				 * @returns sap.m.plugins.DataStateIndicator 
				 */
				getDataStateIndicator(): sap.m.plugins.DataStateIndicator;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getDefaultExportSettings">defaultExportSettings</a>.</p><p>Default values shown in the export dialog.</p><p><b>Note:</b> These values are defaults shown to the user in the export dialog. The user can still modify them before export. If the user modifies a value in the dialog, the user choice takes precedence and is not overridden by event handlers.</p><p>The expected type is <code>sap.ui.export.TableExportSettings</code>. The <code>sap.ui.export</code> library must be loaded before setting this aggregation.</p>
				 * @returns sap.ui.core.Element 
				 */
				getDefaultExportSettings(): sap.ui.core.Element;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.</p><p>The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/TableDelegate">TableDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul></p><p><i>Sample delegate object:</i> <pre>{
					name: "sap/ui/mdc/TableDelegate",
					payload: {}
				}</pre></p><p><b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that). Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableAutoColumnWidth">enableAutoColumnWidth</a>.</p><p>Enables automatic column width calculation. The column width calculation takes the type, column label, referenced properties, and other information into account. The calculated column widths can have a minimum of 3rem and a maximum of 20rem.</p><p>The delegate can customize the automatic column width calculation with the <code>visualSettings.widthSettings</code> field in the <a target="_self" href="api/sap.ui.mdc.table.PropertyInfo">PropertyInfo</a>. To disable the heuristic column width calculation for a particular column, the <code>visualSettings.widthSettings</code> field can be set to <code>null</code>. Providing a more precise <code>maxLength</code> value for the <code>String</code> type or <code>precision</code> value for numeric types can help the algorithm to produce better results.</p><p><b>Note:</b> The column width is not calculated if the <code>width</code> property of the column is bound or its value is set.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableAutoColumnWidth</code></p>
				 */
				getEnableAutoColumnWidth(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableColumnResize">enableColumnResize</a>.</p><p>Determines whether column resizing is enabled.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableColumnResize</code></p>
				 */
				getEnableColumnResize(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableExport">enableExport</a>.</p><p>Determines whether the data export is enabled.</p><p>The delegate can customize the export result with the <code>exportSettings</code> field in the <a target="_self" href="api/sap.ui.mdc.table.PropertyInfo">PropertyInfo</a>.</p><p><b>Note:</b> To use the export functionality, the <a target="_self" href="api/sap.ui.export">sap.ui.export</a> library is required, otherwise an error message is displayed when the user presses the Export button.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableExport</code></p>
				 */
				getEnableExport(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnablePaste">enablePaste</a>.</p><p>Determines whether the Paste button is enabled.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enablePaste</code></p>
				 */
				getEnablePaste(): boolean;
				/**
				 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.Table#methods/getFilter">filter</a>, or <code>null</code>.</p>
				 * @returns sap.ui.core.ID | null 
				 */
				getFilter(): sap.ui.core.ID | null;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeader">header</a>.</p><p>Header text that is shown in the table. The header must always be set to comply with accessibility standards, even if other settings make the header invisible.</p>
				 * @returns string <p>Value of property <code>header</code></p>
				 */
				getHeader(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>Default value is <code>Auto</code>.</p>
				 * @returns sap.ui.core.TitleLevel <p>Value of property <code>headerLevel</code></p>
				 */
				getHeaderLevel(): sap.ui.core.TitleLevel;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeaderVisible">headerVisible</a>.</p><p>Determines whether the header text is shown in the table. Regardless of its value, the given header text is used to label the table correctly for accessibility purposes.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>headerVisible</code></p>
				 */
				getHeaderVisible(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHideToolbar">hideToolbar</a>.</p><p>Determines whether the toolbar is visible.</p><p><b>Note:</b> Hiding the toolbar limits the functionality of the table in the following ways: <ul> <li>The <code>showRowCount</code> property <b>must</b> be set to <code>false</code>.</li> <li>The export <b>must</b> be disabled by setting the <code>enableExport</code> property to <code>false</code>.</li> <li>For <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, show and hide details won't be visible as the table will always run in "Show Details" mode.</li> <li>Copy and paste will only work via keyboard.</li> <li>For <a target="_self" href="api/sap.ui.mdc.table.TreeTableType">TreeTable</a>, "Collapse All" and "Expand All" won't be possible.</li> <li>The <code>actions</code> and the <code>quickFilter</code> aggregations and a table-related <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a> <b>must not</b> be used.</li> <li>The table title will not be displayed but will be replaced by an <code>InvisibleText</code>. The <code>header</code> property <b>must</b> be set. In addition, <code>headerVisible</code> <b>must</b> be set to <code>false</code> to ensure accessibility compatibility.</li> <li>Personalization (<code>p13nMode</code>) can still be used via the column headers. If the option to show or hide columns is activated, it is recommended to use an <a target="_self" href="api/sap.m.IllustratedMessage">sap.m.IllustratedMessage</a> for the <code>nodata</code> display. It ensures that columns can be made visible again when the user has accidentally hidden them all.</li> </ul></p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>hideToolbar</code></p>
				 */
				getHideToolbar(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getMultiSelectMode">multiSelectMode</a>.</p><p>Defines the multi-selection mode.</p><p><b>Note:</b> This property has no effect in the following cases: <ul> <li>Table type is not <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>. This is subject to change in the future.</li> <li>Selection mode is not <code>Multi</code>.</li> </ul></p><p>Default value is <code>Default</code>.</p>
				 * @returns sap.ui.mdc.enums.TableMultiSelectMode <p>Value of property <code>multiSelectMode</code></p>
				 */
				getMultiSelectMode(): sap.ui.mdc.enums.TableMultiSelectMode;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getNoData">noData</a>.</p><p>Defines the custom visualization if there is no data to show.</p><p><b>Note:</b> If <a target="_self" href="api/sap.m.IllustratedMessage">sap.m.IllustratedMessage</a> control is set for the <code>noData</code> aggregation and its <a target="_self" href="api/sap.m.IllustratedMessage#methods/getTitle">title</a> property is not set then the table automatically offers a no data text with fitting <a target="_self" href="api/sap.m.IllustratedMessage.IllustratedMessageType">illustration</a>.</p>
				 * @returns sap.ui.core.Control | string 
				 */
				getNoData(): sap.ui.core.Control | string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getP13nMode">p13nMode</a>.</p><p>Personalization options for the table. The order of the provided options does not influence their order on the UI.</p><p><b>Note:</b> Whether a personalization option is supported depends on the used delegate. Please refer to the documentation of the individual delegates.</p><p>Default value is <code>[]</code>.</p>
				 * @returns sap.ui.mdc.enums.TableP13nMode[] <p>Value of property <code>p13nMode</code></p>
				 */
				getP13nMode(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getQuickFilter">quickFilter</a>.</p><p>Additional control for filtering that will be available in the toolbar.</p>
				 * @returns sap.ui.core.Control 
				 */
				getQuickFilter(): sap.ui.core.Control;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getRowSettings">rowSettings</a>.</p><p>Settings for the table rows.</p><p><b>Note:</b> Each time the properties of the settings are changed, they have to be applied again via <code>setRowSettings</code> for the changes to take effect.</p>
				 * @returns sap.ui.mdc.table.RowSettings 
				 */
				getRowSettings(): sap.ui.mdc.table.RowSettings;
				/**
				 * <p>Gets contexts that have been selected by the user.</p>
				 * @returns sap.ui.model.Context[] <p>The selected contexts</p>
				 */
				getSelectedContexts(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getSelectionMode">selectionMode</a>.</p><p>Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance.</p><p><b>Note:</b> With the <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a> and server-side models, range selections, including Select All, only work properly if the count is known. Please refer to the documentation of the used model for information on requesting the count, for example, <a target="_self" href="api/sap.ui.model.odata.v4.ODataModel">sap.ui.model.odata.v4.ODataModel</a>.</p><p>Default value is <code>None</code>.</p>
				 * @returns sap.ui.mdc.enums.TableSelectionMode <p>Value of property <code>selectionMode</code></p>
				 */
				getSelectionMode(): sap.ui.mdc.enums.TableSelectionMode;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getShowPasteButton">showPasteButton</a>.</p><p>Determines whether the Paste button is visible.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>showPasteButton</code></p>
				 */
				getShowPasteButton(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getShowRowCount">showRowCount</a>.</p><p>Determines whether the number of rows is shown along with the header text.</p><p><b>Note:</b> Whether this feature can be used depends on whether the model used and the data service can provide a count. Please refer to the documentation of the used model for information on requesting the count, for example, <a target="_self" href="api/sap.ui.model.odata.v4.ODataModel">sap.ui.model.odata.v4.ODataModel</a>.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showRowCount</code></p>
				 */
				getShowRowCount(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p><p>Additional table-related actions that are positioned together with other table-generated actions, based on the <a target="_self" href="api/sap.ui.mdc.table.ActionLayoutData">ActionLayoutData</a> provided.</p><p><b>Note:</b> All actions should use layout data of the <a target="_self" href="api/sap.ui.mdc.table.ActionLayoutData">ActionLayoutData</a> type to ensure correct ordering. Actions that do not use this layout data will be placed after the table-generated actions.<br> <b>Note:</b> Like other table-generated actions, these actions are excluded from the UI adaptation.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getTableActions(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getThreshold">threshold</a>.</p><p>Number of records to be requested from the model.</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, the threshold defines the number of rows that are displayed initially, and the number of rows that are added when the table grows (<a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getGrowingMode">growingMode</a>).</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a>, the threshold defines how many additional (not yet visible) data records from the back-end system are pre-fetched. If the <code>threshold</code> is lower than the number of visible rows, the number of visible rows is used as the <code>threshold</code>. If the value is 0, thresholding is disabled.</p><p>If the value is -1, a type-dependent default value is used.</p><p>Default value is <code>-1</code>.</p>
				 * @returns number <p>Value of property <code>threshold</code></p>
				 */
				getThreshold(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getType">type</a>.</p><p>Type of the table.</p>
				 * @returns sap.ui.mdc.table.TableTypeBase | sap.ui.mdc.enums.TableType 
				 */
				getType(): sap.ui.mdc.table.TableTypeBase | sap.ui.mdc.enums.TableType;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getUseColumnLabelsAsTooltips">useColumnLabelsAsTooltips</a>.</p><p>If no tooltip has been provided for a column, the column header text will automatically be applied as a tooltip for the column.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>useColumnLabelsAsTooltips</code></p>
				 */
				getUseColumnLabelsAsTooltips(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getVariant">variant</a>.</p><p><code>VariantManagement<code> control for the table.</p>
				 * @returns sap.ui.fl.variants.VariantManagement 
				 */
				getVariant(): sap.ui.fl.variants.VariantManagement;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.Table#methods/getWidth">width</a>.</p><p>Width of the table.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
				 */
				getWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oAction <p>The action whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfAction(oAction: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.mdc.table.Column</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getColumns">columns</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.mdc.table.Column} oColumn <p>The column whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfColumn(oColumn: sap.ui.mdc.table.Column): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oTableAction <p>The tableAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTableAction(oTableAction: sap.ui.core.Control): number;
				/**
				 * <p>Returns a <code>Promise</code> that resolves after the table has been initialized, and after it has been created or its type has been changed.</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after the table has been initialized</p>
				 */
				initialized(): Promise<any>;
				/**
				 * <p>Inserts a tableAction into the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p>
				 * @param {sap.ui.core.Control} oTableAction <p>The tableAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the tableAction should be inserted at; for a negative value of <code>iIndex</code>, the tableAction is inserted at position 0; for a value greater than the current size of the aggregation, the tableAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTableAction(oTableAction: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Checks whether the table is bound.</p>
				 * @returns boolean <p>Whether the table is bound</p>
				 */
				isTableBound(): boolean;
				/**
				 * <p>Executes a rebind considering the provided external and inbuilt filtering.</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after rebind is executed, and rejects if rebind cannot be executed, for example because there are invalid filters.</p>
				 */
				rebind(): Promise<any>;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTableActions(): any;
				/**
				 * <p>Removes a tableAction from the aggregation <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vTableAction <p>The tableAction to remove or its index or id</p>
				 * @returns sap.ui.core.Control | null <p>The removed tableAction or <code>null</code></p>
				 */
				removeTableAction(vTableAction: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Scrolls the table to the row with the given index. Depending on the table type, this might cause additional requests. If the given index is -1, it will scroll to the end of the table based on the length of the underlying binding. If the length is not final, it will only scroll to the end of the current binding and might trigger a request for additional entries. This also applies in case of a responsive table with growing enabled.</p>
				 * @param {number} iIndex <p>The index of the row that should be scrolled into the visible area</p>
				 * @returns Promise<any> <p>A <code>Promise</code> that resolves after the table has been scrolled to the row with the given index</p>
				 */
				scrollToIndex(iIndex: number): Promise<any>;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getAutoBindOnInit">autoBindOnInit</a>.</p><p>Determines whether to bind the table automatically after the initial creation or re-creation of the table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bAutoBindOnInit <p>New value for property <code>autoBindOnInit</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setAutoBindOnInit(bAutoBindOnInit?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getBusyIndicatorDelay">busyIndicatorDelay</a>.</p><p>The delay in milliseconds after which the busy indicator is shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100</code>.</p>
				 * @param {number} iBusyIndicatorDelay <p>New value for property <code>busyIndicatorDelay</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setBusyIndicatorDelay(iBusyIndicatorDelay?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getCellSelector">cellSelector</a>.</p>
				 * @param {sap.m.plugins.CellSelector} oCellSelector <p>The cellSelector to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCellSelector(oCellSelector: sap.m.plugins.CellSelector): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getContextMenu">contextMenu</a>.</p>
				 * @param {sap.ui.core.IContextMenu} oContextMenu <p>The contextMenu to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setContextMenu(oContextMenu: sap.ui.core.IContextMenu): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getCopyProvider">copyProvider</a>.</p>
				 * @param {sap.m.plugins.CopyProvider} oCopyProvider <p>The copyProvider to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCopyProvider(oCopyProvider: sap.m.plugins.CopyProvider): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getDataStateIndicator">dataStateIndicator</a>.</p>
				 * @param {sap.m.plugins.DataStateIndicator} oDataStateIndicator <p>The dataStateIndicator to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDataStateIndicator(oDataStateIndicator: sap.m.plugins.DataStateIndicator): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getDefaultExportSettings">defaultExportSettings</a>.</p>
				 * @param {sap.ui.core.Element} oDefaultExportSettings <p>The defaultExportSettings to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDefaultExportSettings(oDefaultExportSettings: sap.ui.core.Element): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.</p><p>The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/TableDelegate">TableDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul></p><p><i>Sample delegate object:</i> <pre>{
					name: "sap/ui/mdc/TableDelegate",
					payload: {}
				}</pre></p><p><b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that). Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableAutoColumnWidth">enableAutoColumnWidth</a>.</p><p>Enables automatic column width calculation. The column width calculation takes the type, column label, referenced properties, and other information into account. The calculated column widths can have a minimum of 3rem and a maximum of 20rem.</p><p>The delegate can customize the automatic column width calculation with the <code>visualSettings.widthSettings</code> field in the <a target="_self" href="api/sap.ui.mdc.table.PropertyInfo">PropertyInfo</a>. To disable the heuristic column width calculation for a particular column, the <code>visualSettings.widthSettings</code> field can be set to <code>null</code>. Providing a more precise <code>maxLength</code> value for the <code>String</code> type or <code>precision</code> value for numeric types can help the algorithm to produce better results.</p><p><b>Note:</b> The column width is not calculated if the <code>width</code> property of the column is bound or its value is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableAutoColumnWidth <p>New value for property <code>enableAutoColumnWidth</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableAutoColumnWidth(bEnableAutoColumnWidth?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableColumnResize">enableColumnResize</a>.</p><p>Determines whether column resizing is enabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableColumnResize <p>New value for property <code>enableColumnResize</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableColumnResize(bEnableColumnResize?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableExport">enableExport</a>.</p><p>Determines whether the data export is enabled.</p><p>The delegate can customize the export result with the <code>exportSettings</code> field in the <a target="_self" href="api/sap.ui.mdc.table.PropertyInfo">PropertyInfo</a>.</p><p><b>Note:</b> To use the export functionality, the <a target="_self" href="api/sap.ui.export">sap.ui.export</a> library is required, otherwise an error message is displayed when the user presses the Export button.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableExport <p>New value for property <code>enableExport</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnableExport(bEnableExport?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnablePaste">enablePaste</a>.</p><p>Determines whether the Paste button is enabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnablePaste <p>New value for property <code>enablePaste</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEnablePaste(bEnablePaste?: boolean): this;
				/**
				 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.Table#methods/getFilter">filter</a>.</p>
				 * @param {sap.ui.core.ID | sap.ui.mdc.IFilter} oFilter <p>ID of an element which becomes the new target of this filter association; alternatively, an element instance may be given</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFilter(oFilter: sap.ui.core.ID | sap.ui.mdc.IFilter): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeader">header</a>.</p><p>Header text that is shown in the table. The header must always be set to comply with accessibility standards, even if other settings make the header invisible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sHeader <p>New value for property <code>header</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeader(sHeader?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeaderLevel">headerLevel</a>.</p><p>Semantic level of the header. For more information, see <a target="_self" href="api/sap.m.Title#methods/setLevel">sap.m.Title#setLevel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
				 * @param {sap.ui.core.TitleLevel} sHeaderLevel <p>New value for property <code>headerLevel</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderLevel(sHeaderLevel?: sap.ui.core.TitleLevel): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHeaderVisible">headerVisible</a>.</p><p>Determines whether the header text is shown in the table. Regardless of its value, the given header text is used to label the table correctly for accessibility purposes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bHeaderVisible <p>New value for property <code>headerVisible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderVisible(bHeaderVisible?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getHideToolbar">hideToolbar</a>.</p><p>Determines whether the toolbar is visible.</p><p><b>Note:</b> Hiding the toolbar limits the functionality of the table in the following ways: <ul> <li>The <code>showRowCount</code> property <b>must</b> be set to <code>false</code>.</li> <li>The export <b>must</b> be disabled by setting the <code>enableExport</code> property to <code>false</code>.</li> <li>For <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, show and hide details won't be visible as the table will always run in "Show Details" mode.</li> <li>Copy and paste will only work via keyboard.</li> <li>For <a target="_self" href="api/sap.ui.mdc.table.TreeTableType">TreeTable</a>, "Collapse All" and "Expand All" won't be possible.</li> <li>The <code>actions</code> and the <code>quickFilter</code> aggregations and a table-related <a target="_self" href="api/sap.ui.fl.variants.VariantManagement">sap.ui.fl.variants.VariantManagement</a> <b>must not</b> be used.</li> <li>The table title will not be displayed but will be replaced by an <code>InvisibleText</code>. The <code>header</code> property <b>must</b> be set. In addition, <code>headerVisible</code> <b>must</b> be set to <code>false</code> to ensure accessibility compatibility.</li> <li>Personalization (<code>p13nMode</code>) can still be used via the column headers. If the option to show or hide columns is activated, it is recommended to use an <a target="_self" href="api/sap.m.IllustratedMessage">sap.m.IllustratedMessage</a> for the <code>nodata</code> display. It ensures that columns can be made visible again when the user has accidentally hidden them all.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bHideToolbar <p>New value for property <code>hideToolbar</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHideToolbar(bHideToolbar?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getMultiSelectMode">multiSelectMode</a>.</p><p>Defines the multi-selection mode.</p><p><b>Note:</b> This property has no effect in the following cases: <ul> <li>Table type is not <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>. This is subject to change in the future.</li> <li>Selection mode is not <code>Multi</code>.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Default</code>.</p>
				 * @param {sap.ui.mdc.enums.TableMultiSelectMode} sMultiSelectMode <p>New value for property <code>multiSelectMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMultiSelectMode(sMultiSelectMode?: sap.ui.mdc.enums.TableMultiSelectMode): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getNoData">noData</a>.</p>
				 * @param {sap.ui.core.Control | string} vNoData <p>The noData to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setNoData(vNoData: sap.ui.core.Control | string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getP13nMode">p13nMode</a>.</p><p>Personalization options for the table. The order of the provided options does not influence their order on the UI.</p><p><b>Note:</b> Whether a personalization option is supported depends on the used delegate. Please refer to the documentation of the individual delegates.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
				 * @param {any} sP13nMode <p>New value for property <code>p13nMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setP13nMode(sP13nMode?: any): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getQuickFilter">quickFilter</a>.</p>
				 * @param {sap.ui.core.Control} oQuickFilter <p>The quickFilter to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setQuickFilter(oQuickFilter: sap.ui.core.Control): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getRowSettings">rowSettings</a>.</p>
				 * @param {sap.ui.mdc.table.RowSettings} oRowSettings <p>The rowSettings to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setRowSettings(oRowSettings: sap.ui.mdc.table.RowSettings): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getSelectionMode">selectionMode</a>.</p><p>Selection mode of the table. Specifies whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance.</p><p><b>Note:</b> With the <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a> and server-side models, range selections, including Select All, only work properly if the count is known. Please refer to the documentation of the used model for information on requesting the count, for example, <a target="_self" href="api/sap.ui.model.odata.v4.ODataModel">sap.ui.model.odata.v4.ODataModel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
				 * @param {sap.ui.mdc.enums.TableSelectionMode} sSelectionMode <p>New value for property <code>selectionMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSelectionMode(sSelectionMode?: sap.ui.mdc.enums.TableSelectionMode): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getShowPasteButton">showPasteButton</a>.</p><p>Determines whether the Paste button is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bShowPasteButton <p>New value for property <code>showPasteButton</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowPasteButton(bShowPasteButton?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getShowRowCount">showRowCount</a>.</p><p>Determines whether the number of rows is shown along with the header text.</p><p><b>Note:</b> Whether this feature can be used depends on whether the model used and the data service can provide a count. Please refer to the documentation of the used model for information on requesting the count, for example, <a target="_self" href="api/sap.ui.model.odata.v4.ODataModel">sap.ui.model.odata.v4.ODataModel</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowRowCount <p>New value for property <code>showRowCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowRowCount(bShowRowCount?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getThreshold">threshold</a>.</p><p>Number of records to be requested from the model.</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, the threshold defines the number of rows that are displayed initially, and the number of rows that are added when the table grows (<a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getGrowingMode">growingMode</a>).</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a>, the threshold defines how many additional (not yet visible) data records from the back-end system are pre-fetched. If the <code>threshold</code> is lower than the number of visible rows, the number of visible rows is used as the <code>threshold</code>. If the value is 0, thresholding is disabled.</p><p>If the value is -1, a type-dependent default value is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
				 * @param {number} iThreshold <p>New value for property <code>threshold</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setThreshold(iThreshold?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getType">type</a>.</p>
				 * @param {sap.ui.mdc.table.TableTypeBase | sap.ui.mdc.enums.TableType} vType <p>The type to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setType(vType: sap.ui.mdc.table.TableTypeBase | sap.ui.mdc.enums.TableType): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getUseColumnLabelsAsTooltips">useColumnLabelsAsTooltips</a>.</p><p>If no tooltip has been provided for a column, the column header text will automatically be applied as a tooltip for the column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bUseColumnLabelsAsTooltips <p>New value for property <code>useColumnLabelsAsTooltips</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setUseColumnLabelsAsTooltips(bUseColumnLabelsAsTooltips?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.Table#methods/getVariant">variant</a>.</p>
				 * @param {sap.ui.fl.variants.VariantManagement} oVariant <p>The variant to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setVariant(oVariant: sap.ui.fl.variants.VariantManagement): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.Table#methods/getWidth">width</a>.</p><p>Width of the table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setWidth(sWidth?: sap.ui.core.CSSSize): this;
			}
			/**
			 * <p><p>Defines the personalization mode of the table.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'TableP13nMode'.</p></p>
			 */
			export enum TableP13nMode {
				/**
				 * <p>Aggregation personalization is enabled.</p>
				 */
				Aggregate = "Aggregate",
				/**
				 * <p>Column personalization is enabled.</p>
				 */
				Column = "Column",
				/**
				 * <p>Filter personalization is enabled.</p>
				 */
				Filter = "Filter",
				/**
				 * <p>Group personalization is enabled.</p>
				 */
				Group = "Group",
				/**
				 * <p>Sort personalization is enabled.</p>
				 */
				Sort = "Sort",
			}
			/**
			 * <p><p>Defines the type of table used in the MDC table.</p><p>This enum is part of the 'sap/ui/mdc/library' module export and must be accessed by the property 'TableType'.</p></p>
			 */
			export enum TableType {
				/**
				 * <p>Responsive table (<a target="_self" href="api/sap.m.Table">sap.m.Table</a> control) is used.</p>
				 */
				ResponsiveTable = "ResponsiveTable",
				/**
				 * <p>Grid table (<a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a> control) is used (default)</p>
				 */
				Table = "Table",
			}
			/**
			 */
			export interface TypeConfig {
			}
			/**
			 * <p>The <code>ValueHelp</code> element can be assigned to the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls using the <code>valueHelp</code> association. One <code>ValueHelp</code> element instance can be assigned to multiple fields (like in different table rows). It should be placed in the control tree on the container holding the fields.</p>
			 */
			export abstract class ValueHelp extends sap.ui.mdc.Element {
				/**
				 * <p>Constructor for a new <code>ValueHelp</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new element</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/closed">closed</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.ValueHelp</code> itself.</p><p>This event is fired after the value help has been closed.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.ValueHelp</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachClosed(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/open">open</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.ValueHelp</code> itself.</p><p>This event is fired as the value help opening is triggered.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.ValueHelp</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachOpen(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/opened">opened</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.ValueHelp</code> itself.</p><p>This event is fired as the value help is fully open.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.ValueHelp</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachOpened(oData: any, fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Destroys the dialog in the aggregation <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getDialog">dialog</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDialog(): this;
				/**
				 * <p>Destroys the typeahead in the aggregation <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getTypeahead">typeahead</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTypeahead(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/closed">closed</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachClosed(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/open">open</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachOpen(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/opened">opened</a> event of this <code>sap.ui.mdc.ValueHelp</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachOpened(fnFunction: Function, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/closed">closed</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireClosed(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/open">open</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireOpen(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.ValueHelp#events/opened">opened</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected fireOpened(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/ValueHelpDelegate">ValueHelpDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/ValueHelpDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @returns any <p>Value of property <code>delegate</code></p>
				 */
				getDelegate(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getDialog">dialog</a>.</p><p>Container that is used and opened if the value help icon of the input field is pressed.</p>
				 * @returns sap.ui.mdc.valuehelp.base.IDialogContainer 
				 */
				getDialog(): sap.ui.mdc.valuehelp.base.IDialogContainer;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getTypeahead">typeahead</a>.</p><p>Container that is used and opened in typeahead</p>
				 * @returns sap.ui.mdc.valuehelp.base.ITypeaheadContainer 
				 */
				getTypeahead(): sap.ui.mdc.valuehelp.base.ITypeaheadContainer;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getValidateInput">validateInput</a>.</p><p>If this property is set, the user input of the corresponding field is validated against the value help. If no entry is found for the user input, an error is shown on the field.</p><p>If this property is not set, the user input is still checked against the value help. But if no entry is found, the user input is set to the field if the used data type allows this. (A type parsing error is shown if the user input adheres to the requirements of the used data type.)</p><p><b>Note:</b> The input is validated and compared against the content assigned to the <code>typeahead</code> aggregation. If no content is assigned to the <code>typeahead</code> aggregation, the input is not validated.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>validateInput</code></p>
				 */
				getValidateInput(): boolean;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/ValueHelpDelegate">ValueHelpDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
					name: "sap/ui/mdc/ValueHelpDelegate",
					payload: {}
				}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
				 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDelegate(oDelegate?: any): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getDialog">dialog</a>.</p>
				 * @param {sap.ui.mdc.valuehelp.base.IDialogContainer} oDialog <p>The dialog to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDialog(oDialog: sap.ui.mdc.valuehelp.base.IDialogContainer): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getTypeahead">typeahead</a>.</p>
				 * @param {sap.ui.mdc.valuehelp.base.ITypeaheadContainer} oTypeahead <p>The typeahead to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTypeahead(oTypeahead: sap.ui.mdc.valuehelp.base.ITypeaheadContainer): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/getValidateInput">validateInput</a>.</p><p>If this property is set, the user input of the corresponding field is validated against the value help. If no entry is found for the user input, an error is shown on the field.</p><p>If this property is not set, the user input is still checked against the value help. But if no entry is found, the user input is set to the field if the used data type allows this. (A type parsing error is shown if the user input adheres to the requirements of the used data type.)</p><p><b>Note:</b> The input is validated and compared against the content assigned to the <code>typeahead</code> aggregation. If no content is assigned to the <code>typeahead</code> aggregation, the input is not validated.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bValidateInput <p>New value for property <code>validateInput</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setValidateInput(bValidateInput?: boolean): this;
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace chart {
				/**
				 * <p>Defines the layout data for the <a target="_self" href="api/sap.ui.mdc.Chart#methods/getActions">actions</a> and <a target="_self" href="api/sap.ui.mdc.Chart#methods/getChartActions">chartActions</a> of the <a target="_self" href="api/sap.ui.mdc.Chart">Chart</a>.</p>
				 */
				export class ActionLayoutData extends sap.m.OverflowToolbarLayoutData {
					/**
					 * <p>Constructor for a new <code>ActionLayoutData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new layout data, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new layout data</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.ActionLayoutData#methods/getPosition">position</a>.</p><p>Defines the position of the action within the group of chart actions.</p><p>Default value is <code>EndActions</code>.</p>
					 * @returns sap.ui.mdc.enums.ChartActionPosition <p>Value of property <code>position</code></p>
					 */
					getPosition(): sap.ui.mdc.enums.ChartActionPosition;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.ActionLayoutData#methods/getPosition">position</a>.</p><p>Defines the position of the action within the group of chart actions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>EndActions</code>.</p>
					 * @param {sap.ui.mdc.enums.ChartActionPosition} sPosition <p>New value for property <code>position</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPosition(sPosition?: sap.ui.mdc.enums.ChartActionPosition): this;
				}
				/**
				 * <p>The <code>ChartImplementationContainer</code> creates a container for the <code>content</code> (chart) and <code>noDataContent</code>. Based on the <code>showNoDataStruct</code> the <code>content</code> or <code>noDataContent</code> will be shown.</p>
				 */
				export class ChartImplementationContainer extends sap.ui.core.Control {
					/**
					 * <p>Constructor for a new ChartImplementationContainer.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no id is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys the noDataContent in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getNoDataContent">noDataContent</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyNoDataContent(): this;
					/**
					 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getChartNoDataContent">chartNoDataContent</a>, or <code>null</code>.</p>
					 * @returns sap.ui.core.ID | null 
					 */
					getChartNoDataContent(): sap.ui.core.ID | null;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getContent">content</a>.</p><p>Content/Chart to be visualized.</p>
					 * @returns sap.ui.core.Control 
					 */
					getContent(): sap.ui.core.Control;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getNoDataContent">noDataContent</a>.</p><p>Control that is shown when there is no data available inside the chart.<br> This can be used if the standard behavior of the used chart control needs to be overriden.<br> To show this <code>noDataContent</code>, set <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getShowNoDataStruct">showNoDataStruct</a>.</p>
					 * @returns sap.ui.core.Control 
					 */
					getNoDataContent(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.ChartImplementationContainer#methods/getShowNoDataStruct">showNoDataStruct</a>.</p><p>Toggles the visibility of the noDataContent & content</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>showNoDataStruct</code></p>
					 */
					getShowNoDataStruct(): boolean;
				}
				/**
				 * <p>The <code>ChartSelectionDetails</code> control creates a <code>sap.m.SelectionDetails</code> popover based on metadata and the configuration specified.</p>
				 */
				export class ChartSelectionDetails extends sap.m.SelectionDetails {
					/**
					 * <p>Constructor for a new ChartSelectionDetails.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no id is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails#methods/getEnableNavCallback">enableNavCallback</a>.</p><p>Callback function that is called for each <code>SelectionDetailsItem</code> to determine if the navigation is enabled. The callback is called with the following parameters: <ul> <li><code>oSelectionDetails</code> <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails">sap.ui.mdc.chart.ChartSelectionDetails</a>: Instance of this <code>ChartSelectionDetails</code></li> <li><code>oContext</code> <a target="_self" href="api/sap.ui.model.Context">sap.ui.model.Context</a>: Binding context of the <code>SelectionDetailsItem</code></li> </ul> The return value of the callback has to be of type <code>boolean</code>.</p>
					 * @returns Function <p>Value of property <code>enableNavCallback</code></p>
					 */
					getEnableNavCallback(): Function;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails#methods/getFetchFieldInfosCallback">fetchFieldInfosCallback</a>.</p><p>Callback function that is called to determine navigation targets when clicking on a <code>SelectionDetailsItem</code>. The callback is called with the following parameters: <ul> <li><code>oSelectionDetails</code> <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails">sap.ui.mdc.chart.ChartSelectionDetails</a>: Instance of this <code>ChartSelectionDetails</code></li> <li><code>oContext</code> <a target="_self" href="api/sap.ui.model.Context">sap.ui.model.Context</a>: Binding context of the <code>SelectionDetailsItem</code></li> </ul> The return value of the callback has to be of type <code>Promise</code> resolving in a <code>Map</code> containing a <code>string</code> as key and a <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase">sap.ui.mdc.field.FieldInfoBase</a> as value.</p>
					 * @returns Function <p>Value of property <code>fetchFieldInfosCallback</code></p>
					 */
					getFetchFieldInfosCallback(): Function;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails#methods/getEnableNavCallback">enableNavCallback</a>.</p><p>Callback function that is called for each <code>SelectionDetailsItem</code> to determine if the navigation is enabled. The callback is called with the following parameters: <ul> <li><code>oSelectionDetails</code> <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails">sap.ui.mdc.chart.ChartSelectionDetails</a>: Instance of this <code>ChartSelectionDetails</code></li> <li><code>oContext</code> <a target="_self" href="api/sap.ui.model.Context">sap.ui.model.Context</a>: Binding context of the <code>SelectionDetailsItem</code></li> </ul> The return value of the callback has to be of type <code>boolean</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {Function} fnEnableNavCallback <p>New value for property <code>enableNavCallback</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEnableNavCallback(fnEnableNavCallback: Function): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails#methods/getFetchFieldInfosCallback">fetchFieldInfosCallback</a>.</p><p>Callback function that is called to determine navigation targets when clicking on a <code>SelectionDetailsItem</code>. The callback is called with the following parameters: <ul> <li><code>oSelectionDetails</code> <a target="_self" href="api/sap.ui.mdc.chart.ChartSelectionDetails">sap.ui.mdc.chart.ChartSelectionDetails</a>: Instance of this <code>ChartSelectionDetails</code></li> <li><code>oContext</code> <a target="_self" href="api/sap.ui.model.Context">sap.ui.model.Context</a>: Binding context of the <code>SelectionDetailsItem</code></li> </ul> The return value of the callback has to be of type <code>Promise</code> resolving in a <code>Map</code> containing a <code>string</code> as key and a <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase">sap.ui.mdc.field.FieldInfoBase</a> as value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {Function} fnFetchFieldInfosCallback <p>New value for property <code>fetchFieldInfosCallback</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFetchFieldInfosCallback(fnFetchFieldInfosCallback: Function): this;
				}
				/**
				 * <p><p>Chart <code>ChartTypeLayoutConfig</code> type.</p></p>
				 */
				export interface ChartTypeLayoutConfig {
					/**
					 * <p>identifier for the chart type</p>
					 */
					key: any;
					/**
					 * <p>Layout configuration of chart type</p>
					 */
					allowedLayoutOptions: any;
				}
				/**
				 * <p><p>Defines the chart <code>ChartTypeObject</code> type.</p></p>
				 */
				export interface ChartTypeObject {
					/**
					 * <p>Unique key of the chart type</p>
					 */
					key: any;
					/**
					 * <p>URI for the icon for the current chart type</p>
					 */
					icon: any;
					/**
					 * <p>Name of the current chart type</p>
					 */
					text: any;
				}
				/**
				 * <p>The <code>Item</code> control for the chart/property metadata used within MDC Chart.</p>
				 */
				export class Item extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>Item</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getLabel">label</a>.</p><p>Label for the item, either as a string literal or by a pointer, using the binding to some property containing the label.</p>
					 * @returns string <p>Value of property <code>label</code></p>
					 */
					getLabel(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getPropertyKey">propertyKey</a>.</p><p>The unique identifier of the chart item that reflects the name of property in the PropertyInfo.</p>
					 * @returns string <p>Value of property <code>propertyKey</code></p>
					 */
					getPropertyKey(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getRole">role</a>.</p><p>Specifies the role of the item for the chart (category, axis1...). This is specific for the used chart library.<br> <b>Note:</b> This property must not be changed after initialization.</p>
					 * @returns string <p>Value of property <code>role</code></p>
					 */
					getRole(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getType">type</a>.</p><p>Specifies the type of the item for the chart (groupable and aggregatable). This is specific for the used chart library.</p>
					 * @returns string <p>Value of property <code>type</code></p>
					 */
					getType(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getLabel">label</a>.</p><p>Label for the item, either as a string literal or by a pointer, using the binding to some property containing the label.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sLabel <p>New value for property <code>label</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLabel(sLabel: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getPropertyKey">propertyKey</a>.</p><p>The unique identifier of the chart item that reflects the name of property in the PropertyInfo.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sPropertyKey <p>New value for property <code>propertyKey</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPropertyKey(sPropertyKey: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getRole">role</a>.</p><p>Specifies the role of the item for the chart (category, axis1...). This is specific for the used chart library.<br> <b>Note:</b> This property must not be changed after initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sRole <p>New value for property <code>role</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRole(sRole: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.chart.Item#methods/getType">type</a>.</p><p>Specifies the type of the item for the chart (groupable and aggregatable). This is specific for the used chart library.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sType <p>New value for property <code>type</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setType(sType: string): this;
				}
				/**
				 * <p><p>An object literal describing a data property in the context of a <a target="_self" href="api/sap.ui.mdc.Chart">sap.ui.mdc.Chart</a>.</p><p>When specifying the <code>PropertyInfo</code> objects in the <a target="_self" href="api/sap.ui.mdc.Chart#methods/getPropertyInfo">propertyInfo</a> property, the following attributes need to be specified: <ul> <li><code>key</code></li> <li><code>label</code></li> <li><code>groupable</code></li> <li><code>aggregatable</code></li> <li><code>role</code></li> <li><code>dataType</code></li> </ul></p></p>
				 */
				export interface PropertyInfo {
					/**
					 * <p>Defines whether the property is groupable and is selectable as a dimension in the chart</p>
					 */
					groupable: any;
					/**
					 * <p>Defines whether the property is aggregatable and is selectable as a measure in the chart</p>
					 */
					aggregatable: any;
					/**
					 * <p>Defines the role that the property visualizes inside the chart</p>
					 */
					role: any;
				}
				/**
				 * <p><p>Event handler for <code>SelectionDetails</code> popover.</p></p>
				 */
				export interface SelectionDetails {
					/**
					 * <p>ID of the selection event</p>
					 */
					eventId: any;
					/**
					 * <p>Reference to inner chart</p>
					 */
					listener: any;
				}
				/**
				 * <p>The <code>SelectionDetailsActions</code> is used to provide additional functionality to the Details popover.</p>
				 */
				export class SelectionDetailsActions extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new SelectionDetailsActions.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some actionGroup to the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p>
					 * @param {sap.ui.core.Item} oActionGroup <p>The actionGroup to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addActionGroup(oActionGroup: sap.ui.core.Item): this;
					/**
					 * <p>Adds some detailsAction to the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p>
					 * @param {sap.ui.core.Item} oDetailsAction <p>The detailsAction to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addDetailsAction(oDetailsAction: sap.ui.core.Item): this;
					/**
					 * <p>Adds some detailsItemAction to the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p>
					 * @param {sap.ui.core.Item} oDetailsItemAction <p>The detailsItemAction to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addDetailsItemAction(oDetailsItemAction: sap.ui.core.Item): this;
					/**
					 * <p>Destroys all the actionGroups in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyActionGroups(): this;
					/**
					 * <p>Destroys all the detailsActions in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyDetailsActions(): this;
					/**
					 * <p>Destroys all the detailsItemActions in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyDetailsItemActions(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p><p>Action <code>item</code> shown in the Groups area of the details.</p>
					 * @returns sap.ui.core.Item[] 
					 */
					getActionGroups(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p><p>Action <code>item</code> shown in the Details area of the details.</p>
					 * @returns sap.ui.core.Item[] 
					 */
					getDetailsActions(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p><p>Action <code>item</code> shown in the Items area of the details popover.</p>
					 * @returns sap.ui.core.Item[] 
					 */
					getDetailsItemActions(): any;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Item</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Item} oActionGroup <p>The actionGroup whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfActionGroup(oActionGroup: sap.ui.core.Item): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Item</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Item} oDetailsAction <p>The detailsAction whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfDetailsAction(oDetailsAction: sap.ui.core.Item): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Item</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Item} oDetailsItemAction <p>The detailsItemAction whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfDetailsItemAction(oDetailsItemAction: sap.ui.core.Item): number;
					/**
					 * <p>Inserts a actionGroup into the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p>
					 * @param {sap.ui.core.Item} oActionGroup <p>The actionGroup to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the actionGroup should be inserted at; for a negative value of <code>iIndex</code>, the actionGroup is inserted at position 0; for a value greater than the current size of the aggregation, the actionGroup is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertActionGroup(oActionGroup: sap.ui.core.Item, iIndex: number): this;
					/**
					 * <p>Inserts a detailsAction into the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p>
					 * @param {sap.ui.core.Item} oDetailsAction <p>The detailsAction to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the detailsAction should be inserted at; for a negative value of <code>iIndex</code>, the detailsAction is inserted at position 0; for a value greater than the current size of the aggregation, the detailsAction is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertDetailsAction(oDetailsAction: sap.ui.core.Item, iIndex: number): this;
					/**
					 * <p>Inserts a detailsItemAction into the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p>
					 * @param {sap.ui.core.Item} oDetailsItemAction <p>The detailsItemAction to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the detailsItemAction should be inserted at; for a negative value of <code>iIndex</code>, the detailsItemAction is inserted at position 0; for a value greater than the current size of the aggregation, the detailsItemAction is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertDetailsItemAction(oDetailsItemAction: sap.ui.core.Item, iIndex: number): this;
					/**
					 * <p>Removes a actionGroup from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p>
					 * @param {number | string | sap.ui.core.Item} vActionGroup <p>The actionGroup to remove or its index or id</p>
					 * @returns sap.ui.core.Item | null <p>The removed actionGroup or <code>null</code></p>
					 */
					removeActionGroup(vActionGroup: number | string | sap.ui.core.Item): sap.ui.core.Item | null;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getActionGroups">actionGroups</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Item[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllActionGroups(): any;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Item[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllDetailsActions(): any;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Item[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllDetailsItemActions(): any;
					/**
					 * <p>Removes a detailsAction from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsActions">detailsActions</a>.</p>
					 * @param {number | string | sap.ui.core.Item} vDetailsAction <p>The detailsAction to remove or its index or id</p>
					 * @returns sap.ui.core.Item | null <p>The removed detailsAction or <code>null</code></p>
					 */
					removeDetailsAction(vDetailsAction: number | string | sap.ui.core.Item): sap.ui.core.Item | null;
					/**
					 * <p>Removes a detailsItemAction from the aggregation <a target="_self" href="api/sap.ui.mdc.chart.SelectionDetailsActions#methods/getDetailsItemActions">detailsItemActions</a>.</p>
					 * @param {number | string | sap.ui.core.Item} vDetailsItemAction <p>The detailsItemAction to remove or its index or id</p>
					 * @returns sap.ui.core.Item | null <p>The removed detailsItemAction or <code>null</code></p>
					 */
					removeDetailsItemAction(vDetailsItemAction: number | string | sap.ui.core.Item): sap.ui.core.Item | null;
				}
				/**
				 * <p><p>Chart <code>ZoomState</code> type.</p></p>
				 */
				export interface ZoomState {
					/**
					 * <p>Zooming is enabled if set to <code>true</code></p>
					 */
					enabled: any;
					/**
					 * <p>Current zoom level of the chart in percent (between 0 and 1)</p>
					 */
					currentZoomLevel: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Modules to handle conditions used in <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</p></p>
			 */
			namespace condition {
				/**
				 * <p>JSON based Model for <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls. The model stores the entered values as <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObjects</a>.</p>
				 */
				export class ConditionModel extends sap.ui.model.json.JSONModel {
					/**
					 */
					constructor();
				}
				/**
				 * <p>Property binding implementation for Conditions.</p>
				 */
				export class ConditionModelPropertyBinding extends sap.ui.model.json.JSONPropertyBinding {
					/**
					 * <p>Creates a new <code>ConditionModelPropertyBinding</code>.</p><p>This constructor must only be called by subclasses or model implementations, not by application or control code. Such code should use <a target="_self" href="api/sap.ui.mdc.condition.ConditionModel#methods/bindProperty">ConditionModel.bindProperty</a> on the corresponding model instance instead.</p>
					 * @param {sap.ui.mdc.condition.ConditionModel} oModel <p>Model instance that this binding is created for and that it belongs to</p>
					 * @param {string} sPath <p>Binding path to be used for this binding</p>
					 * @param {sap.ui.model.Context} oContext <p>Binding context relative to which a relative binding path will be resolved</p>
					 * @param {any} mParameters <p>Map of optional parameters as defined by subclasses; this class does not have any parameters of its own</p>
					 */
					constructor(oModel: sap.ui.mdc.condition.ConditionModel, sPath: string, oContext: sap.ui.model.Context, mParameters?: any);
				}
				/**
				 * <p><p>Condition object type defining the structure of a condition.</p></p>
				 */
				export interface ConditionObject {
					/**
					 * <p>Operator of the condition. The standard operators can are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
					 */
					operator: any;
					/**
					 * <p>Array of values of the condition. Depending on the <code>operator</code>, this contains one or more entries. The entries are stored in an internal format regarding the used data type.</p>
					 */
					values: any;
					/**
					 * <p>In parameters of the condition. For each field path, a value is stored. (It is obsolete and only filled for conditions stored on old user-variants.)</p>
					 */
					inParameters?: any;
					/**
					 * <p>Out parameters of the condition. For each field path, a value is stored. (It is obsolete and only filled for conditions stored on old user-variants.)</p>
					 */
					outParameters?: any;
					/**
					 * <p>If set, the condition is empty (used as initially empty condition in <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions">Conditions</a>)</p>
					 */
					isEmpty?: any;
					/**
					 * <p>If set to <code>ConditionValidated.Validated</code>, the condition is validated (by the value help) and not shown in the <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions">Conditions</a> content</p>
					 */
					validated: any;
					/**
					 * <p>Payload of the condition. Set by application. Data needs to be stringified. (as stored and loaded in variants)</p>
					 */
					payload?: any;
				}
				/**
				 * <p>Instances of this exception are thrown when constraints of a type are violated.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="api/sap.ui.model.SimpleType#methods/validateValue">sap.ui.model.SimpleType#validateValue</a></li></ul></p>
				 */
				export class ConditionValidateException {
					/**
					 * <p>Creates a new ValidateException for conditions.</p>
					 * @param {string} message <p>A message explaining why the validation failed; this message is language dependent as it may be displayed on the UI</p>
					 * @param {any} violatedConstraints <p>Names of the constraints that are violated; the names should be the same as documented in the type's constructor</p>
					 * @param {sap.ui.mdc.condition.ConditionObject} oCondition <p>Condition with validation error</p>
					 * @param {any} aConditions <p>Array of conditions including a condition with validation error</p>
					 */
					constructor(message: string, violatedConstraints: any, oCondition: sap.ui.mdc.condition.ConditionObject, aConditions: any);
				}
				/**
				 * <p>Creates an <code>sap.ui.mdc.condition.Operator</code> object. This is used in the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control to define which filter operators are supported.</p><p>If a function or property is initial, the default implementation is used.</p>
				 */
				export class Operator extends sap.ui.base.Object {
					/**
					 * @param {any} oConfiguration <p>Properties of the operator</p>
					 */
					constructor(oConfiguration: any);
					/**
					 * <p>Sets an overwrite function for some of the <code>operator</code> functions.</p>
					 * @param {sap.ui.mdc.enums.OperatorOverwrite} sMethodName <p>name of the function which will be overwritten</p>
					 * @param {Function} fnOverwrite <p>new callback function</p>
					 * @returns Function <p>the original function</p>
					 */
					overwrite(sMethodName: sap.ui.mdc.enums.OperatorOverwrite, fnOverwrite: Function): Function;
				}
				/**
				 * <p>Maps an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a> to a <a target="_self" href="api/sap.m.DynamicDateOption">DynamicDateOption</a>.</p>
				 */
				export class OperatorDynamicDateOption extends sap.m.DynamicDateOption {
					/**
					 * <p>Constructor for a new OperatorDynamicDateOption.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>Creates a <code>sap.ui.mdc.condition.RangeOperator</code> object. This is used in the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control to define which filter operators are supported.</p><p><b>Note:</b> Use this class only for filter field of type date or time related data types.</p><p>If a function or property is initial, the default implementation is used.</p>
				 */
				export class RangeOperator extends sap.ui.mdc.condition.Operator {
					/**
					 * @param {any} oConfiguration <p>Includes all parameters of <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a> and adds some special ones</p>
					 */
					constructor(oConfiguration: any);
				}
				/**
				 * <p><p>Object type defining the structure of a <code>ValueType</code> for a <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>.</p></p>
				 */
				export interface ValueType {
					/**
					 * <p>name of the data type</p>
					 */
					name: any;
					/**
					 * <p><code>formatOptions</code> of the data type</p>
					 */
					formatOptions: any;
					/**
					 * <p><code>constraints</code> of the data type</p>
					 */
					constraints: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace condition {
				/**
				 * <p><p>Utilities to create conditions to be used in <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</p></p>
				 */
				namespace Condition {
					/**
					 * <p>Creates a condition object.</p>
					 * @param {string} sOperator <p>Operator for the condition. The standard operators can are mentioned in <a target="_self" href="api/sap.ui.mdc.enums.OperatorName">OperatorName</a>.</p>
					 * @param {any} aValues <p>Array of values for the condition</p>
					 * @param {any} oInParameters <p>In parameters of the condition. (Do not use it for new conditions, use payload instead.)</p>
					 * @param {any} oOutParameters <p>Out parameters of the condition. (Do not use it for new conditions, use payload instead.)</p>
					 * @param {sap.ui.mdc.enums.ConditionValidated} sValidated <p>If set to <code>ConditionValidated.Validated</code>, the condition is validated (by the value help) and not shown in the <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions">Conditions</a> content</p>
					 * @param {any} oPayload <p>Payload of the condition</p>
					 * @returns sap.ui.mdc.condition.ConditionObject <p>The new condition object with the given operator and values</p>
					 */
					function createCondition(sOperator: string, aValues: any, oInParameters: any, oOutParameters: any, sValidated: sap.ui.mdc.enums.ConditionValidated, oPayload?: any): sap.ui.mdc.condition.ConditionObject;
					/**
					 * <p>Creates a condition instance for a condition representing a item chosen from the value help.</p><p>This is a "equal to" (EQ) condition with key and description. It is used for entries selected in the field help and for everything entered in the <a target="_self" href="api/sap.ui.mdc.Field">Field</a> control.</p>
					 * @param {any} vKey <p>Key value for the condition</p>
					 * @param {string} sDescription <p>Description of the operator</p>
					 * @param {any} oInParameters <p>In parameters of the condition. (Do not use it for new conditions, use payload instead.)</p>
					 * @param {any} oOutParameters <p>Out parameters of the condition. (Do not use it for new conditions, use payload instead.)</p>
					 * @param {any} oPayload <p>Payload of the condition</p>
					 * @returns sap.ui.mdc.condition.ConditionObject <p>The new condition object with the EQ operator along with <code>sKey</code> and <code>sDescription</code> as <code>aValues</code></p>
					 */
					function createItemCondition(vKey: any, sDescription: string, oInParameters?: any, oOutParameters?: any, oPayload?: any): sap.ui.mdc.condition.ConditionObject;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace condition {
				/**
				 * <p><p>Utilities for condition conversion</p></p>
				 */
				namespace ConditionConverter {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace condition {
				/**
				 * <p><p>Utility to convert <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">conditions</a> of a <a target="_self" href="api/sap.ui.mdc.condition.ConditionModel">ConditionModel</a> into <a target="_self" href="api/sap.ui.model.Filter">Filter</a></p></p>
				 */
				namespace FilterConverter {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace condition {
				/**
				 * <p><p>Utilities to handle <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operators</a> and <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">conditions</a>.</p></p>
				 */
				namespace FilterOperatorUtil {
					/**
					 * <p>Adds an operator to the list of known operators.</p><p><b>Note:</b> For application-specific operators, use an application-specific name to prevent conflicts with different applications.</p>
					 * @param {sap.ui.mdc.condition.Operator} oOperator <p>Operator</p>
					 */
					function addOperator(oOperator: sap.ui.mdc.condition.Operator): void;
					/**
					 * <p>Adds an operator to the list of valid operators for a type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
					 */
					function addOperatorForType(sType: sap.ui.mdc.enums.BaseType, vOperator: sap.ui.mdc.condition.Operator | string): void;
					/**
					 * <p>Adds an array of operators to the list of known operators.</p><p><b>Note:</b> For application-specific operators, use an application-specific name to prevent conflicts with different applications.</p>
					 * @param {any} aOperators <p>Array of operators</p>
					 */
					function addOperators(aOperators: any): void;
					/**
					 * <p>Returns the default operator for the given basic type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @returns sap.ui.mdc.condition.Operator <p>the default operator for the given type</p>
					 */
					function getDefaultOperator(sType: sap.ui.mdc.enums.BaseType): sap.ui.mdc.condition.Operator;
					/**
					 * <p>Returns the operator object for the given operator name.</p>
					 * @param {sap.ui.mdc.enums.OperatorName | string} sOperator <p>Name of the operator</p>
					 * @returns sap.ui.mdc.condition.Operator | undefined <p>the operator object, or <code>undefined<code> if the operator with the requested name does not exist</p>
					 */
					function getOperator(sOperator: sap.ui.mdc.enums.OperatorName | string): sap.ui.mdc.condition.Operator | undefined;
					/**
					 * <p>Returns all available default operators for the given type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @returns string[] <p>an array with the supported filter operator names</p>
					 */
					function getOperatorsForType(sType: sap.ui.mdc.enums.BaseType): any;
					/**
					 * <p>Inserts an operator into the list of valid operators for a type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
					 * @param {number} idx <p>Index of the operator in the list of operators for this type</p>
					 */
					function insertOperatorForType(sType: sap.ui.mdc.enums.BaseType, vOperator: sap.ui.mdc.condition.Operator | string, idx: number): void;
					/**
					 * <p>Removes an operator from the list of known operators.</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
					 */
					function removeOperator(vOperator: sap.ui.mdc.condition.Operator | string): void;
					/**
					 * <p>Removes an operator from the list of valid operators for a type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vOperator <p>The operator instance or operator name</p>
					 */
					function removeOperatorForType(sType: sap.ui.mdc.enums.BaseType, vOperator: sap.ui.mdc.condition.Operator | string): void;
					/**
					 * <p>Removes all given operators from the list of known operators.</p><p><b>Note</b>: <code>aOperators</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>, the instance itself, or multiple operators inside an array.</p>
					 * @param {any} aOperators <p>Array of operators</p>
					 */
					function removeOperators(aOperators: any): void;
					/**
					 * <p>Sets the default operator for the list of operators for a type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vDefaultOperator <p>The default operator instance or default operator name</p><p><b>Note</b>: <code>vDefaultOperator</code> must exist as a valid operator for the type.</p>
					 */
					function setDefaultOperatorForType(sType: sap.ui.mdc.enums.BaseType, vDefaultOperator: sap.ui.mdc.condition.Operator | string): void;
					/**
					 * <p>Adds operators to the list of valid operators for a type.</p><p><b>Note</b>: <code>aOperators</code> can be the name of an <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>, the instance itself, or multiple operators inside an array.</p><p><b>Note</b>: <code>vDefaultOperator</code> must exist as a valid operator for the type.</p>
					 * @param {sap.ui.mdc.enums.BaseType} sType <p>Basic type</p>
					 * @param {any} aOperators <p>Operators</p>
					 * @param {sap.ui.mdc.condition.Operator | string} vDefaultOperator <p>The default operator instance or default operator name</p>
					 */
					function setOperatorsForType(sType: sap.ui.mdc.enums.BaseType, aOperators: any, vDefaultOperator: sap.ui.mdc.condition.Operator | string): void;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Enumerations for MDC library</p></p>
			 */
			namespace enums {

				/**
				 * <p><p>Defines in what mode a <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered.</p></p>
				 */
				export enum EditMode {
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in disabled mode</p>
					 */
					Disabled = "Disabled",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in display mode</p>
					 */
					Display = "Display",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in editable mode</p>
					 */
					Editable = "Editable",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is editable, and the other parts are in display mode.</p>
					 */
					EditableDisplay = "EditableDisplay",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is editable, and the other parts are read-only.</p>
					 */
					EditableReadOnly = "EditableReadOnly",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in read-only mode</p>
					 */
					ReadOnly = "ReadOnly",
				}

				/**
				 * <p><p>Defines the delta types of the <code>sap.ui.mdc.p13n.Engine</code>.</p></p>
				 */
				export enum ProcessingStrategy {
				}
				/**
				 * <p><p>Enumeration of the propagation reason in the condition propagation callback of the <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p></p>
				 */
				export enum PropagationReason {
					/**
					 * <p>Triggered by connected control after processing valuehelp output</p>
					 */
					ControlChange = "ControlChange",
					/**
					 * <p>Triggered by <code>ValueHelp</code> itself on <code>getItemForValue</code></p>
					 */
					Info = "Info",
					/**
					 * <p>Triggered by <code>ValueHelp</code> itself on selection</p>
					 */
					Select = "Select",
				}

				/**
				 * <p><p>Enumeration of the possible selection types</p></p>
				 */
				export enum SelectType {
					/**
					 * <p>The given conditions are just added to the existing ones, if they don't already exist.</p>
					 */
					Add = "Add",
					/**
					 * <p>The given conditions are removed.</p>
					 */
					Remove = "Remove",
					/**
					 * <p>The given conditions are set and replace the existing ones.</p>
					 */
					Set = "Set",
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Enumerations for <code>sap.ui.mdc</code> library</p></p>
			 */
			namespace enums {
				/**
				 * <p><p>Defines the alignment of the <code>ActionToolbarAction</code> action control.</p></p>
				 */
				export enum ActionToolbarActionAlignment {
					/**
					 * <p>Align to the beginning</p>
					 */
					Begin = "Begin",
					/**
					 * <p>Align to the end</p>
					 */
					End = "End",
				}
				/**
				 * <p><p>Enumeration of the possible basic data types</p><p>In <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, different data types can be used. These data types might be model-dependent. To handle them model-independently, basic types are used internally.</p></p>
				 */
				export enum BaseType {
					/**
					 * <p>Data type represents a Boolean</p>
					 */
					Boolean = "Boolean",
					/**
					 * <p>Data type represents a date</p>
					 */
					Date = "Date",
					/**
					 * <p>Data type represents a date with time</p>
					 */
					DateTime = "DateTime",
					/**
					 * <p>Data type represents a number. (This can be integer, float or any other numeric type.)</p>
					 */
					Numeric = "Numeric",
					/**
					 * <p>Data type represents a string</p>
					 */
					String = "String",
					/**
					 * <p>Data type represents a time</p>
					 */
					Time = "Time",
					/**
					 * <p>Data type represents a unit. A composite type with a number and a unit part is used.</p>
					 */
					Unit = "Unit",
				}
				/**
				 * <p><p>Defines the supported positions for chart-relevant actions within the chart toolbar, in accordance with the <a target="_blank" rel="noopener noreferrer" href="https://www.sap.com/design-system/fiori-design-web/ui-elements/chart-toolbar/">SAP Design System</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
							title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p></p>
				 */
				export enum ChartActionPosition {
					/**
					 * <p>Extension point for actions displayed after all chart-relevant actions.</p>
					 */
					EndActions = "EndActions",
					/**
					 * <p>The position of the drill-down action in the personalization actions group.</p>
					 */
					PersonalizationActionsDrillDown = "PersonalizationActionsDrillDown",
					/**
					 * <p>The position of the legend action in the personalization actions group.</p>
					 */
					PersonalizationActionsLegend = "PersonalizationActionsLegend",
					/**
					 * <p>The position of the selection details action in the personalization actions group.</p>
					 */
					PersonalizationActionsSelectionDetails = "PersonalizationActionsSelectionDetails",
					/**
					 * <p>The position of the settings action in the personalization actions group.</p>
					 */
					PersonalizationActionsSettings = "PersonalizationActionsSettings",
					/**
					 * <p>The position of the zoom in action in the personalization actions group.</p>
					 */
					PersonalizationActionsZoomIn = "PersonalizationActionsZoomIn",
					/**
					 * <p>The position of the zoom out action in the personalization actions group.</p>
					 */
					PersonalizationActionsZoomOut = "PersonalizationActionsZoomOut",
					/**
					 * <p>Extension point for the share actions. These actions allow users to share chart content with another application or with the homepage as a tile, such as Send as Email, Save as Tile.</p>
					 */
					ShareActions = "ShareActions",
					/**
					 * <p>Extension point for the view actions. These actions change the representation of the entire chart, such as View Switch, Fullscreen.</p>
					 */
					ViewActions = "ViewActions",
					/**
					 * <p>The position of the chart type menu in the view actions group.</p>
					 */
					ViewActionsChartType = "ViewActionsChartType",
				}
				/**
				 * <p><p>Defines the personalization mode of the chart.</p></p>
				 */
				export enum ChartP13nMode {
					/**
					 * <p>Filter personalization is enabled.</p>
					 */
					Filter = "Filter",
					/**
					 * <p>Item personalization is enabled.</p>
					 */
					Item = "Item",
					/**
					 * <p>Sort personalization is enabled.</p>
					 */
					Sort = "Sort",
					/**
					 * <p>Chart type personalization is enabled.</p>
					 */
					Type = "Type",
				}
				/**
				 * <p><p>Defines the types of chart actions in the toolbar.<br> Can be used to remove some of the default <code>ToolbarAction</code>. For more information, see <a target="_self" href="api/sap.ui.mdc.Chart#methods/ignoreToolbarActions">sap.ui.mdc.Chart#ignoreToolbarActions</a>.</p></p>
				 */
				export enum ChartToolbarActionType {
					/**
					 * <p>Drill-down and drill-up action.</p>
					 */
					DrillDownUp = "DrillDownUp",
					/**
					 * <p>Legend action.</p>
					 */
					Legend = "Legend",
					/**
					 * <p>Zoom-in and zoom-out action.</p>
					 */
					ZoomInOut = "ZoomInOut",
				}
				/**
				 * <p><p>Enumeration of the validated state of conditions</p><p>If a <code>Condition</code> is chosen from a value help or validated against a value help it is set to be validated. In this case the corresponding item in the value help is shown as selected.</p><p>If the validated state of the <code>Condition</code> is undefined this means it is not defined if it is validated or not.</p></p>
				 */
				export enum ConditionValidated {
					/**
					 * <p>Condition is not validated</p>
					 */
					NotValidated = "NotValidated",
					/**
					 * <p>Condition is validated</p>
					 */
					Validated = "Validated",
				}
				/**
				 * <p><p>Defines in which mode the content of a <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered.</p></p>
				 */
				export enum ContentMode {
					/**
					 * <p>Display mode for single value</p>
					 */
					Display = "Display",
					/**
					 * <p>Display mode for multiline single value</p>
					 */
					DisplayMultiLine = "DisplayMultiLine",
					/**
					 * <p>Display mode for multiple values</p>
					 */
					DisplayMultiValue = "DisplayMultiValue",
					/**
					 * <p>Edit mode for single value</p>
					 */
					Edit = "Edit",
					/**
					 * <p>Edit mode for single value field if a field help is assigned To support field help, in some cases a different control needs to be rendered.</p>
					 */
					EditForHelp = "EditForHelp",
					/**
					 * <p>Edit mode for multiple lines single value</p>
					 */
					EditMultiLine = "EditMultiLine",
					/**
					 * <p>Edit mode for multiple values</p>
					 */
					EditMultiValue = "EditMultiValue",
					/**
					 * <p>Edit mode for operator dependent controls This is used for single value and only one operator.</p>
					 */
					EditOperator = "EditOperator",
					/**
					 * <p>Edit mode for single value field that is rendered as <code>Select</code> control</p>
					 */
					EditSelect = "EditSelect",
				}
				/**
				 * <p><p>Defines the output of a <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control.</p><p>For the <a target="_self" href="api/sap.ui.mdc.Field">Field</a> control, this enumeration defines how the <code>value</code> and <code>additionalValue</code> properties are formatted.</p><p>For the <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, this enumeration defines how the <code>key</code> and <code>description</code> properties of the items are formatted.</p><p>For the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control, this enumeration defines how key and description of equal conditions are formatted.</p></p>
				 */
				export enum FieldDisplay {
					/**
					 * <p>Only the description is displayed</p>
					 */
					Description = "Description",
					/**
					 * <p>The description and the value (key) are displayed in the field. The value (key) is displayed after the description in brackets.</p>
					 */
					DescriptionValue = "DescriptionValue",
					/**
					 * <p>Only the value (key) is displayed</p>
					 */
					Value = "Value",
					/**
					 * <p>The value (key) and the description are displayed in the field. The description is displayed after the value (key) in brackets.</p>
					 */
					ValueDescription = "ValueDescription",
				}
				/**
				 * <p><p>Defines in what mode a <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered.</p></p>
				 */
				export enum FieldEditMode {
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in disabled mode.</p>
					 */
					Disabled = "Disabled",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is disabled, and the other parts are in display mode.</p>
					 */
					DisabledDisplay = "DisabledDisplay",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in display mode.</p>
					 */
					Display = "Display",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in editable mode.</p>
					 */
					Editable = "Editable",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is editable, and the other parts are in display mode.</p>
					 */
					EditableDisplay = "EditableDisplay",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is editable, and the other parts are read-only.</p>
					 */
					EditableReadOnly = "EditableReadOnly",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> is rendered in read-only mode.</p>
					 */
					ReadOnly = "ReadOnly",
					/**
					 * <p>If more than one control is rendered by the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> control, the first part is read-only, and the other parts are in display mode.</p>
					 */
					ReadOnlyDisplay = "ReadOnlyDisplay",
				}
				/**
				 * <p><p>Defines the personalization mode of the filter bar.</p></p>
				 */
				export enum FilterBarP13nMode {
					/**
					 * <p>Filter item personalization is enabled.</p>
					 */
					Item = "Item",
					/**
					 * <p>Condition personalization is enabled.</p>
					 */
					Value = "Value",
				}
				/**
				 * <p><p>Enumeration of the possible validation types.</p></p>
				 */
				export enum FilterBarValidationStatus {
					/**
					 * <p>Ongoing asynchronous validation.</p>
					 */
					AsyncValidation = "AsyncValidation",
					/**
					 * <p>Filter field in error state.</p>
					 */
					FieldInErrorState = "FieldInErrorState",
					/**
					 * <p>No errors detected.</p>
					 */
					NoError = "NoError",
					/**
					 * <p>Change is being applied.</p>
					 */
					OngoingChangeAppliance = "OngoingChangeAppliance",
					/**
					 * <p>Required filter field without a value.</p>
					 */
					RequiredHasNoValue = "RequiredHasNoValue",
				}
				/**
				 * <p><p>Enumeration of the <code>position</code> property of the Geomap controls</p></p>
				 */
				export enum GeomapControlPosition {
				}
				/**
				 * <p><p>Defines the behavior of the <a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a>.</p></p>
				 */
				export enum LinkType {
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a> is rendered as a <a target="_self" href="api/sap.m.Link">sap.m.Link</a> that works as a direct link</p>
					 */
					DirectLink = "DirectLink",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a> is rendered as a <a target="_self" href="api/sap.m.Link">sap.m.Link</a> that opens a popover when pressed</p>
					 */
					Popover = "Popover",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a> is rendered as a <a target="_self" href="api/sap.m.Text">sap.m.Text</a></p>
					 */
					Text = "Text",
				}
				/**
				 * <p><p>Collects the operators that are included in the library.</p></p>
				 */
				export enum OperatorName {
					/**
					 * <p>"between" operator</p><p>There is no validation if the first value is less than the second value as the comparison would be type-dependent and cannot be performed in a generic way.</p><p>The operator is available for string, numeric, date, time, and date/time types.</p><p>If a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control is used for the output, the operator is mapped to the <code>DATERANGE</code> option if a date type is used and to the <code>DATETIMERANGE</code> option if a date/time type is used.</p>
					 */
					BT = "BT",
					/**
					 * <p>"contains" operator</p><p>The operator is available for string types.</p>
					 */
					Contains = "Contains",
					/**
					 * <p>"Date to Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					DATETOYEAR = "DATETOYEAR",
					/**
					 * <p>"empty" operator</p><p>The operator is available for string, date, and date/time types.</p>
					 */
					Empty = "Empty",
					/**
					 * <p>"ends with" operator</p><p>The operator is available for string types.</p>
					 */
					EndsWith = "EndsWith",
					/**
					 * <p>"equal to" operator</p><p>Depending on the used <code>DisplayFormat</code>, the key, the description, or both are used as output of formatting and during parsing.</p><p>The operator is available for all data types.</p><p>If a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control is used for the output, the operator is mapped to the <code>DATE</code> option if a date type is used and to the <code>DATETIME</code> option if a date/time type is used.</p>
					 */
					EQ = "EQ",
					/**
					 * <p>"First Day in This Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					FIRSTDAYMONTH = "FIRSTDAYMONTH",
					/**
					 * <p>"First Day in This Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					FIRSTDAYQUARTER = "FIRSTDAYQUARTER",
					/**
					 * <p>"First Day in This Week" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					FIRSTDAYWEEK = "FIRSTDAYWEEK",
					/**
					 * <p>"First Day in This Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					FIRSTDAYYEAR = "FIRSTDAYYEAR",
					/**
					 * <p>"greater than or equal to" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p><p>If a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control is used for the output the operator, is mapped to the <code>FROM</code> option if a date type is used and to the <code>FROMDATETIME</code> option if a date/time type is used.</p>
					 */
					GE = "GE",
					/**
					 * <p>"greater than" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					GT = "GT",
					/**
					 * <p>"Last Day in This Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYMONTH = "LASTDAYMONTH",
					/**
					 * <p>"Last Day in This Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYQUARTER = "LASTDAYQUARTER",
					/**
					 * <p>"Last X Days" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYS = "LASTDAYS",
					/**
					 * <p>"Last X Days" operator including current day</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYSINCLUDED = "LASTDAYSINCLUDED",
					/**
					 * <p>"Last Day in This Week" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYWEEK = "LASTDAYWEEK",
					/**
					 * <p>"Last Day in This Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTDAYYEAR = "LASTDAYYEAR",
					/**
					 * <p>"Last X Hours" operator</p><p>The operator is available for date/time types.</p>
					 */
					LASTHOURS = "LASTHOURS",
					/**
					 * <p>"Last X Hours" operator including current hour</p><p>The operator is available for date/time types.</p>
					 */
					LASTHOURSINCLUDED = "LASTHOURSINCLUDED",
					/**
					 * <p>"Last X Minutes" operator</p><p>The operator is available for date/time types.</p>
					 */
					LASTMINUTES = "LASTMINUTES",
					/**
					 * <p>"Last X Minutes" operator including current minute</p><p>The operator is available for date/time types.</p>
					 */
					LASTMINUTESINCLUDED = "LASTMINUTESINCLUDED",
					/**
					 * <p>"Last Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTMONTH = "LASTMONTH",
					/**
					 * <p>"Last X Months" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTMONTHS = "LASTMONTHS",
					/**
					 * <p>"Last X Months" operator including current month</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTMONTHSINCLUDED = "LASTMONTHSINCLUDED",
					/**
					 * <p>"Last Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTQUARTER = "LASTQUARTER",
					/**
					 * <p>"Last X Quarters" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTQUARTERS = "LASTQUARTERS",
					/**
					 * <p>"Last X Quarters" operator including current quarter</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTQUARTERSINCLUDED = "LASTQUARTERSINCLUDED",
					/**
					 * <p>"Last Week" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTWEEK = "LASTWEEK",
					/**
					 * <p>"Last X Weeks" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTWEEKS = "LASTWEEKS",
					/**
					 * <p>"Last X Weeks" operator including current week</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTWEEKSINCLUDED = "LASTWEEKSINCLUDED",
					/**
					 * <p>"Last Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTYEAR = "LASTYEAR",
					/**
					 * <p>"Last X Years" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTYEARS = "LASTYEARS",
					/**
					 * <p>"Last X Years" operator including current year</p><p>The operator is available for date and date/time types.</p>
					 */
					LASTYEARSINCLUDED = "LASTYEARSINCLUDED",
					/**
					 * <p>"less than or equal to" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p><p>If a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control is used for the output the operator, is mapped to the <code>TO</code> option if a date type is used and to the <code>TODATETIME</code> option if a date/time type is used.</p>
					 */
					LE = "LE",
					/**
					 * <p>"less than" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					LT = "LT",
					/**
					 * <p>"not equal to" operator</p><p>The operator is available for all types.</p>
					 */
					NE = "NE",
					/**
					 * <p>"Next X Days" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTDAYS = "NEXTDAYS",
					/**
					 * <p>"Next X Days" operator including current day</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTDAYSINCLUDED = "NEXTDAYSINCLUDED",
					/**
					 * <p>"Next X Hours" operator</p><p>The operator is available for date/time types.</p>
					 */
					NEXTHOURS = "NEXTHOURS",
					/**
					 * <p>"Next X Hours" operator including current hour</p><p>The operator is available for date/time types.</p>
					 */
					NEXTHOURSINCLUDED = "NEXTHOURSINCLUDED",
					/**
					 * <p>"Next X Minutes" operator</p><p>The operator is available for date/time types.</p>
					 */
					NEXTMINUTES = "NEXTMINUTES",
					/**
					 * <p>"Next X Minutes" operator including current minute</p><p>The operator is available for date/time types.</p>
					 */
					NEXTMINUTESINCLUDED = "NEXTMINUTESINCLUDED",
					/**
					 * <p>"Next Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTMONTH = "NEXTMONTH",
					/**
					 * <p>"Next X Months" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTMONTHS = "NEXTMONTHS",
					/**
					 * <p>"Next X Months" operator including current month</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTMONTHSINCLUDED = "NEXTMONTHSINCLUDED",
					/**
					 * <p>"Next Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTQUARTER = "NEXTQUARTER",
					/**
					 * <p>"Next X Quarters" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTQUARTERS = "NEXTQUARTERS",
					/**
					 * <p>"Next X Quarters" operator including current quarter</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTQUARTERSINCLUDED = "NEXTQUARTERSINCLUDED",
					/**
					 * <p>"Next Week" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTWEEK = "NEXTWEEK",
					/**
					 * <p>"Next X Weeks" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTWEEKS = "NEXTWEEKS",
					/**
					 * <p>"Next X Weeks" operator including current week</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTWEEKSINCLUDED = "NEXTWEEKSINCLUDED",
					/**
					 * <p>"Next Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTYEAR = "NEXTYEAR",
					/**
					 * <p>"Next X Years" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTYEARS = "NEXTYEARS",
					/**
					 * <p>"Next X Years" operator including current year</p><p>The operator is available for date and date/time types.</p>
					 */
					NEXTYEARSINCLUDED = "NEXTYEARSINCLUDED",
					/**
					 * <p>"not between" operator</p><p>There is no validation if the first value is less than the second value as the comparison would be type-dependent and cannot be performed in a generic way.</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					NOTBT = "NOTBT",
					/**
					 * <p>"does not contain" operator</p><p>The operator is available for string types.</p>
					 */
					NotContains = "NotContains",
					/**
					 * <p>"not empty" operator</p><p>The operator is available for string, date, and date/time types.</p>
					 */
					NotEmpty = "NotEmpty",
					/**
					 * <p>"does not end with" operator</p><p>The operator is available for string types.</p>
					 */
					NotEndsWith = "NotEndsWith",
					/**
					 * <p>"not greater than or equal to" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					NOTGE = "NOTGE",
					/**
					 * <p>"not greater than" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					NOTGT = "NOTGT",
					/**
					 * <p>"not less than or equal to" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					NOTLE = "NOTLE",
					/**
					 * <p>"not less than" operator</p><p>The operator is available for string, numeric, date, time, and date/time types.</p>
					 */
					NOTLT = "NOTLT",
					/**
					 * <p>"does not start with" operator</p><p>The operator is available for string types.</p>
					 */
					NotStartsWith = "NotStartsWith",
					/**
					 * <p>"First Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					QUARTER1 = "QUARTER1",
					/**
					 * <p>"Second Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					QUARTER2 = "QUARTER2",
					/**
					 * <p>"Third Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					QUARTER3 = "QUARTER3",
					/**
					 * <p>"Fourth Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					QUARTER4 = "QUARTER4",
					/**
					 * <p>"Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					SPECIFICMONTH = "SPECIFICMONTH",
					/**
					 * <p>"Month in Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					SPECIFICMONTHINYEAR = "SPECIFICMONTHINYEAR",
					/**
					 * <p>"starts with" operator</p><p>The operator is available for string types.</p>
					 */
					StartsWith = "StartsWith",
					/**
					 * <p>"This Month" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					THISMONTH = "THISMONTH",
					/**
					 * <p>"This Quarter" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					THISQUARTER = "THISQUARTER",
					/**
					 * <p>"This Week" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					THISWEEK = "THISWEEK",
					/**
					 * <p>"This Year" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					THISYEAR = "THISYEAR",
					/**
					 * <p>"Today" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					TODAY = "TODAY",
					/**
					 * <p>"Today -X / +Y Days" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					TODAYFROMTO = "TODAYFROMTO",
					/**
					 * <p>"Tomorrow" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					TOMORROW = "TOMORROW",
					/**
					 * <p>"Year to Date" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					YEARTODATE = "YEARTODATE",
					/**
					 * <p>"Yesterday" operator</p><p>The operator is available for date and date/time types.</p>
					 */
					YESTERDAY = "YESTERDAY",
				}
				/**
				 * <p><p>Enumeration of the <a target="_self" href="api/sap.ui.mdc.condition.Operator#methods/OperatorOverwrite">OperatorOverwrite</a> in <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>.</p></p>
				 */
				export enum OperatorOverwrite {
					/**
					 * <p>Overwrites the <code>getLongText</code> function of the operator.</p>
					 */
					getLongText = "getLongText",
					/**
					 * <p>Overwrites the <code>getModelFilter</code> function of the operator.</p>
					 */
					getModelFilter = "getModelFilter",
				}
				/**
				 * <p><p>Defines what data type is used for parse or format the condition values on a <a target="_self" href="api/sap.ui.mdc.condition.Operator">Operator</a>.</p></p>
				 */
				export enum OperatorValueType {
					/**
					 * <p>The <code>Type</code> of the <code>Field</code> or <code>FilterField</code> using the <code>Operator</code> is used.</p>
					 */
					Self = "Self",
					/**
					 * <p>The <code>Type</code> of the <code>Field</code> or <code>FilterField</code> using the <code>Operator</code> is used for validation, but the user input is used as value.</p>
					 */
					SelfNoParse = "SelfNoParse",
					/**
					 * <p>A simple string type is used to display static text.</p>
					 */
					Static = "Static",
				}
				/**
				 * <p><p>Defines the delta types of the <code>sap.ui.mdc.p13n.Engine</code>.</p></p>
				 */
				export enum ProcessingStrategy {
				}
				/**
				 * <p><p>Enumeration of the possible reasons for the search event.</p></p>
				 */
				export enum ReasonMode {
					/**
					 * <p>Enter pressed in filter field.</p>
					 */
					Enter = "Enter",
					/**
					 * <p>Go button pressed.</p>
					 */
					Go = "Go",
					/**
					 * <p>Used if the mentioned reasons are not applicable.</p>
					 */
					Unclear = "Unclear",
					/**
					 * <p>The applied variant is marked as Apply Automatically.</p>
					 */
					Variant = "Variant",
				}
				/**
				 * <p><p>Enumeration of the possible triggers for <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p></p>
				 */
				export enum RequestShowContainerReason {
					/**
					 * <p>Content may have been filtered during it's <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/onBeforeShow">onBeforeShow</a> phase or a <code>filterValue</code> change occured while the <code>ValueHelp</code> was already open.</p>
					 */
					Filter = "Filter",
					/**
					 * <p>A connected control receives focus.</p>
					 */
					Focus = "Focus",
					/**
					 * <p><a target="_self" href="api/sap.ui.mdc.ValueHelp#methods/navigate">ValueHelp arrow-navigation</a> was triggered.</p>
					 */
					Navigate = "Navigate",
					/**
					 * <p>A connected control was focused using the Tab key.</p>
					 */
					Tab = "Tab",
					/**
					 * <p>A connected control was activated through a click or tap action.</p>
					 */
					Tap = "Tap",
					/**
					 * <p>Text was entered or modified in a connected control.</p>
					 */
					Typing = "Typing",
					/**
					 * <p>A connected control fired a <a target="_self" href="api/sap.m.Input#events/valueHelpRequest">valueHelpRequest</a>.</p>
					 */
					ValueHelpRequest = "ValueHelpRequest",
				}
				/**
				 * <p><p>Defines the supported positions for table-relevant actions within the table toolbar, in accordance with the <a target="_blank" rel="noopener noreferrer" href="https://www.sap.com/design-system/fiori-design-web/ui-elements/table-bar/">SAP Design System guidelines</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
							title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p></p>
				 */
				export enum TableActionPosition {
					/**
					 * <p>Extension point for actions displayed after all table-relevant actions. These actions allow applications to add additional functionality, such as pagination, refresh.</p>
					 */
					EndActions = "EndActions",
					/**
					 * <p>Extension point for the export actions at the start of the group. These actions convert the content of the table into an external format, such as Excel, PDF, a printed document.</p>
					 */
					ExportActions = "ExportActions",
					/**
					 * <p>Extension point for the modification actions at the start of the group. These actions modify the structure or content of the table, such as cut, copy, paste, reorder.</p>
					 */
					ModificationActions = "ModificationActions",
					/**
					 * <p>Extension point for the modification actions at the end of the group. These actions modify the structure or content of the table, such as cut, copy, paste, reorder.</p>
					 */
					ModificationActionsEnd = "ModificationActionsEnd",
					/**
					 * <p>Extension point for the personalization actions at the start of the group. These actions change the arrangement or personalization of the table at the item level, such as Expand/Collapse All Rows, Show/Hide Details, Table Settings.</p>
					 */
					PersonalizationActions = "PersonalizationActions",
					/**
					 * <p>Extension point for the personalization actions inserted after the first and before the second group of predefined actions. These actions change the arrangement or personalization of the table at the item level, such as Expand/Collapse Node, Show/Hide Details, Table Settings.</p>
					 */
					PersonalizationActionsMiddle = "PersonalizationActionsMiddle",
					/**
					 * <p>Extension point for the share actions at the start of the group. These actions allow users to share table content with another application or with the homepage as a tile, such as Send as Email, Save as Tile.</p>
					 */
					ShareActions = "ShareActions",
					/**
					 * <p>Extension point for the view actions at the start of the group. These actions change the representation of the entire table, such as View Switch, Fullscreen.</p>
					 */
					ViewActions = "ViewActions",
				}
				/**
				 * <p><p>Growing mode of the table.</p></p>
				 */
				export enum TableGrowingMode {
					/**
					 * <p>A More button is shown with which the user can request to load more rows</p>
					 */
					Basic = "Basic",
					/**
					 * <p>A fixed number of rows is shown</p>
					 */
					None = "None",
					/**
					 * <p>Either the user requests to load more rows by scrolling down, or the More button is displayed if no scrolling is required because the table is fully visible</p>
					 */
					Scroll = "Scroll",
				}
				/**
				 * <p><p>Multi-select mode of the table.</p></p>
				 */
				export enum TableMultiSelectMode {
					/**
					 * <p>The table shows a Clear All icon</p>
					 */
					ClearAll = "ClearAll",
					/**
					 * <p>The table shows a Select All checkbox</p>
					 */
					Default = "Default",
				}
				/**
				 * <p><p>Personalization mode of the table.</p></p>
				 */
				export enum TableP13nMode {
					/**
					 * <p>The table can be aggregated</p>
					 */
					Aggregate = "Aggregate",
					/**
					 * <p>Columns can be shown, hidden and reordered</p>
					 */
					Column = "Column",
					/**
					 * <p>The table can be filtered</p>
					 */
					Filter = "Filter",
					/**
					 * <p>The table can be grouped</p>
					 */
					Group = "Group",
					/**
					 * <p>The table can be sorted</p>
					 */
					Sort = "Sort",
				}
				/**
				 * <p><p>Pop-in display mode of the table.</p></p>
				 */
				export enum TablePopinDisplay {
					/**
					 * <p>The header is displayed on the first line, and the cell content is displayed on the next line.</p>
					 */
					Block = "Block",
					/**
					 * <p>The cell content is displayed next to the header on the same line. <b>Note:</b> If there is not enough space for the cell content, then it is displayed on the next line.</p>
					 */
					Inline = "Inline",
				}
				/**
				 * <p><p>Type of a table row action.</p></p>
				 */
				export enum TableRowActionType {
					/**
					 * <p>Custom-defined row action</p>
					 */
					Custom = "Custom",
					/**
					 * <p>Row action for deletion</p>
					 */
					Delete = "Delete",
					/**
					 * <p>Navigation arrow (chevron) is shown</p>
					 */
					Navigation = "Navigation",
				}
				/**
				 * <p><p>Row count mode of the table.</p></p>
				 */
				export enum TableRowCountMode {
					/**
					 * <p>The table automatically fills the height of the surrounding container</p>
					 */
					Auto = "Auto",
					/**
					 * <p>A fixed number of rows is shown</p>
					 */
					Fixed = "Fixed",
					/**
					 * <p>The user can change the number of displayed rows by dragging a resizer</p>
					 */
					Interactive = "Interactive",
				}
				/**
				 * <p><p>Selection mode of the table.</p></p>
				 */
				export enum TableSelectionMode {
					/**
					 * <p>Multiple rows can be selected at a time</p>
					 */
					Multi = "Multi",
					/**
					 * <p>No row selection available</p>
					 */
					None = "None",
					/**
					 * <p>Only one row can be selected at a time</p>
					 */
					Single = "Single",
					/**
					 * <p>Only one row can be selected at a time. The selection column is not shown. Instead, the user can press the row to select it.</p><p><b>Note:</b> If this selection mode is used, the table does not fire the <code>rowPress</code> event.</p>
					 */
					SingleMaster = "SingleMaster",
				}
				/**
				 * <p><p>Type of the table.</p></p>
				 */
				export enum TableType {
					/**
					 * <p>Equivalent to the default configuration of <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">sap.ui.mdc.table.ResponsiveTableType</a></p>
					 */
					ResponsiveTable = "ResponsiveTable",
					/**
					 * <p>Equivalent to the default configuration of <a target="_self" href="api/sap.ui.mdc.table.GridTableType">sap.ui.mdc.table.GridTableType</a></p>
					 */
					Table = "Table",
				}
				/**
				 * <p><p>Enumeration of the propagation reason in the <a target="_self" href="api/sap.ui.mdc.ValueHelpDelegate#methods/onConditionPropagation">condition propagation callback</a> of the <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p></p>
				 */
				export enum ValueHelpPropagationReason {
					/**
					 * <p>Triggered by connected control after processing valuehelp output</p>
					 */
					ControlChange = "ControlChange",
					/**
					 * <p>Triggered by <code>ValueHelp</code> itself on <code>getItemForValue</code></p>
					 */
					Info = "Info",
					/**
					 * <p>Triggered by <code>ValueHelp</code> itself on selection</p>
					 */
					Select = "Select",
				}
				/**
				 * <p><p>Enumeration of the possible selection types in <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p></p>
				 */
				export enum ValueHelpSelectionType {
					/**
					 * <p>The given conditions are just added to the existing ones, if they don't already exist.</p>
					 */
					Add = "Add",
					/**
					 * <p>The given conditions are removed.</p>
					 */
					Remove = "Remove",
					/**
					 * <p>The given conditions are set and replace the existing ones.</p>
					 */
					Set = "Set",
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Modules for <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p></p>
			 */
			namespace field {
				/**
				 * <p>This class represents a type that is used to map an array of conditions to a single-value control (such as <a target="_self" href="api/sap.m.Input">Input</a> or <a target="_self" href="api/sap.m.Text">Text</a> control).</p>
				 */
				export class ConditionsType extends sap.ui.model.SimpleType {
					/**
					 * <p>Constructor for a Conditions type.</p>
					 * @param {any} oFormatOptions <p>Formatting options</p>
					 * @param {any} oConstraints <p>Value constraints</p>
					 */
					constructor(oFormatOptions?: any, oConstraints?: any);
					/**
					 * <p>Formats the given conditions to an output value of the given target type. These values are formatted using the given data type. Depending on the operator and the configuration (set in <code>FormatOptions</code>), a description will be determined by a given value help or delegate.</p>
					 * @param {any} aConditions <p>The conditions to be formatted</p>
					 * @param {string} sTargetType <p>The target type; see <a target="_self" href="topic/ac56d92162ed47ff858fdf1ce26c18c4">Allowed Property Types</a>. In addition to the standard target types, <code>sap.ui.mdc.raw</code> can be used. In this case the value is not formatted and just forwarded to the target. If the value is an array representing data for a <code>CompositeType</code>, the index of the needed raw value can be added to the name (For example, if a unit should be forwarded as raw value, <code>sap.ui.mdc.raw:1</code> can be used).</p>
					 * @returns any | Promise<any> <p>The formatted output value or a <code>Promise</code> resolving with the formatted value</p>
					 */
					formatValue(aConditions: any, sTargetType: string): any | Promise<any>;
					/**
					 * <p>Parses an external value of the given source type to an array of conditions that holds the value in model representation. These values are parsed using the given data type. Depending on the operator and the configuration (set in <code>FormatOptions</code>), a value will be determined by a given value help or delegate.</p>
					 * @param {any} vValue <p>The value that is parsed</p>
					 * @param {string} sSourceType <p>The type of the given value; see <a target="_self" href="topic/ac56d92162ed47ff858fdf1ce26c18c4">Allowed Property Types</a> In addition to the standard source types, <code>sap.ui.mdc.raw</code> can be used. In this case the value is not parsed and just used in the condition. If the value of the condition is an array representing data for a <code>CompositeType</code>, the index of the needed raw value can be added to the name (For example, if a unit should be forwarded as raw value <code>sap.ui.mdc.raw:1</code> can be used).</p>
					 * @returns any <p>The array of conditions or a <code>Promise</code> resolving with the array of conditions. If there is no value, <code>null</code> is returned.</p>
					 */
					parseValue(vValue: any, sSourceType: string): any;
					/**
					 * <p>Validates a given array of conditions. The values of the conditions are validated using the given data type.</p>
					 * @param {any} aConditions <p>The conditions that is validated</p>
					 * @returns void | Promise<any> <p><code>undefined</code> or a <code>Promise</code> resolving with an undefined value</p>
					 */
					validateValue(aConditions: any): void | Promise<any>;
				}
				/**
				 * <p>This class represents a type that is used to map a single condition to a single-value control.</p>
				 */
				export class ConditionType extends sap.ui.model.SimpleType {
					/**
					 * <p>Constructor for a Condition type.</p>
					 * @param {any} oFormatOptions <p>Formatting options</p>
					 * @param {any} oConstraints <p>Value constraints</p>
					 */
					constructor(oFormatOptions?: any, oConstraints?: any);
					/**
					 * <p>Formats the given condition to an output value of the given target type. These values are formatted using the given data type. Depending on the operator and the configuration (set in <code>FormatOptions</code>), a description will be determined by a given value help or delegate.</p>
					 * @param {sap.ui.mdc.condition.ConditionObject} oCondition <p>The condition to be formatted</p>
					 * @param {string} sTargetType <p>The target type; see <a target="_self" href="topic/ac56d92162ed47ff858fdf1ce26c18c4">Allowed Property Types</a>. In addition to the standard target types, <code>sap.ui.mdc.raw</code> can be used. In this case the value is not formatted and just forwarded to the target. If the value is an array representing data for a <code>CompositeType</code>, the index of the needed raw value can be added to the name (For example, if a unit should be forwarded as raw value, <code>sap.ui.mdc.raw:1</code> can be used).</p>
					 * @returns any | Promise<any> <p>The formatted output value or a <code>Promise</code> resolving with the formatted value</p>
					 */
					formatValue(oCondition: sap.ui.mdc.condition.ConditionObject, sTargetType: string): any | Promise<any>;
					/**
					 * <p>Determines the text what is copied to clipboard if a token or item with the condition is selected and copied. For equal-conditions key/description pairs needs to be copied to allow pasing of such conditions.</p>
					 * @param {sap.ui.mdc.condition.ConditionObject} oCondition <p>The condition to be copied</p>
					 * @returns string <p>key/description pair seperated by TAB</p>
					 */
					protected getTextForCopy(oCondition: sap.ui.mdc.condition.ConditionObject): string;
					/**
					 * <p>Parses an external value of the given source type to a condition that holds the value in model representation. These values are parsed using the given data type. Depending on the operator and the configuration (set in <code>FormatOptions</code>), a value will be determined by a given value help or delegate.</p>
					 * @param {any} vValue <p>The value that is parsed</p>
					 * @param {string} sSourceType <p>The type of the given value; see <a target="_self" href="topic/ac56d92162ed47ff858fdf1ce26c18c4">Allowed Property Types</a> In addition to the standard source types, <code>sap.ui.mdc.raw</code> can be used. In this case the value is not parsed and just used in the condition. If the value of the condition is an array representing data for a <code>CompositeType</code>, the index of the needed raw value can be added to the name (For example, if a unit should be forwarded as raw value <code>sap.ui.mdc.raw:1</code> can be used).</p>
					 * @returns any <p>The condition or a <code>Promise</code> resolving with the condition. If there is no value, <code>null</code> is returned.</p>
					 */
					parseValue(vValue: any, sSourceType: string): any;
					/**
					 * <p>Validates a given condition. The values of the condition are validated using the given data type.</p>
					 * @param {sap.ui.mdc.condition.ConditionObject} oCondition <p>The condition that is validated</p>
					 * @returns void | Promise<any> <p><code>undefined</code> or a <code>Promise</code> resolving with an undefined value</p>
					 */
					validateValue(oCondition: sap.ui.mdc.condition.ConditionObject): void | Promise<any>;
				}
				/**
				 * <p>A field help used in the <code>FieldInfo</code> aggregation in <code>FieldBase</code> controls that allows you to add custom content.</p>
				 */
				export class CustomFieldInfo extends sap.ui.mdc.field.FieldInfoBase {
					/**
					 * <p>Constructor for a new CustomFieldInfo.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>This class represents a type to map an array of conditions used in a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control to a value of a <a target="_self" href="api/sap.m.DynamicDateRange">DynamicDateRange</a> control.</p>
				 */
				export class DynamicDateRangeConditionsType extends sap.ui.mdc.field.ConditionsType {
					/**
					 * <p>Constructor for a <code>ConditionsType</code> to be used in <code>DynamicDateRange</code> control.</p>
					 * @param {any} oFormatOptions <p>Formatting options</p>
					 * @param {any} oConstraints <p>Value constraints</p>
					 */
					constructor(oFormatOptions?: any, oConstraints?: any);
				}
				/**
				 * <p>The <code>FieldBase</code> control is the base class for the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls. It must not be used stand-alone.</p>
				 */
				export abstract class FieldBase extends sap.ui.mdc.Control {
					/**
					 * <p>Constructor for a new <code>FieldBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some ariaLabelledBy into the association <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
					 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/liveChange">liveChange</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.field.FieldBase</code> itself.</p><p>This event is fired when the value of the field is changed, for example, each time a key is pressed.</p><p><b>Note:</b> This event is only triggered if the used content control has a <code>liveChange</code> event.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.field.FieldBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachLiveChange(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/press">press</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.field.FieldBase</code> itself.</p><p>This event is fired if the inner control has a </code>press</code> event and this is fired.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.field.FieldBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachPress(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/submit">submit</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.field.FieldBase</code> itself.</p><p>This event is fired when the user presses <kbd>Enter</kbd>. It allows the application to implement some submit logic.</p><p><b>Note:</b> This event is only triggered if the field is editable.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.field.FieldBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachSubmit(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Binds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
					 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					bindConditions(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
					/**
					 * <p>Checks if all needed information is provided to create the internal content control. If possible create internal controls.</p>
					 */
					protected checkCreateInternalContent(): void;
					/**
					 * <p>If the value is the initial value of the type (String types) and the field does not show tokens or operators, no condition must be set as the field is then empty.</p>
					 * @param {any} vValue <p>Value to be checked</p>
					 * @returns boolean <p>true if value is initial</p>
					 */
					protected checkValueInitial(vValue: any): boolean;
					/**
					 * <p>Assigns a <a target="_self" href="api/sap.m.Label">Label</a> control to the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, or <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls.</p><p>The text of the label is taken from the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, or <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls. The <a target="_self" href="api/sap.m.Label#methods/setLabelFor">labelFor</a> association is set to the <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, or <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control.</p>
					 * @param {sap.ui.core.Label} oLabel <p>Label control</p>
					 * @returns this <p>Reference to <code>this</code> to allow method chaining</p>
					 */
					connectLabel(oLabel: sap.ui.core.Label): this;
					/**
					 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys the contentDisplay in the aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentDisplay">contentDisplay</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContentDisplay(): this;
					/**
					 * <p>Destroys the contentEdit in the aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentEdit">contentEdit</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContentEdit(): this;
					/**
					 * <p>Destroys the fieldInfo in the aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getFieldInfo">fieldInfo</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyFieldInfo(): this;
					/**
					 * <p>Destroys the internal content controls.</p>
					 */
					protected destroyInternalContent(): void;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/liveChange">liveChange</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachLiveChange(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/press">press</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachPress(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/submit">submit</a> event of this <code>sap.ui.mdc.field.FieldBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachSubmit(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Here inheriting controls need to fire the control-specific change event.</p>
					 * @param {any} aConditions <p>Current conditions after change</p>
					 * @param {boolean} bValid <p>If <code>false</code>, the user input is not valid and leads to an error</p>
					 * @param {any} vWrongValue <p>wrong user input (only set if known)</p>
					 * @param {Promise<any>} oPromise <p><code>Promise</code> that is resolved if the changed value is determined, as user might enter some description, and the key neeeds to be determined via back-end request.</p>
					 */
					protected fireChangeEvent(aConditions: any, bValid: boolean, vWrongValue: any, oPromise: Promise<any>): void;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/liveChange">liveChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireLiveChange(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/press">press</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected firePress(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.field.FieldBase#events/submit">submit</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireSubmit(mParameters?: any): this;
					/**
					 * <p>Sets the focus on the stored focus DOM reference.</p>
					 * @param {any} oFocusInfo <p>Options for setting the focus</p>
					 */
					focus(oFocusInfo?: any): void;
					/**
					 * <p>Returns the configuration for the additional data type.</p><p>For a <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, the data type is determined from the binding of the <a target="_self" href="api/sap.ui.mdc.Field#methods/getAdditionalValue">additionalValue</a>. For a <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, the data type is determined from the binding of the <a target="_self" href="api/sap.ui.mdc.field.MultiValueFieldItem#methods/getDescription">description</a> of an item. For a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, the data type is provided via the <a target="_self" href="api/sap.ui.mdc.FilterField#methods/getAdditionalDataType">additionalDataType</a> property.</p>
					 * @returns sap.ui.model.Type | any <p>Type instance of a configuration object</p>
					 */
					protected getAdditionalDataTypeConfiguration(): sap.ui.model.Type | any;
					/**
					 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
					 * @returns sap.ui.core.ID[] 
					 */
					getAriaLabelledBy(): any;
					/**
					 * <p>Determines the <code>BaseType</code> of the currently used data type.</p>
					 * @returns sap.ui.mdc.enums.BaseType <p>BaseType</p>
					 */
					protected getBaseType(): sap.ui.mdc.enums.BaseType;
					/**
					 * <p>Creates parameter for a <a target="_self" href="api/sap.ui.base.ManagedObject#events/ParseError">ParseError</a>, <a target="_self" href="api/sap.ui.base.ManagedObject#events/ValidationError">ValidationError</a> or <a target="_self" href="api/sap.ui.base.ManagedObject#events/ValidationSuccess">ValidationSuccess</a> event based on the corresponding event fired on the inner control.</p><p>The basic implementation just adds the element and error information. The <code>property</code> and <code>type</code> information must be added by the inheriting control. If no binding for the corresponding property exists <code>null</code> must be returned, as the event must only be fired if there is a binding.</p>
					 * @param {sap.ui.base.Event} oEvent <p>original event fired on inner control</p>
					 * @returns any <p>parameters for the new event</p>
					 */
					protected getBindingEventParameter(oEvent: sap.ui.base.Event): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>Default value is <code>[]</code>.</p>
					 * @returns object[] <p>Value of property <code>conditions</code></p>
					 */
					getConditions(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContent">content</a>.</p><p>Optional content that can be rendered.</p><p>Per default, depending on <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getEditMode">editMode</a>, <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> and the used data type, a content control is rendered. For simple string types, a <a target="_self" href="api/sap.m.Text">Text</a> control is rendered in display mode and a <a target="_self" href="api/sap.m.Input">Input</a> control in edit mode. If a control is assigned in the <code>content</code> aggregation, this will be rendered instead.</p><p><b>Note:</b> Bind the value-holding property of the control to <code>'$field>/conditions'</code> using <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a> as type.</p><p>If the control needs to show multiple conditions, bind its aggregation to </code>'$field>/conditions'</code>. Bind the item controls value-holding property using <a target="_self" href="api/sap.ui.mdc.field.ConditionType">ConditionType</a> as type.</p><p><b>Warning:</b> Only controls allowed in a <a target="_self" href="api/sap.ui.layout.form.Form">Form</a> are allowed to be used for this optional content. Other controls might break the layout. This means the <a target="_self" href="api/sap.ui.core.IFormContent">IFormContent</a> interface needs to be implemented by these controls.</p>
					 * @returns sap.ui.core.Control 
					 */
					getContent(): sap.ui.core.Control;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentDisplay">contentDisplay</a>.</p><p>Optional content to be rendered if the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getEditMode">editMode</a> property is set to <code>Display</code>.</p><p>Per default, depending on <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> and the used data type, a content control is rendered in display mode. For simple string types, a <a target="_self" href="api/sap.m.Text">Text</a> control is rendered in display mode. If a control is assigned in the <code>contentDisplay</code> aggregation, this will be rendered instead.</p><p><b>Note:</b> If a control is assigned to the <code>content</code> aggregation, this one is ignored.</p><p><b>Note:</b> Bind the value-holding property of the control to <code>'$field>/conditions'</code> using <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a> as type.</p><p>If the control needs to show multiple conditions, bind its aggregation to </code>'$field>/conditions'</code>. Bind the item controls value-holding property using <a target="_self" href="api/sap.ui.mdc.field.ConditionType">ConditionType</a> as type.</p><p><b>Warning:</b> Only controls allowed in a <a target="_self" href="api/sap.ui.layout.form.Form">Form</a> are allowed to be used for this optional content. Other controls might break the layout. This means the <a target="_self" href="api/sap.ui.core.IFormContent">IFormContent</a> interface needs to be implemented by these controls.</p>
					 * @returns sap.ui.core.Control 
					 */
					getContentDisplay(): sap.ui.core.Control;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentEdit">contentEdit</a>.</p><p>Optional content to be rendered if the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getEditMode">editMode</a> property is not set to <code>Display</code>.</p><p>Per default, depending on <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a> and the used data type, a content control is rendered in edit mode. For simple string types, an <a target="_self" href="api/sap.m.Input">Input</a> control is rendered in edit mode. If a control is assigned in the <code>contentEdit</code> aggregation, this will be rendered instead.</p><p><b>Note:</b> If a control is assigned to the <code>content</code> aggregation, this one is ignored.</p><p><b>Note:</b> Bind the value-holding property of the control to <code>'$field>/conditions'</code> using <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a> as type.</p><p>If the control needs to show multiple conditions, bind its aggregation to </code>'$field>/conditions'</code>. Bind the item controls value-holding property using <a target="_self" href="api/sap.ui.mdc.field.ConditionType">ConditionType</a> as type.</p><p><b>Warning:</b> Only controls allowed in a <a target="_self" href="api/sap.ui.layout.form.Form">Form</a> are allowed to be used for this optional content. Other controls might break the layout. This means the <a target="_self" href="api/sap.ui.core.IFormContent">IFormContent</a> interface needs to be implemented by these controls.</p>
					 * @returns sap.ui.core.Control 
					 */
					getContentEdit(): sap.ui.core.Control;
					/**
					 * <p>Gets the currently used content controls.</p>
					 * @returns sap.ui.core.Control[] <p>Array of content controls</p>
					 */
					protected getCurrentContent(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
					 * @returns string <p>Value of property <code>dataType</code></p>
					 */
					getDataType(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
					 * @returns any <p>Value of property <code>dataTypeConstraints</code></p>
					 */
					getDataTypeConstraints(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p>
					 * @returns any <p>Value of property <code>dataTypeFormatOptions</code></p>
					 */
					getDataTypeFormatOptions(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/FieldBaseDelegate">FieldBaseDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/field/FieldBaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @returns any <p>Value of property <code>delegate</code></p>
					 */
					getDelegate(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDisplay">display</a>.</p><p>Defines whether the value and/or description of the field is shown and in which order.</p><p>Default value is <code>Value</code>.</p>
					 * @returns sap.ui.mdc.enums.FieldDisplay <p>Value of property <code>display</code></p>
					 */
					getDisplay(): sap.ui.mdc.enums.FieldDisplay;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getEditMode">editMode</a>.</p><p>Determines whether the field is editable, read-only, or disabled.</p><p>Default value is <code>Editable</code>.</p>
					 * @returns sap.ui.mdc.enums.FieldEditMode <p>Value of property <code>editMode</code></p>
					 */
					getEditMode(): sap.ui.mdc.enums.FieldEditMode;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getFieldInfo">fieldInfo</a>.</p><p>Optional <code>FieldInfo</code> used for detail information. This is only active in display mode. Especially <a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a> can be used to activate link features.</p><p><b>Note:</b> If a special data type is defined or a content control is set, this is ignored.</p>
					 * @returns sap.ui.mdc.field.FieldInfoBase 
					 */
					getFieldInfo(): sap.ui.mdc.field.FieldInfoBase;
					/**
					 * <p>Provides some internals of the field to be used in <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a> for format and parse the conditions.</p>
					 * @returns any <p>formatOptions of the field (see <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a>)</p>
					 */
					protected getFormatOptions(): any;
					/**
					 * <p>Allows fields to wait for async formatting result processing</p>
					 * @returns undefined | Promise<any> <p>returns a <code>Promise</code> waiting for ongoing formatting</p>
					 */
					protected getFormattingPromise(): undefined | Promise<any>;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getLabel">label</a>.</p><p>Defines the label text for the field.</p><p>This can be used by <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> or <a target="_self" href="api/sap.ui.layout.form.Form">Form</a> controls to create a <a target="_self" href="api/sap.m.Label">Label</a> control for the field.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>label</code></p>
					 */
					getLabel(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMaxConditions">maxConditions</a>.</p><p>Sets the maximum number of conditions that are allowed for this field.</p><p>The default value of -1 indicates that an unlimited number of conditions can be defined.</p><p><b>Note:</b> If the data type used doesn't support multiple conditions, an error is thrown.</p><p>Default value is <code>-1</code>.</p>
					 * @returns number <p>Value of property <code>maxConditions</code></p>
					 */
					getMaxConditions(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a>.</p><p>If set, the <code>Field</code> is rendered using a multi-line control.</p><p>This property only affects types that support multiple lines.</p><p>This property is only used for single-value fields.</p><p><b>Note:</b> If the data type used doesn't support multiple lines, an error is thrown.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>multipleLines</code></p>
					 */
					getMultipleLines(): boolean;
					/**
					 * <p>Required by the <a target="_self" href="api/sap.m.IOverflowToolbarContent">sap.m.IOverflowToolbarContent</a> interface. Registers invalidations event that is fired when width of the control is changed.</p>
					 * @returns any <p>Configuration information for the <a target="_self" href="api/sap.m.IOverflowToolbarContent">sap.m.IOverflowToolbarContent</a> interface.</p>
					 */
					protected getOverflowToolbarConfig(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getPlaceholder">placeholder</a>.</p><p>Defines a short hint intended to help the user with the data entry when the control has no value. If the value is <code>null</code>, no placeholder is shown.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>placeholder</code></p>
					 */
					getPlaceholder(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getRequired">required</a>.</p><p>Indicates that user input is required.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>required</code></p>
					 */
					getRequired(): boolean;
					/**
					 * <p>Determines, based on conditions, the value returned by the <code>change</code> event.</p>
					 * @param {any} aConditions <p>Array of conditions</p>
					 * @returns any <p>control-dependent value for <code>change</code> event</p>
					 */
					protected getResultForChangePromise(aConditions: any): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getShowEmptyIndicator">showEmptyIndicator</a>.</p><p>If set, an empty <code>Field</code> renders an empty indicator in display mode.</p><p>This property only takes effect if <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setEditMode">editMode</a> is set to <code>Display</code>.</p><p><b>Note:</b> Empty means the <code>Field</code> holds no value. If an empty string is a valid value, the <code>Field</code> might show nothing, depending on the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDisplay">display</a> settings and assigned description or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setValueHelp">ValueHelp</a>.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showEmptyIndicator</code></p>
					 */
					getShowEmptyIndicator(): boolean;
					/**
					 * <p>Returns the supported operators.</p><p>Needs to be overwritten by <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p>
					 * @returns string[] <p>Array of operator names</p>
					 */
					protected getSupportedOperators(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getTextAlign">textAlign</a>.</p><p>Defines the horizontal alignment of the text that is shown inside the input field.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>Default value is <code>Initial</code>.</p>
					 * @returns sap.ui.core.TextAlign <p>Value of property <code>textAlign</code></p>
					 */
					getTextAlign(): sap.ui.core.TextAlign;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getTextDirection">textDirection</a>.</p><p>Defines the text directionality of the input field, for example, <code>RTL</code> or <code>LTR</code>.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>Default value is <code>Inherit</code>.</p>
					 * @returns sap.ui.core.TextDirection <p>Value of property <code>textDirection</code></p>
					 */
					getTextDirection(): sap.ui.core.TextDirection;
					/**
					 * <p>Provides some internals of the unit part of the field to be used in <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a> for format and parse the conditions.</p>
					 * @returns any <p>formatOptions of the field (see <a target="_self" href="api/sap.ui.mdc.field.ConditionsType">ConditionsType</a>)</p>
					 */
					protected getUnitFormatOptions(): any;
					/**
					 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueHelp">valueHelp</a>, or <code>null</code>.</p>
					 * @returns sap.ui.core.ID | null 
					 */
					getValueHelp(): sap.ui.core.ID | null;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueState">valueState</a>.</p><p>Visualizes the validation state of the control, for example, <code>Error</code>, <code>Warning</code> or <code>Success</code>.</p><p><b>Note:</b> The visualization of the <code>ValueState</code> property is handled by the inner rendered control. If a control is set (using <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContent">content</a>, <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentEdit">contentEdit</a>, or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentDisplay">contentDisplay</a>), this control needs to support the <code>valueState</code> behavior, otherwise <code>valueState</code> is not visualized.</p><p>Default value is <code>None</code>.</p>
					 * @returns sap.ui.core.ValueState <p>Value of property <code>valueState</code></p>
					 */
					getValueState(): sap.ui.core.ValueState;
					/**
					 * <p>Gets the <code>ValueState</code> for content controls</p>
					 * @param {string} sContentId <p>Id of the content control or Id of the field itself</p>
					 * @returns any <p>value state information for content control</p>
					 */
					protected getValueStateForContent(sContentId: string): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueStateText">valueStateText</a>.</p><p>Defines the text that appears in the value state message pop-up. If this has not been specified, a default text from the resource bundle is shown.</p>
					 * @returns string <p>Value of property <code>valueStateText</code></p>
					 */
					getValueStateText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getWidth">width</a>.</p><p>Defines the width of the control.</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Handler of the <a target="_self" href="api/sap.ui.base.ManagedObject#events/modelContextChange">modelContextChange</a> event.</p>
					 * @param {any} oEvent <p>event</p>
					 */
					protected handleModelContextChange(oEvent: any): void;
					/**
					 * <p>Returns if the control can be bound to a label</p>
					 * @returns boolean <p><code>true</code> if the control can be bound to a label</p>
					 */
					hasLabelableHTMLElement(): boolean;
					/**
					 * <p>Returns the user interaction state of the control.</p><p>If the user starts typing or navigates via arrow keys in a value help, the shown value might be updated. But as long as the user has not left the field or pressed the <kbd>Enter</kbd> key, the current user input will not be validated or updated or an event fired.</p><p>As long as the user is interacting with the field, this function returns <code>true</code>. If the user interaction has been completed because the user has left the field, pressed the <kbd>Enter</kbd> key, or chosen a value from the value help, the function returns <code>false</code>.</p>
					 * @returns boolean <p><code>true</code> if there is a pending user input</p>
					 */
					protected hasPendingUserInput(): boolean;
					/**
					 * <p>Return <code>true</code> if at least one content control has a own value state</p>
					 * @returns boolean <p><code>true</code> if at least one content control has a own value state</p>
					 */
					protected hasValueStateForContent(): boolean;
					/**
					 * <p>Initializes internal data-types and dependent objects.</p>
					 */
					protected initDataType(): void;
					/**
					 * <p>Checks if the field is already destoyed or destruction has started.</p><p>In this casse creation of internal content or binding must be prevented.</p>
					 * @returns boolean <p>True if destroyed or destruction has been started</p>
					 */
					protected isFieldDestroyed(): boolean;
					/**
					 * <p>Returns whether the given property value is initial and has not been explicitly set or no binding exist. Even after setting the default value or setting <code>null</code>/<code>undefined</code> (which also causes the default value to be set), the property is no longer initial. A property can be reset to initial state by calling <code><a target="_self" href="api/sap.ui.base.ManagedObject#methods/resetProperty">resetProperty</a>(sPropertyName)</code>.</p>
					 * @param {string} sPropertyName <p>the name of the property</p>
					 * @returns boolean <p>true if the property is initial</p>
					 */
					protected isFieldPropertyInitial(sPropertyName: string): boolean;
					/**
					 * <p>Checks if there is invalid input.</p>
					 * @returns boolean <p>True if there is invalid input</p>
					 */
					protected isInvalidInput(): boolean;
					/**
					 * <p>Checks if the field is configured to be a <code>SearchField</code></p><p>Needs to be overwritten by <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, and <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p>
					 * @returns boolean <p>True if configures as search field</p>
					 */
					protected isSearchField(): boolean;
					/**
					 * <p>Observes changes.</p><p>To be enhanced by <a target="_self" href="api/sap.ui.mdc.Field">Field</a>, <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a>, <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>, or other inherited controls.</p>
					 * @param {any} oChanges <p>Changes</p>
					 */
					protected observeChanges(oChanges: any): void;
					/**
					 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
					 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllAriaLabelledBy(): any;
					/**
					 * <p>Removes an ariaLabelledBy from the association named <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
					 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
					 * @returns sap.ui.core.ID | null <p>The removed ariaLabelledBy or <code>null</code></p>
					 */
					removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
					/**
					 * <p>Resets invalid input information.</p><p>Might be called if Binding changes or field is initialized.</p>
					 * @param {boolean} bRemoveUIMessage <p>If set to <code>true</code> the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueState">ValueState</a> and <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueStateText">ValueStateText</a> is removed</p>
					 */
					protected resetInvalidInput(bRemoveUIMessage: boolean): void;
					/**
					 * <p>Resets the <code>ValueState</code> for content controls</p>
					 */
					protected resetValueStateForAllContent(): void;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a>.</p><p>Sets the conditions that represent the values of the field.</p><p>These should be bound to a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> using the corresponding <code>propertyPath</code>.</p><p><b>Note:</b> For <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, the <code>conditions</code> property is used to bind <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> to its parent <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</br> If this property is not explicitly configured, the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> sets a default binding. For example, for a <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> control inside a <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control, the binding looks like this:</br> <code>conditions="{$filters>/conditions/propertyPath}"</code> with the following data: <ul> <li><code>$filters</code> as the name of the condition model</li> <li><code>/conditions/</code> as a required static part of the binding</li> <li><code>propertyPath</code> as the property name</li> </ul></p><p><b>Note:</b> A condition must have the structure of <a target="_self" href="api/sap.ui.mdc.condition.ConditionObject">ConditionObject</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>[]</code>.</p>
					 * @param {any} sConditions <p>New value for property <code>conditions</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setConditions(sConditions?: any): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentDisplay">contentDisplay</a>.</p>
					 * @param {sap.ui.core.Control} oContentDisplay <p>The contentDisplay to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setContentDisplay(oContentDisplay: sap.ui.core.Control): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getContentEdit">contentEdit</a>.</p>
					 * @param {sap.ui.core.Control} oContentEdit <p>The contentEdit to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setContentEdit(oContentEdit: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataType">dataType</a>.</p><p>The type of data handled by the field. This type is used to parse, format, and validate the value.</p><p><b>Note:</b> The module of the data type should be loaded before it is assigned to the field. Otherwise the asynchronous loading of the module might lead to unwanted side effects.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>'sap.ui.model.type.String'</code>.</p>
					 * @param {string} sDataType <p>New value for property <code>dataType</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDataType(sDataType?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeConstraints">dataTypeConstraints</a>.</p><p>The constraints of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} oDataTypeConstraints <p>New value for property <code>dataTypeConstraints</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDataTypeConstraints(oDataTypeConstraints?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDataTypeFormatOptions">dataTypeFormatOptions</a>.</p><p>The format options of the type specified in <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDataType">dataType</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} oDataTypeFormatOptions <p>New value for property <code>dataTypeFormatOptions</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDataTypeFormatOptions(oDataTypeFormatOptions?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/field/FieldBaseDelegate">FieldBaseDelegate</a></li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/field/FieldBaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDelegate(oDelegate?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getDisplay">display</a>.</p><p>Defines whether the value and/or description of the field is shown and in which order.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Value</code>.</p>
					 * @param {sap.ui.mdc.enums.FieldDisplay} sDisplay <p>New value for property <code>display</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDisplay(sDisplay?: sap.ui.mdc.enums.FieldDisplay): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getEditMode">editMode</a>.</p><p>Determines whether the field is editable, read-only, or disabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Editable</code>.</p>
					 * @param {sap.ui.mdc.enums.FieldEditMode} sEditMode <p>New value for property <code>editMode</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEditMode(sEditMode?: sap.ui.mdc.enums.FieldEditMode): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getFieldInfo">fieldInfo</a>.</p>
					 * @param {sap.ui.mdc.field.FieldInfoBase} oFieldInfo <p>The fieldInfo to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFieldInfo(oFieldInfo: sap.ui.mdc.field.FieldInfoBase): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getLabel">label</a>.</p><p>Defines the label text for the field.</p><p>This can be used by <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> or <a target="_self" href="api/sap.ui.layout.form.Form">Form</a> controls to create a <a target="_self" href="api/sap.m.Label">Label</a> control for the field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sLabel <p>New value for property <code>label</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLabel(sLabel?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMaxConditions">maxConditions</a>.</p><p>Sets the maximum number of conditions that are allowed for this field.</p><p>The default value of -1 indicates that an unlimited number of conditions can be defined.</p><p><b>Note:</b> If the data type used doesn't support multiple conditions, an error is thrown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
					 * @param {number} iMaxConditions <p>New value for property <code>maxConditions</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMaxConditions(iMaxConditions?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getMultipleLines">multipleLines</a>.</p><p>If set, the <code>Field</code> is rendered using a multi-line control.</p><p>This property only affects types that support multiple lines.</p><p>This property is only used for single-value fields.</p><p><b>Note:</b> If the data type used doesn't support multiple lines, an error is thrown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bMultipleLines <p>New value for property <code>multipleLines</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMultipleLines(bMultipleLines?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getPlaceholder">placeholder</a>.</p><p>Defines a short hint intended to help the user with the data entry when the control has no value. If the value is <code>null</code>, no placeholder is shown.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sPlaceholder <p>New value for property <code>placeholder</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPlaceholder(sPlaceholder?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getRequired">required</a>.</p><p>Indicates that user input is required.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bRequired <p>New value for property <code>required</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRequired(bRequired?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getShowEmptyIndicator">showEmptyIndicator</a>.</p><p>If set, an empty <code>Field</code> renders an empty indicator in display mode.</p><p>This property only takes effect if <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setEditMode">editMode</a> is set to <code>Display</code>.</p><p><b>Note:</b> Empty means the <code>Field</code> holds no value. If an empty string is a valid value, the <code>Field</code> might show nothing, depending on the <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setDisplay">display</a> settings and assigned description or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setValueHelp">ValueHelp</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowEmptyIndicator <p>New value for property <code>showEmptyIndicator</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowEmptyIndicator(bShowEmptyIndicator?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getTextAlign">textAlign</a>.</p><p>Defines the horizontal alignment of the text that is shown inside the input field.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Initial</code>.</p>
					 * @param {sap.ui.core.TextAlign} sTextAlign <p>New value for property <code>textAlign</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTextAlign(sTextAlign?: sap.ui.core.TextAlign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getTextDirection">textDirection</a>.</p><p>Defines the text directionality of the input field, for example, <code>RTL</code> or <code>LTR</code>.</p><p><b>Note:</b> If the rendered control doesn't support this feature, this property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Inherit</code>.</p>
					 * @param {sap.ui.core.TextDirection} sTextDirection <p>New value for property <code>textDirection</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTextDirection(sTextDirection?: sap.ui.core.TextDirection): this;
					/**
					 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueHelp">valueHelp</a>.</p>
					 * @param {sap.ui.core.ID | sap.ui.mdc.ValueHelp} oValueHelp <p>ID of an element which becomes the new target of this valueHelp association; alternatively, an element instance may be given</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setValueHelp(oValueHelp: sap.ui.core.ID | sap.ui.mdc.ValueHelp): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueState">valueState</a>.</p><p>Visualizes the validation state of the control, for example, <code>Error</code>, <code>Warning</code> or <code>Success</code>.</p><p><b>Note:</b> The visualization of the <code>ValueState</code> property is handled by the inner rendered control. If a control is set (using <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContent">content</a>, <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentEdit">contentEdit</a>, or <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/setContentDisplay">contentDisplay</a>), this control needs to support the <code>valueState</code> behavior, otherwise <code>valueState</code> is not visualized.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
					 * @param {sap.ui.core.ValueState} sValueState <p>New value for property <code>valueState</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setValueState(sValueState?: sap.ui.core.ValueState): this;
					/**
					 * <p>Sets the <code>ValueState</code> for content controls</p>
					 * @param {string} sContentId <p>Id of the content control</p>
					 * @param {sap.ui.core.ValueState} sValueState <p>value state</p>
					 * @param {string} sValueStateText <p>value state text</p>
					 */
					protected setValueStateForContent(sContentId: string, sValueState: sap.ui.core.ValueState, sValueStateText: string): void;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getValueStateText">valueStateText</a>.</p><p>Defines the text that appears in the value state message pop-up. If this has not been specified, a default text from the resource bundle is shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sValueStateText <p>New value for property <code>valueStateText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setValueStateText(sValueStateText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getWidth">width</a>.</p><p>Defines the width of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth?: sap.ui.core.CSSSize): this;
					/**
					 * <p>Checks if a condition update needs to fire a <a target="_self" href="api/sap.ui.base.ManagedObject#events/ValidationSuccess">ValidationSuccess</a> event.</p><p>This is required in <a target="_self" href="api/sap.ui.mdc.field.Field">Field</a> if the condition update doesn't lead to an update of the <a target="_self" href="api/sap.ui.mdc.field.Field#methods/setValue">value</a> property. (If only description or payload is changed.)</p>
					 * @param {any} aConditions <p>Current conditions</p>
					 * @returns boolean <p><code>true</code> if the <a target="_self" href="api/sap.ui.base.ManagedObject#events/ValidationSuccess">ValidationSuccess</a> event is fired</p>
					 */
					protected shouldFireValidationSuccessOnConditionUpdate(aConditions: any): boolean;
					/**
					 * <p>Triggers a check if all relevant properties are set to create the internal content control.</p><p>To be sure that the check is not called multiple times, it needs to be checked if there is a pending check. Multiple calls might happen if properties are changed often or the check is triggered during a <code>BindingContext</code> update (which is often called in propagation).</p>
					 */
					protected triggerCheckCreateInternalContent(): void;
					/**
					 * <p>Unbinds property <a target="_self" href="api/sap.ui.mdc.field.FieldBase#methods/getConditions">conditions</a> from model data.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					unbindConditions(): this;
					/**
					 * <p>Triggers an update of the internal content controls.</p><p>Should be called if properties are changed that might influence the content control.</p>
					 */
					protected updateInternalContent(): void;
				}
				/**
				 * <p>A <code>FieldInfoBase</code> element is a base class that shows any kind of information related to the <code>Field</code> control, for example, navigation targets or contact details. This is the basis for link-features. If the link is pressed a popover might be opened.</p>
				 */
				export class FieldInfoBase extends sap.ui.mdc.Element {
					/**
					 * <p>Constructor for a new <code>FieldInfoBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/dataUpdate">dataUpdate</a> event of this <code>sap.ui.mdc.field.FieldInfoBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.field.FieldInfoBase</code> itself.</p><p>This event is fired if the data was updated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.field.FieldInfoBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDataUpdate(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/popoverAfterOpen">popoverAfterOpen</a> event of this <code>sap.ui.mdc.field.FieldInfoBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.field.FieldInfoBase</code> itself.</p><p>This event is fired after the popover is opened.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.field.FieldInfoBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachPopoverAfterOpen(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Checks if there is a direct navigation or if there is a popover to be opened.</p>
					 * @returns any <p>Resolves a Boolean value</p>
					 */
					protected checkDirectNavigation(): any;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/dataUpdate">dataUpdate</a> event of this <code>sap.ui.mdc.field.FieldInfoBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDataUpdate(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/popoverAfterOpen">popoverAfterOpen</a> event of this <code>sap.ui.mdc.field.FieldInfoBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachPopoverAfterOpen(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/dataUpdate">dataUpdate</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireDataUpdate(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.field.FieldInfoBase#events/popoverAfterOpen">popoverAfterOpen</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected firePopoverAfterOpen(mParameters?: any): this;
					/**
					 * <p>Returns the content of the popover.</p>
					 * @param {Function} fnGetAutoClosedControl <p>Function returning the <code>Popover</code> control that is created in <code>createPopover</code></p>
					 * @returns any <p><code>Promise</code> with a popover content of type sap.ui.core.Control as result</p>
					 */
					getContent(fnGetAutoClosedControl?: Function): any;
					/**
					 * <p>Returns a <code>Promise</code> resolving into an <a target="_self" href="api/sap.ui.mdc.link.DirectLinkObject">sap.ui.mdc.link.DirectLinkObject</a> containing the <code>href</code> and <code>target</code> of a direct navigation link. Returns a <code>Promise</code> resolving into null if there is no direct link.</p>
					 * @returns any <p><code>Promise</code> resolving into <code>null</code> or a <a target="_self" href="api/sap.ui.mdc.link.DirectLinkObject">sap.ui.mdc.link.DirectLinkObject</a></p>
					 */
					getDirectLinkHrefAndTarget(): any;
					/**
					 * <p>Returns the parent control.</p>
					 * @returns string | string[] | null <p>control instance reference</p>
					 */
					protected getSourceControl(): any;
					/**
					 * <p>Returns href as a <code>Promise</code> that defines the target navigation of the <code>Link</code> control created by <code>Field</code>. If direct navigation is used, href is returned. If the information panel contains more content than only one link, <code>null</code> is returned.</p>
					 * @returns any <p>Result of <code>Promise</code> is href with values {string | null}</p>
					 */
					getTriggerHref(): any;
					/**
					 * <p>Returns <code>true</code> as a <code>Promise</code> result if the control created by <code>Field</code> can be triggered.</p>
					 * @returns any <p><code>Promise</code> resolving into <code>true</code> if <code>FieldInfo</code> is clickable</p>
					 */
					isTriggerable(): any;
					/**
					 * <p>Opens the info panel in the control created by <code>Field</code>.</p>
					 * @param {sap.ui.core.Control} oControl <p>Optional control reference to which the popover is</p>
					 * @param {sap.ui.base.Event} oEvent <p>Object of the event that gets fired by the <code>onPress</code> event of the link in <code>Field</code> attached. By default the parent is used as reference.</p>
					 * @returns Promise<any> <p><code>Promise</code> that is resolved once the popover has been created</p>
					 */
					open(oControl: sap.ui.core.Control, oEvent: sap.ui.base.Event): Promise<any>;
				}
				/**
				 * <p>The <code>FieldInput</code> control is used to render an input field inside a control based on <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>. It enhances the <a target="_self" href="api/sap.m.Input">Input</a> control to add ARIA attributes and other <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>-specific logic.</p>
				 */
				export abstract class FieldInput extends sap.m.Input {
					/**
					 * <p>Constructor for a new <code>FieldInput</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>The <code>FieldMultiInput</code> control is used to render a multi-input field inside a control based on <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>. It enhances the <a target="_self" href="api/sap.m.MultiInput">MultiInput</a> control to add ARIA attributes and other <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>-specific logic.</p>
				 */
				export abstract class FieldMultiInput extends sap.m.MultiInput {
					/**
					 * <p>Constructor for a new <code>FieldMultiInput</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>The <code>FieldSelect</code> control is used to render an select field inside a control based on <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>. It enhances the <a target="_self" href="api/sap.m.Select">Select</a> control to allow <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>-specific ValueHelp logic.</p>
				 */
				export abstract class FieldSelect extends sap.m.Input {
					/**
					 * <p>Constructor for a new <code>FieldSelect</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>An item that is used in the <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList">FixedList</a>.</p>
				 */
				export class ListFieldHelpItem extends sap.ui.mdc.valuehelp.content.FixedListItem {
					/**
					 * <p>Constructor for a new ListFieldHelpItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedListItem#constructor">sap.ui.mdc.valuehelp.content.FixedListItem</a> can be used.</p>
					 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
					 * @param {any} mSettings <p>initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>Base type for <code>MultiValueFieldItem</code> control. The <a target="_self" href="api/sap.ui.mdc.MultiValueField">MultiValueField</a> holds its values as items. The <code>MultiValueFieldItem</code> element defines these items.</p>
				 */
				export class MultiValueFieldItem extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>MultiValueFieldItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.MultiValueFieldItem#methods/getDescription">description</a>.</p><p>Description of the item.</p>
					 * @returns string <p>Value of property <code>description</code></p>
					 */
					getDescription(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.field.MultiValueFieldItem#methods/getKey">key</a>.</p><p>Key of the item.</p>
					 * @returns any <p>Value of property <code>key</code></p>
					 */
					getKey(): any;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.MultiValueFieldItem#methods/getDescription">description</a>.</p><p>Description of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sDescription <p>New value for property <code>description</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDescription(sDescription: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.field.MultiValueFieldItem#methods/getKey">key</a>.</p><p>Key of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} oKey <p>New value for property <code>key</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setKey(oKey: any): this;
				}
				/**
				 * <p>The <code>TokenDisplay</code> control is used to render a field inside a control based on <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>. It enhances the <a target="_self" href="api/sap.m.Token">Token</a> control to add ARIA attributes and other <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>-specific logic.</p>
				 */
				export abstract class TokenDisplay extends sap.m.Token {
					/**
					 * <p>Constructor for a new <code>TokenDisplay</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>The <code>TokenizerDisplay</code> control is used to render a Tokenizer inside a control based on <a target="_self" href="api/sap.ui.mdc.field.FieldBase">FieldBase</a>. It enhances the <a target="_self" href="api/sap.m.Tokenizer">Tokenizer</a> control to support display only tokens.</p>
				 */
				export abstract class TokenizerDisplay extends sap.m.Tokenizer {
					/**
					 * <p>Constructor for a new <code>TokenizerDisplay</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Returns if the control can be bound to a label</p>
					 * @returns boolean <p><code>true</code> if the control can be bound to a label</p>
					 */
					hasLabelableHTMLElement(): boolean;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				/**
				 */
				namespace content {
					/**
					 */
					export class ContentFactory extends sap.ui.base.Object {
						/**
						 * <p>Object-based factory that handles the content creation process of the <a target="_self" href="api/sap.ui.mdc.field.FieldBase">sap.ui.mdc.field.FieldBase</a>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.base.Object#constructor">sap.ui.base.Object</a> can be used.</p>
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
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the Boolean content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace BooleanContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the date content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace DateContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the date and time content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace DateTimeContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the default content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. Default content can be overwritten to create new content types. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace DefaultContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the link content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>. The <code>LinkContent</code> can extend any data-type based content.</p></p>
					 */
					namespace LinkContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the search content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace SearchContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the time content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace TimeContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace field {
				namespace content {
					/**
					 * <p><p>Object-based definition of the unit content type that is used in the <a target="_self" href="api/sap.ui.mdc.field.content.ContentFactory">sap.ui.mdc.field.content.ContentFactory</a>. This defines which controls to load and create for a given <a target="_self" href="api/sap.ui.mdc.enums.ContentMode">sap.ui.mdc.enums.ContentMode</a>.</p></p>
					 */
					namespace UnitContent {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Modules for <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a></p></p>
			 */
			namespace filterbar {
				/**
				 * <p>The <code>FilterBarBase</code> control is the base for filter displaying controls in MDC.</p>
				 */
				export class FilterBarBase extends sap.ui.mdc.Control {
					/**
					 * <p>Constructor for a new <code>FilterBarBase</code> control.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds an <code>InvisibleText</code> to the <code>FilterBar</code> that can be used for accessibility purposes.</p>
					 * @param {sap.ui.core.InvisibleText} oInvisibleText <p>The invisible text to be added</p>
					 */
					protected addInvisibleText(oInvisibleText: sap.ui.core.InvisibleText): void;
					/**
					 * <p>Adds a message to the <a target="_self" href="api/sap.ui.model.message.MessageModel">MessageModel</a> for a <code>propertyKey</code>. The message is displayed on the corresponding <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>.</p>
					 * @param {string} sPropertyKey <p>The <code>propertyKey</code> of the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p>
					 * @param {string} sMessage <p>The message text</p>
					 * @param {sap.ui.core.MessageType} sMessageType <p>The message type</p>
					 * @returns sap.ui.core.message.Message <p>The created message object</p>
					 */
					addMessage(sPropertyKey: string, sMessage: string, sMessageType: sap.ui.core.MessageType): sap.ui.core.message.Message;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/filtersChanged">filtersChanged</a> event of this <code>sap.ui.mdc.filterbar.FilterBarBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.filterbar.FilterBarBase</code> itself.</p><p>This event is fired after either a filter value or the visibility of a filter item has been changed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.filterbar.FilterBarBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachFiltersChanged(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/search">search</a> event of this <code>sap.ui.mdc.filterbar.FilterBarBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.filterbar.FilterBarBase</code> itself.</p><p>This event is fired when the Go button is pressed or after a condition change, when <code>liveMode</code> is active. <b>Note</b>: This event should never be executed programmatically. It is triggered internally by the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> after the <code>triggerSearch</code> function has been executed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.filterbar.FilterBarBase</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachSearch(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Checks the validation status of the filter fields. <b>Note:</b> This method returns the current inner state of the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a>.</p>
					 * @returns sap.ui.mdc.enums.FilterBarValidationStatus <p>Contains the validation status</p>
					 */
					checkFilters(): sap.ui.mdc.enums.FilterBarValidationStatus;
					/**
					 * <p>Clears non-model value for any filter field and resets the value state to none.</p>
					 */
					cleanUpAllFilterFieldsInErrorState(): void;
					/**
					 * <p>Destroys the basicSearchField in the aggregation <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getBasicSearchField">basicSearchField</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyBasicSearchField(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/filtersChanged">filtersChanged</a> event of this <code>sap.ui.mdc.filterbar.FilterBarBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachFiltersChanged(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/search">search</a> event of this <code>sap.ui.mdc.filterbar.FilterBarBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachSearch(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/filtersChanged">filtersChanged</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireFiltersChanged(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#events/search">search</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireSearch(mParameters?: any): this;
					/**
					 * <p>Updates the Adapt Filters button text based on the number of assigned filters.</p>
					 * @param {number} iFilterCount <p>number of assigned filters</p>
					 * @returns string <p>text for the Adapt Filters button</p>
					 */
					protected getAdaptFiltersButtonText(iFilterCount: number): string;
					/**
					 * <p>Gets the labels of all filters with a value assignment.</p><p><b>Note:</b> Filters annotated with <code>hiddenFilters</code> will not be considered.</p>
					 * @returns string[] <p>Array of labels of filters with value assignment</p>
					 */
					getAssignedFilterNames(): any;
					/**
					 * <p>Gets a summary string that contains information about the filters currently assigned. The method returns the text summary for the expanded and collapsed states of the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control.<br> <br></p>
					 * @returns any <p>A map containing the text information</p>
					 */
					getAssignedFiltersText(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getBasicSearchField">basicSearchField</a>.</p><p>Contains the optional basic search field. <b>Note:</b> The <code>conditions</code> property of this field is managed by the control. The <code>propertyKey</code> property of this field has to be <code>$search</code> and is enforced by this control.</p>
					 * @returns sap.ui.mdc.FilterField 
					 */
					getBasicSearchField(): sap.ui.mdc.FilterField;
					/**
					 * <p>Gets the external conditions.</p>
					 * @returns any <p>Map containing the external conditions</p>
					 */
					getConditions(): any;
					/**
					 * <p>Gets the external conditions of the inner condition model. <b>Note:</b> This API returns only attributes related to the <a target="_self" href="api/sap.ui.mdc.FilterBar#methods/setP13nMode">p13nMode</a> property configuration.</p>
					 * @returns sap.ui.mdc.State <p>Object containing the current status of the <code>FilterBarBase</code></p>
					 */
					getCurrentState(): sap.ui.mdc.State;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/BaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @returns any <p>Value of property <code>delegate</code></p>
					 */
					getDelegate(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getFilterItems">filterItems</a>.</p><p>Contains all the displayed <a target="_self" href="api/sap.ui.mdc.FilterField">filter fields</a> of the <code>FilterBarBase</code> control.</p><p><b>Note:</b> This aggregation is managed by the control, can only be populated during the definition in the XML view, and is not bindable. Any changes of the initial aggregation content might result in undesired effects. Changes of the aggregation have to be made with the <a target="_self" href="api/sap.ui.mdc.p13n.StateUtil">StateUtil</a>. Also, the <code>conditions</code> property of <code>filterItems</code> is managed by the control.</p>
					 * @returns sap.ui.mdc.FilterField[] 
					 */
					getFilterItems(): any;
					/**
					 * <p>Retrieves an <code>InvisibleText</code> by ID.</p>
					 * @param {string} sId <p>ID of the invisible text to be retrieved</p>
					 * @returns sap.ui.core.InvisibleText <p>The invisible text with the given ID</p>
					 */
					protected getInvisibleText(sId: string): sap.ui.core.InvisibleText;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getLiveMode">liveMode</a>.</p><p>Triggers a search automatically after a filter value has been changed.<br> <b>Note:</b> The <code>liveMode</code> property only operates in non-mobile scenarios.<br> Additionally, if the <code>liveMode</code> property is active, the following applies:<br> The error message box is not displayed, and the <code>showMessages</code> property is ignored.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>liveMode</code></p>
					 */
					getLiveMode(): boolean;
					/**
					 * <p>Returns all messages associated with the given <code>propertyKey</code> from the <a target="_self" href="api/sap.ui.model.message.MessageModel">MessageModel</a>.</p>
					 * @param {string} sPropertyKey <p>The <code>propertyKey</code> of the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p>
					 * @returns sap.ui.core.message.Message[] <p>Array of messages for the given <code>propertyKey</code></p>
					 */
					getMessages(sPropertyKey: string): any;
					/**
					 * <p>Gets the value of the basic search condition.</p>
					 * @returns string <p>Value of search condition or empty</p>
					 */
					getSearch(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getShowGoButton">showGoButton</a>.</p><p>Indicates whether the Go button is visible in the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control.<br> <b>Note</b>: If the <code>liveMode</code> property is set to <code>true</code>, it is ignored.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>showGoButton</code></p>
					 */
					getShowGoButton(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getShowMessages">showMessages</a>.</p><p>Indicates whether possible errors during the search in a message box are displayed.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>showMessages</code></p>
					 */
					getShowMessages(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getSuspendSelection">suspendSelection</a>.</p><p>If set to <code>true</code>, all search requests are ignored. Once it has been set to <code>false</code>, a search is triggered immediately if one or more search requests have been triggered in the meantime but were ignored based on the setting.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>suspendSelection</code></p>
					 */
					getSuspendSelection(): boolean;
					/**
					 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getVariantBackreference">variantBackreference</a>, or <code>null</code>.</p>
					 * @returns sap.ui.core.ID | null 
					 */
					getVariantBackreference(): sap.ui.core.ID | null;
					/**
					 * <p>Checks for the provided <code>sap.ui.mdc.FilterField</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getFilterItems">filterItems</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.mdc.FilterField} oFilterItem <p>The filterItem whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfFilterItem(oFilterItem: sap.ui.mdc.FilterField): number;
					/**
					 * <p>Gets the state of initialization. This method does not trigger the retrieval of the metadata.</p>
					 * @returns Promise<any> <p>Resolves after the initial filters have been applied</p>
					 */
					initialized(): Promise<any>;
					/**
					 * <p>Gets the state of initialization. This method triggers the retrieval of the metadata.</p>
					 * @returns Promise<any> <p>Resolves after the initial filters have been applied and the metadata has been obtained</p>
					 */
					initializedWithMetadata(): Promise<any>;
					/**
					 * <p>Removes a given message from the <a target="_self" href="api/sap.ui.model.message.MessageModel">MessageModel</a>. The message is removed from the corresponding <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>.</p>
					 * @param {sap.ui.core.Message} oMessage <p>The message to remove</p>
					 */
					removeMessage(oMessage: sap.ui.core.Message): void;
					/**
					 * <p>Removes all messages for the given <code>propertyKey</code> from the <a target="_self" href="api/sap.ui.model.message.MessageModel">MessageModel</a>. Clears the messages from the corresponding <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a>.</p>
					 * @param {string} sPropertyKey <p>The <code>propertyKey</code> of the <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a></p>
					 */
					removeMessages(sPropertyKey: string): void;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getBasicSearchField">basicSearchField</a>.</p>
					 * @param {sap.ui.mdc.FilterField} oBasicSearchField <p>The basicSearchField to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBasicSearchField(oBasicSearchField: sap.ui.mdc.FilterField): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/BaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDelegate(oDelegate?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getLiveMode">liveMode</a>.</p><p>Triggers a search automatically after a filter value has been changed.<br> <b>Note:</b> The <code>liveMode</code> property only operates in non-mobile scenarios.<br> Additionally, if the <code>liveMode</code> property is active, the following applies:<br> The error message box is not displayed, and the <code>showMessages</code> property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bLiveMode <p>New value for property <code>liveMode</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLiveMode(bLiveMode?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getShowGoButton">showGoButton</a>.</p><p>Indicates whether the Go button is visible in the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control.<br> <b>Note</b>: If the <code>liveMode</code> property is set to <code>true</code>, it is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bShowGoButton <p>New value for property <code>showGoButton</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowGoButton(bShowGoButton?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getShowMessages">showMessages</a>.</p><p>Indicates whether possible errors during the search in a message box are displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bShowMessages <p>New value for property <code>showMessages</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowMessages(bShowMessages?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getSuspendSelection">suspendSelection</a>.</p><p>If set to <code>true</code>, all search requests are ignored. Once it has been set to <code>false</code>, a search is triggered immediately if one or more search requests have been triggered in the meantime but were ignored based on the setting.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSuspendSelection <p>New value for property <code>suspendSelection</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSuspendSelection(bSuspendSelection?: boolean): this;
					/**
					 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getVariantBackreference">variantBackreference</a>.</p>
					 * @param {sap.ui.core.ID | sap.ui.fl.variants.VariantManagement} oVariantBackreference <p>ID of an element which becomes the new target of this variantBackreference association; alternatively, an element instance may be given</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setVariantBackreference(oVariantBackreference: sap.ui.core.ID | sap.ui.fl.variants.VariantManagement): this;
					/**
					 * <p>Triggers the search.</p>
					 * @returns Promise<any> <p>If the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/setSuspendSelection">suspendSelection</a> property is set to <code>true</code>, the method will be immediately resolved, otherwise it returns the result of the <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/validate">sap.ui.mdc.filterbar.FilterBarBase#validate</a> call.</p>
					 */
					triggerSearch(): Promise<any>;
					/**
					 * <p>Returns a <code>Promise</code> for the asynchronous validation of filters.</p>
					 * @param {boolean} bSuppressSearch <p>Indicates whether the <code>search</code> event is triggered after successful validation</p>
					 * @returns Promise<any> <p>Returns a <code>Promise</code> that resolves after the validation of erroneous fields has been propagated.</p>
					 */
					validate(bSuppressSearch: boolean): Promise<any>;
				}
				/**
				 * <p>The <code>FilterContainer</code> is an <a target="_self" href="api/sap.ui.layout.IFilterContainer">IFilterContainer</a> implementation for <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBaseLayout">FilterBarBaseLayout</a>. It is used by the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> to display the filter items.</p>
				 */
				export class FilterContainer extends sap.ui.mdc.filterbar.IFilterContainer {
					/**
					 * <p>Constructor for a new filterBar/FilterContainer.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 */
					constructor(sId?: string);
				}
				/**
				 * <p>The <code>IFilterContainer</code> is the base container for the visualization of the filter items in the <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control.</p>
				 */
				export class IFilterContainer extends sap.ui.core.Element {
					/**
					 * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.core.Element#constructor">sap.ui.core.Element</a> can be used.</p>
					 */
					constructor();
					/**
					 * <p>Adds a button control to the inner layout of the <code>IFilterContainer</code>.</p>
					 * @param {sap.ui.core.Control} oControl <p>Control that is added</p>
					 */
					addButton(oControl: sap.ui.core.Control): void;
					/**
					 * <p>Overwrites the default exit to clean up the created layout properly.</p>
					 */
					exit(): void;
					/**
					 * <p>Gets the inner controls of the layout item.</p>
					 * @returns sap.ui.mdc.FilterField[] <p>Array of all inner controls in the layout item</p>
					 */
					getFilterFields(): any;
					/**
					 * <p>Gets the inner layout item.</p>
					 * @returns sap.ui.core.Control <p>Control instance of the inner layout item</p>
					 */
					getInner(): sap.ui.core.Control;
					/**
					 * <p>Creates the inner layout for the <code>IFilterContainer</code>.</p>
					 */
					init(): void;
					/**
					 * <p>Inserts the inner content into the layout item.</p>
					 * @param {sap.ui.mdc.FilterField} oControl <p>to be inserted</p>
					 * @param {number} iIndex <p>Position where the control is added</p>
					 */
					insertFilterField(oControl: sap.ui.mdc.FilterField, iIndex: number): void;
					/**
					 * <p>Removes the inner content from the layout item.</p>
					 * @param {sap.ui.mdc.FilterField} oControl <p>Control that is removed</p>
					 */
					removeFilterField(oControl: sap.ui.mdc.FilterField): void;
				}
				/**
				 */
				export interface PropertyInfo {
					/**
					 * <p>If set to <code>false</code>, the filter is visible in the <code>FilterBar</code></p>
					 */
					hiddenFilter?: any;
					/**
					 * <p>If set to <code>true</code>, the filter is mandatory</p>
					 */
					required?: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace filterbar {
				/**
				 * <p><p>Modules for personalization controls</p></p>
				 */
				namespace p13n {
					/**
					 * <p>The <code>AdaptationFilterBar</code> control is used for a lightweight <a target="_self" href="api/sap.ui.mdc.FilterBar">FilterBar</a> control implementation for p13n use cases. The <code>AdaptationFilterBar</code> should only be used if the consuming control implements at least the <code>IFilterSource</code> interface to provide basic filter functionality.</p>
					 */
					export class AdaptationFilterBar extends sap.ui.mdc.filterbar.FilterBarBase {
						/**
						 * <p>Constructor for a new AdaptationFilterBar.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace filterbar {
				/**
				 * <p><p>Provides validation functionality for property info and related controls.</p></p>
				 */
				namespace PropertyInfoValidator {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace filterbar {
				/**
				 * <p><p>Modules for value help dialog <a target="_self" href="api/sap.ui.mdc.filterbar.vh.FilterBar">FilterBar</a></p></p>
				 */
				namespace vh {
					/**
					 * <p>Can be used to manage the <code>CollectiveSearchSelect</code> control search items.</p>
					 */
					export class CollectiveSearchSelect extends sap.ui.mdc.valuehelp.CollectiveSearchSelect {
						/**
						 * <p>Constructor for a new <code>CollectiveSearchSelect</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.mdc.valuehelp.CollectiveSearchSelect#constructor">sap.ui.mdc.valuehelp.CollectiveSearchSelect</a> can be used.</p>
						 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
					}
					/**
					 * <p>The <code>FilterBar</code> control is used to display filter properties in a user-friendly manner to populate values for a query. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The Go button triggers the search event, and the Show Filters button shows the additional filter field.<br> The <code>FilterBar</code> control creates and handles the filters based on the provided metadata information. The metadata information is provided via the <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a> implementation. This implementation has to be provided by the application.<br> <b>Note:</b> The <code>FilterBar</code> can only be used for a <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog">Dialog</a> and not on its own.</p>
					 */
					export class FilterBar extends sap.ui.mdc.valuehelp.FilterBar {
						/**
						 * <p>Constructor for a new <code>FilterBar</code> for a value help dialog.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#constructor">sap.ui.mdc.valuehelp.FilterBar</a> can be used.</p>
						 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace mixin {
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances <a target="_self" href="api/sap.ui.mdc.Table">Table</a> or <a target="_self" href="api/sap.ui.mdc.Chart">Chart</a> with helper functions for <a target="_self" href="api/sap.ui.mdc.ActionToolbar">ActionToolbar</a></p><p>The following methods are wrapped:</p><p><ul> <li><code>addAction</code></li> <li><code>insertAction</code></li> <li><code>removeAction</code></li> <li><code>indexOfAction</code></li> </ul></p></p>
				 */
				namespace ActionToolbarMixin {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with consolidated handling for adaptation.</p><p>The following methods are available:</p><p><ul> <li><code>getEngine</code> - Provides access to the adaptation engine singleton instance.</li> <li><code>retrieveInbuiltFilter</code> - Provides access to the AdaptationFilterBar initialization</li> <li><code>getInbuiltFilter</code> - Returns the AdaptationFilterBar instance, if available.</li> <li><code>getAdaptationConfigAttribute</code> - Returns an adaptationConfig attribute.</li> </ul></p><p>Additionally, the following methods are wrapped:</p><p><ul> <li><code>exit</code></li> </ul></p></p>
				 */
				namespace AdaptationMixin {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with consolidated asynchronous handling for delegate modules and their initialization.</p><p>The following methods are available:</p><p><ul> <li><code>awaitControlDelegate</code> - Provides access to the delegate initialization <code>Promise</code>.</li> <li><code>getControlDelegate</code> - Returns the delegate instance, if available.</li> <li><code>isControlDelegateInitialized</code> - Checks whether the control delegate is available.</li> <li><code>getPayload</code> - Returns the payload object set for the delegate property.</li> <li><code>getTypeMap</code> - Returns the <code>TypeMap</code> made available by the delegate module</li> <li><code>initControlDelegate</code> - Loads and initializes the delegate module related to the enhanced control.</li> </ul></p><p>Additionally, the following methods are wrapped:</p><p><ul> <li><code>applySettings</code></li> <li><code>exit</code></li> <li><code>init</code></li> <li><code>setDelegate</code></li> </ul></p><p>The <code>prototype.init</code> wrapper creates the following instance fields:</p><p><ul> <li><code>bDelegateInitialized</code> - Indicator for the availability of delegates</li> <li><code>bDelegateLoading</code> - Indicates whether the initialization of delegate modules is triggered but not yet completed (loading necessary)</li> </ul></p></p>
				 */
				namespace DelegateMixin {
					/**
					 * <p>Returns the delegate instance, if available.</p>
					 * @returns any <p><code>typeUtil</code> made available by a delegate module</p>
					 */
					function getControlDelegate(): any;
					/**
					 * <p>Returns the payload object set for the delegate property.</p>
					 * @returns any <p>Payload set for delegate property</p>
					 */
					function getPayload(): any;
					/**
					 * <p>Returns the <code>TypeMap</code> made available by a delegate module.</p>
					 * @returns any <p><code>TypeMap</code> object</p>
					 */
					function getTypeMap(): any;
					/**
					 * <p>Checks whether the delegate module related to the enhanced control is loaded.</p>
					 * @returns boolean <p>Whether the delegate module is loaded</p>
					 */
					function isControlDelegateInitialized(): boolean;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with dynamic property support via key-based aggregation management.</p><p><b>Property keys mode</b>: When <code>propertyKeys</code> is non-empty, the control operates in property keys mode. Flex changes only modify the <code>propertyKeys</code> property. The aggregation is derived reactively by <a target="_self" href="api/sap.ui.mdc.mixin.DynamicPropertiesMixin#methods/syncItemsFromPropertyKeys">#syncItemsFromPropertyKeys</a> after each batch of changes.</p><p><b>Aggregation mode</b>: When <code>propertyKeys</code> is empty, the control operates in aggregation mode (legacy behavior). Dynamic properties are not supported.</p><p>The two modes are mutually exclusive. Defining both <code>propertyKeys</code> and items in the aggregation throws an error.</p><p>The following methods are available: <ul> <li><code>isInPropertyKeysMode</code> - Whether the control uses property keys mode.</li> <li><code>syncItemsFromPropertyKeys</code> - Syncs the item aggregation from <code>propertyKeys</code> + PropertyHelper state.</li> <li><code>initializeItemsFromPropertyKeys</code> - Waits for pending flex changes and syncs. For use during control init.</li> </ul></p><p>Additionally, the following methods are wrapped: <ul> <li><code>applySettings</code></li> <li><code>exit</code></li> <li><code>_onModifications</code></li> </ul></p></p>
				 */
				namespace DynamicPropertiesMixin {
					/**
					 * <p>Waits for pending flex changes, then syncs the item aggregation via <a target="_self" href="api/sap.ui.mdc.mixin.DynamicPropertiesMixin#methods/syncItemsFromPropertyKeys">#syncItemsFromPropertyKeys</a>. For use during control initialization. Includes the <code>isModificationSupported</code> check — if modifications are not supported, skips <code>waitForChanges</code>.</p><p><b>Note:</b> Must not be called from within <code>_onModifications</code> — <code>waitForChanges</code> would deadlock there.</p>
					 * @returns Promise<any> <p>Resolves when the initial sync is complete</p>
					 */
					function initializeItemsFromPropertyKeys(): Promise<any>;
					/**
					 * <p>Whether the control is in property keys mode.</p><p>In property keys mode, the aggregation is not managed directly. Instead, the <code>propertyKeys</code> property is the source of truth: flex changes only modify <code>propertyKeys</code>, and the aggregation is derived reactively by <a target="_self" href="api/sap.ui.mdc.mixin.DynamicPropertiesMixin#methods/syncItemsFromPropertyKeys">#syncItemsFromPropertyKeys</a>. This enables support for dynamic properties whose metadata (e.g. <code>isActive</code>) can change at runtime — inactive properties are tracked in <code>propertyKeys</code> but excluded from the aggregation.</p><p>The control is in property keys mode when no items are defined in the aggregation at initialization time. If items are defined in the aggregation, the control operates in aggregation mode and <code>propertyKeys</code> is not used.</p>
					 * @returns boolean <p><code>true</code> if the control is in property keys mode</p>
					 */
					function isInPropertyKeysMode(): boolean;
					/**
					 * <p>Syncs the item aggregation from <code>propertyKeys</code> and PropertyHelper state. Computes the diff between the current aggregation and the desired state, and patches: creates and adds missing items, removes and destroys excess items, reorders mismatched items. Idempotent — calling with an unchanged state is a no-op.</p>
					 * @returns Promise<any> <p>Resolves when the sync is complete</p>
					 */
					function syncItemsFromPropertyKeys(): Promise<any>;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with consolidated handling for external IFilter integration</p><p>The following methods are available:</p><p><ul> <li><code>setFilter</code> - The setter for the <code>filter</code> association</li> <li><code>_validateFilter</code> - Validates the provided <code>IFilter</code> control instance and may return an error</li> <li><code>rebind</code> - Executes a the <code>rebind</code> method for the given control instance.</li> </ul></p><p>To use the FilterIntegrationMixin, the implementing Control requires the <code>filter</code> associaton.</p><p>Additionally, the following methods are necessary to be implemented:</p><p><ul> <li><code>_rebind</code></li> <li><code>isFilteringEnabled</code></li> </ul></p><p>Hooks that are called by the FilterIntegrationMixin if implemented in the control.</p><p><ul> <li><code>_onFilterProvided(oFilter: sap.ui.mdc.IFilter)</code> - Notifies the control that a valid <code>filter</code> association has been provided. The provided filter instance is passed.</li> <li><code>_onFilterRemoved(oFilter: sap.ui.mdc.IFilter)</code> - Notifies the control that the <code>filter</code> association has been removed. The removed filter instance is passed.</li> <li><code>_onFilterSearch(oEvent)</code> - Called when the <code>search</code> event of the filter is fired. The event object is passed.</li> <li><code>_onFiltersChanged(oEvent)</code> - Called when the <code>filtersChanged</code> event of the filter is fired. The event object is passed.</li> </ul></p></p>
				 */
				namespace FilterIntegrationMixin {
					/**
					 * <p>Executes a rebind considering the provided external and inbuilt filtering.</p>
					 * @returns Promise<any> <p>A <code>Promise</code> that resolves after rebind is executed, and rejects if rebind cannot be executed, for example because there are invalid filters.</p>
					 */
					function rebind(): Promise<any>;
					/**
					 * <p>Set an external IFilter source to connect it with the given control instance.</p>
					 * @param {sap.ui.mdc.IFilter | string} vFilter <p>IFilter implementing instance or its id.</p>
					 * @returns sap.ui.mdc.Control <p>The MDC Control instance.</p>
					 */
					function setFilter(vFilter: sap.ui.mdc.IFilter | string): sap.ui.mdc.Control;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with a management mechanism for lifecycle related promises. Calling any of the enhanced methods after control exit will result in a no-op.</p></p>
				 */
				namespace PromiseMixin {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace mixin {
				/**
				 * <p><p>Enhances a given control prototype with consolidated asynchronous handling for providing a PropertyHelper</p><p>The following methods are available:</p><p><ul> <li><code>initPropertyHelper</code> - Loads and initializes the property helper related to the enhanced control.</li> <li><code>awaitPropertyHelper</code> - Provides access to the property helper initialization <code>Promise</code>.</li> <li><code>finalizePropertyHelper</code> - Finalizes the propertyHelper fetching all available propertyInfo via a given control delegate.</li> <li><code>isPropertyHelperFinal</code> - Indicates if the propertyHelper for this control allready contains all available propertyInfo.</li> <li><code>getPropertyHelper</code> - Returns the property helper instance, if available.</li> </ul></p><p>Additionally, the following methods are wrapped:</p><p><ul> <li><code>applySettings</code></li> <li><code>exit</code></li> <li><code>init</code></li> </ul></p></p>
				 */
				namespace PropertyHelperMixin {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace odata {
				/**
				 * <p><p>Provides mapping functionality for model dependent data types to base types. Extend this object in your project to customize behaviour depending on model usage.</p></p>
				 */
				namespace TypeUtil {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace odata {
				namespace v4 {
					/**
					 * <p><p>Provides mapping functionality for odata v4 data types to base types. Extend this object in your project to customize behaviour depending on model usage.</p></p>
					 */
					namespace TypeUtil {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace odata {
				namespace v4 {
					/**
					 * <p><p>Module for vizChart delegate</p></p>
					 */
					namespace vizChart {
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Utilities for <code>sap.ui.mdc</code> library</p></p>
			 */
			namespace util {
				/**
				 * <p><p>An object literal that describes attributes of a complex data property. A complex property references other properties in the <code>propertyInfos</code> attribute.</p></p>
				 */
				export interface ComplexPropertyInfo {
					/**
					 * <p>A list of related properties (by key). These related properties must not themselves be complex.</p>
					 */
					propertyInfos: any;
				}
				/**
				 * <p><p>Configuration object for filter creation.</p></p>
				 */
				export interface FilterTypeConfigEntry {
					/**
					 * <p>Type instance</p>
					 */
					type: any;
					/**
					 * <p>Indicates if a created filter is case-sensitive</p>
					 */
					caseSensitive?: any;
					/**
					 * <p>BaseType configuration for the given type useful for externalization/internalization of filter values</p>
					 */
					baseType?: any;
				}
				/**
				 * <p>The <code>InfoBar</code> control provides an easy way of displaying filter information inside an <code>sap.ui.mdc.Chart</code> and an <code>sap.ui.mdc.Table</code>.</p>
				 */
				export class InfoBar extends sap.ui.core.Control {
					/**
					 * <p>Constructor for a new InfoBar.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>Provides a caching mechanism for promises. This API features Promise cancellation: resolve or reject handlers won't be called after removal of the promise, cache destruction or manual cancellation. Destroying the cache will cancel all registered promises and delete references. Convenience methods for promise creation, wrapping and replacement are offered.</p>
				 */
				export class PromiseCache extends sap.ui.base.Object {
					/**
					 */
					constructor();
					/**
					 * <p>Adds a promise to the promise cache using a string identifier and a creation method or given <code>Promise</code>. Calling add using an already existing identifier will cancel and replace the existing promise.</p><p>Note: All unsettled promises will be cancelled on removal or cache destruction A given creation method will receive the following arguments on execution: <ul> <li><code>oPromise</code> ­- The newly created Promise</li> <li><code>fnResolve</code> ­- Resolve method for the newly created Promise</li> <li><code>fnReject</code> ­- Reject method for the newly created Promise</li> <li><code>fnRemove</code> ­- Remove method for the newly created Promise</li> </ul></p>
					 * @param {string} sName <p>Promise identifier</p>
					 * @param {Function} fnCreate <p>creation method or pre-created promise</p>
					 * @returns any <p>Returns the newly created <code>Promise</code></p>
					 */
					protected add(sName?: string, fnCreate?: Function): any;
					/**
					 * <p>Cancels an unsettled promise from the promise cache. Calling cancel twice is a no-op.</p>
					 * @param {string | Promise<any>} vPromise <p>Promise or identifier</p>
					 * @returns any <p>Returns the canceled <code>Promise</code></p>
					 */
					protected cancel(vPromise: string | Promise<any>): any;
					/**
					 * <p>Provides cleanup functionality for the promise cache</p>
					 */
					protected clear(): void;
					/**
					 * <p>Rejects an existing promise from the promise cache</p>
					 * @param {string | Promise<any>} vPromise <p>Promise or identifier</p>
					 * @param {string} oValue <p>Promise error</p>
					 * @returns any <p>Returns the rejected <code>Promise</code></p>
					 */
					protected reject(vPromise: string | Promise<any>, oValue?: string): any;
					/**
					 * <p>Removes an existing promise from the promise cache</p>
					 * @param {any} vPromise <p>Promise or identifier</p>
					 */
					protected remove(vPromise: any): void;
					/**
					 * <p>Resolves an existing promise from the promise cache</p>
					 * @param {string | Promise<any>} vPromise <p>Promise or identifier</p>
					 * @param {string} oValue <p>Promise result</p>
					 * @returns any <p>Returns the resolved <code>Promise</code></p>
					 */
					protected resolve(vPromise: string | Promise<any>, oValue?: string): any;
					/**
					 * <p>Retrieves an existing promise from the promise cache. Automatically creates and returns a new promise if <code>fnCreate</code> is given.</p><p>A given creation method will receive the following arguments on execution: <ul> <li><code>oPromise</code> ­- The newly created Promise</li> <li><code>fnResolve</code> ­- Resolve method for the newly created Promise</li> <li><code>fnReject</code> ­- Reject method for the newly created Promise</li> <li><code>fnRemove</code> ­- Remove method for the newly created Promise</li> </ul></p>
					 * @param {string} sName <p>Promise identifier</p>
					 * @param {Function} fnCreate <p>creation method or pre-created promise</p>
					 * @returns Promise<any> <p>Returns the newly created <code>Promise</code></p>
					 */
					protected retrieve(sName: string, fnCreate?: Function): Promise<any>;
					/**
					 * <p>Retrieves multiple promises from the promise cache Will return all cached promises if no arguments are given</p>
					 * @param {string} sName <p>Promise identifier(s)</p>
					 * @returns any[] <p>Returns the retrieved promises</p>
					 */
					protected retrieveMany(sName: string): any[];
				}
				/**
				 * <p><p>An object literal that describes attributes of a data property.</p></p>
				 */
				export interface PropertyInfo {
					/**
					 * <p>The name of the data type</p>
					 */
					dataType: any;
					/**
					 * <p>Defines the formatting options for the data type</p>
					 */
					formatOptions?: any;
					/**
					 * <p>Defines the constraints for the data type</p>
					 */
					constraints?: any;
					/**
					 * <p>The technical path for a data source property</p>
					 */
					path?: any;
					/**
					 * <p>Defines the maximum number of filter conditions for the property. Possible values that can be used: <ul> <li>1 is a single-filter expression field</li> <li>-1 is a multi-filter expression field</li> </ul> This information is, for example, used in the <code>addItem</code> method of the <code>FilterBar</code> control to forward this information to the created <code>FilterField</code> instance.</p>
					 */
					maxConditions?: any;
					/**
					 * <p>Whether filtering by this property is case-sensitive</p>
					 */
					caseSensitive?: any;
				}
				/**
				 */
				export interface PropertyInfoBase {
					/**
					 * <p>Unique, stable key for the property. It must only contain characters allowed for IDs, see <a target="_self" href="api/sap.ui.core.ID">sap.ui.core.ID</a>. Does not have to be an existing attribute in the data model or the technical name of an attribute in the data model.</p>
					 */
					key: any;
					/**
					 * <p>Translatable text that labels the property</p>
					 */
					label: any;
					/**
					 * <p>Translatable text that can optionally be offered as tooltip, for example, in a personalization dialog</p>
					 */
					tooltip?: any;
					/**
					 * <p>Whether the property is or can be visible to a user</p>
					 */
					visible?: any;
					/**
					 * <p>Key of the group in which the property is located. Used to visually group properties in personalization dialogs. The group with the <code>basic</code> key is always shown as the first group.</p>
					 */
					group?: any;
					/**
					 * <p>Translatable text of the group.</p>
					 */
					groupLabel?: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace util {
				/**
				 * <p><p>Utility class with functions for Date conversion</p></p>
				 */
				namespace DateUtil {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace util {
				/**
				 * <p><p>Utility class used by mdc controls to set/copy density configuration from a source control/DOM (or document body) to a control target. <b>Note</b>: Will also set a default density (cozy) if nothing else is found.</p></p>
				 */
				namespace DensityHelper {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace util {
				/**
				 * <p><p>Utility class used by controls in the <code>sap.ui.mdc</code> library to create a filter statement</p></p>
				 */
				namespace FilterUtil {
					/**
					 * <p>Returns internal conditions for a set of properties. Properties without a condition will be ignored. The resulting conditions are represented by the operation and by the values array. <b>Note:</b><br>The operation information will be returned as they are contained in the internal conditions model. This has to be considered, in case custom operations are used.</p>
					 * @param {sap.ui.mdc.FilterBar} oFilterBar <p>Instance of the filter bar</p>
					 * @param {any[]} aPropertyNames <p>List of property names to be taken into consideration</p>
					 * @returns any <p>mResultingConditions with property names as key and a list of internal conditions for each property</p>
					 */
					function getConditionsMap(oFilterBar: sap.ui.mdc.FilterBar, aPropertyNames: any[]): any;
					/**
					 * <p>Creates the filter statements based on the externalize conditions.<br></p>
					 * @param {any} vTypeProvider <p>the <code>Control</code>instance or <code>TypeMap</code></p>
					 * @param {any} mConditionsPerKey <p>Map with externalized conditions</p>
					 * @param {any[]} aPropertiesMetadata <p>Array with all the property metadata</p>
					 * @param {any[]} aIgnoreProperties <p>Array of property names not taken into consideration for filtering</p>
					 * @returns any <p>Object with filters</p>
					 */
					function getFilterInfo(vTypeProvider: any, mConditionsPerKey: any, aPropertiesMetadata: any[], aIgnoreProperties: any[]): any;
					/**
					 * <p>Returns a specific <code>PropertyInfo</code> object by a given key.<br></p>
					 * @param {any[]} aPropertiesMetadata <p>array with all the property metadata</p>
					 * @param {string} sKey <p>key of the property</p>
					 * @returns any <p>PropertyInfo object for a given key, or <code>null</code></p>
					 */
					function getPropertyByKey(aPropertiesMetadata: any[], sKey: string): any;
					/**
					 * <p>Determines the required filter fields that have no value.</p>
					 * @param {sap.ui.mdc.FilterBar} oFilterBar <p>Instance of the filter bar</p>
					 * @returns string[] <p>Array containing the required field names without a value If there are no such fields, or all required filters are filled, an empty array is returned.</p>
					 */
					function getRequiredFieldNamesWithoutValues(oFilterBar: sap.ui.mdc.FilterBar): any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace util {
				/**
				 * <p><p>Provides validation functions for checking the (required) usage of the PropertyHelper.</p></p>
				 */
				namespace PropertyHelperUtil {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace util {
				/**
				 * <p><p>Provides mapping functionality for model dependent data types to base types. Extend this object in your project to customize behaviour depending on model usage.</p></p>
				 */
				namespace TypeUtil {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 * <p><p>Modules for <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p></p>
			 */
			namespace valuehelp {
				/**
				 * <p>Can be used to manage the <code>CollectiveSearchSelect</code> control search items.</p>
				 */
				export class CollectiveSearchSelect extends sap.m.VariantManagement {
					/**
					 * <p>Constructor for a new <code>CollectiveSearchSelect</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Required by the <a target="_self" href="api/sap.m.IOverflowToolbarContent">sap.m.IOverflowToolbarContent</a> interface. Registers invalidations event which is fired when width of the control is changed.</p>
					 * @returns any <p>Configuration information for the <code>sap.m.IOverflowToolbarContent</code> interface.</p>
					 */
					protected getOverflowToolbarConfig(): any;
				}
				/**
				 * <p>Container for the <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a> element showing a dialog.</p>
				 */
				export class Dialog extends sap.ui.mdc.valuehelp.base.Container implements sap.ui.mdc.valuehelp.base.IDialogContainer {
					/**
					 * <p>Constructor for a new <code>Dialog</code> container.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog#methods/getGroupConfig">groupConfig</a>.</p><p>Configuration for groups (collective search).</p><p>The object needs to contain an entry for every possible group. The labels of every group need to have a structure of <a target="_self" href="api/sap.ui.mdc.valuehelp.content.GroupLabel">sap.ui.mdc.valuehelp.content.GroupLabel</a>. If no configuration is provided a standard text "search and select" is used.</p><p><b>Sample:</b> <pre>
					{
					group1: {label: "Label 1 ({0})", nnLabel: "Label 1"},
					group2: {label: "Label 2 ({0})", nnLabel: "Label 2"}
					}
					</pre></p><p>Default value is <code>{}</code>.</p>
					 * @returns any <p>Value of property <code>groupConfig</code></p>
					 */
					getGroupConfig(): any;
					/**
					 * <p>Gets whether quickselect (confirms values on selection) is active on the dialog.</p>
					 * @returns boolean <p>true if quickselect is active</p>
					 */
					protected isQuickSelectActive(): boolean;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog#methods/getGroupConfig">groupConfig</a>.</p><p>Configuration for groups (collective search).</p><p>The object needs to contain an entry for every possible group. The labels of every group need to have a structure of <a target="_self" href="api/sap.ui.mdc.valuehelp.content.GroupLabel">sap.ui.mdc.valuehelp.content.GroupLabel</a>. If no configuration is provided a standard text "search and select" is used.</p><p><b>Sample:</b> <pre>
					{
					group1: {label: "Label 1 ({0})", nnLabel: "Label 1"},
					group2: {label: "Label 2 ({0})", nnLabel: "Label 2"}
					}
					</pre></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>{}</code>.</p>
					 * @param {any} oGroupConfig <p>New value for property <code>groupConfig</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setGroupConfig(oGroupConfig?: any): this;
				}
				/**
				 * <p>The <code>FilterBar</code> control is used to display filter properties in a user-friendly manner to populate values for a query. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The Go button triggers the search event, and the Show Filters button shows the additional filter field.<br> The <code>FilterBar</code> control creates and handles the filters based on the provided metadata information. The metadata information is provided via the <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a> implementation. This implementation has to be provided by the application.<br> <b>Note:</b> The <code>FilterBar</code> can only be used for a <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog">Dialog</a> and not on its own.</p>
				 */
				export class FilterBar extends sap.ui.mdc.filterbar.FilterBarBase {
					/**
					 * <p>Constructor for a new <code>FilterBar</code> for a value help dialog.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/BaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @returns any <p>Value of property <code>delegate</code></p>
					 */
					getDelegate(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/valuehelp/FilterBarDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @returns any <p>Value of property <code>delegate</code></p>
					 */
					getDelegate(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getExpandFilterFields">expandFilterFields</a>.</p><p>Determines whether the Show/Hide Filters button is in the state show or hide.<br></p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>expandFilterFields</code></p>
					 */
					getExpandFilterFields(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getFilterFieldThreshold">filterFieldThreshold</a>.</p><p>Number of FilterItems which will be shown via Show Filters.<br></p><p>Default value is <code>8</code>.</p>
					 * @returns number <p>Value of property <code>filterFieldThreshold</code></p>
					 */
					getFilterFieldThreshold(): number;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.filterbar.FilterBarBase#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties (see <a target="_self" href="api/sap.ui.mdc.DelegateConfig">DelegateConfig</a>): <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module. The used delegate module must inherit from <a target="_self" href="api/module:sap/ui/mdc/FilterBarDelegate">FilterBarDelegate</a>.</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/mdc/BaseDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDelegate(oDelegate?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getDelegate">delegate</a>.</p><p>Object related to the <code>Delegate</code> module that provides the required APIs to execute model-specific logic.<br> The object has the following properties: <ul> <li><code>name</code> defines the path to the <code>Delegate</code> module</li> <li><code>payload</code> (optional) defines application-specific information that can be used in the given delegate</li> </ul> <i>Sample delegate object:</i> <pre><code>{
						name: "sap/ui/valuehelp/FilterBarDelegate",
						payload: {}
					}</code></pre> <b>Note:</b> Ensure that the related file can be requested (any required library has to be loaded before that).<br> Do not bind or modify the module. This property can only be configured during control initialization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @param {any} oDelegate <p>New value for property <code>delegate</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDelegate(oDelegate?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getExpandFilterFields">expandFilterFields</a>.</p><p>Determines whether the Show/Hide Filters button is in the state show or hide.<br></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bExpandFilterFields <p>New value for property <code>expandFilterFields</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setExpandFilterFields(bExpandFilterFields?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar#methods/getFilterFieldThreshold">filterFieldThreshold</a>.</p><p>Number of FilterItems which will be shown via Show Filters.<br></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>8</code>.</p>
					 * @param {number} iFilterFieldThreshold <p>New value for property <code>filterFieldThreshold</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFilterFieldThreshold(iFilterFieldThreshold?: number): this;
				}
				/**
				 * <p>Container for the <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a> element showing a popover.</p>
				 */
				export class Popover extends sap.ui.mdc.valuehelp.base.Container implements sap.ui.mdc.valuehelp.base.ITypeaheadContainer, sap.ui.mdc.valuehelp.base.IDialogContainer {
					/**
					 * <p>Constructor for a new <code>Popover</code> container.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace valuehelp {
				/**
				 * <p><p>Base modules for <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a></p><p>These modules must not be used stand-alone.</p></p>
				 */
				namespace base {
					/**
					 * <p><p>Aria attributes determined by value help to be set on connected control</p></p>
					 */
					export interface AriaAttributes {
					}
					/**
					 * <p>Container for the <a target="_self" href="api/sap.ui.mdc.ValueHelp">ValueHelp</a> element.</p>
					 */
					export abstract class Container extends sap.ui.core.Element {
						/**
						 * <p>Constructor for a new <code>Container</code>.</p><p>This is the basis for various value help containers. It cannot be used directly.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>The content to add; if empty, nothing is inserted</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						addContent(oContent: sap.ui.mdc.valuehelp.base.Content): this;
						/**
						 * <p>Binds the content to the container.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>content</p>
						 */
						protected bindContentToContainer(oContent: sap.ui.mdc.valuehelp.base.Content): void;
						/**
						 * <p>Closes the container</p>
						 * @param {boolean} bDoNotRestoreFocus <p>If set, closing must not restore the focus on the field</p>
						 */
						close(bDoNotRestoreFocus: boolean): void;
						/**
						 * <p>Closes the container control or element.</p>
						 * @param {boolean} bDoNotRestoreFocus <p>If set, closing must not restore the focus on the field</p>
						 */
						protected closeContainer(bDoNotRestoreFocus: boolean): void;
						/**
						 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyContent(): this;
						/**
						 * <p>Gets the configuration for a specific content.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>content</p>
						 * @returns any <p>configuration</p>
						 */
						protected getContainerConfig(oContent: sap.ui.mdc.valuehelp.base.Content): any;
						/**
						 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p><p>Content of the container. This aggregation holds the actual controls enabling the user to select items or create conditions (for example, tables or condition panels).</p>
						 * @returns sap.ui.mdc.valuehelp.base.Content[] 
						 */
						getContent(): any;
						/**
						 * <p>Returns control connected to value help.</p>
						 * @returns sap.ui.core.Control <p>connected control</p>
						 */
						protected getControl(): sap.ui.core.Control;
						/**
						 * <p>Determines the item (key and description) for a given value.</p><p>The value help checks if there is an item with a key or description that fits this value.</p><p><b>Note:</b> This function must only be called by the control the <code>ValuedHelp</code> element belongs to, not by the application.</p>
						 * @param {any} oConfig <p>Configuration</p>
						 * @returns any <p>Promise returning object containing description, key and payload.</p>
						 */
						getItemForValue(oConfig: any): any;
						/**
						 * <p>Returns the maximum allowed number of conditions, -1 if no limit is set.</p>
						 * @returns number <p>maximum allowed number of conditions</p>
						 */
						protected getMaxConditions(): number;
						/**
						 * <p>Returns the <code>Promise</code> for content creation.</p>
						 * @returns Promise<any> <p><code>Promise</code> for delegate content</p>
						 */
						protected getRetrieveDelegateContentPromise(): Promise<any>;
						/**
						 * <p>Returns the currently used content.</p>
						 * @returns sap.ui.mdc.valuehelp.base.Content <p>currently used content</p>
						 */
						protected getSelectedContent(): sap.ui.mdc.valuehelp.base.Content;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getTitle">title</a>.</p><p>Title text that appears in the dialog or tab header.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>title</code></p>
						 */
						getTitle(): string;
						/**
						 * <p>Returns the <code>UIArea</code> of the content.</p>
						 * @returns sap.ui.core.UIArea | null <p>The UI area of the content or <code>null</code></p>
						 */
						protected getUIAreaForContent(): sap.ui.core.UIArea | null;
						/**
						 * <p>If the container is used for type-ahead it might be wanted that the same content should also be shown as valuehelp. If not, the field should not show a valuehelp icon.</p>
						 * @returns boolean <p><code>true</code> if the typeahead content can be used as value help</p>
						 */
						getUseAsValueHelp(): boolean;
						/**
						 * <p>Handles the <code>cancelled</code> event of the content.</p><p>Here the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#events/cancel">cancel</a> event needs to be fired.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleCanceled(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>close</code> event of the container control or element.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleClose(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>closed</code> event of the container control or element.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleClosed(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>confirmed</code> event of the content.</p><p>Here the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#events/confirm">confirm</a> event needs to be fired.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleConfirmed(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>navigated</code> event of the content.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleNavigated(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>opened</code> event of the container control or element.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleOpened(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>requestSwitchToDialog</code> event of the content.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleRequestSwitchToDialog(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>select</code> event of the content.</p><p>Here the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#events/select">select</a> event needs to be fired.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleSelect(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>typeaheadSuggested</code> event of the content.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleTypeaheadSuggested(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Handles the <code>visualFocusSet</code> event of the content.</p>
						 * @param {sap.ui.base.Event} oEvent <p>event</p>
						 */
						protected handleVisualFocusSet(oEvent: sap.ui.base.Event): void;
						/**
						 * <p>Checks for the provided <code>sap.ui.mdc.valuehelp.base.Content</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>The content whose index is looked for</p>
						 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
						 */
						indexOfContent(oContent: sap.ui.mdc.valuehelp.base.Content): number;
						/**
						 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>The content to insert; if empty, nothing is inserted</p>
						 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						insertContent(oContent: sap.ui.mdc.valuehelp.base.Content, iIndex: number): this;
						/**
						 * <p>Returns if the value help is used for single selection.</p>
						 * @returns boolean <p><code>true</code> id single selection</p>
						 */
						protected isSingleSelect(): boolean;
						/**
						 * <p>Defines if the typeahead can be used for input validation.</p>
						 * @returns boolean <p>True if the typeahead container can be used for input validation</p>
						 */
						isValidationSupported(): boolean;
						/**
						 * <p>Navigates the typeaheads values (optional)</p><p>As this could be asyncronous as data might be loaded a promise is returned.</p>
						 * @param {number} iStep <p>Number of steps for navigation (e.g. 1 means next item, -1 means previous item)</p>
						 * @returns any <p>Promise fulfilled after navigation is evecuted</p>
						 */
						navigate(iStep: number): any;
						/**
						 * <p>Triggers navigation in the content of the container.</p>
						 * @param {number} iStep <p>Number of steps for navigation (e.g. 1 means next item, -1 means previous item)</p>
						 */
						protected navigateInContent(iStep: number): void;
						/**
						 * <p>Observes property and aggregation changes.</p>
						 * @param {any} oChanges <p>Change</p>
						 */
						protected observeChanges(oChanges: any): void;
						/**
						 * <p>Opens the container</p>
						 * @param {Promise<any>} oValueHelpContentPromise <p>Promise for content request</p>
						 * @param {boolean} bTypeahead <p>Flag indicating whether the container is opened as type-ahead or dialog-like help</p>
						 * @returns Promise<any> <p>This promise resolves after the container completely opened.</p>
						 */
						open(oValueHelpContentPromise: Promise<any>, bTypeahead: boolean): Promise<any>;
						/**
						 * <p>Opens the container control or element.</p>
						 * @param {sap.ui.core.Element} oContainer <p>container</p>
						 * @param {boolean} bTypeahead <p>if set, container is opened for typeahead</p>
						 */
						protected openContainer(oContainer: sap.ui.core.Element, bTypeahead: boolean): void;
						/**
						 * <p>Places the content into the container control or element.</p>
						 * @param {sap.ui.core.Element} oContainer <p>container</p>
						 * @returns sap.ui.core.Element <p>container</p>
						 */
						protected placeContent(oContainer: sap.ui.core.Element): sap.ui.core.Element;
						/**
						 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
						 * @returns sap.ui.mdc.valuehelp.base.Content[] <p>An array of the removed elements (might be empty)</p>
						 */
						removeAllContent(): any;
						/**
						 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getContent">content</a>.</p>
						 * @param {number | string | sap.ui.mdc.valuehelp.base.Content} vContent <p>The content to remove or its index or id</p>
						 * @returns sap.ui.mdc.valuehelp.base.Content | null <p>The removed content or <code>null</code></p>
						 */
						removeContent(vContent: number | string | sap.ui.mdc.valuehelp.base.Content): sap.ui.mdc.valuehelp.base.Content | null;
						/**
						 * <p>The focus visualization of the field help needs to be removed as the user starts typing into the source control.</p>
						 */
						removeVisualFocus(): void;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container#methods/getTitle">title</a>.</p><p>Title text that appears in the dialog or tab header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sTitle <p>New value for property <code>title</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setTitle(sTitle?: string): this;
						/**
						 * <p>Unbinds the content from the container.</p>
						 * @param {sap.ui.mdc.valuehelp.base.Content} oContent <p>content</p>
						 */
						protected unbindContentFromContainer(oContent: sap.ui.mdc.valuehelp.base.Content): void;
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element.</p>
					 */
					export abstract class Content extends sap.ui.core.Element {
						/**
						 * <p>Constructor for a new <code>Content</code>.</p><p>This is the basis for various types of value help content. It cannot be used directly.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Adds some ariaLabelledBy into the association <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
						 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;
						/**
						 * <p>Provides access to the delegate initialization <code>Promise</code> of the value help.</p>
						 * @returns Promise<any> <p><code>Promise</code> reflecting the delegate initialization</p>
						 */
						protected awaitValueHelpDelegate(): Promise<any>;
						/**
						 * <p>Creates a condition based on the used operator.</p>
						 * @param {any} vValue <p>Value of the condition. For item conditions, this must be the key.</p>
						 * @param {string} sDescription <p>Description of the operator</p>
						 * @param {any} oPayload <p>Payload</p>
						 * @returns sap.ui.mdc.condition.ConditionObject <p>The new condition object with the maintained operator along with <code>sKey</code> and <code>sDescription</code> as <code>aValues</code></p>
						 */
						protected createCondition(vValue: any, sDescription?: string, oPayload?: any): sap.ui.mdc.condition.ConditionObject;
						/**
						 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
						 * @returns sap.ui.core.ID[] 
						 */
						getAriaLabelledBy(): any;
						/**
						 * <p>Loads additional dependencies, creates and returns displayed content.</p>
						 * @returns any <p>Promise resolving in displayed content</p>
						 */
						getContent(): any;
						/**
						 * <p>Returns control connected to value help.</p>
						 * @returns sap.ui.core.Control <p>Connected control</p>
						 */
						protected getControl(): sap.ui.core.Control;
						/**
						 * <p>Returns number of relevant conditions for this content</p>
						 * @param {any} aConditions <p>Array of conditions</p>
						 * @returns number <p>Number of relevant conditions</p>
						 */
						getCount(aConditions: any): number;
						/**
						 * <p>Determines the item (key and description) for a given value.</p><p>The content checks if there is an item with a key or description that fits this value.</p><p><b>Note:</b> This function must only be called by the <code>Container</code> element.</p>
						 * @param {any} oConfig <p>Configuration</p>
						 * @returns any <p>Promise returning object containing description, key and payload.</p>
						 */
						getItemForValue(oConfig: any): any;
						/**
						 * <p>Returns the maximum allowed number of conditions, -1 if no limit is set.</p>
						 * @returns number <p>maximum allowed number of conditions</p>
						 */
						protected getMaxConditions(): number;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getShortTitle">shortTitle</a>.</p><p>Title text that appears in the dialog header.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>shortTitle</code></p>
						 */
						getShortTitle(): string;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getTitle">title</a>.</p><p>Title text that appears in the tab header.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>title</code></p>
						 */
						getTitle(): string;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getTokenizerTitle">tokenizerTitle</a>.</p><p>Title text that appears in the dialog tokenizer panel if only one content exists.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>tokenizerTitle</code></p>
						 */
						getTokenizerTitle(): string;
						/**
						 * <p>If the container is used for typeahead it might be wanted that the same content should also be shown as valuehelp. If not, the field should not show a valuehelp icon.</p>
						 * @returns boolean <p><code>true</code> if the typeahead content can be used as value help</p>
						 */
						getUseAsValueHelp(): boolean;
						/**
						 * <p>Returns the used <code>ValueHelpDelegate</code>.</p>
						 * @returns any <p><code>Delegate</code> module</p>
						 */
						protected getValueHelpDelegate(): any;
						/**
						 * <p>Determines the <code>ValueHelp</code> instance.</p>
						 * @returns sap.ui.mdc.ValueHelp <p>The <code>ValueHelp</code> instance</p>
						 */
						protected getValueHelpInstance(): sap.ui.mdc.ValueHelp;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getVisible">visible</a>.</p><p>Hide content temporary.</p><p>Default value is <code>true</code>.</p>
						 * @returns boolean <p>Value of property <code>visible</code></p>
						 */
						getVisible(): boolean;
						/**
						 * <p>Called if the <code>conditions</code> property changed.</p>
						 * @param {any} oChanges <p>Change</p>
						 */
						protected handleConditionsUpdate(oChanges: any): void;
						/**
						 * <p>Called if the <code>filterValue</code> property changed.</p>
						 * @param {any} oChanges <p>Change</p>
						 */
						protected handleFilterValueUpdate(oChanges: any): void;
						/**
						 * <p>Checks if the parent container is open.</p>
						 * @returns boolean <p><code>true</code> if open</p>
						 */
						protected isContainerOpen(): boolean;
						/**
						 * <p>Checks if the parent container is opening.</p>
						 * @returns boolean <p><code>true</code> if opening</p>
						 */
						protected isContainerOpening(): boolean;
						/**
						 * <p>Returns info if the given content is in multi select mode</p>
						 * @returns boolean <p><code>true</code> if multi-selection is active.</p>
						 */
						isMultiSelect(): boolean;
						/**
						 * <p>Returns if the value help is used for single selection.</p>
						 * @returns boolean <p><code>true</code> if single selection</p>
						 */
						protected isSingleSelect(): boolean;
						/**
						 * <p>Determines if the container of the content is used as <code>typeAhead</code> inside the value help.</p><p><b>Note:</b> This function is used by the content and must not be used from outside.</p>
						 * @returns boolean <p><code>true</code> if used as <code>typeahead</code></p>
						 */
						protected isTypeahead(): boolean;
						/**
						 * <p>Defines if the typeahead can be used for input validation.</p>
						 * @returns boolean <p>True if the typeahead container can be used for input validation</p>
						 */
						isValidationSupported(): boolean;
						/**
						 * <p>Determines if delegate of the value help has been initialized.</p>
						 * @returns boolean <p><code>true</code> if delegate has been initialized</p>
						 */
						protected isValueHelpDelegateInitialized(): boolean;
						/**
						 * <p>Navigates the typeaheads values (optional)</p>
						 * @param {number} iStep <p>Number of steps for navigation (e.g. 1 means next item, -1 means previous item)</p>
						 */
						navigate(iStep: number): void;
						/**
						 * <p>Observes property and aggregation changes.</p>
						 * @param {any} oChanges <p>Change</p>
						 */
						protected observeChanges(oChanges: any): void;
						/**
						 * <p>Called if <code>ValueHelp</code> connection to a control changed.</p>
						 */
						protected onConnectionChange(): void;
						/**
						 * <p>Performs logic needed if the container closes.</p>
						 */
						protected onContainerClose(): void;
						/**
						 * <p>Performs logic needed if the container opens.</p>
						 */
						protected onContainerOpen(): void;
						/**
						 * <p>Determines if the the content needs to provide a scrolling mechanism like a <a target="_self" href="api/sap.m.ScrollContainer">ScrollContainer</a>.</p><p><b>Note:</b> This function is used by the content and must not be used from outside.</p>
						 * @returns boolean <p><code>true</code> if a scrolling mechanism is needed</p>
						 */
						protected provideScrolling(): boolean;
						/**
						 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
						 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
						 */
						removeAllAriaLabelledBy(): any;
						/**
						 * <p>Removes an ariaLabelledBy from the association named <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
						 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
						 * @returns sap.ui.core.ID | null <p>The removed ariaLabelledBy or <code>null</code></p>
						 */
						removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
						/**
						 * <p>The focus visualization of the field help needs to be removed as the user starts typing into the source control.</p>
						 */
						removeVisualFocus(): void;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getShortTitle">shortTitle</a>.</p><p>Title text that appears in the dialog header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sShortTitle <p>New value for property <code>shortTitle</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setShortTitle(sShortTitle?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getTitle">title</a>.</p><p>Title text that appears in the tab header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sTitle <p>New value for property <code>title</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setTitle(sTitle?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getTokenizerTitle">tokenizerTitle</a>.</p><p>Title text that appears in the dialog tokenizer panel if only one content exists.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sTokenizerTitle <p>New value for property <code>tokenizerTitle</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setTokenizerTitle(sTokenizerTitle?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content#methods/getVisible">visible</a>.</p><p>Hide content temporary.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
						 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setVisible(bVisible?: boolean): this;
					}
					/**
					 * <p>A <code>DefineConditionPanel</code> control is used inside the <code>ValueHelp</code> content to enter different types of conditions.</p>
					 */
					export abstract class DefineConditionPanel extends sap.ui.core.Control {
						/**
						 * <p>Constructor for a new <code>DefineConditionPanel</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
					}
					/**
					 * <p>Content for the <code>sap.ui.mdc.valuehelp.content.Dialog</code> element.</p>
					 */
					export class DialogTab extends sap.ui.core.Control {
						/**
						 * <p>Constructor for a new <code>DialogTab</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element.</p>
					 */
					export abstract class FilterableListContent extends sap.ui.mdc.valuehelp.base.ListContent {
						/**
						 * <p>Constructor for a new <code>FilterableListContent</code>.</p><p>This is the basis for various types of value help content with filter functionality. It cannot be used directly.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Applies the filter to the content control.</p>
						 */
						protected applyFilters(): void;
						/**
						 * <p>Creates a payload for a value.</p>
						 * @param {any} aValues <p>Values (key, description)</p>
						 * @param {any} vContext <p>context</p>
						 * @returns any <p>payload</p>
						 */
						protected createConditionPayload(aValues: any, vContext: any): any;
						/**
						 * <p>Destroys the filterBar in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getFilterBar">filterBar</a>.</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyFilterBar(): this;
						/**
						 * <p>Gets the currently used <code>FilterBar</code> control.</p>
						 * @returns sap.ui.mdc.valuehelp.FilterBar <p>FilterBar</p>
						 */
						protected getActiveFilterBar(): sap.ui.mdc.valuehelp.FilterBar;
						/**
						 * <p>Gets current descriptionPath of the content. <br><b>Note:</b> Every listcontent must implement this method.</p>
						 * @returns string <p>Content description path</p>
						 */
						getDescriptionPath(): string;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getDescriptionPath">descriptionPath</a>.</p><p>The path of the description field in the content binding. If a table is used as content, this is the binding path of the description of the items.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>descriptionPath</code></p>
						 */
						getDescriptionPath(): string;
						/**
						 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getFilterBar">filterBar</a>.</p><p><a target="_self" href="api/sap.ui.mdc.valuehelp.FilterBar">FilterBar</a> used for filtering.</p>
						 * @returns sap.ui.mdc.valuehelp.FilterBar 
						 */
						getFilterBar(): sap.ui.mdc.valuehelp.FilterBar;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getGroup">group</a>.</p><p>If set, all contents with the same group are arranged together on one tab.</p><p>The label of the groups can be defined on the container via <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog#methods/setGroupConfig">setGroupConfig</a>.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>group</code></p>
						 */
						getGroup(): string;
						/**
						 * <p>Gets current keyPath of the content. <br><b>Note:</b> Every listcontent must implement this method.</p>
						 * @returns string <p>Content key path</p>
						 */
						getKeyPath(): string;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getKeyPath">keyPath</a>.</p><p>The path of the key field in the content binding. If a table is used as content, this is the binding path of the key of the items.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>keyPath</code></p>
						 */
						getKeyPath(): string;
						/**
						 * <p>Gets the <code>BindingInfo</code> of the content.</p>
						 * @returns sap.ui.base.ManagedObject.AggregationBindingInfo <p><code>ListBindingInfo</code></p>
						 */
						protected getListBindingInfo(): sap.ui.base.ManagedObject.AggregationBindingInfo;
						/**
						 * <p>Gets the currently used filter value.</p>
						 * @returns string <p>filter value</p>
						 */
						protected getSearch(): string;
						/**
						 * <p>Gets the conditions that are selectable from list content.</p><p>These are validated conditions as other conditions are shown in the <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions">Conditions</a>.</p>
						 * @returns sap.ui.mdc.condition.ConditionObject[] <p>Conditions</p>
						 */
						protected getSelectableConditions(): any;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getDescriptionPath">descriptionPath</a>.</p><p>The path of the description field in the content binding. If a table is used as content, this is the binding path of the description of the items.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sDescriptionPath <p>New value for property <code>descriptionPath</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setDescriptionPath(sDescriptionPath?: string): this;
						/**
						 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getFilterBar">filterBar</a>.</p>
						 * @param {sap.ui.mdc.valuehelp.FilterBar} oFilterBar <p>The filterBar to set</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setFilterBar(oFilterBar: sap.ui.mdc.valuehelp.FilterBar): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getGroup">group</a>.</p><p>If set, all contents with the same group are arranged together on one tab.</p><p>The label of the groups can be defined on the container via <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog#methods/setGroupConfig">setGroupConfig</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sGroup <p>New value for property <code>group</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setGroup(sGroup?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.FilterableListContent#methods/getKeyPath">keyPath</a>.</p><p>The path of the key field in the content binding. If a table is used as content, this is the binding path of the key of the items.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sKeyPath <p>New value for property <code>keyPath</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setKeyPath(sKeyPath?: string): this;
					}
					/**
					 * <p><p>Interface for valuehelp containers shown on a dialog</p></p>
					 */
					export interface IDialogContainer {
						/**
						 * <p>Closes the container</p>
						 * @param {boolean} bDoNotRestoreFocus <p>If set, closing must not restore the focus on the field</p>
						 */
						close(bDoNotRestoreFocus: boolean): void;
						/**
						 * <p>Opens the container</p>
						 * @param {Promise<any>} oValueHelpContentPromise <p>Promise for content request</p>
						 * @param {boolean} bTypeahead <p>Flag indicating whether the container is opened as type-ahead or dialog-like help</p>
						 * @returns Promise<any> <p>This promise resolves after the container completely opened.</p>
						 */
						open(oValueHelpContentPromise: Promise<any>, bTypeahead: boolean): Promise<any>;
					}
					/**
					 * <p><p>Interface for valuehelp containers / contents supporting dialog functionality</p></p>
					 */
					export interface IDialogContent {
						/**
						 * <p>Loads additional dependencies, creates and returns displayed content.</p>
						 * @returns any <p>Promise resolving in displayed content</p>
						 */
						getContent(): any;
						/**
						 * <p>Returns a title for the given Content</p>
						 * @returns string <p>Content title as string</p>
						 */
						getTitle(): string;
						/**
						 * <p>Returns info if the given content is in multi select mode</p>
						 * @returns boolean <p><code>true</code> if multi-selection is active.</p>
						 */
						isMultiSelect(): boolean;
					}
					/**
					 * <p><p>Interface for valuehelp <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Containers</a> supporting typeahead functionality</p></p>
					 */
					export interface ITypeaheadContainer {
					}
					/**
					 * <p><p>Interface for valuehelp <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Containers</a> / <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Content">Contents</a> supporting typeahead functionality</p></p>
					 */
					export interface ITypeaheadContent {
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element.</p>
					 */
					export abstract class ListContent extends sap.ui.mdc.valuehelp.base.Content {
						/**
						 * <p>Constructor for a new <code>ListContent</code>.</p><p>This is the basis for various types of value help list content. It cannot be used directly.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getCaseSensitive">caseSensitive</a>.</p><p>If this property is set to <code>true</code>, the filtering for user input is always case-sensitive. Otherwise user input is checked case-insensitively. If <code>$search</code> is used, this property has no effect on the <code>$search</code> request.</p><p>If the used back-end service supports a case-insensitive search, set this property to <code>false</code>.</p><p>Default value is <code>false</code>.</p>
						 * @returns boolean <p>Value of property <code>caseSensitive</code></p>
						 */
						getCaseSensitive(): boolean;
						/**
						 * <p>Gets current descriptionPath of the content. <br><b>Note:</b> Every listcontent must implement this method.</p>
						 * @returns string <p>Content description path</p>
						 */
						getDescriptionPath(): string;
						/**
						 * <p>Gets an item for a <code>BindingContext</code>.</p>
						 * @param {sap.ui.model.Context} oBindingContext <p>BindingContext</p>
						 * @param {any} oOptions <p>Options</p>
						 * @returns any <p>Item object containing <code>key</code>, <code>description</code>, and <code>payload</code></p>
						 */
						protected getItemFromContext(oBindingContext: sap.ui.model.Context, oOptions?: any): any;
						/**
						 * <p>Gets current keyPath of the content. <br><b>Note:</b> Every listcontent must implement this method.</p>
						 * @returns string <p>Content key path</p>
						 */
						getKeyPath(): string;
						/**
						 * <p>Gets the <code>ListBinding</code> of the content. <br><b>Note:</b> Every listcontent must implement this method.</p>
						 * @returns sap.ui.model.ListBinding <p><code>ListBinding</code></p>
						 */
						getListBinding(): sap.ui.model.ListBinding;
						/**
						 * <p>If the container is used for typeahead it might be wanted that the same content should also be shown as valuehelp. If not, the field should not show a valuehelp icon.</p>
						 * @returns boolean <p><code>true</code> if the typeahead content can be used as value help</p>
						 */
						getUseAsValueHelp(): boolean;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getUseAsValueHelp">useAsValueHelp</a>.</p><p>If set, the list is opened whenever the value help icon is pressed.</p><p>Default value is <code>true</code>.</p>
						 * @returns boolean <p>Value of property <code>useAsValueHelp</code></p>
						 */
						getUseAsValueHelp(): boolean;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getUseFirstMatch">useFirstMatch</a>.</p><p>If set, <code>getItemForValue</code> returns the first item that matches the text.</p><p>In the default implementation, this is the first item that matches the entered text. Which item is used can be determined by implementing <a target="_self" href="api/module:sap/ui/mdc/ValueHelpDelegate#methods/sap/ui/mdc/ValueHelpDelegate.getFirstMatch">getFirstMatch</a>.</p><p>The matching item is returned in the <code>typeaheadSuggested</code> event and used for the autocomplete feature in the connected field.</p><p>Default value is <code>true</code>.</p>
						 * @returns boolean <p>Value of property <code>useFirstMatch</code></p>
						 */
						getUseFirstMatch(): boolean;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getCaseSensitive">caseSensitive</a>.</p><p>If this property is set to <code>true</code>, the filtering for user input is always case-sensitive. Otherwise user input is checked case-insensitively. If <code>$search</code> is used, this property has no effect on the <code>$search</code> request.</p><p>If the used back-end service supports a case-insensitive search, set this property to <code>false</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
						 * @param {boolean} bCaseSensitive <p>New value for property <code>caseSensitive</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setCaseSensitive(bCaseSensitive?: boolean): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getUseAsValueHelp">useAsValueHelp</a>.</p><p>If set, the list is opened whenever the value help icon is pressed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
						 * @param {boolean} bUseAsValueHelp <p>New value for property <code>useAsValueHelp</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setUseAsValueHelp(bUseAsValueHelp?: boolean): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.base.ListContent#methods/getUseFirstMatch">useFirstMatch</a>.</p><p>If set, <code>getItemForValue</code> returns the first item that matches the text.</p><p>In the default implementation, this is the first item that matches the entered text. Which item is used can be determined by implementing <a target="_self" href="api/module:sap/ui/mdc/ValueHelpDelegate#methods/sap/ui/mdc/ValueHelpDelegate.getFirstMatch">getFirstMatch</a>.</p><p>The matching item is returned in the <code>typeaheadSuggested</code> event and used for the autocomplete feature in the connected field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
						 * @param {boolean} bUseFirstMatch <p>New value for property <code>useFirstMatch</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setUseFirstMatch(bUseFirstMatch?: boolean): this;
					}
					/**
					 * <p><p>Configuration object type for normalized definition of a <code>ValueHelpItem</code>.</p></p>
					 */
					export interface ValueHelpItem {
						/**
						 * <p>Key</p>
						 */
						key: any;
						/**
						 * <p>Description</p>
						 */
						description?: any;
						/**
						 * <p>Payload of the condition. Set by application. Data needs to be stringified. (as stored and loaded in variants)</p>
						 */
						payload?: any;
					}
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace valuehelp {
				/**
				 * <p><p>Content modules that are used in <a target="_self" href="api/sap.ui.mdc.valuehelp.Popover">Popover</a> or <a target="_self" href="api/sap.ui.mdc.valuehelp.Dialog">Dialog</a></p><p>These modules must not be used stand-alone.</p></p>
				 */
				namespace content {
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element to provide a value help for boolean fields.</p>
					 */
					export class Bool extends sap.ui.mdc.valuehelp.content.FixedList {
						/**
						 * <p>Constructor for a new <code>Bool</code> content.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#constructor">sap.ui.mdc.valuehelp.content.FixedList</a> can be used.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getEmptyText">emptyText</a>.</p><p>If set, an item to clear the selection is added.</p><p>This item is only available if the connected field can be cleared.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sEmptyText <p>New value for property <code>emptyText</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setEmptyText(sEmptyText?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getRestrictedToFixedValues">restrictedToFixedValues</a>.</p><p>If set, the connected field must not allow other values than the items of the <code>FixedList</code>. Free text must be avoided.</p><p>By default, if set, the list opens if the user clicks into the connected field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
						 * @param {boolean} bRestrictedToFixedValues <p>New value for property <code>restrictedToFixedValues</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setRestrictedToFixedValues(bRestrictedToFixedValues?: boolean): this;
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element showing a condition panel.</p>
					 */
					export class Conditions extends sap.ui.mdc.valuehelp.base.Content {
						/**
						 * <p>Constructor for a new <code>Conditions</code> content.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions#methods/getLabel">label</a>.</p><p>Label shown on condition panel.</p>
						 * @returns string <p>Value of property <code>label</code></p>
						 */
						getLabel(): string;
						/**
						 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions#methods/getValueHelp">valueHelp</a>, or <code>null</code>.</p>
						 * @returns sap.ui.core.ID | null 
						 */
						getValueHelp(): sap.ui.core.ID | null;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions#methods/getLabel">label</a>.</p><p>Label shown on condition panel.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
						 * @param {string} sLabel <p>New value for property <code>label</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setLabel(sLabel: string): this;
						/**
						 * <p>Sets the associated <a target="_self" href="api/sap.ui.mdc.valuehelp.content.Conditions#methods/getValueHelp">valueHelp</a>.</p>
						 * @param {sap.ui.core.ID | sap.ui.mdc.ValueHelp} oValueHelp <p>ID of an element which becomes the new target of this valueHelp association; alternatively, an element instance may be given</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setValueHelp(oValueHelp: sap.ui.core.ID | sap.ui.mdc.ValueHelp): this;
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element showing a list with fixed values.</p>
					 */
					export class FixedList extends sap.ui.mdc.valuehelp.base.ListContent {
						/**
						 * <p>Constructor for a new <code>FixedList</code> content.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p>
						 * @param {sap.ui.mdc.valuehelp.content.FixedListItem} oItem <p>The item to add; if empty, nothing is inserted</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						addItem(oItem: sap.ui.mdc.valuehelp.content.FixedListItem): this;
						/**
						 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyItems(): this;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getEmptyText">emptyText</a>.</p><p>If set, an item to clear the selection is added.</p><p>This item is only available if the connected field can be cleared.</p><p>Default value is <code>empty string</code>.</p>
						 * @returns string <p>Value of property <code>emptyText</code></p>
						 */
						getEmptyText(): string;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getFilterList">filterList</a>.</p><p>If set, the items of the list are filtered based on <code>filterValue</code>.</p><p>If a type-ahead behavior for the connected field is wanted, this property must be set to <code>true</code>. For small lists, all values are meant to be shown, independent of the typing in the connected field. In this case this property must be set to <code>false</code>.</p><p>By default, if not set, the list opens if the user clicks into the connected field.</p><p><b>Note: </b> if <code>restrictedToFixedValues</code> is set, filtering should be disabled.</p><p>Default value is <code>true</code>.</p>
						 * @returns boolean <p>Value of property <code>filterList</code></p>
						 */
						getFilterList(): boolean;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getGroupable">groupable</a>.</p><p>If set, the items of the list can be grouped</p><p>Default value is <code>false</code>.</p>
						 * @returns boolean <p>Value of property <code>groupable</code></p>
						 */
						getGroupable(): boolean;
						/**
						 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p><p>Items of the value help.</p><p>The <code>key</code> of the items is not shown in the list, but is used as a value of the connected field.</p><p>If the <code>additionalText</code> for all the items is not used, the column will not be displayed.</p><p><b>Note:</b> Icons are currently not supported.</p>
						 * @returns sap.ui.mdc.valuehelp.content.FixedListItem[] 
						 */
						getItems(): any;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getRestrictedToFixedValues">restrictedToFixedValues</a>.</p><p>If set, the connected field must not allow other values than the items of the <code>FixedList</code>. Free text must be avoided.</p><p>By default, if set, the list opens if the user clicks into the connected field.</p><p>Default value is <code>false</code>.</p>
						 * @returns boolean <p>Value of property <code>restrictedToFixedValues</code></p>
						 */
						getRestrictedToFixedValues(): boolean;
						/**
						 * <p>Checks for the provided <code>sap.ui.mdc.valuehelp.content.FixedListItem</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
						 * @param {sap.ui.mdc.valuehelp.content.FixedListItem} oItem <p>The item whose index is looked for</p>
						 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
						 */
						indexOfItem(oItem: sap.ui.mdc.valuehelp.content.FixedListItem): number;
						/**
						 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p>
						 * @param {sap.ui.mdc.valuehelp.content.FixedListItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
						 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						insertItem(oItem: sap.ui.mdc.valuehelp.content.FixedListItem, iIndex: number): this;
						/**
						 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
						 * @returns sap.ui.mdc.valuehelp.content.FixedListItem[] <p>An array of the removed elements (might be empty)</p>
						 */
						removeAllItems(): any;
						/**
						 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getItems">items</a>.</p>
						 * @param {number | string | sap.ui.mdc.valuehelp.content.FixedListItem} vItem <p>The item to remove or its index or id</p>
						 * @returns sap.ui.mdc.valuehelp.content.FixedListItem | null <p>The removed item or <code>null</code></p>
						 */
						removeItem(vItem: number | string | sap.ui.mdc.valuehelp.content.FixedListItem): sap.ui.mdc.valuehelp.content.FixedListItem | null;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getEmptyText">emptyText</a>.</p><p>If set, an item to clear the selection is added.</p><p>This item is only available if the connected field can be cleared.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
						 * @param {string} sEmptyText <p>New value for property <code>emptyText</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setEmptyText(sEmptyText?: string): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getFilterList">filterList</a>.</p><p>If set, the items of the list are filtered based on <code>filterValue</code>.</p><p>If a type-ahead behavior for the connected field is wanted, this property must be set to <code>true</code>. For small lists, all values are meant to be shown, independent of the typing in the connected field. In this case this property must be set to <code>false</code>.</p><p>By default, if not set, the list opens if the user clicks into the connected field.</p><p><b>Note: </b> if <code>restrictedToFixedValues</code> is set, filtering should be disabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
						 * @param {boolean} bFilterList <p>New value for property <code>filterList</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setFilterList(bFilterList?: boolean): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getGroupable">groupable</a>.</p><p>If set, the items of the list can be grouped</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
						 * @param {boolean} bGroupable <p>New value for property <code>groupable</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setGroupable(bGroupable?: boolean): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList#methods/getRestrictedToFixedValues">restrictedToFixedValues</a>.</p><p>If set, the connected field must not allow other values than the items of the <code>FixedList</code>. Free text must be avoided.</p><p>By default, if set, the list opens if the user clicks into the connected field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
						 * @param {boolean} bRestrictedToFixedValues <p>New value for property <code>restrictedToFixedValues</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setRestrictedToFixedValues(bRestrictedToFixedValues?: boolean): this;
					}
					/**
					 * <p>An item that is used in the <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedList">FixedList</a>.</p>
					 */
					export class FixedListItem extends sap.ui.core.ListItem {
						/**
						 * <p>Constructor for a new FixedListItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
						 * @param {any} mSettings <p>initial settings for the new control</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedListItem#methods/getGroupKey">groupKey</a>.</p><p>Key of the group for what the items are grouped</p>
						 * @returns any <p>Value of property <code>groupKey</code></p>
						 */
						getGroupKey(): any;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedListItem#methods/getGroupText">groupText</a>.</p><p>Text of the group for what the items are grouped</p>
						 * @returns string <p>Value of property <code>groupText</code></p>
						 */
						getGroupText(): string;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedListItem#methods/getGroupKey">groupKey</a>.</p><p>Key of the group for what the items are grouped</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
						 * @param {any} oGroupKey <p>New value for property <code>groupKey</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setGroupKey(oGroupKey?: any): this;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.FixedListItem#methods/getGroupText">groupText</a>.</p><p>Text of the group for what the items are grouped</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
						 * @param {string} sGroupText <p>New value for property <code>groupText</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setGroupText(sGroupText?: string): this;
					}
					/**
					 * <p><p>Object to label groups in the value help dialog.</p></p>
					 */
					export interface GroupLabel {
						/**
						 * <p>Label with counter. The placeholder for counter needs to be defined with <code>{0}</code></p>
						 */
						label: any;
						/**
						 * <p>Label without counter</p>
						 */
						nnLabel: any;
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element using a <a target="_self" href="api/sap.ui.mdc.Table">sap.ui.mdc.Table</a>.</p>
					 */
					export class MDCTable extends sap.ui.mdc.valuehelp.base.FilterableListContent {
						/**
						 * <p>Constructor for a new <code>MDCTable</code> content.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Destroys the table in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MDCTable#methods/getTable">table</a>.</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyTable(): this;
						/**
						 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MDCTable#methods/getForceBind">forceBind</a>.</p><p>This property will lead to a rebind on newly inserted tables after initial filters are set, immediately before the table is shown for the first time.</p><p><b>Note:</b> This only takes effect if autoBindOnInit is disabled on the <code>Table</code></p><p>Default value is <code>false</code>.</p>
						 * @returns boolean <p>Value of property <code>forceBind</code></p>
						 */
						getForceBind(): boolean;
						/**
						 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MDCTable#methods/getTable">table</a>.</p><p>Table to be used in value help</p><p><b>Note:</b> Set the right selection mode (multiple selection or single selection) as it cannot be determined automatically for every case. (Maybe for multi-value <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls only single selection from table might be wanted.)</p>
						 * @returns sap.ui.mdc.Table 
						 */
						getTable(): sap.ui.mdc.Table;
						/**
						 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MDCTable#methods/getForceBind">forceBind</a>.</p><p>This property will lead to a rebind on newly inserted tables after initial filters are set, immediately before the table is shown for the first time.</p><p><b>Note:</b> This only takes effect if autoBindOnInit is disabled on the <code>Table</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
						 * @param {boolean} bForceBind <p>New value for property <code>forceBind</code></p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setForceBind(bForceBind?: boolean): this;
						/**
						 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MDCTable#methods/getTable">table</a>.</p>
						 * @param {sap.ui.mdc.Table} oTable <p>The table to set</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setTable(oTable: sap.ui.mdc.Table): this;
					}
					/**
					 * <p>Content for the <a target="_self" href="api/sap.ui.mdc.valuehelp.base.Container">Container</a> element using a <a target="_self" href="api/sap.m.Table">sap.m.Table</a>.</p>
					 */
					export class MTable extends sap.ui.mdc.valuehelp.base.FilterableListContent {
						/**
						 * <p>Constructor for a new <code>MTable</code> content.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
						 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
						 * @param {any} mSettings <p>Initial settings for the new element</p>
						 */
						constructor(sId?: string, mSettings?: any);
						/**
						 * <p>Destroys the table in the aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MTable#methods/getTable">table</a>.</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						destroyTable(): this;
						/**
						 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MTable#methods/getTable">table</a>.</p><p>Table that is used in the value help.</p><p><b>Note:</b> Set the right selection mode (multiple selection or single selection) as it cannot be determined automatically for every case. (For type-ahead and also for multi-value <a target="_self" href="api/sap.ui.mdc.FilterField">FilterField</a> controls, only single selection from the table might be wanted.)</p><p><b>Note:</b> In phone mode, the popover or dialog might be rendered differently than in desktop mode. So here the configuration for column sizes or table sizes might be different. Please configure sizes depending on the used device.</p>
						 * @returns sap.m.Table 
						 */
						getTable(): sap.m.Table;
						/**
						 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.valuehelp.content.MTable#methods/getTable">table</a>.</p>
						 * @param {sap.m.Table} oTable <p>The table to set</p>
						 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
						 */
						setTable(oTable: sap.m.Table): this;
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
		namespace mdc {
			/**
			 */
			namespace odata {
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			namespace odata {
				/**
				 */
				namespace v4 {
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace actiontoolbar {
				/**
				 * <p>The action for an <a target="_self" href="api/sap.ui.mdc.ActionToolbar">ActionToolbar</a> control with given layout information that determines where the wrapped control is displayed on the <code>ActionToolbar</code>.</p>
				 */
				export class ActionToolbarAction extends sap.ui.core.Control {
					/**
					 * <p>Constructor for a new ActionToolbarAction.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Destroys the action in the aggregation <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction#methods/getAction">action</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyAction(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction#methods/getAction">action</a>.</p><p>The control that is displayed on the <code>ActionToolbar</code>.</p>
					 * @returns sap.ui.core.Control 
					 */
					getAction(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction#methods/getLayoutInformation">layoutInformation</a>.</p><p>Contains the information where the action is displayed on the <code>ActionToolbar</code>. The <code>layoutInformation</code> has to be of type <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarActionLayoutInformation">sap.ui.mdc.actiontoolbar.ActionToolbarActionLayoutInformation</a>.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @returns any <p>Value of property <code>layoutInformation</code></p>
					 */
					getLayoutInformation(): any;
					/**
					 * <p>Observes changes in <code>Action</code> aggregation.</p>
					 * @param {any} oChanges <p>Changes</p>
					 */
					protected observeChanges(oChanges: any): void;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction#methods/getAction">action</a>.</p>
					 * @param {sap.ui.core.Control} oAction <p>The action to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAction(oAction: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarAction#methods/getLayoutInformation">layoutInformation</a>.</p><p>Contains the information where the action is displayed on the <code>ActionToolbar</code>. The <code>layoutInformation</code> has to be of type <a target="_self" href="api/sap.ui.mdc.actiontoolbar.ActionToolbarActionLayoutInformation">sap.ui.mdc.actiontoolbar.ActionToolbarActionLayoutInformation</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>...see text or source</code>.</p>
					 * @param {any} oLayoutInformation <p>New value for property <code>layoutInformation</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLayoutInformation(oLayoutInformation?: any): this;
				}
				/**
				 */
				export interface ActionToolbarActionLayoutInformation {
					/**
					 * <p>The name of the aggregation where the action is displayed. Currently only <code>end</code> is supported.</p>
					 */
					aggregationName: any;
					/**
					 * <p>The alignment of the action defining if it's displayed before or after the aggregation.</p>
					 */
					alignment: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace geomap {
				/**
				 * <p>The <code>Item</code> element for the geomap/property metadata used within MDC Geomap.</p>
				 */
				export class Item extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>Item</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>initial settings for the new element</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.geomap.Item#methods/getLabel">label</a>.</p><p>Label for the item, either as a string literal or by a pointer, using the binding to some property containing the label.</p>
					 * @returns string <p>Value of property <code>label</code></p>
					 */
					getLabel(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.geomap.Item#methods/getPropertyKey">propertyKey</a>.</p><p>The unique identifier of the geomap item that reflects the name of property in the PropertyInfo.</p>
					 * @returns string <p>Value of property <code>propertyKey</code></p>
					 */
					getPropertyKey(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.geomap.Item#methods/getLabel">label</a>.</p><p>Label for the item, either as a string literal or by a pointer, using the binding to some property containing the label.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sLabel <p>New value for property <code>label</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLabel(sLabel: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.geomap.Item#methods/getPropertyKey">propertyKey</a>.</p><p>The unique identifier of the geomap item that reflects the name of property in the PropertyInfo.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sPropertyKey <p>New value for property <code>propertyKey</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPropertyKey(sPropertyKey: string): this;
				}
				/**
				 * <p><p>An object literal describing a data property in the context of a <a target="_self" href="api/sap.ui.mdc.Geomap">sap.ui.mdc.Geomap</a>.</p><p>When specifying the <code>PropertyInfo</code> objects in the <a target="_self" href="api/sap.ui.mdc.Geomap#methods/getPropertyInfo">propertyInfo</a> property, the following attributes need to be specified: <ul> <li><code>key</code></li> <li><code>label</code></li> <li><code>visible</code></li> <li><code>path</code></li> <li><code>dataType</code></li> <li><code>formatOptions</code></li> <li><code>constraints</code></li> </ul></p></p>
				 */
				export interface PropertyInfo {
					/**
					 * <p>Defines the key that the property is related to</p>
					 */
					key?: any;
					/**
					 * <p>Defines the label of the property associated with the key.</p>
					 */
					label?: any;
					/**
					 * <p>Defines the visibility of the property.</p>
					 */
					visible?: any;
					/**
					 * <p>The path of the property in the data source.</p>
					 */
					path?: any;
					/**
					 * <p>Defines the data type associated to the property.</p>
					 */
					dataType?: any;
					/**
					 * <p>Defines if any format options are applied to the property.</p>
					 */
					formatOptions?: any;
					/**
					 * <p>Defines if any constraints are applied to the property.</p>
					 */
					constraints?: any;
				}
				/**
				 * <p><p>geomap <code>ZoomState</code> type.</p></p>
				 */
				export interface ZoomState {
					/**
					 * <p>Zooming is enabled if set to <code>true</code></p>
					 */
					enabled: any;
					/**
					 * <p>Current zoom level of the geomap in percent (between 0 and 1)</p>
					 */
					currentZoomLevel: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace link {
				/**
				 * <p><p>Object holding the information on which link should be displayed as default on the popover.</p></p>
				 */
				export interface BaseLineObject {
					/**
					 * <p>ID of a base line <a target="_self" href="api/sap.ui.mdc.link.LinkItem">sap.ui.mdc.link.LinkItem</a></p>
					 */
					id: any;
					/**
					 * <p>Visibility of a base line <a target="_self" href="api/sap.ui.mdc.link.LinkItem">sap.ui.mdc.link.LinkItem</a></p>
					 */
					visible: any;
				}
				/**
				 * <p><p>Object holding the information regarding direct link navigation when there is no other link item.</p></p>
				 */
				export interface DirectLinkObject {
					/**
					 * <p>The target of the retrieved direct link</p>
					 */
					target: any;
					/**
					 * <p>The href of the retrieved direct link</p>
					 */
					href: any;
				}
				/**
				 * <p>A <code>LinkItem</code> control is used in the <a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a> control to provide a navigation target.</p>
				 */
				export class LinkItem extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new LinkItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getDescription">description</a>.</p><p>Defines the additional text of the item.</p><p>Default value is <code>undefined</code>.</p>
					 * @returns string <p>Value of property <code>description</code></p>
					 */
					getDescription(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getHref">href</a>.</p><p>Destination link for a navigation operation in external format (used when opening in new tab) using the <code>hrefForExternal</code> method of the CrossApplicationNavigation service.</p>
					 * @returns string <p>Value of property <code>href</code></p>
					 */
					getHref(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item.</p>
					 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
					 */
					getIcon(): sap.ui.core.URI;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getInitiallyVisible">initiallyVisible</a>.</p><p>Determines the initial visibility of the <code>LinkItem</code>. If set to <code>true</code>, the item will appear on the <code>Popover</code> without any personalization.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>initiallyVisible</code></p>
					 */
					getInitiallyVisible(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getInternalHref">internalHref</a>.</p><p>Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used when navigation happens programmatically). Only for internal use</p>
					 * @returns string <p>Value of property <code>internalHref</code></p>
					 */
					protected getInternalHref(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getKey">key</a>.</p><p>Unique key of the <code>LinkItem</code> that is used for personalization.</p><p>Default value is <code>undefined</code>.</p>
					 * @returns string <p>Value of property <code>key</code></p>
					 */
					getKey(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getTarget">target</a>.</p><p>Determines the target of the <code>Link</code> and has to be used as the <code>target</code> of an html anchor. The standard values for the <code>target</code> property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered. This property is only used if the <code>href</code> property is set.</p><p>Default value is <code>"_self"</code>.</p>
					 * @returns string <p>Value of property <code>target</code></p>
					 */
					getTarget(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getText">text</a>.</p><p>Text of the <code>Link</code> that is displayed.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getDescription">description</a>.</p><p>Defines the additional text of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>undefined</code>.</p>
					 * @param {string} sDescription <p>New value for property <code>description</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDescription(sDescription?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getHref">href</a>.</p><p>Destination link for a navigation operation in external format (used when opening in new tab) using the <code>hrefForExternal</code> method of the CrossApplicationNavigation service.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sHref <p>New value for property <code>href</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHref(sHref?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon: sap.ui.core.URI): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getInitiallyVisible">initiallyVisible</a>.</p><p>Determines the initial visibility of the <code>LinkItem</code>. If set to <code>true</code>, the item will appear on the <code>Popover</code> without any personalization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bInitiallyVisible <p>New value for property <code>initiallyVisible</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setInitiallyVisible(bInitiallyVisible?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getInternalHref">internalHref</a>.</p><p>Destination link for a navigation operation in internal format provided by the SAP Fiori launchpad (used when navigation happens programmatically). Only for internal use</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sInternalHref <p>New value for property <code>internalHref</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected setInternalHref(sInternalHref?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getKey">key</a>.</p><p>Unique key of the <code>LinkItem</code> that is used for personalization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>undefined</code>.</p>
					 * @param {string} sKey <p>New value for property <code>key</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setKey(sKey?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getTarget">target</a>.</p><p>Determines the target of the <code>Link</code> and has to be used as the <code>target</code> of an html anchor. The standard values for the <code>target</code> property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered. This property is only used if the <code>href</code> property is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"_self"</code>.</p>
					 * @param {string} sTarget <p>New value for property <code>target</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTarget(sTarget?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.link.LinkItem#methods/getText">text</a>.</p><p>Text of the <code>Link</code> that is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <p><p>Object holding information regarding the behavior of the <a target="_self" href="api/sap.ui.mdc.Link">sap.ui.mdc.Link</a>.</p></p>
				 */
				export interface LinkType {
					/**
					 * <p>Text | DirectLink | Popup (default)</p>
					 */
					type: any;
					/**
					 * <p>Instance of <a target="_self" href="api/sap.ui.mdc.link.LinkItem">sap.ui.mdc.link.LinkItem</a> that is used for direct navigation</p>
					 */
					directLink: any;
				}
				/**
				 * <p><p>Object holding an initial <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a> and an optional <code>Promise</code> resolving into another <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a> that is used during runtime.</p></p>
				 */
				export interface LinkTypeWrapper {
					/**
					 * <p>Initial <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a></p>
					 */
					initialType: any;
					/**
					 * <p>Optional <code>Promise</code> that resolves into the <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a> that overwrites the initial <a target="_self" href="api/sap.ui.mdc.link.LinkType">sap.ui.mdc.link.LinkType</a>.</p>
					 */
					runtimeType: any;
				}
			}
		}
	}
}
declare namespace sap {
	namespace ui {
		namespace mdc {
			/**
			 */
			namespace p13n {
				/**
				 * <p>Utility class for state handling of MDC controls. The <code>StateUtil</code> class is offering a generic way to retrieve states and set a desired state for a given MDC control. The <code>StateUtil</code> class is tightly coupled to the SAPUI5 flexibility integration of MDC controls. To use the APIs of <code>Stateutil</code>, the given MDC control instance needs to fully enable all available <code>p13nMode</code> options. This way, <code>Stateutil</code> can create the required changes and retrieve the relevant state of each control.</p>
				 */
				export class StateUtil {
					/**
					 * <p>Creates and applies the necessary changes for a given control and state. <b>Note:</b>The changes are created in the same order as the objects are passed into the state object attributes. For example, by adding two objects into the <code>items</code> attribute of the <code>oState</code> object, the first entry is created, and the second entry is created on top of the first change. The item state is applied for each provided object in the given order in the array and uses the provided position. If no index or only an invalid index has been provided, the item is added to the array after the last item in the affected control's </code>item</code> aggregation. In addition the following attributes can be used to remove a state:</p><p><ul> <li><code>filtered</code> - Set to <code>false</code> in the <code>filter</code> scope on condition level to remove one specific condition for the given key.</li> <li><code>sorted</code> - Set to <code>false</code> in the <code>sorters</code> scope to remove a sorter/code>.</li> <li><code>grouped</code> - Set to <code>false</code> in the <code>groupLevels</code> scope to remove a grouping.</li> <li><code>visible</code> - Set to <code>false</code> to remove an aggregation item.</li> <li><code>aggregated</code> - Set to <code>false</code> to remove an aggregation.</li> </ul></p><p><b>Note:</b>To improve the performance, you should avoid additional calls of the control’s delegate. To do this, the <code>propertyInfo</code> property of the relevant control can be enriched with the properties used in the provided state.</p>
					 * @param {sap.ui.mdc.Control} oControl <p>The control that is used to create changes and to which changes are made</p>
					 * @param {any} oState <p>The state in which the control is represented</p>
					 * @returns Promise<any> <p><code>Promise</code> that resolves after all changes have been applied</p>
					 */
					static applyExternalState(oControl: sap.ui.mdc.Control, oState: any): Promise<any>;
					/**
					 * <p>Attaches an event handler to the <code>StateUtil</code>. The event handler may be fired every time a user triggers a personalization change for a control instance during runtime.</p>
					 * @param {Function} fnListener <p>fnFunction The handler function to call when the event occurs</p>
					 */
					static attachStateChange(fnListener: Function): void;
					/**
					 * <p>Removes a previously attached state change event handler from the <code>StateUtil</code> class. The passed parameters must match those used for registration with <a target="_self" href="api/StateUtil#methods/attachChange">StateUtil#attachChange</a> beforehand.</p>
					 * @param {Function} fnListener <p>fnFunction The handler function to detach from the event</p>
					 */
					static detachStateChange(fnListener: Function): void;
					/**
					 * <p>Creates a delta between two states.</p>
					 * @param {sap.ui.mdc.Control} oControl <p>The control instance implementing IxState</p>
					 * @param {any} oOldState <p>The prior state</p>
					 * @param {any} oNewState <p>The new state</p>
					 * @returns Promise<any> <p><code>Promise</code> that resolves after the current state has been diffed</p>
					 */
					static diffState(oControl: sap.ui.mdc.Control, oOldState: any, oNewState: any): Promise<any>;
					/**
					 * <p>Retrieves the externalized state for a given control instance. The retrieved state is equivalent to the <code>getCurrentState</code> API for the given control, after all necessary changes have been applied (for example, variant appliance and <code>p13n, StateUtil</code> changes). After the returned <code>Promise</code> has been resolved, the returned state is in sync with the corresponding state object of the MDC control (for example, <code>filterConditions</code> for the <code>FilterBar</code> control).</p>
					 * @param {sap.ui.mdc.Control} oControl <p>The control instance implementing IxState to retrieve the externalized state</p>
					 * @returns Promise<any> <p><code>Promise</code> that resolves after the current state has been retrieved</p>
					 */
					static retrieveExternalState(oControl: sap.ui.mdc.Control): Promise<any>;
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
		namespace mdc {
			/**
			 */
			namespace table {
				/**
				 * <p>Defines the layout data for the <a target="_self" href="api/sap.ui.mdc.Table#methods/getActions">actions</a> and <a target="_self" href="api/sap.ui.mdc.Table#methods/getTableActions">tableActions</a> of the <a target="_self" href="api/sap.ui.mdc.Table">Table</a>.</p>
				 */
				export class ActionLayoutData extends sap.m.OverflowToolbarLayoutData {
					/**
					 * <p>Constructor for a new <code>ActionLayoutData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new layout data, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new layout data</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ActionLayoutData#methods/getPosition">position</a>.</p><p>Defines the position of the action within the group of table actions.</p><p>Default value is <code>EndActions</code>.</p>
					 * @returns sap.ui.mdc.enums.TableActionPosition <p>Value of property <code>position</code></p>
					 */
					getPosition(): sap.ui.mdc.enums.TableActionPosition;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ActionLayoutData#methods/getPosition">position</a>.</p><p>Defines the position of the action within the group of table actions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>EndActions</code>.</p>
					 * @param {sap.ui.mdc.enums.TableActionPosition} sPosition <p>New value for property <code>position</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPosition(sPosition?: sap.ui.mdc.enums.TableActionPosition): this;
				}
				/**
				 * <p>The column for the metadata-driven table with the template, which is shown if the rows have data.</p>
				 */
				export class Column extends sap.ui.core.Control {
					/**
					 * <p>Constructor for a new <code>Column</column>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Destroys the extendedSettings in the aggregation <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getExtendedSettings">extendedSettings</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyExtendedSettings(): this;
					/**
					 * <p>Destroys the template in the aggregation <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getTemplate">template</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyTemplate(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getExtendedSettings">extendedSettings</a>.</p><p>Defines type-specific column settings based on the used <a target="_self" href="api/sap.ui.mdc.table.TableTypeBase">sap.ui.mdc.table.TableTypeBase</a>.</p><p><b>Note:</b> Once <code>sap.ui.mdc.table.ColumnSettings</code> are defined, all properties provided by the <code>ColumnSettings</code> are automatically assigned to the column.</p>
					 * @returns sap.ui.mdc.table.ColumnSettings 
					 */
					getExtendedSettings(): sap.ui.mdc.table.ColumnSettings;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHAlign">hAlign</a>.</p><p>Defines the horizontal alignment of the column content.</p><p>Default value is <code>"Begin"</code>.</p>
					 * @returns sap.ui.core.HorizontalAlign <p>Value of property <code>hAlign</code></p>
					 */
					getHAlign(): sap.ui.core.HorizontalAlign;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHeader">header</a>.</p><p>Defines the column header text.</p>
					 * @returns string <p>Value of property <code>header</code></p>
					 */
					getHeader(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHeaderVisible">headerVisible</a>.</p><p>Defines whether the column header is visible.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>headerVisible</code></p>
					 */
					getHeaderVisible(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of the column. This property only takes effect if the column has a flexible <code>width</code>, for example, a percentage value. The user can resize the column to a smaller width if <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableColumnResize">column resizing</a> is enabled in the table.</p><p><b>Note:</b> If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, the property is used to influence the pop-in behavior: If the accumulated width of all columns is bigger than the width of the table, then the least important column is moved into the pop-in area. For more information, see <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">ResponsiveColumnSettings</a>.</p><p>Default value is <code>8</code>.</p>
					 * @returns number <p>Value of property <code>minWidth</code></p>
					 */
					getMinWidth(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getPropertyKey">propertyKey</a>.</p><p>Defines data property related to the column.</p>
					 * @returns string <p>Value of property <code>propertyKey</code></p>
					 */
					getPropertyKey(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getRequired">required</a>.</p><p>Indicates whether the content of the column is required.</p><p><b>Note:</b> The table only takes care of announcing the state of the column header as defined by the <code>required</code> property. The application needs to take care of the screen reader announcement of the state of the table cells, for example, by setting the <code>required</code> property to <code>true</code> for <code>sap.m.Input</code>.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>required</code></p>
					 */
					getRequired(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getTemplate">template</a>.</p><p>Template for the column.</p>
					 * @returns sap.ui.core.Control 
					 */
					getTemplate(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getWidth">width</a>.</p><p>Defines the width of the column.</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getExtendedSettings">extendedSettings</a>.</p>
					 * @param {sap.ui.mdc.table.ColumnSettings} oExtendedSettings <p>The extendedSettings to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setExtendedSettings(oExtendedSettings: sap.ui.mdc.table.ColumnSettings): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHAlign">hAlign</a>.</p><p>Defines the horizontal alignment of the column content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Begin"</code>.</p>
					 * @param {sap.ui.core.HorizontalAlign} sHAlign <p>New value for property <code>hAlign</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHAlign(sHAlign?: sap.ui.core.HorizontalAlign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHeader">header</a>.</p><p>Defines the column header text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sHeader <p>New value for property <code>header</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeader(sHeader: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getHeaderVisible">headerVisible</a>.</p><p>Defines whether the column header is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bHeaderVisible <p>New value for property <code>headerVisible</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeaderVisible(bHeaderVisible?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of the column. This property only takes effect if the column has a flexible <code>width</code>, for example, a percentage value. The user can resize the column to a smaller width if <a target="_self" href="api/sap.ui.mdc.Table#methods/getEnableColumnResize">column resizing</a> is enabled in the table.</p><p><b>Note:</b> If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, the property is used to influence the pop-in behavior: If the accumulated width of all columns is bigger than the width of the table, then the least important column is moved into the pop-in area. For more information, see <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">ResponsiveColumnSettings</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>8</code>.</p>
					 * @param {number} fMinWidth <p>New value for property <code>minWidth</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMinWidth(fMinWidth?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getPropertyKey">propertyKey</a>.</p><p>Defines data property related to the column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sPropertyKey <p>New value for property <code>propertyKey</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPropertyKey(sPropertyKey: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getRequired">required</a>.</p><p>Indicates whether the content of the column is required.</p><p><b>Note:</b> The table only takes care of announcing the state of the column header as defined by the <code>required</code> property. The application needs to take care of the screen reader announcement of the state of the table cells, for example, by setting the <code>required</code> property to <code>true</code> for <code>sap.m.Input</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bRequired <p>New value for property <code>required</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRequired(bRequired?: boolean): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getTemplate">template</a>.</p>
					 * @param {sap.ui.core.Control} oTemplate <p>The template to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTemplate(oTemplate: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new tooltip for this object.</p><p>The tooltip can only be a simple string. An instance of <a target="_self" href="api/sap.ui.core.TooltipBase">sap.ui.core.TooltipBase</a> is not supported.</p><p>If a new tooltip is set, any previously set tooltip is deactivated.</p>
					 * @param {string} vTooltip <p>New tooltip</p>
					 * @returns this <p>Returns <code>this</code> to allow method chaining</p>
					 */
					setTooltip(vTooltip: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getWidth">width</a>.</p><p>Defines the width of the column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth?: sap.ui.core.CSSSize): this;
				}
				/**
				 * <p>The table type info class for the metadata-driven table.</p>
				 */
				export class ColumnSettings extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>ColumnSettings</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.core.Element#constructor">sap.ui.core.Element</a> can be used.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p><p>An object literal that describes attributes of a complex data property in the context of an <a target="_self" href="api/sap.ui.mdc.Table">sap.ui.mdc.Table</a>. A complex property references other properties in the <code>propertyInfos</code> attribute.</p><p>If a <code>sap.ui.mdc.table.Column</code> points to a complex property via its <code>propertyKey</code> property, the table considers all the referenced properties as visible in the column. All referenced properties are taken into account for certain features, for example, for the column width calculation.</p><p>Some attributes of the referenced properties can be overridden. If, for example, <code>exportSettings</code> are specified for the complex property, the export settings of the referenced properties are ignored. This can be used to provide a different formatting template, for example.</p></p>
				 */
				export interface ComplexPropertyInfo {
					/**
					 * <p>The export settings. Set to <code>null</code> to prevent this property from being exported.</p>
					 */
					exportSettings?: any;
					/**
					 * <p>The clipboard settings. Set to <code>null</code> to prevent this property from being copied to clipboard.</p>
					 */
					clipboardSettings?: any;
					/**
					 * <p><p>Defines the formatting template that supports indexed placeholders for referenced properties within curly brackets, for example, "{0} ({1})".</p></p>
					 */
					template?: any;
					/**
					 * <p>This object contains all relevant attributes for visual adjustments.</p>
					 */
					visualSettings?: any;
					/**
					 * <p><p>Settings for column width calculation. Set to <code>null</code> to disable the automatic column width calculation for this property.</p></p>
					 */
					widthCalculation?: any;
					/**
					 * <p><p>The minimum content width in rem</p></p>
					 */
					minWidth?: any;
					/**
					 * <p><p>The maximum content width in rem</p></p>
					 */
					maxWidth?: any;
					/**
					 * <p><p>The default column content width when type check fails</p></p>
					 */
					defaultWidth?: any;
					/**
					 * <p><p>The additional content width in rem</p></p>
					 */
					gap?: any;
					/**
					 * <p><p>Whether the label is taken into account</p></p>
					 */
					includeLabel?: any;
					/**
					 * <p><p>Whether the label is truncated</p></p>
					 */
					truncateLabel?: any;
					/**
					 * <p><p>Whether the referenced properties are arranged vertically</p></p>
					 */
					verticalArrangement?: any;
					/**
					 * <p><p>A list of invisible referenced property keys</p></p>
					 */
					excludeProperties?: any;
				}
				/**
				 * <p>Row that allows the user to enter data in a row-shaped form if the <a target="_self" href="api/sap.ui.mdc.enums.TableType">TableType</a> is "<code>Table</code>". The form elements are aligned with the columns of the table and are created automatically based on the <a target="_self" href="api/sap.ui.mdc.table.Column#methods/getCreationTemplate">creationTemplate</a> aggregation of the <a target="_self" href="api/sap.ui.mdc.table.Column">sap.ui.mdc.table.Column</a>.</p>
				 */
				export class CreationRow extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>CreationRow</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>Provides the configuration for the drag-and-drop operations of the rows of the table.</p>
				 */
				export class DragDropConfig extends sap.ui.core.dnd.DragDropBase {
					/**
					 * <p>Constructor for a new DragDropConfig.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new DragDropConfig, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new DragDropConfig</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnd">dragEnd</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.DragDropConfig</code> itself.</p><p>This event is fired when the row drag operation is ended, if the <code>draggable</code> property is set to <code>true<code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.DragDropConfig</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDragEnd(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnter">dragEnter</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.DragDropConfig</code> itself.</p><p>This event is fired when a dragged element enters a table row, if the <code>droppable</code> property is set to <code>true<code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.DragDropConfig</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDragEnter(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragOver">dragOver</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.DragDropConfig</code> itself.</p><p>This event is fired when an element is being dragged over a table row, if the <code>droppable</code> property is set to <code>true<code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.DragDropConfig</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDragOver(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragStart">dragStart</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.DragDropConfig</code> itself.</p><p>This event is fired when the user starts dragging a table row, if the <code>draggable</code> property is set to <code>true<code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.DragDropConfig</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDragStart(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/drop">drop</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.DragDropConfig</code> itself.</p><p>This event is fired when an element is dropped on a table row, if the <code>droppable</code> property is set to <code>true<code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.DragDropConfig</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDrop(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnd">dragEnd</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDragEnd(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnter">dragEnter</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDragEnter(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragOver">dragOver</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDragOver(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragStart">dragStart</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDragStart(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/drop">drop</a> event of this <code>sap.ui.mdc.table.DragDropConfig</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDrop(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnd">dragEnd</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireDragEnd(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragEnter">dragEnter</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireDragEnter(mParameters?: any): boolean;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragOver">dragOver</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireDragOver(mParameters?: any): boolean;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/dragStart">dragStart</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireDragStart(mParameters?: any): boolean;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#events/drop">drop</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireDrop(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDraggable">draggable</a>.</p><p>Determines whether the rows of the table are draggable.</p><p><b>Note:</b> Setting this property to <code>true</code> may expose the rows of the table in other <code>DropInfo</code> event parameters. In this case, only the binding context of the row is allowed to be used. Internal controls and their types are subject to change without notice.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>draggable</code></p>
					 */
					getDraggable(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDropEffect">dropEffect</a>.</p><p>Defines the visual drop effect.</p><p>Default value is <code>"Move"</code>.</p>
					 * @returns sap.ui.core.dnd.DropEffect <p>Value of property <code>dropEffect</code></p>
					 */
					getDropEffect(): sap.ui.core.dnd.DropEffect;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDroppable">droppable</a>.</p><p>Determines whether the rows of the table are droppable.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>droppable</code></p>
					 */
					getDroppable(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDropPosition">dropPosition</a>.</p><p>Defines the position for the drop action, visualized by a rectangle.</p><p>Default value is <code>"On"</code>.</p>
					 * @returns sap.ui.core.dnd.DropPosition <p>Value of property <code>dropPosition</code></p>
					 */
					getDropPosition(): sap.ui.core.dnd.DropPosition;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDraggable">draggable</a>.</p><p>Determines whether the rows of the table are draggable.</p><p><b>Note:</b> Setting this property to <code>true</code> may expose the rows of the table in other <code>DropInfo</code> event parameters. In this case, only the binding context of the row is allowed to be used. Internal controls and their types are subject to change without notice.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bDraggable <p>New value for property <code>draggable</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDraggable(bDraggable?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDropEffect">dropEffect</a>.</p><p>Defines the visual drop effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Move"</code>.</p>
					 * @param {sap.ui.core.dnd.DropEffect} sDropEffect <p>New value for property <code>dropEffect</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDropEffect(sDropEffect?: sap.ui.core.dnd.DropEffect): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDroppable">droppable</a>.</p><p>Determines whether the rows of the table are droppable.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bDroppable <p>New value for property <code>droppable</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDroppable(bDroppable?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.DragDropConfig#methods/getDropPosition">dropPosition</a>.</p><p>Defines the position for the drop action, visualized by a rectangle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"On"</code>.</p>
					 * @param {sap.ui.core.dnd.DropPosition} sDropPosition <p>New value for property <code>dropPosition</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDropPosition(sDropPosition?: sap.ui.core.dnd.DropPosition): this;
				}
				namespace DragDropConfig {
				}
				/**
				 * <p>The table type info class for the metadata-driven table.<br></p><p><b>Important Notes for <code><a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setRowActionCount">rowActionCount</a></code>:</b><br></p><p>The <code>rowActionCount</code> property is used to determine the number of row actions that are displayed for each row in the table. The actual number of displayed actions can be limited by the underlying table type: <ul> <li><code>GridTable</code>: Maximum number of three actions including the overflow button. 0 means no actions are visible.</li> </ul></p>
				 */
				export class GridTableType extends sap.ui.mdc.table.TableTypeBase {
					/**
					 * <p>Constructor for a new <code>GridTableType</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Determines whether the number of fixed columns is configurable via the column menu.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>enableColumnFreeze</code></p>
					 */
					getEnableColumnFreeze(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getFixedColumnCount">fixedColumnCount</a>.</p><p>Defines the number of fixed columns.</p><p>Default value is <code>0</code>.</p>
					 * @returns number <p>Value of property <code>fixedColumnCount</code></p>
					 */
					getFixedColumnCount(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getRowCount">rowCount</a>.</p><p>Row count of the inner table. This property specifies the minimum row count if <code>sap.ui.mdc.enums.TableRowCountMode.Auto</code> is used. This property specifies the row count if <code>sap.ui.mdc.enums.TableRowCountMode.Interactive</code> or <code>sap.ui.mdc.enums.TableRowCountMode.Fixed</code> is used.</p><p>Default value is <code>10</code>.</p>
					 * @returns number <p>Value of property <code>rowCount</code></p>
					 */
					getRowCount(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getRowCountMode">rowCountMode</a>.</p><p>Defines how the table handles the row count.</p><p>Default value is <code>Auto</code>.</p>
					 * @returns sap.ui.mdc.enums.TableRowCountMode <p>Value of property <code>rowCountMode</code></p>
					 */
					getRowCountMode(): sap.ui.mdc.enums.TableRowCountMode;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getScrollThreshold">scrollThreshold</a>.</p><p>Number of records to be requested from the model when the user scrolls through the table.</p><p>The property defines how many additional (not yet visible) data records from the back-end system are pre-fetched during scrolling. If the <code>scrollThreshold</code> is lower than the number of visible rows, the number of visible rows is used as the <code>scrollThreshold</code>. If the value is 0, thresholding is disabled.</p><p><b>Note:</b> This property only takes effect if it is set to a positive integer value. Otherwise the <code>threshold</code> property is used.</p><p>Default value is <code>-1</code>.</p>
					 * @returns number <p>Value of property <code>scrollThreshold</code></p>
					 */
					getScrollThreshold(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getSelectionLimit">selectionLimit</a>.</p><p>Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the selection limit is disabled, and the Select All checkbox appears instead of the Deselect All button.</p><p><b>Note:</b> To avoid severe performance problems, the limit should only be set to 0 in the following cases: <ul> <li>With client-side models</li> <li>With server-side models if they are used in client mode</li> <li>If the entity set is small</li> </ul></p><p>In other cases, we recommend to set the limit to at least double the value of the <a target="_self" href="api/sap.ui.mdc.Table#methods/getThreshold">threshold</a> property of the table.</p><p>Default value is <code>200</code>.</p>
					 * @returns number <p>Value of property <code>selectionLimit</code></p>
					 */
					getSelectionLimit(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getShowHeaderSelector">showHeaderSelector</a>.</p><p>Determines whether the header selector is shown.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>showHeaderSelector</code></p>
					 */
					getShowHeaderSelector(): boolean;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Determines whether the number of fixed columns is configurable via the column menu.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bEnableColumnFreeze <p>New value for property <code>enableColumnFreeze</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEnableColumnFreeze(bEnableColumnFreeze?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getFixedColumnCount">fixedColumnCount</a>.</p><p>Defines the number of fixed columns.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
					 * @param {number} iFixedColumnCount <p>New value for property <code>fixedColumnCount</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFixedColumnCount(iFixedColumnCount?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getRowCount">rowCount</a>.</p><p>Row count of the inner table. This property specifies the minimum row count if <code>sap.ui.mdc.enums.TableRowCountMode.Auto</code> is used. This property specifies the row count if <code>sap.ui.mdc.enums.TableRowCountMode.Interactive</code> or <code>sap.ui.mdc.enums.TableRowCountMode.Fixed</code> is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>10</code>.</p>
					 * @param {number} iRowCount <p>New value for property <code>rowCount</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRowCount(iRowCount?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getRowCountMode">rowCountMode</a>.</p><p>Defines how the table handles the row count.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
					 * @param {sap.ui.mdc.enums.TableRowCountMode} sRowCountMode <p>New value for property <code>rowCountMode</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRowCountMode(sRowCountMode?: sap.ui.mdc.enums.TableRowCountMode): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getScrollThreshold">scrollThreshold</a>.</p><p>Number of records to be requested from the model when the user scrolls through the table.</p><p>The property defines how many additional (not yet visible) data records from the back-end system are pre-fetched during scrolling. If the <code>scrollThreshold</code> is lower than the number of visible rows, the number of visible rows is used as the <code>scrollThreshold</code>. If the value is 0, thresholding is disabled.</p><p><b>Note:</b> This property only takes effect if it is set to a positive integer value. Otherwise the <code>threshold</code> property is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
					 * @param {number} iScrollThreshold <p>New value for property <code>scrollThreshold</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setScrollThreshold(iScrollThreshold?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getSelectionLimit">selectionLimit</a>.</p><p>Number of indices which can be selected in a range. Accepts positive integer values. If set to 0, the selection limit is disabled, and the Select All checkbox appears instead of the Deselect All button.</p><p><b>Note:</b> To avoid severe performance problems, the limit should only be set to 0 in the following cases: <ul> <li>With client-side models</li> <li>With server-side models if they are used in client mode</li> <li>If the entity set is small</li> </ul></p><p>In other cases, we recommend to set the limit to at least double the value of the <a target="_self" href="api/sap.ui.mdc.Table#methods/getThreshold">threshold</a> property of the table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>200</code>.</p>
					 * @param {number} iSelectionLimit <p>New value for property <code>selectionLimit</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelectionLimit(iSelectionLimit?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.GridTableType#methods/getShowHeaderSelector">showHeaderSelector</a>.</p><p>Determines whether the header selector is shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bShowHeaderSelector <p>New value for property <code>showHeaderSelector</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowHeaderSelector(bShowHeaderSelector?: boolean): this;
				}
				/**
				 * <p><p>An object literal that describes attributes of a data property in the context of an <a target="_self" href="api/sap.ui.mdc.Table">sap.ui.mdc.Table</a>.</p></p>
				 */
				export interface PropertyInfo {
					/**
					 * <p>Defines whether a property is filterable.</p>
					 */
					filterable?: any;
					/**
					 * <p>Defines whether a property is sortable.</p>
					 */
					sortable?: any;
					/**
					 * <p>Defines whether a property is groupable.</p>
					 */
					groupable?: any;
					/**
					 * <p>Defines whether a property is a key or part of a key in the data.</p>
					 */
					isKey?: any;
					/**
					 * <p>Key of the unit property that is related to this property. A property must not have both a unit and a text.</p>
					 */
					unit?: any;
					/**
					 * <p>Key of the text property that is related to this property in a 1:1 relation. A property must not have both a unit and a text.</p>
					 */
					text?: any;
					/**
					 * <p>The export settings. Set to <code>null</code> to prevent this property from being exported.</p>
					 */
					exportSettings?: any;
					/**
					 * <p>The clipboard settings. Set to <code>null</code> prevent this property from being copied to clipboard.</p>
					 */
					clipboardSettings?: any;
					/**
					 * <p><p>Defines the formatting template that supports indexed placeholders, for example, "{0}".</p></p>
					 */
					template?: any;
					/**
					 * <p>This object contains all relevant properties for visual adjustments.</p>
					 */
					visualSettings?: any;
					/**
					 * <p><p>Settings for column width calculation. Set to <code>null</code> to disable the automatic column width calculation for this property.</p></p>
					 */
					widthCalculation?: any;
					/**
					 * <p><p>The minimum content width in rem</p></p>
					 */
					minWidth?: any;
					/**
					 * <p><p>The maximum content width in rem</p></p>
					 */
					maxWidth?: any;
					/**
					 * <p><p>The default column content width when type check fails</p></p>
					 */
					defaultWidth?: any;
					/**
					 * <p><p>The additional content width in rem</p></p>
					 */
					gap?: any;
					/**
					 * <p><p>Whether the label is taken into account</p></p>
					 */
					includeLabel?: any;
					/**
					 * <p><p>Whether the label is truncated</p></p>
					 */
					truncateLabel?: any;
					/**
					 * <p><p>Whether the referenced properties are arranged vertically</p></p>
					 */
					verticalArrangement?: any;
					/**
					 * <p><p>A list of invisible referenced property keys</p></p>
					 */
					excludeProperties?: any;
				}
				/**
				 * <p>The table type info class for the metadata-driven table.</p>
				 */
				export class ResponsiveColumnSettings extends sap.ui.mdc.table.ColumnSettings {
					/**
					 * <p>Constructor for a new <code>ResponsiveColumnSettings</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">importance</a>.</p><p>Defines the column importance.</p><p>Columns are moved to the pop-in area in the following order: <ul> <li>With importance <code>High</code>: moved last</li> <li>With importance <code>Medium</code> or <code>None</code>: moved second</li> <li>With importance <code>Low</code>: moved first</li> </ul></p><p>Default value is <code>"None"</code>.</p>
					 * @returns sap.ui.core.Priority <p>Value of property <code>importance</code></p>
					 */
					getImportance(): sap.ui.core.Priority;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getMergeFunction">mergeFunction</a>.</p><p>Defines the control serialization function to merge duplicate cells into one cell block. This function is used to compare values of two cells.</p><p><b>Note:</b> Don't set this property for cells for which the content provides a user interaction, such as <code>sap.m.Link</code>.</p>
					 * @returns string <p>Value of property <code>mergeFunction</code></p>
					 */
					getMergeFunction(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">importance</a>.</p><p>Defines the column importance.</p><p>Columns are moved to the pop-in area in the following order: <ul> <li>With importance <code>High</code>: moved last</li> <li>With importance <code>Medium</code> or <code>None</code>: moved second</li> <li>With importance <code>Low</code>: moved first</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
					 * @param {sap.ui.core.Priority} sImportance <p>New value for property <code>importance</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setImportance(sImportance?: sap.ui.core.Priority): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getMergeFunction">mergeFunction</a>.</p><p>Defines the control serialization function to merge duplicate cells into one cell block. This function is used to compare values of two cells.</p><p><b>Note:</b> Don't set this property for cells for which the content provides a user interaction, such as <code>sap.m.Link</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sMergeFunction <p>New value for property <code>mergeFunction</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMergeFunction(sMergeFunction: string): this;
				}
				/**
				 * <p>The table type info class for the metadata-driven table.<br></p><p><b>Important Notes for <code><a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setRowActionCount">rowActionCount</a></code>:</b><br></p><p>The <code>rowActionCount</code> property is used to determine the number of row actions that are displayed for each row in the table. The actual number of displayed actions can be limited by the underlying table type:</p><p><ul> <li><code>ResponsiveTable</code>: Maximum of 2-3 actions depending on configuration (1 navigation action + 2 additional actions)</li> <li><code>rowActionCount</code> = 0: navigation action is always visible if it exists</li> </ul></p>
				 */
				export class ResponsiveTableType extends sap.ui.mdc.table.TableTypeBase {
					/**
					 * <p>Constructor for a new <code>ResponsiveTableType</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getDetailsButtonSetting">detailsButtonSetting</a>.</p><p>Defines which columns are hidden instead of moved into the pop-in area depending on their importance. See <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">sap.ui.mdc.table.ResponsiveColumnSettings#getImportance</a> for more details.</p><p><b>Note:</b> To hide columns based on their importance, it's mandatory to set <code>showDetailsButton</code> to <code>true</code>.<br> If no importance is given, a device-dependent default configuration is used.<br> If this property is changed after the table has been initialized, the new changes take effect only when the Show / Hide Details button is pressed a second time.</p>
					 * @returns sap.ui.core.Priority[] <p>Value of property <code>detailsButtonSetting</code></p>
					 */
					getDetailsButtonSetting(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getGrowingMode">growingMode</a>.</p><p>Specifies the growing mode.</p><p>Default value is <code>Basic</code>.</p>
					 * @returns sap.ui.mdc.enums.TableGrowingMode <p>Value of property <code>growingMode</code></p>
					 */
					getGrowingMode(): sap.ui.mdc.enums.TableGrowingMode;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getPopinDisplay">popinDisplay</a>.</p><p>Defines how the pop-in content is displayed.</p><p>Default value is <code>Inline</code>.</p>
					 * @returns sap.ui.mdc.enums.TablePopinDisplay <p>Value of property <code>popinDisplay</code></p>
					 */
					getPopinDisplay(): sap.ui.mdc.enums.TablePopinDisplay;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getPopinLayout">popinLayout</a>.</p><p>Defines the layout in which the table pop-in rows are rendered.</p><p>Default value is <code>"Block"</code>.</p>
					 * @returns sap.m.PopinLayout <p>Value of property <code>popinLayout</code></p>
					 */
					getPopinLayout(): sap.m.PopinLayout;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getShowDetailsButton">showDetailsButton</a>.</p><p>Specifies whether the Show / Hide Details button is shown.</p><p>If the available screen space gets too narrow, the columns configured with <code>High</code> and <code>Medium</code> importance move to the pop-in area, while the columns with <code>Low</code> importance are hidden.<br> On mobile phones, the columns with <code>Medium</code> importance are also hidden.<br> As soon as the first column is hidden, this button appears in the table toolbar and gives the user the possibility to toggle the visibility of the hidden columns in the pop-in area.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showDetailsButton</code></p>
					 */
					getShowDetailsButton(): boolean;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getDetailsButtonSetting">detailsButtonSetting</a>.</p><p>Defines which columns are hidden instead of moved into the pop-in area depending on their importance. See <a target="_self" href="api/sap.ui.mdc.table.ResponsiveColumnSettings#methods/getImportance">sap.ui.mdc.table.ResponsiveColumnSettings#getImportance</a> for more details.</p><p><b>Note:</b> To hide columns based on their importance, it's mandatory to set <code>showDetailsButton</code> to <code>true</code>.<br> If no importance is given, a device-dependent default configuration is used.<br> If this property is changed after the table has been initialized, the new changes take effect only when the Show / Hide Details button is pressed a second time.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} sDetailsButtonSetting <p>New value for property <code>detailsButtonSetting</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDetailsButtonSetting(sDetailsButtonSetting: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getGrowingMode">growingMode</a>.</p><p>Specifies the growing mode.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Basic</code>.</p>
					 * @param {sap.ui.mdc.enums.TableGrowingMode} sGrowingMode <p>New value for property <code>growingMode</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setGrowingMode(sGrowingMode?: sap.ui.mdc.enums.TableGrowingMode): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getPopinDisplay">popinDisplay</a>.</p><p>Defines how the pop-in content is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Inline</code>.</p>
					 * @param {sap.ui.mdc.enums.TablePopinDisplay} sPopinDisplay <p>New value for property <code>popinDisplay</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPopinDisplay(sPopinDisplay?: sap.ui.mdc.enums.TablePopinDisplay): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getPopinLayout">popinLayout</a>.</p><p>Defines the layout in which the table pop-in rows are rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Block"</code>.</p>
					 * @param {sap.m.PopinLayout} sPopinLayout <p>New value for property <code>popinLayout</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPopinLayout(sPopinLayout?: sap.m.PopinLayout): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType#methods/getShowDetailsButton">showDetailsButton</a>.</p><p>Specifies whether the Show / Hide Details button is shown.</p><p>If the available screen space gets too narrow, the columns configured with <code>High</code> and <code>Medium</code> importance move to the pop-in area, while the columns with <code>Low</code> importance are hidden.<br> On mobile phones, the columns with <code>Medium</code> importance are also hidden.<br> As soon as the first column is hidden, this button appears in the table toolbar and gives the user the possibility to toggle the visibility of the hidden columns in the pop-in area.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowDetailsButton <p>New value for property <code>showDetailsButton</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowDetailsButton(bShowDetailsButton?: boolean): this;
				}
				/**
				 * <p>The <code>RowActionItem</code> control represents a action for a row. This control can only be used in the context of <code>sap.ui.mdc.Table</code> control to define row actions.</p>
				 */
				export class RowActionItem extends sap.ui.core.Element {
					/**
					 * <p>Constructor for new RowActionItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#events/press">press</a> event of this <code>sap.ui.mdc.table.RowActionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.mdc.table.RowActionItem</code> itself.</p><p>Fired when the row action item is pressed.</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.GridTableType">GridTable</a>, the <code>press</code> event is fired when a row action item is pressed.</p><p>If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, the <code>press</code> event and the table's <code>rowPress</code> event are fired when a row with a row action item is pressed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.mdc.table.RowActionItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachPress(oData: any, fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#events/press">press</a> event of this <code>sap.ui.mdc.table.RowActionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachPress(fnFunction: Function, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#events/press">press</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected firePress(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getIcon">icon</a>.</p><p>Icon for the row action item.</p><p><b>Note:</b> A custom icon cannot be set when the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>.</p>
					 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
					 */
					getIcon(): sap.ui.core.URI;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getText">text</a>.</p><p>Text for the row action item.</p><p><b>Note:</b> A custom text cannot be set when the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getType">type</a>.</p><p>Type of the row action item.</p><p>Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly, this setting is used.</p><p>Default value is <code>Custom</code>.</p>
					 * @returns sap.ui.mdc.enums.TableRowActionType <p>Value of property <code>type</code></p>
					 */
					getType(): sap.ui.mdc.enums.TableRowActionType;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getVisible">visible</a>.</p><p>Whether the item should be visible on the screen.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>visible</code></p>
					 */
					getVisible(): boolean;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getIcon">icon</a>.</p><p>Icon for the row action item.</p><p><b>Note:</b> A custom icon cannot be set when the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon: sap.ui.core.URI): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getText">text</a>.</p><p>Text for the row action item.</p><p><b>Note:</b> A custom text cannot be set when the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getType">type</a>.</p><p>Type of the row action item.</p><p>Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly, this setting is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Custom</code>.</p>
					 * @param {sap.ui.mdc.enums.TableRowActionType} sType <p>New value for property <code>type</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setType(sType?: sap.ui.mdc.enums.TableRowActionType): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowActionItem#methods/getVisible">visible</a>.</p><p>Whether the item should be visible on the screen.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setVisible(bVisible?: boolean): this;
				}
				/**
				 * <p>The <code>RowSettings</code> control is used to configure a row. This control can only be used in the context of the <code>sap.ui.mdc.Table</code> control to define row settings.</p>
				 */
				export class RowSettings extends sap.ui.core.Element {
					/**
					 * <p>Constructor for new <code>RowSettings</code>.</p><p><b>Note:</b> Only use bindings that are bound against the rows, as working functionality cannot be ensured for other binding types.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some rowAction to the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p>
					 * @param {sap.ui.mdc.table.RowActionItem} oRowAction <p>The rowAction to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addRowAction(oRowAction: sap.ui.mdc.table.RowActionItem): this;
					/**
					 * <p>Destroys all the rowActions in the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyRowActions(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getHighlight">highlight</a>.</p><p>The highlight state of the rows.</p><p>If the highlight is set to <a target="_self" href="api/module:sap/ui/core/message/MessageType">MessageType.None</a> (default), no highlights are visible. Valid values for the <code>highlight</code> property are values of the enumerations <a target="_self" href="api/module:sap/ui/core/message/MessageType">module:sap/ui/core/message/MessageType</a> or <a target="_self" href="api/sap.ui.core.IndicationColor">sap.ui.core.IndicationColor</a> (only values of <code>Indication01</code> to <code>Indication10</code> are supported for accessibility contrast reasons).</p><p>Accessibility support is provided with the <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setHighlightText">highlightText</a> property. If the <code>highlight</code> property is set to a value of <a target="_self" href="api/module:sap/ui/core/message/MessageType">module:sap/ui/core/message/MessageType</a>, the <code>highlightText</code> property does not need to be set because a default text is used. However, the default text can be overridden by setting the <code>highlightText</code> property. In all other cases the <code>highlightText</code> property must be set.</p><p>Default value is <code>"None"</code>.</p>
					 * @returns string <p>Value of property <code>highlight</code></p>
					 */
					getHighlight(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getHighlightText">highlightText</a>.</p><p>Defines the semantics of the <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setHighlight">highlight</a> property for accessibility purposes.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>highlightText</code></p>
					 */
					getHighlightText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getNavigated">navigated</a>.</p><p>The navigated state of a row. The navigation indicator is displayed at the end of a row.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>navigated</code></p>
					 */
					getNavigated(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActionCount">rowActionCount</a>.</p><p>Defines the number of row actions to display.</p><p>This property is useful for bound row actions where the count cannot be determined automatically. If not set, the count is derived from: <ul> <li>Bound actions: Defaults to 1 (must be set explicitly if multiple actions exist)</li> <li>Static actions: The length of the <code>rowActions</code> aggregation</li> </ul></p><p><b>Note:</b><br> If the <code>rowActionCount</code> property is not explicitly set, the table will automatically determine the number of row actions that is displayed based on the configuration of the <code>RowSettings</code> and the underlying table type. In this case, the table will check how many actions are configured in the <code>RowSettings</code> and will display as many actions as possible up to the maximum number of actions supported by the underlying table type.<br></p><p>If the <code>rowActionCount</code> property is explicitly set, its value will be used to determine how many row actions are displayed, regardless of the number of actions configured in the <code>RowSettings</code>. However, the actual number of displayed actions will still be limited by the maximum number of actions supported by the underlying table type.</p><p><b>Example:</b><br> If the underlying table type supports a maximum number of 3 row actions, and there are 5 actions configured in the <code>RowSettings</code>:</p><p><ul> <li><code>rowActionCount</code> is not set, the table will display 3 actions (the maximum supported).</li> <li><code>rowActionCount</code> is set to 2, the table will display 2 actions (as specified), even though more actions are configured in the <code>RowSettings</code>.</li> </ul></p><p>For bound row actions, the <code>rowActionCount</code> must be set explicitly, as the count cannot be determined automatically. For static actions, the count defaults to the length of the <code>rowActions</code> aggregation in the <code>RowSettings</code>.</p><p>Default value is <code>-1</code>.</p>
					 * @returns number <p>Value of property <code>rowActionCount</code></p>
					 */
					getRowActionCount(): number;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p><p>The actions that appear at the end of a row.</p><p><b>Note:</b> This aggregation cannot be bound with a factory. If the table type is <a target="_self" href="api/sap.ui.mdc.table.ResponsiveTableType">ResponsiveTable</a>, only the <code>Navigation</code> row action type is supported.</p>
					 * @returns sap.ui.mdc.table.RowActionItem[] 
					 */
					getRowActions(): any;
					/**
					 * <p>Checks for the provided <code>sap.ui.mdc.table.RowActionItem</code> in the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.mdc.table.RowActionItem} oRowAction <p>The rowAction whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfRowAction(oRowAction: sap.ui.mdc.table.RowActionItem): number;
					/**
					 * <p>Inserts a rowAction into the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p>
					 * @param {sap.ui.mdc.table.RowActionItem} oRowAction <p>The rowAction to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the rowAction should be inserted at; for a negative value of <code>iIndex</code>, the rowAction is inserted at position 0; for a value greater than the current size of the aggregation, the rowAction is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertRowAction(oRowAction: sap.ui.mdc.table.RowActionItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.mdc.table.RowActionItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllRowActions(): any;
					/**
					 * <p>Removes a rowAction from the aggregation <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActions">rowActions</a>.</p>
					 * @param {number | string | sap.ui.mdc.table.RowActionItem} vRowAction <p>The rowAction to remove or its index or id</p>
					 * @returns sap.ui.mdc.table.RowActionItem | null <p>The removed rowAction or <code>null</code></p>
					 */
					removeRowAction(vRowAction: number | string | sap.ui.mdc.table.RowActionItem): sap.ui.mdc.table.RowActionItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getHighlight">highlight</a>.</p><p>The highlight state of the rows.</p><p>If the highlight is set to <a target="_self" href="api/module:sap/ui/core/message/MessageType">MessageType.None</a> (default), no highlights are visible. Valid values for the <code>highlight</code> property are values of the enumerations <a target="_self" href="api/module:sap/ui/core/message/MessageType">module:sap/ui/core/message/MessageType</a> or <a target="_self" href="api/sap.ui.core.IndicationColor">sap.ui.core.IndicationColor</a> (only values of <code>Indication01</code> to <code>Indication10</code> are supported for accessibility contrast reasons).</p><p>Accessibility support is provided with the <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setHighlightText">highlightText</a> property. If the <code>highlight</code> property is set to a value of <a target="_self" href="api/module:sap/ui/core/message/MessageType">module:sap/ui/core/message/MessageType</a>, the <code>highlightText</code> property does not need to be set because a default text is used. However, the default text can be overridden by setting the <code>highlightText</code> property. In all other cases the <code>highlightText</code> property must be set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
					 * @param {string} sHighlight <p>New value for property <code>highlight</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHighlight(sHighlight?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getHighlightText">highlightText</a>.</p><p>Defines the semantics of the <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/setHighlight">highlight</a> property for accessibility purposes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sHighlightText <p>New value for property <code>highlightText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHighlightText(sHighlightText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getNavigated">navigated</a>.</p><p>The navigated state of a row. The navigation indicator is displayed at the end of a row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bNavigated <p>New value for property <code>navigated</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setNavigated(bNavigated?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.mdc.table.RowSettings#methods/getRowActionCount">rowActionCount</a>.</p><p>Defines the number of row actions to display.</p><p>This property is useful for bound row actions where the count cannot be determined automatically. If not set, the count is derived from: <ul> <li>Bound actions: Defaults to 1 (must be set explicitly if multiple actions exist)</li> <li>Static actions: The length of the <code>rowActions</code> aggregation</li> </ul></p><p><b>Note:</b><br> If the <code>rowActionCount</code> property is not explicitly set, the table will automatically determine the number of row actions that is displayed based on the configuration of the <code>RowSettings</code> and the underlying table type. In this case, the table will check how many actions are configured in the <code>RowSettings</code> and will display as many actions as possible up to the maximum number of actions supported by the underlying table type.<br></p><p>If the <code>rowActionCount</code> property is explicitly set, its value will be used to determine how many row actions are displayed, regardless of the number of actions configured in the <code>RowSettings</code>. However, the actual number of displayed actions will still be limited by the maximum number of actions supported by the underlying table type.</p><p><b>Example:</b><br> If the underlying table type supports a maximum number of 3 row actions, and there are 5 actions configured in the <code>RowSettings</code>:</p><p><ul> <li><code>rowActionCount</code> is not set, the table will display 3 actions (the maximum supported).</li> <li><code>rowActionCount</code> is set to 2, the table will display 2 actions (as specified), even though more actions are configured in the <code>RowSettings</code>.</li> </ul></p><p>For bound row actions, the <code>rowActionCount</code> must be set explicitly, as the count cannot be determined automatically. For static actions, the count defaults to the length of the <code>rowActions</code> aggregation in the <code>RowSettings</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
					 * @param {number} iRowActionCount <p>New value for property <code>rowActionCount</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRowActionCount(iRowActionCount?: number): this;
				}
				/**
				 * <p>The table type info base class for the metadata-driven table. Base class with no implementation.<br></p>
				 */
				export abstract class TableTypeBase extends sap.ui.core.Element {
					/**
					 * <p>Constructor for a new <code>TableTypeBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.core.Element#constructor">sap.ui.core.Element</a> can be used.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
				/**
				 * <p>The table type info class for the metadata-driven table.</p>
				 */
				export class TreeTableType extends sap.ui.mdc.table.GridTableType {
					/**
					 * <p>Constructor for a new <code>TreeTableType</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.ui.mdc.table.GridTableType#constructor">sap.ui.mdc.table.GridTableType</a> can be used.</p>
					 * @param {string} sId <p>Optional ID for the new object; generated automatically if no non-empty ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new object</p>
					 */
					constructor(sId?: string, mSettings?: any);
				}
			}
		}
	}
}
