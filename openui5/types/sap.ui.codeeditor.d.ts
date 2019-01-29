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
         * <p>UI5 library: sap.ui.codeeditor.</p>
         */
        namespace codeeditor {
            /**
             * <p>Allows to visualize source code of various types with syntax highlighting, line numbers in editable and read only mode. Use this controls in scenarios where the user should be able to inspect and edit source code. NOTE: There is a known limitation where CodeEditor won't work within IconTabBar on Internet Explorer. There is a way to achieve the same functionality - an example of IconTabHeader and a CodeEditor can be found in the CodeEditor's samples.</p>
             */
            export class CodeEditor extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new CodeEditor.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Defines custom completer - object implementing a getCompletions method. The method has two parameters - fnCallback method and context object. Context object provides details about oPos and sPrefix as provided by ACE.</p>
                 * @param {any} oCustomCompleter <p>Object with getCompletions method</p>
                 */
                addCustomCompleter(oCustomCompleter: any): void;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/change" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/change">change</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.codeeditor.CodeEditor</code> itself.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.codeeditor.CodeEditor</code> itself</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/liveChange" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/liveChange">liveChange</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.codeeditor.CodeEditor</code> itself.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.codeeditor.CodeEditor</code> itself</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachLiveChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/change" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/change">change</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachChange(fnFunction: Function, oListener: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/liveChange" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/liveChange">liveChange</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachLiveChange(fnFunction: Function, oListener: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/change" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/change">change</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireChange(mParameters?: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/events/liveChange" data-sap-ui-target="sap.ui.codeeditor.CodeEditor/events/liveChange">liveChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireLiveChange(mParameters?: any): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets the focus to the code editor</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                focus(): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getColorTheme" data-sap-ui-target="getColorTheme">colorTheme</a>.</p><p>Sets the editors color theme Possible values are: default, hcb, hcb_bright, hcb_blue, theme-ambiance, chaos, chrome, clouds, clouds_midnight, cobalt, crimson_editor, dawn, dreamweaver, eclipse, github, gob, gruvbox, idle_fingers, iplastic, katzenmilch, kr_theme, kuroir, merbivore, merbivore_soft, mono_industrial, monokai, pastel_on_dark, solarized_dark, solarized_light, sqlserver, terminal, textmate, tomorrow, tomorrow_night, tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, vibrant_ink, xcode</p><p>Default value is <code>default</code>.</p>
                 * @returns string <p>Value of property <code>colorTheme</code></p>
                 */
                getColorTheme(): string;
                /**
                 * <p>Returns the current value of the code editor</p>
                 * @returns string <p>Returns the current value of the code editor</p>
                 */
                getCurrentValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getEditable" data-sap-ui-target="getEditable">editable</a>.</p><p>Sets whether the code in the editor can be changed by the user</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>editable</code></p>
                 */
                getEditable(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the code editor. A minimal height of 3rem will be applied in case the height is less than 20px.</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                 */
                getHeight(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getLineNumbers" data-sap-ui-target="getLineNumbers">lineNumbers</a>.</p><p>Sets whether line numbers should be shown</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>lineNumbers</code></p>
                 */
                getLineNumbers(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getMaxLines" data-sap-ui-target="getMaxLines">maxLines</a>.</p><p>Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum number of lines specified, the content of the <code>CodeEditor</code> will become scrollable.</p><p><b>Note:</b> Keep in mind that the auto expand <code>CodeEditor</code> behavior requires the <code>height</code> property to be set to <code>auto</code>.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>maxLines</code></p>
                 */
                getMaxLines(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getSyntaxHints" data-sap-ui-target="getSyntaxHints">syntaxHints</a>.</p><p>Sets whether to show syntax hints the editor. This flag is only available if line numbers are shown.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>syntaxHints</code></p>
                 */
                getSyntaxHints(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>The type of the code in the editor used for syntax highlighting Possible types are: abap, abc, actionscript, ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru, clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools, eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang, groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io, jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp, live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log, maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl, pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml, rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql, sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript, velocity, verilog, vhdl, wollok, xml, xquery, yaml</p><p>Default value is <code>javascript</code>.</p>
                 * @returns string <p>Value of property <code>type</code></p>
                 */
                getType(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>The value displayed in the code editor</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>value</code></p>
                 */
                getValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getValueSelection" data-sap-ui-target="getValueSelection">valueSelection</a>.</p><p>Sets whether the code is automatically selected if a value is set</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>valueSelection</code></p>
                 */
                getValueSelection(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the code editor</p><p>Default value is <code>100%</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Pretty-prints the content of the editor</p>
                 */
                prettyPrint(): void;
                /**
                 * <p>Sets the color theme of the code editor</p>
                 * @param {string} sTheme <p>See property documentation for accepted values</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setColorTheme(sTheme: string): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets whether the code editor is editable or not</p>
                 * @param {boolean} bValue <p>true to allow editing, otherwise false</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setEditable(bValue: boolean): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>The height of the code editor. A minimal height of 3rem will be applied in case the height is less than 20px.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets whether line numbers should be shown or not</p>
                 * @param {boolean} bValue <p>true to show line numbers</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setLineNumbers(bValue: boolean): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets whether syntax hints should be shown or not Hints are only visible if <code>lineNumbers</code> is set to true.</p>
                 * @param {boolean} bShow <p>true(default) to show the syntax hints</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setSyntaxHints(bShow: boolean): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets the type of the code editors value used for syntax highlighting</p>
                 * @param {string} sType <p>javascript (default), html, xml, css</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setType(sType: string): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets the value of the code editor</p>
                 * @param {string} sValue <p>the value of the code editor</p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setValue(sValue: string): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getValueSelection" data-sap-ui-target="getValueSelection">valueSelection</a>.</p><p>Sets whether the code is automatically selected if a value is set</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bValueSelection <p>New value for property <code>valueSelection</code></p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValueSelection(bValueSelection: boolean): sap.ui.codeeditor.CodeEditor;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.codeeditor.CodeEditor/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>The width of the code editor</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.codeeditor.CodeEditor <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.codeeditor.CodeEditor;
            }
        }
    }
}
