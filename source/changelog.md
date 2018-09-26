---
title: 更新日志
---

## v1.3.3, 2018-09-26

- `F` 修复可以自定义`CSS`的 Bug

## v1.3.1, 2018-09-03

- `A` 新增 `avatarForce` 字段，每次访问强制拉取最新的`评论列表头像`
- `F` 修复提交评论后，评论框不重置的 Bug

## v1.3.0, 2018-07-29

- `A` 新增 `pid` 字段
- `A` 新增`at`锚点定位
- `U` 过滤掉 `iframe` 等HTML元素
- `F` BUG 修复

## v1.2.9, 2018-07-26

- `U` 样式优化
- `F` 紧急修复在`iframe`中可能出现的`xss`安全漏洞

## v1.2.7- v1.2.8, 2018-07-23

- `A` 新的错误处理逻辑

## v1.2.6, 2018-07-20

- `U` 修改按钮样式
- `F` 修复提交评论后评论框不还原的 Bug
- `F` 修复可自定义评论内容字体大小的 Bug

## v1.2.4-v1.2.5, 2018-07-14

- `A` 新增`代码高亮` by [hanabi](https://github.com/egoist/hanabi)
- `U` 优化防`XSS` 逻辑
- `F` 修复`自定义路径`在查询时被替换的 Bug
- `F` 修复`avatar: ''`被替换成`avatar:'mm'`的 Bug [#102](https://github.com/xCss/Valine/issues/102)

## v1.2.3, 2018-07-13

- `A` 新增评论内容可输入`HTML` 元素
- `U` 优化防`XSS` 逻辑
- `F` 修复当`UserAgent` 不存在时出现的`undefined` Bug

## v1.2.0-v1.2.2, 2018-07-09

- `A` 新增`Tab`快捷键
- `A` 新增 [GFM 任务列表](https://github.github.com/gfm/#task-list-items-extension-) ([marked#1250](https://github.com/markedjs/marked/pull/1250))
- `F` 修复`ul`、`ol`列表样式
- `F` 修复`新文章`不点击详情而`阅读量`为空的 Bug ([hexo-theme-next#345](https://github.com/theme-next/hexo-theme-next/pull/345#issuecomment-403285823))

## v1.2.0-beta2, 2018-07-08

- `F` 修复`blockquote`元素无样式的 Bug
- `F` 修复`pathname`为中文时可能出现访问量不统计的 Bug

## v1.2.0-beta1, 2018-07-07

- `A` 新增前端`xss`防御解决方案
- `A` 新增[文章阅读量统计](/visitor.html) 
- `A` 新增评论框高度随内容自动变化 ( by [autosize](https://github.com/jackmoore/autosize) )
- `U` 缩小`子评论`头像大小

## v1.2.0-beta, 2018-06-30

- `U` 修改子评论查询方式，减少80%的查询次数
- `F` 修复 `rid` 为 `空字符串` 时数据被忽略的 Bug [#95](https://github.com/xCss/Valine/issues/95)

---------------------

更多[更新日志 >](https://github.com/xCss/Valine/releases)