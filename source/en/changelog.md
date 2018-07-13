---
title: Change Log
---

## v1.2.3, 2018-07-13
- `A` Comments can be entered into the `HTML` snippet
- `U` Optimizes `anti-XSS` logic
- `F` Fixes the `undefined` error that occurs when `UserAgent` does not exist

## v1.2.0-v1.2.2, 2018-07-09

- `A` Add `Tab` Shortcut key
- `A` Add support for [GFM Task Lists](https://github.github.com/gfm/#task-list-items-extension-) to comply with the GFM spec ([marked#1250](https://github.com/markedjs/marked/pull/1250))
- `F` Fixes list-style
- `F` Fixes bug that the number of visitors in the new article is empty ([hexo-theme-next#345](https://github.com/theme-next/hexo-theme-next/pull/345#issuecomment-403285823))

## v1.2.0-beta2, 2018-07-08

- `F` Fix `blockquote` element without style Bug
- `F` Fix the bug that the reading of the article does not count when `pathname` is Chinese

## v1.2.0-beta1, 2018-07-07

- `A` New front-end `xss` defense solutions
- `A` New [article reading statistics](/en/visitor.html) 
- `A` The height of the new review box changes automatically with the content ( by [autosize](https://github.com/jackmoore/autosize) )
- `U` Narrowing the size of a `sub-comment`

## v1.2.0-beta, 2018-06-30

- `U` Modify comment mode, reduce query time by 80%
- `F` Fix when `rid` is `empty string` data is ignored [#95](https://github.com/xCss/Valine/issues/95)

## v1.1.9-rc3-v1.1.9, 2018-06-24

- `A` New `Emoji` list
- `A` New quick expression input `:smile: => 😄`  [√Emoji list](https://github.com/xCss/Valine/blob/master/dist/plugins/emojis/light.json)
- `U` Modify the `sub-comment` style
- `U` Streamlining the code, reduce the size of the library
- `F` Fix `Error 99` [#93](https://github.com/xCss/Valine/issues/93) 
- `F` Repair of some web pages may cause `section` style to be rewritten.

## v1.1.9-rc2, 2018-06-15

- `A` New support for `MathJax` [#67](https://github.com/xCss/Valine/issues/67) 
- `U` Update `init()` logic
- `U` Update `init()` status value
- `F` Fix the comment area into a digital bug [#89](https://github.com/xCss/Valine/issues/89) 
- `F` Fixed `undefined` bug in date in comment list


## v1.1.9-rc1, 2018-06-15

...

## v1.1.9-beta9, 2018-03-29

- `F` Fix the comment that disappears when commenting in Chinese in `location.href`

## v1.1.9-beta9, 2018-03-29

- `A` Add `preview` operation
- `A` Add `emoji` expression
- `A` New `avatar_cdn` configuration
- `A` New `insertedAt` field
- `U` Optimize the commentary submission logic
- `U` Modify `avatar` default cdn to `gravatar.loli.net`，Thanks to the [@Showfom](https://github.com/Showfom) provided service
- `F` Fixed `Object.assign` error in IE
- `F` Fixed `String.fromCodePoint` error in IE
- `F` Try to fix the issues on `Single Page` and `Pjax` pages [#66](https://github.com/xCss/Valine/issues/66) [#58](https://github.com/xCss/Valine/issues/58) 

---------------

[more logs >](https://github.com/xCss/Valine/releases)