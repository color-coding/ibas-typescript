@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                build_all.bat
echo                     by niuren.zhu
echo                           2017.01.13
echo  说明：
echo     1. 此脚本需要在Node.js command prompt下运行。
echo     2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。
echo     3. 参数1，tsc命令的其他参数，如：-w，表示监听文件变化。
echo ****************************************************************************
REM 设置参数变量
REM 工作目录
SET WORK_FOLDER=%~dp0
REM 若工作目录最后字符不是“\”则补齐
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\
echo --工作的目录：%WORK_FOLDER%
REM 其他参数
SET OPTIONS=%~1
REM 构建命令
SET COMMOND=tsc
if "%OPTIONS%" neq "" (
  SET COMMOND=start /min !COMMOND! %OPTIONS%
  echo 命令：!COMMOND!
)

REM 查询当前目录的tsconfig文件
for /f %%l in ('dir /b tsconfig*.json') DO (
  SET TS_CONFIG=%%l
  echo --开始编译：!TS_CONFIG!
  call !COMMOND! -p !TS_CONFIG!
)
