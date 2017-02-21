#!/bin/bash
echo '****************************************************************************'
echo '              start_web_server_tomcat.sh                                    '
echo '                      by niuren.zhu                                         '
echo '                           2017.02.21                                       '
echo '  说明：                                                                    '
echo '    1. 启动tomcat服务，默认路径.\tomcat\                                    '
echo '    2. 脚本自动检查约定路径tomcat是否存在，并映射代码到webapps目录。        '
echo '    3. 首次运行需要管理员权限。                                             '
echo '****************************************************************************'
# 设置参数变量
WORK_FOLDER=`pwd`
TOMCAT_FOLDER=${WORK_FOLDER}/tomcat
TOMCAT_APPS_FOLDER=${TOMCAT_FOLDER}/webapps
TOMCAT_START_SCRIPT=${TOMCAT_FOLDER}/bin/startup.sh

if [ -e "${TOMCAT_FOLDER}" ]
then
# 检查程序是否映射
  if [ ! -e "${TOMCAT_APPS_FOLDER}/ts" ]
  then
  echo "${TOMCAT_APPS_FOLDER}/ts"
    ln -s -d "${WORK_FOLDER}" "${TOMCAT_APPS_FOLDER}/ts"
  fi
  "${TOMCAT_START_SCRIPT}"
else
  echo %TOMCAT_FOLDER%不存在！
fi
