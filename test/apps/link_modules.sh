#!/bin/bash
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
if [ "${WORK_FOLDER}" == "" ]
then
  WORK_FOLDER=${STARTUP_FOLDER}/../../..
fi

# 直接指定地址了，懒得写活了
ln -sd ${WORK_FOLDER}/ibas.initialfantasy/ibas.initialfantasy.service/src/main/webapp initialfantasy
ln -sd ${WORK_FOLDER}/ibas.integration/ibas.integration.service/src/main/webapp integration
ln -sd ${WORK_FOLDER}/ibas.importexport/ibas.importexport.service/src/main/webapp importexport
ln -sd ${WORK_FOLDER}/ibas.documents/ibas.documents.service/src/main/webapp documents
ln -sd ${WORK_FOLDER}/ibas.reportanalysis/ibas.reportanalysis.service/src/main/webapp reportanalysis
ln -sd ${WORK_FOLDER}/ibas.reportanalysis/ibas.businessobjectsenterprise.service/src/main/webapp businessobjectsenterprise
ln -sd ${WORK_FOLDER}/ibas.businessone/ibas.businessone.service/src/main/webapp businessone
ln -sd ${WORK_FOLDER}/ibas.materials/ibas.materials.service/src/main/webapp materials
ln -sd ${WORK_FOLDER}/ibas.tucao/ibas.tucao.service/src/main/webapp tucao
