@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo            compile_packages.bat
echo                     by niuren.zhu
echo                           2016.06.19
echo  说明：
echo     1. 安装apache-maven，下载地址http://maven.apache.org/download.cgi。
echo     2. 解压apache-maven，并设置系统变量MAVEN_HOME为解压的程序目录。
echo     3. 添加PATH变量到%%MAVEN_HOME%%\bin，并检查JAVA_HOME配置是否正确。
echo     4. 运行提示符运行mvn -v 检查安装是否成功。
echo     5. 编译war包到release目录。
echo ****************************************************************************
REM 设置参数变量
SET WORK_FOLDER=%~dp0
SET h=%time:~0,2%
SET hh=%h: =0%
SET OPNAME=%date:~0,4%%date:~5,2%%date:~8,2%_%hh%%time:~3,2%%time:~6,2%
SET LOGFILE=%WORK_FOLDER%compile_packages_log_%OPNAME%.txt

echo --当前工作的目录是[%WORK_FOLDER%]
echo --清除项目缓存
if exist %WORK_FOLDER%release\ rd /s /q %WORK_FOLDER%release\
if not exist %WORK_FOLDER%release md %WORK_FOLDER%release
echo --开始编译
if exist %WORK_FOLDER%pom.xml (
  call "%MAVEN_HOME%\bin\mvn" clean package -f %WORK_FOLDER%pom.xml >>%LOGFILE%
  if exist %WORK_FOLDER%\target\*.war copy /y %WORK_FOLDER%\target\*.war %WORK_FOLDER%release\ >>%LOGFILE%
  if exist %WORK_FOLDER%\target\ rd /s /q %WORK_FOLDER%\target\ >>%LOGFILE%
)

echo --编译完成，更多信息请查看[compile_packages_log_%OPNAME%.txt]
