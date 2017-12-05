# ibas-typescript
业务系统前端架构，配合ibas-framework服务端。

## 鼓励师 | Encourager
![](encourager.gif "はしもとかんな")
* 姓名：桥本环奈（はしもとかんな）
* 生日：1999年2月3日
* 国籍：日本
* WOW: [治愈系](http://www.bilibili.com/mobile/video/av1169895.html "B站指日可待")


## 项目结构 | Projects
* ibas/3rdparty        第三方库，其中js库需要定义.d.ts文件
* ibas/bobas           业务对象基础库
* ibas/bsbas           业务系统基础库
* ibas/shell           业务系统模块容器
* openui5/types        openui5相关库声明
* openui5/resources    openui5代码，此目录需要自行下载维护
* openui5/extends      openui5扩展控件
* test/apps            加载模块目录
* test/repository      离线的业务仓库目录

~~~
注意：
  1） .d.ts用于声明，此类型文件不会编译为js文件。
  2） .ts用于具体实现，会被编译为js文件。
  3） ui控件使用的是sap的openui5，未挂载项目中，请自行下载http://openui5.org/download.html。
  4） 建议使用VS Code开发，并安装插件TSLint（代码检查），Live Server（Web服务）。
~~~

## 说明 | Instructions
* 配置文件说明
~~~
首先加载bobas/config.json
然后加载bsbas/config.json
然后加载shell/config.json
最后加载index.html同级config.json
后面加载的配置会替换前面的
~~~
* 脚本说明
~~~
build_all.bat/sh                       用于编译ts文件，build_all.bat .\ -w 表示编译并监听文件变化。
start_web_server_iis.bat               启动IIS Express服务，需要提前安装。
test/apps/link_modules.bat/sh          链接其他模块到此目录。
test/apps/update_libraries.bat/sh      更新模块api到引用的模块，需要先运行link_modules.bat/sh。
~~~
* 入口说明
~~~
ibas/shell/index.html              使用缓存的入口，一般用于调试。
index.html                         不使用缓存的入口，一般用于生产环境。
ibas/diagnosis.html                诊断页面，用于检查运行环境。
~~~

## 鸣谢 | Thanks
[牛加人等于朱](http://baike.baidu.com/view/1769.htm "NiurenZhu")<br>
[小昌昌](http://baike.baidu.com/view/1831.htm "cyitianyou")<br>
[DefinitelyTyped](http://definitelytyped.org/ "TypeScript Definition")<br>
[Color-Coding](http://colorcoding.org/ "咔啦工作室")<br>
