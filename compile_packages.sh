#!/bin/sh
echo '****************************************************************************'
echo '             compile_packages.sh                                            '
echo '                      by niuren.zhu                                         '
echo '                           2016.06.17                                       '
echo '  说明：                                                                    '
echo '    1. 安装apache-maven，sudo apt-get install maven                         '
echo '    2. 解压apache-maven，并设置系统变量MAVEN_HOME为解压的程序目录。         '
echo '    3. 添加PATH变量到MAVEN_HOME\bin，并检查JAVE_HOME配置是否正确。          '
echo '    4. 运行提示符运行mvn -v 检查安装是否成功。                              '
echo '    5. 编译war包到release目录。                                             '
echo '****************************************************************************'
# 设置参数变量
cd `dirname $0`
WORK_FOLDER=${PWD}

echo --当前工作的目录是[${WORK_FOLDER}]
echo --清除项目缓存
if [ -e ${WORK_FOLDER}/release/ ]
then
  rm -rf ${WORK_FOLDER}/release/
fi
mkdir -p ${WORK_FOLDER}/release/
echo --开始编译
if [ -e ${WORK_FOLDER}/pom.xml ]
then
  mvn -q clean package -f ${WORK_FOLDER}/pom.xml
  if [ -e ${WORK_FOLDER}/target/*.war ]
  then
    cp -r ${WORK_FOLDER}/target/*.war ${WORK_FOLDER}/release
  fi
  if [ -d ${WORK_FOLDER}/target ]
  then
    rm -rf ${WORK_FOLDER}/target
  fi
fi

echo --编译完成
