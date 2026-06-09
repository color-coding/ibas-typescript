@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                build_all.bat
echo                     by niuren.zhu
echo                           2017.01.13
echo  说明：
echo     1. 此脚本需要在Node.js下运行。
echo     2. 编译预设的tsconfig.json配置列表。
echo     3. 参数1，tsc命令的其他参数，如：-w，表示监听文件变化。
echo ****************************************************************************
rem 设置参数变量
rem 工作目录
set WORK_FOLDER=%~dp0
rem 工作目录末尾字符是"\"
if "%WORK_FOLDER:~-1%" neq "\" set WORK_FOLDER=%WORK_FOLDER%\
echo --工作的目录：%WORK_FOLDER%
rem 其他参数
set OPTIONS=%~1
rem 运行命令
set COMMAND=tsc
if "%OPTIONS%" neq "" (
  set COMMAND=start /min !COMMAND! %OPTIONS%
  echo 命令：!COMMAND!
)

rem 编译项目配置
set TS_CONFIGS=ibas\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% ibas\worker\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% shell\tsconfig.loader.json
set TS_CONFIGS=%TS_CONFIGS% shell\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% openui5\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% shell\bsui\c\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% shell\bsui\m\tsconfig.json
rem 编译TT项目
set TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\bsui\c\tsconfig.json
set TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\bsui\m\tsconfig.json

FOR %%l IN (%TS_CONFIGS%) DO (
  set TS_CONFIG=%%l
  echo --开始编译：!TS_CONFIG!
  call !COMMAND! -p !TS_CONFIG!
)
