# 介绍

Valine 诞生于2017年8月7日，是一款基于[Leancloud](https://leancloud.cn)的快速、简洁且高效的无后端评论系统。

理论上支持但不限于静态博客，目前已有[Hexo](https://hexo.io/)、[Jekyll](https://jekyllrb.com/)、[Typecho](http://typecho.org/)等博客程序在使用Valine。

## 特性

- 快速
- 安全
- Emoji :wink:
- 无后端实现
- MarkDown 全语法支持
- 轻量易用(~15kb gzipped)

## Todo

Valine 现在仍处于开发阶段，这里有一些目前还不支持、但已经在计划中的特性：
- 文章浏览量统计
- 基于[Firebase](https://firebase.google.com/)的评论存储

欢迎你为 Valine 的开发作出贡献。

## 捐赠
如果你觉得 Valine 对你有帮助，或者想对我微小的工作一点资瓷，欢迎给我捐赠。

| 支付宝 | 微信 | 
| :------: | :------: | 
| <img width="150" src="/assets/img/alipay.png"> | <img width="135" src="/assets/img/wechat.png"> |

<!-- 
## HTML 片段

请在需要评论框的`文章页`内相应位置引入下面的HTML代码：

```html
<head>
    ...
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
    ...
</head>
<body>
    ...
    <div id="comment"></div>
</body>
```

## 获取appid和appkey



## 配置

修改初始化对象中的`appId`和`appKey`的值为上面刚刚获取到的值即可(其他可以默认)。

```js
new Valine({
    el: '#comment' ,
    notify:false, 
    verify:false, 
    appId: '这里填上面获得的appid',
    appKey: '这里填上面获得的appkey',
    placeholder: 'just go go',
    path:window.location.pathname, 
    avatar:'mm' 
});
```
更多信息请查看[配置项](configuration.md)。

## npm安装

Valine 现已发布到[npm](https://www.npmjs.com/package/valine)，可以直接用命令安装：

```bash
npm install valine --save
``` -->