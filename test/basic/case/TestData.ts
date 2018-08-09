/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace test {
    export class TestData extends ibas.TestCase {
        // 枚举值操作
        testEnum(): void {
            console.log(ibas.strings.format("Enum string {0}.", ibas.emMessageLevel[ibas.emMessageLevel.DEBUG]));
            let eValue: number = ibas.enums.valueOf(ibas.emYesNo, "yes");
            this.assertEquals("converter parsingEnums faild.", ibas.emYesNo.YES, eValue);
            eValue = ibas.enums.valueOf(ibas.emConditionOperation, "NOT_EQUAL");
            this.assertEquals("converter parsingEnums faild.", ibas.emConditionOperation.NOT_EQUAL, eValue);
        }
        // 测试日期类型
        testDate(): void {
            let dValue: Date = ibas.dates.valueOf("2017-03-14'T'23:59:59");
            this.assertEquals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
            dValue = ibas.dates.valueOf("2017/3/14'T'23:59:59");
            this.assertEquals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
            dValue = ibas.dates.valueOf("2017/3/14");
            this.assertEquals("converter parsingDate faild.", dValue, new Date(2017, 2, 14));
            dValue = ibas.dates.valueOf("2017-3-14");
            this.assertEquals("converter parsingDate faild.", dValue, new Date(2017, 2, 14));
            let sValue: string = ibas.dates.toString(new Date(2017, 2, 14, 23, 59, 59));
            this.assertEquals("converter convertDate faild.", sValue, "2017-03-14T23:59:59");
            dValue = ibas.dates.valueOf("2017/3/14T23:59:59");
            this.assertEquals("converter parsingDate faild.", dValue, new Date(2017, 2, 14, 23, 59, 59));
        }
        // 测试字符串操作
        testString(): void {
            console.log(ibas.strings.format("I'm {0}.", 100));
            console.log(ibas.strings.format("I'm {0}.", { "name": "jack" }));
            console.log(ibas.strings.format("I'm {0}.", "niuren.zhu"));
            console.log(ibas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding"));
            console.log(ibas.strings.format("I'm {0} and good at {1}.", "niuren.zhu", "coding", "some one"));
            console.log(ibas.strings.format("I'm {0}.", "niuren.zhu", "coding", "some one"));
            console.log(ibas.strings.format("I'm {2}.", "niuren.zhu", "coding", "some one"));
            this.assertEquals("string.count faild.", ibas.strings.count("I'm niuren.zhu.", "zhu"), 1);
            this.assertEquals("string.count faild.", ibas.strings.count("I'm niuren.zhu.", "."), 2);
        }
        // 测试字符串构造器
        testStringBuilder(): void {
            let builder: ibas.StringBuilder = new ibas.StringBuilder();
            builder.append("I");
            builder.append("'");
            builder.append("m");
            builder.append(" ");
            builder.append(ibas.strings.format("{1}.{0}", "zhu", "niuren"));
            builder.append(".");
            console.log(builder.toString());
        }
        // 测试字符串构造器
        testUrl(): void {
            // 测试地址处理
            this.assertEquals("string.count faild.", ibas.urls.normalize(".../test/util/.././../index.html"), document.location.href + "index.html");
        }

    }
}