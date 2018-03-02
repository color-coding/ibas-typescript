#!/bin/sh
echo '****************************************************************************'
echo '              developing.sh                                                  '
echo '                      by niuren.zhu                                          '
echo '                           2017.12.08                                        '
echo '  说明：                                                                      '
echo '    1. 此脚本需要在Node.js下运行。                                              '
echo '    2. 监听并编译ibas目录文件。                                                 '
echo '    3. 监听并编译openui5/typings目录文件。                                      '
echo '    4. 监听并编译test/apps目录文件。                                            '
echo '****************************************************************************'
# 设置参数变量
# 启动目录
STARTUP_FOLDER=$(cd `dirname $0`; pwd)
# 工作目录默认第一个参数
WORK_FOLDER=$1
# 修正相对目录为启动目录
if [ "${WORK_FOLDER}" = "./" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}
fi
# 未提供工作目录，则取启动目录
if [ "${WORK_FOLDER}" = "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}
fi
echo --工作的目录：${WORK_FOLDER}

# 函数-启动监听
WATCHING_TS()
{
  CONFIG_FILE=$1
  echo ----监听: ${CONFIG_FILE}
  if [ -e ${CONFIG_FILE} ]
  then
    tsc -w -p ${CONFIG_FILE} & # '&'后台运行任务
  fi
}
# 函数-启动编译
COMPILE_TS()
{
  CONFIG_FILE=$1
  echo ----监听: ${CONFIG_FILE}
  if [ -e ${CONFIG_FILE} ]
  then
    tsc -p ${CONFIG_FILE}
  fi
}

# 启动监听
WATCHING_TS "${WORK_FOLDER}/ibas/tsconfig.json"
WATCHING_TS "${WORK_FOLDER}/openui5/tsconfig.json"
WATCHING_TS "${WORK_FOLDER}/shell/tsconfig.json"
WATCHING_TS "${WORK_FOLDER}/shell/tsconfig.ui.c.json"
WATCHING_TS "${WORK_FOLDER}/shell/tsconfig.ui.m.json"
# 启动编译
COMPILE_TS "${WORK_FOLDER}/shell/tsconfig.loader.json"
COMPILE_TS "${WORK_FOLDER}/test/basic/tsconfig.json"

# 启动tomcat
WEB_SERVER="${WORK_FOLDER}/tomcat/bin/startup.sh"
if [ -e ${WEB_SERVER} ] && [ -x ${WEB_SERVER} ]
then
    ${WEB_SERVER}
fi