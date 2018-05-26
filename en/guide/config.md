# Config Reference

**Valine** Supports two different initialization methods:
```html
<!-- Write the argument in the constructor -->
<script>
    new Valine({
        el:'#vcomment',
        appId:'your appid',
        appKey:'your appkey'
    })
</script>

<!-- or Call the init method -->
<script>
    var valine = new Valine();
    valine.init({
        el:'#vcomment',
        appId:'your appid',
        appKey:'your appkey'
    })
</script>
```

## el
- Type:`String`
- Default:`null`
- Required:`true`

The DOM element to be mounted on initialization. It can be a CSS selector string or an actual HTMLElement.

::: warning
Please ensure that the element is unique.
:::

## appId
- Type:`String`
- Default:`null`
- Required:`true`

Application `APP ID` from `Leancloud`.

## appKey
- Type:`String`
- Default:`null`
- Required:`true`

Application `APP Key` from `Leancloud`.

## region
- Type:`String`
- Default:`cn`
- Required:`false`

Storage node.
::: tip Optional value:

- `cn` - Chinese mainland node
- `us` - Overseas node
:::

## placeholder
- Type:`String`
- Default:`null`
- Required:`false`

Comment box placeholders.

## notify
- Type:`Boolean`
- Default:`false`
- Required:`false`

Mail notifier, Please refer to the [configuration](https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE).


## verify
- Type:`Boolean`
- Default:`false`
- Required:`false`

Validation code.

## path
- Type:`String`
- Default:`window.location.pathname`
- Required:`false`

Article path(just like duoshuo `thread`).
::: tip Optional value:
- `window.location.pathname` (recommend)
- `window.location.href`
- customize (`Please ensure uniqueness`)
:::

## avatar
- Type:`String`
- Default:`mm`
- Required:`false`

`Gravatar` type.
::: tip Optional value:
- `''`(Empty string)
- `mm`
- `identicon`
- `monsterid`
- `wavatar`
- `retro`
- `hide` 

See the [Avatar setting](avatar.md) for more details.
:::


## guest_info
- Type:`Array`
- Default:`['nick','mail','link']`
- Required:`false`

Reviewer attributes.

## pageSize
- Type:`Number`
- Default:`10`
- Required:`false`

Number of pages per page.
