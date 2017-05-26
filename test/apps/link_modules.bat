@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                link_modules.bat
echo                     by niuren.zhu
echo                           2017.05.04
echo  说明：
echo     1. 链接ibas模块到脚本目录。
echo     2. 参数1，遍历的目录，默认..\..\..\。
echo ****************************************************************************
REM 设置参数变量
REM 启动目录
SET STARTUP_FOLDER=%~dp0
REM 传入的工作目录
SET WORK_FOLDER=%~1
REM 判断是否传工作目录，没有则是启动目录
if "%WORK_FOLDER%"=="" SET WORK_FOLDER=%STARTUP_FOLDER%..\..\..\
REM 若工作目录最后字符不是“\”则补齐
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\

REM 直接指定地址了，懒得写活了
mklink /d initialfantasy "%WORK_FOLDER%ibas.initialfantasy\ibas.initialfantasy.service\src\main\webapp"
mklink /d importexport "%WORK_FOLDER%ibas.importexport\ibas.importexport.service\src\main\webapp"
mklink /d reportanalysis "%WORK_FOLDER%ibas.reportanalysis\ibas.reportanalysis.service\src\main\webapp"
mklink /d businessobjectsenterprise "%WORK_FOLDER%ibas.reportanalysis\ibas.businessobjectsenterprise.service\src\main\webapp"
mklink /d documents "%WORK_FOLDER%ibas.documents\ibas.documents.service\src\main\webapp"