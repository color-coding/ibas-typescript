import * as bobas from '../../../src/bobas/bobas';

/**
* 用户
*/
export class User extends bobas.BusinessObject<User> {

    private _userCode: string;

    get userCode(): string {
        return this._userCode;
    }

    set userCode(value: string) {
        this._userCode = value;
    }
}