@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                update_libraries.bat
echo                     by niuren.zhu
echo                           2017.11.28
echo  说明：
echo     1. 更新模块api到各个模块。
echo     2. 参数1，工作目录。
echo     3. 注意，提前执行link_modules.bat链接好模块。
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

cd /d %WORK_FOLDER%
set WORK_FOLDER=%CD%
echo --工作目录：%WORK_FOLDER%
for /f %%n in ('dir /ad /b "%WORK_FOLDER%"') do (
  set MODULE_FOLDER=%WORK_FOLDER%\%%n
  if exist !MODULE_FOLDER!\api (
REM 存在api
    echo ----检查[%%n]的引用
    for /f %%m in ('dir /ad /b') do (
      set APP_FOLDER=%WORK_FOLDER%\%%m
      if exist !APP_FOLDER!\3rdparty\%%n\index.ts (
REM 存在引用
        echo ------更新[%%m]的引用
        rd /s /q !APP_FOLDER!\3rdparty\%%n
        xcopy /s /y /i /q !MODULE_FOLDER!\api !APP_FOLDER!\3rdparty\%%n >nul
      )
    )
  )
  if exist !MODULE_FOLDER!\index.d.ts (
REM 存在index.d.ts
    echo ----检查[%%n]的声明
    for /f %%m in ('dir /ad /b') do (
      set APP_FOLDER=%WORK_FOLDER%\%%m
      if exist !APP_FOLDER!\3rdparty\%%n\index.d.ts (
REM 存在声明
        echo ------更新[%%m]的声明
        copy /y !MODULE_FOLDER!\index.d.ts !APP_FOLDER!\3rdparty\%%n\index.d.ts >nul
      )
    )
  )
)
cd /d %STARTUP_FOLDER%