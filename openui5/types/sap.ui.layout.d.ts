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
         * <p>SAPUI5 library with layout controls.</p>
         */
        namespace layout {
            /**
             * <p>Available Background Design.</p>
             */
            export enum BackgroundDesign {
                /**
                 * <p>A solid background color dependent on the theme.</p>
                 */
                Solid = "Solid",
                /**
                 * <p>A translucent background depending on the opacity value of the theme.</p>
                 */
                Translucent = "Translucent",
                /**
                 * <p>Transparent background.</p>
                 */
                Transparent = "Transparent",
            }
            /**
             * <p>A string type that is used inside the BlockLayout to set predefined background color to the cells inside the control.</p>
             */
            export enum BlockBackgroundType {
                /**
                 * <p>Background with pre-defined accent colors</p>
                 */
                Accent = "Accent",
                /**
                 * <p>For applications that want to make use of e.g. charts in the Blocks, this layout type has spacings around the Blocks</p>
                 */
                Dashboard = "Dashboard",
                /**
                 * <p>Background is transparent</p>
                 */
                Default = "Default",
                /**
                 * <p>Background is with predefined light colors</p>
                 */
                Light = "Light",
                /**
                 * <p>Background with bright and dark background colors<span class="sapUiDeprecated"><br>Deprecated as of version 1.50</span></p>
                 */
                Mixed = "Mixed",
            }
            /**
             * <p>The BlockLayout is used to display several objects in a section-based manner. </p><h3>Overview</h3><p> The BlockLayout uses horizontal and vertical subdivisions, and full-width banners to display a set of elements. By placing pictorial and textual elements side-by-side in different blocks, you can establish a visual connection between blocks and between similar elements. </p><h3>Structure</h3><p> The BlockLayout contains BlockLayout cells. Every cell consists of a title and content. The title can be text or a link.</p><p>The BlockLayout comes in five predefined types for background colors: <ul> <li>Layout only (default) - a layout scheme and no background colors</li> <li>Bright - a layout scheme with bright colors</li> <li>Accent - a layout scheme with four pre-defined color sets</li> <li>Dashboard - a layout scheme with additional borders and no background colors</li> <li>Mixed - a layout scheme with a mix of light and dark colors</li> </ul> Background colors are attached directly to the blocks of the layout.</p><p>Special full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.</p><p><b>Note:</b> With version 1.48 colors can be set for each individual <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell" data-sap-ui-target="BlockLayoutCell">cell</a>. There are 10 pre-defined color sets, each with 4 different shades. The main colors of the sets can be changed in Theme Designer. To change the background of a particular cell, set <code>backgroundColorSet</code> (main color) and <code>backgroundColorShade</code> (shade).</p><p><b>Note:</b> Usage of disabled, emphasized or subtle links as titles is not recommended. Dark background designs, for example Accent, are not fully supported with regards to Аccessibility when used with links as titles.</p><h3>Usage</h3><h4>When to use</h4><p> <ul> <li>You want to create a catalogue-like page with sections of blocks.</li> <li>The BlockLayout is intended for developing administrative tools and applications.</li> </ul> </p><h4>When not to use</h4><p> <ul> <li>You want to display properties or features of one content item. Use a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.uxap.ObjectPageLayout" data-sap-ui-target="ObjectPageLayout">object page</a> or <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.f.DynamicPage" data-sap-ui-target="DynamicPage">dynamic page</a> instead.</li> </ul> </p><h3>Responsive Behavior</h3><p> <ul> <li>The breakpoints of the block layout react to the width of the control itself and not to the actual screen size.</li> <li> On small screens all blocks will wrap to a single scrollable column</li> </ul></p>
             */
            export class BlockLayout extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new BlockLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.layout.BlockLayoutRow} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.BlockLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.layout.BlockLayoutRow): sap.ui.layout.BlockLayout;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.BlockLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.BlockLayout;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getBackground" data-sap-ui-target="getBackground">background</a>.</p><p>Determines the background used for the Layout</p><p>Default value is <code>Default</code>.</p>
                 * @returns sap.ui.layout.BlockBackgroundType <p>Value of property <code>background</code></p>
                 */
                getBackground(): sap.ui.layout.BlockBackgroundType;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The Rows to be included in the content of the control</p>
                 * @returns sap.ui.layout.BlockLayoutRow[] 
                 */
                getContent(): sap.ui.layout.BlockLayoutRow[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getKeepFontSize" data-sap-ui-target="getKeepFontSize">keepFontSize</a>.</p><p>Keeps the font-size of the contents as is, independent from the screen size.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>keepFontSize</code></p>
                 */
                getKeepFontSize(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.layout.BlockLayoutRow</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.layout.BlockLayoutRow} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.layout.BlockLayoutRow): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.layout.BlockLayoutRow} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.BlockLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.layout.BlockLayoutRow, iIndex: number): sap.ui.layout.BlockLayout;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.layout.BlockLayoutRow[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.layout.BlockLayoutRow[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.layout.BlockLayoutRow} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.layout.BlockLayoutRow): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Changes background type</p>
                 * @param {string} sNewBackground <p>Background's style of type sap.ui.layout.BlockBackgroundType</p>
                 * @returns sap.ui.layout.BlockLayout <p>BlockLayout instance. Allows method chaining</p>
                 */
                setBackground(sNewBackground: string): sap.ui.layout.BlockLayout;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayout/methods/getKeepFontSize" data-sap-ui-target="getKeepFontSize">keepFontSize</a>.</p><p>Keeps the font-size of the contents as is, independent from the screen size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bKeepFontSize <p>New value for property <code>keepFontSize</code></p>
                 * @returns sap.ui.layout.BlockLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setKeepFontSize(bKeepFontSize: boolean): sap.ui.layout.BlockLayout;
            }
            /**
             * <p>The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls. The BlockLayoutCell should be used only as aggregation of the BlockLayoutRow.</p>
             */
            export class BlockLayoutCell extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new BlockLayoutCell.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Destroys the titleLink in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleLink" data-sap-ui-target="getTitleLink">titleLink</a>.</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyTitleLink(): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getBackgroundColorSet" data-sap-ui-target="getBackgroundColorSet">backgroundColorSet</a>.</p><p>The Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.</p>
                 * @returns sap.ui.layout.BlockLayoutCellColorSet <p>Value of property <code>backgroundColorSet</code></p>
                 */
                getBackgroundColorSet(): sap.ui.layout.BlockLayoutCellColorSet;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getBackgroundColorShade" data-sap-ui-target="getBackgroundColorShade">backgroundColorShade</a>.</p><p>The index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.</p>
                 * @returns sap.ui.layout.BlockLayoutCellColorShade <p>Value of property <code>backgroundColorShade</code></p>
                 */
                getBackgroundColorShade(): sap.ui.layout.BlockLayoutCellColorShade;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content to be included inside the cell</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Defines the title of the cell. <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.</p>
                 * @returns string <p>Value of property <code>title</code></p>
                 */
                getTitle(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleAlignment" data-sap-ui-target="getTitleAlignment">titleAlignment</a>.</p><p>Defines the alignment of the cell title</p><p>Default value is <code>Begin</code>.</p>
                 * @returns sap.ui.core.HorizontalAlign <p>Value of property <code>titleAlignment</code></p>
                 */
                getTitleAlignment(): sap.ui.core.HorizontalAlign;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleLevel" data-sap-ui-target="getTitleLevel">titleLevel</a>.</p><p>Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.</p><p>Default value is <code>Auto</code>.</p>
                 * @returns sap.ui.core.TitleLevel <p>Value of property <code>titleLevel</code></p>
                 */
                getTitleLevel(): sap.ui.core.TitleLevel;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleLink" data-sap-ui-target="getTitleLink">titleLink</a>.</p><p>The link that will replace the title of the cell. <b>Note:</b> The only possible value is the <code>sap.m.Link</code> control.</p>
                 * @returns sap.ui.core.Control 
                 */
                getTitleLink(): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>width</code></p>
                 */
                getWidth(): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getBackgroundColorSet" data-sap-ui-target="getBackgroundColorSet">backgroundColorSet</a>.</p><p>The Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.BlockLayoutCellColorSet} sBackgroundColorSet <p>New value for property <code>backgroundColorSet</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setBackgroundColorSet(sBackgroundColorSet: sap.ui.layout.BlockLayoutCellColorSet): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getBackgroundColorShade" data-sap-ui-target="getBackgroundColorShade">backgroundColorShade</a>.</p><p>The index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.BlockLayoutCellColorShade} sBackgroundColorShade <p>New value for property <code>backgroundColorShade</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setBackgroundColorShade(sBackgroundColorShade: sap.ui.layout.BlockLayoutCellColorShade): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Defines the title of the cell. <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sTitle <p>New value for property <code>title</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitle(sTitle: string): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleAlignment" data-sap-ui-target="getTitleAlignment">titleAlignment</a>.</p><p>Defines the alignment of the cell title</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Begin</code>.</p>
                 * @param {sap.ui.core.HorizontalAlign} sTitleAlignment <p>New value for property <code>titleAlignment</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitleAlignment(sTitleAlignment: sap.ui.core.HorizontalAlign): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleLevel" data-sap-ui-target="getTitleLevel">titleLevel</a>.</p><p>Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Auto</code>.</p>
                 * @param {sap.ui.core.TitleLevel} sTitleLevel <p>New value for property <code>titleLevel</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getTitleLink" data-sap-ui-target="getTitleLink">titleLink</a>.</p>
                 * @param {sap.ui.core.Control} oTitleLink <p>The titleLink to set</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitleLink(oTitleLink: sap.ui.core.Control): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCell/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(iWidth: number): sap.ui.layout.BlockLayoutCell;
            }
            /**
             * <p>A string type that is used inside the BlockLayoutCell to set a predefined set of colors for the cells.</p>
             */
            export enum BlockLayoutCellColorSet {
                /**
                 * <p>Color Set 1</p>
                 */
                ColorSet1 = "ColorSet1",
                /**
                 * <p>Color Set 10</p>
                 */
                ColorSet10 = "ColorSet10",
                /**
                 * <p>Color Set 11</p>
                 */
                ColorSet11 = "ColorSet11",
                /**
                 * <p>Color Set 2</p>
                 */
                ColorSet2 = "ColorSet2",
                /**
                 * <p>Color Set 3</p>
                 */
                ColorSet3 = "ColorSet3",
                /**
                 * <p>Color Set 4</p>
                 */
                ColorSet4 = "ColorSet4",
                /**
                 * <p>Color Set 5</p>
                 */
                ColorSet5 = "ColorSet5",
                /**
                 * <p>Color Set 6</p>
                 */
                ColorSet6 = "ColorSet6",
                /**
                 * <p>Color Set 7</p>
                 */
                ColorSet7 = "ColorSet7",
                /**
                 * <p>Color Set 8</p>
                 */
                ColorSet8 = "ColorSet8",
                /**
                 * <p>Color Set 9</p>
                 */
                ColorSet9 = "ColorSet9",
            }
            /**
             * <p>A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades only.</p>
             */
            export enum BlockLayoutCellColorShade {
                /**
                 * <p>Shade A</p>
                 */
                ShadeA = "ShadeA",
                /**
                 * <p>Shade B</p>
                 */
                ShadeB = "ShadeB",
                /**
                 * <p>Shade C</p>
                 */
                ShadeC = "ShadeC",
                /**
                 * <p>Shade D</p>
                 */
                ShadeD = "ShadeD",
            }
            /**
             * <p>Holds layout data for the BlockLayoutCells contents.</p>
             */
            export class BlockLayoutCellData extends sap.ui.core.LayoutData {
                /**
                 * <p>Constructor for a new BlockLayoutCellData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getLSize" data-sap-ui-target="getLSize">lSize</a>.</p><p>Sets the width of the cell for L size of the BlockLayout.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>lSize</code></p>
                 */
                getLSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getMSize" data-sap-ui-target="getMSize">mSize</a>.</p><p>Sets the width of the cell for M size of the BlockLayout.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>mSize</code></p>
                 */
                getMSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getSSize" data-sap-ui-target="getSSize">sSize</a>.</p><p>Sets the width of the cell for S size of the BlockLayout.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>sSize</code></p>
                 */
                getSSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getXlSize" data-sap-ui-target="getXlSize">xlSize</a>.</p><p>Sets the width of the cell for XL size of the BlockLayout.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>xlSize</code></p>
                 */
                getXlSize(): number;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getLSize" data-sap-ui-target="getLSize">lSize</a>.</p><p>Sets the width of the cell for L size of the BlockLayout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iLSize <p>New value for property <code>lSize</code></p>
                 * @returns sap.ui.layout.BlockLayoutCellData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLSize(iLSize: number): sap.ui.layout.BlockLayoutCellData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getMSize" data-sap-ui-target="getMSize">mSize</a>.</p><p>Sets the width of the cell for M size of the BlockLayout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iMSize <p>New value for property <code>mSize</code></p>
                 * @returns sap.ui.layout.BlockLayoutCellData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMSize(iMSize: number): sap.ui.layout.BlockLayoutCellData;
                /**
                 * <p>Sets width of the cell to all sizes if the width is specified.</p>
                 * @param {undefined} iValue 
                 * @returns sap.ui.layout.BlockLayoutCellData 
                 */
                setSize(iValue: undefined): sap.ui.layout.BlockLayoutCellData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getSSize" data-sap-ui-target="getSSize">sSize</a>.</p><p>Sets the width of the cell for S size of the BlockLayout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iSSize <p>New value for property <code>sSize</code></p>
                 * @returns sap.ui.layout.BlockLayoutCellData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSSize(iSSize: number): sap.ui.layout.BlockLayoutCellData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutCellData/methods/getXlSize" data-sap-ui-target="getXlSize">xlSize</a>.</p><p>Sets the width of the cell for XL size of the BlockLayout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iXlSize <p>New value for property <code>xlSize</code></p>
                 * @returns sap.ui.layout.BlockLayoutCellData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setXlSize(iXlSize: number): sap.ui.layout.BlockLayoutCellData;
            }
            /**
             * <p>The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout cells. The BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.</p>
             */
            export class BlockLayoutRow extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new BlockLayoutRow.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some accentCell into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getAccentCells" data-sap-ui-target="getAccentCells">accentCells</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.layout.BlockLayoutCell} vAccentCell <p>The accentCells to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAccentCell(vAccentCell: sap.ui.core.ID | sap.ui.layout.BlockLayoutCell): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.layout.BlockLayoutCell} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.layout.BlockLayoutCell): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getAccentCells" data-sap-ui-target="getAccentCells">accentCells</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAccentCells(): sap.ui.core.ID[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content cells to be included in the row.</p>
                 * @returns sap.ui.layout.BlockLayoutCell[] 
                 */
                getContent(): sap.ui.layout.BlockLayoutCell[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getRowColorSet" data-sap-ui-target="getRowColorSet">rowColorSet</a>.</p><p>Defines background type for that row. There might be several rows with the same type</p>
                 * @returns sap.ui.layout.BlockRowColorSets <p>Value of property <code>rowColorSet</code></p>
                 */
                getRowColorSet(): sap.ui.layout.BlockRowColorSets;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getScrollable" data-sap-ui-target="getScrollable">scrollable</a>.</p><p>Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>scrollable</code></p>
                 */
                getScrollable(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.layout.BlockLayoutCell</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.layout.BlockLayoutCell} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.layout.BlockLayoutCell): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.layout.BlockLayoutCell} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.layout.BlockLayoutCell, iIndex: number): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Removes an accentCell from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getAccentCells" data-sap-ui-target="getAccentCells">accentCells</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.layout.BlockLayoutCell} vAccentCell <p>The accentCell to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed accentCell or <code>null</code></p>
                 */
                removeAccentCell(vAccentCell: number | sap.ui.core.ID | sap.ui.layout.BlockLayoutCell): sap.ui.core.ID;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getAccentCells" data-sap-ui-target="getAccentCells">accentCells</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAccentCells(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.layout.BlockLayoutCell[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.layout.BlockLayoutCell[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.layout.BlockLayoutCell} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.layout.BlockLayoutCell <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.layout.BlockLayoutCell): sap.ui.layout.BlockLayoutCell;
                /**
                 * <p>Changes dynamically row color set Note: this might invalidate cells inside and also change color sets of the other BlockLayoutRow-s below it.</p>
                 * @param {sap.ui.layout.BlockRowColorSets} sType 
                 * @returns sap.ui.layout.BlockLayoutRow 
                 */
                setRowColorSet(sType: sap.ui.layout.BlockRowColorSets): sap.ui.layout.BlockLayoutRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.BlockLayoutRow/methods/getScrollable" data-sap-ui-target="getScrollable">scrollable</a>.</p><p>Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bScrollable <p>New value for property <code>scrollable</code></p>
                 * @returns sap.ui.layout.BlockLayoutRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setScrollable(bScrollable: boolean): sap.ui.layout.BlockLayoutRow;
            }
            /**
             * <p>A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside the control. Color sets depend on sap.ui.layout.BlockBackgroundType</p>
             */
            export enum BlockRowColorSets {
                /**
                 * <p>sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 1 sap.ui.layout.BlockBackgroundType.Dashboard: N/A</p>
                 */
                ColorSet1 = "ColorSet1",
                /**
                 * <p>sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 2 sap.ui.layout.BlockBackgroundType.Dashboard: N/A</p>
                 */
                ColorSet2 = "ColorSet2",
                /**
                 * <p>sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 3 sap.ui.layout.BlockBackgroundType.Dashboard: N/A</p>
                 */
                ColorSet3 = "ColorSet3",
                /**
                 * <p>sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 4 sap.ui.layout.BlockBackgroundType.Dashboard: N/A</p>
                 */
                ColorSet4 = "ColorSet4",
            }
            /**
             * <p>Layout control that allows additional (side) content to be displayed dynamically.</p><h3>Overview</h3><p><code>DynamicSideContent</code> is a layout control that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.</p><h3>Usage</h3><p><i>When to use?</i></p><p>Use this control if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.</p><p><i>When not to use?</i></p><p>Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.</p><h3>Responsive Behavior</h3><p>Screen width > 1440 px</p><p><ul><li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).</li> <li>If the application defines a trigger, the side content can be hidden.</li></ul></p><p>Screen width <= 1440 px and > 720px</p><p><ul><li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.</li></ul></p><p>Screen width <= 720 px (for example on a mobile device)</p><p><ul><li>In this case, the side content automatically disappears from the screen (unless specified to stay under the content) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.</li></ul></p><p>A special case, allows for comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.</p>
             */
            export class DynamicSideContent extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>DynamicSideContent</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds a control to the main content area. Only the main content part in the aggregation is re-rendered.</p>
                 * @param {any} oControl <p>Object to be added in the aggregation</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                addMainContent(oControl: any): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Adds a control to the side content area. Only the side content part in the aggregation is re-rendered.</p>
                 * @param {any} oControl <p>Object to be added in the aggregation</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                addSideContent(oControl: any): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/events/breakpointChanged" data-sap-ui-target="sap.ui.layout.DynamicSideContent/events/breakpointChanged">breakpointChanged</a> event of this <code>sap.ui.layout.DynamicSideContent</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.DynamicSideContent</code> itself.</p><p>Fires when the current breakpoint has been changed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.layout.DynamicSideContent</code> itself</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachBreakpointChanged(oData: any, fnFunction: Function, oListener?: any): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Destroys all the mainContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>.</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyMainContent(): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Destroys all the sideContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySideContent(): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/events/breakpointChanged" data-sap-ui-target="sap.ui.layout.DynamicSideContent/events/breakpointChanged">breakpointChanged</a> event of this <code>sap.ui.layout.DynamicSideContent</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachBreakpointChanged(fnFunction: Function, oListener: any): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/events/breakpointChanged" data-sap-ui-target="sap.ui.layout.DynamicSideContent/events/breakpointChanged">breakpointChanged</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireBreakpointChanged(mParameters?: any): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getContainerQuery" data-sap-ui-target="getContainerQuery">containerQuery</a>.</p><p>If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>containerQuery</code></p>
                 */
                getContainerQuery(): boolean;
                /**
                 * <p>Returns the breakpoint for the current state of the control.</p>
                 * @returns String <p>currentBreakpoint</p>
                 */
                getCurrentBreakpoint(): String;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getEqualSplit" data-sap-ui-target="getEqualSplit">equalSplit</a>.</p><p>Defines whether the control is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>equalSplit</code></p>
                 */
                getEqualSplit(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>.</p><p>Main content controls.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getMainContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets the value of showMainContent property.</p>
                 * @returns boolean <p>Side content visibility state</p>
                 */
                getShowMainContent(): boolean;
                /**
                 * <p>Gets the value of showSideContent property.</p>
                 * @returns boolean <p>Side content visibility state</p>
                 */
                getShowSideContent(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p><p>Side content controls.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getSideContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContentFallDown" data-sap-ui-target="getSideContentFallDown">sideContentFallDown</a>.</p><p>Determines on which breakpoints the side content falls down below the main content.</p><p>Default value is <code>OnMinimumWidth</code>.</p>
                 * @returns sap.ui.layout.SideContentFallDown <p>Value of property <code>sideContentFallDown</code></p>
                 */
                getSideContentFallDown(): sap.ui.layout.SideContentFallDown;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContentPosition" data-sap-ui-target="getSideContentPosition">sideContentPosition</a>.</p><p>Determines whether the side content is on the left or on the right side of the main content.</p><p>Default value is <code>End</code>.</p>
                 * @returns sap.ui.layout.SideContentPosition <p>Value of property <code>sideContentPosition</code></p>
                 */
                getSideContentPosition(): sap.ui.layout.SideContentPosition;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContentVisibility" data-sap-ui-target="getSideContentVisibility">sideContentVisibility</a>.</p><p>Determines on which breakpoints the side content is visible.</p><p>Default value is <code>ShowAboveS</code>.</p>
                 * @returns sap.ui.layout.SideContentVisibility <p>Value of property <code>sideContentVisibility</code></p>
                 */
                getSideContentVisibility(): sap.ui.layout.SideContentVisibility;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oMainContent <p>The mainContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfMainContent(oMainContent: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oSideContent <p>The sideContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSideContent(oSideContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a mainContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>.</p>
                 * @param {sap.ui.core.Control} oMainContent <p>The mainContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the mainContent should be inserted at; for a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent is inserted at the last position</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertMainContent(oMainContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Inserts a sideContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p>
                 * @param {sap.ui.core.Control} oSideContent <p>The sideContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the sideContent should be inserted at; for a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value greater than the current size of the aggregation, the sideContent is inserted at the last position</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSideContent(oSideContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllMainContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSideContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a mainContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getMainContent" data-sap-ui-target="getMainContent">mainContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vMainContent <p>The mainContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed mainContent or <code>null</code></p>
                 */
                removeMainContent(vMainContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a sideContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContent" data-sap-ui-target="getSideContent">sideContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vSideContent <p>The sideContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed sideContent or <code>null</code></p>
                 */
                removeSideContent(vSideContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getContainerQuery" data-sap-ui-target="getContainerQuery">containerQuery</a>.</p><p>If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bContainerQuery <p>New value for property <code>containerQuery</code></p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setContainerQuery(bContainerQuery: boolean): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets or unsets the page in equalSplit mode.</p>
                 * @param {boolean} bState <p>Determines if the page is set to equalSplit mode</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                setEqualSplit(bState?: boolean): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets the showMainContent property.</p>
                 * @param {boolean} bVisible <p>Determines if the main content part is visible</p>
                 * @param {boolean} bSuppressVisualUpdate <p>Determines if the visual state is updated</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                setShowMainContent(bVisible: boolean, bSuppressVisualUpdate: boolean): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets the showSideContent property.</p>
                 * @param {boolean} bVisible <p>Determines if the side content part is visible</p>
                 * @param {boolean} bSuppressVisualUpdate <p>Determines if the visual state is updated</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                setShowSideContent(bVisible: boolean, bSuppressVisualUpdate: boolean): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContentFallDown" data-sap-ui-target="getSideContentFallDown">sideContentFallDown</a>.</p><p>Determines on which breakpoints the side content falls down below the main content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>OnMinimumWidth</code>.</p>
                 * @param {sap.ui.layout.SideContentFallDown} sSideContentFallDown <p>New value for property <code>sideContentFallDown</code></p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSideContentFallDown(sSideContentFallDown: sap.ui.layout.SideContentFallDown): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.DynamicSideContent/methods/getSideContentPosition" data-sap-ui-target="getSideContentPosition">sideContentPosition</a>.</p><p>Determines whether the side content is on the left or on the right side of the main content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>End</code>.</p>
                 * @param {sap.ui.layout.SideContentPosition} sSideContentPosition <p>New value for property <code>sideContentPosition</code></p>
                 * @returns sap.ui.layout.DynamicSideContent <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSideContentPosition(sSideContentPosition: sap.ui.layout.SideContentPosition): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Sets the sideContentVisibility property.</p>
                 * @param {sap.ui.layout.SideContentVisibility} sVisibility <p>Determines on which breakpoints the side content is visible.</p>
                 * @param {boolean} bSuppressVisualUpdate <p>Determines if the visual state is updated</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                setSideContentVisibility(sVisibility: sap.ui.layout.SideContentVisibility, bSuppressVisualUpdate: boolean): sap.ui.layout.DynamicSideContent;
                /**
                 * <p>Used for the toggle button functionality. When the control is on a phone screen size only, one control area is visible. This helper method is used to implement a button/switch for changing between the main and side content areas. Only works if the current breakpoint is "S".</p>
                 * @returns sap.ui.layout.DynamicSideContent <p>this pointer for chaining</p>
                 */
                toggle(): sap.ui.layout.DynamicSideContent;
            }
            /**
             * <p>A layout container with a fixed and a flexible part. </p><h3>Overview</h3><p> The FixFlex control builds the container for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container. </p><h4>Guidelines:</h4><p> <ul> <li>The fix container can hold any number of controls, while the flexible container can hold only one</li> <li>In order for the FixFlex to stretch properly, the parent element, in which the control is placed, needs to have a specified height or needs to have an absolute position.</li> <li>Avoid nesting FixFlex in other flexbox-based layout controls (<a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex" data-sap-ui-target="FixFlex">FixFlex</a>, <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.FlexBox" data-sap-ui-target="FlexBox">FlexBox</a>, Hbox, Vbox). Otherwise, contents may be not accessible or multiple scrollbars can appear.</li> </ul> </p><h3>Structure</h3><p> The behavior of the FixFlex is controlled by the following properties: <ul> <li><code>fixContentSize</code> - The width/height of the fix part of the control</li> <li><code>fixFirst</code> - The ordering of the fix and flex part</li> <li><code>minFlexSize</code> - Scrolling inside the flex part, if its contents are large</li> <li><code>vertical</code> - Alignment of the FixFlex control</li> </ul> </p><h3>Responsive Behavior</h3><p> <ul> <li>If the child control of the flex or the fix container has width/height bigger than the container itself, the child control will be cropped in the view.</li> <li>If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the <code>vertical</code> property.</li> </ul></p>
             */
            export class FixFlex extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new FixFlex.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some fixContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p>
                 * @param {sap.ui.core.Control} oFixContent <p>The fixContent to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addFixContent(oFixContent: sap.ui.core.Control): sap.ui.layout.FixFlex;
                /**
                 * <p>Destroys all the fixContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyFixContent(): sap.ui.layout.FixFlex;
                /**
                 * <p>Destroys the flexContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFlexContent" data-sap-ui-target="getFlexContent">flexContent</a>.</p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyFlexContent(): sap.ui.layout.FixFlex;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p><p>Controls in the fixed part of the layout.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getFixContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContentSize" data-sap-ui-target="getFixContentSize">fixContentSize</a>.</p><p>Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.</p><p>Default value is <code>auto</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>fixContentSize</code></p>
                 */
                getFixContentSize(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixFirst" data-sap-ui-target="getFixFirst">fixFirst</a>.</p><p>Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>fixFirst</code></p>
                 */
                getFixFirst(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFlexContent" data-sap-ui-target="getFlexContent">flexContent</a>.</p><p>Control in the stretching part of the layout.</p>
                 * @returns sap.ui.core.Control 
                 */
                getFlexContent(): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getMinFlexSize" data-sap-ui-target="getMinFlexSize">minFlexSize</a>.</p><p>Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>minFlexSize</code></p>
                 */
                getMinFlexSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getVertical" data-sap-ui-target="getVertical">vertical</a>.</p><p>Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>vertical</code></p>
                 */
                getVertical(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oFixContent <p>The fixContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfFixContent(oFixContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a fixContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p>
                 * @param {sap.ui.core.Control} oFixContent <p>The fixContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the fixContent should be inserted at; for a negative value of <code>iIndex</code>, the fixContent is inserted at position 0; for a value greater than the current size of the aggregation, the fixContent is inserted at the last position</p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertFixContent(oFixContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.FixFlex;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllFixContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a fixContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContent" data-sap-ui-target="getFixContent">fixContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vFixContent <p>The fixContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed fixContent or <code>null</code></p>
                 */
                removeFixContent(vFixContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixContentSize" data-sap-ui-target="getFixContentSize">fixContentSize</a>.</p><p>Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                 * @param {sap.ui.core.CSSSize} sFixContentSize <p>New value for property <code>fixContentSize</code></p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFixContentSize(sFixContentSize: sap.ui.core.CSSSize): sap.ui.layout.FixFlex;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFixFirst" data-sap-ui-target="getFixFirst">fixFirst</a>.</p><p>Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bFixFirst <p>New value for property <code>fixFirst</code></p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFixFirst(bFixFirst: boolean): sap.ui.layout.FixFlex;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getFlexContent" data-sap-ui-target="getFlexContent">flexContent</a>.</p>
                 * @param {sap.ui.core.Control} oFlexContent <p>The flexContent to set</p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFlexContent(oFlexContent: sap.ui.core.Control): sap.ui.layout.FixFlex;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getMinFlexSize" data-sap-ui-target="getMinFlexSize">minFlexSize</a>.</p><p>Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMinFlexSize <p>New value for property <code>minFlexSize</code></p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinFlexSize(iMinFlexSize: number): sap.ui.layout.FixFlex;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.FixFlex/methods/getVertical" data-sap-ui-target="getVertical">vertical</a>.</p><p>Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVertical <p>New value for property <code>vertical</code></p>
                 * @returns sap.ui.layout.FixFlex <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVertical(bVertical: boolean): sap.ui.layout.FixFlex;
            }
            /**
             * <p>A layout control which positions its child controls in a 12 column flow layout.</p><p>The <code>Grid</code> control's children can be specified to take on a variable amount of columns depending on available screen size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-, large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile.</p><p>The <code>Grid</code> control's width can be percentage- or pixel-based and the spacing between its columns can be set to various predefined values.</p><p><b>Note:</b> The visibility of the child control does not affect the horizontal space it occupies. This means that even if the control is not visible, its horizontal space will still exist, even if it is empty.</p>
             */
            export class Grid extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>Grid</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.layout.Grid;
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.layout.Grid;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.Grid;
                /**
                 * <p>Returns the <code>Grid</code> accessibility information.</p>
                 * @returns any <p>The <code>Grid</code> accessibility information</p>
                 */
                protected getAccessibilityInfo(): any;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContainerQuery" data-sap-ui-target="getContainerQuery">containerQuery</a>.</p><p>If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the container surrounding the <code>Grid</code> instead of the device screen size (media Query).</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>containerQuery</code></p>
                 */
                getContainerQuery(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Controls that are placed into Grid layout.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getDefaultIndent" data-sap-ui-target="getDefaultIndent">defaultIndent</a>.</p><p>Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>Default value is <code>XL0 L0 M0 S0</code>.</p>
                 * @returns sap.ui.layout.GridIndent <p>Value of property <code>defaultIndent</code></p>
                 */
                getDefaultIndent(): sap.ui.layout.GridIndent;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getDefaultSpan" data-sap-ui-target="getDefaultSpan">defaultSpan</a>.</p><p>Optional. A string type that represents the span values of the <code>Grid</code> for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>Default value is <code>XL3 L3 M6 S12</code>.</p>
                 * @returns sap.ui.layout.GridSpan <p>Value of property <code>defaultSpan</code></p>
                 */
                getDefaultSpan(): sap.ui.layout.GridSpan;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getHSpacing" data-sap-ui-target="getHSpacing">hSpacing</a>.</p><p>Optional. Defines the horizontal spacing between the content in the <code>Grid</code>. In rem, allowed values are 0, 0.5 , 1 or 2.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>hSpacing</code></p>
                 */
                getHSpacing(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getPosition" data-sap-ui-target="getPosition">position</a>.</p><p>Optional. Defines the position of the <code>Grid</code> in the window or surrounding container.</p><p>Default value is <code>Left</code>.</p>
                 * @returns sap.ui.layout.GridPosition <p>Value of property <code>position</code></p>
                 */
                getPosition(): sap.ui.layout.GridPosition;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getVSpacing" data-sap-ui-target="getVSpacing">vSpacing</a>.</p><p>Optional. Defines the vertical spacing between the rows in the <code>Grid</code>. In rem, allowed values are 0, 0.5, 1 and 2.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>vSpacing</code></p>
                 */
                getVSpacing(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Optional. Defines the width of the <code>Grid</code>. If not specified, then 100%.</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.Grid;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getContainerQuery" data-sap-ui-target="getContainerQuery">containerQuery</a>.</p><p>If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the container surrounding the <code>Grid</code> instead of the device screen size (media Query).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bContainerQuery <p>New value for property <code>containerQuery</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setContainerQuery(bContainerQuery: boolean): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getDefaultIndent" data-sap-ui-target="getDefaultIndent">defaultIndent</a>.</p><p>Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>XL0 L0 M0 S0</code>.</p>
                 * @param {sap.ui.layout.GridIndent} sDefaultIndent <p>New value for property <code>defaultIndent</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDefaultIndent(sDefaultIndent: sap.ui.layout.GridIndent): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getDefaultSpan" data-sap-ui-target="getDefaultSpan">defaultSpan</a>.</p><p>Optional. A string type that represents the span values of the <code>Grid</code> for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>XL3 L3 M6 S12</code>.</p>
                 * @param {sap.ui.layout.GridSpan} sDefaultSpan <p>New value for property <code>defaultSpan</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDefaultSpan(sDefaultSpan: sap.ui.layout.GridSpan): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getHSpacing" data-sap-ui-target="getHSpacing">hSpacing</a>.</p><p>Optional. Defines the horizontal spacing between the content in the <code>Grid</code>. In rem, allowed values are 0, 0.5 , 1 or 2.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} fHSpacing <p>New value for property <code>hSpacing</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHSpacing(fHSpacing: number): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getPosition" data-sap-ui-target="getPosition">position</a>.</p><p>Optional. Defines the position of the <code>Grid</code> in the window or surrounding container.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Left</code>.</p>
                 * @param {sap.ui.layout.GridPosition} sPosition <p>New value for property <code>position</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPosition(sPosition: sap.ui.layout.GridPosition): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getVSpacing" data-sap-ui-target="getVSpacing">vSpacing</a>.</p><p>Optional. Defines the vertical spacing between the rows in the <code>Grid</code>. In rem, allowed values are 0, 0.5, 1 and 2.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} fVSpacing <p>New value for property <code>vSpacing</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVSpacing(fVSpacing: number): sap.ui.layout.Grid;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Optional. Defines the width of the <code>Grid</code>. If not specified, then 100%.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.layout.Grid <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.Grid;
            }
            /**
             * <p>Defines layout data for the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid" data-sap-ui-target="Grid">sap.ui.layout.Grid</a>.</p><p><b>Note:</b> When <code>GridData</code> is used for controls inside a form, the <code>linebreak</code> property has to be set to <code>true</code> if the next form element has to be displayed on a new line. Otherwise the <code>GridData</code> overrides the layout provided by the <code>Form</code>.</p>
             */
            export class GridData extends sap.ui.core.LayoutData {
                /**
                 * <p>Constructor for a new <code>GridData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndent" data-sap-ui-target="getIndent">indent</a>.</p><p>A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p>
                 * @returns sap.ui.layout.GridIndent <p>Value of property <code>indent</code></p>
                 */
                getIndent(): sap.ui.layout.GridIndent;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentL" data-sap-ui-target="getIndentL">indentL</a>.</p><p>Optional. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.</p>
                 * @returns number <p>Value of property <code>indentL</code></p>
                 */
                getIndentL(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentM" data-sap-ui-target="getIndentM">indentM</a>.</p><p>Optional. Defines an indent value for medium size screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.</p>
                 * @returns number <p>Value of property <code>indentM</code></p>
                 */
                getIndentM(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentS" data-sap-ui-target="getIndentS">indentS</a>.</p><p>Optional. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.</p>
                 * @returns number <p>Value of property <code>indentS</code></p>
                 */
                getIndentS(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentXL" data-sap-ui-target="getIndentXL">indentXL</a>.</p><p>Optional. Defines an indent value for extra large screens. This value overwrites the value for extra large screens defined in the <code>indent</code> property.</p>
                 * @returns number <p>Value of property <code>indentXL</code></p>
                 */
                getIndentXL(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreak" data-sap-ui-target="getLinebreak">linebreak</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on all-size screens within the <code>Grid</code> and becomes the first within the next line.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreak</code></p>
                 */
                getLinebreak(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakL" data-sap-ui-target="getLinebreakL">linebreakL</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on large screens within the <code>Grid</code> and becomes the first within the next line.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreakL</code></p>
                 */
                getLinebreakL(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakM" data-sap-ui-target="getLinebreakM">linebreakM</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on medium screens within the <code>Grid</code> and becomes the first within the next line.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreakM</code></p>
                 */
                getLinebreakM(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakS" data-sap-ui-target="getLinebreakS">linebreakS</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on small screens within the <code>Grid</code> and becomes the first within the next line.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreakS</code></p>
                 */
                getLinebreakS(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakXL" data-sap-ui-target="getLinebreakXL">linebreakXL</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on extra large screens within the <code>Grid</code> and becomes the first within the next line.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreakXL</code></p>
                 */
                getLinebreakXL(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getMoveBackwards" data-sap-ui-target="getMoveBackwards">moveBackwards</a>.</p><p>Optional. Moves a cell backwards with as many columns as specified.</p>
                 * @returns sap.ui.layout.GridIndent <p>Value of property <code>moveBackwards</code></p>
                 */
                getMoveBackwards(): sap.ui.layout.GridIndent;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getMoveForward" data-sap-ui-target="getMoveForward">moveForward</a>.</p><p>Optional. Moves a cell forwards with as many columns as specified.</p>
                 * @returns sap.ui.layout.GridIndent <p>Value of property <code>moveForward</code></p>
                 */
                getMoveForward(): sap.ui.layout.GridIndent;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpan" data-sap-ui-target="getSpan">span</a>.</p><p>A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p>
                 * @returns sap.ui.layout.GridSpan <p>Value of property <code>span</code></p>
                 */
                getSpan(): sap.ui.layout.GridSpan;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanL" data-sap-ui-target="getSpanL">spanL</a>.</p><p>Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.</p>
                 * @returns number <p>Value of property <code>spanL</code></p>
                 */
                getSpanL(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanM" data-sap-ui-target="getSpanM">spanM</a>.</p><p>Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the <code>span</code> property.</p>
                 * @returns number <p>Value of property <code>spanM</code></p>
                 */
                getSpanM(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanS" data-sap-ui-target="getSpanS">spanS</a>.</p><p>Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.</p>
                 * @returns number <p>Value of property <code>spanS</code></p>
                 */
                getSpanS(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanXL" data-sap-ui-target="getSpanXL">spanXL</a>.</p><p>Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the <code>span</code> property.</p>
                 * @returns number <p>Value of property <code>spanXL</code></p>
                 */
                getSpanXL(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleL" data-sap-ui-target="getVisibleL">visibleL</a>.</p><p>Defines if this control is visible on large screens.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visibleL</code></p>
                 */
                getVisibleL(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleM" data-sap-ui-target="getVisibleM">visibleM</a>.</p><p>Defines if this control is visible on medium screens.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visibleM</code></p>
                 */
                getVisibleM(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleS" data-sap-ui-target="getVisibleS">visibleS</a>.</p><p>Defines if this control is visible on small screens.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visibleS</code></p>
                 */
                getVisibleS(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleXL" data-sap-ui-target="getVisibleXL">visibleXL</a>.</p><p>Defines if this control is visible on extra Large screens.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visibleXL</code></p>
                 */
                getVisibleXL(): boolean;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndent" data-sap-ui-target="getIndent">indent</a>.</p><p>A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.GridIndent} sIndent <p>New value for property <code>indent</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIndent(sIndent: sap.ui.layout.GridIndent): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentL" data-sap-ui-target="getIndentL">indentL</a>.</p><p>Optional. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iIndentL <p>New value for property <code>indentL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIndentL(iIndentL: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentM" data-sap-ui-target="getIndentM">indentM</a>.</p><p>Optional. Defines an indent value for medium size screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iIndentM <p>New value for property <code>indentM</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIndentM(iIndentM: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentS" data-sap-ui-target="getIndentS">indentS</a>.</p><p>Optional. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iIndentS <p>New value for property <code>indentS</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIndentS(iIndentS: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getIndentXL" data-sap-ui-target="getIndentXL">indentXL</a>.</p><p>Optional. Defines an indent value for extra large screens. This value overwrites the value for extra large screens defined in the <code>indent</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iIndentXL <p>New value for property <code>indentXL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIndentXL(iIndentXL: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreak" data-sap-ui-target="getLinebreak">linebreak</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on all-size screens within the <code>Grid</code> and becomes the first within the next line.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreak <p>New value for property <code>linebreak</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreak(bLinebreak: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakL" data-sap-ui-target="getLinebreakL">linebreakL</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on large screens within the <code>Grid</code> and becomes the first within the next line.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreakL <p>New value for property <code>linebreakL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreakL(bLinebreakL: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakM" data-sap-ui-target="getLinebreakM">linebreakM</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on medium screens within the <code>Grid</code> and becomes the first within the next line.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreakM <p>New value for property <code>linebreakM</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreakM(bLinebreakM: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakS" data-sap-ui-target="getLinebreakS">linebreakS</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on small screens within the <code>Grid</code> and becomes the first within the next line.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreakS <p>New value for property <code>linebreakS</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreakS(bLinebreakS: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getLinebreakXL" data-sap-ui-target="getLinebreakXL">linebreakXL</a>.</p><p>Optional. If set to <code>true</code>, the control causes a line break on extra large screens within the <code>Grid</code> and becomes the first within the next line.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreakXL <p>New value for property <code>linebreakXL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreakXL(bLinebreakXL: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getMoveBackwards" data-sap-ui-target="getMoveBackwards">moveBackwards</a>.</p><p>Optional. Moves a cell backwards with as many columns as specified.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.GridIndent} sMoveBackwards <p>New value for property <code>moveBackwards</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMoveBackwards(sMoveBackwards: sap.ui.layout.GridIndent): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getMoveForward" data-sap-ui-target="getMoveForward">moveForward</a>.</p><p>Optional. Moves a cell forwards with as many columns as specified.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.GridIndent} sMoveForward <p>New value for property <code>moveForward</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMoveForward(sMoveForward: sap.ui.layout.GridIndent): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpan" data-sap-ui-target="getSpan">span</a>.</p><p>A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.layout.GridSpan} sSpan <p>New value for property <code>span</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSpan(sSpan: sap.ui.layout.GridSpan): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanL" data-sap-ui-target="getSpanL">spanL</a>.</p><p>Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iSpanL <p>New value for property <code>spanL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSpanL(iSpanL: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanM" data-sap-ui-target="getSpanM">spanM</a>.</p><p>Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the <code>span</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iSpanM <p>New value for property <code>spanM</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSpanM(iSpanM: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanS" data-sap-ui-target="getSpanS">spanS</a>.</p><p>Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iSpanS <p>New value for property <code>spanS</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSpanS(iSpanS: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getSpanXL" data-sap-ui-target="getSpanXL">spanXL</a>.</p><p>Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the <code>span</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iSpanXL <p>New value for property <code>spanXL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSpanXL(iSpanXL: number): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleL" data-sap-ui-target="getVisibleL">visibleL</a>.</p><p>Defines if this control is visible on large screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisibleL <p>New value for property <code>visibleL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleL(bVisibleL: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleM" data-sap-ui-target="getVisibleM">visibleM</a>.</p><p>Defines if this control is visible on medium screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisibleM <p>New value for property <code>visibleM</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleM(bVisibleM: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleS" data-sap-ui-target="getVisibleS">visibleS</a>.</p><p>Defines if this control is visible on small screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisibleS <p>New value for property <code>visibleS</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleS(bVisibleS: boolean): sap.ui.layout.GridData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.GridData/methods/getVisibleXL" data-sap-ui-target="getVisibleXL">visibleXL</a>.</p><p>Defines if this control is visible on extra Large screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisibleXL <p>New value for property <code>visibleXL</code></p>
                 * @returns sap.ui.layout.GridData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisibleXL(bVisibleXL: boolean): sap.ui.layout.GridData;
            }
            /**
             * <p>The position of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Grid" data-sap-ui-target="Grid">sap.ui.layout.Grid</a>. Can be <code>Left</code> (default), <code>Center</code> or <code>Right</code>.</p>
             */
            export enum GridPosition {
                /**
                 * <p><code>Grid</code> is centered on the screen.</p>
                 */
                Center = "Center",
                /**
                 * <p><code>Grid</code> is aligned left.</p>
                 */
                Left = "Left",
                /**
                 * <p><code>Grid</code> is aligned to the right.</p>
                 */
                Right = "Right",
            }
            /**
             * <p>A layout that provides support for horizontal alignment of controls</p>
             */
            export class HorizontalLayout extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new HorizontalLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.HorizontalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.layout.HorizontalLayout;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.HorizontalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.HorizontalLayout;
                /**
                 * @returns any <p>Current accessibility state of the control</p>
                 */
                protected getAccessibilityInfo(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getAllowWrapping" data-sap-ui-target="getAllowWrapping">allowWrapping</a>.</p><p>Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>allowWrapping</code></p>
                 */
                getAllowWrapping(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The controls inside this layout</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.HorizontalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.HorizontalLayout;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.HorizontalLayout/methods/getAllowWrapping" data-sap-ui-target="getAllowWrapping">allowWrapping</a>.</p><p>Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bAllowWrapping <p>New value for property <code>allowWrapping</code></p>
                 * @returns sap.ui.layout.HorizontalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAllowWrapping(bAllowWrapping: boolean): sap.ui.layout.HorizontalLayout;
            }
            /**
             * <p>PaneContainer is an abstraction of Splitter.</p><p>Could be used as an aggregation of ResponsiveSplitter or other PaneContainers.</p>
             */
            export class PaneContainer extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new PaneContainer.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some pane to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getPanes" data-sap-ui-target="getPanes">panes</a>.</p>
                 * @param {sap.ui.core.Element} oPane <p>The pane to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.PaneContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addPane(oPane: sap.ui.core.Element): sap.ui.layout.PaneContainer;
                /**
                 * <p>Destroys all the panes in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getPanes" data-sap-ui-target="getPanes">panes</a>.</p>
                 * @returns sap.ui.layout.PaneContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyPanes(): sap.ui.layout.PaneContainer;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getOrientation" data-sap-ui-target="getOrientation">orientation</a>.</p><p>The orientation of the Splitter</p><p>Default value is <code>Horizontal</code>.</p>
                 * @returns sap.ui.core.Orientation <p>Value of property <code>orientation</code></p>
                 */
                getOrientation(): sap.ui.core.Orientation;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getPanes" data-sap-ui-target="getPanes">panes</a>.</p><p>The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.</p>
                 * @returns sap.ui.core.Element[] 
                 */
                getPanes(): sap.ui.core.Element[];
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Element</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getPanes" data-sap-ui-target="getPanes">panes</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Element} oPane <p>The pane whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfPane(oPane: sap.ui.core.Element): number;
                /**
                 * <p>Pane insertion</p>
                 * @param {undefined} oObject 
                 * @param {undefined} iIndex 
                 * @returns sap.ui.base.ManagedObject 
                 */
                insertPane(oObject: undefined, iIndex: undefined): sap.ui.base.ManagedObject;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer/methods/getPanes" data-sap-ui-target="getPanes">panes</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Element[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllPanes(): sap.ui.core.Element[];
                /**
                 * <p>Pane removal</p>
                 * @param {undefined} oObject 
                 * @returns sap.ui.base.ManagedObject 
                 */
                removePane(oObject: undefined): sap.ui.base.ManagedObject;
                /**
                 * <p>Setter for property layoutData.</p>
                 * @param {sap.ui.core.LayoutData} oLayoutData <p>The LayoutData object.</p>
                 * @returns sap.ui.layout.PaneContainer <p>this to allow method chaining.</p>
                 */
                setLayoutData(oLayoutData: sap.ui.core.LayoutData): sap.ui.layout.PaneContainer;
                /**
                 * <p>Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal</p>
                 * @param {sap.ui.core.Orientation} sOrientation <p>The Orientation type.</p>
                 * @returns sap.ui.layout.PaneContainer <p>this to allow method chaining.</p>
                 */
                setOrientation(sOrientation: sap.ui.core.Orientation): sap.ui.layout.PaneContainer;
            }
            /**
             * <p>This is a layout where several controls can be added. These controls are blown up to fit in an entire row. If the window resizes, the controls are moved between the rows and resized again.</p>
             */
            export class ResponsiveFlowLayout extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new ResponsiveFlowLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.ResponsiveFlowLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.layout.ResponsiveFlowLayout;
                /**
                 * <p>Adds content. This function needs to be overridden to prevent any rendering while some content is still being added.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content that should be added to the layout</p>
                 */
                addContent(oContent: sap.ui.core.Control): void;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.ResponsiveFlowLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.ResponsiveFlowLayout;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getResponsive" data-sap-ui-target="getResponsive">responsive</a>.</p><p>If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>responsive</code></p>
                 */
                getResponsive(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts content. This function needs to be overridden to prevent any rendering while some content is still being added.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content that should be inserted to the layout</p>
                 * @param {number} iIndex <p>The index where the content should be inserted into</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): void;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes content. This function needs to be overridden to prevent any rendering while some content is still being added.</p>
                 * @param {number | string | sap.ui.core.Control} oContent <p>The content that should be removed from the layout</p>
                 */
                removeContent(oContent: number | string | sap.ui.core.Control): void;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayout/methods/getResponsive" data-sap-ui-target="getResponsive">responsive</a>.</p><p>If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bResponsive <p>New value for property <code>responsive</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setResponsive(bResponsive: boolean): sap.ui.layout.ResponsiveFlowLayout;
            }
            /**
             * <p>This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.</p>
             */
            export class ResponsiveFlowLayoutData extends sap.ui.core.LayoutData {
                /**
                 * <p>Constructor for a new ResponsiveFlowLayoutData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getLinebreak" data-sap-ui-target="getLinebreak">linebreak</a>.</p><p>If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreak</code></p>
                 */
                getLinebreak(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getLinebreakable" data-sap-ui-target="getLinebreakable">linebreakable</a>.</p><p>Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>linebreakable</code></p>
                 */
                getLinebreakable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getMargin" data-sap-ui-target="getMargin">margin</a>.</p><p>Prevents any margin of the element if set to false.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>margin</code></p>
                 */
                getMargin(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.</p><p>Default value is <code>100</code>.</p>
                 * @returns number <p>Value of property <code>minWidth</code></p>
                 */
                getMinWidth(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getWeight" data-sap-ui-target="getWeight">weight</a>.</p><p>Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>weight</code></p>
                 */
                getWeight(): number;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getLinebreak" data-sap-ui-target="getLinebreak">linebreak</a>.</p><p>If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bLinebreak <p>New value for property <code>linebreak</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreak(bLinebreak: boolean): sap.ui.layout.ResponsiveFlowLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getLinebreakable" data-sap-ui-target="getLinebreakable">linebreakable</a>.</p><p>Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bLinebreakable <p>New value for property <code>linebreakable</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLinebreakable(bLinebreakable: boolean): sap.ui.layout.ResponsiveFlowLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getMargin" data-sap-ui-target="getMargin">margin</a>.</p><p>Prevents any margin of the element if set to false.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bMargin <p>New value for property <code>margin</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMargin(bMargin: boolean): sap.ui.layout.ResponsiveFlowLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100</code>.</p>
                 * @param {number} iMinWidth <p>New value for property <code>minWidth</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinWidth(iMinWidth: number): sap.ui.layout.ResponsiveFlowLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveFlowLayoutData/methods/getWeight" data-sap-ui-target="getWeight">weight</a>.</p><p>Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iWeight <p>New value for property <code>weight</code></p>
                 * @returns sap.ui.layout.ResponsiveFlowLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWeight(iWeight: number): sap.ui.layout.ResponsiveFlowLayoutData;
            }
            /**
             * <p>A responsive splitter which divides the application into several areas. </p><h3>Overview</h3><p> The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed across one or multiple screen areas, some of which may also be off-canvas.</p><p>The control is intended for developing administrative tools and applications. </p><h3>Structure</h3><p> The responsive splitter holds the following hierarchy of containers and controls: <ul> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer" data-sap-ui-target="PaneContainer">Pane Container</a> - holds one or more Split Panes and determines the pane orientation. The pane which is stored in <code>rootPaneContainer</code> holds all other pane containers and split panes.</li> <li><a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane" data-sap-ui-target="SplitPane">Split Pane</a> - independent containers that may interact with one another. Each pane can hold only one control.</li> </ul> </p><h3>Usage</h3><h4>When to use</h4><p> <ul> <li>The application has to display several areas side by side that must be resizable.</li> <li>The application must work on a range of different devices in a responsive manner.</li> </ul> </p><h3>Responsive Behavior</h3><p> <ul> <li>As soon as views are in the off-canvas mode, the pagination bar at the bottom of the application allows the user to switch between them.</li> <li>On touch-enabled devices, the splitters show explicit handles with larger touch areas.</li> <li>Double-clicking on a splitter will collapse or expand it back to its original position.</li> </ul></p><p><b>Note:</b> We don't recommend dynamically inserting/removing panes into/from the PaneContainer since this might lead to inconsistent layout. If it is necessary, you need to ensure the sum of all sizes of the SplitPanes doesn't exceed the width of the PaneContainer.</p>
             */
            export class ResponsiveSplitter extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new ResponsiveSplitter.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Destroys the rootPaneContainer in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getRootPaneContainer" data-sap-ui-target="getRootPaneContainer">rootPaneContainer</a>.</p>
                 * @returns sap.ui.layout.ResponsiveSplitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyRootPaneContainer(): sap.ui.layout.ResponsiveSplitter;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getDefaultPane" data-sap-ui-target="getDefaultPane">defaultPane</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getDefaultPane(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the control</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                 */
                getHeight(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getRootPaneContainer" data-sap-ui-target="getRootPaneContainer">rootPaneContainer</a>.</p><p>The root PaneContainer of the ResponsiveSplitter</p>
                 * @returns sap.ui.layout.PaneContainer 
                 */
                getRootPaneContainer(): sap.ui.layout.PaneContainer;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the control</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getDefaultPane" data-sap-ui-target="getDefaultPane">defaultPane</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.layout.SplitPane} oDefaultPane <p>ID of an element which becomes the new target of this defaultPane association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.layout.ResponsiveSplitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDefaultPane(oDefaultPane: sap.ui.core.ID | sap.ui.layout.SplitPane): sap.ui.layout.ResponsiveSplitter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                 * @returns sap.ui.layout.ResponsiveSplitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.layout.ResponsiveSplitter;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getRootPaneContainer" data-sap-ui-target="getRootPaneContainer">rootPaneContainer</a>.</p>
                 * @param {sap.ui.layout.PaneContainer} oRootPaneContainer <p>The rootPaneContainer to set</p>
                 * @returns sap.ui.layout.ResponsiveSplitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRootPaneContainer(oRootPaneContainer: sap.ui.layout.PaneContainer): sap.ui.layout.ResponsiveSplitter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.ResponsiveSplitter/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.layout.ResponsiveSplitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.ResponsiveSplitter;
            }
            /**
             * <p>Types of the DynamicSideContent FallDown options</p>
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
             * <p>The position of the side content - End (default) and Begin.</p>
             */
            export enum SideContentPosition {
                /**
                 * <p>The side content is on the left side of the main container in left-to-right mode and on the right side in right-to-left mode.</p>
                 */
                Begin = "Begin",
                /**
                 * <p>The side content is on the right side of the main container in left-to-right mode and on the left side in right-to-left mode.</p>
                 */
                End = "End",
            }
            /**
             * <p>Types of the DynamicSideContent Visibility options</p>
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
             * <p>SplitPane is a container of a single control in a responsive splitter. Could be used as an aggregation of a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.PaneContainer" data-sap-ui-target="PaneContainer">PaneContainer</a>.</p><p>The behavior of the Split Panes is handled by the following properties: <ul> <li><code>requiredParentWidth</code> - determines the minimum width of the parent container (in pixels). When it is reached, the pane will be hidden from the screen.</li> <li><code>demandPane</code> - determines if the pane is reachable via the pagination bar after it has been hidden from the screen.</li> </ul</p>
             */
            export class SplitPane extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new SplitPane.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Destroys the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.SplitPane <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.SplitPane;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Content of the SplitPane</p>
                 * @returns sap.ui.core.Control 
                 */
                getContent(): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getDemandPane" data-sap-ui-target="getDemandPane">demandPane</a>.</p><p>Determines whether the pane will be moved to the pagination</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>demandPane</code></p>
                 */
                getDemandPane(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getRequiredParentWidth" data-sap-ui-target="getRequiredParentWidth">requiredParentWidth</a>.</p><p>Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.</p><p>Default value is <code>800</code>.</p>
                 * @returns number <p>Value of property <code>requiredParentWidth</code></p>
                 */
                getRequiredParentWidth(): number;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to set</p>
                 * @returns sap.ui.layout.SplitPane <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setContent(oContent: sap.ui.core.Control): sap.ui.layout.SplitPane;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getDemandPane" data-sap-ui-target="getDemandPane">demandPane</a>.</p><p>Determines whether the pane will be moved to the pagination</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bDemandPane <p>New value for property <code>demandPane</code></p>
                 * @returns sap.ui.layout.SplitPane <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDemandPane(bDemandPane: boolean): sap.ui.layout.SplitPane;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitPane/methods/getRequiredParentWidth" data-sap-ui-target="getRequiredParentWidth">requiredParentWidth</a>.</p><p>Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>800</code>.</p>
                 * @param {number} iRequiredParentWidth <p>New value for property <code>requiredParentWidth</code></p>
                 * @returns sap.ui.layout.SplitPane <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setRequiredParentWidth(iRequiredParentWidth: number): sap.ui.layout.SplitPane;
            }
            /**
             * <p>A layout that contains several content areas. The content that is added to the splitter should contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.</p><p>By adding or changing SplitterLayoutData to the controls that make up the content areas, the size can be changed programatically. Additionally the contents can be made non-resizable individually and a minimal size (in px) can be set.</p><p>The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of the splitter will be arranged in that way. In order to split vertically and horizontally at the same time, Splitters need to be nested.</p><p>The splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an auto-size content-area next to another auto-size one might lead to the effect that the former does not take its maximum size but only the maximum size before recalculating auto sizes).</p><p>The splitter bars used for resizing the contents by the user can be set to different widths (or heights in vertical mode) and the splitter will automatically resize the other contents accordingly. In case the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking triggerResize() on the Splitter.</p>
             */
            export class Splitter extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new Splitter.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some contentArea to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p>
                 * @param {sap.ui.core.Control} oContentArea <p>The contentArea to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContentArea(oContentArea: sap.ui.core.Control): sap.ui.layout.Splitter;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.Splitter/events/resize" data-sap-ui-target="sap.ui.layout.Splitter/events/resize">resize</a> event of this <code>sap.ui.layout.Splitter</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.Splitter</code> itself.</p><p>Event is fired when contents are resized.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.layout.Splitter</code> itself</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachResize(oData: any, fnFunction: Function, oListener?: any): sap.ui.layout.Splitter;
                /**
                 * <p>Destroys all the contentAreas in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContentAreas(): sap.ui.layout.Splitter;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.Splitter/events/resize" data-sap-ui-target="sap.ui.layout.Splitter/events/resize">resize</a> event of this <code>sap.ui.layout.Splitter</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachResize(fnFunction: Function, oListener: any): sap.ui.layout.Splitter;
                /**
                 * <p>Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars to non-focussable elements.</p>
                 */
                protected disableKeyboardSupport(): void;
                /**
                 * <p>Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars focussable elements.</p>
                 */
                protected enableKeyboardSupport(): void;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.Splitter/events/resize" data-sap-ui-target="sap.ui.layout.Splitter/events/resize">resize</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireResize(mParameters?: any): sap.ui.layout.Splitter;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p><p>The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContentAreas(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the control</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                 */
                getHeight(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getOrientation" data-sap-ui-target="getOrientation">orientation</a>.</p><p>Whether to split the contents horizontally (default) or vertically.</p><p>Default value is <code>Horizontal</code>.</p>
                 * @returns sap.ui.core.Orientation <p>Value of property <code>orientation</code></p>
                 */
                getOrientation(): sap.ui.core.Orientation;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the control</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContentArea <p>The contentArea whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContentArea(oContentArea: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a contentArea into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p>
                 * @param {sap.ui.core.Control} oContentArea <p>The contentArea to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the contentArea should be inserted at; for a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value greater than the current size of the aggregation, the contentArea is inserted at the last position</p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContentArea(oContentArea: sap.ui.core.Control, iIndex: number): sap.ui.layout.Splitter;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContentAreas(): sap.ui.core.Control[];
                /**
                 * <p>Removes a contentArea from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getContentAreas" data-sap-ui-target="getContentAreas">contentAreas</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContentArea <p>The contentArea to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed contentArea or <code>null</code></p>
                 */
                removeContentArea(vContentArea: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.layout.Splitter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getOrientation" data-sap-ui-target="getOrientation">orientation</a>.</p><p>Whether to split the contents horizontally (default) or vertically.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Horizontal</code>.</p>
                 * @param {sap.ui.core.Orientation} sOrientation <p>New value for property <code>orientation</code></p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setOrientation(sOrientation: sap.ui.core.Orientation): sap.ui.layout.Splitter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.Splitter/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the control</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.layout.Splitter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.Splitter;
                /**
                 * <p>This method triggers a resize on the Splitter - meaning it forces the Splitter to recalculate all sizes. This method should only be used in rare cases, for example when the CSS that defines the sizes of the splitter bars changes without triggering a rerendering of the splitter.</p>
                 * @param {boolean} forceDirectly <p>Do not delay the resize, trigger it right now.</p>
                 */
                triggerResize(forceDirectly?: boolean): void;
            }
            /**
             * <p>Holds layout data for the splitter contents. Allowed size values are numeric values ending in "px" and "%" and the special case "auto". (The CSS value "auto" is used internally to recalculate the size of the content dynamically and is not directly set as style property.)</p>
             */
            export class SplitterLayoutData extends sap.ui.core.LayoutData {
                /**
                 * <p>Constructor for a new SplitterLayoutData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getMinSize" data-sap-ui-target="getMinSize">minSize</a>.</p><p>Sets the minimum size of the splitter content in px.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>minSize</code></p>
                 */
                getMinSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getResizable" data-sap-ui-target="getResizable">resizable</a>.</p><p>Determines whether the control in the splitter can be resized or not.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>resizable</code></p>
                 */
                getResizable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getSize" data-sap-ui-target="getSize">size</a>.</p><p>Sets the size of the splitter content.</p><p>Default value is <code>auto</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>size</code></p>
                 */
                getSize(): sap.ui.core.CSSSize;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getMinSize" data-sap-ui-target="getMinSize">minSize</a>.</p><p>Sets the minimum size of the splitter content in px.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMinSize <p>New value for property <code>minSize</code></p>
                 * @returns sap.ui.layout.SplitterLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinSize(iMinSize: number): sap.ui.layout.SplitterLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getResizable" data-sap-ui-target="getResizable">resizable</a>.</p><p>Determines whether the control in the splitter can be resized or not.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bResizable <p>New value for property <code>resizable</code></p>
                 * @returns sap.ui.layout.SplitterLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setResizable(bResizable: boolean): sap.ui.layout.SplitterLayoutData;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.SplitterLayoutData/methods/getSize" data-sap-ui-target="getSize">size</a>.</p><p>Sets the size of the splitter content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                 * @param {sap.ui.core.CSSSize} sSize <p>New value for property <code>size</code></p>
                 * @returns sap.ui.layout.SplitterLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSize(sSize: sap.ui.core.CSSSize): sap.ui.layout.SplitterLayoutData;
            }
            /**
             * <p>In this layout the content controls are rendered one below the other.</p>
             */
            export class VerticalLayout extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new VerticalLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>Id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.layout.VerticalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.layout.VerticalLayout;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.layout.VerticalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.layout.VerticalLayout;
                /**
                 * @returns any <p>An object with the accessibilty infos for this control</p>
                 */
                protected getAccessibilityInfo(): any;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Content controls within the layout.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>If not enabled, all controls inside are not enabled automatically.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enabled</code></p>
                 */
                getEnabled(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>VerticalLayout</code>. If no width is set, the width of the content is used. If the content of the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.layout.VerticalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.layout.VerticalLayout;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.VerticalLayout/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>If not enabled, all controls inside are not enabled automatically.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
                 * @returns sap.ui.layout.VerticalLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnabled(bEnabled: boolean): sap.ui.layout.VerticalLayout;
                /**
                 * <p>Sets the width of the Vertical Layout without rerendering of the whole control, and everything inside it.</p>
                 * @param {sap.ui.core.CSSSize} width <p>The new width</p>
                 * @returns sap.ui.layout.VerticalLayout <p>This pointer for chaining</p>
                 */
                setWidth(width: sap.ui.core.CSSSize): sap.ui.layout.VerticalLayout;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            /**
             * <p>A string type that represents how many boxes per row should be displayed for each screen size. The breakpoints are for extra large (XL), large (L), medium (M) and small (S) screen sizes.</p><p><b>Note:</b> The parameters must be provided in the order <XL L M S>.</p>
             */
            export type BoxesPerRowConfig = string;
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace cssgrid {
                /**
                 * <p>A string type that represents a short hand CSS grid gap.</p>
                 */
                export type CSSGridGapShortHand = string;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace cssgrid {
                /**
                 * <p>A string type that represents one or two grid lines. Used to define the position and size of a single grid item.</p><p>Valid values: auto inherit 1 span 2 span 2 / 5 span 2 / -5 5 / 7 7 / span 5 span 7 / span 5</p>
                 */
                export type CSSGridLine = string;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace cssgrid {
                /**
                 * <p>A string type that represents a grid track (the space between two grid lines)</p>
                 */
                export type CSSGridTrack = string;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>An <code>int</code> type that defines how many cells a control inside of a column of a <code>Form</code> control using the <code>ColumnLayout</code> control as layout can use.</p><p>Allowed values are numbers from 1 to 12.</p>
                 */
                export type ColumnCells = number;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has large size</p><p>Allowed values are numbers from 1 to 3.</p>
                 */
                export type ColumnsL = number;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has medium size</p><p>Allowed values are numbers from 1 to 2.</p>
                 */
                export type ColumnsM = number;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has extra-large size</p><p>Allowed values are numbers from 1 to 4.</p>
                 */
                export type ColumnsXL = number;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>An <code>int</code> type that defines how many cells beside the controls inside of a column of a <code>Form</code> control using the <code>ColumnLayout</code> control as layout are empty.</p><p>Allowed values are numbers from 0 to 11.</p>
                 */
                export type EmptyCells = number;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            namespace form {
                /**
                 * <p>A string that defines the number of used cells in a <code>GridLayout</code>. This can be a number from 1 to 16, "auto" or "full". If set to "auto" the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells. If set to "full" only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size has no effect.</p>
                 */
                export type GridElementCells = string;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            /**
             * <p>A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p>
             */
            export type GridIndent = string;
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            /**
             * <p>A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.</p><p>Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.</p><p><b>Note:</b> The parameters must be provided in the order <large medium small>.</p>
             */
            export type GridSpan = string;
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            /**
             */
            namespace cssgrid {
                /**
                 * <p>A layout control, used to create full page layouts or user interface elements.</p><h3>Overview</h3><p>A two-dimensional layout control based on the native-browser CSS display grid which can handle both columns and rows. The control can be used along with <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.FlexBox" data-sap-ui-target="FlexBox">sap.m.FlexBox</a> which is the one-dimensional alternative for layouting.</p><p>With properties it is possible to define: <ul> <li>columns, rows and their sizes in the grid</li> <li>vertical and horizontal gaps between the grid items</li> <li>the flow algorithm when new items are added in the grid</li> </ul></p><p>The dimensions of the grid items are defined on a <code>CSSGrid</code> level. Every item can override its size by specifying how many columns and/or rows it will take in the <code>CSSGrid</code>. Every item can override its position by specifying from which column and/or row it will start. The configuration of a single item is done with <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData" data-sap-ui-target="GridItemLayoutData">GridItemLayoutData</a>.</p><h3>Terminology</h3><p> <ul> <li>Grid - The container which has all grid settings</li> <li>Gutters - The gap between the rows and columns</li> <li>Grid areas - Items that take more than one row and/or column</li> <li>Grid cells - The items of the Grid</li> <li>Grid lines - The lines around and between the rows and columns</li> <li>Grid tracks - The space between any two lines in the grid</li> <li>"fr" Unit - A special grid unit (short from "fraction") which represents a fraction of the available space in the grid</li> <li>Implicit and Explicit grid - Explicit grid consists of rows and columns defined with <code>gridTemplateColumns</code> and <code>gridTemplateRows</code>. The grid also creates rows and columns on its own when needed. Their dimensions are defined with <code>gridAutoColumns</code> and <code>gridAutoRows</code>.</li> </ul></p><h3>Structure</h3><p> The <code>CSSGrid</code> has the following elements: <ul> <li><code>items</code> - The items of the <code>CSSGrid</code></li> <li><code>customLayout</code> - An aggregation used to pass the <code>CSSGrid</code> configuration. Used for templating.</li> </ul></p><h3>Usage</h3><p>For general cases, use the <code>CSSGrid</code> properties to configure how the layout should look. For Box case (equal sized items), use <code>customLayout</code> aggregation with <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout" data-sap-ui-target="GridBoxLayout">GridBoxLayout</a> For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout" data-sap-ui-target="GridResponsiveLayout">GridResponsiveLayout</a> To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData" data-sap-ui-target="GridItemLayoutData">GridItemLayoutData</a></p><p><i>When to use</i> <ul> <li>If a two-dimensional layout configuration is needed (both columns and rows are defined)</li> </ul></p><p><i>When not to use</i> <ul> <li>If the layout needs to be defined only by one dimension (either column or row, not both). Use <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.FlexBox" data-sap-ui-target="FlexBox">FlexBox</a> instead.</li> </ul></p><h3>Responsive behavior</h3><p> <ul> <li>Fully configurable by the developer. It is possible to create a "breathing" columns layout which means columns width will grow/shrink depending on grid size.</li> <li>It is possible to pass a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout" data-sap-ui-target="GridResponsiveLayout">GridResponsiveLayout</a> to the <code>customLayout</code> aggregation of the <code>CSSGrid</code> and configure how it will look in different breakpoints (S, M, L, XL).</li> </ul></p><h3>Current Limitations</h3><p> <ul> <li>No support for IE11.</li> <li>No support for Edge version 15.</li> <li>No alignment and ordering</li> <li>No Named grid areas and lines</li> </ul><br><br><span>Documentation links:</span><ul><li><a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN web docs: CSS Grid Layout</a>
                <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                title="Information published on non SAP site" class="sapUISDKExternalLink"/></li></ul></p>
                 */
                export class CSSGrid extends sap.ui.core.Control implements sap.ui.layout.cssgrid.IGridConfigurable {
                    /**
                     * <p>Constructor for a new CSSGrid.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                     * @param {sap.ui.core.Control} oItem <p>The item to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addItem(oItem: sap.ui.core.Control): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Destroys the customLayout in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getCustomLayout" data-sap-ui-target="getCustomLayout">customLayout</a>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyCustomLayout(): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyItems(): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getCustomLayout" data-sap-ui-target="getCustomLayout">customLayout</a>.</p><p>Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.</p>
                     * @returns sap.ui.layout.cssgrid.GridLayoutBase 
                     */
                    getCustomLayout(): sap.ui.layout.cssgrid.GridLayoutBase;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoColumns" data-sap-ui-target="getGridAutoColumns">gridAutoColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns">MDN web docs: grid-auto-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridAutoColumns</code></p>
                     */
                    getGridAutoColumns(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoFlow" data-sap-ui-target="getGridAutoFlow">gridAutoFlow</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">MDN web docs: grid-auto-flow</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>Row</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridAutoFlow <p>Value of property <code>gridAutoFlow</code></p>
                     */
                    getGridAutoFlow(): sap.ui.layout.cssgrid.CSSGridAutoFlow;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoRows" data-sap-ui-target="getGridAutoRows">gridAutoRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows">MDN web docs: grid-auto-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridAutoRows</code></p>
                     */
                    getGridAutoRows(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridColumnGap" data-sap-ui-target="getGridColumnGap">gridColumnGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap">MDN web docs: grid-column-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>gridColumnGap</code></p>
                     */
                    getGridColumnGap(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridGap" data-sap-ui-target="getGridGap">gridGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap">MDN web docs: grid-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/> It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the gridGap value will have less priority and will be overwritten.</p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridGapShortHand <p>Value of property <code>gridGap</code></p>
                     */
                    getGridGap(): sap.ui.layout.cssgrid.CSSGridGapShortHand;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridRowGap" data-sap-ui-target="getGridRowGap">gridRowGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap">MDN web docs: grid-row-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>gridRowGap</code></p>
                     */
                    getGridRowGap(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridTemplateColumns" data-sap-ui-target="getGridTemplateColumns">gridTemplateColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns">MDN web docs: grid-template-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridTemplateColumns</code></p>
                     */
                    getGridTemplateColumns(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridTemplateRows" data-sap-ui-target="getGridTemplateRows">gridTemplateRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows">MDN web docs: grid-template-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridTemplateRows</code></p>
                     */
                    getGridTemplateRows(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>The items contained by the control.</p>
                     * @returns sap.ui.core.Control[] 
                     */
                    getItems(): sap.ui.core.Control[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the control</p><p>Default value is <code>100%</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.core.Control} oItem <p>The item whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfItem(oItem: sap.ui.core.Control): number;
                    /**
                     * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                     * @param {sap.ui.core.Control} oItem <p>The item to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertItem(oItem: sap.ui.core.Control, iIndex: number): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllItems(): sap.ui.core.Control[];
                    /**
                     * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                     * @param {number | string | sap.ui.core.Control} vItem <p>The item to remove or its index or id</p>
                     * @returns sap.ui.core.Control <p>The removed item or <code>null</code></p>
                     */
                    removeItem(vItem: number | string | sap.ui.core.Control): sap.ui.core.Control;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getCustomLayout" data-sap-ui-target="getCustomLayout">customLayout</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridLayoutBase} oCustomLayout <p>The customLayout to set</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setCustomLayout(oCustomLayout: sap.ui.layout.cssgrid.GridLayoutBase): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoColumns" data-sap-ui-target="getGridAutoColumns">gridAutoColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns">MDN web docs: grid-auto-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoColumns <p>New value for property <code>gridAutoColumns</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoColumns(sGridAutoColumns: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoFlow" data-sap-ui-target="getGridAutoFlow">gridAutoFlow</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">MDN web docs: grid-auto-flow</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Row</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridAutoFlow} sGridAutoFlow <p>New value for property <code>gridAutoFlow</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoFlow(sGridAutoFlow: sap.ui.layout.cssgrid.CSSGridAutoFlow): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridAutoRows" data-sap-ui-target="getGridAutoRows">gridAutoRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows">MDN web docs: grid-auto-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoRows <p>New value for property <code>gridAutoRows</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoRows(sGridAutoRows: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridColumnGap" data-sap-ui-target="getGridColumnGap">gridColumnGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap">MDN web docs: grid-column-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sGridColumnGap <p>New value for property <code>gridColumnGap</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridColumnGap(sGridColumnGap: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridGap" data-sap-ui-target="getGridGap">gridGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap">MDN web docs: grid-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/> It is a shorthand for gridRowGap and gridColumnGap. If some of them is set, the gridGap value will have less priority and will be overwritten.</p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridGapShortHand} sGridGap <p>New value for property <code>gridGap</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridGap(sGridGap: sap.ui.layout.cssgrid.CSSGridGapShortHand): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridRowGap" data-sap-ui-target="getGridRowGap">gridRowGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap">MDN web docs: grid-row-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sGridRowGap <p>New value for property <code>gridRowGap</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridRowGap(sGridRowGap: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridTemplateColumns" data-sap-ui-target="getGridTemplateColumns">gridTemplateColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns">MDN web docs: grid-template-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateColumns <p>New value for property <code>gridTemplateColumns</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridTemplateColumns(sGridTemplateColumns: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.CSSGrid/methods/getGridTemplateRows" data-sap-ui-target="getGridTemplateRows">gridTemplateRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows">MDN web docs: grid-template-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateRows <p>New value for property <code>gridTemplateRows</code></p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridTemplateRows(sGridTemplateRows: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.CSSGrid;
                    /**
                     * <p>Sets the width of the grid.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>The width of the Grid as CSS size.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGrid <p>Pointer to the control instance to allow method chaining.</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.CSSGrid;
                }
                /**
                 * <p>A string type that is used for CSS grid to control how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.</p>
                 */
                export enum CSSGridAutoFlow {
                    /**
                     * <p>Insert auto-placed items by filling each column.</p>
                     */
                    Column = "Column",
                    /**
                     * <p>Insert auto-placed items by filling each column, and fill any holes in the grid.</p>
                     */
                    ColumnDense = "ColumnDense",
                    /**
                     * <p>Insert auto-placed items by filling each row.</p>
                     */
                    Row = "Row",
                    /**
                     * <p>Insert auto-placed items by filling each row, and fill any holes in the grid.</p>
                     */
                    RowDense = "RowDense",
                }
                /**
                 * <p>Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.</p>
                 */
                export class GridBoxLayout extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new GridBoxLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings</p>
                     * @param {sap.ui.core.Control | HTMLElement} oElement <p>The element or control on which to apply the display:grid styles</p>
                     */
                    protected _applySingleGridLayout(oElement: sap.ui.core.Control | HTMLElement): void;
                    /**
                     * <p>Returns a gridTemplateColumns value based on boxWidth and boxMinWidth properties</p>
                     * @returns string <p>A value for gridTemplateColumns property</p>
                     */
                    protected _getTemplateColumns(): string;
                    /**
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>The active GridSettings</p>
                     */
                    protected getActiveGridSettings(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxesPerRowConfig" data-sap-ui-target="getBoxesPerRowConfig">boxesPerRowConfig</a>.</p><p>A string type that defines number of Boxes per row for extra large, large, medium and small screens</p><p>Default value is <code>XL7 L6 M4 S2</code>.</p>
                     * @returns sap.ui.layout.BoxesPerRowConfig <p>Value of property <code>boxesPerRowConfig</code></p>
                     */
                    getBoxesPerRowConfig(): sap.ui.layout.BoxesPerRowConfig;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxMinWidth" data-sap-ui-target="getBoxMinWidth">boxMinWidth</a>.</p><p>Defines the minimum width of the Boxes</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>boxMinWidth</code></p>
                     */
                    getBoxMinWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxWidth" data-sap-ui-target="getBoxWidth">boxWidth</a>.</p><p>Defines the width of the Boxes</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>boxWidth</code></p>
                     */
                    getBoxWidth(): sap.ui.core.CSSSize;
                    /**
                     * @returns boolean <p>If the Grid Layout is responsive.</p>
                     */
                    isResponsive(): boolean;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxesPerRowConfig" data-sap-ui-target="getBoxesPerRowConfig">boxesPerRowConfig</a>.</p><p>A string type that defines number of Boxes per row for extra large, large, medium and small screens</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>XL7 L6 M4 S2</code>.</p>
                     * @param {sap.ui.layout.BoxesPerRowConfig} sBoxesPerRowConfig <p>New value for property <code>boxesPerRowConfig</code></p>
                     * @returns sap.ui.layout.cssgrid.GridBoxLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBoxesPerRowConfig(sBoxesPerRowConfig: sap.ui.layout.BoxesPerRowConfig): sap.ui.layout.cssgrid.GridBoxLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxMinWidth" data-sap-ui-target="getBoxMinWidth">boxMinWidth</a>.</p><p>Defines the minimum width of the Boxes</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sBoxMinWidth <p>New value for property <code>boxMinWidth</code></p>
                     * @returns sap.ui.layout.cssgrid.GridBoxLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBoxMinWidth(sBoxMinWidth: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.GridBoxLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridBoxLayout/methods/getBoxWidth" data-sap-ui-target="getBoxWidth">boxWidth</a>.</p><p>Defines the width of the Boxes</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sBoxWidth <p>New value for property <code>boxWidth</code></p>
                     * @returns sap.ui.layout.cssgrid.GridBoxLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBoxWidth(sBoxWidth: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.GridBoxLayout;
                }
                /**
                 * <p>Holds layout data for a grid item.</p>
                 */
                export class GridItemLayoutData extends sap.ui.core.LayoutData {
                    /**
                     * <p>Constructor for a new <code>sap.ui.layout.cssgrid.GridItemLayoutData</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new element, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new element.</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumn" data-sap-ui-target="getGridColumn">gridColumn</a>.</p><p>Sets the value for the CSS display:grid item property grid-column</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridColumn</code></p>
                     */
                    getGridColumn(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumnEnd" data-sap-ui-target="getGridColumnEnd">gridColumnEnd</a>.</p><p>Sets the value for the CSS display:grid item property grid-column-end</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridColumnEnd</code></p>
                     */
                    getGridColumnEnd(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumnStart" data-sap-ui-target="getGridColumnStart">gridColumnStart</a>.</p><p>Sets the value for the CSS display:grid item property grid-column-start</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridColumnStart</code></p>
                     */
                    getGridColumnStart(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRow" data-sap-ui-target="getGridRow">gridRow</a>.</p><p>Sets the value for the CSS display:grid item property grid-row</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridRow</code></p>
                     */
                    getGridRow(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRowEnd" data-sap-ui-target="getGridRowEnd">gridRowEnd</a>.</p><p>Sets the value for the CSS display:grid item property grid-row-end</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridRowEnd</code></p>
                     */
                    getGridRowEnd(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRowStart" data-sap-ui-target="getGridRowStart">gridRowStart</a>.</p><p>Sets the value for the CSS display:grid item property grid-row-start</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridLine <p>Value of property <code>gridRowStart</code></p>
                     */
                    getGridRowStart(): sap.ui.layout.cssgrid.CSSGridLine;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumn" data-sap-ui-target="getGridColumn">gridColumn</a>.</p><p>Sets the value for the CSS display:grid item property grid-column</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumn <p>New value for property <code>gridColumn</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridColumn(sGridColumn: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumnEnd" data-sap-ui-target="getGridColumnEnd">gridColumnEnd</a>.</p><p>Sets the value for the CSS display:grid item property grid-column-end</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumnEnd <p>New value for property <code>gridColumnEnd</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridColumnEnd(sGridColumnEnd: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridColumnStart" data-sap-ui-target="getGridColumnStart">gridColumnStart</a>.</p><p>Sets the value for the CSS display:grid item property grid-column-start</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridColumnStart <p>New value for property <code>gridColumnStart</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridColumnStart(sGridColumnStart: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRow" data-sap-ui-target="getGridRow">gridRow</a>.</p><p>Sets the value for the CSS display:grid item property grid-row</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRow <p>New value for property <code>gridRow</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridRow(sGridRow: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRowEnd" data-sap-ui-target="getGridRowEnd">gridRowEnd</a>.</p><p>Sets the value for the CSS display:grid item property grid-row-end</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRowEnd <p>New value for property <code>gridRowEnd</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridRowEnd(sGridRowEnd: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridItemLayoutData/methods/getGridRowStart" data-sap-ui-target="getGridRowStart">gridRowStart</a>.</p><p>Sets the value for the CSS display:grid item property grid-row-start</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridLine} sGridRowStart <p>New value for property <code>gridRowStart</code></p>
                     * @returns sap.ui.layout.cssgrid.GridItemLayoutData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridRowStart(sGridRowStart: sap.ui.layout.cssgrid.CSSGridLine): sap.ui.layout.cssgrid.GridItemLayoutData;
                }
                /**
                 * <p>Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.</p>
                 */
                export abstract class GridLayoutBase extends sap.ui.base.ManagedObject {
                    /**
                     * <p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p><p>This class does not have its own settings, but all settings applicable to the base type <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject</a> can be used.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings</p>
                     * @param {sap.ui.core.Control | HTMLElement} oElement <p>The element or control on which to apply the display:grid styles</p>
                     */
                    protected _applySingleGridLayout(oElement: sap.ui.core.Control | HTMLElement): void;
                    /**
                     * <p>Removes all display:grid styles from the provided HTML element</p>
                     * @param {HTMLElement} oElement <p>The element from which to remove the grid styles</p>
                     */
                    protected _removeGridLayout(oElement: HTMLElement): void;
                    /**
                     * <p>Sets all display:grid styles to the provided HTML element</p>
                     * @param {HTMLElement} oElement <p>The element to which to apply the grid styles</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oGridSettings <p>The grid settings to apply</p>
                     */
                    protected _setGridLayout(oElement: HTMLElement, oGridSettings: sap.ui.layout.cssgrid.GridSettings): void;
                    /**
                     * <p>Apply display:grid styles to the provided array of HTML elements or controls based on the currently active GridSettings</p>
                     * @param {sap.ui.core.Control[] | HTMLElement[]} aElements <p>The elements or controls on which to apply the display:grid styles</p>
                     */
                    applyGridLayout(aElements: sap.ui.core.Control[] | HTMLElement[]): void;
                    /**
                     * <p>Should return sap.ui.layout.cssgrid.GridSettings - The active GridSettings Must be implemented by child classes</p>
                     */
                    getActiveGridSettings(): any;
                    /**
                     * @returns boolean <p>If native grid is supported by the browser</p>
                     */
                    isGridSupportedByBrowser(): boolean;
                    /**
                     * @returns boolean <p>If the Grid Layout is responsive.</p>
                     */
                    isResponsive(): boolean;
                }
                /**
                 * <p>Add handlers for a sap.ui.layout.cssgrid.IGridConfigurable control lifecycle events. Applies the grid layout when necessary. Calls sap.ui.layout.cssgrid.GridLayoutBase hook functions.</p>
                 */
                export class GridLayoutDelegate extends sap.ui.base.Object {
                    /**
                     */
                    constructor();
                }
                /**
                 * <p>Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control. Have to possibility to hold multiple sap.ui.layout.cssgrid.GridSettings and apply the currently active GridSettings.</p>
                 */
                export class GridResponsiveLayout extends sap.ui.layout.cssgrid.GridLayoutBase {
                    /**
                     * <p>Constructor for a new GridResponsiveLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange" data-sap-ui-target="sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange">layoutChange</a> event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself.</p><p>Fired when the currently active GridSettings changes</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachLayoutChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Destroys the layout in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayout(): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Destroys the layoutL in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutL" data-sap-ui-target="getLayoutL">layoutL</a>.</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayoutL(): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Destroys the layoutM in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutM" data-sap-ui-target="getLayoutM">layoutM</a>.</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayoutM(): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Destroys the layoutS in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutS" data-sap-ui-target="getLayoutS">layoutS</a>.</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayoutS(): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Destroys the layoutXL in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutXL" data-sap-ui-target="getLayoutXL">layoutXL</a>.</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayoutXL(): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange" data-sap-ui-target="sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange">layoutChange</a> event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachLayoutChange(fnFunction: Function, oListener: any): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange" data-sap-ui-target="sap.ui.layout.cssgrid.GridResponsiveLayout/events/layoutChange">layoutChange</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireLayoutChange(mParameters?: any): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p><p>The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size</p>
                     * @returns sap.ui.layout.cssgrid.GridSettings 
                     */
                    getLayout(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutL" data-sap-ui-target="getLayoutL">layoutL</a>.</p><p>The sap.ui.layout.cssgrid.GridSettings applied for size "L"</p>
                     * @returns sap.ui.layout.cssgrid.GridSettings 
                     */
                    getLayoutL(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutM" data-sap-ui-target="getLayoutM">layoutM</a>.</p><p>The sap.ui.layout.cssgrid.GridSettings applied for size "M"</p>
                     * @returns sap.ui.layout.cssgrid.GridSettings 
                     */
                    getLayoutM(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutS" data-sap-ui-target="getLayoutS">layoutS</a>.</p><p>The sap.ui.layout.cssgrid.GridSettings applied for size "S"</p>
                     * @returns sap.ui.layout.cssgrid.GridSettings 
                     */
                    getLayoutS(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutXL" data-sap-ui-target="getLayoutXL">layoutXL</a>.</p><p>The sap.ui.layout.cssgrid.GridSettings applied for size "XL"</p>
                     * @returns sap.ui.layout.cssgrid.GridSettings 
                     */
                    getLayoutXL(): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oLayout <p>The layout to set</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayout(oLayout: sap.ui.layout.cssgrid.GridSettings): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutL" data-sap-ui-target="getLayoutL">layoutL</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutL <p>The layoutL to set</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayoutL(oLayoutL: sap.ui.layout.cssgrid.GridSettings): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutM" data-sap-ui-target="getLayoutM">layoutM</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutM <p>The layoutM to set</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayoutM(oLayoutM: sap.ui.layout.cssgrid.GridSettings): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutS" data-sap-ui-target="getLayoutS">layoutS</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutS <p>The layoutS to set</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayoutS(oLayoutS: sap.ui.layout.cssgrid.GridSettings): sap.ui.layout.cssgrid.GridResponsiveLayout;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridResponsiveLayout/methods/getLayoutXL" data-sap-ui-target="getLayoutXL">layoutXL</a>.</p>
                     * @param {sap.ui.layout.cssgrid.GridSettings} oLayoutXL <p>The layoutXL to set</p>
                     * @returns sap.ui.layout.cssgrid.GridResponsiveLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayoutXL(oLayoutXL: sap.ui.layout.cssgrid.GridSettings): sap.ui.layout.cssgrid.GridResponsiveLayout;
                }
                /**
                 * <p>Holds a set of CSS display:grid properties</p>
                 */
                export class GridSettings extends sap.ui.base.ManagedObject {
                    /**
                     * <p>Constructor for a new GridSettings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoColumns" data-sap-ui-target="getGridAutoColumns">gridAutoColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns">MDN web docs: grid-auto-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridAutoColumns</code></p>
                     */
                    getGridAutoColumns(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoFlow" data-sap-ui-target="getGridAutoFlow">gridAutoFlow</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">MDN web docs: grid-auto-flow</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>Row</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridAutoFlow <p>Value of property <code>gridAutoFlow</code></p>
                     */
                    getGridAutoFlow(): sap.ui.layout.cssgrid.CSSGridAutoFlow;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoRows" data-sap-ui-target="getGridAutoRows">gridAutoRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows">MDN web docs: grid-auto-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridAutoRows</code></p>
                     */
                    getGridAutoRows(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridColumnGap" data-sap-ui-target="getGridColumnGap">gridColumnGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap">MDN web docs: grid-column-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>gridColumnGap</code></p>
                     */
                    getGridColumnGap(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridGap" data-sap-ui-target="getGridGap">gridGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap">MDN web docs: grid-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridGapShortHand <p>Value of property <code>gridGap</code></p>
                     */
                    getGridGap(): sap.ui.layout.cssgrid.CSSGridGapShortHand;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridRowGap" data-sap-ui-target="getGridRowGap">gridRowGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap">MDN web docs: grid-row-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>gridRowGap</code></p>
                     */
                    getGridRowGap(): sap.ui.core.CSSSize;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridTemplateColumns" data-sap-ui-target="getGridTemplateColumns">gridTemplateColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns">MDN web docs: grid-template-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridTemplateColumns</code></p>
                     */
                    getGridTemplateColumns(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridTemplateRows" data-sap-ui-target="getGridTemplateRows">gridTemplateRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows">MDN web docs: grid-template-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>Default value is <code>empty string</code>.</p>
                     * @returns sap.ui.layout.cssgrid.CSSGridTrack <p>Value of property <code>gridTemplateRows</code></p>
                     */
                    getGridTemplateRows(): sap.ui.layout.cssgrid.CSSGridTrack;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoColumns" data-sap-ui-target="getGridAutoColumns">gridAutoColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns">MDN web docs: grid-auto-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoColumns <p>New value for property <code>gridAutoColumns</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoColumns(sGridAutoColumns: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoFlow" data-sap-ui-target="getGridAutoFlow">gridAutoFlow</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow">MDN web docs: grid-auto-flow</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Row</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridAutoFlow} sGridAutoFlow <p>New value for property <code>gridAutoFlow</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoFlow(sGridAutoFlow: sap.ui.layout.cssgrid.CSSGridAutoFlow): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridAutoRows" data-sap-ui-target="getGridAutoRows">gridAutoRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows">MDN web docs: grid-auto-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridAutoRows <p>New value for property <code>gridAutoRows</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridAutoRows(sGridAutoRows: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridColumnGap" data-sap-ui-target="getGridColumnGap">gridColumnGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap">MDN web docs: grid-column-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sGridColumnGap <p>New value for property <code>gridColumnGap</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridColumnGap(sGridColumnGap: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridGap" data-sap-ui-target="getGridGap">gridGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap">MDN web docs: grid-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridGapShortHand} sGridGap <p>New value for property <code>gridGap</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridGap(sGridGap: sap.ui.layout.cssgrid.CSSGridGapShortHand): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridRowGap" data-sap-ui-target="getGridRowGap">gridRowGap</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap">MDN web docs: grid-row-gap</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.core.CSSSize} sGridRowGap <p>New value for property <code>gridRowGap</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridRowGap(sGridRowGap: sap.ui.core.CSSSize): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridTemplateColumns" data-sap-ui-target="getGridTemplateColumns">gridTemplateColumns</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns">MDN web docs: grid-template-columns</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateColumns <p>New value for property <code>gridTemplateColumns</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridTemplateColumns(sGridTemplateColumns: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.GridSettings;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.cssgrid.GridSettings/methods/getGridTemplateRows" data-sap-ui-target="getGridTemplateRows">gridTemplateRows</a>.</p><p>Sets the value for the CSS display:grid property <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows">MDN web docs: grid-template-rows</a>
                    <img src="./resources/sap/ui/documentation/sdk/images/link-external.png" 
                    title="Information published on non SAP site" class="sapUISDKExternalLink"/></p><p><b>Note:</b> Not supported in IE11, Edge 15.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                     * @param {sap.ui.layout.cssgrid.CSSGridTrack} sGridTemplateRows <p>New value for property <code>gridTemplateRows</code></p>
                     * @returns sap.ui.layout.cssgrid.GridSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setGridTemplateRows(sGridTemplateRows: sap.ui.layout.cssgrid.CSSGridTrack): sap.ui.layout.cssgrid.GridSettings;
                }
                /**
                 * <p>Defines the functions that need to be implemented by a Control which wants to have display:grid behavior via sap.ui.layout.cssgrid.GridLayoutDelegate</p>
                 */
                export interface IGridConfigurable {
                }
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace layout {
            /**
             */
            namespace form {
                /**
                 * <p>The <code>ColumnLayout</code>-specific layout data for the <code>FormContainer</code> element.</p><p>Depending on its size, the <code>Form</code> control is divided into 1, 2, 3 or 4 columns by the <code>ColumnLayout</code> control. Using <code>ColumnContainerData</code>, the size of the <code>FormContainer</code> element can be influenced.</p>
                 */
                export class ColumnContainerData extends sap.ui.core.LayoutData {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.ColumnContainerData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>Default value is <code>2</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsL <p>Value of property <code>columnsL</code></p>
                     */
                    getColumnsL(): sap.ui.layout.form.ColumnsL;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.</p><p>Default value is <code>1</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsM <p>Value of property <code>columnsM</code></p>
                     */
                    getColumnsM(): sap.ui.layout.form.ColumnsM;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.</p><p>The number of columns for extra-large size must not be smaller than the number of columns for large size.</p><p>Default value is <code>2</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsXL <p>Value of property <code>columnsXL</code></p>
                     */
                    getColumnsXL(): sap.ui.layout.form.ColumnsXL;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsL} sColumnsL <p>New value for property <code>columnsL</code></p>
                     * @returns sap.ui.layout.form.ColumnContainerData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsL(sColumnsL: sap.ui.layout.form.ColumnsL): sap.ui.layout.form.ColumnContainerData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsM} sColumnsM <p>New value for property <code>columnsM</code></p>
                     * @returns sap.ui.layout.form.ColumnContainerData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsM(sColumnsM: sap.ui.layout.form.ColumnsM): sap.ui.layout.form.ColumnContainerData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnContainerData/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.</p><p>The number of columns for extra-large size must not be smaller than the number of columns for large size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsXL} sColumnsXL <p>New value for property <code>columnsXL</code></p>
                     * @returns sap.ui.layout.form.ColumnContainerData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsXL(sColumnsXL: sap.ui.layout.form.ColumnsXL): sap.ui.layout.form.ColumnContainerData;
                }
                /**
                 * <p>The <code>ColumnLayout</code>-specific layout data for the <code>FormElement</code> content fields.</p><p>One <code>FormElement</code> element contains 12 cells and has two sizes, small and large. Using <code>ColumnElementData</code>, the default calculation of the cells used for a field or label can be overwritten.</p>
                 */
                export class ColumnElementData extends sap.ui.core.LayoutData {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.ColumnElementData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnElementData/methods/getCellsLarge" data-sap-ui-target="getCellsLarge">cellsLarge</a>.</p><p>Number of cells used by a field if the <code>FormElement</code> element is large. The label is then beside the fields per default.</p><p>If set to <code>12</code>, the full size of the <code>FormElement</code> element is used.</p><p>Default value is <code>8</code>.</p>
                     * @returns sap.ui.layout.form.ColumnCells <p>Value of property <code>cellsLarge</code></p>
                     */
                    getCellsLarge(): sap.ui.layout.form.ColumnCells;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnElementData/methods/getCellsSmall" data-sap-ui-target="getCellsSmall">cellsSmall</a>.</p><p>Number of cells used by a field if the <code>FormElement</code> element is small. The label is then above the fields per default.</p><p>If set to <code>12</code>, the full size of the <code>FormElement</code> is used.</p><p>Default value is <code>12</code>.</p>
                     * @returns sap.ui.layout.form.ColumnCells <p>Value of property <code>cellsSmall</code></p>
                     */
                    getCellsSmall(): sap.ui.layout.form.ColumnCells;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnElementData/methods/getCellsLarge" data-sap-ui-target="getCellsLarge">cellsLarge</a>.</p><p>Number of cells used by a field if the <code>FormElement</code> element is large. The label is then beside the fields per default.</p><p>If set to <code>12</code>, the full size of the <code>FormElement</code> element is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>8</code>.</p>
                     * @param {sap.ui.layout.form.ColumnCells} sCellsLarge <p>New value for property <code>cellsLarge</code></p>
                     * @returns sap.ui.layout.form.ColumnElementData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setCellsLarge(sCellsLarge: sap.ui.layout.form.ColumnCells): sap.ui.layout.form.ColumnElementData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnElementData/methods/getCellsSmall" data-sap-ui-target="getCellsSmall">cellsSmall</a>.</p><p>Number of cells used by a field if the <code>FormElement</code> element is small. The label is then above the fields per default.</p><p>If set to <code>12</code>, the full size of the <code>FormElement</code> is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {sap.ui.layout.form.ColumnCells} sCellsSmall <p>New value for property <code>cellsSmall</code></p>
                     * @returns sap.ui.layout.form.ColumnElementData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setCellsSmall(sCellsSmall: sap.ui.layout.form.ColumnCells): sap.ui.layout.form.ColumnElementData;
                }
                /**
                 * <p>The <code>ColumnLayout</code> control renders a <code>Form</code> control in a column-based responsive way. Depending on its size, the <code>Form</code> control is divided into one or more columns. (XL - max. 4 columns, L - max. 3 columns, M - max. 2 columns and S - 1 column.)</p><p>The <code>FormContainer</code> elements are spread out to the columns depending on the number of <code>FormContainer</code> elements and their size. For example, if there are 4 columns and 2 <code>FormContainer</code> elements, each <code>FormContainer</code> element will use 2 columns. If there are 3 columns and 2 <code>FormContainer</code> elements, the larger one will use 2 columns, the smaller one 1 column. The size of a <code>FormContainer</code> element will be determined based on the number of visible <code>FormElement</code> elements assigned to it. If there are more <code>FormContainer</code> elements than columns, every <code>FormContainer</code> element uses only one column. So the last row of the <code>Form</code> control will not be fully used.</p><p>The default size of the <code>FormContainer</code> element can be overwritten by using <code>ColumnContainerData</code> as <code>LayoutData</code>. If one <code>FormContainer</code> element has <code>ColumnContainerData</code> set, the size calculation of the other <code>FormContainer</code> elements might not lead to the expected result. In this case, use <code>ColumnContainerData</code> also for the other <code>FormContainer</code> elements.</p><p>The <code>FormElement</code> elements are spread out to the columns of a <code>FormContainer</code> element arranged in a newspaper-like order. The position of the labels and fields depends on the size of the used column. If there is enough space, the labels are beside the fields, otherwise above the fields.</p><p>The default size of a content control of a <code>FormElement</code> element can be overwritten using <code>ColumnElementData</code> as <code>LayoutData</code>. If one control assigned to a <code>FormElement</code> element has <code>ColumnElementData</code> set, the size calculation of the other controls assigned to the <code>FormElement</code> element might not lead to the expected result. In this case, use <code>ColumnElementData</code> for the other controls, assigned to the <code>FormElement</code> element, too.</p><p>The placement of the <code>FormElement</code> elements is made by the browser <code>column-count</code> logic. So this can be different in different browsers and lead in some cases to other results than might be expected.</p><p><b>Note:</b> This control cannot be used stand-alone, it just renders a <code>Form</code> control, so it must be assigned to a <code>Form</code> control using the <code>layout</code> aggregation.</p>
                 */
                export class ColumnLayout extends sap.ui.layout.form.FormLayout {
                    /**
                     * <p>Constructor for a new <code>sap.ui.layout.form.ColumnLayout</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns for large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>Default value is <code>2</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsL <p>Value of property <code>columnsL</code></p>
                     */
                    getColumnsL(): sap.ui.layout.form.ColumnsL;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns for medium size.</p><p>Default value is <code>1</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsM <p>Value of property <code>columnsM</code></p>
                     */
                    getColumnsM(): sap.ui.layout.form.ColumnsM;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns for extra-large size.</p><p>The number of columns for extra-large size must not be smaller than the number of columns for large size.</p><p>Default value is <code>2</code>.</p>
                     * @returns sap.ui.layout.form.ColumnsXL <p>Value of property <code>columnsXL</code></p>
                     */
                    getColumnsXL(): sap.ui.layout.form.ColumnsXL;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getEmptyCellsLarge" data-sap-ui-target="getEmptyCellsLarge">emptyCellsLarge</a>.</p><p>Defines how many cells are empty at the end of a row. This could be used to keep the fields small on large screens.</p><p>Default value is <code>0</code>.</p>
                     * @returns sap.ui.layout.form.EmptyCells <p>Value of property <code>emptyCellsLarge</code></p>
                     */
                    getEmptyCellsLarge(): sap.ui.layout.form.EmptyCells;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getLabelCellsLarge" data-sap-ui-target="getLabelCellsLarge">labelCellsLarge</a>.</p><p>Defines how many cells a label uses if the column is large.</p><p>Default value is <code>4</code>.</p>
                     * @returns sap.ui.layout.form.ColumnCells <p>Value of property <code>labelCellsLarge</code></p>
                     */
                    getLabelCellsLarge(): sap.ui.layout.form.ColumnCells;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns for large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsL} sColumnsL <p>New value for property <code>columnsL</code></p>
                     * @returns sap.ui.layout.form.ColumnLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsL(sColumnsL: sap.ui.layout.form.ColumnsL): sap.ui.layout.form.ColumnLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns for medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsM} sColumnsM <p>New value for property <code>columnsM</code></p>
                     * @returns sap.ui.layout.form.ColumnLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsM(sColumnsM: sap.ui.layout.form.ColumnsM): sap.ui.layout.form.ColumnLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns for extra-large size.</p><p>The number of columns for extra-large size must not be smaller than the number of columns for large size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {sap.ui.layout.form.ColumnsXL} sColumnsXL <p>New value for property <code>columnsXL</code></p>
                     * @returns sap.ui.layout.form.ColumnLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsXL(sColumnsXL: sap.ui.layout.form.ColumnsXL): sap.ui.layout.form.ColumnLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getEmptyCellsLarge" data-sap-ui-target="getEmptyCellsLarge">emptyCellsLarge</a>.</p><p>Defines how many cells are empty at the end of a row. This could be used to keep the fields small on large screens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {sap.ui.layout.form.EmptyCells} sEmptyCellsLarge <p>New value for property <code>emptyCellsLarge</code></p>
                     * @returns sap.ui.layout.form.ColumnLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptyCellsLarge(sEmptyCellsLarge: sap.ui.layout.form.EmptyCells): sap.ui.layout.form.ColumnLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ColumnLayout/methods/getLabelCellsLarge" data-sap-ui-target="getLabelCellsLarge">labelCellsLarge</a>.</p><p>Defines how many cells a label uses if the column is large.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>4</code>.</p>
                     * @param {sap.ui.layout.form.ColumnCells} sLabelCellsLarge <p>New value for property <code>labelCellsLarge</code></p>
                     * @returns sap.ui.layout.form.ColumnLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelCellsLarge(sLabelCellsLarge: sap.ui.layout.form.ColumnCells): sap.ui.layout.form.ColumnLayout;
                }
                /**
                 * <p>A <code>Form</code> control arranges labels and fields (like input fields) into groups and rows. There are different ways to visualize forms for different screen sizes.</p><p>A <code>Form</code> is structured into <code>FormContainers</code>. Each <code>FormContainer</code> consists of <code>FormElements</code>. The <code>FormElements</code> consists of a label and the form fields. A <code>Form</code> doesn't render its content by itself. The rendering is done by the assigned <code>FormLayout</code>. This is so that the rendering can be adopted to new UI requirements without changing the <code>Form</code> itself.</p><p>For the content of a <code>Form</code>, <code>VariantLayoutData</code> are supported to allow simple switching of the <code>FormLayout</code>. <code>LayoutData</code> on the content can be used to overwrite the default layout of the <code>Form</code>.</p><p>The <code>Form</code> (and its sub-controls) automatically add label and field assignment to enable screen reader support. It also adds keyboard support to navigate between the fields and groups inside the form.</p><p><b>Warning:</b> Do not put any layout or other container controls into the <code>FormElement</code>. Views are also not supported. This could damage the visual layout, keyboard support and screen-reader support.</p><p>If editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>, otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues like wrong label alignment or wrong spacing between the controls.</p>
                 */
                export class Form extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.Form.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.layout.form.Form;
                    /**
                     * <p>Adds some formContainer to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p>
                     * @param {sap.ui.layout.form.FormContainer} oFormContainer <p>The formContainer to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addFormContainer(oFormContainer: sap.ui.layout.form.FormContainer): sap.ui.layout.form.Form;
                    /**
                     * <p>Destroys all the formContainers in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyFormContainers(): sap.ui.layout.form.Form;
                    /**
                     * <p>Destroys the layout in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLayout(): sap.ui.layout.form.Form;
                    /**
                     * <p>Destroys the title in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyTitle(): sap.ui.layout.form.Form;
                    /**
                     * <p>Destroys the toolbar in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyToolbar(): sap.ui.layout.form.Form;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.</p><p>The labels inside the form will be rendered by default in the according mode.</p><p><b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.</p><p><b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>editable</code></p>
                     */
                    getEditable(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p><p>Containers with the content of the form. A <code>FormContainer</code> represents a group inside the <code>Form</code>.</p>
                     * @returns sap.ui.layout.form.FormContainer[] 
                     */
                    getFormContainers(): sap.ui.layout.form.FormContainer[];
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p><p>Layout of the <code>Form</code>. The assigned <code>Layout</code> renders the <code>Form</code>. We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>, as its responsiveness allows the available space to be used in the best way possible.</p>
                     * @returns sap.ui.layout.form.FormLayout 
                     */
                    getLayout(): sap.ui.layout.form.FormLayout;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Title of the <code>Form</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element it used, the style of the title can be set.</p><p><b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.</p>
                     * @returns sap.ui.core.Title|string 
                     */
                    getTitle(): sap.ui.core.Title | string;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p><p>Toolbar of the <code>Form</code>.</p><p><b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.</p>
                     * @returns sap.ui.core.Toolbar 
                     */
                    getToolbar(): sap.ui.core.Toolbar;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>Form</code>.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.layout.form.FormContainer} oFormContainer <p>The formContainer whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfFormContainer(oFormContainer: sap.ui.layout.form.FormContainer): number;
                    /**
                     * <p>Inserts a formContainer into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p>
                     * @param {sap.ui.layout.form.FormContainer} oFormContainer <p>The formContainer to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the formContainer should be inserted at; for a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value greater than the current size of the aggregation, the formContainer is inserted at the last position</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertFormContainer(oFormContainer: sap.ui.layout.form.FormContainer, iIndex: number): sap.ui.layout.form.Form;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.layout.form.FormContainer[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllFormContainers(): sap.ui.layout.form.FormContainer[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a formContainer from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getFormContainers" data-sap-ui-target="getFormContainers">formContainers</a>.</p>
                     * @param {number | string | sap.ui.layout.form.FormContainer} vFormContainer <p>The formContainer to remove or its index or id</p>
                     * @returns sap.ui.layout.form.FormContainer <p>The removed formContainer or <code>null</code></p>
                     */
                    removeFormContainer(vFormContainer: number | string | sap.ui.layout.form.FormContainer): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.</p><p>The labels inside the form will be rendered by default in the according mode.</p><p><b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.</p><p><b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEditable(bEditable: boolean): sap.ui.layout.form.Form;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p>
                     * @param {sap.ui.layout.form.FormLayout} oLayout <p>The layout to set</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayout(oLayout: sap.ui.layout.form.FormLayout): sap.ui.layout.form.Form;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @param {sap.ui.core.Title | string} vTitle <p>The title to set</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTitle(vTitle: sap.ui.core.Title | string): sap.ui.layout.form.Form;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @param {sap.ui.core.Toolbar} oToolbar <p>The toolbar to set</p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setToolbar(oToolbar: sap.ui.core.Toolbar): sap.ui.layout.form.Form;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.Form/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>Form</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                     * @returns sap.ui.layout.form.Form <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.form.Form;
                }
                /**
                 * <p>A <code>FormContainer</code> represents a group inside a <code>Form</code>. It consists of <code>FormElements</code>. The rendering of the <code>FormContainer</code> is done by the <code>FormLayout</code> assigned to the <code>Form</code>.</p>
                 */
                export class FormContainer extends sap.ui.core.Element {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.FormContainer.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Adds some formElement to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p>
                     * @param {sap.ui.layout.form.FormElement} oFormElement <p>The formElement to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addFormElement(oFormElement: sap.ui.layout.form.FormElement): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Destroys all the formElements in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyFormElements(): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Destroys the title in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyTitle(): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Destroys the toolbar in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyToolbar(): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getExpandable" data-sap-ui-target="getExpandable">expandable</a>.</p><p>Defines if the <code>FormContainer</code> is expandable.</p><p><b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>expandable</code></p>
                     */
                    getExpandable(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Container is expanded.</p><p><b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>expanded</code></p>
                     */
                    getExpanded(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p><p>The <code>FormElements</code> contain the content (labels and fields) of the <code>FormContainers</code>.</p>
                     * @returns sap.ui.layout.form.FormElement[] 
                     */
                    getFormElements(): sap.ui.layout.form.FormElement[];
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Title of the <code>FormContainer</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element is used, the style of the title can be set.</p><p><b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.</p>
                     * @returns sap.ui.core.Title|string 
                     */
                    getTitle(): sap.ui.core.Title | string;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p><p>Toolbar of the <code>FormContainer</code>.</p><p><b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.</p>
                     * @returns sap.ui.core.Toolbar 
                     */
                    getToolbar(): sap.ui.core.Toolbar;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>If set to <code>false</code>, the <code>FormContainer</code> is not rendered.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>visible</code></p>
                     */
                    getVisible(): boolean;
                    /**
                     * <p>Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.layout.form.FormElement} oFormElement <p>The formElement whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfFormElement(oFormElement: sap.ui.layout.form.FormElement): number;
                    /**
                     * <p>Inserts a formElement into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p>
                     * @param {sap.ui.layout.form.FormElement} oFormElement <p>The formElement to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the formElement should be inserted at; for a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value greater than the current size of the aggregation, the formElement is inserted at the last position</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertFormElement(oFormElement: sap.ui.layout.form.FormElement, iIndex: number): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Determines if the <code>FormContainer</code> is visible or not. Per default it just returns the value of the <code>visible</code> property. But this might be overwritten by inherited elements.</p><p>For rendering by <code>FormLayouts</code> this function has to be used instead of <code>getVisible</code>.</p>
                     * @returns boolean <p>If true, the <code>FormContainer</code> is visible, otherwise not</p>
                     */
                    isVisible(): boolean;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.layout.form.FormElement[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllFormElements(): sap.ui.layout.form.FormElement[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a formElement from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getFormElements" data-sap-ui-target="getFormElements">formElements</a>.</p>
                     * @param {number | string | sap.ui.layout.form.FormElement} vFormElement <p>The formElement to remove or its index or id</p>
                     * @returns sap.ui.layout.form.FormElement <p>The removed formElement or <code>null</code></p>
                     */
                    removeFormElement(vFormElement: number | string | sap.ui.layout.form.FormElement): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getExpandable" data-sap-ui-target="getExpandable">expandable</a>.</p><p>Defines if the <code>FormContainer</code> is expandable.</p><p><b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bExpandable <p>New value for property <code>expandable</code></p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setExpandable(bExpandable: boolean): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getExpanded" data-sap-ui-target="getExpanded">expanded</a>.</p><p>Container is expanded.</p><p><b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bExpanded <p>New value for property <code>expanded</code></p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setExpanded(bExpanded: boolean): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @param {sap.ui.core.Title | string} vTitle <p>The title to set</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTitle(vTitle: sap.ui.core.Title | string): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @param {sap.ui.core.Toolbar} oToolbar <p>The toolbar to set</p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setToolbar(oToolbar: sap.ui.core.Toolbar): sap.ui.layout.form.FormContainer;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormContainer/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>If set to <code>false</code>, the <code>FormContainer</code> is not rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                     * @returns sap.ui.layout.form.FormContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVisible(bVisible: boolean): sap.ui.layout.form.FormContainer;
                }
                /**
                 * <p>A <code>FormElement</code> represents a row in a <code>FormContainer</code>. A <code>FormElement</code> is a combination of one label and different controls associated to this label.</p>
                 */
                export class FormElement extends sap.ui.core.Element {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.FormElement.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some field to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p>
                     * @param {sap.ui.core.Control} oField <p>The field to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addField(oField: sap.ui.core.Control): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Destroys all the fields in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyFields(): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Destroys the label in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyLabel(): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p><p>Form controls that belong together to be displayed in one row of a <code>Form</code>.</p><p><b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not supported. Allowed controls implement the interface <code>sap.ui.core.IFormContent</code>.</p>
                     * @returns sap.ui.core.Control[] 
                     */
                    getFields(): sap.ui.core.Control[];
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p><p>Label of the fields. Can either be a <code>Label</code> control or a string. If a <code>Label</code> control is used, the properties of the <code>Label</code> can be set. If no assignment between <code>Label</code> and the fields is set via (<code>labelFor</code> property of the <code>Label</code>), it will be done automatically by the <code>FormElement</code>. In this case the <code>Label</code> is assigned to the fields of the <code>FormElement</code>.</p>
                     * @returns sap.ui.core.Label|string 
                     */
                    getLabel(): sap.ui.core.Label | string;
                    /**
                     * <p>Returns the <code>Label</code> of the <code>FormElement</code>, even if the <code>Label</code> is assigned as string. The <code>FormLayout</code> needs the information of the label to render the <code>Form</code>.</p>
                     * @returns sap.ui.core.Label <p><code>Label</code> control used to render the label</p>
                     */
                    getLabelControl(): sap.ui.core.Label;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>If set to <code>false</code>, the <code>FormElement</code> is not rendered.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>visible</code></p>
                     */
                    getVisible(): boolean;
                    /**
                     * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.core.Control} oField <p>The field whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfField(oField: sap.ui.core.Control): number;
                    /**
                     * <p>Inserts a field into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p>
                     * @param {sap.ui.core.Control} oField <p>The field to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the field should be inserted at; for a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value greater than the current size of the aggregation, the field is inserted at the last position</p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertField(oField: sap.ui.core.Control, iIndex: number): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Determines if the <code>FormElement</code> is visible or not. Per default it just returns the value of the <code>visible</code> property. But this might be overwritten by inherited elements.</p><p>For rendering by <code>FormLayouts</code> this function has to be used instead of <code>getVisible</code>.</p>
                     * @returns boolean <p>If true, the <code>FormElement</code> is visible, otherwise not</p>
                     */
                    isVisible(): boolean;
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllFields(): sap.ui.core.Control[];
                    /**
                     * <p>Removes a field from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getFields" data-sap-ui-target="getFields">fields</a>.</p>
                     * @param {number | string | sap.ui.core.Control} vField <p>The field to remove or its index or id</p>
                     * @returns sap.ui.core.Control <p>The removed field or <code>null</code></p>
                     */
                    removeField(vField: number | string | sap.ui.core.Control): sap.ui.core.Control;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p>
                     * @param {sap.ui.core.Label | string} vLabel <p>The label to set</p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabel(vLabel: sap.ui.core.Label | string): sap.ui.layout.form.FormElement;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormElement/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>If set to <code>false</code>, the <code>FormElement</code> is not rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                     * @returns sap.ui.layout.form.FormElement <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVisible(bVisible: boolean): sap.ui.layout.form.FormElement;
                }
                /**
                 * <p>Base layout to render a <code>Form</code>. Other layouts to render a <code>Form</code> must inherit from this one.</p><p><b>Note:</b> This control must not be used to render a <code>Form</code> in productive applications as it does not fulfill any design guidelines and usability standards.</p>
                 */
                export class FormLayout extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.FormLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormLayout/methods/getBackgroundDesign" data-sap-ui-target="getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the <code>Form</code> content.</p><p><b>Note:</b> The visualization of the different options depends on the theme used.</p><p>Default value is <code>Translucent</code>.</p>
                     * @returns sap.ui.layout.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
                     */
                    getBackgroundDesign(): sap.ui.layout.BackgroundDesign;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.FormLayout/methods/getBackgroundDesign" data-sap-ui-target="getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the <code>Form</code> content.</p><p><b>Note:</b> The visualization of the different options depends on the theme used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Translucent</code>.</p>
                     * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
                     * @returns sap.ui.layout.form.FormLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBackgroundDesign(sBackgroundDesign: sap.ui.layout.BackgroundDesign): sap.ui.layout.form.FormLayout;
                }
                /**
                 * <p>The <code>GridLayout</code>-specific layout data for <code>FormContainers</code>.</p>
                 */
                export class GridContainerData extends sap.ui.core.LayoutData {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.GridContainerData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridContainerData/methods/getHalfGrid" data-sap-ui-target="getHalfGrid">halfGrid</a>.</p><p>If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells). If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>halfGrid</code></p>
                     */
                    getHalfGrid(): boolean;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridContainerData/methods/getHalfGrid" data-sap-ui-target="getHalfGrid">halfGrid</a>.</p><p>If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells). If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bHalfGrid <p>New value for property <code>halfGrid</code></p>
                     * @returns sap.ui.layout.form.GridContainerData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHalfGrid(bHalfGrid: boolean): sap.ui.layout.form.GridContainerData;
                }
                /**
                 * <p>The <code>GridLayout</code>-specific layout data for <code>FormElement</code> fields.</p>
                 */
                export class GridElementData extends sap.ui.core.LayoutData {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.GridElementData.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridElementData/methods/getHCells" data-sap-ui-target="getHCells">hCells</a>.</p><p>Number of cells in horizontal direction.</p><p>If set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.</p><p>If set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.</p><p><b>Note:</b> For labels, the full size setting has no effect.</p><p>Default value is <code>auto</code>.</p>
                     * @returns sap.ui.layout.form.GridElementCells <p>Value of property <code>hCells</code></p>
                     */
                    getHCells(): sap.ui.layout.form.GridElementCells;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridElementData/methods/getVCells" data-sap-ui-target="getVCells">vCells</a>.</p><p>Number of cells in vertical direction.</p><p><b>Note:</b> This property has no effect on labels.</p><p>Default value is <code>1</code>.</p>
                     * @returns number <p>Value of property <code>vCells</code></p>
                     */
                    getVCells(): number;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridElementData/methods/getHCells" data-sap-ui-target="getHCells">hCells</a>.</p><p>Number of cells in horizontal direction.</p><p>If set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.</p><p>If set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.</p><p><b>Note:</b> For labels, the full size setting has no effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
                     * @param {sap.ui.layout.form.GridElementCells} sHCells <p>New value for property <code>hCells</code></p>
                     * @returns sap.ui.layout.form.GridElementData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setHCells(sHCells: sap.ui.layout.form.GridElementCells): sap.ui.layout.form.GridElementData;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridElementData/methods/getVCells" data-sap-ui-target="getVCells">vCells</a>.</p><p>Number of cells in vertical direction.</p><p><b>Note:</b> This property has no effect on labels.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                     * @param {number} iVCells <p>New value for property <code>vCells</code></p>
                     * @returns sap.ui.layout.form.GridElementData <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVCells(iVCells: number): sap.ui.layout.form.GridElementData;
                }
                /**
                 * <p>This <code>FormLayout</code> renders a <code>Form</code> using an HTML-table based grid. This can be a 16 column grid or an 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or widths of the <code>Form</code>. Only the width of the single grid columns depends on the available width.</p><p>To adjust the appearance inside the <code>GridLayout</code>, you can use <code>GridContainerData</code> for <code>FormContainers</code> and <code>GridElementData</code> for content fields.</p><p><b>Note:</b> If content fields have a <code>width</code> property this will be ignored, as the width of the controls is set by the grid cells.</p><p>This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.</p>
                 */
                export class GridLayout extends sap.ui.layout.form.FormLayout {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.GridLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridLayout/methods/getSingleColumn" data-sap-ui-target="getSingleColumn">singleColumn</a>.</p><p>If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.</p><p>If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>singleColumn</code></p>
                     */
                    getSingleColumn(): boolean;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.GridLayout/methods/getSingleColumn" data-sap-ui-target="getSingleColumn">singleColumn</a>.</p><p>If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.</p><p>If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bSingleColumn <p>New value for property <code>singleColumn</code></p>
                     * @returns sap.ui.layout.form.GridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleColumn(bSingleColumn: boolean): sap.ui.layout.form.GridLayout;
                }
                /**
                 * <p>The <code>ResponsiveGridLayout</code> control renders a <code>Form</code> using a responsive grid. Internally the <code>Grid</code> control is used for rendering. Using this layout, the <code>Form</code> is rendered in a responsive way. Depending on the available space, the <code>FormContainers</code> are rendered in one or different columns and the labels are rendered in the same row as the fields or above the fields. This behavior can be influenced by the properties of this layout control.</p><p>On the <code>FormContainers</code>, labels and content fields, <code>GridData</code> can be used to change the default rendering. <code>GridData</code> is not supported for <code>FormElements</code>.</p><p><b>Note:</b> If <code>GridData</code> is used, this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result. In such cases, <code>GridData</code> should be used for all content controls to disable the default behavior.</p><p>This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.</p>
                 */
                export class ResponsiveGridLayout extends sap.ui.layout.form.FormLayout {
                    /**
                     * <p>Constructor for a new <code>sap.ui.layout.form.ResponsiveGridLayout</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getAdjustLabelSpan" data-sap-ui-target="getAdjustLabelSpan">adjustLabelSpan</a>.</p><p>If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own <code>Grid</code> inside).</p><p>If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>adjustLabelSpan</code></p>
                     */
                    getAdjustLabelSpan(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointL" data-sap-ui-target="getBreakpointL">breakpointL</a>.</p><p>Breakpoint (in pixel) between Medium size and Large size.</p><p>Default value is <code>1024</code>.</p>
                     * @returns number <p>Value of property <code>breakpointL</code></p>
                     */
                    getBreakpointL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointM" data-sap-ui-target="getBreakpointM">breakpointM</a>.</p><p>Breakpoint (in pixel) between Small size and Medium size.</p><p>Default value is <code>600</code>.</p>
                     * @returns number <p>Value of property <code>breakpointM</code></p>
                     */
                    getBreakpointM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointXL" data-sap-ui-target="getBreakpointXL">breakpointXL</a>.</p><p>Breakpoint (in pixel) between large size and extra large (XL) size.</p><p>Default value is <code>1440</code>.</p>
                     * @returns number <p>Value of property <code>breakpointXL</code></p>
                     */
                    getBreakpointXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns for large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>Default value is <code>2</code>.</p>
                     * @returns number <p>Value of property <code>columnsL</code></p>
                     */
                    getColumnsL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns for medium size.</p><p>Default value is <code>1</code>.</p>
                     * @returns number <p>Value of property <code>columnsM</code></p>
                     */
                    getColumnsM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns for extra large size.</p><p>The number of columns for extra large size must not be smaller than the number of columns for large size. <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>columnsXL</code></p>
                     */
                    getColumnsXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanL" data-sap-ui-target="getEmptySpanL">emptySpanL</a>.</p><p>Number of grid cells that are empty at the end of each line on large size.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanL</code></p>
                     */
                    getEmptySpanL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanM" data-sap-ui-target="getEmptySpanM">emptySpanM</a>.</p><p>Number of grid cells that are empty at the end of each line on medium size.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanM</code></p>
                     */
                    getEmptySpanM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanS" data-sap-ui-target="getEmptySpanS">emptySpanS</a>.</p><p>Number of grid cells that are empty at the end of each line on small size.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanS</code></p>
                     */
                    getEmptySpanS(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanXL" data-sap-ui-target="getEmptySpanXL">emptySpanXL</a>.</p><p>Number of grid cells that are empty at the end of each line on extra large size.</p><p><b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanXL</code></p>
                     */
                    getEmptySpanXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanL" data-sap-ui-target="getLabelSpanL">labelSpanL</a>.</p><p>Default span for labels in large size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.</p><p>Default value is <code>4</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanL</code></p>
                     */
                    getLabelSpanL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanM" data-sap-ui-target="getLabelSpanM">labelSpanM</a>.</p><p>Default span for labels in medium size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.</p><p>Default value is <code>2</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanM</code></p>
                     */
                    getLabelSpanM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanS" data-sap-ui-target="getLabelSpanS">labelSpanS</a>.</p><p>Default span for labels in small size.</p><p>Default value is <code>12</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanS</code></p>
                     */
                    getLabelSpanS(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanXL" data-sap-ui-target="getLabelSpanXL">labelSpanXL</a>.</p><p>Default span for labels in extra large size.</p><p><b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanXL</code></p>
                     */
                    getLabelSpanXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getSingleContainerFullSize" data-sap-ui-target="getSingleContainerFullSize">singleContainerFullSize</a>.</p><p>If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.</p><p>In all other cases the <code>FormContainer</code> is displayed in the size of one column.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>singleContainerFullSize</code></p>
                     */
                    getSingleContainerFullSize(): boolean;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getAdjustLabelSpan" data-sap-ui-target="getAdjustLabelSpan">adjustLabelSpan</a>.</p><p>If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own <code>Grid</code> inside).</p><p>If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bAdjustLabelSpan <p>New value for property <code>adjustLabelSpan</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAdjustLabelSpan(bAdjustLabelSpan: boolean): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointL" data-sap-ui-target="getBreakpointL">breakpointL</a>.</p><p>Breakpoint (in pixel) between Medium size and Large size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1024</code>.</p>
                     * @param {number} iBreakpointL <p>New value for property <code>breakpointL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointL(iBreakpointL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointM" data-sap-ui-target="getBreakpointM">breakpointM</a>.</p><p>Breakpoint (in pixel) between Small size and Medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>600</code>.</p>
                     * @param {number} iBreakpointM <p>New value for property <code>breakpointM</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointM(iBreakpointM: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getBreakpointXL" data-sap-ui-target="getBreakpointXL">breakpointXL</a>.</p><p>Breakpoint (in pixel) between large size and extra large (XL) size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1440</code>.</p>
                     * @param {number} iBreakpointXL <p>New value for property <code>breakpointXL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointXL(iBreakpointXL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Number of columns for large size.</p><p>The number of columns for large size must not be smaller than the number of columns for medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {number} iColumnsL <p>New value for property <code>columnsL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsL(iColumnsL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Number of columns for medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                     * @param {number} iColumnsM <p>New value for property <code>columnsM</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsM(iColumnsM: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Number of columns for extra large size.</p><p>The number of columns for extra large size must not be smaller than the number of columns for large size. <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iColumnsXL <p>New value for property <code>columnsXL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsXL(iColumnsXL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanL" data-sap-ui-target="getEmptySpanL">emptySpanL</a>.</p><p>Number of grid cells that are empty at the end of each line on large size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanL <p>New value for property <code>emptySpanL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanL(iEmptySpanL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanM" data-sap-ui-target="getEmptySpanM">emptySpanM</a>.</p><p>Number of grid cells that are empty at the end of each line on medium size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanM <p>New value for property <code>emptySpanM</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanM(iEmptySpanM: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanS" data-sap-ui-target="getEmptySpanS">emptySpanS</a>.</p><p>Number of grid cells that are empty at the end of each line on small size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanS <p>New value for property <code>emptySpanS</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanS(iEmptySpanS: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getEmptySpanXL" data-sap-ui-target="getEmptySpanXL">emptySpanXL</a>.</p><p>Number of grid cells that are empty at the end of each line on extra large size.</p><p><b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iEmptySpanXL <p>New value for property <code>emptySpanXL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanXL(iEmptySpanXL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanL" data-sap-ui-target="getLabelSpanL">labelSpanL</a>.</p><p>Default span for labels in large size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>4</code>.</p>
                     * @param {number} iLabelSpanL <p>New value for property <code>labelSpanL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanL(iLabelSpanL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanM" data-sap-ui-target="getLabelSpanM">labelSpanM</a>.</p><p>Default span for labels in medium size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {number} iLabelSpanM <p>New value for property <code>labelSpanM</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanM(iLabelSpanM: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanS" data-sap-ui-target="getLabelSpanS">labelSpanS</a>.</p><p>Default span for labels in small size.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {number} iLabelSpanS <p>New value for property <code>labelSpanS</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanS(iLabelSpanS: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getLabelSpanXL" data-sap-ui-target="getLabelSpanXL">labelSpanXL</a>.</p><p>Default span for labels in extra large size.</p><p><b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iLabelSpanXL <p>New value for property <code>labelSpanXL</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanXL(iLabelSpanXL: number): sap.ui.layout.form.ResponsiveGridLayout;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.ResponsiveGridLayout/methods/getSingleContainerFullSize" data-sap-ui-target="getSingleContainerFullSize">singleContainerFullSize</a>.</p><p>If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.</p><p>In all other cases the <code>FormContainer</code> is displayed in the size of one column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bSingleContainerFullSize <p>New value for property <code>singleContainerFullSize</code></p>
                     * @returns sap.ui.layout.form.ResponsiveGridLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleContainerFullSize(bSingleContainerFullSize: boolean): sap.ui.layout.form.ResponsiveGridLayout;
                }
                /**
                 * <p>The <code>ResponsiveLayout</code> renders a <code>Form</code> with a responsive layout. Internally the <code>ResponsiveFlowLayout</code> is used. The responsiveness of this layout tries to best use the available space. This means that the order of the <code>FormContainers</code>, labels and fields depends on the available space.</p><p>On the <code>FormContainers</code>, <code>FormElements</code>, labels and content fields, <code>ResponsiveFlowLayoutData</code> can be used to change the default rendering.</p><p>We suggest using the <code>ResponsiveGridLayout</code> instead of this layout because this is easier to consume and brings more stable responsive output.</p><p><b>Note:</b> If <code>ResponsiveFlowLayoutData</code> are used this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result. In such cases, <code>ResponsiveFlowLayoutData</code> should be used for all content controls to disable the default behavior.</p><p>This control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.</p>
                 */
                export class ResponsiveLayout extends sap.ui.layout.form.FormLayout {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.ResponsiveLayout.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                }
                /**
                 * <p>The <code>SimpleForm</code> provides an easy-to-use API to create simple forms. Inside a <code>SimpleForm</code>, a <code>Form</code> control is created along with its <code>FormContainers</code> and <code>FormElements</code>, but the complexity in the API is removed. <ul> <li>A new <code>Title</code> or <code>Toolbar</code> starts a new group (<code>FormContainer</code>) in the form.</li> <li>A new <code>Label</code> starts a new row (<code>FormElement</code>) in the form.</li> <li>All other controls will be assigned to the row (<code>FormElement</code>) that started with the last label.</li> </ul> Use <code>LayoutData</code> to influence the layout for special cases in the Input/Display controls.</p><p><b>Note:</b> If a more complex form is needed, use <code>Form</code> instead.</p>
                 */
                export class SimpleForm extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new sap.ui.layout.form.SimpleForm.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                     * @param {sap.ui.core.Element} oContent <p>The content to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addContent(oContent: sap.ui.core.Element): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyContent(): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Destroys the title in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyTitle(): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Destroys the toolbar in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyToolbar(): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAdjustLabelSpan" data-sap-ui-target="getAdjustLabelSpan">adjustLabelSpan</a>.</p><p>If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own grid inside).</p><p>If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>adjustLabelSpan</code></p>
                     */
                    getAdjustLabelSpan(): boolean;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBackgroundDesign" data-sap-ui-target="getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the <code>SimpleForm</code> content.</p><p>The visualization of the different options depends on the used theme.</p><p>Default value is <code>Translucent</code>.</p>
                     * @returns sap.ui.layout.BackgroundDesign <p>Value of property <code>backgroundDesign</code></p>
                     */
                    getBackgroundDesign(): sap.ui.layout.BackgroundDesign;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointL" data-sap-ui-target="getBreakpointL">breakpointL</a>.</p><p>Breakpoint between Medium size and Large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>1024</code>.</p>
                     * @returns number <p>Value of property <code>breakpointL</code></p>
                     */
                    getBreakpointL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointM" data-sap-ui-target="getBreakpointM">breakpointM</a>.</p><p>Breakpoint between Small size and Medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>600</code>.</p>
                     * @returns number <p>Value of property <code>breakpointM</code></p>
                     */
                    getBreakpointM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointXL" data-sap-ui-target="getBreakpointXL">breakpointXL</a>.</p><p>Breakpoint between Medium size and Large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>1440</code>.</p>
                     * @returns number <p>Value of property <code>breakpointXL</code></p>
                     */
                    getBreakpointXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.</p><p>Default value is <code>2</code>.</p>
                     * @returns number <p>Value of property <code>columnsL</code></p>
                     */
                    getColumnsL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Form columns for medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.</p><p>Default value is <code>1</code>.</p>
                     * @returns number <p>Value of property <code>columnsM</code></p>
                     */
                    getColumnsM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>columnsXL</code></p>
                     */
                    getColumnsXL(): number;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content of the form is structured in the following way: <ul> <li>Add a <code>Title</code> or <code>Toolbar</code> control to start a new group (<code>FormContainer</code>).</li> <li>Add a <code>Label</code> control to start a new row (<code>FormElement</code>).</li> <li>Add controls as input fields, text fields or other as needed.</li> <li>Use <code>LayoutData</code> to influence the layout for special cases in the single controls. For example, if a <code>ResponsiveLayout</code> is used as a layout, the form content is weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls should influence their width, you can add <code>sap.ui.layout.ResponsiveFlowLayoutData</code> to them via <code>setLayoutData</code> method. Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more than 5, as this is the total width of the input control part of each form row.</li> </ul> Example for a row where the <code>Input</code> weight 4 and the second <code>Input</code> weight 1 (using <code>ResponsiveLayout</code>): <pre>
                    new sap.m.Label({text:"Label"});
                    new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
                    new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
                    </pre></p><p>For example, if a <code>ResponsiveGridLayout</code> is used as a layout, there are 12 cells in one row. Depending on the screen size the labels use the defined <code>labelSpan</code>. The remaining cells are used for the fields (and <code>emptySpan</code> if defined). The available cells are distributed to all fields in the row. If one field should use a fixed number of cells you can add <code>sap.ui.layout.GridData</code> to them via <code>setLayoutData</code> method. If there are additional fields in the row they will get the remaining cells. </ul> Example for a row with two <code>Input</code> controls where one uses four cells on small screens, one cell on medium screens and 2 cells on larger screens (using <code>ResponsiveGridLayout</code>): <pre>
                    new sap.m.Label({text:"Label"});
                    new sap.m.Input({value:"auto size"}),
                    new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
                    </pre></p><p><b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are allowed. Views are also not supported. Allowed form controls implement the interface <code>sap.ui.core.IFormContent</code>.</p><p>If editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>, otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues like wrong label alignment or wrong spacing between the controls.</p>
                     * @returns sap.ui.core.Element[] 
                     */
                    getContent(): sap.ui.core.Element[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.</p><p>The labels inside the form will be rendered by default in the according mode.</p><p><b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.</p><p><b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.</p>
                     * @returns boolean <p>Value of property <code>editable</code></p>
                     */
                    getEditable(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanL" data-sap-ui-target="getEmptySpanL">emptySpanL</a>.</p><p>Number of grid cells that are empty at the end of each line on large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanL</code></p>
                     */
                    getEmptySpanL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanM" data-sap-ui-target="getEmptySpanM">emptySpanM</a>.</p><p>Number of grid cells that are empty at the end of each line on medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanM</code></p>
                     */
                    getEmptySpanM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanS" data-sap-ui-target="getEmptySpanS">emptySpanS</a>.</p><p>Number of grid cells that are empty at the end of each line on small size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanS</code></p>
                     */
                    getEmptySpanS(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanXL" data-sap-ui-target="getEmptySpanXL">emptySpanXL</a>.</p><p>Number of grid cells that are empty at the end of each line on extra large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>emptySpanXL</code></p>
                     */
                    getEmptySpanXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelMinWidth" data-sap-ui-target="getLabelMinWidth">labelMinWidth</a>.</p><p>Specifies the min-width in pixels of the label in all form rows.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.</p><p>Default value is <code>192</code>.</p>
                     * @returns number <p>Value of property <code>labelMinWidth</code></p>
                     */
                    getLabelMinWidth(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanL" data-sap-ui-target="getLabelSpanL">labelSpanL</a>.</p><p>Default span for labels in large size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.</p><p><b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.</p><p>Default value is <code>4</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanL</code></p>
                     */
                    getLabelSpanL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanM" data-sap-ui-target="getLabelSpanM">labelSpanM</a>.</p><p>Default span for labels in medium size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>2</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanM</code></p>
                     */
                    getLabelSpanM(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanS" data-sap-ui-target="getLabelSpanS">labelSpanS</a>.</p><p>Default span for labels in small size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>12</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanS</code></p>
                     */
                    getLabelSpanS(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanXL" data-sap-ui-target="getLabelSpanXL">labelSpanXL</a>.</p><p>Default span for labels in extra large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>labelSpanXL</code></p>
                     */
                    getLabelSpanXL(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p><p>The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.</p><p>We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.</p><p><b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.</p><p>Default value is <code>ResponsiveLayout</code>.</p>
                     * @returns sap.ui.layout.form.SimpleFormLayout <p>Value of property <code>layout</code></p>
                     */
                    getLayout(): sap.ui.layout.form.SimpleFormLayout;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getMaxContainerCols" data-sap-ui-target="getMaxContainerCols">maxContainerCols</a>.</p><p>The maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.</p><p><b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a <code>layout</code>, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.</p><p>Default value is <code>2</code>.</p>
                     * @returns number <p>Value of property <code>maxContainerCols</code></p>
                     */
                    getMaxContainerCols(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>The overall minimum width in pixels that is used for the <code>SimpleForm</code>.</p><p>If the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>FormContainer</code>). The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until <code>maxContainerCols</code> is reached, irrespective of whether a <code>width</code> is reached or the available parents width is reached.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>minWidth</code></p>
                     */
                    getMinWidth(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getSingleContainerFullSize" data-sap-ui-target="getSingleContainerFullSize">singleContainerFullSize</a>.</p><p>If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.</p><p>In all other cases the <code>FormContainer</code> is displayed in the size of one column.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>singleContainerFullSize</code></p>
                     */
                    getSingleContainerFullSize(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Title element of the <code>SimpleForm</code>. Can either be a <code>Title</code> element, or a string.</p>
                     * @returns sap.ui.core.Title|string 
                     */
                    getTitle(): sap.ui.core.Title | string;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p><p>Toolbar of the <code>SimpleForm</code>.</p><p><b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.</p>
                     * @returns sap.ui.core.Toolbar 
                     */
                    getToolbar(): sap.ui.core.Toolbar;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the form.</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Checks for the provided <code>sap.ui.core.Element</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.core.Element} oContent <p>The content whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfContent(oContent: sap.ui.core.Element): number;
                    /**
                     * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                     * @param {sap.ui.core.Element} oContent <p>The content to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertContent(oContent: sap.ui.core.Element, iIndex: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.core.Element[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllContent(): sap.ui.core.Element[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                     * @param {number | string | sap.ui.core.Element} vContent <p>The content to remove or its index or id</p>
                     * @returns sap.ui.core.Element <p>The removed content or <code>null</code></p>
                     */
                    removeContent(vContent: number | string | sap.ui.core.Element): sap.ui.core.Element;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getAdjustLabelSpan" data-sap-ui-target="getAdjustLabelSpan">adjustLabelSpan</a>.</p><p>If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own grid inside).</p><p>If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bAdjustLabelSpan <p>New value for property <code>adjustLabelSpan</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAdjustLabelSpan(bAdjustLabelSpan: boolean): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBackgroundDesign" data-sap-ui-target="getBackgroundDesign">backgroundDesign</a>.</p><p>Specifies the background color of the <code>SimpleForm</code> content.</p><p>The visualization of the different options depends on the used theme.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Translucent</code>.</p>
                     * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign <p>New value for property <code>backgroundDesign</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBackgroundDesign(sBackgroundDesign: sap.ui.layout.BackgroundDesign): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointL" data-sap-ui-target="getBreakpointL">breakpointL</a>.</p><p>Breakpoint between Medium size and Large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1024</code>.</p>
                     * @param {number} iBreakpointL <p>New value for property <code>breakpointL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointL(iBreakpointL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointM" data-sap-ui-target="getBreakpointM">breakpointM</a>.</p><p>Breakpoint between Small size and Medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>600</code>.</p>
                     * @param {number} iBreakpointM <p>New value for property <code>breakpointM</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointM(iBreakpointM: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getBreakpointXL" data-sap-ui-target="getBreakpointXL">breakpointXL</a>.</p><p>Breakpoint between Medium size and Large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1440</code>.</p>
                     * @param {number} iBreakpointXL <p>New value for property <code>breakpointXL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setBreakpointXL(iBreakpointXL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsL" data-sap-ui-target="getColumnsL">columnsL</a>.</p><p>Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {number} iColumnsL <p>New value for property <code>columnsL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsL(iColumnsL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsM" data-sap-ui-target="getColumnsM">columnsM</a>.</p><p>Form columns for medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                     * @param {number} iColumnsM <p>New value for property <code>columnsM</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsM(iColumnsM: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getColumnsXL" data-sap-ui-target="getColumnsXL">columnsXL</a>.</p><p>Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iColumnsXL <p>New value for property <code>columnsXL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumnsXL(iColumnsXL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.</p><p>The labels inside the form will be rendered by default in the according mode.</p><p><b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.</p><p><b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEditable(bEditable: boolean): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanL" data-sap-ui-target="getEmptySpanL">emptySpanL</a>.</p><p>Number of grid cells that are empty at the end of each line on large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanL <p>New value for property <code>emptySpanL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanL(iEmptySpanL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanM" data-sap-ui-target="getEmptySpanM">emptySpanM</a>.</p><p>Number of grid cells that are empty at the end of each line on medium size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanM <p>New value for property <code>emptySpanM</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanM(iEmptySpanM: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanS" data-sap-ui-target="getEmptySpanS">emptySpanS</a>.</p><p>Number of grid cells that are empty at the end of each line on small size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iEmptySpanS <p>New value for property <code>emptySpanS</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanS(iEmptySpanS: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getEmptySpanXL" data-sap-ui-target="getEmptySpanXL">emptySpanXL</a>.</p><p>Number of grid cells that are empty at the end of each line on extra large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iEmptySpanXL <p>New value for property <code>emptySpanXL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEmptySpanXL(iEmptySpanXL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelMinWidth" data-sap-ui-target="getLabelMinWidth">labelMinWidth</a>.</p><p>Specifies the min-width in pixels of the label in all form rows.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>192</code>.</p>
                     * @param {number} iLabelMinWidth <p>New value for property <code>labelMinWidth</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelMinWidth(iLabelMinWidth: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanL" data-sap-ui-target="getLabelSpanL">labelSpanL</a>.</p><p>Default span for labels in large size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.</p><p><b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>4</code>.</p>
                     * @param {number} iLabelSpanL <p>New value for property <code>labelSpanL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanL(iLabelSpanL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanM" data-sap-ui-target="getLabelSpanM">labelSpanM</a>.</p><p>Default span for labels in medium size.</p><p><b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {number} iLabelSpanM <p>New value for property <code>labelSpanM</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanM(iLabelSpanM: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanS" data-sap-ui-target="getLabelSpanS">labelSpanS</a>.</p><p>Default span for labels in small size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {number} iLabelSpanS <p>New value for property <code>labelSpanS</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanS(iLabelSpanS: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLabelSpanXL" data-sap-ui-target="getLabelSpanXL">labelSpanXL</a>.</p><p>Default span for labels in extra large size.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iLabelSpanXL <p>New value for property <code>labelSpanXL</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLabelSpanXL(iLabelSpanXL: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getLayout" data-sap-ui-target="getLayout">layout</a>.</p><p>The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.</p><p>We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.</p><p><b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>ResponsiveLayout</code>.</p>
                     * @param {sap.ui.layout.form.SimpleFormLayout} sLayout <p>New value for property <code>layout</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLayout(sLayout: sap.ui.layout.form.SimpleFormLayout): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getMaxContainerCols" data-sap-ui-target="getMaxContainerCols">maxContainerCols</a>.</p><p>The maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.</p><p><b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a <code>layout</code>, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>2</code>.</p>
                     * @param {number} iMaxContainerCols <p>New value for property <code>maxContainerCols</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMaxContainerCols(iMaxContainerCols: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getMinWidth" data-sap-ui-target="getMinWidth">minWidth</a>.</p><p>The overall minimum width in pixels that is used for the <code>SimpleForm</code>.</p><p>If the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>FormContainer</code>). The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until <code>maxContainerCols</code> is reached, irrespective of whether a <code>width</code> is reached or the available parents width is reached.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iMinWidth <p>New value for property <code>minWidth</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMinWidth(iMinWidth: number): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getSingleContainerFullSize" data-sap-ui-target="getSingleContainerFullSize">singleContainerFullSize</a>.</p><p>If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.</p><p>In all other cases the <code>FormContainer</code> is displayed in the size of one column.</p><p><b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bSingleContainerFullSize <p>New value for property <code>singleContainerFullSize</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleContainerFullSize(bSingleContainerFullSize: boolean): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p>
                     * @param {sap.ui.core.Title | string} vTitle <p>The title to set</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTitle(vTitle: sap.ui.core.Title | string): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getToolbar" data-sap-ui-target="getToolbar">toolbar</a>.</p>
                     * @param {sap.ui.core.Toolbar} oToolbar <p>The toolbar to set</p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setToolbar(oToolbar: sap.ui.core.Toolbar): sap.ui.layout.form.SimpleForm;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.layout.form.SimpleForm/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the form.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                     * @returns sap.ui.layout.form.SimpleForm <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.layout.form.SimpleForm;
                }
                /**
                 * <p>Available <code>FormLayouts</code> used to render a <code>SimpleForm</code>.</p>
                 */
                export enum SimpleFormLayout {
                    /**
                     * <p>Uses the <code>ColumnLayout</code> layout to render the <code>SimpleForm</code> control</p>
                     */
                    ColumnLayout = "ColumnLayout",
                    /**
                     * <p>Uses the <code>GridLayout</code> layout to render the <code>SimpleForm</code> control</p>
                     */
                    GridLayout = "GridLayout",
                    /**
                     * <p>Uses the <code>ResponsiveGridLayout</code> layout to render the <code>SimpleForm</code> control</p>
                     */
                    ResponsiveGridLayout = "ResponsiveGridLayout",
                    /**
                     * <p>Uses the <code>ResponsiveLayout</code> layout to render the <code>SimpleForm</code> control</p>
                     */
                    ResponsiveLayout = "ResponsiveLayout",
                }
            }
        }
    }
}
