#!/bin/bash
echo '****************************************************************************'
echo '              link_modules.sh                                               '
echo '                      by niuren.zhu                                         '
echo '                           2017.05.04                                       '
echo '  说明：                                                                    '
echo '    1. 链接ibas模块到脚本目录。                                             '
echo '    2. 参数1，遍历的目录，默认..\..\..\。                                   '
echo '****************************************************************************'
# 设置参数变量
# 启动目录
STARTUP_FOLDER=`pwd`
# 工作目录默认第一个参数
WORK_FOLDER=$1
# 未提供工作目录，则取启动目录
if [ "${WORK_FOLDER}" == "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}../../../
fi

# 直接指定地址了，懒得写活了
ln -s ${WORK_FOLDER}/ibas.initialfantasy/ibas.initialfantasy.service/src/main/webapp initialfantasy
ln -s ${WORK_FOLDER}/ibas.importexport/ibas.importexport.service/src/main/webapp importexport
ln -s ${WORK_FOLDER}/ibas.reportanalysis/ibas.reportanalysis.service/src/main/webapp reportanalysis