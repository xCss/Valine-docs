---
title: 更新日志
---
## v1.4.11~v1.4.14, 2020-04-26
- `F` 紧急重新修复可能存在的xss漏洞 [#298](https://github.com/xCss/Valine/issues/298) [#294](https://github.com/xCss/Valine/issues/294) [#293](https://github.com/xCss/Valine/issues/293)
- `F` 再次修复阅读数回填失败的Bug
- `F` 修复某些异常未正常捕获的Bug

## v1.4.10, 2020-04-25
- `F` 修复表情判断失败的Bug [#286](https://github.com/xCss/Valine/issues/286) [#296](https://github.com/xCss/Valine/issues/296) 
- `F` 修复可能存在的xss漏洞 [#294](https://github.com/xCss/Valine/issues/294) [#293](https://github.com/xCss/Valine/issues/293) 
- `F` 修复阅读数回填失败的Bug
- `F` 修复获取QQ信息时的缓存Bug
- `F` 表情size适配修复 [#295](https://github.com/xCss/Valine/issues/295) 
- `U` 一些样式修改
- `U` 代码逻辑优化

## v1.4.8~v1.4.9, 2020-04-23  
- `F` 优化SDK加载逻辑，修复`Code 98`错误 [#289](https://github.com/xCss/Valine/issues/289) [#288](https://github.com/xCss/Valine/issues/288) [#285](https://github.com/xCss/Valine/issues/285)
- `F` 修复文章列表`阅读次数`回填失败的Bug [#287](https://github.com/xCss/Valine/issues/287) [#272](https://github.com/xCss/Valine/issues/272) 
- `U` 一些样式优化 [#283](https://github.com/xCss/Valine/issues/283)
- `U` 代码逻辑优化


## v1.4.6~v1.4.7, 2020-04-22
- `A` 新增`必填项`设置 [#281](https://github.com/xCss/Valine/issues/281) [#59](https://github.com/xCss/Valine/issues/59)
- `A` 新增`评论框`获取`QQ头像`和`QQ昵称`启用属性`enableQQ`，需主动启用 [#277](https://github.com/xCss/Valine/issues/277)
- `F` 修复样式被覆盖的Bug [#284](https://github.com/xCss/Valine/issues/284) [#270](https://github.com/xCss/Valine/issues/270)
- `F` 修复使用了低版本的`av-min.js`造成的初始化错误
- `U` 一些样式优化
- `U` 代码逻辑优化

## v1.4.5, 2020-04-21
- `A` 新增QQ头像的支持(`昵称框`输入QQ号试试) [#192](https://github.com/xCss/Valine/issues/192)
- `A` 新增自定义表情 [#261](https://github.com/xCss/Valine/issues/261) [#260](https://github.com/xCss/Valine/issues/260) [#150](https://github.com/xCss/Valine/issues/150)
- `F` 修复marked渲染错误的Bug [#275](https://github.com/xCss/Valine/issues/275) [#269](https://github.com/xCss/Valine/issues/269)
- `F` 修复代码高亮样式被覆盖的Bug [#270](https://github.com/xCss/Valine/issues/270)
- `F` 修复阅读次数异常的Bug [#272](https://github.com/xCss/Valine/issues/272)
- `F` 修复在夜间模式下样式渲染异常的Bug
- `U` 一些样式优化
- `U` 代码逻辑优化

## v1.4.0~1.4.4, 2020-04-11  
- `A` 新的SDK加载逻辑
- `A` 新增图片`表情`
- `A` 新增`截图粘贴`上传
- `A` 新增`图片拖拽至评论框`上传
- `A` 新增对`MathJax`的支持
- `A` 新增对`KaTex`的支持
- `A` 新增评论框`楼内回复`
- `A` 新增对`夜间模式`的支持 [#221](https://github.com/xCss/Valine/issues/221)
- `A` 全新的评论区UI界面 
- `A` 新增对`zh-CN/zh-TW/en/jp`等多国语言的支持
- `F` 修复回复评论时评论数据需要刷新才会显示的`Bug` [#257](https://github.com/xCss/Valine/issues/257)
- `F` 修复`表情`和`预览`只能点开不能收回的`Bug` [#254](https://github.com/xCss/Valine/issues/254)
- `F` 修复`Edge浏览器`识别为`Chrome`的`Bug` [#250](https://github.com/xCss/Valine/issues/250)
- `F` 修复`Storage is not defined`的`Bug` [#242](https://github.com/xCss/Valine/issues/242)
- `F` 修复可能存在的`xss漏洞` [#218](https://github.com/xCss/Valine/issues/218)
- `F` 修复分页`Bug` [#196](https://github.com/xCss/Valine/issues/196)
- `F` 修复点击`展开更多`击穿`Bug` [#180](https://github.com/xCss/Valine/issues/180)
- `F` 修复个别UA识别失败的`Bug`
- `F` 修复回复评论后评论数变为1的`Bug` [#264](https://github.com/xCss/Valine/issues/264) 
- `U` 表情图片懒加载 [#261](https://github.com/xCss/Valine/issues/261) 
- `U` 删除`验证码` [#207](https://github.com/xCss/Valine/issues/207)
- `U` 删除自带的`邮件提醒` [#20](https://github.com/xCss/Valine/issues/20)
- `U` 代码逻辑优化

> `注`: `MathJax` 和 `KaTex` 需要当前页面已加载并配置好相关的资源文件.

## v1.3.10, 2019-08-29  
- `A` 新的SDK加载逻辑
- `A` 新增**可选**配置项`serverURLs`，默认`http://自动检测节点.avoscloud.com` [#206](https://github.com/xCss/Valine/issues/206) [#203](https://github.com/xCss/Valine/issues/203) [#194](https://github.com/xCss/Valine/issues/194)
- `F` 修复列表页阅读量统计失效BUG [#136](https://github.com/xCss/Valine/issues/136) 
- `F` 其他BUG修复


## v1.3.8,v1.3.9, 2019-06-26  
- `A` 新的SDK加载逻辑
- `F` 修复`字体样式`/`待办事项`渲染问题 [#175](https://github.com/xCss/Valine/issues/175) [#182](https://github.com/xCss/Valine/issues/182) 
- `F` 修复各节点无法访问的Bug [#188](https://github.com/xCss/Valine/issues/188) [#189](https://github.com/xCss/Valine/issues/189) [#190](https://github.com/xCss/Valine/issues/190) 
- `F` 紧急修复`无回复按钮` Bug
- `F` 其他 Bug 修复

## v1.3.7, 2019-06-21  
- `A` 新增`clazzName`字段，自定义配置LeanCloud表名 [#162](https://github.com/xCss/Valine/issues/162)
- `F` **修复LeanCloud服务不可访问问题**
- `F` 修复待办事项列表渲染`Bug` [#182](https://github.com/xCss/Valine/issues/182)
- `F` 尝试性修复字体大小问题 [#175](https://github.com/xCss/Valine/issues/175)
## v1.3.6, 2019-04-01
- `F` 修复代码高亮失效的 `Bug`
- `F` 修复以前可以使用`Pjax`而`v1.3.5`版本失效的 `Bug` (感谢小伙伴 [@sxyugao](https://github.com/sxyugao) 提供的建议)
- `F` 修复评论内容中点击 `@NickName` 跳转到新页面的 `Bug`
- `F` 其他 `Bug` 修复

## v1.3.5, 2019-03-29
- `A` 新增隐私保护：移除页面中的敏感(E-mail)数据 
- `A` 新增`recordIP` 属性(`Boolean`)：增加IP统计 by [@Showfom](https://github.com/Showfom) [#160](https://github.com/xCss/Valine/issues/160) 
- `U` 一些样式修改
- `U` 代码逻辑优化

## v1.3.4, 2018-11-24
- `F` 修复`img`的`xss`安全漏洞
- `F` 修复`embed`的`xss`安全漏洞
- `F` 修复评论框内容不重置的bug

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


---------------------

更多[更新日志 >](https://github.com/xCss/Valine/releases)

---------------------