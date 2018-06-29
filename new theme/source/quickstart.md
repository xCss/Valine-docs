---
title: 快速开始
---

# 快速开始

如果你想在某个网页或者文章页中使用Valine，请参照以下步骤配置

### 获取APP ID 和 APP Key

请先[登录](https://leancloud.cn/dashboard/login.html#/signin)或[注册](https://leancloud.cn/dashboard/login.html#/signup) `LeanCloud`, 进入[控制台](https://leancloud.cn/dashboard/applist.html#/apps)后点击左下角[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)：

![](https://ws1.sinaimg.cn/large/006qRazegy1fkwo2fpoetj30h40coaak.jpg)

应用创建好以后，进入刚刚创建的应用，选择左下角的`设置`>`应用Key`，然后就能看到你的`APP ID`和`APP Key`了：

![](https://ws1.sinaimg.cn/large/006qRazegy1fkwo6w2b6uj30xe0etjt4.jpg)


### HTML 片段

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
    <div id="vcomment"></div>
    <script>
        new Valine({
            el: '#vcomment',
            appId: '<API_ID>',
            appKey: '<API_Key>'
        })
    </script>
</body>
```


> 为了你的数据安全，请设置自己的`安全域名`：
> ![设置安全域名](https://ws1.sinaimg.cn/large/006qRazegy1fkxqmddfh1j30qd0go40h.jpg)


更多信息请查看[配置](/config.html)。