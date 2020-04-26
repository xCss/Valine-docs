---
title: Article reading statistics
---

Valine supports article reading statistics starting with `v1.2.0`.

``` js
new Valine({
    el:'#vcomments',
    ...
    visitor: true // Article reading statistics
})
```

The web page will automatically find the element with the `class` value of `leancloud-visitors` on the page and get its `id` as the query condition. And populate the resulting value into the child element whose `class` value is `leancloud-visitors-count`:

``` html
<!-- id as the query condition -->
<span id="<Your/Path/Name>" class="leancloud-visitors" data-flag-title="Your Article Title">
    <em class="post-meta-item-text">article reading statistics  </em>
    <i class="leancloud-visitors-count">1000000</i>
</span>
```
<span id="/visitor.html" class="leancloud_visitors" data-flag-title="文章阅读量统计">
    <em class="post-meta-item-text"> article reading statistics </em>
    <i class="leancloud-visitors-count">0</i>
</span>
