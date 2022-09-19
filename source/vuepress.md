---
title: 在 VuePress 中使用
---

目前，[vuepress-plugin-comment](https://github.com/dongyuanxin/vuepress-plugin-comment) 支持在 Vuepress 中使用 Valine，自动管理 SPA 路由 相关的工作。

## 安装

如果使用 `npm`：

```sh
npm install --save vuepress-plugin-comment
```

如果使用 `yarn`:

```sh
yarn add vuepress-plugin-comment -D
```

## 快速使用

将 `vuepress-plugin-comment` 添加到 vuepress 项目的插件配置中：

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options 选项中的所有参数，会传给 Valine 的配置
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

## 进阶用法

- [docs](https://www.npmjs.com/package/vuepress-plugin-comment)
