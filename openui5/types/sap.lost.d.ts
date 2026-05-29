/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

declare namespace sap {
  namespace m {

    export type URLHelper = any;
  }
}
declare namespace sap {
  /**
   * The sap.ui namespace is the central OpenAjax compliant entry point for UI related JavaScript functionality provided by SAP.
   */
  namespace ui {
    /**
     * <p>Retrieve the <a target="_self" href="api/sap.ui.core.Core">SAPUI5 Core</a> instance for the current window.</p>
     * @returns sap.ui.core.Core <p>the API of the current SAPUI5 Core instance.</p>
     */
    function getCore(): sap.ui.core.Core;

    namespace core {

      /**
       * <p><p>A string type representing an ID or a name.</p><p>Allowed is a sequence of characters (capital/lowercase), digits, underscores, dashes, points and/or colons. It may start with a character or underscore only.</p></p>
       */
      export type ID = string;

      /**
       * <p>Singleton Core instance of the SAP UI Library.</p><p>The module export of <code>sap/ui/core/Core</code> is <b>not</b> a class, but the singleton Core instance itself. The <code>sap.ui.core.Core</code> class itself must not be instantiated, except by the framework itself.</p><p>The Core provides a <a target="_self" href="api/sap.ui.core.Core#methods/ready">ready function</a> to execute code after the Core was booted.</p><p>Example: <pre>
      
        sap.ui.require(["sap/ui/core/Core"], async function(Core) {
      
          // Usage of a callback function
          Core.ready(function() {
            ...
          });
      
          // Usage of Core.ready() as a Promise
          await Core.ready();
          ...
        });
      
      </pre></p>
       */
      export class Core extends sap.ui.base.Object {
        /**
         * <p>Enforces an immediate update of the visible UI (aka "rendering").</p><p>In general, applications should avoid calling this method and instead let the framework manage any necessary rendering.</p>
         */
        applyChanges(): void;
        /**
         * <p>Applies the theme with the given name (by loading the respective style sheets, which does not disrupt the application).</p><p>By default, the theme files are expected to be located at path relative to the respective control library ([libraryLocation]/themes/[themeName]). Different locations can be configured by using the method setThemePath() or by using the second parameter "sThemeBaseUrl" of applyTheme(). Usage of this second parameter is a shorthand for setThemePath and internally calls setThemePath, so the theme location is then known.</p><p>sThemeBaseUrl is a single URL to specify the default location of all theme files. This URL is the base folder below which the control library folders are located. E.g. if the CSS files are not located relative to the root location of UI5, but instead they are at locations like http://my.server/myapp/resources/sap/ui/core/themes/my_theme/library.css then the URL that needs to be given is: http://my.server/myapp/resources All theme resources are then loaded from below this folder - except if for a certain library a different location has been registered.</p><p>If the theme resources are not all either below this base location or with their respective libraries, then setThemePath must be used to configure individual locations.</p>
         * @param {string} sThemeName <p>the name of the theme to be loaded</p>
         * @param {string} sThemeBaseUrl <p>the (optional) base location of the theme</p>
         */
        applyTheme(sThemeName: string, sThemeBaseUrl?: string): void;
        /**
         * <p>Registers a listener for control events.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p>
         * @param {Function} fnFunction <p>Callback to be called for each control event</p>
         * @param {any} oListener <p>Optional context object to call the callback on</p>
         */
        attachControlEvent(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.core.Core#events/formatError">formatError</a> event of <code>sap.ui.core.Core</code>.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p><p>Please note that this event is a bubbling event and may already be canceled before reaching the core.</p>
         * @param {any} oData <p>An object that will be passed to the handler along with the event object when the event is fired</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object to call the event handler with. Defaults to a dummy event provider object</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        attachFormatError(oData: any, fnFunction: Function, oListener?: any): this;
        /**
         * <p>Registers a given function that is executed after the framework has been initialized.</p><p>The given function will either be called as soon as the framework has been initialized or, if it has been initialized already, it will be called immediately.</p><p>More information about the initialization process and the steps it consists of can be found in the documentation topic "<a target="_self" href="topic/91f2c9076f4d1014b6dd926db0e91070">Initialization Process</a>".</p>
         * @param {Function} fnFunction <p>Function to be after initialization of the framework</p>
         */
        attachInit(fnFunction: Function): void;
        /**
         * <p>Register a listener for the <a target="_self" href="api/sap.ui.core.Core#events/localizationChanged">localizationChanged</a> event.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p>
         * @param {Function} fnFunction <p>Callback to be called when the event occurs</p>
         * @param {any} oListener <p>Context object to call the function on</p>
         */
        attachLocalizationChanged(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.core.Core#events/parseError">parseError</a> event of <code>sap.ui.core.Core</code>.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p><p>Please note that this event is a bubbling event and may already be canceled before reaching the core.</p>
         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object to call the event handler with. Defaults to a dummy event provider object</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        attachParseError(oData: any, fnFunction: Function, oListener?: any): this;
        /**
         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.core.Core#events/ThemeChanged">ThemeChanged</a> event of this <code>sap.ui.core.Core</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object to call the event handler with. Defaults to a dummy event provider object</p>
         */
        attachThemeChanged(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.core.Core#events/validationError">validationError</a> event of <code>sap.ui.core.Core</code>.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p><p>Please note that this event is a bubbling event and may already be canceled before reaching the core.</p>
         * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object to call the event handler with. Defaults to a dummy event provider object</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        attachValidationError(oData: any, fnFunction: Function, oListener?: any): this;
        /**
         * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.core.Core#events/validationSuccess">validationSuccess</a> event of <code>sap.ui.core.Core</code>.</p><p>When called, the context of the listener (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to a dummy event provider object.</p><p>Please note that this event is a bubbling event and may already be canceled before reaching the core.</p>
         * @param {any} oData <p>The object, that should be passed along with the event-object when firing the event</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object to call the event handler with. Defaults to a dummy event provider object</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        attachValidationSuccess(oData: any, fnFunction: Function, oListener?: any): this;
        /**
         * <p>Returns a list of all controls with a field group ID. See <a target="_self" href="api/sap.ui.core.Control#methods/checkFieldGroupIds">Control.prototype.checkFieldGroupIds</a> for a description of the <code>vFieldGroupIds</code> parameter.</p>
         * @param {string | string[]} vFieldGroupIds <p>ID of the field group or an array of field group IDs to match</p>
         * @returns sap.ui.core.Control[] <p>The list of controls with matching field group IDs</p>
         */
        byFieldGroupId(vFieldGroupIds?: string | string[]): sap.ui.core.Control[];
        /**
         * <p>Returns the registered element with the given ID, if any.</p><p>The ID must be the globally unique ID of an element, the same as returned by <code>oElement.getId()</code>.</p><p>When the element has been created from a declarative source (e.g. XMLView), that source might have used a shorter, non-unique local ID. A search for such a local ID cannot be executed with this method. It can only be executed on the corresponding scope (e.g. on an XMLView instance), by using the <a target="_self" href="api/sap.ui.core.mvc.View#methods/byId">View#byId</a> method of that scope.</p>
         * @param {sap.ui.core.ID | null | undefined} sId <p>ID of the element to search for</p>
         * @returns sap.ui.core.Element|undefined <p>Element with the given ID or <code>undefined</code></p>
         */
        byId(sId: sap.ui.core.ID | null | undefined): sap.ui.core.Element | undefined;
        /**
         * <p>Returns a new instance of the RenderManager for exclusive use by the caller.</p><p>The caller must take care to destroy the render manager when it is no longer needed. Calling this method before the Core has been <a target="_self" href="api/sap.ui.core.Core#methods/isInitialized">initialized</a>, is not recommended.</p>
         * @returns sap.ui.core.RenderManager <p>New instance of the RenderManager</p>
         */
        createRenderManager(): sap.ui.core.RenderManager;
        /**
         * <p>Unregisters a listener for control events.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>Function to unregister</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         */
        detachControlEvent(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.core.Core#events/formatError">formatError</a> event of <code>sap.ui.core.Core</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>The callback function to unregister</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        detachFormatError(fnFunction: Function, oListener?: any): this;
        /**
         * <p>Unregister a listener from the <a target="_self" href="api/sap.ui.core.Core#events/localizationChanged">localizationChanged</a> event.</p><p>The listener will only be unregistered if the same function/context combination is given as in the call to <code>attachLocalizationListener</code>.</p>
         * @param {Function} fnFunction <p>Callback to be deregistered</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         */
        detachLocalizationChanged(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.core.Core#events/parseError">parseError</a> event of <code>sap.ui.core.Core</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>The callback function to unregister.</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        detachParseError(fnFunction: Function, oListener?: any): this;
        /**
         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.core.Core#events/ThemeChanged">ThemeChanged</a> event of this <code>sap.ui.core.Core</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Object on which the given function had to be called.</p>
         */
        detachThemeChanged(fnFunction: Function, oListener?: any): void;
        /**
         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.core.Core#events/validationError">validationError</a> event of <code>sap.ui.core.Core</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>The callback function to unregister</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        detachValidationError(fnFunction: Function, oListener?: any): this;
        /**
         * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.core.Core#events/validationSuccess">validationSuccess</a> event of <code>sap.ui.core.Core</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
         * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
         * @param {any} oListener <p>Context object on which the given function had to be called</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        detachValidationSuccess(fnFunction: Function, oListener?: any): this;
        /**
         * <p>Fires event <a target="_self" href="api/sap.ui.core.Core#events/formatError">formatError</a> to attached listeners.</p>
         * @param {any} oParameters <p>Parameters to pass along with the event.</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        protected fireFormatError(oParameters: any): this;
        /**
         * <p>Fires event <a target="_self" href="api/sap.ui.core.Core#events/parseError">parseError</a> to attached listeners.</p>
         * @param {any} oParameters <p>Parameters to pass along with the event.</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        protected fireParseError(oParameters: any): this;
        /**
         * <p>Fires event <a target="_self" href="api/sap.ui.core.Core#events/validationError">validationError</a> to attached listeners.</p>
         * @param {any} oParameters <p>Parameters to pass along with the event.</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        protected fireValidationError(oParameters: any): this;
        /**
         * <p>Fires event <a target="_self" href="api/sap.ui.core.Core#events/validationSuccess">validationSuccess</a> to attached listeners.</p><p>Expects following event parameters: <ul> <li>'element' of type <code>sap.ui.core.Element</code> </li> <li>'property' of type <code>string</code> </li> <li>'type' of type <code>string</code> </li> <li>'newValue' of type <code>object</code> </li> <li>'oldValue' of type <code>object</code> </li> </ul></p>
         * @param {any} oParameters <p>Parameters to pass along with the event</p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        protected fireValidationSuccess(oParameters?: any): this;
        /**
         * <p>Returns the Configuration of the Core.</p>
         * @returns sap.ui.core.Configuration <p>the Configuration of the current Core.</p>
         */
        getConfiguration(): sap.ui.core.Configuration;
        /**
         * <p>Returns the Id of the control/element currently in focus.</p>
         * @returns string <p>the Id of the control/element currently in focus.</p>
         */
        getCurrentFocusedControlId(): string;
        /**
         * <p>Returns the event bus.</p>
         * @returns sap.ui.core.EventBus <p>the event bus</p>
         */
        getEventBus(): sap.ui.core.EventBus;
        /**
         * <p>Retrieves a resource bundle for the given library and locale.</p><p>If only one argument is given, it is assumed to be the libraryName. The locale then falls back to the current <a target="_self" href="api/sap.ui.core.Configuration#methods/getLanguage">session locale</a>. If no argument is given, the library also falls back to a default: "sap.ui.core".</p><h3>Configuration via App Descriptor</h3><p> When the App Descriptor for the library is available without further request (manifest.json has been preloaded) and when the App Descriptor is at least of version 1.9.0 or higher, then this method will evaluate the App Descriptor entry <code>"sap.ui5" / "library" / "i18n"</code>. <ul> <li>When the entry is <code>true</code>, a bundle with the default name "messagebundle.properties" will be loaded</li> <li>If it is a string, then that string will be used as name of the bundle</li> <li>If it is <code>false</code>, no bundle will be loaded and the result will be <code>undefined</code></li> </ul></p><h3>Caching</h3><p> Once a resource bundle for a library has been loaded, it will be cached by this method. Further calls for the same library and locale won't create new requests, but return the already loaded bundle. There's therefore no need for control code to cache the returned bundle for a longer period of time. Not further caching the result also prevents stale texts after a locale change.</p><h3>Asynchronous Loading</h3><p> The asynchronous variant of <a target="_self" href="api/sap.ui.core.Core#methods/loadLibrary">#loadLibrary</a> will evaluate the same descriptor entry as described above. If it is not <code>false</code>, loading the main resource bundle of the library will become a subtask of the asynchronous loading of the library.</p><p>Due to this preload of the main bundle and the caching behavior of this method, controls in such a library still can use the synchronous variant of <code>getLibraryResourceBundle</code> in their API, behavior and rendering code. Only when the bundle is needed at module execution time (by top level code in a control module), then the asynchronous variant of this method should be preferred.</p>
         * @param {string} sLibraryName <p>Name of the library to retrieve the bundle for</p>
         * @param {string} sLocale <p>Locale to retrieve the resource bundle for</p>
         * @param {boolean} bAsync <p>Whether the resource bundle is loaded asynchronously</p>
         * @returns any <p>The best matching resource bundle for the given parameters or <code>undefined</code>; in asynchronous case a Promise on that bundle is returned</p>
         */
        getLibraryResourceBundle(sLibraryName?: string, sLocale?: string, bAsync?: boolean): any | undefined | any | any;
        /**
         * <p>Returns a map of library info objects for all currently loaded libraries, keyed by their names.</p><p>The structure of the library info objects matches the structure of the info object that the <a target="_self" href="api/sap.ui.core.Core#methods/initLibrary">#initLibrary</a> method expects. Only property names documented with <code>initLibrary</code> should be accessed, any additional properties might change or disappear in future. When a property does not exists, its default value (as documented with <code>initLibrary</code>) should be assumed.</p><p><b>Note:</b> The returned info objects must not be modified. They might be a living copy of the internal data (for efficiency reasons) and the framework is not prepared to handle modifications to these objects.</p>
         * @returns any <p>Map of library info objects keyed by the library names.</p>
         */
        getLoadedLibraries(): any;
        /**
         * <p>Returns the active <code>MessageManager</code> instance.</p>
         * @returns sap.ui.core.message.MessageManager 
         */
        getMessageManager(): sap.ui.core.message.MessageManager;
        /**
         * <p>Get the model with the given model name.</p><p>The name can be omitted to reference the default model or it must be a non-empty string.</p><p>Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>, the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name.</p>
         * @param {string} sName <p>name of the model to be retrieved</p>
         * @returns sap.ui.model.Model <p>oModel</p>
         */
        getModel(sName?: string): sap.ui.model.Model;
        /**
         * <p>Returns the static, hidden area DOM element belonging to this core instance.</p><p>It can be used e.g. for hiding elements like Popups, Shadow, Blocklayer etc.</p><p>If it is not yet available, a DIV is created and appended to the body.</p>
         * @returns HTMLElement <p>the static, hidden area DOM element belonging to this core instance.</p>
         */
        getStaticAreaRef(): HTMLElement;
        /**
         * <p>Returns <code>true</code> if there are any pending rendering tasks or when such rendering tasks are currently being executed.</p>
         * @returns boolean <p>true if there are pending (or executing) rendering tasks.</p>
         */
        getUIDirty(): boolean;
        /**
         * <p>Check if a Model is set to the core</p>
         * @returns boolean <p>true or false</p>
         */
        hasModel(): boolean;
        /**
         * <p>Includes a library theme into the current page (if a variant is specified it will include the variant library theme)</p>
         * @param {string} sLibName <p>the name of the UI library</p>
         * @param {string} sVariant <p>the variant to include (optional)</p>
         * @param {string} sQuery <p>to be used only by the Core</p>
         */
        includeLibraryTheme(sLibName: string, sVariant?: string, sQuery?: string): void;
        /**
         * <p>Provides the framework with information about a library.</p><p>This method is intended to be called exactly once while the main module of a library (its <code>library.js</code> module) is executing, typically at its begin. The single parameter <code>oLibInfo</code> is an info object that describes the content of the library.</p><p>When the <code>oLibInfo</code> has been processed, a normalized version of it will be kept and will be returned as library information in later calls to <a target="_self" href="api/sap.ui.core.Core#methods/getLoadedLibraries">#getLoadedLibraries</a>. Finally, <code>initLibrary</code> fires (the currently private) <a target="_self" href="api/sap.ui.core.Core#events/LibraryChanged">#event:LibraryChanged</a> event with operation 'add' for the newly loaded library.</p><h3>Side Effects</h3><p>While analyzing the <code>oLibInfo</code>, the framework takes some additional actions:</p><p><ul> <li>If the info object contains a list of <code>interfaces</code>, they will be registered with the <a target="_self" href="api/sap.ui.base.DataType">sap.ui.base.DataType</a> class to make them available as aggregation types in managed objects.</li></p><p><li>If the object contains a list of <code>controls</code> or <code>elements</code>, <a target="_self" href="api/sap.ui#methods/sap.ui.lazyRequire">lazy stubs</a> will be created for their constructor as well as for their static <code>extend</code> and <code>getMetadata</code> methods.<br> <b>Note:</b> Future versions might abandon the concept of lazy stubs as it requires synchronous XMLHttpRequests which have been deprecated (see <a target="_blank" rel="noopener noreferrer" href="http://xhr.spec.whatwg.org">http://xhr.spec.whatwg.org</a>
              <img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
              title="Information published on non SAP site" class="sapUISDKExternalLink"/>). To be on the safe side, productive applications should always require any modules that they directly depend on.</li></p><p><li>With the <code>noLibraryCSS</code> property, the library can be marked as 'theming-free'. Otherwise, the framework will add a &lt;link&gt; tag to the page's head, pointing to the library's theme-specific stylesheet. The creation of such a &lt;link&gt; tag can be suppressed with the <a target="_self" href="api/sap.ui.core.Configuration">global configuration option</a> <code>preloadLibCss</code>. It can contain a list of library names for which no stylesheet should be included. This is e.g. useful when an application merges the CSS for multiple libraries and already loaded the resulting stylesheet.</li></p><p><li>If a list of library <code>dependencies</code> is specified in the info object, those libraries will be loaded synchronously by <code>initLibrary</code>.<br> <b>Note:</b> Dependencies between libraries don't have to be modeled as AMD dependencies. Only when enums or types from an additional library are used in the coding of the <code>library.js</code> module, the library should be additionally listed in the AMD dependencies.</li> </ul></p><p>Last but not least, higher layer frameworks might want to include their own metadata for libraries. The property <code>extensions</code> might contain such additional metadata. Its structure is not defined by the framework, but it is strongly suggested that each extension only occupies a single property in the <code>extensions</code> object and that the name of that property contains some namespace information (e.g. library name that introduces the feature) to avoid conflicts with other extensions. The framework won't touch the content of <code>extensions</code> but will make it available in the library info objects returned by <a target="_self" href="api/sap.ui.core.Core#methods/getLoadedLibraries">#getLoadedLibraries</a>.</p><h3>Relationship to Descriptor for Libraries (manifest.json)</h3><p>The information contained in <code>oLibInfo</code> is partially redundant to the content of the descriptor for the same library (its <code>manifest.json</code> file). Future versions of UI5 might ignore the information provided in <code>oLibInfo</code> and might evaluate the descriptor file instead. Library developers therefore should keep the information in both files in sync.</p><p>When the <code>manifest.json</code> is generated from the <code>.library</code> file (which is the default for UI5 libraries built with Maven), then the content of the <code>.library</code> and <code>library.js</code> files must be kept in sync.</p>
         * @param {any} oLibInfo <p>Info object for the library</p>
         * @returns object|undefined <p>As of version 1.101; returns the library namespace, based on the given library name. Returns 'undefined' if no library name is provided.</p>
         */
        initLibrary(oLibInfo: any): any | undefined;
        /**
         * <p>Returns true if the Core has already been initialized. This means that instances of RenderManager etc. do already exist and the init event has already been fired (and will not be fired again).</p>
         * @returns boolean <p>whether the Core has already been initialized</p>
         */
        isInitialized(): boolean;
        /**
         * <p>Returns the locked state of the <code>sap.ui.core.Core</code></p>
         * @returns boolean <p>locked state</p>
         */
        isLocked(): boolean;
        /**
         * <p>Check if the script is running on mobile</p>
         * @returns boolean <p>true or false</p>
         */
        isMobile(): boolean;
        /**
         * <p>Checks whether the given DOM element is the root of the static area.</p>
         * @param {HTMLElement} oDomRef <p>DOM element to check</p>
         * @returns boolean <p>Whether the given DOM element is the root of the static area</p>
         */
        protected isStaticAreaRef(oDomRef: HTMLElement): boolean;
        /**
         * <p>Returns true, if the styles of the current theme are already applied, false otherwise.</p><p>This function must not be used before the init event of the Core. If the styles are not yet applied a theme changed event will follow when the styles will be applied.</p>
         * @returns boolean <p>whether the styles of the current theme are already applied</p>
         */
        isThemeApplied(): boolean;
        /**
         * <p>Loads the given library and its dependencies and makes its content available to the application.</p><h3>What it does</h3><p>When library preloads are not suppressed for the given library, then a library-preload bundle will be loaded for it. By default, the bundle will be loaded synchronously (for compatibility reasons). Only when the optional parameter <code>vUrl</code> is given as <code>true</code> or as a configuration object with a property of <code>async:true</code>, then the bundle will be loaded asynchronously and a <code>Promise</code> will be returned (preferred usage).</p><p>After preloading the bundle, dependency information from the bundle is evaluated and any missing libraries are also preloaded.</p><p>Only then the library entry module (named <code><i>your/lib</i>/library.js</code>) will be required and executed. The module is supposed to call <code>sap.ui.getCore().initLibrary(...)</code> providing the framework with additional metadata about the library, e.g. its version, the set of contained enums, types, interfaces, controls and elements and whether the library requires CSS. If the library requires CSS, a &lt;link&gt; will be added to the page referring to the corresponding <code>library.css</code> stylesheet for the library and the current theme.</p><p>When the optional parameter <code>vUrl</code> is given as a string or when a configuration object is given with a non-empty, string-valued property <code>url</code>, then that URL will be registered for the namespace of the library and all resources will be loaded from that location. This is convenience for a call like <pre>
          sap.ui.loader.config({
            paths: {
              "lib/with/slashes": vUrl
            }
          });
        </pre></p><p>When the given library has been loaded already, no further action will be taken, especially, a given URL will not be registered! In the case of asynchronous loading, a Promise will be returned, but will be resolved immediately.</p><h3>When to use</h3><p>For applications that follow the best practices and use components with component descriptors (manifest.json), the framework will load all declared mandatory libraries and their dependencies automatically before instantiating the application component.</p><p>The same is true for libraries that are listed in the bootstrap configuration (e.g. with the attribute <code>data-sap-ui-libs</code>). They will be loaded before the <code>init</code> event of the UI5 Core is fired.</p><p>Only when an app declares a library to be a lazy library dependency or when code does not use descriptors at all, then an explicit call to <code>loadLibrary</code> becomes necessary. The call should be made before artifacts (controls, elements, types, helpers, modules etc.) from the library are used or required. This allows the framework to optimize access to those artifacts.</p><p>For example, when an app uses a heavy-weight charting library that shouldn't be loaded during startup, it can declare it as "lazy" and load it just before it loads and displays a view that uses the charting library: <pre>
          sap.ui.getCore().loadLibrary("heavy.charting", {async: true})
            .then(function() {
              View.create({
                name: "myapp.views.HeavyChartingView",
                type: ViewType.XML
              });
            });
        </pre></p>
         * @param {string} sLibrary <p>Name of the library to load</p>
         * @param {string | boolean | any} vUrl <p>URL to load the library from or the async flag or a complex configuration object</p>
         * @returns any <p>An info object for the library (sync) or a Promise on it (async).</p>
         */
        loadLibrary(sLibrary: string, vUrl?: string | boolean | any): any | any;
        /**
         * <p>Locks the Core. No browser events are dispatched to the controls.</p><p>Lock should be called before and after the DOM is modified for rendering, roundtrips... Exceptions might be the case for asynchronous UI behavior</p>
         */
        lock(): void;
        /**
         * <p>Triggers a realignment of controls</p><p>This method should be called after changing the cozy/compact CSS class of a DOM element at runtime, for example at the <code>&lt;body&gt;</code> tag. Controls can listen to the themeChanged event to realign their appearance after changing the theme. Changing the cozy/compact CSS class should then also be handled as a theme change. In more simple scenarios where the cozy/compact CSS class is added to a DOM element which contains only a few controls it might not be necessary to trigger the realigment of all controls placed in the DOM, for example changing the cozy/compact CSS class at a single control</p>
         */
        notifyContentDensityChanged(): void;
        /**
         * <p>Sets or unsets a model for the given model name.</p><p>The <code>sName</code> must either be <code>undefined</code> (or omitted) or a non-empty string. When the name is omitted, the default model is set/unset.</p><p>When <code>oModel</code> is <code>null</code> or <code>undefined</code>, a previously set model with that name is removed from the Core.</p><p>Any change (new model, removed model) is propagated to all existing UIAreas and their descendants as long as a descendant doesn't have its own model set for the given name.</p><p>Note: to be compatible with future versions of this API, applications must not use the value <code>null</code>, the empty string <code>""</code> or the string literals <code>"null"</code> or <code>"undefined"</code> as model name.</p>
         * @param {sap.ui.model.Model} oModel <p>the model to be set or <code>null</code> or <code>undefined</code></p>
         * @param {string} sName <p>the name of the model or <code>undefined</code></p>
         * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
         */
        setModel(oModel: sap.ui.model.Model, sName?: string): this;
        /**
         * <p>Defines the root directory from below which UI5 should load the theme with the given name. Optionally allows restricting the setting to parts of a theme covering specific control libraries.</p><p>Example: <pre>
          sap.ui.getCore().setThemeRoot("my_theme", "https://mythemeserver.com/allThemes");
          sap.ui.getCore().applyTheme("my_theme");
        </pre></p><p>will cause the following file to be loaded (assuming that the bootstrap is configured to load libraries <code>sap.m</code> and <code>sap.ui.layout</code>): <pre>
          https://mythemeserver.com/allThemes/sap/ui/core/themes/my_theme/library.css
          https://mythemeserver.com/allThemes/sap/ui/layout/themes/my_theme/library.css
          https://mythemeserver.com/allThemes/sap/m/themes/my_theme/library.css
        </pre></p><p>If parts of the theme are at different locations (e.g. because you provide a standard theme like "sap_belize" for a custom control library and this self-made part of the standard theme is at a different location than the UI5 resources), you can also specify for which control libraries the setting should be used, by giving an array with the names of the respective control libraries as second parameter: <pre>
          sap.ui.getCore().setThemeRoot("sap_belize", ["my.own.library"], "https://mythemeserver.com/allThemes");
        </pre></p><p>This will cause the Belize theme to be loaded from the UI5 location for all standard libraries. Resources for styling the <code>my.own.library</code> controls will be loaded from the configured location: <pre>
          https://sdk.openui5.org/resources/sap/ui/core/themes/sap_belize/library.css
          https://sdk.openui5.org/resources/sap/ui/layout/themes/sap_belize/library.css
          https://sdk.openui5.org/resources/sap/m/themes/sap_belize/library.css
          https://mythemeserver.com/allThemes/my/own/library/themes/sap_belize/library.css
        </pre></p><p>If the custom theme should be loaded initially (via bootstrap attribute), the <code>themeRoots</code> property of the <code>window["sap-ui-config"]</code> object must be used instead of calling <code>sap.ui.getCore().setThemeRoot(...)</code> in order to configure the theme location early enough.</p>
         * @param {string} sThemeName <p>Name of the theme for which to configure the location</p>
         * @param {string[]} aLibraryNames <p>Optional library names to which the configuration should be restricted</p>
         * @param {string} sThemeBaseUrl <p>Base URL below which the CSS file(s) will be loaded from</p>
         * @param {boolean} bForceUpdate <p>Force updating URLs of currently loaded theme</p>
         * @returns this <p>the Core, to allow method chaining</p>
         */
        setThemeRoot(sThemeName: string, aLibraryNames: string[], sThemeBaseUrl: string, bForceUpdate?: boolean): this;
        /**
         * <p>Unlocks the Core.</p><p>Browser events are dispatched to the controls again after this method is called.</p>
         */
        unlock(): void;
      }
      /**
       * <p>Collects and stores the configuration of the current environment.</p><p>The Configuration is initialized once when the <a target="_self" href="api/sap.ui.core.Core">sap.ui.core.Core</a> is created. There are different ways to set the environment configuration (in ascending priority): <ol> <li>System defined defaults</li> <li>Server wide defaults, read from /sap-ui-config.json</li> <li>Properties of the global configuration object window["sap-ui-config"]</li> <li>A configuration string in the data-sap-ui-config attribute of the bootstrap tag.</li> <li>Individual data-sap-ui-<i>xyz</i> attributes of the bootstrap tag</li> <li>Using URL parameters</li> <li>Setters in this Configuration object (only for some parameters)</li> </ol></p><p>That is, attributes of the DOM reference override the system defaults, URL parameters override the DOM attributes (where empty URL parameters set the parameter back to its system default). Calling setters at runtime will override any previous settings calculated during object creation.</p><p>The naming convention for parameters is: <ul> <li>in the URL : sap-ui-<i>PARAMETER-NAME</i>="value"</li> <li>in the DOM : data-sap-ui-<i>PARAMETER-NAME</i>="value"</li> </ul> where <i>PARAMETER-NAME</i> is the name of the parameter in lower case.</p><p>Values of boolean parameters are case insensitive where "true" and "x" are interpreted as true.</p>
       */
      export class Configuration extends sap.ui.base.Object {
        /**
         * <p>Applies multiple changes to the configuration at once.</p><p>If the changed settings contain localization related settings like <code>language</code> or <ode>calendarType</code>, then only a single <code>localizationChanged</code> event will be fired. As the framework has to inform all existing components, elements, models etc. about localization changes, using <code>applySettings</code> can significantly reduce the overhead for multiple changes, esp. when they occur after the UI has been created already.</p><p>The <code>mSettings</code> can contain any property <code><i>xyz</i></code> for which a setter method <code>set<i>XYZ</i></code> exists in the API of this class. Similarly, values for the <a target="_self" href="api/sap.ui.core.Configuration.FormatSettings">format settings</a> API can be provided in a nested object with name <code>formatSettings</code>.</p>
         * @param {any} mSettings <p>Configuration options to apply</p>
         * @returns this <p>Returns <code>this</code> to allow method chaining</p>
         */
        applySettings(mSettings: any): this;
        /**
         * <p>Returns whether the accessibility mode is used or not.</p>
         * @returns boolean <p>whether the accessibility mode is used or not</p>
         */
        getAccessibility(): boolean;
        /**
         * <p>Returns the list of active terminologies defined via the Configuration.</p>
         * @returns string[]|undefined <p>if no active terminologies are set, the default value <code>undefined</code> is returned.</p>
         */
        getActiveTerminologies(): string[] | undefined;
        /**
         * <p>URL of the allowlist service.</p>
         * @returns string <p>allowlist service URL</p>
         */
        getAllowlistService(): string;
        /**
         * <p>Returns the current animation mode.</p>
         * @returns sap.ui.core.Configuration.AnimationMode <p>The current animationMode</p>
         */
        getAnimationMode(): sap.ui.core.Configuration.AnimationMode;
        /**
         * <p>Base URLs to AppCacheBuster ETag-Index files.</p>
         * @returns string[] <p>array of base URLs</p>
         */
        getAppCacheBuster(): string[];
        /**
         * <p>The loading mode (sync|async|batch) of the AppCacheBuster (sync is default)</p>
         * @returns string <p>"sync" | "async"</p>
         */
        getAppCacheBusterMode(): string;
        /**
         * <p>Returns whether the framework automatically adds the ARIA role 'application' to the HTML body or not.</p>
         * @returns boolean 
         */
        getAutoAriaBodyRole(): boolean;
        /**
         * <p>Returns the used compatibility version for the given feature.</p>
         * @param {string} sFeature <p>the key of desired feature</p>
         * @returns any <p>the used compatibility version</p>
         */
        getCompatibilityVersion(sFeature: string): any;
        /**
         * <p>Returns whether the page runs in full debug mode.</p>
         * @returns boolean <p>Whether the page runs in full debug mode</p>
         */
        getDebug(): boolean;
        /**
         * <p>Name (ID) of a UI5 module that implements file share support.</p><p>If no implementation is known, <code>undefined</code> is returned.</p><p>The contract of the module is not defined by the configuration API.</p>
         * @returns string|undefined <p>Module name (ID) of a file share support module</p>
         */
        getFileShareSupport(): string | undefined;
        /**
         * <p>Returns whether the Fiori2Adaptation is on.</p>
         * @returns boolean|string <p>false - no adaptation, true - full adaptation, comma-separated list - partial adaptation Possible values: style, collapse, title, back, hierarchy</p>
         */
        getFiori2Adaptation(): boolean | string;
        /**
         * <p>Returns the URL from where the UI5 flexibility services are called; if empty, the flexibility services are not called.</p>
         * @returns object[] <p>Flexibility services configuration</p>
         */
        getFlexibilityServices(): object[];
        /**
         * <p>Returns the format locale string with language and region code. Falls back to language configuration, in case it has not been explicitly defined.</p>
         * @returns string <p>the format locale string with language and country code</p>
         */
        getFormatLocale(): string;
        /**
         * <p>Returns a configuration object that bundles the format settings of UI5.</p>
         * @returns sap.ui.core.Configuration.FormatSettings <p>A FormatSettings object.</p>
         */
        getFormatSettings(): sap.ui.core.Configuration.FormatSettings;
        /**
         * <p>frameOptions mode (allow/deny/trusted).</p>
         * @returns string <p>frameOptions mode</p>
         */
        getFrameOptions(): string;
        /**
         * <p>Returns whether the UI5 control inspe ctor is displayed. Has only an effect when the sap-ui-debug module has been loaded</p>
         * @returns boolean <p>whether the UI5 control inspector is displayed</p>
         */
        getInspect(): boolean;
        /**
         * <p>Returns a string that identifies the current language.</p><p>The value returned by this method in most cases corresponds to the exact value that has been configured by the user or application or that has been determined from the user agent settings. It has not been normalized, but has been validated against a relaxed version of <a target="_blank" rel="noopener noreferrer" href="http://www.ietf.org/rfc/bcp/bcp47.txt">BCP47</a>
              <img src="./resources/sap/ui/documentation/sdk/images/link-external.png"
              title="Information published on non SAP site" class="sapUISDKExternalLink"/>, allowing underscores ('_') instead of the suggested dashes ('-') and not taking the case of letters into account.</p><p>The exceptions mentioned above affect languages that have been specified via the URL parameter <code>sap-language</code>. That parameter by definition represents an SAP logon language code ('ABAP language'). Most but not all of these language codes are valid ISO639 two-letter languages and as such are valid BCP47 language tags. For better BCP47 compliance, the framework maps the following non-BCP47 SAP logon codes to a BCP47 substitute: <pre>
           "ZH"  -->  "zh-Hans"         // script 'Hans' added to distinguish it from zh-Hant
           "ZF"  -->  "zh-Hant"         // ZF is not a valid ISO639 code, use the compliant language + script 'Hant'
           "1Q"  -->  "en-US-x-saptrc"  // special language code for supportability (tracing),
                                           represented as en-US with a private extension
           "2Q"  -->  "en-US-x-sappsd"  // special language code for supportability (pseudo translation),
                                           represented as en-US with a private extension
           "3Q"  -->  "en-US-x-saprigi" // special language code for the Rigi pseudo language,
                                           represented as en-US with a private extension
        </pre></p><p>For a normalized BCP47 tag, call <a target="_self" href="api/sap.ui.core.Configuration#methods/getLanguageTag">#getLanguageTag</a> or call <a target="_self" href="api/sap.ui.core.Configuration#methods/getLocale">#getLocale</a> to get a <a target="_self" href="api/sap.ui.core.Locale">Locale</a> object matching the language.</p>
         * @returns string <p>Language string as configured</p>
         */
        getLanguage(): string;
        /**
         * <p>Returns a BCP47-compliant language tag for the current language.</p><p>The return value of this method is especially useful for an HTTP <code>Accept-Language</code> header.</p><p>Retrieves the modern locale, e.g. sr-Latn (Serbian (Cyrillic)), he (Hebrew), yi (Yiddish)</p>
         * @returns string <p>The language tag for the current language, conforming to BCP47</p>
         */
        getLanguageTag(): string;
        /**
         * <p>Returns a Locale object for the current language.</p><p>The Locale is derived from the <a target="_self" href="api/sap.ui.core.Configuration#methods/getLanguage">language</a> property.</p>
         * @returns sap.ui.core.Locale <p>The locale</p>
         */
        getLocale(): sap.ui.core.Locale;
        /**
         * <p>Flag whether a Component should load the manifest first.</p>
         * @returns boolean <p>true if a Component should load the manifest first</p>
         */
        getManifestFirst(): boolean;
        /**
         * <p>Returns whether there should be an exception on any duplicate element IDs.</p>
         * @returns boolean <p>whether there should be an exception on any duplicate element IDs</p>
         */
        getNoDuplicateIds(): boolean;
        /**
         * <p>Returns whether the text origin information is collected.</p>
         * @returns boolean <p>whether the text info is collected</p>
         */
        getOriginInfo(): boolean;
        /**
         * <p>Returns whether the page uses the RTL text direction.</p><p>If no mode has been explicitly set (neither <code>true</code> nor <code>false</code>), the mode is derived from the current language setting.</p>
         * @returns boolean <p>whether the page uses the RTL text direction</p>
         */
        getRTL(): boolean;
        /**
         * <p>Returns an SAP logon language for the current language.</p><p>It will be returned in uppercase. e.g. "EN", "DE"</p>
         * @returns string <p>The SAP logon language code for the current language</p>
         */
        getSAPLogonLanguage(): string;
        /**
         * <p>Returns the security token handlers of an OData V4 model.<br><br>References: <ul><li>#setSecurityTokenHandlers</li></ul></p>
         * @returns function[] <p>the security token handlers (an empty array if there are none)</p>
         */
        getSecurityTokenHandlers(): Function[];
        /**
         * <p>Flag if statistics are requested.</p><p>Flag set by TechnicalInfo Popup will also be checked. So its active if set by URL parameter or manually via TechnicalInfo.</p>
         * @returns boolean <p>Whether statistics are enabled</p>
         */
        getStatisticsEnabled(): boolean;
        /**
         * <p>Returns the theme name</p>
         * @returns string <p>the theme name</p>
         */
        getTheme(): string;
        /**
         * <p><b>Note: Due to compatibility considerations, this function will always return the timezone of the browser/host system in this release</b></p><p>Retrieves the configured IANA timezone ID.</p>
         * @returns string <p>The configured IANA timezone ID, e.g. "America/New_York"</p>
         */
        getTimezone(): string;
        /**
         * <p>Prefix to be used for automatically generated control IDs. Default is a double underscore "__".</p>
         * @returns string <p>the prefix to be used</p>
         */
        getUIDPrefix(): string;
        /**
         * <p>Returns the version of the framework.</p><p>Similar to <code>sap.ui.version</code>.</p>
         * @returns any <p>the version</p>
         */
        getVersion(): any;
        /**
         * <p>Sets the current animation mode.</p><p>Expects an animation mode as string and validates it. If a wrong animation mode was set, an error is thrown. If the mode is valid it is set, then the attributes <code>data-sap-ui-animation</code> and <code>data-sap-ui-animation-mode</code> of the HTML document root element are also updated. If the <code>animationMode</code> is <code>Configuration.AnimationMode.none</code> the old <code>animation</code> property is set to <code>false</code>, otherwise it is set to <code>true</code>.</p>
         * @param {sap.ui.core.Configuration.AnimationMode} sAnimationMode <p>A valid animation mode</p>
         */
        setAnimationMode(sAnimationMode: sap.ui.core.Configuration.AnimationMode): void;
        /**
         * <p>Sets the new calendar type to be used from now on in locale dependent functionality (for example, formatting, translation texts, etc.).</p>
         * @param {sap.ui.core.CalendarType | null} sCalendarType <p>the new calendar type. Set it with null to clear the calendar type and the calendar type is calculated based on the format settings and current locale.</p>
         * @returns this <p><code>this</code> to allow method chaining</p>
         */
        setCalendarType(sCalendarType: sap.ui.core.CalendarType | null): this;
        /**
         * <p>Sets a new format locale to be used from now on for retrieving locale specific formatters. Modifying this setting does not have an impact on the retrieval of translated texts!</p><p>Can either be set to a concrete value (a BCP47 or Java locale compliant language tag) or to <code>null</code>. When set to <code>null</code> (default value) then locale specific formatters are retrieved for the current language.</p><p>After changing the format locale, the framework tries to update localization specific parts of the UI. See the documentation of <a target="_self" href="api/sap.ui.core.Configuration#methods/setLanguage">#setLanguage</a> for details and restrictions.</p><p><b>Note</b>: When a format locale is set, it has higher priority than a number, date or time format defined with a call to <code>setLegacyNumberFormat</code>, <code>setLegacyDateFormat</code> or <code>setLegacyTimeFormat</code>.</p><p><b>Note</b>: See documentation of <a target="_self" href="api/sap.ui.core.Configuration#methods/setLanguage">#setLanguage</a> for restrictions.</p>
         * @param {string | null} sFormatLocale <p>the new format locale as a BCP47 compliant language tag; case doesn't matter and underscores can be used instead of dashes to separate components (compatibility with Java Locale IDs)</p>
         * @returns this <p><code>this</code> to allow method chaining</p>
         */
        setFormatLocale(sFormatLocale: string | null): this;
        /**
         * <p>Sets a new language to be used from now on for language/region dependent functionality (e.g. formatting, data types, translated texts, ...).</p><p>When the language can't be interpreted as a BCP47 language (using the relaxed syntax described in <a target="_self" href="api/sap.ui.core.Configuration#methods/getLanguage">#getLanguage</a>, an error will be thrown.</p><p>When the language has changed, the Core will fire its <a target="_self" href="api/sap.ui.core.Core#events/localizationChanged">localizationChanged</a> event.</p><h3>Restrictions</h3><p>The framework <strong>does not</strong> guarantee that already created, language dependent objects will be updated by this call. It therefore remains best practice for applications to switch the language early, e.g. before any language dependent objects are created. Applications that need to support more dynamic changes of the language should listen to the <code>localizationChanged</code> event and adapt all language dependent objects that they use (e.g. by rebuilding their UI).</p><p>Currently, the framework notifies the following objects about a change of the localization settings before it fires the <code>localizationChanged</code> event:</p><p><ul> <li>date and number data types that are used in property bindings or composite bindings in existing Elements, Controls, UIAreas or Components</li> <li>ResourceModels currently assigned to the Core, a UIArea, Component, Element or Control</li> <li>Elements or Controls that implement the <code>onlocalizationChanged</code> hook (note the lowercase 'l' in onlocalizationChanged)</li> </ul></p><p>It furthermore derives the RTL mode from the new language, if no explicit RTL mode has been set. If the RTL mode changes, the following additional actions will be taken:</p><p><ul> <li>the URLs of already loaded library theme files will be changed</li> <li>the <code>dir</code> attribute of the page will be changed to reflect the new mode.</li> <li>all UIAreas will be invalidated (which results in a rendering of the whole UI5 UI)</li> </ul></p><p>This method does not accept SAP language codes for <code>sLanguage</code>. Instead, a second parameter <code>sSAPLogonLanguage</code> can be provided with an SAP language code corresponding to the given language. A given value will be returned by the <a target="_self" href="api/sap.ui.core.Configuration#methods/getSAPLogonLanguage">#getSAPLogonLanguage</a> method. It is up to the caller to provide a consistent pair of BCP47 language and SAP language code. The SAP language code is only checked to be of length 2 and must consist of letters or digits only.</p><p><b>Note</b>: When using this method please take note of and respect the above mentioned restrictions.<br><br>References: <ul><li>http://scn.sap.com/docs/DOC-14377</li></ul></p>
         * @param {string} sLanguage <p>the new language as a BCP47 compliant language tag; case doesn't matter and underscores can be used instead of dashes to separate components (compatibility with Java Locale IDs)</p>
         * @param {string} sSAPLogonLanguage <p>SAP language code that corresponds to the <code>sLanguage</code>; if a value is specified, future calls to <code>getSAPLogonLanguage</code> will return that value; if no value is specified, the framework will use the ISO639 language part of <code>sLanguage</code> as SAP Logon language.</p>
         * @returns this <p><code>this</code> to allow method chaining</p>
         */
        setLanguage(sLanguage: string, sSAPLogonLanguage?: string): this;
        /**
         * <p>Sets the character orientation mode to be used from now on.</p><p>Can either be set to a concrete value (true meaning right-to-left, false meaning left-to-right) or to <code>null</code> which means that the character orientation mode should be derived from the current language (incl. region) setting.</p><p>After changing the character orientation mode, the framework tries to update localization specific parts of the UI. See the documentation of <a target="_self" href="api/sap.ui.core.Configuration#methods/setLanguage">#setLanguage</a> for details and restrictions.</p><p><b>Note</b>: See documentation of <a target="_self" href="api/sap.ui.core.Configuration#methods/setLanguage">#setLanguage</a> for restrictions.</p>
         * @param {boolean | null} bRTL <p>new character orientation mode or <code>null</code></p>
         * @returns this <p><code>this</code> to allow method chaining</p>
         */
        setRTL(bRTL: boolean | null): this;
        /**
         * <p>Sets the security token handlers for an OData V4 model. See chapter <a target="_self" href="topic/9613f1f2d88747cab21896f7216afdac/section_STH">Security Token Handling</a>.<br><br>References: <ul><li>#getSecurityTokenHandlers</li></ul></p>
         * @param {function[]} aSecurityTokenHandlers <p>The security token handlers</p>
         */
        setSecurityTokenHandlers(aSecurityTokenHandlers: Function[]): void;
        /**
         * <p><b>Note: Due to compatibility considerations, this function has no effect in this release. The timezone configuration will always reflect the timezone of the browser/host system.</b></p><p>Sets the timezone such that all date and time based calculations use this timezone.</p><p>When the timezone has changed, the Core will fire its <a target="_self" href="api/sap.ui.core.Core#events/localizationChanged">localizationChanged</a> event.</p>
         * @param {string | null} sTimezone <p>IANA timezone ID, e.g. "America/New_York". Use <code>null</code> to reset the timezone to the browser's local timezone. An invalid IANA timezone ID will fall back to the browser's timezone.</p>
         * @returns this <p><code>this</code> to allow method chaining</p>
         */
        setTimezone(sTimezone?: string | null): this;
      }

    }
    namespace base {
      /**
       * <p>Base class for all SAPUI5 Objects.</p>
       */
      export abstract class Object {
        /**
         * <p>Creates a new subclass of class sap.ui.base.EventProvider with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.</p><p><code>oClassInfo</code> might contain the same kind of information as described in <a target="_self" href="api/sap.ui.base.Object#methods/sap.ui.base.Object.extend">sap.ui.base.Object.extend</a>.</p>
         * @param {string} sClassName <p>Name of the class being created</p>
         * @param {any} oClassInfo <p>Object literal with information about the class</p>
         * @param {Function} FNMetaImpl <p>Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class</p>
         * @returns Function <p>Created class / constructor function</p>
         */
        static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;
        /**
         * <p>Checks whether the given object is an instance of the named type. This function is a short-hand convenience for <a target="_self" href="api/sap.ui.base.Object#methods/isA">sap.ui.base.Object#isA</a>.</p><p>Please see the API documentation of <a target="_self" href="api/sap.ui.base.Object#methods/isA">sap.ui.base.Object#isA</a> for more details.</p>
         * @param {any} oObject <p>Object which will be checked whether it is an instance of the given type</p>
         * @param {string | string[]} vTypeName <p>Type or types to check for</p>
         * @returns boolean <p>Whether the given object is an instance of the given type or of any of the given types</p>
         */
        static isA(oObject: any, vTypeName: string | string[]): boolean;
        /**
         * <p>Checks whether the given object is an instance of the named type. This function is a short-hand convenience for <a target="_self" href="api/sap.ui.base.Object#methods/isA">sap.ui.base.Object#isA</a>.</p><p>Please see the API documentation of <a target="_self" href="api/sap.ui.base.Object#methods/isA">sap.ui.base.Object#isA</a> for more details.</p>
         * @param {any} oObject <p>Object which will be checked whether it is an instance of the given type</p>
         * @param {any} vTypeName <p>Type or types to check for</p>
         * @returns boolean <p>Whether the given object is an instance of the given type or of any of the given types</p>
         */
        static isObjectA(oObject: any, vTypeName: any): boolean;
        /**
         * <p>Constructor for an <code>sap.ui.base.Object</code>.</p><p>Subclasses of this class should always call the constructor of their base class.</p>
         */
        constructor();
        /**
         * <p>Destructor method for objects.</p>
         */
        destroy(): void;
        /**
         * <p>Returns the public facade of this object.</p><p>By default, the public facade is implemented as an instance of <a target="_self" href="api/sap.ui.base.Interface">sap.ui.base.Interface</a>, exposing the <code>publicMethods</code> as defined in the metadata of the class of this object.</p><p>See the documentation of the <a target="_self" href="api/sap.ui.base.Object#methods/sap.ui.base.Object.extend">extend</a> method for an explanation of <code>publicMethods</code>.</p><p>The facade is created on the first call of <code>getInterface</code> and reused for all later calls.</p>
         * @returns sap.ui.base.Object <p>A facade for this object, with at least the public methods of the class of this.</p>
         */
        getInterface(): sap.ui.base.Object;
        /**
         * <p>Checks whether this object is an instance of the named type.</p><p>This check is solely based on the type names as declared in the class metadata. It compares the given <code>vTypeName</code> with the name of the class of this object, with the names of any base class of that class and with the names of all interfaces implemented by any of the aforementioned classes.</p><p>Instead of a single type name, an array of type names can be given and the method will check if this object is an instance of any of the listed types (logical or).</p><p>Should the UI5 class system in future implement additional means of associating classes with type names (e.g. by introducing mixins), then this method might detect matches for those names as well.</p>
         * @param {any} vTypeName <p>Type or types to check for</p>
         * @returns boolean <p>Whether this object is an instance of the given type or of any of the given types</p>
         */
        isA(vTypeName: any): boolean;
      }

    }

    namespace table {

			/**
			 * <p><p> Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The Table control supports desktop PCs and tablet devices. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices. </p> <p> In order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the rows. When the user scrolls, only the row contexts are changed but the rendered controls remain the same. This allows the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding the number of displayed columns. Keep the number as low as possible to improve performance. Due to the nature of tables, the used control for column templates also has a big influence on the performance. </p> <p> The Table control relies completely on data binding, and its supported feature set is tightly coupled to the data model and binding being used. </p><br><br><span>Documentation links:</span><ul><li><a target="_self" href="topic/148892ff9aea4a18b912829791e38f3e">Tables: Which One Should I Choose?</a></li></ul></p>
			 */
      export class Table extends sap.ui.core.Control {
				/**
				 * <p>Constructor for a new Table.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
				 * @param {any} mSettings <p>initial settings for the new control</p>
				 */
        constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some ariaLabelledBy into the association <a target="_self" href="api/sap.ui.table.Table#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
				 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): this;
				/**
				 * <p>Adds some column to the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p>
				 * @param {sap.ui.table.Column} oColumn <p>The column to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addColumn(oColumn: sap.ui.table.Column): this;
				/**
				 * <p>Adds some extension to the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p>
				 * @param {sap.ui.core.Control} oExtension <p>The extension to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addExtension(oExtension: sap.ui.core.Control): this;
				/**
				 * <p>Adds some plugin to the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p>
				 * @param {sap.ui.table.plugins.SelectionPlugin} oPlugin <p>The plugin to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addPlugin(oPlugin: sap.ui.table.plugins.SelectionPlugin): this;
				/**
				 * <p>Adds some row to the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p>
				 * @param {sap.ui.table.Row} oRow <p>The row to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addRow(oRow: sap.ui.table.Row): this;
				/**
				 * <p>Adds the given selection interval to the selection. In case of a single selection, only <code>iIndexTo</code> is added to the selection.</p>
				 * @param {number} iIndexFrom <p>Index from which the selection starts</p>
				 * @param {number} iIndexTo <p>Index up to which to select</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addSelectionInterval(iIndexFrom: number, iIndexTo: number): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>Fired when the user requests the context menu for a table cell.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachBeforeOpenContextMenu(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/busyStateChanged">busyStateChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the busy state of the table changes. It should only be used by composite controls.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachBusyStateChanged(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/cellClick">cellClick</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the user clicks a cell of the table (experimental!).</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachCellClick(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/columnFreeze">columnFreeze</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a column of the table should be freezed</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnFreeze(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/columnMove">columnMove</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a table column is moved.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnMove(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/columnResize">columnResize</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a table column is resized.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnResize(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/columnSelect">columnSelect</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when a column of the table has been selected</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnSelect(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/columnVisibility">columnVisibility</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the visibility of a table column is changed.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnVisibility(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/customFilter">customFilter</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachCustomFilter(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/filter">filter</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event is fired before a filter is applied to a column, if the table is filtered via <a target="_self" href="api/sap.ui.table.Table#methods/filter">sap.ui.table.Table#filter</a> call or user interaction with the column header.</p><p>Filters that are directly applied to the table binding will not fire this event.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachFilter(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/firstVisibleRowChanged">firstVisibleRowChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachFirstVisibleRowChanged(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/group">group</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the table is grouped (experimental!).</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachGroup(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/paste">paste</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event gets fired when the user pastes content from the clipboard to the table. Pasting can be done with the standard keyboard shortcut, if the focus is inside the table.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachPaste(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/rowSelectionChange">rowSelectionChange</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)</p><p><b>Note:</b> If a selection plugin is applied to the table, this event won't be fired.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachRowSelectionChange(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/rowsUpdated">rowsUpdated</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event is fired after the table rows have been updated due to rendering, a model update, or a user interaction, for example.</p><p><b>Note</b>: This event is fired often and must not be used for performance-critical tasks.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachRowsUpdated(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Table#events/sort">sort</a> event of this <code>sap.ui.table.Table</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.</p><p>This event is fired before a sort order is applied to a column, if the table is sorted via <a target="_self" href="api/sap.ui.table.Table#methods/sort">sap.ui.table.Table#sort</a> call or user interaction with the column header.</p><p>Sorters that are directly applied to the table binding will not fire this event.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachSort(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Triggers automatic resizing of a column to the widest content.</p>
				 * @param {number} iColIndex <p>The index of the column in the list of visible columns.</p>
				 */
        autoResizeColumn(iColIndex: number): void;
				/**
				 * <p>Binds aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
				 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        bindColumns(oBindingInfo: sap.ui.base.ManagedObject.AggregationBindingInfo): this;
				/**
				 * <p>Binds aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a> to model data.</p><p>See <a target="_self" href="api/sap.ui.base.ManagedObject#methods/bindAggregation">ManagedObject.bindAggregation</a> for a detailed description of the possible properties of <code>oBindingInfo</code>.</p>
				 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo <p>The binding information</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        bindRows(oBindingInfo: sap.ui.base.ManagedObject.AggregationBindingInfo): this;
				/**
				 * <p>Removes complete selection.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        clearSelection(): this;
				/**
				 * <p>Destroys all the columns in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyColumns(): this;
				/**
				 * <p>Destroys the contextMenu in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getContextMenu">contextMenu</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyContextMenu(): this;
				/**
				 * <p>Destroys all the extension in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyExtension(): this;
				/**
				 * <p>Destroys the footer in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getFooter">footer</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyFooter(): this;
				/**
				 * <p>Destroys the noData in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getNoData">noData</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyNoData(): this;
				/**
				 * <p>Destroys all the plugins in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyPlugins(): this;
				/**
				 * <p>Destroys the rowActionTemplate in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRowActionTemplate">rowActionTemplate</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyRowActionTemplate(): this;
				/**
				 * <p>Destroys all the rows in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyRows(): this;
				/**
				 * <p>Destroys the rowSettingsTemplate in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRowSettingsTemplate">rowSettingsTemplate</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyRowSettingsTemplate(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachBeforeOpenContextMenu(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/busyStateChanged">busyStateChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachBusyStateChanged(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/cellClick">cellClick</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachCellClick(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/columnFreeze">columnFreeze</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnFreeze(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/columnMove">columnMove</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnMove(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/columnResize">columnResize</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnResize(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/columnSelect">columnSelect</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnSelect(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/columnVisibility">columnVisibility</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnVisibility(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/customFilter">customFilter</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachCustomFilter(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/filter">filter</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachFilter(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/firstVisibleRowChanged">firstVisibleRowChanged</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachFirstVisibleRowChanged(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/group">group</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachGroup(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/paste">paste</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachPaste(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/rowSelectionChange">rowSelectionChange</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachRowSelectionChange(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/rowsUpdated">rowsUpdated</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachRowsUpdated(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Table#events/sort">sort</a> event of this <code>sap.ui.table.Table</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachSort(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Filters a column by a value. If no filter value is passed, the filter value equals an empty string, and the filter for this column is removed.</p>
				 * @param {sap.ui.table.Column} oColumn <p>Column to be filtered</p>
				 * @param {string} sValue <p>Filter value as string (will be converted)</p>
				 */
        filter(oColumn: sap.ui.table.Column, sValue?: string): void;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/beforeOpenContextMenu">beforeOpenContextMenu</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireBeforeOpenContextMenu(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/busyStateChanged">busyStateChanged</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        protected fireBusyStateChanged(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/cellClick">cellClick</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireCellClick(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/columnFreeze">columnFreeze</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnFreeze(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/columnMove">columnMove</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnMove(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/columnResize">columnResize</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnResize(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/columnSelect">columnSelect</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnSelect(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/columnVisibility">columnVisibility</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnVisibility(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/customFilter">customFilter</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        protected fireCustomFilter(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/filter">filter</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireFilter(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/firstVisibleRowChanged">firstVisibleRowChanged</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        protected fireFirstVisibleRowChanged(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/group">group</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireGroup(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/paste">paste</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected firePaste(mParameters?: any): boolean;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/rowSelectionChange">rowSelectionChange</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        protected fireRowSelectionChange(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/rowsUpdated">rowsUpdated</a> to attached listeners.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        protected fireRowsUpdated(mParameters?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Table#events/sort">sort</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireSort(mParameters?: any): boolean;
				/**
				 * <p>Sets the focus to the stored focus DOM reference.</p><p>If {@param oFocusInfo.targetInfo} is of type {@type sap.ui.core.message.Message}, the focus will be set as accurately as possible according to the information provided by {@type sap.ui.core.message.Message}.</p>
				 * @param {any} oFocusInfo <p>Options for setting the focus</p>
				 */
        focus(oFocusInfo?: any): void;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getAlternateRowColors">alternateRowColors</a>.</p><p>Enables alternating table row colors. Alternate row coloring is not available for the tree mode.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>alternateRowColors</code></p>
				 */
        getAlternateRowColors(): boolean;
				/**
				 * <p>Returns array of IDs of the elements which are the current targets of the association <a target="_self" href="api/sap.ui.table.Table#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
				 * @returns sap.ui.core.ID[] 
				 */
        getAriaLabelledBy(): sap.ui.core.ID[];
				/**
				 * <p>Get the binding object for a specific aggregation/property.</p>
				 * @param {string} sName <p>Name of the property or aggregation</p>
				 * @returns sap.ui.model.Binding <p>The binding for the given name</p>
				 */
        getBinding(sName?: string): sap.ui.model.Binding;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getColumnHeaderHeight">columnHeaderHeight</a>.</p><p>Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p><b>Note</b>: In a <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">MultiLabel</a> scenario, the height is applied to each individual row of the table's header.</p>
				 * @returns number <p>Value of property <code>columnHeaderHeight</code></p>
				 */
        getColumnHeaderHeight(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getColumnHeaderVisible">columnHeaderVisible</a>.</p><p>Flag whether the column header is visible or not.</p><p><b>Caution:</b> Please be aware that when setting this property to <code>false</code>, a 100% accessibility of the table can't be guaranteed any more.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>columnHeaderVisible</code></p>
				 */
        getColumnHeaderVisible(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p><p>Columns of the Table</p>
				 * @returns sap.ui.table.Column[] 
				 */
        getColumns(): sap.ui.table.Column[];
				/**
				 * <p>Returns the context of a row by its index. Please note that for server-based models like OData, the supplied index might not have been loaded yet. If the context is not available at the client, the binding will trigger a backend request and request this single context. Although this API looks synchronous it may not return a context but load it and fire a change event on the binding.</p><p>For server-based models you should consider to only make this API call when the index is within the currently visible scroll area.</p>
				 * @param {number} iIndex <p>Index of the row to return the context from.</p>
				 * @returns sap.ui.model.Context|null <p>The context at this index or <code>null</code></p>
				 */
        getContextByIndex(iIndex: number): sap.ui.model.Context | null;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getContextMenu">contextMenu</a>.</p><p>Defines the context menu for the table.</p><p><b>Note:</b> The context menu will also be available for the row selectors as well as in the row actions cell of the table control.</p><p>The custom context menu will not be shown in group header and summary rows.</p><p>If this aggregation is set, then the <code>enableCellFilter</code> property will have no effect.</p>
				 * @returns sap.ui.core.IContextMenu 
				 */
        getContextMenu(): sap.ui.core.IContextMenu;
				/**
				 * <p>Gets content of aggregation <code>dragDropConfig</code> which defines the drag-and-drop configuration.</p><p>The following restrictions apply: <ul> <li>Columns cannot be configured to be draggable.</li> <li>The following rows are not draggable: <ul> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> <li>Columns cannot be configured to be droppable.</li> <li>The following rows are not droppable: <ul> <li>The dragged row itself</li> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> </ul></p>
				 * @returns sap.ui.core.dnd.DragDropBase[] 
				 */
        getDragDropConfig(): sap.ui.core.dnd.DragDropBase[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEditable">editable</a>.</p><p>Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>editable</code></p>
				 */
        getEditable(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableBusyIndicator">enableBusyIndicator</a>.</p><p>If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling <a target="_self" href="api/sap.ui.core.Control#methods/setBusy">sap.ui.core.Control#setBusy</a>.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableBusyIndicator</code></p>
				 */
        getEnableBusyIndicator(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableCellFilter">enableCellFilter</a>.</p><p>Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableCellFilter</code></p>
				 */
        getEnableCellFilter(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Flag whether to show or hide the column menu item to freeze or unfreeze a column.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableColumnFreeze</code></p>
				 */
        getEnableColumnFreeze(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableColumnReordering">enableColumnReordering</a>.</p><p>Flag to enable or disable column reordering</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableColumnReordering</code></p>
				 */
        getEnableColumnReordering(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableCustomFilter">enableCustomFilter</a>.</p><p>Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableCustomFilter</code></p>
				 */
        getEnableCustomFilter(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableGrouping">enableGrouping</a>.</p><p>Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.</p><p>The following restrictions apply: <ul> <li>Only client models are supported (e.g. <a target="_self" href="api/sap.ui.model.json.JSONModel">sap.ui.model.json.JSONModel</a>). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>For the grouping to work correctly, <a target="_self" href="api/sap.ui.table.Column#methods/getSortProperty">sortProperty</a> must be set for the grouped column.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul></p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>enableGrouping</code></p>
				 */
        getEnableGrouping(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableSelectAll">enableSelectAll</a>.</p><p>Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>enableSelectAll</code></p>
				 */
        getEnableSelectAll(): boolean;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p><p>Extension section of the Table. If not set, no extension area will be rendered. Note: In case a <code>sap.m.Toolbar</code> is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.</p>
				 * @returns sap.ui.core.Control[] 
				 */
        getExtension(): sap.ui.core.Control[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getFirstVisibleRow">firstVisibleRow</a>.</p><p>First visible row.</p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>firstVisibleRow</code></p>
				 */
        getFirstVisibleRow(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedBottomRowCount">fixedBottomRowCount</a>.</p><p>Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>This property is only supported if the <code>rows</code> aggregation is bound to a <a target="_self" href="api/sap.ui.model.ClientModel">client model</a>.</p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>fixedBottomRowCount</code></p>
				 */
        getFixedBottomRowCount(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedColumnCount">fixedColumnCount</a>.</p><p>Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.</p><p><b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul></p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>fixedColumnCount</code></p>
				 */
        getFixedColumnCount(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedRowCount">fixedRowCount</a>.</p><p>Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>This property is only supported if the <code>rows</code> aggregation is bound to a <a target="_self" href="api/sap.ui.model.ClientModel">client model</a>.</p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>fixedRowCount</code></p>
				 */
        getFixedRowCount(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getFooter">footer</a>.</p><p>Control or text of footer section of the Table (if not set it will be hidden)</p>
				 * @returns sap.ui.core.Control|string 
				 */
        getFooter(): sap.ui.core.Control | string;
				/**
				 * <p>ID of the element which is the current target of the association <a target="_self" href="api/sap.ui.table.Table#methods/getGroupBy">groupBy</a>, or <code>null</code>.</p>
				 * @returns sap.ui.core.ID 
				 */
        getGroupBy(): sap.ui.core.ID;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getMinAutoRowCount">minAutoRowCount</a>.</p><p>This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.</p><p>Default value is <code>5</code>.</p>
				 * @returns number <p>Value of property <code>minAutoRowCount</code></p>
				 */
        getMinAutoRowCount(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getNoData">noData</a>.</p><p>The value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text.</p>
				 * @returns sap.ui.core.Control|string 
				 */
        getNoData(): sap.ui.core.Control | string;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p><p>Plugin section of the table. Multiple plugins are possible, but always only <b>one</b> of a certain type.</p><p>The following restrictions apply: <ul> <li>If a selection plugin is applied to the table, the table's selection API must not be used. Instead, use the API of the plugin.</li> <li>Only one MultiSelectionPlugin can be applied. No other plugins can be applied.</li> </ul></p>
				 * @returns sap.ui.table.plugins.SelectionPlugin[] 
				 */
        getPlugins(): sap.ui.table.plugins.SelectionPlugin[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getRowActionCount">rowActionCount</a>.</p><p>Number of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.</p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>rowActionCount</code></p>
				 */
        getRowActionCount(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRowActionTemplate">rowActionTemplate</a>.</p><p>Template for row actions. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowActionTemplate</code> for the changes to take effect.</p>
				 * @returns sap.ui.table.RowAction 
				 */
        getRowActionTemplate(): sap.ui.table.RowAction;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getRowHeight">rowHeight</a>.</p><p>Row height in pixel.</p><p>In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p>In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Fixed</a> or <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Interactive</a>, the value defines the minimum height, and the actual height can increase based on the content. If the mode is <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Auto</a>, the value defines the actual height, and any content that doesn't fit is cut off.</p><p>If no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.</p>
				 * @returns number <p>Value of property <code>rowHeight</code></p>
				 */
        getRowHeight(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p><p>This aggregation is managed by the table itself. It can only be used with data binding, is read-only, and does not support templates or factories.</p><p>Rows are created and rendered only for a subset of the available data and reused for performance reasons. When scrolling, only the binding contexts are updated to show the correct section of the data. This makes it possible to bind the rows to large data sets. But you must not change rows and their children programmatically, as these changes might get lost when the table updates the rows the next time. Also, properties must not be set to static values, as these would not change when scrolling.</p><p>The cells of rows can be defined with the <a target="_self" href="api/sap.ui.table.Column#methods/setTemplate">template</a> aggregation of the columns in the <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a> aggregation of the table. The actions of rows can be defined with the <a target="_self" href="api/sap.ui.table.Table#methods/setRowActionTemplate">rowActionTemplate</a> aggregation of the table. Furthermore, row-specific settings can be defined with the <a target="_self" href="api/sap.ui.table.Table#methods/setRowSettingsTemplate">rowSettingsTemplate</a> aggregation of the table.</p>
				 * @returns sap.ui.table.Row[] 
				 */
        getRows(): sap.ui.table.Row[];
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRowSettingsTemplate">rowSettingsTemplate</a>.</p><p>Template for row settings. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowSettingsTemplate</code> for the changes to take effect.</p>
				 * @returns sap.ui.table.RowSettings 
				 */
        getRowSettingsTemplate(): sap.ui.table.RowSettings;
				/**
				 * <p>Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".</p>
				 * @returns number[] <p>Selected indices</p>
				 */
        getSelectedIndices(): number[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getSelectionBehavior">selectionBehavior</a>.</p><p>Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.</p><p>Default value is <code>RowSelector</code>.</p>
				 * @returns sap.ui.table.SelectionBehavior <p>Value of property <code>selectionBehavior</code></p>
				 */
        getSelectionBehavior(): sap.ui.table.SelectionBehavior;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getSelectionMode">selectionMode</a>.</p><p>Selection mode of the Table. This property controls whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance. When the selection mode is changed, the current selection is removed. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionMode.None</code> is set. <b>Note:</b> If a selection plugin is applied to the table, the selection mode is controlled by the plugin.</p><p>Default value is <code>MultiToggle</code>.</p>
				 * @returns sap.ui.table.SelectionMode <p>Value of property <code>selectionMode</code></p>
				 */
        getSelectionMode(): sap.ui.table.SelectionMode;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getShowColumnVisibilityMenu">showColumnVisibilityMenu</a>.</p><p>Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>showColumnVisibilityMenu</code></p>
				 */
        getShowColumnVisibilityMenu(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getShowNoData">showNoData</a>.</p><p>Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showNoData</code></p>
				 */
        getShowNoData(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getShowOverlay">showOverlay</a>.</p><p>Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>showOverlay</code></p>
				 */
        getShowOverlay(): boolean;
				/**
				 * <p>Gets the sorted columns in the order in which sorting was performed through the <a target="_self" href="api/sap.ui.table.Table#methods/sort">sap.ui.table.Table#sort</a> method and menus. Does not reflect sorting at binding level or the columns sort visualization set with <a target="_self" href="api/sap.ui.table.Column#methods/setSorted">sap.ui.table.Column#setSorted</a> and <a target="_self" href="api/sap.ui.table.Column#methods/setSortOrder">sap.ui.table.Column#setSortOrder</a>.<br><br>References: <ul><li>sap.ui.table.Table#sort</li></ul></p>
				 * @returns sap.ui.table.Column[] <p>Array of sorted columns</p>
				 */
        getSortedColumns(): sap.ui.table.Column[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getThreshold">threshold</a>.</p><p>Defines how many additional (not yet visible) data records from the back-end system are pre-fetched to enable smooth scrolling. The threshold is always added to the <code>visibleRowCount</code>. If the <code>visibleRowCount</code> is 10 and the <code>threshold</code> is 100, there will be 110 records fetched with the initial load. If the <code>threshold</code> is lower than the number of rows in the scrollable area (<code>visibleRowCount</code> minus number of fixed rows), this number is used as the <code>threshold</code>. If the value is 0, thresholding is disabled.</p><p>Default value is <code>100</code>.</p>
				 * @returns number <p>Value of property <code>threshold</code></p>
				 */
        getThreshold(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getVisibleRowCount">visibleRowCount</a>.</p><p>Number of visible rows of the table.</p><p>Default value is <code>10</code>.</p>
				 * @returns number <p>Value of property <code>visibleRowCount</code></p>
				 */
        getVisibleRowCount(): number;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getVisibleRowCountMode">visibleRowCountMode</a>.</p><p>Defines how the table handles the visible rows in the table.</p><p>In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.</p><p>In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. </p><h3>Restrictions</h3><p> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul></p><p>In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.</p><p>Default value is <code>Fixed</code>.</p>
				 * @returns sap.ui.table.VisibleRowCountMode <p>Value of property <code>visibleRowCountMode</code></p>
				 */
        getVisibleRowCountMode(): sap.ui.table.VisibleRowCountMode;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Table#methods/getWidth">width</a>.</p><p>Width of the Table.</p><p>Default value is <code>'auto'</code>.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
				 */
        getWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Checks for the provided <code>sap.ui.table.Column</code> in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.table.Column} oColumn <p>The column whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
        indexOfColumn(oColumn: sap.ui.table.Column): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oExtension <p>The extension whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
        indexOfExtension(oExtension: sap.ui.core.Control): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.table.plugins.SelectionPlugin</code> in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.table.plugins.SelectionPlugin} oPlugin <p>The plugin whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
        indexOfPlugin(oPlugin: sap.ui.table.plugins.SelectionPlugin): number;
				/**
				 * <p>Checks for the provided <code>sap.ui.table.Row</code> in the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.table.Row} oRow <p>The row whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
        indexOfRow(oRow: sap.ui.table.Row): number;
				/**
				 * <p>Inserts a column into the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p>
				 * @param {sap.ui.table.Column} oColumn <p>The column to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the column should be inserted at; for a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        insertColumn(oColumn: sap.ui.table.Column, iIndex: number): this;
				/**
				 * <p>Inserts a extension into the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p>
				 * @param {sap.ui.core.Control} oExtension <p>The extension to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the extension should be inserted at; for a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value greater than the current size of the aggregation, the extension is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        insertExtension(oExtension: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Inserts a plugin into the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p>
				 * @param {sap.ui.table.plugins.SelectionPlugin} oPlugin <p>The plugin to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the plugin should be inserted at; for a negative value of <code>iIndex</code>, the plugin is inserted at position 0; for a value greater than the current size of the aggregation, the plugin is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        insertPlugin(oPlugin: sap.ui.table.plugins.SelectionPlugin, iIndex: number): this;
				/**
				 * <p>Inserts a row into the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p>
				 * @param {sap.ui.table.Row} oRow <p>The row to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the row should be inserted at; for a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value greater than the current size of the aggregation, the row is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        insertRow(oRow: sap.ui.table.Row, iIndex: number): this;
				/**
				 * <p>Checks whether an index is selected.</p>
				 * @param {number} iIndex <p>Index to check for selection</p>
				 * @returns boolean <p>Whether the index is selected</p>
				 */
        isIndexSelected(iIndex: number): boolean;
				/**
				 * <p>Removes all the controls in the association named <a target="_self" href="api/sap.ui.table.Table#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
				 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.table.Column[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllColumns(): sap.ui.table.Column[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllExtension(): sap.ui.core.Control[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.table.plugins.SelectionPlugin[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllPlugins(): sap.ui.table.plugins.SelectionPlugin[];
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.table.Row[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllRows(): sap.ui.table.Row[];
				/**
				 * <p>Removes an ariaLabelledBy from the association named <a target="_self" href="api/sap.ui.table.Table#methods/getAriaLabelledBy">ariaLabelledBy</a>.</p>
				 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
				 * @returns sap.ui.core.ID|null <p>The removed ariaLabelledBy or <code>null</code></p>
				 */
        removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID | null;
				/**
				 * <p>Removes a column from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a>.</p>
				 * @param {number | string | sap.ui.table.Column} vColumn <p>The column to remove or its index or id</p>
				 * @returns sap.ui.table.Column|null <p>The removed column or <code>null</code></p>
				 */
        removeColumn(vColumn: number | string | sap.ui.table.Column): sap.ui.table.Column | null;
				/**
				 * <p>Removes a extension from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getExtension">extension</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vExtension <p>The extension to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed extension or <code>null</code></p>
				 */
        removeExtension(vExtension: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Removes a plugin from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getPlugins">plugins</a>.</p>
				 * @param {number | string | sap.ui.table.plugins.SelectionPlugin} vPlugin <p>The plugin to remove or its index or id</p>
				 * @returns sap.ui.table.plugins.SelectionPlugin|null <p>The removed plugin or <code>null</code></p>
				 */
        removePlugin(vPlugin: number | string | sap.ui.table.plugins.SelectionPlugin): sap.ui.table.plugins.SelectionPlugin | null;
				/**
				 * <p>Removes a row from the aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a>.</p>
				 * @param {number | string | sap.ui.table.Row} vRow <p>The row to remove or its index or id</p>
				 * @returns sap.ui.table.Row|null <p>The removed row or <code>null</code></p>
				 */
        removeRow(vRow: number | string | sap.ui.table.Row): sap.ui.table.Row | null;
				/**
				 * <p>Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection.</p>
				 * @param {number} iIndexFrom <p>Index from which the deselection should start</p>
				 * @param {number} iIndexTo <p>Index up to which to deselect</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        removeSelectionInterval(iIndexFrom: number, iIndexTo: number): this;
				/**
				 * <p>Adds all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        selectAll(): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getAlternateRowColors">alternateRowColors</a>.</p><p>Enables alternating table row colors. Alternate row coloring is not available for the tree mode.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bAlternateRowColors <p>New value for property <code>alternateRowColors</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setAlternateRowColors(bAlternateRowColors?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getColumnHeaderHeight">columnHeaderHeight</a>.</p><p>Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p><b>Note</b>: In a <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">MultiLabel</a> scenario, the height is applied to each individual row of the table's header.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {number} iColumnHeaderHeight <p>New value for property <code>columnHeaderHeight</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setColumnHeaderHeight(iColumnHeaderHeight?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getColumnHeaderVisible">columnHeaderVisible</a>.</p><p>Flag whether the column header is visible or not.</p><p><b>Caution:</b> Please be aware that when setting this property to <code>false</code>, a 100% accessibility of the table can't be guaranteed any more.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bColumnHeaderVisible <p>New value for property <code>columnHeaderVisible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setColumnHeaderVisible(bColumnHeaderVisible?: boolean): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Table#methods/getContextMenu">contextMenu</a>.</p>
				 * @param {sap.ui.core.IContextMenu} oContextMenu <p>The contextMenu to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setContextMenu(oContextMenu: sap.ui.core.IContextMenu): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEditable">editable</a>.</p><p>Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEditable <p>New value for property <code>editable</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEditable(bEditable?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableBusyIndicator">enableBusyIndicator</a>.</p><p>If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling <a target="_self" href="api/sap.ui.core.Control#methods/setBusy">sap.ui.core.Control#setBusy</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableBusyIndicator <p>New value for property <code>enableBusyIndicator</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableBusyIndicator(bEnableBusyIndicator?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableCellFilter">enableCellFilter</a>.</p><p>Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableCellFilter <p>New value for property <code>enableCellFilter</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableCellFilter(bEnableCellFilter?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableColumnFreeze">enableColumnFreeze</a>.</p><p>Flag whether to show or hide the column menu item to freeze or unfreeze a column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableColumnFreeze <p>New value for property <code>enableColumnFreeze</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableColumnFreeze(bEnableColumnFreeze?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableColumnReordering">enableColumnReordering</a>.</p><p>Flag to enable or disable column reordering</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableColumnReordering <p>New value for property <code>enableColumnReordering</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableColumnReordering(bEnableColumnReordering?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableCustomFilter">enableCustomFilter</a>.</p><p>Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableCustomFilter <p>New value for property <code>enableCustomFilter</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableCustomFilter(bEnableCustomFilter?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableGrouping">enableGrouping</a>.</p><p>Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.</p><p>The following restrictions apply: <ul> <li>Only client models are supported (e.g. <a target="_self" href="api/sap.ui.model.json.JSONModel">sap.ui.model.json.JSONModel</a>). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>For the grouping to work correctly, <a target="_self" href="api/sap.ui.table.Column#methods/getSortProperty">sortProperty</a> must be set for the grouped column.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bEnableGrouping <p>New value for property <code>enableGrouping</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableGrouping(bEnableGrouping?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getEnableSelectAll">enableSelectAll</a>.</p><p>Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bEnableSelectAll <p>New value for property <code>enableSelectAll</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setEnableSelectAll(bEnableSelectAll?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getFirstVisibleRow">firstVisibleRow</a>.</p><p>First visible row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iFirstVisibleRow <p>New value for property <code>firstVisibleRow</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFirstVisibleRow(iFirstVisibleRow?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedBottomRowCount">fixedBottomRowCount</a>.</p><p>Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>This property is only supported if the <code>rows</code> aggregation is bound to a <a target="_self" href="api/sap.ui.model.ClientModel">client model</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iFixedBottomRowCount <p>New value for property <code>fixedBottomRowCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFixedBottomRowCount(iFixedBottomRowCount?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedColumnCount">fixedColumnCount</a>.</p><p>Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.</p><p><b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iFixedColumnCount <p>New value for property <code>fixedColumnCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFixedColumnCount(iFixedColumnCount?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getFixedRowCount">fixedRowCount</a>.</p><p>Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.</p><p>This property is only supported if the <code>rows</code> aggregation is bound to a <a target="_self" href="api/sap.ui.model.ClientModel">client model</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iFixedRowCount <p>New value for property <code>fixedRowCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFixedRowCount(iFixedRowCount?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Table#methods/getFooter">footer</a>.</p>
				 * @param {sap.ui.core.Control | string} vFooter <p>The footer to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFooter(vFooter: sap.ui.core.Control | string): this;
				/**
				 * <p>Sets the associated <a target="_self" href="api/sap.ui.table.Table#methods/getGroupBy">groupBy</a>.</p>
				 * @param {sap.ui.core.ID | sap.ui.table.Column} oGroupBy <p>ID of an element which becomes the new target of this groupBy association; alternatively, an element instance may be given</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setGroupBy(oGroupBy: sap.ui.core.ID | sap.ui.table.Column): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getMinAutoRowCount">minAutoRowCount</a>.</p><p>This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>5</code>.</p>
				 * @param {number} iMinAutoRowCount <p>New value for property <code>minAutoRowCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setMinAutoRowCount(iMinAutoRowCount?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Table#methods/getNoData">noData</a>.</p>
				 * @param {sap.ui.core.Control | string} vNoData <p>The noData to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setNoData(vNoData: sap.ui.core.Control | string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getRowActionCount">rowActionCount</a>.</p><p>Number of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iRowActionCount <p>New value for property <code>rowActionCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setRowActionCount(iRowActionCount?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Table#methods/getRowActionTemplate">rowActionTemplate</a>.</p>
				 * @param {sap.ui.table.RowAction} oRowActionTemplate <p>The rowActionTemplate to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setRowActionTemplate(oRowActionTemplate: sap.ui.table.RowAction): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getRowHeight">rowHeight</a>.</p><p>Row height in pixel.</p><p>In the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.</p><p>In the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Fixed</a> or <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Interactive</a>, the value defines the minimum height, and the actual height can increase based on the content. If the mode is <a target="_self" href="api/sap.ui.table.VisibleRowCountMode">Auto</a>, the value defines the actual height, and any content that doesn't fit is cut off.</p><p>If no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {number} iRowHeight <p>New value for property <code>rowHeight</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setRowHeight(iRowHeight?: number): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Table#methods/getRowSettingsTemplate">rowSettingsTemplate</a>.</p>
				 * @param {sap.ui.table.RowSettings} oRowSettingsTemplate <p>The rowSettingsTemplate to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setRowSettingsTemplate(oRowSettingsTemplate: sap.ui.table.RowSettings): this;
				/**
				 * <p>Sets the selected index. The previous selection is removed.</p>
				 * @param {number} iIndex <p>The index to select</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSelectedIndex(iIndex: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getSelectionBehavior">selectionBehavior</a>.</p><p>Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>RowSelector</code>.</p>
				 * @param {sap.ui.table.SelectionBehavior} sSelectionBehavior <p>New value for property <code>selectionBehavior</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSelectionBehavior(sSelectionBehavior?: sap.ui.table.SelectionBehavior): this;
				/**
				 * <p>Sets the given selection interval as selection. In case of a single selection, only <code>iIndexTo</code> is selected.</p>
				 * @param {number} iIndexFrom <p>Index from which the selection starts</p>
				 * @param {number} iIndexTo <p>Index up to which to select</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSelectionInterval(iIndexFrom: number, iIndexTo: number): this;
				/**
				 * <p>Sets the selection mode. The current selection is lost.</p>
				 * @param {sap.ui.table.SelectionMode} sSelectionMode <p>the selection mode, see sap.ui.table.SelectionMode</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSelectionMode(sSelectionMode: sap.ui.table.SelectionMode): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getShowColumnVisibilityMenu">showColumnVisibilityMenu</a>.</p><p>Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bShowColumnVisibilityMenu <p>New value for property <code>showColumnVisibilityMenu</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setShowColumnVisibilityMenu(bShowColumnVisibilityMenu?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getShowNoData">showNoData</a>.</p><p>Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowNoData <p>New value for property <code>showNoData</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setShowNoData(bShowNoData?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getShowOverlay">showOverlay</a>.</p><p>Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bShowOverlay <p>New value for property <code>showOverlay</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setShowOverlay(bShowOverlay?: boolean): this;
				/**
				 * <p>Sets the threshold value, which will be added to all data requests in case the Table is bound against an OData service.</p>
				 * @param {number} iThreshold <p>The threshold</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setThreshold(iThreshold: number): this;
				/**
				 * <p>Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the <code>title</code> attribute of this Element) or an instance of <a target="_self" href="api/sap.ui.core.TooltipBase">sap.ui.core.TooltipBase</a>.</p><p>If a new tooltip is set, any previously set tooltip is deactivated.</p><p>Please note that tooltips are not rendered for the table. The tooltip property will be set but it won't effect the DOM.</p>
				 * @param {string | sap.ui.core.TooltipBase} vTooltip <p>The tooltip</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setTooltip(vTooltip: string | sap.ui.core.TooltipBase): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getVisibleRowCount">visibleRowCount</a>.</p><p>Number of visible rows of the table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>10</code>.</p>
				 * @param {number} iVisibleRowCount <p>New value for property <code>visibleRowCount</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setVisibleRowCount(iVisibleRowCount?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getVisibleRowCountMode">visibleRowCountMode</a>.</p><p>Defines how the table handles the visible rows in the table.</p><p>In the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.</p><p>In the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. </p><h3>Restrictions</h3><p> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul></p><p>In the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Fixed</code>.</p>
				 * @param {sap.ui.table.VisibleRowCountMode} sVisibleRowCountMode <p>New value for property <code>visibleRowCountMode</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setVisibleRowCountMode(sVisibleRowCountMode?: sap.ui.table.VisibleRowCountMode): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Table#methods/getWidth">width</a>.</p><p>Width of the Table.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>'auto'</code>.</p>
				 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setWidth(sWidth?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Sorts the given column ascending or descending.</p>
				 * @param {sap.ui.table.Column | undefined} oColumn <p>Column to be sorted or undefined to clear sorting</p>
				 * @param {sap.ui.table.SortOrder} oSortOrder <p>Sort order of the column (if undefined the default will be ascending)</p>
				 * @param {boolean} bAdd <p>Set to true to add the new sort criterion to the existing sort criteria</p>
				 */
        sort(oColumn: sap.ui.table.Column | undefined, oSortOrder: sap.ui.table.SortOrder, bAdd: boolean): void;
				/**
				 * <p>Unbinds aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getColumns">columns</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        unbindColumns(): this;
				/**
				 * <p>Unbinds aggregation <a target="_self" href="api/sap.ui.table.Table#methods/getRows">rows</a> from model data.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        unbindRows(): this;
      }

			/**
			 * <p>The column allows you to define column specific properties that will be applied when rendering the table.</p>
			 */
      export class Column extends sap.ui.core.Element {
				/**
				 * <p>Constructor for a new Column.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" href="api/sap.ui.base.ManagedObject#constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
				 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
				 * @param {any} mSettings <p>Initial settings for the new control</p>
				 */
        constructor(sId?: string, mSettings?: any);
				/**
				 * <p>Adds some multiLabel to the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p>
				 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel to add; if empty, nothing is inserted</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        addMultiLabel(oMultiLabel: sap.ui.core.Control): this;
				/**
				 * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" href="api/sap.ui.table.Column#events/columnMenuOpen">columnMenuOpen</a> event of this <code>sap.ui.table.Column</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Column</code> itself.</p><p>Fires before the column menu is opened.</p>
				 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
				 * @param {any} fnFunction <p>The function to be called when the event occurs</p>
				 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.table.Column</code> itself</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        attachColumnMenuOpen(oData: any, fnFunction: any, oListener?: any): this;
				/**
				 * <p>Destroys the label in the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getLabel">label</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyLabel(): this;
				/**
				 * <p>Destroys the menu in the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMenu">menu</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyMenu(): this;
				/**
				 * <p>Destroys all the multiLabels in the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyMultiLabels(): this;
				/**
				 * <p>Destroys the template in the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getTemplate">template</a>.</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        destroyTemplate(): this;
				/**
				 * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" href="api/sap.ui.table.Column#events/columnMenuOpen">columnMenuOpen</a> event of this <code>sap.ui.table.Column</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
				 * @param {any} fnFunction <p>The function to be called, when the event occurs</p>
				 * @param {any} oListener <p>Context object on which the given function had to be called</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        detachColumnMenuOpen(fnFunction: any, oListener?: any): this;
				/**
				 * <p>Fires event <a target="_self" href="api/sap.ui.table.Column#events/columnMenuOpen">columnMenuOpen</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by calling the <code>preventDefault</code> method on the event object. The return value of this method indicates whether the default action should be executed.</p>
				 * @param {any} mParameters <p>Parameters to pass along with the event</p>
				 * @returns boolean <p>Whether or not to prevent the default action</p>
				 */
        protected fireColumnMenuOpen(mParameters?: any): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getAutoResizable">autoResizable</a>.</p><p>Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.CheckBox</code></p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>autoResizable</code></p>
				 */
        getAutoResizable(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getDefaultFilterOperator">defaultFilterOperator</a>.</p><p>If this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.</p>
				 * @returns string <p>Value of property <code>defaultFilterOperator</code></p>
				 */
        getDefaultFilterOperator(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getFiltered">filtered</a>.</p><p>Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column can be filtered using <a target="_self" href="api/sap.ui.table.Table#methods/filter">sap.ui.table.Table#filter</a>.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>filtered</code></p>
				 */
        getFiltered(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterOperator">filterOperator</a>.</p><p>Filter operator to use when filtering this column.</p>
				 * @returns string <p>Value of property <code>filterOperator</code></p>
				 */
        getFilterOperator(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterProperty">filterProperty</a>.</p><p>Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.</p><p>A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.</p>
				 * @returns string <p>Value of property <code>filterProperty</code></p>
				 */
        getFilterProperty(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterType">filterType</a>.</p><p>Type of filter. It is used to transform the search term into the specified type and should be the same as defined in the binding for the column template. Default value is <code>sap.ui.model.type.String</code>. It can be set to the class name of the type, e.g.: <code>sap.ui.model.type.Date</code>, or an expression similar to the binding syntax, e.g.: <code>"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"</code>. Here the escaping is mandatory to avoid handling by the binding parser. As an alternative, a function can be passed that takes over the conversion. This cannot be done in the XMLView, use <a target="_self" href="api/sap.ui.table.Column#methods/setFilterType">#setFilterType</a> instead.</p>
				 * @returns any <p>Value of property <code>filterType</code></p>
				 */
        getFilterType(): any;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterValue">filterValue</a>.</p><p>Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>
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
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getGrouped">grouped</a>.</p><p>Indicates if the column is grouped.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>grouped</code></p>
				 */
        getGrouped(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getHAlign">hAlign</a>.</p><p>Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.</p><p>Default value is <code>Begin</code>.</p>
				 * @returns sap.ui.core.HorizontalAlign <p>Value of property <code>hAlign</code></p>
				 */
        getHAlign(): sap.ui.core.HorizontalAlign;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getHeaderSpan">headerSpan</a>.</p><p>If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row. <b>Note:</b> Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all columns which are part of the header with the greatest span will be set to fixed.</p><p>Default value is <code>1</code>.</p>
				 * @returns any <p>Value of property <code>headerSpan</code></p>
				 */
        getHeaderSpan(): any;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getLabel">label</a>.</p><p>Label of the column which is displayed in the column header. This aggregation is for the standard behavior, where you only want to display one single row header. If a string is supplied, a default label control will be created. Which control this is depends on the loaded libraries.</p>
				 * @returns sap.ui.core.Control|string 
				 */
        getLabel(): sap.ui.core.Control | string;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMenu">menu</a>.</p><p>The menu used by the column. By default the <a target="_self" href="api/sap.ui.table.ColumnMenu">sap.ui.table.ColumnMenu</a> is used.</p><p><b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>.</p>
				 * @returns sap.ui.unified.Menu 
				 */
        getMenu(): sap.ui.unified.Menu;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.</p><p>Default value is <code>0</code>.</p>
				 * @returns number <p>Value of property <code>minWidth</code></p>
				 */
        getMinWidth(): number;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p><p>Labels of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation if you want to use multiple headers per column.</p>
				 * @returns sap.ui.core.Control[] 
				 */
        getMultiLabels(): sap.ui.core.Control[];
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getName">name</a>.</p><p>The name of the column which is used for the text representation of this column, for example, in menus. If not set, the text from the multiLabels aggregation or the label aggregation (in that order) is used as a fallback option.</p>
				 * @returns string <p>Value of property <code>name</code></p>
				 */
        getName(): string;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getResizable">resizable</a>.</p><p>If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>resizable</code></p>
				 */
        getResizable(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getShowFilterMenuEntry">showFilterMenuEntry</a>.</p><p>Defines if the filter menu entry is displayed</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showFilterMenuEntry</code></p>
				 */
        getShowFilterMenuEntry(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getShowSortMenuEntry">showSortMenuEntry</a>.</p><p>Defines if the sort menu entries are displayed</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>showSortMenuEntry</code></p>
				 */
        getShowSortMenuEntry(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getSorted">sorted</a>.</p><p>Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column can be sorted using <a target="_self" href="api/sap.ui.table.Table#methods/sort">sap.ui.table.Table#sort</a>.</p><p>Default value is <code>false</code>.</p>
				 * @returns boolean <p>Value of property <code>sorted</code></p>
				 */
        getSorted(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getSortOrder">sortOrder</a>.</p><p>This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code></p><p>Default value is <code>Ascending</code>.</p>
				 * @returns sap.ui.table.SortOrder <p>Value of property <code>sortOrder</code></p>
				 */
        getSortOrder(): sap.ui.table.SortOrder;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getSortProperty">sortProperty</a>.</p><p>Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.</p><p>A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.</p>
				 * @returns string <p>Value of property <code>sortProperty</code></p>
				 */
        getSortProperty(): string;
				/**
				 * <p>Gets content of aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getTemplate">template</a>.</p><p>Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's properties or aggregations have been changed, the template has to be applied again via <code>setTemplate</code> for the changes to take effect. If a string is defined, a default text control will be created with its text property bound to the value of the string. The default template depends on the libraries loaded. If there is no template, the column will not be rendered in the table. The set of supported controls is limited. See section "<a target="_self" href="topic/148892ff9aea4a18b912829791e38f3e">Tables: Which One Should I Choose?</a>" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.</p>
				 * @returns sap.ui.core.Control|string 
				 */
        getTemplate(): sap.ui.core.Control | string;
				/**
				 * <p>Returns a template clone. It either finds an unused clone or clones a new one from the template.</p>
				 * @param {number} iIndex <p>Index of the column in the columns aggregation of the table</p>
				 * @returns sap.ui.core.Control|null <p>Clone of the template, or <code>null</code> if no template is defined</p>
				 */
        protected getTemplateClone(iIndex: number): sap.ui.core.Control | null;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getVisible">visible</a>.</p><p>Invisible controls are not rendered.</p><p>Default value is <code>true</code>.</p>
				 * @returns boolean <p>Value of property <code>visible</code></p>
				 */
        getVisible(): boolean;
				/**
				 * <p>Gets current value of property <a target="_self" href="api/sap.ui.table.Column#methods/getWidth">width</a>.</p><p>Width of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.</p>
				 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
				 */
        getWidth(): sap.ui.core.CSSSize;
				/**
				 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>. and returns its index if found or -1 otherwise.</p>
				 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel whose index is looked for</p>
				 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
				 */
        indexOfMultiLabel(oMultiLabel: sap.ui.core.Control): number;
				/**
				 * <p>Inserts a multiLabel into the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p>
				 * @param {sap.ui.core.Control} oMultiLabel <p>The multiLabel to insert; if empty, nothing is inserted</p>
				 * @param {number} iIndex <p>The <code>0</code>-based index the multiLabel should be inserted at; for a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value greater than the current size of the aggregation, the multiLabel is inserted at the last position</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        insertMultiLabel(oMultiLabel: sap.ui.core.Control, iIndex: number): this;
				/**
				 * <p>Removes all the controls from the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
				 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
				 */
        removeAllMultiLabels(): sap.ui.core.Control[];
				/**
				 * <p>Removes a multiLabel from the aggregation <a target="_self" href="api/sap.ui.table.Column#methods/getMultiLabels">multiLabels</a>.</p>
				 * @param {number | string | sap.ui.core.Control} vMultiLabel <p>The multiLabel to remove or its index or id</p>
				 * @returns sap.ui.core.Control|null <p>The removed multiLabel or <code>null</code></p>
				 */
        removeMultiLabel(vMultiLabel: number | string | sap.ui.core.Control): sap.ui.core.Control | null;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getAutoResizable">autoResizable</a>.</p><p>Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.CheckBox</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bAutoResizable <p>New value for property <code>autoResizable</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setAutoResizable(bAutoResizable?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getDefaultFilterOperator">defaultFilterOperator</a>.</p><p>If this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sDefaultFilterOperator <p>New value for property <code>defaultFilterOperator</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setDefaultFilterOperator(sDefaultFilterOperator?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getFiltered">filtered</a>.</p><p>Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column can be filtered using <a target="_self" href="api/sap.ui.table.Table#methods/filter">sap.ui.table.Table#filter</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bFiltered <p>New value for property <code>filtered</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFiltered(bFiltered?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterOperator">filterOperator</a>.</p><p>Filter operator to use when filtering this column.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sFilterOperator <p>New value for property <code>filterOperator</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFilterOperator(sFilterOperator?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterProperty">filterProperty</a>.</p><p>Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.</p><p>A column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sFilterProperty <p>New value for property <code>filterProperty</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFilterProperty(sFilterProperty?: string): this;
				/**
				 * <p>The filter type can be the class name of a type, an expression similar to the binding syntax, or a function. A function receives the entered filter value as a parameter and should return the appropriate value for the filter expression.</p>
				 * @param {any} vType <p>The filter type</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFilterType(vType: any): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getFilterValue">filterValue</a>.</p><p>Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>
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
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setFilterValue(sFilterValue?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getGrouped">grouped</a>.</p><p>Indicates if the column is grouped.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bGrouped <p>New value for property <code>grouped</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setGrouped(bGrouped?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getHAlign">hAlign</a>.</p><p>Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Begin</code>.</p>
				 * @param {sap.ui.core.HorizontalAlign} sHAlign <p>New value for property <code>hAlign</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setHAlign(sHAlign?: sap.ui.core.HorizontalAlign): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getHeaderSpan">headerSpan</a>.</p><p>If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row. <b>Note:</b> Only columns with a span equal to 1 can have a column menu. When setting a column to fixed, all columns which are part of the header with the greatest span will be set to fixed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
				 * @param {any} oHeaderSpan <p>New value for property <code>headerSpan</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setHeaderSpan(oHeaderSpan?: any): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Column#methods/getLabel">label</a>.</p>
				 * @param {sap.ui.core.Control | string} vLabel <p>The label to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setLabel(vLabel: sap.ui.core.Control | string): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Column#methods/getMenu">menu</a>.</p>
				 * @param {sap.ui.unified.Menu} oMenu <p>The menu to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setMenu(oMenu: sap.ui.unified.Menu): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getMinWidth">minWidth</a>.</p><p>Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
				 * @param {number} iMinWidth <p>New value for property <code>minWidth</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setMinWidth(iMinWidth?: number): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getName">name</a>.</p><p>The name of the column which is used for the text representation of this column, for example, in menus. If not set, the text from the multiLabels aggregation or the label aggregation (in that order) is used as a fallback option.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sName <p>New value for property <code>name</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setName(sName?: string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getResizable">resizable</a>.</p><p>If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bResizable <p>New value for property <code>resizable</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setResizable(bResizable?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getShowFilterMenuEntry">showFilterMenuEntry</a>.</p><p>Defines if the filter menu entry is displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowFilterMenuEntry <p>New value for property <code>showFilterMenuEntry</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setShowFilterMenuEntry(bShowFilterMenuEntry?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getShowSortMenuEntry">showSortMenuEntry</a>.</p><p>Defines if the sort menu entries are displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bShowSortMenuEntry <p>New value for property <code>showSortMenuEntry</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setShowSortMenuEntry(bShowSortMenuEntry?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getSorted">sorted</a>.</p><p>Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column can be sorted using <a target="_self" href="api/sap.ui.table.Table#methods/sort">sap.ui.table.Table#sort</a>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
				 * @param {boolean} bSorted <p>New value for property <code>sorted</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSorted(bSorted?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getSortOrder">sortOrder</a>.</p><p>This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Ascending</code>.</p>
				 * @param {sap.ui.table.SortOrder} sSortOrder <p>New value for property <code>sortOrder</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSortOrder(sSortOrder?: sap.ui.table.SortOrder): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getSortProperty">sortProperty</a>.</p><p>Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.</p><p>A column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {string} sSortProperty <p>New value for property <code>sortProperty</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setSortProperty(sSortProperty?: string): this;
				/**
				 * <p>Sets the aggregated <a target="_self" href="api/sap.ui.table.Column#methods/getTemplate">template</a>.</p>
				 * @param {sap.ui.core.Control | string} vTemplate <p>The template to set</p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setTemplate(vTemplate: sap.ui.core.Control | string): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getVisible">visible</a>.</p><p>Invisible controls are not rendered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
				 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setVisible(bVisible?: boolean): this;
				/**
				 * <p>Sets a new value for property <a target="_self" href="api/sap.ui.table.Column#methods/getWidth">width</a>.</p><p>Width of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
				 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
				 * @returns this <p>Reference to <code>this</code> in order to allow method chaining</p>
				 */
        setWidth(sWidth?: sap.ui.core.CSSSize): this;
				/**
				 * <p>Returns whether the column should be rendered.</p>
				 * @returns boolean <p>Returns <code>true</code>, if the column should be rendered</p>
				 */
        protected shouldRender(): boolean;
      }
    }
  }
}
