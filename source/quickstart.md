---
title: 快速开始
---

如果你想在某个网页或者文章页中使用Valine，请参照以下步骤配置

## 获取APP ID 和 APP Key

请先[登录](https://leancloud.cn/dashboard/login.html#/signin)或[注册](https://leancloud.cn/dashboard/login.html#/signup) `LeanCloud`, 进入[控制台](https://leancloud.cn/dashboard/applist.html#/apps)后点击左下角[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)：

![](https://ws1.sinaimg.cn/large/006qRazegy1fkwo2fpoetj30h40coaak.jpg)

应用创建好以后，进入刚刚创建的应用，选择左下角的`设置`>`应用Key`，然后就能看到你的`APP ID`和`APP Key`了：

![](https://ws1.sinaimg.cn/large/006qRazegy1fkwo6w2b6uj30xe0etjt4.jpg)


## HTML 片段

修改初始化对象中的`appId`和`appKey`的值为上面刚刚获取到的值即可(其他可以默认)。
``` html
<head>
    ...
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
    ...
</head>
<body>
    ...
    <div id="vcomments"></div>
    <script>
        new Valine({
            el: '#vcomments',
            appId: '<API_ID>',
            appKey: '<API_Key>'
        })
    </script>
</body>
```

## 配置

修改初始化对象中的`APP_ID`和`APP_KEY`的值为上面刚刚获取到的值即可(`其他可以默认`)。
``` js
new Valine({
    el: '#vcomments' ,
    appId: '<APP_ID>',
    appKey: '<APP_KEY>',
    notify:false, 
    verify:false, 
    avatar:'mm' 
    placeholder: 'just go go',
    path:window.location.pathname, 
});
```


## NPM 安装

Valine 现已发布到[npm](https://www.npmjs.com/package/valine)，可以直接用命令安装：
``` bash
# Install leancloud's js-sdk
npm install leancloud-storage --save
# Install valine
npm install valine --save
```

```js
// Register AV objects to the global
window.AV = require('leancloud-storage');

// Use import
import Valine from 'valine';
// or Use require
const Valine = require('valine');

new Valine({
    el:'#vcomments',
    // other config
})
```

## 评论数据管理

由于Valine 是无后端评论系统，所以也就没有开发评论数据管理功能。请自行登录`Leancloud应用`管理。  

具体步骤：`登录`>`选择你创建的应用`>`存储`>选择Class `Comment`，然后就可以尽情的发挥你的权利啦(～￣▽￣)～

> 当然，你也可以配合 [@panjunwen](https://github.com/panjunwen) 开发的 [Valine-Admin](https://github.com/panjunwen/Valine-Admin) 进行`评论数据管理`

## 安全域名

为了你的数据安全，请设置自己的`安全域名`：

![设置安全域名](https://ws1.sinaimg.cn/large/006qRazegy1fkxqmddfh1j30qd0go40h.jpg)


更多信息请查看[配置](/config.html)。