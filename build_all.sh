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
WORK_FOLDER=`pwd`

# 遍历当前目录存在tsconfig.json则执行tsc
for folder in `find . -type f -name "*tsconfig.json*"` 
do
  folder=${folder%\/*}
  echo --开始编译：${folder}
  cd ${folder}
  tsc
  cd ${WORK_FOLDER}
done