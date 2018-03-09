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

cd /d %WORK_FOLDER%
set WORK_FOLDER=%CD%
echo --工作目录：%WORK_FOLDER%
for /f %%l in ('dir /ad /b ibas.*') do (
  set MODULE_FOLDER=!WORK_FOLDER!\%%l
  cd /d !MODULE_FOLDER!
  echo ----模块目录：!MODULE_FOLDER!
  for /f %%m in ('dir /s /ad /b webapp') do (
    set APP_FOLDER=%%m
    if exist !APP_FOLDER!\3rdparty (
      echo ------应用目录：!APP_FOLDER!
REM 取模块名称字符，ibas.businessone.service\src\main\webapp
      call :MODULE_NAME !APP_FOLDER:~0,-24! !START_INDEX!
      if not exist %STARTUP_FOLDER%!MODULE_NAME! mklink /d %STARTUP_FOLDER%!MODULE_NAME! "!APP_FOLDER!" > nul
REM 检查库符号链接
      if not exist !APP_FOLDER!\3rdparty\ibas mklink /d !APP_FOLDER!\3rdparty\ibas "%STARTUP_FOLDER%..\..\ibas" > nul
      if not exist !APP_FOLDER!\3rdparty\shell mklink /d !APP_FOLDER!\3rdparty\shell "%STARTUP_FOLDER%..\..\shell" > nul
      if not exist !APP_FOLDER!\3rdparty\openui5 mklink /d !APP_FOLDER!\3rdparty\openui5 "%STARTUP_FOLDER%..\..\openui5" > nul
    )
  )
  cd /d %WORK_FOLDER%
)
cd /d %STARTUP_FOLDER%
goto :EOF
REM 函数，获取模块名称（参数1：字符串）；MODULE_NAME返回值
:MODULE_NAME
  SET STR=%1
  SET VALUE=
  SET MODULE_NAME=
:LABEL
  set VALUE=%STR:~-1%
  if %VALUE%==. goto :EOF
  SET MODULE_NAME=%VALUE%%MODULE_NAME%
  set STR=%STR:~0,-1%
  if defined STR goto :LABEL
goto :EOF