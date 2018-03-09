#!/bin/sh
echo '****************************************************************************'
echo '              link_modules.sh                                               '
echo '                      by niuren.zhu                                         '
echo '                           2017.05.04                                       '
echo '  说明：                                                                    '
echo '    1. 链接ibas模块到脚本目录。                                             '
echo '    2. 参数1，遍历的目录，默认../../../。                                   '
echo '****************************************************************************'
# 设置参数变量
# 启动目录
STARTUP_FOLDER=`pwd`
# 工作目录默认第一个参数
WORK_FOLDER=$1
# 未提供工作目录，则取启动目录
if [ "${WORK_FOLDER}" = "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}/../../..
fi

cd ${WORK_FOLDER}
WORK_FOLDER=`pwd`
echo --工作目录：${WORK_FOLDER}
for folder in `ls -l ${WORK_FOLDER} | awk '/ibas\./ {print $NF}'`
do
  echo ----模块目录：${folder}
  for app in `find ${folder} -type d -name webapp`
  do
    echo ------应用目录：${app}
     if [ -e "${app}/3rdparty" ]
     then
        module_name=${app##*/ibas.}
        module_name=${module_name%%.service/src/main/webapp*}
        if [ ! -e "${STARTUP_FOLDER}/${module_name}" ]
        then
            cd ${STARTUP_FOLDER}
            ln -s "${WORK_FOLDER}/${app}" ${module_name} > /dev/null
# 检查库符号链接
            cd "${WORK_FOLDER}/${app}/3rdparty/"
            if [ ! -e "./ibas" ]
            then
              ln -s "${STARTUP_FOLDER}/../../ibas" ibas > /dev/null
            fi;
            if [ ! -e "./shell" ]
            then
              ln -s "${STARTUP_FOLDER}/../../shell" shell > /dev/null
            fi;
            if [ ! -e "./openui5" ]
            then
              ln -s "${STARTUP_FOLDER}/../../openui5" openui5 > /dev/null
            fi;
            cd ${WORK_FOLDER}
        fi;
     fi;
  done
done
