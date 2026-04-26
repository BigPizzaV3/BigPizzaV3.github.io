const n=`---
id: 5
year: 2025
subtitle: 实战游戏：人渣、喋血复仇、SJZ、PUBG、三角洲、无畏契约
instructor: uintptr
image: >-
  https://bkimg.cdn.bcebos.com/pic/bd315c6034a85edf8db1ea2c2a1f1e23dd54564edf23?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
updating: false
category: 逆向工程
rating: 5.0
reviews: '680'
hasQAGroup: true
tags:
  - 逆向工程
  - 虚幻引擎
  - 游戏安全
description: >-
  以人渣、喋血复仇、SJZ、PUBG、三角洲、无畏契约等热门游戏为实例，从虚幻引擎基础到 SDK Dump、解密与项目实战，系统掌握 UE
  逆向全流程。课程提供读写与注入驱动、驱动CE以及虚幻外部框架。
reviewCount: 680+
studentCount: '3,260'
---

本课程以多款热门虚幻引擎游戏为实战案例，从引擎结构认知、反射体系、SDK Dump 到多款游戏的解密实战与完整项目开发，系统讲解虚幻引擎逆向全流程。课程提供读写与注入驱动、驱动CE 以及虚幻外部框架，内容也会随课程更新持续扩展。

## 亮点

- 虚幻引擎结构解析与 ida 符号分析
- 透视、自瞄、骨骼绘制等功能完整实现
- PUBG / SJZ / 三角洲 / 无畏契约 多游戏 SDK Dump 与解密
- 提供读写注入驱动、驱动CE、虚幻外部框架

## 包含

- Clock | 持续更新，内容不断增加
- BarChart | 零基础到高级
- Infinity | 终身访问权限
- MessageCircle | 专属答疑群

## 大纲

### 第 1 阶段: 基础篇 · 虚幻基础入门 — 小试牛刀

- 了解 UnrealEngine 的结构
- UE 的成员分别在游戏中充当什么角色
- 配置 UnrealEngine 环境生成 ida 符号
- GEngine / Gworld / GObject / Gname / TArray 结构与宏构
- Gworld 在 ida 中如何定位、Gworld 是什么
- GObject 在 ida 中如何定位、GObject 是什么
- GObject 的内存布局与结构、FUObjectItem / NumElement / NumChunks
- GName 在 ida 中如何定位、GName 是什么
- 结合 ida 和源码，分析 GName 算法详解
- 一法破万门：虚幻源码 + 带符号 ida 文件 + 游戏 ida 文件

### 第 2 阶段: 基础篇 · 虚幻基础入门 — 宝剑磨石

- 找到 ULevel 获取所有 Actor，了解 APawn 和 Actor 的关系
- 找到所有对象的坐标，了解 FTransForm 结构
- 获取摄像机组件数据
- 遍历所有对象，绘制在屏幕上，过滤不需要的对象，完善绘制
- 找到血量、护甲等数据，浅谈 ACharacter 的结构定义
- 透视：血量、名字
- 部分游戏的高跳、移速、射速等变态功能
- 查找骨骼数组，骨骼名字
- 完善骨骼算法，完成骨骼透视
- 编写方框透视，浅谈自适应方框和常规方框
- 无后座、无扩散
- 编写自瞄、浅谈算法
- 单机情况下的秒杀、穿墙、灵魂出窍

### 第 3 阶段: 基础篇 · 从 0 了解虚幻反射结构

- 1.0 前置工作 → 工具的下载
- 1.1 了解基础反射结构在内存的分布
- 1.2 反射结构修复
- 1.3 分析 GName 相关算法以及 GObject 解密（实战）
- 1.4 GetName 算法修改以及 dump objects（实战）
- 1.5 修复结构 dump sdk（实战）

### 第 4 阶段: PUBG 解密与 Dump SDK

- 1.0 到离反作弊 dump 游戏内存
- 1.1 GName 与全局解密函数定位
- 1.2 全局解密函数的实现
- 1.3 GetName 算法的实现
- 1.3.1 GObject 的定位与解密
- 1.4 UObjectBase 解密的定位
- 1.4.1 UObject 四个成员的实现
- 1.5 Objects dump 的完成
- 1.6 修复基础反射结构
- 1.7 完成 dump sdk

### 第 5 阶段: 三角洲行动解密与 Dump SDK

- 1.0 使用驱动 dump 游戏内存
- 1.1 GName 定位与解密
- 1.2 GObject、GWorld 定位
- 1.3 dump Objects
- 1.4 修复基础反射结构
- 1.5 完成 dump sdk
- 1.6 从 SDK 中挖掘常用数据偏移

### 第 6 阶段: 无畏契约解密与 Dump SDK

- 1.0 课程前置工作的完成
- 1.1 GName 定位与解密
- 1.2 GetName 解密算法的编写
- 1.3 利用工具快速修复反射结构
- 1.4 定位 GWorld 和 GObject
- 1.5 从 SDK 中挖掘常用的数据偏移

### 第 7 阶段: PUBG 项目实战

- 1.1 驱动的使用
- 1.2 了解外部多线程概念
- 1.3 从 SDK 中挖掘人物数据
- 1.4 完成方框透视
- 1.5 从 SDK 中挖掘骨骼数据
- 1.6 骨骼绘制算法的实现
- 1.7 人物血量数据的分析
- 1.8 分析并且完成血量解密
- 1.9 地面物资数据的挖掘
- 2.0 物资数据的解密
- 2.1 编写哈希表，绘制我们需要的物资数据
- 2.2 框架的完善
- 2.3 自瞄的完成 ing……

## 资料

- 读写与注入驱动 | 驱动工具
- 驱动 CE 工具 | 工具
- 虚幻外部框架 | 框架源码
- UE SDK Dump 工具合集 | 工具包
- 课程配套源代码 | 压缩包

## 讲师

- 姓名: uintptr
- 头衔: 逆向工程讲师 / 游戏安全研究员
- 简介: 课小猫的秘密宝箱收录讲师，专注游戏逆向与安全研究领域多年，拥有丰富的虚幻引擎逆向实战经验。
- 头像: https://lh3.googleusercontent.com/aida-public/AB6AXuBU5Epy6jC5CurzTsOBv1a1AfrMlDBdqxUELTKYOCLVvqfSEaKr2tErllmvMwBEz_DrXtOoMkERICWtBsbhbrW7sv4chtm4peU1G7LpvdMzGzccr8P1YEk6lWd1yz-RhSWQFAZPoNmtAjD5UBlMhGaFnjDX9V6WhuXBsmaUrfGXpFgLc7-NjwxbXJPzQbZ3Vc8nF0rMbEXQRcInt_r9iv4BuS1amcDac3O6Vmmr9APUyuBYyxaJq6k-tFgOq-A04jgrT0js1uktuHx2
`;export{n as default};
