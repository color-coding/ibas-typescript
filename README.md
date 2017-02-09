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
* ibas/3rdparty    第三方库，其中js库需要定义.d.ts文件。
* ibas/bobas       业务对象相关基础库。
* ibas/bsbas       业务系统相关基础库。
* test/bobas      业务对象相关测试。
* test/app        业务系统相关测试。

~~~
注意：
  1） .d.ts用于声明，此类型文件不会编译为js文件。
  2） .ts用于具体实现，会被编译为js文件。
  3） ibas/bobas/data/Enums.ts用于定义库内所有的枚举类型。
  4） ibas/bobas/data/Common.ts用于定义库内通用的数据类型。
  5） ui控件使用的是sap的open-ui5，未挂载项目中，请自行下载http://openui5.org/download.html。
~~~

## 说明 | Instructions
* 配置文件说明
~~~
首先加载bobas/config.json。
然后加载bsbas/config.json。
最后加载html目录config.json。
后面加载的配置会替换前面的。
~~~
* 脚本说明
~~~
build_all.bat/sh             用于编译ts文件，build_all.bat .\ -w 表示编译并监听文件变化。
start_web_server_iis.bat     启动IIS Express服务，需要提前安装。
~~~

## 鸣谢 | Thanks
[牛加人等于朱](http://baike.baidu.com/view/1769.htm "NiurenZhu")<br>
[DefinitelyTyped](http://definitelytyped.org/ "TypeScript Definition")<br>
[Color-Coding](http://colorcoding.org/ "咔啦工作室")<br>