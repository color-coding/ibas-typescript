@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                link_modules.bat
echo                     by niuren.zhu
echo                           2017.05.04
echo  ˵����
echo     1. ����ibasģ�鵽�ű�Ŀ¼��
echo     2. ����1��������Ŀ¼��Ĭ��..\..\..\��
echo ****************************************************************************
REM ���ò�������
REM ����Ŀ¼
SET STARTUP_FOLDER=%~dp0
REM ����Ĺ���Ŀ¼
SET WORK_FOLDER=%~1
REM �ж��Ƿ񴫹���Ŀ¼��û����������Ŀ¼
if "%WORK_FOLDER%"=="" SET WORK_FOLDER=%STARTUP_FOLDER%..\..\..\
REM ������Ŀ¼����ַ����ǡ�\������
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\

cd /d %WORK_FOLDER%
set WORK_FOLDER=%CD%
echo --����Ŀ¼��%WORK_FOLDER%
for /f %%l in ('dir /ad /b ibas.*') do (
  set MODULE_FOLDER=!WORK_FOLDER!\%%l
  cd /d !MODULE_FOLDER!
  echo ----ģ��Ŀ¼��!MODULE_FOLDER!
  for /f %%m in ('dir /s /ad /b webapp') do (
    set APP_FOLDER=%%m
    echo ------Ӧ��Ŀ¼��!APP_FOLDER!
REM ȡģ�������ַ���ibas.businessone.service\src\main\webapp
    call :MODULE_NAME !APP_FOLDER:~0,-24! !START_INDEX!
    if not exist %STARTUP_FOLDER%!MODULE_NAME! mklink /d %STARTUP_FOLDER%!MODULE_NAME! "!APP_FOLDER!"
  )
  cd /d %WORK_FOLDER%
)
cd /d %STARTUP_FOLDER%
goto :EOF
REM ��������ȡģ�����ƣ�����1���ַ�������MODULE_NAME����ֵ
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