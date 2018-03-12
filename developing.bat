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
echo --工作目录：%WORK_FOLDER%
REM 启动监听
REM CALL :WATCHING_TS "%WORK_FOLDER%ibas\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%openui5\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.ui.c.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.ui.m.json"
REM 启动编译
CALL :COMPILE_TS "%WORK_FOLDER%ibas\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%openui5\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.ui.c.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.ui.m.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.loader.json"
REM 编译其他模块
echo --处理应用目录
for /f %%m in ('dir /b /al %WORK_FOLDER%\test\apps\') DO (
  SET FOLDER=%WORK_FOLDER%\test\apps\%%m
  SET BUILDER=!FOLDER!\build_all.bat
  if EXIST !BUILDER! (
    cd /d !FOLDER!
    CALL "!BUILDER!" -w
  )
)
cd /d %WORK_FOLDER%

ECHO 启动WEB SERVER
REM 检查IIS EXPRESS
SET WEB_SERVER="%ProgramFiles%\IIS Express\iisexpress.exe"
SET WEB_PORT=15386
IF EXIST %WEB_SERVER% (
  ECHO --检测到[IIS EXPRESS]服务
  SET /p DONE=[Y]-启动:
  IF /i "!DONE!"=="y" (
    START /min CALL %WEB_SERVER% /path:%WORK_FOLDER% /port:%WEB_PORT%
    ECHO --已启动[IIS EXPRESS]，端口[%WEB_PORT%]，工作目录[%WORK_FOLDER%]
    GOTO :EOF
  )
)
REM 检查TOMCAT
SET WEB_SERVER="%WORK_FOLDER%tomcat\bin\startup.bat"
IF EXIST %WEB_SERVER% (
  ECHO --检测到[TOMCAT]服务
  SET /p DONE=[Y]-启动:
  IF /i "!DONE!"=="y" (
    CALL %WEB_SERVER%
    GOTO :EOF
  )
)
GOTO :EOF

:WATCHING_TS
SET CONFIG_FILE=%1
echo ----监听: %CONFIG_FILE%
IF EXIST %CONFIG_FILE% START /min tsc -w -p %CONFIG_FILE%
GOTO :EOF
:COMPILE_TS
SET CONFIG_FILE=%1
echo ----编译: %CONFIG_FILE%
IF EXIST %CONFIG_FILE% tsc -p %CONFIG_FILE%
GOTO :EOF
