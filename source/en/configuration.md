---
title: Config Reference
---

**Valine** Supports two different initialization methods:
```html
<!-- Write the argument in the constructor -->
<script>
    new Valine({
        el:'#vcomment',
        appId:'Your appId',
        appKey:'Your appKey'
    })
</script>

<!-- or Call the init method -->
<script>
    var valine = new Valine();
    valine.init({
        el:'#vcomment',
        appId:'Your appId',
        appKey:'Your appKey'
    })
</script>
```

## el
- Type:`String`
- Default:`null`
- Required:`true`

The DOM element to be mounted on initialization. It can be a CSS selector string or an actual HTMLElement.

## appId
- Type:`String`
- Default:`null`
- Required:`true`

Application `appId` from `Leancloud`.

## appKey
- Type:`String`
- Default:`null`
- Required:`true`

Application `appKey` from `Leancloud`.

## <del>region</del>
- Type:`String`
- Default:`cn`
- Required:`false`

Storage node.

> Leancloud sdk removed the region option in `v3.8.0`:  
>  [leancloud/javascript-sdk/releases/tag/v3.8.0](https://github.com/leancloud/javascript-sdk/releases/tag/v3.8.0)

Optional value:

- `cn` - Chinese mainland node
- `us` - Overseas node

## placeholder
- Type:`String`
- Default:`null`
- Required:`false`

Comment box placeholders.

## <del>notify</del>
- Type:`Boolean`
- Default:`false`
- Required:`false`

Mail notifier, Please refer to the [configuration](https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE).

> `v1.4.0+` Deprecated configurations

## <del>verify</del>
- Type:`Boolean`
- Default:`false`
- Required:`false`

Validation code.

> `v1.4.0+` Deprecated configurations

## path
- Type:`String`
- Default:`window.location.pathname`
- Required:`false`

Article path(just like duoshuo `thread`).

Optional value:
- `window.location.pathname` (recommend)
- `window.location.href`
- customize (`Please ensure uniqueness`)

## avatar
- Type:`String`
- Default:`mp`
- Required:`false`

`Gravatar` type. 

Optional value:
- `''`(Empty string)
- `mp`
- `identicon`
- `monsterid`
- `wavatar`
- `retro`
- `robohash`
- `hide` 

See the [Avatar setting](/en/avatar.html) for more details.


## meta
- Type:`Array`
- Default:`['nick','mail','link']`
- Required:`false`

Reviewer attributes.

## pageSize
- Type:`Number`
- Default:`10`
- Required:`false`

Number of pages per page.


## lang
- Type:`String`
- Default:`zh-CN`
- Required:`false`

Multilingual support.

Optional value：
- `zh-CN`
- `zh-TW`
- `en`
- `ja`

If you need a custom language, please refer to [i18n](/en/i18n.html)。


## visitor
- Type:`Boolean`
- Default:`false`
- Required:`false`

[Article reading statistics](/en/visitor.html).


## highlight
- Type:`Boolean`
- Default:`true`
- Required:`false`

`Code highlighting`, it's enabled by default, please close it selectively.

## avatarForce
- Type:`Boolean`
- Default:`false`
- Required:`false`
  
Each time you access `forced` pulls the latest avatar.

## recordIP
- Type:`Boolean`
- Default:`false`
- Required:`false`

Record reviewer IP.

> `v1.3.5+`

## serverURLs  
- Type: `String`
- Default: `http[s]://[tab/us].avoscloud.com`
- Required: `false`

> ⚠️ This configuration is suitable for domestic `custom domain name` users, `overseas version` will be automatically detected (no need to manually fill in) `v1.3.10+`


## emojiCDN
- Type: `String`
- Default: ``
- Required: `false`

Set `Emoji Pack CDN`, refer to [Custom Emoji](/en/emoji.html)

> `v1.4.5+` 


## emojiMaps
- Type: `Object`
- Default: `null`
- Required: `false`

Set `Emoji Packet Mapping', refer to [Custom Emoji](/en/emoji.html)

> `v1.4.5+` 


## enableQQ
- Type: `Boolean`
- Default: `false`
- Required: `false`

Whether to enable the `Nickname box` to automatically get `QQ Nickname` and `QQ Avatar`, the default is `off`, you need the `blogger/webmaster` to actively enable

> `v1.4.6+`

## requiredFields
- Type: `Array`
- Default: `[]`
- Required: `false`

Set `required fields`, default `anonymous`, optional values:

- `['nick']`
- `['nick','mail']`

> `v1.4.6+`
