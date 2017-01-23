#!/bin/bash
echo '****************************************************************************'
echo '              build_all.sh                                                  '
echo '                      by niuren.zhu                                         '
echo '                           2016.06.17                                       '
echo '  说明：                                                                     '
echo '    1. 此脚本需要在Node.js下运行。                                             '
echo '    2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。                        '
echo '****************************************************************************'
# 设置参数变量
# 启动目录
STARTUP_FOLDER=`pwd`
# 工作目录默认第一个参数
WORK_FOLDER=$1
# 未提供工作目录，则取启动目录
if [ "${WORK_FOLDER}" == "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}
fi

# 遍历当前目录存在tsconfig.json则执行tsc
for folder in `find ${WORK_FOLDER} -type f -name "*tsconfig.json*"`
do
  folder=${folder%\/*}
  echo --开始编译：${folder}
  tsc -p ${folder}
done
