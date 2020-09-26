/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/23/ce-shi-wen-dang/example-md/index.html","e885fe1406b036eefbef78b7ff5a5bab"],["/2020/05/03/ce-shi-wen-dang/hello-world/index.html","d0bcdd1d625ec2be079d0bb442eecc79"],["/2020/05/24/jvm/jdk-ti-xi-jie-gou/index.html","a962c03d7b0623da0b9bd95f5f7c1fff"],["/2020/05/31/bing-fa-bian-cheng/java-bing-fa-thread-runnable-xiang-xi-jiang-jie/index.html","86a863bbad4e142026640c62203b28b2"],["/2020/05/31/ce-shi-wen-dang/test1/index.html","d50b64db05d52bbfc6375d0675432129"],["/2020/05/31/ce-shi-wen-dang/test2/index.html","c435dbc008af524cc5710e665f4ef6a8"],["/2020/05/31/ce-shi-wen-dang/test3/index.html","738cf5c8fbe3f7179d0aa9e404948be1"],["/2020/05/31/ce-shi-wen-dang/test4/index.html","1a7e25917ca9295906a8f15d26b21613"],["/2020/05/31/ce-shi-wen-dang/test5/index.html","0ab6e39d4a03addfc8388490d912c2b8"],["/2020/06/13/gu-li-shang-cheng-xiang-mu-fang-dang/nacos-gateway/index.html","eb17c55a98117d201a9f3a5128d27f60"],["/2020/06/14/mysql/mysql-dui-yu-qian-wan-ji-de-da-biao-yao-zen-me-you-hua/index.html","c7db87cb12b052114cdc2fc81a0b4df8"],["/2020/06/21/kafka/centos-an-zhuang-kafka/index.html","98a7a2986d5387aacae5b1701805e3f0"],["/2020/06/25/jenkins/jenkins-pei-zhi-zhu-ti/index.html","2748dbb75271255e09deaabf65667e10"],["/2020/07/11/jvm/asm-ru-men/index.html","a2ff132080ce343c1e5e93d981a20ac9"],["/2020/07/19/linux/virtualbox-qiao-jie-mo-shi-xia-ru-he-shi-xian-jing-tai-ip-fang-wen-nei-wai-wang/index.html","9fe30d9f8d70d853a38fd86a9e8f2e34"],["/2020/08/23/springboot/webmvcconfigurer-jie-kou-xiang-jie/index.html","22df3e846e9010b1264c6a2cc471cfb0"],["/2020/09/26/vue/guan-yu-an-zhuang-liao-vue-dan-vue-ming-ling-bu-sheng-xiao-de-wen-ti/index.html","ef1ca78a32766bfea2e615c2ec963f52"],["/404.html","9b43058a24fb3354b2f07598efa7ad54"],["/about/index.html","f72debab81e054903b580cdae8ad7381"],["/archives/2020/02/index.html","5204c1dcafa55eba31ea4367b9a09dc4"],["/archives/2020/05/index.html","06435cfeae14270a8fc9118cac9295ad"],["/archives/2020/05/page/2/index.html","dab92412a45803763b784f8b7384e01e"],["/archives/2020/06/index.html","60dcd536e10533b025c79d5ab84ea0ac"],["/archives/2020/07/index.html","ba1091b21f9e3ede5f5d76219389eea0"],["/archives/2020/08/index.html","c948c613b2d1cdcde21ee7187f38ed26"],["/archives/2020/09/index.html","52e69fc82f310c72ba1ebab7ca85cd9a"],["/archives/2020/index.html","e65aecf17fdcb73989b7fd28ff728105"],["/archives/2020/page/2/index.html","4980b3f1cc5a21c46972a951cfd6ae2d"],["/archives/2020/page/3/index.html","f02d5b774dc15ad75a9f3baca4bcb965"],["/archives/index.html","a96b68501869768e7d3a801677fe4dc1"],["/archives/page/2/index.html","a96b68501869768e7d3a801677fe4dc1"],["/archives/page/3/index.html","711acb8612ee45ea2d593ae83099568b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/CentOS/index.html","a0cd2f751714abac7d03f233401ff956"],["/categories/JDK/JVM/index.html","6a47e5e02ed6b572f560907eb15a92b7"],["/categories/JDK/index.html","252f4deab43ee30ae326ef551745a9ad"],["/categories/Java/JDK/index.html","9f62135fc6e790e97c92012720143b3b"],["/categories/Java/index.html","4370994876b9a573d5ee5782eae9224f"],["/categories/Java并发/index.html","d9d6094e0147664ece24867778f7e8d2"],["/categories/Java并发/多线程/index.html","eddc0bf4f5a036868a1d5d6704828cae"],["/categories/MySQL/index.html","038ff2474933dcdd1046bb7537f4fcc8"],["/categories/SpringBoot/SpringMVC/index.html","aeace0e5b2386296c0f46114fc06fb48"],["/categories/SpringBoot/index.html","5ca9eaebf6b585a0894f6b15526389d6"],["/categories/index.html","f4fef736b2d91b2ad38f6c1de1c38ca3"],["/categories/nacos/gateway/index.html","25dcca428b127a6219358ac3b1850696"],["/categories/nacos/index.html","086e441ecdebd4c5ff7933ae97343f68"],["/categories/vue/index.html","543e97e1165ae95f303bd6fc0c4cde1b"],["/categories/测试/index.html","cd0b1fbc5f1a97c67ae5bed02786d91f"],["/categories/测试/测试A/index.html","1053661b388fd8ba07ab83dbeefa8b45"],["/contact/index.html","96a24e66adb5b389adde5df2c2049ebd"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/style.css","8c651c5e559da3b2381f596de70dc8b1"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","0286af3686593e7eda88cbf153723bd6"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","1a8d07d1b6dc0e47976b22abfd7ce288"],["/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","1aa954aa815a83e11f6b1887de0d4af3"],["/page/2/index.html","79e6f8480bcc608efe89614388a23c81"],["/page/3/index.html","2e8e6dd698dc01c1c1b779b7f3d11cd6"],["/sw-register.js","b56f26f3d26b358deae9413c745b2fc7"],["/tags/ASM/index.html","310a7cf626446af4a72792a38bcd08de"],["/tags/JVM/index.html","ed1cebfe16cea62508b98fb779c98447"],["/tags/Jenkins/index.html","408300c5d57634c27703c2304766b7bc"],["/tags/Linux/index.html","78368f4b897dc389e6da9fabffb57a05"],["/tags/SpringBoot/index.html","8bf12982764237391656e93c1f211a2a"],["/tags/SpringMVC/index.html","1e2338d4dde662103fbd7bd6e30a082a"],["/tags/index.html","02d5955e2a81e21d30fbf17d493e9c0a"],["/tags/vue/index.html","909c8ea760ca4214ce321ffae3bf8527"],["/tags/分库分表/index.html","b40083d19fe03c9a3774474e56772b83"],["/tags/并发编程/index.html","755918b575ef400ecf01662f5240372d"],["/tags/性能优化/index.html","912ab07ebb4eece06613c73661b9ece3"],["/tags/毒鸡汤/index.html","a3c775fc7ffb6258e477d6590d4f8285"],["/tags/测试/index.html","96a0b8d3163084675248323b48202186"],["/tags/问题纠错/index.html","6d90c7a2fd077b01419286eaba0d7629"],["/tags/项目文档/index.html","3e9fe4fc60c5f955320ae2c85d0bf075"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
