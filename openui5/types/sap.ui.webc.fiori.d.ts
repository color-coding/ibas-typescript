/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
	namespace ui {
		namespace webc {
			/**
			 * <p><p>SAPUI5 library with controls based on UI5 Web Components</p></p>
			 */
			namespace fiori {
				/**
				 * <h3>Overview</h3><p> The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.</p><h3>Usage</h3><p> With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter. <br> <b>Note:</b> Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.</p><h3>Responsive Behavior</h3><p> The default slot will be centered in the available space between the startContent and the endContent areas, therefore it might not always be centered in the entire bar.</p><h3>CSS Shadow Parts</h3><p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
							title="Information published on non SAP site" class="sapUISDKExternalLink"/> allow developers to style elements inside the Shadow DOM. <br> The <code>sap.ui.webc.fiori.Bar</code> exposes the following CSS Shadow Parts: <ul> <li>bar - Used to style the wrapper of the content of the component</li> </ul></p><h3>Keyboard Handling</h3>
				 */
				export class Bar extends sap.ui.webc.common.WebComponent implements sap.ui.webc.fiori.IBar {
					/**
					 * <p>Constructor for a new <code>Bar</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some endContent to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p>
					 * @param {sap.ui.core.Control} oEndContent <p>The endContent to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addEndContent(oEndContent: sap.ui.core.Control): this;
					/**
					 * <p>Adds some middleContent to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p>
					 * @param {sap.ui.core.Control} oMiddleContent <p>The middleContent to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addMiddleContent(oMiddleContent: sap.ui.core.Control): this;
					/**
					 * <p>Adds some startContent to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p>
					 * @param {sap.ui.core.Control} oStartContent <p>The startContent to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addStartContent(oStartContent: sap.ui.core.Control): this;
					/**
					 * <p>Destroys all the endContent in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyEndContent(): this;
					/**
					 * <p>Destroys all the middleContent in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyMiddleContent(): this;
					/**
					 * <p>Destroys all the startContent in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyStartContent(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getDesign">design</a>.</p><p>Defines the component's design.</p><p><br> <br> <b>Note:</b> Available options are: <ul> <li><code>Header</code></li> <li><code>Subheader</code></li> <li><code>Footer</code></li> <li><code>FloatingFooter</code></li> </ul></p><p>Default value is <code>Header</code>.</p>
					 * @returns sap.ui.webc.fiori.BarDesign <p>Value of property <code>design</code></p>
					 */
					getDesign(): sap.ui.webc.fiori.BarDesign;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p><p>Defines the content at the end of the bar</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getEndContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p><p>Defines the content in the middle of the bar</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getMiddleContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p><p>Defines the content at the start of the bar</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getStartContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getWidth">width</a>.</p><p>Defines the width of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oEndContent <p>The endContent whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfEndContent(oEndContent: sap.ui.core.Control): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oMiddleContent <p>The middleContent whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfMiddleContent(oMiddleContent: sap.ui.core.Control): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oStartContent <p>The startContent whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfStartContent(oStartContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a endContent into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p>
					 * @param {sap.ui.core.Control} oEndContent <p>The endContent to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the endContent should be inserted at; for a negative value of <code>iIndex</code>, the endContent is inserted at position 0; for a value greater than the current size of the aggregation, the endContent is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertEndContent(oEndContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Inserts a middleContent into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p>
					 * @param {sap.ui.core.Control} oMiddleContent <p>The middleContent to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the middleContent should be inserted at; for a negative value of <code>iIndex</code>, the middleContent is inserted at position 0; for a value greater than the current size of the aggregation, the middleContent is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertMiddleContent(oMiddleContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Inserts a startContent into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p>
					 * @param {sap.ui.core.Control} oStartContent <p>The startContent to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the startContent should be inserted at; for a negative value of <code>iIndex</code>, the startContent is inserted at position 0; for a value greater than the current size of the aggregation, the startContent is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertStartContent(oStartContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllEndContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllMiddleContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllStartContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a endContent from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getEndContent">endContent</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vEndContent <p>The endContent to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed endContent or <code>null</code></p>
					 */
					removeEndContent(vEndContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Removes a middleContent from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getMiddleContent">middleContent</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vMiddleContent <p>The middleContent to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed middleContent or <code>null</code></p>
					 */
					removeMiddleContent(vMiddleContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Removes a startContent from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getStartContent">startContent</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vStartContent <p>The startContent to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed startContent or <code>null</code></p>
					 */
					removeStartContent(vStartContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getDesign">design</a>.</p><p>Defines the component's design.</p><p><br> <br> <b>Note:</b> Available options are: <ul> <li><code>Header</code></li> <li><code>Subheader</code></li> <li><code>Footer</code></li> <li><code>FloatingFooter</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Header</code>.</p>
					 * @param {sap.ui.webc.fiori.BarDesign} sDesign <p>New value for property <code>design</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDesign(sDesign?: sap.ui.webc.fiori.BarDesign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Bar#methods/getWidth">width</a>.</p><p>Defines the width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth: sap.ui.core.CSSSize): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>BarcodeScannerDialog</code> component provides barcode scanning functionality for all devices that support the <code>MediaDevices.getUserMedia()</code> native API. Opening the dialog launches the device camera and scans for known barcode formats. <br> <br> A <code>scanSuccess</code> event fires whenever a barcode is identified and a <code>scanError</code> event fires when the scan failed (for example, due to missing permisions). <br> <br> Internally, the component uses the zxing-js/library third party OSS.</p><p>For a list of supported barcode formats, see the <a target="_blank" rel="noopener noreferrer" href="https://github.com/zxing-js/library">zxing-js/library</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
							title="Information published on non SAP site" class="sapUISDKExternalLink"/> documentation.</p>
				 */
				export class BarcodeScannerDialog extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>BarcodeScannerDialog</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanError">scanError</a> event of this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code> itself.</p><p>Fires when the scan fails with error.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachScanError(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanSuccess">scanSuccess</a> event of this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code> itself.</p><p>Fires when the scan is completed successfuuly.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachScanSuccess(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Closes the dialog and the scan session.</p>
					 */
					close(): void;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanError">scanError</a> event of this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachScanError(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanSuccess">scanSuccess</a> event of this <code>sap.ui.webc.fiori.BarcodeScannerDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachScanSuccess(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanError">scanError</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireScanError(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.BarcodeScannerDialog#events/scanSuccess">scanSuccess</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireScanSuccess(mParameters?: any): this;
					/**
					 * <p>Shows a dialog with the camera videostream. Starts a scan session.</p>
					 */
					show(): void;
				}
				/**
				 * <p><p>Different types of Bar.</p></p>
				 */
				export enum BarDesign {
					/**
					 * <p>Floating Footer type - there is visible border on all sides</p>
					 */
					FloatingFooter = "FloatingFooter",
					/**
					 * <p>Footer type</p>
					 */
					Footer = "Footer",
					/**
					 * <p>Default type</p>
					 */
					Header = "Header",
					/**
					 * <p>Subheader type</p>
					 */
					Subheader = "Subheader",
				}
				/**
				 * <h3>Overview</h3><p>The DynamicSideContent (<code>sap.ui.webc.fiori.DynamicSideContent</code>) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.</p><h3>Usage</h3><p><i>When to use?</i></p><p>Use this component if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.</p><p><i>When not to use?</i></p><p>Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.</p><h3>Responsive Behavior</h3><p>Screen width > 1440px</p><p><ul> <li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).</li> <li>If the application defines a trigger, the side content can be hidden.</li> </ul></p><p>Screen width <= 1440px and> 1024px</p><p><ul> <li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.</li> </ul></p><p>Screen width <= 1024px and> 720px</p><p><ul> <li>The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only if the <code>sideContentFallDown</code> is set to <code>OnMinimumWidth</code> and screen width is <= 960px and> 720px the side content falls below the main content.</li> </ul></p><p>Screen width <= 720px (for example on a mobile device) <ul> <li>In this case, the side content automatically disappears from the screen (unless specified to stay under the content by setting of <code>sideContentVisibility</code> property to <code>AlwaysShow</code>) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.</li> </ul></p><p>A special case allows switching the comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.</p>
				 */
				export class DynamicSideContent extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>DynamicSideContent</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Adds some sideContent to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p>
					 * @param {sap.ui.core.Control} oSideContent <p>The sideContent to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addSideContent(oSideContent: sap.ui.core.Control): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#events/layoutChange">layoutChange</a> event of this <code>sap.ui.webc.fiori.DynamicSideContent</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.DynamicSideContent</code> itself.</p><p>Fires when the current breakpoint has been changed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.DynamicSideContent</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachLayoutChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys all the sideContent in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroySideContent(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#events/layoutChange">layoutChange</a> event of this <code>sap.ui.webc.fiori.DynamicSideContent</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachLayoutChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#events/layoutChange">layoutChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireLayoutChange(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p><p>Defines the main content.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getEqualSplit">equalSplit</a>.</p><p>Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>equalSplit</code></p>
					 */
					getEqualSplit(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getHideMainContent">hideMainContent</a>.</p><p>Defines the visibility of the main content.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideMainContent</code></p>
					 */
					getHideMainContent(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getHideSideContent">hideSideContent</a>.</p><p>Defines the visibility of the side content.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideSideContent</code></p>
					 */
					getHideSideContent(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p><p>Defines the side content.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getSideContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentFallDown">sideContentFallDown</a>.</p><p>Defines on which breakpoints the side content falls down below the main content.</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>BelowXL</code></li> <li><code>BelowL</code></li> <li><code>BelowM</code></li> <li><code>OnMinimumWidth</code></li> </ul></p><p>Default value is <code>OnMinimumWidth</code>.</p>
					 * @returns sap.ui.webc.fiori.SideContentFallDown <p>Value of property <code>sideContentFallDown</code></p>
					 */
					getSideContentFallDown(): sap.ui.webc.fiori.SideContentFallDown;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentPosition">sideContentPosition</a>.</p><p>Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>Start</code></li> <li><code>End</code></li> </ul></p><p>Default value is <code>End</code>.</p>
					 * @returns sap.ui.webc.fiori.SideContentPosition <p>Value of property <code>sideContentPosition</code></p>
					 */
					getSideContentPosition(): sap.ui.webc.fiori.SideContentPosition;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentVisibility">sideContentVisibility</a>.</p><p>Defines on which breakpoints the side content is visible.</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>AlwaysShow</code></li> <li><code>ShowAboveL</code></li> <li><code>ShowAboveM</code></li> <li><code>ShowAboveS</code></li> <li><code>NeverShow</code></li> </ul></p><p>Default value is <code>ShowAboveS</code>.</p>
					 * @returns sap.ui.webc.fiori.SideContentVisibility <p>Value of property <code>sideContentVisibility</code></p>
					 */
					getSideContentVisibility(): sap.ui.webc.fiori.SideContentVisibility;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfContent(oContent: sap.ui.core.Control): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oSideContent <p>The sideContent whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfSideContent(oSideContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Inserts a sideContent into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p>
					 * @param {sap.ui.core.Control} oSideContent <p>The sideContent to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the sideContent should be inserted at; for a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value greater than the current size of the aggregation, the sideContent is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertSideContent(oSideContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllSideContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getContent">content</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
					 */
					removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Removes a sideContent from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContent">sideContent</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vSideContent <p>The sideContent to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed sideContent or <code>null</code></p>
					 */
					removeSideContent(vSideContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getEqualSplit">equalSplit</a>.</p><p>Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bEqualSplit <p>New value for property <code>equalSplit</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEqualSplit(bEqualSplit?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getHideMainContent">hideMainContent</a>.</p><p>Defines the visibility of the main content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideMainContent <p>New value for property <code>hideMainContent</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideMainContent(bHideMainContent?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getHideSideContent">hideSideContent</a>.</p><p>Defines the visibility of the side content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideSideContent <p>New value for property <code>hideSideContent</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideSideContent(bHideSideContent?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentFallDown">sideContentFallDown</a>.</p><p>Defines on which breakpoints the side content falls down below the main content.</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>BelowXL</code></li> <li><code>BelowL</code></li> <li><code>BelowM</code></li> <li><code>OnMinimumWidth</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>OnMinimumWidth</code>.</p>
					 * @param {sap.ui.webc.fiori.SideContentFallDown} sSideContentFallDown <p>New value for property <code>sideContentFallDown</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSideContentFallDown(sSideContentFallDown?: sap.ui.webc.fiori.SideContentFallDown): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentPosition">sideContentPosition</a>.</p><p>Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>Start</code></li> <li><code>End</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>End</code>.</p>
					 * @param {sap.ui.webc.fiori.SideContentPosition} sSideContentPosition <p>New value for property <code>sideContentPosition</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSideContentPosition(sSideContentPosition?: sap.ui.webc.fiori.SideContentPosition): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.DynamicSideContent#methods/getSideContentVisibility">sideContentVisibility</a>.</p><p>Defines on which breakpoints the side content is visible.</p><p><br> <br> <b>The available values are:</b></p><p><ul> <li><code>AlwaysShow</code></li> <li><code>ShowAboveL</code></li> <li><code>ShowAboveM</code></li> <li><code>ShowAboveS</code></li> <li><code>NeverShow</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>ShowAboveS</code>.</p>
					 * @param {sap.ui.webc.fiori.SideContentVisibility} sSideContentVisibility <p>New value for property <code>sideContentVisibility</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSideContentVisibility(sSideContentVisibility?: sap.ui.webc.fiori.SideContentVisibility): this;
					/**
					 * <p>Toggles visibility of main and side contents on S screen size (mobile device).</p>
					 */
					toggleContents(): void;
				}
				/**
				 * <p><p>undefined</p></p>
				 */
				export enum FCLLayout {
					/**
					 * <p>Desktop: -/-/100 only the End column is displayed Tablet: -/-/100 only the End column is displayed Phone: -/-/100 only the End column is displayed</p><p>Use to display a detail-detail page only, when the user should focus entirely on it.</p>
					 */
					EndColumnFullScreen = "EndColumnFullScreen",
					/**
					 * <p>Desktop: -/100/- only the Mid column is displayed Tablet: -/100/- only the Mid column is displayed Phone: -/100/- only the Mid column is displayed</p><p>Use to display a detail page only, when the user should focus entirely on it.</p>
					 */
					MidColumnFullScreen = "MidColumnFullScreen",
					/**
					 * <p>The layout will display 1 column.</p>
					 */
					OneColumn = "OneColumn",
					/**
					 * <p>Desktop: 25/25/50 Start, Mid and End (expanded) columns are displayed Tablet: 0/33/67 Mid and End (expanded) columns are displayed, Start is accessible by layout arrows Phone: -/-/100 (only the End column is displayed)</p><p>Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail-detail.</p>
					 */
					ThreeColumnsEndExpanded = "ThreeColumnsEndExpanded",
					/**
					 * <p>Desktop: 25/50/25 Start, Mid (expanded) and End columns are displayed Tablet: 0/67/33 Mid (expanded) and End columns are displayed, Start is accessible by a layout arrow Phone: -/-/100 only the End column is displayed</p><p>Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail.</p>
					 */
					ThreeColumnsMidExpanded = "ThreeColumnsMidExpanded",
					/**
					 * <p>Desktop: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Tablet: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Phone: -/-/100 only the End column is displayed</p><p>Use to display the list and detail pages when the user should focus on the detail. The detail-detail is still loaded and easily accessible with a layout arrow.</p>
					 */
					ThreeColumnsMidExpandedEndHidden = "ThreeColumnsMidExpandedEndHidden",
					/**
					 * <p>Desktop: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Tablet: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Phone: -/-/100 only the End column is displayed</p><p>Use to display the list and detail pages when the user should focus on the list. The detail-detail is still loaded and easily accessible with layout arrows.</p>
					 */
					ThreeColumnsStartExpandedEndHidden = "ThreeColumnsStartExpandedEndHidden",
					/**
					 * <p>Desktop: 33/67/- Start and Mid (expanded) columns are displayed Tablet: 33/67/- Start and Mid (expanded) columns are displayed Phone: -/100/- only the Mid column is displayed</p><p>Use to display both a list and a detail page when the user should focus on the detail page.</p>
					 */
					TwoColumnsMidExpanded = "TwoColumnsMidExpanded",
					/**
					 * <p>Desktop: 67/33/- Start (expanded) and Mid columns are displayed Tablet: 67/33/- Start (expanded) and Mid columns are displayed Phone: -/100/- only the Mid column is displayed</p><p>Use to display both a list and a detail page when the user should focus on the list page.</p>
					 */
					TwoColumnsStartExpanded = "TwoColumnsStartExpanded",
				}
				/**
				 * <h3>Overview</h3><h3>Usage</h3>
				 */
				export class FilterItem extends sap.ui.webc.common.WebComponent implements sap.ui.webc.fiori.IFilterItem {
					/**
					 * <p>Constructor for a new <code>FilterItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some value to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p>
					 * @param {sap.ui.webc.fiori.IFilterItemOption} oValue <p>The value to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addValue(oValue: sap.ui.webc.fiori.IFilterItemOption): this;
					/**
					 * <p>Destroys all the values in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyValues(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p><p>Defines the <code>values</code> list.</p>
					 * @returns sap.ui.webc.fiori.IFilterItemOption[] 
					 */
					getValues(): sap.ui.webc.fiori.IFilterItemOption[];
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IFilterItemOption</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IFilterItemOption} oValue <p>The value whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfValue(oValue: sap.ui.webc.fiori.IFilterItemOption): number;
					/**
					 * <p>Inserts a value into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p>
					 * @param {sap.ui.webc.fiori.IFilterItemOption} oValue <p>The value to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the value should be inserted at; for a negative value of <code>iIndex</code>, the value is inserted at position 0; for a value greater than the current size of the aggregation, the value is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertValue(oValue: sap.ui.webc.fiori.IFilterItemOption, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IFilterItemOption[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllValues(): sap.ui.webc.fiori.IFilterItemOption[];
					/**
					 * <p>Removes a value from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getValues">values</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IFilterItemOption} vValue <p>The value to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IFilterItemOption|null <p>The removed value or <code>null</code></p>
					 */
					removeValue(vValue: number | string | sap.ui.webc.fiori.IFilterItemOption): sap.ui.webc.fiori.IFilterItemOption | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FilterItem#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <h3>Overview</h3><h3>Usage</h3>
				 */
				export class FilterItemOption extends sap.ui.webc.common.WebComponent implements sap.ui.webc.fiori.IFilterItemOption {
					/**
					 * <p>Constructor for a new <code>FilterItemOption</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FilterItemOption#methods/getSelected">selected</a>.</p><p>Defines whether the option is selected</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FilterItemOption#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FilterItemOption#methods/getSelected">selected</a>.</p><p>Defines whether the option is selected</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FilterItemOption#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>FlexibleColumnLayout</code> implements the list-detail-detail paradigm by displaying up to three pages in separate columns. There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.</p><h3>Usage</h3><p>Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.). The Component is flexible in a sense that the application can focus the user's attention on one particular column.</p><h3>Responsive Behavior</h3><p>The <code>FlexibleColumnLayout</code> automatically displays the maximum possible number of columns based on <code>layout</code> property and the window size. The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px, and 3 columns for sizes bigger than 1023px.</p><p><br> <br> </p><h3>Keyboard Handling</h3>
				 */
				export class FlexibleColumnLayout extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>FlexibleColumnLayout</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#events/layoutChange">layoutChange</a> event of this <code>sap.ui.webc.fiori.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.FlexibleColumnLayout</code> itself.</p><p>Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.FlexibleColumnLayout</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachLayoutChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys the endColumn in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getEndColumn">endColumn</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyEndColumn(): this;
					/**
					 * <p>Destroys the midColumn in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getMidColumn">midColumn</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyMidColumn(): this;
					/**
					 * <p>Destroys the startColumn in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getStartColumn">startColumn</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyStartColumn(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#events/layoutChange">layoutChange</a> event of this <code>sap.ui.webc.fiori.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachLayoutChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#events/layoutChange">layoutChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireLayoutChange(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getAccessibilityRoles">accessibilityRoles</a>.</p><p>An object of strings that defines additional accessibility roles for further customization.</p><p>It supports the following fields: - <code>startColumnRole</code>: the accessibility role for the <code>startColumn</code> - <code>startArrowContainerRole</code>: the accessibility role for the first arrow container (between the <code>begin</code> and <code>mid</code> columns) - <code>midColumnRole</code>: the accessibility role for the <code>midColumn</code> - <code>endArrowContainerRole</code>: the accessibility role for the second arrow container (between the <code>mid</code> and <code>end</code> columns) - <code>endColumnRole</code>: the accessibility role for the <code>endColumn</code></p><p>Default value is <code>{}</code>.</p>
					 * @returns any <p>Value of property <code>accessibilityRoles</code></p>
					 */
					getAccessibilityRoles(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getAccessibilityTexts">accessibilityTexts</a>.</p><p>An object of strings that defines several additional accessibility texts for even further customization.</p><p>It supports the following fields: - <code>startColumnAccessibleName</code>: the accessibility name for the <code>startColumn</code> region - <code>midColumnAccessibleName</code>: the accessibility name for the <code>midColumn</code> region - <code>endColumnAccessibleName</code>: the accessibility name for the <code>endColumn</code> region - <code>startArrowLeftText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the left - <code>startArrowRightText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the right - <code>endArrowLeftText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the left - <code>endArrowRightText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the right - <code>startArrowContainerAccessibleName</code>: the text that the first arrow container (between the <code>begin</code> and <code>mid</code> columns) will have as <code>aria-label</code> - <code>endArrowContainerAccessibleName</code>: the text that the second arrow container (between the <code>mid</code> and <code>end</code> columns) will have as <code>aria-label</code></p><p>Default value is <code>{}</code>.</p>
					 * @returns any <p>Value of property <code>accessibilityTexts</code></p>
					 */
					getAccessibilityTexts(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getEndColumn">endColumn</a>.</p><p>Defines the content in the end column.</p>
					 * @returns sap.ui.core.Control 
					 */
					getEndColumn(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getHeight">height</a>.</p><p>Defines the height of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
					 */
					getHeight(): sap.ui.core.CSSSize;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getHideArrows">hideArrows</a>.</p><p>Defines the visibility of the arrows, used for expanding and shrinking the columns.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideArrows</code></p>
					 */
					getHideArrows(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getLayout">layout</a>.</p><p>Defines the columns layout and their proportion. <br> <br> <b>Note:</b> The layout also depends on the screen size - one column for screens smaller than 599px, two columns between 599px and 1023px and three columns for sizes bigger than 1023px. <br> <br> Available options are: <ul> <li><code>OneColumn</code></li> <li><code>TwoColumnsStartExpanded</code></li> <li><code>TwoColumnsMidExpanded</code></li> <li><code>ThreeColumnsMidExpanded</code></li> <li><code>ThreeColumnsEndExpanded</code></li> <li><code>ThreeColumnsStartExpandedEndHidden</code></li> <li><code>ThreeColumnsMidExpandedEndHidden</code></li> <li><code>MidColumnFullScreen</code></li> <li><code>EndColumnFullScreen</code></li> </ul> <br> <br> <b>For example:</b> layout=<code>TwoColumnsStartExpanded</code> means the layout will display up to two columns in 67%/33% proportion.</p><p>Default value is <code>OneColumn</code>.</p>
					 * @returns sap.ui.webc.fiori.FCLLayout <p>Value of property <code>layout</code></p>
					 */
					getLayout(): sap.ui.webc.fiori.FCLLayout;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getMidColumn">midColumn</a>.</p><p>Defines the content in the middle column.</p>
					 * @returns sap.ui.core.Control 
					 */
					getMidColumn(): sap.ui.core.Control;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getStartColumn">startColumn</a>.</p><p>Defines the content in the start column.</p>
					 * @returns sap.ui.core.Control 
					 */
					getStartColumn(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getWidth">width</a>.</p><p>Defines the width of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getAccessibilityRoles">accessibilityRoles</a>.</p><p>An object of strings that defines additional accessibility roles for further customization.</p><p>It supports the following fields: - <code>startColumnRole</code>: the accessibility role for the <code>startColumn</code> - <code>startArrowContainerRole</code>: the accessibility role for the first arrow container (between the <code>begin</code> and <code>mid</code> columns) - <code>midColumnRole</code>: the accessibility role for the <code>midColumn</code> - <code>endArrowContainerRole</code>: the accessibility role for the second arrow container (between the <code>mid</code> and <code>end</code> columns) - <code>endColumnRole</code>: the accessibility role for the <code>endColumn</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>{}</code>.</p>
					 * @param {any} oAccessibilityRoles <p>New value for property <code>accessibilityRoles</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAccessibilityRoles(oAccessibilityRoles?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getAccessibilityTexts">accessibilityTexts</a>.</p><p>An object of strings that defines several additional accessibility texts for even further customization.</p><p>It supports the following fields: - <code>startColumnAccessibleName</code>: the accessibility name for the <code>startColumn</code> region - <code>midColumnAccessibleName</code>: the accessibility name for the <code>midColumn</code> region - <code>endColumnAccessibleName</code>: the accessibility name for the <code>endColumn</code> region - <code>startArrowLeftText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the left - <code>startArrowRightText</code>: the text that the first arrow (between the <code>begin</code> and <code>mid</code> columns) will have when pointing to the right - <code>endArrowLeftText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the left - <code>endArrowRightText</code>: the text that the second arrow (between the <code>mid</code> and <code>end</code> columns) will have when pointing to the right - <code>startArrowContainerAccessibleName</code>: the text that the first arrow container (between the <code>begin</code> and <code>mid</code> columns) will have as <code>aria-label</code> - <code>endArrowContainerAccessibleName</code>: the text that the second arrow container (between the <code>mid</code> and <code>end</code> columns) will have as <code>aria-label</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>{}</code>.</p>
					 * @param {any} oAccessibilityTexts <p>New value for property <code>accessibilityTexts</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAccessibilityTexts(oAccessibilityTexts?: any): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getEndColumn">endColumn</a>.</p>
					 * @param {sap.ui.core.Control} oEndColumn <p>The endColumn to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEndColumn(oEndColumn: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getHeight">height</a>.</p><p>Defines the height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeight(sHeight: sap.ui.core.CSSSize): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getHideArrows">hideArrows</a>.</p><p>Defines the visibility of the arrows, used for expanding and shrinking the columns.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideArrows <p>New value for property <code>hideArrows</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideArrows(bHideArrows?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getLayout">layout</a>.</p><p>Defines the columns layout and their proportion. <br> <br> <b>Note:</b> The layout also depends on the screen size - one column for screens smaller than 599px, two columns between 599px and 1023px and three columns for sizes bigger than 1023px. <br> <br> Available options are: <ul> <li><code>OneColumn</code></li> <li><code>TwoColumnsStartExpanded</code></li> <li><code>TwoColumnsMidExpanded</code></li> <li><code>ThreeColumnsMidExpanded</code></li> <li><code>ThreeColumnsEndExpanded</code></li> <li><code>ThreeColumnsStartExpandedEndHidden</code></li> <li><code>ThreeColumnsMidExpandedEndHidden</code></li> <li><code>MidColumnFullScreen</code></li> <li><code>EndColumnFullScreen</code></li> </ul> <br> <br> <b>For example:</b> layout=<code>TwoColumnsStartExpanded</code> means the layout will display up to two columns in 67%/33% proportion.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>OneColumn</code>.</p>
					 * @param {sap.ui.webc.fiori.FCLLayout} sLayout <p>New value for property <code>layout</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLayout(sLayout?: sap.ui.webc.fiori.FCLLayout): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getMidColumn">midColumn</a>.</p>
					 * @param {sap.ui.core.Control} oMidColumn <p>The midColumn to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMidColumn(oMidColumn: sap.ui.core.Control): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getStartColumn">startColumn</a>.</p>
					 * @param {sap.ui.core.Control} oStartColumn <p>The startColumn to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setStartColumn(oStartColumn: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.FlexibleColumnLayout#methods/getWidth">width</a>.</p><p>Defines the width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth: sap.ui.core.CSSSize): this;
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-page</code> as header and footer.</p></p>
				 */
				export interface IBar {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-view-settings-dialog</code> as filter items</p></p>
				 */
				export interface IFilterItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-filter-item</code> as values</p></p>
				 */
				export interface IFilterItemOption {
				}
				/**
				 * <h3>Overview</h3><p> An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone.</p><p>Each illustration has default internationalised title and subtitle texts. Also they can be managed with <code>titleText</code> and <code>subtitleText</code> properties.</p><h3>Structure</h3><p> The IllustratedMessage consists of the following elements, which are displayed below each other in the following order: <br></p><p><ul> <li>Illustration</li> <li>Title</li> <li>Subtitle</li> <li>Actions</li> </ul></p><h3>Usage</h3><p> <code>sap.ui.webc.fiori.IllustratedMessage</code> is meant to be used inside container component, for example a <code>sap.ui.webc.main.Card</code>, a <code>sap.ui.webc.main.Dialog</code> or a <code>sap.ui.webc.fiori.Page</code></p>
				 */
				export class IllustratedMessage extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>IllustratedMessage</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some action to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.main.IButton} oAction <p>The action to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addAction(oAction: sap.ui.webc.main.IButton): this;
					/**
					 * <p>Destroys all the actions in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyActions(): this;
					/**
					 * <p>Destroys the subtitle in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSubtitle">subtitle</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroySubtitle(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p><p>Defines the component actions.</p>
					 * @returns sap.ui.webc.main.IButton[] 
					 */
					getActions(): sap.ui.webc.main.IButton[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getName">name</a>.</p><p>Default value is <code>BeforeSearch</code>.</p>
					 * @returns sap.ui.webc.fiori.IllustrationMessageType <p>Value of property <code>name</code></p>
					 */
					getName(): sap.ui.webc.fiori.IllustrationMessageType;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSize">size</a>.</p><p>Determines which illustration breakpoint variant is used. <br> <br> Available options are: <ul> <li><code>Auto</code></li> <li><code>Base</code></li> <li><code>Spot</code></li> <li><code>Dialog</code></li> <li><code>Scene</code></li> </ul></p><p>As <code>IllustratedMessage</code> adapts itself around the <code>Illustration</code>, the other elements of the component are displayed differently on the different breakpoints/illustration sizes.</p><p>Default value is <code>Auto</code>.</p>
					 * @returns sap.ui.webc.fiori.IllustrationMessageSize <p>Value of property <code>size</code></p>
					 */
					getSize(): sap.ui.webc.fiori.IllustrationMessageSize;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSubtitle">subtitle</a>.</p><p>Defines the subtitle of the component. <br> <br> <b>Note:</b> Using this slot, the default subtitle text of illustration and the value of <code>subtitleText</code> property will be overwritten.</p>
					 * @returns sap.ui.core.Control 
					 */
					getSubtitle(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle of the component. <br> <br> <b>Note:</b> Using this property, the default subtitle text of illustration will be overwritten. <br> <br> <b>Note:</b> Using <code>subtitle</code> slot, the default of this property will be overwritten.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>subtitleText</code></p>
					 */
					getSubtitleText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getTitleText">titleText</a>.</p><p>Defines the title of the component. <br> <br> <b>Note:</b> Using this property, the default title text of illustration will be overwritten.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.main.IButton</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.main.IButton} oAction <p>The action whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfAction(oAction: sap.ui.webc.main.IButton): number;
					/**
					 * <p>Inserts a action into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.main.IButton} oAction <p>The action to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertAction(oAction: sap.ui.webc.main.IButton, iIndex: number): this;
					/**
					 * <p>Removes a action from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p>
					 * @param {number | string | sap.ui.webc.main.IButton} vAction <p>The action to remove or its index or id</p>
					 * @returns sap.ui.webc.main.IButton|null <p>The removed action or <code>null</code></p>
					 */
					removeAction(vAction: number | string | sap.ui.webc.main.IButton): sap.ui.webc.main.IButton | null;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.main.IButton[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllActions(): sap.ui.webc.main.IButton[];
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getName">name</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>BeforeSearch</code>.</p>
					 * @param {sap.ui.webc.fiori.IllustrationMessageType} sName <p>New value for property <code>name</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setName(sName?: sap.ui.webc.fiori.IllustrationMessageType): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSize">size</a>.</p><p>Determines which illustration breakpoint variant is used. <br> <br> Available options are: <ul> <li><code>Auto</code></li> <li><code>Base</code></li> <li><code>Spot</code></li> <li><code>Dialog</code></li> <li><code>Scene</code></li> </ul></p><p>As <code>IllustratedMessage</code> adapts itself around the <code>Illustration</code>, the other elements of the component are displayed differently on the different breakpoints/illustration sizes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
					 * @param {sap.ui.webc.fiori.IllustrationMessageSize} sSize <p>New value for property <code>size</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSize(sSize?: sap.ui.webc.fiori.IllustrationMessageSize): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSubtitle">subtitle</a>.</p>
					 * @param {sap.ui.core.Control} oSubtitle <p>The subtitle to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSubtitle(oSubtitle: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle of the component. <br> <br> <b>Note:</b> Using this property, the default subtitle text of illustration will be overwritten. <br> <br> <b>Note:</b> Using <code>subtitle</code> slot, the default of this property will be overwritten.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sSubtitleText <p>New value for property <code>subtitleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSubtitleText(sSubtitleText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.IllustratedMessage#methods/getTitleText">titleText</a>.</p><p>Defines the title of the component. <br> <br> <b>Note:</b> Using this property, the default title text of illustration will be overwritten.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
				}
				/**
				 * <p><p>Different types of IllustrationMessageSize.</p></p>
				 */
				export enum IllustrationMessageSize {
					/**
					 * <p>Automatically decides the <code>Illustration</code> size (<code>Base</code>, <code>Spot</code>, <code>Dialog</code>, or <code>Scene</code>) depending on the <code>IllustratedMessage</code> container width.</p><p><b>Note:</b> <code>Auto</code> is the only option where the illustration size is changed according to the available container width. If any other <code>IllustratedMessageSize</code> is chosen, it remains until changed by the app developer.</p>
					 */
					Auto = "Auto",
					/**
					 * <p>Base <code>Illustration</code> size (XS breakpoint). Suitable for cards (two columns).</p><p><b>Note:</b> When <code>Base</code> is in use, no illustration is displayed.</p>
					 */
					Base = "Base",
					/**
					 * <p>Dialog <code>Illustration</code> size (M breakpoint). Suitable for dialogs.</p>
					 */
					Dialog = "Dialog",
					/**
					 * <p>Scene <code>Illustration</code> size (L breakpoint). Suitable for a <code>Page</code> or a table.</p>
					 */
					Scene = "Scene",
					/**
					 * <p>Spot <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).</p>
					 */
					Spot = "Spot",
				}
				/**
				 * <p><p>Different illustration types of Illustrated Message.</p></p>
				 */
				export enum IllustrationMessageType {
					/**
					 * <p>"Add Column" illustration type.</p>
					 */
					AddColumn = "AddColumn",
					/**
					 * <p>"Add People" illustration type.</p>
					 */
					AddPeople = "AddPeople",
					/**
					 * <p>"Balloon Sky" illustration type.</p>
					 */
					BalloonSky = "BalloonSky",
					/**
					 * <p>"Before Search" illustration type.</p>
					 */
					BeforeSearch = "BeforeSearch",
					/**
					 * <p>"Connection" illustration type.</p>
					 */
					Connection = "Connection",
					/**
					 * <p>"Empty Calendar" illustration type.</p>
					 */
					EmptyCalendar = "EmptyCalendar",
					/**
					 * <p>"Empty List" illustration type.</p>
					 */
					EmptyList = "EmptyList",
					/**
					 * <p>"Empty Planning Calendar" illustration type.</p>
					 */
					EmptyPlanningCalendar = "EmptyPlanningCalendar",
					/**
					 * <p>"Error Screen" illustration type.</p>
					 */
					ErrorScreen = "ErrorScreen",
					/**
					 * <p>"Filter Table" illustration type.</p>
					 */
					FilterTable = "FilterTable",
					/**
					 * <p>"Group Table" illustration type.</p>
					 */
					GroupTable = "GroupTable",
					/**
					 * <p>"No Activities" illustration type.</p>
					 */
					NoActivities = "NoActivities",
					/**
					 * <p>"No Data" illustration type.</p>
					 */
					NoData = "NoData",
					/**
					 * <p>"No Entries" illustration type.</p>
					 */
					NoEntries = "NoEntries",
					/**
					 * <p>"No Filter Results" illustration type.</p>
					 */
					NoFilterResults = "NoFilterResults",
					/**
					 * <p>"No Email" illustration type.</p>
					 */
					NoMail = "NoMail",
					/**
					 * <p>"No Email v1" illustration type.</p>
					 */
					NoMail_v1 = "NoMail_v1",
					/**
					 * <p>"No Notifications" illustration type.</p>
					 */
					NoNotifications = "NoNotifications",
					/**
					 * <p>"No Saved Items" illustration type.</p>
					 */
					NoSavedItems = "NoSavedItems",
					/**
					 * <p>"No Saved Items v1" illustration type.</p>
					 */
					NoSavedItems_v1 = "NoSavedItems_v1",
					/**
					 * <p>"No Search Results" illustration type.</p>
					 */
					NoSearchResults = "NoSearchResults",
					/**
					 * <p>"No Tasks" illustration type.</p>
					 */
					NoTasks = "NoTasks",
					/**
					 * <p>"No Tasks v1" illustration type.</p>
					 */
					NoTasks_v1 = "NoTasks_v1",
					/**
					 * <p>"Page Not Found" illustration type.</p>
					 */
					PageNotFound = "PageNotFound",
					/**
					 * <p>"Reload Screen" illustration type.</p>
					 */
					ReloadScreen = "ReloadScreen",
					/**
					 * <p>"Resize Column" illustration type.</p>
					 */
					ResizeColumn = "ResizeColumn",
					/**
					 * <p>"Search Earth" illustration type.</p>
					 */
					SearchEarth = "SearchEarth",
					/**
					 * <p>"Search Folder" illustration type.</p>
					 */
					SearchFolder = "SearchFolder",
					/**
					 * <p>"Simple Balloon" illustration type.</p>
					 */
					SimpleBalloon = "SimpleBalloon",
					/**
					 * <p>"Simple Bell" illustration type.</p>
					 */
					SimpleBell = "SimpleBell",
					/**
					 * <p>"Simple Calendar" illustration type.</p>
					 */
					SimpleCalendar = "SimpleCalendar",
					/**
					 * <p>"Simple CheckMark" illustration type.</p>
					 */
					SimpleCheckMark = "SimpleCheckMark",
					/**
					 * <p>"Simple Connection" illustration type.</p>
					 */
					SimpleConnection = "SimpleConnection",
					/**
					 * <p>"Simple Empty Doc" illustration type.</p>
					 */
					SimpleEmptyDoc = "SimpleEmptyDoc",
					/**
					 * <p>"Simple Empty List" illustration type.</p>
					 */
					SimpleEmptyList = "SimpleEmptyList",
					/**
					 * <p>"Simple Error" illustration type.</p>
					 */
					SimpleError = "SimpleError",
					/**
					 * <p>"Simple Magnifier" illustration type.</p>
					 */
					SimpleMagnifier = "SimpleMagnifier",
					/**
					 * <p>"Simple Mail" illustration type.</p>
					 */
					SimpleMail = "SimpleMail",
					/**
					 * <p>"Simple No Saved Items" illustration type.</p>
					 */
					SimpleNoSavedItems = "SimpleNoSavedItems",
					/**
					 * <p>"Simple Not Found Magnifier" illustration type.</p>
					 */
					SimpleNotFoundMagnifier = "SimpleNotFoundMagnifier",
					/**
					 * <p>"Simple Reload" illustration type.</p>
					 */
					SimpleReload = "SimpleReload",
					/**
					 * <p>"Simple Task" illustration type.</p>
					 */
					SimpleTask = "SimpleTask",
					/**
					 * <p>"Sleeping Bell" illustration type.</p>
					 */
					SleepingBell = "SleepingBell",
					/**
					 * <p>"Sort Column" illustration type.</p>
					 */
					SortColumn = "SortColumn",
					/**
					 * <p>"Success Balloon" illustration type.</p>
					 */
					SuccessBalloon = "SuccessBalloon",
					/**
					 * <p>"Success CheckMark" illustration type.</p>
					 */
					SuccessCheckMark = "SuccessCheckMark",
					/**
					 * <p>"Success HighFive" illustration type.</p>
					 */
					SuccessHighFive = "SuccessHighFive",
					/**
					 * <p>"Success Screen" illustration type.</p>
					 */
					SuccessScreen = "SuccessScreen",
					/**
					 * <p>"Tent" illustration type.</p>
					 */
					Tent = "Tent",
					/**
					 * <p>"TntChartArea" illustration type.</p>
					 */
					TntChartArea = "TntChartArea",
					/**
					 * <p>"TntChartArea2" illustration type.</p>
					 */
					TntChartArea2 = "TntChartArea2",
					/**
					 * <p>"TntChartBar" illustration type.</p>
					 */
					TntChartBar = "TntChartBar",
					/**
					 * <p>"TntChartBPMNFlow" illustration type.</p>
					 */
					TntChartBPMNFlow = "TntChartBPMNFlow",
					/**
					 * <p>"TntChartBullet" illustration type.</p>
					 */
					TntChartBullet = "TntChartBullet",
					/**
					 * <p>"TntChartDoughnut" illustration type.</p>
					 */
					TntChartDoughnut = "TntChartDoughnut",
					/**
					 * <p>"TntChartFlow" illustration type.</p>
					 */
					TntChartFlow = "TntChartFlow",
					/**
					 * <p>"TntChartGantt" illustration type.</p>
					 */
					TntChartGantt = "TntChartGantt",
					/**
					 * <p>"TntChartOrg" illustration type.</p>
					 */
					TntChartOrg = "TntChartOrg",
					/**
					 * <p>"TntChartPie" illustration type.</p>
					 */
					TntChartPie = "TntChartPie",
					/**
					 * <p>"TntCodePlaceholder" illustration type.</p>
					 */
					TntCodePlaceholder = "TntCodePlaceholder",
					/**
					 * <p>"TntCompany" illustration type.</p>
					 */
					TntCompany = "TntCompany",
					/**
					 * <p>"TntComponents" illustration type.</p>
					 */
					TntComponents = "TntComponents",
					/**
					 * <p>"TntExternalLink" illustration type.</p>
					 */
					TntExternalLink = "TntExternalLink",
					/**
					 * <p>"TntFaceID" illustration type.</p>
					 */
					TntFaceID = "TntFaceID",
					/**
					 * <p>"TntFingerprint" illustration type.</p>
					 */
					TntFingerprint = "TntFingerprint",
					/**
					 * <p>"TntLock" illustration type.</p>
					 */
					TntLock = "TntLock",
					/**
					 * <p>"TntMission" illustration type.</p>
					 */
					TntMission = "TntMission",
					/**
					 * <p>"TntNoApplications" illustration type.</p>
					 */
					TntNoApplications = "TntNoApplications",
					/**
					 * <p>"TntNoFlows" illustration type.</p>
					 */
					TntNoFlows = "TntNoFlows",
					/**
					 * <p>"TntNoUsers" illustration type.</p>
					 */
					TntNoUsers = "TntNoUsers",
					/**
					 * <p>"TntRadar" illustration type.</p>
					 */
					TntRadar = "TntRadar",
					/**
					 * <p>"TntSecrets" illustration type.</p>
					 */
					TntSecrets = "TntSecrets",
					/**
					 * <p>"TntServices" illustration type.</p>
					 */
					TntServices = "TntServices",
					/**
					 * <p>"TntSessionExpired" illustration type.</p>
					 */
					TntSessionExpired = "TntSessionExpired",
					/**
					 * <p>"TntSessionExpiring" illustration type.</p>
					 */
					TntSessionExpiring = "TntSessionExpiring",
					/**
					 * <p>"TntSuccess" illustration type.</p>
					 */
					TntSuccess = "TntSuccess",
					/**
					 * <p>"TntSuccessfulAuth" illustration type.</p>
					 */
					TntSuccessfulAuth = "TntSuccessfulAuth",
					/**
					 * <p>"TntSystems" illustration type.</p>
					 */
					TntSystems = "TntSystems",
					/**
					 * <p>"TntTeams" illustration type.</p>
					 */
					TntTeams = "TntTeams",
					/**
					 * <p>"TntTools" illustration type.</p>
					 */
					TntTools = "TntTools",
					/**
					 * <p>"TntUnableToLoad" illustration type.</p>
					 */
					TntUnableToLoad = "TntUnableToLoad",
					/**
					 * <p>"TntUnlock" illustration type.</p>
					 */
					TntUnlock = "TntUnlock",
					/**
					 * <p>"TntUnsuccessfulAuth" illustration type.</p>
					 */
					TntUnsuccessfulAuth = "TntUnsuccessfulAuth",
					/**
					 * <p>"TntUser2" illustration type.</p>
					 */
					TntUser2 = "TntUser2",
					/**
					 * <p>"Unable To Load" illustration type.</p>
					 */
					UnableToLoad = "UnableToLoad",
					/**
					 * <p>"Unable To Load Image" illustration type.</p>
					 */
					UnableToLoadImage = "UnableToLoadImage",
					/**
					 * <p>"Unable To Upload" illustration type.</p>
					 */
					UnableToUpload = "UnableToUpload",
					/**
					 * <p>"Upload Collection" illustration type.</p>
					 */
					UploadCollection = "UploadCollection",
				}
				/**
				 * <p><p>Interface for components that can be slotted inside <code>ui5-media-gallery</code> as items.</p></p>
				 */
				export interface IMediaGalleryItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted as an action inside <code>ui5-li-notification</code> and <code>ui5-li-notification-group</code></p></p>
				 */
				export interface INotificationAction {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside a notification list</p></p>
				 */
				export interface INotificationListItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-product-switch</code> as items</p></p>
				 */
				export interface IProductSwitchItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-shellbar</code> as items</p></p>
				 */
				export interface IShellBarItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-side-navigation</code> as items</p></p>
				 */
				export interface ISideNavigationItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-side-navigation-item</code> as sub-items</p></p>
				 */
				export interface ISideNavigationSubItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-view-settings-dialog</code> as sort items</p></p>
				 */
				export interface ISortItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-timeline</code> as items</p></p>
				 */
				export interface ITimelineItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-upload-collection</code> as items</p></p>
				 */
				export interface IUploadCollectionItem {
				}
				/**
				 * <p><p>Interface for components that may be slotted inside <code>ui5-wizard</code> as wizard steps</p></p>
				 */
				export interface IWizardStep {
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.MediaGallery</code> component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the <code>sap.ui.webc.fiori.MediaGalleryItem</code> component.</p><p>The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size. <br> The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.</p><h3>Keyboard Handling</h3><p> The <code>sap.ui.webc.fiori.MediaGallery</code> provides advanced keyboard handling. <br> When the thumbnails menu is focused the following keyboard shortcuts allow the user to navigate through the thumbnail items: <br></p><p><ul> <li>[UP/DOWN] - Navigates up and down the items</li> <li>[HOME] - Navigates to first item</li> <li>[END] - Navigates to the last item</li> <li>[SPACE/ENTER] - Select an item </ul> <br></p>
				 */
				export class MediaGallery extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>MediaGallery</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IMediaGalleryItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.IMediaGalleryItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/displayAreaClick">displayAreaClick</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.MediaGallery</code> itself.</p><p>Fired when the display area is clicked.<br> The display area is the central area that contains the enlarged content of the currently selected item.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.MediaGallery</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDisplayAreaClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/overflowClick">overflowClick</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.MediaGallery</code> itself.</p><p>Fired when the thumbnails overflow button is clicked.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.MediaGallery</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachOverflowClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.MediaGallery</code> itself.</p><p>Fired when selection is changed by user interaction.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.MediaGallery</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachSelectionChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/displayAreaClick">displayAreaClick</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDisplayAreaClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/overflowClick">overflowClick</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachOverflowClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.MediaGallery</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachSelectionChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/displayAreaClick">displayAreaClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireDisplayAreaClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/overflowClick">overflowClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireOverflowClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#events/selectionChange">selectionChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireSelectionChange(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getInteractiveDisplayArea">interactiveDisplayArea</a>.</p><p>If enabled, a <code>display-area-click</code> event is fired when the user clicks or taps on the display area. <br> The display area is the central area that contains the enlarged content of the currently selected item.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>interactiveDisplayArea</code></p>
					 */
					getInteractiveDisplayArea(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p><p>Defines the component items.</p><p><br> <br> <b>Note:</b> Only one selected item is allowed.</p><p><br> <br> <b>Note:</b> Use the <code>sap.ui.webc.fiori.MediaGalleryItem</code> component to define the desired items.</p>
					 * @returns sap.ui.webc.fiori.IMediaGalleryItem[] 
					 */
					getItems(): sap.ui.webc.fiori.IMediaGalleryItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getLayout">layout</a>.</p><p>Determines the layout of the component. <br> <br> Available options are: <ul> <li><code>Auto</code></li> <li><code>Vertical</code></li> <li><code>Horizontal</code></li> </ul></p><p>Default value is <code>Auto</code>.</p>
					 * @returns sap.ui.webc.fiori.MediaGalleryLayout <p>Value of property <code>layout</code></p>
					 */
					getLayout(): sap.ui.webc.fiori.MediaGalleryLayout;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getMenuHorizontalAlign">menuHorizontalAlign</a>.</p><p>Determines the horizontal alignment of the thumbnails menu vs. the central display area. <br> <br> Available options are: <ul> <li><code>Left</code></li> <li><code>Right</code></li> </ul></p><p>Default value is <code>Left</code>.</p>
					 * @returns sap.ui.webc.fiori.MediaGalleryMenuHorizontalAlign <p>Value of property <code>menuHorizontalAlign</code></p>
					 */
					getMenuHorizontalAlign(): sap.ui.webc.fiori.MediaGalleryMenuHorizontalAlign;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getMenuVerticalAlign">menuVerticalAlign</a>.</p><p>Determines the vertical alignment of the thumbnails menu vs. the central display area. <br> <br> Available options are: <ul> <li><code>Top</code></li> <li><code>Bottom</code></li> </ul></p><p>Default value is <code>Bottom</code>.</p>
					 * @returns sap.ui.webc.fiori.MediaGalleryMenuVerticalAlign <p>Value of property <code>menuVerticalAlign</code></p>
					 */
					getMenuVerticalAlign(): sap.ui.webc.fiori.MediaGalleryMenuVerticalAlign;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getShowAllThumbnails">showAllThumbnails</a>.</p><p>If set to <code>true</code>, all thumbnails are rendered in a scrollable container. If <code>false</code>, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showAllThumbnails</code></p>
					 */
					getShowAllThumbnails(): boolean;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IMediaGalleryItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IMediaGalleryItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.IMediaGalleryItem): number;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IMediaGalleryItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.IMediaGalleryItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IMediaGalleryItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.IMediaGalleryItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IMediaGalleryItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IMediaGalleryItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.IMediaGalleryItem): sap.ui.webc.fiori.IMediaGalleryItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getInteractiveDisplayArea">interactiveDisplayArea</a>.</p><p>If enabled, a <code>display-area-click</code> event is fired when the user clicks or taps on the display area. <br> The display area is the central area that contains the enlarged content of the currently selected item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bInteractiveDisplayArea <p>New value for property <code>interactiveDisplayArea</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setInteractiveDisplayArea(bInteractiveDisplayArea?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getLayout">layout</a>.</p><p>Determines the layout of the component. <br> <br> Available options are: <ul> <li><code>Auto</code></li> <li><code>Vertical</code></li> <li><code>Horizontal</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
					 * @param {sap.ui.webc.fiori.MediaGalleryLayout} sLayout <p>New value for property <code>layout</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLayout(sLayout?: sap.ui.webc.fiori.MediaGalleryLayout): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getMenuHorizontalAlign">menuHorizontalAlign</a>.</p><p>Determines the horizontal alignment of the thumbnails menu vs. the central display area. <br> <br> Available options are: <ul> <li><code>Left</code></li> <li><code>Right</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Left</code>.</p>
					 * @param {sap.ui.webc.fiori.MediaGalleryMenuHorizontalAlign} sMenuHorizontalAlign <p>New value for property <code>menuHorizontalAlign</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMenuHorizontalAlign(sMenuHorizontalAlign?: sap.ui.webc.fiori.MediaGalleryMenuHorizontalAlign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getMenuVerticalAlign">menuVerticalAlign</a>.</p><p>Determines the vertical alignment of the thumbnails menu vs. the central display area. <br> <br> Available options are: <ul> <li><code>Top</code></li> <li><code>Bottom</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Bottom</code>.</p>
					 * @param {sap.ui.webc.fiori.MediaGalleryMenuVerticalAlign} sMenuVerticalAlign <p>New value for property <code>menuVerticalAlign</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMenuVerticalAlign(sMenuVerticalAlign?: sap.ui.webc.fiori.MediaGalleryMenuVerticalAlign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGallery#methods/getShowAllThumbnails">showAllThumbnails</a>.</p><p>If set to <code>true</code>, all thumbnails are rendered in a scrollable container. If <code>false</code>, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowAllThumbnails <p>New value for property <code>showAllThumbnails</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowAllThumbnails(bShowAllThumbnails?: boolean): this;
				}
				/**
				 * <h3>Overview</h3><p> The <code>sap.ui.webc.fiori.MediaGalleryItem</code> web component represents the items displayed in the <code>sap.ui.webc.fiori.MediaGallery</code> web component. <br> <br> <b>Note:</b> <code>sap.ui.webc.fiori.MediaGalleryItem</code> is not supported when used outside of <code>sap.ui.webc.fiori.MediaGallery</code>. <br> <br></p><h3>Keyboard Handling</h3><p> The <code>sap.ui.webc.fiori.MediaGallery</code> provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation: <br></p><p><ul> <li>[SPACE/ENTER/RETURN] - Trigger <code>ui5-click</code> event</li> </ul></p>
				 */
				export class MediaGalleryItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>MediaGalleryItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys the thumbnail in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getThumbnail">thumbnail</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyThumbnail(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getContent">content</a>.</p><p>Defines the content of the component.</p>
					 * @returns sap.ui.core.Control 
					 */
					getContent(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>enabled</code></p>
					 */
					getEnabled(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getLayout">layout</a>.</p><p>Determines the layout of the item container. <br> <br> Available options are: <ul> <li><code>Square</code></li> <li><code>Wide</code></li> </ul></p><p>Default value is <code>Square</code>.</p>
					 * @returns sap.ui.webc.fiori.MediaGalleryItemLayout <p>Value of property <code>layout</code></p>
					 */
					getLayout(): sap.ui.webc.fiori.MediaGalleryItemLayout;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getSelected">selected</a>.</p><p>Defines the selected state of the component.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getThumbnail">thumbnail</a>.</p><p>Defines the content of the thumbnail.</p>
					 * @returns sap.ui.core.Control 
					 */
					getThumbnail(): sap.ui.core.Control;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEnabled(bEnabled?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getLayout">layout</a>.</p><p>Determines the layout of the item container. <br> <br> Available options are: <ul> <li><code>Square</code></li> <li><code>Wide</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Square</code>.</p>
					 * @param {sap.ui.webc.fiori.MediaGalleryItemLayout} sLayout <p>New value for property <code>layout</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLayout(sLayout?: sap.ui.webc.fiori.MediaGalleryItemLayout): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getSelected">selected</a>.</p><p>Defines the selected state of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.MediaGalleryItem#methods/getThumbnail">thumbnail</a>.</p>
					 * @param {sap.ui.core.Control} oThumbnail <p>The thumbnail to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setThumbnail(oThumbnail: sap.ui.core.Control): this;
				}
				/**
				 * <p><p>Defines the layout of the content displayed in the <code>ui5-media-gallery-item</code>.</p></p>
				 */
				export enum MediaGalleryItemLayout {
					/**
					 * <p>Recommended to use when the item contains an image.<br> When a thumbnail is selected, it makes the corresponding enlarged content appear in a square display area.</p>
					 */
					Square = "Square",
					/**
					 * <p>Recommended to use when the item contains video content.<br> When a thumbnail is selected, it makes the corresponding enlarged content appear in a wide display area (stretched to fill all of the available width) for optimal user experiance.</p>
					 */
					Wide = "Wide",
				}
				/**
				 * <p><p>Defines the layout type of the thumbnails list of the <code>ui5-media-gallery</code> component.</p></p>
				 */
				export enum MediaGalleryLayout {
					/**
					 * <p>The layout is determined automatically.</p>
					 */
					Auto = "Auto",
					/**
					 * <p>Displays the layout as a horizontal split between the thumbnails list and the selected image.</p>
					 */
					Horizontal = "Horizontal",
					/**
					 * <p>Displays the layout as a vertical split between the thumbnails list and the selected image.</p>
					 */
					Vertical = "Vertical",
				}
				/**
				 * <p><p>Defines the horizontal alignment of the thumbnails menu of the <code>ui5-media-gallery</code> component.</p></p>
				 */
				export enum MediaGalleryMenuHorizontalAlign {
					/**
					 * <p>Displays the menu on the left side of the target.</p>
					 */
					Left = "Left",
					/**
					 * <p>Displays the menu on the right side of the target.</p>
					 */
					Right = "Right",
				}
				/**
				 * <p><p>Types for the vertical alignment of the thumbnails menu of the <code>ui5-media-gallery</code> component.</p></p>
				 */
				export enum MediaGalleryMenuVerticalAlign {
					/**
					 * <p>Displays the menu at the bottom of the reference control.</p>
					 */
					Bottom = "Bottom",
					/**
					 * <p>Displays the menu at the top of the reference control.</p>
					 */
					Top = "Top",
				}
				/**
				 * <p>The <code>sap.ui.webc.fiori.NotificationAction</code> represents an abstract action, used in the <code>sap.ui.webc.fiori.NotificationListItem</code> and the <code>sap.ui.webc.fiori.NotificationListGroupItem</code> items.</p>
				 */
				export class NotificationAction extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>NotificationAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getDesign">design</a>.</p><p>Defines the action design.</p><p><br> <br> <b>Note:</b> <ul> <li><code>Default</code></li> <li><code>Emphasized</code></li> <li><code>Positive</code></li> <li><code>Negative</code></li> <li><code>Transparent</code></li> </ul></p><p>Default value is <code>Transparent</code>.</p>
					 * @returns sap.ui.webc.main.ButtonDesign <p>Value of property <code>design</code></p>
					 */
					getDesign(): sap.ui.webc.main.ButtonDesign;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>enabled</code></p>
					 */
					getEnabled(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getIcon">icon</a>.</p><p>Defines the <code>icon</code> source URI. <br> <br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getText">text</a>.</p><p>Defines the text of the <code>sap.ui.webc.fiori.NotificationAction</code>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getDesign">design</a>.</p><p>Defines the action design.</p><p><br> <br> <b>Note:</b> <ul> <li><code>Default</code></li> <li><code>Emphasized</code></li> <li><code>Positive</code></li> <li><code>Negative</code></li> <li><code>Transparent</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Transparent</code>.</p>
					 * @param {sap.ui.webc.main.ButtonDesign} sDesign <p>New value for property <code>design</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDesign(sDesign?: sap.ui.webc.main.ButtonDesign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEnabled(bEnabled?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getIcon">icon</a>.</p><p>Defines the <code>icon</code> source URI. <br> <br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationAction#methods/getText">text</a>.</p><p>Defines the text of the <code>sap.ui.webc.fiori.NotificationAction</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <h3>Overview</h3><p> The <code>sap.ui.webc.fiori.NotificationListGroupItem</code> is a special type of list item, that unlike others can group items within self, usually <code>sap.ui.webc.fiori.NotificationListItem</code> items. <br></p><p>The component consists of: <ul> <li><code>Toggle</code> button to expand and collapse the group</li> <li><code>Priority</code> icon to display the priority of the group</li> <li><code>TitleText</code> to entitle the group</li> <li>Custom actions - with the use of <code>sap.ui.webc.fiori.NotificationAction</code></li> <li>Items of the group</li> </ul></p><h3>Usage</h3><p> The component can be used in a standard <code>sap.ui.webc.main.List</code>.</p><h3>CSS Shadow Parts</h3><p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
							title="Information published on non SAP site" class="sapUISDKExternalLink"/> allow developers to style elements inside the Shadow DOM. <br> The <code>sap.ui.webc.fiori.NotificationListGroupItem</code> exposes the following CSS Shadow Parts: <ul> <li>title-text - Used to style the titleText of the notification list group item</li> </ul></p>
				 */
				export class NotificationListGroupItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>NotificationListGroupItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some action to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addAction(oAction: sap.ui.webc.fiori.INotificationAction): this;
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationListItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.INotificationListItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/close">close</a> event of this <code>sap.ui.webc.fiori.NotificationListGroupItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.NotificationListGroupItem</code> itself.</p><p>Fired when the <code>Close</code> button is pressed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.NotificationListGroupItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachClose(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/toggle">toggle</a> event of this <code>sap.ui.webc.fiori.NotificationListGroupItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.NotificationListGroupItem</code> itself.</p><p>Fired when the <code>sap.ui.webc.fiori.NotificationListGroupItem</code> is expanded/collapsed by user interaction.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.NotificationListGroupItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachToggle(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the actions in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyActions(): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/close">close</a> event of this <code>sap.ui.webc.fiori.NotificationListGroupItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachClose(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/toggle">toggle</a> event of this <code>sap.ui.webc.fiori.NotificationListGroupItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachToggle(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/close">close</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireClose(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#events/toggle">toggle</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireToggle(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p><p>Defines the actions, displayed in the top-right area. <br> <br> <b>Note:</b> use the <code>sap.ui.webc.fiori.NotificationAction</code> component.</p>
					 * @returns sap.ui.webc.fiori.INotificationAction[] 
					 */
					getActions(): sap.ui.webc.fiori.INotificationAction[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getBusy">busy</a>.</p><p>Defines if a busy indicator would be displayed over the item.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>busy</code></p>
					 */
					getBusy(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getBusyDelay">busyDelay</a>.</p><p>Defines the delay in milliseconds, after which the busy indicator will show up for this component.</p><p>Default value is <code>1000</code>.</p>
					 * @returns number <p>Value of property <code>busyDelay</code></p>
					 */
					getBusyDelay(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getCollapsed">collapsed</a>.</p><p>Defines if the group is collapsed or expanded.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>collapsed</code></p>
					 */
					getCollapsed(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p><p>Defines the items of the <code>sap.ui.webc.fiori.NotificationListGroupItem</code>, usually <code>sap.ui.webc.fiori.NotificationListItem</code> items.</p>
					 * @returns sap.ui.webc.fiori.INotificationListItem[] 
					 */
					getItems(): sap.ui.webc.fiori.INotificationListItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getPriority">priority</a>.</p><p>Defines the <code>priority</code> of the item. Available options are: <ul> <li><code>None</code></li> <li><code>Low</code></li> <li><code>Medium</code></li> <li><code>High</code></li> </ul></p><p>Default value is <code>None</code>.</p>
					 * @returns sap.ui.webc.main.Priority <p>Value of property <code>priority</code></p>
					 */
					getPriority(): sap.ui.webc.main.Priority;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getRead">read</a>.</p><p>Defines if the <code>notification</code> is new or has been already read. <br> <br> <b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font, if set to true - it has a normal font.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>read</code></p>
					 */
					getRead(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getShowClose">showClose</a>.</p><p>Defines if the <code>close</code> button would be displayed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showClose</code></p>
					 */
					getShowClose(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getShowCounter">showCounter</a>.</p><p>Defines if the items <code>counter</code> would be displayed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showCounter</code></p>
					 */
					getShowCounter(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the item.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.INotificationAction</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfAction(oAction: sap.ui.webc.fiori.INotificationAction): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.INotificationListItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.INotificationListItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.INotificationListItem): number;
					/**
					 * <p>Inserts a action into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertAction(oAction: sap.ui.webc.fiori.INotificationAction, iIndex: number): this;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationListItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.INotificationListItem, iIndex: number): this;
					/**
					 * <p>Removes a action from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.INotificationAction} vAction <p>The action to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.INotificationAction|null <p>The removed action or <code>null</code></p>
					 */
					removeAction(vAction: number | string | sap.ui.webc.fiori.INotificationAction): sap.ui.webc.fiori.INotificationAction | null;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.INotificationAction[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllActions(): sap.ui.webc.fiori.INotificationAction[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.INotificationListItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.INotificationListItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.INotificationListItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.INotificationListItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.INotificationListItem): sap.ui.webc.fiori.INotificationListItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getBusy">busy</a>.</p><p>Defines if a busy indicator would be displayed over the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bBusy <p>New value for property <code>busy</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBusy(bBusy?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getBusyDelay">busyDelay</a>.</p><p>Defines the delay in milliseconds, after which the busy indicator will show up for this component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1000</code>.</p>
					 * @param {number} iBusyDelay <p>New value for property <code>busyDelay</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBusyDelay(iBusyDelay?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getCollapsed">collapsed</a>.</p><p>Defines if the group is collapsed or expanded.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bCollapsed <p>New value for property <code>collapsed</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setCollapsed(bCollapsed?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getPriority">priority</a>.</p><p>Defines the <code>priority</code> of the item. Available options are: <ul> <li><code>None</code></li> <li><code>Low</code></li> <li><code>Medium</code></li> <li><code>High</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
					 * @param {sap.ui.webc.main.Priority} sPriority <p>New value for property <code>priority</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPriority(sPriority?: sap.ui.webc.main.Priority): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getRead">read</a>.</p><p>Defines if the <code>notification</code> is new or has been already read. <br> <br> <b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font, if set to true - it has a normal font.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bRead <p>New value for property <code>read</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRead(bRead?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getShowClose">showClose</a>.</p><p>Defines if the <code>close</code> button would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowClose <p>New value for property <code>showClose</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowClose(bShowClose?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getShowCounter">showCounter</a>.</p><p>Defines if the items <code>counter</code> would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowCounter <p>New value for property <code>showCounter</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowCounter(bShowCounter?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListGroupItem#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
				}
				/**
				 * <h3>Overview</h3><p> The <code>sap.ui.webc.fiori.NotificationListItem</code> is a type of list item, meant to display notifications. <br></p><p>The component has a rich set of various properties that allows the user to set <code>avatar</code>, <code>titleText</code>, descriptive <code>content</code> and <code>footnotes</code> to fully describe a notification. <br></p><p>The user can: <ul> <li>display a <code>Close</code> button</li> <li>can control whether the <code>titleText</code> and <code>description</code> should wrap or truncate and display a <code>ShowMore</code> button to switch between less and more information</li> <li>add custom actions by using the <code>sap.ui.webc.fiori.NotificationAction</code> component</li> </ul></p><h3>Usage</h3><p> The component can be used in a standard <code>sap.ui.webc.main.List</code>.</p><h3>CSS Shadow Parts</h3><p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
							title="Information published on non SAP site" class="sapUISDKExternalLink"/> allow developers to style elements inside the Shadow DOM. <br> The <code>sap.ui.webc.fiori.NotificationListItem</code> exposes the following CSS Shadow Parts: <ul> <li>title-text - Used to style the titleText of the notification list item</li> </ul></p>
				 */
				export class NotificationListItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>NotificationListItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some action to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addAction(oAction: sap.ui.webc.fiori.INotificationAction): this;
					/**
					 * <p>Adds some footnote to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p>
					 * @param {sap.ui.core.Control} oFootnote <p>The footnote to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addFootnote(oFootnote: sap.ui.core.Control): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#events/close">close</a> event of this <code>sap.ui.webc.fiori.NotificationListItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.NotificationListItem</code> itself.</p><p>Fired when the <code>Close</code> button is pressed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.NotificationListItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachClose(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the actions in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyActions(): this;
					/**
					 * <p>Destroys the avatar in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getAvatar">avatar</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyAvatar(): this;
					/**
					 * <p>Destroys all the footnotes in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyFootnotes(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#events/close">close</a> event of this <code>sap.ui.webc.fiori.NotificationListItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachClose(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#events/close">close</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireClose(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p><p>Defines the actions, displayed in the top-right area. <br> <br> <b>Note:</b> use the <code>sap.ui.webc.fiori.NotificationAction</code> component.</p>
					 * @returns sap.ui.webc.fiori.INotificationAction[] 
					 */
					getActions(): sap.ui.webc.fiori.INotificationAction[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getAvatar">avatar</a>.</p><p>Defines the avatar, displayed in the <code>sap.ui.webc.fiori.NotificationListItem</code>.</p><p><br> <br> <b>Note:</b> Consider using the <code>sap.ui.webc.main.Avatar</code> to display icons, initials or images. <br> <b>Note:</b>In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the <code>sap.ui.webc.main.Avatar</code> you can set its <code>size</code> property to <code>XS</code> to get the required size - <code>&lt;ui5-avatar size="XS">&lt;/ui5-avatar></code>.</p>
					 * @returns sap.ui.webc.main.IAvatar 
					 */
					getAvatar(): sap.ui.webc.main.IAvatar;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getBusy">busy</a>.</p><p>Defines if a busy indicator would be displayed over the item.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>busy</code></p>
					 */
					getBusy(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getBusyDelay">busyDelay</a>.</p><p>Defines the delay in milliseconds, after which the busy indicator will show up for this component.</p><p>Default value is <code>1000</code>.</p>
					 * @returns number <p>Value of property <code>busyDelay</code></p>
					 */
					getBusyDelay(): number;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getDescription">description</a>.</p><p>Defines the content of the control</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>description</code></p>
					 */
					getDescription(): string;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p><p>Defines the elements, displayed in the footer of the of the component.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getFootnotes(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getPriority">priority</a>.</p><p>Defines the <code>priority</code> of the item. Available options are: <ul> <li><code>None</code></li> <li><code>Low</code></li> <li><code>Medium</code></li> <li><code>High</code></li> </ul></p><p>Default value is <code>None</code>.</p>
					 * @returns sap.ui.webc.main.Priority <p>Value of property <code>priority</code></p>
					 */
					getPriority(): sap.ui.webc.main.Priority;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getRead">read</a>.</p><p>Defines if the <code>notification</code> is new or has been already read. <br> <br> <b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font, if set to true - it has a normal font.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>read</code></p>
					 */
					getRead(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getShowClose">showClose</a>.</p><p>Defines if the <code>close</code> button would be displayed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showClose</code></p>
					 */
					getShowClose(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the item.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getWrappingType">wrappingType</a>.</p><p>Defines if the <code>titleText</code> and <code>description</code> should wrap, they truncate by default.</p><p><br> <br> <b>Note:</b> by default the <code>titleText</code> and <code>decription</code>, and a <code>ShowMore/Less</code> button would be displayed.</p><p>Default value is <code>None</code>.</p>
					 * @returns sap.ui.webc.main.WrappingType <p>Value of property <code>wrappingType</code></p>
					 */
					getWrappingType(): sap.ui.webc.main.WrappingType;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.INotificationAction</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfAction(oAction: sap.ui.webc.fiori.INotificationAction): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oFootnote <p>The footnote whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfFootnote(oFootnote: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a action into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p>
					 * @param {sap.ui.webc.fiori.INotificationAction} oAction <p>The action to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertAction(oAction: sap.ui.webc.fiori.INotificationAction, iIndex: number): this;
					/**
					 * <p>Inserts a footnote into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p>
					 * @param {sap.ui.core.Control} oFootnote <p>The footnote to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the footnote should be inserted at; for a negative value of <code>iIndex</code>, the footnote is inserted at position 0; for a value greater than the current size of the aggregation, the footnote is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertFootnote(oFootnote: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes a action from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.INotificationAction} vAction <p>The action to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.INotificationAction|null <p>The removed action or <code>null</code></p>
					 */
					removeAction(vAction: number | string | sap.ui.webc.fiori.INotificationAction): sap.ui.webc.fiori.INotificationAction | null;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.INotificationAction[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllActions(): sap.ui.webc.fiori.INotificationAction[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllFootnotes(): sap.ui.core.Control[];
					/**
					 * <p>Removes a footnote from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getFootnotes">footnotes</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vFootnote <p>The footnote to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed footnote or <code>null</code></p>
					 */
					removeFootnote(vFootnote: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getAvatar">avatar</a>.</p>
					 * @param {sap.ui.webc.main.IAvatar} oAvatar <p>The avatar to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAvatar(oAvatar: sap.ui.webc.main.IAvatar): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getBusy">busy</a>.</p><p>Defines if a busy indicator would be displayed over the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bBusy <p>New value for property <code>busy</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBusy(bBusy?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getBusyDelay">busyDelay</a>.</p><p>Defines the delay in milliseconds, after which the busy indicator will show up for this component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1000</code>.</p>
					 * @param {number} iBusyDelay <p>New value for property <code>busyDelay</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBusyDelay(iBusyDelay?: number): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getDescription">description</a>.</p><p>Defines the content of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sDescription <p>New value for property <code>description</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDescription(sDescription?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getPriority">priority</a>.</p><p>Defines the <code>priority</code> of the item. Available options are: <ul> <li><code>None</code></li> <li><code>Low</code></li> <li><code>Medium</code></li> <li><code>High</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
					 * @param {sap.ui.webc.main.Priority} sPriority <p>New value for property <code>priority</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPriority(sPriority?: sap.ui.webc.main.Priority): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getRead">read</a>.</p><p>Defines if the <code>notification</code> is new or has been already read. <br> <br> <b>Note:</b> if set to <code>false</code> the <code>titleText</code> has bold font, if set to true - it has a normal font.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bRead <p>New value for property <code>read</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setRead(bRead?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getShowClose">showClose</a>.</p><p>Defines if the <code>close</code> button would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowClose <p>New value for property <code>showClose</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowClose(bShowClose?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.NotificationListItem#methods/getWrappingType">wrappingType</a>.</p><p>Defines if the <code>titleText</code> and <code>description</code> should wrap, they truncate by default.</p><p><br> <br> <b>Note:</b> by default the <code>titleText</code> and <code>decription</code>, and a <code>ShowMore/Less</code> button would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
					 * @param {sap.ui.webc.main.WrappingType} sWrappingType <p>New value for property <code>wrappingType</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWrappingType(sWrappingType?: sap.ui.webc.main.WrappingType): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.Page</code> is a container component that holds one whole screen of an application. The page has three distinct areas that can hold content - a header, content area and a footer. </p><h3>Structure</h3><h4>Header</h4><p> The top most area of the page is occupied by the header. The standard header includes a navigation button and a title. </p><h4>Content</h4><p> The content occupies the main part of the page. Only the content area is scrollable by default. This can be prevented by setting <code>enableScrolling</code> to <code>false</code>. </p><h4>Footer</h4><p> The footer is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating above the bottom part of the content. This is enabled with the <code>floatingFooter</code> property.</p><p><b>Note:</b> <code>sap.ui.webc.fiori.Page</code> occipues the whole available space of its parent. In order to achieve the intended design you have to make sure that there is enough space for the <code>sap.ui.webc.fiori.Page</code> to be rendered.</p>
				 */
				export class Page extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>Page</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys the footer in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getFooter">footer</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyFooter(): this;
					/**
					 * <p>Destroys the header in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHeader">header</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyHeader(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Defines the background color of the <code>sap.ui.webc.fiori.Page</code>. <br> <br> <b>Note:</b> When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast. <br> <br> Available options are: <ul> <li><code>Solid</code></li> (default) <li><code>Transparent</code></li> <li><code>List</code></li> </ul></p><p>Default value is <code>Solid</code>.</p>
					 * @returns sap.ui.webc.fiori.PageBackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
					 */
					getBackgroundDesign(): sap.ui.webc.fiori.PageBackgroundDesign;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p><p>Defines the content HTML Element.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getDisableScrolling">disableScrolling</a>.</p><p>Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>disableScrolling</code></p>
					 */
					getDisableScrolling(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getFloatingFooter">floatingFooter</a>.</p><p>Defines if the footer should float over the content. <br> <br> <b>Note:</b> When set to true the footer floats over the content with a slight offset from the bottom, otherwise it is fixed at the very bottom of the page.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>floatingFooter</code></p>
					 */
					getFloatingFooter(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getFooter">footer</a>.</p><p>Defines the footer HTML Element.</p>
					 * @returns sap.ui.webc.fiori.IBar 
					 */
					getFooter(): sap.ui.webc.fiori.IBar;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHeader">header</a>.</p><p>Defines the header HTML Element.</p>
					 * @returns sap.ui.webc.fiori.IBar 
					 */
					getHeader(): sap.ui.webc.fiori.IBar;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHeight">height</a>.</p><p>Defines the height of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
					 */
					getHeight(): sap.ui.core.CSSSize;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHideFooter">hideFooter</a>.</p><p>Defines the footer visibility.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideFooter</code></p>
					 */
					getHideFooter(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getWidth">width</a>.</p><p>Defines the width of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfContent(oContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getContent">content</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
					 */
					removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Defines the background color of the <code>sap.ui.webc.fiori.Page</code>. <br> <br> <b>Note:</b> When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast. <br> <br> Available options are: <ul> <li><code>Solid</code></li> (default) <li><code>Transparent</code></li> <li><code>List</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Solid</code>.</p>
					 * @param {sap.ui.webc.fiori.PageBackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBackgroundDesign(sBackgroundDesign?: sap.ui.webc.fiori.PageBackgroundDesign): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getDisableScrolling">disableScrolling</a>.</p><p>Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bDisableScrolling <p>New value for property <code>disableScrolling</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDisableScrolling(bDisableScrolling?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getFloatingFooter">floatingFooter</a>.</p><p>Defines if the footer should float over the content. <br> <br> <b>Note:</b> When set to true the footer floats over the content with a slight offset from the bottom, otherwise it is fixed at the very bottom of the page.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bFloatingFooter <p>New value for property <code>floatingFooter</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFloatingFooter(bFloatingFooter?: boolean): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getFooter">footer</a>.</p>
					 * @param {sap.ui.webc.fiori.IBar} oFooter <p>The footer to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFooter(oFooter: sap.ui.webc.fiori.IBar): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHeader">header</a>.</p>
					 * @param {sap.ui.webc.fiori.IBar} oHeader <p>The header to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeader(oHeader: sap.ui.webc.fiori.IBar): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHeight">height</a>.</p><p>Defines the height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeight(sHeight: sap.ui.core.CSSSize): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getHideFooter">hideFooter</a>.</p><p>Defines the footer visibility.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideFooter <p>New value for property <code>hideFooter</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideFooter(bHideFooter?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Page#methods/getWidth">width</a>.</p><p>Defines the width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth: sap.ui.core.CSSSize): this;
				}
				/**
				 * <p><p>undefined</p></p>
				 */
				export enum PageBackgroundDesign {
					/**
					 * <p>Page background color when a List is set as the Page content.</p>
					 */
					List = "List",
					/**
					 * <p>A solid background color dependent on the theme.</p>
					 */
					Solid = "Solid",
					/**
					 * <p>Transparent background for the page.</p>
					 */
					Transparent = "Transparent",
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.ProductSwitch</code> is an SAP Fiori specific web component that is used in <code>sap.ui.webc.fiori.ShellBar</code> and allows the user to easily switch between products. <br> <br></p><h3>Keyboard Handling</h3><p> The <code>sap.ui.webc.fiori.ProductSwitch</code> provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation: <br></p><p><ul> <li>[TAB] - Move focus to the next interactive element after the <code>sap.ui.webc.fiori.ProductSwitch</code></li> <li>[UP/DOWN] - Navigates up and down the items </li> <li>[LEFT/RIGHT] - Navigates left and right the items</li> </ul> <br> <br></p>
				 */
				export class ProductSwitch extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>ProductSwitch</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IProductSwitchItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.IProductSwitchItem): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p><p>Defines the items of the <code>sap.ui.webc.fiori.ProductSwitch</code>.</p>
					 * @returns sap.ui.webc.fiori.IProductSwitchItem[] 
					 */
					getItems(): sap.ui.webc.fiori.IProductSwitchItem[];
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IProductSwitchItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IProductSwitchItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.IProductSwitchItem): number;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IProductSwitchItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.IProductSwitchItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IProductSwitchItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.IProductSwitchItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitch#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IProductSwitchItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IProductSwitchItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.IProductSwitchItem): sap.ui.webc.fiori.IProductSwitchItem | null;
				}
				/**
				 * <h3>Overview</h3><p> The <code>sap.ui.webc.fiori.ProductSwitchItem</code> web component represents the items displayed in the <code>sap.ui.webc.fiori.ProductSwitch</code> web component. <br> <br> <b>Note:</b> <code>sap.ui.webc.fiori.ProductSwitchItem</code> is not supported when used outside of <code>sap.ui.webc.fiori.ProductSwitch</code>. <br> <br></p><h3>Keyboard Handling</h3><p> The <code>sap.ui.webc.fiori.ProductSwitch</code> provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation: <br></p><p><ul> <li>[SPACE/ENTER/RETURN] - Trigger <code>ui5-click</code> event</li> </ul></p>
				 */
				export class ProductSwitchItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>ProductSwitchItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#events/click">click</a> event of this <code>sap.ui.webc.fiori.ProductSwitchItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ProductSwitchItem</code> itself.</p><p>Fired when the <code>sap.ui.webc.fiori.ProductSwitchItem</code> is activated either with a click/tap or by using the Enter or Space key.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ProductSwitchItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#events/click">click</a> event of this <code>sap.ui.webc.fiori.ProductSwitchItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#events/click">click</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireClick(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getIcon">icon</a>.</p><p>Defines the icon to be displayed as a graphical element within the component. <br> <br> Example: <br> <pre>ui5-product-switch-item icon="palette"</pre></p><p>See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>subtitleText</code></p>
					 */
					getSubtitleText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTarget">target</a>.</p><p>Defines a target where the <code>targetSrc</code> content must be open. <br> <br> Available options are: <ul> <li><code>_self</code></li> <li><code>_top</code></li> <li><code>_blank</code></li> <li><code>_parent</code></li> <li><code>_search</code></li> </ul></p><p>Default value is <code>"_self"</code>.</p>
					 * @returns string <p>Value of property <code>target</code></p>
					 */
					getTarget(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTargetSrc">targetSrc</a>.</p><p>Defines the component target URI. Supports standard hyperlink behavior.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>targetSrc</code></p>
					 */
					getTargetSrc(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTitleText">titleText</a>.</p><p>Defines the title of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getIcon">icon</a>.</p><p>Defines the icon to be displayed as a graphical element within the component. <br> <br> Example: <br> <pre>ui5-product-switch-item icon="palette"</pre></p><p>See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sSubtitleText <p>New value for property <code>subtitleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSubtitleText(sSubtitleText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTarget">target</a>.</p><p>Defines a target where the <code>targetSrc</code> content must be open. <br> <br> Available options are: <ul> <li><code>_self</code></li> <li><code>_top</code></li> <li><code>_blank</code></li> <li><code>_parent</code></li> <li><code>_search</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"_self"</code>.</p>
					 * @param {string} sTarget <p>New value for property <code>target</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTarget(sTarget?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTargetSrc">targetSrc</a>.</p><p>Defines the component target URI. Supports standard hyperlink behavior.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTargetSrc <p>New value for property <code>targetSrc</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTargetSrc(sTargetSrc?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ProductSwitchItem#methods/getTitleText">titleText</a>.</p><p>Defines the title of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.ShellBar</code> is meant to serve as an application header and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on. <br> <br></p><h3>Stable DOM Refs</h3><p>You can use the following stable DOM refs for the <code>sap.ui.webc.fiori.ShellBar</code>: <ul> <li>logo</li> <li>copilot</li> <li>notifications</li> <li>overflow</li> <li>profile</li> <li>product-switch</li> </ul></p><h3>CSS Shadow Parts</h3><p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</a>
							<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
							title="Information published on non SAP site" class="sapUISDKExternalLink"/> allow developers to style elements inside the Shadow DOM. <br> The <code>sap.ui.webc.fiori.ShellBar</code> exposes the following CSS Shadow Parts: <ul> <li>root - Used to style the outermost wrapper of the <code>sap.ui.webc.fiori.ShellBar</code></li> </ul></p><h3>Keyboard Handling</h3>
				 */
				export class ShellBar extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>ShellBar</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IShellBarItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.IShellBarItem): this;
					/**
					 * <p>Adds some menuItem to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p>
					 * @param {sap.ui.webc.main.IListItem} oMenuItem <p>The menuItem to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addMenuItem(oMenuItem: sap.ui.webc.main.IListItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/coPilotClick">coPilotClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when the co pilot is activated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachCoPilotClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/logoClick">logoClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when the logo is activated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachLogoClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/menuItemClick">menuItemClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when a menu item is activated <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachMenuItemClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/notificationsClick">notificationsClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when the notification icon is activated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachNotificationsClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/productSwitchClick">productSwitchClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when the product switch icon is activated. <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachProductSwitchClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/profileClick">profileClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBar</code> itself.</p><p>Fired, when the profile slot is present.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBar</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachProfileClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event</p>
					 */
					closeOverflow(): void;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Destroys the logo in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getLogo">logo</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyLogo(): this;
					/**
					 * <p>Destroys all the menuItems in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyMenuItems(): this;
					/**
					 * <p>Destroys the profile in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getProfile">profile</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyProfile(): this;
					/**
					 * <p>Destroys the searchField in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getSearchField">searchField</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroySearchField(): this;
					/**
					 * <p>Destroys the startButton in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getStartButton">startButton</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyStartButton(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/coPilotClick">coPilotClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachCoPilotClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/logoClick">logoClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachLogoClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/menuItemClick">menuItemClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachMenuItemClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/notificationsClick">notificationsClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachNotificationsClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/productSwitchClick">productSwitchClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachProductSwitchClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/profileClick">profileClick</a> event of this <code>sap.ui.webc.fiori.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachProfileClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/coPilotClick">coPilotClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireCoPilotClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/logoClick">logoClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireLogoClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/menuItemClick">menuItemClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireMenuItemClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/notificationsClick">notificationsClick</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireNotificationsClick(mParameters?: any): boolean;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/productSwitchClick">productSwitchClick</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireProductSwitchClick(mParameters?: any): boolean;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#events/profileClick">profileClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireProfileClick(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getAccessibilityTexts">accessibilityTexts</a>.</p><p>An object of strings that defines several additional accessibility texts for even further customization.</p><p>It supports the following fields: - <code>profileButtonTitle</code>: defines the tooltip for the profile button - <code>logoTitle</code>: defines the tooltip for the logo</p><p>Default value is <code>{}</code>.</p>
					 * @returns any <p>Value of property <code>accessibilityTexts</code></p>
					 */
					getAccessibilityTexts(): any;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p><p>Defines the <code>sap.ui.webc.fiori.ShellBar</code> aditional items. <br> <br> <b>Note:</b> You can use the &lt;ui5-shellbar-item>&lt;/ui5-shellbar-item>.</p>
					 * @returns sap.ui.webc.fiori.IShellBarItem[] 
					 */
					getItems(): sap.ui.webc.fiori.IShellBarItem[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getLogo">logo</a>.</p><p>Defines the logo of the <code>sap.ui.webc.fiori.ShellBar</code>. For example, you can use <code>sap.ui.webc.main.Avatar</code> or <code>img</code> elements as logo.</p>
					 * @returns sap.ui.webc.main.IAvatar 
					 */
					getLogo(): sap.ui.webc.main.IAvatar;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p><p>Defines the items displayed in menu after a click on the primary title. <br> <br> <b>Note:</b> You can use the &lt;ui5-li>&lt;/ui5-li> and its ancestors.</p>
					 * @returns sap.ui.webc.main.IListItem[] 
					 */
					getMenuItems(): sap.ui.webc.main.IListItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getNotificationsCount">notificationsCount</a>.</p><p>Defines the <code>notificationsCount</code>, displayed in the notification icon top-right corner.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>notificationsCount</code></p>
					 */
					getNotificationsCount(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getPrimaryTitle">primaryTitle</a>.</p><p>Defines the <code>primaryTitle</code>. <br> <br> <b>Note:</b> The <code>primaryTitle</code> would be hidden on S screen size (less than approx. 700px).</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>primaryTitle</code></p>
					 */
					getPrimaryTitle(): string;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getProfile">profile</a>.</p><p>You can pass <code>sap.ui.webc.main.Avatar</code> to set the profile image/icon. If no profile slot is set - profile will be excluded from actions.</p><p>Note: We recommend not using the <code>size</code> attribute of <code>sap.ui.webc.main.Avatar</code> because it should have specific size by design in the context of <code>sap.ui.webc.fiori.ShellBar</code> profile.</p>
					 * @returns sap.ui.webc.main.IAvatar 
					 */
					getProfile(): sap.ui.webc.main.IAvatar;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getSearchField">searchField</a>.</p><p>Defines the <code>sap.ui.webc.main.Input</code>, that will be used as a search field.</p>
					 * @returns sap.ui.webc.main.IInput 
					 */
					getSearchField(): sap.ui.webc.main.IInput;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getSecondaryTitle">secondaryTitle</a>.</p><p>Defines the <code>secondaryTitle</code>. <br> <br> <b>Note:</b> The <code>secondaryTitle</code> would be hidden on S and M screen sizes (less than approx. 1300px).</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>secondaryTitle</code></p>
					 */
					getSecondaryTitle(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowCoPilot">showCoPilot</a>.</p><p>Defines, if the product CoPilot icon would be displayed. <br> <b>Note:</b> By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you can import the <code>"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"</code> module as add-on feature.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showCoPilot</code></p>
					 */
					getShowCoPilot(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowNotifications">showNotifications</a>.</p><p>Defines, if the notification icon would be displayed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showNotifications</code></p>
					 */
					getShowNotifications(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowProductSwitch">showProductSwitch</a>.</p><p>Defines, if the product switch icon would be displayed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>showProductSwitch</code></p>
					 */
					getShowProductSwitch(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getStartButton">startButton</a>.</p><p>Defines a <code>sap.ui.webc.main.Button</code> in the bar that will be placed in the beginning. We encourage this slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.</p>
					 * @returns sap.ui.webc.main.IButton 
					 */
					getStartButton(): sap.ui.webc.main.IButton;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IShellBarItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IShellBarItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.IShellBarItem): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.main.IListItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.main.IListItem} oMenuItem <p>The menuItem whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfMenuItem(oMenuItem: sap.ui.webc.main.IListItem): number;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IShellBarItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.IShellBarItem, iIndex: number): this;
					/**
					 * <p>Inserts a menuItem into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p>
					 * @param {sap.ui.webc.main.IListItem} oMenuItem <p>The menuItem to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the menuItem should be inserted at; for a negative value of <code>iIndex</code>, the menuItem is inserted at position 0; for a value greater than the current size of the aggregation, the menuItem is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertMenuItem(oMenuItem: sap.ui.webc.main.IListItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IShellBarItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.IShellBarItem[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.main.IListItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllMenuItems(): sap.ui.webc.main.IListItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IShellBarItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IShellBarItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.IShellBarItem): sap.ui.webc.fiori.IShellBarItem | null;
					/**
					 * <p>Removes a menuItem from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getMenuItems">menuItems</a>.</p>
					 * @param {number | string | sap.ui.webc.main.IListItem} vMenuItem <p>The menuItem to remove or its index or id</p>
					 * @returns sap.ui.webc.main.IListItem|null <p>The removed menuItem or <code>null</code></p>
					 */
					removeMenuItem(vMenuItem: number | string | sap.ui.webc.main.IListItem): sap.ui.webc.main.IListItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getAccessibilityTexts">accessibilityTexts</a>.</p><p>An object of strings that defines several additional accessibility texts for even further customization.</p><p>It supports the following fields: - <code>profileButtonTitle</code>: defines the tooltip for the profile button - <code>logoTitle</code>: defines the tooltip for the logo</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>{}</code>.</p>
					 * @param {any} oAccessibilityTexts <p>New value for property <code>accessibilityTexts</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAccessibilityTexts(oAccessibilityTexts?: any): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getLogo">logo</a>.</p>
					 * @param {sap.ui.webc.main.IAvatar} oLogo <p>The logo to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLogo(oLogo: sap.ui.webc.main.IAvatar): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getNotificationsCount">notificationsCount</a>.</p><p>Defines the <code>notificationsCount</code>, displayed in the notification icon top-right corner.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sNotificationsCount <p>New value for property <code>notificationsCount</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setNotificationsCount(sNotificationsCount?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getPrimaryTitle">primaryTitle</a>.</p><p>Defines the <code>primaryTitle</code>. <br> <br> <b>Note:</b> The <code>primaryTitle</code> would be hidden on S screen size (less than approx. 700px).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sPrimaryTitle <p>New value for property <code>primaryTitle</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setPrimaryTitle(sPrimaryTitle?: string): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getProfile">profile</a>.</p>
					 * @param {sap.ui.webc.main.IAvatar} oProfile <p>The profile to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setProfile(oProfile: sap.ui.webc.main.IAvatar): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getSearchField">searchField</a>.</p>
					 * @param {sap.ui.webc.main.IInput} oSearchField <p>The searchField to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSearchField(oSearchField: sap.ui.webc.main.IInput): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getSecondaryTitle">secondaryTitle</a>.</p><p>Defines the <code>secondaryTitle</code>. <br> <br> <b>Note:</b> The <code>secondaryTitle</code> would be hidden on S and M screen sizes (less than approx. 1300px).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sSecondaryTitle <p>New value for property <code>secondaryTitle</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSecondaryTitle(sSecondaryTitle?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowCoPilot">showCoPilot</a>.</p><p>Defines, if the product CoPilot icon would be displayed. <br> <b>Note:</b> By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you can import the <code>"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"</code> module as add-on feature.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowCoPilot <p>New value for property <code>showCoPilot</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowCoPilot(bShowCoPilot?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowNotifications">showNotifications</a>.</p><p>Defines, if the notification icon would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowNotifications <p>New value for property <code>showNotifications</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowNotifications(bShowNotifications?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getShowProductSwitch">showProductSwitch</a>.</p><p>Defines, if the product switch icon would be displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bShowProductSwitch <p>New value for property <code>showProductSwitch</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setShowProductSwitch(bShowProductSwitch?: boolean): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.ShellBar#methods/getStartButton">startButton</a>.</p>
					 * @param {sap.ui.webc.main.IButton} oStartButton <p>The startButton to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setStartButton(oStartButton: sap.ui.webc.main.IButton): this;
				}
				/**
				 */
				export class ShellBarItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>ShellBarItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#events/click">click</a> event of this <code>sap.ui.webc.fiori.ShellBarItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ShellBarItem</code> itself.</p><p>Fired, when the item is pressed.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ShellBarItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#events/click">click</a> event of this <code>sap.ui.webc.fiori.ShellBarItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#events/click">click</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireClick(mParameters?: any): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getCount">count</a>.</p><p>Defines the count displayed in the top-right corner.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>count</code></p>
					 */
					getCount(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getIcon">icon</a>.</p><p>Defines the name of the item's icon.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getText">text</a>.</p><p>Defines the item text.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getCount">count</a>.</p><p>Defines the count displayed in the top-right corner.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sCount <p>New value for property <code>count</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setCount(sCount?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getIcon">icon</a>.</p><p>Defines the name of the item's icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ShellBarItem#methods/getText">text</a>.</p><p>Defines the item text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <p><p>SideContent FallDown options.</p></p>
				 */
				export enum SideContentFallDown {
					/**
					 * <p>Side content falls down on breakpoints below L</p>
					 */
					BelowL = "BelowL",
					/**
					 * <p>Side content falls down on breakpoints below M</p>
					 */
					BelowM = "BelowM",
					/**
					 * <p>Side content falls down on breakpoints below XL</p>
					 */
					BelowXL = "BelowXL",
					/**
					 * <p>Side content falls down on breakpoint M and the minimum width for the side content</p>
					 */
					OnMinimumWidth = "OnMinimumWidth",
				}
				/**
				 * <p><p>Side Content position options.</p></p>
				 */
				export enum SideContentPosition {
					/**
					 * <p>The side content is on the right side of the main container in left-to-right mode and on the left side in right-to-left mode.</p>
					 */
					End = "End",
					/**
					 * <p>The side content is on the left side of the main container in left-to-right mode and on the right side in right-to-left mode.</p>
					 */
					Start = "Start",
				}
				/**
				 * <p><p>Side Content visibility options.</p></p>
				 */
				export enum SideContentVisibility {
					/**
					 * <p>Show the side content on any breakpoint</p>
					 */
					AlwaysShow = "AlwaysShow",
					/**
					 * <p>Don't show the side content on any breakpoints</p>
					 */
					NeverShow = "NeverShow",
					/**
					 * <p>Show the side content on XL breakpoint</p>
					 */
					ShowAboveL = "ShowAboveL",
					/**
					 * <p>Show the side content on L and XL breakpoints</p>
					 */
					ShowAboveM = "ShowAboveM",
					/**
					 * <p>Show the side content on M, L and XL breakpoints</p>
					 */
					ShowAboveS = "ShowAboveS",
				}
				/**
				 * <h3>Overview</h3><p>The <code>SideNavigation</code> is used as a standard menu in applications. It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned). <ul> <li>The header is meant for displaying user related information - profile data, avatar, etc.</li> <li>The main navigation section is related to the user’s current work context</li> <li>The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on). </li> </ul></p><h3>Usage</h3><p>Use the available <code>sap.ui.webc.fiori.SideNavigationItem</code> and <code>sap.ui.webc.fiori.SideNavigationSubItem</code> components to build your menu. The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level. You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.</p><h3>Keyboard Handling</h3>
				 */
				export class SideNavigation extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>SideNavigation</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some fixedItem to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oFixedItem <p>The fixedItem to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addFixedItem(oFixedItem: sap.ui.webc.fiori.ISideNavigationItem): this;
					/**
					 * <p>Adds some header to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addHeader(oHeader: sap.ui.core.Control): this;
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.ISideNavigationItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.SideNavigation</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.SideNavigation</code> itself.</p><p>Fired when the selection has changed via user interaction</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.SideNavigation</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachSelectionChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the fixedItems in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyFixedItems(): this;
					/**
					 * <p>Destroys all the header in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyHeader(): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.SideNavigation</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachSelectionChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#events/selectionChange">selectionChange</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns boolean <p>Whether or not to prevent the default action</p>
					 */
					protected fireSelectionChange(mParameters?: any): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getCollapsed">collapsed</a>.</p><p>Defines whether the <code>sap.ui.webc.fiori.SideNavigation</code> is expanded or collapsed.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>collapsed</code></p>
					 */
					getCollapsed(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p><p>Defines the fixed items at the bottom of the <code>sap.ui.webc.fiori.SideNavigation</code>. Use the <code>sap.ui.webc.fiori.SideNavigationItem</code> component for the fixed items, and optionally the <code>sap.ui.webc.fiori.SideNavigationSubItem</code> component to provide second-level items inside them.</p><p><b>Note:</b> In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem[] 
					 */
					getFixedItems(): sap.ui.webc.fiori.ISideNavigationItem[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p><p>Defines the header of the <code>sap.ui.webc.fiori.SideNavigation</code>.</p><p><br> <br> <b>Note:</b> The header is displayed when the component is expanded - the property <code>collapsed</code> is false;</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getHeader(): sap.ui.core.Control[];
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p><p>Defines the main items of the <code>sap.ui.webc.fiori.SideNavigation</code>. Use the <code>sap.ui.webc.fiori.SideNavigationItem</code> component for the top-level items, and the <code>sap.ui.webc.fiori.SideNavigationSubItem</code> component for second-level items, nested inside the items.</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem[] 
					 */
					getItems(): sap.ui.webc.fiori.ISideNavigationItem[];
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.ISideNavigationItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oFixedItem <p>The fixedItem whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfFixedItem(oFixedItem: sap.ui.webc.fiori.ISideNavigationItem): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfHeader(oHeader: sap.ui.core.Control): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.ISideNavigationItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.ISideNavigationItem): number;
					/**
					 * <p>Inserts a fixedItem into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oFixedItem <p>The fixedItem to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the fixedItem should be inserted at; for a negative value of <code>iIndex</code>, the fixedItem is inserted at position 0; for a value greater than the current size of the aggregation, the fixedItem is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertFixedItem(oFixedItem: sap.ui.webc.fiori.ISideNavigationItem, iIndex: number): this;
					/**
					 * <p>Inserts a header into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the header should be inserted at; for a negative value of <code>iIndex</code>, the header is inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertHeader(oHeader: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.ISideNavigationItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllFixedItems(): sap.ui.webc.fiori.ISideNavigationItem[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllHeader(): sap.ui.core.Control[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.ISideNavigationItem[];
					/**
					 * <p>Removes a fixedItem from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getFixedItems">fixedItems</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.ISideNavigationItem} vFixedItem <p>The fixedItem to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem|null <p>The removed fixedItem or <code>null</code></p>
					 */
					removeFixedItem(vFixedItem: number | string | sap.ui.webc.fiori.ISideNavigationItem): sap.ui.webc.fiori.ISideNavigationItem | null;
					/**
					 * <p>Removes a header from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getHeader">header</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vHeader <p>The header to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed header or <code>null</code></p>
					 */
					removeHeader(vHeader: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.ISideNavigationItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.ISideNavigationItem): sap.ui.webc.fiori.ISideNavigationItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigation#methods/getCollapsed">collapsed</a>.</p><p>Defines whether the <code>sap.ui.webc.fiori.SideNavigation</code> is expanded or collapsed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bCollapsed <p>New value for property <code>collapsed</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setCollapsed(bCollapsed?: boolean): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.SideNavigationItem</code> is used within <code>sap.ui.webc.fiori.SideNavigation</code> only. Via the <code>sap.ui.webc.fiori.SideNavigationItem</code> you control the content of the <code>SideNavigation</code>.</p>
				 */
				export class SideNavigationItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>SideNavigationItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationSubItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.ISideNavigationSubItem): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getExpanded">expanded</a>.</p><p>Defines if the item is expanded</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>expanded</code></p>
					 */
					getExpanded(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item. <br> <br></p><p>The SAP-icons font provides numerous options. <br> See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p><p>If you wish to nest menus, you can pass inner menu items to the default slot.</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationSubItem[] 
					 */
					getItems(): sap.ui.webc.fiori.ISideNavigationSubItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getSelected">selected</a>.</p><p>Defines whether the subitem is selected</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getText">text</a>.</p><p>Defines the text of the item.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getWholeItemToggleable">wholeItemToggleable</a>.</p><p>Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the <code>click</code> event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>wholeItemToggleable</code></p>
					 */
					getWholeItemToggleable(): boolean;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.ISideNavigationSubItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationSubItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.ISideNavigationSubItem): number;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ISideNavigationSubItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.ISideNavigationSubItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationSubItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.ISideNavigationSubItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.ISideNavigationSubItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.ISideNavigationSubItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.ISideNavigationSubItem): sap.ui.webc.fiori.ISideNavigationSubItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getExpanded">expanded</a>.</p><p>Defines if the item is expanded</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bExpanded <p>New value for property <code>expanded</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setExpanded(bExpanded?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item. <br> <br></p><p>The SAP-icons font provides numerous options. <br> See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getSelected">selected</a>.</p><p>Defines whether the subitem is selected</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getText">text</a>.</p><p>Defines the text of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationItem#methods/getWholeItemToggleable">wholeItemToggleable</a>.</p><p>Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the <code>click</code> event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bWholeItemToggleable <p>New value for property <code>wholeItemToggleable</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWholeItemToggleable(bWholeItemToggleable?: boolean): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.SideNavigationSubItem</code> is intended to be used inside a <code>sap.ui.webc.fiori.SideNavigationItem</code> only.</p>
				 */
				export class SideNavigationSubItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>SideNavigationSubItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item. <br> <br></p><p>The SAP-icons font provides numerous options. <br> See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getSelected">selected</a>.</p><p>Defines whether the subitem is selected.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getText">text</a>.</p><p>Defines the text of the item.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getIcon">icon</a>.</p><p>Defines the icon of the item. <br> <br></p><p>The SAP-icons font provides numerous options. <br> See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getSelected">selected</a>.</p><p>Defines whether the subitem is selected.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SideNavigationSubItem#methods/getText">text</a>.</p><p>Defines the text of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <h3>Overview</h3><h3>Usage</h3>
				 */
				export class SortItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>SortItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SortItem#methods/getSelected">selected</a>.</p><p>Defines if the component is selected.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.SortItem#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>text</code></p>
					 */
					getText(): string;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SortItem#methods/getSelected">selected</a>.</p><p>Defines if the component is selected.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.SortItem#methods/getText">text</a>.</p><p>Defines the text of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sText <p>New value for property <code>text</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setText(sText?: string): this;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.Timeline</code> component shows entries (such as objects, events, or posts) in chronological order. A common use case is to provide information about changes to an object, or events related to an object. These entries can be generated by the system (for example, value XY changed from A to B), or added manually. There are two distinct variants of the timeline: basic and social. The basic timeline is read-only, while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.</p>
				 */
				export class Timeline extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>Timeline</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ITimelineItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.ITimelineItem): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getAccessibleName">accessibleName</a>.</p><p>Defines the accessible aria name of the component.</p>
					 * @returns string <p>Value of property <code>accessibleName</code></p>
					 */
					getAccessibleName(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getHeight">height</a>.</p><p>Defines the height of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
					 */
					getHeight(): sap.ui.core.CSSSize;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p><p>Determines the content of the <code>sap.ui.webc.fiori.Timeline</code>.</p>
					 * @returns sap.ui.webc.fiori.ITimelineItem[] 
					 */
					getItems(): sap.ui.webc.fiori.ITimelineItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getLayout">layout</a>.</p><p>Defines the items orientation.</p><p><br> <br> <b>Note:</b> Available options are: <ul> <li><code>Vertical</code></li> <li><code>Horizontal</code></li> </ul></p><p>Default value is <code>Vertical</code>.</p>
					 * @returns sap.ui.webc.fiori.TimelineLayout <p>Value of property <code>layout</code></p>
					 */
					getLayout(): sap.ui.webc.fiori.TimelineLayout;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getWidth">width</a>.</p><p>Defines the width of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.ITimelineItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.ITimelineItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.ITimelineItem): number;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.ITimelineItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.ITimelineItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.ITimelineItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.ITimelineItem[];
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.ITimelineItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.ITimelineItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.ITimelineItem): sap.ui.webc.fiori.ITimelineItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getAccessibleName">accessibleName</a>.</p><p>Defines the accessible aria name of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {string} sAccessibleName <p>New value for property <code>accessibleName</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAccessibleName(sAccessibleName: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getHeight">height</a>.</p><p>Defines the height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeight(sHeight: sap.ui.core.CSSSize): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getLayout">layout</a>.</p><p>Defines the items orientation.</p><p><br> <br> <b>Note:</b> Available options are: <ul> <li><code>Vertical</code></li> <li><code>Horizontal</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Vertical</code>.</p>
					 * @param {sap.ui.webc.fiori.TimelineLayout} sLayout <p>New value for property <code>layout</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setLayout(sLayout?: sap.ui.webc.fiori.TimelineLayout): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Timeline#methods/getWidth">width</a>.</p><p>Defines the width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth: sap.ui.core.CSSSize): this;
				}
				/**
				 * <h3>Overview</h3><p>An entry posted on the timeline.</p>
				 */
				export class TimelineItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>TimelineItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#events/nameClick">nameClick</a> event of this <code>sap.ui.webc.fiori.TimelineItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.TimelineItem</code> itself.</p><p>Fired when the item name is pressed either with a click/tap or by using the Enter or Space key. <br> <br> <b>Note:</b> The event will not be fired if the <code>name-clickable</code> attribute is not set.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.TimelineItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachNameClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#events/nameClick">nameClick</a> event of this <code>sap.ui.webc.fiori.TimelineItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachNameClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#events/nameClick">nameClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireNameClick(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p><p>Determines the description of the <code>sap.ui.webc.fiori.TimelineItem</code>.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getIcon">icon</a>.</p><p>Defines the icon to be displayed as graphical element within the <code>sap.ui.webc.fiori.TimelineItem</code>. SAP-icons font provides numerous options. <br> <br></p><p>See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getName">name</a>.</p><p>Defines the name of the item, displayed before the <code>title-text</code>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>name</code></p>
					 */
					getName(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getNameClickable">nameClickable</a>.</p><p>Defines if the <code>name</code> is clickable.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>nameClickable</code></p>
					 */
					getNameClickable(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle text of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>subtitleText</code></p>
					 */
					getSubtitleText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getTitleText">titleText</a>.</p><p>Defines the title text of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfContent(oContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getContent">content</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
					 */
					removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getIcon">icon</a>.</p><p>Defines the icon to be displayed as graphical element within the <code>sap.ui.webc.fiori.TimelineItem</code>. SAP-icons font provides numerous options. <br> <br></p><p>See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getName">name</a>.</p><p>Defines the name of the item, displayed before the <code>title-text</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sName <p>New value for property <code>name</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setName(sName?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getNameClickable">nameClickable</a>.</p><p>Defines if the <code>name</code> is clickable.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bNameClickable <p>New value for property <code>nameClickable</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setNameClickable(bNameClickable?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the subtitle text of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sSubtitleText <p>New value for property <code>subtitleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSubtitleText(sSubtitleText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.TimelineItem#methods/getTitleText">titleText</a>.</p><p>Defines the title text of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
				}
				/**
				 * <p><p>Different types of Timeline.</p></p>
				 */
				export enum TimelineLayout {
					/**
					 * <p>Horizontal layout</p>
					 */
					Horizontal = "Horizontal",
					/**
					 * <p>Vertical layout Default type</p>
					 */
					Vertical = "Vertical",
				}
				/**
				 * <h3>Overview</h3><p> This component allows you to represent files before uploading them to a server, with the help of <code>sap.ui.webc.fiori.UploadCollectionItem</code>. It also allows you to show already uploaded files.</p>
				 */
				export class UploadCollection extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>UploadCollection</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some header to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addHeader(oHeader: sap.ui.core.Control): this;
					/**
					 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IUploadCollectionItem} oItem <p>The item to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addItem(oItem: sap.ui.webc.fiori.IUploadCollectionItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/drop">drop</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollection</code> itself.</p><p>Fired when an element is dropped inside the drag and drop overlay. <br> <br> <b>Note:</b> The <code>drop</code> event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the <code>sap.ui.webc.fiori.UploadCollection</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollection</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachDrop(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/itemDelete">itemDelete</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollection</code> itself.</p><p>Fired when the Delete button of any item is pressed. <br> <br> <b>Note:</b> A Delete button is displayed on each item, when the <code>sap.ui.webc.fiori.UploadCollection</code> <code>mode</code> property is set to <code>Delete</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollection</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachItemDelete(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollection</code> itself.</p><p>Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollection</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachSelectionChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the header in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyHeader(): this;
					/**
					 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyItems(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/drop">drop</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachDrop(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/itemDelete">itemDelete</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachItemDelete(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/selectionChange">selectionChange</a> event of this <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachSelectionChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/drop">drop</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireDrop(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/itemDelete">itemDelete</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireItemDelete(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#events/selectionChange">selectionChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireSelectionChange(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getAccessibleName">accessibleName</a>.</p><p>Defines the accessible aria name of the component.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>accessibleName</code></p>
					 */
					getAccessibleName(): string;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p><p>Defines the <code>sap.ui.webc.fiori.UploadCollection</code> header. <br> <br> <b>Note:</b> If <code>header</code> slot is provided, the labelling of the <code>UploadCollection</code> is a responsibility of the application developer. <code>accessibleName</code> should be used.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getHeader(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeight">height</a>.</p><p>Defines the height of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
					 */
					getHeight(): sap.ui.core.CSSSize;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHideDragOverlay">hideDragOverlay</a>.</p><p>By default there will be drag and drop overlay shown over the <code>sap.ui.webc.fiori.UploadCollection</code> when files are dragged. If you don't intend to use drag and drop, set this property. <br> <br> <b>Note:</b> It is up to the application developer to add handler for <code>drop</code> event and handle it. <code>sap.ui.webc.fiori.UploadCollection</code> only displays an overlay.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideDragOverlay</code></p>
					 */
					getHideDragOverlay(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p><p>Defines the items of the <code>sap.ui.webc.fiori.UploadCollection</code>. <br> <b>Note:</b> Use <code>sap.ui.webc.fiori.UploadCollectionItem</code> for the intended design.</p>
					 * @returns sap.ui.webc.fiori.IUploadCollectionItem[] 
					 */
					getItems(): sap.ui.webc.fiori.IUploadCollectionItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getMode">mode</a>.</p><p>Defines the mode of the <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p><br> <br> <b>Note:</b> <ul> <li><code>None</code></li> <li><code>SingleSelect</code></li> <li><code>MultiSelect</code></li> <li><code>Delete</code></li> </ul></p><p>Default value is <code>None</code>.</p>
					 * @returns sap.ui.webc.main.ListMode <p>Value of property <code>mode</code></p>
					 */
					getMode(): sap.ui.webc.main.ListMode;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getNoDataDescription">noDataDescription</a>.</p><p>Allows you to set your own text for the 'No data' description.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>noDataDescription</code></p>
					 */
					getNoDataDescription(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getNoDataText">noDataText</a>.</p><p>Allows you to set your own text for the 'No data' text.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>noDataText</code></p>
					 */
					getNoDataText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getWidth">width</a>.</p><p>Defines the width of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
					 */
					getWidth(): sap.ui.core.CSSSize;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfHeader(oHeader: sap.ui.core.Control): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IUploadCollectionItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IUploadCollectionItem} oItem <p>The item whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfItem(oItem: sap.ui.webc.fiori.IUploadCollectionItem): number;
					/**
					 * <p>Inserts a header into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p>
					 * @param {sap.ui.core.Control} oHeader <p>The header to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the header should be inserted at; for a negative value of <code>iIndex</code>, the header is inserted at position 0; for a value greater than the current size of the aggregation, the header is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertHeader(oHeader: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p>
					 * @param {sap.ui.webc.fiori.IUploadCollectionItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertItem(oItem: sap.ui.webc.fiori.IUploadCollectionItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllHeader(): sap.ui.core.Control[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IUploadCollectionItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllItems(): sap.ui.webc.fiori.IUploadCollectionItem[];
					/**
					 * <p>Removes a header from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeader">header</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vHeader <p>The header to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed header or <code>null</code></p>
					 */
					removeHeader(vHeader: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getItems">items</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IUploadCollectionItem} vItem <p>The item to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IUploadCollectionItem|null <p>The removed item or <code>null</code></p>
					 */
					removeItem(vItem: number | string | sap.ui.webc.fiori.IUploadCollectionItem): sap.ui.webc.fiori.IUploadCollectionItem | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getAccessibleName">accessibleName</a>.</p><p>Defines the accessible aria name of the component.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sAccessibleName <p>New value for property <code>accessibleName</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setAccessibleName(sAccessibleName?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHeight">height</a>.</p><p>Defines the height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeight(sHeight: sap.ui.core.CSSSize): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getHideDragOverlay">hideDragOverlay</a>.</p><p>By default there will be drag and drop overlay shown over the <code>sap.ui.webc.fiori.UploadCollection</code> when files are dragged. If you don't intend to use drag and drop, set this property. <br> <br> <b>Note:</b> It is up to the application developer to add handler for <code>drop</code> event and handle it. <code>sap.ui.webc.fiori.UploadCollection</code> only displays an overlay.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideDragOverlay <p>New value for property <code>hideDragOverlay</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideDragOverlay(bHideDragOverlay?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getMode">mode</a>.</p><p>Defines the mode of the <code>sap.ui.webc.fiori.UploadCollection</code>.</p><p><br> <br> <b>Note:</b> <ul> <li><code>None</code></li> <li><code>SingleSelect</code></li> <li><code>MultiSelect</code></li> <li><code>Delete</code></li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
					 * @param {sap.ui.webc.main.ListMode} sMode <p>New value for property <code>mode</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setMode(sMode?: sap.ui.webc.main.ListMode): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getNoDataDescription">noDataDescription</a>.</p><p>Allows you to set your own text for the 'No data' description.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sNoDataDescription <p>New value for property <code>noDataDescription</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setNoDataDescription(sNoDataDescription?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getNoDataText">noDataText</a>.</p><p>Allows you to set your own text for the 'No data' text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sNoDataText <p>New value for property <code>noDataText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setNoDataText(sNoDataText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollection#methods/getWidth">width</a>.</p><p>Defines the width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setWidth(sWidth: sap.ui.core.CSSSize): this;
				}
				/**
				 * <h3>Overview</h3><p> A component to be used within the <code>sap.ui.webc.fiori.UploadCollection</code>.</p>
				 */
				export class UploadCollectionItem extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>UploadCollectionItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/fileNameClick">fileNameClick</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself.</p><p>Fired when the file name is clicked. <br> <br> <b>Note:</b> This event is only available when <code>fileNameClickable</code> property is <code>true</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachFileNameClick(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/rename">rename</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself.</p><p>Fired when the <code>fileName</code> property gets changed. <br> <br> <b>Note:</b> An edit button is displayed on each item, when the <code>sap.ui.webc.fiori.UploadCollectionItem</code> <code>type</code> property is set to <code>Detail</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachRename(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/retry">retry</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself.</p><p>Fired when the retry button is pressed. <br> <br> <b>Note:</b> Retry button is displayed when <code>uploadState</code> property is set to <code>Error</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachRetry(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/terminate">terminate</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself.</p><p>Fired when the terminate button is pressed. <br> <br> <b>Note:</b> Terminate button is displayed when <code>uploadState</code> property is set to <code>Uploading</code>.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.UploadCollectionItem</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachTerminate(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Destroys the thumbnail in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getThumbnail">thumbnail</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyThumbnail(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/fileNameClick">fileNameClick</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachFileNameClick(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/rename">rename</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachRename(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/retry">retry</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachRetry(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/terminate">terminate</a> event of this <code>sap.ui.webc.fiori.UploadCollectionItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachTerminate(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/fileNameClick">fileNameClick</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireFileNameClick(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/rename">rename</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireRename(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/retry">retry</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireRetry(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#events/terminate">terminate</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireTerminate(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p><p>Hold the description of the <code>sap.ui.webc.fiori.UploadCollectionItem</code>. Will be shown below the file name.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getDisableDeleteButton">disableDeleteButton</a>.</p><p>Disables the delete button.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>disableDeleteButton</code></p>
					 */
					getDisableDeleteButton(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFile">file</a>.</p><p>Holds an instance of <code>File</code> associated with this item.</p>
					 * @returns any <p>Value of property <code>file</code></p>
					 */
					getFile(): any;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFileName">fileName</a>.</p><p>The name of the file.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>fileName</code></p>
					 */
					getFileName(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFileNameClickable">fileNameClickable</a>.</p><p>If set to <code>true</code> the file name will be clickable and it will fire <code>file-name-click</code> event upon click.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>fileNameClickable</code></p>
					 */
					getFileNameClickable(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getHideRetryButton">hideRetryButton</a>.</p><p>Hides the retry button when <code>uploadState</code> property is <code>Error</code>.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideRetryButton</code></p>
					 */
					getHideRetryButton(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getHideTerminateButton">hideTerminateButton</a>.</p><p>Hides the terminate button when <code>uploadState</code> property is <code>Uploading</code>.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>hideTerminateButton</code></p>
					 */
					getHideTerminateButton(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getProgress">progress</a>.</p><p>The upload progress in percentage. <br> <br> <b>Note:</b> Expected values are in the interval [0, 100].</p><p>Default value is <code>0</code>.</p>
					 * @returns number <p>Value of property <code>progress</code></p>
					 */
					getProgress(): number;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getThumbnail">thumbnail</a>.</p><p>A thumbnail, which will be shown in the beginning of the <code>sap.ui.webc.fiori.UploadCollectionItem</code>. <br> <br> <b>Note:</b> Use <code>sap.ui.webc.main.Icon</code> or <code>img</code> for the intended design.</p>
					 * @returns sap.ui.core.Control 
					 */
					getThumbnail(): sap.ui.core.Control;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getUploadState">uploadState</a>.</p><p>If set to <code>Uploading</code> or <code>Error</code>, a progress indicator showing the <code>progress</code> is displayed. Also if set to <code>Error</code>, a refresh button is shown. When this icon is pressed <code>retry</code> event is fired. If set to <code>Uploading</code>, a terminate button is shown. When this icon is pressed <code>terminate</code> event is fired.</p><p>Default value is <code>Ready</code>.</p>
					 * @returns sap.ui.webc.fiori.UploadState <p>Value of property <code>uploadState</code></p>
					 */
					getUploadState(): sap.ui.webc.fiori.UploadState;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfContent(oContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getContent">content</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
					 */
					removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getDisableDeleteButton">disableDeleteButton</a>.</p><p>Disables the delete button.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bDisableDeleteButton <p>New value for property <code>disableDeleteButton</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setDisableDeleteButton(bDisableDeleteButton?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFile">file</a>.</p><p>Holds an instance of <code>File</code> associated with this item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {any} oFile <p>New value for property <code>file</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFile(oFile?: any): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFileName">fileName</a>.</p><p>The name of the file.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sFileName <p>New value for property <code>fileName</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFileName(sFileName?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getFileNameClickable">fileNameClickable</a>.</p><p>If set to <code>true</code> the file name will be clickable and it will fire <code>file-name-click</code> event upon click.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bFileNameClickable <p>New value for property <code>fileNameClickable</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setFileNameClickable(bFileNameClickable?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getHideRetryButton">hideRetryButton</a>.</p><p>Hides the retry button when <code>uploadState</code> property is <code>Error</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideRetryButton <p>New value for property <code>hideRetryButton</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideRetryButton(bHideRetryButton?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getHideTerminateButton">hideTerminateButton</a>.</p><p>Hides the terminate button when <code>uploadState</code> property is <code>Uploading</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bHideTerminateButton <p>New value for property <code>hideTerminateButton</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHideTerminateButton(bHideTerminateButton?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getProgress">progress</a>.</p><p>The upload progress in percentage. <br> <br> <b>Note:</b> Expected values are in the interval [0, 100].</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
					 * @param {number} iProgress <p>New value for property <code>progress</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setProgress(iProgress?: number): this;
					/**
					 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getThumbnail">thumbnail</a>.</p>
					 * @param {sap.ui.core.Control} oThumbnail <p>The thumbnail to set</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setThumbnail(oThumbnail: sap.ui.core.Control): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.UploadCollectionItem#methods/getUploadState">uploadState</a>.</p><p>If set to <code>Uploading</code> or <code>Error</code>, a progress indicator showing the <code>progress</code> is displayed. Also if set to <code>Error</code>, a refresh button is shown. When this icon is pressed <code>retry</code> event is fired. If set to <code>Uploading</code>, a terminate button is shown. When this icon is pressed <code>terminate</code> event is fired.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Ready</code>.</p>
					 * @param {sap.ui.webc.fiori.UploadState} sUploadState <p>New value for property <code>uploadState</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setUploadState(sUploadState?: sap.ui.webc.fiori.UploadState): this;
				}
				/**
				 * <p><p>undefined</p></p>
				 */
				export enum UploadState {
					/**
					 * <p>The file has been uploaded successfully.</p>
					 */
					Complete = "Complete",
					/**
					 * <p>The file cannot be uploaded due to an error.</p>
					 */
					Error = "Error",
					/**
					 * <p>The file is awaiting an explicit command to start being uploaded.</p>
					 */
					Ready = "Ready",
					/**
					 * <p>The file is currently being uploaded.</p>
					 */
					Uploading = "Uploading",
				}
				/**
				 * <h3>Overview</h3><p> The <code>sap.ui.webc.fiori.ViewSettingsDialog</code> component helps the user to sort data within a list or a table. It consists of several lists like <code>Sort order</code> which is built-in and <code>Sort By</code> and <code>Filter By</code> lists, for which you must be provide items(<code>sap.ui.webc.fiori.SortItem</code> & <code>sap.ui.webc.fiori.FilterItem</code> respectively) These options can be used to create sorters for a table.</p><p>The <code>sap.ui.webc.fiori.ViewSettingsDialog</code> interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The <code>sap.ui.webc.fiori.ViewSettingsDialog</code> is modal, which means that user action is required before returning to the parent window is possible.</p><h3>Structure</h3><p> A <code>sap.ui.webc.fiori.ViewSettingsDialog</code> consists of a header, content, and a footer for action buttons. The <code>sap.ui.webc.fiori.ViewSettingsDialog</code> is usually displayed at the center of the screen.</p><h3>Responsive Behavior</h3><p> <code>sap.ui.webc.fiori.ViewSettingsDialog</code> stretches on full screen on phones.</p>
				 */
				export class ViewSettingsDialog extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>ViewSettingsDialog</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some filterItem to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p>
					 * @param {sap.ui.webc.fiori.IFilterItem} oFilterItem <p>The filterItem to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addFilterItem(oFilterItem: sap.ui.webc.fiori.IFilterItem): this;
					/**
					 * <p>Adds some sortItem to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p>
					 * @param {sap.ui.webc.fiori.ISortItem} oSortItem <p>The sortItem to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addSortItem(oSortItem: sap.ui.webc.fiori.ISortItem): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/beforeOpen">beforeOpen</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself.</p><p>Fired before the component is opened. <b>This event does not bubble.</b></p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachBeforeOpen(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/cancel">cancel</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself.</p><p>Fired when cancel button is activated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachCancel(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/confirm">confirm</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself.</p><p>Fired when confirmation button is activated.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.ViewSettingsDialog</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachConfirm(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the filterItems in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyFilterItems(): this;
					/**
					 * <p>Destroys all the sortItems in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroySortItems(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/beforeOpen">beforeOpen</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachBeforeOpen(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/cancel">cancel</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachCancel(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/confirm">confirm</a> event of this <code>sap.ui.webc.fiori.ViewSettingsDialog</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachConfirm(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/beforeOpen">beforeOpen</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireBeforeOpen(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/cancel">cancel</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireCancel(mParameters?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#events/confirm">confirm</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireConfirm(mParameters?: any): this;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p>
					 * @returns sap.ui.webc.fiori.IFilterItem[] 
					 */
					getFilterItems(): sap.ui.webc.fiori.IFilterItem[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortDescending">sortDescending</a>.</p><p>Defines the initial sort order.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>sortDescending</code></p>
					 */
					getSortDescending(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p>
					 * @returns sap.ui.webc.fiori.ISortItem[] 
					 */
					getSortItems(): sap.ui.webc.fiori.ISortItem[];
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IFilterItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IFilterItem} oFilterItem <p>The filterItem whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfFilterItem(oFilterItem: sap.ui.webc.fiori.IFilterItem): number;
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.ISortItem</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.ISortItem} oSortItem <p>The sortItem whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfSortItem(oSortItem: sap.ui.webc.fiori.ISortItem): number;
					/**
					 * <p>Inserts a filterItem into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p>
					 * @param {sap.ui.webc.fiori.IFilterItem} oFilterItem <p>The filterItem to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the filterItem should be inserted at; for a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertFilterItem(oFilterItem: sap.ui.webc.fiori.IFilterItem, iIndex: number): this;
					/**
					 * <p>Inserts a sortItem into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p>
					 * @param {sap.ui.webc.fiori.ISortItem} oSortItem <p>The sortItem to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the sortItem should be inserted at; for a negative value of <code>iIndex</code>, the sortItem is inserted at position 0; for a value greater than the current size of the aggregation, the sortItem is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertSortItem(oSortItem: sap.ui.webc.fiori.ISortItem, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IFilterItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllFilterItems(): sap.ui.webc.fiori.IFilterItem[];
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.ISortItem[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllSortItems(): sap.ui.webc.fiori.ISortItem[];
					/**
					 * <p>Removes a filterItem from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getFilterItems">filterItems</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IFilterItem} vFilterItem <p>The filterItem to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IFilterItem|null <p>The removed filterItem or <code>null</code></p>
					 */
					removeFilterItem(vFilterItem: number | string | sap.ui.webc.fiori.IFilterItem): sap.ui.webc.fiori.IFilterItem | null;
					/**
					 * <p>Removes a sortItem from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortItems">sortItems</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.ISortItem} vSortItem <p>The sortItem to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.ISortItem|null <p>The removed sortItem or <code>null</code></p>
					 */
					removeSortItem(vSortItem: number | string | sap.ui.webc.fiori.ISortItem): sap.ui.webc.fiori.ISortItem | null;
					/**
					 * <p>Sets a JavaScript object, as settings to the <code>sap.ui.webc.fiori.ViewSettingsDialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>sap.ui.webc.fiori.ViewSettingsDialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code>{ { "sortOrder" : "Ascending", "sortBy" : "Name", "filters" : [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} }</code></p>
					 * @param {string} settings <p>A value to be set as predefined settings.</p>
					 */
					setConfirmedSettings(settings: string): void;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.ViewSettingsDialog#methods/getSortDescending">sortDescending</a>.</p><p>Defines the initial sort order.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSortDescending <p>New value for property <code>sortDescending</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSortDescending(bSortDescending?: boolean): this;
					/**
					 * <p>Shows the dialog.</p>
					 */
					show(): void;
				}
				/**
				 * <h3>Overview</h3><p>The <code>sap.ui.webc.fiori.Wizard</code> helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.</p><h3>Structure</h3><h4>Navigation area</h4><p> The top most area of the <code>sap.ui.webc.fiori.Wizard</code> is occupied by the navigation area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps. <ul> <li> Steps can have different visual representations - numbers or icons. <li> Steps might have labels for better readability - titleText and subTitleText.</li> <li> Steps are defined by using the <code>sap.ui.webc.fiori.WizardStep</code> as slotted element within the <code>sap.ui.webc.fiori.Wizard</code>.</li> </ul></p><p><b>Note:</b> If no selected step is defined, the first step will be auto selected. <br> <b>Note:</b> If multiple selected steps are defined, the last step will be selected.</p><h3>Keyboard Handling</h3><p> The user can navigate using the following keyboard shortcuts: <br></p><h4>Wizard Progress Navigation</h4><p> <ul> <li>[LEFT], [DOWN] - Focus moves backward to the WizardProgressNavAnchors.</li> <li>[UP], [RIGHT] - Focus moves forward to the WizardProgressNavAnchor.</li> <li>[SPACE] or [ENTER], [RETURN] - Selects an active step</li> <li>[HOME] or [PAGE UP] - Focus goes to the first step</li> <li>[END] or [PAGE DOWN] - Focus goes to the last step</li> </ul></p><h4>Content</h4><p> The content occupies the main part of the page. It can hold any type of HTML elements. It's defined by using the <code>sap.ui.webc.fiori.WizardStep</code> as slotted element within the <code>sap.ui.webc.fiori.Wizard</code>.</p><h3>Scrolling</h3><p> The component handles user scrolling by selecting the closest step, based on the current scroll position and scrolls to particular place, when the user clicks on the step within the navigation area. <br> <br></p><p><b>Important:</b> In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height. The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page. <br> <br> <b>For example:</b> <br> <br> <code>&lt;ui5-dialog style="height: 80%"&gt;<br> </code> <code>&#9;&lt;ui5-wizard&gt;&lt;/ui5-wizard&gt;<br> </code> <code>&lt;/ui5-dialog&gt;</code></p><h4>Moving to next step</h4><p> The <code>sap.ui.webc.fiori.WizardStep</code> provides the necessary API and it's up to the user of the component to use it to move to the next step. You have to set its <code>selected</code> property (and remove the <code>disabled</code> one if set) to <code>true</code>. The <code>sap.ui.webc.fiori.Wizard</code> will automatically scroll to the content of the newly selected step. <br> <br></p><p>The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button, or any other type of element to trigger step change, inside the <code>sap.ui.webc.fiori.WizardStep</code>, and show/hide it when certain fields are filled or user defined criteria is met.</p><h3>Usage</h3><h4>When to use:</h4><p> When the user has to accomplish a long or unfamiliar task.</p><h4>When not to use:</h4><p> When the task has less than 3 steps.</p><h3>Responsive Behavior</h3><p> On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap. Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.</p>
				 */
				export class Wizard extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>Wizard</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some step to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p>
					 * @param {sap.ui.webc.fiori.IWizardStep} oStep <p>The step to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addStep(oStep: sap.ui.webc.fiori.IWizardStep): this;
					/**
					 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.webc.fiori.Wizard#events/stepChange">stepChange</a> event of this <code>sap.ui.webc.fiori.Wizard</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.webc.fiori.Wizard</code> itself.</p><p>Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.</p>
					 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
					 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
					 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.webc.fiori.Wizard</code> itself</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					attachStepChange(oData: any, fnFunction: any, oListener?: any): this;
					/**
					 * <p>Destroys all the steps in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroySteps(): this;
					/**
					 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.webc.fiori.Wizard#events/stepChange">stepChange</a> event of this <code>sap.ui.webc.fiori.Wizard</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
					 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
					 * @param {any} oListener <p>Context object on which the given function had to be called</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					detachStepChange(fnFunction: any, oListener?: any): this;
					/**
					 * <p>Fires event <a target="_self" href="api/sap.ui.webc.fiori.Wizard#events/stepChange">stepChange</a> to attached listeners.</p>
					 * @param {any} mParameters <p>Parameters to pass along with the event</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					protected fireStepChange(mParameters?: any): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getHeight">height</a>.</p><p>Defines the height of the control</p>
					 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
					 */
					getHeight(): sap.ui.core.CSSSize;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p><p>Defines the steps. <br> <br> <b>Note:</b> Use the available <code>sap.ui.webc.fiori.WizardStep</code> component.</p>
					 * @returns sap.ui.webc.fiori.IWizardStep[] 
					 */
					getSteps(): sap.ui.webc.fiori.IWizardStep[];
					/**
					 * <p>Checks for the provided <code>sap.ui.webc.fiori.IWizardStep</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.webc.fiori.IWizardStep} oStep <p>The step whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfStep(oStep: sap.ui.webc.fiori.IWizardStep): number;
					/**
					 * <p>Inserts a step into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p>
					 * @param {sap.ui.webc.fiori.IWizardStep} oStep <p>The step to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the step should be inserted at; for a negative value of <code>iIndex</code>, the step is inserted at position 0; for a value greater than the current size of the aggregation, the step is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertStep(oStep: sap.ui.webc.fiori.IWizardStep, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.webc.fiori.IWizardStep[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllSteps(): sap.ui.webc.fiori.IWizardStep[];
					/**
					 * <p>Removes a step from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getSteps">steps</a>.</p>
					 * @param {number | string | sap.ui.webc.fiori.IWizardStep} vStep <p>The step to remove or its index or id</p>
					 * @returns sap.ui.webc.fiori.IWizardStep|null <p>The removed step or <code>null</code></p>
					 */
					removeStep(vStep: number | string | sap.ui.webc.fiori.IWizardStep): sap.ui.webc.fiori.IWizardStep | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.Wizard#methods/getHeight">height</a>.</p><p>Defines the height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
					 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setHeight(sHeight: sap.ui.core.CSSSize): this;
				}
				/**
				 * <h3>Overview</h3><p>A component that represents a logical step as part of the <code>sap.ui.webc.fiori.Wizard</code>. It is meant to aggregate arbitrary HTML elements that form the content of a single step.</p><h3>Structure</h3><p> <ul> <li>Each wizard step has arbitrary content.</li> <li>Each wizard step might have texts - defined by the <code>titleText</code> and <code>subtitleText</code> properties.</li> <li>Each wizard step might have an icon - defined by the <code>icon</code> property.</li> <li>Each wizard step might display a number in place of the <code>icon</code>, when it's missing.</li> </ul></p><h3>Usage</h3><p> The <code>sap.ui.webc.fiori.WizardStep</code> component should be used only as slot of the <code>sap.ui.webc.fiori.Wizard</code> component and should not be used standalone.</p>
				 */
				export class WizardStep extends sap.ui.webc.common.WebComponent {
					/**
					 * <p>Constructor for a new <code>WizardStep</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
					 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
					 * @param {any} mSettings <p>Initial settings for the new control</p>
					 */
					constructor(sId?: string, mSettings?: any);
					/**
					 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					addContent(oContent: sap.ui.core.Control): this;
					/**
					 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					destroyContent(): this;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getBranching">branching</a>.</p><p>When <code>branching</code> is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step. <br> <br></p><p><b>Note:</b> It is recommended to use <code>branching</code> on the last known step and later add new steps when it becomes clear how the wizard flow should continue.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>branching</code></p>
					 */
					getBranching(): boolean;
					/**
					 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p><p>Defines the step content.</p>
					 * @returns sap.ui.core.Control[] 
					 */
					getContent(): sap.ui.core.Control[];
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>Default value is <code>true</code>.</p>
					 * @returns boolean <p>Value of property <code>enabled</code></p>
					 */
					getEnabled(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getIcon">icon</a>.</p><p>Defines the <code>icon</code> of the step. <br> <br></p><p><b>Note:</b> The icon is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header. <br> <br></p><p>The SAP-icons font provides numerous options. See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>icon</code></p>
					 */
					getIcon(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getSelected">selected</a>.</p><p>Defines the step's <code>selected</code> state - the step that is currently active. <br> <br></p><p><b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time. In this case the <code>selected</code> property would take precedence.</p><p>Default value is <code>false</code>.</p>
					 * @returns boolean <p>Value of property <code>selected</code></p>
					 */
					getSelected(): boolean;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the <code>subtitleText</code> of the step. <br> <br></p><p><b>Note:</b> the text is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>subtitleText</code></p>
					 */
					getSubtitleText(): string;
					/**
					 * <p>Gets current value of property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the step. <br> <br></p><p><b>Note:</b> The text is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header.</p><p>Default value is <code>empty string</code>.</p>
					 * @returns string <p>Value of property <code>titleText</code></p>
					 */
					getTitleText(): string;
					/**
					 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
					 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
					 */
					indexOfContent(oContent: sap.ui.core.Control): number;
					/**
					 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p>
					 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
					 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
					/**
					 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
					 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
					 */
					removeAllContent(): sap.ui.core.Control[];
					/**
					 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getContent">content</a>.</p>
					 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
					 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
					 */
					removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getBranching">branching</a>.</p><p>When <code>branching</code> is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step. <br> <br></p><p><b>Note:</b> It is recommended to use <code>branching</code> on the last known step and later add new steps when it becomes clear how the wizard flow should continue.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bBranching <p>New value for property <code>branching</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setBranching(bBranching?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getEnabled">enabled</a>.</p><p>Defines whether the control is enabled. A disabled control can't be interacted with, and it is not in the tab chain.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
					 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setEnabled(bEnabled?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getIcon">icon</a>.</p><p>Defines the <code>icon</code> of the step. <br> <br></p><p><b>Note:</b> The icon is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header. <br> <br></p><p>The SAP-icons font provides numerous options. See all the available icons in the <a target="_blank" rel="noopener noreferrer" href="test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</a>
								<img src="./resources/sap/ui/documentation/sdk/images/link-sap.png"
								title="Information published on SAP site" class="sapUISDKExternalLink"/>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sIcon <p>New value for property <code>icon</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setIcon(sIcon?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getSelected">selected</a>.</p><p>Defines the step's <code>selected</code> state - the step that is currently active. <br> <br></p><p><b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time. In this case the <code>selected</code> property would take precedence.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
					 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSelected(bSelected?: boolean): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getSubtitleText">subtitleText</a>.</p><p>Defines the <code>subtitleText</code> of the step. <br> <br></p><p><b>Note:</b> the text is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sSubtitleText <p>New value for property <code>subtitleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setSubtitleText(sSubtitleText?: string): this;
					/**
					 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.webc.fiori.WizardStep#methods/getTitleText">titleText</a>.</p><p>Defines the <code>titleText</code> of the step. <br> <br></p><p><b>Note:</b> The text is displayed in the <code>sap.ui.webc.fiori.Wizard</code> navigation header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
					 * @param {string} sTitleText <p>New value for property <code>titleText</code></p>
					 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
					 */
					setTitleText(sTitleText?: string): this;
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
		namespace webc {
		}
	}
}
