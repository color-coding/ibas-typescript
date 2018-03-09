/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
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
                setBindingValue(value: string): void;
                getBindingValue(): string;
            }
            export class EnumSegmentedButton extends sap.m.SegmentedButton {
                setEnumValue(value: any): void;
                setBindingValue(value: string): void;
                getBindingValue(): string;
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
                setBindingValue(value: string): void;
                getBindingValue(): string;
                setReadOnly(value: Boolean): void;
                getReadOnly(): Boolean;
            }
            export class BOChooseInput extends BOInput {
                getChooseType(): any;
                getCriteria(): any;
                setCriteria(value: any): void;
            }
            export class DataOwnerInput extends BOChooseInput {
            }
            export class TeamMembersInput extends DataOwnerInput {

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
                setBindingValue(value: string): void;
                getBindingValue(): string;
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
                setBindingValue(value: string): void;
                getBindingValue(): string;
                getCriteria(): any;
                setCriteria(value: any): void;
            }
            export class SeriesSelect extends sap.m.ex.BOSelect {
                getBoCode(): string;
                setBoCode(value: string): void;
            }
            export class ProvincesCityDistrict extends sap.m.FlexBox {
                getProvinces(): string;
                setProvinces(value: string): void;
                getCity(): string;
                setCity(value: string): void;
                getDistrict(): string;
                setDistrict(value: string): void;
            }
            export class BOLink extends sap.m.Link {
                getBoCode(): string;
                setBoCode(value: string): void;
                getBoKey(): string;
                setBoKey(value: string): void;
                setBindingValue(value: string): void;
                getBindingValue(): string;
                setConsistent(value: boolean): void;
                getConsistent(): boolean;
            }
        }
    }
}