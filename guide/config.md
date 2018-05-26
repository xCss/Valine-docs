# 配置

Valine 支持两种不同的初始化方式。一种是构造方法初始化对象，另一种是调用`init`方法：
```html
<!-- 方法 1 -->
<script>
    new Valine({
        el:'#vcomment',
        appId: '<API_ID>',
        appKey: '<API_Key>'
    })
</script>

<!-- 方法 2 -->
<script>
    var valine = new Valine();
    valine.init({
        el:'#vcomment',
        appId: '<API_ID>',
        appKey: '<API_Key>'
    })
</script>
```

## el
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

Valine 的初始化挂载器。可以是一个`CSS 选择器`，也可以是一个实际的`HTML元素`。

## appId
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

从`LeanCloud`的应用中得到的`appId`.
::: tip 参考
[获取APP ID 和 APP Key](quickstart.md)。
:::

## appKey
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

从`LeanCloud`的应用中得到的`APP Key`.
::: tip 参考
[获取APP ID 和 APP Key](quickstart.md)。
:::

## region
- 类型:`String`
- 默认值:`cn`
- 必要性:`false`

存储节点：在`Valine`中初始化时默认遵循`Leancloud SDK`的节点规则(`默认中国大陆节点`)。
::: tip 可选值
- `cn` - 中国大陆节点
- `us` - 海外节点

Leancloud 服务器[健康状态检查](https://status.leancloud.cn/)`
:::

## placeholder
- 类型:`String`
- 默认值:`null`
- 必要性:`false`

评论框`占位提示符`。

## notify
- 类型:`Boolean`
- 默认值:`false`
- 必要性:`false`

评论回复邮件提醒，请参考[配置](https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE)。

## verify
- 类型:`Boolean`
- 默认值:`false`
- 必要性:`false`

验证码服务。


## path
- 类型:`String`
- 默认值:`window.location.pathname`
- 必要性:`false`

当前`文章页`路径，用于区分不同的`文章页`，以保证正确读取该`文章页`下的评论列表。可选值：
- `window.location.pathname` (默认值，推荐)
- `window.location.href`
- `自定义` 

::: warning
- I. 请保证每个`文章页`路径的唯一性，否则可能会出现不同`文章页`下加载相同评论列表的情况。  
- II. 如果值为`window.location.href`，可能会出现随便加`不同参数`进入该页面，而被判断成新页面的情况。
:::


## avatar
- 类型:`String`
- 默认值:`mm`
- 必要性:`false`

`Gravatar` 头像展示方式。
::: tip 可选值：  
- `''`(空字符串)
- `mm`
- `identicon`
- `monsterid`
- `wavatar`
- `retro`
- `hide` 

更多信息，请查看[头像配置](avatar.md)。
:::



## guest_info
- 类型:`Array`
- 默认值:`['nick','mail','link']`
- 必要性:`false`

评论者相关属性。


## pageSize
- 类型:`Number`
- 默认值:`10`
- 必要性:`false`

评论列表分页，每页条数。

## lang
- 类型:`String`
- 默认值:`zh-cn`
- 必要性:`false`

多语言支持。
::: tip 可选值：
- `zh-cn`
- `en`
:::

<!-- 如需自定义语言，请参考[i18n](i18n.md)。 -->