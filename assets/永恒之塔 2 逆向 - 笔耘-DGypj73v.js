const n=`---
id: 6
year: 2026
instructor: 笔耘
image: >-
  https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2d562fe831487f01190ef77c6c7b8?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
updating: true
category: 逆向工程
rating: 4.7
reviews: '320'
hasQAGroup: true
tags:
  - 逆向工程
  - 游戏安全
  - 虚幻引擎
description: >-
  针对永恒之塔 2（Tarisland）的虚幻引擎逆向课程，覆盖 UE 三大件、SDK Dump、玩家数据、世界遍历、寻路、任务系统、采集与技能等完整功能分析与实现。
reviewCount: 320+
studentCount: '1,580'
---

本课程围绕永恒之塔 2 游戏客户端，从虚幻引擎三大件获取、SDK Dump 到玩家数据分析、世界遍历、寻路系统、任务系统、采集与技能遍历，系统讲解 UE 游戏逆向分析与功能实现的完整流程，持续更新中。

## 亮点

- 虚幻引擎三大件获取与 GetName 源码级分析
- SDK Dump、世界遍历、明文发包等核心技术
- 任务系统十四节深度拆解，覆盖完整任务链路
- 寻路、采集、技能遍历等实战功能从分析到实现

## 包含

- Clock | 持续更新，内容不断增加
- BarChart | 中级到高级
- Infinity | 终身访问权限
- MessageCircle | 专属答疑群

## 大纲

### 第 1 阶段: UE 基础与 SDK Dump

- 虚幻引擎三大件获取的3种方法
- DumpSdk
- FName查找
- GetName源码分析
- GetName汇编代码分析
- GetName实现
- UObjectArray查找
- GWorld查找

### 第 2 阶段: 玩家数据与世界遍历

- 游戏玩家指针查找
- 玩家坐标分析
- 世界遍历
- 明文发包分析
- StaticFindObject查找
- StaticFindObject实现

### 第 3 阶段: 自动寻路

- 自动寻路功能查找
- 自动寻路功能第一个参数分析
- 寻路功能实现
- 第二种寻路方式
- 第二种寻路参数分析
- 自动寻路功能实现

### 第 4 阶段: 任务系统

- QuestSystem查找
- 任务分析（一）
- 任务分析（二）
- 任务分析（三）
- 任务分析（四）
- 任务分析（五）
- 任务分析（六）
- 任务分析（七）
- 任务分析（八）
- 任务分析（九）
- 任务分析（十）
- 任务分析（十一）
- 任务分析（十二）
- 任务分析（十三）
- 任务分析（十四）

### 第 5 阶段: 采集与技能

- 实现周围遍历
- 采集物ID查找
- 采集call查找
- 采集物名称分析
- 技能遍历查找（一）
- 技能遍历查找（二）
- 实现技能遍历
- 技能名称查找
- 取技能名称实现

## 资料

- 课程配套源代码与工具 | 压缩包
`;export{n as default};
