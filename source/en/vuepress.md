---
title: Used in Vuepress
---

Now, [vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment) has supported to use Valine in Vuepress. And it will manage h5 route automaticly.

## Install

If `npm`：

```sh
npm install --save vuepress-plugin-comment
```

If `yarn`:

```sh
yarn add vuepress-plugin-comment -D
```

## Quick Start

Add `vuepress-plugin-comment` to Vuepress project configuration file:

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
```

## Advanced 

- [docs](https://www.npmjs.com/package/vuepress-plugin-comment)