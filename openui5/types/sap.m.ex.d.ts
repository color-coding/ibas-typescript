/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sap {
    namespace m {
        namespace ex {
            export class EnumSelect extends sap.m.Select {
                setBoText(value: any): void;
                getBoText(): any;
                setBlank(value: Boolean): void;
                getBlank(): Boolean;
            }
            export class EnumSegmentedButton extends sap.m.SegmentedButton {
                setEnumValue(value: any): void;
            }
            export class BOInput extends sap.m.Input {
                getBoCode(): string;
                setBoCode(value: string): void;
                getBoKey(): string;
                setBoKey(value: string): void;
                getBoText(): string;
                setBoText(value: string): void;
                getRepositoryName(): string;
                setRepositoryName(value: string): void;
            }
            export class DataOwnerInput extends BOInput {
            }
            export class TeamMembersInput extends BOInput {

            }
            export class BOText extends sap.m.Text {
                getBoCode(): string;
                setBoCode(value: string): void;
                getBoKey(): string;
                setBoKey(value: string): void;
                getBoText(): string;
                setBoText(value: string): void;
                getRepositoryName(): string;
                setRepositoryName(value: string): void;
                getBoDescription(): string;
                setBoDescription(value: string): void;
            }
            export class BOSelect extends sap.m.Select {
                setBlank(value: Boolean): void;
                getBlank(): Boolean;
                getBoCode(): string;
                setBoCode(value: string): void;
                getBoKey(): string;
                setBoKey(value: string): void;
                getBoText(): string;
                setBoText(value: string): void;
                getRepositoryName(): string;
                setRepositoryName(value: string): void;
                getCriteria(): any;
                setCriteria(value: any): void;
            }
        }
    }
}