---
title: Change Log
---

## v1.2.9, 2018-07-26

- `U` style optimization
- `F` urgently restores possible `xss` security vulnerabilities in `iframe`.

## v1.2.7- v1.2.8, 2018-07-23

- `A` New error handling logic

## v1.2.6, 2018-07-20

- `U` Modify button style
- `F` Fix bug that comment box does not restore after submitting comment
- `F` Fix bugs that can customize the font size of comments

## v1.2.4-v1.2.5, 2018-07-14

- `A` New Feature: `Code highlighting` by [hanabi](https://github.com/egoist/hanabi)
- `U` Optimizes `anti-XSS` logic
- `F` Fix the bug that `custom path` was replaced during query
- `F` Fix `avatar: ''` is replaced with a bug of `avatar:'mm'` [#102](https://github.com/xCss/Valine/issues/102)

## v1.2.3, 2018-07-13
- `A` Comments can be entered into the `HTML` element
- `U` Optimizes `anti-XSS` logic
- `F` Fixes the `undefined` Bug that occurs when `UserAgent` does not exist

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

---------------

[more logs >](https://github.com/xCss/Valine/releases)