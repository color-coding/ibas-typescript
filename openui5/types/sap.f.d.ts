/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
	/**
	 * <p><p>SAPUI5 library with controls specialized for SAP Fiori apps.</p></p>
	 */
	namespace f {
		/**
		 * <p>An image-like control that has different display options for representing images, initials, and icons.</p><h3>Overview</h3><p>The <code>Avatar</code> control allows the usage of different content, shapes, and sizes depending on the use case.</p><p>The content types that can be displayed are either images, icons, or initials. The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.</p><h3>Usage</h3><p>Up to two Latin letters can be displayed as initials in an <code>Avatar</code>. If there are more than two letters, or if there's a non-Latin character present, a default image placeholder will be created.</p>
		 */
		export class Avatar extends sap.m.Avatar {
			/**
			 * <p>Constructor for a new <code>Avatar</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.Avatar#constructor">sap.m.Avatar</a> can be used.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
		}
		/**
		 * <p>Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related avatars, such as, project team members or employees.</p><h3>Overview</h3><p>The control allows you to display the avatars in different sizes, depending on your use case.</p><p>The <code>AvatarGroup</code> control has two group types: <ul> <li><code>Group</code> type: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.</li> <li><code>Individual</code> type: The avatars are displayed side-by-side and each avatar has its own click/tap area.</li> </ul></p><h3>Responsive Behavior</h3><p>When the available space is less than the width required to display all avatars, an overflow visualization appears as a button placed at the end with the same shape and size as the avatars. The visualization displays the number of avatars that have overflowed and are not currently visible.</p><h3>Usage</h3><p>Use the <code>AvatarGroup</code> if: <ul> <li>You want to display a group of avatars.</li> <li>You want to display several avatars which have something in common.</li> </ul></p><p>Do not use the <code>AvatarGroup</code> if: <ul> <li>You want to display a single avatar.</li> <li>You want to display a gallery for simple images.</li> <li>You want to use it for other visual content than avatars.</li> </ul></p>
		 */
		export class AvatarGroup extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>AvatarGroup</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p>
			 * @param {sap.f.AvatarGroupItem} oItem <p>The item to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addItem(oItem: sap.f.AvatarGroupItem): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.AvatarGroup#events/press">press</a> event of this <code>sap.f.AvatarGroup</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.AvatarGroup</code> itself.</p><p>Fired when the user clicks or taps on the control.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.AvatarGroup</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachPress(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyItems(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.AvatarGroup#events/press">press</a> event of this <code>sap.f.AvatarGroup</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachPress(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.AvatarGroup#events/press">press</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected firePress(mParameters?: any): this;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarCustomDisplaySize">avatarCustomDisplaySize</a>.</p><p>Specifies a custom display size for each avatar.</p><p><b>Notes:</b> <ul> <li>Supports only <code>px</code> and code>rem</code> values.</li> <li>It takes effect only if the <code>avatarDisplaySize</code> property is set to <code>Custom</code>.</li> </ul></p><p>Default value is <code>"3rem"</code>.</p>
			 * @returns sap.ui.core.AbsoluteCSSSize <p>Value of property <code>avatarCustomDisplaySize</code></p>
			 */
			getAvatarCustomDisplaySize(): sap.ui.core.AbsoluteCSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarCustomFontSize">avatarCustomFontSize</a>.</p><p>Specifies a custom font size for each avatar.</p><p><b>Note:</b> It takes effect only if the <code>avatarDisplaySize</code> property is set to <code>Custom</code>.</p><p>Default value is <code>"1.125rem"</code>.</p>
			 * @returns sap.ui.core.AbsoluteCSSSize <p>Value of property <code>avatarCustomFontSize</code></p>
			 */
			getAvatarCustomFontSize(): sap.ui.core.AbsoluteCSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarDisplaySize">avatarDisplaySize</a>.</p><p>Defines the display size of each avatar.</p><p>Default value is <code>S</code>.</p>
			 * @returns sap.m.AvatarSize <p>Value of property <code>avatarDisplaySize</code></p>
			 */
			getAvatarDisplaySize(): sap.m.AvatarSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroup#methods/getGroupType">groupType</a>.</p><p>Defines the mode of the <code>AvatarGroup</code>.</p><p>Default value is <code>Group</code>.</p>
			 * @returns sap.f.AvatarGroupType <p>Value of property <code>groupType</code></p>
			 */
			getGroupType(): sap.f.AvatarGroupType;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p><p>The <code>AvatarGroupItems</code> contained by the control.</p>
			 * @returns sap.f.AvatarGroupItem[] 
			 */
			getItems(): sap.f.AvatarGroupItem[];
			/**
			 * <p>Checks for the provided <code>sap.f.AvatarGroupItem</code> in the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.f.AvatarGroupItem} oItem <p>The item whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfItem(oItem: sap.f.AvatarGroupItem): number;
			/**
			 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p>
			 * @param {sap.f.AvatarGroupItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertItem(oItem: sap.f.AvatarGroupItem, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.f.AvatarGroupItem[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllItems(): sap.f.AvatarGroupItem[];
			/**
			 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.f.AvatarGroup#methods/getItems">items</a>.</p>
			 * @param {number | string | sap.f.AvatarGroupItem} vItem <p>The item to remove or its index or id</p>
			 * @returns sap.f.AvatarGroupItem|null <p>The removed item or <code>null</code></p>
			 */
			removeItem(vItem: number | string | sap.f.AvatarGroupItem): sap.f.AvatarGroupItem | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarCustomDisplaySize">avatarCustomDisplaySize</a>.</p><p>Specifies a custom display size for each avatar.</p><p><b>Notes:</b> <ul> <li>Supports only <code>px</code> and code>rem</code> values.</li> <li>It takes effect only if the <code>avatarDisplaySize</code> property is set to <code>Custom</code>.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"3rem"</code>.</p>
			 * @param {sap.ui.core.AbsoluteCSSSize} sAvatarCustomDisplaySize <p>New value for property <code>avatarCustomDisplaySize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAvatarCustomDisplaySize(sAvatarCustomDisplaySize?: sap.ui.core.AbsoluteCSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarCustomFontSize">avatarCustomFontSize</a>.</p><p>Specifies a custom font size for each avatar.</p><p><b>Note:</b> It takes effect only if the <code>avatarDisplaySize</code> property is set to <code>Custom</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"1.125rem"</code>.</p>
			 * @param {sap.ui.core.AbsoluteCSSSize} sAvatarCustomFontSize <p>New value for property <code>avatarCustomFontSize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAvatarCustomFontSize(sAvatarCustomFontSize?: sap.ui.core.AbsoluteCSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroup#methods/getAvatarDisplaySize">avatarDisplaySize</a>.</p><p>Defines the display size of each avatar.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>S</code>.</p>
			 * @param {sap.m.AvatarSize} sAvatarDisplaySize <p>New value for property <code>avatarDisplaySize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAvatarDisplaySize(sAvatarDisplaySize?: sap.m.AvatarSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroup#methods/getGroupType">groupType</a>.</p><p>Defines the mode of the <code>AvatarGroup</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Group</code>.</p>
			 * @param {sap.f.AvatarGroupType} sGroupType <p>New value for property <code>groupType</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setGroupType(sGroupType?: sap.f.AvatarGroupType): this;
		}
		/**
		 * <p>Represents a single avatar item displayed in the <a target="_self" href="api/sap.f.AvatarGroup">sap.f.AvatarGroup</a> control.</p><h3>Overview</h3><p> The <code>AvatarGroupItem</code> control allows you to define additional properties that are applied when rendering each <code>AvatarGroupItem</code> instance in the <a target="_self" href="api/sap.f.AvatarGroup">sap.f.AvatarGroup</a> control.</p>
		 */
		export class AvatarGroupItem extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>AvatarGroupItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Returns the color of the avatar.</p>
			 * @returns string <p>The color of the avatar</p>
			 */
			getAvatarColor(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getFallbackIcon">fallbackIcon</a>.</p><p>Defines the fallback icon displayed in case of wrong image src and no initials set.</p><p><b>Notes:</b> <ul> <li>If not set, a default fallback icon is displayed.</li> <li>Accepted values are only icons from the SAP icon font.</li> </ul></p>
			 * @returns string <p>Value of property <code>fallbackIcon</code></p>
			 */
			getFallbackIcon(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getInitials">initials</a>.</p><p>Defines the displayed initials.</p>
			 * @returns string <p>Value of property <code>initials</code></p>
			 */
			getInitials(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getSrc">src</a>.</p><p>Determines the path to the desired image or icon.</p>
			 * @returns sap.ui.core.URI <p>Value of property <code>src</code></p>
			 */
			getSrc(): sap.ui.core.URI;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getFallbackIcon">fallbackIcon</a>.</p><p>Defines the fallback icon displayed in case of wrong image src and no initials set.</p><p><b>Notes:</b> <ul> <li>If not set, a default fallback icon is displayed.</li> <li>Accepted values are only icons from the SAP icon font.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sFallbackIcon <p>New value for property <code>fallbackIcon</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFallbackIcon(sFallbackIcon?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getInitials">initials</a>.</p><p>Defines the displayed initials.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sInitials <p>New value for property <code>initials</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setInitials(sInitials?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.AvatarGroupItem#methods/getSrc">src</a>.</p><p>Determines the path to the desired image or icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.ui.core.URI} sSrc <p>New value for property <code>src</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSrc(sSrc?: sap.ui.core.URI): this;
		}
		/**
		 * <p><p>Group modes for the <a target="_self" href="api/sap.f.AvatarGroup">sap.f.AvatarGroup</a> control.</p></p>
		 */
		export enum AvatarGroupType {
			/**
			 * <p>The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.</p>
			 */
			Group = "Group",
			/**
			 * <p>The avatars are displayed side-by-side and each avatar has its own click/tap area.</p>
			 */
			Individual = "Individual",
		}
		/**
		 * <p>A control that represents a container with a predefined header and content.</p><h3>Overview</h3><p> The card is a container for grouping and displaying information.</p><h3>Structure</h3><p> You can control the width and height of the card, using properties. The <code>Card</code> has the following aggregations: <ul> <li><code>header</code> - can be either a <a target="_self" href="api/sap.f.cards.Header">Header</a> or a <a target="_self" href="api/sap.f.cards.NumericHeader">NumericHeader</a> <li><code>content</code> - can be any <a target="_self" href="api/sap.ui.core.Control">Control</a>.</li> </ul></p><h3>Guidelines:</h3><p> <ul> <li>A card should represent a task or visualize a specific set of information.</li> <li>It is recommended to use cards on home page layouts.</li> <li>The card shouldn't be large with a lot of content.</li> </ul></p><h3>Usage</h3><p> To show a KPI value or any numeric information, use <a target="_self" href="api/sap.f.cards.NumericHeader">NumericHeader</a> as a card header. For any other use cases, use the regular <a target="_self" href="api/sap.f.cards.Header">Header</a>. Recommended content: - List - Table - Object information - Charts - Timelines - Images</p><p><i>When to use</i> <ul> <li>When you need multiple cards on a home page layout.</li> <li>When you have to achieve simple card visualization.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you have to reuse the card between applications. For such cases, use: <a target="_self" href="api/sap.ui.integration.widgets.Card">Integration Card</a>.</li> <li>When you need nesting. For such cases, use: <a target="_self" href="api/sap.m.Panel">Panel</a>.</li> <li>When the card is not part of a card layout. For such cases, use: <a target="_self" href="api/sap.m.Panel">Panel</a>.</li> <li>When you need more header configuration flexibility.</li> </ul></p>
		 */
		export class Card extends sap.f.CardBase {
			/**
			 * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.f.Card#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Destroys the header in the aggregation <a target="_self" href="api/sap.f.Card#methods/getHeader">header</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyHeader(): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.Card#methods/getContent">content</a>.</p><p>Defines the content of the card.</p>
			 * @returns sap.ui.core.Control 
			 */
			getContent(): sap.ui.core.Control;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.Card#methods/getHeader">header</a>.</p><p>Defines the header of the card.</p>
			 * @returns sap.f.cards.IHeader 
			 */
			getHeader(): sap.f.cards.IHeader;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.Card#methods/getHeaderPosition">headerPosition</a>.</p><p>Defines the position of the Card Header.</p><p>Default value is <code>Top</code>.</p>
			 * @returns sap.f.cards.HeaderPosition <p>Value of property <code>headerPosition</code></p>
			 */
			getHeaderPosition(): sap.f.cards.HeaderPosition;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.Card#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.Card#methods/getHeader">header</a>.</p>
			 * @param {sap.f.cards.IHeader} oHeader <p>The header to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeader(oHeader: sap.f.cards.IHeader): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.Card#methods/getHeaderPosition">headerPosition</a>.</p><p>Defines the position of the Card Header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Top</code>.</p>
			 * @param {sap.f.cards.HeaderPosition} sHeaderPosition <p>New value for property <code>headerPosition</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeaderPosition(sHeaderPosition?: sap.f.cards.HeaderPosition): this;
		}
		/**
		 * <p>A base class for controls that represent a container with a predefined header and content.</p>
		 */
		export class CardBase extends sap.ui.core.Control implements sap.f.ICard {
			/**
			 * <p>Constructor for a new <code>CardBase</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Returns the DOM Element that should get the focus.</p>
			 * @returns HTMLElement <p>Returns the DOM Element that should get the focus</p>
			 */
			protected getFocusDomRef(): HTMLElement;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.CardBase#methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>Default value is <code>"auto"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
			 */
			getHeight(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.CardBase#methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>Default value is <code>"100%"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
			 */
			getWidth(): sap.ui.core.CSSSize;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.CardBase#methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"auto"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeight(sHeight?: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.CardBase#methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setWidth(sWidth?: sap.ui.core.CSSSize): this;
		}
		/**
		 * <p>A layout control, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.</p><h3>Overview</h3><p>The control consist of several components:</p><p><ul><li><a target="_self" href="api/sap.f.DynamicPageTitle">DynamicPageTitle</a> - consists of a heading on the left side, content in the middle, and actions on the right. The displayed content changes based on the current mode of the <a target="_self" href="api/sap.f.DynamicPageHeader">DynamicPageHeader</a>.</li> <li><a target="_self" href="api/sap.f.DynamicPageHeader">DynamicPageHeader</a> - a generic container, which can contain a single layout control and does not care about the content alignment and responsiveness. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.</li> <li>Content area - a generic container, which can have a single UI5 layout control and does not care about the content alignment and responsiveness.</li> <li>Footer - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content. It can be any <a target="_self" href="api/sap.m.IBar">sap.m.IBar</a> control.</li></ul></p><h3>Usage</h3><p>Use the <code>DynamicPage</code> if you need to have a title, that is always visible and a header, that has configurable Expanding/Snapping functionality. If you don't need the Expanding/Snapping functionality it is better to use the <a target="_self" href="api/sap.m.Page">sap.m.Page</a> as a lighter control.</p><p><ul><b>Notes:</b> <li>If you're displaying a <a target="_self" href="api/sap.m.FlexBox">sap.m.FlexBox</a> with non-adaptive content (doesn't stretch to fill the available space), it is recommended to set the <code>fitContainer</code> property of the <a target="_self" href="api/sap.m.FlexBox">FlexBox</a> to <code>false</code>.</li> <li>If you are displaying a <a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a>, keep in mind that it is non-adaptive and may cause unpredicted behavior for the <code>DynamicPage</code> on smaller screen sizes, such as mobile.</li> <li>Snapping of the <a target="_self" href="api/sap.f.DynamicPageTitle">DynamicPageTitle</a> is not supported in the following case: When the <code>DynamicPage</code> has a scroll bar, the control usually scrolls to the snapping point - the point, where the <a target="_self" href="api/sap.f.DynamicPageHeader">DynamicPageHeader</a> is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling.</li> <li>When using <a target="_self" href="api/sap.ui.layout.form.Form">sap.ui.layout.form.Form</a>, <a target="_self" href="api/sap.m.Panel">sap.m.Panel</a>, <a target="_self" href="api/sap.m.Table">sap.m.Table</a> and <a target="_self" href="api/sap.m.List">sap.m.List</a> controls in the content of <code>DynamicPage</code>, you need to adjust their left text offset if you want to achieve vertical alignment between the <code>sap.f.DynamicPageHeader</code>`s content and <code>DynamicPage</code>`s content. For more information, see the documentation for the <code>content</code> aggregation.</li></ul></p><h3>Responsive Behavior</h3><p>The responsive behavior of the <code>DynamicPage</code> depends on the behavior of the content that is displayed. To adjust the <code>DynamicPage</code> content padding, the <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code>, and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.</p>
		 */
		export class DynamicPage extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>DynamicPage</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.DynamicPage#events/pinnedStateChange">pinnedStateChange</a> event of this <code>sap.f.DynamicPage</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.DynamicPage</code> itself.</p><p>The event is fired when the <code>headerPinned</code> property is changed via user interaction.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.DynamicPage</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachPinnedStateChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Destroys the footer in the aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getFooter">footer</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyFooter(): this;
			/**
			 * <p>Destroys the header in the aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getHeader">header</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyHeader(): this;
			/**
			 * <p>Destroys the landmarkInfo in the aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getLandmarkInfo">landmarkInfo</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLandmarkInfo(): this;
			/**
			 * <p>Destroys the title in the aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getTitle">title</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyTitle(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.DynamicPage#events/pinnedStateChange">pinnedStateChange</a> event of this <code>sap.f.DynamicPage</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachPinnedStateChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.DynamicPage#events/pinnedStateChange">pinnedStateChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected firePinnedStateChange(mParameters?: any): this;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of <code>DynamicPage</code>.</p><p>Default value is <code>Standard</code>.</p>
			 * @returns sap.m.PageBackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
			 */
			getBackgroundDesign(): sap.m.PageBackgroundDesign;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getContent">content</a>.</p><p><code>DynamicPage</code> content.</p><p><b>Note: </b> You can change the default paddings by adding the following CSS classes: <ul> <li><code>sapUiContentPadding</code></li> <li><code>sapUiNoContentPadding</code></li> <li><code>sapUiResponsiveContentPadding</code></li> </ul> For more information, see <a target="_self" href="topic/c71f6df62dae47ca8284310a6f5fc80a">Using Container Content Padding CSS Classes</a>.</p><p><b>Note:</b> The SAP Fiori Design guidelines require that the <code>DynamicPageHeader</code>'s content and the <code>DynamicPage</code>'s content are aligned vertically. When using <a target="_self" href="api/sap.ui.layout.form.Form">sap.ui.layout.form.Form</a>, <a target="_self" href="api/sap.m.Panel">sap.m.Panel</a>, <a target="_self" href="api/sap.m.Table">sap.m.Table</a> and <a target="_self" href="api/sap.m.List">sap.m.List</a> in the content area of <code>DynamicPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFDynamicPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).</p><p>Example:</p><p><pre>
			<code> &lt;Panel class=“sapFDynamicPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>
			</pre></p><p>Please keep in mind that the alignment is not possible in the following cases: <ul> <li> When the controls are placed in an <a target="_self" href="api/sap.ui.layout.Grid">sap.ui.layout.Grid</a> or other layout controls that use <code>overflow:hidden</code> CSS property</li> <li> In case any of the following CSS classes is applied to <code>DynamicPage</code>: <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code> or <code>sapUiResponsiveContentPadding</code></li> </ul></p>
			 * @returns sap.ui.core.Control 
			 */
			getContent(): sap.ui.core.Control;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getFitContent">fitContent</a>.</p><p>Forces the content container of the <code>DynamicPage</code> to make room for stretchable controls in the <code>content</code> aggregation to fill exactly the visible space between the header and the footer.</p><p><b>Notes:</b> <ul> <li>Enable this property only if the control of the <code>content</code> aggregation is configured to automatically stretch to fill the available height, which means that the content would appear squashed in height when this property is disabled. Such stretchable controls may be <a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a> and <a target="_self" href="api/sap.ui.table.AnalyticalTable">sap.ui.table.AnalyticalTable</a> depending on their settings.</li> <li>It is not recommended to enable this property for controls that do not stretch in height (and appear properly when this property is disabled).</li> </ul></p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>fitContent</code></p>
			 */
			getFitContent(): boolean;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getFooter">footer</a>.</p><p><code>DynamicPage</code> floating footer.</p>
			 * @returns sap.m.IBar 
			 */
			getFooter(): sap.m.IBar;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getHeader">header</a>.</p><p><code>DynamicPage</code> header.</p>
			 * @returns sap.f.DynamicPageHeader 
			 */
			getHeader(): sap.f.DynamicPageHeader;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getHeaderExpanded">headerExpanded</a>.</p><p>Determines whether the header is expanded.</p><p>The header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.</p><p><b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.</p><p>Default value is <code>true</code>.</p>
			 * @returns boolean <p>Value of property <code>headerExpanded</code></p>
			 */
			getHeaderExpanded(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getHeaderPinned">headerPinned</a>.</p><p>Determines whether the <code>DynamicPageHeader</code> is pinned.</p><p>The property can be changed programmatically or in the occurrence of the following user interactions: <ul> <li>Toggling the pin/unpin button of <code>DynamicPageHeader</code></li> <li>Snapping the <code>DynamicPageHeader</code> by explicitly clicking on the <code>DynamicPageTitle</code></li> </ul></p><p><b>Note: </b> The property will only apply if the header is effectively pinnable, i.e. if the following conditions are met: <ul> <li><code>DynamicPageHeader</code> <code>pinnable</code> property is <code>true</code></li> <li><code>DynamicPageHeader</code> is expanded</li> <li><code>DynamicPage</code> <code>preserveHeaderStateOnScroll</code> property is effectively disabled</li> </ul></p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>headerPinned</code></p>
			 */
			getHeaderPinned(): boolean;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getLandmarkInfo">landmarkInfo</a>.</p><p>Accessible landmark settings to be applied on the containers of the <code>sap.f.DynamicPage</code> control.</p><p>If not set, no landmarks will be written.</p>
			 * @returns sap.f.DynamicPageAccessibleLandmarkInfo 
			 */
			getLandmarkInfo(): sap.f.DynamicPageAccessibleLandmarkInfo;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control`s title and header are with height larger than the given threshold.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>preserveHeaderStateOnScroll</code></p>
			 */
			getPreserveHeaderStateOnScroll(): boolean;
			/**
			 * <p>Returns the <code>sap.ui.core.ScrollEnablement</code> delegate which is used with this control.</p>
			 * @returns sap.ui.core.delegate.ScrollEnablement <p>The scroll delegate instance</p>
			 */
			getScrollDelegate(): sap.ui.core.delegate.ScrollEnablement;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showFooter</code></p>
			 */
			getShowFooter(): boolean;
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.DynamicPage#methods/getStickySubheaderProvider">stickySubheaderProvider</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getStickySubheaderProvider(): sap.ui.core.ID;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPage#methods/getTitle">title</a>.</p><p><code>DynamicPage</code> title.</p>
			 * @returns sap.f.DynamicPageTitle 
			 */
			getTitle(): sap.f.DynamicPageTitle;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPage#methods/getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>. If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available and the application must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.</p><p><b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.</p><p>Default value is <code>true</code>.</p>
			 * @returns boolean <p>Value of property <code>toggleHeaderOnTitleClick</code></p>
			 */
			getToggleHeaderOnTitleClick(): boolean;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of <code>DynamicPage</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Standard</code>.</p>
			 * @param {sap.m.PageBackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setBackgroundDesign(sBackgroundDesign?: sap.m.PageBackgroundDesign): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPage#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getFitContent">fitContent</a>.</p><p>Forces the content container of the <code>DynamicPage</code> to make room for stretchable controls in the <code>content</code> aggregation to fill exactly the visible space between the header and the footer.</p><p><b>Notes:</b> <ul> <li>Enable this property only if the control of the <code>content</code> aggregation is configured to automatically stretch to fill the available height, which means that the content would appear squashed in height when this property is disabled. Such stretchable controls may be <a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a> and <a target="_self" href="api/sap.ui.table.AnalyticalTable">sap.ui.table.AnalyticalTable</a> depending on their settings.</li> <li>It is not recommended to enable this property for controls that do not stretch in height (and appear properly when this property is disabled).</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bFitContent <p>New value for property <code>fitContent</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFitContent(bFitContent?: boolean): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPage#methods/getFooter">footer</a>.</p>
			 * @param {sap.m.IBar} oFooter <p>The footer to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFooter(oFooter: sap.m.IBar): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPage#methods/getHeader">header</a>.</p>
			 * @param {sap.f.DynamicPageHeader} oHeader <p>The header to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeader(oHeader: sap.f.DynamicPageHeader): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getHeaderExpanded">headerExpanded</a>.</p><p>Determines whether the header is expanded.</p><p>The header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.</p><p><b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
			 * @param {boolean} bHeaderExpanded <p>New value for property <code>headerExpanded</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeaderExpanded(bHeaderExpanded?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getHeaderPinned">headerPinned</a>.</p><p>Determines whether the <code>DynamicPageHeader</code> is pinned.</p><p>The property can be changed programmatically or in the occurrence of the following user interactions: <ul> <li>Toggling the pin/unpin button of <code>DynamicPageHeader</code></li> <li>Snapping the <code>DynamicPageHeader</code> by explicitly clicking on the <code>DynamicPageTitle</code></li> </ul></p><p><b>Note: </b> The property will only apply if the header is effectively pinnable, i.e. if the following conditions are met: <ul> <li><code>DynamicPageHeader</code> <code>pinnable</code> property is <code>true</code></li> <li><code>DynamicPageHeader</code> is expanded</li> <li><code>DynamicPage</code> <code>preserveHeaderStateOnScroll</code> property is effectively disabled</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bHeaderPinned <p>New value for property <code>headerPinned</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeaderPinned(bHeaderPinned?: boolean): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPage#methods/getLandmarkInfo">landmarkInfo</a>.</p>
			 * @param {sap.f.DynamicPageAccessibleLandmarkInfo} oLandmarkInfo <p>The landmarkInfo to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLandmarkInfo(oLandmarkInfo: sap.f.DynamicPageAccessibleLandmarkInfo): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control`s title and header are with height larger than the given threshold.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bPreserveHeaderStateOnScroll <p>New value for property <code>preserveHeaderStateOnScroll</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setPreserveHeaderStateOnScroll(bPreserveHeaderStateOnScroll?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowFooter <p>New value for property <code>showFooter</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowFooter(bShowFooter?: boolean): this;
			/**
			 * <p>Sets the associated <a target="_self" href="api/sap.f.DynamicPage#methods/getStickySubheaderProvider">stickySubheaderProvider</a>.</p>
			 * @param {sap.ui.core.ID | sap.f.IDynamicPageStickyContent} oStickySubheaderProvider <p>ID of an element which becomes the new target of this stickySubheaderProvider association; alternatively, an element instance may be given</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setStickySubheaderProvider(oStickySubheaderProvider: sap.ui.core.ID | sap.f.IDynamicPageStickyContent): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPage#methods/getTitle">title</a>.</p>
			 * @param {sap.f.DynamicPageTitle} oTitle <p>The title to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setTitle(oTitle: sap.f.DynamicPageTitle): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPage#methods/getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>. If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available and the application must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.</p><p><b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
			 * @param {boolean} bToggleHeaderOnTitleClick <p>New value for property <code>toggleHeaderOnTitleClick</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setToggleHeaderOnTitleClick(bToggleHeaderOnTitleClick?: boolean): this;
		}
		/**
		 * <p>Settings for accessible landmarks which can be applied to the container elements of a <code>sap.f.DynamicPage</code> control.</p><p>These landmarks are used by assistive technologies (such as screen readers) to provide a meaningful page overview.</p>
		 */
		export class DynamicPageAccessibleLandmarkInfo extends sap.ui.core.Element {
			/**
			 * <p>Constructor for a new <code>sap.f.DynamicPageAccessibleLandmarkInfo</code> element.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new element</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getContentLabel">contentLabel</a>.</p><p>Texts which describe the landmark of the content container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
			 * @returns string <p>Value of property <code>contentLabel</code></p>
			 */
			getContentLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getContentRole">contentRole</a>.</p><p>Landmark role of the content container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>"None"</code>.</p>
			 * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>contentRole</code></p>
			 */
			getContentRole(): sap.ui.core.AccessibleLandmarkRole;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getFooterLabel">footerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
			 * @returns string <p>Value of property <code>footerLabel</code></p>
			 */
			getFooterLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getFooterRole">footerRole</a>.</p><p>Landmark role of the footer container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>"None"</code>.</p>
			 * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>footerRole</code></p>
			 */
			getFooterRole(): sap.ui.core.AccessibleLandmarkRole;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getHeaderLabel">headerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
			 * @returns string <p>Value of property <code>headerLabel</code></p>
			 */
			getHeaderLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getHeaderRole">headerRole</a>.</p><p>Landmark role of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>"None"</code>.</p>
			 * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>headerRole</code></p>
			 */
			getHeaderRole(): sap.ui.core.AccessibleLandmarkRole;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getRootLabel">rootLabel</a>.</p><p>Texts which describe the landmark of the root container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p>
			 * @returns string <p>Value of property <code>rootLabel</code></p>
			 */
			getRootLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getRootRole">rootRole</a>.</p><p>Landmark role of the root container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>Default value is <code>"None"</code>.</p>
			 * @returns sap.ui.core.AccessibleLandmarkRole <p>Value of property <code>rootRole</code></p>
			 */
			getRootRole(): sap.ui.core.AccessibleLandmarkRole;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getContentLabel">contentLabel</a>.</p><p>Texts which describe the landmark of the content container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sContentLabel <p>New value for property <code>contentLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setContentLabel(sContentLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getContentRole">contentRole</a>.</p><p>Landmark role of the content container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
			 * @param {sap.ui.core.AccessibleLandmarkRole} sContentRole <p>New value for property <code>contentRole</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setContentRole(sContentRole?: sap.ui.core.AccessibleLandmarkRole): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getFooterLabel">footerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sFooterLabel <p>New value for property <code>footerLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFooterLabel(sFooterLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getFooterRole">footerRole</a>.</p><p>Landmark role of the footer container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
			 * @param {sap.ui.core.AccessibleLandmarkRole} sFooterRole <p>New value for property <code>footerRole</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFooterRole(sFooterRole?: sap.ui.core.AccessibleLandmarkRole): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getHeaderLabel">headerLabel</a>.</p><p>Texts which describe the landmark of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sHeaderLabel <p>New value for property <code>headerLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeaderLabel(sHeaderLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getHeaderRole">headerRole</a>.</p><p>Landmark role of the header container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
			 * @param {sap.ui.core.AccessibleLandmarkRole} sHeaderRole <p>New value for property <code>headerRole</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeaderRole(sHeaderRole?: sap.ui.core.AccessibleLandmarkRole): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getRootLabel">rootLabel</a>.</p><p>Texts which describe the landmark of the root container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sRootLabel <p>New value for property <code>rootLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setRootLabel(sRootLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageAccessibleLandmarkInfo#methods/getRootRole">rootRole</a>.</p><p>Landmark role of the root container of the corresponding <code>sap.f.DynamicPage</code> control.</p><p>If set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
			 * @param {sap.ui.core.AccessibleLandmarkRole} sRootRole <p>New value for property <code>rootRole</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setRootRole(sRootRole?: sap.ui.core.AccessibleLandmarkRole): this;
		}
		/**
		 * <p>Header of the <a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a>.</p><h3>Overview</h3><p>The <code>DynamicPageHeader</code> control is part of the <a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a> family and is used to serve as header of the <a target="_self" href="api/sap.f.DynamicPage">DynamicPage</a>.</p><h3>Usage</h3><p>The <code>DynamicPageHeader</code> can hold any layout control and has two states - expanded and collapsed (snapped). The switching between these states happens when:</p><p><ul><li>the user scrolls below its bottom margin</li> <li>the user clicks on the <a target="_self" href="api/sap.f.DynamicPageTitle">DynamicPageTitle</a></li> <li>through the <a target="_self" href="api/sap.f.DynamicPage">DynamicPage</a> property <code>headerExpanded</code></li></ul></p><h3>Responsive Behavior</h3><p>The responsive behavior of the <code>DynamicPageHeader</code> depends on the behavior of the content that is displayed.</p>
		 */
		export class DynamicPageHeader extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>DynamicPageHeader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of the <code>DynamicPageHeader</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p>
			 * @returns sap.m.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
			 */
			getBackgroundDesign(): sap.m.BackgroundDesign;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p><p>The content of the header.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getContent(): sap.ui.core.Control[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getPinnable">pinnable</a>.</p><p>Determines whether the header is pinnable.</p><p>Default value is <code>true</code>.</p>
			 * @returns boolean <p>Value of property <code>pinnable</code></p>
			 */
			getPinnable(): boolean;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfContent(oContent: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getContent">content</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
			 */
			removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of the <code>DynamicPageHeader</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.m.BackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageHeader#methods/getPinnable">pinnable</a>.</p><p>Determines whether the header is pinnable.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
			 * @param {boolean} bPinnable <p>New value for property <code>pinnable</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setPinnable(bPinnable?: boolean): this;
		}
		/**
		 * <p>Title of the <a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a>.</p><h3>Overview</h3><p>The <code>DynamicPageTitle</code> control is part of the <a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a> family and is used to serve as title of the <a target="_self" href="api/sap.f.DynamicPage">DynamicPage</a>.</p><h3>Usage</h3><p>The <code>DynamicPageTitle</code> can hold any control and displays the most important information regarding the object that will always remain visible while scrolling.</p><p><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls, suitable for <a target="_self" href="api/sap.m.Toolbar">sap.m.Toolbar</a> and <a target="_self" href="api/sap.m.OverflowToolbar">sap.m.OverflowToolbar</a>.</p><p>If the <code>toggleHeaderOnTitleClick</code> property of the <a target="_self" href="api/sap.f.DynamicPage">DynamicPage</a> is set to <code>true</code>, the user can switch between the expanded/collapsed states of the <a target="_self" href="api/sap.f.DynamicPageHeader">DynamicPageHeader</a> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.</p><p>If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available, and the app must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.</p><h3>Responsive Behavior</h3><p>The responsive behavior of the <code>DynamicPageTitle</code> depends on the behavior of the content that is displayed.</p>
		 */
		export class DynamicPageTitle extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>DynamicPageTitle</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some action to the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p>
			 * @param {sap.ui.core.Control} oAction <p>The action to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addAction(oAction: sap.ui.core.Control): this;
			/**
			 * <p>Adds some ariaDescribedBy into the association <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Adds some expandedContent to the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p>
			 * @param {sap.ui.core.Control} oExpandedContent <p>The expandedContent to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addExpandedContent(oExpandedContent: sap.ui.core.Control): this;
			/**
			 * <p>Adds some navigationAction to the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p>
			 * @param {sap.m.Button} oNavigationAction <p>The navigationAction to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addNavigationAction(oNavigationAction: sap.m.Button): this;
			/**
			 * <p>Adds some snappedContent to the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p>
			 * @param {sap.ui.core.Control} oSnappedContent <p>The snappedContent to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addSnappedContent(oSnappedContent: sap.ui.core.Control): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.DynamicPageTitle#events/stateChange">stateChange</a> event of this <code>sap.f.DynamicPageTitle</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.DynamicPageTitle</code> itself.</p><p>Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling, title clicking/tapping, using expand/collapse button.</p><p>Also fired when the developer toggles the title state by programmatically changing the scroll position of the scrollbar of <code>DynamicPage</code>.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.DynamicPageTitle</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachStateChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the actions in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyActions(): this;
			/**
			 * <p>Destroys the breadcrumbs in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getBreadcrumbs">breadcrumbs</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyBreadcrumbs(): this;
			/**
			 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Destroys all the expandedContent in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyExpandedContent(): this;
			/**
			 * <p>Destroys the expandedHeading in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedHeading">expandedHeading</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyExpandedHeading(): this;
			/**
			 * <p>Destroys the heading in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getHeading">heading</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyHeading(): this;
			/**
			 * <p>Destroys all the navigationActions in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyNavigationActions(): this;
			/**
			 * <p>Destroys all the snappedContent in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroySnappedContent(): this;
			/**
			 * <p>Destroys the snappedHeading in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedHeading">snappedHeading</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroySnappedHeading(): this;
			/**
			 * <p>Destroys the snappedTitleOnMobile in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedTitleOnMobile">snappedTitleOnMobile</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroySnappedTitleOnMobile(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.DynamicPageTitle#events/stateChange">stateChange</a> event of this <code>sap.f.DynamicPageTitle</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachStateChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.DynamicPageTitle#events/stateChange">stateChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireStateChange(mParameters?: any): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p><p>The <code>DynamicPageTitle</code> actions. <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls, suitable for <a target="_self" href="api/sap.m.Toolbar">sap.m.Toolbar</a> and <a target="_self" href="api/sap.m.OverflowToolbar">sap.m.OverflowToolbar</a>.</p><p><b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getActions(): sap.ui.core.Control[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getAreaShrinkRatio">areaShrinkRatio</a>.</p><p>Assigns shrinking ratio to the <code>DynamicPageTitle</code> areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.</p><p>The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.</p><p>For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.</p><p>If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.</p><p><Note:> When this property is set the <code>primaryArea</code> property has no effect.</p><p>Default value is <code>"1:1.6:1.6"</code>.</p>
			 * @returns sap.f.DynamicPageTitleShrinkRatio <p>Value of property <code>areaShrinkRatio</code></p>
			 */
			getAreaShrinkRatio(): sap.f.DynamicPageTitleShrinkRatio;
			/**
			 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @returns sap.ui.core.ID[] 
			 */
			getAriaDescribedBy(): sap.ui.core.ID[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of the <code>DynamicPageTitle</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p>
			 * @returns sap.m.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
			 */
			getBackgroundDesign(): sap.m.BackgroundDesign;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getBreadcrumbs">breadcrumbs</a>.</p><p>The breadcrumbs displayed in the <code>DynamicPageTitle</code> top-left area.</p>
			 * @returns sap.m.IBreadcrumbs 
			 */
			getBreadcrumbs(): sap.m.IBreadcrumbs;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p><p>The content is positioned in the <code>DynamicPageTitle</code> middle area and displayed in both expanded and collapsed (snapped) states.</p><p><b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getContent(): sap.ui.core.Control[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p><p>The content that is displayed in the <code>DynamicPageTitle</code> in expanded state.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getExpandedContent(): sap.ui.core.Control[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedHeading">expandedHeading</a>.</p><p>The <code>expandedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.</p><p><b>Note:</b> In order for <code>expandedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>expandedHeading</code> with <code>snappedHeading</code> to switch content when the header switches state.</p>
			 * @returns sap.ui.core.Control 
			 */
			getExpandedHeading(): sap.ui.core.Control;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getHeading">heading</a>.</p><p>The <code>heading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed in both expanded and collapsed (snapped) states of the header. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in both expanded and collapsed states of the header.</p><p><b>Notes:</b> <ul> <li><code>heading</code> is mutually exclusive with <code>snappedHeading</code> and <code>expandedHeading</code>. If <code>heading</code> is provided, both <code>snappedHeading</code> and <code>expandedHeading</code> are ignored. <code>heading</code> is useful when the content of <code>snappedHeading</code> and <code>expandedHeading</code> needs to be the same as it replaces them both.</li> <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li> </ul></p>
			 * @returns sap.ui.core.Control 
			 */
			getHeading(): sap.ui.core.Control;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p><p>The <code>DynamicPageTitle</code> navigation actions.</p><p><b>Notes:</b> <ul> <li>The <code>navigationActions</code> position depends on the control size. If the control size is 1280px or bigger, they are rendered right next to the <code>actions</code>. Otherwise, they are rendered in the top-right area, above the <code>actions</code>. If a large number of elements(buttons) are used, there could be visual degradations as the space for the <code>navigationActions</code> is limited.</li> <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li> </ul></p>
			 * @returns sap.m.Button[] 
			 */
			getNavigationActions(): sap.m.Button[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p><p>The content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state.</p><p><b>Note:</b> If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getSnappedContent(): sap.ui.core.Control[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedHeading">snappedHeading</a>.</p><p>The <code>snappedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.</p><p><b>Notes:</b> <ul> <li>In order for <code>snappedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>snappedHeading</code> with <code>expandedHeading</code> to switch content when the header switches state.</li> <li>If the <code>snappedTitleOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</li> </ul></p>
			 * @returns sap.ui.core.Control 
			 */
			getSnappedHeading(): sap.ui.core.Control;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedTitleOnMobile">snappedTitleOnMobile</a>.</p><p>The only content that is displayed in the <code>DynamicPageTitle</code> when it is viewed on a phone mobile device and the <code>DynamicPageHeader</code> is in collapsed (snapped) state.</p><p>Using this aggregation enables you to provide a simple, single-line title that takes less space on the smaller phone screens when the <code>DynamicPageHeader</code> is in its collapsed (snapped) state.</p><p><b>Note:</b> The content set in this aggregation overrides all the other <code>DynamicPageTitle</code> aggregations and is only visible on phone mobile devices in collapsed (snapped) state of the <code>DynamicPageHeader</code>.</p>
			 * @returns sap.m.Title 
			 */
			getSnappedTitleOnMobile(): sap.m.Title;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oAction <p>The action whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfAction(oAction: sap.ui.core.Control): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfContent(oContent: sap.ui.core.Control): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oExpandedContent <p>The expandedContent whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfExpandedContent(oExpandedContent: sap.ui.core.Control): number;
			/**
			 * <p>Checks for the provided <code>sap.m.Button</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.m.Button} oNavigationAction <p>The navigationAction whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfNavigationAction(oNavigationAction: sap.m.Button): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oSnappedContent <p>The snappedContent whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfSnappedContent(oSnappedContent: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a action into the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p>
			 * @param {sap.ui.core.Control} oAction <p>The action to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertAction(oAction: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Inserts a expandedContent into the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p>
			 * @param {sap.ui.core.Control} oExpandedContent <p>The expandedContent to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the expandedContent should be inserted at; for a negative value of <code>iIndex</code>, the expandedContent is inserted at position 0; for a value greater than the current size of the aggregation, the expandedContent is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertExpandedContent(oExpandedContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Inserts a navigationAction into the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p>
			 * @param {sap.m.Button} oNavigationAction <p>The navigationAction to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the navigationAction should be inserted at; for a negative value of <code>iIndex</code>, the navigationAction is inserted at position 0; for a value greater than the current size of the aggregation, the navigationAction is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertNavigationAction(oNavigationAction: sap.m.Button, iIndex: number): this;
			/**
			 * <p>Inserts a snappedContent into the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p>
			 * @param {sap.ui.core.Control} oSnappedContent <p>The snappedContent to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the snappedContent should be inserted at; for a negative value of <code>iIndex</code>, the snappedContent is inserted at position 0; for a value greater than the current size of the aggregation, the snappedContent is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertSnappedContent(oSnappedContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes a action from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vAction <p>The action to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed action or <code>null</code></p>
			 */
			removeAction(vAction: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getActions">actions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllActions(): sap.ui.core.Control[];
			/**
			 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllAriaDescribedBy(): sap.ui.core.ID[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllExpandedContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.m.Button[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllNavigationActions(): sap.m.Button[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllSnappedContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes an ariaDescribedBy from the association named <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
			 * @returns sap.ui.core.ID|null <p>The removed ariaDescribedBy or <code>null</code></p>
			 */
			removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
			/**
			 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getContent">content</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
			 */
			removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Removes a expandedContent from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedContent">expandedContent</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vExpandedContent <p>The expandedContent to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed expandedContent or <code>null</code></p>
			 */
			removeExpandedContent(vExpandedContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Removes a navigationAction from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getNavigationActions">navigationActions</a>.</p>
			 * @param {number | string | sap.m.Button} vNavigationAction <p>The navigationAction to remove or its index or id</p>
			 * @returns sap.m.Button|null <p>The removed navigationAction or <code>null</code></p>
			 */
			removeNavigationAction(vNavigationAction: number | string | sap.m.Button): sap.m.Button | null;
			/**
			 * <p>Removes a snappedContent from the aggregation <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedContent">snappedContent</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vSnappedContent <p>The snappedContent to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed snappedContent or <code>null</code></p>
			 */
			removeSnappedContent(vSnappedContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Sets the value of the <code>areaShrinkRatio</code> property.</p>
			 * @param {sap.f.DynamicPageTitleShrinkRatio} sAreaShrinkRatio <p>new value of the <code>areaShrinkRatio</code></p>
			 * @returns this <p><code>this</code> to allow method chaining</p>
			 */
			setAreaShrinkRatio(sAreaShrinkRatio: sap.f.DynamicPageTitleShrinkRatio): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Determines the background color of the <code>DynamicPageTitle</code>.</p><p><b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.m.BackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getBreadcrumbs">breadcrumbs</a>.</p>
			 * @param {sap.m.IBreadcrumbs} oBreadcrumbs <p>The breadcrumbs to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setBreadcrumbs(oBreadcrumbs: sap.m.IBreadcrumbs): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getExpandedHeading">expandedHeading</a>.</p>
			 * @param {sap.ui.core.Control} oExpandedHeading <p>The expandedHeading to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setExpandedHeading(oExpandedHeading: sap.ui.core.Control): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getHeading">heading</a>.</p>
			 * @param {sap.ui.core.Control} oHeading <p>The heading to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHeading(oHeading: sap.ui.core.Control): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedHeading">snappedHeading</a>.</p>
			 * @param {sap.ui.core.Control} oSnappedHeading <p>The snappedHeading to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSnappedHeading(oSnappedHeading: sap.ui.core.Control): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.DynamicPageTitle#methods/getSnappedTitleOnMobile">snappedTitleOnMobile</a>.</p>
			 * @param {sap.m.Title} oSnappedTitleOnMobile <p>The snappedTitleOnMobile to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSnappedTitleOnMobile(oSnappedTitleOnMobile: sap.m.Title): this;
		}
		/**
		 * <p><p>Defines the areas within the <code>sap.f.DynamicPageTitle</code> control.</p></p>
		 */
		export enum DynamicPageTitleArea {
			/**
			 * <p>The area includes the <code>heading</code>, <code>expandedContent</code> and <code>snappedContent</code> aggregations, positioned in the beginning area of the <a target="_self" href="api/sap.f.DynamicPageTitle">sap.f.DynamicPageTitle</a>.</p>
			 */
			Begin = "Begin",
			/**
			 * <p>The area includes the <code>content</code> aggregation, positioned in the middle part of the <a target="_self" href="api/sap.f.DynamicPageTitle">sap.f.DynamicPageTitle</a>.</p>
			 */
			Middle = "Middle",
		}
		/**
		 * <p>Implements the master-detail-detail paradigm by displaying up to three pages in separate columns.</p><h3>Overview</h3><p>The control is logically similar to <a target="_self" href="api/sap.m.SplitContainer">sap.m.SplitContainer</a> with the difference that it capable of handling three columns (referred to as <code>Begin</code>, <code>Mid</code> and <code>End</code>) rather than two (<code>Master</code>, <code>Detail</code>). The width of the three columns is variable.</p><p>There are several possible layouts that can be changed either with the control's API, or by the user with the help of layout arrows.</p><p>Internally the control makes use of three instances of <a target="_self" href="api/sap.m.NavContainer">sap.m.NavContainer</a>, thus forming the three columns.</p><h3>Usage</h3><p>Use this control for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.). The control is flexible in a sense that the application can focus the user's attention on one particular column by making it larger or even fullscreen.</p><p>The columns are accessible with the <code>beginColumnPages</code>, <code>midColumnPages</code> and <code>endColumnPages</code> aggregations.</p><p>The relative sizes and the visibility of the three columns are determined based on the value of the <a target="_self" href="api/sap.f.LayoutType">layout</a> property.</p><p>Changes to the layout due to user interaction are communicated to the app with the <code>stateChange</code> event.</p><p><ul><b>Notes:</b> <li>To easily implement the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app, you can use the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class.</li> <li>To facilitate the navigation and view loading, you can use the <a target="_self" href="api/sap.f.routing.Router">sap.f.routing.Router</a> </li></ul></p><h3>Responsive Behavior</h3><p>The control automatically displays the maximum possible number of columns based on the device size and current <code>layout</code>. The app does not need to take into consideration the current device/screen size, but only to add content to the columns and change the value of the <code>layout</code> property.</p><p>For detailed information, see <a target="_self" href="api/sap.f.LayoutType">LayoutType</a> enumeration.</p>
		 */
		export class FlexibleColumnLayout extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>sap.f.FlexibleColumnLayout</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some beginColumnPage to the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oBeginColumnPage <p>The beginColumnPage to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addBeginColumnPage(oBeginColumnPage: sap.ui.core.Control): this;
			/**
			 * <p>Adds some endColumnPage to the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oEndColumnPage <p>The endColumnPage to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addEndColumnPage(oEndColumnPage: sap.ui.core.Control): this;
			/**
			 * <p>Adds some midColumnPage to the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oMidColumnPage <p>The midColumnPage to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addMidColumnPage(oMidColumnPage: sap.ui.core.Control): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterBeginColumnNavigate">afterBeginColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>Begin</code> column has completed.</p><p>NOTE: In case of animated transitions this event is fired with some delay after the navigate event.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachAfterBeginColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterEndColumnNavigate">afterEndColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>End</code> column has completed.</p><p>NOTE: In case of animated transitions this event is fired with some delay after the navigate event.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachAfterEndColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterMidColumnNavigate">afterMidColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>Mid</code> column has completed.</p><p>NOTE: In case of animated transitions this event is fired with some delay after the navigate event.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachAfterMidColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/beginColumnNavigate">beginColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachBeginColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/columnResize">columnResize</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fired when resize of each column has completed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachColumnResize(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/endColumnNavigate">endColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachEndColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/midColumnNavigate">midColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachMidColumnNavigate(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/stateChange">stateChange</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.</p><p>Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once. <br/></br> <ul>The interactions that may lead to a state change are: <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li> <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul> <br/><br/> <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachStateChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Navigates back to a page in the <code>FlexibleColumnLayout</code>. Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.</p><p>Calling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer, then the BeforeHide pseudo event on the source page, BeforeFirstShow (if applicable), and BeforeShow on the target page. Later, after the transition has completed, the AfterShow pseudo event is triggered on the target page and AfterHide - on the page, which has been left. The given backData object is available in the BeforeFirstShow, BeforeShow, and AfterShow event objects as data property. The original "data" object from the "to" navigation is also available in these event objects.</p>
			 * @param {string} sPageId <p>The screen to which is being navigated to. The ID or the control itself can be given.</p>
			 * @param {any} oBackData <p>This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as backData property. (the original data from the to() navigation will still be available as data property).</p><p>In scenarios, where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.</p><p>When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.</p><p>In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			backToPage(sPageId: string, oBackData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates back to the initial/top level of Begin column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.</p>
			 * @param {any} oBackData <p>This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)</p><p>In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.</p><p>When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.</p><p>In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			backToTopBeginColumn(oBackData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates back to the initial/top level of End column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.</p>
			 * @param {any} oBackData <p>This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)</p><p>In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.</p><p>When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.</p><p>In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			backToTopEndColumn(oBackData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates back to the initial/top level of Mid column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.</p>
			 * @param {any} oBackData <p>This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)</p><p>In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.</p><p>When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.</p><p>In order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			backToTopMidColumn(oBackData: any, oTransitionParameters: any): this;
			/**
			 * <p>Destroys all the beginColumnPages in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyBeginColumnPages(): this;
			/**
			 * <p>Destroys all the endColumnPages in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyEndColumnPages(): this;
			/**
			 * <p>Destroys the landmarkInfo in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLandmarkInfo">landmarkInfo</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLandmarkInfo(): this;
			/**
			 * <p>Destroys all the midColumnPages in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyMidColumnPages(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterBeginColumnNavigate">afterBeginColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachAfterBeginColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterEndColumnNavigate">afterEndColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachAfterEndColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterMidColumnNavigate">afterMidColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachAfterMidColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/beginColumnNavigate">beginColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachBeginColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/columnResize">columnResize</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachColumnResize(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/endColumnNavigate">endColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachEndColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/midColumnNavigate">midColumnNavigate</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachMidColumnNavigate(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/stateChange">stateChange</a> event of this <code>sap.f.FlexibleColumnLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachStateChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterBeginColumnNavigate">afterBeginColumnNavigate</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireAfterBeginColumnNavigate(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterEndColumnNavigate">afterEndColumnNavigate</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireAfterEndColumnNavigate(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/afterMidColumnNavigate">afterMidColumnNavigate</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireAfterMidColumnNavigate(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/beginColumnNavigate">beginColumnNavigate</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns boolean <p>Whether or not to prevent the default action</p>
			 */
			protected fireBeginColumnNavigate(mParameters?: any): boolean;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/columnResize">columnResize</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireColumnResize(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/endColumnNavigate">endColumnNavigate</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns boolean <p>Whether or not to prevent the default action</p>
			 */
			protected fireEndColumnNavigate(mParameters?: any): boolean;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/midColumnNavigate">midColumnNavigate</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns boolean <p>Whether or not to prevent the default action</p>
			 */
			protected fireMidColumnNavigate(mParameters?: any): boolean;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.FlexibleColumnLayout#events/stateChange">stateChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireStateChange(mParameters?: any): this;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getAutoFocus">autoFocus</a>.</p><p>Determines whether the initial focus is set automatically on first rendering and after navigating to a new page.</p><p>For more information, see <a target="_self" href="api/sap.m.NavContainer#methods/autoFocus">sap.m.NavContainer#autoFocus</a>.</p><p>Default value is <code>true</code>.</p>
			 * @returns boolean <p>Value of property <code>autoFocus</code></p>
			 */
			getAutoFocus(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the content. The visualization of the different options depends on the used theme.</p><p>Default value is <code>Transparent</code>.</p>
			 * @returns sap.m.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
			 */
			getBackgroundDesign(): sap.m.BackgroundDesign;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p><p>The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Begin</code> column.</p><p>These should be any control with page semantics. These aggregated controls will receive navigation events like <a target="_self" href="api/sap.m.NavContainerChild#events/BeforeShow">BeforeShow</a>, they are documented in the pseudo interface <a target="_self" href="api/sap.m.NavContainerChild">sap.m.NavContainerChild</a>.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getBeginColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>Returns the currently displayed Begin column page.</p>
			 * @returns sap.ui.core.Control <p>The UI5 control in the Begin column</p>
			 */
			getCurrentBeginColumnPage(): sap.ui.core.Control;
			/**
			 * <p>Returns the currently displayed End column page.</p>
			 * @returns sap.ui.core.Control <p>The UI5 control in the End column</p>
			 */
			getCurrentEndColumnPage(): sap.ui.core.Control;
			/**
			 * <p>Returns the currently displayed Mid column page.</p>
			 * @returns sap.ui.core.Control <p>The UI5 control in the Mid column</p>
			 */
			getCurrentMidColumnPage(): sap.ui.core.Control;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameBeginColumn">defaultTransitionNameBeginColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>Default value is <code>"slide"</code>.</p>
			 * @returns string <p>Value of property <code>defaultTransitionNameBeginColumn</code></p>
			 */
			getDefaultTransitionNameBeginColumn(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameEndColumn">defaultTransitionNameEndColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>Default value is <code>"slide"</code>.</p>
			 * @returns string <p>Value of property <code>defaultTransitionNameEndColumn</code></p>
			 */
			getDefaultTransitionNameEndColumn(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameMidColumn">defaultTransitionNameMidColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>Default value is <code>"slide"</code>.</p>
			 * @returns string <p>Value of property <code>defaultTransitionNameMidColumn</code></p>
			 */
			getDefaultTransitionNameMidColumn(): string;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p><p>The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>End</code> column.</p><p>These should be any control with page semantics. These aggregated controls will receive navigation events like <a target="_self" href="api/sap.m.NavContainerChild#events/BeforeShow">BeforeShow</a>, they are documented in the pseudo interface <a target="_self" href="api/sap.m.NavContainerChild">sap.m.NavContainerChild</a>.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getEndColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialBeginColumnPage">initialBeginColumnPage</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getInitialBeginColumnPage(): sap.ui.core.ID;
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialEndColumnPage">initialEndColumnPage</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getInitialEndColumnPage(): sap.ui.core.ID;
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialMidColumnPage">initialMidColumnPage</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getInitialMidColumnPage(): sap.ui.core.ID;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLandmarkInfo">landmarkInfo</a>.</p><p>Accessible landmark settings to be applied on the containers of the <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, no landmarks will be written.</p>
			 * @returns sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo 
			 */
			getLandmarkInfo(): sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a>.</p><p>Determines the layout of the control - number of visible columns and their relative sizes.</p><p>For more details, see <a target="_self" href="topic/3b9f760da5b64adf8db7f95247879086">Types of Layout</a> in the documentation.</p><p>Default value is <code>OneColumn</code>.</p>
			 * @returns sap.f.LayoutType <p>Value of property <code>layout</code></p>
			 */
			getLayout(): sap.f.LayoutType;
			/**
			 * <p>Returns the maximum number of columns that can be displayed at once based on the control width</p>
			 * @returns number <p>The maximum number of columns</p>
			 */
			getMaxColumnsCount(): number;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p><p>The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Mid</code> column.</p><p>These should be any control with page semantics. These aggregated controls will receive navigation events like <a target="_self" href="api/sap.m.NavContainerChild#events/BeforeShow">BeforeShow</a>, they are documented in the pseudo interface <a target="_self" href="api/sap.m.NavContainerChild">sap.m.NavContainerChild</a>.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getMidColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getRestoreFocusOnBackNavigation">restoreFocusOnBackNavigation</a>.</p><p>Determines whether the focus is restored to the last known when navigating back to a prevously opened column, for example, upon closing of the end column and being transfered back to the mid column.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>restoreFocusOnBackNavigation</code></p>
			 */
			getRestoreFocusOnBackNavigation(): boolean;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oBeginColumnPage <p>The beginColumnPage whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfBeginColumnPage(oBeginColumnPage: sap.ui.core.Control): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oEndColumnPage <p>The endColumnPage whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfEndColumnPage(oEndColumnPage: sap.ui.core.Control): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oMidColumnPage <p>The midColumnPage whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfMidColumnPage(oMidColumnPage: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a beginColumnPage into the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oBeginColumnPage <p>The beginColumnPage to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the beginColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the beginColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the beginColumnPage is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertBeginColumnPage(oBeginColumnPage: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Inserts a endColumnPage into the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oEndColumnPage <p>The endColumnPage to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the endColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the endColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the endColumnPage is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertEndColumnPage(oEndColumnPage: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Inserts a midColumnPage into the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p>
			 * @param {sap.ui.core.Control} oMidColumnPage <p>The midColumnPage to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the midColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the midColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the midColumnPage is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertMidColumnPage(oMidColumnPage: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllBeginColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllEndColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllMidColumnPages(): sap.ui.core.Control[];
			/**
			 * <p>Removes a beginColumnPage from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBeginColumnPages">beginColumnPages</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vBeginColumnPage <p>The beginColumnPage to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed beginColumnPage or <code>null</code></p>
			 */
			removeBeginColumnPage(vBeginColumnPage: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Removes a endColumnPage from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getEndColumnPages">endColumnPages</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vEndColumnPage <p>The endColumnPage to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed endColumnPage or <code>null</code></p>
			 */
			removeEndColumnPage(vEndColumnPage: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Removes a midColumnPage from the aggregation <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMidColumnPages">midColumnPages</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vMidColumnPage <p>The midColumnPage to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed midColumnPage or <code>null</code></p>
			 */
			removeMidColumnPage(vMidColumnPage: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getAutoFocus">autoFocus</a>.</p><p>Determines whether the initial focus is set automatically on first rendering and after navigating to a new page.</p><p>For more information, see <a target="_self" href="api/sap.m.NavContainer#methods/autoFocus">sap.m.NavContainer#autoFocus</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
			 * @param {boolean} bAutoFocus <p>New value for property <code>autoFocus</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAutoFocus(bAutoFocus?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the content. The visualization of the different options depends on the used theme.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Transparent</code>.</p>
			 * @param {sap.m.BackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setBackgroundDesign(sBackgroundDesign?: sap.m.BackgroundDesign): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameBeginColumn">defaultTransitionNameBeginColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"slide"</code>.</p>
			 * @param {string} sDefaultTransitionNameBeginColumn <p>New value for property <code>defaultTransitionNameBeginColumn</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setDefaultTransitionNameBeginColumn(sDefaultTransitionNameBeginColumn?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameEndColumn">defaultTransitionNameEndColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"slide"</code>.</p>
			 * @param {string} sDefaultTransitionNameEndColumn <p>New value for property <code>defaultTransitionNameEndColumn</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setDefaultTransitionNameEndColumn(sDefaultTransitionNameEndColumn?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getDefaultTransitionNameMidColumn">defaultTransitionNameMidColumn</a>.</p><p>Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"slide"</code>.</p>
			 * @param {string} sDefaultTransitionNameMidColumn <p>New value for property <code>defaultTransitionNameMidColumn</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setDefaultTransitionNameMidColumn(sDefaultTransitionNameMidColumn?: string): this;
			/**
			 * <p>Sets the associated <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialBeginColumnPage">initialBeginColumnPage</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialBeginColumnPage <p>ID of an element which becomes the new target of this initialBeginColumnPage association; alternatively, an element instance may be given</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setInitialBeginColumnPage(oInitialBeginColumnPage: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Sets the associated <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialEndColumnPage">initialEndColumnPage</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialEndColumnPage <p>ID of an element which becomes the new target of this initialEndColumnPage association; alternatively, an element instance may be given</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setInitialEndColumnPage(oInitialEndColumnPage: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Sets the associated <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getInitialMidColumnPage">initialMidColumnPage</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} oInitialMidColumnPage <p>ID of an element which becomes the new target of this initialMidColumnPage association; alternatively, an element instance may be given</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setInitialMidColumnPage(oInitialMidColumnPage: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLandmarkInfo">landmarkInfo</a>.</p>
			 * @param {sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo} oLandmarkInfo <p>The landmarkInfo to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLandmarkInfo(oLandmarkInfo: sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a>.</p><p>Determines the layout of the control - number of visible columns and their relative sizes.</p><p>For more details, see <a target="_self" href="topic/3b9f760da5b64adf8db7f95247879086">Types of Layout</a> in the documentation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>OneColumn</code>.</p>
			 * @param {sap.f.LayoutType} sLayout <p>New value for property <code>layout</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayout(sLayout?: sap.f.LayoutType): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getRestoreFocusOnBackNavigation">restoreFocusOnBackNavigation</a>.</p><p>Determines whether the focus is restored to the last known when navigating back to a prevously opened column, for example, upon closing of the end column and being transfered back to the mid column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bRestoreFocusOnBackNavigation <p>New value for property <code>restoreFocusOnBackNavigation</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setRestoreFocusOnBackNavigation(bRestoreFocusOnBackNavigation?: boolean): this;
			/**
			 * <p>Navigates to the given page inside the FlexibleColumnLayout. Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.</p>
			 * @param {string} sPageId <p>The screen to which we are navigating to. The ID or the control itself can be given.</p>
			 * @param {string} sTransitionName <p>The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right), "fade", "flip", and "show" and the names of any registered custom transitions.</p><p>None of the standard transitions is currently making use of any given transition parameters.</p>
			 * @param {any} oData <p>This optional object can carry any payload data which should be made available to the target page. The BeforeShow event on the target page will contain this data object as data property.</p><p>Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.</p><p>When the transitionParameters object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.</p><p>For a proper parameter order, the "data" parameter must be given when the transitionParameters parameter is used (it can be given as "null").</p><p>NOTE: It depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			to(sPageId: string, sTransitionName: string, oData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates to a given Begin column page.</p>
			 * @param {string} sPageId <p>The screen to which drilldown should happen. The ID or the control itself can be given.</p>
			 * @param {string} sTransitionName <p>The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right), "fade", "flip", and "show" and the names of any registered custom transitions.</p><p>None of the standard transitions is currently making use of any given transition parameters.</p>
			 * @param {any} oData <p>This optional object can carry any payload data which should be made available to the target page. The BeforeShow event on the target page will contain this data object as data property.</p><p>Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.</p><p>When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.</p><p>For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			toBeginColumnPage(sPageId: string, sTransitionName: string, oData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates to a given End column page.</p>
			 * @param {string} sPageId <p>The screen to which drilldown should happen. The ID or the control itself can be given.</p>
			 * @param {string} sTransitionName <p>The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right), "fade", "flip", and "show" and the names of any registered custom transitions.</p><p>None of the standard transitions is currently making use of any given transition parameters.</p>
			 * @param {any} oData <p>This optional object can carry any payload data which should be made available to the target page. The BeforeShow event on the target page will contain this data object as data property.</p><p>Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.</p><p>When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.</p><p>For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			toEndColumnPage(sPageId: string, sTransitionName: string, oData: any, oTransitionParameters: any): this;
			/**
			 * <p>Navigates to a given Mid column page.</p>
			 * @param {string} sPageId <p>The screen to which drilldown should happen. The ID or the control itself can be given.</p>
			 * @param {string} sTransitionName <p>The type of the transition/animation to apply. Options are: "slide" (horizontal movement from the right), "fade", "flip", and "show" and the names of any registered custom transitions.</p><p>None of the standard transitions is currently making use of any given transition parameters.</p>
			 * @param {any} oData <p>This optional object can carry any payload data which should be made available to the target page. The BeforeShow event on the target page will contain this data object as data property.</p><p>Use case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.</p><p>When the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order.</p>
			 * @param {any} oTransitionParameters <p>This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.</p><p>For a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").</p><p>NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.</p>
			 * @returns this <p>The <code>sap.f.FlexibleColumnLayout</code> instance</p>
			 */
			toMidColumnPage(sPageId: string, sTransitionName: string, oData: any, oTransitionParameters: any): this;
		}
		namespace FlexibleColumnLayout {
			/**
			 */
			export class LayoutHistory {
				/**
				 * <p>Layout history helper class.</p>
				 */
				constructor();
			}
		}
		/**
		 * <p>Settings for accessible landmarks which can be applied to the container elements of a <code>sap.f.FlexibleColumnLayout</code> control. For example, these landmarks are used by assistive technologies (such as screen readers) to provide a meaningful columns overview.</p>
		 */
		export class FlexibleColumnLayoutAccessibleLandmarkInfo extends sap.ui.core.Element {
			/**
			 * <p>Constructor for a new <code>sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo</code> element.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new element</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getFirstColumnBackArrowLabel">firstColumnBackArrowLabel</a>.</p><p>Text that describes the landmark of the back arrow of the first column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>firstColumnBackArrowLabel</code></p>
			 */
			getFirstColumnBackArrowLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getFirstColumnLabel">firstColumnLabel</a>.</p><p>Text that describes the landmark of the first column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>firstColumnLabel</code></p>
			 */
			getFirstColumnLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getLastColumnForwardArrowLabel">lastColumnForwardArrowLabel</a>.</p><p>Text that describes the landmark of forward arrow of the last column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>lastColumnForwardArrowLabel</code></p>
			 */
			getLastColumnForwardArrowLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getLastColumnLabel">lastColumnLabel</a>.</p><p>Text that describes the landmark of the last column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>lastColumnLabel</code></p>
			 */
			getLastColumnLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnBackArrowLabel">middleColumnBackArrowLabel</a>.</p><p>Text that describes the landmark of back arrow of the middle column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>middleColumnBackArrowLabel</code></p>
			 */
			getMiddleColumnBackArrowLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnForwardArrowLabel">middleColumnForwardArrowLabel</a>.</p><p>Text that describes the landmark of forward arrow of the middle column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>middleColumnForwardArrowLabel</code></p>
			 */
			getMiddleColumnForwardArrowLabel(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnLabel">middleColumnLabel</a>.</p><p>Text that describes the landmark of the middle column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p>
			 * @returns string <p>Value of property <code>middleColumnLabel</code></p>
			 */
			getMiddleColumnLabel(): string;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getFirstColumnBackArrowLabel">firstColumnBackArrowLabel</a>.</p><p>Text that describes the landmark of the back arrow of the first column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sFirstColumnBackArrowLabel <p>New value for property <code>firstColumnBackArrowLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFirstColumnBackArrowLabel(sFirstColumnBackArrowLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getFirstColumnLabel">firstColumnLabel</a>.</p><p>Text that describes the landmark of the first column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sFirstColumnLabel <p>New value for property <code>firstColumnLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setFirstColumnLabel(sFirstColumnLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getLastColumnForwardArrowLabel">lastColumnForwardArrowLabel</a>.</p><p>Text that describes the landmark of forward arrow of the last column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sLastColumnForwardArrowLabel <p>New value for property <code>lastColumnForwardArrowLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLastColumnForwardArrowLabel(sLastColumnForwardArrowLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getLastColumnLabel">lastColumnLabel</a>.</p><p>Text that describes the landmark of the last column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sLastColumnLabel <p>New value for property <code>lastColumnLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLastColumnLabel(sLastColumnLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnBackArrowLabel">middleColumnBackArrowLabel</a>.</p><p>Text that describes the landmark of back arrow of the middle column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sMiddleColumnBackArrowLabel <p>New value for property <code>middleColumnBackArrowLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMiddleColumnBackArrowLabel(sMiddleColumnBackArrowLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnForwardArrowLabel">middleColumnForwardArrowLabel</a>.</p><p>Text that describes the landmark of forward arrow of the middle column in the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sMiddleColumnForwardArrowLabel <p>New value for property <code>middleColumnForwardArrowLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMiddleColumnForwardArrowLabel(sMiddleColumnForwardArrowLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.FlexibleColumnLayoutAccessibleLandmarkInfo#methods/getMiddleColumnLabel">middleColumnLabel</a>.</p><p>Text that describes the landmark of the middle column of the corresponding <code>sap.f.FlexibleColumnLayout</code> control.</p><p>If not set, a predefined text is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sMiddleColumnLabel <p>New value for property <code>middleColumnLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMiddleColumnLabel(sMiddleColumnLabel?: string): this;
		}
		/**
		 * <p>Helper class, facilitating the implementation of the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app.</p><p><b>Note:</b> Using this class is not mandatory in order to build an app with <code>sap.f.FlexibleColumnLayout</code>, but exists for convenience only.</p><p><ul>The usage of <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> revolves around two main methods: <li><code>getCurrentUIState</code>Suggests which action buttons to show in each <code>sap.f.FlexibleColumnLayout</code> column, based on the current control state (number and visibility of columns, layout, etc..)</li> <li><code>getNextUIState</code>Suggests which <code>layout</code> to use when navigating to another view level (e.g. from one view to two views).</li></ul></p><p>Sample usage of the class:</p><p><pre>
		<code>
		 var helper = sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(myFlexibleColumnLayout);
		 helper.getCurrentUIState();
		 helper.getNextUIState(2);
		 helper.getNextUIState(0);
		</code>
		</pre></p><p>Calling <code>getCurrentUIState()</code> will return information which action buttons (Close, FullScreen, ExitFullScreen) must be currently shown in which column, according to UX guidelines, as well as to what layout clicking them should lead.</p><p>Calling <code>getNextUIState(2)</code> will return information about the expected layout and action buttons if the application should display three views (master-detail-detail), based on the current state.</p><p>Similarly, calling <code>getNextUIState(0)</code> will return information about the expected layout and action buttons if the application should display the initial view only (master), based on the current state.</p><p>For more information, see <a target="_self" href="api/sap.f.FlexibleColumnLayoutSemanticHelper#methods/getCurrentUIState">sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState</a> and <a target="_self" href="api/sap.f.FlexibleColumnLayoutSemanticHelper#methods/getNextUIState">sap.f.FlexibleColumnLayoutSemanticHelper#getNextUIState</a></p>
		 */
		export class FlexibleColumnLayoutSemanticHelper {
			/**
			 * <p>Returns an instance of the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class for a given <code>sap.f.FlexibleColumnLayout</code> object.</p>
			 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout <p>The <code>sap.f.FlexibleColumnLayout</code> object to get a semantic helper instance for</p>
			 * @param {any} oSettings <p>An optional settings object to be used when creating the instance. <b>Note:</b> will be considered only for the first <code>getInstanceFor</code> call for the given <code>sap.f.FlexibleColumnLayout</code> object.</p>
			 * @returns sap.f.FlexibleColumnLayoutSemanticHelper <p>The <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> instance</p>
			 */
			static getInstanceFor(oFlexibleColumnLayout: sap.f.FlexibleColumnLayout, oSettings?: any): sap.f.FlexibleColumnLayoutSemanticHelper;
			/**
			 * <p>Constructor for an sap.f.FlexibleColumnLayoutSemanticHelper.</p>
			 * @param {sap.f.FlexibleColumnLayout} oFlexibleColumnLayout <p>The <code>sap.f.FlexibleColumnLayout</code> object whose state will be manipulated.</p>
			 * @param {any} oSettings <p>Determines the rules that will be used by the helper.</p>
			 */
			constructor(oFlexibleColumnLayout: sap.f.FlexibleColumnLayout, oSettings: any);
			/**
			 * <p>Returns an object describing the current state of the control and the expected action buttons for each column.</p><p><b>Note:</b> This method relies on the internal <code>FlexibleColumnLayout</code> reference to be rendered in the DOM tree. For convenience, use methods <a target="_self" href="api/sap.f.FlexibleColumnLayoutSemanticHelper#methods/isDOMReady">sap.f.FlexibleColumnLayoutSemanticHelper#isDOMReady</a> and <a target="_self" href="api/sap.f.FlexibleColumnLayoutSemanticHelper#methods/whenDOMReady">sap.f.FlexibleColumnLayoutSemanticHelper#whenDOMReady</a>.</p>
			 * @returns sap.f.FlexibleColumnLayoutSemanticHelper.UIState <p>The object describing the current UI state</p>
			 */
			getCurrentUIState(): sap.f.FlexibleColumnLayoutSemanticHelper.UIState;
			/**
			 * <p>Returns the default layout types for the different numbers of columns.</p><p><ul>The returned object has the following fields: <li>defaultLayoutType - the layout that will be suggested by default when only 1 column needs to be shown</li> <li>defaultTwoColumnLayoutType - the layout that will be suggested by default when 2 columns have to be shown side by side</li> <li>defaultThreeColumnLayoutType - the layout that will be suggested by default when 3 columns have to be shown side by side</li></ul></p>
			 * @returns any <p>The object describing the default layout types for the different numbers of columns</p>
			 */
			getDefaultLayouts(): any;
			/**
			 * <p>Returns an object, describing the state that the control will have after navigating to a different view level.</p>
			 * @param {number} iNextLevel <p>the view level that should be represented. 0 means initial (master only), 1 - master-detail, 2 - master-detail-detail, 3 and above - subsequent views</p>
			 * @returns sap.f.FlexibleColumnLayoutSemanticHelper.UIState <p>The object describing the next UI state</p>
			 */
			getNextUIState(iNextLevel: number): sap.f.FlexibleColumnLayoutSemanticHelper.UIState;
			/**
			 * <p>Returns <code>true</code> if internal <code>FlexibleColumnLayout</code> reference is rendered in the DOM tree.</p>
			 * @returns boolean <p>true if the associated <code>FlexibleColumnLayout</code> is rendered</p>
			 */
			isDOMReady(): boolean;
			/**
			 * <p>Abstract wrapper for <a target="_self" href="api/sap.f.FlexibleColumnLayoutSemanticHelper#methods/isDOMReady">sap.f.FlexibleColumnLayoutSemanticHelper#isDOMReady</a>. Returns <code>true</code> if criteria are met for the APIs in this helper to be used.</p>
			 * @returns boolean <p>true if this helper's API reliability criteria are met</p>
			 */
			isReady(): boolean;
			/**
			 * <p>Returns promise which can be used to find out when the internal <code>FlexibleColumnLayout</code> is rendered. This is needed because methods in <code>FlexibleColumnLayout</code> rely on the control being rendered.</p>
			 * @returns Promise<any> <p>A promise that resolves after <code>FlexibleColumnLayout</code> is rendered</p>
			 */
			whenDOMReady(): Promise<any>;
			/**
			 * <p>Returns promise which can be used to find out when internal criteria for this helper's API reliability are met.</p>
			 * @returns Promise<any> <p>A promise that resolves after internal criteria are met</p>
			 */
			whenReady(): Promise<any>;
		}
		namespace FlexibleColumnLayoutSemanticHelper {
			/**
			 * <p><p>The configuration of the navigation actions in the columns.</p></p>
			 */
			export interface ColumnsNavigationActions {
				/**
				 * <p>Configuration of the navigation actions of the mid column.</p>
				 */
				midColumn: any;
				/**
				 * <p>Configuration of the navigation actions of the end column.</p>
				 */
				endColumn: any;
			}
			/**
			 * <p><p>Represents the relative percentage sizes of all columns as integers.</p></p>
			 */
			export interface ColumnsSizes {
				/**
				 * <p>The relative percentage width of the begin column as integer.</p>
				 */
				beginColumn: any;
				/**
				 * <p>The relative percentage width of the mid column as integer.</p>
				 */
				midColumn: any;
				/**
				 * <p>The relative percentage width of the end column as integer.</p>
				 */
				endColumn: any;
			}
			/**
			 * <p><p>Represents the visibility of the columns.</p></p>
			 */
			export interface ColumnsVisibility {
				/**
				 * <p>The visibility of the begin column.</p>
				 */
				beginColumn: any;
				/**
				 * <p>The visibility of the mid column.</p>
				 */
				midColumn: any;
				/**
				 * <p>The visibility of the end column.</p>
				 */
				endColumn: any;
			}
			/**
			 * <p><p>Configures the target layouts of the navigation acion buttons in a column.</p></p>
			 */
			export interface NavigationActionsTargets {
				/**
				 * <p>The target <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a> when the <code>fullscreen</code> navigation action button is pressed. If null, then the respective action button should not be shown.</p>
				 */
				fullScreen: any;
				/**
				 * <p>The target <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a> when the <code>exitFullScreen</code> navigation action button is pressed. If null, then the respective action button should not be shown.</p>
				 */
				exitFullScreen: any;
				/**
				 * <p>The target <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a> when the <code>closeColumn</code> navigation action button is pressed. If null, then the respective action button should not be shown.</p>
				 */
				closeColumn: any;
			}
			/**
			 * <p><p>Configuration of the state of the <code>FlexibleColumnLayout</code> control and the expected action buttons for each column.</p><p>Example value:</p><p><pre>
			 <code>
			 {
				   "layout":"ThreeColumnsMidExpanded",
				   "maxColumnsCount":3,
				   "columnsSizes":{
					  "beginColumn":25,
					  "midColumn":50,
					  "endColumn":25
				   },
				   "columnsVisibility":{
					  "beginColumn":true,
					  "midColumn":true,
					  "endColumn":true
				   },
				   "isFullScreen":false,
				   "isLogicallyFullScreen":false,
				   "actionButtonsInfo":{
					  "midColumn":{
						 "fullScreen":null,
						 "exitFullScreen":null,
						 "closeColumn":null
					  },
					  "endColumn":{
						 "fullScreen":"EndColumnFullScreen",
						 "exitFullScreen":null,
						 "closeColumn":"TwoColumnsBeginExpanded"
					  }
				   }
				}
			 </code>
			 </pre></p></p>
			 */
			export interface UIState {
				/**
				 * <p>The value of the <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getLayout">layout</a> property.</p>
				 */
				layout: any;
				/**
				 * <p>The maximum number of columns that can be displayed at once based on the control width. See <a target="_self" href="api/sap.f.FlexibleColumnLayout#methods/getMaxColumnsCount">sap.f.FlexibleColumnLayout#getMaxColumnsCount</a></p>
				 */
				maxColumnsCount: any;
				/**
				 * <p>Represents the relative percentage sizes of all columns as integers.</p>
				 */
				columnsSizes: any;
				/**
				 * <p>Represents the visibility of the columns.</p>
				 */
				columnsVisibility: any;
				/**
				 * <p>The value is <code>true</code> if only one column is visible at the moment, <code>false</code> otherwise.</p><p><b>Note:</b> This may be due to small screen size (phone) or due to a layout, for which a single column takes up the whole width.</p>
				 */
				isFullScreen: any;
				/**
				 * <p>The value is <code>true</code> if the current <code>layout</code> is one of the following: <code>sap.f.LayoutType.OneColumn, sap.f.LayoutType.MidColumnFullScreen, sap.f.LayoutType.EndColumnFullScreen</code>, <code>false</code> otherwise.</p><p><b>Note:</b> While <code>isFullScreen</code> can be <code>true</code> for any layout, due to small screen size, <code>isLogicallyFullScreen</code> will only be <code>true</code> for the layout values, listed above.</p>
				 */
				isLogicallyFullScreen: any;
				/**
				 * <p>The configuration of the navigation actions in the columns.</p>
				 */
				actionButtonsInfo: any;
			}
		}
		/**
		 * <p>A layout container control used for aligning items with various sizes in a simple grid.</p><h3>Overview</h3><p>The control is used to align tiles, cards and other controls in configuration, such as a home page or a dashboard. It represents a grid layout with specific row and column sizes, in which the items can take any number of rows and columns.</p><p>The number of columns and rows each item takes can be configured with the use of the <code><a target="_self" href="api/sap.f.GridContainerItemLayoutData">sap.f.GridContainerItemLayoutData</a></code>.</p><p>All rows have the same height and all columns have the same width. Their sizes can be configured with the use of the <code>layout</code> aggregation and <code><a target="_self" href="api/sap.f.GridContainerSettings">sap.f.GridContainerSettings</a></code>.</p><h3>Usage</h3><p><i>When to use</i> <ul> <li>For aligning home page and dashboard items like Tiles and Cards in a simple grid system with equally sized rows and columns.</li> </ul></p><p><i>When not to use</i> <ul> <li>If a more complex layout grid system, where columns and rows may vary in size, is needed.</li> </ul></p><h3>Example:</h3><p> <pre>
		&lt;f:GridContainer&gt;
			&lt;f:layout&gt;
				&lt;f:GridContainerSettings rowSize=&quot;5rem&quot; columnSize=&quot;5rem&quot; gap=&quot;1rem&quot; /&gt;
			&lt;/f:layout&gt;
			&lt;f:layoutS&gt;
				&lt;f:GridContainerSettings rowSize=&quot;4rem&quot; columnSize=&quot;4rem&quot; gap=&quot;0.5rem&quot; /&gt;
			&lt;/f:layoutS&gt;
			&lt;f:items&gt;
				&lt;GenericTile header=&quot;Sales Fulfillment&quot;&gt;
					&lt;layoutData&gt;
						&lt;f:GridContainerItemLayoutData rows=&quot;2&quot; columns=&quot;2&quot; /&gt;
					&lt;/layoutData&gt;
				&lt;/GenericTile&gt;
				&lt;w:Card manifest=&quot;url-to-manifest&quot;&gt;
					&lt;w:layoutData&gt;
						&lt;f:GridContainerItemLayoutData rows=&quot;6&quot; columns=&quot;3&quot; /&gt;
					&lt;/w:layoutData&gt;
				&lt;/w:Card&gt;
				&lt;Panel&gt;
					&lt;layoutData&gt;
						&lt;f:GridContainerItemLayoutData columns=&quot;4&quot; /&gt;
					&lt;/layoutData&gt;
					&lt;Text text=&quot;Sales information&quot; /&gt;
				&lt;/Panel&gt;
			&lt;/f:items&gt;
		&lt;/f:GridContainer&gt;
		</pre></p><h3>Drag and drop:</h3><p> Drag and drop is enabled for the <code>GridContainer</code> with enhanced visualization and interaction, better suited for grid items. This is configured by using the <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code>.</p><p>Similar to the <code><a target="_self" href="api/sap.ui.core.dnd.DropInfo">sap.ui.core.dnd.DropInfo</a></code>, <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> has to be added to the <code>dragDropConfig</code> aggregation, by using <code><a target="_self" href="api/sap.ui.core.Element#methods/addDragDropConfig">sap.ui.core.Element#addDragDropConfig</a></code>.</p><p>Both <code><a target="_self" href="api/sap.ui.core.dnd.DropInfo">sap.ui.core.dnd.DropInfo</a></code> and <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> can be used to configure drag and drop. The difference is that the <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> will provide a drop indicator, which mimics the size of the dragged item and shows the potential drop position inside the grid.</p><p>Drag and drop is enabled via keyboard using <code>Ctrl</code> + arrow keys (Windows) and <code>Control</code> + arrow keys (Mac OS).</p><h3>Keyboard Navigation:</h3><p> <code>GridContainer</code> provides support for two-dimensional keyboard navigation through its contained controls. Navigating up/down or left/right using the arrow keys follows the configurable two-dimensional grid mesh. This provides stable navigation paths in the cases when there are items of different sizes. When the user presses an arrow key in a direction outward of the <code>GridContainer</code>, a <code>borderReached</code> event will be fired. The implementation of the <code>borderReached</code> event allows the application developer to control where the focus goes, and depending on the surrounding layout pass the focus to a specific place in a neighboring <code>GridContainer</code> using the method <a target="_self" href="api/sap.f.GridContainer#methods/focusItemByDirection">#focusItemByDirection</a>.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/32d4b9c2b981425dbc374d3e9d5d0c2e">Grid Controls</a></li><li><a target="_self" href="topic/5b46b03f024542ba802d99d67bc1a3f4">Cards</a></li><li><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></li></ul></p>
		 */
		export class GridContainer extends sap.ui.core.Control implements sap.f.dnd.IGridDroppable {
			/**
			 * <p>Constructor for a new <code>sap.f.GridContainer</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some ariaDescribedBy into the association <a target="_self" href="api/sap.f.GridContainer#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Adds some ariaLabelledBy into the association <a target="_self" href="api/sap.f.GridContainer#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
			 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;
			/**
			 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getItems">items</a>.</p>
			 * @param {sap.ui.core.Control} oItem <p>The item to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addItem(oItem: sap.ui.core.Control): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.GridContainer#events/borderReached">borderReached</a> event of this <code>sap.f.GridContainer</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.GridContainer</code> itself.</p><p>Fires if the border of the visualizations is reached so that an application can react on this.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.GridContainer</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachBorderReached(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.GridContainer#events/columnsChange">columnsChange</a> event of this <code>sap.f.GridContainer</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.GridContainer</code> itself.</p><p>Fired when the grid columns count is changed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.GridContainer</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachColumnsChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.GridContainer#events/layoutChange">layoutChange</a> event of this <code>sap.f.GridContainer</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.GridContainer</code> itself.</p><p>Fired when the currently active GridSettings change.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.GridContainer</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachLayoutChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getItems">items</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyItems(): this;
			/**
			 * <p>Destroys the layout in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayout">layout</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayout(): this;
			/**
			 * <p>Destroys the layoutL in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutL">layoutL</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayoutL(): this;
			/**
			 * <p>Destroys the layoutM in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutM">layoutM</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayoutM(): this;
			/**
			 * <p>Destroys the layoutS in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutS">layoutS</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayoutS(): this;
			/**
			 * <p>Destroys the layoutXL in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXL">layoutXL</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayoutXL(): this;
			/**
			 * <p>Destroys the layoutXS in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXS">layoutXS</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyLayoutXS(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.GridContainer#events/borderReached">borderReached</a> event of this <code>sap.f.GridContainer</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachBorderReached(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.GridContainer#events/columnsChange">columnsChange</a> event of this <code>sap.f.GridContainer</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachColumnsChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.GridContainer#events/layoutChange">layoutChange</a> event of this <code>sap.f.GridContainer</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachLayoutChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.GridContainer#events/borderReached">borderReached</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireBorderReached(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.GridContainer#events/columnsChange">columnsChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireColumnsChange(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.GridContainer#events/layoutChange">layoutChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireLayoutChange(mParameters?: any): this;
			/**
			 * <p>Focuses the item on the given index. Should be called after successful drop operation.</p><p><b>Note:</b>Should not be called before the <code>GridContainer</code> has been rendered.</p>
			 * @param {number} iIndex <p>The index of the item, which will be focused.</p>
			 */
			focusItem(iIndex: number): void;
			/**
			 * <p>Focuses an item in the given direction - up, down, left or right, from the starting position specified by row and column.</p><p>If the direction is up or down, the method focuses the nearest item in the same column, located in the specified direction.</p><p>If the direction is left or right, the method focuses the nearest item at the same row, in the specified direction.</p><p><b>Note:</b>Should be called after the rendering of <code>GridContainer</code> is ready.</p>
			 * @param {sap.f.NavigationDirection} sDirection <p>The navigation direction.</p>
			 * @param {number} iRow <p>The row index of the starting position.</p>
			 * @param {number} iColumn <p>The column index of the starting position.</p>
			 */
			focusItemByDirection(sDirection: sap.f.NavigationDirection, iRow: number, iColumn: number): void;
			/**
			 * <p>Gets the <code>GridContainerSettings</code> for the current layout breakpoint.</p>
			 * @returns sap.f.GridContainerSettings <p>The settings for the current layout</p>
			 */
			getActiveLayoutSettings(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getAllowDenseFill">allowDenseFill</a>.</p><p>Increases the density when arranging the items. Smaller items will take up all of the available space, ignoring their order.</p><p><b>Note:</b> The order of the items is ignored. An item which is normally at the bottom, can appear on top.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>allowDenseFill</code></p>
			 */
			getAllowDenseFill(): boolean;
			/**
			 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.f.GridContainer#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @returns sap.ui.core.ID[] 
			 */
			getAriaDescribedBy(): sap.ui.core.ID[];
			/**
			 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.f.GridContainer#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
			 * @returns sap.ui.core.ID[] 
			 */
			getAriaLabelledBy(): sap.ui.core.ID[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getContainerQuery">containerQuery</a>.</p><p>If set to <code>true</code> the current range (large, medium or small) is defined by the size of the container surrounding the <code>GridContainer</code>, instead of the device screen size (media Query).</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>containerQuery</code></p>
			 */
			getContainerQuery(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getInlineBlockLayout">inlineBlockLayout</a>.</p><p>Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal to the highest item in the row.</p><p><b>Note:</b> If set to <code>true</code> the properties <code>rowSize</code> for grid layout, and <code>minRows</code> and <code>rows</code> per item will be ignored.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>inlineBlockLayout</code></p>
			 */
			getInlineBlockLayout(): boolean;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getItems">items</a>.</p><p>The items contained by the control.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getItems(): sap.ui.core.Control[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayout">layout</a>.</p><p>The sap.f.GridContainerSettings applied if no settings are provided for a specific size.</p><p>If no layout is given, a default layout will be used. See the default values for <code>sap.f.GridContainerSettings</code>.</p><p><b>Note:</b> It is not possible to reuse the same instance of <code>GridContainerSettings</code> for several layouts. New instance has to be created for each of them. This is caused by the fact that one object can exist in only a single aggregation.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayout(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutL">layoutL</a>.</p><p>The sap.f.GridContainerSettings applied for size "L". Range: 1023px - 1439px.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayoutL(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutM">layoutM</a>.</p><p>The sap.f.GridContainerSettings applied for size "M". Range: 600px - 1023px.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayoutM(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutS">layoutS</a>.</p><p>The sap.f.GridContainerSettings applied for size "S". Range: 375px - 599px.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayoutS(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXL">layoutXL</a>.</p><p>The sap.f.GridContainerSettings applied for size "XL". Range: from 1440px.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayoutXL(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXS">layoutXS</a>.</p><p>The sap.f.GridContainerSettings applied for size "XS". Range: up to 374px.</p>
			 * @returns sap.f.GridContainerSettings 
			 */
			getLayoutXS(): sap.f.GridContainerSettings;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getMinHeight">minHeight</a>.</p><p>Defines the minimum height of the grid.</p><p>Allows an empty grid to be available as a drop target.</p><p>Default value is <code>"2rem"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>minHeight</code></p>
			 */
			getMinHeight(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getSnapToRow">snapToRow</a>.</p><p>Should the items stretch to fill the rows that they occupy, or not.</p><p>If set to <code>true</code> the items will stretch.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>snapToRow</code></p>
			 */
			getSnapToRow(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainer#methods/getWidth">width</a>.</p><p>Defines the width of the control.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
			 */
			getWidth(): sap.ui.core.CSSSize;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oItem <p>The item whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfItem(oItem: sap.ui.core.Control): number;
			/**
			 * <p>Inserts an item into the aggregation named <code>items</code>.</p>
			 * @param {sap.ui.core.Item} oItem <p>The item to be inserted; if empty, nothing is inserted.</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position.</p>
			 * @returns this <p><code>this</code> to allow method chaining.</p>
			 */
			insertItem(oItem: sap.ui.core.Item, iIndex: number): this;
			/**
			 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.f.GridContainer#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllAriaDescribedBy(): sap.ui.core.ID[];
			/**
			 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.f.GridContainer#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
			 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllAriaLabelledBy(): sap.ui.core.ID[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.GridContainer#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllItems(): sap.ui.core.Control[];
			/**
			 * <p>Removes an ariaDescribedBy from the association named <a target="_self" href="api/sap.f.GridContainer#methods/getAriaDescribedBy">ariaDescribedBy</a>.</p>
			 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
			 * @returns sap.ui.core.ID|null <p>The removed ariaDescribedBy or <code>null</code></p>
			 */
			removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
			/**
			 * <p>Removes an ariaLabelledBy from the association named <a target="_self" href="api/sap.f.GridContainer#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
			 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
			 * @returns sap.ui.core.ID|null <p>The removed ariaLabelledBy or <code>null</code></p>
			 */
			removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
			/**
			 * <p>Removes an item from the aggregation named <code>items</code>.</p>
			 * @param {number | string | sap.ui.core.Item} vItem <p>The item to remove or its index or ID.</p>
			 * @returns sap.ui.core.Control|null <p>The removed item or <code>null</code>.</p>
			 */
			removeItem(vItem: number | string | sap.ui.core.Item): sap.ui.core.Control | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getAllowDenseFill">allowDenseFill</a>.</p><p>Increases the density when arranging the items. Smaller items will take up all of the available space, ignoring their order.</p><p><b>Note:</b> The order of the items is ignored. An item which is normally at the bottom, can appear on top.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bAllowDenseFill <p>New value for property <code>allowDenseFill</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAllowDenseFill(bAllowDenseFill?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getContainerQuery">containerQuery</a>.</p><p>If set to <code>true</code> the current range (large, medium or small) is defined by the size of the container surrounding the <code>GridContainer</code>, instead of the device screen size (media Query).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bContainerQuery <p>New value for property <code>containerQuery</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setContainerQuery(bContainerQuery?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getInlineBlockLayout">inlineBlockLayout</a>.</p><p>Makes the grid items act like an inline-block elements. They will be arranged in rows with height equal to the highest item in the row.</p><p><b>Note:</b> If set to <code>true</code> the properties <code>rowSize</code> for grid layout, and <code>minRows</code> and <code>rows</code> per item will be ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bInlineBlockLayout <p>New value for property <code>inlineBlockLayout</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setInlineBlockLayout(bInlineBlockLayout?: boolean): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayout">layout</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayout <p>The layout to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayout(oLayout: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutL">layoutL</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayoutL <p>The layoutL to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayoutL(oLayoutL: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutM">layoutM</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayoutM <p>The layoutM to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayoutM(oLayoutM: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutS">layoutS</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayoutS <p>The layoutS to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayoutS(oLayoutS: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXL">layoutXL</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayoutXL <p>The layoutXL to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayoutXL(oLayoutXL: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridContainer#methods/getLayoutXS">layoutXS</a>.</p>
			 * @param {sap.f.GridContainerSettings} oLayoutXS <p>The layoutXS to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setLayoutXS(oLayoutXS: sap.f.GridContainerSettings): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getMinHeight">minHeight</a>.</p><p>Defines the minimum height of the grid.</p><p>Allows an empty grid to be available as a drop target.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"2rem"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sMinHeight <p>New value for property <code>minHeight</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMinHeight(sMinHeight?: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getSnapToRow">snapToRow</a>.</p><p>Should the items stretch to fill the rows that they occupy, or not.</p><p>If set to <code>true</code> the items will stretch.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bSnapToRow <p>New value for property <code>snapToRow</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSnapToRow(bSnapToRow?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainer#methods/getWidth">width</a>.</p><p>Defines the width of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setWidth(sWidth?: sap.ui.core.CSSSize): this;
		}
		/**
		 * <p>Holds layout data for an item inside a <code>sap.f.GridContainer</code>.</p>
		 */
		export class GridContainerItemLayoutData extends sap.ui.core.LayoutData {
			/**
			 * <p>Constructor for a new <code>sap.f.GridContainerItemLayoutData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new element.</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getColumns">columns</a>.</p><p>Specifies the number of columns, which the item should take</p><p><b>Note:</b> Make sure that the item does not have more columns than the total columns in the grid. Use <a target="_self" href="api/sap.f.GridContainer#methods/attachLayoutChange">sap.f.GridContainer#attachLayoutChange</a> or a resize listener to handle when columns count is changed for the grid. If item has more columns at some point, they will be automatically reduced to the total grid columns. This is done to prevent broken layout (grid blowout) that affects all items.</p><p>Default value is <code>1</code>.</p>
			 * @returns number <p>Value of property <code>columns</code></p>
			 */
			getColumns(): number;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getMinRows">minRows</a>.</p><p>Specifies the minimum number of rows, which the item should take.</p>
			 * @returns number <p>Value of property <code>minRows</code></p>
			 */
			getMinRows(): number;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getRows">rows</a>.</p><p>Specifies the number of rows, which the item should take.</p>
			 * @returns number <p>Value of property <code>rows</code></p>
			 */
			getRows(): number;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getColumns">columns</a>.</p><p>Specifies the number of columns, which the item should take</p><p><b>Note:</b> Make sure that the item does not have more columns than the total columns in the grid. Use <a target="_self" href="api/sap.f.GridContainer#methods/attachLayoutChange">sap.f.GridContainer#attachLayoutChange</a> or a resize listener to handle when columns count is changed for the grid. If item has more columns at some point, they will be automatically reduced to the total grid columns. This is done to prevent broken layout (grid blowout) that affects all items.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
			 * @param {number} iColumns <p>New value for property <code>columns</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setColumns(iColumns?: number): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getMinRows">minRows</a>.</p><p>Specifies the minimum number of rows, which the item should take.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {number} iMinRows <p>New value for property <code>minRows</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMinRows(iMinRows: number): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerItemLayoutData#methods/getRows">rows</a>.</p><p>Specifies the number of rows, which the item should take.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {number} iRows <p>New value for property <code>rows</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setRows(iRows: number): this;
		}
		/**
		 * <p>Holds a set of settings that define the dimensions of <code>sap.f.GridContainer</code>.</p><p>Can be used to define the sizes of columns and rows for different screen sizes, by using the <code>layout</code> aggregations of <code>sap.f.GridContainer</code>.</p>
		 */
		export class GridContainerSettings extends sap.ui.base.ManagedObject {
			/**
			 * <p>Constructor for a new <code>sap.f.GridContainerSettings</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getColumns">columns</a>.</p><p>How many columns to have on a row.</p><p>If not defined, <code>sap.f.GridContainer</code> will position as many columns as they can fit in the container.</p>
			 * @returns number <p>Value of property <code>columns</code></p>
			 */
			getColumns(): number;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getColumnSize">columnSize</a>.</p><p>The width of the columns. <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>Default value is <code>"80px"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>columnSize</code></p>
			 */
			getColumnSize(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getGap">gap</a>.</p><p>The size of the gap between columns and rows.</p><p><b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>Default value is <code>"16px"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>gap</code></p>
			 */
			getGap(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getMaxColumnSize">maxColumnSize</a>.</p><p>Sets the maximum width of the columns. Setting this together with <code>minColumnSize</code> will allow the columns to breath between those two values.</p><p><b>Note:</b> Will not work in combination with <code>columnSize</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>maxColumnSize</code></p>
			 */
			getMaxColumnSize(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getMinColumnSize">minColumnSize</a>.</p><p>Sets the minimum width of the columns. Setting this together with <code>maxColumnSize</code> will allow the columns to breath between those two values.</p><p><b>Note:</b> Will not work in combination with <code>columnSize</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>minColumnSize</code></p>
			 */
			getMinColumnSize(): sap.ui.core.CSSSize;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getRowSize">rowSize</a>.</p><p>The height of the rows.</p><p><b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>Default value is <code>"80px"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>rowSize</code></p>
			 */
			getRowSize(): sap.ui.core.CSSSize;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getColumns">columns</a>.</p><p>How many columns to have on a row.</p><p>If not defined, <code>sap.f.GridContainer</code> will position as many columns as they can fit in the container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {number} iColumns <p>New value for property <code>columns</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setColumns(iColumns: number): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getColumnSize">columnSize</a>.</p><p>The width of the columns. <b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"80px"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sColumnSize <p>New value for property <code>columnSize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setColumnSize(sColumnSize?: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getGap">gap</a>.</p><p>The size of the gap between columns and rows.</p><p><b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"16px"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sGap <p>New value for property <code>gap</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setGap(sGap?: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getMaxColumnSize">maxColumnSize</a>.</p><p>Sets the maximum width of the columns. Setting this together with <code>minColumnSize</code> will allow the columns to breath between those two values.</p><p><b>Note:</b> Will not work in combination with <code>columnSize</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.ui.core.CSSSize} sMaxColumnSize <p>New value for property <code>maxColumnSize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMaxColumnSize(sMaxColumnSize: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getMinColumnSize">minColumnSize</a>.</p><p>Sets the minimum width of the columns. Setting this together with <code>maxColumnSize</code> will allow the columns to breath between those two values.</p><p><b>Note:</b> Will not work in combination with <code>columnSize</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.ui.core.CSSSize} sMinColumnSize <p>New value for property <code>minColumnSize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMinColumnSize(sMinColumnSize: sap.ui.core.CSSSize): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.GridContainerSettings#methods/getRowSize">rowSize</a>.</p><p>The height of the rows.</p><p><b>Note:</b> Use only 'px' or 'rem'. Some features may not work as expected otherwise.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"80px"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sRowSize <p>New value for property <code>rowSize</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setRowSize(sRowSize?: sap.ui.core.CSSSize): this;
		}
		/**
		 * <p>A list-based control with grid layout capabilities.</p><h3>Overview</h3><p>The control is based on <a target="_self" href="api/sap.m.ListBase">sap.m.ListBase</a> and adds the flexibility to configure different grid layouts. The layout used is based on the CSS display grid and the control has a default configuration.</p><p>With <code>customLayout</code> aggregation it is possible to use: <ul> <li>Predefined simple grid layouts such as <a target="_self" href="api/sap.ui.layout.cssgrid.GridBoxLayout">GridBoxLayout</a></li> <li>Flexible grid layouts, such as <a target="_self" href="api/sap.ui.layout.cssgrid.GridBasicLayout">GridBasicLayout</a> or <a target="_self" href="api/sap.ui.layout.cssgrid.GridResponsiveLayout">GridResponsiveLayout</a> which reveal the native-browser CSS display grid APIs. For more information, see <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN web docs: CSS Grid Layout</a>
					<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
					title="Information published on non SAP site" class="sapUISDKExternalLink"/></li> </ul></p><p>Every item can override its size by specifying the number of columns and/or rows it will take in the grid. This is done using <a target="_self" href="api/sap.ui.layout.cssgrid.GridItemLayoutData">GridItemLayoutData</a>.</p><p>For best visualization, items of type <a target="_self" href="api/sap.f.GridListItem">sap.f.GridListItem</a> should be used inside the <code>items</code> aggregation.</p><h3>Usage</h3><p>For general cases, use the default grid configuration of the <code>GridList</code>. For Box case (equal sized items), use <code>customLayout</code> aggregation with <a target="_self" href="api/sap.ui.layout.cssgrid.GridBoxLayout">GridBoxLayout</a> For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with <a target="_self" href="api/sap.ui.layout.cssgrid.GridResponsiveLayout">GridResponsiveLayout</a> To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type <a target="_self" href="api/sap.ui.layout.cssgrid.GridItemLayoutData">GridItemLayoutData</a></p><p><i>When to use</i> <ul> <li>If <a target="_self" href="api/sap.m.ListBase">sap.m.ListBase</a> features are required and the items must be positioned in a grid layout</li> </ul></p><p><i>When not to use</i> <ul> <li>If a list layout is required, use <a target="_self" href="api/sap.m.List">sap.m.List</a> instead. <li>If only the layout is required, use <a target="_self" href="api/sap.ui.layout.cssgrid.CSSGrid">sap.ui.layout.cssgrid.CSSGrid</a> instead. </ul></p><h3>Drag and drop:</h3><p> Drag and drop is enabled for the <code>GridList</code> with enhanced visualization and interaction, better suited for grid items. This is configured by using the <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code>.</p><p>Similar to the <code><a target="_self" href="api/sap.ui.core.dnd.DropInfo">sap.ui.core.dnd.DropInfo</a></code>, <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> has to be added to the <code>dragDropConfig</code> aggregation, by using <code><a target="_self" href="api/sap.ui.core.Element#methods/addDragDropConfig">sap.ui.core.Element#addDragDropConfig</a></code>.</p><p>Both <code><a target="_self" href="api/sap.ui.core.dnd.DropInfo">sap.ui.core.dnd.DropInfo</a></code> and <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> can be used to configure drag and drop. The difference is that the <code><a target="_self" href="api/sap.f.dnd.GridDropInfo">sap.f.dnd.GridDropInfo</a></code> will provide a drop indicator, which mimics the size of the dragged item and shows the potential drop position inside the grid.</p><h3>Keyboard Navigation:</h3><p> <code>GridList</code> provides support for two-dimensional keyboard navigation through its contained controls. Navigating up/down or left/right using the arrow keys follows the configurable two-dimensional grid mesh. This provides stable navigation paths in the cases when there are items of different sizes. When the user presses an arrow key in a direction outward of the <code>GridList</code>, a <code>borderReached</code> event will be fired. The implementation of the <code>borderReached</code> event allows the application developer to control where the focus goes, and depending on the surrounding layout pass the focus to a specific place in a neighboring <code>GridList</code> using the method <a target="_self" href="api/sap.f.GridList#methods/focusItemByDirection">#focusItemByDirection</a>.<br><br><span>Documentation links:</span><ul><li><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN web docs: CSS Grid Layout</a>
					<img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
					title="Information published on non SAP site" class="sapUISDKExternalLink"/></li></ul></p>
		 */
		export class GridList extends sap.m.ListBase implements sap.f.dnd.IGridDroppable {
			/**
			 * <p>Constructor for a new GridList.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.GridList#events/borderReached">borderReached</a> event of this <code>sap.f.GridList</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.GridList</code> itself.</p><p>Fires if the border of the visualizations is reached so that an application can react on this.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.GridList</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachBorderReached(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys the customLayout in the aggregation <a target="_self" href="api/sap.f.GridList#methods/getCustomLayout">customLayout</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyCustomLayout(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.GridList#events/borderReached">borderReached</a> event of this <code>sap.f.GridList</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachBorderReached(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.GridList#events/borderReached">borderReached</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireBorderReached(mParameters?: any): this;
			/**
			 * <p>Focuses an item in the given direction - up, down, left or right, from the starting position specified by row and column.</p><p>If the direction is up or down, the method focuses the nearest item in the same column, located in the specified direction.</p><p>If the direction is left or right, the method focuses the nearest item at the same row, in the specified direction.</p><p><b>Note:</b>Should be called after the rendering of <code>GridList</code> is ready.</p>
			 * @param {sap.f.NavigationDirection} sDirection <p>The navigation direction.</p>
			 * @param {number} iRow <p>The row index of the starting position.</p>
			 * @param {number} iColumn <p>The column index of the starting position.</p>
			 */
			focusItemByDirection(sDirection: sap.f.NavigationDirection, iRow: number, iColumn: number): void;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridList#methods/getCustomLayout">customLayout</a>.</p><p>Defines a custom grid layout</p>
			 * @returns sap.ui.layout.cssgrid.GridLayoutBase 
			 */
			getCustomLayout(): sap.ui.layout.cssgrid.GridLayoutBase;
			/**
			 * <p>Implements IGridConfigurable interface.</p>
			 * @returns HTMLElement[] <p>An array with the DOM elements</p>
			 */
			protected getGridDomRefs(): HTMLElement[];
			/**
			 * <p>Implements IGridConfigurable interface.</p>
			 * @returns sap.ui.layout.cssgrid.GridLayoutBase <p>The grid layout</p>
			 */
			protected getGridLayoutConfiguration(): sap.ui.layout.cssgrid.GridLayoutBase;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.GridList#methods/getCustomLayout">customLayout</a>.</p>
			 * @param {sap.ui.layout.cssgrid.GridLayoutBase} oCustomLayout <p>The customLayout to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setCustomLayout(oCustomLayout: sap.ui.layout.cssgrid.GridLayoutBase): this;
		}
		/**
		 * <p>The <code>GridListItem</code> with a content aggregation can be used to display all kind of information. It is used in <a target="_self" href="api/sap.f.GridList">sap.f.GridList</a>. <b>Note:</b> Even though the content aggregation can be used for any control, complex responsive layout controls, such as <code>Table, Form</code>, etc, should not be aggregated as content.</p>
		 */
		export class GridListItem extends sap.m.ListItemBase {
			/**
			 * <p>Constructor for a new GridListItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Binds aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
			 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo <p>The binding information</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			bindContent(oBindingInfo: sap.ui.base.ManagedObject.AggregationBindingInfo): this;
			/**
			 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p><p>The content of this list item</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getContent(): sap.ui.core.Control[];
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfContent(oContent: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
			 */
			removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Unbinds aggregation <a target="_self" href="api/sap.f.GridListItem#methods/getContent">content</a> from model data.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			unbindContent(): this;
		}
		/**
		 * <p><p>Interface that should be implemented by all card controls.</p></p>
		 */
		export interface ICard {
		}
		/**
		 * <p><p>Interface for controls suitable for the <code>stickySubheaderProvider</code> association of <code><a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a></code>.</p><p>Controls that implemenet this interface should have the following methods: <ul> <li><code>_getStickyContent</code> - returns the content (control) used in the subheader</li> <li><code>_returnStickyContent</code> - ensures that the content (control) returned by <code>_getStickyContent</code>, is placed back in its place in the provider</li> <li><code>_getStickySubHeaderSticked</code> - returns boolean value that shows where the sticky content is placed (in its provider or in the <code>DynamicPage</code>)</li> <li><code>_setStickySubHeaderSticked</code> - accepts a boolean argument to notify the provider where its sticky content is placed</li> </ul></p></p>
		 */
		export interface IDynamicPageStickyContent {
		}
		/**
		 * <p>A combination of message and illustration to represent an empty or a success state.</p><h3>Overview</h3><p>An <code>IllustratedMessage</code> is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone. Empty states are moments in the user experience where there’s no data to display. Success states are occasions to celebrate and reward a user’s special accomplishment or the completion of an important task.</p><p>The <code>IllustratedMessage</code> control is meant to be used inside container controls, for example a <code>Card</code>, a <code>Dialog</code>, or a <code>Page</code>.</p><h3>Structure</h3><p>The <code>IllustratedMessage</code> consists of the following elements, which are displayed below each other in the following order: <ul> <li>Illustration</li> <li>Title</li> <li>Description</li> <li>Additional Content</li> </ul></p><h3>Responsive Behavior</h3><p>The <code>IllustratedMessage</code> control can adapt depending on the API settings provided by the app developer and the available space of its parent container. Some of the structural elements are displayed differently or are omitted in the different breakpoint sizes (XS, S, M, L).</p>
		 */
		export class IllustratedMessage extends sap.m.IllustratedMessage {
			/**
			 * <p>Constructor for a new <code>IllustratedMessage</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.IllustratedMessage#constructor">sap.m.IllustratedMessage</a> can be used.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
		}
		/**
		 * <p>A simple control which uses a Symbol ID to visualize an SVG which has already been loaded in the <a target="_self" href="api/sap.f.IllustrationPool">sap.f.IllustrationPool</a>.</p><p>To build a Symbol ID, all of the <code>Illustration</code> properties must be populated with data.</p>
		 */
		export class Illustration extends sap.m.Illustration {
			/**
			 * <p>Constructor for a new <code>Illustration</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.Illustration#constructor">sap.m.Illustration</a> can be used.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
		}
		/**
		 * <p><p>Interface for controls suitable for the <code>additionalContent</code> aggregation of <code><a target="_self" href="api/sap.f.ShellBar">sap.f.ShellBar</a></code>.</p></p>
		 */
		export interface IShellBar {
		}
		/**
		 * <p><p>Layouts, representing the number of columns to be displayed and their relative widths for a <a target="_self" href="api/sap.f.FlexibleColumnLayout">sap.f.FlexibleColumnLayout</a> control.</p><p>Each layout has a predefined ratio for the three columns, depending on device size. Based on the device and layout, some columns are hidden. For more information, refer to the ratios (in %) for each value, listed below: (dash "-" means non-accessible columns).</p><p><b>Note:</b> Please note that on a phone device, due to the limited screen size, only one column can be displayed at a time. For all two-column layouts, this column is the <code>Mid</code> column, and for all three-column layouts - the <code>End</code> column, even though the respective column may be hidden on desktop and tablet for that particular layout. Therefore some of the names (such as <code>ThreeColumnsMidExpandedEndHidden</code> for example) are representative of the desktop scenario only.</p><p>For more information, see <a target="_self" href="topic/3b9f760da5b64adf8db7f95247879086">Types of Layout</a> in the documentation.</p></p>
		 */
		export enum LayoutType {
			/**
			 * <p>Desktop: -/-/100 only the End column is displayed</p><p>Tablet: -/-/100 only the End column is displayed</p><p>Phone: -/-/100 only the End column is displayed</p><p>Use to display a detail-detail page only, when the user should focus entirely on it.</p>
			 */
			EndColumnFullScreen = "EndColumnFullScreen",
			/**
			 * <p>Desktop: -/100/- only the Mid column is displayed</p><p>Tablet: -/100/- only the Mid column is displayed</p><p>Phone: -/100/- only the Mid column is displayed</p><p>Use to display a detail page only, when the user should focus entirely on it.</p>
			 */
			MidColumnFullScreen = "MidColumnFullScreen",
			/**
			 * <p>Desktop: 100/-/- only the Begin column is displayed</p><p>Tablet: 100/-/- only the Begin column is displayed</p><p>Phone: 100/-/- only the Begin column is displayed</p><p>Use to start with a master page.</p>
			 */
			OneColumn = "OneColumn",
			/**
			 * <p>Desktop: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows</p><p>Tablet: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows</p><p>Phone: -/-/100 only the End column is displayed</p><p>Use to display the master and detail pages when the user should focus on the master. The detail-detail is still loaded and easily accessible with layout arrows.</p>
			 */
			ThreeColumnsBeginExpandedEndHidden = "ThreeColumnsBeginExpandedEndHidden",
			/**
			 * <p>Desktop: 25/25/50 Begin, Mid and End (expanded) columns are displayed</p><p>Tablet: 0/33/67 Mid and End (expanded) columns are displayed, Begin is accessible by layout arrows</p><p>Phone: -/-/100 (only the End column is displayed)</p><p>Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail.</p>
			 */
			ThreeColumnsEndExpanded = "ThreeColumnsEndExpanded",
			/**
			 * <p>Desktop: 25/50/25 Begin, Mid (expanded) and End columns are displayed</p><p>Tablet: 0/67/33 Mid (expanded) and End columns are displayed, Begin is accessible by a layout arrow</p><p>Phone: -/-/100 only the End column is displayed</p><p>Use to display all three pages (master, detail, detail-detail) when the user should focus on the detail.</p>
			 */
			ThreeColumnsMidExpanded = "ThreeColumnsMidExpanded",
			/**
			 * <p>Desktop: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow</p><p>Tablet: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow</p><p>Phone: -/-/100 only the End column is displayed</p><p>Use to display the master and detail pages when the user should focus on the detail. The detail-detail is still loaded and easily accessible with a layout arrow.</p>
			 */
			ThreeColumnsMidExpandedEndHidden = "ThreeColumnsMidExpandedEndHidden",
			/**
			 * <p>Desktop: 67/33/- Begin (expanded) and Mid columns are displayed</p><p>Tablet: 67/33/- Begin (expanded) and Mid columns are displayed</p><p>Phone: -/100/- only the Mid column is displayed</p><p>Use to display both a master and a detail page when the user should focus on the master page.</p>
			 */
			TwoColumnsBeginExpanded = "TwoColumnsBeginExpanded",
			/**
			 * <p>Desktop: 33/67/- Begin and Mid (expanded) columns are displayed</p><p>Tablet: 33/67/- Begin and Mid (expanded) columns are displayed</p><p>Phone: -/100/- only the Mid column is displayed</p><p>Use to display both a master and a detail page when the user should focus on the detail page.</p>
			 */
			TwoColumnsMidExpanded = "TwoColumnsMidExpanded",
		}
		/**
		 * <p><p>Enumeration for different navigation directions.</p></p>
		 */
		export enum NavigationDirection {
			/**
			 * <p>The direction is down.</p>
			 */
			Down = "Down",
			/**
			 * <p>The direction is left.</p>
			 */
			Left = "Left",
			/**
			 * <p>The direction is right.</p>
			 */
			Right = "Right",
			/**
			 * <p>The direction is up.</p>
			 */
			Up = "Up",
		}
		/**
		 * <p>A layout control that provides specific configuration about how the items should be displayed.</p>
		 */
		export class ProductSwitch extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>ProductSwitch</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p>
			 * @param {sap.f.ProductSwitchItem} oItem <p>The item to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addItem(oItem: sap.f.ProductSwitchItem): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ProductSwitch#events/change">change</a> event of this <code>sap.f.ProductSwitch</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ProductSwitch</code> itself.</p><p>Fires when an unselected item is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ProductSwitch</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyItems(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ProductSwitch#events/change">change</a> event of this <code>sap.f.ProductSwitch</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ProductSwitch#events/change">change</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireChange(mParameters?: any): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p><p><code>ProductSwitch</code> content.</p>
			 * @returns sap.f.ProductSwitchItem[] 
			 */
			getItems(): sap.f.ProductSwitchItem[];
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.ProductSwitch#methods/getSelectedItem">selectedItem</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getSelectedItem(): sap.ui.core.ID;
			/**
			 * <p>Checks for the provided <code>sap.f.ProductSwitchItem</code> in the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.f.ProductSwitchItem} oItem <p>The item whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfItem(oItem: sap.f.ProductSwitchItem): number;
			/**
			 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p>
			 * @param {sap.f.ProductSwitchItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertItem(oItem: sap.f.ProductSwitchItem, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.f.ProductSwitchItem[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllItems(): sap.f.ProductSwitchItem[];
			/**
			 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.f.ProductSwitch#methods/getItems">items</a>.</p>
			 * @param {number | string | sap.f.ProductSwitchItem} vItem <p>The item to remove or its index or id</p>
			 * @returns sap.f.ProductSwitchItem|null <p>The removed item or <code>null</code></p>
			 */
			removeItem(vItem: number | string | sap.f.ProductSwitchItem): sap.f.ProductSwitchItem | null;
			/**
			 * <p>Sets the <code>selectedItem</code> association.</p>
			 * @param {string | sap.f.ProductSwitchItem | null} vItem <p>New value for the <code>selectedItem</code> association. If an ID of a <code>sap.f.ProductSwitchItem</code> instance is given, the item with this ID becomes the <code>selectedItem</code> association. Alternatively, a <code>sap.f.ProductSwitchItem</code> instance may be given or <code>null</code> to clear the selection.</p>
			 * @returns this <p><code>this</code> to allow method chaining</p>
			 */
			setSelectedItem(vItem: string | sap.f.ProductSwitchItem | null): this;
		}
		/**
		 * <p>A control that is used as a child of <code>ProductSwitch</code></p><p><b>Note:</b> <code>ProductSwitchItem</code> is not supported when used outside of <code>ProductSwitch</code>.</p>
		 */
		export class ProductSwitchItem extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>ProductSwitchItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getSrc">src</a>.</p><p>Defines the icon to be displayed as graphical element within the <code>ProductSwitchItem</code>. It can be an icon from the SAP icon font.</p>
			 * @returns sap.ui.core.URI <p>Value of property <code>src</code></p>
			 */
			getSrc(): sap.ui.core.URI;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getSubTitle">subTitle</a>.</p><p>Determines the subtitle of the <code>ProductSwitchItem</code>.</p>
			 * @returns string <p>Value of property <code>subTitle</code></p>
			 */
			getSubTitle(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTarget">target</a>.</p><p>Specifies a target where the <code>targetSrc</code> content must be open.</p><p>Options are the standard values for window.open() supported by browsers: <code>_self</code>, <code>_top</code>, <code>_blank</code>, <code>_parent</code>, <code>_search</code>. Alternatively, a frame name can be entered.</p>
			 * @returns string <p>Value of property <code>target</code></p>
			 */
			getTarget(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTargetSrc">targetSrc</a>.</p><p>Defines the <code>ProductSwitchItem</code> target URI. Supports standard hyperlink behavior.</p><p><b>Note:</b> Redirection is handled via application logic, by subscribing to the <a target="_self" href="api/sap.f.ProductSwitch#events/change">change</a> event of <code>sap.f.ProductSwitch</code>.</p>
			 * @returns sap.ui.core.URI <p>Value of property <code>targetSrc</code></p>
			 */
			getTargetSrc(): sap.ui.core.URI;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTitle">title</a>.</p><p>Determines the title of the <code>ProductSwitchItem</code>.</p>
			 * @returns string <p>Value of property <code>title</code></p>
			 */
			getTitle(): string;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getSrc">src</a>.</p><p>Defines the icon to be displayed as graphical element within the <code>ProductSwitchItem</code>. It can be an icon from the SAP icon font.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.ui.core.URI} sSrc <p>New value for property <code>src</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSrc(sSrc?: sap.ui.core.URI): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getSubTitle">subTitle</a>.</p><p>Determines the subtitle of the <code>ProductSwitchItem</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sSubTitle <p>New value for property <code>subTitle</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSubTitle(sSubTitle?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTarget">target</a>.</p><p>Specifies a target where the <code>targetSrc</code> content must be open.</p><p>Options are the standard values for window.open() supported by browsers: <code>_self</code>, <code>_top</code>, <code>_blank</code>, <code>_parent</code>, <code>_search</code>. Alternatively, a frame name can be entered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sTarget <p>New value for property <code>target</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setTarget(sTarget?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTargetSrc">targetSrc</a>.</p><p>Defines the <code>ProductSwitchItem</code> target URI. Supports standard hyperlink behavior.</p><p><b>Note:</b> Redirection is handled via application logic, by subscribing to the <a target="_self" href="api/sap.f.ProductSwitch#events/change">change</a> event of <code>sap.f.ProductSwitch</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {sap.ui.core.URI} sTargetSrc <p>New value for property <code>targetSrc</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setTargetSrc(sTargetSrc?: sap.ui.core.URI): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ProductSwitchItem#methods/getTitle">title</a>.</p><p>Determines the title of the <code>ProductSwitchItem</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sTitle <p>New value for property <code>title</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setTitle(sTitle?: string): this;
		}
		/**
		 * <p>Defines specific properties of the search that are applied to <code>sap.f.ShellBar</code>.</p>
		 */
		export class SearchManager extends sap.ui.core.Element {
			/**
			 * <p>Constructor for a new <code>SearchManager</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some suggestionItem to the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p>
			 * @param {sap.m.SuggestionItem} oSuggestionItem <p>The suggestionItem to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addSuggestionItem(oSuggestionItem: sap.m.SuggestionItem): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.SearchManager#events/liveChange">liveChange</a> event of this <code>sap.f.SearchManager</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.</p><p>Fired when the value of the search field is changed by the user, for example at each key press.</p><p><b>Note:</b> Do not invalidate or re-render a focused search field, especially during the <code>liveChange</code> event.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachLiveChange(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.SearchManager#events/search">search</a> event of this <code>sap.f.SearchManager</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.</p><p>Fired when the user triggers a search.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachSearch(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.SearchManager#events/suggest">suggest</a> event of this <code>sap.f.SearchManager</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.SearchManager</code> itself.</p><p>Fired when the search field is initially focused or its value is changed by the user. This event means that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create new suggestions for it.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.SearchManager</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachSuggest(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Binds property <a target="_self" href="api/sap.f.SearchManager#methods/getValue">value</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindProperty">ManagedObject.bindProperty</a> for a detailed description of the possible properties of <code>oBindingInfo</code></p>
			 * @param {sap.ui.base.ManagedObject.PropertyBindingInfo} oBindingInfo <p>The binding information</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			bindValue(oBindingInfo: sap.ui.base.ManagedObject.PropertyBindingInfo): this;
			/**
			 * <p>Destroys all the suggestionItems in the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroySuggestionItems(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.SearchManager#events/liveChange">liveChange</a> event of this <code>sap.f.SearchManager</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachLiveChange(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.SearchManager#events/search">search</a> event of this <code>sap.f.SearchManager</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachSearch(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.SearchManager#events/suggest">suggest</a> event of this <code>sap.f.SearchManager</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachSuggest(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.SearchManager#events/liveChange">liveChange</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireLiveChange(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.SearchManager#events/search">search</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireSearch(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.SearchManager#events/suggest">suggest</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireSuggest(mParameters?: any): this;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SearchManager#methods/getEnabled">enabled</a>.</p><p>Determines whether the control is enabled.</p><p>Default value is <code>true</code>.</p>
			 * @returns boolean <p>Value of property <code>enabled</code></p>
			 */
			getEnabled(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SearchManager#methods/getEnableSuggestions">enableSuggestions</a>.</p><p>If true, a <code>suggest</code> event is fired when user types in the input and when the input is focused. On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>enableSuggestions</code></p>
			 */
			getEnableSuggestions(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SearchManager#methods/getMaxLength">maxLength</a>.</p><p>Determines the maximum number of characters. Value '0' means the feature is switched off.</p><p>Default value is <code>0</code>.</p>
			 * @returns number <p>Value of property <code>maxLength</code></p>
			 */
			getMaxLength(): number;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SearchManager#methods/getPlaceholder">placeholder</a>.</p><p>Defines the text that is displayed when no value is available. The default placeholder text is the word "Search" in the current local language (if supported) or in English.</p>
			 * @returns string <p>Value of property <code>placeholder</code></p>
			 */
			getPlaceholder(): string;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p><p><code>SuggestionItems</code> are the items which are displayed in the suggestions list. The following properties can be used: <ul> <li><code>key</code> - it is not displayed and may be used as internal technical field</li> <li><code>text</code> - it is displayed as normal suggestion text</li> <li><code>icon</code></li> <li><code>description</code> - additional text that may be used to visually display search item type or category</li> </ul></p>
			 * @returns sap.m.SuggestionItem[] 
			 */
			getSuggestionItems(): sap.m.SuggestionItem[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SearchManager#methods/getValue">value</a>.</p><p>Defines the input value.</p>
			 * @returns string <p>Value of property <code>value</code></p>
			 */
			getValue(): string;
			/**
			 * <p>Checks for the provided <code>sap.m.SuggestionItem</code> in the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.m.SuggestionItem} oSuggestionItem <p>The suggestionItem whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfSuggestionItem(oSuggestionItem: sap.m.SuggestionItem): number;
			/**
			 * <p>Inserts a suggestionItem into the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p>
			 * @param {sap.m.SuggestionItem} oSuggestionItem <p>The suggestionItem to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the suggestionItem should be inserted at; for a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value greater than the current size of the aggregation, the suggestionItem is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertSuggestionItem(oSuggestionItem: sap.m.SuggestionItem, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.m.SuggestionItem[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllSuggestionItems(): sap.m.SuggestionItem[];
			/**
			 * <p>Removes a suggestionItem from the aggregation <a target="_self" href="api/sap.f.SearchManager#methods/getSuggestionItems">suggestionItems</a>.</p>
			 * @param {number | string | sap.m.SuggestionItem} vSuggestionItem <p>The suggestionItem to remove or its index or id</p>
			 * @returns sap.m.SuggestionItem|null <p>The removed suggestionItem or <code>null</code></p>
			 */
			removeSuggestionItem(vSuggestionItem: number | string | sap.m.SuggestionItem): sap.m.SuggestionItem | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SearchManager#methods/getEnabled">enabled</a>.</p><p>Determines whether the control is enabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
			 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setEnabled(bEnabled?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SearchManager#methods/getEnableSuggestions">enableSuggestions</a>.</p><p>If true, a <code>suggest</code> event is fired when user types in the input and when the input is focused. On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bEnableSuggestions <p>New value for property <code>enableSuggestions</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setEnableSuggestions(bEnableSuggestions?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SearchManager#methods/getMaxLength">maxLength</a>.</p><p>Determines the maximum number of characters. Value '0' means the feature is switched off.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
			 * @param {number} iMaxLength <p>New value for property <code>maxLength</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMaxLength(iMaxLength?: number): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SearchManager#methods/getPlaceholder">placeholder</a>.</p><p>Defines the text that is displayed when no value is available. The default placeholder text is the word "Search" in the current local language (if supported) or in English.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sPlaceholder <p>New value for property <code>placeholder</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setPlaceholder(sPlaceholder?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SearchManager#methods/getValue">value</a>.</p><p>Defines the input value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
			 * @param {string} sValue <p>New value for property <code>value</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setValue(sValue?: string): this;
			/**
			 * <p>Unbinds property <a target="_self" href="api/sap.f.SearchManager#methods/getValue">value</a> from model data.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			unbindValue(): this;
		}
		/**
		 * <p>A horizontal bar control holding multiple child controls used as application shell header.</p><h3>Overview</h3><p>The <code>ShellBar</code> is used as the uppermost section (shell) of the app. It is fully responsive and adaptive, and corresponds to the SAP Fiori Design Guidelines.</p><h3>Usage</h3><p>Content specified in the <code>ShellBar</code> properties and aggregations is automatically positioned in dedicated places of the control.</p>
		 */
		export class ShellBar extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>ShellBar</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Sets classes according to the context of the page. Possible contexts are header, footer, and subheader.</p>
			 * @returns sap.m.IBar <p><code>this</code> for chaining</p>
			 */
			protected _applyContextClassFor(): sap.m.IBar;
			/**
			 * <p>Sets the HTML tag according to the context of the page. Possible contexts are header, footer, and subheader.</p>
			 * @returns sap.m.IBar <p><code>this</code> for chaining</p>
			 */
			protected _applyTag(): sap.m.IBar;
			/**
			 * <p>Adds some additionalContent to the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p>
			 * @param {sap.f.IShellBar} oAdditionalContent <p>The additionalContent to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addAdditionalContent(oAdditionalContent: sap.f.IShellBar): this;
			/**
			 * <p>Sets classes and HTML tag according to the context of the page. Possible contexts are header, footer, and subheader</p>
			 * @returns sap.m.IBar <p><code>this</code> for chaining</p>
			 */
			protected applyTagAndContextClassFor(): sap.m.IBar;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/avatarPressed">avatarPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the profile avatar is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachAvatarPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/copilotPressed">copilotPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the SAP CoPilot icon is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachCopilotPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/homeIconPressed">homeIconPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the <code>homeIcon</code> is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachHomeIconPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/menuButtonPressed">menuButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the alternative menu button is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachMenuButtonPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/navButtonPressed">navButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the navigation/back button is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachNavButtonPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/notificationsPressed">notificationsPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the notifications button is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachNotificationsPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/productSwitcherPressed">productSwitcherPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the product switcher button is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachProductSwitcherPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.ShellBar#events/searchButtonPressed">searchButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.ShellBar</code> itself.</p><p>Fired when the search button is pressed.</p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.ShellBar</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachSearchButtonPressed(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the additionalContent in the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyAdditionalContent(): this;
			/**
			 * <p>Destroys the menu in the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getMenu">menu</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyMenu(): this;
			/**
			 * <p>Destroys the profile in the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getProfile">profile</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyProfile(): this;
			/**
			 * <p>Destroys the searchManager in the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getSearchManager">searchManager</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroySearchManager(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/avatarPressed">avatarPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachAvatarPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/copilotPressed">copilotPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachCopilotPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/homeIconPressed">homeIconPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachHomeIconPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/menuButtonPressed">menuButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachMenuButtonPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/navButtonPressed">navButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachNavButtonPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/notificationsPressed">notificationsPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachNotificationsPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/productSwitcherPressed">productSwitcherPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachProductSwitcherPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.ShellBar#events/searchButtonPressed">searchButtonPressed</a> event of this <code>sap.f.ShellBar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachSearchButtonPressed(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/avatarPressed">avatarPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireAvatarPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/copilotPressed">copilotPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireCopilotPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/homeIconPressed">homeIconPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireHomeIconPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/menuButtonPressed">menuButtonPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireMenuButtonPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/navButtonPressed">navButtonPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireNavButtonPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/notificationsPressed">notificationsPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireNotificationsPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/productSwitcherPressed">productSwitcherPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireProductSwitcherPressed(mParameters?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.ShellBar#events/searchButtonPressed">searchButtonPressed</a> to attached listeners.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			protected fireSearchButtonPressed(mParameters?: any): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p><p>Additional content to be displayed in the control.</p><p><b>Note:</b> Only controls implementing the <code><a target="_self" href="api/sap.f.IShellBar">sap.f.IShellBar</a></code> interface are allowed.</p>
			 * @returns sap.f.IShellBar[] 
			 */
			getAdditionalContent(): sap.f.IShellBar[];
			/**
			 * <p>Gets the available Bar contexts.</p>
			 * @returns any <p>with all available contexts</p>
			 */
			protected getContext(): any;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getHomeIcon">homeIcon</a>.</p><p>Defines the URI to the home icon, such as company or product logo.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns sap.ui.core.URI <p>Value of property <code>homeIcon</code></p>
			 */
			getHomeIcon(): sap.ui.core.URI;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getHomeIconTooltip">homeIconTooltip</a>.</p><p>Defines a custom tooltip for the home icon. If not set, a default tooltip is used.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns string <p>Value of property <code>homeIconTooltip</code></p>
			 */
			getHomeIconTooltip(): string;
			/**
			 * <p>Gets the HTML tag of the root DOM Reference.</p>
			 * @returns string <p>the HTML-tag</p>
			 */
			protected getHTMLTag(): string;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getMenu">menu</a>.</p><p>The menu attached to the main title.</p>
			 * @returns sap.m.Menu 
			 */
			getMenu(): sap.m.Menu;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getNotificationsNumber">notificationsNumber</a>.</p><p>Defines the displayed number of upcoming notifications.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns string <p>Value of property <code>notificationsNumber</code></p>
			 */
			getNotificationsNumber(): string;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getProfile">profile</a>.</p><p>The profile avatar.</p>
			 * @returns sap.m.Avatar 
			 */
			getProfile(): sap.m.Avatar;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getSearchManager">searchManager</a>.</p><p>Configurable search.</p><p><b>Note:</b> If <code>showSearch</code> is set to <code>true</code>, two search buttons appear.</p>
			 * @returns sap.f.SearchManager 
			 */
			getSearchManager(): sap.f.SearchManager;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getSecondTitle">secondTitle</a>.</p><p>Defines the secondary title of the control.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns string <p>Value of property <code>secondTitle</code></p>
			 */
			getSecondTitle(): string;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowCopilot">showCopilot</a>.</p><p>Determines whether the SAP CoPilot icon is displayed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showCopilot</code></p>
			 */
			getShowCopilot(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowMenuButton">showMenuButton</a>.</p><p>Determines whether a hamburger menu button is displayed (as an alternative if the <code>menu</code> aggregation is not used).</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showMenuButton</code></p>
			 */
			getShowMenuButton(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowNavButton">showNavButton</a>.</p><p>Determines whether a back navigation button is displayed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showNavButton</code></p>
			 */
			getShowNavButton(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowNotifications">showNotifications</a>.</p><p>Determines whether the notifications button is displayed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showNotifications</code></p>
			 */
			getShowNotifications(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowProductSwitcher">showProductSwitcher</a>.</p><p>Determines whether the product switcher button is displayed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showProductSwitcher</code></p>
			 */
			getShowProductSwitcher(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getShowSearch">showSearch</a>.</p><p>Determines whether the search button is displayed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>showSearch</code></p>
			 */
			getShowSearch(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.ShellBar#methods/getTitle">title</a>.</p><p>Defines the main title of the control.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns string <p>Value of property <code>title</code></p>
			 */
			getTitle(): string;
			/**
			 * <p>Checks for the provided <code>sap.f.IShellBar</code> in the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.f.IShellBar} oAdditionalContent <p>The additionalContent whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfAdditionalContent(oAdditionalContent: sap.f.IShellBar): number;
			/**
			 * <p>Inserts a additionalContent into the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p>
			 * @param {sap.f.IShellBar} oAdditionalContent <p>The additionalContent to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the additionalContent should be inserted at; for a negative value of <code>iIndex</code>, the additionalContent is inserted at position 0; for a value greater than the current size of the aggregation, the additionalContent is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertAdditionalContent(oAdditionalContent: sap.f.IShellBar, iIndex: number): this;
			/**
			 * <p>Returns if the bar is sensitive to the container context. Implementation of the IBar interface</p>
			 * @returns boolean <p>isContextSensitive</p>
			 */
			protected isContextSensitive(): boolean;
			/**
			 * <p>Removes a additionalContent from the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p>
			 * @param {number | string | sap.f.IShellBar} vAdditionalContent <p>The additionalContent to remove or its index or id</p>
			 * @returns sap.f.IShellBar|null <p>The removed additionalContent or <code>null</code></p>
			 */
			removeAdditionalContent(vAdditionalContent: number | string | sap.f.IShellBar): sap.f.IShellBar | null;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.ShellBar#methods/getAdditionalContent">additionalContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.f.IShellBar[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllAdditionalContent(): sap.f.IShellBar[];
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getHomeIcon">homeIcon</a>.</p><p>Defines the URI to the home icon, such as company or product logo.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {sap.ui.core.URI} sHomeIcon <p>New value for property <code>homeIcon</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHomeIcon(sHomeIcon?: sap.ui.core.URI): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getHomeIconTooltip">homeIconTooltip</a>.</p><p>Defines a custom tooltip for the home icon. If not set, a default tooltip is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {string} sHomeIconTooltip <p>New value for property <code>homeIconTooltip</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setHomeIconTooltip(sHomeIconTooltip?: string): this;
			/**
			 * <p>Sets the HTML tag of the root DOM Reference.</p>
			 * @param {string} sTag 
			 * @returns sap.m.IBar <p>this for chaining</p>
			 */
			protected setHTMLTag(sTag: string): sap.m.IBar;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.ShellBar#methods/getMenu">menu</a>.</p>
			 * @param {sap.m.Menu} oMenu <p>The menu to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setMenu(oMenu: sap.m.Menu): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.ShellBar#methods/getProfile">profile</a>.</p>
			 * @param {sap.m.Avatar} oProfile <p>The profile to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setProfile(oProfile: sap.m.Avatar): this;
			/**
			 * <p>Sets the aggregated <a target="_self" href="api/sap.f.ShellBar#methods/getSearchManager">searchManager</a>.</p>
			 * @param {sap.f.SearchManager} oSearchManager <p>The searchManager to set</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSearchManager(oSearchManager: sap.f.SearchManager): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getSecondTitle">secondTitle</a>.</p><p>Defines the secondary title of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {string} sSecondTitle <p>New value for property <code>secondTitle</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSecondTitle(sSecondTitle?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowCopilot">showCopilot</a>.</p><p>Determines whether the SAP CoPilot icon is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowCopilot <p>New value for property <code>showCopilot</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowCopilot(bShowCopilot?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowMenuButton">showMenuButton</a>.</p><p>Determines whether a hamburger menu button is displayed (as an alternative if the <code>menu</code> aggregation is not used).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowMenuButton <p>New value for property <code>showMenuButton</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowMenuButton(bShowMenuButton?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowNavButton">showNavButton</a>.</p><p>Determines whether a back navigation button is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowNavButton <p>New value for property <code>showNavButton</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowNavButton(bShowNavButton?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowNotifications">showNotifications</a>.</p><p>Determines whether the notifications button is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowNotifications <p>New value for property <code>showNotifications</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowNotifications(bShowNotifications?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowProductSwitcher">showProductSwitcher</a>.</p><p>Determines whether the product switcher button is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowProductSwitcher <p>New value for property <code>showProductSwitcher</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowProductSwitcher(bShowProductSwitcher?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getShowSearch">showSearch</a>.</p><p>Determines whether the search button is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bShowSearch <p>New value for property <code>showSearch</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setShowSearch(bShowSearch?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.ShellBar#methods/getTitle">title</a>.</p><p>Defines the main title of the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {string} sTitle <p>New value for property <code>title</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setTitle(sTitle?: string): this;
		}
		/**
		 * <h3>Overview</h3><p><code>SidePanel</code> is a layout control that allows primary and additional content to be displayed by clicking/tapping the action items from its action bar.</p><h3>Usage</h3><p>Action bar with action items have two states - collapsed and expanded. In collapsed state only icons are displayed, and in expanded state both icons and titles are displayed.</p><p>Each action item can have a content and click/tap on action item toggles the display of its content. The content can be added to the action item's <code>content</code> aggregation, or can be added or changed later.</p><p>Each click/tap fires an event, and in the event handler specific content can be added/changed to the <code>content</code> aggregation of the clicked/tapped action item or data can be retreived from the same aggregation depending on the state of the action item.</p><p>If the side content is displayed, there is automatically generated header of the side content which contains the icon and title of the selected action item and a close button that closes the area where side content is displayed.</p><h3>Responsive Behavior</h3><p><b>On desktop/tablet device</b></p><p>The side panel contains action bar that have action items placed vertically, and when expanded, the side content is displayed next to the action bar. If there is not enough space for all available action items, an overflow icon is displayed, and it toggles ON/OFF an overflow menu with the rest of the action items that are not visible at the moment.</p><p>Screen width > 1440 px</p><p><ul><li>When expanded, the side content shrinks the main content.</li></ul></p><p>Screen width <= 1440 px</p><p><ul><li>When expanded, the side content is placed over the main content.</li></ul></p><p><b>On mobile device</b></p><p>The side panel contains action bar that have action items placed horizontally at the bottom of the display, and when expanded, the side content is displayed above the action bar. If there is not enough room for all action items, the action bar can be swiped to access the rest of the action items.</p><h3>Keyboard shortcuts</h3><p><ul> <li>[Shift] + [Command] + [p] (Mac) / [Shift] + [Control] + [p] (Windows) - Expand/Collapse side panel</li> <li>[Arrow Up], [Arrow Down] - Move to the next or previous action item</li> <li>[Enter], [Space] - Choose the selected action item</li> <li>[Command] + [Arrow Left] (Mac) / [Control] + [Arrow Left] (Windows) / [Tab]- Move from action items to the opened side content panel</li> <li>[Command] + [Arrow Right] (Mac) / [Control] + [Arrow Right] (Windows) / [Shift] + [Tab]- Move from opened side content panel to the action items</li> <li>[F6] / [Shift] + [F6] - Navigate back and forth between main content, side panel and side content groups <li>[Esc] - Close the opened side content panel and set focus back to main content</li> </ul></p>
		 */
		export class SidePanel extends sap.ui.core.Control {
			/**
			 * <p>Constructor for a new <code>SidePanel</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some item to the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p>
			 * @param {sap.f.SidePanelItem} oItem <p>The item to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addItem(oItem: sap.f.SidePanelItem): this;
			/**
			 * <p>Adds some mainContent to the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p>
			 * @param {sap.ui.core.Control} oMainContent <p>The mainContent to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addMainContent(oMainContent: sap.ui.core.Control): this;
			/**
			 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.SidePanel#events/toggle">toggle</a> event of this <code>sap.f.SidePanel</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.SidePanel</code> itself.</p><p>Fires on expand and collapse of the side content.</p><p><ul><li>If the event fired as a result of action item selection (<code>expanded</code> parameter contains <code>true</code>) is prevented, the display of the side content will be blocked.</li> <li>If the event fired as a result of action item deselection, selection of different action item, pressing the <code>Close</code> button, or pressing the <code>Escape</code> key (<code>expanded</code> parameter contains <code>false</code>) is prevented, this will block closing of the currently displayed side content, and if the event is fired by selection of a different action item, the selection will be cancelled, and the next event (for expansion of a new action item) will not be fired and the new side content will not be displayed.</li></ul></p>
			 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
			 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
			 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.SidePanel</code> itself</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			attachToggle(oData: any, fnFunction: any, oListener?: any): this;
			/**
			 * <p>Destroys all the items in the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyItems(): this;
			/**
			 * <p>Destroys all the mainContent in the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyMainContent(): this;
			/**
			 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.SidePanel#events/toggle">toggle</a> event of this <code>sap.f.SidePanel</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
			 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
			 * @param {any} oListener <p>Context object on which the given function had to be called</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			detachToggle(fnFunction: any, oListener?: any): this;
			/**
			 * <p>Fires event <a target="_self" href="api/sap.f.SidePanel#events/toggle">toggle</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
			 * @param {any} mParameters <p>Parameters to pass along with the event</p>
			 * @returns boolean <p>Whether or not to prevent the default action</p>
			 */
			protected fireToggle(mParameters?: any): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SidePanel#methods/getActionBarExpanded">actionBarExpanded</a>.</p><p>Determines whether the action bar is expanded or collapsed.</p><p>Default value is <code>false</code>.</p>
			 * @returns boolean <p>Value of property <code>actionBarExpanded</code></p>
			 */
			getActionBarExpanded(): boolean;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SidePanel#methods/getAriaLabel">ariaLabel</a>.</p><p>Description for aria-label.</p><p>Default value is <code>"Side Panel"</code>.</p>
			 * @returns string <p>Value of property <code>ariaLabel</code></p>
			 */
			getAriaLabel(): string;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p><p>The list of action items. Each action items can have different side content added to its <code>content</code> aggregation.</p>
			 * @returns sap.f.SidePanelItem[] 
			 */
			getItems(): sap.f.SidePanelItem[];
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p><p>The list of controls for the main content.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getMainContent(): sap.ui.core.Control[];
			/**
			 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.f.SidePanel#methods/getSelectedItem">selectedItem</a>, or <code>null</code>.</p>
			 * @returns sap.ui.core.ID 
			 */
			getSelectedItem(): sap.ui.core.ID;
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SidePanel#methods/getSidePanelWidth">sidePanelWidth</a>.</p><p>Determines the side panel width (Side Content width + Action Bar width). <b>Note:</b> if the width is given in percent(%), it is calculated as given percent from the Side Panel parent container width, otherwise it's calculated in absolute units.</p><p>Default value is <code>"20rem"</code>.</p>
			 * @returns sap.ui.core.CSSSize <p>Value of property <code>sidePanelWidth</code></p>
			 */
			getSidePanelWidth(): sap.ui.core.CSSSize;
			/**
			 * <p>Checks for the provided <code>sap.f.SidePanelItem</code> in the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.f.SidePanelItem} oItem <p>The item whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfItem(oItem: sap.f.SidePanelItem): number;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oMainContent <p>The mainContent whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfMainContent(oMainContent: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a item into the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p>
			 * @param {sap.f.SidePanelItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertItem(oItem: sap.f.SidePanelItem, iIndex: number): this;
			/**
			 * <p>Inserts a mainContent into the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p>
			 * @param {sap.ui.core.Control} oMainContent <p>The mainContent to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the mainContent should be inserted at; for a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertMainContent(oMainContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.f.SidePanelItem[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllItems(): sap.f.SidePanelItem[];
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllMainContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes a item from the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getItems">items</a>.</p>
			 * @param {number | string | sap.f.SidePanelItem} vItem <p>The item to remove or its index or id</p>
			 * @returns sap.f.SidePanelItem|null <p>The removed item or <code>null</code></p>
			 */
			removeItem(vItem: number | string | sap.f.SidePanelItem): sap.f.SidePanelItem | null;
			/**
			 * <p>Removes a mainContent from the aggregation <a target="_self" href="api/sap.f.SidePanel#methods/getMainContent">mainContent</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vMainContent <p>The mainContent to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed mainContent or <code>null</code></p>
			 */
			removeMainContent(vMainContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SidePanel#methods/getActionBarExpanded">actionBarExpanded</a>.</p><p>Determines whether the action bar is expanded or collapsed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
			 * @param {boolean} bActionBarExpanded <p>New value for property <code>actionBarExpanded</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setActionBarExpanded(bActionBarExpanded?: boolean): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SidePanel#methods/getAriaLabel">ariaLabel</a>.</p><p>Description for aria-label.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Side Panel"</code>.</p>
			 * @param {string} sAriaLabel <p>New value for property <code>ariaLabel</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setAriaLabel(sAriaLabel?: string): this;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SidePanel#methods/getSidePanelWidth">sidePanelWidth</a>.</p><p>Determines the side panel width (Side Content width + Action Bar width). <b>Note:</b> if the width is given in percent(%), it is calculated as given percent from the Side Panel parent container width, otherwise it's calculated in absolute units.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"20rem"</code>.</p>
			 * @param {sap.ui.core.CSSSize} sSidePanelWidth <p>New value for property <code>sidePanelWidth</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setSidePanelWidth(sSidePanelWidth?: sap.ui.core.CSSSize): this;
		}
		/**
		 * <h3>Overview</h3><p>The SidePanel Action Item.</p>
		 */
		export class SidePanelItem extends sap.ui.core.Item {
			/**
			 * <p>Constructor for a new <code>SidePanelItem</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
			 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
			 * @param {any} mSettings <p>Initial settings for the new control</p>
			 */
			constructor(sId?: string, mSettings?: any);
			/**
			 * <p>Adds some content to the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			addContent(oContent: sap.ui.core.Control): this;
			/**
			 * <p>Destroys all the content in the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			destroyContent(): this;
			/**
			 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p><p>The list of controls for side content of the action item.</p>
			 * @returns sap.ui.core.Control[] 
			 */
			getContent(): sap.ui.core.Control[];
			/**
			 * <p>Gets current value of property <a target="_self" href="api/sap.f.SidePanelItem#methods/getIcon">icon</a>.</p><p>Specifies the icon for the item.</p><p>Default value is <code>empty string</code>.</p>
			 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
			 */
			getIcon(): sap.ui.core.URI;
			/**
			 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>. and returns its index if found or -1 otherwise.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
			 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
			 */
			indexOfContent(oContent: sap.ui.core.Control): number;
			/**
			 * <p>Inserts a content into the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p>
			 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
			 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			insertContent(oContent: sap.ui.core.Control, iIndex: number): this;
			/**
			 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
			 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
			 */
			removeAllContent(): sap.ui.core.Control[];
			/**
			 * <p>Removes a content from the aggregation <a target="_self" href="api/sap.f.SidePanelItem#methods/getContent">content</a>.</p>
			 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
			 * @returns sap.ui.core.Control|null <p>The removed content or <code>null</code></p>
			 */
			removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
			/**
			 * <p>Sets a new value for property <a target="_self" href="api/sap.f.SidePanelItem#methods/getIcon">icon</a>.</p><p>Specifies the icon for the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
			 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
			 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
			 */
			setIcon(sIcon?: sap.ui.core.URI): this;
		}
	}
}
declare namespace sap {
	namespace f {
		/**
		 * <p><p>A string type that represents the shrink ratios of the areas within the <code>sap.f.DynamicPageTitle</code>.</p></p>
		 */
		export type DynamicPageTitleShrinkRatio = string;
	}
}
declare namespace sap {
	namespace f {
		/**
		 * <p><p><code>IllustrationPool</code> loads the illustration assets (SVGs) via XMLHttpRequest requests.</p><p>The successfully loaded data is kept in the DOM (div with ID <code>sap-illustration-pool</code>) in the <code>sap-ui-static</code> DOM element.</p><p>To load a given asset, register its illustration set through the <a target="_self" href="api/sap.m.IllustrationPool#methods/sap.m.IllustrationPool.registerIllustrationSet">registerIllustrationSet</a> API of <code>IllustrationPool</code>. The exception being the <code>sapIllus</code>, which is the default illustration set that is registered by default.</p><p>The default behavior of <code>IllustrationPool</code> is to load/require an asset only when it's needed by using the <a target="_self" href="api/sap.m.IllustrationPool#methods/sap.m.IllustrationPool.loadAsset">loadAsset</a> API. When registering the new illustration set, you are given the option to load all of its assets.</p><p>If some of the assets are not loaded initially, you can load the rest of them on a later state with the <a target="_self" href="api/sap.m.IllustrationPool#methods/sap.m.IllustrationPool.loadRestOfTheAssets">loadRestOfTheAssets</a> API.</p></p>
		 */
		namespace IllustrationPool {
		}
	}
}
/**
 */
declare namespace sap {
}
declare namespace sap {
	namespace f {
		/**
		 */
		namespace cards {
			/**
			 * <p>Provides basic functionality for header controls that can be used in <code>sap.f.Card</code.</p>
			 */
			export abstract class BaseHeader extends sap.ui.core.Control {
				/**
				 * <p>Constructor for a new <code>BaseHeader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Destroys the toolbar in the aggregation <a target="_self" href="api/sap.f.cards.BaseHeader#methods/getToolbar">toolbar</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyToolbar(): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.BaseHeader#methods/getDataTimestamp">dataTimestamp</a>.</p><p>Defines the timestamp of the oldest data in the card. Use this to show to the end user how fresh the information in the card is.</p><p>Must be specified in ISO 8601 format.</p><p>Will be shown as a relative time like "5 minutes ago".</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>dataTimestamp</code></p>
				 */
				getDataTimestamp(): string;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.cards.BaseHeader#methods/getToolbar">toolbar</a>.</p><p>Defines the toolbar.</p>
				 * @returns sap.ui.core.Control 
				 */
				getToolbar(): sap.ui.core.Control;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.cards.BaseHeader#methods/getToolbar">toolbar</a>.</p>
				 * @param {sap.ui.core.Control} oToolbar <p>The toolbar to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setToolbar(oToolbar: sap.ui.core.Control): this;
			}
			/**
			 * <p>Displays general information in the header of the <a target="_self" href="api/sap.f.Card">sap.f.Card</a>.</p><p>You can configure the title, subtitle, status text and icon, using the provided properties.</p><p><b>Notes:</b> <ul> <li>You should always set a title.</li> <li>To show a KPI or any numeric information, use <a target="_self" href="api/sap.f.cards.NumericHeader">sap.f.cards.NumericHeader</a> instead.</li> <ul></p>
			 */
			export class Header extends sap.f.cards.BaseHeader implements sap.f.cards.IHeader {
				/**
				 * <p>Constructor for a new <code>Header</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.cards.Header#events/press">press</a> event of this <code>sap.f.cards.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.cards.Header</code> itself.</p><p>Fires when the user presses the control.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.cards.Header</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachPress(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.cards.Header#events/press">press</a> event of this <code>sap.f.cards.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachPress(fnFunction: any, oListener?: any): this;
				/**
				 * <p>This method is a hook for the RenderManager that gets called during the rendering of child Controls. It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.</p>
				 * @param {sap.ui.core.Control} oElement <p>The Control that gets rendered by the RenderManager</p>
				 * @param {any} mAriaProps <p>The mapping of "aria-" prefixed attributes</p>
				 */
				protected enhanceAccessibilityState(oElement: sap.ui.core.Control, mAriaProps: any): void;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.f.cards.Header#events/press">press</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected firePress(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconAlt">iconAlt</a>.</p><p>Defines an alt text for the avatar or icon.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>iconAlt</code></p>
				 */
				getIconAlt(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconBackgroundColor">iconBackgroundColor</a>.</p><p>Defines a background color for the avatar or icon.</p><p>Default value is <code>Transparent</code>.</p>
				 * @returns sap.m.AvatarColor <p>Value of property <code>iconBackgroundColor</code></p>
				 */
				getIconBackgroundColor(): sap.m.AvatarColor;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconDisplayShape">iconDisplayShape</a>.</p><p>Defines the shape of the icon.</p><p>Default value is <code>Circle</code>.</p>
				 * @returns sap.m.AvatarShape <p>Value of property <code>iconDisplayShape</code></p>
				 */
				getIconDisplayShape(): sap.m.AvatarShape;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconInitials">iconInitials</a>.</p><p>Defines the initials of the icon.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>iconInitials</code></p>
				 */
				getIconInitials(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconSrc">iconSrc</a>.</p><p>Defines the icon source.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns sap.ui.core.URI <p>Value of property <code>iconSrc</code></p>
				 */
				getIconSrc(): sap.ui.core.URI;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getIconVisible">iconVisible</a>.</p><p>Defines whether the card icon is visible.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>iconVisible</code></p>
				 */
				getIconVisible(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getStatusText">statusText</a>.</p><p>Defines the status text.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>statusText</code></p>
				 */
				getStatusText(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getSubtitle">subtitle</a>.</p><p>Defines the subtitle.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>subtitle</code></p>
				 */
				getSubtitle(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getSubtitleMaxLines">subtitleMaxLines</a>.</p><p>Limits the number of lines for the subtitle.</p><p>Default value is <code>2</code>.</p>
				 * @returns number <p>Value of property <code>subtitleMaxLines</code></p>
				 */
				getSubtitleMaxLines(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getTitle">title</a>.</p><p>Defines the title.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>title</code></p>
				 */
				getTitle(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.Header#methods/getTitleMaxLines">titleMaxLines</a>.</p><p>Limits the number of lines for the title.</p><p>Default value is <code>3</code>.</p>
				 * @returns number <p>Value of property <code>titleMaxLines</code></p>
				 */
				getTitleMaxLines(): number;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconAlt">iconAlt</a>.</p><p>Defines an alt text for the avatar or icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sIconAlt <p>New value for property <code>iconAlt</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconAlt(sIconAlt?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconBackgroundColor">iconBackgroundColor</a>.</p><p>Defines a background color for the avatar or icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Transparent</code>.</p>
				 * @param {sap.m.AvatarColor} sIconBackgroundColor <p>New value for property <code>iconBackgroundColor</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconBackgroundColor(sIconBackgroundColor?: sap.m.AvatarColor): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconDisplayShape">iconDisplayShape</a>.</p><p>Defines the shape of the icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Circle</code>.</p>
				 * @param {sap.m.AvatarShape} sIconDisplayShape <p>New value for property <code>iconDisplayShape</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconDisplayShape(sIconDisplayShape?: sap.m.AvatarShape): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconInitials">iconInitials</a>.</p><p>Defines the initials of the icon.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sIconInitials <p>New value for property <code>iconInitials</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconInitials(sIconInitials?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconSrc">iconSrc</a>.</p><p>Defines the icon source.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {sap.ui.core.URI} sIconSrc <p>New value for property <code>iconSrc</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconSrc(sIconSrc?: sap.ui.core.URI): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getIconVisible">iconVisible</a>.</p><p>Defines whether the card icon is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bIconVisible <p>New value for property <code>iconVisible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setIconVisible(bIconVisible?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getStatusText">statusText</a>.</p><p>Defines the status text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sStatusText <p>New value for property <code>statusText</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setStatusText(sStatusText?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getSubtitle">subtitle</a>.</p><p>Defines the subtitle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sSubtitle <p>New value for property <code>subtitle</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSubtitle(sSubtitle?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getSubtitleMaxLines">subtitleMaxLines</a>.</p><p>Limits the number of lines for the subtitle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
				 * @param {number} iSubtitleMaxLines <p>New value for property <code>subtitleMaxLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSubtitleMaxLines(iSubtitleMaxLines?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getTitle">title</a>.</p><p>Defines the title.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sTitle <p>New value for property <code>title</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitle(sTitle?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.Header#methods/getTitleMaxLines">titleMaxLines</a>.</p><p>Limits the number of lines for the title.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>3</code>.</p>
				 * @param {number} iTitleMaxLines <p>New value for property <code>titleMaxLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleMaxLines(iTitleMaxLines?: number): this;
			}
			/**
			 * <p><p>Different options for the position of the header in controls that implement the <a target="_self" href="api/sap.f.ICard">sap.f.ICard</a> interface.</p></p>
			 */
			export enum HeaderPosition {
				/**
				 * <p>The Header is under the content.</p>
				 */
				Bottom = "Bottom",
				/**
				 * <p>The Header is over the content.</p>
				 */
				Top = "Top",
			}
			/**
			 * <p><p>Marker interface for controls suitable as a header in controls that implement the <a target="_self" href="api/sap.f.ICard">sap.f.ICard</a> interface.</p></p>
			 */
			export interface IHeader {
			}
			/**
			 * <p>Displays general information in the header of the <a target="_self" href="api/sap.f.Card">sap.f.Card</a> and allows the configuration of a numeric value visualization.</p><p>You can configure the title, subtitle, and status text, using the provided properties. To add more side number indicators, use the <code>sideIndicators</code> aggregation.</p><p><b>Notes:</b> <ul> <li>You should always set a title.</li> <li>You should always have a maximum of two side indicators.</li> <li>To show only basic information, use <a target="_self" href="api/sap.f.cards.Header">Header</a> instead.</li> </ul></p>
			 */
			export class NumericHeader extends sap.f.cards.BaseHeader {
				/**
				 * <p>Constructor for a new <code>NumericHeader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some sideIndicator to the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p>
				 * @param {sap.f.cards.NumericSideIndicator} oSideIndicator <p>The sideIndicator to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addSideIndicator(oSideIndicator: sap.f.cards.NumericSideIndicator): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.f.cards.NumericHeader#events/press">press</a> event of this <code>sap.f.cards.NumericHeader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.cards.NumericHeader</code> itself.</p><p>Fires when the user presses the control.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.f.cards.NumericHeader</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				attachPress(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Destroys all the sideIndicators in the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroySideIndicators(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.f.cards.NumericHeader#events/press">press</a> event of this <code>sap.f.cards.NumericHeader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				detachPress(fnFunction: any, oListener?: any): this;
				/**
				 * <p>This method is a hook for the RenderManager that gets called during the rendering of child Controls. It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.</p>
				 * @param {sap.ui.core.Control} oElement <p>The Control that gets rendered by the RenderManager</p>
				 * @param {any} mAriaProps <p>The mapping of "aria-" prefixed attributes</p>
				 */
				protected enhanceAccessibilityState(oElement: sap.ui.core.Control, mAriaProps: any): void;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.f.cards.NumericHeader#events/press">press</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				protected firePress(mParameters?: any): this;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getDetails">details</a>.</p><p>Additional text which adds more details to what is shown in the numeric header.</p>
				 * @returns string <p>Value of property <code>details</code></p>
				 */
				getDetails(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getDetailsMaxLines">detailsMaxLines</a>.</p><p>Limits the number of lines for the details.</p><p>Default value is <code>1</code>.</p>
				 * @returns number <p>Value of property <code>detailsMaxLines</code></p>
				 */
				getDetailsMaxLines(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getNumber">number</a>.</p><p>The numeric value of the main number indicator. If the value contains more than five characters, only the first five are displayed. Without rounding the number.</p>
				 * @returns string <p>Value of property <code>number</code></p>
				 */
				getNumber(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getScale">scale</a>.</p><p>Defines the unit of measurement (scaling prefix) for the main indicator. Financial characters can be used for currencies and counters. The International System of Units (SI) prefixes can be used. If the unit contains more than three characters, only the first three characters are displayed.</p>
				 * @returns string <p>Value of property <code>scale</code></p>
				 */
				getScale(): string;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p><p>Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators should be used.</p>
				 * @returns sap.f.cards.NumericSideIndicator[] 
				 */
				getSideIndicators(): sap.f.cards.NumericSideIndicator[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicatorsAlignment">sideIndicatorsAlignment</a>.</p><p>The alignment of the side indicators.</p><p>Default value is <code>"Begin"</code>.</p>
				 * @returns sap.f.cards.NumericHeaderSideIndicatorsAlignment <p>Value of property <code>sideIndicatorsAlignment</code></p>
				 */
				getSideIndicatorsAlignment(): sap.f.cards.NumericHeaderSideIndicatorsAlignment;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getState">state</a>.</p><p>The semantic color which represents the state of the main number indicator.</p><p>Default value is <code>"Neutral"</code>.</p>
				 * @returns sap.m.ValueColor <p>Value of property <code>state</code></p>
				 */
				getState(): sap.m.ValueColor;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getStatusText">statusText</a>.</p><p>Defines the status text.</p><p>Default value is <code>empty string</code>.</p>
				 * @returns string <p>Value of property <code>statusText</code></p>
				 */
				getStatusText(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSubtitle">subtitle</a>.</p><p>The subtitle of the card</p>
				 * @returns string <p>Value of property <code>subtitle</code></p>
				 */
				getSubtitle(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSubtitleMaxLines">subtitleMaxLines</a>.</p><p>Limits the number of lines for the subtitle.</p><p>Default value is <code>2</code>.</p>
				 * @returns number <p>Value of property <code>subtitleMaxLines</code></p>
				 */
				getSubtitleMaxLines(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTitle">title</a>.</p><p>The title of the card</p>
				 * @returns string <p>Value of property <code>title</code></p>
				 */
				getTitle(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTitleMaxLines">titleMaxLines</a>.</p><p>Limits the number of lines for the title.</p><p>Default value is <code>3</code>.</p>
				 * @returns number <p>Value of property <code>titleMaxLines</code></p>
				 */
				getTitleMaxLines(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTrend">trend</a>.</p><p>The direction of the trend arrow. Shows deviation for the value of the main number indicator.</p><p>Default value is <code>"None"</code>.</p>
				 * @returns sap.m.DeviationIndicator <p>Value of property <code>trend</code></p>
				 */
				getTrend(): sap.m.DeviationIndicator;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getUnitOfMeasurement">unitOfMeasurement</a>.</p><p>General unit of measurement for the header. Displayed as side information to the subtitle.</p>
				 * @returns string <p>Value of property <code>unitOfMeasurement</code></p>
				 */
				getUnitOfMeasurement(): string;
				/**
				 * <p>Checks for the provided <code>sap.f.cards.NumericSideIndicator</code> in the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.f.cards.NumericSideIndicator} oSideIndicator <p>The sideIndicator whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfSideIndicator(oSideIndicator: sap.f.cards.NumericSideIndicator): number;
				/**
				 * <p>Inserts a sideIndicator into the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p>
				 * @param {sap.f.cards.NumericSideIndicator} oSideIndicator <p>The sideIndicator to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the sideIndicator should be inserted at; for a negative value of <code>iIndex</code>, the sideIndicator is inserted at position 0; for a value greater than the current size of the aggregation, the sideIndicator is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertSideIndicator(oSideIndicator: sap.f.cards.NumericSideIndicator, iIndex: number): this;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.f.cards.NumericSideIndicator[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllSideIndicators(): sap.f.cards.NumericSideIndicator[];
				/**
				 * <p>Removes a sideIndicator from the aggregation <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicators">sideIndicators</a>.</p>
				 * @param {number | string | sap.f.cards.NumericSideIndicator} vSideIndicator <p>The sideIndicator to remove or its index or id</p>
				 * @returns sap.f.cards.NumericSideIndicator|null <p>The removed sideIndicator or <code>null</code></p>
				 */
				removeSideIndicator(vSideIndicator: number | string | sap.f.cards.NumericSideIndicator): sap.f.cards.NumericSideIndicator | null;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getDetails">details</a>.</p><p>Additional text which adds more details to what is shown in the numeric header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sDetails <p>New value for property <code>details</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDetails(sDetails: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getDetailsMaxLines">detailsMaxLines</a>.</p><p>Limits the number of lines for the details.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
				 * @param {number} iDetailsMaxLines <p>New value for property <code>detailsMaxLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDetailsMaxLines(iDetailsMaxLines?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getNumber">number</a>.</p><p>The numeric value of the main number indicator. If the value contains more than five characters, only the first five are displayed. Without rounding the number.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sNumber <p>New value for property <code>number</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setNumber(sNumber: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getScale">scale</a>.</p><p>Defines the unit of measurement (scaling prefix) for the main indicator. Financial characters can be used for currencies and counters. The International System of Units (SI) prefixes can be used. If the unit contains more than three characters, only the first three characters are displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sScale <p>New value for property <code>scale</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setScale(sScale: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSideIndicatorsAlignment">sideIndicatorsAlignment</a>.</p><p>The alignment of the side indicators.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Begin"</code>.</p>
				 * @param {sap.f.cards.NumericHeaderSideIndicatorsAlignment} sSideIndicatorsAlignment <p>New value for property <code>sideIndicatorsAlignment</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSideIndicatorsAlignment(sSideIndicatorsAlignment?: sap.f.cards.NumericHeaderSideIndicatorsAlignment): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getState">state</a>.</p><p>The semantic color which represents the state of the main number indicator.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"Neutral"</code>.</p>
				 * @param {sap.m.ValueColor} sState <p>New value for property <code>state</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setState(sState?: sap.m.ValueColor): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getStatusText">statusText</a>.</p><p>Defines the status text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
				 * @param {string} sStatusText <p>New value for property <code>statusText</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setStatusText(sStatusText?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSubtitle">subtitle</a>.</p><p>The subtitle of the card</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sSubtitle <p>New value for property <code>subtitle</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSubtitle(sSubtitle: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getSubtitleMaxLines">subtitleMaxLines</a>.</p><p>Limits the number of lines for the subtitle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
				 * @param {number} iSubtitleMaxLines <p>New value for property <code>subtitleMaxLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSubtitleMaxLines(iSubtitleMaxLines?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTitle">title</a>.</p><p>The title of the card</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sTitle <p>New value for property <code>title</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitle(sTitle: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTitleMaxLines">titleMaxLines</a>.</p><p>Limits the number of lines for the title.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>3</code>.</p>
				 * @param {number} iTitleMaxLines <p>New value for property <code>titleMaxLines</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleMaxLines(iTitleMaxLines?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getTrend">trend</a>.</p><p>The direction of the trend arrow. Shows deviation for the value of the main number indicator.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
				 * @param {sap.m.DeviationIndicator} sTrend <p>New value for property <code>trend</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTrend(sTrend?: sap.m.DeviationIndicator): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericHeader#methods/getUnitOfMeasurement">unitOfMeasurement</a>.</p><p>General unit of measurement for the header. Displayed as side information to the subtitle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sUnitOfMeasurement <p>New value for property <code>unitOfMeasurement</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setUnitOfMeasurement(sUnitOfMeasurement: string): this;
			}
			/**
			 * <p><p>Different options for the alignment of the side indicators in the numeric header.</p></p>
			 */
			export enum NumericHeaderSideIndicatorsAlignment {
				/**
				 * <p>Sets the alignment to the beginning (left or right depending on LTR/RTL).</p>
				 */
				Begin = "Begin",
				/**
				 * <p>Explicitly sets the alignment to the end (left or right depending on LTR/RTL).</p>
				 */
				End = "End",
			}
			/**
			 * <p>Holds a set of side indicator attributes used in the <a target="_self" href="api/sap.f.cards.NumericHeader">sap.f.cards.NumericHeader</a> control.</p>
			 */
			export class NumericSideIndicator extends sap.ui.core.Control {
				/**
				 * <p>Constructor for a new <code>NumericSideIndicator</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericSideIndicator#methods/getNumber">number</a>.</p><p>The numeric value</p>
				 * @returns string <p>Value of property <code>number</code></p>
				 */
				getNumber(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericSideIndicator#methods/getState">state</a>.</p><p>The semantic color which represents the state of the side indicator.</p><p>Default value is <code>"None"</code>.</p>
				 * @returns sap.m.ValueColor <p>Value of property <code>state</code></p>
				 */
				getState(): sap.m.ValueColor;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericSideIndicator#methods/getTitle">title</a>.</p><p>The title of the indicator</p>
				 * @returns string <p>Value of property <code>title</code></p>
				 */
				getTitle(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.cards.NumericSideIndicator#methods/getUnit">unit</a>.</p><p>Defines the unit of measurement (scaling prefix) for the numeric value</p>
				 * @returns string <p>Value of property <code>unit</code></p>
				 */
				getUnit(): string;
				/**
				 * <p>Sets the numeric value.</p>
				 * @param {string} sValue <p>The text of the title</p>
				 * @returns this <p>this pointer for chaining</p>
				 */
				setNumber(sValue: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.cards.NumericSideIndicator#methods/getState">state</a>.</p><p>The semantic color which represents the state of the side indicator.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"None"</code>.</p>
				 * @param {sap.m.ValueColor} sState <p>New value for property <code>state</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setState(sState?: sap.m.ValueColor): this;
				/**
				 * <p>Sets the title.</p>
				 * @param {string} sValue <p>The text of the title</p>
				 * @returns this <p>this pointer for chaining</p>
				 */
				setTitle(sValue: string): this;
				/**
				 * <p>Sets the unit of measurement.</p>
				 * @param {string} sValue <p>The text of the title</p>
				 * @returns this <p>this pointer for chaining</p>
				 */
				setUnit(sValue: string): this;
			}
		}
	}
}
declare namespace sap {
	namespace f {
		/**
		 */
		namespace dnd {
			/**
			 * <p>Provides enhanced configuration for drop operations inside grid-based controls.</p><p>If drop position is <code>Between</code> and drop layout is <code>Horizontal</code>, this drop configuration will provide enhanced visualization and interaction, better suited for grid items. It will show a drop indicator which mimics the size of the dragged item and shows the potential drop position inside the grid. The indicator will push away other grid items, showing the correct arrangement calculated by the grid’s auto-placement algorithm.</p><p>When position is different than <code>Between</code> or layout is not <code>Horizontal</code>, the drag and drop will look and behave like the general <code><a target="_self" href="api/sap.ui.core.dnd.DropInfo">sap.ui.core.dnd.DropInfo</a></code>.</p><p><b>Note:</b> This configuration might be ignored due to control <a target="_self" href="api/sap.ui.core.Element#methods/sap.ui.core.Element.extend">metadata</a> restrictions.</p>
			 */
			export class GridDropInfo extends sap.ui.core.dnd.DropInfo {
				/**
				 * <p>Constructor for a new GridDropInfo.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new DropInfo, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the GridDropInfo</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.dnd.GridDropInfo#methods/getDropIndicatorSize">dropIndicatorSize</a>.</p><p>A function which will define the desired drop indicator size. The drop indicator shows the user how the grid will rearrange after drop.</p><p>Use when custom size needs to be defined. For example when an item is dragged from outside a grid and is dropped over the grid.</p><p>If not specified or if the function returns <code>null</code>, the indicator size will be calculated automatically.</p><p>This callback will be called when the indicator is displayed, that happens during the drag over movement.</p><p>The callback receives <code>draggedControl</code> as parameter and must return an object of type <code>{rows: <int>, columns: <int>}</code> or <code>null</code>.</p>
				 * @returns Function <p>Value of property <code>dropIndicatorSize</code></p>
				 */
				getDropIndicatorSize(): Function;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.dnd.GridDropInfo#methods/getDropIndicatorSize">dropIndicatorSize</a>.</p><p>A function which will define the desired drop indicator size. The drop indicator shows the user how the grid will rearrange after drop.</p><p>Use when custom size needs to be defined. For example when an item is dragged from outside a grid and is dropped over the grid.</p><p>If not specified or if the function returns <code>null</code>, the indicator size will be calculated automatically.</p><p>This callback will be called when the indicator is displayed, that happens during the drag over movement.</p><p>The callback receives <code>draggedControl</code> as parameter and must return an object of type <code>{rows: <int>, columns: <int>}</code> or <code>null</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {Function} fnDropIndicatorSize <p>New value for property <code>dropIndicatorSize</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDropIndicatorSize(fnDropIndicatorSize: Function): this;
			}
			/**
			 * <p><p>Interface that should be implemented by grid controls, if they are working with the <code>sap.f.dnd.GridDropInfo</code>.</p><p>It is highly recommended that those grid controls have optimized <code>removeItem</code> and <code>insertItem</code> methods (if "items" is target drop aggregation). Meaning to override them in a way that they don't trigger invalidation.</p></p>
			 */
			export interface IGridDroppable {
			}
		}
	}
}
declare namespace sap {
	namespace f {
		/**
		 */
		namespace routing {
			/**
			 * <p>The <code>sap.f.routing.Router</code> class is intended to be used with <code><a target="_self" href="api/sap.f.FlexibleColumnLayout">sap.f.FlexibleColumnLayout</a></code> as a root control.</p><p>The difference to the <code><a target="_self" href="api/sap.ui.core.routing.Router">sap.ui.core.routing.Router</a></code> are the <code>level</code>, <code>transition</code>, and <code>transitionParameters</code> properties that you can specify in every Route or Target created by this router.</p><p>The difference to the <code><a target="_self" href="api/sap.m.routing.Router">sap.m.routing.Router</a></code> is the additional <code>layout</code> property that can be specified in every Route, in which case it is applied to the root control. Also, the <code>sap.f.routing.Router</code> supports navigations that involve both change of <code><a target="_self" href="api/sap.f.LayoutType">sap.f.LayoutType</a></code> and change of the current page within a single column of the <code>sap.f.FlexibleColumnLayout</code>.</p><p>See <code><a target="_self" href="api/sap.ui.core.routing.Router">sap.ui.core.routing.Router</a></code> for the constructor arguments.</p>
			 */
			export class Router extends sap.ui.core.routing.Router {
				/**
				 * <p>Constructor for a new <code>sap.f.routing.Router</code>.</p>
				 * @param {any | object[]} oRoutes <p>may contain many Route configurations as <a target="_self" href="api/sap.ui.core.routing.Route#constructor">sap.ui.core.routing.Route#constructor</a>.</p>
				 * @param {sap.ui.core.UIComponent} oOwner <p>the Component of all the views that will be created by this Router, will get forwarded to the <a target="_self" href="api/sap.ui.core.routing.Views#constructor">sap.ui.core.routing.Views#constructor</a>. If you are using the componentMetadata to define your routes you should skip this parameter.</p>
				 * @param {any} oTargetsConfig <p>the target configuration, see <a target="_self" href="api/sap.f.routing.Targets#constructor">sap.f.routing.Targets#constructor</a> documentation (the options object).</p>
				 */
				constructor(oRoutes?: any | object[], oOwner?: sap.ui.core.UIComponent, oTargetsConfig?: any);
				/**
				 * <p>Returns the <code>TargetHandler</code> instance.</p>
				 * @returns sap.f.routing.TargetHandler <p>The <code>TargetHandler</code> instance</p>
				 */
				getTargetHandler(): sap.f.routing.TargetHandler;
			}
			/**
			 * <p>Used for closing dialogs and showing transitions in <code>NavContainers</code> when targets are displayed.</p><p><b>Note:</b> You should not create an own instance of this class. It is created when using <code><a target="_self" href="api/sap.f.routing.Router">sap.f.routing.Router</a></code> or <code><a target="_self" href="api/sap.f.routing.Targets">sap.f.routing.Targets</a></code>.</p><p><b>Note:</b> You may use the <code><a target="_self" href="api/sap.f.routing.TargetHandler#methods/setCloseDialogs">#setCloseDialogs</a></code> function to specify if dialogs should be closed on displaying other views. The dialogs are closed when a different target is displayed than the previously displayed one, otherwise the dialogs are kept open.</p>
			 */
			export class TargetHandler extends sap.ui.base.Object {
				/**
				 * <p>Constructor for a new <code>TargetHandler</code>.</p>
				 * @param {boolean} closeDialogs <p>Closes all open dialogs before navigating to a different target, if set to <code>true</code> (default). If set to <code>false</code>, it will just navigate without closing dialogs.</p>
				 */
				constructor(closeDialogs: boolean);
				/**
				 * <p>Gets if a navigation should close dialogs.</p>
				 * @returns boolean <p>A flag indication if dialogs will be closed</p>
				 */
				getCloseDialogs(): boolean;
				/**
				 * <p>Sets if a navigation should close dialogs.</p><p><b>Note:</b> The dialogs are closed when a different target is displayed than the previous one, otherwise the dialogs are kept open even when <code>bCloseDialogs</code> is <code>true</code>.</p>
				 * @param {boolean} bCloseDialogs <p>Close dialogs if <code>true</code></p>
				 * @returns this <p>For chaining</p>
				 */
				setCloseDialogs(bCloseDialogs: boolean): this;
			}
			/**
			 * <p>Provides a convenient way for placing views into the correct containers of your app.</p><p>The <code>sap.f</code> extension of <code>Targets</code> also handles the triggering of page navigation when the target control is an <code><a target="_self" href="api/sap.f.FlexibleColumnLayout">sap.f.FlexibleColumnLayout</a></code>. Other controls are also allowed, but the extra parameters <code>level</code>, <code>transition</code>, and <code>transitionParameters</code> are ignored and it behaves as <code><a target="_self" href="api/sap.ui.core.routing.Targets">sap.ui.core.routing.Targets</a></code>.</p><p>When a target is displayed, dialogs are being closed. To change this, use <code><a target="_self" href="api/sap.f.routing.Targets#methods/getTargetHandler">#getTargetHandler</a></code> and <a target="_self" href="api/sap.f.routing.TargetHandler#methods/setCloseDialogs">sap.f.routing.TargetHandler#setCloseDialogs</a>.</p>
			 */
			export class Targets extends sap.ui.core.routing.Targets {
				/**
				 * <p>Constructor for a new <code>Targets</code> class.</p>
				 * @param {any} oOptions undefined
				 */
				constructor(oOptions: any);
				/**
				 * <p>Returns the <code>TargetHandler</code> instance.</p>
				 * @returns sap.f.routing.TargetHandler <p>The <code>TargetHandler</code> instance</p>
				 */
				getTargetHandler(): sap.f.routing.TargetHandler;
			}
		}
	}
}
declare namespace sap {
	namespace f {
		/**
		 */
		namespace semantic {
			/**
			 * <p>A semantic-specific button, eligible for the <code>addAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class AddAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>AddAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>closeAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class CloseAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>CloseAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>copyAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class CopyAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>CopyAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>deleteAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class DeleteAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>DeleteAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>discussInJamAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in the share menu within its title.</p>
			 */
			export class DiscussInJamAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>DiscussInJamAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>editAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class EditAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>EditAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>exitFullScreenAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class ExitFullScreenAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>ExitFullScreenAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>favoriteAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class FavoriteAction extends sap.f.semantic.SemanticToggleButton {
				/**
				 * <p>Constructor for a new <code>FavoriteAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticToggleButton#constructor">sap.f.semantic.SemanticToggleButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>flagAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class FlagAction extends sap.f.semantic.SemanticToggleButton {
				/**
				 * <p>Constructor for a new <code>FlagAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticToggleButton#constructor">sap.f.semantic.SemanticToggleButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>footerMainAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its footer.</p>
			 */
			export class FooterMainAction extends sap.f.semantic.MainAction {
				/**
				 * <p>Constructor for a new <code>FooterMainAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.MainAction#constructor">sap.f.semantic.MainAction</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>fullScreenAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class FullScreenAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>FullScreenAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>Serves as a base class for the <a target="_self" href="api/sap.f.semantic.TitleMainAction">sap.f.semantic.TitleMainAction</a> and <a target="_self" href="api/sap.f.semantic.FooterMainAction">sap.f.semantic.FooterMainAction</a> controls.</p>
			 */
			export class MainAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new MainAction.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.MainAction#methods/getText">text</a>.</p><p>Defines <code>MainAction</code> text</p>
				 * @returns string <p>Value of property <code>text</code></p>
				 */
				getText(): string;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.MainAction#methods/getText">text</a>.</p><p>Defines <code>MainAction</code> text</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sText <p>New value for property <code>text</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setText(sText?: string): this;
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>messagesIndicator</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its footer.</p>
			 */
			export class MessagesIndicator extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>MessagesIndicator</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>negativeAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its footer.</p>
			 */
			export class NegativeAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>NegativeAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.NegativeAction#methods/getText">text</a>.</p><p>Defines <code>NegativeAction</code> text. <b>Note:</b> the default text is "Reject"</p>
				 * @returns string <p>Value of property <code>text</code></p>
				 */
				getText(): string;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.NegativeAction#methods/getText">text</a>.</p><p>Defines <code>NegativeAction</code> text. <b>Note:</b> the default text is "Reject"</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sText <p>New value for property <code>text</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setText(sText?: string): this;
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>positiveAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its footer.</p>
			 */
			export class PositiveAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>PositiveAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.PositiveAction#methods/getText">text</a>.</p><p>Defines <code>PositiveAction</code> text. <b>Note:</b> the default text is "Accept"</p>
				 * @returns string <p>Value of property <code>text</code></p>
				 */
				getText(): string;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.PositiveAction#methods/getText">text</a>.</p><p>Defines <code>PositiveAction</code> text. <b>Note:</b> the default text is "Accept"</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sText <p>New value for property <code>text</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setText(sText?: string): this;
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>printAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in the share menu within its title.</p>
			 */
			export class PrintAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>PrintAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A base class for the available semantic actions, such as <a target="_self" href="api/sap.f.semantic.AddAction">AddAction</a>, <a target="_self" href="api/sap.f.semantic.CloseAction">CloseAction</a>, etc.</p>
			 */
			export abstract class SemanticButton extends sap.m.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>SemanticButton</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.semantic.SemanticButton#constructor">sap.m.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>The base class for the <a target="_self" href="api/sap.f.semantic.SemanticButton">sap.f.semantic.SemanticButton</a>.</p>
			 */
			export abstract class SemanticControl extends sap.ui.core.Element {
				/**
				 * <p>Constructor for a new <code>SemanticControl</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticControl#methods/getVisible">visible</a>.</p><p>Determines whether the <code>SemanticControl</code> is visible.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>visible</code></p>
				 */
				getVisible(): boolean;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticControl#methods/getVisible">visible</a>.</p><p>Determines whether the <code>SemanticControl</code> is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setVisible(bVisible?: boolean): this;
			}
			/**
			 * <p>Provides enhanced functionality by internally aggregating <a target="_self" href="api/sap.f.DynamicPage">sap.f.DynamicPage</a> and contains controls with semantic-specific meaning.</p><h3>Overview</h3><p>Content specified in the <code>sap.f.semantic.SemanticPage</code> aggregations is automatically positioned in dedicated sections of the title or the footer of the page, depending on the control's semantics.</p><p>The actions in the <code>SemanticPage</code> title are grouped to text actions or icon actions. When an aggregation is set, the actions appear in the following predefined order (from left to right):</p><p><ul>Text actions: <li>The main semantic text action - <code>titleMainAction</code></li> <li>Any custom text actions - <code>titleCustomTextActions</code></li> <li>The semantic text actions - <code>editAction</code>, <code>deleteAction</code>, <code>copyAction</code> and <code>addAction</code></li></ul></p><p><ul>Icon actions: <li>Any custom icon actions - <code>titleCustomIconActions</code></li> <li>The simple semantic icon actions - <code>favoriteAction</code> and <code>flagAction</code></li> <li>The share menu semantic icon actions as a drop-down list with the following order: <ul><li><code>sendEmailAction</code></li> <li><code>discussInJamAction</code></li> <li><code>shareInJamAction</code></li> <li><code>sendMessageAction</code></li> <li><code>printAction</code></li> <li>Any <code>customShareActions</code></li></ul></li> <li>The navigation semantic actions - <code>fullScreenAction</code>, <code>exitFullScreenAction</code>, and <code>closeAction</code></li></ul></p><p>The actions in the <code>SemanticPage</code> footer are positioned either on its left or right area and have the following predefined order:</p><p><ul>Footer left area: <li>The semantic text action - <code>messagesIndicator</code></li> <li>The semantic label - <code>draftIndicator</code></li></ul></p><p><ul>Footer right area: <li>The main semantic text action - <code>footerMainAction</code></li> <li>The semantic text actions - <code>positiveAction</code> and <code>negativeAction</code></li> <li>Any custom text actions - <code>footerCustomActions</code></li></ul></p><h3>Usage</h3><p>Using the <code>SemanticPage</code> facilitates the implementation of the SAP Fiori 2.0 design guidelines.</p><h3>Responsive behavior</h3><p>The responsive behavior of the <code>SemanticPage</code> depends on the behavior of the content that is displayed. To adjust the <code>SemanticPage</code> content padding, the <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code>, and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.<br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/84f3d52f492648d5b594e4f45dca7727">Semantic Pages</a></li><li><a target="_self" href="topic/4a97a07ec8f5441d901994d82eaab1f5">Semantic Page (sap.m)</a></li></ul></p>
			 */
			export class SemanticPage extends sap.ui.core.Control {
				/**
				 * <p>Constructor for a new <code>SemanticPage</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some customShareAction to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p>
				 * @param {sap.m.Button} oCustomShareAction <p>The customShareAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addCustomShareAction(oCustomShareAction: sap.m.Button): this;
				/**
				 * <p>Adds some footerCustomAction to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p>
				 * @param {sap.m.Button} oFooterCustomAction <p>The footerCustomAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addFooterCustomAction(oFooterCustomAction: sap.m.Button): this;
				/**
				 * <p>Adds some headerContent to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p>
				 * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addHeaderContent(oHeaderContent: sap.ui.core.Control): this;
				/**
				 * <p>Adds some titleContent to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleContent <p>The titleContent to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTitleContent(oTitleContent: sap.ui.core.Control): this;
				/**
				 * <p>Adds some titleCustomIconAction to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p>
				 * @param {sap.m.OverflowToolbarButton} oTitleCustomIconAction <p>The titleCustomIconAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTitleCustomIconAction(oTitleCustomIconAction: sap.m.OverflowToolbarButton): this;
				/**
				 * <p>Adds some titleCustomTextAction to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p>
				 * @param {sap.m.Button} oTitleCustomTextAction <p>The titleCustomTextAction to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTitleCustomTextAction(oTitleCustomTextAction: sap.m.Button): this;
				/**
				 * <p>Adds some titleExpandedContent to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleExpandedContent <p>The titleExpandedContent to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTitleExpandedContent(oTitleExpandedContent: sap.ui.core.Control): this;
				/**
				 * <p>Adds some titleSnappedContent to the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleSnappedContent <p>The titleSnappedContent to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				addTitleSnappedContent(oTitleSnappedContent: sap.ui.core.Control): this;
				/**
				 * <p>Destroys the addAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getAddAction">addAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyAddAction(): this;
				/**
				 * <p>Destroys the closeAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCloseAction">closeAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyCloseAction(): this;
				/**
				 * <p>Destroys the content in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getContent">content</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyContent(): this;
				/**
				 * <p>Destroys the copyAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCopyAction">copyAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyCopyAction(): this;
				/**
				 * <p>Destroys all the customShareActions in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyCustomShareActions(): this;
				/**
				 * <p>Destroys the deleteAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDeleteAction">deleteAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDeleteAction(): this;
				/**
				 * <p>Destroys the discussInJamAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDiscussInJamAction">discussInJamAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDiscussInJamAction(): this;
				/**
				 * <p>Destroys the draftIndicator in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDraftIndicator">draftIndicator</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyDraftIndicator(): this;
				/**
				 * <p>Destroys the editAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getEditAction">editAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyEditAction(): this;
				/**
				 * <p>Destroys the exitFullScreenAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getExitFullScreenAction">exitFullScreenAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyExitFullScreenAction(): this;
				/**
				 * <p>Destroys the favoriteAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFavoriteAction">favoriteAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyFavoriteAction(): this;
				/**
				 * <p>Destroys the flagAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFlagAction">flagAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyFlagAction(): this;
				/**
				 * <p>Destroys all the footerCustomActions in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyFooterCustomActions(): this;
				/**
				 * <p>Destroys the footerMainAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterMainAction">footerMainAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyFooterMainAction(): this;
				/**
				 * <p>Destroys the fullScreenAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFullScreenAction">fullScreenAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyFullScreenAction(): this;
				/**
				 * <p>Destroys all the headerContent in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyHeaderContent(): this;
				/**
				 * <p>Destroys the landmarkInfo in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getLandmarkInfo">landmarkInfo</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyLandmarkInfo(): this;
				/**
				 * <p>Destroys the messagesIndicator in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getMessagesIndicator">messagesIndicator</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyMessagesIndicator(): this;
				/**
				 * <p>Destroys the negativeAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getNegativeAction">negativeAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyNegativeAction(): this;
				/**
				 * <p>Destroys the positiveAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPositiveAction">positiveAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyPositiveAction(): this;
				/**
				 * <p>Destroys the printAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPrintAction">printAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyPrintAction(): this;
				/**
				 * <p>Destroys the saveAsTileAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSaveAsTileAction">saveAsTileAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroySaveAsTileAction(): this;
				/**
				 * <p>Destroys the sendEmailAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendEmailAction">sendEmailAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroySendEmailAction(): this;
				/**
				 * <p>Destroys the sendMessageAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendMessageAction">sendMessageAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroySendMessageAction(): this;
				/**
				 * <p>Destroys the shareInJamAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getShareInJamAction">shareInJamAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyShareInJamAction(): this;
				/**
				 * <p>Destroys the titleBreadcrumbs in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleBreadcrumbs">titleBreadcrumbs</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleBreadcrumbs(): this;
				/**
				 * <p>Destroys all the titleContent in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleContent(): this;
				/**
				 * <p>Destroys all the titleCustomIconActions in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleCustomIconActions(): this;
				/**
				 * <p>Destroys all the titleCustomTextActions in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleCustomTextActions(): this;
				/**
				 * <p>Destroys all the titleExpandedContent in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleExpandedContent(): this;
				/**
				 * <p>Destroys the titleExpandedHeading in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedHeading">titleExpandedHeading</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleExpandedHeading(): this;
				/**
				 * <p>Destroys the titleHeading in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleHeading">titleHeading</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleHeading(): this;
				/**
				 * <p>Destroys the titleMainAction in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleMainAction">titleMainAction</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleMainAction(): this;
				/**
				 * <p>Destroys all the titleSnappedContent in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleSnappedContent(): this;
				/**
				 * <p>Destroys the titleSnappedHeading in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedHeading">titleSnappedHeading</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleSnappedHeading(): this;
				/**
				 * <p>Destroys the titleSnappedOnMobile in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedOnMobile">titleSnappedOnMobile</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				destroyTitleSnappedOnMobile(): this;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getAddAction">addAction</a>.</p><p>A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.AddAction 
				 */
				getAddAction(): sap.f.semantic.AddAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCloseAction">closeAction</a>.</p><p>A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.CloseAction 
				 */
				getCloseAction(): sap.f.semantic.CloseAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getContent">content</a>.</p><p>The <code>SemanticPage</code> content.</p><p><b>Note:</b> The SAP Fiori Design guidelines require that the <code>SemanticPage</code>'s header content and the <code>SemanticPage</code>'s content are aligned vertically. When using <a target="_self" href="api/sap.ui.layout.form.Form">sap.ui.layout.form.Form</a>, <a target="_self" href="api/sap.m.Panel">sap.m.Panel</a>, <a target="_self" href="api/sap.m.Table">sap.m.Table</a> and <a target="_self" href="api/sap.m.List">sap.m.List</a> in the content area of <code>SemanticPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFSemanticPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).</p><p>Example:</p><p><pre>
				<code> &lt;Panel class=“sapFSemanticPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>
				</pre></p><p>Please keep in mind that the alignment is not possible when the controls are placed in a <a target="_self" href="api/sap.ui.layout.Grid">sap.ui.layout.Grid</a> or in other layout controls that use <code>overflow:hidden</code> CSS property.</p>
				 * @returns sap.ui.core.Control 
				 */
				getContent(): sap.ui.core.Control;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCopyAction">copyAction</a>.</p><p>A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.CopyAction 
				 */
				getCopyAction(): sap.f.semantic.CopyAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p><p>The <code>customShareActions</code> are placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title, right after the semantic actions.</p><p>The text and icon of the button inside the <code>customShareActions</code> aggregation, can be customized.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.m.Button[] 
				 */
				getCustomShareActions(): sap.m.Button[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDeleteAction">deleteAction</a>.</p><p>A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.DeleteAction 
				 */
				getDeleteAction(): sap.f.semantic.DeleteAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDiscussInJamAction">discussInJamAction</a>.</p><p>A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.DiscussInJamAction 
				 */
				getDiscussInJamAction(): sap.f.semantic.DiscussInJamAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDraftIndicator">draftIndicator</a>.</p><p>A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a second action.</p>
				 * @returns sap.m.DraftIndicator 
				 */
				getDraftIndicator(): sap.m.DraftIndicator;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getEditAction">editAction</a>.</p><p>A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.EditAction 
				 */
				getEditAction(): sap.f.semantic.EditAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getExitFullScreenAction">exitFullScreenAction</a>.</p><p>A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.ExitFullScreenAction 
				 */
				getExitFullScreenAction(): sap.f.semantic.ExitFullScreenAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFavoriteAction">favoriteAction</a>.</p><p>A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.FavoriteAction 
				 */
				getFavoriteAction(): sap.f.semantic.FavoriteAction;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFitContent">fitContent</a>.</p><p>Optimizes <code>SemanticPage</code> responsiveness on small screens and behavior when expanding/collapsing the <code>SemanticPageHeader</code>.</p><p><b>Note:</b> It is recommended to use this property when displaying content of adaptive controls that stretch to fill the available space. Such controls may be <a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a> and <a target="_self" href="api/sap.ui.table.AnalyticalTable">sap.ui.table.AnalyticalTable</a> depending on their settings.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>fitContent</code></p>
				 */
				getFitContent(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFlagAction">flagAction</a>.</p><p>A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.FlagAction 
				 */
				getFlagAction(): sap.f.semantic.FlagAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p><p>The <code>footerCustomActions</code> are placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer, right after the semantic footer actions.</p><p><b>Note:</b> Buttons that are part of this aggregation will always have their <code>type</code> property set to <code>Transparent</code> by design.</p>
				 * @returns sap.m.Button[] 
				 */
				getFooterCustomActions(): sap.m.Button[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterMainAction">footerMainAction</a>.</p><p>A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Save</code>.</p>
				 * @returns sap.f.semantic.FooterMainAction 
				 */
				getFooterMainAction(): sap.f.semantic.FooterMainAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFullScreenAction">fullScreenAction</a>.</p><p>A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.FullScreenAction 
				 */
				getFullScreenAction(): sap.f.semantic.FullScreenAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p><p>The header content.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getHeaderContent(): sap.ui.core.Control[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderExpanded">headerExpanded</a>.</p><p>Determines whether the header is expanded.</p><p>The header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.</p><p><b>Note:</b> Please be aware, that initially collapsed header state is not supported, so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>headerExpanded</code></p>
				 */
				getHeaderExpanded(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderPinnable">headerPinnable</a>.</p><p>Determines whether the header is pinnable.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>headerPinnable</code></p>
				 */
				getHeaderPinnable(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getLandmarkInfo">landmarkInfo</a>.</p><p>Accessible landmark settings to be applied to the containers of the <code>sap.f.SemanticPage</code> control.</p><p>If not set, no landmarks will be written.</p>
				 * @returns sap.f.DynamicPageAccessibleLandmarkInfo 
				 */
				getLandmarkInfo(): sap.f.DynamicPageAccessibleLandmarkInfo;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getMessagesIndicator">messagesIndicator</a>.</p><p>A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a first action.</p>
				 * @returns sap.f.semantic.MessagesIndicator 
				 */
				getMessagesIndicator(): sap.f.semantic.MessagesIndicator;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getNegativeAction">negativeAction</a>.</p><p>A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Reject</code>.</p>
				 * @returns sap.f.semantic.NegativeAction 
				 */
				getNegativeAction(): sap.f.semantic.NegativeAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPositiveAction">positiveAction</a>.</p><p>A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Accept</code>.</p>
				 * @returns sap.f.semantic.PositiveAction 
				 */
				getPositiveAction(): sap.f.semantic.PositiveAction;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling.</p><p>For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the title and the header are with height larger than a given threshold.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>preserveHeaderStateOnScroll</code></p>
				 */
				getPreserveHeaderStateOnScroll(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPrintAction">printAction</a>.</p><p>A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.PrintAction 
				 */
				getPrintAction(): sap.f.semantic.PrintAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSaveAsTileAction">saveAsTileAction</a>.</p><p>A button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.m.Button 
				 */
				getSaveAsTileAction(): sap.m.Button;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendEmailAction">sendEmailAction</a>.</p><p>A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.SendEmailAction 
				 */
				getSendEmailAction(): sap.f.semantic.SendEmailAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendMessageAction">sendMessageAction</a>.</p><p>A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.SendMessageAction 
				 */
				getSendMessageAction(): sap.f.semantic.SendMessageAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getShareInJamAction">shareInJamAction</a>.</p><p>A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.ShareInJamAction 
				 */
				getShareInJamAction(): sap.f.semantic.ShareInJamAction;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>showFooter</code></p>
				 */
				getShowFooter(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleAreaShrinkRatio">titleAreaShrinkRatio</a>.</p><p>Assigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.</p><p>The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.</p><p>For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.</p><p>If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.</p><p><Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.</p><p>Default value is <code>"1:1.6:1.6"</code>.</p>
				 * @returns sap.f.DynamicPageTitleShrinkRatio <p>Value of property <code>titleAreaShrinkRatio</code></p>
				 */
				getTitleAreaShrinkRatio(): sap.f.DynamicPageTitleShrinkRatio;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleBreadcrumbs">titleBreadcrumbs</a>.</p><p>The <code>SemanticPage</code> breadcrumbs.</p><p>A typical usage is the <code>sap.m.Breadcrumbs</code> control or any other UI5 control, that implements the <code>sap.m.IBreadcrumbs</code> interface.</p><p><b>Notes:</b> <ul> <li>The control will be placed in the title`s top-left area.</li> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> </ul></p>
				 * @returns sap.m.IBreadcrumbs 
				 */
				getTitleBreadcrumbs(): sap.m.IBreadcrumbs;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p><p>The content, displayed in the title.</p><p><b>Notes:</b> <ul> <li>The controls will be placed in the middle area.</li> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> </ul></p>
				 * @returns sap.ui.core.Control[] 
				 */
				getTitleContent(): sap.ui.core.Control[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p><p>The <code>titleCustomIconActions</code> are placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title, right before the semantic icon action.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.m.OverflowToolbarButton[] 
				 */
				getTitleCustomIconActions(): sap.m.OverflowToolbarButton[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p><p>The <code>titleCustomTextActions</code> are placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title, right before the semantic text action.</p><p><b>Notes:</b> <ul> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> <li>Buttons that are part of this aggregation will always have their <code>type</code> property set to <code>Transparent</code> by design.</li> </ul></p>
				 * @returns sap.m.Button[] 
				 */
				getTitleCustomTextActions(): sap.m.Button[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p><p>The content,displayed in the title, when the header is in expanded state.</p><p><b>Note:</b> The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation.</p>
				 * @returns sap.ui.core.Control[] 
				 */
				getTitleExpandedContent(): sap.ui.core.Control[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedHeading">titleExpandedHeading</a>.</p><p>The <code>titleExpandedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.</p><p><b>Note:</b> In order for <code>titleExpandedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleExpandedHeading</code> with <code>titleSnappedHeading</code> to switch content when the header switches state.</p>
				 * @returns sap.ui.core.Control 
				 */
				getTitleExpandedHeading(): sap.ui.core.Control;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleHeading">titleHeading</a>.</p><p>The <code>SemanticPage</code> heading.</p><p>A typical usage is the <code>sap.m.Title</code> or any other UI5 control, that serves as a heading for an object.</p><p><b>Notes:</b> <ul> <li>The control will be placed in the title`s leftmost area.</li> <li><code>titleHeading</code> is mutually exclusive with <code>titleSnappedHeading</code> and <code>titleExpandedHeading</code>. If <code>titleHeading</code> is provided, both <code>titleSnappedHeading</code> and <code>titleExpandedHeading</code> are ignored. <code>titleHeading</code> is useful when the content of <code>titleSnappedHeading</code> and <code>titleExpandedHeading</code> needs to be the same as it replaces them both.</li> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> </ul></p>
				 * @returns sap.ui.core.Control 
				 */
				getTitleHeading(): sap.ui.core.Control;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleMainAction">titleMainAction</a>.</p><p>A semantic-specific button which is placed in the <code>SemanticPage</code> title as first action.</p><p><b>Note:</b> If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p>
				 * @returns sap.f.semantic.TitleMainAction 
				 */
				getTitleMainAction(): sap.f.semantic.TitleMainAction;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p><p>The content, displayed in the title, when the header is in collapsed state.</p><p><b>Notes:</b> <ul> <li>The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation.</li> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> </ul></p>
				 * @returns sap.ui.core.Control[] 
				 */
				getTitleSnappedContent(): sap.ui.core.Control[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedHeading">titleSnappedHeading</a>.</p><p>The <code>titleSnappedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.</p><p><b>Notes:</b> <ul> <li>In order for <code>titleSnappedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleSnappedHeading</code> with <code>titleExpandedHeading</code> to switch content when the header switches state.</li> <li>If the <code>titleSnappedOnMobile</code> aggregation is set, its content overrides this aggregation when the control is viewed on a phone mobile device and the <code>SemanticPage</code> header is in its collapsed (snapped) state.</li> </ul></p>
				 * @returns sap.ui.core.Control 
				 */
				getTitleSnappedHeading(): sap.ui.core.Control;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedOnMobile">titleSnappedOnMobile</a>.</p><p>The only content that is displayed in the <code>SemanticPage</code> title when it is viewed on a phone mobile device and the <code>SemanticPage</code> header is in collapsed (snapped) state.</p><p>Using this aggregation enables you to provide a simple, single-line title that takes less space on the smaller phone screens when the <code>SemanticPage</code> header is in its collapsed (snapped) state.</p><p><b>Note:</b> The content set in this aggregation overrides all the other <code>SemanticPage</code> aggregations displayed in the title and is only visible on phone mobile devices in collapsed (snapped) state of the <code>SemanticPage</code> header.</p>
				 * @returns sap.m.Title 
				 */
				getTitleSnappedOnMobile(): sap.m.Title;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the header by clicking on the title.</p><p>If set to <code>false</code>, the title is not clickable and the application must provide other means for expanding/collapsing the header, if necessary.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>toggleHeaderOnTitleClick</code></p>
				 */
				getToggleHeaderOnTitleClick(): boolean;
				/**
				 * <p>Checks for the provided <code>sap.m.Button</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.m.Button} oCustomShareAction <p>The customShareAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfCustomShareAction(oCustomShareAction: sap.m.Button): number;
				/**
				 * <p>Checks for the provided <code>sap.m.Button</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.m.Button} oFooterCustomAction <p>The footerCustomAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfFooterCustomAction(oFooterCustomAction: sap.m.Button): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfHeaderContent(oHeaderContent: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oTitleContent <p>The titleContent whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTitleContent(oTitleContent: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.m.OverflowToolbarButton</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.m.OverflowToolbarButton} oTitleCustomIconAction <p>The titleCustomIconAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTitleCustomIconAction(oTitleCustomIconAction: sap.m.OverflowToolbarButton): number;
				/**
				 * <p>Checks for the provided <code>sap.m.Button</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.m.Button} oTitleCustomTextAction <p>The titleCustomTextAction whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTitleCustomTextAction(oTitleCustomTextAction: sap.m.Button): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oTitleExpandedContent <p>The titleExpandedContent whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTitleExpandedContent(oTitleExpandedContent: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oTitleSnappedContent <p>The titleSnappedContent whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
				indexOfTitleSnappedContent(oTitleSnappedContent: sap.ui.core.Control): number;
				/**
				 * <p>Inserts a customShareAction into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p>
				 * @param {sap.m.Button} oCustomShareAction <p>The customShareAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the customShareAction should be inserted at; for a negative value of <code>iIndex</code>, the customShareAction is inserted at position 0; for a value greater than the current size of the aggregation, the customShareAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertCustomShareAction(oCustomShareAction: sap.m.Button, iIndex: number): this;
				/**
				 * <p>Inserts a footerCustomAction into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p>
				 * @param {sap.m.Button} oFooterCustomAction <p>The footerCustomAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the footerCustomAction should be inserted at; for a negative value of <code>iIndex</code>, the footerCustomAction is inserted at position 0; for a value greater than the current size of the aggregation, the footerCustomAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertFooterCustomAction(oFooterCustomAction: sap.m.Button, iIndex: number): this;
				/**
				 * <p>Inserts a headerContent into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p>
				 * @param {sap.ui.core.Control} oHeaderContent <p>The headerContent to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the headerContent should be inserted at; for a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertHeaderContent(oHeaderContent: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Inserts a titleContent into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleContent <p>The titleContent to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the titleContent should be inserted at; for a negative value of <code>iIndex</code>, the titleContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleContent is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTitleContent(oTitleContent: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Inserts a titleCustomIconAction into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p>
				 * @param {sap.m.OverflowToolbarButton} oTitleCustomIconAction <p>The titleCustomIconAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the titleCustomIconAction should be inserted at; for a negative value of <code>iIndex</code>, the titleCustomIconAction is inserted at position 0; for a value greater than the current size of the aggregation, the titleCustomIconAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTitleCustomIconAction(oTitleCustomIconAction: sap.m.OverflowToolbarButton, iIndex: number): this;
				/**
				 * <p>Inserts a titleCustomTextAction into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p>
				 * @param {sap.m.Button} oTitleCustomTextAction <p>The titleCustomTextAction to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the titleCustomTextAction should be inserted at; for a negative value of <code>iIndex</code>, the titleCustomTextAction is inserted at position 0; for a value greater than the current size of the aggregation, the titleCustomTextAction is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTitleCustomTextAction(oTitleCustomTextAction: sap.m.Button, iIndex: number): this;
				/**
				 * <p>Inserts a titleExpandedContent into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleExpandedContent <p>The titleExpandedContent to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the titleExpandedContent should be inserted at; for a negative value of <code>iIndex</code>, the titleExpandedContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleExpandedContent is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTitleExpandedContent(oTitleExpandedContent: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Inserts a titleSnappedContent into the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p>
				 * @param {sap.ui.core.Control} oTitleSnappedContent <p>The titleSnappedContent to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the titleSnappedContent should be inserted at; for a negative value of <code>iIndex</code>, the titleSnappedContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleSnappedContent is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				insertTitleSnappedContent(oTitleSnappedContent: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.m.Button[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllCustomShareActions(): sap.m.Button[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.m.Button[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllFooterCustomActions(): sap.m.Button[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllHeaderContent(): sap.ui.core.Control[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTitleContent(): sap.ui.core.Control[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.m.OverflowToolbarButton[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTitleCustomIconActions(): sap.m.OverflowToolbarButton[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.m.Button[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTitleCustomTextActions(): sap.m.Button[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTitleExpandedContent(): sap.ui.core.Control[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
				removeAllTitleSnappedContent(): sap.ui.core.Control[];
				/**
				 * <p>Removes a customShareAction from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCustomShareActions">customShareActions</a>.</p>
				 * @param {number | string | sap.m.Button} vCustomShareAction <p>The customShareAction to remove or its index or id</p>
				 * @returns sap.m.Button|null <p>The removed customShareAction or <code>null</code></p>
				 */
				removeCustomShareAction(vCustomShareAction: number | string | sap.m.Button): sap.m.Button | null;
				/**
				 * <p>Removes a footerCustomAction from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterCustomActions">footerCustomActions</a>.</p>
				 * @param {number | string | sap.m.Button} vFooterCustomAction <p>The footerCustomAction to remove or its index or id</p>
				 * @returns sap.m.Button|null <p>The removed footerCustomAction or <code>null</code></p>
				 */
				removeFooterCustomAction(vFooterCustomAction: number | string | sap.m.Button): sap.m.Button | null;
				/**
				 * <p>Removes a headerContent from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderContent">headerContent</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vHeaderContent <p>The headerContent to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed headerContent or <code>null</code></p>
				 */
				removeHeaderContent(vHeaderContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Removes a titleContent from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleContent">titleContent</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vTitleContent <p>The titleContent to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed titleContent or <code>null</code></p>
				 */
				removeTitleContent(vTitleContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Removes a titleCustomIconAction from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomIconActions">titleCustomIconActions</a>.</p>
				 * @param {number | string | sap.m.OverflowToolbarButton} vTitleCustomIconAction <p>The titleCustomIconAction to remove or its index or id</p>
				 * @returns sap.m.OverflowToolbarButton|null <p>The removed titleCustomIconAction or <code>null</code></p>
				 */
				removeTitleCustomIconAction(vTitleCustomIconAction: number | string | sap.m.OverflowToolbarButton): sap.m.OverflowToolbarButton | null;
				/**
				 * <p>Removes a titleCustomTextAction from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleCustomTextActions">titleCustomTextActions</a>.</p>
				 * @param {number | string | sap.m.Button} vTitleCustomTextAction <p>The titleCustomTextAction to remove or its index or id</p>
				 * @returns sap.m.Button|null <p>The removed titleCustomTextAction or <code>null</code></p>
				 */
				removeTitleCustomTextAction(vTitleCustomTextAction: number | string | sap.m.Button): sap.m.Button | null;
				/**
				 * <p>Removes a titleExpandedContent from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedContent">titleExpandedContent</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vTitleExpandedContent <p>The titleExpandedContent to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed titleExpandedContent or <code>null</code></p>
				 */
				removeTitleExpandedContent(vTitleExpandedContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Removes a titleSnappedContent from the aggregation <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedContent">titleSnappedContent</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vTitleSnappedContent <p>The titleSnappedContent to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed titleSnappedContent or <code>null</code></p>
				 */
				removeTitleSnappedContent(vTitleSnappedContent: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getAddAction">addAction</a>.</p>
				 * @param {sap.f.semantic.AddAction} oAddAction <p>The addAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setAddAction(oAddAction: sap.f.semantic.AddAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCloseAction">closeAction</a>.</p>
				 * @param {sap.f.semantic.CloseAction} oCloseAction <p>The closeAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCloseAction(oCloseAction: sap.f.semantic.CloseAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getContent">content</a>.</p>
				 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setContent(oContent: sap.ui.core.Control): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getCopyAction">copyAction</a>.</p>
				 * @param {sap.f.semantic.CopyAction} oCopyAction <p>The copyAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setCopyAction(oCopyAction: sap.f.semantic.CopyAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDeleteAction">deleteAction</a>.</p>
				 * @param {sap.f.semantic.DeleteAction} oDeleteAction <p>The deleteAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDeleteAction(oDeleteAction: sap.f.semantic.DeleteAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDiscussInJamAction">discussInJamAction</a>.</p>
				 * @param {sap.f.semantic.DiscussInJamAction} oDiscussInJamAction <p>The discussInJamAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDiscussInJamAction(oDiscussInJamAction: sap.f.semantic.DiscussInJamAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getDraftIndicator">draftIndicator</a>.</p>
				 * @param {sap.m.DraftIndicator} oDraftIndicator <p>The draftIndicator to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setDraftIndicator(oDraftIndicator: sap.m.DraftIndicator): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getEditAction">editAction</a>.</p>
				 * @param {sap.f.semantic.EditAction} oEditAction <p>The editAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setEditAction(oEditAction: sap.f.semantic.EditAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getExitFullScreenAction">exitFullScreenAction</a>.</p>
				 * @param {sap.f.semantic.ExitFullScreenAction} oExitFullScreenAction <p>The exitFullScreenAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setExitFullScreenAction(oExitFullScreenAction: sap.f.semantic.ExitFullScreenAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFavoriteAction">favoriteAction</a>.</p>
				 * @param {sap.f.semantic.FavoriteAction} oFavoriteAction <p>The favoriteAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFavoriteAction(oFavoriteAction: sap.f.semantic.FavoriteAction): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFitContent">fitContent</a>.</p><p>Optimizes <code>SemanticPage</code> responsiveness on small screens and behavior when expanding/collapsing the <code>SemanticPageHeader</code>.</p><p><b>Note:</b> It is recommended to use this property when displaying content of adaptive controls that stretch to fill the available space. Such controls may be <a target="_self" href="api/sap.ui.table.Table">sap.ui.table.Table</a> and <a target="_self" href="api/sap.ui.table.AnalyticalTable">sap.ui.table.AnalyticalTable</a> depending on their settings.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bFitContent <p>New value for property <code>fitContent</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFitContent(bFitContent?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFlagAction">flagAction</a>.</p>
				 * @param {sap.f.semantic.FlagAction} oFlagAction <p>The flagAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFlagAction(oFlagAction: sap.f.semantic.FlagAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFooterMainAction">footerMainAction</a>.</p>
				 * @param {sap.f.semantic.FooterMainAction} oFooterMainAction <p>The footerMainAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFooterMainAction(oFooterMainAction: sap.f.semantic.FooterMainAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getFullScreenAction">fullScreenAction</a>.</p>
				 * @param {sap.f.semantic.FullScreenAction} oFullScreenAction <p>The fullScreenAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setFullScreenAction(oFullScreenAction: sap.f.semantic.FullScreenAction): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderExpanded">headerExpanded</a>.</p><p>Determines whether the header is expanded.</p><p>The header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.</p><p><b>Note:</b> Please be aware, that initially collapsed header state is not supported, so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bHeaderExpanded <p>New value for property <code>headerExpanded</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderExpanded(bHeaderExpanded?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getHeaderPinnable">headerPinnable</a>.</p><p>Determines whether the header is pinnable.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bHeaderPinnable <p>New value for property <code>headerPinnable</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setHeaderPinnable(bHeaderPinnable?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getLandmarkInfo">landmarkInfo</a>.</p>
				 * @param {sap.f.DynamicPageAccessibleLandmarkInfo} oLandmarkInfo <p>The landmarkInfo to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setLandmarkInfo(oLandmarkInfo: sap.f.DynamicPageAccessibleLandmarkInfo): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getMessagesIndicator">messagesIndicator</a>.</p>
				 * @param {sap.f.semantic.MessagesIndicator} oMessagesIndicator <p>The messagesIndicator to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setMessagesIndicator(oMessagesIndicator: sap.f.semantic.MessagesIndicator): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getNegativeAction">negativeAction</a>.</p>
				 * @param {sap.f.semantic.NegativeAction} oNegativeAction <p>The negativeAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setNegativeAction(oNegativeAction: sap.f.semantic.NegativeAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPositiveAction">positiveAction</a>.</p>
				 * @param {sap.f.semantic.PositiveAction} oPositiveAction <p>The positiveAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setPositiveAction(oPositiveAction: sap.f.semantic.PositiveAction): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPreserveHeaderStateOnScroll">preserveHeaderStateOnScroll</a>.</p><p>Preserves the current header state when scrolling.</p><p>For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.</p><p><b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the title and the header are with height larger than a given threshold.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bPreserveHeaderStateOnScroll <p>New value for property <code>preserveHeaderStateOnScroll</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setPreserveHeaderStateOnScroll(bPreserveHeaderStateOnScroll?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getPrintAction">printAction</a>.</p>
				 * @param {sap.f.semantic.PrintAction} oPrintAction <p>The printAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setPrintAction(oPrintAction: sap.f.semantic.PrintAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSaveAsTileAction">saveAsTileAction</a>.</p>
				 * @param {sap.m.Button} oSaveAsTileAction <p>The saveAsTileAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSaveAsTileAction(oSaveAsTileAction: sap.m.Button): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendEmailAction">sendEmailAction</a>.</p>
				 * @param {sap.f.semantic.SendEmailAction} oSendEmailAction <p>The sendEmailAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSendEmailAction(oSendEmailAction: sap.f.semantic.SendEmailAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getSendMessageAction">sendMessageAction</a>.</p>
				 * @param {sap.f.semantic.SendMessageAction} oSendMessageAction <p>The sendMessageAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setSendMessageAction(oSendMessageAction: sap.f.semantic.SendMessageAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getShareInJamAction">shareInJamAction</a>.</p>
				 * @param {sap.f.semantic.ShareInJamAction} oShareInJamAction <p>The shareInJamAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShareInJamAction(oShareInJamAction: sap.f.semantic.ShareInJamAction): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getShowFooter">showFooter</a>.</p><p>Determines whether the footer is visible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bShowFooter <p>New value for property <code>showFooter</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setShowFooter(bShowFooter?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleAreaShrinkRatio">titleAreaShrinkRatio</a>.</p><p>Assigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.</p><p>The value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.</p><p>For example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.</p><p>If all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.</p><p><Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"1:1.6:1.6"</code>.</p>
				 * @param {sap.f.DynamicPageTitleShrinkRatio} sTitleAreaShrinkRatio <p>New value for property <code>titleAreaShrinkRatio</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleAreaShrinkRatio(sTitleAreaShrinkRatio?: sap.f.DynamicPageTitleShrinkRatio): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleBreadcrumbs">titleBreadcrumbs</a>.</p>
				 * @param {sap.m.IBreadcrumbs} oTitleBreadcrumbs <p>The titleBreadcrumbs to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleBreadcrumbs(oTitleBreadcrumbs: sap.m.IBreadcrumbs): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleExpandedHeading">titleExpandedHeading</a>.</p>
				 * @param {sap.ui.core.Control} oTitleExpandedHeading <p>The titleExpandedHeading to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleExpandedHeading(oTitleExpandedHeading: sap.ui.core.Control): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleHeading">titleHeading</a>.</p>
				 * @param {sap.ui.core.Control} oTitleHeading <p>The titleHeading to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleHeading(oTitleHeading: sap.ui.core.Control): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleMainAction">titleMainAction</a>.</p>
				 * @param {sap.f.semantic.TitleMainAction} oTitleMainAction <p>The titleMainAction to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleMainAction(oTitleMainAction: sap.f.semantic.TitleMainAction): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedHeading">titleSnappedHeading</a>.</p>
				 * @param {sap.ui.core.Control} oTitleSnappedHeading <p>The titleSnappedHeading to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleSnappedHeading(oTitleSnappedHeading: sap.ui.core.Control): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getTitleSnappedOnMobile">titleSnappedOnMobile</a>.</p>
				 * @param {sap.m.Title} oTitleSnappedOnMobile <p>The titleSnappedOnMobile to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setTitleSnappedOnMobile(oTitleSnappedOnMobile: sap.m.Title): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.f.semantic.SemanticPage#methods/getToggleHeaderOnTitleClick">toggleHeaderOnTitleClick</a>.</p><p>Determines whether the user can switch between the expanded/collapsed states of the header by clicking on the title.</p><p>If set to <code>false</code>, the title is not clickable and the application must provide other means for expanding/collapsing the header, if necessary.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bToggleHeaderOnTitleClick <p>New value for property <code>toggleHeaderOnTitleClick</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
				setToggleHeaderOnTitleClick(bToggleHeaderOnTitleClick?: boolean): this;
			}
			/**
			 * <p>A base class for the <a target="_self" href="api/sap.f.semantic.FavoriteAction">sap.f.semantic.FavoriteAction</a> and <a target="_self" href="api/sap.f.semantic.FlagAction">sap.f.semantic.FlagAction</a>.</p>
			 */
			export abstract class SemanticToggleButton extends sap.m.semantic.SemanticToggleButton {
				/**
				 * <p>Constructor for a new <code>SemanticToggleButton</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.m.semantic.SemanticToggleButton#constructor">sap.m.semantic.SemanticToggleButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>sendEmailAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in the share menu within its title.</p>
			 */
			export class SendEmailAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>SendEmailAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>sendMessageAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in the share menu within its title.</p>
			 */
			export class SendMessageAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>SendMessageAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>shareInJamAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in the share menu within its title.</p>
			 */
			export class ShareInJamAction extends sap.f.semantic.SemanticButton {
				/**
				 * <p>Constructor for a new <code>ShareInJamAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.SemanticButton#constructor">sap.f.semantic.SemanticButton</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
			/**
			 * <p>A semantic-specific button, eligible for the <code>titleMainAction</code> aggregation of the <a target="_self" href="api/sap.f.semantic.SemanticPage">sap.f.semantic.SemanticPage</a> to be placed in its title.</p>
			 */
			export class TitleMainAction extends sap.f.semantic.MainAction {
				/**
				 * <p>Constructor for a new <code>TitleMainAction</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a target="_self" href="api/sap.f.semantic.MainAction#constructor">sap.f.semantic.MainAction</a> can be used.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Optional initial settings for the new control: a map/JSON-object with initial property values, event listeners etc. for the new object</p>
				 */
				constructor(sId?: string, mSettings?: any);
			}
		}
	}
}
