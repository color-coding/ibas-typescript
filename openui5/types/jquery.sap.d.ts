/**
 * Provides base functionality of the SAP jQuery plugin as extension of the jQuery framework.<br/> See also <a href="http://api.jquery.com/jQuery/">jQuery</a> for details.<br/> Although these functions appear as static ones, they are meant to be used on jQuery instances.<br/> If not stated differently, the functions follow the fluent interface paradigm and return the jQuery instance for chaining of statements.
 * 
 * Example for usage of an instance method: <pre>
 *   var oRect = jQuery("#myDiv").rect();
 *   alert("Top Position: " + oRect.top);
 * </pre>
 */
declare interface JQueryStatic {
  device: JQueryDevice;
  os: JQueryOs;
  sap: JQuerySap;
  /**
   * Adds the given ID reference to the aria-describedby attribute.
   * @param {string} sId - The ID reference of an element
   * @param {boolean} bPrepend - whether prepend or not
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  addAriaDescribedBy(sId: string, bPrepend?: boolean): JQuery;

  /**
   * Adds the given ID reference to the aria-labelledby attribute.
   * @param {string} sId - The ID reference of an element
   * @param {boolean} bPrepend - whether prepend or not
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  addAriaLabelledBy(sId: string, bPrepend?: boolean): JQuery;

  /**
   * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
   * @param {number} iIndex - optional parameter to return the control instance at the given index in the array.
   * @returns {any[] | null | sap.ui.core.Control} depending on the given context and index parameter an array of controls, an instance or null.
   */
  control(iIndex?: number): any[] | null | sap.ui.core.Control;

  /**
   * Sets or gets the position of the cursor in an element that supports cursor positioning
   * @param {number} iPos - The cursor position to set (or no parameter to retrieve the cursor position)
   * @returns {JQuery | number} The cursor position (or the jQuery collection if the position has been set)
   */
  cursorPos(iPos: number): JQuery | number;

  /**
   * Disable HTML elements selection.
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  disableSelection(): JQuery;

  /**
   * Enable HTML elements to get selected.
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  enableSelection(): JQuery;

  /**
   * Returns the first focusable domRef in a given container (the first element of the collection)
   * @returns {Element} The domRef
   */
  firstFocusableDomRef(): Element;

  /**
   * Retrieve the selected text in the first element of the collection.
   * 
   * <b>Note</b>: This feature is only supported for input element’s type of text, search, url, tel and password.
   * @returns {string} The selected text.
   */
  getSelectedText(): string;

  /**
   * Returns <code>true</code> if the first element has a set tabindex
   * @returns {boolean} If the first element has a set tabindex
   */
  hasTabIndex(): boolean;

  /**
   * Returns the last focusable domRef in a given container
   * @returns {Element} The last domRef
   */
  lastFocusableDomRef(): Element;

  /**
   * Returns the outer HTML of the given HTML element
   * @returns {string} outer HTML
   */
  outerHTML(): string;

  /**
   * Gets the next parent DOM element with a given attribute and attribute value starting above the first given element
   * @param {string} sAttribute - Name of the attribute
   * @param {string} sValue - Value of the attribute (optional)
   * @returns {Element} null or the DOM reference
   */
  parentByAttribute(sAttribute: string, sValue: string): Element;

  /**
   * Returns a rectangle describing the current visual positioning of the first DOM object in the collection (or <code>null</code> if no element was given)
   * @returns {any} An object with left, top, width and height
   */
  rect(): any;

  /**
   * Returns whether a point described by X and Y is inside this Rectangle's boundaries
   * @param {number} iPosX
   * @param {number} iPosY
   * @returns {boolean} Whether X and Y are inside this Rectangle's boundaries
   */
  rectContains(iPosX: number, iPosY: number): boolean;

  /**
   * Removes the given ID reference from the aria-describedby attribute.
   * @param {string} sId - The ID reference of an element
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  removeAriaDescribedBy(sId: string): JQuery;

  /**
   * Removes the given ID reference from the aria-labelledby attribute.
   * @param {string} sId - The ID reference of an element
   * @returns {JQuery} <code>this</code> to allow method chaining.
   */
  removeAriaLabelledBy(sId: string): JQuery;

  /**
   * @param {any} oRootControl
   */
  root(oRootControl: any): void;

  /**
   * Sets or returns the scrollLeft value of the first element in the given jQuery collection in right-to-left mode. Precondition: The element is rendered in RTL mode.
   * 
   * Reason for this method is that the major browsers use three different values for the same scroll position when in RTL mode. This method hides those differences and returns/applies the same value that would be returned in LTR mode: The distance in px how far the given container is scrolled away from the leftmost scroll position.
   * 
   * Returns "undefined" if no element and no iPos is given.
   * @param {number} iPos
   * @returns {JQuery | number} The jQuery collection if iPos is given, otherwise the scroll position, counted from the leftmost position
   */
  scrollLeftRTL(iPos: number): JQuery | number;

  /**
   * Returns the MIRRORED scrollLeft value of the first element in the given jQuery collection in right-to-left mode. Precondition: The element is rendered in RTL mode.
   * 
   * Reason for this method is that the major browsers return three different values for the same scroll position when in RTL mode. This method hides those differences and returns the value that would be returned in LTR mode if the UI would be mirrored horizontally: The distance in px how far the given container is scrolled away from the rightmost scroll position.
   * 
   * Returns "undefined" if no element is given.
   * @returns {number} The scroll position, counted from the rightmost position
   */
  scrollRightRTL(): number;

  /**
   * Sets the text selection in the first element of the collection.
   * 
   * <b>Note</b>: This feature is only supported for input element’s type of text, search, url, tel and password.
   * @param {number} iStart - Start position of the selection (inclusive)
   * @param {number} iEnd - End position of the selection (exclusive)
   * @returns {JQuery} The jQuery collection
   */
  selectText(iStart: number, iEnd: number): JQuery;

  /**
   * @param {number} iIdx
   */
  uiarea(iIdx: number): void;

}
/**
 */
declare interface JQueryDevice {
  is: JQueryDeviceIs;
}
/**
 * Holds information about the current device and its state
 */
declare interface JQueryDeviceIs {
  /**
   * Whether the application runs on an Android phone - based not on screen size but user-agent (so this is not guaranteed to be equal to jQuery.device.is.phone on Android) https://developers.google.com/chrome/mobile/docs/user-agent Some device vendors however do not follow this rule
   */
  android_phone: boolean;
  /**
   * Whether the application runs on an Android tablet - based not on screen size but user-agent (so this is not guaranteed to be equal to jQuery.device.is.tablet on Android) https://developers.google.com/chrome/mobile/docs/user-agent Some device vendors however do not follow this rule
   */
  android_tablet: boolean;
  /**
   * Whether the running device is a desktop browser. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will be false.
   */
  desktop: boolean;
  /**
   * Whether the application runs on an iPad
   */
  ipad: boolean;
  /**
   * Whether the application runs on an iPhone
   */
  iphone: boolean;
  /**
   * Whether the device is in "landscape" orientation (also "true" when the device does not know about the orientation)
   */
  landscape: boolean;
  /**
   * Whether the running device is a phone. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will also be set according to the simulated platform. This property will be false when runs in desktop browser.
   */
  phone: boolean;
  /**
   * Whether the device is in portrait orientation
   */
  portrait: boolean;
  /**
   * Whether the application runs in standalone mode without browser UI (launched from the iOS home screen)
   */
  standalone: boolean;
  /**
   * Whether the running device is a tablet. If a desktop browser runs in mobile device simulation mode (with URL parameter sap-ui-xx-fakeOS or sap-ui-xx-test-mobile), this property will also be set according to the simulated platform. This property will be false when runs in desktop browser.
   */
  tablet: boolean;
}
/**
 * Holds information about the current operating system
 */
declare interface JQueryOs {
  /**
   * Whether the current operating system is Android
   */
  android: boolean;
  /**
   * Whether the current operating system is BlackBerry
   */
  blackberry: boolean;
  /**
   * The version of the operating system parsed as a float (major and first minor version)
   */
  fVersion: number;
  /**
   * Whether the current operating system is Apple iOS
   */
  ios: boolean;
  /**
   * The name of the operating system; currently supported are: "ios", "android", "blackberry"
   */
  os: string;
  /**
   * The version of the operating system as a string (including minor versions)
   */
  version: string;
  /**
   * Whether the current operating system is Windows Phone
   */
  winphone: boolean;
}
/**
 * Root Namespace for the jQuery plug-in provided by SAP SE.
 */
declare interface JQuerySap {
  act: JQuerySapAct;
  history: JQuerySapHistory;
  interaction: JQuerySapInteraction;
  KeyCodes: JQuerySapKeyCodes;
  log: JQuerySapLog;
  measure: JQuerySapMeasure;
  PseudoEvents: JQuerySapPseudoEvents;
  storage: JQuerySapStorage;
  util: JQuerySapUtil;
  Version: JQuerySapVersion;
  /**
   * List of DOM events that a UIArea automatically takes care of.
   * 
   * A control/element doesn't have to bind listeners for these events. It instead can implement an <code>on<i>event</i>(oEvent)</code> method for any of the following events that it wants to be notified about:
   * 
   * click, dblclick, contextmenu, focusin, focusout, keydown, keypress, keyup, mousedown, mouseout, mouseover, mouseup, select, selectstart, dragstart, dragenter, dragover, dragleave, dragend, drop, paste, cut, input, touchstart, touchend, touchmove, touchcancel, tap, swipe, swipeleft, swiperight, scrollstart, scrollstop
   * 
   * The mouse events and touch events are supported simultaneously on both desktop and mobile browsers. Do NOT create both onmouse* and ontouch* functions to avoid one event being handled twice on the same control.
   */
  ControlEvents: any;
  /**
   * Returns a high resolution timestamp for measurements. The timestamp is based on 01/01/1970 00:00:00 as float with microsecond precision or with millisecond precision, if high resolution timestamps are not available. The fractional part of the timestamp represents fractions of a millisecond. Converting to a <code>Date</code> is possible using <code>new Date(jQuery.sap.now())</code>
   */
  now: any;
  /**
   * Loads the given Javascript resource (URN) asynchronously via as script tag. Returns a promise that will be resolved when the load event is fired or reject when the error event is fired.
   * 
   * Note: execution errors of the script are not reported as 'error'.
   * 
   * This method is not a full implementation of require. It is intended only for loading "preload" files that do not define an own module / module value.
   * 
   * Functionality might be removed/renamed in future, so no code outside the sap.ui.core library must use it.
   */
  _loadJSResourceAsync(): void;

  /**
   * Adds a whitelist entry for URL validation.
   * @param {string} protocol - The protocol of the URL
   * @param {string} host - The host of the URL
   * @param {string} port - The port of the URL
   * @param {string} path - the path of the URL
   */
  addUrlWhitelist(protocol: string, host: string, port: string, path: string): void;

  /**
   * Calculate delta of old list and new list.
   * 
   * This partly implements the algorithm described in "A Technique for Isolating Differences Between Files" but instead of working with hashes, it does compare each entry of the old list with each entry of the new list, which causes terrible performane on large datasets.
   * @param {any[]} aOld - Old Array
   * @param {any[]} aNew - New Array
   * @param {Function} fnCompare - Function to compare list entries
   * @param {boolean} bUniqueEntries - Whether entries are unique, so no duplicate entries exist
   * @returns {any[]} List of changes
   * @deprecated Since version 1.38. use {@link jQuery.sap.arraySymbolDiff} instead if applicable
   */
  arrayDiff(aOld: any[], aNew: any[], bUniqueEntries?: boolean): any[];

  arrayDiff(aOld: any[], aNew: any[], fnCompare?: Function, bUniqueEntries?: boolean): any[];

  /**
   * Calculate delta of old list and new list.
   * 
   * This function implements the algorithm described in "A Technique for Isolating Differences Between Files" (Commun. ACM, April 1978, Volume 21, Number 4, Pages 264-268).
   * 
   * Items in the arrays are not compared directly. Instead, a substitute symbol is determined for each item by applying the provided function <code>fnSymbol</code> to it. Items with strictly equal symbols are assumed to represent the same logical item: <pre>
   *   fnSymbol(a) === fnSymbol(b)   <=>   a 'is logically the same as' b
   * </pre> As an additional constraint, casting the symbols to string should not modify the comparison result. If this second constraint is not met, this method might report more diffs than necessary.
   * 
   * If no symbol function is provided, a default implementation is used which applies <code>JSON.stringify</code> to non-string items and reduces the strings to a hash code. It is not guaranteed that this default implementation fulfills the above constraint in all cases, but it is a compromise between implementation effort, generality and performance. If items are known to be non-stringifiable (e.g. because they may contain cyclic references) or when hash collisions are likely, an own <code>fnSymbol</code> function must be provided.
   * 
   * The result of the diff is a sequence of update operations, each consisting of a <code>type</code> (either <code>"insert"</code> or <code>"delete"</code>) and an <code>index</code>. By applying the operations one after the other to the old array, it can be transformed to an array whose items are equal to the new array.
   * 
   * Sample implementation of the update <pre>
   * 
   *  function update(aOldArray, aNewArray) {
   * 
   *    // calculate the diff
   *    var aDiff = jQuery.sap.arraySymbolDiff(aOldArray, aNewArray, __provide_your_symbol_function_here__);
   * 
   *    // apply update operations
   *    aDiff.forEach( function(op) {
   * 
   *      // invariant: aOldArray and aNewArray now are equal up to (excluding) op.index
   * 
   *      switch ( op.type ) {
   *      case 'insert':
   *        // new array contains a new (or otherwise unmapped) item, add it here
   *        aOldArray.splice(op.index, 0, aNewArray[op.index]);
   *        break;
   *      case 'delete':
   *        // an item is no longer part of the array (or has been moved to another position), remove it
   *        aOldArray.splice(op.index, 1);
   *        break;
   *      default:
   *        throw new Error('unexpected diff operation type');
   *      }
   * 
   *    });
   *  }
   * 
   * </pre>
   * @param {any[]} aOld - Old Array
   * @param {any[]} aNew - New Array
   * @param {Function} fnSymbol - Function to calculate substitute symbols for array items
   * @returns {any[]} List of update operations
   */
  arraySymbolDiff(aOld: any[], aNew: any[], fnSymbol?: Function): any[];

  /**
   * A simple assertion mechanism that logs a message when a given condition is not met.
   * 
   * <b>Note:</b> Calls to this method might be removed when the JavaScript code is optimized during build. Therefore, callers should not rely on any side effects of this method.
   * @param {boolean} bResult - Result of the checked assertion
   * @param {Function | string} vMessage - Message that will be logged when the result is <code>false</code>. In case this is a function, the return value of the function will be displayed. This can be used to execute complex code only if the assertion fails.
   */
  assert(bResult: boolean, vMessage: Function | string): void;

  /**
   * Binds all events for listening with the given callback function.
   * @param {Function} fnCallback - Callback function
   */
  bindAnyEvent(fnCallback: Function): void;

  /**
   * Shortcut for jQuery("#" + id) with additionally the id being escaped properly. I.e.: returns the jQuery object for the DOM element with the given id
   * 
   * Use this method instead of jQuery(...) if you know the argument is exactly one id and the id is not known in advance because it is in a variable (as opposed to a string constant with known content).
   * @param {string} sId - The id to search for and construct the jQuery object
   * @param {Element} oContext - the context DOM Element
   * @returns {Object} The jQuery object for the DOM element identified by the given sId
   */
  byId(sId: string, oContext: Element): Object;

  /**
   * Transforms a hyphen separated string to a camel case string.
   * @param {string} sString - Hyphen separated string
   * @returns {string} The transformed string
   */
  camelCase(sString: string): string;

  /**
   * Converts one character of the string to upper case, at a given position.
   * 
   * If no position is given or when it is negative or beyond the last character of <code>sString</code>, then the first character will be converted to upper case. The first character position is 0.
   * @param {string} sString - String for which one character should be converted
   * @param {number} iPos - Position of the character that should be converted
   * @returns {string} String with the converted character
   */
  charToUpperCase(sString: string, iPos: number): string;

  /**
   * Checks a given mouseover or mouseout event whether it is equivalent to a mouseenter or mousleave event regarding the given DOM reference.
   * @param {JQueryEventObject} oEvent
   * @param {Element} oDomRef
   */
  checkMouseEnterOrLeave(oEvent: JQueryEventObject, oDomRef: Element): void;

  /**
   * Stops the delayed call.
   * 
   * The function given when calling delayedCall is not called anymore.
   * @param {string} sDelayedCallId - The id returned, when calling delayedCall
   */
  clearDelayedCall(sDelayedCallId: string): void;

  /**
   * Stops the interval call.
   * 
   * The function given when calling intervalCall is not called anymore.
   * @param {string} sIntervalCallId - The id returned, when calling intervalCall
   */
  clearIntervalCall(sIntervalCallId: string): void;

  /**
   * Clears the whitelist for URL validation
   */
  clearUrlWhitelist(): void;

  /**
   * Returns whether <code>oDomRefChild</code> is contained in or equal to <code>oDomRefContainer</code>.
   * 
   * This is a browser-independent version of the .contains method of Internet Explorer. For compatibility reasons it returns <code>true</code> if <code>oDomRefContainer</code> and <code>oDomRefChild</code> are equal.
   * 
   * This method intentionally does not operate on the jQuery object, as the original <code>jQuery.contains()</code> method also does not do so.
   * @param {Element} oDomRefContainer - The container element
   * @param {Element} oDomRefChild - The child element (must not be a text node, must be an element)
   * @returns {boolean} Whether <code>oDomRefChild</code> is contained in or equal to <code>oDomRefContainer</code>
   */
  containsOrEquals(oDomRefContainer: Element, oDomRefChild: Element): boolean;

  /**
   * Declares a module as existing.
   * 
   * By default, this function assumes that the module will create a JavaScript object with the same name as the module. As a convenience it ensures that the parent namespace for that object exists (by calling jQuery.sap.getObject). If such an object creation is not desired, <code>bCreateNamespace</code> must be set to false.
   * @param {any | string} sModuleName - name of the module to be declared or in case of an object {modName: "...", type: "..."} where modName is the name of the module and the type could be a specific dot separated extension e.g. <code>{modName: "sap.ui.core.Dev", type: "view"}</code> loads <code>sap/ui/core/Dev.view.js</code> and registers as <code>sap.ui.core.Dev.view</code>
   * @param {boolean} bCreateNamespace - whether to create the parent namespace
   * @deprecated Since version 1.52. UI5 modules and their dependencies should be defined using {@link sap.ui.define}. For more details see {@link topic:91f23a736f4d1014b6dd926db0e91070 Modules and Dependencies} in the documentation.
   */
  declare(sModuleName: any | string, bCreateNamespace?: boolean): void;

  /**
   * Calls a method after a given delay and returns an id for this timer
   * @param {number} iDelay - Delay time in milliseconds
   * @param {any} oObject - Object from which the method should be called
   * @param {any | string} method - function pointer or name of the method
   * @param {any[]} aParameters - Method parameters
   * @returns {string} Id which can be used to cancel the timer with clearDelayedCall
   */
  delayedCall(iDelay: number, oObject: any, method: any | string, aParameters?: any[]): string;

  /**
   * For the given scroll position measured from the "beginning" of a container (the right edge in RTL mode) this method returns the scrollLeft value as understood by the current browser in RTL mode. This value is specific to the given DOM element, as the computation may involve its dimensions.
   * 
   * So when oDomRef should be scrolled 2px from the beginning, the number "2" must be given as iNormalizedScrollBegin and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position. Low values make the right part of the content visible, high values the left part.
   * 
   * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
   * 
   * Only use this method in RTL mode, as the behavior in LTR mode is undefined and may change!
   * @param {number} iNormalizedScrollBegin - The distance from the rightmost position to which the element should be scrolled
   * @param {Element} oDomRef - The DOM Element to which scrollLeft will be applied
   * @returns {number} The scroll position that must be set for the DOM element
   */
  denormalizeScrollBeginRTL(iNormalizedScrollBegin: number, oDomRef: Element): number;

  /**
   * For the given scrollLeft value this method returns the scrollLeft value as understood by the current browser in RTL mode. This value is specific to the given DOM element, as the computation may involve its dimensions.
   * 
   * So when oDomRef should be scrolled 2px from the leftmost position, the number "2" must be given as iNormalizedScrollLeft and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position.
   * 
   * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
   * @param {number} iNormalizedScrollLeft - The distance from the leftmost position to which the element should be scrolled
   * @param {Element} oDomRef - The DOM Element to which scrollLeft will be applied
   * @returns {number} The scroll position that must be set for the DOM element
   */
  denormalizeScrollLeftRTL(iNormalizedScrollLeft: number, oDomRef: Element): number;

  /**
   * Disable touch to mouse handling
   */
  disableTouchToMouseHandling(): void;

  /**
   * Shortcut for document.getElementById(), including a bug fix for older IE versions.
   * @param {string} sId - The id of the DOM element to return
   * @param {Window} oWindow - The window (optional)
   * @returns {Element} The DOMNode identified by the given sId
   */
  domById(sId: string, oWindow?: Window): Element;

  /**
   * Encode the string for inclusion into CSS string literals or identifiers
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   */
  encodeCSS(sString: string): string;

  /**
   * Encode the string for inclusion into HTML content/attribute
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   */
  encodeHTML(sString: string): string;

  /**
   * Encode the string for inclusion into a JS string literal
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   */
  encodeJS(sString: string): string;

  /**
   * Encode the string for inclusion into a URL parameter
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   */
  encodeURL(sString: string): string;

  /**
   * Encode a map of parameters into a combined URL parameter string
   * @param {any} mParams - The map of parameters to encode
   * @returns {string} The URL encoded parameters
   */
  encodeURLParameters(mParams: any): string;

  /**
   * Encode the string for inclusion into XML content/attribute
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   */
  encodeXML(sString: string): string;

  /**
   * Checks whether a given <code>sString</code> ends with <code>sEndString</code> respecting the case of the strings.
   * @param {string} sString - String to be checked
   * @param {string} sEndString - The end string to be searched
   * @returns {boolean} Whether <code>sString</code> ends with <code>sEndString</code>
   */
  endsWith(sString: string, sEndString: string): boolean;

  /**
   * Checks whether a given <code>sString</code> ends with <code>sEndString</code> ignoring the case of the strings.
   * @param {string} sString - String to be checked
   * @param {string} sEndString - The end string to be searched
   * @returns {boolean} Whether <code>sString</code> ends with <code>sEndString</code>
   */
  endsWithIgnoreCase(sString: string, sEndString: string): boolean;

  /**
   * Compares the two given values for equality, especially takes care not to compare arrays and objects by reference, but compares their content. Note: function does not work with comparing XML objects
   * @param {any} a - A value of any type
   * @param {any} b - A value of any type
   * @param {number} maxDepth - Maximum recursion depth
   * @param {boolean} contains - Whether all existing properties in a are equal as in b
   * @returns {boolean} Whether a and b are equal
   */
  equal(a: any, b: any, contains?: boolean): boolean;

  equal(a: any, b: any, maxDepth?: number, contains?: boolean): boolean;

  /**
   * Encode the string for inclusion into HTML content/attribute. Old name "escapeHTML" kept for backward compatibility
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   * @deprecated Has been renamed, use {@link jQuery.sap.encodeHTML} instead.
   */
  escapeHTML(sString: string): string;

  /**
   * Encode the string for inclusion into a JS string literal. Old name "escapeJS" kept for backward compatibility
   * @param {string} sString - The string to be escaped
   * @returns {string} The escaped string
   * @deprecated Since version 1.3.0. Has been renamed, use {@link jQuery.sap.encodeJS} instead.
   */
  escapeJS(sString: string): string;

  /**
   * Escapes all characters that would have a special meaning in a regular expression.
   * 
   * This method can be used when a string with arbitrary content has to be integrated into a regular expression and when the whole string should match literally.
   * 
   * Example: <pre>
   *   var text = "E=m*c^2"; // text to search
   *   var search = "m*c";   // text to search for
   * 
   *   text.match( new RegExp(                         search  ) ); // [ "c" ]
   *   text.match( new RegExp( jQuery.sap.escapeRegExp(search) ) ); // [ "m*c" ]
   * </pre>
   * @param {string} sString - String to escape
   * @returns {string} The escaped string
   */
  escapeRegExp(sString: string): string;

  /**
   * Returns a new constructor function that creates objects with the given prototype.
   * 
   * As of 1.45.0, this method has been deprecated. Use the following code pattern instead: <pre>
   *   function MyFunction() {
   *   };
   *   MyFunction.prototype = oPrototype;
   * </pre>
   * @param {any} oPrototype - Prototype to use for the new objects
   * @returns {Function} the newly created constructor function
   * @deprecated Since version 1.45.0. define your own function and assign <code>oPrototype</code> to its <code>prototype</code> property instead.
   */
  factory(oPrototype: any): Function;

  /**
   * Calls focus() on the given DOM element.
   * @param {Element} oDomRef - The DOM element to focus (or null - in this case the method does nothing)
   * @returns {boolean} Whether the focus() command was executed without an error
   */
  focus(oDomRef: Element): boolean;

  /**
   * Creates a string from a pattern by replacing placeholders with concrete values.
   * 
   * The syntax of the pattern is inspired by (but not fully equivalent to) the java.util.MessageFormat.
   * 
   * Placeholders have the form <code>{ integer }</code>, where any occurrence of <code>{0}</code> is replaced by the value with index 0 in <code>aValues</code>, <code>{1}</code> by the value with index 1 in <code>aValues</code> etc.
   * 
   * To avoid interpretation of curly braces as placeholders, any non-placeholder fragment of the pattern can be enclosed in single quotes. The surrounding single quotes will be omitted from the result. Single quotes that are not meant to escape a fragment and that should appear in the result, need to be doubled. In the result, only a single single quote will occur.
   * 
   * Example Pattern Strings: <pre>
   *   jQuery.sap.formatMessage("Say {0}",     ["Hello"]) -> "Say Hello"    // normal use case
   *   jQuery.sap.formatMessage("Say '{0}'",   ["Hello"]) -> "Say {0}"      // escaped placeholder
   *   jQuery.sap.formatMessage("Say ''{0}''", ["Hello"]) -> "Say 'Hello'"  // doubled single quote
   *   jQuery.sap.formatMessage("Say '{0}'''", ["Hello"]) -> "Say {0}'"     // doubled single quote in quoted fragment
   * </pre>
   * 
   * In contrast to java.util.MessageFormat, format types or format styles are not supported. Everything after the argument index and up to the first closing curly brace is ignored. Nested placeholders (as supported by java.lang.MessageFormat for the format type choice) are not ignored but reported as a parse error.
   * 
   * This method throws an Error when the pattern syntax is not fulfilled (e.g. unbalanced curly braces, nested placeholders or a non-numerical argument index).
   * 
   * This method can also be used as a formatter within a binding. The first part of a composite binding will be used as pattern, the following parts as aValues. If there is only one value and this value is an array it will be handled like the default described above.
   * @param {string} sPattern - A pattern string in the described syntax
   * @param {any[]} aValues - The values to be used instead of the placeholders.
   * @returns {string} The formatted result string
   */
  formatMessage(sPattern: string, aValues?: any[]): string;

  /**
   * Returns the names of all declared modules.
   * @returns {any[]} the names of all declared modules
   */
  getAllDeclaredModules(): any[];

  /**
   * Constructs a URL to load the module with the given name and file type (suffix).
   * 
   * Searches the longest prefix of the given module name for which a registration exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix by the registered URL prefix.
   * 
   * The remainder of the module name is appended to the URL, replacing any dot with a slash.
   * 
   * Finally, the given suffix (typically a file name extension) is added (unconverted).
   * 
   * The returned name (without the suffix) doesn't end with a slash.
   * @param {string} sModuleName - module name to detemrine the path for
   * @param {string} sSuffix - suffix to be added to the resulting path
   * @returns {string} calculated path (URL) to the given module
   */
  getModulePath(sModuleName: string, sSuffix?: string): string;

  /**
   * Returns a JavaScript object which is identified by a sequence of names.
   * 
   * A call to <code>getObject("a.b.C")</code> has essentially the same effect as accessing <code>window.a.b.C</code> but with the difference that missing intermediate objects (a or b in the example above) don't lead to an exception.
   * 
   * When the addressed object exists, it is simply returned. If it doesn't exists, the behavior depends on the value of the second, optional parameter <code>iNoCreates</code> (assuming 'n' to be the number of names in the name sequence): <ul> <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist, then <code>getObject()</code> returns <code>undefined</code>. <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except the <i>last</i> <code>iNoCreates</code> ones. </ul>
   * 
   * Example: <pre>
   *   getObject()            -- returns the context object (either param or window)
   *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
   *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
   *   getObject("a.b.c", 1)  -- will create a and b, but not C.
   * </pre>
   * 
   * When a <code>oContext</code> is given, the search starts in that object. Otherwise it starts in the <code>window</code> object that this plugin has been created in.
   * 
   * Note: Although this method internally uses <code>object["key"]</code> to address object properties, it does not support all possible characters in a name. Especially the dot ('.') is not supported in the individual name segments, as it is always interpreted as a name separator.
   * @param {string} sName - a dot separated sequence of names that identify the required object
   * @param {number} iNoCreates - number of objects (from the right) that should not be created
   * @param {any} oContext - the context to execute the search in
   * @returns {Function} The value of the named object
   */
  getObject(sName: string, oContext?: any): Function;

  getObject(sName: string, iNoCreates?: number, oContext?: any): Function;

  /**
   * Converts a UI5 module name to a unified resource name.
   * 
   * Used by View and Fragment APIs to convert a given module name into a unified resource name. When the <code>sSuffix</code> is not given, the suffix '.js' is added. This fits the most common use case of converting a module name to the Javascript resource that contains the module. Note that an empty <code>sSuffix</code> is not replaced by '.js'. This allows to convert UI5 module names to requireJS module names with a call to this method.
   * @param {string} sModuleName - Module name as a dot separated name
   * @param {string} sSuffix - Suffix to add to the final resource name
   */
  getResourceName(sModuleName: string, sSuffix?: string): void;

  /**
   * Determines the URL for a resource given its unified resource name.
   * 
   * Searches the longest prefix of the given resource name for which a registration exists (see {@link jQuery.sap.registerResourcePath}) and replaces that prefix by the registered URL prefix.
   * 
   * The remainder of the resource name is appended to the URL.
   * 
   * <b>Unified Resource Names</b><br> Several UI5 APIs use <i>Unified Resource Names (URNs)</i> as naming scheme for resources that they deal with (e.h. Javascript, CSS, JSON, XML, ...). URNs are similar to the path component of a URL: <ul> <li>they consist of a non-empty sequence of name segments</li> <li>segments are separated by a forward slash '/'</li> <li>name segments consist of URL path segment characters only. It is recommended to use only ASCII letters (upper or lower case), digits and the special characters '$', '_', '-', '.')</li> <li>the empty name segment is not supported</li> <li>names consisting of dots only, are reserved and must not be used for resources</li> <li>names are case sensitive although the underlying server might be case-insensitive</li> <li>the behavior with regard to URL encoded characters is not specified, %ddd notation should be avoided</li> <li>the meaning of a leading slash is undefined, but might be defined in future. It therefore should be avoided</li> </ul>
   * 
   * UI5 APIs that only deal with Javascript resources, use a slight variation of this scheme, where the extension '.js' is always omitted (see {@link sap.ui.define}, {@link sap.ui.require}).
   * 
   * <b>Relationship to old Module Name Syntax</b><br>
   * 
   * Older UI5 APIs that deal with resources (like {@link jQuery.sap.registerModulePath}, {@link jQuery.sap.require} and {@link jQuery.sap.declare}) used a dot-separated naming scheme (called 'module names') which was motivated by object names in the global namespace in Javascript.
   * 
   * The new URN scheme better matches the names of the corresponding resources (files) as stored in a server and the dot ('.') is no longer a forbidden character in a resource name. This finally allows to handle resources with different types (extensions) with the same API, not only JS files.
   * 
   * Last but not least does the URN scheme better match the naming conventions used by AMD loaders (like <code>requireJS</code>).
   * @param {string} sResourceName - unified resource name of the resource
   * @returns {string} URL to load the resource from
   */
  getResourcePath(sResourceName: string): string;

  /**
   * Returns a new function that returns the given <code>oValue</code> (using its closure).
   * 
   * Avoids the need for a dedicated member for the value.
   * 
   * As closures don't come for free, this function should only be used when polluting the enclosing object is an absolute "must-not" (as it is the case in public base classes).
   * @param {any} oValue - The value that the getter should return
   * @returns {Function} The new getter function
   */
  getter(oValue: any): Function;

  /**
   * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
   * 
   * Example for reading a single URI parameter (or the value of the first occurrence of the URI parameter): <pre>
   * 	var sValue = jQuery.sap.getUriParameters().get("myUriParam");
   * </pre>
   * 
   * Example for reading the values of the first of the URI parameter (with multiple occurrences): <pre>
   * 	var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
   * 	for(i in aValues){
   * 	var sValue = aValues[i];
   * 	}
   * </pre>
   * @param {string} sUri - Uri to determine the parameters for
   * @returns {JQuerySapUtilUriParameters} A new URI parameters instance
   */
  getUriParameters(sUri?: string): JQuerySapUtilUriParameters;

  /**
   * Gets the whitelist for URL validation.
   * @returns {any[]} A copy of the whitelist
   */
  getUrlWhitelist(): any[];

  /**
   * Executes an 'eval' for its arguments in the global context (without closure variables).
   * 
   * This is a synchronous replacement for <code>jQuery.globalEval</code> which in some browsers (e.g. FireFox) behaves asynchronously.
   */
  globalEval(): void;

  /**
   * Transforms a camel case string into a hyphen separated string.
   * @param {string} sString - camel case string
   * @returns {string} The transformed string
   */
  hyphen(sString: string): string;

  /**
   * Includes the script (via &lt;script&gt;-tag) into the head for the specified <code>sUrl</code> and optional <code>sId</code>.
   * @param {any | string} vUrl - the URL of the script to load or a configuration object
   * @param {any | string} vId - id that should be used for the script tag or map of attributes
   * @param {Function} fnLoadCallback - callback function to get notified once the script has been loaded
   * @param {Function} fnErrorCallback - callback function to get notified once the script loading failed
   * @returns {Promise<any> | void} When using the configuration object a <code>Promise</code> will be returned. The documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code> handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code> applies to the <code>reject</code> handler of the <code>Promise</code>.
   */
  includeScript(vUrl: any | string, vId?: any | string, fnLoadCallback?: Function, fnErrorCallback?: Function): Promise<any> | void;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * vUrl: any | string, vId?: any | string, fnLoadCallback?: Function, fnErrorCallback?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  includeScript(...args: any[]): any;

  /**
   * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document. If there is call to <code>includeStylesheet</code> providing the sId of an already included stylesheet, the existing element will be replaced.
   * @param {any | string} vUrl - the URL of the stylesheet to load or a configuration object
   * @param {any | string} vId - id that should be used for the link tag or map of attributes
   * @param {Function} fnLoadCallback - callback function to get notified once the stylesheet has been loaded
   * @param {Function} fnErrorCallback - callback function to get notified once the stylesheet loading failed. In case of usage in IE the error callback will also be executed if an empty stylesheet is loaded. This is the only option how to determine in IE if the load was successful or not since the native onerror callback for link elements doesn't work in IE. The IE always calls the onload callback of the link element.
   * @returns {Promise<any> | void} When using the configuration object a <code>Promise</code> will be returned. The documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code> handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code> applies to the <code>reject</code> handler of the <code>Promise</code>.
   */
  includeStyleSheet(vUrl: any | string, vId?: any | string, fnLoadCallback?: Function, fnErrorCallback?: Function): Promise<any> | void;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * vUrl: any | string, vId?: any | string, fnLoadCallback?: Function, fnErrorCallback?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  includeStyleSheet(...args: any[]): any;

  /**
   * Does some basic modifications to the HTML page that make it more suitable for mobile apps. Only the first call to this method is executed, subsequent calls are ignored. Note that this method is also called by the constructor of toplevel controls like sap.m.App, sap.m.SplitApp and sap.m.Shell. Exception: if no homeIcon was set, subsequent calls have the chance to set it.
   * 
   * The "options" parameter configures what exactly should be done.
   * 
   * It can have the following properties: <ul> <li>viewport: whether to set the viewport in a way that disables zooming (default: true)</li> <li>statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default")</li> <li>hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true)</li> <li>preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true)</li> <li>preventPhoneNumberDetection: whether Safari Mobile should be prevented from transforming any numbers that look like phone numbers into clickable links; this should be left as "true", otherwise it might break controls because Safari actually changes the DOM. This only affects all page content which is created after initMobile is called.</li> <li>rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body)</li> <li>useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true)</li> <li>homeIcon: deprecated since 1.12, use jQuery.sap.setIcons instead. </ul>
   * @param {any} options - configures what exactly should be done
   */
  initMobile(options?: any): void;

  /**
   * Calls a method after a given interval and returns an id for this interval.
   * @param {number} iInterval - Interval time in milliseconds
   * @param {any} oObject - Object from which the method should be called
   * @param {any | string} method - function pointer or name of the method
   * @param {any[]} aParameters - Method parameters
   * @returns {string} Id which can be used to cancel the interval with clearIntervalCall
   */
  intervalCall(iInterval: number, oObject: any, method: any | string, aParameters?: any[]): string;

  /**
   * Check whether a given module has been loaded / declared already.
   * 
   * Returns true as soon as a module has been required the first time, even when loading/executing it has not finished yet. So the main assertion of a return value of <code>true</code> is that the necessary actions have been taken to make the module available in the near future. It does not mean, that the content of the module is already available!
   * 
   * This fuzzy behavior is necessary to avoid multiple requests for the same module. As a consequence of the assertion above, a <i>preloaded</i> module does not count as <i>declared</i>. For preloaded modules, an explicit call to <code>jQuery.sap.require</code> is necessary to make them available.
   * 
   * If a caller wants to know whether a module needs to be loaded from the server, it can set <code>bIncludePreloaded</code> to true. Then, preloaded modules will be reported as 'declared' as well by this method.
   * @param {string} sModuleName - name of the module to be checked
   * @param {boolean} bIncludePreloaded - whether preloaded modules should be reported as declared.
   * @returns {boolean} whether the module has been declared already
   */
  isDeclared(sModuleName: string, bIncludePreloaded?: boolean): boolean;

  /**
   * Whether the given resource has been loaded (or preloaded).
   * @param {string} sResourceName - Name of the resource to check, in unified resource name format
   * @returns {boolean} Whether the resource has been loaded already
   */
  isResourceLoaded(sResourceName: string): boolean;

  /**
   * Returns a new object which has the given <code>oPrototype</code> as its prototype.
   * 
   * If several objects with the same prototype are to be created, {@link jQuery.sap.factory} should be used instead.
   * @param {any} oPrototype - Prototype to use for the new object
   * @returns {any} new object
   * @deprecated Since version 1.45.0. use <code>Object.create(oPrototype)</code> instead.
   */
  newObject(oPrototype: any): any;

  /**
   * Returns the window reference for a DomRef
   * @param {Element} oDomRef - The DOM reference
   * @returns {Window} Window reference
   */
  ownerWindow(oDomRef: Element): Window;

  /**
   * Pads a string on the left side until is has at least the given length.
   * 
   * The method always adds full copies of <code>sPadChar</code> to the given string. When <code>sPadChar</code> has a length > 1, the length of the returned string actually might be greater than <code>iLength</code>.
   * @param {string} sString - String to be padded
   * @param {string} sPadChar - Char to use for the padding
   * @param {number} iLength - Target length of the string
   * @returns {string} The padded string
   */
  padLeft(sString: string, sPadChar: string, iLength: number): string;

  /**
   * Pads a string on the right side until is has at least the given length.
   * 
   * The method always adds full copies of <code>sPadChar</code> to the given string. When <code>sPadChar</code> has a length > 1, the length of the returned string actually might be greater than <code>iLength</code>.
   * @param {string} sString - String to be padded
   * @param {string} sPadChar - Char to use for the padding
   * @param {number} iLength - Target length of the string
   * @returns {string} The padded string
   */
  padRight(sString: string, sPadChar: string, iLength: number): string;

  /**
   * Parses the specified XML formatted string text using native parsing function of the browser and returns a valid XML document. If an error occurred during parsing a parse error object is returned as property (parseError) of the returned XML document object. The parse error object has the following error information parameters: errorCode, url, reason, srcText, line, linepos, filepos
   * @param {string} sXMLText - the XML data as string
   * @returns {any} the parsed XML document with a parseError property as described in getParseError. An error occurred if the errorCode property of the parseError is != 0.
   */
  parseXML(sXMLText: string): any;

  /**
   * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
   * 
   * If option 'url' is passed, immediately a load request for the given target is triggered. A property file that is loaded can contain comments with a leading ! or #. The loaded property list does not contain any comments.
   * 
   * <b>Example for loading a property file:</b> <pre>
   *  jQuery.sap.properties({url : "../myProperty.properties"});
   * </pre>
   * 
   * <b>Example for creating an empty properties instance:</b> <pre>
   *  jQuery.sap.properties();
   * </pre>
   * 
   * <b>Examples for getting and setting properties:</b> <pre>
   * 	var oProperties = jQuery.sap.properties();
   * 	oProperties.setProperty("KEY_1","Test Key");
   * 	var sValue1 = oProperties.getProperty("KEY_1");
   * 	var sValue2 = oProperties.getProperty("KEY_2","Default");
   * </pre>
   * @param {any} mParams - Parameters used to initialize the property list
   * @returns {JQuerySapUtilProperties | Promise<any> | null} A new property collection (synchronous case) or <code>null</code> if the file could not be loaded and <code>returnNullIfMissing</code> was set; in case of asynchronous loading, always a Promise is returned, which resolves with the property collection or with <code>null</code> if the file could not be loaded and <code>returnNullIfMissing</code> was set to true
   */
  properties(mParams?: any): JQuerySapUtilProperties | Promise<any> | null;

  /**
   * Registers a URL prefix for a module name prefix.
   * 
   * Before a module is loaded, the longest registered prefix of its module name is searched for and the associated URL prefix is used as a prefix for the request URL. The remainder of the module name is attached to the request URL by replacing dots ('.') with slashes ('/').
   * 
   * The registration and search operates on full name segments only. So when a prefix
   * 
   * 'sap.com' -> 'http://www.sap.com/ui5/resources/'
   * 
   * is registered, then it will match the name
   * 
   * 'sap.com.Button'
   * 
   * but not
   * 
   * 'sap.commons.Button'
   * 
   * Note that the empty prefix ('') will always match and thus serves as a fallback for any search.
   * 
   * The prefix can either be given as string or as object which contains the url and a 'final' property. If 'final' is set to true, overwriting a module prefix is not possible anymore.
   * @param {string} sModuleName - module name to register a path for
   * @param {any | string} vUrlPrefix - path prefix to register, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
   */
  registerModulePath(sModuleName: string, vUrlPrefix: any | string): void;

  /**
   * Adds all resources from a preload bundle to the preload cache.
   * 
   * When a resource exists already in the cache, the new content is ignored.
   * @param {any} oData - Preload bundle
   */
  registerPreloadedModules(oData: any): void;

  /**
   * Registers a URL prefix for a resource name prefix.
   * 
   * Before a resource is loaded, the longest registered prefix of its unified resource name is searched for and the associated URL prefix is used as a prefix for the request URL. The remainder of the resource name is attached to the request URL 1:1.
   * 
   * The registration and search operates on full name segments only. So when a prefix
   * 
   * 'sap/com' -> 'http://www.sap.com/ui5/resources/'
   * 
   * is registered, then it will match the name
   * 
   * 'sap/com/Button'
   * 
   * but not
   * 
   * 'sap/commons/Button'
   * 
   * Note that the empty prefix ('') will always match and thus serves as a fallback for any search.
   * 
   * The url prefix can either be given as string or as object which contains the url and a final flag. If final is set to true, overwriting a resource name prefix is not possible anymore.
   * @param {string} sResourceNamePrefix - in unified resource name syntax
   * @param {any | string} vUrlPrefix - prefix to use instead of the sResourceNamePrefix, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
   */
  registerResourcePath(sResourceNamePrefix: string, vUrlPrefix: any | string): void;

  /**
   * Removes a whitelist entry for URL validation.
   * @param {number} iIndex - index of entry
   */
  removeUrlWhitelist(iIndex: number): void;

  /**
   * Ensures that the given module is loaded and executed before execution of the current script continues.
   * 
   * By issuing a call to this method, the caller declares a dependency to the listed modules.
   * 
   * Any required and not yet loaded script will be loaded and execute synchronously. Already loaded modules will be skipped.
   * @param {any | string} vModuleName - one or more names of modules to be loaded or in case of an object {modName: "...", type: "..."} where modName is the name of the module and the type could be a specific dot separated extension e.g. <code>{modName: "sap.ui.core.Dev", type: "view"}</code> loads <code>sap/ui/core/Dev.view.js</code> and registers as <code>sap.ui.core.Dev.view</code>
   * @deprecated Since version 1.52. UI5 modules and their dependencies should be defined using {@link sap.ui.define}. When additional modules have to be loaded dynamically at a later point in time, the asynchronous API {@link sap.ui.require} should be used. For more details, see {@link topic:91f23a736f4d1014b6dd926db0e91070 Modules and Dependencies} in the documentation.
   */
  require(vModuleName: any | string): void;

  /**
   * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle} using the given URL and locale to determine what to load.
   * @param {any} mParams - Parameters used to initialize the resource bundle
   * @returns {JQuerySapUtilResourceBundle | Promise<any>} A new resource bundle or a Promise on that bundle (in asynchronous case)
   */
  resources(mParams?: any): JQuerySapUtilResourceBundle | Promise<any>;

  /**
   * Returns the size (width of the vertical / height of the horizontal) native browser scrollbars.
   * 
   * This function must only be used when the DOM is ready.
   * @param {string} sClasses - the CSS class that should be added to the test element.
   * @param {boolean} bForce - force recalculation of size (e.g. when CSS was changed). When no classes are passed all calculated sizes are reset.
   * @returns {any} JSON object with properties <code>width</code> and <code>height</code> (the values are of type number and are pixels).
   */
  scrollbarSize(bForce?: boolean): any;

  scrollbarSize(sClasses?: string, bForce?: boolean): any;

  /**
   * Serializes the specified XML document into a string representation.
   * @param {string} oXMLDocument - the XML document object to be serialized as string
   * @returns {any} the serialized XML string
   */
  serializeXML(oXMLDocument: string): any;

  /**
   * Sets the bookmark icon for desktop browsers and the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
   * 
   * Only call this method once and call it early when the page is loading: browsers behave differently when the favicon is modified while the page is alive. Some update the displayed icon inside the browser but use an old icon for bookmarks. When a favicon is given, any other existing favicon in the document will be removed. When at least one home icon is given, all existing home icons will be removed and new home icon tags for all four resolutions will be created.
   * 
   * The home icons must be in PNG format and given in different sizes for iPad/iPhone with and without retina display. The favicon is used in the browser and for desktop shortcuts and should optimally be in ICO format: PNG does not seem to be supported by Internet Explorer and ICO files can contain different image sizes for different usage locations. E.g. a 16x16px version is used inside browsers.
   * 
   * All icons are given in an an object holding icon URLs and other settings. The properties of this object are: <ul> <li>phone: a 60x60 pixel version for non-retina iPhones</li> <li>tablet: a 76x76 pixel version for non-retina iPads</li> <li>phone@2: a 120x120 pixel version for retina iPhones</li> <li>tablet@2: a 152x152 pixel version for retina iPads</li> <li>precomposed: whether the home icons already have some glare effect (otherwise iOS will add it) (default: false)</li> <li>favicon: the ICO file to be used inside the browser and for desktop shortcuts</li> </ul>
   * 
   * One example is: <pre>
   * {
   *    'phone':'phone-icon_60x60.png',
   *    'phone@2':'phone-retina_120x120.png',
   *    'tablet':'tablet-icon_76x76.png',
   *    'tablet@2':'tablet-retina_152x152.png',
   *    'precomposed':true,
   *    'favicon':'desktop.ico'
   * }
   * </pre> If one of the sizes is not given, the largest available alternative image will be used instead for this size. On Android these icons may or may not be used by the device. Apparently chances can be improved by using icons with glare effect, so the "precomposed" property can be set to "true". Some Android devices may also use the favicon for bookmarks instead of the home icons.</li>
   * @param {any} oIcons
   */
  setIcons(oIcons: any): void;

  /**
   * Sets the "apple-mobile-web-app-capable" and "mobile-web-app-capable" meta information which defines whether the application is loaded in full screen mode (browser address bar and toolbar are hidden) after the user does "add to home screen" on mobile devices. Currently this meta tag is only supported by iOS Safari and mobile Chrome from version 31.
   * 
   * If the application opens new tabs because of attachments, url and so on, setting this to false will let the user be able to go from the new tab back to the application tab after the application is added to home screen.
   * 
   * Note: this function only has effect when the application runs on iOS Safari and mobile Chrome from version 31.
   * @param {boolean} bValue - whether the Application will be loaded in full screen mode after added to home screen from iOS Safari or mobile Chrome from version 31.
   */
  setMobileWebAppCapable(bValue: boolean): void;

  /**
   * Sets an object property to a given value, where the property is identified by a sequence of names (path).
   * 
   * When a <code>oContext</code> is given, the path starts in that object. Otherwise it starts in the <code>window</code> object that this plugin has been created for.
   * 
   * Note: Although this method internally uses <code>object["key"]</code> to address object properties, it does not support all possible characters in a name. Especially the dot ('.') is not supported in the individual name segments, as it is always interpreted as a name separator.
   * @param {string} sName - a dot separated sequence of names that identify the property
   * @param {any} vValue - value to be set, can have any type
   * @param {any} oContext - the context to execute the search in
   */
  setObject(sName: string, vValue: any, oContext?: any): void;

  /**
   * Convenience wrapper around <code>jQuery.ajax()</code> that avoids the need for callback functions when synchronous calls are made. If the setting <code>complexResult</code> is true (default), then the return value is an object with the following properties <ul> <li><code>success</code> boolean whether the call succeeded or not <li><code>data</code> any the data returned by the call. For dataType 'text' this is a string, for JSON it is an object, for XML it is a document. When the call failed, then data is not defined <li><code>status</code> string a textual status ('success,', 'error', 'timeout',...) <li><code>statusCode</code> string the HTTP status code of the request <li><code>error</code> Error an error object (exception) in case an error occurred <li><code>errorText</code> string an error message in case an error occurred </ul>
   * 
   * When <code>complexResult</code> is false, then in the case of success, only 'data' is returned, in case of an error the 'fallback' setting is returned (defaults to undefined).
   * 
   * Note that async=false is always enforced by this method.
   * @param {string} oOrigSettings - the ajax() settings
   * @returns {any} result, see above
   */
  sjax(oOrigSettings: string): any;

  /**
   * Checks whether a given <code>sString</code> starts with <code>sStartString</code> respecting the case of the strings.
   * @param {string} sString - String to be checked
   * @param {string} sStartString - The start string to be searched
   * @returns {boolean} Whether <code>sString</code> starts with <code>sStartString</code>
   */
  startsWith(sString: string, sStartString: string): boolean;

  /**
   * Checks whether a given <code>sString</code> starts with <code>sStartString</code> ignoring the case of both strings.
   * @param {string} sString - String to be checked
   * @param {string} sStartString - The start string to be searched
   * @returns {boolean} Whether <code>sString</code> starts with <code>sStartString</code>
   */
  startsWithIgnoreCase(sString: string, sStartString: string): boolean;

  /**
   * Convenience wrapper for {@link jQuery.sap.sjax} that enforeces the Http method GET and defaults the data type of the result to 'text'.
   * @param {string} sUrl - the URL
   * @param {any | string} data - request parameters in the format accepted by jQuery.ajax()
   * @param {string} sDataType - the type of data expected from the server, default is "text"
   * @returns {any} result @see jQuery.sap.sjax
   */
  syncGet(sUrl: string, data: any | string, sDataType?: string): any;

  /**
   * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'json'. If a fallback value is given, the function simply returns the response as an object or - if some error occurred - the fallback value. This is useful for applications that don't require detailed error diagnostics.
   * 
   * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly or they can omit the fallback value (providing only two parameters to syncGetJSON()). They then receive the same complex result object as for the sjax() call.
   * 
   * Note that providing "undefined" or "null" as a fallback is different from omitting the fallback (complex result).
   * @param {string} sUrl - the URL
   * @param {any | string} data - request parameters in the format accepted by jQuery.ajax()
   * @param {any} fallback - if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned
   * @returns {any} result @see jQuery.sap.sjax
   */
  syncGetJSON(sUrl: string, fallback?: any): any;

  syncGetJSON(sUrl: string, data?: any | string, fallback?: any): any;

  /**
   * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'text'. If a fallback value is given, the function simply returns the response as a text or - if some error occurred - the fallback value. This is useful for applications that don't require detailed error diagnostics.
   * 
   * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly or they can omit the fallback value (providing only two parameters to syncGetText()). They then receive the same complex result object as for the sjax() call.
   * @param {string} sUrl - the URL
   * @param {any | string} data - request parameters in the format accepted by jQuery.ajax()
   * @param {string} fallback - if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned
   * @returns {any} result @see jQuery.sap.sjax
   */
  syncGetText(sUrl: string, fallback?: string): any;

  syncGetText(sUrl: string, data?: any | string, fallback?: string): any;

  /**
   * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method POST and defaults the data type of the result to 'text'.
   * @param {string} sUrl - the URL
   * @param {any | string} data - request parameters in the format accepted by jQuery.ajax()
   * @param {string} sDataType - the type of data expected from the server, default is "text"
   * @returns {any} result @see jQuery.sap.sjax
   */
  syncPost(sUrl: string, data: any | string, sDataType?: string): any;

  /**
   * Search ancestors of the given source DOM element for the specified CSS class name. If the class name is found, set it to the root DOM element of the target control. If the class name is not found, it is also removed from the target DOM element.
   * @param {string} sStyleClass - CSS class name
   * @param {JQuery | sap.ui.core.Control | string} vSource - jQuery object, control or an id of the source element.
   * @param {JQuery | sap.ui.core.Control} vDestination - target jQuery object or a control.
   * @returns {Element | JQuery} Target element
   */
  syncStyleClass(sStyleClass: string, vSource: JQuery | sap.ui.core.Control | string, vDestination: JQuery | sap.ui.core.Control): Element | JQuery;

  /**
   * Creates and returns a pseudo-unique id.
   * 
   * No means for detection of overlap with already present or future UIDs.
   * @returns {string} A pseudo-unique id.
   */
  uid(): string;

  /**
   * Unbinds all events for listening with the given callback function.
   * @param {Function} fnCallback - Callback function
   */
  unbindAnyEvent(fnCallback: Function): void;

  /**
   * Sorts the given array in-place and removes any duplicates (identified by "===").
   * 
   * Use <code>jQuery.unique()</code> for arrays of DOMElements.
   * @param {any[]} a - An Array of any type
   * @returns {any[]} Same array as given (for chaining)
   */
  unique(a: any[]): any[];

  /**
   * Validates a URL. Check if it's not a script or other security issue.
   * 
   * Split URL into components and check for allowed characters according to RFC 3986:
   * 
   * <pre>
   * authority     = [ userinfo "@" ] host [ ":" port ]
   * userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
   * host          = IP-literal / IPv4address / reg-name
   * 
   * IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
   * IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
   * IPv6address   =                            6( h16 ":" ) ls32
   *               /                       "::" 5( h16 ":" ) ls32
   *               / [               h16 ] "::" 4( h16 ":" ) ls32
   *               / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
   *               / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
   *               / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
   *               / [ *4( h16 ":" ) h16 ] "::"              ls32
   *               / [ *5( h16 ":" ) h16 ] "::"              h16
   *               / [ *6( h16 ":" ) h16 ] "::"
   * ls32          = ( h16 ":" h16 ) / IPv4address
   *               ; least-significant 32 bits of address
   * h16           = 1*4HEXDIG
   *               ; 16 bits of address represented in hexadecimal
   * 
   * IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
   * dec-octet     = DIGIT                 ; 0-9
   *               / %x31-39 DIGIT         ; 10-99
   *               / "1" 2DIGIT            ; 100-199
   *               / "2" %x30-34 DIGIT     ; 200-249
   *               / "25" %x30-35          ; 250-255
   * 
   * reg-name      = *( unreserved / pct-encoded / sub-delims )
   * 
   * pct-encoded   = "%" HEXDIG HEXDIG
   * reserved      = gen-delims / sub-delims
   * gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
   * sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
   *               / "*" / "+" / "," / ";" / "="
   * unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
   * pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
   * 
   * path          = path-abempty    ; begins with "/" or is empty
   *               / path-absolute   ; begins with "/" but not "//"
   *               / path-noscheme   ; begins with a non-colon segment
   *               / path-rootless   ; begins with a segment
   *               / path-empty      ; zero characters
   * 
   * path-abempty  = *( "/" segment )
   * path-absolute = "/" [ segment-nz *( "/" segment ) ]
   * path-noscheme = segment-nz-nc *( "/" segment )
   * path-rootless = segment-nz *( "/" segment )
   * path-empty    = 0<pchar>
   * segment       = *pchar
   * segment-nz    = 1*pchar
   * segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
   *               ; non-zero-length segment without any colon ":"
   * 
   * query         = *( pchar / "/" / "?" )
   * 
   * fragment      = *( pchar / "/" / "?" )
   * </pre>
   * 
   * For the hostname component, we are checking for valid DNS hostnames according to RFC 952 / RFC 1123:
   * 
   * <pre>
   * hname         = name *("." name)
   * name          = let-or-digit ( *( let-or-digit-or-hyphen ) let-or-digit )
   * </pre>
   * 
   * When the URI uses the protocol 'mailto:', the address part is additionally checked against the most commonly used parts of RFC 6068:
   * 
   * <pre>
   * mailtoURI     = "mailto:" [ to ] [ hfields ]
   * to            = addr-spec *("," addr-spec )
   * hfields       = "?" hfield *( "&" hfield )
   * hfield        = hfname "=" hfvalue
   * hfname        = *qchar
   * hfvalue       = *qchar
   * addr-spec     = local-part "@" domain
   * local-part    = dot-atom-text              // not accepted: quoted-string
   * domain        = dot-atom-text              // not accepted: "[" *dtext-no-obs "]"
   * dtext-no-obs  = %d33-90 / ; Printable US-ASCII
   *                 %d94-126  ; characters not including
   *                           ; "[", "]", or "\"
   * qchar         = unreserved / pct-encoded / some-delims
   * some-delims   = "!" / "$" / "'" / "(" / ")" / "*"
   *               / "+" / "," / ";" / ":" / "@"
   * 
   * Note:
   * A number of characters that can appear in &lt;addr-spec> MUST be
   * percent-encoded.  These are the characters that cannot appear in
   * a URI according to [STD66] as well as "%" (because it is used for
   * percent-encoding) and all the characters in gen-delims except "@"
   * and ":" (i.e., "/", "?", "#", "[", and "]").  Of the characters
   * in sub-delims, at least the following also have to be percent-
   * encoded: "&", ";", and "=".  Care has to be taken both when
   * encoding as well as when decoding to make sure these operations
   * are applied only once.
   * 
   * </pre>
   * 
   * When a whitelist has been configured using {@link #.addUrlWhitelist addUrlWhitelist}, any URL that passes the syntactic checks above, additionally will be tested against the content of the whitelist.
   * @param {string} sUrl
   * @returns {any} true if valid, false if not valid
   */
  validateUrl(sUrl: string): any;

}
/**
 */
declare interface JQuerySapAct {
  /**
   * Registers the given handler to the activity event, which is fired when an activity was detected after a certain period of inactivity.
   * 
   * The Event is not fired for Internet Explorer 8.
   * @param {Function} fnFunction - The function to call, when an activity event occurs.
   * @param {Object} oListener - The 'this' context of the handler function.
   */
  attachActivate(fnFunction: Function, oListener?: Object): void;

  /**
   * Deregisters a previously registered handler from the activity event.
   * @param {Function} fnFunction - The function to call, when an activity event occurs.
   * @param {Object} oListener - The 'this' context of the handler function.
   */
  detachActivate(fnFunction: Function, oListener?: Object): void;

  /**
   * Checks whether recently an activity was detected.
   * @returns {any} true if recently an activity was detected, false otherwise
   */
  isActive(): any;

  /**
   * Reports an activity.
   */
  refresh(): void;

}
/**
 * Enables the back and forward buttons in browser to navigate back or forth through the browser history stack.<br/><br/>
 * 
 * It also supports adding virtual history which used only to mark some intermediate state in order to navigate back to the previous state. And this state will be skipped from the browser history stack immediately after a new history state is added to the history stack after this state <br/><br/>
 * 
 * By providing the hash saved from the return value of calling jQuery.sap.history.addHistory, jQuery.sap.history.backToHash will navigate back directly to the history state with the same hash. <br/><br/>
 * 
 * Please use jQuery.sap.history.back() to go one step back in the history stack instead of using window.history.back(), because it handles the empty history stack situation and will call the defaultHandler for this case. <br/><br/>
 * 
 * Example for the usage of history handling: <pre>
 * 	//Initialization
 * 	jQuery.sap.history({
 * 		routes: [], //please refer to the jQuery.sap.history function comment for the format.
 * 		defaultHandler: function(){
 * 			//code here
 * 		}
 * 	});
 * 
 * 	//add history
 * 	var hash = jQuery.sap.history.addHistory("IDENTIFIER", jsonData);
 * 
 * 	//add virtual history
 * 	jQuery.sap.history.addVirtualHistory();
 * 
 * 	//back to hash
 * 	jQuery.sap.history.backToHash(hash);
 * 
 * 	//back one step along the history stack
 * 	jQuery.sap.history.back();
 * </pre>
 */
declare class JQuerySapHistory {
  /**
   * jQuery.sap.history is deprecated. Please use {@link sap.ui.core.routing.Route} instead.
   * 
   * Initialize the history handling and set the routes and default handler. This should be only called once with the mSettings set in the right format. If the mSettings is not an object, you have another chance to call this function again to initialize the history handling. But once the mSettings is set with an object, you can only call the addRoute and setDefaultHandler to set the data.
   * @param {any} mSettings - The map that contains data in format: <pre> { 	routes: [{ 		path: string //identifier for one kind of hash 		handler: function	//function what will be called when the changed hash is matched against the path. 							//first parameter: the json data passed in when calling the addHistory 							//second parameter: the type of the navigation {@link jQuery.sap.history.NavType} 		}], 		defaultHandler: function	//this function will be called when empty hash is matched 									//first parameter: the type of the navigation {@link jQuery.sap.history.NavType} } </pre>
   */
  constructor(mSettings: any);

  /**
   * This function adds a history record. It will not trigger the related handler of the routes, the changes have to be done by the developer. Normally, a history record should be added when changes are done already.
   * @param {string} sIdf - The identifier defined in the routes which will be matched in order to call the corresponding handler
   * @param {any} oStateData - The object passed to the corresponding handler when the identifier is matched with the url hash
   * @param {boolean} bBookmarkable - Default value is set to true. If this is set to false, the default handler will be called when this identifier and data are matched
   * @param {boolean} bVirtual - This states if the history is a virtual history that should be skipped when going forward or backward in the history stack.
   * @returns {string} sHash The complete hash string which contains the identifier, stringified data, optional uid, and bookmarkable digit. This hash can be passed into the backToHash function when navigating back to this state is intended.
   */
  addHistory(sIdf: string, oStateData: any, bBookmarkable: boolean, bVirtual?: boolean): string;

  /**
   * Adds a route to the history handling.
   * @param {string} sIdf - The identifier that is matched with the hash in the url in order to call the corresponding handler.
   * @param {Function} fn - The function that will be called when the identifier is matched with the hash.
   * @param {any} oThis - If oThis is provided, the fn function's this keyword will be bound to this object.
   * @returns {any} It returns the this object to enable chaining.
   */
  addRoute(sIdf: string, fn: Function, oThis?: any): any;

  /**
   * This function adds a virtual history record based on the current hash. A virtual record is only for marking the current state of the application, and when the back button clicked it will return to the previous state. It is used when the marked state shouldn't be seen by the user when user click the back or forward button of the browser. For example, when showing a context menu a virtual history record should be added and this record will be skipped when user navigates back and it will return directly to the previous history record. If you avoid adding the virtual history record, it will return to one history record before the one your virtual record is based on. That's why virtual record is necessary.
   */
  addVirtualHistory(): void;

  /**
   * This function navigates back through the history stack. The number of steps is set by the parameter iSteps. It also handles the situation when it's called while there's nothing in the history stack. Normally this happens when the application is restored from the bookmark. If there's nothing in the history stack, the default handler will be called with NavType jQuery.sap.history.NavType.Back.
   * @param {number} iSteps - how many steps you want to go back, by default the value is 1.
   */
  back(iSteps?: number): void;

  /**
   * This function will navigate back to the recent history state which has the sPath identifier. It is usually used to navigate back along one specific route and jump over the intermediate history state if there are any.
   * @param {string} sPath - The route identifier to which the history navigates back.
   */
  backThroughPath(sPath: string): void;

  /**
   * This function calculate the number of back steps to the specific sHash passed as parameter, and then go back to the history state with this hash.
   * @param {string} sHash - The hash string needs to be navigated. This is normally returned when you call the addhistory method.
   */
  backToHash(sHash: string): void;

  /**
   * Set the default handler which will be called when there's an empty hash in the url.
   * @param {Function} fn - The function that will be set as the default handler
   */
  setDefaultHandler(fn: Function): void;

}
/**
 */
declare interface JQuerySapInteraction {
  /**
   * Enables the interaction tracking.
   * @param {boolean} bActive - state of the interaction detection
   */
  setActive(bActive: boolean): void;

}
/**
 * Enumeration of key codes.
 */
declare enum JQuerySapKeyCodes {
  /**
   */
  A = "A",
  /**
   */
  ALT = "ALT",
  /**
   */
  ARROW_DOWN = "ARROW_DOWN",
  /**
   */
  ARROW_LEFT = "ARROW_LEFT",
  /**
   */
  ARROW_RIGHT = "ARROW_RIGHT",
  /**
   */
  ARROW_UP = "ARROW_UP",
  /**
   */
  B = "B",
  /**
   */
  BACKSLASH = "BACKSLASH",
  /**
   */
  BACKSPACE = "BACKSPACE",
  /**
   */
  BREAK = "BREAK",
  /**
   */
  C = "C",
  /**
   */
  CAPS_LOCK = "CAPS_LOCK",
  /**
   */
  COMMA = "COMMA",
  /**
   */
  CONTEXT_MENU = "CONTEXT_MENU",
  /**
   */
  CONTROL = "CONTROL",
  /**
   */
  D = "D",
  /**
   */
  DELETE = "DELETE",
  /**
   */
  DIGIT_0 = "DIGIT_0",
  /**
   */
  DIGIT_1 = "DIGIT_1",
  /**
   */
  DIGIT_2 = "DIGIT_2",
  /**
   */
  DIGIT_3 = "DIGIT_3",
  /**
   */
  DIGIT_4 = "DIGIT_4",
  /**
   */
  DIGIT_5 = "DIGIT_5",
  /**
   */
  DIGIT_6 = "DIGIT_6",
  /**
   */
  DIGIT_7 = "DIGIT_7",
  /**
   */
  DIGIT_8 = "DIGIT_8",
  /**
   */
  DIGIT_9 = "DIGIT_9",
  /**
   */
  DOT = "DOT",
  /**
   */
  E = "E",
  /**
   */
  END = "END",
  /**
   */
  ENTER = "ENTER",
  /**
   */
  EQUALS = "EQUALS",
  /**
   */
  ESCAPE = "ESCAPE",
  /**
   */
  F = "F",
  /**
   */
  F1 = "F1",
  /**
   */
  F10 = "F10",
  /**
   */
  F11 = "F11",
  /**
   */
  F12 = "F12",
  /**
   */
  F2 = "F2",
  /**
   */
  F3 = "F3",
  /**
   */
  F4 = "F4",
  /**
   */
  F5 = "F5",
  /**
   */
  F6 = "F6",
  /**
   */
  F7 = "F7",
  /**
   */
  F8 = "F8",
  /**
   */
  F9 = "F9",
  /**
   */
  G = "G",
  /**
   */
  GREAT_ACCENT = "GREAT_ACCENT",
  /**
   */
  H = "H",
  /**
   */
  HOME = "HOME",
  /**
   */
  I = "I",
  /**
   */
  INSERT = "INSERT",
  /**
   */
  J = "J",
  /**
   */
  K = "K",
  /**
   */
  L = "L",
  /**
   */
  M = "M",
  /**
   */
  MINUS = "MINUS",
  /**
   */
  N = "N",
  /**
   */
  NUM_LOCK = "NUM_LOCK",
  /**
   */
  NUMPAD_0 = "NUMPAD_0",
  /**
   */
  NUMPAD_1 = "NUMPAD_1",
  /**
   */
  NUMPAD_2 = "NUMPAD_2",
  /**
   */
  NUMPAD_3 = "NUMPAD_3",
  /**
   */
  NUMPAD_4 = "NUMPAD_4",
  /**
   */
  NUMPAD_5 = "NUMPAD_5",
  /**
   */
  NUMPAD_6 = "NUMPAD_6",
  /**
   */
  NUMPAD_7 = "NUMPAD_7",
  /**
   */
  NUMPAD_8 = "NUMPAD_8",
  /**
   */
  NUMPAD_9 = "NUMPAD_9",
  /**
   */
  NUMPAD_ASTERISK = "NUMPAD_ASTERISK",
  /**
   */
  NUMPAD_COMMA = "NUMPAD_COMMA",
  /**
   */
  NUMPAD_MINUS = "NUMPAD_MINUS",
  /**
   */
  NUMPAD_PLUS = "NUMPAD_PLUS",
  /**
   */
  NUMPAD_SLASH = "NUMPAD_SLASH",
  /**
   */
  O = "O",
  /**
   */
  OPEN_BRACKET = "OPEN_BRACKET",
  /**
   */
  P = "P",
  /**
   */
  PAGE_DOWN = "PAGE_DOWN",
  /**
   */
  PAGE_UP = "PAGE_UP",
  /**
   */
  PIPE = "PIPE",
  /**
   */
  PLUS = "PLUS",
  /**
   */
  PRINT = "PRINT",
  /**
   */
  Q = "Q",
  /**
   */
  R = "R",
  /**
   */
  S = "S",
  /**
   */
  SCROLL_LOCK = "SCROLL_LOCK",
  /**
   */
  SEMICOLON = "SEMICOLON",
  /**
   */
  SHIFT = "SHIFT",
  /**
   */
  SINGLE_QUOTE = "SINGLE_QUOTE",
  /**
   */
  SLASH = "SLASH",
  /**
   */
  SLEEP = "SLEEP",
  /**
   */
  SPACE = "SPACE",
  /**
   */
  T = "T",
  /**
   */
  TAB = "TAB",
  /**
   */
  TURN_OFF = "TURN_OFF",
  /**
   */
  U = "U",
  /**
   */
  V = "V",
  /**
   */
  W = "W",
  /**
   */
  WINDOWS = "WINDOWS",
  /**
   */
  X = "X",
  /**
   */
  Y = "Y",
  /**
   */
  Z = "Z",
}
/**
 * A Logging API for JavaScript.
 * 
 * Provides methods to manage a client-side log and to create entries in it. Each of the logging methods {@link jQuery.sap.log.debug}, {@link jQuery.sap.log.info}, {@link jQuery.sap.log.warning}, {@link jQuery.sap.log.error} and {@link jQuery.sap.log.fatal} creates and records a log entry, containing a timestamp, a log level, a message with details and a component info. The log level will be one of {@link jQuery.sap.log.Level} and equals the name of the concrete logging method.
 * 
 * By using the {@link jQuery.sap.log.setLevel} method, consumers can determine the least important log level which should be recorded. Less important entries will be filtered out. (Note that higher numeric values represent less important levels). The initially set level depends on the mode that UI5 is running in. When the optimized sources are executed, the default level will be {@link jQuery.sap.log.Level.ERROR}. For normal (debug sources), the default level is {@link jQuery.sap.log.Level.DEBUG}.
 * 
 * All logging methods allow to specify a <b>component</b>. These components are simple strings and don't have a special meaning to the UI5 framework. However they can be used to semantically group log entries that belong to the same software component (or feature). There are two APIs that help to manage logging for such a component. With <code>{@link jQuery.sap.log.getLogger}(sComponent)</code>, one can retrieve a logger that automatically adds the given <code>sComponent</code> as component parameter to each log entry, if no other component is specified. Typically, JavaScript code will retrieve such a logger once during startup and reuse it for the rest of its lifecycle. Second, the {@link jQuery.sap.log.Logger#setLevel}(iLevel, sComponent) method allows to set the log level for a specific component only. This allows a more fine granular control about the created logging entries. {@link jQuery.sap.log.Logger#getLevel} allows to retrieve the currently effective log level for a given component.
 * 
 * {@link jQuery.sap.log.getLogEntries} returns an array of the currently collected log entries.
 * 
 * Furthermore, a listener can be registered to the log. It will be notified whenever a new entry is added to the log. The listener can be used for displaying log entries in a separate page area, or for sending it to some external target (server).
 */
declare interface JQuerySapLog {
  Level: JQuerySapLogLevel;
  Logger: JQuerySapLogLogger;
  LogLevel: JQuerySapLogLogLevel;
  /**
   * Allows to add a new LogListener that will be notified for new log entries.
   * 
   * The given object must provide method <code>onLogEntry</code> and can also be informed about <code>onDetachFromLog</code> and <code>onAttachToLog</code>
   * @param {any} oListener - The new listener object that should be informed
   * @returns {JQuerySapLog} The global logger
   */
  addLogListener(oListener?: any): JQuerySapLog;

  /**
   * Creates a new debug-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  debug(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  debug(...args: any[]): any;

  /**
   * Creates a new error-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  error(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  error(...args: any[]): any;

  /**
   * Creates a new fatal-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance for method chaining
   */
  fatal(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  fatal(...args: any[]): any;

  /**
   * Returns the log level currently effective for the given component. If no component is given or when no level has been configured for a given component, the log level for the default component of this logger is returned.
   * @param {string} sComponent - Name of the component to retrieve the log level for
   * @returns {number} The log level for the given component or the default log level
   */
  getLevel(sComponent?: string): number;

  /**
   * Retrieves the currently recorded log entries.
   * @deprecated Since version 1.1.2. To avoid confusion with getLogger, this method has been renamed to {@link jQuery.sap.log.getLogEntries}.
   */
  getLog(): void;

  /**
   * Returns the logged entries recorded so far as an array.
   * 
   * Log entries are plain JavaScript objects with the following properties <ul> <li>timestamp {number} point in time when the entry was created <li>level {int} LogLevel level of the entry <li>message {string} message text of the entry </ul>
   * @returns {any[]} an array containing the recorded log entries
   */
  getLogEntries(): any[];

  /**
   * Returns a {@link jQuery.sap.log.Logger} for the given component.
   * 
   * The method might or might not return the same logger object across multiple calls. While loggers are assumed to be light weight objects, consumers should try to avoid redundant calls and instead keep references to already retrieved loggers.
   * 
   * The optional second parameter <code>iDefaultLogLevel</code> allows to specify a default log level for the component. It is only applied when no log level has been defined so far for that component (ignoring inherited log levels). If this method is called multiple times for the same component but with different log levels, only the first call one might be taken into account.
   * @param {string} sComponent - Component to create the logger for
   * @param {number} iDefaultLogLevel - a default log level to be used for the component, if no log level has been defined for it so far.
   * @returns {JQuerySapLogLogger} A logger for the component.
   */
  getLogger(sComponent: string, iDefaultLogLevel?: number): JQuerySapLogLogger;

  /**
   * Creates a new info-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  info(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  info(...args: any[]): any;

  /**
   * Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
   * 
   * If no component is given, the default component of this logger will be taken into account.
   * @param {number} iLevel - The log level in question
   * @param {string} sComponent - Name of the component to check the log level for
   * @returns {boolean} Whether logging is enabled or not
   */
  isLoggable(sComponent?: string): boolean;

  isLoggable(iLevel?: number, sComponent?: string): boolean;

  /**
   * Allows to remove a registered LogListener.
   * @param {any} oListener - The new listener object that should be removed
   * @returns {JQuerySapLog} The global logger
   */
  removeLogListener(oListener?: any): JQuerySapLog;

  /**
   * Defines the maximum <code>jQuery.sap.log.Level</code> of log entries that will be recorded. Log entries with a higher (less important) log level will be omitted from the log. When a component name is given, the log level will be configured for that component only, otherwise the log level for the default component of this logger is set. For the global logger, the global default level is set.
   * 
   * <b>Note</b>: Setting a global default log level has no impact on already defined component log levels. They always override the global default log level.
   * @param {JQuerySapLogLevel} iLogLevel - The new log level
   * @param {string} sComponent - The log component to set the log level for
   * @returns {JQuerySapLogLogger} This logger object to allow method chaining
   */
  setLevel(iLogLevel: JQuerySapLogLevel, sComponent?: string): JQuerySapLogLogger;

  /**
   * Creates a new trace-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log-instance
   */
  trace(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  trace(...args: any[]): any;

  /**
   * Creates a new warning-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  warning(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  warning(...args: any[]): any;

}
/**
 * Enumeration of the configurable log levels that a Logger should persist to the log.
 * 
 * Only if the current LogLevel is higher than the level {@link jQuery.sap.log.Level} of the currently added log entry, then this very entry is permanently added to the log. Otherwise it is ignored.
 */
declare enum JQuerySapLogLevel {
  /**
   * Debug level. Use this for logging information necessary for debugging
   */
  DEBUG = "DEBUG",
  /**
   * Error level. Use this for logging of erroneous but still recoverable situations
   */
  ERROR = "ERROR",
  /**
   * Fatal level. Use this for logging unrecoverable situations
   */
  FATAL = "FATAL",
  /**
   * Info level. Use this for logging information of purely informative nature
   */
  INFO = "INFO",
  /**
   * Do not log anything
   */
  NONE = "NONE",
  /**
   * Trace level. Use this for tracing the program flow.
   */
  TRACE = "TRACE",
  /**
   * Warning level. Use this for logging unwanted but foreseen situations
   */
  WARNING = "WARNING",
}
/**
 * A Logger class
 */
declare class JQuerySapLogLogger {
  /**
   * Creates a new Logger instance which will use the given component string for all logged messages without a specific component.
   * @param {string} sDefaultComponent - The component to use
   */
  constructor(sDefaultComponent: string);

  /**
   * Creates a new debug-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  debug(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  debug(...args: any[]): any;

  /**
   * Creates a new error-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  error(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  error(...args: any[]): any;

  /**
   * Creates a new fatal-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance for method chaining
   */
  fatal(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  fatal(...args: any[]): any;

  /**
   * Returns the log level currently effective for the given component. If no component is given or when no level has been configured for a given component, the log level for the default component of this logger is returned.
   * @param {string} sComponent - Name of the component to retrieve the log level for
   * @returns {number} The log level for the given component or the default log level
   */
  getLevel(sComponent?: string): number;

  /**
   * Creates a new info-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  info(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  info(...args: any[]): any;

  /**
   * Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
   * 
   * If no component is given, the default component of this logger will be taken into account.
   * @param {number} iLevel - The log level in question
   * @param {string} sComponent - Name of the component to check the log level for
   * @returns {boolean} Whether logging is enabled or not
   */
  isLoggable(sComponent?: string): boolean;

  isLoggable(iLevel?: number, sComponent?: string): boolean;

  /**
   * Defines the maximum <code>jQuery.sap.log.Level</code> of log entries that will be recorded. Log entries with a higher (less important) log level will be omitted from the log. When a component name is given, the log level will be configured for that component only, otherwise the log level for the default component of this logger is set. For the global logger, the global default level is set.
   * 
   * <b>Note</b>: Setting a global default log level has no impact on already defined component log levels. They always override the global default log level.
   * @param {JQuerySapLogLevel} iLogLevel - The new log level
   * @param {string} sComponent - The log component to set the log level for
   * @returns {JQuerySapLogLogger} This logger object to allow method chaining
   */
  setLevel(iLogLevel: JQuerySapLogLevel, sComponent?: string): JQuerySapLogLogger;

  /**
   * Creates a new trace-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log-instance
   */
  trace(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  trace(...args: any[]): any;

  /**
   * Creates a new warning-level entry in the log with the given message, details and calling component.
   * @param {string} sMessage - Message text to display
   * @param {string} sDetails - Details about the message, might be omitted
   * @param {string} sComponent - Name of the component that produced the log entry
   * @param {Function} fnSupportInfo - Callback that returns an additional support object to be logged in support mode. This function is only called if support info mode is turned on with <code>logSupportInfo(true)</code>. To avoid negative effects regarding execution times and memory consumption, the returned object should be a simple immutable JSON object with mostly static and stable content.
   * @returns {JQuerySapLogLogger} The log instance
   */
  warning(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function): JQuerySapLogLogger;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: Function
   * @param {any[]} args
   * @returns {any} 
   */
  warning(...args: any[]): any;

}
/**
 * Enumeration of levels that can be used in a call to {@link jQuery.sap.log.Logger#setLevel}(iLevel, sComponent).
 */
declare interface JQuerySapLogLogLevel {
}
/**
 * Namespace for the jQuery performance measurement plug-in provided by SAP SE.
 */
declare interface JQuerySapMeasure {
  /**
   * Adds a performance measurement with all data This is useful to add external measurements (e.g. from a backend) to the common measurement UI
   * @param {string} sId - ID of the measurement
   * @param {string} sInfo - Info for the measurement
   * @param {number} iStart - start timestamp
   * @param {number} iEnd - end timestamp
   * @param {number} iTime - time in milliseconds
   * @param {number} iDuration - effective time in milliseconds
   * @param {any[] | string} aCategories - An optional list of categories for the measure
   * @returns {any} [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration, categories (false if error)
   */
  add(sId: string, sInfo: string, iStart: number, iEnd: number, iTime: number, iDuration: number, aCategories?: any[] | string): any;

  /**
   * Starts an average performance measure. The duration of this measure is an avarage of durations measured for each call. Optionally a category or list of categories can be passed to allow filtering of measurements.
   * @param {string} sId - ID of the measurement
   * @param {string} sInfo - Info for the measurement
   * @param {any[] | string} aCategories - An optional list of categories for the measure
   * @returns {any} current measurement containing id, info and start-timestamp (false if error)
   */
  average(sId: string, sInfo: string, aCategories?: any[] | string): any;

  /**
   * Clears all performance measurements
   */
  clear(): void;

  /**
   * Clears all interaction measurements
   */
  clearInteractionMeasurements(): void;

  /**
   * Clears all request timings safely
   */
  clearRequestTimings(): void;

  /**
   * Ends a performance measure
   * @param {string} sId - ID of the measurement
   * @returns {any} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
   */
  end(sId: string): any;

  /**
   * End an interaction measurements
   * @param {boolean} bForce - forces end of interaction now and ignores further re-renderings
   */
  endInteraction(bForce: boolean): void;

  /**
   * Gets all interaction measurements for which a provided filter function returns a truthy value. To filter for certain categories of measurements a fnFilter can be implemented like this <code> function(oInteractionMeasurement) { return oInteractionMeasurement.duration > 0 }</code>
   * @param {Function} fnFilter - a filter function that returns true if the passed measurement should be added to the result
   * @returns {any[]} all interaction measurements passing the filter function successfully
   */
  filterInteractionMeasurements(fnFilter: Function): any[];

  /**
   * Gets all performance measurements where a provided filter function returns a truthy value. If neither a filter function nor a category is provided an empty array is returned. To filter for certain properties of measurements a fnFilter can be implemented like this <code> function(oMeasurement) { return oMeasurement.duration > 50; }</code>
   * @param {Function} fnFilter - a filter function that returns true if the passed measurement should be added to the result
   * @param {any | boolean} bCompleted - Optional parameter to determine if either completed or incomplete measurements should be returned (both if not set or undefined)
   * @param {any[]} aCategories - The function returns only measurements which match these specified categories
   * @returns {any} [] filtered array with measurements containing id, info and start-timestamp, end-timestamp, time, duration, categories (false if error)
   */
  filterMeasurements(fnFilter?: Function, bCompleted?: any | boolean, aCategories?: any[]): any;

  /**
   * This method overload is here just for compatibility reasons to avoid compiler errors because UI5 API doesn't follow all TypeScript method overload rules.
   * fnFilter?: Function, bCompleted?: any | boolean, aCategories?: any[]
   * @param {any[]} args
   * @returns {any} 
   */
  filterMeasurements(...args: any[]): any;

  /**
   * Gets the current state of the perfomance measurement functionality
   * @returns {boolean} current state of the perfomance measurement functionality
   */
  getActive(): boolean;

  /**
   * Gets all interaction measurements
   * @param {boolean} bFinalize - finalize the current pending interaction so that it is contained in the returned array
   * @returns {any[]} all interaction measurements
   */
  getAllInteractionMeasurements(bFinalize: boolean): any[];

  /**
   * Gets all performance measurements
   * @param {boolean} bCompleted - Whether only completed measurements should be returned, if explicitly set to false only incomplete measurements are returned
   * @returns {any[]} current array with measurements containing id, info and start-timestamp, end-timestamp, time, duration, categories
   */
  getAllMeasurements(bCompleted?: boolean): any[];

  /**
   * Gets a performance measure
   * @param {string} sId - ID of the measurement
   * @returns {any} current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
   */
  getMeasurement(sId: string): any;

  /**
   * Gets the current request timings array for type 'resource' safely
   * @returns {any[]} array of performance timing objects
   */
  getRequestTimings(): any[];

  /**
   * Pauses a performance measure
   * @param {string} sId - ID of the measurement
   * @returns {any} current measurement containing id, info and start-timestamp, pause-timestamp (false if error)
   */
  pause(sId: string): any;

  /**
   * Registers an average measurement for a given objects method
   * @param {string} sId - the id of the measurement
   * @param {any} oObject - the object of the method
   * @param {string} sMethod - the name of the method
   * @param {any[]} aCategories - An optional categories list for the measurement
   * @returns {boolean} true if the registration was successful
   */
  registerMethod(sId: string, oObject: any, sMethod: string, aCategories?: any[]): boolean;

  /**
   * Removes a performance measure
   * @param {string} sId - ID of the measurement
   */
  remove(sId: string): void;

  /**
   * Resumes a performance measure
   * @param {string} sId - ID of the measurement
   * @returns {any} current measurement containing id, info and start-timestamp, resume-timestamp (false if error)
   */
  resume(sId: string): any;

  /**
   * Activates or deactivates the performance measure functionality Optionally a category or list of categories can be passed to restrict measurements to certain categories like "javascript", "require", "xmlhttprequest", "render"
   * @param {boolean} bOn - state of the perfomance measurement functionality to set
   * @param {any[] | string} aCategories - An optional list of categories that should be measured
   * @returns {boolean} current state of the perfomance measurement functionality
   */
  setActive(bOn: boolean, aCategories: any[] | string): boolean;

  /**
   * Sets the request buffer size for the measurement safely
   * @param {number} iSize - size of the buffer
   */
  setRequestBufferSize(iSize: number): void;

  /**
   * Starts a performance measure. Optionally a category or list of categories can be passed to allow filtering of measurements.
   * @param {string} sId - ID of the measurement
   * @param {string} sInfo - Info for the measurement
   * @param {any[] | string} aCategories - An optional list of categories for the measure
   * @returns {any} current measurement containing id, info and start-timestamp (false if error)
   */
  start(sId: string, sInfo: string, aCategories?: any[] | string): any;

  /**
   * Start an interaction measurements
   * @param {string} sType - type of the event which triggered the interaction
   * @param {any} oSrcElement - the control on which the interaction was triggered
   */
  startInteraction(sType: string, oSrcElement: any): void;

  /**
   * Unregisters all average measurements
   */
  unregisterAllMethods(): void;

  /**
   * Unregisters an average measurement for a given objects method
   * @param {string} sId - the id of the measurement
   * @param {any} oObject - the object of the method
   * @param {string} sMethod - the name of the method
   * @returns {boolean} true if the unregistration was successful
   */
  unregisterMethod(sId: string, oObject: any, sMethod: string): boolean;

}
/**
 * Enumeration of all so called "pseudo events", a useful classification of standard browser events as implied by SAP product standards.
 * 
 * Whenever a browser event is recognized as one or more pseudo events, then this classification is attached to the original {@link jQuery.Event} object and thereby delivered to any jQuery-style listeners registered for that browser event.
 * 
 * Pure JavaScript listeners can evaluate the classification information using the {@link jQuery.Event#isPseudoType} method.
 * 
 * Instead of using the procedure as described above, the SAPUI5 controls and elements should simply implement an <code>on<i>pseudo-event</i>(oEvent)</code> method. It will be invoked only when that specific pseudo event has been recognized. This simplifies event dispatching even further.
 */
declare interface JQuerySapPseudoEvents {
  /**
   * Pseudo event for keyboard backspace without modifiers (Ctrl, Alt or Shift)
   */
  sapbackspace: any;
  /**
   * Pseudo event for keyboard backspace with modifiers (Ctrl, Alt or Shift)
   */
  sapbackspacemodifiers: any;
  /**
   * Pseudo event for pseudo bottom event
   */
  sapbottom: any;
  /**
   * Pseudo event for pseudo collapse event (keyboard numpad -) without modifiers (Ctrl, Alt or Shift)
   */
  sapcollapse: any;
  /**
   * Pseudo event for pseudo collapse event (keyboard numpad *)
   */
  sapcollapseall: any;
  /**
   * Pseudo event for pseudo collapse event (keyboard numpad -) with modifiers (Ctrl, Alt or Shift)
   */
  sapcollapsemodifiers: any;
  /**
   * Pseudo event for pseudo 'decrease' event without modifiers (Ctrl, Alt or Shift)
   */
  sapdecrease: any;
  /**
   * Pseudo event for pseudo 'decrease' event with modifiers (Ctrl, Alt or Shift)
   */
  sapdecreasemodifiers: any;
  /**
   * Pseudo event indicating delayed double click (e.g. for inline edit)
   */
  sapdelayeddoubleclick: any;
  /**
   * Pseudo event for keyboard delete without modifiers (Ctrl, Alt or Shift)
   */
  sapdelete: any;
  /**
   * Pseudo event for keyboard delete with modifiers (Ctrl, Alt or Shift)
   */
  sapdeletemodifiers: any;
  /**
   * Pseudo event for keyboard arrow down without modifiers (Ctrl, Alt or Shift)
   */
  sapdown: any;
  /**
   * Pseudo event for keyboard arrow down with modifiers (Ctrl, Alt or Shift)
   */
  sapdownmodifiers: any;
  /**
   * Pseudo event for keyboard End without modifiers (Ctrl, Alt or Shift)
   */
  sapend: any;
  /**
   * Pseudo event for keyboard End with modifiers (Ctrl, Alt or Shift)
   */
  sapendmodifiers: any;
  /**
   * Pseudo event for keyboard enter without modifiers (Ctrl, Alt or Shift)
   */
  sapenter: any;
  /**
   * Pseudo event for keyboard enter with modifiers (Ctrl, Alt or Shift)
   */
  sapentermodifiers: any;
  /**
   * Pseudo event for keyboard escape
   */
  sapescape: any;
  /**
   * Pseudo event for pseudo expand event (keyboard numpad +) without modifiers (Ctrl, Alt or Shift)
   */
  sapexpand: any;
  /**
   * Pseudo event for pseudo expand event (keyboard numpad +) with modifiers (Ctrl, Alt or Shift)
   */
  sapexpandmodifiers: any;
  /**
   * Pseudo event for pseudo 'hide' event (Alt + up-Arrow)
   */
  saphide: any;
  /**
   * Pseudo event for keyboard Home/Pos1 with modifiers (Ctrl, Alt or Shift)
   */
  saphome: any;
  /**
   * Pseudo event for keyboard Home/Pos1 without modifiers (Ctrl, Alt or Shift)
   */
  saphomemodifiers: any;
  /**
   * Pseudo event for pseudo 'increase' event without modifiers (Ctrl, Alt or Shift)
   */
  sapincrease: any;
  /**
   * Pseudo event for pseudo 'increase' event with modifiers (Ctrl, Alt or Shift)
   */
  sapincreasemodifiers: any;
  /**
   * Pseudo event for keyboard arrow left without modifiers (Ctrl, Alt or Shift)
   */
  sapleft: any;
  /**
   * Pseudo event for keyboard arrow left with modifiers (Ctrl, Alt or Shift)
   */
  sapleftmodifiers: any;
  /**
   * Pseudo event for pressing the '-' (minus) sign.
   */
  sapminus: any;
  /**
   * Pseudo event for pseudo 'next' event without modifiers (Ctrl, Alt or Shift)
   */
  sapnext: any;
  /**
   * Pseudo event for pseudo 'next' event with modifiers (Ctrl, Alt or Shift)
   */
  sapnextmodifiers: any;
  /**
   * Pseudo event for keyboard page down without modifiers (Ctrl, Alt or Shift)
   */
  sappagedown: any;
  /**
   * Pseudo event for keyboard page down with modifiers (Ctrl, Alt or Shift)
   */
  sappagedownmodifiers: any;
  /**
   * Pseudo event for keyboard page up without modifiers (Ctrl, Alt or Shift)
   */
  sappageup: any;
  /**
   * Pseudo event for keyboard page up with modifiers (Ctrl, Alt or Shift)
   */
  sappageupmodifiers: any;
  /**
   * Pseudo event for pressing the '+' (plus) sign.
   */
  sapplus: any;
  /**
   * Pseudo event for pseudo 'previous' event without modifiers (Ctrl, Alt or Shift)
   */
  sapprevious: any;
  /**
   * Pseudo event for pseudo 'previous' event with modifiers (Ctrl, Alt or Shift)
   */
  sappreviousmodifiers: any;
  /**
   * Pseudo event for keyboard arrow right without modifiers (Ctrl, Alt or Shift)
   */
  sapright: any;
  /**
   * Pseudo event for keyboard arrow right with modifiers (Ctrl, Alt or Shift)
   */
  saprightmodifiers: any;
  /**
   * Pseudo event for pseudo 'select' event... space, enter, ... without modifiers (Ctrl, Alt or Shift)
   */
  sapselect: any;
  /**
   * Pseudo event for pseudo 'select' event... space, enter, ... with modifiers (Ctrl, Alt or Shift)
   */
  sapselectmodifiers: any;
  /**
   * Pseudo event for pseudo 'show' event (F4, Alt + down-Arrow)
   */
  sapshow: any;
  /**
   * Pseudo event for pseudo skip back (F6 + shift modifier)
   */
  sapskipback: any;
  /**
   * Pseudo event for pseudo skip forward (F6 + no modifier)
   */
  sapskipforward: any;
  /**
   * Pseudo event for keyboard space without modifiers (Ctrl, Alt or Shift)
   */
  sapspace: any;
  /**
   * Pseudo event for keyboard space with modifiers (Ctrl, Alt or Shift)
   */
  sapspacemodifiers: any;
  /**
   * Pseudo event for keyboard tab (TAB + no modifier)
   */
  saptabnext: any;
  /**
   * Pseudo event for keyboard tab (TAB + shift modifier)
   */
  saptabprevious: any;
  /**
   * Pseudo event for pseudo top event
   */
  saptop: any;
  /**
   * Pseudo event for keyboard arrow up without modifiers (Ctrl, Alt or Shift)
   */
  sapup: any;
  /**
   * Pseudo event for keyboard arrow up with modifiers (Ctrl, Alt or Shift)
   */
  sapupmodifiers: any;
}
/**
 * Returns a {@link jQuery.sap.storage.Storage Storage} object for a given HTML5 storage (type) and, as a convenience, provides static functions to access the default (session) storage.
 * 
 * When called as a function, it returns an instance of {@link jQuery.sap.storage.Storage}, providing access to the storage of the given {@link jQuery.sap.storage.Type} or to the given HTML5 Storage object.
 * 
 * The default session storage can be easily accessed with methods {@link jQuery.sap.storage.get}, {@link jQuery.sap.storage.put}, {@link jQuery.sap.storage.remove}, {@link jQuery.sap.storage.clear}, {@link jQuery.sap.storage.getType} and {@link jQuery.sap.storage.removeAll}
 */
declare interface JQuerySapStorage {
  Storage: JQuerySapStorageStorage;
  Type: JQuerySapStorageType;
  /**
   * Deletes all the entries saved in the session (Independent of the current Storage instance!).
   * 
   * CAUTION: This method should be called only in very particular situations, when a global erasing of data is required. Given that the method deletes the data saved under any ID, it should not be called when managing data for specific controls.
   * @returns {boolean} true if execution of removal was successful or the data to remove doesn't exist, and false if the feature is unavailable or a problem occurred
   */
  clear(): boolean;

  /**
   * Retrieves the state string stored in the session under the key sStorageKeyPrefix + sId.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to retrieve
   * @returns {string} the string from the storage, if the retrieval was successful, and null otherwise
   */
  get(sId: string): string;

  /**
   * Returns the type of the storage.
   * @returns {JQuerySapStorageType | string} the type of the storage or "unknown"
   */
  getType(): JQuerySapStorageType | string;

  /**
   * Returns whether the given storage is suppported.
   * @returns {boolean} true if storage is supported, false otherwise (e.g. due to browser security settings)
   */
  isSupported(): boolean;

  /**
   * Stores the passed state string in the session, under the key sStorageKeyPrefix + sId.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to store
   * @param {string} sStateToStore - content to store
   * @returns {boolean} true if the data were successfully stored, false otherwise
   */
  put(sId: string, sStateToStore: string): boolean;

  /**
   * Deletes the state string stored in the session under the key sStorageKeyPrefix + sId.s
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to delete
   * @returns {boolean} true if the deletion was successful or the data doesn't exist under the specified key, and false if the feature is unavailable or a problem occurred
   */
  remove(sId: string): boolean;

  /**
   * Deletes all state strings stored in the session under the key prefix sStorageKeyPrefix + sIdPrefix.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sIdPrefix - Id prefix for the states to delete
   * @returns {boolean} true if the deletion was successful or the data doesn't exist under the specified key, and false if the feature is unavailable or a problem occurred
   */
  removeAll(sIdPrefix: string): boolean;

}
/**
 * A Storage API for JavaScript.
 * 
 * Provides methods to store data on the client using Web Storage API support by the browser. The data received by this API must be already serialized, in string format. Similarly, the API returns the retrieved data in serialized string format, so it is the responsibility of the caller to de-serialize it, if applicable.
 * 
 * Attention: The Web Storage API stores the data on the client. Therefore do not use this API for confidential information.
 * 
 * One can get access to the 'default' storage by using {@link jQuery.sap.storage} directly or alternatively via factory functionality available as <code>jQuery.sap.storage(jQuery.sap.storage.Type.session)</code> returning an object implementing this interface.
 * 
 * A typical intended usage of this API is the storage of a string representing the state of a control. In such usage, the data is stored in the browser session, and the methods to be used are {@link #put} and {@link #get}. The method {@link #remove} can be used to delete the previously saved state.
 * 
 * In sake of completeness, the method {@link #clear} is available. However, it should be called only in very particular situations, when a global erasing of data is required. If only keys with certain prefix should be deleted the method {@link #removeAll} should be used.
 */
declare interface JQuerySapStorageStorage {
  /**
   * Deletes all the entries saved in the session (Independent of the current Storage instance!).
   * 
   * CAUTION: This method should be called only in very particular situations, when a global erasing of data is required. Given that the method deletes the data saved under any ID, it should not be called when managing data for specific controls.
   * @returns {boolean} true if execution of removal was successful or the data to remove doesn't exist, and false if the feature is unavailable or a problem occurred
   */
  clear(): boolean;

  /**
   * Retrieves the state string stored in the session under the key sStorageKeyPrefix + sId.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to retrieve
   * @returns {string} the string from the storage, if the retrieval was successful, and null otherwise
   */
  get(sId: string): string;

  /**
   * Returns the type of the storage.
   * @returns {JQuerySapStorageType | string} the type of the storage or "unknown"
   */
  getType(): JQuerySapStorageType | string;

  /**
   * Returns whether the given storage is suppported.
   * @returns {boolean} true if storage is supported, false otherwise (e.g. due to browser security settings)
   */
  isSupported(): boolean;

  /**
   * Stores the passed state string in the session, under the key sStorageKeyPrefix + sId.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to store
   * @param {string} sStateToStore - content to store
   * @returns {boolean} true if the data were successfully stored, false otherwise
   */
  put(sId: string, sStateToStore: string): boolean;

  /**
   * Deletes the state string stored in the session under the key sStorageKeyPrefix + sId.s
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sId - Id for the state to delete
   * @returns {boolean} true if the deletion was successful or the data doesn't exist under the specified key, and false if the feature is unavailable or a problem occurred
   */
  remove(sId: string): boolean;

  /**
   * Deletes all state strings stored in the session under the key prefix sStorageKeyPrefix + sIdPrefix.
   * 
   * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
   * @param {string} sIdPrefix - Id prefix for the states to delete
   * @returns {boolean} true if the deletion was successful or the data doesn't exist under the specified key, and false if the feature is unavailable or a problem occurred
   */
  removeAll(sIdPrefix: string): boolean;

}
/**
 * Enumeration of the storage types supported by {@link jQuery.sap.storage.Storage}
 */
declare enum JQuerySapStorageType {
  /**
   * Indicates usage of the browser's globalStorage feature
   */
  global = "global",
  /**
   * Indicates usage of the browser's localStorage feature
   */
  local = "local",
  /**
   * Indicates usage of the browser's sessionStorage feature
   */
  session = "session",
}
/**
 */
declare interface JQuerySapUtil {
  Properties: JQuerySapUtilProperties;
  ResourceBundle: JQuerySapUtilResourceBundle;
  UriParameters: JQuerySapUtilUriParameters;
}
/**
 * Represents a collection of string properties (key/value pairs).
 * 
 * Each key and its corresponding value in the collection is a string, keys are case-sensitive.
 * 
 * Use {@link jQuery.sap.properties} to create an instance of <code>jQuery.sap.util.Properties</code>.
 * 
 * The {@link #getProperty} method can be used to retrieve a value from the collection, {@link #setProperty} to store or change a value for a key and {@link #getKeys} can be used to retrieve an array of all keys that are currently stored in the collection.
 */
declare interface JQuerySapUtilProperties {
  /**
   * Creates and returns a clone of the property collection.
   * @returns {this} A clone of the property collection
   */
  clone(): this;

  /**
   * Returns an array of all keys in the property collection.
   * @returns {any[]} All keys in the property collection
   */
  getKeys(): any[];

  /**
   * Returns the value for the given key or <code>null</code> if the collection has no value for the key.
   * 
   * Optionally, a default value can be given which will be returned if the collection does not contain a value for the key; only non-empty default values are supported.
   * @param {string} sKey - Key to return the value for
   * @param {string} sDefaultValue - Optional, a default value that will be returned if the requested key is not in the collection
   * @returns {string} Value for the given key or the default value or <code>null</code> if no default value or a falsy default value was given
   */
  getProperty(sKey: string, sDefaultValue?: string): string;

  /**
   * Stores or changes the value for the given key in the collection.
   * 
   * If the given value is not a string, the collection won't be modified. The key is always cast to a string.
   * @param {string} sKey - Key of the property
   * @param {string} sValue - String value for the key
   */
  setProperty(sKey: string, sValue: string): void;

}
/**
 * Contains locale-specific texts.
 * 
 * If you need a locale-specific text within your application, you can use the resource bundle to load the locale-specific file from the server and access the texts of it.
 * 
 * Use {@link jQuery.sap.resources} to create an instance of jQuery.sap.util.ResourceBundle. There you have to specify the URL to the base .properties file of a bundle (.properties without any locale information, e.g. "mybundle.properties"), and optionally a locale. The locale is defined as a string of the language and an optional country code separated by underscore (e.g. "en_GB" or "fr"). If no locale is passed, the default locale is "en" if the SAPUI5 framework is not available. Otherwise the default locale is taken from the SAPUI5 configuration.
 * 
 * With the getText() method of the resource bundle, a locale-specific string value for a given key will be returned.
 * 
 * With the given locale, the ResourceBundle requests the locale-specific properties file (e.g. "mybundle_fr_FR.properties"). If no file is found for the requested locale or if the file does not contain a text for the given key, a sequence of fall back locales is tried one by one. First, if the locale contains a region information (fr_FR), then the locale without the region is tried (fr). If that also can't be found or doesn't contain the requested text, the English file is used (en - assuming that most development projects contain at least English texts). If that also fails, the file without locale (base URL of the bundle) is tried.
 * 
 * If none of the requested files can be found or none of them contains a text for the given key, then the key itself is returned as text.
 * 
 * Exception: Fallback for "zh_HK" is "zh_TW" before zh.
 */
declare interface JQuerySapUtilResourceBundle {
  /**
   * Returns a locale-specific string value for the given key sKey.
   * 
   * The text is searched in this resource bundle according to the fallback chain described in {@link jQuery.sap.util.ResourceBundle}. If no text could be found, the key itself is used as text.
   * 
   * If the second parameter<code>aArgs</code> is given, then any placeholder of the form "{<i>n</i>}" (with <i>n</i> being an integer) is replaced by the corresponding value from <code>aArgs</code> with index <i>n</i>. Note: This replacement is applied to the key if no text could be found. For more details on the replacement mechanism refer to {@link jQuery.sap.formatMessage}.
   * @param {string} sKey - Key to retrieve the text for
   * @param {any[]} aArgs - List of parameter values which should replace the placeholders "{<i>n</i>}" (<i>n</i> is the index) in the found locale-specific string value. Note that the replacement is done whenever <code>aArgs</code> is given, no matter whether the text contains placeholders or not and no matter whether <code>aArgs</code> contains a value for <i>n</i> or not.
   * @returns {string} The value belonging to the key, if found; otherwise the key itself.
   */
  getText(sKey: string, aArgs?: any[]): string;

  /**
   * Checks whether a text for the given key can be found in the first loaded resource bundle or not. Neither the custom resource bundles nor the fallback chain will be processed.
   * 
   * This method allows to check for the existence of a text without triggering requests for the fallback locales.
   * 
   * When requesting the resource bundle asynchronously this check must only be used after the resource bundle has been loaded.
   * @param {string} sKey - Key to check
   * @returns {boolean} true if the text has been found in the concrete bundle
   */
  hasText(sKey: string): boolean;

}
/**
 * Encapsulates all URI parameters of the current windows location (URL).
 * 
 * Use {@link jQuery.sap.getUriParameters} to create an instance of jQuery.sap.util.UriParameters.
 */
declare interface JQuerySapUtilUriParameters {
}
/**
 * Represents a version consisting of major, minor, patch version and suffix, e.g. '1.2.7-SNAPSHOT'.
 */
declare class JQuerySapVersion {
  /**
   * Returns a Version instance created from the given parameters.
   * 
   * This function can either be called as a constructor (using <code>new</code>) or as a normal function. It always returns an immutable Version instance.
   * 
   * The parts of the version number (major, minor, patch, suffix) can be provided in several ways: <ul> <li>Version("1.2.3-SNAPSHOT") - as a dot-separated string. Any non-numerical char or a dot followed by a non-numerical char starts the suffix portion. Any missing major, minor or patch versions will be set to 0.</li> <li>Version(1,2,3,"-SNAPSHOT") - as individual parameters. Major, minor and patch must be integer numbers or empty, suffix must be a string not starting with digits.</li> <li>Version([1,2,3,"-SNAPSHOT"]) - as an array with the individual parts. The same type restrictions apply as before.</li> <li>Version(otherVersion) - as a Version instance (cast operation). Returns the given instance instead of creating a new one.</li> </ul>
   * 
   * To keep the code size small, this implementation mainly validates the single string variant. All other variants are only validated to some degree. It is the responsibility of the caller to provide proper parts.
   * @param {JQuerySapVersion | any[] | number | string} vMajor - the major part of the version (int) or any of the single parameter variants explained above.
   * @param {number} iMinor - the minor part of the version number
   * @param {number} iPatch - the patch part of the version number
   * @param {string} sSuffix - the suffix part of the version number
   */
  constructor(vMajor: JQuerySapVersion | any[] | number | string, iMinor: number, iPatch: number, sSuffix: string);

  /**
   * Compares this version with a given one.
   * 
   * The version with which this version should be compared can be given as a <code>jQuery.sap.Version</code> instance, as a string (e.g. <code>v.compareto("1.4.5")</code>). Or major, minor, patch and suffix values can be given as separate parameters (e.g. <code>v.compareTo(1, 4, 5)</code>) or in an array (e.g. <code>v.compareTo([1, 4, 5])</code>).
   * @returns {number} 0, if the given version is equal to this version, a negative value if the given other version is greater and a positive value otherwise
   */
  compareTo(): number;

  /**
   * Returns the major version part of this version.
   * @returns {number} the major version part of this version
   */
  getMajor(): number;

  /**
   * Returns the minor version part of this version.
   * @returns {number} the minor version part of this version
   */
  getMinor(): number;

  /**
   * Returns the patch (or micro) version part of this version.
   * @returns {number} the patch version part of this version
   */
  getPatch(): number;

  /**
   * Returns the version suffix of this version.
   * @returns {string} the version suffix of this version
   */
  getSuffix(): string;

  /**
   * Checks whether this version is in the range of the given interval (start inclusive, end exclusive).
   * 
   * The boundaries against which this version should be checked can be given as <code>jQuery.sap.Version</code> instances (e.g. <code>v.inRange(v1, v2)</code>), as strings (e.g. <code>v.inRange("1.4", "2.7")</code>) or as arrays (e.g. <code>v.inRange([1,4], [2,7])</code>).
   * @param {JQuerySapVersion | any[] | string} vMin - the start of the range (inclusive)
   * @param {JQuerySapVersion | any[] | string} vMax - the end of the range (exclusive)
   * @returns {boolean} <code>true</code> if this version is greater or equal to <code>vMin</code> and smaller than <code>vMax</code>, <code>false</code> otherwise.
   */
  inRange(vMin: JQuerySapVersion | any[] | string, vMax: JQuerySapVersion | any[] | string): boolean;

  /**
   * Returns a string representation of this version.
   * @returns {string} a string representation of this version.
   */
  toString(): string;

}
