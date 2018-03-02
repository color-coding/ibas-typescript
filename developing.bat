@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                developing.bat
echo                     by niuren.zhu
echo                           2017.11.06
echo  说明：
echo     1. 此脚本需要在Node.js command prompt下运行。
echo     2. 监听并编译ibas目录文件。
echo     3. 监听并编译openui5\typings目录文件。
echo     4. 监听并编译test\apps目录文件。
echo     5. 运行web服务。
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
echo --工作的目录：%WORK_FOLDER%
REM 启动文件夹监听
CALL :WATCHING_TS "%WORK_FOLDER%ibas\tsconfig.json"
CALL :WATCHING_TS "%WORK_FOLDER%openui5\tsconfig.json"
CALL :WATCHING_TS "%WORK_FOLDER%test\basic\tsconfig.json"

REM 启动web服务
REM 优先启动IIS
SET WEB_SERVER="%ProgramFiles%\IIS Express\iisexpress.exe"
SET WEB_PORT=15386
IF EXIST %WEB_SERVER% (
  echo ----WEB服务：%WEB_SERVER%
  START /min CALL %WEB_SERVER% /path:%WORK_FOLDER% /port:%WEB_PORT%
  GOTO :EOF
) ELSE (
REM 不存在IIS，尝试启动此目录tomcat
  SET WEB_SERVER="%WORK_FOLDER%tomcat\bin\startup.bat"
  IF EXIST %WEB_SERVER% (
    echo ----WEB服务：%WEB_SERVER%
    CALL %WEB_SERVER%
    GOTO :EOF
  )
)
echo 不存在web服务，请设置iis或tomcat。
GOTO :EOF
:WATCHING_TS
SET CONFIG_FILE=%1
echo ----监听: %CONFIG_FILE%
IF EXIST %CONFIG_FILE% START /min tsc -w -p %CONFIG_FILE%
GOTO :EOF
