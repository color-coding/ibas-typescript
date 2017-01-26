#!/bin/bash
echo '****************************************************************************'
echo '              build_all.sh                                                  '
echo '                      by niuren.zhu                                         '
echo '                           2016.06.17                                       '
echo '  说明：                                                                     '
echo '    1. 此脚本需要在Node.js下运行。                                             '
echo '    2. 遍历当前目录下所有子目录，存在tsconfig.json则编译。                        '
echo '    3. 参数1，编译的目录，“./”表示当前。                                        '
echo '    4. 参数2，tsc命令的其他参数，如：-w，表示监听文件变化。                         '
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
# 其他参数
OPTIONS=$2
COMMOND=tsc
if [ "${OPTIONS}" != "" ]
then
  COMMOND="bash ${COMMOND} ${OPTIONS}"
  echo 命令：${COMMOND}
fi

# 遍历当前目录存在tsconfig.json则执行tsc
for folder in `find ${WORK_FOLDER} -type f -name "*tsconfig.json*"`
do
  folder=${folder%\/*}
  echo --开始编译：${folder}
  eval "${COMMOND} -p ${folder}"
done
