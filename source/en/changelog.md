---
title: Change Log
---

## v1.4.11~v1.4.14, 2020-04-26
- `F` Urgently re-fix possible xss vulnerabilities [#298](https://github.com/xCss/Valine/issues/298) [#294](https://github.com/xCss/Valine/issues/294) [#293](https://github.com/xCss/Valine/issues/293)
- `F` Repaired the bug of failed backfilling of the reading count
- `F` Fix bugs not caught by some exceptions

## v1.4.10, 2020-04-25
- `F` Fixing the failed emoticon-judgement bug [#286](https://github.com/xCss/Valine/issues/286) [#296](https://github.com/xCss/Valine/issues/296) 
- `F` Fix possible xss vulnerabilities [#294](https://github.com/xCss/Valine/issues/294) [#293](https://github.com/xCss/Valine/issues/293) 
- `F` Fix bug in failed backfilling of reading numbers
- `F` Fix the cache bug when getting QQ messages
- `F` expression size adapted to fix [#295](https://github.com/xCss/Valine/issues/295) 
- `U` Some stylistic changes
- `U` Code logic optimization

## v1.4.8~v1.4.9, 2020-04-23  
- `F` Optimize SDK loading logic, fix `Code 98` error [#289](https://github.com/xCss/Valine/issues/289) [#288](https://github.com/xCss/Valine/issues/288) [#285](https://github.com/xCss/Valine/issues/285)
- `F` Fix bug for failed article list `read count` backfill [#287](https://github.com/xCss/Valine/issues/287) [#272](https://github.com/xCss/Valine/issues/272) 
- `U` Some Style Optimization [#283](https://github.com/xCss/Valine/issues/283)
- `U` Code logic optimization

## v1.4.6~v1.4.7, 2020-04-22
- `A` New `Required field` setting [#281](https://github.com/xCss/Valine/issues/281) [#59](https://github.com/xCss/Valine/issues/59)
- `A` Added `Comment box` to get `QQ avatar` and `QQ nickname` to enable the attribute `enableQQ`, need to actively enable [#277](https://github.com/xCss/Valine/issues/277)
- `F` Fix bugs where styles are overwritten [#284](https://github.com/xCss/Valine/issues/284) [#270](https://github.com/xCss/Valine/issues/270)
- `F` Fix the initialization error caused by using a lower version of `av-min.js`
- `U` Some style optimization
- `U` Code logic optimization

## v1.4.5, 2020-04-21
- `A` Added support for QQ avatars. [#192](https://github.com/xCss/Valine/issues/192)
- `A` Add custom emoticons [#261](https://github.com/xCss/Valine/issues/261) [#260](https://github.com/xCss/Valine/issues/260) [#150](https://github.com/xCss/Valine/issues/150)
- `F` Bug Fix for Marked Rendering Error [#275](https://github.com/xCss/Valine/issues/275) [#269](https://github.com/xCss/Valine/issues/269)
- `F` Fix bug where code highlighting style is overwritten [#270](https://github.com/xCss/Valine/issues/270)
- `F` Fix a bug in the reading count exception [#272](https://github.com/xCss/Valine/issues/272)
- `F` Fixes style rendering anomaly in night mode
- `U` Some style optimization
- `U` Code logic optimization

## v1.4.0~v1.4.4, 2020-04-11  
- `A` New SDK loading logic
- `A` New picture `expressions`
- `A` Added `screenshot paste` upload
- `A` Add `Image Drag and Drop to Comment Box` Upload
- `A` Add support for `MathJax`
- `A` Additional support for `KaTex`
- `A` New comment box `Floor response`
- `A` New support for `dark mode` [#221](https://github.com/xCss/Valine/issues/221)
- `A` New UI interface for the comments area 
- `A` Added support for multilingualism such as `zh-CN/zh-TW/en/jp`
- `F` Fix `Bug` [#257](https://github.com/xCss/Valine/issues/257) that requires comment data to be refreshed to display when replying to comments
- `F` Fix `Emoji` and `Preview` `Bug` that can only be opened and not retrieved [#254](https://github.com/xCss/Valine/issues/254)
- `F` Fix `Bug` for `Edge browser` recognition as `Chrome` [#250](https://github.com/xCss/Valine/issues/250)
- `F` Fix `Bug` for `Storage is not defined` [#242](https://github.com/xCss/Valine/issues/242)
- `F` Fix possible `xss vulnerabilities` [#218](https://github.com/xCss/Valine/issues/218)
- `F` Fix pagination `Bug` [#196](https://github.com/xCss/Valine/issues/196)
- `F` Fix `click` to expand more `bug` hits [#180](https://github.com/xCss/Valine/issues/180)
- `F` Fix `Bug` for individual UA identification failure
- `F` Fix `Bug` where the number of comments changed to 1 after replying to a comment [#264](https://github.com/xCss/Valine/issues/264) 
- `U` expression picture lazy loading [#261](https://github.com/xCss/Valine/issues/261) 
- `U` Delete `certification code` [#207](https://github.com/xCss/Valine/issues/207)
- `U` Delete the accompanying `mail alert` [#20](https://github.com/xCss/Valine/issues/20)
- `U` Code logic optimization

> `Note`: `MathJax` and `KaTex` require the current page to be loaded and configured with the relevant resource files.


## v1.3.6, 2019-04-01
- `F` Fix Code Highlighting Failure `Bug`
- `F` Fix `Bug` by [@sxyugao](https://github.com/sxyugao) that previously failed to use `Pjax` and `v1.3.5`
- `F` Fix the comment content by clicking `@NickName` and jumping to the new page `Bug`
- `F` Other `Bug` fixes

## v1.3.5, 2019-03-29
- `A` Added privacy protection: remove sensitive (E-mail) data from the page
- `A` Add `recordIP` attribute (`Boolean`): Add IP statistics by [@Showfom](https://github.com/Showfom) [#160](https://github.com/xCss/Valine/issues/160) 
- `U` Some style modifications
- `U` Code logic optimization

## v1.3.4, 2018-11-24
- `F` Fix `xss` security vulnerabilities in `img`.
- `F` Fix `xss` security vulnerabilities in `embed`.
- `F` Fix bug that comment box content does not restore.

## v1.3.3, 2018-09-26

- `F` Fix bugs that can customize `CSS`

## v1.3.1, 2018-09-03

- `A` Added `avatarForce` field, force update avatar every time you visit
- `F` Fix bug that comment box does not reset after submitting a comment

## v1.3.0, 2018-07-29

- `A` Added `pid` field
- `A` Added `at` anchor positioning
- `U` Filters out HTML elements such as `iframe`
- `F` BUG fix

---------------------

[more logs >](https://github.com/xCss/Valine/releases)


---------------------
