@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                build_all.bat
echo                     by niuren.zhu
echo                           2017.01.13
echo  说明：
echo     1. 此脚本需要在Node.js command prompt下运行。
echo     2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。
echo ****************************************************************************
REM 设置参数变量
SET WORK_FOLDER=%~dp0

for /f %%l in ('dir /s /b "%WORK_FOLDER%tsconfig.json"') DO (
  echo --开始编译：%%~dpl
REM 改变工作目录
  cd /d %%~dpl
  call tsc
)
REM 重置运行目录
cd /d %WORK_FOLDER%