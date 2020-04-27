---
title: Quick start
---

## Get APP_ID and APP_Key
[Click here](https://leancloud.cn/dashboard/login.html#/signup) to register or login in `leancloud`.  
[Click here](https://leancloud.cn/dashboard/applist.html#/newapp) Create new application in `Leancloud`, and you will get `APP ID`/`APP Key`.

## HTML structure

Please include the following HTML code in the appropriate location on the article page that requires the comment box:

```html
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
            el: '#vcomment' ,
            appId: 'Your appId',
            appKey: 'Your appKey'
        });
    </script>
</body>
```

## npm

Valine has been released to [npm](https://www.npmjs.com/package/valine) and can be installed directly by command:
``` bash
# Install valine
npm install valine --save
```

```js
// Use import
import Valine from 'valine';
// or Use require
const Valine = require('valine');

new Valine({
    el:'#vcomments',
    // other config
})
```

See the [Config](/en/configuration.html) for more details.


