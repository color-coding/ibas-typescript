@echo off
echo ***************************************************************************
echo      start_web_server_iis.bat
echo                     by niuren.zhu
echo                           2017.01.24
echo  说明：
echo     1. 启动web服务，IIS Express。
echo ****************************************************************************
REM 设置参数变量
SET WORK_FOLDER=%~dp0
SET WEB_SERVER="%ProgramFiles%\IIS Express\iisexpress.exe"
SET WEB_PORT=15386

if exist %WEB_SERVER% (
  call %WEB_SERVER% /path:%WORK_FOLDER% /port:%WEB_PORT%
) else (
  echo 您没有安装IIS Express!
  pause
)
