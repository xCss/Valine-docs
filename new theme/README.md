# Test Docs Deployment

This docs deployment is a test [Hexo](https://github.com/hexojs/hexo) theme used by the [`meteor-theme-hexo` (npm) theme](https://github.com/meteor/meteor-theme-hexo) test deployment previews on Netlify.

It can also be used to test theme changes locally!

## Basic Usage

There are two commands, and they use the same arguments which are explained below.

* `npm run build -- <arguments>`
  * This generates the content.
* `npm start -- <arguments>`
  * This generates and also starts a local web server on port 4000.

## Arguments

* `--config-pkg <node-pkg>`
  * Where `<node-pkg>` is a Hexo configuration, such as `apollo-hexo-config`.
  * Either this option, or the next option are required.
* `--config-dir <path>`
  * Where `<path>` is a local checkout of the configuration.
  * Either this option, or the previous option is required.
* `--theme-dir <path>` (defaults to `meteor-theme-hexo` installed from npm)

## Examples

**For the configuration, use your local checkout which is alongside this theme in `../apollo-hexo-config` along with a local copy of the theme which is alongside in `../meteor-theme-hexo`.
```
npm start --  --config-dir ../apollo-hexo-config --theme-dir ../meteor-theme-hexo
```

**Use the Apollo config from npm, but the local checkout of the theme.
```
npm start --  --config-pkg apollo-hexo-config --theme-dir ../meteor-theme-hexo
```

**Use the (published) Apollo config and the theme, both via npm install.
```
npm start -- --config-pkg apollo-hexo-config
```

**Use the (published) Meteor config and the theme, both via npm install.
```
npm start --  --config-pkg meteor-hexo-config
```
