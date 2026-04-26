const n=`---
id: 7
year: 2025
instructor: 笔耘
image: >-
  https://bkimg.cdn.bcebos.com/pic/03087bf40ad162d9f2d3c4f7688bbeec8a1362276799?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
updating: false
category: 逆向工程
rating: 4.8
reviews: '520'
hasQAGroup: true
tags:
  - 逆向工程
  - Unity
  - ImGui
description: 覆盖 Unity 安装、DX11 Hook、ImGui 绘制、UnitySdk 生成、对象遍历、骨骼透视，以及第二章的背包、寻路、选服选角和任务等功能分析。
reviewCount: 520+
studentCount: '2,840'
---

这套 Unity 课程分为两大章节。第一章包含 31 个视频，重点是 Unity 逆向基础、DX11 Hook、ImGui、UnitySdk、对象系统、骨骼透视和自瞄逻辑；第二章包含 24 个视频，偏向具体游戏功能分析与实现。

整体内容不是停留在理论层面，而是从 Hook 和 SDK 生成开始，一直推进到对象遍历、坐标绘制、队伍识别、骨骼透视、雷达、自瞄，再到背包、寻路、选服、选角、任务与维修等实战功能，适合做 Unity 游戏逆向的系统入门和落地开发参考。

## 亮点

- 两大章节，共 55 个视频内容
- 第一章覆盖 DX11 Hook、ImGui、UnitySdk、对象遍历、骨骼透视和自瞄
- 第二章覆盖 DumpSdk、全局对象/函数、人物血量、怪物遍历、背包和寻路
- 包含选择服务器、角色选择、创建角色、任务和维修等功能分析
- 配有 UnityDemo、源码压缩包和演示视频，适合边看边做

## 包含

- Clock | 55 节视频课程
- BarChart | 从基础绘制到游戏功能分析
- Award | 含 Hook、Sdk、骨骼、自瞄与功能实现
- Infinity | 支持长期回看
- MessageCircle | 购买后可联系 QQ 咨询

## 大纲

### 第 1 阶段: Unity 基础、Hook 与绘制链路

- Unity安装 | 环境
- Unity遍历场景所有对象 | 对象
- 分析Dx11Hook函数 | Hook
- 手撸DxHook库 | Hook
- 实现Hook挂接回调函数 | Hook
- 创建ImGui窗口 | ImGui
- 静态生成UnitySdk | SDK
- 获取unity模块导出函数 | 导出
- 获取unity类methond的方法 | Method
- 取FindObjectsOfType函数地址 | 地址
- 遍历游戏对象 | 遍历
- 输出对象的ClassName和NameSpace | 类型
- WorldToScreen | 坐标
- 获取对象坐标绘制到屏幕 | 绘制
- 查找队伍数组 | 队伍
- 编写队伍数组遍历 | 队伍
- 查找GameObjectManager | GOM
- Gom链表结构讲解 | GOM
- 编写Gom | GOM

### 第 2 阶段: 骨骼透视、雷达与自瞄实战

- 获取骨骼信息 | 骨骼
- 绘制敌方头部骨骼 | 骨骼
- 实现骨骼透视 | 透视
- 实现血量绘制 | 血量
- 绘制敌方朝向 | 绘制
- 绘制敌方名字 | 绘制
- 绘制2D雷达 | 雷达
- 碰撞检测 | 检测
- 自瞄逻辑分析 | 自瞄
- 内存自瞄实现 | 自瞄
- 静默自瞄+子弹追踪 | 高阶
- 演示视频 | 演示

### 第 3 阶段: 第二章对象系统、血量与怪物遍历

- DumpSdk | SDK
- Gom查找 | GOM
- 代码实现全局对象遍历 | 遍历
- 代码实现全局函数遍历 | 遍历
- 人物血量分析 | 血量
- 代码实现人物血量和坐标 | 坐标
- 周围怪物遍历分析 | 怪物
- 代码遍历周围怪物 | 怪物
- 代码实现获取对象坐标获取 | 坐标

### 第 4 阶段: 背包、寻路、选服选角与任务功能

- 打开背包功能 | 背包
- 背包整理堆叠功能 | 背包
- 查找背包数组 | 背包
- 代码遍历背包数组 | 背包
- 寻路功能查找 | 寻路
- 代码实现寻路功能 | 寻路
- 选择服务器功能分析 | 选服
- 代码实现选择服务器功能 | 选服
- 选择角色功能分析 | 选角
- 代码实现角色选择功能 | 选角
- 任务功能分析 | 任务
- 创建角色选择卡功能 | 创角
- 进入创建角色界面功能 | 创角
- 创建角色起名功能 | 创角
- 维修功能 | 维修

## 资料

- 第一章 UnityDemo 系列压缩包 | 配套工程
- ShootHouseV1.34_PC | 练习样本
- 第二章源码.rar | 配套源码
- 第一章演示视频 | 演示资料
- FFOutput 转码视频文件 | 备份视频

## 讲师

- 姓名: 笔耘
- 头衔: 逆向工程讲师 / 游戏安全研究员
- 简介: 课小猫的秘密宝箱收录讲师，课程偏重 Unity 游戏逆向实战，覆盖 Hook、Sdk、对象系统、骨骼透视、自瞄和功能开发等完整链路。
- 头像: https://lh3.googleusercontent.com/aida-public/AB6AXuBU5Epy6jC5CurzTsOBv1a1AfrMlDBdqxUELTKYOCLVvqfSEaKr2tErllmvMwBEz_DrXtOoMkERICWtBsbhbrW7sv4chtm4peU1G7LpvdMzGzccr8P1YEk6lWd1yz-RhSWQFAZPoNmtAjD5UBlMhGaFnjDX9V6WhuXBsmaUrfGXpFgLc7-NjwxbXJPzQbZ3Vc8nF0rMbEXQRcInt_r9iv4BuS1amcDac3O6Vmmr9APUyuBYyxaJq6k-tFgOq-A04jgrT0js1uktuHx2
`;export{n as default};
