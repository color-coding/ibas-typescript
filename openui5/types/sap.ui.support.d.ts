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
         * <p>UI5 library: sap.ui.support. A library for the Support Assistant tool. </p><h3>Overview</h3><p> The library provides the Support Assistant tool. It enables application developers to check whether their applications are built according to the best practices for building SAPUI5 apps. The tool uses a set of pre-defined rules to check all aspects of an application.</p>
         */
        namespace support {
            /**
             */
            var CoreFacade: any;
            /**
             * <p>Defines the Audiences.</p>
             */
            export enum Audiences {
                /**
                 * <p>Audience just on Application level.</p>
                 */
                Application = "Application",
                /**
                 * <p>Audience just on Control level.</p>
                 */
                Control = "Control",
                /**
                 * <p>Audience just on Internal level.</p>
                 */
                Internal = "Internal",
            }
            /**
             * <p>Issue Categories.</p>
             */
            export enum Categories {
                /**
                 * <p>Accessibility issue category.</p>
                 */
                Accessibility = "Accessibility",
                /**
                 * <p>Binding issue category.</p>
                 */
                Bindings = "Bindings",
                /**
                 * <p>Consistency issue category.</p>
                 */
                Consistency = "Consistency",
                /**
                 * <p>DataModel issue category.</p>
                 */
                DataModel = "DataModel",
                /**
                 * <p>Fiori Guidelines issue category.</p>
                 */
                FioriGuidelines = "FioriGuidelines",
                /**
                 * <p>Functionality issue category.</p>
                 */
                Functionality = "Functionality",
                /**
                 * <p>Memory issue category.</p>
                 */
                Memory = "Memory",
                /**
                 * <p>Modularization issue category.</p>
                 */
                Modularization = "Modularization",
                /**
                 * <p>Other issue category.</p>
                 */
                Other = "Other",
                /**
                 * <p>Performance issue category.</p>
                 */
                Performance = "Performance",
                /**
                 * <p>Usability issue category.</p>
                 */
                Usability = "Usability",
                /**
                 * <p>Usage issue category.</p>
                 */
                Usage = "Usage",
            }
            /**
             * <p>Allows to select the scope of analysis on an application.</p><h3>Overview</h3><p><code>ExecutionScope</code> is the third parameter of a rule check function. It provides access to internal UI5 objects available for inspection. The <code>getElements</code> API method allows the user to select a specific subset of elements valid for their case. It accepts one query object argument.</p><h3>Usage</h3><p>When a rule is executed, three parameters are passed: <code>oIssueManager</code>, <code>oCoreFacade</code> and <code>oScope</code>.</p><p>An <code>ExecutionScope</code> instance is passed to every call of a rule check function. When you analyze your application, available objects are collected depending on the settings passed to the Support Assistant at the moment when you start it.</p>
             */
            export class ExecutionScope {
                /**
                 * @param {any} oConfig <p>Object with specific filtering options</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                static getElements(oConfig: any): any[];
                /**
                 * <p>Gets elements by their type</p>
                 * @param {string | Function} classNameSelector <p>Either string or function to be used when selecting a subset of elements</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                static getElementsByClassName(classNameSelector: string | Function): any[];
                /**
                 * <p>Gets the logged objects by object type</p>
                 * @param {any} type <p>Type of logged objects</p>
                 * @returns any[] <p>Array of logged objects</p>
                 */
                static getLoggedObjects(type: any): any[];
                /**
                 * <p>Returns all public elements, i.e. elements that are part of public API aggregations</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                static getPublicElements(): any[];
                /**
                 */
                constructor();
            }
            /**
             * <p>Analysis history formats.</p>
             */
            export enum HistoryFormats {
                /**
                 * <p>ABAP history format.</p>
                 */
                Abap = "Abap",
                /**
                 * <p>String history format.</p>
                 */
                String = "String",
            }
            /**
             * <p>Defines severity types.</p>
             */
            export enum Severity {
                /**
                 * <p>High issue severity.</p>
                 */
                High = "High",
                /**
                 * <p>Low issue severity.</p>
                 */
                Low = "Low",
                /**
                 * <p>Medium issue severity.</p>
                 */
                Medium = "Medium",
            }
            /**
             * <p>Contains the available system presets.</p>
             */
            export enum SystemPresets {
                /**
                 * <p>The accessibility preset.</p>
                 */
                Accessibility = "Accessibility",
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace support {
            /**
             * <p>The <code>sap.ui.support.RuleAnalyzer</code> namespace is the central entry point for the Support Assistant functionality.</p><h3>Overview</h3><p> <code>sap.ui.support.RuleAnalyzer</code> reveals an API for the Support Assistant which you can easily work with to analyze an application.</p><h3>Usage</h3><p><ul> <li> <code>sap.ui.support.RuleAnalyzer.addRule</code> method allows adding a new rule. </li> <li> <code>sap.ui.support.RuleAnalyzer.analyze</code> starts the analysis of the application. </li> <li> Then the result can be accessed with methods <code>sap.ui.support.RuleAnalyzer.getAnalysisHistory</code>, <code>sap.ui.support.RuleAnalyzer.getLastAnalysisHistory</code> or <code>sap.ui.support.RuleAnalyzer.getFormattedAnalysisHistory</code>. </li> </ul></p><p>For more information, see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/a34eb58aaf124f538a3ead23a6cab04a" data-sap-ui-target="a34eb58aaf124f538a3ead23a6cab04a">Support Assistant API</a>.</p>
             */
            namespace RuleAnalyzer {
                /**
                 * <p>Adds new temporary rule when in silent mode</p>
                 * @param {any} oRule <p>Settings for the new rule. For detailed information about its properties see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/eaeea19a991d46f29e6d8d8827317d0e" data-sap-ui-target="eaeea19a991d46f29e6d8d8827317d0e">Rule Property Values</a></p>
                 * @returns string <p>Rule creation status. Possible values are "success" or description of why adding failed.</p>
                 */
                function addRule(oRule: any): string;
                /**
                 * <p>Main method to perform analysis of a given running application.</p><p>Allows to choose a particular execution scope - desired part of the UI to be checked and a flexible way to specify the list of rules to be used.</p>
                 * @param {any} oExecutionScope <p>The execution scope of the analysis (see <a class="jsdoclink scrollToMethod" target="_self" href="#/topic/e15067d976f24b11907f4c262bd749a0" data-sap-ui-target="e15067d976f24b11907f4c262bd749a0">Execution Scopes</a>).</p>
                 * @param {any | string | object[]} vPresetOrRules <p>This optional parameter allows for selection of subset of rules for the analysis. You can pass: <ul> <li>A rule preset object containing the preset ID and the list of rules it contains.</li> <li>A string that refers to the ID of a system preset.</li> <li>An object array with a plain list of rules.</li> </ul></p>
                 * @param {any} oMetadata <p>Metadata in custom format. Its only purpose is to be included in the analysis report.</p>
                 * @returns Promise<any> <p>Notifies the finished state by starting the Analyzer</p>
                 */
                function analyze(oExecutionScope?: any, vPresetOrRules?: any | string | object[], oMetadata?: any): Promise<any>;
                /**
                 * <p>Returns the history of all executed analyses.</p>
                 * @returns Object[] <p>Array of history objects in the order of analyses performed. The results of the last analysis are contained in the last element in the array.</p>
                 */
                function getAnalysisHistory(): Object[];
                /**
                 * <p>Returns the history of all executed analyses into formatted output depending on the passed format.</p>
                 * @param {sap.ui.support.HistoryFormats} sFormat <p>The format into which the history object will be converted. Possible values are listed in sap.ui.support.HistoryFormats.</p>
                 * @returns any <p>All analysis history objects in the correct format.</p>
                 */
                function getFormattedAnalysisHistory(sFormat?: sap.ui.support.HistoryFormats): any;
                /**
                 * <p>Returns the result of the last analysis performed.</p>
                 * @returns any <p>Last analysis history.</p>
                 */
                function getLastAnalysisHistory(): any;
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace support {
            /**
             * <p>Creates a RuleSet. The RuleSet can store multiple rules concerning namespaces. </p><h3>Usage</h3><p> The RuleSet is an interface used to create, update and delete rulesets.</p>
             */
            namespace RuleSet {
                /**
                 * <p>Adds rules to RuleSet.</p>
                 * @param {any} oSettings <p>Settings object with rule information</p>
                 * @returns string <p>sRuleVerificationStatus Verification status</p>
                 */
                function addRule(oSettings: any): string;
                /**
                 * <p>Clears all rulesets inside the RuleSet.</p>
                 */
                function clearAllRuleSets(): void;
                /**
                 * <p>Gets all rules from the RuleSet.</p>
                 * @returns any <p>All rules within the current RuleSet</p>
                 */
                function getRules(): any;
                /**
                 * <p>Loads the previous selection of the user - which rules are selected to be run by the Rule Analyzer. The method applies the settings to the currently loaded rules.</p>
                 * @param {Object[]} aLibraries <p>The current loaded libraries and their rules</p>
                 */
                function loadSelectionOfRules(aLibraries: Object[]): void;
                /**
                 * <p>Remove rule from RuleSet.</p>
                 * @param {any} oRule <p>Rule object that will be removed</p>
                 */
                function removeRule(oRule: any): void;
                /**
                 * <p>Stores which rules are selected to be run by the analyzer on the next check</p>
                 * @param {Object[]} aLibraries <p>The data for the libraries and their rules</p>
                 */
                function storeSelectionOfRules(aLibraries: Object[]): void;
                /**
                 * <p>Updates rules from the RuleSet.</p>
                 * @param {string} sRuleId <p>Rule ID</p>
                 * @param {any} ORuleSettings <p>Rule settings</p>
                 * @returns string <p>sRuleVerification Rule Verification status</p>
                 */
                function updateRule(sRuleId: string, ORuleSettings: any): string;
            }
        }
    }
}
