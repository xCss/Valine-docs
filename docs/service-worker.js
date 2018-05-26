/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "721d83acc9605b20073783a940ab82a9"
  },
  {
    "url": "assets/alipay.png",
    "revision": "6e3a78f93ffb8107d0f6f7886f4c1259"
  },
  {
    "url": "assets/css/20.styles.47b6dbaa.css",
    "revision": "f9f04ad33ca09adb56161cdc4956ce74"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.6813c40c.js",
    "revision": "08e7b298505f5c754b1ccad630170fa0"
  },
  {
    "url": "assets/js/1.9d9d0bdb.js",
    "revision": "b08a4dd7dbed34b1ea5d4077e3e882a2"
  },
  {
    "url": "assets/js/10.cb323f51.js",
    "revision": "2eaa865283b2f63d5ed11b53a8dd4159"
  },
  {
    "url": "assets/js/11.a8d56584.js",
    "revision": "6d35f475ea9702d20f03e2127898b4ce"
  },
  {
    "url": "assets/js/12.6bd2c856.js",
    "revision": "8fb1a43a0ab64c06c1c34d03617deac1"
  },
  {
    "url": "assets/js/13.f8cb5487.js",
    "revision": "3d063639907c419c50aa7479c145a526"
  },
  {
    "url": "assets/js/14.e923f955.js",
    "revision": "9191a641362d1d6b06e158b7bb3b58e5"
  },
  {
    "url": "assets/js/15.504fa876.js",
    "revision": "d80c3a01bd7f35939c6df834f3032148"
  },
  {
    "url": "assets/js/16.195347cf.js",
    "revision": "477c95cb0fadbe0e92c6e81eb9174442"
  },
  {
    "url": "assets/js/17.02d824d2.js",
    "revision": "fc66c5106274a13b40336983c1cf2e23"
  },
  {
    "url": "assets/js/18.1bc19302.js",
    "revision": "6263ef2c0a04541b12b4362146857edd"
  },
  {
    "url": "assets/js/19.5dc9dfa6.js",
    "revision": "59ed96e0f35f553dbbdabf026caa5d92"
  },
  {
    "url": "assets/js/2.30357149.js",
    "revision": "9390520c9f6c2215cc8ae6d5a1962407"
  },
  {
    "url": "assets/js/3.be5bc839.js",
    "revision": "f181c66fac0d0f21f75c8e0ab9d0f460"
  },
  {
    "url": "assets/js/4.54e00ae7.js",
    "revision": "0ca4173cffb55bb2aef693bfd4ccc356"
  },
  {
    "url": "assets/js/5.d06dcc38.js",
    "revision": "897b9cc0f1c13b2c136dce8b2d63ff72"
  },
  {
    "url": "assets/js/6.6bbe8698.js",
    "revision": "16644025a2974a5bc4c4380b8b7896a5"
  },
  {
    "url": "assets/js/7.f4756025.js",
    "revision": "e63aeb1c860cb168136f45df658dd197"
  },
  {
    "url": "assets/js/8.6b9774a3.js",
    "revision": "e8b833edff6257c73398aa8c41f18d3c"
  },
  {
    "url": "assets/js/9.2ef93453.js",
    "revision": "34f6d0b760e1241dfa9e1acde5c5e24d"
  },
  {
    "url": "assets/js/app.108b5b1a.js",
    "revision": "8b1d48fb83a65ed232ae2d7d60d46f7e"
  },
  {
    "url": "assets/valine.png",
    "revision": "30d0d0a5896f634c2dbe4ad8d48026a4"
  },
  {
    "url": "assets/wechat.png",
    "revision": "f18efe55ffaac65176ffc004c74d020a"
  },
  {
    "url": "en/guide/avatar.html",
    "revision": "8c57c1c5f0ea893cf223e9d324f4db01"
  },
  {
    "url": "en/guide/cdn.html",
    "revision": "9bda6d7dbfe308f6b682e42db8d5ae09"
  },
  {
    "url": "en/guide/config.html",
    "revision": "b4f2ea44c12540d0ab10e8d3e6a4e38e"
  },
  {
    "url": "en/guide/hexo.html",
    "revision": "855ba9128e28c3f76ff05d2fa7ac0a58"
  },
  {
    "url": "en/guide/index.html",
    "revision": "81e555d924dc8da5f77d0baf2e54b55c"
  },
  {
    "url": "en/guide/notify.html",
    "revision": "9c831880867f0d86780998bdb5ce5cfc"
  },
  {
    "url": "en/guide/quickstart.html",
    "revision": "4d8c10f6579f59543501a0649ecc9de2"
  },
  {
    "url": "en/index.html",
    "revision": "1572bc443874d25fc8afaf80991f763b"
  },
  {
    "url": "guide/avatar.html",
    "revision": "04a78bff22edc66b5497b52c726f0b13"
  },
  {
    "url": "guide/cdn.html",
    "revision": "559935d2caa7202f95714339d3547bc7"
  },
  {
    "url": "guide/config.html",
    "revision": "98dcf8b29df32c4e878faa3c94f437cf"
  },
  {
    "url": "guide/contact.html",
    "revision": "ce47f496d6f6a83ec0791636ba9b5623"
  },
  {
    "url": "guide/error.html",
    "revision": "c5ed804efd8a073ddf778a074ac99cea"
  },
  {
    "url": "guide/faq.html",
    "revision": "1fc6f838f1a003ec6c89da452e9e3af9"
  },
  {
    "url": "guide/hexo.html",
    "revision": "4076db3b143f9d48ad080b8a91586fd8"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a8e71a70c420fe27be4ab7bbe951c51f"
  },
  {
    "url": "guide/index.html",
    "revision": "3b3563172cea54fdbd63a8b7ef737d54"
  },
  {
    "url": "guide/notify.html",
    "revision": "73450a4d4b6c5d9d65cc64cd1b231f03"
  },
  {
    "url": "guide/quickstart.html",
    "revision": "c532d451fa4e37c8b00f9c0251363c27"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5646ea47f5e14b45ec6f57565946192c"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2c0a3dcb9505194fad2432f5321ade85"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "f2a41d3a5e4a73628bde786e406b55fb"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "3ef739afa57802b1af6b79bc0f4c1910"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "669b21fafaff5da5d84f6024a3c0bbde"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "86dc66c8fff47d30da229a253ea2da06"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "bdcec2a4f3571f7b67f94137ac1e3b69"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "fe20ee70461b06394e8322d5fd4641b4"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3dcc54b1c2a6f9b3407ff0e19a1bb745"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "0963e8ba66c4022f23d0aa2d469a09a0"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8d8b88410cb4e66ae7ceb64dfbe5c18e"
  },
  {
    "url": "index.html",
    "revision": "975088f514b4afd4af44a36a87efbaff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
