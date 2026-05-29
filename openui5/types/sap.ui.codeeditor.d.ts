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
         * <p><p>UI5 library: sap.ui.codeeditor.</p></p>
         */
        namespace codeeditor {
            /**
             * <p>Allows to visualize source code of various types with syntax highlighting, line numbers in editable and read only mode. Use this control in scenarios where the user should be able to inspect and edit source code. The control currently uses the third-party code editor Ace.</p>
             */
            export class CodeEditor extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new CodeEditor.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Defines custom completer - object implementing a getCompletions method. The method has two parameters - fnCallback method and context object. Context object provides details about oPos and sPrefix as provided by the third-party code editor.</p>
                 * @param {any} oCustomCompleter <p>Object with getCompletions method</p>
                 */
                addCustomCompleter(oCustomCompleter: any): void;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/change">change</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.codeeditor.CodeEditor</code> itself.</p><p>Fired when the value has changed and the focus leaves the code editor.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.codeeditor.CodeEditor</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachChange(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/liveChange">liveChange</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.codeeditor.CodeEditor</code> itself.</p><p>Fired when the value is changed by user interaction - each keystroke, delete, paste, etc.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.codeeditor.CodeEditor</code> itself</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachLiveChange(oData: any, fnFunction: Function, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/change">change</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachChange(fnFunction: Function, oListener?: any): this;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/liveChange">liveChange</a> event of this <code>sap.ui.codeeditor.CodeEditor</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachLiveChange(fnFunction: Function, oListener?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/change">change</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireChange(mParameters?: any): this;
                /**
                 * <p>Fires event <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#events/liveChange">liveChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireLiveChange(mParameters?: any): this;
                /**
                 * <p>Returns the internal instance of the third-party Ace code editor.</p><p><b>Note:</b> This control is based on third-party open-source software, and there might be incompatible changes introduced by the code owner in their future releases.</p>
                 * @returns any <p>the internal third-party Ace code editor instance</p>
                 */
                getAceEditor(): any;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getColorTheme">colorTheme</a>.</p><p>Sets the editor color theme. Possible values are: <ul> <li>default: best fitting to the current UI5 theme</li> <li>any light theme from the list: chrome, clouds, crimson_editor, dawn, dreamweaver, eclipse, github_light_default, github, iplastic, solarized_light, textmate, tomorrow, xcode, kuroir, katzenmilch, sqlserver, cloud_editor </li> <li>any dark theme from the list: hcb, hcb_bright, hcb_blue, ambiance, chaos, clouds_midnight, dracula, cobalt, gruvbox, gob, idle_fingers, kr_theme, merbivore, merbivore_soft, mono_industrial, monokai, nord_dark, one_dark, pastel_on_dark, solarized_dark, terminal, tomorrow_night, tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, vibrant_ink, github_dark, cloud_editor_dark </li> </ul></p><p>Default value is <code>"default"</code>.</p>
                 * @returns string <p>Value of property <code>colorTheme</code></p>
                 */
                getColorTheme(): string;
                /**
                 * <p>Returns the current value of the code editor</p>
                 * @returns string <p>Returns the current value of the code editor</p>
                 */
                getCurrentValue(): string;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getEditable">editable</a>.</p><p>Sets whether the code in the editor can be changed by the user.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>editable</code></p>
                 */
                getEditable(): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getHeight">height</a>.</p><p>The height of the code editor. A minimal height of 3rem will be applied in case the height is less than 20px.</p><p>Default value is <code>"100%"</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                 */
                getHeight(): sap.ui.core.CSSSize;
                /**
                 * <p>Returns the DOMNode ID to be used for the "labelFor" attribute of the label.</p><p>By default, this is the ID of the control itself.</p>
                 * @returns string <p>ID to be used for the <code>labelFor</code></p>
                 */
                getIdForLabel(): string;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getLineNumbers">lineNumbers</a>.</p><p>Sets whether line numbers should be shown.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>lineNumbers</code></p>
                 */
                getLineNumbers(): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getMaxLines">maxLines</a>.</p><p>Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum number of lines specified, the content of the <code>CodeEditor</code> will become scrollable.</p><p><b>Note:</b> Keep in mind that the auto expand <code>CodeEditor</code> behavior requires the <code>height</code> property to be set to <code>auto</code>.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>maxLines</code></p>
                 */
                getMaxLines(): number;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getSyntaxHints">syntaxHints</a>.</p><p>Sets whether to show syntax hints in the editor. Those hints are visualized as value state icons in the line numbers area. The hint text is shown in tooltip of those icons.</p><p><b>Note:</b> This flag is only available if line numbers are shown.</p><p><b>Note:</b> Syntax hints highly depend on the underlying third-party ACE editor. Comprehensive hints may not be available for all editor types, and some types may not display any hints. Currently, syntax hints are supported for the following types: javascript, json, css, html, xml, php, coffee, lua, xquery, yaml.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>syntaxHints</code></p>
                 */
                getSyntaxHints(): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getType">type</a>.</p><p>The type of the code in the editor used for syntax highlighting.</p><p>Possible types are: "abap", "abc", "actionscript", "ada", "alda", "apache_conf", "apex", "aql", "asciidoc", "asl", "assembly_arm32", "assembly_x86", "astro", "autohotkey", "batchfile", "basic", "bibtex", "c_cpp", "c9search", "cirru", "clojure", "cobol", "coffee", "coldfusion", "crystal", "csharp", "csound_document", "csound_orchestra", "csound_score", "css", "curly", "cuttlefish", "d", "dart", "diff", "django", "dockerfile", "dot", "drools", "edifact", "eiffel", "ejs", "elixir", "elm", "erlang", "flix", "forth", "fortran", "fsharp", "fsl", "ftl", "gcode", "gherkin", "gitignore", "glsl", "gobstones", "golang", "graphqlschema", "groovy", "haml", "handlebars", "haskell", "haskell_cabal", "haxe", "hjson", "html", "html_elixir", "html_ruby", "ini", "io", "ion", "jack", "jade", "java", "javascript", "jexl", "json", "json5", "jsoniq", "jsp", "jssm", "jsx", "julia", "kotlin", "latex", "latte", "less", "liquid", "lisp", "livescript", "log", "logiql", "logtalk", "lsl", "lua", "luapage", "lucene", "makefile", "markdown", "mask", "matlab", "maze", "mediawiki", "mel", "mips", "mixal", "mushcode", "mysql", "nasal", "nginx", "nim", "nix", "nsis", "nunjucks", "objectivec", "ocaml", "odin", "partiql", "pascal", "perl", "pgsql", "php", "php_laravel_blade", "pig", "plsql", "powershell", "praat", "prisma", "prolog", "properties", "protobuf", "prql", "puppet", "python", "qml", "r", "raku", "razor", "rdoc", "red", "rhtml", "robot", "rst", "ruby", "rust", "sac", "sass", "scad", "scala", "scheme", "scrypt", "scss", "sh", "sjs", "slim", "smarty", "smithy", "snippets", "soy_template", "space", "sparql", "sql", "sqlserver", "stylus", "svg", "swift", "tcl", "terraform", "tex", "text", "textile", "toml", "tsx", "turtle", "twig", "typescript", "vala", "vbscript", "velocity", "verilog", "vhdl", "visualforce", "vue", "wollok", "xml", "xquery", "yaml", "zeek", "zig"</p><p>Default value is <code>"javascript"</code>.</p>
                 * @returns string <p>Value of property <code>type</code></p>
                 */
                getType(): string;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getValue">value</a>.</p><p>The value displayed in the code editor.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>value</code></p>
                 */
                getValue(): string;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getValueSelection">valueSelection</a>.</p><p>Sets whether the code is automatically selected if a value is set.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>valueSelection</code></p>
                 */
                getValueSelection(): boolean;
                /**
                 * <p>Gets current value of property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getWidth">width</a>.</p><p>The width of the code editor.</p><p>Default value is <code>"100%"</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Pretty-prints the content of the editor.</p><p><b>Note:</b> Works well for PHP. For other editor types (modes), the content might not be formatted well. In such cases it is recommended to use your own formatting.</p>
                 */
                prettyPrint(): void;
                /**
                 * <p>Sets the color theme of the code editor</p>
                 * @param {string} sTheme <p>See property documentation for accepted values</p>
                 * @returns this <p>Returns <code>this</code> to allow method chaining</p>
                 */
                setColorTheme(sTheme: string): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getEditable">editable</a>.</p><p>Sets whether the code in the editor can be changed by the user.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEditable(bEditable?: boolean): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getHeight">height</a>.</p><p>The height of the code editor. A minimal height of 3rem will be applied in case the height is less than 20px.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
                 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeight(sHeight?: sap.ui.core.CSSSize): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getLineNumbers">lineNumbers</a>.</p><p>Sets whether line numbers should be shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bLineNumbers <p>New value for property <code>lineNumbers</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLineNumbers(bLineNumbers?: boolean): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getMaxLines">maxLines</a>.</p><p>Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum number of lines specified, the content of the <code>CodeEditor</code> will become scrollable.</p><p><b>Note:</b> Keep in mind that the auto expand <code>CodeEditor</code> behavior requires the <code>height</code> property to be set to <code>auto</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMaxLines <p>New value for property <code>maxLines</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxLines(iMaxLines?: number): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getSyntaxHints">syntaxHints</a>.</p><p>Sets whether to show syntax hints in the editor. Those hints are visualized as value state icons in the line numbers area. The hint text is shown in tooltip of those icons.</p><p><b>Note:</b> This flag is only available if line numbers are shown.</p><p><b>Note:</b> Syntax hints highly depend on the underlying third-party ACE editor. Comprehensive hints may not be available for all editor types, and some types may not display any hints. Currently, syntax hints are supported for the following types: javascript, json, css, html, xml, php, coffee, lua, xquery, yaml.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bSyntaxHints <p>New value for property <code>syntaxHints</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSyntaxHints(bSyntaxHints?: boolean): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getType">type</a>.</p><p>The type of the code in the editor used for syntax highlighting.</p><p>Possible types are: "abap", "abc", "actionscript", "ada", "alda", "apache_conf", "apex", "aql", "asciidoc", "asl", "assembly_arm32", "assembly_x86", "astro", "autohotkey", "batchfile", "basic", "bibtex", "c_cpp", "c9search", "cirru", "clojure", "cobol", "coffee", "coldfusion", "crystal", "csharp", "csound_document", "csound_orchestra", "csound_score", "css", "curly", "cuttlefish", "d", "dart", "diff", "django", "dockerfile", "dot", "drools", "edifact", "eiffel", "ejs", "elixir", "elm", "erlang", "flix", "forth", "fortran", "fsharp", "fsl", "ftl", "gcode", "gherkin", "gitignore", "glsl", "gobstones", "golang", "graphqlschema", "groovy", "haml", "handlebars", "haskell", "haskell_cabal", "haxe", "hjson", "html", "html_elixir", "html_ruby", "ini", "io", "ion", "jack", "jade", "java", "javascript", "jexl", "json", "json5", "jsoniq", "jsp", "jssm", "jsx", "julia", "kotlin", "latex", "latte", "less", "liquid", "lisp", "livescript", "log", "logiql", "logtalk", "lsl", "lua", "luapage", "lucene", "makefile", "markdown", "mask", "matlab", "maze", "mediawiki", "mel", "mips", "mixal", "mushcode", "mysql", "nasal", "nginx", "nim", "nix", "nsis", "nunjucks", "objectivec", "ocaml", "odin", "partiql", "pascal", "perl", "pgsql", "php", "php_laravel_blade", "pig", "plsql", "powershell", "praat", "prisma", "prolog", "properties", "protobuf", "prql", "puppet", "python", "qml", "r", "raku", "razor", "rdoc", "red", "rhtml", "robot", "rst", "ruby", "rust", "sac", "sass", "scad", "scala", "scheme", "scrypt", "scss", "sh", "sjs", "slim", "smarty", "smithy", "snippets", "soy_template", "space", "sparql", "sql", "sqlserver", "stylus", "svg", "swift", "tcl", "terraform", "tex", "text", "textile", "toml", "tsx", "turtle", "twig", "typescript", "vala", "vbscript", "velocity", "verilog", "vhdl", "visualforce", "vue", "wollok", "xml", "xquery", "yaml", "zeek", "zig"</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"javascript"</code>.</p>
                 * @param {string} sType <p>New value for property <code>type</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setType(sType?: string): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getValue">value</a>.</p><p>The value displayed in the code editor.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sValue <p>New value for property <code>value</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(sValue?: string): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getValueSelection">valueSelection</a>.</p><p>Sets whether the code is automatically selected if a value is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bValueSelection <p>New value for property <code>valueSelection</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValueSelection(bValueSelection?: boolean): this;
                /**
                 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.codeeditor.CodeEditor#methods/getWidth">width</a>.</p><p>The width of the code editor.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>"100%"</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth?: sap.ui.core.CSSSize): this;
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
