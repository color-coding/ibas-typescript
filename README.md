# ibas-typescript
业务系统前端架构，配合ibas-framework服务端。

## 鼓励师 | Encourager
[![encourager]](http://baike.baidu.com/view/10998931.htm)  
[encourager]:https://github.com/color-coding/ibas-typescript/raw/master/encourager.gif "はしもとかんな"
* 姓名：桥本环奈（はしもとかんな）
* 生日：1999年2月3日
* 国籍：日本
* WOW: [治愈系](http://www.bilibili.com/mobile/video/av1169895.html "B站指日可待")


## 项目结构 | Projects
* src\3rdparty    第三方库，其中js库需要定义.d.ts文件。
* src\bobas       业务对象相关基础库。
* src\bsbas       业务系统相关基础库。
* test\bobas      业务对象相关测试。
* test\bsbas      业务系统相关测试。

~~~
注意：
  1） .d.ts用于声明，此类型文件不会编译为js文件。
  2） .ts用于具体实现，会被编译为js文件。
  3） src/bobas/data/Enums.ts用于定义库内所有的枚举类型。
  4） src/bobas/data/Common.ts用于定义库内通用的数据类型。
~~~

## 说明 | Instructions



## 鸣谢 | Thanks
[牛加人等于朱](http://baike.baidu.com/view/1769.htm "NiurenZhu")<br>
[Color-Coding](http://colorcoding.org/ "咔啦工作室")<br>