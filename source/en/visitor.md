---
title: Article reading statistics
---

Valine supports article reading statistics starting with `v1.2.0-beta1`.

The web page will automatically find the element with the `class` value of `leancloud_visitors` on the page and get its `id` as the query condition. And populate the resulting value into the child element whose `class` value is `leancloud-visitors-count`:

``` html
<!-- id as the query condition -->
<span id="/visitor.html" class="leancloud_visitors" data-flag-title="文章阅读量统计">
    <span class="post-meta-item-text">article reading statistics </span>
    <span class="leancloud-visitors-count">1000000</span>
</span>
```
<span id="/visitor.html" class="leancloud_visitors" data-flag-title="文章阅读量统计">
    <span class="post-meta-item-text"> article reading statistics </span>
    <i class="leancloud-visitors-count">0</i>
</span>