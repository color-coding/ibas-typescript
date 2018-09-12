#!/bin/sh
echo '****************************************************************************'
echo '              update_libraries.sh                                           '
echo '                      by niuren.zhu                                         '
echo '                           2017.11.28                                       '
echo '  说明：                                                                    '
echo '    1. 更新模块api到各个模块。                                              '
echo '    2. 参数1，工作目录。                                                    '
echo '    3. 注意，提前执行link_modules.sh链接好模块。                            '
echo '****************************************************************************'
# 设置参数变量
# 启动目录
STARTUP_FOLDER=`pwd`
# 工作目录默认第一个参数
WORK_FOLDER=$1
# 未提供工作目录，则取启动目录
if [ "${WORK_FOLDER}" = "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}
fi

cd ${WORK_FOLDER}
WORK_FOLDER=`pwd`
echo --工作目录：${WORK_FOLDER}
for module in `ls -l ${WORK_FOLDER}`
do
  if [ -e "${WORK_FOLDER}/${module}/api" ]
  then
# 存在api
    echo ----检查[${module}]的引用
    for app in `ls -l ${WORK_FOLDER}`
    do
      if [ -e "${WORK_FOLDER}/${app}/3rdparty/${module}/index.ts" ]
      then
# 存在引用
        echo ------更新[${app}]的引用
        rm -rf "${WORK_FOLDER}/${app}/3rdparty/${module}"
        cp -rf "${WORK_FOLDER}/${module}/api" "${WORK_FOLDER}/${app}/3rdparty/${module}"
      fi
    done
  fi
  if [ -e "${WORK_FOLDER}/${module}/index.d.ts" ]
  then
# 存在index.d.ts
    echo ----检查[${module}]的声明
    for app in `ls -l ${WORK_FOLDER}`
    do
      if [ -e "${WORK_FOLDER}/${app}/3rdparty/${module}/index.d.ts" ]
      then
# 存在声明
        echo ------更新[${app}]的声明
        cp -f "${WORK_FOLDER}/${module}/index.d.ts" "${WORK_FOLDER}/${app}/3rdparty/${module}/index.d.ts"
      fi
    done
  fi
done
cd ${STARTUP_FOLDER}
