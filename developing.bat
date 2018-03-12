@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                developing.bat
echo                     by niuren.zhu
echo                           2017.11.06
echo  ˵����
echo     1. �˽ű���Ҫ��Node.js command prompt�����С�
echo     2. ����������ibasĿ¼�ļ���
echo     3. ����������openui5\typingsĿ¼�ļ���
echo     4. ����������test\appsĿ¼�ļ���
echo     5. ����web����
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
echo --����Ŀ¼��%WORK_FOLDER%
REM ��������
REM CALL :WATCHING_TS "%WORK_FOLDER%ibas\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%openui5\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.ui.c.json"
REM CALL :WATCHING_TS "%WORK_FOLDER%shell\tsconfig.ui.m.json"
REM ��������
CALL :COMPILE_TS "%WORK_FOLDER%ibas\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%openui5\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.ui.c.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.ui.m.json"
CALL :COMPILE_TS "%WORK_FOLDER%shell\tsconfig.loader.json"
REM ��������ģ��
echo --����Ӧ��Ŀ¼
for /f %%m in ('dir /b /al %WORK_FOLDER%\test\apps\') DO (
  SET FOLDER=%WORK_FOLDER%\test\apps\%%m
  SET BUILDER=!FOLDER!\build_all.bat
  if EXIST !BUILDER! (
    cd /d !FOLDER!
    CALL "!BUILDER!" -w
  )
)
cd /d %WORK_FOLDER%

ECHO ����WEB SERVER
REM ���IIS EXPRESS
SET WEB_SERVER="%ProgramFiles%\IIS Express\iisexpress.exe"
SET WEB_PORT=15386
IF EXIST %WEB_SERVER% (
  ECHO --��⵽[IIS EXPRESS]����
  SET /p DONE=[Y]-����:
  IF /i "!DONE!"=="y" (
    START /min CALL %WEB_SERVER% /path:%WORK_FOLDER% /port:%WEB_PORT%
    ECHO --������[IIS EXPRESS]���˿�[%WEB_PORT%]������Ŀ¼[%WORK_FOLDER%]
    GOTO :EOF
  )
)
REM ���TOMCAT
SET WEB_SERVER="%WORK_FOLDER%tomcat\bin\startup.bat"
IF EXIST %WEB_SERVER% (
  ECHO --��⵽[TOMCAT]����
  SET /p DONE=[Y]-����:
  IF /i "!DONE!"=="y" (
    CALL %WEB_SERVER%
    GOTO :EOF
  )
)
GOTO :EOF

:WATCHING_TS
SET CONFIG_FILE=%1
echo ----����: %CONFIG_FILE%
IF EXIST %CONFIG_FILE% START /min tsc -w -p %CONFIG_FILE%
GOTO :EOF
:COMPILE_TS
SET CONFIG_FILE=%1
echo ----����: %CONFIG_FILE%
IF EXIST %CONFIG_FILE% tsc -p %CONFIG_FILE%
GOTO :EOF
