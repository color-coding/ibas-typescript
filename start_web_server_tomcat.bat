@echo off
echo ***************************************************************************
echo      start_web_server_tomcat.bat
echo                     by niuren.zhu
echo                           2017.02.21
echo  ˵����
echo     1. ����tomcat������Ĭ��·��.\tomcat\
echo     2. �ű��Զ�����Լ��·��tomcat�Ƿ����ڣ���ӳ�����뵽webappsĿ¼��
echo     3. �״�������Ҫ����ԱȨ�ޡ�
echo ****************************************************************************
REM ���ò�������
SET WORK_FOLDER=%~dp0
SET TOMCAT_FOLDER=%WORK_FOLDER%tomcat\
SET TOMCAT_APPS_FOLDER=%TOMCAT_FOLDER%webapps\
SET TOMCAT_START_SCRIPT=%TOMCAT_FOLDER%bin\startup.bat

if exist %TOMCAT_FOLDER% (
REM ���������Ƿ�ӳ��
if not exist "%TOMCAT_APPS_FOLDER%ts" (
  mklink /d "%TOMCAT_APPS_FOLDER%ts" "%WORK_FOLDER%"
)
REM ����tomcat
  cd "%TOMCAT_FOLDER%"
  call "%TOMCAT_START_SCRIPT%"
  cd "%WORK_FOLDER%"
) else (
  echo TOMCAT_FOLDER�����ڣ�
  pause
)
