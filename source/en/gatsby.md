---
title: Used in Gatsby
---

Valine can be embedded to Gatsby pages with [`gatsby-plugin-valine`](https://www.npmjs.com/package/gatsby-plugin-valine)

This plugin comes with TypeScript support (as written in TypeScript), and currently supports Gatsby v2 only.

## Install

1. Download & install the npm package with:

    ```shell
    npm install --save gatsby-plugin-valine

    # Or with yarn

    yarn add gatsby-plugin-valine
    ```

2. Add the plugin into the `gatsby-config.js` script of your project:

    ```js
    // gatsby-config.js
    {
        module.exports = {
            plugins: [`gatsby-plugin-valine`],
        };
    }
    ```

3. The plugin supports options defined in `gatsby-config.js`, which looks like:

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

## How To Use

After installing the plugin, just import and add the `<Valine>` component wherever it fits.

For example, if you want to add the comment feature below every blog post in a Gatsby site built upon the `gatsby-starter-blog`[https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/] template, just add the following codes into `src/templates/blog-post.js`:

```js
import Valine from 'gatsby-plugin-valine' // import the module

...

const BlogPostTemplate = ({ data, pageContext, location }) => {
  ...
  return (
    <Layout location={location} title={siteTitle}>
      ...
      <!--Adds Valine component at the end of the page-->
      <Valine appId="LEANCLOUD_APP_ID" appKey="LEANCLOUD_APP_KEY"/>
    </Layout>
  )
}
```

**Note that** in the example above, the values of `appId` & `appKey` are assigned as props to the `<Valine>` tag. Other Valine Options can be set in this way as well.

On the other hand, however, if the inline-style looks redundant and messy to you (say, Valine needs to be embedded into multiple unique pages), you can always set **global** Valine Options via plugin options.

> The **local options** (assigned as component props) will be deeply/recursively merged with the **global options** (those in `gatsby-config.js`), and override the global ones on property conflicts, which is essentially a `lodash merge` operation.

## Valine Options

As stated in former sections, Valine Options can be assigned either by _plugin options_ or by _component props_.

All available options in Valine `1.4.14` are supported **EXCEPT** the `el`, which is overridden within the plugin. There is no use for setting the `el` option explicitly.

For more information and detailed descriptions about the Valine Options, please check out [the official documentation](https://valine.js.org/en/configuration.html). For TypeScript developers, `Valine` component props are well-commented in Chinese, so that can be easily viewed in code editors.

Below is a quick reference of supported Valine Options, described in a TypeScript style.

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

## Styling Component

`<Valine>` supports `style` and `className` props for component styling.

The custom CSS styles & classes are applied to the Valine's container element, i.e. to the very element with the `v` class. Custom classes will precede the `v` class.
