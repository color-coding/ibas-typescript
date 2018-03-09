@echo off
setlocal EnableDelayedExpansion
echo ***************************************************************************
echo                build_all.bat
echo                     by niuren.zhu
echo                           2017.01.13
echo  ˵����
echo     1. �˽ű���Ҫ��Node.js command prompt�����С�
echo     2. ������ǰĿ¼��������Ŀ¼������tsconfig.json����롣
echo     3. ����1��tsc����������������磺-w����ʾ�����ļ��仯��
echo ****************************************************************************
REM ���ò�������
REM ����Ŀ¼
SET WORK_FOLDER=%~dp0
REM ������Ŀ¼����ַ����ǡ�\������
if "%WORK_FOLDER:~-1%" neq "\" SET WORK_FOLDER=%WORK_FOLDER%\
echo --������Ŀ¼��%WORK_FOLDER%
REM ��������
SET OPTIONS=%~1
REM ��������
SET COMMOND=tsc
if "%OPTIONS%" neq "" (
  SET COMMOND=start /min !COMMOND! %OPTIONS%
  echo ���!COMMOND!
)

REM ������Ŀ����
SET TS_CONFIGS=ibas\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% openui5\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% shell\tsconfig.loader.json
SET TS_CONFIGS=%TS_CONFIGS% shell\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% shell\bsui\c\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% shell\bsui\m\tsconfig.json
REM ����TT��Ŀ
SET TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\bsui\c\tsconfig.json
SET TS_CONFIGS=%TS_CONFIGS% test\apps\trainingtesting\bsui\m\tsconfig.json

FOR %%l IN (%TS_CONFIGS%) DO (
  SET TS_CONFIG=%%l
  echo --��ʼ���룺!TS_CONFIG!
  call !COMMOND! -p !TS_CONFIG!
)
