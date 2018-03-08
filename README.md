# ibas-typescript
业务系统前端架构，配合ibas-framework服务端。

## 鼓励师 | Encourager
![](encourager.gif "はしもとかんな")
* 姓名：桥本环奈（はしもとかんな）
* 生日：1999年2月3日
* 国籍：日本
* WOW: [治愈系](http://www.bilibili.com/mobile/video/av1169895.html "B站指日可待")


## 项目结构 | Projects
* ibas                           ibas库相关
* ibas/3rdparty                  第三方库，其中js库需要定义.d.ts文件
* ibas/bobas                     业务对象基础库
* ibas/bsbas                     应用基础库
* shell                          应用容器
* openui5                        openui5相关
* openui5/types                  openui5库声明
* openui5/resources              openui5库，此目录需要自行下载维护
* test/apps                      应用模块相关
* test/apps/trainingtesting      培训及测试模块
* test/repository                离线的业务仓库目录

~~~
注意：
  1） ui控件使用的是sap的openui5，未挂载项目中，请自行下载http://openui5.org/download.html。
  2） 建议使用VS Code开发，并安装插件TSLint（代码检查），Live Server（Web服务）。
~~~

## 说明 | Instructions
* 配置文件说明
~~~
首先加载ibas/config.json
然后加载index.html所在目录的config.json
后面加载的配置会替换前面的
~~~
* 脚本说明
~~~
build_all.bat/sh                       用于编译ts文件，build_all.bat -w 表示编译并监听文件变化。
developing.bat/sh                      运行开发环境。
test/apps/link_modules.bat/sh          链接其他模块到此目录。
test/apps/update_libraries.bat/sh      更新模块api到引用的模块，需要先运行link_modules.bat/sh。
~~~
* 入口说明
~~~
shell/index.html                       使用缓存的入口，一般用于开发环境。
index.html                             不使用缓存的入口，一般用于生产环境。
ibas/diagnosis/index.html              诊断页面，用于检查运行环境。
~~~

## 鸣谢 | Thanks
[牛加人等于朱](http://baike.baidu.com/view/1769.htm "NiurenZhu")<br>
[小昌昌](http://baike.baidu.com/view/1831.htm "cyitianyou")<br>
[周周](http://baike.baidu.com/view/1751.htm "neilzhou0309")<br>
[Color-Coding](http://colorcoding.org/ "咔啦工作室")<br>
