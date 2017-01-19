/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/// <reference path="./BORepository.d.ts" />

import { } from './BORepository.d';
import { object } from '../data/Data';
import { IDataConverter, BORemoteRepositoryJQuery } from '../core/Core';
import { i18n } from '../i18n/I18N';
import { logger } from '../messages/Messages';
import { DataConverter4ibas } from './DataConverters';

/**
 * 业务仓库应用
 */
export class BORepositoryApplication extends BORemoteRepositoryJQuery {

    private converter: IDataConverter;

    createDataConverter(): IDataConverter {
        if (object.isNull(this.converter)) {
            this.converter = new DataConverter4ibas();
        }
        return this.converter;
    }
}


