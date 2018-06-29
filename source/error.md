---
title: 错误代码
---

# 错误代码

## 1
- 信息 - `Internal server error. No information available.`
- 含义 - 服务器内部错误或者参数错误，一般是因为传入了错误的参数，或者没有在本文档里明确定义的运行时错误，都会以代码 1 指代。

## 100
- 信息 - `The connection to the AVOS servers failed.`
- 含义 - 无法建立 TCP 连接到 LeanCloud 服务器，通常是因为网络故障，或者Leancloud 服务器故障引起的，Leancloud 服务器状态可以查看 [健康状态检查](https://status.leancloud.cn/)。

## 116
- 信息 - `The object is too large.`
- 含义 - 要存储的对象超过了大小限制，Leancloud 限制单个对象的最大大小在 16 M。

## 117
- 信息 - `The key is read only.`
- 含义 - 更新的 `Key` 是只读属性，无法更新。

## 124
- 信息 - `The request timed out on the server. Typically this indicates the request is too expensive.`
- 含义 - 请求超时，超过一定时间（默认 10 秒）没有返回，通常是因为网络故障或者该操作太耗时引起的。

## 140
- 信息 - `超过应用额度，请升级到商用版或联系我们处理。`
- 含义 - 通常是因为超过开发版的使用额度，比如每天 3 万次 API 调用限制、云引擎域名绑定限制等，可以通过升级商用版解决。

## 401
- 信息 - `Unauthorized.`
- 含义 - 未经授权的访问，没有提供 `App id`，或者 `App id` 和 `App key` 校验失败，请检查配置。