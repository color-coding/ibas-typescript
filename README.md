<div align="center">

# IBAS TypeScript

**IBAS 业务系统前端架构**

基于 TypeScript + SAP OpenUI5 的企业级 ERP 前端框架，配合 ibas-framework 服务端，提供完整的业务应用前端解决方案。

Enterprise-grade ERP frontend framework built on TypeScript + SAP OpenUI5, designed to work with ibas-framework backend.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-3.x-blue.svg)](https://www.typescriptlang.org/)
[![OpenUI5](https://img.shields.io/badge/OpenUI5-SAP-blue.svg)](https://openui5.org/)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](pom.xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-贡献--contributing)

</div>

---

## 📖 目录 | Table of Contents

- [✨ 特性 | Features](#-特性--features)
- [📦 项目结构 | Project Structure](#-项目结构--project-structure)
- [🚀 快速开始 | Quick Start](#-快速开始--quick-start)
- [⚙️ 配置说明 | Configuration](#️-配置说明--configuration)
- [📖 入口说明 | Entry Points](#-入口说明--entry-points)
- [📚 相关项目 | Related Projects](#-相关项目--related-projects)
- [🤝 贡献 | Contributing](#-贡献--contributing)
- [📄 许可证 | License](#-许可证--license)
- [🙏 鸣谢 | Thanks](#-鸣谢--thanks)

---

## ✨ 特性 | Features

- **🎨 SAP OpenUI5 集成** — 基于 SAP OpenUI5 控件库，提供丰富的企业级 UI 组件
- **📐 分层架构** — Shell 应用容器 → 业务应用 → 应用基础库 → 业务对象基础库 → OpenUI5
- **📦 模块化设计** — ibas 库、bsbas 应用基础库、bobas 业务对象基础库分层组织
- **🔄 TypeScript 强类型** — 前端全程 TypeScript 开发，编译时类型检查
- **🔌 第三方库扩展** — 3rdparty 目录管理第三方 JS 库，附带 `.d.ts` 类型声明
- **🐳 应用容器** — Shell 提供路由、配置、模块加载的应用容器能力
- **🔧 热重载开发** — 支持 `-w` 监听模式，文件变化自动编译
- **🌍 多环境支持** — 开发环境（缓存）与生产环境（无缓存）双入口

---

## 📦 项目结构 | Project Structure

| 目录 | 说明 |
|------|------|
| `ibas/` | ibas 库相关 |
| `ibas/3rdparty/` | 第三方库，其中 JS 库需定义 `.d.ts` 类型声明文件 |
| `ibas/bobas/` | 业务对象基础库（前端 BO 映射） |
| `ibas/bsbas/` | 应用基础库（应用框架） |
| `shell/` | 应用容器（入口、路由、配置） |
| `openui5/` | OpenUI5 相关 |
| `openui5/types/` | OpenUI5 库声明 |
| `openui5/resources/` | OpenUI5 库（需自行下载维护） |
| `test/apps/` | 应用模块相关 |
| `test/repository/` | 离线的业务仓库目录 |

### 前端分层架构

```
┌─────────────────────────────────────────┐
│           Shell（应用容器）               │  入口、路由、配置
├─────────────────────────────────────────┤
│         Business Apps（业务应用）         │  具体业务 UI
├─────────────────────────────────────────┤
│    ibas/bsbas（应用基础库）               │  应用框架
├─────────────────────────────────────────┤
│    ibas/bobas（业务对象基础库）            │  前端 BO 映射
├─────────────────────────────────────────┤
│    OpenUI5（UI 控件库）                   │  SAP UI 框架
└─────────────────────────────────────────┘
```

---

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- **Node.js** + tsc（TypeScript 编译器）
- **OpenUI5** — 从 [openui5.org/download.html](http://openui5.org/download.html) 下载，放置到 `openui5/resources/` 目录
- 建议使用 **VS Code** 开发，安装 **TSLint** 插件（代码检查）

### 构建 | Build

```bash
# 克隆仓库
git clone https://github.com/color-coding/ibas-typescript.git
cd ibas-typescript

# 编译 TypeScript 文件
./build_all.sh                    # Linux / macOS
build_all.bat                     # Windows

# 编译并监听文件变化（热重载开发）
./build_all.sh -w

# 构建 WAR 包
./compile_packages.sh

# 链接其他模块到本目录
test/apps/link_modules.sh

# 更新模块 API 到引用的模块（需先运行 link_modules）
test/apps/update_libraries.sh
```

---

## ⚙️ 配置说明 | Configuration

配置文件采用分层加载策略，后加载的配置会覆盖先加载的：

```
1. 首先加载 ibas/config.json
2. 然后加载 index.html 所在目录的 config.json
3. 后面加载的配置会替换前面的
```

### 脚本说明 | Scripts

| 脚本 | 说明 |
|------|------|
| `build_all.bat/sh` | 编译 TypeScript 文件，`-w` 参数表示编译并监听文件变化 |
| `test/apps/link_modules.bat/sh` | 链接其他模块到此目录 |
| `test/apps/update_libraries.bat/sh` | 更新模块 API 到引用的模块（需先运行 link_modules） |

---

## 📖 入口说明 | Entry Points

| 入口 | 说明 |
|------|------|
| `shell/index.html` | 使用缓存的入口，一般用于**开发环境** |
| `index.html` | 不使用缓存的入口，一般用于**生产环境** |
| `ibas/diagnosis/index.html` | 诊断页面，用于检查运行环境 |

---

## 📚 相关项目 | Related Projects

| 项目 | 说明 |
|------|------|
| [ibas-framework](https://github.com/color-coding/ibas-framework) | BOBAS 业务对象框架，本前端的服务端 |
| [btulz.transforms](https://github.com/color-coding/btulz.transforms) | 代码生成工具，可生成前端 TypeScript 代码 |

---

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证 | License

本项目基于 [Apache License 2.0](LICENSE) 开源。
---

## 🙏 鸣谢 | Thanks

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/NiurenZhu">牛加人等于朱</a><br>
      <sub>NiurenZhu</sub>
    </td>
    <td align="center">
      <a href="https://github.com/neilzhou0309">老周</a><br>
      <sub>neilzhou0309</sub>
    </td>
    <td align="center">
      <a href="https://github.com/cyitianyou">昌昌</a><br>
      <sub>cyitianyou</sub>
    </td>
  </tr>
</table>

<div align="center">

**[Color-Coding Studio](http://colorcoding.org/)** · 咔啦工作室

</div>
