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
         * <p>Suite controls library.</p>
         */
        namespace suite {
            /**
             * <p>This control shows a circle which radius and color depends on the given parameters</p>
             */
            export class TaskCircle extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new TaskCircle.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaDescribedBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.suite.TaskCircle;
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.suite.TaskCircle;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.TaskCircle/events/press" data-sap-ui-target="sap.ui.suite.TaskCircle/events/press">press</a> event of this <code>sap.ui.suite.TaskCircle</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.suite.TaskCircle</code> itself.</p><p>Event is fired when the user clicks the control.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.suite.TaskCircle</code> itself</p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: Function, oListener?: any): sap.ui.suite.TaskCircle;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.TaskCircle/events/press" data-sap-ui-target="sap.ui.suite.TaskCircle/events/press">press</a> event of this <code>sap.ui.suite.TaskCircle</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: Function, oListener: any): sap.ui.suite.TaskCircle;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.TaskCircle/events/press" data-sap-ui-target="sap.ui.suite.TaskCircle/events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): sap.ui.suite.TaskCircle;
                /**
                 * <p>Puts the focus to the control.</p>
                 */
                focus(): void;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Color of the circle. The default color is red.</p><p>Default value is <code>Gray</code>.</p>
                 * @returns sap.ui.suite.TaskCircleColor <p>Value of property <code>color</code></p>
                 */
                getColor(): sap.ui.suite.TaskCircleColor;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getMaxValue" data-sap-ui-target="getMaxValue">maxValue</a>.</p><p>Upper limit of the displayed values. Default is 100.</p><p>Default value is <code>100</code>.</p>
                 * @returns number <p>Value of property <code>maxValue</code></p>
                 */
                getMaxValue(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getMinValue" data-sap-ui-target="getMinValue">minValue</a>.</p><p>Lower limit of the displayed values. Default is 0.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>minValue</code></p>
                 */
                getMinValue(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>value</code></p>
                 */
                getValue(): number;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes an ariaDescribedBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaDescribedBy or <code>null</code></p>
                 */
                removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Color of the circle. The default color is red.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Gray</code>.</p>
                 * @param {sap.ui.suite.TaskCircleColor} sColor <p>New value for property <code>color</code></p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColor(sColor: sap.ui.suite.TaskCircleColor): sap.ui.suite.TaskCircle;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getMaxValue" data-sap-ui-target="getMaxValue">maxValue</a>.</p><p>Upper limit of the displayed values. Default is 100.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100</code>.</p>
                 * @param {number} iMaxValue <p>New value for property <code>maxValue</code></p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxValue(iMaxValue: number): sap.ui.suite.TaskCircle;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getMinValue" data-sap-ui-target="getMinValue">minValue</a>.</p><p>Lower limit of the displayed values. Default is 0.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMinValue <p>New value for property <code>minValue</code></p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinValue(iMinValue: number): sap.ui.suite.TaskCircle;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.TaskCircle/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iValue <p>New value for property <code>value</code></p>
                 * @returns sap.ui.suite.TaskCircle <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(iValue: number): sap.ui.suite.TaskCircle;
            }
            /**
             * <p>Defined color values for the Task Circle Control</p>
             */
            export enum TaskCircleColor {
                /**
                 * <p>Default value</p>
                 */
                Gray = "Gray",
                /**
                 * <p>Green</p>
                 */
                Green = "Green",
                /**
                 * <p>Red</p>
                 */
                Red = "Red",
                /**
                 * <p>Yellow</p>
                 */
                Yellow = "Yellow",
            }
            /**
             * <p>This control shows a vertical progress bar in dependency of the given percentage. Only values between 0 and 100 are valid.</p>
             */
            export class VerticalProgressIndicator extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new VerticalProgressIndicator.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaDescribedBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.suite.VerticalProgressIndicator <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.suite.VerticalProgressIndicator;
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.suite.VerticalProgressIndicator <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.suite.VerticalProgressIndicator;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/events/press" data-sap-ui-target="sap.ui.suite.VerticalProgressIndicator/events/press">press</a> event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.suite.VerticalProgressIndicator</code> itself.</p><p>Event is fired when the user clicks the control.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.suite.VerticalProgressIndicator</code> itself</p>
                 * @returns sap.ui.suite.VerticalProgressIndicator <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: Function, oListener?: any): sap.ui.suite.VerticalProgressIndicator;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/events/press" data-sap-ui-target="sap.ui.suite.VerticalProgressIndicator/events/press">press</a> event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.suite.VerticalProgressIndicator <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: Function, oListener: any): sap.ui.suite.VerticalProgressIndicator;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/events/press" data-sap-ui-target="sap.ui.suite.VerticalProgressIndicator/events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.suite.VerticalProgressIndicator <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): sap.ui.suite.VerticalProgressIndicator;
                /**
                 * <p>Puts the focus to the control.</p>
                 */
                focus(): void;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getPercentage" data-sap-ui-target="getPercentage">percentage</a>.</p><p>The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.</p>
                 * @returns number <p>Value of property <code>percentage</code></p>
                 */
                getPercentage(): number;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes an ariaDescribedBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaDescribedBy or <code>null</code></p>
                 */
                removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.suite.VerticalProgressIndicator/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Property setter for the Percentage, which determines the height of the vertical bar. Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%. A new rendering is not necessary, only the bar will be moved</p>
                 * @param {number} iPercentage 
                 * @returns sap.ui.suite.VerticalProgressIndicator <p><code>this</code> to allow method chaining</p>
                 */
                setPercentage(iPercentage: number): sap.ui.suite.VerticalProgressIndicator;
            }
        }
    }
}
