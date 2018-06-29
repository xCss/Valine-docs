## Usage

The theme is available on npm as [`meteor-theme-hexo`](https://npm.im/meteor-theme-hexo).  The theme can be used by either:

1. _(preferred)_ Installing the theme from npm and allowing dependency auto-update tools, like [**@renovate-bot**](https://github.com/renovate-bot) or [**@greenkeeperio-bot**](https://github.com/greenkeeperio-bot), to update the npm for you.  This requires you to set the `theme` in your `_config.yml` as `../node_modules/meteor-theme-hexo`; or
2. _(less ideal)_ Cloning this repository into the doc deployment's `themes/meteor` directory and referring to the `theme` in that deployment's `_config.yml` as just `meteor`.  This will require you to update the theme (or at least its submodule) manually!

## Developing

In order to develop this theme, you should:

1. Check out this (`meteor-theme-hexo`) repository.
2. Check out the [`theme-example` docs deployment](https://github.com/meteor/theme-example) alongside the `meteor-theme-hexo` directory.
3. Check out either ([`apollo-hexo-config`](https://github.com/apollographql/apollo-hexo-config) or [`meteor-hexo-config`](https://github.com/meteor/meteor-hexo-config)) alongside the `meteor-theme-hexo` directory.  This will leave you with something like:
     ```
     Dev/
     ├── meteor-theme-hexo/
     ├── meteor-hexo-config/ (or apollo-hexo-config/)
     └── theme-example/
     ```
3. Run `npm install` in the `meteor-theme-hexo`
4. Switch to the `theme-example` directory.
5. Run `npm install`
6. Inside `theme-example`, run:
   ```
   npm start -- --config-dir ../apollo-hexo-config --theme-dir ../meteor-theme-hexo
   ```
   
   (or `meteor-hexo-config`, if working on the Meteor theme!)

> For more information, check the [README.md on `theme-example`](https://github.com/meteor/theme-example/blob/master/README.md).

## Docs docs

There are [docs docs](https://docs-docs.netlify.com/docs/docs/) for help with docs deployments!  Please read them (and help update them on [their own repository](https://github.com/apollographql/docs-docs/) if they're wrong!).

## Known deployments

> Important: Please submit a PR to update this list when making new deployments to ensure they receive important PRs (such as dependency and repo consistency updates).

| <sup>[0]</sup> | GitHub Repo :octocat:  | Deployment URL :rocket: |
| --- | --- | --- |
| :relaxed: | [meteor/guide](https://github.com/meteor/guide/) | https://guide.meteor.com/ |
| :relaxed: | [meteor/docs](https://github.com/meteor/docs/) | https://docs.meteor.com/ |
| :relaxed: | [meteor/galaxy-docs](https://github.com/meteor/galaxy-docs/) | https://galaxy-guide.meteor.com/ |
| :relaxed: | [apollographql/apollo](https://github.com/apollographql/apollo/) | https://www.apollographql.com/docs/ |
| :relaxed: | [apollographql/apollo-client](https://github.com/apollographql/apollo-client/) | https://www.apollographql.com/docs/react/ |
| :relaxed: | [apollographql/apollo-link](https://github.com/apollographql/apollo-link/) | https://www.apollographql.com/docs/link/ |
| :relaxed: | [apollographql/apollo-angular](https://github.com/apollographql/apollo-angular/) | https://www.apollographql.com/docs/angular/ |
| :relaxed: | [apollographql/apollo-ios](https://github.com/apollographql/apollo-ios/) | https://www.apollographql.com/docs/ios/ |
| :relaxed: | [apollographql/apollo-android](https://github.com/apollographql/apollo-android/) | https://www.apollographql.com/docs/android/ |
| :relaxed: | [apollographql/docs-docs](https://github.com/apollographql/docs-docs/) | https://docs-docs.netlify.com/docs/docs/ |
| :relaxed: | [apollographql/graphql-tools](https://github.com/apollographql/graphql-tools/) | https://apollographql.com/docs/graphql-tools/ |
| :relaxed: | [apollographql/apollo-server](https://github.com/apollographql/apollo-server/) | https://apollographql.com/docs/apollo-server/ |
| :relaxed: | [apollographql/subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws/) | https://www.apollographql.com/docs/graphql-subscriptions/ |
| :relaxed: | [apollographql/engine-docs](https://github.com/apollographql/engine-docs/) | https://www.apollographql.com/docs/engine/ |
| :relaxed: | [apollographql/community](https://github.com/apollographql/community/) | https://www.apollographql.com/docs/community/ |

  <sup>[0]</sup> Equipped with auto-update dependency management, so you don't need to make sure the theme is updated.

If a change to this theme is made, it should be re-published to npm.  Those repos using submodules should update their submodule reference to the latest tip and those using the `meteor-theme-hexo` npm package should update that dependency to the latest published version.
