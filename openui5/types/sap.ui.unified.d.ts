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
         * <p>Unified controls intended for both, mobile and desktop scenarios</p>
         */
        namespace unified {
            /**
             * <p>Basic Calendar. This calendar is used for DatePickers</p>
             */
            export class Calendar extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new Calendar.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.Calendar;
                /**
                 * <p>Adds some disabledDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addDisabledDate(oDisabledDate: sap.ui.unified.DateRange): sap.ui.unified.Calendar;
                /**
                 * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.Calendar;
                /**
                 * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.Calendar;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/cancel" data-sap-ui-target="sap.ui.unified.Calendar/events/cancel">cancel</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.</p><p>Date selection was cancelled</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCancel(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/select" data-sap-ui-target="sap.ui.unified.Calendar/events/select">select</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.</p><p>Date selection changed</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/startDateChange" data-sap-ui-target="sap.ui.unified.Calendar/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.</p><p><code>startDate</code> was changed while navigation in <code>Calendar</code></p><p>Use <code>getStartDate</code> function to determine the current start date</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachStartDateChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.Calendar/events/weekNumberSelect">weekNumberSelect</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.Calendar</code> itself.</p><p>Week number selection changed. By default, clicking on the week number will select the corresponding week. If the week has already been selected, clicking the week number will deselect it.</p><p>The default behavior can be prevented using the <code>preventDefault</code> method.</p><p><b>Note</b> Works for Gregorian calendars only and when <code>intervalSelection</code> is set to 'true'.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code> itself</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachWeekNumberSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Destroys all the disabledDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyDisabledDates(): sap.ui.unified.Calendar;
                /**
                 * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySelectedDates(): sap.ui.unified.Calendar;
                /**
                 * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySpecialDates(): sap.ui.unified.Calendar;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/cancel" data-sap-ui-target="sap.ui.unified.Calendar/events/cancel">cancel</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCancel(fnFunction: Function, oListener: any): sap.ui.unified.Calendar;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/select" data-sap-ui-target="sap.ui.unified.Calendar/events/select">select</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.Calendar;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/startDateChange" data-sap-ui-target="sap.ui.unified.Calendar/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachStartDateChange(fnFunction: Function, oListener: any): sap.ui.unified.Calendar;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.Calendar/events/weekNumberSelect">weekNumberSelect</a> event of this <code>sap.ui.unified.Calendar</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachWeekNumberSelect(fnFunction: Function, oListener: any): sap.ui.unified.Calendar;
                /**
                 * <p>Displays a date in the calendar but don't set the focus.</p>
                 * @param {any} oDate <p>JavaScript date object for focused date.</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> to allow method chaining</p>
                 */
                displayDate(oDate: any): sap.ui.unified.Calendar;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/cancel" data-sap-ui-target="sap.ui.unified.Calendar/events/cancel">cancel</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCancel(mParameters?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/select" data-sap-ui-target="sap.ui.unified.Calendar/events/select">select</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireSelect(mParameters?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/startDateChange" data-sap-ui-target="sap.ui.unified.Calendar/events/startDateChange">startDateChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireStartDateChange(mParameters?: any): sap.ui.unified.Calendar;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Calendar/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.Calendar/events/weekNumberSelect">weekNumberSelect</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns boolean <p>Whether or not to prevent the default action</p>
                 */
                protected fireWeekNumberSelect(mParameters?: any): boolean;
                /**
                 * <p>Sets the focused date of the calendar.</p>
                 * @param {any} oDate <p>JavaScript date object for focused date.</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> to allow method chaining</p>
                 */
                focusDate(oDate: any): sap.ui.unified.Calendar;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p><p>Dates or date ranges for disabled dates.</p><p>To set a single date (instead of a range), set only the <code>startDate</code> property of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange" data-sap-ui-target="DateRange">sap.ui.unified.DateRange</a> class.</p>
                 * @returns sap.ui.unified.DateRange[] 
                 */
                getDisabledDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getFirstDayOfWeek" data-sap-ui-target="getFirstDayOfWeek">firstDayOfWeek</a>.</p><p>If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.</p><p>Default value is <code>-1</code>.</p>
                 * @returns number <p>Value of property <code>firstDayOfWeek</code></p>
                 */
                getFirstDayOfWeek(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                 */
                getIntervalSelection(): boolean;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getLegend(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getMaxDate" data-sap-ui-target="getMaxDate">maxDate</a>.</p><p>Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> if the date is inside of a month the complete month is displayed, but dates outside the valid range can not be selected.</p><p><b>Note:</b> If the <code>maxDate</code> is set to be before the <code>minDate</code>, the <code>minDate</code> is set to the begin of the month of the <code>maxDate</code>.</p>
                 * @returns any <p>Value of property <code>maxDate</code></p>
                 */
                getMaxDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getMinDate" data-sap-ui-target="getMinDate">minDate</a>.</p><p>Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> if the date is inside of a month the complete month is displayed, but dates outside the valid range can not be selected.</p><p><b>Note:</b> If the <code>minDate</code> is set to be after the <code>maxDate</code>, the <code>maxDate</code> is set to the end of the month of the <code>minDate</code>.</p>
                 * @returns any <p>Value of property <code>minDate</code></p>
                 */
                getMinDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Determines the number of months displayed.</p><p>As of version 1.50, the duplicated dates are not displayed if there are multiple months.</p><p><b>Note:</b> On phones, only one month is displayed.</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>months</code></p>
                 */
                getMonths(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.</p><p><b>Note:</b> Keep in mind that this property sets only weekly-recurring days as non-working. If you need specific dates or dates ranges, such as national holidays, use the <code>specialDates</code> aggregation to set them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.</p>
                 * @returns number[] <p>Value of property <code>nonWorkingDays</code></p>
                 */
                getNonWorkingDays(): number[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p>
                 * @returns sap.ui.core.CalendarType <p>Value of property <code>primaryCalendarType</code></p>
                 */
                getPrimaryCalendarType(): sap.ui.core.CalendarType;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSecondaryCalendarType" data-sap-ui-target="getSecondaryCalendarType">secondaryCalendarType</a>.</p><p>If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type</p>
                 * @returns sap.ui.core.CalendarType <p>Value of property <code>secondaryCalendarType</code></p>
                 */
                getSecondaryCalendarType(): sap.ui.core.CalendarType;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Dates or date ranges for selected dates.</p><p>To set a single date (instead of a range), set only the <code>startDate</code> property of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange" data-sap-ui-target="DateRange">sap.ui.unified.DateRange</a> class.</p>
                 * @returns sap.ui.unified.DateRange[] 
                 */
                getSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getShowWeekNumbers" data-sap-ui-target="getShowWeekNumbers">showWeekNumbers</a>.</p><p>Determines whether the week numbers in the months are displayed.</p><p><b>Note:</b> For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showWeekNumbers</code></p>
                 */
                getShowWeekNumbers(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if intervalSelection is enabled, can be selected</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>singleSelection</code></p>
                 */
                getSingleSelection(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Dates or date ranges with type, to visualize special days in the <code>Calendar</code>. If one day is assigned to more than one Type, only the first one will be used.</p><p>To set a single date (instead of a range), set only the <code>startDate</code> property of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange" data-sap-ui-target="DateRange">sap.ui.unified.DateRange</a> class.</p><p><b>Note:</b> Keep in mind that the <code>NonWorking</code> type is for marking specific dates or date ranges as non-working, where if you need a weekly-reccuring non-working days (weekend), you should use the <code>nonWorkingDays</code> property. Both the non-working days (from property) and dates (from aggregation) are visualized the same.</p>
                 * @returns sap.ui.unified.DateTypeRange[] 
                 */
                getSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Returns the first day of the displayed month.</p><p>There might be some days of the previous month shown, but they can not be focused.</p>
                 * @returns any <p>JavaScript date object for start date.</p>
                 */
                getStartDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of Calendar</p><p><b>Note:</b> There is a theme depending minimum width, so the calendar can not be set smaller.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfDisabledDate(oDisabledDate: sap.ui.unified.DateRange): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                /**
                 * <p>Inserts a disabledDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the disabledDate should be inserted at; for a negative value of <code>iIndex</code>, the disabledDate is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate is inserted at the last position</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertDisabledDate(oDisabledDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.Calendar;
                /**
                 * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.Calendar;
                /**
                 * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.Calendar;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllDisabledDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a disabledDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateRange} vDisabledDate <p>The disabledDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateRange <p>The removed disabledDate or <code>null</code></p>
                 */
                removeDisabledDate(vDisabledDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                /**
                 * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                 */
                removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                /**
                 * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                 */
                removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getFirstDayOfWeek" data-sap-ui-target="getFirstDayOfWeek">firstDayOfWeek</a>.</p><p>If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                 * @param {number} iFirstDayOfWeek <p>New value for property <code>firstDayOfWeek</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFirstDayOfWeek(iFirstDayOfWeek: number): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.Calendar;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a maximum date for the calendar.</p>
                 * @param {Date} oDate <p>a JavaScript date</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> for method chaining</p>
                 */
                setMaxDate(oDate: Date): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a minimum date for the calendar.</p>
                 * @param {Date} oDate <p>a JavaScript date</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> for method chaining</p>
                 */
                setMinDate(oDate: Date): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Determines the number of months displayed.</p><p>As of version 1.50, the duplicated dates are not displayed if there are multiple months.</p><p><b>Note:</b> On phones, only one month is displayed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iMonths <p>New value for property <code>months</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMonths(iMonths: number): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.</p><p><b>Note:</b> Keep in mind that this property sets only weekly-recurring days as non-working. If you need specific dates or dates ranges, such as national holidays, use the <code>specialDates</code> aggregation to set them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number[]} sNonWorkingDays <p>New value for property <code>nonWorkingDays</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setNonWorkingDays(sNonWorkingDays: number[]): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CalendarType} sPrimaryCalendarType <p>New value for property <code>primaryCalendarType</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSecondaryCalendarType" data-sap-ui-target="getSecondaryCalendarType">secondaryCalendarType</a>.</p><p>If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CalendarType} sSecondaryCalendarType <p>New value for property <code>secondaryCalendarType</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getShowWeekNumbers" data-sap-ui-target="getShowWeekNumbers">showWeekNumbers</a>.</p><p>Determines whether the week numbers in the months are displayed.</p><p><b>Note:</b> For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowWeekNumbers <p>New value for property <code>showWeekNumbers</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowWeekNumbers(bShowWeekNumbers: boolean): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if intervalSelection is enabled, can be selected</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSingleSelection(bSingleSelection: boolean): sap.ui.unified.Calendar;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of Calendar</p><p><b>Note:</b> There is a theme depending minimum width, so the calendar can not be set smaller.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.unified.Calendar <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.Calendar;
            }
            /**
             * <p>An appointment for use in a <code>PlanningCalendar</code> or similar. The rendering must be done in the Row collecting the appointments. (Because there are different visualizations possible.)</p><p>Applications could inherit from this element to add own fields.</p>
             */
            export class CalendarAppointment extends sap.ui.unified.DateTypeRange {
                /**
                 * <p>Constructor for a new <code>CalendarAppointment</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Overrides the color derived from the <code>type</code> property. This property will work only with full hex color with pound symbol, e.g.: #FF0000.</p>
                 * @returns sap.ui.core.CSSColor <p>Value of property <code>color</code></p>
                 */
                getColor(): sap.ui.core.CSSColor;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Icon of the Appointment. (e.g. picture of the person)</p><p>URI of an image or an icon registered in sap.ui.core.IconPool.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getKey" data-sap-ui-target="getKey">key</a>.</p><p>Can be used as identifier of the appointment</p>
                 * @returns string <p>Value of property <code>key</code></p>
                 */
                getKey(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getSelected" data-sap-ui-target="getSelected">selected</a>.</p><p>Indicates if the icon is selected.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>selected</code></p>
                 */
                getSelected(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getTentative" data-sap-ui-target="getTentative">tentative</a>.</p><p>Indicates if the icon is tentative.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>tentative</code></p>
                 */
                getTentative(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Text of the appointment.</p>
                 * @returns string <p>Value of property <code>text</code></p>
                 */
                getText(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Title of the appointment.</p>
                 * @returns string <p>Value of property <code>title</code></p>
                 */
                getTitle(): string;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Overrides the color derived from the <code>type</code> property. This property will work only with full hex color with pound symbol, e.g.: #FF0000.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSColor} sColor <p>New value for property <code>color</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColor(sColor: sap.ui.core.CSSColor): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Icon of the Appointment. (e.g. picture of the person)</p><p>URI of an image or an icon registered in sap.ui.core.IconPool.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getKey" data-sap-ui-target="getKey">key</a>.</p><p>Can be used as identifier of the appointment</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sKey <p>New value for property <code>key</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setKey(sKey: string): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getSelected" data-sap-ui-target="getSelected">selected</a>.</p><p>Indicates if the icon is selected.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelected(bSelected: boolean): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getTentative" data-sap-ui-target="getTentative">tentative</a>.</p><p>Indicates if the icon is tentative.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bTentative <p>New value for property <code>tentative</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTentative(bTentative: boolean): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Text of the appointment.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sText <p>New value for property <code>text</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setText(sText: string): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment/methods/getTitle" data-sap-ui-target="getTitle">title</a>.</p><p>Title of the appointment.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sTitle <p>New value for property <code>title</code></p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setTitle(sTitle: string): sap.ui.unified.CalendarAppointment;
            }
            /**
             * <p>Visualization types for <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarAppointment" data-sap-ui-target="CalendarAppointment">sap.ui.unified.CalendarAppointment</a>.</p>
             */
            export enum CalendarAppointmentVisualization {
                /**
                 * <p>Visualization with fill color depending on the used theme.</p>
                 */
                Filled = "Filled",
                /**
                 * <p>Standard visualization with no fill color.</p>
                 */
                Standard = "Standard",
            }
            /**
             * <p>Calendar with dates displayed in one line.</p>
             */
            export class CalendarDateInterval extends sap.ui.unified.Calendar {
                /**
                 * <p>Constructor for a new <code>CalendarDateInterval</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>If more than this number of days are displayed, start and end month are displayed on the button.</p>
                 * @returns number <p>The number of days to determine how the start and end of month are displayed</p>
                 */
                protected _getDaysLarge(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getDays" data-sap-ui-target="getDays">days</a>.</p><p>number of days displayed on phones the maximum rendered number of days is 8.</p><p>Default value is <code>7</code>.</p>
                 * @returns number <p>Value of property <code>days</code></p>
                 */
                getDays(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the month- and yearPicker opens on a popup</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>pickerPopup</code></p>
                 */
                getPickerPopup(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getShowDayNamesLine" data-sap-ui-target="getShowDayNamesLine">showDayNamesLine</a>.</p><p>If set the day names are shown in a separate line. If not set the day names are shown inside the single days.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showDayNamesLine</code></p>
                 */
                getShowDayNamesLine(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval</p>
                 * @returns any <p>Value of property <code>startDate</code></p>
                 */
                getStartDate(): any;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getDays" data-sap-ui-target="getDays">days</a>.</p><p>number of days displayed on phones the maximum rendered number of days is 8.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>7</code>.</p>
                 * @param {number} iDays <p>New value for property <code>days</code></p>
                 * @returns sap.ui.unified.CalendarDateInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDays(iDays: number): sap.ui.unified.CalendarDateInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the month- and yearPicker opens on a popup</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bPickerPopup <p>New value for property <code>pickerPopup</code></p>
                 * @returns sap.ui.unified.CalendarDateInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarDateInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getShowDayNamesLine" data-sap-ui-target="getShowDayNamesLine">showDayNamesLine</a>.</p><p>If set the day names are shown in a separate line. If not set the day names are shown inside the single days.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowDayNamesLine <p>New value for property <code>showDayNamesLine</code></p>
                 * @returns sap.ui.unified.CalendarDateInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowDayNamesLine(bShowDayNamesLine: boolean): sap.ui.unified.CalendarDateInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarDateInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                 * @returns sap.ui.unified.CalendarDateInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartDate(oStartDate: any): sap.ui.unified.CalendarDateInterval;
            }
            /**
             * <p>Types of a calendar day used for visualization.</p>
             */
            export enum CalendarDayType {
                /**
                 * <p>No special type is used.</p>
                 */
                None = "None",
                /**
                 * <p>Non-working dates.</p>
                 */
                NonWorking = "NonWorking",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type01 = "Type01",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type02 = "Type02",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type03 = "Type03",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type04 = "Type04",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type05 = "Type05",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type06 = "Type06",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type07 = "Type07",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type08 = "Type08",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type09 = "Type09",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type10 = "Type10",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type11 = "Type11",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type12 = "Type12",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type13 = "Type13",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type14 = "Type14",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type15 = "Type15",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type16 = "Type16",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type17 = "Type17",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type18 = "Type18",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type19 = "Type19",
                /**
                 * <p>The semantic meaning must be defined by the app. It can be displayed in a legend.</p>
                 */
                Type20 = "Type20",
            }
            /**
             * <p>Interval types in a <code>CalendarRow</code>.</p>
             */
            export enum CalendarIntervalType {
                /**
                 * <p>Intervals have the size of one day.</p>
                 */
                Day = "Day",
                /**
                 * <p>Intervals have the size of one hour.</p>
                 */
                Hour = "Hour",
                /**
                 * <p>Intervals have the size of one month.</p>
                 */
                Month = "Month",
            }
            /**
             * <p>A legend for the Calendar Control. Displays special dates colors with their corresponding description. The aggregation specialDates can be set herefor.</p>
             */
            export class CalendarLegend extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new CalendarLegend.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.unified.CalendarLegendItem} oItem <p>The item to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarLegend <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addItem(oItem: sap.ui.unified.CalendarLegendItem): sap.ui.unified.CalendarLegend;
                /**
                 * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @returns sap.ui.unified.CalendarLegend <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyItems(): sap.ui.unified.CalendarLegend;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getColumnWidth" data-sap-ui-target="getColumnWidth">columnWidth</a>.</p><p>Defines the width of the created columns in which the items are arranged.</p><p>Default value is <code>120px</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>columnWidth</code></p>
                 */
                getColumnWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Items to be displayed.</p>
                 * @returns sap.ui.unified.CalendarLegendItem[] 
                 */
                getItems(): sap.ui.unified.CalendarLegendItem[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getStandardItems" data-sap-ui-target="getStandardItems">standardItems</a>.</p><p>Determines the standard items related to the calendar days, such as, today, selected, working and non-working. Values must be one of <code>sap.ui.unified.StandardCalendarLegendItem</code>. Note: for versions 1.50 and 1.52, this property was defined in the the subclass <code>sap.m.PlanningCalendarLegend</code></p><p>Default value is <code>Today,Selected,WorkingDay,NonWorkingDay</code>.</p>
                 * @returns string[] <p>Value of property <code>standardItems</code></p>
                 */
                getStandardItems(): string[];
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.CalendarLegendItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.CalendarLegendItem} oItem <p>The item whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfItem(oItem: sap.ui.unified.CalendarLegendItem): number;
                /**
                 * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.unified.CalendarLegendItem} oItem <p>The item to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarLegend <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertItem(oItem: sap.ui.unified.CalendarLegendItem, iIndex: number): sap.ui.unified.CalendarLegend;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.CalendarLegendItem[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllItems(): sap.ui.unified.CalendarLegendItem[];
                /**
                 * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {number | string | sap.ui.unified.CalendarLegendItem} vItem <p>The item to remove or its index or id</p>
                 * @returns sap.ui.unified.CalendarLegendItem <p>The removed item or <code>null</code></p>
                 */
                removeItem(vItem: number | string | sap.ui.unified.CalendarLegendItem): sap.ui.unified.CalendarLegendItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getColumnWidth" data-sap-ui-target="getColumnWidth">columnWidth</a>.</p><p>Defines the width of the created columns in which the items are arranged.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>120px</code>.</p>
                 * @param {sap.ui.core.CSSSize} sColumnWidth <p>New value for property <code>columnWidth</code></p>
                 * @returns sap.ui.unified.CalendarLegend <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColumnWidth(sColumnWidth: sap.ui.core.CSSSize): sap.ui.unified.CalendarLegend;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegend/methods/getStandardItems" data-sap-ui-target="getStandardItems">standardItems</a>.</p><p>Determines the standard items related to the calendar days, such as, today, selected, working and non-working. Values must be one of <code>sap.ui.unified.StandardCalendarLegendItem</code>. Note: for versions 1.50 and 1.52, this property was defined in the the subclass <code>sap.m.PlanningCalendarLegend</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Today,Selected,WorkingDay,NonWorkingDay</code>.</p>
                 * @param {string[]} sStandardItems <p>New value for property <code>standardItems</code></p>
                 * @returns sap.ui.unified.CalendarLegend <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStandardItems(sStandardItems: string[]): sap.ui.unified.CalendarLegend;
            }
            /**
             * <p>Item to be displayed in a CalendarLegend.</p>
             */
            export class CalendarLegendItem extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new CalendarLegendItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Overrides the color derived from the <code>type</code> property.</p>
                 * @returns sap.ui.core.CSSColor <p>Value of property <code>color</code></p>
                 */
                getColor(): sap.ui.core.CSSColor;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Text to be displayed for the item.</p>
                 * @returns string <p>Value of property <code>text</code></p>
                 */
                getText(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>Type of the item. If not set the type is automatically determined from the order of the items in the CalendarLegend.</p><p>Default value is <code>None</code>.</p>
                 * @returns sap.ui.unified.CalendarDayType <p>Value of property <code>type</code></p>
                 */
                getType(): sap.ui.unified.CalendarDayType;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getColor" data-sap-ui-target="getColor">color</a>.</p><p>Overrides the color derived from the <code>type</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSColor} sColor <p>New value for property <code>color</code></p>
                 * @returns sap.ui.unified.CalendarLegendItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColor(sColor: sap.ui.core.CSSColor): sap.ui.unified.CalendarLegendItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Text to be displayed for the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sText <p>New value for property <code>text</code></p>
                 * @returns sap.ui.unified.CalendarLegendItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setText(sText: string): sap.ui.unified.CalendarLegendItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarLegendItem/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>Type of the item. If not set the type is automatically determined from the order of the items in the CalendarLegend.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
                 * @param {sap.ui.unified.CalendarDayType} sType <p>New value for property <code>type</code></p>
                 * @returns sap.ui.unified.CalendarLegendItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setType(sType: sap.ui.unified.CalendarDayType): sap.ui.unified.CalendarLegendItem;
            }
            /**
             * <p>Calendar with granularity of months displayed in one line.</p><p><b>Note:</b> JavaScript Date objects are used to set and return the months, mark them as selected or as a special type. But the date part of the Date object is not used. If a Date object is returned the date will be set to the 1st of the corresponding month.</p>
             */
            export class CalendarMonthInterval extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>CalendarMonthInterval</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/cancel">cancel</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.</p><p>Month selection was cancelled</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarMonthInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCancel(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/select">select</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.</p><p>Month selection changed</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarMonthInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarMonthInterval</code> itself.</p><p><code>startDate</code> was changed while navigation in <code>CalendarMonthInterval</code></p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarMonthInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachStartDateChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySelectedDates(): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySpecialDates(): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/cancel">cancel</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCancel(fnFunction: Function, oListener: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/select">select</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarMonthInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachStartDateChange(fnFunction: Function, oListener: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Displays a month in the <code>CalendarMonthInterval</code> but doesn't set the focus.</p>
                 * @param {any} oDatetime <p>JavaScript date object for displayed date. (The month of this date will be displayed.)</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p><code>this</code> to allow method chaining</p>
                 */
                displayDate(oDatetime: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/cancel">cancel</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCancel(mParameters?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/select">select</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireSelect(mParameters?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarMonthInterval/events/startDateChange">startDateChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireStartDateChange(mParameters?: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets the focused month of the <code>CalendarMonthInterval</code>.</p>
                 * @param {any} oDatetime <p>JavaScript date object for focused date. (The month of this date will be focused.)</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> to allow method chaining</p>
                 */
                focusDate(oDatetime: any): sap.ui.unified.Calendar;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                 */
                getIntervalSelection(): boolean;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getLegend(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMaxDate" data-sap-ui-target="getMaxDate">maxDate</a>.</p><p>Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>maxDate</code> is set to be before the <code>minDate</code>, the <code>minDate</code> is set to the begin of the month of the <code>maxDate</code>.</p>
                 * @returns any <p>Value of property <code>maxDate</code></p>
                 */
                getMaxDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMinDate" data-sap-ui-target="getMinDate">minDate</a>.</p><p>Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>minDate</code> is set to be after the <code>maxDate</code>, the <code>maxDate</code> is set to the end of the month of the <code>minDate</code>.</p>
                 * @returns any <p>Value of property <code>minDate</code></p>
                 */
                getMinDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Number of months displayed</p><p><b>Note:</b> On phones, the maximum number of months displayed in the row is always 6.</p><p>Default value is <code>12</code>.</p>
                 * @returns number <p>Value of property <code>months</code></p>
                 */
                getMonths(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the yearPicker opens on a popup</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>pickerPopup</code></p>
                 */
                getPickerPopup(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Date ranges for selected dates of the <code>CalendarMonthInterval</code>.</p><p>If <code>singleSelection</code> is set, only the first entry is used.</p><p><b>Note:</b> Even if only one day is selected, the whole corresponding month is selected.</p>
                 * @returns sap.ui.unified.DateRange[] 
                 */
                getSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>singleSelection</code></p>
                 */
                getSingleSelection(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Date ranges with type to visualize special months in the <code>CalendarMonthInterval</code>. If one day is assigned to more than one type, only the first one will be used.</p><p><b>Note:</b> Even if only one day is set as a special day, the whole corresponding month is displayed in this way.</p>
                 * @returns sap.ui.unified.DateTypeRange[] 
                 */
                getSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval as JavaScript Date object. The month of this Date will be the first month in the displayed row.</p>
                 * @returns any <p>Value of property <code>startDate</code></p>
                 */
                getStartDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>CalendarMonthInterval</code>. The width of the single months depends on this width.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                /**
                 * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                 */
                removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                /**
                 * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                 */
                removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMaxDate" data-sap-ui-target="getMaxDate">maxDate</a>.</p><p>Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>maxDate</code> is set to be before the <code>minDate</code>, the <code>minDate</code> is set to the begin of the month of the <code>maxDate</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oMaxDate <p>New value for property <code>maxDate</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxDate(oMaxDate: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMinDate" data-sap-ui-target="getMinDate">minDate</a>.</p><p>Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>minDate</code> is set to be after the <code>maxDate</code>, the <code>maxDate</code> is set to the end of the month of the <code>minDate</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oMinDate <p>New value for property <code>minDate</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinDate(oMinDate: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Number of months displayed</p><p><b>Note:</b> On phones, the maximum number of months displayed in the row is always 6.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                 * @param {number} iMonths <p>New value for property <code>months</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMonths(iMonths: number): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the yearPicker opens on a popup</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bPickerPopup <p>New value for property <code>pickerPopup</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSingleSelection(bSingleSelection: boolean): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval as JavaScript Date object. The month of this Date will be the first month in the displayed row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartDate(oStartDate: any): sap.ui.unified.CalendarMonthInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarMonthInterval/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>CalendarMonthInterval</code>. The width of the single months depends on this width.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.unified.CalendarMonthInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.CalendarMonthInterval;
            }
            /**
             * <p>A calendar row with a header and appointments. The Appointments will be placed in the defined interval.</p>
             */
            export class CalendarRow extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>CalendarRow</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some appointment to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oAppointment <p>The appointment to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAppointment(oAppointment: sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarRow;
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.CalendarRow;
                /**
                 * <p>Adds some intervalHeader to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oIntervalHeader <p>The intervalHeader to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarRow;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/intervalSelect" data-sap-ui-target="sap.ui.unified.CalendarRow/events/intervalSelect">intervalSelect</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarRow</code> itself.</p><p>Fired if an interval was selected</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarRow</code> itself</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachIntervalSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/leaveRow" data-sap-ui-target="sap.ui.unified.CalendarRow/events/leaveRow">leaveRow</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarRow</code> itself.</p><p>The <code>CalendarRow</code> should be left while navigating. (Arrow up or arrow down.) The caller should determine the next control to be focused</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarRow</code> itself</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachLeaveRow(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/select" data-sap-ui-target="sap.ui.unified.CalendarRow/events/select">select</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarRow</code> itself.</p><p>Fired if an appointment was selected</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarRow</code> itself</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarRow/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarRow</code> itself.</p><p><code>startDate</code> was changed while navigating in <code>CalendarRow</code></p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarRow</code> itself</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachStartDateChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Destroys all the appointments in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyAppointments(): sap.ui.unified.CalendarRow;
                /**
                 * <p>Destroys all the intervalHeaders in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyIntervalHeaders(): sap.ui.unified.CalendarRow;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/intervalSelect" data-sap-ui-target="sap.ui.unified.CalendarRow/events/intervalSelect">intervalSelect</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachIntervalSelect(fnFunction: Function, oListener: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/leaveRow" data-sap-ui-target="sap.ui.unified.CalendarRow/events/leaveRow">leaveRow</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachLeaveRow(fnFunction: Function, oListener: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/select" data-sap-ui-target="sap.ui.unified.CalendarRow/events/select">select</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarRow/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachStartDateChange(fnFunction: Function, oListener: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/intervalSelect" data-sap-ui-target="sap.ui.unified.CalendarRow/events/intervalSelect">intervalSelect</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireIntervalSelect(mParameters?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/leaveRow" data-sap-ui-target="sap.ui.unified.CalendarRow/events/leaveRow">leaveRow</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireLeaveRow(mParameters?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/select" data-sap-ui-target="sap.ui.unified.CalendarRow/events/select">select</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireSelect(mParameters?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarRow/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarRow/events/startDateChange">startDateChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireStartDateChange(mParameters?: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Focus the given <code>CalendarAppointment</code> in the <code>CalendarRow</code>.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oAppointment <p>Appointment to be focused.</p>
                 * @returns sap.ui.unified.CalendarRow <p><code>this</code> to allow method chaining</p>
                 */
                focusAppointment(oAppointment: sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarRow;
                /**
                 * <p>Focus the <code>CalendarAppointment</code> in the <code>CalendarRow</code> that is nearest to the given date.</p>
                 * @param {any} oDate <p>Javascript Date object.</p>
                 * @returns sap.ui.unified.CalendarRow <p><code>this</code> to allow method chaining</p>
                 */
                focusNearestAppointment(oDate: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p><p>Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.</p><p><b>Note:</b> For performance reasons, only appointments in the visible time range or nearby should be assigned.</p>
                 * @returns sap.ui.unified.CalendarAppointment[] 
                 */
                getAppointments(): sap.ui.unified.CalendarAppointment[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointmentsReducedHeight" data-sap-ui-target="getAppointmentsReducedHeight">appointmentsReducedHeight</a>.</p><p>If set the appointments without text (only title) are rendered with a smaller height.</p><p><b>Note:</b> On phone devices this property is ignored, appointments are always rendered in full height to allow touching.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>appointmentsReducedHeight</code></p>
                 */
                getAppointmentsReducedHeight(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointmentsVisualization" data-sap-ui-target="getAppointmentsVisualization">appointmentsVisualization</a>.</p><p>Defines the visualization of the <code>CalendarAppoinment</code></p><p><b>Note:</b> The real visualization depends on the used theme.</p><p>Default value is <code>Standard</code>.</p>
                 * @returns sap.ui.unified.CalendarAppointmentVisualization <p>Value of property <code>appointmentsVisualization</code></p>
                 */
                getAppointmentsVisualization(): sap.ui.unified.CalendarAppointmentVisualization;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getCheckResize" data-sap-ui-target="getCheckResize">checkResize</a>.</p><p>If set, the <code>CalendarRow</code> checks for resize by itself.</p><p>If a lot of <code>CalendarRow</code> controls are used in one container control (like <code>PlanningCalendar</code>). the resize checks should be done only by this container control. Then the container control should call <code>handleResize</code> of the <code>CalendarRow</code> if a resize happens.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>checkResize</code></p>
                 */
                getCheckResize(): boolean;
                /**
                 * <p>Returns the focused <code>CalendarAppointment</code> of the <code>CalendarRow</code>.</p><p>The focus must not really be on the <code>CalendarAppointment</code>, it have just to be the one that has the focus when the <code>CalendarRow</code> was focused last time.</p>
                 * @returns sap.ui.unified.CalendarAppointment <p>Focused Appointment</p>
                 */
                getFocusedAppointment(): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getGroupAppointmentsMode" data-sap-ui-target="getGroupAppointmentsMode">groupAppointmentsMode</a>.</p><p>Defines the mode in which the overlapping appointments are displayed.</p><p><b>Note:</b> This property takes effect, only if the <code>intervalType</code> of the current calendar view is set to <code>sap.ui.unified.CalendarIntervalType.Month</code>. On phone devices this property is ignored, and the default value is applied.</p><p>Default value is <code>Collapsed</code>.</p>
                 * @returns sap.ui.unified.GroupAppointmentsMode <p>Value of property <code>groupAppointmentsMode</code></p>
                 */
                getGroupAppointmentsMode(): sap.ui.unified.GroupAppointmentsMode;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>Height of the row</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
                 */
                getHeight(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p><p>Appointments to be displayed in the top of the intervals. The <code>intervalHeaders</code> are used to visualize public holidays and similar things.</p><p>Appointments outside the visible time frame are not rendered.</p><p>The <code>intervalHeaders</code> always fill whole intervals. If they are shorter than one interval, they are not displayed.</p><p><b>Note:</b> For performance reasons, only appointments in the visible time range or nearby should be assigned.</p>
                 * @returns sap.ui.unified.CalendarAppointment[] 
                 */
                getIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervals" data-sap-ui-target="getIntervals">intervals</a>.</p><p>Number of displayed intervals. The size of the intervals is defined with <code>intervalType</code></p><p>Default value is <code>12</code>.</p>
                 * @returns number <p>Value of property <code>intervals</code></p>
                 */
                getIntervals(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalType" data-sap-ui-target="getIntervalType">intervalType</a>.</p><p>Type of the intervals of the row. The default is one hour.</p><p>Default value is <code>Hour</code>.</p>
                 * @returns sap.ui.unified.CalendarIntervalType <p>Value of property <code>intervalType</code></p>
                 */
                getIntervalType(): sap.ui.unified.CalendarIntervalType;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getLegend(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. (Other values will just be ignored.)</p><p>If not set, the weekend defined in the locale settings is displayed as non-working days.</p><p><b>Note:</b> The non working days are only visualized if <code>intervalType</code> is set to day.</p>
                 * @returns number[] <p>Value of property <code>nonWorkingDays</code></p>
                 */
                getNonWorkingDays(): number[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getNonWorkingHours" data-sap-ui-target="getNonWorkingHours">nonWorkingHours</a>.</p><p>If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to 23. (Other values will just be ignored.)</p><p><b>Note:</b> The non working hours are only visualized if <code>intervalType</code> is set to hour.</p>
                 * @returns number[] <p>Value of property <code>nonWorkingHours</code></p>
                 */
                getNonWorkingHours(): number[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowEmptyIntervalHeaders" data-sap-ui-target="getShowEmptyIntervalHeaders">showEmptyIntervalHeaders</a>.</p><p>If set, interval headers are shown even if no <code>intervalHeaders</code> are assigned to the visible time frame.</p><p>If not set, no interval headers are shown if no <code>intervalHeaders</code> are assigned.</p><p><b>Note:</b> This property is only used if <code>showIntervalHeaders</code> is set to true.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showEmptyIntervalHeaders</code></p>
                 */
                getShowEmptyIntervalHeaders(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowIntervalHeaders" data-sap-ui-target="getShowIntervalHeaders">showIntervalHeaders</a>.</p><p>If set, interval headers are shown like specified in <code>showEmptyIntervalHeaders</code>.</p><p>If not set, no interval headers are shown even if <code>intervalHeaders</code> are assigned.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showIntervalHeaders</code></p>
                 */
                getShowIntervalHeaders(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowSubIntervals" data-sap-ui-target="getShowSubIntervals">showSubIntervals</a>.</p><p>If set, subintervals are shown.</p><p>If the interval type is <code>Hour</code>, quarter hours are shown.</p><p>If the interval type is <code>Day</code>, hours are shown.</p><p>If the interval type is <code>Month</code>, days are shown.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>showSubIntervals</code></p>
                 */
                getShowSubIntervals(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row. As default, the current date is used.</p>
                 * @returns any <p>Value of property <code>startDate</code></p>
                 */
                getStartDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getUpdateCurrentTime" data-sap-ui-target="getUpdateCurrentTime">updateCurrentTime</a>.</p><p>If set the <code>CalendarRow</code> triggers a periodic update to visualize the current time.</p><p>If a lot of <code>CalendarRow</code> controls are used in one container control (like <code>PlanningCalendar</code>) the periodic update should be triggered only by this container control. Then the container control should call <code>updateCurrentTimeVisualization</code> of the <code>CalendarRow</code> to update the visualization.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>updateCurrentTime</code></p>
                 */
                getUpdateCurrentTime(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the row</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>After a resize of the <code>CalendarRow</code>, some calculations for appointment sizes are needed.</p><p>For this, each <code>CalendarRow</code> can trigger the resize check for it's own DOM. But if multiple <code>CalendarRow</code>s are used in one container (e.g. <code>PlanningCalendar</code>), it is better if the container triggers the resize check once and then calls this function of each <code>CalendarRow</code>.</p>
                 * @param {any} oEvent <p>The event object of the resize handler.</p>
                 * @returns sap.ui.unified.CalendarRow <p><code>this</code> to allow method chaining</p>
                 */
                handleResize(oEvent: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.CalendarAppointment</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oAppointment <p>The appointment whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfAppointment(oAppointment: sap.ui.unified.CalendarAppointment): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.CalendarAppointment</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oIntervalHeader <p>The intervalHeader whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment): number;
                /**
                 * <p>Inserts a appointment into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oAppointment <p>The appointment to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the appointment should be inserted at; for a negative value of <code>iIndex</code>, the appointment is inserted at position 0; for a value greater than the current size of the aggregation, the appointment is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertAppointment(oAppointment: sap.ui.unified.CalendarAppointment, iIndex: number): sap.ui.unified.CalendarRow;
                /**
                 * <p>Inserts a intervalHeader into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p>
                 * @param {sap.ui.unified.CalendarAppointment} oIntervalHeader <p>The intervalHeader to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the intervalHeader should be inserted at; for a negative value of <code>iIndex</code>, the intervalHeader is inserted at position 0; for a value greater than the current size of the aggregation, the intervalHeader is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertIntervalHeader(oIntervalHeader: sap.ui.unified.CalendarAppointment, iIndex: number): sap.ui.unified.CalendarRow;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.CalendarAppointment[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAppointments(): sap.ui.unified.CalendarAppointment[];
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.CalendarAppointment[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
                /**
                 * <p>Removes a appointment from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointments" data-sap-ui-target="getAppointments">appointments</a>.</p>
                 * @param {number | string | sap.ui.unified.CalendarAppointment} vAppointment <p>The appointment to remove or its index or id</p>
                 * @returns sap.ui.unified.CalendarAppointment <p>The removed appointment or <code>null</code></p>
                 */
                removeAppointment(vAppointment: number | string | sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a intervalHeader from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalHeaders" data-sap-ui-target="getIntervalHeaders">intervalHeaders</a>.</p>
                 * @param {number | string | sap.ui.unified.CalendarAppointment} vIntervalHeader <p>The intervalHeader to remove or its index or id</p>
                 * @returns sap.ui.unified.CalendarAppointment <p>The removed intervalHeader or <code>null</code></p>
                 */
                removeIntervalHeader(vIntervalHeader: number | string | sap.ui.unified.CalendarAppointment): sap.ui.unified.CalendarAppointment;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointmentsReducedHeight" data-sap-ui-target="getAppointmentsReducedHeight">appointmentsReducedHeight</a>.</p><p>If set the appointments without text (only title) are rendered with a smaller height.</p><p><b>Note:</b> On phone devices this property is ignored, appointments are always rendered in full height to allow touching.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bAppointmentsReducedHeight <p>New value for property <code>appointmentsReducedHeight</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAppointmentsReducedHeight(bAppointmentsReducedHeight: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getAppointmentsVisualization" data-sap-ui-target="getAppointmentsVisualization">appointmentsVisualization</a>.</p><p>Defines the visualization of the <code>CalendarAppoinment</code></p><p><b>Note:</b> The real visualization depends on the used theme.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Standard</code>.</p>
                 * @param {sap.ui.unified.CalendarAppointmentVisualization} sAppointmentsVisualization <p>New value for property <code>appointmentsVisualization</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAppointmentsVisualization(sAppointmentsVisualization: sap.ui.unified.CalendarAppointmentVisualization): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getCheckResize" data-sap-ui-target="getCheckResize">checkResize</a>.</p><p>If set, the <code>CalendarRow</code> checks for resize by itself.</p><p>If a lot of <code>CalendarRow</code> controls are used in one container control (like <code>PlanningCalendar</code>). the resize checks should be done only by this container control. Then the container control should call <code>handleResize</code> of the <code>CalendarRow</code> if a resize happens.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bCheckResize <p>New value for property <code>checkResize</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setCheckResize(bCheckResize: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getGroupAppointmentsMode" data-sap-ui-target="getGroupAppointmentsMode">groupAppointmentsMode</a>.</p><p>Defines the mode in which the overlapping appointments are displayed.</p><p><b>Note:</b> This property takes effect, only if the <code>intervalType</code> of the current calendar view is set to <code>sap.ui.unified.CalendarIntervalType.Month</code>. On phone devices this property is ignored, and the default value is applied.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Collapsed</code>.</p>
                 * @param {sap.ui.unified.GroupAppointmentsMode} sGroupAppointmentsMode <p>New value for property <code>groupAppointmentsMode</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setGroupAppointmentsMode(sGroupAppointmentsMode: sap.ui.unified.GroupAppointmentsMode): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getHeight" data-sap-ui-target="getHeight">height</a>.</p><p>Height of the row</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervals" data-sap-ui-target="getIntervals">intervals</a>.</p><p>Number of displayed intervals. The size of the intervals is defined with <code>intervalType</code></p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                 * @param {number} iIntervals <p>New value for property <code>intervals</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervals(iIntervals: number): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getIntervalType" data-sap-ui-target="getIntervalType">intervalType</a>.</p><p>Type of the intervals of the row. The default is one hour.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Hour</code>.</p>
                 * @param {sap.ui.unified.CalendarIntervalType} sIntervalType <p>New value for property <code>intervalType</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervalType(sIntervalType: sap.ui.unified.CalendarIntervalType): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. (Other values will just be ignored.)</p><p>If not set, the weekend defined in the locale settings is displayed as non-working days.</p><p><b>Note:</b> The non working days are only visualized if <code>intervalType</code> is set to day.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number[]} sNonWorkingDays <p>New value for property <code>nonWorkingDays</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setNonWorkingDays(sNonWorkingDays: number[]): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getNonWorkingHours" data-sap-ui-target="getNonWorkingHours">nonWorkingHours</a>.</p><p>If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to 23. (Other values will just be ignored.)</p><p><b>Note:</b> The non working hours are only visualized if <code>intervalType</code> is set to hour.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number[]} sNonWorkingHours <p>New value for property <code>nonWorkingHours</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setNonWorkingHours(sNonWorkingHours: number[]): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowEmptyIntervalHeaders" data-sap-ui-target="getShowEmptyIntervalHeaders">showEmptyIntervalHeaders</a>.</p><p>If set, interval headers are shown even if no <code>intervalHeaders</code> are assigned to the visible time frame.</p><p>If not set, no interval headers are shown if no <code>intervalHeaders</code> are assigned.</p><p><b>Note:</b> This property is only used if <code>showIntervalHeaders</code> is set to true.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowEmptyIntervalHeaders <p>New value for property <code>showEmptyIntervalHeaders</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowEmptyIntervalHeaders(bShowEmptyIntervalHeaders: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowIntervalHeaders" data-sap-ui-target="getShowIntervalHeaders">showIntervalHeaders</a>.</p><p>If set, interval headers are shown like specified in <code>showEmptyIntervalHeaders</code>.</p><p>If not set, no interval headers are shown even if <code>intervalHeaders</code> are assigned.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowIntervalHeaders <p>New value for property <code>showIntervalHeaders</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowIntervalHeaders(bShowIntervalHeaders: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getShowSubIntervals" data-sap-ui-target="getShowSubIntervals">showSubIntervals</a>.</p><p>If set, subintervals are shown.</p><p>If the interval type is <code>Hour</code>, quarter hours are shown.</p><p>If the interval type is <code>Day</code>, hours are shown.</p><p>If the interval type is <code>Month</code>, days are shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bShowSubIntervals <p>New value for property <code>showSubIntervals</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowSubIntervals(bShowSubIntervals: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row. As default, the current date is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartDate(oStartDate: any): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getUpdateCurrentTime" data-sap-ui-target="getUpdateCurrentTime">updateCurrentTime</a>.</p><p>If set the <code>CalendarRow</code> triggers a periodic update to visualize the current time.</p><p>If a lot of <code>CalendarRow</code> controls are used in one container control (like <code>PlanningCalendar</code>) the periodic update should be triggered only by this container control. Then the container control should call <code>updateCurrentTimeVisualization</code> of the <code>CalendarRow</code> to update the visualization.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bUpdateCurrentTime <p>New value for property <code>updateCurrentTime</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUpdateCurrentTime(bUpdateCurrentTime: boolean): sap.ui.unified.CalendarRow;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarRow/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the row</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.unified.CalendarRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.CalendarRow;
                /**
                 * <p>If the current time is in the visible output of the <code>CalendarRow</code>, the indicator for the current time must be positioned.</p><p>For this, each <code>CalendarRow</code> can trigger a timer. But if multiple <code>CalendarRow</code>s are used in one container (e.G. <code>PlanningCalendar</code>), it is better if the container triggers the interval once and then calls this function of each <code>CalendarRow</code>.</p>
                 * @returns sap.ui.unified.CalendarRow <p><code>this</code> to allow method chaining</p>
                 */
                updateCurrentTimeVisualization(): sap.ui.unified.CalendarRow;
            }
            /**
             * <p>Calendar with granularity of time items displayed in one line.</p>
             */
            export class CalendarTimeInterval extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>CalendarTimeInterval</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/cancel">cancel</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.</p><p>Time selection was cancelled</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarTimeInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachCancel(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/select">select</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.</p><p>Time selection changed</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarTimeInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.CalendarTimeInterval</code> itself.</p><p><code>startDate</code> was changed while navigation in <code>CalendarTimeInterval</code></p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.CalendarTimeInterval</code> itself</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachStartDateChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySelectedDates(): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySpecialDates(): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/cancel">cancel</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachCancel(fnFunction: Function, oListener: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/select">select</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/startDateChange">startDateChange</a> event of this <code>sap.ui.unified.CalendarTimeInterval</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachStartDateChange(fnFunction: Function, oListener: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Displays an item in the <code>CalendarTimeInterval</code> but doesn't set the focus.</p>
                 * @param {any} oDate <p>JavaScript date object for displayed item.</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> to allow method chaining</p>
                 */
                displayDate(oDate: any): sap.ui.unified.Calendar;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/cancel" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/cancel">cancel</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireCancel(mParameters?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/select" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/select">select</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireSelect(mParameters?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/events/startDateChange" data-sap-ui-target="sap.ui.unified.CalendarTimeInterval/events/startDateChange">startDateChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireStartDateChange(mParameters?: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets the focused item of the <code>CalendarTimeInterval</code>.</p>
                 * @param {any} oDate <p>JavaScript date object for focused item.</p>
                 * @returns sap.ui.unified.Calendar <p><code>this</code> to allow method chaining</p>
                 */
                focusDate(oDate: any): sap.ui.unified.Calendar;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getIntervalMinutes" data-sap-ui-target="getIntervalMinutes">intervalMinutes</a>.</p><p>Size of on time interval in minutes, default is 60 minutes.</p><p><b>Note:</b> the start of the interval calculation is always on the corresponding date at 00:00.</p><p>An interval longer than 720 minutes is not allowed. Please use the <code>CalendarDateInterval</code> instead.</p><p>A day must be divisible by this interval size. One interval must not include more than one day.</p><p>Default value is <code>60</code>.</p>
                 * @returns number <p>Value of property <code>intervalMinutes</code></p>
                 */
                getIntervalMinutes(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                 */
                getIntervalSelection(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Number of time items displayed. Default is 12.</p><p><b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.</p><p>Default value is <code>12</code>.</p>
                 * @returns number <p>Value of property <code>items</code></p>
                 */
                getItems(): number;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getLegend(): sap.ui.core.ID;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getMaxDate" data-sap-ui-target="getMaxDate">maxDate</a>.</p><p>Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>maxDate</code> is set to be before the <code>minDate</code>, the <code>minDate</code> is set to the begin of the month of the <code>maxDate</code>.</p>
                 * @returns any <p>Value of property <code>maxDate</code></p>
                 */
                getMaxDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getMinDate" data-sap-ui-target="getMinDate">minDate</a>.</p><p>Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>minDate</code> is set to be after the <code>maxDate</code>, the <code>maxDate</code> is set to the end of the month of the <code>minDate</code>.</p>
                 * @returns any <p>Value of property <code>minDate</code></p>
                 */
                getMinDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the day-, month- and yearPicker opens on a popup</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>pickerPopup</code></p>
                 */
                getPickerPopup(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Date ranges for selected items of the <code>CalendarTimeInterval</code>.</p><p>If <code>singleSelection</code> is set, only the first entry is used.</p>
                 * @returns sap.ui.unified.DateRange[] 
                 */
                getSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>singleSelection</code></p>
                 */
                getSingleSelection(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Date ranges with type to visualize special items in the <code>CalendarTimeInterval</code>. If one interval is assigned to more than one type, only the first one will be used.</p>
                 * @returns sap.ui.unified.DateTypeRange[] 
                 */
                getSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and <code>items</code> and <code>intervalMinutes</code> will be the first time in the displayed row.</p>
                 * @returns any <p>Value of property <code>startDate</code></p>
                 */
                getStartDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>CalendarTimeInterval</code>. The width of the single months depends on this width.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                /**
                 * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSelectedDates(): sap.ui.unified.DateRange[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                 */
                removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                /**
                 * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                 * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                 * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                 */
                removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getIntervalMinutes" data-sap-ui-target="getIntervalMinutes">intervalMinutes</a>.</p><p>Size of on time interval in minutes, default is 60 minutes.</p><p><b>Note:</b> the start of the interval calculation is always on the corresponding date at 00:00.</p><p>An interval longer than 720 minutes is not allowed. Please use the <code>CalendarDateInterval</code> instead.</p><p>A day must be divisible by this interval size. One interval must not include more than one day.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>60</code>.</p>
                 * @param {number} iIntervalMinutes <p>New value for property <code>intervalMinutes</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervalMinutes(iIntervalMinutes: number): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Number of time items displayed. Default is 12.</p><p><b>Note:</b> On phones, the maximum number of items displayed in the row is always 6.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                 * @param {number} iItems <p>New value for property <code>items</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setItems(iItems: number): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getMaxDate" data-sap-ui-target="getMaxDate">maxDate</a>.</p><p>Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>maxDate</code> is set to be before the <code>minDate</code>, the <code>minDate</code> is set to the begin of the month of the <code>maxDate</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oMaxDate <p>New value for property <code>maxDate</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxDate(oMaxDate: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getMinDate" data-sap-ui-target="getMinDate">minDate</a>.</p><p>Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.</p><p><b>Note:</b> If the <code>minDate</code> is set to be after the <code>maxDate</code>, the <code>maxDate</code> is set to the end of the month of the <code>minDate</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oMinDate <p>New value for property <code>minDate</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMinDate(oMinDate: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getPickerPopup" data-sap-ui-target="getPickerPopup">pickerPopup</a>.</p><p>If set, the day-, month- and yearPicker opens on a popup</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bPickerPopup <p>New value for property <code>pickerPopup</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPickerPopup(bPickerPopup: boolean): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if <code>intervalSelection</code> is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSingleSelection(bSingleSelection: boolean): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and <code>items</code> and <code>intervalMinutes</code> will be the first time in the displayed row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartDate(oStartDate: any): sap.ui.unified.CalendarTimeInterval;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.CalendarTimeInterval/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of the <code>CalendarTimeInterval</code>. The width of the single months depends on this width.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.unified.CalendarTimeInterval <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.CalendarTimeInterval;
            }
            /**
             * <p>Enables the user to select a color. The color can be defined using HEX, RGB, or HSV values or a CSS color name.</p><p><b>Note:</b> Keep in mind that this control needs either <code>sap.m</code> or <code>sap.ui.commons</code> library to be loaded in order to work as it depends on controls available in one or the other library.</p>
             */
            export class ColorPicker extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>ColorPicker</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/change" data-sap-ui-target="sap.ui.unified.ColorPicker/events/change">change</a> event of this <code>sap.ui.unified.ColorPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ColorPicker</code> itself.</p><p>Fired when the value is changed by user action.</p><p><b>Note:</b> When the user action is mouse dragging, the <code>change</code> event fires on the mouseup event.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ColorPicker</code> itself</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/liveChange" data-sap-ui-target="sap.ui.unified.ColorPicker/events/liveChange">liveChange</a> event of this <code>sap.ui.unified.ColorPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ColorPicker</code> itself.</p><p>Fired when the value is changed during the mouse move.</p><p><b>Note:</b> When the user action is mouse move, the <code>liveChange</code> event is fired during the mousedown event.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ColorPicker</code> itself</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachLiveChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/change" data-sap-ui-target="sap.ui.unified.ColorPicker/events/change">change</a> event of this <code>sap.ui.unified.ColorPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachChange(fnFunction: Function, oListener: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/liveChange" data-sap-ui-target="sap.ui.unified.ColorPicker/events/liveChange">liveChange</a> event of this <code>sap.ui.unified.ColorPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachLiveChange(fnFunction: Function, oListener: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/change" data-sap-ui-target="sap.ui.unified.ColorPicker/events/change">change</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireChange(mParameters?: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPicker/events/liveChange" data-sap-ui-target="sap.ui.unified.ColorPicker/events/liveChange">liveChange</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireLiveChange(mParameters?: any): sap.ui.unified.ColorPicker;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPicker/methods/getColorString" data-sap-ui-target="getColorString">colorString</a>.</p><p>Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name: <ul> <li>HEX - #FFFFFF</li> <li>RGB - rgb(255,255,255)</li> <li>HSV - hsv(360,100,100)</li> <li>CSS - red</li> </ul> <b>Note:</b> The output parameter is an RGB string of the current color.</p>
                 * @returns string <p>Value of property <code>colorString</code></p>
                 */
                getColorString(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPicker/methods/getDisplayMode" data-sap-ui-target="getDisplayMode">displayMode</a>.</p><p>Determines the display mode of the <code>ColorPicker</code> among three types - Default, Large and Simplified</p><p>Default value is <code>Default</code>.</p>
                 * @returns sap.ui.unified.ColorPickerDisplayMode <p>Value of property <code>displayMode</code></p>
                 */
                getDisplayMode(): sap.ui.unified.ColorPickerDisplayMode;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPicker/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>Determines the color mode of the <code>ColorPicker</code>.</p><p>Default value is <code>HSV</code>.</p>
                 * @returns sap.ui.unified.ColorPickerMode <p>Value of property <code>mode</code></p>
                 */
                getMode(): sap.ui.unified.ColorPickerMode;
                /**
                 * <p>Gets current RGB values.</p>
                 * @returns any <p>Containing current RGB values</p>
                 */
                getRGB(): any;
                /**
                 * <p>Checks the validity of the CSS color string.</p>
                 * @param {string} sColorString <p>CSS color string to be validated</p>
                 * @returns boolean <p>If the passed string is a valid CSS color string</p>
                 */
                isColor(sColorString: string): boolean;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPicker/methods/getColorString" data-sap-ui-target="getColorString">colorString</a>.</p><p>Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name: <ul> <li>HEX - #FFFFFF</li> <li>RGB - rgb(255,255,255)</li> <li>HSV - hsv(360,100,100)</li> <li>CSS - red</li> </ul> <b>Note:</b> The output parameter is an RGB string of the current color.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sColorString <p>New value for property <code>colorString</code></p>
                 * @returns sap.ui.unified.ColorPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColorString(sColorString: string): sap.ui.unified.ColorPicker;
            }
            /**
             * <p>Types of a color picker display mode</p>
             */
            export enum ColorPickerDisplayMode {
                /**
                 * <p>Default display mode.</p>
                 */
                Default = "Default",
                /**
                 * <p>Large display mode.</p>
                 */
                Large = "Large",
                /**
                 * <p>Simplified display mode.</p>
                 */
                Simplified = "Simplified",
            }
            /**
             * <p>different styles for a ColorPicker.</p>
             */
            export enum ColorPickerMode {
                /**
                 * <p>Color picker works with HSL values.</p>
                 */
                HSL = "HSL",
                /**
                 * <p>Color picker works with HSV values.</p>
                 */
                HSV = "HSV",
            }
            /**
             * <p>A thin wrapper over <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPicker" data-sap-ui-target="ColorPicker">sap.ui.unified.ColorPicker</a> allowing the latter to be used in a popover.</p>
             */
            export class ColorPickerPopover extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>ColorPickerPopover</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/events/change" data-sap-ui-target="sap.ui.unified.ColorPickerPopover/events/change">change</a> event of this <code>sap.ui.unified.ColorPickerPopover</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ColorPickerPopover</code> itself.</p><p>Fired when the submit button of the popover is clicked.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ColorPickerPopover</code> itself</p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ColorPickerPopover;
                /**
                 * <p>Closes the <code>ColorPickerPopover</code>.</p>
                 * @returns sap.ui.core.Control 
                 */
                close(): sap.ui.core.Control;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/events/change" data-sap-ui-target="sap.ui.unified.ColorPickerPopover/events/change">change</a> event of this <code>sap.ui.unified.ColorPickerPopover</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachChange(fnFunction: Function, oListener: any): sap.ui.unified.ColorPickerPopover;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/events/change" data-sap-ui-target="sap.ui.unified.ColorPickerPopover/events/change">change</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireChange(mParameters?: any): sap.ui.unified.ColorPickerPopover;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getColorString" data-sap-ui-target="getColorString">colorString</a>.</p><p>Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name: <ul> <li>HEX - #FFFFFF</li> <li>RGB - rgb(255,255,255)</li> <li>HSV - hsv(360,100,100)</li> <li>CSS - red</li> </ul> <b>Note:</b> The output parameter is an RGB string of the current color.</p>
                 * @returns string <p>Value of property <code>colorString</code></p>
                 */
                getColorString(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getDisplayMode" data-sap-ui-target="getDisplayMode">displayMode</a>.</p><p>Determines the display mode of the <code>ColorPicker</code> among three types - Default, Large and Simplified</p><p>Default value is <code>Default</code>.</p>
                 * @returns sap.ui.unified.ColorPickerDisplayMode <p>Value of property <code>displayMode</code></p>
                 */
                getDisplayMode(): sap.ui.unified.ColorPickerDisplayMode;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>Determines the color mode of the <code>ColorPicker</code>.</p><p>Default value is <code>HSV</code>.</p>
                 * @returns sap.ui.unified.ColorPickerMode <p>Value of property <code>mode</code></p>
                 */
                getMode(): sap.ui.unified.ColorPickerMode;
                /**
                 * <p>Opens the <code>ColorPickerPopover</code>. The popover is positioned relative to the control parameter on tablet or desktop and is full screen on phone. Therefore the openBy parameter is only used on tablet or desktop and is ignored on phone.</p>
                 * @param {any} openBy <p>When this control is displayed on tablet or desktop, the <code>ColorPickerPopover</code> is positioned relative to this control</p>
                 * @returns any <p>Reference to the opening control</p>
                 */
                openBy(openBy: any): any;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getColorString" data-sap-ui-target="getColorString">colorString</a>.</p><p>Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name: <ul> <li>HEX - #FFFFFF</li> <li>RGB - rgb(255,255,255)</li> <li>HSV - hsv(360,100,100)</li> <li>CSS - red</li> </ul> <b>Note:</b> The output parameter is an RGB string of the current color.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sColorString <p>New value for property <code>colorString</code></p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setColorString(sColorString: string): sap.ui.unified.ColorPickerPopover;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getDisplayMode" data-sap-ui-target="getDisplayMode">displayMode</a>.</p><p>Determines the display mode of the <code>ColorPicker</code> among three types - Default, Large and Simplified</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Default</code>.</p>
                 * @param {sap.ui.unified.ColorPickerDisplayMode} sDisplayMode <p>New value for property <code>displayMode</code></p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setDisplayMode(sDisplayMode: sap.ui.unified.ColorPickerDisplayMode): sap.ui.unified.ColorPickerPopover;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ColorPickerPopover/methods/getMode" data-sap-ui-target="getMode">mode</a>.</p><p>Determines the color mode of the <code>ColorPicker</code>.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>HSV</code>.</p>
                 * @param {sap.ui.unified.ColorPickerMode} sMode <p>New value for property <code>mode</code></p>
                 * @returns sap.ui.unified.ColorPickerPopover <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMode(sMode: sap.ui.unified.ColorPickerMode): sap.ui.unified.ColorPickerPopover;
            }
            /**
             * <p>Switches between two control areas and animates it via CSS transitions</p>
             */
            export class ContentSwitcher extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new ContentSwitcher.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content1 to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p>
                 * @param {sap.ui.core.Control} oContent1 <p>The content1 to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent1(oContent1: sap.ui.core.Control): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Adds some content2 to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p>
                 * @param {sap.ui.core.Control} oContent2 <p>The content2 to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent2(oContent2: sap.ui.core.Control): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Destroys all the content1 in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent1(): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Destroys all the content2 in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent2(): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getActiveContent" data-sap-ui-target="getActiveContent">activeContent</a>.</p><p>The number of the currently active content (1 or 2).</p><p>Default value is <code>1</code>.</p>
                 * @returns number <p>Value of property <code>activeContent</code></p>
                 */
                getActiveContent(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getAnimation" data-sap-ui-target="getAnimation">animation</a>.</p><p>Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class. See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.</p><p>Default value is <code>None</code>.</p>
                 * @returns string <p>Value of property <code>animation</code></p>
                 */
                getAnimation(): string;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p><p>The controls that should be shown in the first content</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent1(): sap.ui.core.Control[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p><p>The controls that should be shown in the second content</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent2(): sap.ui.core.Control[];
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent1 <p>The content1 whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent1(oContent1: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent2 <p>The content2 whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent2(oContent2: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content1 into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p>
                 * @param {sap.ui.core.Control} oContent1 <p>The content1 to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content1 should be inserted at; for a negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value greater than the current size of the aggregation, the content1 is inserted at the last position</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent1(oContent1: sap.ui.core.Control, iIndex: number): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Inserts a content2 into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p>
                 * @param {sap.ui.core.Control} oContent2 <p>The content2 to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content2 should be inserted at; for a negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value greater than the current size of the aggregation, the content2 is inserted at the last position</p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent2(oContent2: sap.ui.core.Control, iIndex: number): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent1(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent2(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content1 from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent1" data-sap-ui-target="getContent1">content1</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent1 <p>The content1 to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content1 or <code>null</code></p>
                 */
                removeContent1(vContent1: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a content2 from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getContent2" data-sap-ui-target="getContent2">content2</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent2 <p>The content2 to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content2 or <code>null</code></p>
                 */
                removeContent2(vContent2: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getActiveContent" data-sap-ui-target="getActiveContent">activeContent</a>.</p><p>The number of the currently active content (1 or 2).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>1</code>.</p>
                 * @param {number} iActiveContent <p>New value for property <code>activeContent</code></p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setActiveContent(iActiveContent: number): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ContentSwitcher/methods/getAnimation" data-sap-ui-target="getAnimation">animation</a>.</p><p>Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class. See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
                 * @param {string} sAnimation <p>New value for property <code>animation</code></p>
                 * @returns sap.ui.unified.ContentSwitcher <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAnimation(sAnimation: string): sap.ui.unified.ContentSwitcher;
                /**
                 * <p>Changes the currently active content to the other one. If content 1 is active, content 2 will be activated and the other way around.</p>
                 */
                switchContent(): void;
            }
            /**
             * <p>Predefined animations for the ContentSwitcher</p>
             */
            export enum ContentSwitcherAnimation {
                /**
                 * <p>Content is faded (opacity change).</p>
                 */
                Fade = "Fade",
                /**
                 * <p>No animation. Content is switched instantly.</p>
                 */
                None = "None",
                /**
                 * <p>The new content rotates in. (Just like one of those old newspaper-animations.)</p>
                 */
                Rotate = "Rotate",
                /**
                 * <p>The new content slides in from the left while the old content slides out to the left at the same time.</p>
                 */
                SlideOver = "SlideOver",
                /**
                 * <p>The new slides in from the left (to the right).</p>
                 */
                SlideRight = "SlideRight",
                /**
                 * <p>The new content is "zoomed in" from the center and grows to fill the full content area.</p>
                 */
                ZoomIn = "ZoomIn",
                /**
                 * <p>The old content is "zoomed out", i.e. shrinks to a point at the center of the content area.</p>
                 */
                ZoomOut = "ZoomOut",
            }
            /**
             * <p>A text view which displays currency values and aligns them at the decimal point.</p><h3>Overview</h3><p>The currency control consists of an amount, which is formatted automatically according to the user’s locale (using delimiter symbols for the decimal point and thousand separators) and to the currency set for this specific number (number of decimal places).</p><p>The currency is expressed as a three-letter code.</p><h3>Usage</h3><p><i>When to use</i> <ul> <li>To display amounts with different currencies in a vertical layout, such as in a table, list, or form, and it is important that the user is able to compare the amounts.</li> </ul></p><p><i>When not to use</i> <ul> <li>To display amounts with the same currency in a table. Use the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.ObjectNumber" data-sap-ui-target="ObjectNumber">sap.m.ObjectNumber</a> instead.</li> <li>to display a number with a unit of measurement that is not a currency. Use the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.ObjectNumber" data-sap-ui-target="ObjectNumber">sap.m.ObjectNumber</a> instead.</li> <li>To display an amount in a structure other than a list, table, or form.</li> </ul></p><h3>Responsive behavior</h3><p>The control supports amounts smaller than 100 trillion, which still fit on a phone screen in portrait mode. For larger amounts, the unit of measurement wraps to the next line, which makes it difficult to compare the amounts.</p>
             */
            export class Currency extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new <code>Currency</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * @returns any <p>Current accessibility state of the control.</p>
                 */
                protected getAccessibilityInfo(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getCurrency" data-sap-ui-target="getCurrency">currency</a>.</p><p>Determines the displayed currency code (ISO 4217).</p><p><b>Note:</b> If a * character is set instead of currency code, only the character itself will be rendered, ignoring the <code>value</code> property.</p>
                 * @returns string <p>Value of property <code>currency</code></p>
                 */
                getCurrency(): string;
                /**
                 * <p>Get symbol of the currency, if available.</p>
                 * @returns string 
                 */
                getCurrencySymbol(): string;
                /**
                 * <p>The formatted value.</p>
                 * @returns string <p>The formatted value</p>
                 */
                getFormattedValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getMaxPrecision" data-sap-ui-target="getMaxPrecision">maxPrecision</a>.</p><p>Defines the space that is available for the precision of the various currencies.</p><p>Default value is <code>3</code>.</p>
                 * @returns number <p>Value of property <code>maxPrecision</code></p>
                 */
                getMaxPrecision(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getStringValue" data-sap-ui-target="getStringValue">stringValue</a>.</p><p>Determines the currency value as a string.</p><p>String value is useful if you want to store really big values. If there are more than 21 digits before the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented in exponential form. In these cases use the <code>stringValue</code> property to keep the number in decimal format.</p><p><b>Note:</b> If set, it will take precedence over the <code>value</code> property.</p>
                 * @returns string <p>Value of property <code>stringValue</code></p>
                 */
                getStringValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getUseSymbol" data-sap-ui-target="getUseSymbol">useSymbol</a>.</p><p>Displays the currency symbol instead of the ISO currency code.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>useSymbol</code></p>
                 */
                getUseSymbol(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Determines the currency value.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>value</code></p>
                 */
                getValue(): number;
                /**
                 * <p>Initializes the control.</p>
                 */
                init(): void;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getCurrency" data-sap-ui-target="getCurrency">currency</a>.</p><p>Determines the displayed currency code (ISO 4217).</p><p><b>Note:</b> If a * character is set instead of currency code, only the character itself will be rendered, ignoring the <code>value</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sCurrency <p>New value for property <code>currency</code></p>
                 * @returns sap.ui.unified.Currency <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setCurrency(sCurrency: string): sap.ui.unified.Currency;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getMaxPrecision" data-sap-ui-target="getMaxPrecision">maxPrecision</a>.</p><p>Defines the space that is available for the precision of the various currencies.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>3</code>.</p>
                 * @param {number} iMaxPrecision <p>New value for property <code>maxPrecision</code></p>
                 * @returns sap.ui.unified.Currency <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxPrecision(iMaxPrecision: number): sap.ui.unified.Currency;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getStringValue" data-sap-ui-target="getStringValue">stringValue</a>.</p><p>Determines the currency value as a string.</p><p>String value is useful if you want to store really big values. If there are more than 21 digits before the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented in exponential form. In these cases use the <code>stringValue</code> property to keep the number in decimal format.</p><p><b>Note:</b> If set, it will take precedence over the <code>value</code> property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sStringValue <p>New value for property <code>stringValue</code></p>
                 * @returns sap.ui.unified.Currency <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStringValue(sStringValue: string): sap.ui.unified.Currency;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getUseSymbol" data-sap-ui-target="getUseSymbol">useSymbol</a>.</p><p>Displays the currency symbol instead of the ISO currency code.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bUseSymbol <p>New value for property <code>useSymbol</code></p>
                 * @returns sap.ui.unified.Currency <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUseSymbol(bUseSymbol: boolean): sap.ui.unified.Currency;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Currency/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Determines the currency value.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} fValue <p>New value for property <code>value</code></p>
                 * @returns sap.ui.unified.Currency <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(fValue: number): sap.ui.unified.Currency;
            }
            /**
             * <p>Date range for use in DatePicker</p>
             */
            export class DateRange extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new DateRange.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange/methods/getEndDate" data-sap-ui-target="getEndDate">endDate</a>.</p><p>End date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.</p>
                 * @returns any <p>Value of property <code>endDate</code></p>
                 */
                getEndDate(): any;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date for a date range. This must be a JavaScript date object.</p>
                 * @returns any <p>Value of property <code>startDate</code></p>
                 */
                getStartDate(): any;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange/methods/getEndDate" data-sap-ui-target="getEndDate">endDate</a>.</p><p>End date for a date range. If empty only a single date is presented by this DateRange element. This must be a JavaScript date object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oEndDate <p>New value for property <code>endDate</code></p>
                 * @returns sap.ui.unified.DateRange <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEndDate(oEndDate: any): sap.ui.unified.DateRange;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateRange/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date for a date range. This must be a JavaScript date object.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                 * @returns sap.ui.unified.DateRange <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartDate(oStartDate: any): sap.ui.unified.DateRange;
            }
            /**
             * <p>Date range with calendar day type information. Used to visualize special days in the Calendar.</p>
             */
            export class DateTypeRange extends sap.ui.unified.DateRange {
                /**
                 * <p>Constructor for a new DateTypeRange.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateTypeRange/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>Type of the date range.</p><p>Default value is <code>Type01</code>.</p>
                 * @returns sap.ui.unified.CalendarDayType <p>Value of property <code>type</code></p>
                 */
                getType(): sap.ui.unified.CalendarDayType;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.DateTypeRange/methods/getType" data-sap-ui-target="getType">type</a>.</p><p>Type of the date range.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Type01</code>.</p>
                 * @param {sap.ui.unified.CalendarDayType} sType <p>New value for property <code>type</code></p>
                 * @returns sap.ui.unified.DateTypeRange <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setType(sType: sap.ui.unified.CalendarDayType): sap.ui.unified.DateTypeRange;
            }
            /**
             * <p>The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.</p>
             */
            export class FileUploader extends sap.ui.core.Control implements sap.ui.unified.IProcessableBlobs {
                /**
                 * <p>Constructor for a new <code>FileUploader</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Aborts the currently running upload.</p>
                 * @param {string} sHeaderParameterName <p>The name of the parameter within the <code>headerParameters</code> aggregation to be checked.</p><p><b>Note:</b> aborts the request, sent with a header parameter with the provided name. The parameter is taken into account if the sHeaderParameterValue parameter is provided too.</p>
                 * @param {string} sHeaderParameterValue <p>The value of the parameter within the <code>headerParameters</code> aggregation to be checked.</p><p><b>Note:</b> aborts the request, sent with a header parameter with the provided value. The parameter is taken into account if the sHeaderParameterName parameter is provided too.</p>
                 */
                abort(sHeaderParameterName: string, sHeaderParameterValue: string): void;
                /**
                 * <p>Adds some ariaDescribedBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.FileUploader;
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.FileUploader;
                /**
                 * <p>Adds some headerParameter to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oHeaderParameter <p>The headerParameter to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploader;
                /**
                 * <p>Adds some parameter to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oParameter <p>The parameter to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addParameter(oParameter: sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/change" data-sap-ui-target="sap.ui.unified.FileUploader/events/change">change</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired when the value of the file path has been changed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileAllowed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileAllowed">fileAllowed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired when the file is allowed for upload on client side.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachFileAllowed(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/filenameLengthExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/filenameLengthExceed">filenameLengthExceed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachFilenameLengthExceed(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileSizeExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileSizeExceed">fileSizeExceed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired when the size of a file is above the maximumFileSize property. This event is not supported by Internet Explorer 9 (same restriction as for the property maximumFileSize).</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachFileSizeExceed(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/typeMissmatch" data-sap-ui-target="sap.ui.unified.FileUploader/events/typeMissmatch">typeMissmatch</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired when the type of a file does not match the mimeType or fileType property.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachTypeMissmatch(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadAborted" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadAborted">uploadAborted</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired after the current upload has been aborted. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachUploadAborted(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadComplete" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadComplete">uploadComplete</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of the Upload process and does not give any success status from the server.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachUploadComplete(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadProgress" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadProgress">uploadProgress</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload. Depending on file size, band width and used browser the event is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachUploadProgress(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadStart" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadStart">uploadStart</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.FileUploader</code> itself.</p><p>Event is fired before an upload is started.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code> itself</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachUploadStart(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Clears the content of the <code>FileUploader</code>.</p><p><b>Note:</b> The attached additional data however is retained.</p>
                 * @returns sap.ui.unified.FileUploader <p>The <code>sap.ui.unified.FileUploader</code> instance</p>
                 */
                clear(): sap.ui.unified.FileUploader;
                /**
                 * <p>Destroys all the headerParameters in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyHeaderParameters(): sap.ui.unified.FileUploader;
                /**
                 * <p>Destroys all the parameters in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyParameters(): sap.ui.unified.FileUploader;
                /**
                 * <p>Destroys the xhrSettings in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getXhrSettings" data-sap-ui-target="getXhrSettings">xhrSettings</a>.</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyXhrSettings(): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/change" data-sap-ui-target="sap.ui.unified.FileUploader/events/change">change</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachChange(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileAllowed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileAllowed">fileAllowed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachFileAllowed(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/filenameLengthExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/filenameLengthExceed">filenameLengthExceed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachFilenameLengthExceed(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileSizeExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileSizeExceed">fileSizeExceed</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachFileSizeExceed(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/typeMissmatch" data-sap-ui-target="sap.ui.unified.FileUploader/events/typeMissmatch">typeMissmatch</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachTypeMissmatch(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadAborted" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadAborted">uploadAborted</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachUploadAborted(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadComplete" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadComplete">uploadComplete</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachUploadComplete(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadProgress" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadProgress">uploadProgress</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachUploadProgress(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadStart" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadStart">uploadStart</a> event of this <code>sap.ui.unified.FileUploader</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachUploadStart(fnFunction: Function, oListener: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/change" data-sap-ui-target="sap.ui.unified.FileUploader/events/change">change</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireChange(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileAllowed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileAllowed">fileAllowed</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireFileAllowed(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/filenameLengthExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/filenameLengthExceed">filenameLengthExceed</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireFilenameLengthExceed(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/fileSizeExceed" data-sap-ui-target="sap.ui.unified.FileUploader/events/fileSizeExceed">fileSizeExceed</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireFileSizeExceed(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/typeMissmatch" data-sap-ui-target="sap.ui.unified.FileUploader/events/typeMissmatch">typeMissmatch</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireTypeMissmatch(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadAborted" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadAborted">uploadAborted</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireUploadAborted(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadComplete" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadComplete">uploadComplete</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireUploadComplete(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadProgress" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadProgress">uploadProgress</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireUploadProgress(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.FileUploader/events/uploadStart" data-sap-ui-target="sap.ui.unified.FileUploader/events/uploadStart">uploadStart</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireUploadStart(mParameters?: any): sap.ui.unified.FileUploader;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAdditionalData" data-sap-ui-target="getAdditionalData">additionalData</a>.</p><p>Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.</p>
                 * @returns string <p>Value of property <code>additionalData</code></p>
                 */
                getAdditionalData(): string;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getButtonOnly" data-sap-ui-target="getButtonOnly">buttonOnly</a>.</p><p>If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>buttonOnly</code></p>
                 */
                getButtonOnly(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getButtonText" data-sap-ui-target="getButtonText">buttonText</a>.</p><p>The Button text can be overwritten using this property.</p>
                 * @returns string <p>Value of property <code>buttonText</code></p>
                 */
                getButtonText(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>Disabled controls have different colors, depending on customer settings.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enabled</code></p>
                 */
                getEnabled(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getFileType" data-sap-ui-target="getFileType">fileType</a>.</p><p>The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].</p>
                 * @returns string[] <p>Value of property <code>fileType</code></p>
                 */
                getFileType(): string[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p><p>The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer 9.</p>
                 * @returns sap.ui.unified.FileUploaderParameter[] 
                 */
                getHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconFirst" data-sap-ui-target="getIconFirst">iconFirst</a>.</p><p>If set to true (default), the display sequence is 1. icon 2. control text.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>iconFirst</code></p>
                 */
                getIconFirst(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconHovered" data-sap-ui-target="getIconHovered">iconHovered</a>.</p><p>Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>iconHovered</code></p>
                 */
                getIconHovered(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconOnly" data-sap-ui-target="getIconOnly">iconOnly</a>.</p><p>If set to true, the button is displayed without any text.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>iconOnly</code></p>
                 */
                getIconOnly(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconSelected" data-sap-ui-target="getIconSelected">iconSelected</a>.</p><p>Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>iconSelected</code></p>
                 */
                getIconSelected(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMaximumFilenameLength" data-sap-ui-target="getMaximumFilenameLength">maximumFilenameLength</a>.</p><p>The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.</p>
                 * @returns number <p>Value of property <code>maximumFilenameLength</code></p>
                 */
                getMaximumFilenameLength(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMaximumFileSize" data-sap-ui-target="getMaximumFileSize">maximumFileSize</a>.</p><p>A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.</p>
                 * @returns number <p>Value of property <code>maximumFileSize</code></p>
                 */
                getMaximumFileSize(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMimeType" data-sap-ui-target="getMimeType">mimeType</a>.</p><p>The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9. Example: mimeType ["image/png", "image/jpeg"].</p>
                 * @returns string[] <p>Value of property <code>mimeType</code></p>
                 */
                getMimeType(): string[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMultiple" data-sap-ui-target="getMultiple">multiple</a>.</p><p>Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.</p><p><b>Note:</b> Keep in mind that the various operating systems for mobile devices can react differently to the property so that fewer upload functions may be available in some cases.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>multiple</code></p>
                 */
                getMultiple(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>Unique control name for identification on the server side after sending data to the server.</p>
                 * @returns string <p>Value of property <code>name</code></p>
                 */
                getName(): string;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p><p>The parameters for the FileUploader which are rendered as a hidden inputfield.</p>
                 * @returns sap.ui.unified.FileUploaderParameter[] 
                 */
                getParameters(): sap.ui.unified.FileUploaderParameter[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getPlaceholder" data-sap-ui-target="getPlaceholder">placeholder</a>.</p><p>Placeholder for the text field.</p>
                 * @returns string <p>Value of property <code>placeholder</code></p>
                 */
                getPlaceholder(): string;
                /**
                 * <p>Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload these custom Blobs instead of the received/initials Blobs in the parameter <code>aBlobs</code>. One use case could be to create and upload zip archives based on the passed Blobs. The default implementation of this API should simply resolve with the received Blobs (parameter <code>aBlobs</code>).</p><p>This API is only supported in case <code>sendXHR</code> is <code>true</code>. This means only IE10+ is supported, while IE9 and below is not.</p><p>This is a default implementation of the interface <code>sap.ui.unified.IProcessableBlobs</code>.</p>
                 * @param {Blob[]} aBlobs <p>The initial Blobs which can be used to determine/calculate a new array of Blobs for further processing.</p>
                 * @returns Promise<any> <p>A Promise that resolves with an array of Blobs which is used for the final uploading.</p>
                 */
                getProcessedBlobsFromArray(aBlobs: Blob[]): Promise<any>;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getSameFilenameAllowed" data-sap-ui-target="getSameFilenameAllowed">sameFilenameAllowed</a>.</p><p>If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>sameFilenameAllowed</code></p>
                 */
                getSameFilenameAllowed(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getSendXHR" data-sap-ui-target="getSendXHR">sendXHR</a>.</p><p>If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>sendXHR</code></p>
                 */
                getSendXHR(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getStyle" data-sap-ui-target="getStyle">style</a>.</p><p>Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.</p>
                 * @returns string <p>Value of property <code>style</code></p>
                 */
                getStyle(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUploadOnChange" data-sap-ui-target="getUploadOnChange">uploadOnChange</a>.</p><p>If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>uploadOnChange</code></p>
                 */
                getUploadOnChange(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUploadUrl" data-sap-ui-target="getUploadUrl">uploadUrl</a>.</p><p>Used when URL address is on a remote server.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>uploadUrl</code></p>
                 */
                getUploadUrl(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUseMultipart" data-sap-ui-target="getUseMultipart">useMultipart</a>.</p><p>If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>useMultipart</code></p>
                 */
                getUseMultipart(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Value of the path for file upload.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>value</code></p>
                 */
                getValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValueState" data-sap-ui-target="getValueState">valueState</a>.</p><p>Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.</p><p>Default value is <code>None</code>.</p>
                 * @returns sap.ui.core.ValueState <p>Value of property <code>valueState</code></p>
                 */
                getValueState(): sap.ui.core.ValueState;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValueStateText" data-sap-ui-target="getValueStateText">valueStateText</a>.</p><p>Custom text for the value state message pop-up.</p><p><b>Note:</b> If not specified, a default text, based on the value state type, will be used instead.</p>
                 * @returns string <p>Value of property <code>valueStateText</code></p>
                 */
                getValueStateText(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the displayed control width.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                 */
                getWidth(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getXhrSettings" data-sap-ui-target="getXhrSettings">xhrSettings</a>.</p><p>Settings for the <code>XMLHttpRequest</code> object. <b>Note:</b> This aggregation is only used when the <code>sendXHR</code> property is set to <code>true</code>.</p>
                 * @returns sap.ui.unified.FileUploaderXHRSettings 
                 */
                getXhrSettings(): sap.ui.unified.FileUploaderXHRSettings;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oHeaderParameter <p>The headerParameter whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oParameter <p>The parameter whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfParameter(oParameter: sap.ui.unified.FileUploaderParameter): number;
                /**
                 * <p>Inserts a headerParameter into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oHeaderParameter <p>The headerParameter to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the headerParameter should be inserted at; for a negative value of <code>iIndex</code>, the headerParameter is inserted at position 0; for a value greater than the current size of the aggregation, the headerParameter is inserted at the last position</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertHeaderParameter(oHeaderParameter: sap.ui.unified.FileUploaderParameter, iIndex: number): sap.ui.unified.FileUploader;
                /**
                 * <p>Inserts a parameter into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p>
                 * @param {sap.ui.unified.FileUploaderParameter} oParameter <p>The parameter to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the parameter should be inserted at; for a negative value of <code>iIndex</code>, the parameter is inserted at position 0; for a value greater than the current size of the aggregation, the parameter is inserted at the last position</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertParameter(oParameter: sap.ui.unified.FileUploaderParameter, iIndex: number): sap.ui.unified.FileUploader;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaDescribedBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.FileUploaderParameter[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.FileUploaderParameter[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllParameters(): sap.ui.unified.FileUploaderParameter[];
                /**
                 * <p>Removes an ariaDescribedBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaDescribedBy" data-sap-ui-target="getAriaDescribedBy">ariaDescribedBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaDescribedBy <p>The ariaDescribedBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaDescribedBy or <code>null</code></p>
                 */
                removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a headerParameter from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getHeaderParameters" data-sap-ui-target="getHeaderParameters">headerParameters</a>.</p>
                 * @param {number | string | sap.ui.unified.FileUploaderParameter} vHeaderParameter <p>The headerParameter to remove or its index or id</p>
                 * @returns sap.ui.unified.FileUploaderParameter <p>The removed headerParameter or <code>null</code></p>
                 */
                removeHeaderParameter(vHeaderParameter: number | string | sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploaderParameter;
                /**
                 * <p>Removes a parameter from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getParameters" data-sap-ui-target="getParameters">parameters</a>.</p>
                 * @param {number | string | sap.ui.unified.FileUploaderParameter} vParameter <p>The parameter to remove or its index or id</p>
                 * @returns sap.ui.unified.FileUploaderParameter <p>The removed parameter or <code>null</code></p>
                 */
                removeParameter(vParameter: number | string | sap.ui.unified.FileUploaderParameter): sap.ui.unified.FileUploaderParameter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getAdditionalData" data-sap-ui-target="getAdditionalData">additionalData</a>.</p><p>Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sAdditionalData <p>New value for property <code>additionalData</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setAdditionalData(sAdditionalData: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getButtonOnly" data-sap-ui-target="getButtonOnly">buttonOnly</a>.</p><p>If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bButtonOnly <p>New value for property <code>buttonOnly</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setButtonOnly(bButtonOnly: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getButtonText" data-sap-ui-target="getButtonText">buttonText</a>.</p><p>The Button text can be overwritten using this property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sButtonText <p>New value for property <code>buttonText</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setButtonText(sButtonText: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>Disabled controls have different colors, depending on customer settings.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnabled(bEnabled: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getFileType" data-sap-ui-target="getFileType">fileType</a>.</p><p>The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string[]} sFileType <p>New value for property <code>fileType</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setFileType(sFileType: string[]): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconFirst" data-sap-ui-target="getIconFirst">iconFirst</a>.</p><p>If set to true (default), the display sequence is 1. icon 2. control text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bIconFirst <p>New value for property <code>iconFirst</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIconFirst(bIconFirst: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconHovered" data-sap-ui-target="getIconHovered">iconHovered</a>.</p><p>Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.URI} sIconHovered <p>New value for property <code>iconHovered</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIconHovered(sIconHovered: sap.ui.core.URI): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconOnly" data-sap-ui-target="getIconOnly">iconOnly</a>.</p><p>If set to true, the button is displayed without any text.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bIconOnly <p>New value for property <code>iconOnly</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIconOnly(bIconOnly: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getIconSelected" data-sap-ui-target="getIconSelected">iconSelected</a>.</p><p>Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.URI} sIconSelected <p>New value for property <code>iconSelected</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIconSelected(sIconSelected: sap.ui.core.URI): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMaximumFilenameLength" data-sap-ui-target="getMaximumFilenameLength">maximumFilenameLength</a>.</p><p>The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} iMaximumFilenameLength <p>New value for property <code>maximumFilenameLength</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaximumFilenameLength(iMaximumFilenameLength: number): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMaximumFileSize" data-sap-ui-target="getMaximumFileSize">maximumFileSize</a>.</p><p>A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {number} fMaximumFileSize <p>New value for property <code>maximumFileSize</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaximumFileSize(fMaximumFileSize: number): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMimeType" data-sap-ui-target="getMimeType">mimeType</a>.</p><p>The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9. Example: mimeType ["image/png", "image/jpeg"].</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string[]} sMimeType <p>New value for property <code>mimeType</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMimeType(sMimeType: string[]): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getMultiple" data-sap-ui-target="getMultiple">multiple</a>.</p><p>Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.</p><p><b>Note:</b> Keep in mind that the various operating systems for mobile devices can react differently to the property so that fewer upload functions may be available in some cases.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bMultiple <p>New value for property <code>multiple</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMultiple(bMultiple: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>Unique control name for identification on the server side after sending data to the server.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sName <p>New value for property <code>name</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setName(sName: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getPlaceholder" data-sap-ui-target="getPlaceholder">placeholder</a>.</p><p>Placeholder for the text field.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sPlaceholder <p>New value for property <code>placeholder</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPlaceholder(sPlaceholder: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getSameFilenameAllowed" data-sap-ui-target="getSameFilenameAllowed">sameFilenameAllowed</a>.</p><p>If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSameFilenameAllowed <p>New value for property <code>sameFilenameAllowed</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSameFilenameAllowed(bSameFilenameAllowed: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getSendXHR" data-sap-ui-target="getSendXHR">sendXHR</a>.</p><p>If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSendXHR <p>New value for property <code>sendXHR</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSendXHR(bSendXHR: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getStyle" data-sap-ui-target="getStyle">style</a>.</p><p>Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sStyle <p>New value for property <code>style</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStyle(sStyle: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUploadOnChange" data-sap-ui-target="getUploadOnChange">uploadOnChange</a>.</p><p>If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bUploadOnChange <p>New value for property <code>uploadOnChange</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUploadOnChange(bUploadOnChange: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUploadUrl" data-sap-ui-target="getUploadUrl">uploadUrl</a>.</p><p>Used when URL address is on a remote server.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.URI} sUploadUrl <p>New value for property <code>uploadUrl</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUploadUrl(sUploadUrl: sap.ui.core.URI): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getUseMultipart" data-sap-ui-target="getUseMultipart">useMultipart</a>.</p><p>If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bUseMultipart <p>New value for property <code>useMultipart</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUseMultipart(bUseMultipart: boolean): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Value of the path for file upload.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sValue <p>New value for property <code>value</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(sValue: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValueState" data-sap-ui-target="getValueState">valueState</a>.</p><p>Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
                 * @param {sap.ui.core.ValueState} sValueState <p>New value for property <code>valueState</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValueState(sValueState: sap.ui.core.ValueState): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getValueStateText" data-sap-ui-target="getValueStateText">valueStateText</a>.</p><p>Custom text for the value state message pop-up.</p><p><b>Note:</b> If not specified, a default text, based on the value state type, will be used instead.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sValueStateText <p>New value for property <code>valueStateText</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValueStateText(sValueStateText: string): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Specifies the displayed control width.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.FileUploader;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploader/methods/getXhrSettings" data-sap-ui-target="getXhrSettings">xhrSettings</a>.</p>
                 * @param {sap.ui.unified.FileUploaderXHRSettings} oXhrSettings <p>The xhrSettings to set</p>
                 * @returns sap.ui.unified.FileUploader <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setXhrSettings(oXhrSettings: sap.ui.unified.FileUploaderXHRSettings): sap.ui.unified.FileUploader;
                /**
                 * <p>Starts the upload (as defined by uploadUrl).</p>
                 * @param {boolean} bPreProcessFiles <p>Set to <code>true</code> to allow pre-processing of the files before sending the request. As a result, the <code>upload</code> method becomes asynchronous. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.IProcessableBlobs" data-sap-ui-target="IProcessableBlobs">sap.ui.unified.IProcessableBlobs</a> for more information. <b>Note:</b> This parameter is only taken into account when <code>sendXHR</code> is set to <code>true</code>.</p>
                 */
                upload(bPreProcessFiles?: boolean): void;
            }
            /**
             * <p>Represents a parameter for the FileUploader which is rendered as a hidden inputfield.</p>
             */
            export class FileUploaderParameter extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new FileUploaderParameter.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderParameter/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>The name of the hidden inputfield.</p>
                 * @returns string <p>Value of property <code>name</code></p>
                 */
                getName(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderParameter/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>The value of the hidden inputfield.</p>
                 * @returns string <p>Value of property <code>value</code></p>
                 */
                getValue(): string;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderParameter/methods/getName" data-sap-ui-target="getName">name</a>.</p><p>The name of the hidden inputfield.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sName <p>New value for property <code>name</code></p>
                 * @returns sap.ui.unified.FileUploaderParameter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setName(sName: string): sap.ui.unified.FileUploaderParameter;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderParameter/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>The value of the hidden inputfield.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sValue <p>New value for property <code>value</code></p>
                 * @returns sap.ui.unified.FileUploaderParameter <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(sValue: string): sap.ui.unified.FileUploaderParameter;
            }
            /**
             * <p>Properties for the <code>XMLHttpRequest</code> object used for file uploads.</p>
             */
            export class FileUploaderXHRSettings extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new FileUploaderXHRSettings.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderXHRSettings/methods/getWithCredentials" data-sap-ui-target="getWithCredentials">withCredentials</a>.</p><p>Determines the value of the <code>XMLHttpRequest.withCredentials</code> property</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>withCredentials</code></p>
                 */
                getWithCredentials(): boolean;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.FileUploaderXHRSettings/methods/getWithCredentials" data-sap-ui-target="getWithCredentials">withCredentials</a>.</p><p>Determines the value of the <code>XMLHttpRequest.withCredentials</code> property</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bWithCredentials <p>New value for property <code>withCredentials</code></p>
                 * @returns sap.ui.unified.FileUploaderXHRSettings <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setWithCredentials(bWithCredentials: boolean): sap.ui.unified.FileUploaderXHRSettings;
            }
            /**
             * <p>Types of display mode for overlapping appointments.</p>
             */
            export enum GroupAppointmentsMode {
                /**
                 * <p>Overlapping appointments are displayed as a collapsed group appointment.</p>
                 */
                Collapsed = "Collapsed",
                /**
                 * <p>Overlapping appointments are displayed individually (expanded from a group).</p>
                 */
                Expanded = "Expanded",
            }
            /**
             * <p>Marker interface for controls that process instances of <code>window.Blob</code>, such as <code>window.File</code>. The implementation of this Interface should implement the following Interface methods: <ul> <li><code>getProcessedBlobsFromArray</code></li> </ul></p>
             */
            export interface IProcessableBlobs {
            }
            /**
             * <p>A menu is an interactive element which provides a choice of different actions to the user. These actions (items) can also be organized in submenus. Like other dialog-like controls, the menu is not rendered within the control hierarchy. Instead it can be opened at a specified position via a function call.</p>
             */
            export class Menu extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new Menu control.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>Id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.Menu;
                /**
                 * <p>Adds some item to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.unified.MenuItemBase} oItem <p>The item to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addItem(oItem: sap.ui.unified.MenuItemBase): sap.ui.unified.Menu;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Menu/events/itemSelect" data-sap-ui-target="sap.ui.unified.Menu/events/itemSelect">itemSelect</a> event of this <code>sap.ui.unified.Menu</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.Menu</code> itself.</p><p>Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within one of its direct or indirect submenus. <b>Note:</b> There is also a select event available for each single menu item. This event and the event of the menu items are redundant.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Menu</code> itself</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachItemSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.Menu;
                /**
                 * <p>Closes the menu.</p>
                 */
                close(): void;
                /**
                 * <p>Destroys all the items in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyItems(): sap.ui.unified.Menu;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Menu/events/itemSelect" data-sap-ui-target="sap.ui.unified.Menu/events/itemSelect">itemSelect</a> event of this <code>sap.ui.unified.Menu</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachItemSelect(fnFunction: Function, oListener: any): sap.ui.unified.Menu;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.Menu/events/itemSelect" data-sap-ui-target="sap.ui.unified.Menu/events/itemSelect">itemSelect</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireItemSelect(mParameters?: any): sap.ui.unified.Menu;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>When a menu is disabled none of its items can be selected by the user. The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enabled</code></p>
                 */
                getEnabled(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>The available actions to be displayed as items of the menu.</p>
                 * @returns sap.ui.unified.MenuItemBase[] 
                 */
                getItems(): sap.ui.unified.MenuItemBase[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getMaxVisibleItems" data-sap-ui-target="getMaxVisibleItems">maxVisibleItems</a>.</p><p>The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller than 1 means an infinite number of visible items. The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum number of visible items is not yet reached.</p><p>Default value is <code>0</code>.</p>
                 * @returns number <p>Value of property <code>maxVisibleItems</code></p>
                 */
                getMaxVisibleItems(): number;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getPageSize" data-sap-ui-target="getPageSize">pageSize</a>.</p><p>The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys for jumping to the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump an arbitrary number of items up or down. This number can be defined via the <code>pageSize</code> property. For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> / <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.</p><p>Default value is <code>5</code>.</p>
                 * @returns number <p>Value of property <code>pageSize</code></p>
                 */
                getPageSize(): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.MenuItemBase</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.MenuItemBase} oItem <p>The item whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfItem(oItem: sap.ui.unified.MenuItemBase): number;
                /**
                 * <p>Inserts a item into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {sap.ui.unified.MenuItemBase} oItem <p>The item to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position</p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertItem(oItem: sap.ui.unified.MenuItemBase, iIndex: number): sap.ui.unified.Menu;
                /**
                 * <p>Opens the menu at the specified position.</p><p>The position of the menu is defined relative to an element in the visible DOM by specifying the docking location of the menu and of the related element.</p><p>See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.Popup/methods/open" data-sap-ui-target="sap.ui.core.Popup/methods/open">Popup#open</a> for further details about popup positioning.</p>
                 * @param {boolean} bWithKeyboard <p>Indicates whether or not the first item shall be highlighted when the menu is opened (keyboard case)</p>
                 * @param {sap.ui.core.Element | HTMLElement} oOpenerRef <p>The element which will get the focus back again after the menu was closed</p>
                 * @param {sap.ui.core.Dock} my <p>The reference docking location of the menu for positioning the menu on the screen</p>
                 * @param {sap.ui.core.Dock} at <p>The 'of' element's reference docking location for positioning the menu on the screen</p>
                 * @param {sap.ui.core.Element | HTMLElement} of <p>The menu is positioned relatively to this element based on the given dock locations</p>
                 * @param {string} offset <p>The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "10 0" to move the popup 10 pixels to the right)</p>
                 * @param {sap.ui.core.Collision} collision <p>The collision defines how the position of the menu should be adjusted in case it overflows the window in some direction</p>
                 */
                open(bWithKeyboard: boolean, oOpenerRef: sap.ui.core.Element | HTMLElement, my: sap.ui.core.Dock, at: sap.ui.core.Dock, of: sap.ui.core.Element | HTMLElement, offset?: string, collision?: sap.ui.core.Collision): void;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.MenuItemBase[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllItems(): sap.ui.unified.MenuItemBase[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a item from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getItems" data-sap-ui-target="getItems">items</a>.</p>
                 * @param {number | string | sap.ui.unified.MenuItemBase} vItem <p>The item to remove or its index or id</p>
                 * @returns sap.ui.unified.MenuItemBase <p>The removed item or <code>null</code></p>
                 */
                removeItem(vItem: number | string | sap.ui.unified.MenuItemBase): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>When a menu is disabled none of its items can be selected by the user. The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnabled(bEnabled: boolean): sap.ui.unified.Menu;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getMaxVisibleItems" data-sap-ui-target="getMaxVisibleItems">maxVisibleItems</a>.</p><p>The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller than 1 means an infinite number of visible items. The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum number of visible items is not yet reached.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                 * @param {number} iMaxVisibleItems <p>New value for property <code>maxVisibleItems</code></p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setMaxVisibleItems(iMaxVisibleItems: number): sap.ui.unified.Menu;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getPageSize" data-sap-ui-target="getPageSize">pageSize</a>.</p><p>The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the <i>Home</i> / <i>End</i> keys for jumping to the first / last item, the <i>Page Up</i> / <i>Page Down</i> keys can be used to jump an arbitrary number of items up or down. This number can be defined via the <code>pageSize</code> property. For values smaller than 1, paging behaves in a similar way to when using the <i>Home</i> / <i>End</i> keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>5</code>.</p>
                 * @param {number} iPageSize <p>New value for property <code>pageSize</code></p>
                 * @returns sap.ui.unified.Menu <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setPageSize(iPageSize: number): sap.ui.unified.Menu;
            }
            /**
             * <p>Standard item to be used inside a menu. A menu item represents an action which can be selected by the user in the menu or it can provide a submenu to organize the actions hierarchically.</p>
             */
            export class MenuItem extends sap.ui.unified.MenuItemBase {
                /**
                 * <p>Constructor for a new MenuItem element.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>Id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.MenuItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.MenuItem;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Defines the icon of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.IconPool" data-sap-ui-target="IconPool">sap.ui.core.IconPool</a> or an image which should be displayed on the item.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Defines the text which should be displayed on the item.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>text</code></p>
                 */
                getText(): string;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Defines the icon of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.IconPool" data-sap-ui-target="IconPool">sap.ui.core.IconPool</a> or an image which should be displayed on the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.MenuItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.MenuItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItem/methods/getText" data-sap-ui-target="getText">text</a>.</p><p>Defines the text which should be displayed on the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sText <p>New value for property <code>text</code></p>
                 * @returns sap.ui.unified.MenuItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setText(sText: string): sap.ui.unified.MenuItem;
            }
            /**
             * <p>Abstract base class for menu item which provides common properties and events for all concrete item implementations.</p>
             */
            export abstract class MenuItemBase extends sap.ui.core.Element {
                /**
                 * <p>Abstract base class <code>MenuItemBase</code> for menu item elements. Please use concrete subclasses.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>Id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.MenuItemBase/events/select" data-sap-ui-target="sap.ui.unified.MenuItemBase/events/select">select</a> event of this <code>sap.ui.unified.MenuItemBase</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.MenuItemBase</code> itself.</p><p>Fired when the item is selected by the user. <b>Note:</b> The event is also available for items which have a submenu. In general, applications must not handle event in this case because the user selection opens the sub menu.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.MenuItemBase</code> itself</p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Destroys the submenu in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getSubmenu" data-sap-ui-target="getSubmenu">submenu</a>.</p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySubmenu(): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.MenuItemBase/events/select" data-sap-ui-target="sap.ui.unified.MenuItemBase/events/select">select</a> event of this <code>sap.ui.unified.MenuItemBase</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.MenuItemBase/events/select" data-sap-ui-target="sap.ui.unified.MenuItemBase/events/select">select</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireSelect(mParameters?: any): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>When an item is disabled the item can not be selected by the user. The enabled property of the item has no effect when the menu of the item is disabled (<a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getEnabled" data-sap-ui-target="sap.ui.unified.Menu/methods/getEnabled">Menu#getEnabled</a>).</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>enabled</code></p>
                 */
                getEnabled(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getStartsSection" data-sap-ui-target="getStartsSection">startsSection</a>.</p><p>Defines whether a visual separator should be rendered before the item. <b>Note:</b> If an item is invisible also the separator of this item is not shown.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>startsSection</code></p>
                 */
                getStartsSection(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getSubmenu" data-sap-ui-target="getSubmenu">submenu</a>.</p><p>An optional submenu of the item which is opened when the item is selected by the user.</p>
                 * @returns sap.ui.unified.Menu 
                 */
                getSubmenu(): sap.ui.unified.Menu;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible items do not appear in the menu.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Changes the visual hover state of the menu item.</p><p>Subclasses may override this function.</p>
                 * @param {boolean} bHovered <p>Specifies whether the item is currently hovered or not.</p>
                 * @param {sap.ui.unified.Menu} oMenu <p>The menu to which this item belongs</p>
                 */
                protected hover(bHovered: boolean, oMenu: sap.ui.unified.Menu): void;
                /**
                 * <p>Informs the item that the item HTML is now applied to the DOM.</p><p>Subclasses may override this function.</p>
                 */
                protected onAfterRendering(): void;
                /**
                 * <p>Event handler which is called whenever the submenu of the item is opened or closed.</p><p>Subclasses may override this function.</p>
                 * @param {boolean} bOpened <p>Specifies whether the submenu of the item is opened or closed</p>
                 */
                protected onSubmenuToggle(bOpened: boolean): void;
                /**
                 * <p>Produces the HTML of an item and writes it to render-output-buffer during the rendering of the corresponding menu.</p><p>Subclasses may override this function.</p>
                 * @param {sap.ui.core.RenderManager} oRenderManager <p>The <code>RenderManager</code> that can be used for writing to the render-output-buffer</p>
                 * @param {sap.ui.unified.MenuItemBase} oItem <p>The item which should be rendered</p>
                 * @param {sap.ui.unified.Menu} oMenu <p>The menu to which this item belongs</p>
                 */
                protected render(oRenderManager: sap.ui.core.RenderManager, oItem: sap.ui.unified.MenuItemBase, oMenu: sap.ui.unified.Menu): void;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getEnabled" data-sap-ui-target="getEnabled">enabled</a>.</p><p>When an item is disabled the item can not be selected by the user. The enabled property of the item has no effect when the menu of the item is disabled (<a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Menu/methods/getEnabled" data-sap-ui-target="sap.ui.unified.Menu/methods/getEnabled">Menu#getEnabled</a>).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bEnabled <p>New value for property <code>enabled</code></p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setEnabled(bEnabled: boolean): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getStartsSection" data-sap-ui-target="getStartsSection">startsSection</a>.</p><p>Defines whether a visual separator should be rendered before the item. <b>Note:</b> If an item is invisible also the separator of this item is not shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bStartsSection <p>New value for property <code>startsSection</code></p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setStartsSection(bStartsSection: boolean): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getSubmenu" data-sap-ui-target="getSubmenu">submenu</a>.</p>
                 * @param {sap.ui.unified.Menu} oSubmenu <p>The submenu to set</p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSubmenu(oSubmenu: sap.ui.unified.Menu): sap.ui.unified.MenuItemBase;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuItemBase/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible items do not appear in the menu.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns sap.ui.unified.MenuItemBase <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible: boolean): sap.ui.unified.MenuItemBase;
            }
            /**
             * <p>Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter implementations. The aggregation <code>submenu</code> (inherited from parent class) is not supported for this type of menu item.</p>
             */
            export class MenuTextFieldItem extends sap.ui.unified.MenuItemBase {
                /**
                 * <p>Constructor for a new MenuTextFieldItem element.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>Id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>Initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Defines the icon of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.IconPool" data-sap-ui-target="IconPool">sap.ui.core.IconPool</a> or an image which should be displayed on the item.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p><p>Defines the label of the text field of the item.</p>
                 * @returns string <p>Value of property <code>label</code></p>
                 */
                getLabel(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Defines the value of the text field of the item.</p>
                 * @returns string <p>Value of property <code>value</code></p>
                 */
                getValue(): string;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getValueState" data-sap-ui-target="getValueState">valueState</a>.</p><p>Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.</p><p>Default value is <code>None</code>.</p>
                 * @returns sap.ui.core.ValueState <p>Value of property <code>valueState</code></p>
                 */
                getValueState(): sap.ui.core.ValueState;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>Defines the icon of the <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.core.IconPool" data-sap-ui-target="IconPool">sap.ui.core.IconPool</a> or an image which should be displayed on the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.MenuTextFieldItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.MenuTextFieldItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getLabel" data-sap-ui-target="getLabel">label</a>.</p><p>Defines the label of the text field of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sLabel <p>New value for property <code>label</code></p>
                 * @returns sap.ui.unified.MenuTextFieldItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setLabel(sLabel: string): sap.ui.unified.MenuTextFieldItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getValue" data-sap-ui-target="getValue">value</a>.</p><p>Defines the value of the text field of the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {string} sValue <p>New value for property <code>value</code></p>
                 * @returns sap.ui.unified.MenuTextFieldItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValue(sValue: string): sap.ui.unified.MenuTextFieldItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.MenuTextFieldItem/methods/getValueState" data-sap-ui-target="getValueState">valueState</a>.</p><p>Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>None</code>.</p>
                 * @param {sap.ui.core.ValueState} sValueState <p>New value for property <code>valueState</code></p>
                 * @returns sap.ui.unified.MenuTextFieldItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setValueState(sValueState: sap.ui.core.ValueState): sap.ui.unified.MenuTextFieldItem;
            }
            /**
             * <p>The shell control is meant as root control (full-screen) of an application. It was build as root control of the Fiori Launchpad application and provides the basic capabilities for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and do not use it for other scenarios than the root control usecase.</p>
             */
            export class Shell extends sap.ui.unified.ShellLayout {
                /**
                 * <p>Constructor for a new Shell.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some curtainContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p>
                 * @param {sap.ui.core.Control} oCurtainContent <p>The curtainContent to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addCurtainContent(oCurtainContent: sap.ui.core.Control): sap.ui.unified.Shell;
                /**
                 * <p>Adds some curtainPaneContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p>
                 * @param {sap.ui.core.Control} oCurtainPaneContent <p>The curtainPaneContent to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control): sap.ui.unified.Shell;
                /**
                 * <p>Adds some headEndItem to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadEndItem <p>The headEndItem to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem): sap.ui.unified.Shell;
                /**
                 * <p>Adds some headItem to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadItem <p>The headItem to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem): sap.ui.unified.Shell;
                /**
                 * <p>Destroys all the curtainContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyCurtainContent(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys all the curtainPaneContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyCurtainPaneContent(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys all the headEndItems in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyHeadEndItems(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys the header in the aggregation named <code>header</code>, but only if a custom header is set. The default header can not be destroyed.</p>
                 * @returns sap.ui.unified.Shell <p><code>this</code> to allow method chaining</p>
                 */
                destroyHeader(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys all the headItems in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyHeadItems(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys the search in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySearch(): sap.ui.unified.Shell;
                /**
                 * <p>Destroys the user in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getUser" data-sap-ui-target="getUser">user</a>.</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyUser(): sap.ui.unified.Shell;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p><p>The content to appear in the curtain area.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getCurtainContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p><p>The content to appear in the pane area of the curtain.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getCurtainPaneContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p><p>The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.</p>
                 * @returns sap.ui.unified.ShellHeadItem[] 
                 */
                getHeadEndItems(): sap.ui.unified.ShellHeadItem[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p><p>The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported. If a custom header is set this aggregation has no effect.</p>
                 * @returns sap.ui.unified.ShellHeadItem[] 
                 */
                getHeadItems(): sap.ui.unified.ShellHeadItem[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The application icon. If a custom header is set this property has no effect.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p><p>Experimental (This aggregation might change in future!): The search control which should be displayed in the shell header. If a custom header is set this aggregation has no effect.</p>
                 * @returns sap.ui.core.Control 
                 */
                getSearch(): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getSearchVisible" data-sap-ui-target="getSearchVisible">searchVisible</a>.</p><p>If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>searchVisible</code></p>
                 */
                getSearchVisible(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getUser" data-sap-ui-target="getUser">user</a>.</p><p>The user item which is rendered in the shell header beside the items. If a custom header is set this aggregation has no effect.</p>
                 * @returns sap.ui.unified.ShellHeadUserItem 
                 */
                getUser(): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oCurtainContent <p>The curtainContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfCurtainContent(oCurtainContent: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oCurtainPaneContent <p>The curtainPaneContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadEndItem <p>The headEndItem whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadItem <p>The headItem whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem): number;
                /**
                 * <p>Inserts a curtainContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p>
                 * @param {sap.ui.core.Control} oCurtainContent <p>The curtainContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the curtainContent should be inserted at; for a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value greater than the current size of the aggregation, the curtainContent is inserted at the last position</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertCurtainContent(oCurtainContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.Shell;
                /**
                 * <p>Inserts a curtainPaneContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p>
                 * @param {sap.ui.core.Control} oCurtainPaneContent <p>The curtainPaneContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the curtainPaneContent should be inserted at; for a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for a value greater than the current size of the aggregation, the curtainPaneContent is inserted at the last position</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertCurtainPaneContent(oCurtainPaneContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.Shell;
                /**
                 * <p>Inserts a headEndItem into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadEndItem <p>The headEndItem to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the headEndItem should be inserted at; for a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value greater than the current size of the aggregation, the headEndItem is inserted at the last position</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertHeadEndItem(oHeadEndItem: sap.ui.unified.ShellHeadItem, iIndex: number): sap.ui.unified.Shell;
                /**
                 * <p>Inserts a headItem into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p>
                 * @param {sap.ui.unified.ShellHeadItem} oHeadItem <p>The headItem to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the headItem should be inserted at; for a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value greater than the current size of the aggregation, the headItem is inserted at the last position</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertHeadItem(oHeadItem: sap.ui.unified.ShellHeadItem, iIndex: number): sap.ui.unified.Shell;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllCurtainContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllCurtainPaneContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.ShellHeadItem[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllHeadEndItems(): sap.ui.unified.ShellHeadItem[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.unified.ShellHeadItem[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllHeadItems(): sap.ui.unified.ShellHeadItem[];
                /**
                 * <p>Removes a curtainContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainContent" data-sap-ui-target="getCurtainContent">curtainContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vCurtainContent <p>The curtainContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed curtainContent or <code>null</code></p>
                 */
                removeCurtainContent(vCurtainContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a curtainPaneContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getCurtainPaneContent" data-sap-ui-target="getCurtainPaneContent">curtainPaneContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vCurtainPaneContent <p>The curtainPaneContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed curtainPaneContent or <code>null</code></p>
                 */
                removeCurtainPaneContent(vCurtainPaneContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a headEndItem from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadEndItems" data-sap-ui-target="getHeadEndItems">headEndItems</a>.</p>
                 * @param {number | string | sap.ui.unified.ShellHeadItem} vHeadEndItem <p>The headEndItem to remove or its index or id</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>The removed headEndItem or <code>null</code></p>
                 */
                removeHeadEndItem(vHeadEndItem: number | string | sap.ui.unified.ShellHeadItem): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Removes a headItem from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getHeadItems" data-sap-ui-target="getHeadItems">headItems</a>.</p>
                 * @param {number | string | sap.ui.unified.ShellHeadItem} vHeadItem <p>The headItem to remove or its index or id</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>The removed headItem or <code>null</code></p>
                 */
                removeHeadItem(vHeadItem: number | string | sap.ui.unified.ShellHeadItem): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Setter for the aggregated <code>header</code>.</p>
                 * @param {sap.ui.core.Control} oHeader <p>The Control which should be rendered within the Shell header or <code>null</code> to render the default Shell header.</p>
                 * @returns sap.ui.unified.Shell <p><code>this</code> to allow method chaining</p>
                 */
                setHeader(oHeader: sap.ui.core.Control): sap.ui.unified.Shell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The application icon. If a custom header is set this property has no effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.Shell;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p>
                 * @param {sap.ui.core.Control} oSearch <p>The search to set</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSearch(oSearch: sap.ui.core.Control): sap.ui.unified.Shell;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getSearchVisible" data-sap-ui-target="getSearchVisible">searchVisible</a>.</p><p>If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bSearchVisible <p>New value for property <code>searchVisible</code></p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSearchVisible(bSearchVisible: boolean): sap.ui.unified.Shell;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Shell/methods/getUser" data-sap-ui-target="getUser">user</a>.</p>
                 * @param {sap.ui.unified.ShellHeadUserItem} oUser <p>The user to set</p>
                 * @returns sap.ui.unified.Shell <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUser(oUser: sap.ui.unified.ShellHeadUserItem): sap.ui.unified.Shell;
            }
            /**
             * <p>Header Action item of the Shell.</p>
             */
            export class ShellHeadItem extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new ShellHeadItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadItem/events/press">press</a> event of this <code>sap.ui.unified.ShellHeadItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ShellHeadItem</code> itself.</p><p>Event is fired when the user presses the item.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code> itself</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadItem/events/press">press</a> event of this <code>sap.ui.unified.ShellHeadItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: Function, oListener: any): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadItem/events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon must be set.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>icon</code></p>
                 */
                getIcon(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getSelected" data-sap-ui-target="getSelected">selected</a>.</p><p>Defines the toggle state in case the item represents a toggle button (see also property <code>toggleEnabled</code>).</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>selected</code></p>
                 */
                getSelected(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getShowSeparator" data-sap-ui-target="getShowSeparator">showSeparator</a>.</p><p>If set to true, a separator is displayed after the item.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showSeparator</code></p>
                 */
                getShowSeparator(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getToggleEnabled" data-sap-ui-target="getToggleEnabled">toggleEnabled</a>.</p><p>If set to true, the item represents a toggle button. The <code>selected</code> property can the be used to define the toggle state. Otherwise the item is displayed as action button. In this case the <code>selected</code> property is ignored.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>toggleEnabled</code></p>
                 */
                getToggleEnabled(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible items are not shown on the UI.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>visible</code></p>
                 */
                getVisible(): boolean;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getIcon" data-sap-ui-target="getIcon">icon</a>.</p><p>The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon must be set.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sIcon <p>New value for property <code>icon</code></p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setIcon(sIcon: sap.ui.core.URI): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getSelected" data-sap-ui-target="getSelected">selected</a>.</p><p>Defines the toggle state in case the item represents a toggle button (see also property <code>toggleEnabled</code>).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bSelected <p>New value for property <code>selected</code></p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSelected(bSelected: boolean): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getShowSeparator" data-sap-ui-target="getShowSeparator">showSeparator</a>.</p><p>If set to true, a separator is displayed after the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowSeparator <p>New value for property <code>showSeparator</code></p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowSeparator(bShowSeparator: boolean): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getToggleEnabled" data-sap-ui-target="getToggleEnabled">toggleEnabled</a>.</p><p>If set to true, the item represents a toggle button. The <code>selected</code> property can the be used to define the toggle state. Otherwise the item is displayed as action button. In this case the <code>selected</code> property is ignored.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bToggleEnabled <p>New value for property <code>toggleEnabled</code></p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setToggleEnabled(bToggleEnabled: boolean): sap.ui.unified.ShellHeadItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadItem/methods/getVisible" data-sap-ui-target="getVisible">visible</a>.</p><p>Invisible items are not shown on the UI.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bVisible <p>New value for property <code>visible</code></p>
                 * @returns sap.ui.unified.ShellHeadItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setVisible(bVisible: boolean): sap.ui.unified.ShellHeadItem;
            }
            /**
             * <p>User Header Action Item of the Shell.</p>
             */
            export class ShellHeadUserItem extends sap.ui.core.Element {
                /**
                 * <p>Constructor for a new ShellHeadUserItem.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadUserItem/events/press">press</a> event of this <code>sap.ui.unified.ShellHeadUserItem</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ShellHeadUserItem</code> itself.</p><p>Event is fired when the user presses the button.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadUserItem</code> itself</p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachPress(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadUserItem/events/press">press</a> event of this <code>sap.ui.unified.ShellHeadUserItem</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachPress(fnFunction: Function, oListener: any): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/events/press" data-sap-ui-target="sap.ui.unified.ShellHeadUserItem/events/press">press</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected firePress(mParameters?: any): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getImage" data-sap-ui-target="getImage">image</a>.</p><p>An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.</p>
                 * @returns sap.ui.core.URI <p>Value of property <code>image</code></p>
                 */
                getImage(): sap.ui.core.URI;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getShowPopupIndicator" data-sap-ui-target="getShowPopupIndicator">showPopupIndicator</a>.</p><p>The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>showPopupIndicator</code></p>
                 */
                getShowPopupIndicator(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getUsername" data-sap-ui-target="getUsername">username</a>.</p><p>The name of the user.</p><p>Default value is <code>empty string</code>.</p>
                 * @returns string <p>Value of property <code>username</code></p>
                 */
                getUsername(): string;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getImage" data-sap-ui-target="getImage">image</a>.</p><p>An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {sap.ui.core.URI} sImage <p>New value for property <code>image</code></p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setImage(sImage: sap.ui.core.URI): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getShowPopupIndicator" data-sap-ui-target="getShowPopupIndicator">showPopupIndicator</a>.</p><p>The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bShowPopupIndicator <p>New value for property <code>showPopupIndicator</code></p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowPopupIndicator(bShowPopupIndicator: boolean): sap.ui.unified.ShellHeadUserItem;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellHeadUserItem/methods/getUsername" data-sap-ui-target="getUsername">username</a>.</p><p>The name of the user.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>empty string</code>.</p>
                 * @param {string} sUsername <p>New value for property <code>username</code></p>
                 * @returns sap.ui.unified.ShellHeadUserItem <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setUsername(sUsername: string): sap.ui.unified.ShellHeadUserItem;
            }
            /**
             * <p>The shell layout is the base for the shell control which is meant as root control (full-screen) of an application. It was build as root control of the Fiori Launchpad application and provides the basic capabilities for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and do not use it for other scenarios than the root control usecase.</p>
             */
            export class ShellLayout extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new ShellLayout.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.unified.ShellLayout;
                /**
                 * <p>Adds some paneContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p>
                 * @param {sap.ui.core.Control} oPaneContent <p>The paneContent to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addPaneContent(oPaneContent: sap.ui.core.Control): sap.ui.unified.ShellLayout;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.unified.ShellLayout;
                /**
                 * <p>Destroys the header in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyHeader(): sap.ui.unified.ShellLayout;
                /**
                 * <p>Destroys all the paneContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyPaneContent(): sap.ui.unified.ShellLayout;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content to appear in the main canvas.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p><p>The control to appear in the header area.</p>
                 * @returns sap.ui.core.Control 
                 */
                getHeader(): sap.ui.core.Control;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeaderHiding" data-sap-ui-target="getHeaderHiding">headerHiding</a>.</p><p>Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>headerHiding</code></p>
                 */
                getHeaderHiding(): boolean;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeaderVisible" data-sap-ui-target="getHeaderVisible">headerVisible</a>.</p><p>If set to false, no header (and no items, search, ...) is shown.</p><p>Default value is <code>true</code>.</p>
                 * @returns boolean <p>Value of property <code>headerVisible</code></p>
                 */
                getHeaderVisible(): boolean;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p><p>The content to appear in the pane area.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getPaneContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getShowPane" data-sap-ui-target="getShowPane">showPane</a>.</p><p>Shows / Hides the side pane.</p><p>Default value is <code>false</code>.</p>
                 * @returns boolean <p>Value of property <code>showPane</code></p>
                 */
                getShowPane(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oPaneContent <p>The paneContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfPaneContent(oPaneContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellLayout;
                /**
                 * <p>Inserts a paneContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p>
                 * @param {sap.ui.core.Control} oPaneContent <p>The paneContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the paneContent should be inserted at; for a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value greater than the current size of the aggregation, the paneContent is inserted at the last position</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertPaneContent(oPaneContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellLayout;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllPaneContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a paneContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getPaneContent" data-sap-ui-target="getPaneContent">paneContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vPaneContent <p>The paneContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed paneContent or <code>null</code></p>
                 */
                removePaneContent(vPaneContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeader" data-sap-ui-target="getHeader">header</a>.</p>
                 * @param {sap.ui.core.Control} oHeader <p>The header to set</p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeader(oHeader: sap.ui.core.Control): sap.ui.unified.ShellLayout;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeaderHiding" data-sap-ui-target="getHeaderHiding">headerHiding</a>.</p><p>Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bHeaderHiding <p>New value for property <code>headerHiding</code></p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeaderHiding(bHeaderHiding: boolean): sap.ui.unified.ShellLayout;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getHeaderVisible" data-sap-ui-target="getHeaderVisible">headerVisible</a>.</p><p>If set to false, no header (and no items, search, ...) is shown.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                 * @param {boolean} bHeaderVisible <p>New value for property <code>headerVisible</code></p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setHeaderVisible(bHeaderVisible: boolean): sap.ui.unified.ShellLayout;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellLayout/methods/getShowPane" data-sap-ui-target="getShowPane">showPane</a>.</p><p>Shows / Hides the side pane.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                 * @param {boolean} bShowPane <p>New value for property <code>showPane</code></p>
                 * @returns sap.ui.unified.ShellLayout <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowPane(bShowPane: boolean): sap.ui.unified.ShellLayout;
            }
            /**
             * <p>ShellOverlay to be opened in front of an sap.ui.unified.Shell</p>
             */
            export class ShellOverlay extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new ShellOverlay.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellOverlay/events/closed" data-sap-ui-target="sap.ui.unified.ShellOverlay/events/closed">closed</a> event of this <code>sap.ui.unified.ShellOverlay</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.ShellOverlay</code> itself.</p><p>Fired when the overlay was closed.</p>
                 * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                 * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                 * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellOverlay</code> itself</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                attachClosed(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Closes the ShellOverlay.</p>
                 */
                close(): void;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Destroys the search in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySearch(): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellOverlay/events/closed" data-sap-ui-target="sap.ui.unified.ShellOverlay/events/closed">closed</a> event of this <code>sap.ui.unified.ShellOverlay</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                 * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                 * @param {any} oListener <p>Context object on which the given function had to be called</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                detachClosed(fnFunction: Function, oListener: any): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.ShellOverlay/events/closed" data-sap-ui-target="sap.ui.unified.ShellOverlay/events/closed">closed</a> to attached listeners.</p>
                 * @param {any} mParameters <p>Parameters to pass along with the event</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                protected fireClosed(mParameters?: any): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] 
                 */
                getAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content to appear in the overlay.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p><p>Experimental (This aggregation might change in future!): The search control which should be displayed in the overlay header.</p>
                 * @returns sap.ui.core.Control 
                 */
                getSearch(): sap.ui.core.Control;
                /**
                 * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getShell" data-sap-ui-target="getShell">shell</a>, or <code>null</code>.</p>
                 * @returns sap.ui.core.ID 
                 */
                getShell(): sap.ui.core.ID;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Opens the ShellOverlay.</p>
                 */
                open(): void;
                /**
                 * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllAriaLabelledBy(): sap.ui.core.ID[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                 * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                 * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                 */
                removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets the aggregated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getSearch" data-sap-ui-target="getSearch">search</a>.</p>
                 * @param {sap.ui.core.Control} oSearch <p>The search to set</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSearch(oSearch: sap.ui.core.Control): sap.ui.unified.ShellOverlay;
                /**
                 * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.ShellOverlay/methods/getShell" data-sap-ui-target="getShell">shell</a>.</p>
                 * @param {sap.ui.core.ID | sap.ui.unified.ShellLayout} oShell <p>ID of an element which becomes the new target of this shell association; alternatively, an element instance may be given</p>
                 * @returns sap.ui.unified.ShellOverlay <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShell(oShell: sap.ui.core.ID | sap.ui.unified.ShellLayout): sap.ui.unified.ShellOverlay;
            }
            /**
             * <p>Provides a main content and a secondary content area</p>
             */
            export class SplitContainer extends sap.ui.core.Control {
                /**
                 * <p>Constructor for a new SplitContainer.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                 * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                 * @param {any} mSettings <p>initial settings for the new control</p>
                 */
                constructor(sId?: string, mSettings?: any);
                /**
                 * <p>Adds some content to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addContent(oContent: sap.ui.core.Control): sap.ui.unified.SplitContainer;
                /**
                 * <p>Adds some secondaryContent to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p>
                 * @param {sap.ui.core.Control} oSecondaryContent <p>The secondaryContent to add; if empty, nothing is inserted</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                addSecondaryContent(oSecondaryContent: sap.ui.core.Control): sap.ui.unified.SplitContainer;
                /**
                 * <p>Destroys all the content in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroyContent(): sap.ui.unified.SplitContainer;
                /**
                 * <p>Destroys all the secondaryContent in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                destroySecondaryContent(): sap.ui.unified.SplitContainer;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>The content to appear in the main area.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getOrientation" data-sap-ui-target="getOrientation">orientation</a>.</p><p>Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").</p><p>Default value is <code>Horizontal</code>.</p>
                 * @returns sap.ui.core.Orientation <p>Value of property <code>orientation</code></p>
                 */
                getOrientation(): sap.ui.core.Orientation;
                /**
                 * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p><p>The content to appear in the secondary area.</p>
                 * @returns sap.ui.core.Control[] 
                 */
                getSecondaryContent(): sap.ui.core.Control[];
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContentSize" data-sap-ui-target="getSecondaryContentSize">secondaryContentSize</a>.</p><p>The width if the secondary content. The height is always 100%.</p><p>Default value is <code>250px</code>.</p>
                 * @returns sap.ui.core.CSSSize <p>Value of property <code>secondaryContentSize</code></p>
                 */
                getSecondaryContentSize(): sap.ui.core.CSSSize;
                /**
                 * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getShowSecondaryContent" data-sap-ui-target="getShowSecondaryContent">showSecondaryContent</a>.</p><p>Shows / Hides the secondary area.</p>
                 * @returns boolean <p>Value of property <code>showSecondaryContent</code></p>
                 */
                getShowSecondaryContent(): boolean;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfContent(oContent: sap.ui.core.Control): number;
                /**
                 * <p>Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>. and returns its index if found or -1 otherwise.</p>
                 * @param {sap.ui.core.Control} oSecondaryContent <p>The secondaryContent whose index is looked for</p>
                 * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                 */
                indexOfSecondaryContent(oSecondaryContent: sap.ui.core.Control): number;
                /**
                 * <p>Inserts a content into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {sap.ui.core.Control} oContent <p>The content to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertContent(oContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.SplitContainer;
                /**
                 * <p>Inserts a secondaryContent into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p>
                 * @param {sap.ui.core.Control} oSecondaryContent <p>The secondaryContent to insert; if empty, nothing is inserted</p>
                 * @param {number} iIndex <p>The <code>0</code>-based index the secondaryContent should be inserted at; for a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a value greater than the current size of the aggregation, the secondaryContent is inserted at the last position</p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                insertSecondaryContent(oSecondaryContent: sap.ui.core.Control, iIndex: number): sap.ui.unified.SplitContainer;
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                 * @returns sap.ui.core.Control[] <p>An array of the removed elements (might be empty)</p>
                 */
                removeAllSecondaryContent(): sap.ui.core.Control[];
                /**
                 * <p>Removes a content from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getContent" data-sap-ui-target="getContent">content</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vContent <p>The content to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed content or <code>null</code></p>
                 */
                removeContent(vContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Removes a secondaryContent from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContent" data-sap-ui-target="getSecondaryContent">secondaryContent</a>.</p>
                 * @param {number | string | sap.ui.core.Control} vSecondaryContent <p>The secondaryContent to remove or its index or id</p>
                 * @returns sap.ui.core.Control <p>The removed secondaryContent or <code>null</code></p>
                 */
                removeSecondaryContent(vSecondaryContent: number | string | sap.ui.core.Control): sap.ui.core.Control;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getOrientation" data-sap-ui-target="getOrientation">orientation</a>.</p><p>Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>Horizontal</code>.</p>
                 * @param {sap.ui.core.Orientation} sOrientation <p>New value for property <code>orientation</code></p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setOrientation(sOrientation: sap.ui.core.Orientation): sap.ui.unified.SplitContainer;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getSecondaryContentSize" data-sap-ui-target="getSecondaryContentSize">secondaryContentSize</a>.</p><p>The width if the secondary content. The height is always 100%.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>250px</code>.</p>
                 * @param {sap.ui.core.CSSSize} sSecondaryContentSize <p>New value for property <code>secondaryContentSize</code></p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setSecondaryContentSize(sSecondaryContentSize: sap.ui.core.CSSSize): sap.ui.unified.SplitContainer;
                /**
                 * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.SplitContainer/methods/getShowSecondaryContent" data-sap-ui-target="getShowSecondaryContent">showSecondaryContent</a>.</p><p>Shows / Hides the secondary area.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                 * @param {boolean} bShowSecondaryContent <p>New value for property <code>showSecondaryContent</code></p>
                 * @returns sap.ui.unified.SplitContainer <p>Reference to <code>this</code> in order to allow method chaining</p>
                 */
                setShowSecondaryContent(bShowSecondaryContent: boolean): sap.ui.unified.SplitContainer;
            }
            /**
             * <p>Standard day types visualized in a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.m.PlanningCalendarLegend" data-sap-ui-target="PlanningCalendarLegend">sap.m.PlanningCalendarLegend</a>, which correspond to days in a <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.Calendar" data-sap-ui-target="Calendar">sap.ui.unified.Calendar</a>.</p>
             */
            export enum StandardCalendarLegendItem {
                /**
                 * <p>Type used for visualization of the non-working days.</p>
                 */
                NonWorkingDay = "NonWorkingDay",
                /**
                 * <p>Type used for visualization of the currently selected day.</p>
                 */
                Selected = "Selected",
                /**
                 * <p>Type used for visualization of the current date.</p>
                 */
                Today = "Today",
                /**
                 * <p>Type used for visualization of the regular work days.</p>
                 */
                WorkingDay = "WorkingDay",
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace unified {
            /**
             * <p>Controls and helper classes around the calendar control.</p>
             */
            namespace calendar {
                /**
                 * <p>renders a row of days with ItemNavigation This is used inside the calendar. Not for stand alone usage If used inside the calendar the properties and aggregation are directly taken from the parent (To not duplicate and sync DateRanges and so on...)</p>
                 */
                export class DatesRow extends sap.ui.unified.calendar.Month {
                    /**
                     * <p>Constructor for a new calendar/DatesRow.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getDays" data-sap-ui-target="getDays">days</a>.</p><p>number of days displayed</p><p>Default value is <code>7</code>.</p>
                     * @returns number <p>Value of property <code>days</code></p>
                     */
                    getDays(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getShowDayNamesLine" data-sap-ui-target="getShowDayNamesLine">showDayNamesLine</a>.</p><p>If set the day names are shown in a separate line. If not set the day names are shown inside the single days.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>showDayNamesLine</code></p>
                     */
                    getShowDayNamesLine(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the row If in rendering phase the date property is not in the range startDate + days, it is set to the start date So after setting the start date the date should be set to be in the range of the start date</p>
                     * @returns any <p>Value of property <code>startDate</code></p>
                     */
                    getStartDate(): any;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getDays" data-sap-ui-target="getDays">days</a>.</p><p>number of days displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>7</code>.</p>
                     * @param {number} iDays <p>New value for property <code>days</code></p>
                     * @returns sap.ui.unified.calendar.DatesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDays(iDays: number): sap.ui.unified.calendar.DatesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getShowDayNamesLine" data-sap-ui-target="getShowDayNamesLine">showDayNamesLine</a>.</p><p>If set the day names are shown in a separate line. If not set the day names are shown inside the single days.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bShowDayNamesLine <p>New value for property <code>showDayNamesLine</code></p>
                     * @returns sap.ui.unified.calendar.DatesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowDayNamesLine(bShowDayNamesLine: boolean): sap.ui.unified.calendar.DatesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.DatesRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date of the row If in rendering phase the date property is not in the range startDate + days, it is set to the start date So after setting the start date the date should be set to be in the range of the start date</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                     * @returns sap.ui.unified.calendar.DatesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setStartDate(oStartDate: any): sap.ui.unified.calendar.DatesRow;
                }
                /**
                 * <p>renders a calendar header</p><p>The calendar header consists of 3 buttons where the text can be set and a previous and a next button. In the normal calendar the first button contains the displayed day, the second button the displayed month and the third button the displayed year.</p><p><b>Note:</b> This is used inside the calendar. Not for standalone usage</p>
                 */
                export class Header extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new Header.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton0" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton0">pressButton0</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.</p><p>First button pressed (normally day)</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPressButton0(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton1" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton1">pressButton1</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.</p><p>Second button pressed (normally month)</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPressButton1(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton2" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton2">pressButton2</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.</p><p>Third button pressed (normally year)</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPressButton2(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressNext" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressNext">pressNext</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.</p><p>Next button pressed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPressNext(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressPrevious" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressPrevious">pressPrevious</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Header</code> itself.</p><p>Previous button pressed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Header</code> itself</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPressPrevious(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton0" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton0">pressButton0</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPressButton0(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton1" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton1">pressButton1</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPressButton1(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton2" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton2">pressButton2</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPressButton2(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressNext" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressNext">pressNext</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPressNext(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressPrevious" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressPrevious">pressPrevious</a> event of this <code>sap.ui.unified.calendar.Header</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPressPrevious(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton0" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton0">pressButton0</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePressButton0(mParameters?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton1" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton1">pressButton1</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePressButton1(mParameters?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressButton2" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressButton2">pressButton2</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePressButton2(mParameters?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressNext" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressNext">pressNext</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePressNext(mParameters?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Header/events/pressPrevious" data-sap-ui-target="sap.ui.unified.calendar.Header/events/pressPrevious">pressPrevious</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePressPrevious(mParameters?: any): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton0" data-sap-ui-target="getAdditionalTextButton0">additionalTextButton0</a>.</p><p>Additional text of the first button (normally day)</p>
                     * @returns string <p>Value of property <code>additionalTextButton0</code></p>
                     */
                    getAdditionalTextButton0(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton1" data-sap-ui-target="getAdditionalTextButton1">additionalTextButton1</a>.</p><p>Additional text of the second button (normally month)</p>
                     * @returns string <p>Value of property <code>additionalTextButton1</code></p>
                     */
                    getAdditionalTextButton1(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton2" data-sap-ui-target="getAdditionalTextButton2">additionalTextButton2</a>.</p><p>Additional text of the third button (normally year)</p>
                     * @returns string <p>Value of property <code>additionalTextButton2</code></p>
                     */
                    getAdditionalTextButton2(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton0" data-sap-ui-target="getAriaLabelButton0">ariaLabelButton0</a>.</p><p>aria-label of the first button (normally day)</p>
                     * @returns string <p>Value of property <code>ariaLabelButton0</code></p>
                     */
                    getAriaLabelButton0(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton1" data-sap-ui-target="getAriaLabelButton1">ariaLabelButton1</a>.</p><p>aria-label of the second button (normally month)</p>
                     * @returns string <p>Value of property <code>ariaLabelButton1</code></p>
                     */
                    getAriaLabelButton1(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton2" data-sap-ui-target="getAriaLabelButton2">ariaLabelButton2</a>.</p><p>aria-label of the third button (normally year)</p>
                     * @returns string <p>Value of property <code>ariaLabelButton2</code></p>
                     */
                    getAriaLabelButton2(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getEnabledNext" data-sap-ui-target="getEnabledNext">enabledNext</a>.</p><p>Enables the Next button</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>enabledNext</code></p>
                     */
                    getEnabledNext(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getEnabledPrevious" data-sap-ui-target="getEnabledPrevious">enabledPrevious</a>.</p><p>Enables the previous button</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>enabledPrevious</code></p>
                     */
                    getEnabledPrevious(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton0" data-sap-ui-target="getTextButton0">textButton0</a>.</p><p>Text of the first button (normally day)</p>
                     * @returns string <p>Value of property <code>textButton0</code></p>
                     */
                    getTextButton0(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton1" data-sap-ui-target="getTextButton1">textButton1</a>.</p><p>Text of the second button (normally month)</p>
                     * @returns string <p>Value of property <code>textButton1</code></p>
                     */
                    getTextButton1(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton2" data-sap-ui-target="getTextButton2">textButton2</a>.</p><p>Text of the third button (normally year)</p>
                     * @returns string <p>Value of property <code>textButton2</code></p>
                     */
                    getTextButton2(): string;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton0" data-sap-ui-target="getVisibleButton0">visibleButton0</a>.</p><p>If set, the first button will be displayed</p><p><b>Note:</b> The default is set to false to be compatible to older versions</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>visibleButton0</code></p>
                     */
                    getVisibleButton0(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton1" data-sap-ui-target="getVisibleButton1">visibleButton1</a>.</p><p>If set, the second button will be displayed</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>visibleButton1</code></p>
                     */
                    getVisibleButton1(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton2" data-sap-ui-target="getVisibleButton2">visibleButton2</a>.</p><p>If set, the third button will be displayed</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>visibleButton2</code></p>
                     */
                    getVisibleButton2(): boolean;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton0" data-sap-ui-target="getAdditionalTextButton0">additionalTextButton0</a>.</p><p>Additional text of the first button (normally day)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAdditionalTextButton0 <p>New value for property <code>additionalTextButton0</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAdditionalTextButton0(sAdditionalTextButton0: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton1" data-sap-ui-target="getAdditionalTextButton1">additionalTextButton1</a>.</p><p>Additional text of the second button (normally month)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAdditionalTextButton1 <p>New value for property <code>additionalTextButton1</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAdditionalTextButton1(sAdditionalTextButton1: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAdditionalTextButton2" data-sap-ui-target="getAdditionalTextButton2">additionalTextButton2</a>.</p><p>Additional text of the third button (normally year)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAdditionalTextButton2 <p>New value for property <code>additionalTextButton2</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAdditionalTextButton2(sAdditionalTextButton2: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton0" data-sap-ui-target="getAriaLabelButton0">ariaLabelButton0</a>.</p><p>aria-label of the first button (normally day)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAriaLabelButton0 <p>New value for property <code>ariaLabelButton0</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAriaLabelButton0(sAriaLabelButton0: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton1" data-sap-ui-target="getAriaLabelButton1">ariaLabelButton1</a>.</p><p>aria-label of the second button (normally month)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAriaLabelButton1 <p>New value for property <code>ariaLabelButton1</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAriaLabelButton1(sAriaLabelButton1: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getAriaLabelButton2" data-sap-ui-target="getAriaLabelButton2">ariaLabelButton2</a>.</p><p>aria-label of the third button (normally year)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sAriaLabelButton2 <p>New value for property <code>ariaLabelButton2</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setAriaLabelButton2(sAriaLabelButton2: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getEnabledNext" data-sap-ui-target="getEnabledNext">enabledNext</a>.</p><p>Enables the Next button</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bEnabledNext <p>New value for property <code>enabledNext</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEnabledNext(bEnabledNext: boolean): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getEnabledPrevious" data-sap-ui-target="getEnabledPrevious">enabledPrevious</a>.</p><p>Enables the previous button</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bEnabledPrevious <p>New value for property <code>enabledPrevious</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setEnabledPrevious(bEnabledPrevious: boolean): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton0" data-sap-ui-target="getTextButton0">textButton0</a>.</p><p>Text of the first button (normally day)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sTextButton0 <p>New value for property <code>textButton0</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTextButton0(sTextButton0: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton1" data-sap-ui-target="getTextButton1">textButton1</a>.</p><p>Text of the second button (normally month)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sTextButton1 <p>New value for property <code>textButton1</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTextButton1(sTextButton1: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getTextButton2" data-sap-ui-target="getTextButton2">textButton2</a>.</p><p>Text of the third button (normally year)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {string} sTextButton2 <p>New value for property <code>textButton2</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setTextButton2(sTextButton2: string): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton0" data-sap-ui-target="getVisibleButton0">visibleButton0</a>.</p><p>If set, the first button will be displayed</p><p><b>Note:</b> The default is set to false to be compatible to older versions</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bVisibleButton0 <p>New value for property <code>visibleButton0</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVisibleButton0(bVisibleButton0: boolean): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton1" data-sap-ui-target="getVisibleButton1">visibleButton1</a>.</p><p>If set, the second button will be displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bVisibleButton1 <p>New value for property <code>visibleButton1</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVisibleButton1(bVisibleButton1: boolean): sap.ui.unified.calendar.Header;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Header/methods/getVisibleButton2" data-sap-ui-target="getVisibleButton2">visibleButton2</a>.</p><p>If set, the third button will be displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bVisibleButton2 <p>New value for property <code>visibleButton2</code></p>
                     * @returns sap.ui.unified.calendar.Header <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setVisibleButton2(bVisibleButton2: boolean): sap.ui.unified.calendar.Header;
                }
                /**
                 * <p>renders a month with ItemNavigation This is used inside the calendar. Not for stand alone usage If used inside the calendar the properties and aggregation are directly taken from the parent (To not duplicate and sync DateRanges and so on...)</p>
                 */
                export class Month extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new calendar/Month.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Adds some disabledDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addDisabledDate(oDisabledDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/focus" data-sap-ui-target="sap.ui.unified.calendar.Month/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Month</code> itself.</p><p>Date focus changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code> itself</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachFocus(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/select" data-sap-ui-target="sap.ui.unified.calendar.Month/events/select">select</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Month</code> itself.</p><p>Date selection changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code> itself</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.calendar.Month/events/weekNumberSelect">weekNumberSelect</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.Month</code> itself.</p><p>Fired when a week number selection is changed. By default, choosing the week number will select the corresponding week. If the week has already been selected, choosing the week number will deselect it.</p><p>The default behavior can be prevented using the <code>preventDefault</code> method.</p><p><b>Note:</b> Works for Gregorian calendars only and when <code>intervalSelection</code> is set to <code>true</code>.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.Month</code> itself</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachWeekNumberSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>checks if a date is focusable in the current rendered output. So if not rendered or in other month it is not focusable.</p>
                     * @param {any} oDate <p>JavaScript date object for focused date.</p>
                     * @returns boolean <p>flag if focusable</p>
                     */
                    checkDateFocusable(oDate: any): boolean;
                    /**
                     * <p>Destroys all the disabledDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroyDisabledDates(): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySelectedDates(): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySpecialDates(): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/focus" data-sap-ui-target="sap.ui.unified.calendar.Month/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachFocus(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/select" data-sap-ui-target="sap.ui.unified.calendar.Month/events/select">select</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.calendar.Month/events/weekNumberSelect">weekNumberSelect</a> event of this <code>sap.ui.unified.calendar.Month</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachWeekNumberSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>displays the month of a given date without setting the focus</p>
                     * @param {any} oDate <p>JavaScript date object for focused date.</p>
                     * @returns sap.ui.unified.calendar.Month <p><code>this</code> to allow method chaining</p>
                     */
                    displayDate(oDate: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/focus" data-sap-ui-target="sap.ui.unified.calendar.Month/events/focus">focus</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireFocus(mParameters?: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/select" data-sap-ui-target="sap.ui.unified.calendar.Month/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.Month/events/weekNumberSelect" data-sap-ui-target="sap.ui.unified.calendar.Month/events/weekNumberSelect">weekNumberSelect</a> to attached listeners.</p><p>Listeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns boolean <p>Whether or not to prevent the default action</p>
                     */
                    protected fireWeekNumberSelect(mParameters?: any): boolean;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).</p>
                     * @returns any <p>Value of property <code>date</code></p>
                     */
                    getDate(): any;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p><p>Date Ranges for disabled dates</p>
                     * @returns sap.ui.unified.DateRange[] 
                     */
                    getDisabledDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getFirstDayOfWeek" data-sap-ui-target="getFirstDayOfWeek">firstDayOfWeek</a>.</p><p>If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.</p><p>Default value is <code>-1</code>.</p>
                     * @returns number <p>Value of property <code>firstDayOfWeek</code></p>
                     */
                    getFirstDayOfWeek(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                     */
                    getIntervalSelection(): boolean;
                    /**
                     * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getLegend(): sap.ui.core.ID;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.</p>
                     * @returns number[] <p>Value of property <code>nonWorkingDays</code></p>
                     */
                    getNonWorkingDays(): number[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p>
                     * @returns sap.ui.core.CalendarType <p>Value of property <code>primaryCalendarType</code></p>
                     */
                    getPrimaryCalendarType(): sap.ui.core.CalendarType;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSecondaryCalendarType" data-sap-ui-target="getSecondaryCalendarType">secondaryCalendarType</a>.</p><p>If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type</p>
                     * @returns sap.ui.core.CalendarType <p>Value of property <code>secondaryCalendarType</code></p>
                     */
                    getSecondaryCalendarType(): sap.ui.core.CalendarType;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Date Ranges for selected dates of the DatePicker</p>
                     * @returns sap.ui.unified.DateRange[] 
                     */
                    getSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the month name is shown</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>showHeader</code></p>
                     */
                    getShowHeader(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getShowWeekNumbers" data-sap-ui-target="getShowWeekNumbers">showWeekNumbers</a>.</p><p>Determines whether the week numbers in the months are displayed.</p><p><b>Note:</b> For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>showWeekNumbers</code></p>
                     */
                    getShowWeekNumbers(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if intervalSelection is enabled, can be selected</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>singleSelection</code></p>
                     */
                    getSingleSelection(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p><code>DateRange</code> with type to visualize special days in the Calendar.</p><p><b>Note:</b> If one day is assigned to more than one DateTypeRange, only the first one will be used. The only exception is when one of the types is <code>NonWorking</code>, then you can have both <code>NonWorking</code> and the other type. For example, you can have <code>NonWorking</code> + <code>Type01</code> but you can't have <code>Type01</code> + <code>Type02</code>.</p>
                     * @returns sap.ui.unified.DateTypeRange[] 
                     */
                    getSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of Month</p>
                     * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
                     */
                    getWidth(): sap.ui.core.CSSSize;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfDisabledDate(oDisabledDate: sap.ui.unified.DateRange): number;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                    /**
                     * <p>Inserts a disabledDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oDisabledDate <p>The disabledDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the disabledDate should be inserted at; for a negative value of <code>iIndex</code>, the disabledDate is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertDisabledDate(oDisabledDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllDisabledDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a disabledDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDisabledDates" data-sap-ui-target="getDisabledDates">disabledDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateRange} vDisabledDate <p>The disabledDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateRange <p>The removed disabledDate or <code>null</code></p>
                     */
                    removeDisabledDate(vDisabledDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                    /**
                     * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                     */
                    removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                    /**
                     * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                     */
                    removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oDate <p>New value for property <code>date</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDate(oDate: any): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getFirstDayOfWeek" data-sap-ui-target="getFirstDayOfWeek">firstDayOfWeek</a>.</p><p>If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value is set, the default of the used locale is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>-1</code>.</p>
                     * @param {number} iFirstDayOfWeek <p>New value for property <code>firstDayOfWeek</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setFirstDayOfWeek(iFirstDayOfWeek: number): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getNonWorkingDays" data-sap-ui-target="getNonWorkingDays">nonWorkingDays</a>.</p><p>If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0 to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {number[]} sNonWorkingDays <p>New value for property <code>nonWorkingDays</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setNonWorkingDays(sNonWorkingDays: number[]): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CalendarType} sPrimaryCalendarType <p>New value for property <code>primaryCalendarType</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSecondaryCalendarType" data-sap-ui-target="getSecondaryCalendarType">secondaryCalendarType</a>.</p><p>If set, the days are also displayed in this calendar type If not set, the dates are only displayed in the primary calendar type</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CalendarType} sSecondaryCalendarType <p>New value for property <code>secondaryCalendarType</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSecondaryCalendarType(sSecondaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the month name is shown</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bShowHeader <p>New value for property <code>showHeader</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getShowWeekNumbers" data-sap-ui-target="getShowWeekNumbers">showWeekNumbers</a>.</p><p>Determines whether the week numbers in the months are displayed.</p><p><b>Note:</b> For Islamic calendars, the week numbers are not displayed regardless of what is set to this property.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bShowWeekNumbers <p>New value for property <code>showWeekNumbers</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowWeekNumbers(bShowWeekNumbers: boolean): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single date or interval, if intervalSelection is enabled, can be selected</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.Month;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.Month/methods/getWidth" data-sap-ui-target="getWidth">width</a>.</p><p>Width of Month</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
                     * @returns sap.ui.unified.calendar.Month <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.unified.calendar.Month;
                }
                /**
                 * <p>renders a MonthPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage</p>
                 */
                export class MonthPicker extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new MonthPicker.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/pageChange">pageChange</a> event of this <code>sap.ui.unified.calendar.MonthPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.</p><p>If less than 12 months are displayed the <code>pageChange</code> event is fired if the displayed months are changed by user navigation.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthPicker</code> itself</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPageChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/select">select</a> event of this <code>sap.ui.unified.calendar.MonthPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthPicker</code> itself.</p><p>Month selection changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthPicker</code> itself</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/pageChange">pageChange</a> event of this <code>sap.ui.unified.calendar.MonthPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPageChange(fnFunction: Function, oListener: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/select">select</a> event of this <code>sap.ui.unified.calendar.MonthPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/pageChange">pageChange</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePageChange(mParameters?: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthPicker/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>number of months in each row The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)</p><p>Default value is <code>3</code>.</p>
                     * @returns number <p>Value of property <code>columns</code></p>
                     */
                    getColumns(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getMonth" data-sap-ui-target="getMonth">month</a>.</p><p>The month is initial focused and selected The value must be between 0 and 11</p><p>Default value is <code>0</code>.</p>
                     * @returns number <p>Value of property <code>month</code></p>
                     */
                    getMonth(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>number of displayed months The value must be between 1 and 12</p><p>Default value is <code>12</code>.</p>
                     * @returns number <p>Value of property <code>months</code></p>
                     */
                    getMonths(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p>
                     * @returns sap.ui.core.CalendarType <p>Value of property <code>primaryCalendarType</code></p>
                     */
                    getPrimaryCalendarType(): sap.ui.core.CalendarType;
                    /**
                     * <p>displays the next page</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p><code>this</code> to allow method chaining</p>
                     */
                    nextPage(): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>displays the previous page</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p><code>this</code> to allow method chaining</p>
                     */
                    previousPage(): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>number of months in each row The value must be between 0 and 12 (0 means just to have all months in one row, independent of the number)</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>3</code>.</p>
                     * @param {number} iColumns <p>New value for property <code>columns</code></p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumns(iColumns: number): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>sets a minimum and maximum month</p>
                     * @param {number} iMin <p>minimum month as integer (starting with 0)</p>
                     * @param {number} iMax <p>maximum month as integer (starting with 0)</p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p><code>this</code> to allow method chaining</p>
                     */
                    setMinMax(iMin?: number, iMax?: number): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getMonth" data-sap-ui-target="getMonth">month</a>.</p><p>The month is initial focused and selected The value must be between 0 and 11</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>0</code>.</p>
                     * @param {number} iMonth <p>New value for property <code>month</code></p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMonth(iMonth: number): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>number of displayed months The value must be between 1 and 12</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {number} iMonths <p>New value for property <code>months</code></p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMonths(iMonths: number): sap.ui.unified.calendar.MonthPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthPicker/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CalendarType} sPrimaryCalendarType <p>New value for property <code>primaryCalendarType</code></p>
                     * @returns sap.ui.unified.calendar.MonthPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.MonthPicker;
                }
                /**
                 * <p>Renders a row of months using ItemNavigation. There is no paging or navigation outside the rendered area implemented. This is done inside the CalendarMonthInterval. If used inside the CalendarMonthInterval the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges and so on...).</p><p>The MontsRow works with JavaScript Date objects, but only the month and the year are used to display and interact. As representation for a month, the 1st of the month will always be returned in the API.</p>
                 */
                export class MonthsRow extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>MonthsRow</code>. It shows a calendar with month granularity</p><p><b>Note:</b> This is used inside the CalendarMonthInterval, not for standalone usage.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.MonthsRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.</p><p>Month focus changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthsRow</code> itself</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachFocus(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/select">select</a> event of this <code>sap.ui.unified.calendar.MonthsRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.MonthsRow</code> itself.</p><p>Month selection changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.MonthsRow</code> itself</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Checks if a date is focusable in the current rendered output. This means that if it is not rendered, it is not focusable.</p>
                     * @param {any} oDateTime <p>JavaScript Date object for focused date.</p>
                     * @returns boolean <p>flag if focusable</p>
                     */
                    checkDateFocusable(oDateTime: any): boolean;
                    /**
                     * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySelectedDates(): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySpecialDates(): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.MonthsRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachFocus(fnFunction: Function, oListener: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/select">select</a> event of this <code>sap.ui.unified.calendar.MonthsRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Displays the month of a given date without setting the focus</p>
                     * @param {any} oDate <p>JavaScript Date object for focused date.</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p><code>this</code> to allow method chaining</p>
                     */
                    displayDate(oDate: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/focus">focus</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireFocus(mParameters?: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.MonthsRow/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range <code>startDate</code> + <code>months</code> in the rendering phase, it is set to the <code>startDate</code>. So after setting the <code>startDate</code> the date should be set to be in the visible range.</p>
                     * @returns any <p>Value of property <code>date</code></p>
                     */
                    getDate(): any;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                     */
                    getIntervalSelection(): boolean;
                    /**
                     * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getLegend(): sap.ui.core.ID;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Number of months displayed</p><p>Default value is <code>12</code>.</p>
                     * @returns number <p>Value of property <code>months</code></p>
                     */
                    getMonths(): number;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Date ranges for selected dates. If <code>singleSelection</code> is set, only the first entry is used.</p><p><b>Note:</b> Even if only one day is selected, the whole corresponding month is selected.</p>
                     * @returns sap.ui.unified.DateRange[] 
                     */
                    getSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the years is shown to visualize what month belongs to what year.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>showHeader</code></p>
                     */
                    getShowHeader(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single month or interval, if intervalSelection is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>singleSelection</code></p>
                     */
                    getSingleSelection(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Date ranges with type to visualize special months in the row. If one day is assigned to more than one type, only the first one will be used.</p><p><b>Note:</b> Even if only one day is set as a special day, the whole corresponding month is displayed in this way.</p>
                     * @returns sap.ui.unified.DateTypeRange[] 
                     */
                    getSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed row.</p>
                     * @returns any <p>Value of property <code>startDate</code></p>
                     */
                    getStartDate(): any;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                    /**
                     * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                     */
                    removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                    /**
                     * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                     */
                    removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range <code>startDate</code> + <code>months</code> in the rendering phase, it is set to the <code>startDate</code>. So after setting the <code>startDate</code> the date should be set to be in the visible range.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oDate <p>New value for property <code>date</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDate(oDate: any): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getMonths" data-sap-ui-target="getMonths">months</a>.</p><p>Number of months displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {number} iMonths <p>New value for property <code>months</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setMonths(iMonths: number): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the years is shown to visualize what month belongs to what year.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bShowHeader <p>New value for property <code>showHeader</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single month or interval, if intervalSelection is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.MonthsRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.MonthsRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                     * @returns sap.ui.unified.calendar.MonthsRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setStartDate(oStartDate: any): sap.ui.unified.calendar.MonthsRow;
                }
                /**
                 * <p>Renders a row of time items using ItemNavigation. There is no paging or navigation outside the rendered area implemented. This is done inside the CalendarTimeInterval. If used inside the CalendarTimeInterval the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges and so on...).</p><p>The TimesRow works with JavaScript Date objects.</p>
                 */
                export class TimesRow extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new <code>TimesRow</code>. It shows a calendar with time granularity (normally hours)</p><p><b>Note:</b> This is used inside the CalendarTimeInterval, not for standalone usage.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
                     * @param {any} mSettings <p>Initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Adds some ariaLabelledBy into the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Adds some selectedDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSelectedDate(oSelectedDate: sap.ui.unified.DateRange): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Adds some specialDate to the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to add; if empty, nothing is inserted</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    addSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.TimesRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.TimesRow</code> itself.</p><p>Time focus changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.TimesRow</code> itself</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachFocus(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/select">select</a> event of this <code>sap.ui.unified.calendar.TimesRow</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.TimesRow</code> itself.</p><p>Time selection changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.TimesRow</code> itself</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Checks if a date is focusable in the current rendered output. This means that if it is not rendered, it is not focusable.</p>
                     * @param {any} oDate <p>JavaScript Date object for focused date.</p>
                     * @returns boolean <p>flag if focusable</p>
                     */
                    checkDateFocusable(oDate: any): boolean;
                    /**
                     * <p>Destroys all the selectedDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySelectedDates(): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Destroys all the specialDates in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    destroySpecialDates(): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/focus">focus</a> event of this <code>sap.ui.unified.calendar.TimesRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachFocus(fnFunction: Function, oListener: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/select">select</a> event of this <code>sap.ui.unified.calendar.TimesRow</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Displays the given date without setting the focus</p>
                     * @param {any} oDate <p>JavaScript Date object for focused date.</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p><code>this</code> to allow method chaining</p>
                     */
                    displayDate(oDate: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/focus" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/focus">focus</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireFocus(mParameters?: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/events/select" data-sap-ui-target="sap.ui.unified.calendar.TimesRow/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Returns array of IDs of the elements which are the current targets of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] 
                     */
                    getAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range <code>startDate</code> + <code>items</code> in the rendering phase, it is set to the <code>startDate</code>. So after setting the <code>startDate</code> the date should be set to be in the visible range.</p>
                     * @returns any <p>Value of property <code>date</code></p>
                     */
                    getDate(): any;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getIntervalMinutes" data-sap-ui-target="getIntervalMinutes">intervalMinutes</a>.</p><p>Size of on time interval in minutes, default is 60 minutes.</p><p><b>Note:</b> the start of the interval calculation is always <code>startDat</code> at 00:00.</p><p>An interval longer than 720 minutes is not allowed. Please use the <code>DatesRow</code> instead.</p><p>A day must be divisible by this interval size. One interval must not include more than one day.</p><p>Default value is <code>60</code>.</p>
                     * @returns number <p>Value of property <code>intervalMinutes</code></p>
                     */
                    getIntervalMinutes(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>intervalSelection</code></p>
                     */
                    getIntervalSelection(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Number of time items displayed</p><p>Default value is <code>12</code>.</p>
                     * @returns number <p>Value of property <code>items</code></p>
                     */
                    getItems(): number;
                    /**
                     * <p>ID of the element which is the current target of the association <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>, or <code>null</code>.</p>
                     * @returns sap.ui.core.ID 
                     */
                    getLegend(): sap.ui.core.ID;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Date ranges for selected dates. If <code>singleSelection</code> is set, only the first entry is used.</p>
                     * @returns sap.ui.unified.DateRange[] 
                     */
                    getSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the years is shown to visualize what month belongs to what year.</p><p>Default value is <code>false</code>.</p>
                     * @returns boolean <p>Value of property <code>showHeader</code></p>
                     */
                    getShowHeader(): boolean;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single month or interval, if intervalSelection is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>Default value is <code>true</code>.</p>
                     * @returns boolean <p>Value of property <code>singleSelection</code></p>
                     */
                    getSingleSelection(): boolean;
                    /**
                     * <p>Gets content of aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Date ranges with type to visualize special item in the row. If one day is assigned to more than one type, only the first one will be used.</p>
                     * @returns sap.ui.unified.DateTypeRange[] 
                     */
                    getSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row.</p>
                     * @returns any <p>Value of property <code>startDate</code></p>
                     */
                    getStartDate(): any;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSelectedDate(oSelectedDate: sap.ui.unified.DateRange): number;
                    /**
                     * <p>Checks for the provided <code>sap.ui.unified.DateTypeRange</code> in the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>. and returns its index if found or -1 otherwise.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate whose index is looked for</p>
                     * @returns number <p>The index of the provided control in the aggregation if found, or -1 otherwise</p>
                     */
                    indexOfSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange): number;
                    /**
                     * <p>Inserts a selectedDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {sap.ui.unified.DateRange} oSelectedDate <p>The selectedDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the selectedDate should be inserted at; for a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSelectedDate(oSelectedDate: sap.ui.unified.DateRange, iIndex: number): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Inserts a specialDate into the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {sap.ui.unified.DateTypeRange} oSpecialDate <p>The specialDate to insert; if empty, nothing is inserted</p>
                     * @param {number} iIndex <p>The <code>0</code>-based index the specialDate should be inserted at; for a negative value of <code>iIndex</code>, the specialDate is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate is inserted at the last position</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    insertSpecialDate(oSpecialDate: sap.ui.unified.DateTypeRange, iIndex: number): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Removes all the controls in the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @returns sap.ui.core.ID[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllAriaLabelledBy(): sap.ui.core.ID[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSelectedDates(): sap.ui.unified.DateRange[];
                    /**
                     * <p>Removes all the controls from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p><p>Additionally, it unregisters them from the hosting UIArea.</p>
                     * @returns sap.ui.unified.DateTypeRange[] <p>An array of the removed elements (might be empty)</p>
                     */
                    removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
                    /**
                     * <p>Removes an ariaLabelledBy from the association named <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getAriaLabelledBy" data-sap-ui-target="getAriaLabelledBy">ariaLabelledBy</a>.</p>
                     * @param {number | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy <p>The ariaLabelledBy to be removed or its index or ID</p>
                     * @returns sap.ui.core.ID <p>The removed ariaLabelledBy or <code>null</code></p>
                     */
                    removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control): sap.ui.core.ID;
                    /**
                     * <p>Removes a selectedDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSelectedDates" data-sap-ui-target="getSelectedDates">selectedDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateRange} vSelectedDate <p>The selectedDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateRange <p>The removed selectedDate or <code>null</code></p>
                     */
                    removeSelectedDate(vSelectedDate: number | string | sap.ui.unified.DateRange): sap.ui.unified.DateRange;
                    /**
                     * <p>Removes a specialDate from the aggregation <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSpecialDates" data-sap-ui-target="getSpecialDates">specialDates</a>.</p>
                     * @param {number | string | sap.ui.unified.DateTypeRange} vSpecialDate <p>The specialDate to remove or its index or id</p>
                     * @returns sap.ui.unified.DateTypeRange <p>The removed specialDate or <code>null</code></p>
                     */
                    removeSpecialDate(vSpecialDate: number | string | sap.ui.unified.DateTypeRange): sap.ui.unified.DateTypeRange;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>A date as JavaScript Date object. The month including this date is rendered and this date is focused initially (if no other focus is set). If the date property is not in the range <code>startDate</code> + <code>items</code> in the rendering phase, it is set to the <code>startDate</code>. So after setting the <code>startDate</code> the date should be set to be in the visible range.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oDate <p>New value for property <code>date</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDate(oDate: any): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getIntervalMinutes" data-sap-ui-target="getIntervalMinutes">intervalMinutes</a>.</p><p>Size of on time interval in minutes, default is 60 minutes.</p><p><b>Note:</b> the start of the interval calculation is always <code>startDat</code> at 00:00.</p><p>An interval longer than 720 minutes is not allowed. Please use the <code>DatesRow</code> instead.</p><p>A day must be divisible by this interval size. One interval must not include more than one day.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>60</code>.</p>
                     * @param {number} iIntervalMinutes <p>New value for property <code>intervalMinutes</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setIntervalMinutes(iIntervalMinutes: number): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getIntervalSelection" data-sap-ui-target="getIntervalSelection">intervalSelection</a>.</p><p>If set, interval selection is allowed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bIntervalSelection <p>New value for property <code>intervalSelection</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setIntervalSelection(bIntervalSelection: boolean): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getItems" data-sap-ui-target="getItems">items</a>.</p><p>Number of time items displayed</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>12</code>.</p>
                     * @param {number} iItems <p>New value for property <code>items</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setItems(iItems: number): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets the associated <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getLegend" data-sap-ui-target="getLegend">legend</a>.</p>
                     * @param {sap.ui.core.ID | sap.ui.unified.CalendarLegend} oLegend <p>ID of an element which becomes the new target of this legend association; alternatively, an element instance may be given</p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setLegend(oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getShowHeader" data-sap-ui-target="getShowHeader">showHeader</a>.</p><p>If set, a header with the years is shown to visualize what month belongs to what year.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>false</code>.</p>
                     * @param {boolean} bShowHeader <p>New value for property <code>showHeader</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setShowHeader(bShowHeader: boolean): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getSingleSelection" data-sap-ui-target="getSingleSelection">singleSelection</a>.</p><p>If set, only a single month or interval, if intervalSelection is enabled, can be selected</p><p><b>Note:</b> Selection of multiple intervals is not supported in the current version.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>true</code>.</p>
                     * @param {boolean} bSingleSelection <p>New value for property <code>singleSelection</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setSingleSelection(bSingleSelection: boolean): sap.ui.unified.calendar.TimesRow;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.TimesRow/methods/getStartDate" data-sap-ui-target="getStartDate">startDate</a>.</p><p>Start date, as JavaScript Date object, of the row.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oStartDate <p>New value for property <code>startDate</code></p>
                     * @returns sap.ui.unified.calendar.TimesRow <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setStartDate(oStartDate: any): sap.ui.unified.calendar.TimesRow;
                }
                /**
                 * <p>renders a YearPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage</p>
                 */
                export class YearPicker extends sap.ui.core.Control {
                    /**
                     * <p>Constructor for a new YearPicker.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.base.ManagedObject/methods/constructor" data-sap-ui-target="sap.ui.base.ManagedObject/methods/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
                     * @param {string} sId <p>id for the new control, generated automatically if no id is given</p>
                     * @param {any} mSettings <p>initial settings for the new control</p>
                     */
                    constructor(sId?: string, mSettings?: any);
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/pageChange">pageChange</a> event of this <code>sap.ui.unified.calendar.YearPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.YearPicker</code> itself.</p><p>The <code>pageChange</code> event is fired if the displayed years are changed by user navigation.</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.YearPicker</code> itself</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachPageChange(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Attaches event handler <code>fnFunction</code> to the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/select">select</a> event of this <code>sap.ui.unified.calendar.YearPicker</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.unified.calendar.YearPicker</code> itself.</p><p>Month selection changed</p>
                     * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
                     * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
                     * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.unified.calendar.YearPicker</code> itself</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    attachSelect(oData: any, fnFunction: Function, oListener?: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/pageChange">pageChange</a> event of this <code>sap.ui.unified.calendar.YearPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachPageChange(fnFunction: Function, oListener: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Detaches event handler <code>fnFunction</code> from the <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/select">select</a> event of this <code>sap.ui.unified.calendar.YearPicker</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
                     * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
                     * @param {any} oListener <p>Context object on which the given function had to be called</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    detachSelect(fnFunction: Function, oListener: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/pageChange" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/pageChange">pageChange</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected firePageChange(mParameters?: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Fires event <a class="jsdoclink scrollToEvent" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/events/select" data-sap-ui-target="sap.ui.unified.calendar.YearPicker/events/select">select</a> to attached listeners.</p>
                     * @param {any} mParameters <p>Parameters to pass along with the event</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    protected fireSelect(mParameters?: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>number of years in each row 0 means just to have all years in one row, independent of the number</p><p>Default value is <code>4</code>.</p>
                     * @returns number <p>Value of property <code>columns</code></p>
                     */
                    getColumns(): number;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>Date as JavaScript Date object. For this date a <code>YearPicker</code> is rendered. If a Year is selected the date is updated with the start date of the selected year (depending on the calendar type).</p>
                     * @returns any <p>Value of property <code>date</code></p>
                     */
                    getDate(): any;
                    /**
                     * <p>return the first date of the first rendered year <b>Note:</b> If the YearPicker is not rendered no date is returned</p>
                     * @returns any <p>JavaScript Date Object</p>
                     */
                    getFirstRenderedDate(): any;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p>
                     * @returns sap.ui.core.CalendarType <p>Value of property <code>primaryCalendarType</code></p>
                     */
                    getPrimaryCalendarType(): sap.ui.core.CalendarType;
                    /**
                     * <p>Gets current value of property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getYears" data-sap-ui-target="getYears">years</a>.</p><p>number of displayed years</p><p>Default value is <code>20</code>.</p>
                     * @returns number <p>Value of property <code>years</code></p>
                     */
                    getYears(): number;
                    /**
                     * <p>displays the next page</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p><code>this</code> to allow method chaining</p>
                     */
                    nextPage(): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>displays the previous page</p>
                     * @returns sap.ui.unified.calendar.YearPicker <p><code>this</code> to allow method chaining</p>
                     */
                    previousPage(): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getColumns" data-sap-ui-target="getColumns">columns</a>.</p><p>number of years in each row 0 means just to have all years in one row, independent of the number</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>4</code>.</p>
                     * @param {number} iColumns <p>New value for property <code>columns</code></p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setColumns(iColumns: number): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getDate" data-sap-ui-target="getDate">date</a>.</p><p>Date as JavaScript Date object. For this date a <code>YearPicker</code> is rendered. If a Year is selected the date is updated with the start date of the selected year (depending on the calendar type).</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {any} oDate <p>New value for property <code>date</code></p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setDate(oDate: any): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getPrimaryCalendarType" data-sap-ui-target="getPrimaryCalendarType">primaryCalendarType</a>.</p><p>If set, the calendar type is used for display. If not set, the calendar type of the global configuration is used.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p>
                     * @param {sap.ui.core.CalendarType} sPrimaryCalendarType <p>New value for property <code>primaryCalendarType</code></p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setPrimaryCalendarType(sPrimaryCalendarType: sap.ui.core.CalendarType): sap.ui.unified.calendar.YearPicker;
                    /**
                     * <p>Sets a new value for property <a class="jsdoclink scrollToMethod" target="_self" href="#/api/sap.ui.unified.calendar.YearPicker/methods/getYears" data-sap-ui-target="getYears">years</a>.</p><p>number of displayed years</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>20</code>.</p>
                     * @param {number} iYears <p>New value for property <code>years</code></p>
                     * @returns sap.ui.unified.calendar.YearPicker <p>Reference to <code>this</code> in order to allow method chaining</p>
                     */
                    setYears(iYears: number): sap.ui.unified.calendar.YearPicker;
                }
            }
        }
    }
}
