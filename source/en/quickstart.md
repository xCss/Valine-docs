---
title: Quick start
---

## Get AppID and AppKey
[Click here](https://console.leancloud.cn/login) to register or login in `leancloud`.  
[Click here](https://console.leancloud.cn/apps) Create new application in `Leancloud`, and you will get `AppID`/`AppKey`.

## HTML structure

Please include the following HTML code in the appropriate location on the article page that requires the comment box:

```html
<head>
    ...
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


