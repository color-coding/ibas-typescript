@echo off
echo ***************************************************************************
echo      start_web_server_tomcat.bat
echo                     by niuren.zhu
echo                           2017.02.21
echo  说明：
echo     1. 启动tomcat服务，默认路径.\tomcat\
echo     2. 脚本自动检查约定路径tomcat是否存在，并映射代码到webapps目录。
echo     3. 首次运行需要管理员权限。
echo ****************************************************************************
REM 设置参数变量
SET WORK_FOLDER=%~dp0
SET TOMCAT_FOLDER=%WORK_FOLDER%tomcat\
SET TOMCAT_APPS_FOLDER=%TOMCAT_FOLDER%webapps\
SET TOMCAT_START_SCRIPT=%TOMCAT_FOLDER%bin\startup.bat

if exist %TOMCAT_FOLDER% (
REM 检查程序是否映射

 if not exist "%TOMCAT_APPS_FOLDER%ROOT" (
   mklink /d "%TOMCAT_APPS_FOLDER%ROOT" "%WORK_FOLDER%"
 )
REM 启动tomcat
  cd "%TOMCAT_FOLDER%"
  call "%TOMCAT_START_SCRIPT%"
  cd "%WORK_FOLDER%"
) else (
  echo TOMCAT_FOLDER不存在！
  pause
)
