@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                build_all.bat
echo                     by niuren.zhu
echo                           2017.01.13
echo  说明：
echo     1. 此脚本需要在Node.js command prompt下运行。
echo     2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。
echo     3. 参数1，编译的目录，“.\”表示当前。
echo     4. 参数2，tsc命令的其他参数，如：-w，表示监听文件变化。
echo ****************************************************************************
REM 设置参数变量
REM 启动目录
SET STARTUP_FOLDER=%~dp0
REM 传入的工作目录
SET WORK_FOLDER=%~1
REM 判断是否传工作目录，没有则是启动目录
if "%WORK_FOLDER%"=="" SET WORK_FOLDER=%STARTUP_FOLDER%
REM 若工作目录最后字符不是“\”则补齐
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\
REM 其他参数
SET OPTIONS=%~2
REM 构建命令
SET COMMOND=tsc
if "%OPTIONS%" neq "" (
  SET COMMOND=start /min !COMMOND! %OPTIONS%
  echo 命令：!COMMOND!
)
REM 过滤符号链接目录
if exist "%WORK_FOLDER%\tomcat\webapps\ROOT" rd /s /q "%WORK_FOLDER%\tomcat\webapps\ROOT"
for /f %%l in ('dir /s /b "%WORK_FOLDER%tsconfig.json"') DO (
  SET FOLDER=%%~dpl
  echo --开始编译：!FOLDER!
REM 运行编译命令
  call !COMMOND! -p !FOLDER!
)