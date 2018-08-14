---
title: 邮件提醒
description: Valine 评论系统中的邮件提醒设置
---

## Leancloud 中的设置

进入`Leancloud`>选择你的评论所存放的`应用`>`设置`>`邮件模板`，按下图设置好用于`重置密码`的邮件主题>然后保存:

![](https://ws1.sinaimg.cn/large/006qRazegy1fiht7mk8cqj311y0di0uj.jpg)

> **注**：请注意修改链接为你的`博客`或者`网站首页`。

``` html
<p>Hi, {{username}}</p>
<p>
你在 {{appname}} 的评论收到了新的回复，请点击查看：
</p>
<p><a href="你的网址首页链接" style="display: inline-block; padding: 10px 20px; border-radius: 4px; background-color: #3090e4; color: #fff; text-decoration: none;">马上查看</a></p>
```

## 注意事项

- 发送次数过多，可能会暂时被Leancloud 屏蔽邮件发送功能  
- 由于`邮件提醒`功能使用的`Leancloud的密码重置邮件提醒`，只能传递`昵称`、`邮箱`两个属性，所以邮件提醒链接`无法直达指定文章页`。**请悉知**。  
- 开启`邮件提醒`会默认开启`验证码`选项。  
- 该功能目前还在测试阶段，谨慎使用。

- 目前`邮件提醒`正处于测试阶段，仅在`子级`对存在邮件地址的`父级`发表评论时发送邮件

## 第三方支持

如果你对Valine自带的`邮件提醒`不满意，其实还使用更完善的第三方`邮件提醒`：
- [Valine-Admin](https://github.com/zhaojun1998/Valine-Admin) (by [@zhaojun1998](https://github.com/zhaojun1998/Valine-Admin))
