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
         * <p><p>UI5 library: sap.ui.support. A library for the Support Assistant tool. </p></p><h3>Overview</h3><p><p> The library provides the Support Assistant tool. It enables application developers to check whether their applications are built according to the best practices for building SAPUI5 apps. The tool uses a set of pre-defined rules to check all aspects of an application.</p></p>
         */
        namespace support {
            /**
             * <p><p>Analysis result which is created after analysis with the SupportAssistant.</p></p>
             */
            export interface AnalysisResult {
                /**
                 * <p>The loaded libraries.</p>
                 */
                loadedLibraries: any;
                /**
                 * <p>Data for the performed analysis.</p>
                 */
                analysisInfo: any;
                /**
                 * <p>The metadata provided in the analyze method, if any.</p>
                 */
                analysisMetadata: any;
                /**
                 * <p>Array with information about the application.</p>
                 */
                applicationInfo: any;
                /**
                 * <p>Technical information.</p>
                 */
                technicalInfo: any;
                /**
                 * <p>Count of the issues, found in the application.</p>
                 */
                totalIssuesCount: any;
                /**
                 * <p>Array with all the issues, which were found.</p>
                 */
                issues: any;
            }
            /**
             * <p><p>Defines the Audiences.</p><p>This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property 'Audiences'.</p></p>
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
             * <p><p>Issue Categories.</p><p>This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property 'Categories'.</p></p>
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
             */
            export class CoreFacade {
                /**
                 * <p>Gets the Components from the Core object.</p>
                 * @returns any <p>Object with all components, keyed by their ID</p>
                 */
                getComponents(): any;
                /**
                 * <p>Gets the UI areas from the Core object.</p>
                 * @returns any <p>Object with all UIAreas, keyed by their ID</p>
                 */
                getUIAreas(): any;
            }
            /**
             * <p>Allows to select the scope of analysis on an application.</p><h3>Overview</h3><p>The ExecutionScope provides access to internal UI5 objects available for inspection. The <code>getElements</code> API method allows the user to select a specific subset of elements valid for their case. It accepts one query object argument.</p><h3>Usage</h3><p> The ExecutionScope is passed as third argument to all rule check functions.</p><p>When you analyze your application, available objects are collected depending on the settings passed to the Support Assistant at the moment when you start it.</p>
             */
            export class ExecutionScope {
                /**
                 * @param {any} oConfig <p>Object with specific filtering options</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                getElements(oConfig: any): any[];
                /**
                 * <p>Gets elements by their type</p>
                 * @param {string | Function} classNameSelector <p>Either string or function to be used when selecting a subset of elements</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                getElementsByClassName(classNameSelector: string | Function): any[];
                /**
                 * <p>Gets the logged objects by object type</p>
                 * @param {any} type <p>Type of logged objects</p>
                 * @returns any[] <p>Array of logged objects</p>
                 */
                getLoggedObjects(type: any): any[];
                /**
                 * <p>Returns all public elements, i.e. elements that are part of public API aggregations</p>
                 * @returns any[] <p>Array of matched elements</p>
                 */
                getPublicElements(): any[];
                /**
                 * <p>Gets the type of the execution scope</p>
                 * @returns string <p>The type of the execution scope. Possible values are <code>global</code>, <code>subtree</code> or <code>components</code>.</p>
                 */
                getType(): string;
            }
            /**
             * <p><p>Analysis history formats.</p><p>This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property 'HistoryFormats'.</p></p>
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
             */
            export class IssueManagerFacade {
                /**
                 * <p>Adds issue</p>
                 * @param {any} oIssue <p>Issue object to be added</p>
                 */
                addIssue(oIssue: any): void;
            }
            /**
             * <p><p>Support Assistant rule configuration</p></p>
             */
            export interface RuleConfiguration {
                /**
                 */
                id: any;
                /**
                 */
                async: any;
                /**
                 */
                title: any;
                /**
                 */
                resolution: any;
                /**
                 */
                minversion: any;
                /**
                 */
                categories: any;
                /**
                 */
                audiences: any;
                /**
                 */
                description: any;
                /**
                 */
                resolutionurls: any;
                /**
                 */
                check: any;
            }
            /**
             * <p><p>Defines severity types.</p><p>This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property 'Severity'.</p></p>
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
             * <p><p>Contains the available system presets.</p><p>This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property 'SystemPresets'.</p></p>
             */
            export enum SystemPresets {
                /**
                 * <p>The accessibility preset.</p>
                 */
                Accessibility = "Accessibility",
                /**
                 * <p>Preset to find usages of deprecated controls, properties, aggregations and others.</p>
                 */
                Deprecations = "Deprecations",
            }
        }
    }
}
declare namespace sap {
    namespace ui {
        namespace support {
            /**
             * <p><p>The <code>sap.ui.support.RuleAnalyzer</code> namespace is the central entry point for the Support Assistant functionality.</p></p><h3>Overview</h3><p><p> <code>sap.ui.support.RuleAnalyzer</code> reveals an API for the Support Assistant which you can easily work with to analyze an application.</p></p><h3>Usage</h3><p><p><ul> <li> <code>sap.ui.support.RuleAnalyzer.addRule</code> method allows adding a new rule.</li> <li> <code>sap.ui.support.RuleAnalyzer.analyze</code> starts the analysis of the application.</li> <li> Then the result can be accessed with methods <code>sap.ui.support.RuleAnalyzer.getAnalysisHistory</code>, <code>sap.ui.support.RuleAnalyzer.getLastAnalysisHistory</code> or <code>sap.ui.support.RuleAnalyzer.getFormattedAnalysisHistory</code>. </li> </ul></p><p>For more information, see <a target="_self" href="topic/a34eb58aaf124f538a3ead23a6cab04a">Support Assistant API</a>.</p></p>
             */
            namespace RuleAnalyzer {
                /**
                 * <p>Adds new temporary rule when in silent mode</p>
                 * @param {sap.ui.support.RuleConfiguration} oRule <p>Settings for the new rule. For detailed information about its properties see <a target="_self" href="topic/eaeea19a991d46f29e6d8d8827317d0e">Rule Property Values</a></p>
                 * @returns string <p>Rule creation status. Possible values are "success" or description of why adding failed.</p>
                 */
                function addRule(oRule: sap.ui.support.RuleConfiguration): string;
                /**
                 * <p>Main method to perform analysis of a given running application.</p><p>Allows to choose a particular execution scope - desired part of the UI to be checked and a flexible way to specify the list of rules to be used.</p>
                 * @param {any} oExecutionScope <p>The execution scope of the analysis (see <a target="_self" href="topic/e15067d976f24b11907f4c262bd749a0">Execution Scope</a>).</p>
                 * @param {any} vPresetOrRules <p>This optional parameter allows for selection of subset of rules for the analysis. You can pass: <ul> <li>A rule preset object containing the preset ID and the list of rules it contains.</li> <li>A string that refers to the ID of a system preset.</li> <li>An object array with a plain list of rules.</li> </ul></p>
                 * @param {any} oMetadata <p>Metadata in custom format. Its only purpose is to be included in the analysis report.</p>
                 * @returns Promise<any> <p>Notifies the finished state by starting the Analyzer</p>
                 */
                function analyze(oExecutionScope?: any, vPresetOrRules?: any, oMetadata?: any): Promise<any>;
                /**
                 * <p>Returns the history of all executed analyses.</p>
                 * @returns sap.ui.support.AnalysisResult[] <p>Array of history objects in the order of analyses performed. The results of the last analysis are contained in the last element in the array.</p>
                 */
                function getAnalysisHistory(): any;
                /**
                 * <p>Returns the history of all executed analyses into formatted output depending on the passed format.</p>
                 * @param {sap.ui.support.HistoryFormats} sFormat <p>The format into which the history object will be converted. Possible values are listed in sap.ui.support.HistoryFormats.</p>
                 * @returns any <p>All analysis history objects in the correct format.</p>
                 */
                function getFormattedAnalysisHistory(sFormat?: sap.ui.support.HistoryFormats): any;
                /**
                 * <p>Returns the result of the last analysis performed.</p>
                 * @returns sap.ui.support.AnalysisResult <p>Last analysis history.</p>
                 */
                function getLastAnalysisHistory(): sap.ui.support.AnalysisResult;
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
