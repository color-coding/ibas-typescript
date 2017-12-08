// Type definitions for OpenUI5 1.40
// Project: http://openui5.org/
// Definitions by: niuren.zhu <niuren.zhu@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace sap {
    namespace ui {
        namespace codeeditor {
            export class CodeEditor extends sap.ui.core.Control {
                constructor(mSettings?: any);
                constructor(sId: string, mSettings?: any);
                getValue(): string;
                getType(): string;
                setValue(sValue: string): CodeEditor;
                setType(sType: string): CodeEditor;
            }
        }
    }
}