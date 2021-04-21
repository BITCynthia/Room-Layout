# 绿哥哥的小游戏

## 简介

user study

![screenshot](screenshot.jpg)

## 源码目录介绍

``` text
./js
├── base                                   // 定义游戏开发基础类
│   ├── button.js                          // 游戏内可点击图片类
│   └── eventUtil.js                       // 处理点击、滑动事件的类
├── libs
│   └── weapp-adapter.js                   // 小游戏适配器
├── models
│   └── env.js                             // 环境逻辑
│   └── levelmap.js                        // 不同等级初始地图
│   └── logic.js                           // 视图逻辑的接口
│   └── priority.js                        // 优先队列
├── runtime
│   ├── background.js                      // 背景
│   ├── guide.js                           // 游戏引导页
│   ├── menu.js                            // 开始菜单
│   ├── game.js                            // 游戏中按钮
│   ├── levelup.js                         // 升级界面
│   ├── over.js                            // 结束(通关)界面
│   └── music.js                           // 全局音效管理器
├── databus.js                             // 管控游戏状态
└── main.js                                // 游戏入口主函数

```
