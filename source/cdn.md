---
title: 使用 CDN 
---
[![](https://data.jsdelivr.com/v1/package/npm/valine/badge)](https://www.jsdelivr.com/package/npm/valine)

推荐使用 [jsdelivr](https://jsdelivr.com/) —— 能及时获取到`最新版本`。

## 获取指定版本

如果担心频繁地版本更新又可能引入未知 Bug，我们可以使用具体的版本。  
规则是 `//cdn.jsdelivr.net/npm/valine@VERSION/dist/Valine.min.js`

```html
<script src="//cdn.jsdelivr.net/npm/valine@1.1.9/dist/Valine.min.js"></script>
```


## 获取最新版本

根据 jsdelivr 的规则，不指定特定版本号时将引入最新版本(`可能会有缓存`)。

```html
<script src="//cdn.jsdelivr.net/npm/valine@latest"></script>
```

> 指定 **VERSION** 为 `latest` 可以强制每次都请求最新版本。 
## 其他 CDN

- https://unpkg.com/valine/dist/Valine.min.js