#!/bin/sh
echo '****************************************************************************'
echo '              build_all.sh                                                  '
echo '                      by niuren.zhu                                         '
echo '                           2016.06.17                                       '
echo '  说明：                                                                    '
echo '    1. 此脚本需要在Node.js下运行。                                          '
echo '    2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。                  '
echo '    3. 参数1，tsc命令的其他参数，如：-w，表示监听文件变化。                 '
echo '****************************************************************************'
# 设置参数变量
# 工作目录
WORK_FOLDER=$(cd `dirname $0`; pwd)
echo --工作的目录：${WORK_FOLDER}
# 其他参数
OPTIONS=$1
COMMOND=tsc

# 编译项目配置
TS_CONFIGS="ibas/tsconfig.json"
TS_CONFIGS="${TS_CONFIGS} openui5/tsconfig.json"
TS_CONFIGS="${TS_CONFIGS} shell/loader.json"
TS_CONFIGS="${TS_CONFIGS} shell/tsconfig.json"
TS_CONFIGS="${TS_CONFIGS} shell/tsconfig.ui.c.json"
TS_CONFIGS="${TS_CONFIGS} shell/tsconfig.ui.m.json"

# 执行编译指令
for TS_CONFIG in `echo ${TS_CONFIGS}`
do
  echo --开始编译：${TS_CONFIG}
# 运行编译命令
  if [ "${OPTIONS}" != "" ]
  then
# 包括监听参数，后台运行命令
    ${COMMOND} ${OPTIONS} -p ${TS_CONFIG} &
  else
    ${COMMOND} -p ${TS_CONFIG}
  fi
done

# 编译TT项目
if [ -x "test/apps/trainingtesting/build_all.sh" ]
then
  ROOT_FOLDER=${WORK_FOLDER}
  cd "./test/apps/trainingtesting"
  ./build_all.sh ${OPTIONS}
  cd ${ROOT_FOLDER}
fi
