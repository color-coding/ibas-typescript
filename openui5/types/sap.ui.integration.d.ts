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
     * <p><p>SAPUI5 library with controls specialized for SAP Fiori apps.</p></p>
     */
    namespace integration {
      /**
       * <p><p>Possible data modes for <code><a target="_self" class="jsdoclink" href="#/api/sap.ui.integration.widgets.Card">sap.ui.integration.widgets.Card</a></code>.</p></p>
       */
      export enum CardDataMode {
        /**
         * <p>When in this mode, the card can make requests.</p>
         */
        Active = "Active",
        /**
         * <p>When in this mode, the card cannot make requests.</p>
         */
        Inactive = "Inactive",
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
declare namespace sap {
  namespace ui {
    namespace integration {
      /**
       */
      namespace widgets {
        /**
         * <p>A control that represents a container with a header and content.</p><h3>Overview</h3><p> Cards are small user interface elements which provide the most important information from an app, related to a specific role or task. The information is represented in a compact manner, allowing for actions to be executed. Cards can be described as small representations of an app which can be integrated in different systems.</p><p>The integration card is defined in a declarative way, using a manifest.json to be: <ul> <li>Easily integrated into apps</li> <li>Easily reused across apps</li> <li>Understandable by other technologies</li> <li>Self-contained (without external configuration)</li> <li>Easily reconfigured in app layers (including backend)</li> <li>Easy to separate the roles of the card and the app developers</li> </ul></p><p>The role of the card developer is to describe the card in a manifest.json file and define: <ul> <li>Header</li> <li>Content</li> <li>Data source</li> <li>Possible actions</li> </ul></p><p>The role of the app developer is to integrate the card into the app and define: <ul> <li>The dimensions of the card inside a layout of choice, using the <code>width</code> and <code>height</code> properties</li> <li>The behavior for the actions described in the manifest.json file, using the action event</li> </ul></p><h3>Usage</h3><p>The <code>"sap.app"</code> <code>type</code> property in the manifest file must be set to <code>"card"</code>. The namespace used to define a card is <code>"sap.card"</code>. Every card has a type which can be one of the following: List, Analytical, Timeline, Object, Table, Component (experimental)</p><p>An example of a manifest.json:</p><p><pre>
        <code>
        {
          "sap.app": {
            "type": "card",
            ...
          },
          "sap.ui5": {
            ...
          },
          "sap.card": {
            "type": "List",
            "header": { ... },
            "content": { ... }
          }
        }
        </code>
        </pre></p><p>Examples of header sections:</p><p>The default header type can contain title, subtitle, icon, and status. <pre>
         <code>
        {
          ...
          "sap.card": {
            "header": {
              "title": "An example title",
              "subTitle": "Some subtitle",
              "icon": {
                "src": "sap-icon://business-objects-experience"
              },
              "status": {
                "text": "5 of 20"
              }
            },
            ...
          }
        }
         </code>
         </pre></p><p>The numeric header type can contain title, subtitle, unitOfMeasurement, details, main indicator, and side indicators. <pre>
         <code>
        {
          ...
          "sap.card": {
            "header": {
              "type": "Numeric",
              "title": "Project Cloud Transformation",
              "subTitle": "Revenue",
              "unitOfMeasurement": "EUR",
              "mainIndicator": {
                "number": "44",
                "unit": "%",
                "trend": "Down",
                "state": "Critical"
              },
              "details": "Some details",
              "sideIndicators": [
                {
                  "title": "Target",
                  "number": "17",
                  "unit": "%"
                },
                {
                  "title": "Deviation",
                  "number": "5",
                  "unit": "%"
                }
              ]
            },
            ...
          }
        }
         </code>
         </pre></p><p>The content of the card is created based on the card type. Possible card types: <ul> <li>List</li> <li>Object</li> <li>Timeline</li> <li>Analytical</li> <li>Table</li> <li>Component (experimental)</li> </ul></p><p>List card contains a set of items. The <code>"item"</code> property defines the template for all the items of the list. The <code>"data"</code> property provides the displayed information.</p><p>Example: <pre>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "List",
            "header": {
              ...
            },
            "content": {
              "data": {
                "json": [{
                    "Name": "Comfort Easy",
                    "Description": "A 32 GB Digital Assistant with a high-resolution color screen",
                    "Highlight": "Error"
                  },
                  {
                    "Name": "ITelO Vault",
                    "Description": "A Digital Organizer with state-of-the-art Storage Encryption",
                    "Highlight": "Warning"
                  },
                  {
                    "Name": "Notebook Professional 15",
                    "Description": "Notebook Professional 15 description",
                    "Highlight": "Success"
                  }
                ]
              },
              "item": {
                "title": {
                  "label": "{{title_label}}",
                  "value": "{Name}"
                },
                "description": {
                  "label": "{{description_label}}",
                  "value": "{Description}"
                },
                "highlight": "{Highlight}"
              }
            }
          }
        }
        </pre></p><p>Analytical card contains a chart visualization configuration. Supported chart types are Line, StackedBar, StackedColumn, Donut.</p><p>Example: <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "Analytical",
            "header": {
              ...
            },
            "content": {
              "chartType": "Line",
              "legend": {
                "visible": true,
                "position": "Bottom",
                "alignment": "Left"
              },
              "plotArea": {
                "dataLabel": {
                  "visible": true
                },
                "categoryAxisText": {
                  "visible": false
                },
                "valueAxisText": {
                  "visible": false
                }
              },
              "title": {
                "text": "Line chart",
                "visible": true,
                "alignment": "Left"
              },
              "measureAxis": "valueAxis",
              "dimensionAxis": "categoryAxis",
              "data": {
                "json": {
                  "list": [
                    {
                      "Week": "CW14",
                      "Revenue": 431000.22,
                      "Cost": 230000.00,
                      "Cost1": 24800.63,
                      "Cost2": 205199.37,
                      "Cost3": 199999.37,
                      "Target": 500000.00,
                      "Budget": 210000.00
                    },
                    {
                      "Week": "CW15",
                      "Revenue": 494000.30,
                      "Cost": 238000.00,
                      "Cost1": 99200.39,
                      "Cost2": 138799.61,
                      "Cost3": 200199.37,
                      "Target": 500000.00,
                      "Budget": 224000.00
                    }
                  ]
                },
                "path": "/list"
              },
              "dimensions": [
                {
                  "label": "Weeks",
                  "value": "{Week}"
                }
              ],
              "measures": [
                {
                  "label": "Revenue",
                  "value": "{Revenue}"
                },
                {
                  "label": "Cost",
                  "value": "{Cost}"
                }
              ]
            }
          }
        }
        </code>
        </pre></p><p>Object card contains information about an object. It is structured in groups. Every group can have a title and items. The items contain display name (label) and value.</p><p>Example: <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
              "type": "Object",
             "header": {
               ...
             },
             "content": {
               "groups": [
                 {
                   "title": "Group title",
                   "items": [
                     {
                       "label": "Name",
                       "value": "Ivan"
                     },
                     {
                       "label": "Surname",
                       "value": "Petrov"
                     },
                     {
                       "label": "Phone",
                       "value": "+1 1234 1234555"
                     }
                   ]
                 },
                 {
                   "title": "Organization",
                   "items": [
                     {
                       "label": "Company Name",
                       "value": "Sap",
                       "icon": {
                         "src": "../images/Woman_avatar_02.png"
                       }
                     }
                   ]
                 }
               ]
             }
          }
        }
        </code>
        </pre></p><p>Timeline card contains a set of timeline items. The "item" property defines the template for all the items of the timeline.</p><p>Example: <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "Timeline",
            "header": {
              ...
            },
            "content": {
              "data": {
                "json": [
                  {
                    "Title": "Weekly sync: Marketplace / Design Stream",
                    "Description": "MRR WDF18 C3.2(GLASSBOX)",
                    "Icon": "sap-icon://appointment-2",
                    "Time": "10:00 - 10:30"
                  },
                  {
                    "Title": "Video Conference for FLP@SF, S4,Hybris",
                    "Icon": "sap-icon://my-view",
                    "Time": "14:00 - 15:30"
                  },
                  {
                    "Title": "Call 'Project Nimbus'",
                    "Icon": "sap-icon://outgoing-call",
                    "Time": "16:00 - 16:30"
                  }
                ]
              },
              "item": {
                "dateTime": {
                  "value": "{Time}"
                },
                "description" : {
                  "value": "{Description}"
                },
                "title": {
                  "value": "{Title}"
                },
                "icon": {
                  "src": "{Icon}"
                }
              }
            }
          }
        }
        </code>
        </pre></p><p>Table card displays a set of items in a table format. The <code>"row"</code> property defines the template for all rows of the table.</p><p>Example: <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "Table",
            "header": {
              ...
            },
            "content": {
              "data": {
                "json": [
                  {
                   "salesOrder": "5000010050",
                   "customerName": "Robert Brown Entertainment",
                   "netAmount": "2K USD",
                   "status": "Delivered",
                   "statusState": "Success"
                  },
                  {
                   "salesOrder": "5000010051",
                   "customerName": "Entertainment Argentinia",
                   "netAmount": "127k USD",
                   "status": "Canceled",
                   "statusState": "Error"
                  },
                  {
                   "salesOrder": "5000010052",
                   "customerName": "Brazil Technologies",
                   "netAmount": "8K USD",
                   "status": "In Progress",
                   "statusState": "Warning"
                  }
                ]
              },
              "row": {
                "columns": [{
                   "title": "Sales Order",
                   "value": "{salesOrder}",
                   "identifier": true
                  },
                  {
                    "title": "Customer",
                    "value": "{customerName}"
                  },
                  {
                     "title": "Net Amount",
                     "value": "{netAmount}"
                  },
                  {
                     "title": "Status",
                     "value": "{status}",
                     "state": "{statusState}"
                  }
                ]
              }
            }
          }
        }
        </code>
        </pre></p><p>Component card can be used to display multiple controls (inside one Component). It is used as a custom approach for use cases, which do not fit in other card types and structures. It provides much more flexibility and responsibility to the Card’s authors. Reusability is achieved on Component level and this type of Card is usable in LOB products that are based on the SAPUI5 Framework.</p><p>Example: <pre>
        <code>
        {
          "sap.app": {
            "id": "sap.ui.integration.sample.ComponentCard.cardContent",
            "type": "card",
            "applicationVersion": {
            "version": "1.0.0"
            }
          },
          "sap.ui5": {
            "rootView": {
              "viewName": "sap.ui.integration.sample.ComponentCard.cardContent.View",
              "type": "XML",
              "async": true,
              "id": "app"
            },
            "dependencies": {
              "minUI5Version": "1.38",
              "libs": {
                "sap.m": {}
              }
            }
          },
          "sap.card": {
            "type": "Component",
            "header": {
              "title": "Visit our workshop"
            }
          }
        }
        </code>
        </pre></p><p>Item-based cards (Timeline and List) have an additional <code>"maxItems"</code> content property, which defines the maximum number of items the card can have.</p><h3>Data Handling</h3><p> To add data to the card, you can add a data section, header or content. The card automatically creates an unnamed model which can be used to resolve binding syntaxes inside the card manifest.</p><p>Static data: <pre>
        <code>
        {
          ...
          "content": {
            "data": {
              "json": {
                "items": [
                  {
                    "Title": "Weekly sync: Marketplace / Design Stream",
                    "Description": "MRR WDF18 C3.2(GLASSBOX)",
                    "Icon": "sap-icon://appointment-2",
                    "Time": "10:00 - 10:30"
                  },
                  {
                    "Title": "Video Conference for FLP@SF, S4,Hybris",
                    "Icon": "sap-icon://my-view",
                    "Time": "14:00 - 15:30"
                  }
                ]
              },
              "path": "/items"
            },
            ...
          }
        }
        </code>
        </pre></p><p>Requesting data: <pre>
        <code>
        {
          ...
          "content": {
            "data": {
              "request": {
                "url": "/path/to/data"
              },
              "path": "/items"
            },
            ...
          }
        }
        </code>
        </pre></p><h3>Actions</h3><p>Actions add behavior to the card. Actions have: <ul> <li>Type</li> <li>Parameters</li> <li>Enabled flag (true by default)</li> </ul></p><p>The available action types are:</p><p><ul> <li>Navigation</li> </ul></p><p>To add a navigation action, you need to configure it inside the manifest and the action itself can be set on:</p><p><ul> <li>Header</li> <li>Items of the list card</li> <li>Rows of the table card</li> <li>Analytical content</li> <li>Object content</li> </ul></p><p>In the example below, a navigation action is added both to the header and the list items: <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "List",
            "header": {
              "title": "Request list content Card",
              "subTitle": "Card Subtitle",
              "icon": {
                "src": "sap-icon://accept"
              },
              "status": "100 of 200",
              "actions": [
                {
                  "type": "Navigation",
                  "parameters": {
                    "url": "/some/relative/path"
                  }
                }
              ]
            },
            "content": {
              "data": {
                "request": {
                  "url": "./cardcontent/someitems_services2.json"
                },
                "path": "/items"
              },
              "item": {
                "icon": {
                  "src": "{icon}"
                },
                "title": {
                  "value": "{Name}"
                },
                "description": {
                  "value": "{Description}"
                },
                "actions": [
                  {
                    "type": "Navigation",
                    "enabled": "{= ${url}}",
                    "parameters": {
                      "url": "{url}"
                    }
                  }
                ]
              }
            }
          }
        }
        </code>
        </pre></p><p>In the example below, a navigation action is added on the Object content(same as Analytical content): <pre>
        <code>
        {
          "sap.app": {
            "type": "card"
          },
          "sap.card": {
            "type": "Object",
            ...
            "content": {
              "data": {
                "request": {
                  "url": "./objectitems_services2.json"
                },
                "path": "/items"
              },
               "groups": {
                 ...
               },
               "actions": [
                 {
                   "type": "Navigation",
                   "enabled": "{= ${url}}",
                   "parameters": {
                      "url": "{url}"
                   }
                }
              ]
            }
          }
        }
        </code>
        </pre></p><p><i>When to use</i> <ul> <li>When you want to reuse the card across apps.</li> <li>When you need easy integration and configuration.</li> </ul></p><p><i>When not to use</i> <ul> <li>When you need more header and content flexibility.</li> <li>When you have to achieve simple card visualization. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> <li>When you have to use an application model. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> <li>When you need complex behavior. For such cases, use: <a target="_self" class="jsdoclink" href="#/api/sap.f.Card">Card</a>.</li> </ul></p>
         */
        export class Card extends sap.ui.core.Control {
          /**
           * <p>Constructor for a new <code>Card</code>.</p><p>Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See <a target="_self" class="jsdoclink" href="#/api/sap.ui.base.ManagedObject/constructor">sap.ui.base.ManagedObject#constructor</a> for a general description of the syntax of the settings object.</p>
           * @param {string} sId <p>ID for the new control, generated automatically if no ID is given</p>
           * @param {any} mSettings <p>Initial settings for the new control</p>
           */
          constructor(sId?: string, mSettings?: any);
          /**
           * <p>Attaches event handler <code>fnFunction</code> to the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.integration.widgets.Card</code> itself.</p><p>Fired when an action is triggered on the card.</p>
           * @param {any} oData <p>An application-specific payload object that will be passed to the event handler along with the event object when firing the event</p>
           * @param {Function} fnFunction <p>The function to be called when the event occurs</p>
           * @param {any} oListener <p>Context object to call the event handler with. Defaults to this <code>sap.ui.integration.widgets.Card</code> itself</p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          attachAction(oData: any, fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
          /**
           * <p>Detaches event handler <code>fnFunction</code> from the <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> event of this <code>sap.ui.integration.widgets.Card</code>.</p><p>The passed function and listener object must match the ones used for event registration.</p>
           * @param {Function} fnFunction <p>The function to be called, when the event occurs</p>
           * @param {any} oListener <p>Context object on which the given function had to be called</p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          detachAction(fnFunction: Function, oListener?: any): sap.ui.integration.widgets.Card;
          /**
           * <p>Fires event <a target="_self" class="jsdoclink scrollToEvent" data-sap-ui-target="action" href="#/api/sap.ui.integration.widgets.Card/events/action">action</a> to attached listeners.</p>
           * @param {any} mParameters <p>Parameters to pass along with the event</p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          protected fireAction(mParameters?: any): sap.ui.integration.widgets.Card;
          /**
           * <p>Implements sap.f.ICard interface.</p>
           * @returns sap.ui.core.Control <p>The content of the card</p>
           */
          protected getCardContent(): sap.ui.core.Control;
          /**
           * <p>Implements sap.f.ICard interface.</p>
           * @returns sap.f.cards.IHeader <p>The header of the card</p>
           */
          protected getCardHeader(): sap.f.cards.IHeader;
          /**
           * <p>Implements sap.f.ICard interface.</p>
           * @returns sap.f.cards.HeaderPosition <p>The position of the header of the card.</p>
           */
          protected getCardHeaderPosition(): sap.f.cards.HeaderPosition;
          /**
           * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getDataMode" href="#/api/sap.ui.integration.widgets.Card/methods/getDataMode">dataMode</a>.</p><p>Defines the state of the <code>Card</code>. When set to <code>Inactive</code>, the <code>Card</code> doesn't make requests.</p><p>Default value is <code>Active</code>.</p>
           * @returns sap.ui.integration.CardDataMode <p>Value of property <code>dataMode</code></p>
           */
          getDataMode(): sap.ui.integration.CardDataMode;
          /**
           * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHeight" href="#/api/sap.ui.integration.widgets.Card/methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>Default value is <code>auto</code>.</p>
           * @returns sap.ui.core.CSSSize <p>Value of property <code>height</code></p>
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * <p>ID of the element which is the current target of the association <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHostConfigurationId" href="#/api/sap.ui.integration.widgets.Card/methods/getHostConfigurationId">hostConfigurationId</a>, or <code>null</code>.</p>
           * @returns sap.ui.core.ID 
           */
          getHostConfigurationId(): sap.ui.core.ID;
          /**
           * <p>Overwrites getter for card manifest.</p>
           * @returns string|Object <p>Cloned of the parameters.</p>
           */
          getManifest(): string | any;
          /**
           * <p>Overwrites getter for card parameters.</p>
           * @returns any <p>A Clone of the parameters.</p>
           */
          getParameters(): any;
          /**
           * <p>Gets current value of property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getWidth" href="#/api/sap.ui.integration.widgets.Card/methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>Default value is <code>100%</code>.</p>
           * @returns sap.ui.core.CSSSize <p>Value of property <code>width</code></p>
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * @returns boolean <p>If the card is ready or not.</p>
           */
          isReady(): boolean;
          /**
           * <p>Refreshes the card by re-applying the manifest settings and triggering all data requests.</p>
           */
          refresh(): void;
          /**
           * <p>Sets a new value for the <code>dataMode</code> property.</p>
           * @param {sap.ui.integration.CardDataMode} sMode <p>The mode to set to the Card.</p>
           * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
           */
          setDataMode(sMode: sap.ui.integration.CardDataMode): sap.ui.integration.widgets.Card;
          /**
           * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHeight" href="#/api/sap.ui.integration.widgets.Card/methods/getHeight">height</a>.</p><p>Defines the height of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>auto</code>.</p>
           * @param {sap.ui.core.CSSSize} sHeight <p>New value for property <code>height</code></p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          setHeight(sHeight: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
          /**
           * <p>Sets the associated <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getHostConfigurationId" href="#/api/sap.ui.integration.widgets.Card/methods/getHostConfigurationId">hostConfigurationId</a>.</p>
           * @param {sap.ui.core.ID | sap.ui.core.Control} oHostConfigurationId <p>ID of an element which becomes the new target of this hostConfigurationId association; alternatively, an element instance may be given</p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          setHostConfigurationId(oHostConfigurationId: sap.ui.core.ID | sap.ui.core.Control): sap.ui.integration.widgets.Card;
          /**
           * <p>Overwrites setter for card manifest.</p>
           * @param {string | any} vValue <p>The manifest object or its URL.</p>
           * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
           */
          setManifest(vValue: string | any): sap.ui.integration.widgets.Card;
          /**
           * <p>Overwrites setter for card params.</p>
           * @param {any} vValue <p>oParameters Parameters set in the card trough parameters property.</p>
           * @returns sap.ui.integration.widgets.Card <p>Pointer to the control instance to allow method chaining.</p>
           */
          setParameters(vValue: any): sap.ui.integration.widgets.Card;
          /**
           * <p>Sets a new value for property <a target="_self" class="jsdoclink scrollToMethod" data-sap-ui-target="getWidth" href="#/api/sap.ui.integration.widgets.Card/methods/getWidth">width</a>.</p><p>Defines the width of the card.</p><p>When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.</p><p>Default value is <code>100%</code>.</p>
           * @param {sap.ui.core.CSSSize} sWidth <p>New value for property <code>width</code></p>
           * @returns sap.ui.integration.widgets.Card <p>Reference to <code>this</code> in order to allow method chaining</p>
           */
          setWidth(sWidth: sap.ui.core.CSSSize): sap.ui.integration.widgets.Card;
        }
      }
    }
  }
}
