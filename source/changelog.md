---
title: 更新日志
---

## v1.2.0, 2018-07-09

- `A` 新增 [GFM 任务列表](https://github.github.com/gfm/#task-list-items-extension-) ([marked#1250](https://github.com/markedjs/marked/pull/1250))
- `U` 一些样式优化
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

## v1.1.9, 2018-06-24

- `A` 新的Emoji列表
- `A` 新增快捷表情输入 `:smile: => 😄`  [√Emoji 对应表](https://github.com/xCss/Valine/blob/master/dist/plugins/emojis/light.json)
- `U` 优化样式
- `U` 修改 `子评论` 展示方式
- `U` 精简优化代码，缩减库大小
- `F` 修复页面中出现的 `Error 99` 错误 [#93](https://github.com/xCss/Valine/issues/93) 
- `F` 修复某些网页中可能出现 `section` 样式被重写的问题\

## v1.1.9-rc3, 2018-06-24

...

## v1.1.9-rc2, 2018-06-15

- `A` 新增对 `MathJax` 的支持 [#67](https://github.com/xCss/Valine/issues/67) 
- `U` 更新 `init()` 逻辑
- `U` 更新 `init()` 状态值
- `F` 修复评论区变成数字的 Bug [#89](https://github.com/xCss/Valine/issues/89) 
- `F` 修复评论列表中日期出现 `undefined` 的 Bug


## v1.1.9-rc1, 2018-06-15

...

## v1.1.9-beta9, 2018-03-29

- `F` 修复 `location.href` 中含中文时出现的评论刷新消失的Bug

## v1.1.9-beta9, 2018-03-29

- `A` 新增 `预览` 操作
- `A` 新增 `emoji` 表情
- `A` 新增 `avatar_cdn` 配置
- `A` 新增 `insertedAt` 字段，默认倒序

- `U` 优化评论提交检测逻辑
- `U` 修改 `avatar` 默认镜像为 `gravatar.loli.net`，感谢[@Showfom](https://github.com/Showfom) 提供的镜像服务

- `F` 修复 `Object.assign` 在IE中报错的问题
- `F` 修复 `String.fromCodePoint` 在IE中报错的问题
- `F` 尝试性修复在 `单页` 和 `Pjax` 页面中出现的问题 [#66](https://github.com/xCss/Valine/issues/66) [#58](https://github.com/xCss/Valine/issues/58) 

---------------

更多[更新日志 >](https://github.com/xCss/Valine/releases)