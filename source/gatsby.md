---
title: 在Gatsby中使用
---

可以使用[`gatsby-plugin-valine`](https://www.npmjs.com/package/gatsby-plugin-valine)插件在 Gatsby 站点中嵌入 Valine 组件。

本插件支持 TypeScript（因为就是用 TypeScript 写的），目前仅支持 Gatsby v2。

## 安装

1. 通过 `npm` 下载和安装本插件:

    ```shell
    npm install --save gatsby-plugin-valine

    # 或者用 yarn:

    yarn add gatsby-plugin-valine
    ```

2. 在项目的 `gatsby-config.js` 文件中加入插件配置:

    ```js
    // gatsby-config.js
    {
        module.exports = {
            plugins: [`gatsby-plugin-valine`],
        };
    }
    ```

3. 在 `gatsby-config.js` 中配置插件时，也支持设置插件选项，比如这样:

    ```js
    // gatsby-config.js
    {
        module.exports = {
            plugins: [
                {
                    resolve: `gatsby-plugin-valine`,
                    options: {
                        appId: `LEANCLOUD_APP_ID`,
                        appKey: `LEANCLOUD_APP_KEY`,
                        avatar: `robohash`,
                    },
                },
            ],
        };
    }
    ```

## 使用插件

插件安装好后，只需要在需要的页面中导入它并添加`<Valine>`组件标签即可。

比如你希望在一个用`gatsby-starter-blog`模板创建的博客站点上加入评论功能，并将 Valine 评论显示在每个博客文章页面的底部，那么只需要在`src/templates/blog-post.js`文件中添加如下代码：

```js
import Valine from 'gatsby-plugin-valine' // 导入

...

const BlogPostTemplate = ({ data, pageContext, location }) => {
  ...
  return (
    <Layout location={location} title={siteTitle}>
      ...
      <!-- 在页面框架最后添加Valine标签 -->
      <Valine appId="LEANCLOUD_APP_ID" appKey="LEANCLOUD_APP_KEY"/>
    </Layout>
  )
}
```

也许你已经注意到，在上例中`appId`和`appKey`的值是作为`<Valine>`标签的属性传入的。同理，其他 Valine 选项也可以用这种方式传入。

如果这种方式对你来说看着太乱，或者太麻烦（比如有多个页面都需要添加标签），那么也可以在`gatsby-config.js`的**插件选项**中进行**全局**设置。

> 标签里的**局部选项**会与`gatsby-config.js`提供的**全局选项**进行**深度合并**（`lodash`的`merge`行为），且局部选项会覆盖同名的全局选项。

## Valine 选项

如前文所述，Valine 选项可以通过**插件选项**或**组件属性**进行设置。**除`el`以外**，本插件支持 Valine `1.4.14`版本所提供的所有可用选项。`el`属性在插件中会被改写，因此设置了也没效果。

关于 Valine 选项的更多详细描述，请参阅[配置项](https://valine.js.org/configuration.html)。

`Valine`组件的各属性已经编写了详细的注释，TypeScript 开发者可以在支持的代码编辑器中直接查看。

下面是插件支持的 Valine 选项列表，以便快速查阅。列表使用 TypeScript 的语法进行了类型描述。

```ts
  appId?: string
  appKey?: string
  placeholder?: string
  path?: string
  avatar?: '' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'hide'
  meta?: ('nick' | 'mail' | 'link')[]
  pageSize?: number
  lang?: string
  visitor?: boolean
  highlight?: boolean
  avatarForce?: boolean
  recordIP?: boolean
  serverURLs?: string
  emojiCDN?: string
  emojiMaps?: Record<string, string>
  enableQQ?: boolean
  requiredFields?: ['nick'] | ['nick', 'mail']
```

## 为组件设置样式

`<Valine>` 组件支持 `style` 和 `className` 两个属性，以便开发者进行 CSS 样式重写和定制。

自定义的样式和 CSS 类名会被应用到`Valine`的容器 DOM 节点上，即拥有 CSS 类`v`的那个节点。自定义的类名会出现在`v`之前。
