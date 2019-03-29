---
title: Avatar Setting
---
Valine is used in [Gravatar](http://cn.gravatar.com/) (with `gravatar.cat.net` mirror service) as commentator avatar.  
Has `seven` optional values:  

value|style|memo
:-:|:-:|-
Empty string:`''`|![Gravatar official graphics](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40)|Gravatar official graphics
`mp`|![Mystic man (a grayhead)](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40&d=mp)|Mystic man (a grayhead)
`identicon`|![Abstract geometry](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40&d=identicon)|Abstract geometry
`monsterid`|![little monster](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40&d=monsterid)|little monster
`wavatar`|![A combination of different faces and backgrounds](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40&d=wavatar)|A combination of different faces and backgrounds
`robohash`|![a generated robot with different colors, faces, etc](https://gravatar.cat.net/avatar/00000000000000000000000000000000?s=40&d=robohash&f=y)|a generated robot with different colors, faces, etc
`retro`|![Eight-pixel retro portrait](https://gravatar.cat.net/avatar/adb831a7fdd83dd1e2a309ce7591dff8?s=40&d=retro)|Eight-pixel retro portrait
`hide`|&nbsp;|Hidden avatar

> The parameter value `hide` is supported at `v1.1.8-beta`.  
> If the value of `avatar` is not equal to one of the seven parameters, the default value is` mm`.

```js
new Valine({
    ...
    avatar:'' // (''/mm/identicon/monsterid/wavatar/robohash/retro/hide)
});
```