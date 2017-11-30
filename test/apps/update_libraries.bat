@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                update_libraries.bat
echo                     by niuren.zhu
echo                           2017.11.28
echo  ˵����
echo     1. ����ģ��api������ģ�顣
echo     2. ����1������Ŀ¼��
echo     3. ע�⣬��ǰִ��link_modules.bat���Ӻ�ģ�顣
echo ****************************************************************************
REM ���ò�������
REM ����Ŀ¼
SET STARTUP_FOLDER=%~dp0
REM ����Ĺ���Ŀ¼
SET WORK_FOLDER=%~1
REM �ж��Ƿ񴫹���Ŀ¼��û����������Ŀ¼
if "%WORK_FOLDER%"=="" SET WORK_FOLDER=%STARTUP_FOLDER%
REM ������Ŀ¼����ַ����ǡ�\������
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\

cd /d %WORK_FOLDER%
set WORK_FOLDER=%CD%
echo --����Ŀ¼��%WORK_FOLDER%
for /f %%n in ('dir /ad /b "%WORK_FOLDER%"') do (
  set MODULE_FOLDER=%WORK_FOLDER%\%%n
  if exist !MODULE_FOLDER!\api (
REM ����api
    echo ----���[%%n]������
      for /f %%m in ('dir /ad /b') do (
        set APP_FOLDER=%WORK_FOLDER%\%%m
        if exist !APP_FOLDER!\3rdparty\%%n (
REM ��������
          echo ------����[%%m]������
          rd /s /q !APP_FOLDER!\3rdparty\%%n
          xcopy /s /y /i /q !MODULE_FOLDER!\api !APP_FOLDER!\3rdparty\%%n >nul
        )
      )
  )
)
cd /d %STARTUP_FOLDER%