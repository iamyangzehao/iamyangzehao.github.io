/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/23/ce-shi-wen-dang/example-md/index.html","e885fe1406b036eefbef78b7ff5a5bab"],["/2020/05/03/ce-shi-wen-dang/hello-world/index.html","d0bcdd1d625ec2be079d0bb442eecc79"],["/2020/05/24/jvm/jdk-ti-xi-jie-gou/index.html","a962c03d7b0623da0b9bd95f5f7c1fff"],["/2020/05/31/bing-fa-bian-cheng/java-bing-fa-thread-runnable-xiang-xi-jiang-jie/index.html","86a863bbad4e142026640c62203b28b2"],["/2020/05/31/ce-shi-wen-dang/test1/index.html","d50b64db05d52bbfc6375d0675432129"],["/2020/05/31/ce-shi-wen-dang/test2/index.html","c435dbc008af524cc5710e665f4ef6a8"],["/2020/05/31/ce-shi-wen-dang/test3/index.html","738cf5c8fbe3f7179d0aa9e404948be1"],["/2020/05/31/ce-shi-wen-dang/test4/index.html","1a7e25917ca9295906a8f15d26b21613"],["/2020/05/31/ce-shi-wen-dang/test5/index.html","0ab6e39d4a03addfc8388490d912c2b8"],["/2020/06/13/gu-li-shang-cheng-xiang-mu-fang-dang/nacos-gateway/index.html","eb17c55a98117d201a9f3a5128d27f60"],["/2020/06/14/mysql/mysql-dui-yu-qian-wan-ji-de-da-biao-yao-zen-me-you-hua/index.html","c7db87cb12b052114cdc2fc81a0b4df8"],["/2020/06/21/kafka/centos-an-zhuang-kafka/index.html","98a7a2986d5387aacae5b1701805e3f0"],["/2020/06/25/jenkins/jenkins-pei-zhi-zhu-ti/index.html","2748dbb75271255e09deaabf65667e10"],["/2020/07/11/jvm/asm-ru-men/index.html","a2ff132080ce343c1e5e93d981a20ac9"],["/2020/07/19/linux/virtualbox-qiao-jie-mo-shi-xia-ru-he-shi-xian-jing-tai-ip-fang-wen-nei-wai-wang/index.html","013650a70ecd5c650e22da8ae3fa8c81"],["/404.html","9b43058a24fb3354b2f07598efa7ad54"],["/about/index.html","f72debab81e054903b580cdae8ad7381"],["/archives/2020/02/index.html","e3ffa04272228d6a3712bd61fa1b189e"],["/archives/2020/05/index.html","7c25803e34af7e329d16235607b3fce0"],["/archives/2020/05/page/2/index.html","2ffee6a17340010cda4218505fb63841"],["/archives/2020/06/index.html","1f8fd626ffa7bdb86f1bc7570ec148b0"],["/archives/2020/07/index.html","5d7ab7b14aad52af66f6baf58465c7a6"],["/archives/2020/index.html","8b6f818a6831e8a9b316c5271f80cbcf"],["/archives/2020/page/2/index.html","d2dbd9e2c14cabbbc4ce5ac1b4d81b11"],["/archives/2020/page/3/index.html","8b2903947e695782042905e11c61247f"],["/archives/index.html","d9b355a021ed2864ff47cd12ec13f2e5"],["/archives/page/2/index.html","d9b355a021ed2864ff47cd12ec13f2e5"],["/archives/page/3/index.html","3519b93f74c86ce348ae43e5148849c5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/CentOS/index.html","bbefb9b5302b96a6c43ef21e0f4315e9"],["/categories/JDK/JVM/index.html","98463319b78086022ec876405e260c0a"],["/categories/JDK/index.html","625549e2f12d48304d5eddf38df3aa1d"],["/categories/Java/JDK/index.html","e6b69874b9305fcb27257f96d9a6ca64"],["/categories/Java/index.html","001db75142a1d94336f26beb92c498ff"],["/categories/Java并发/index.html","bc7ce206d381da6c288afe146b862999"],["/categories/Java并发/多线程/index.html","b357cd8c185ea2a77789c75cc4116ec9"],["/categories/MySQL/index.html","2f675ce39880317db7204c1133fd7566"],["/categories/index.html","f7174943cc6df9b6ca98bcadb4792bfe"],["/categories/nacos/gateway/index.html","c92dc7d7fc8be7bc3bab37e5772a6f4e"],["/categories/nacos/index.html","484f3d4749421e21b294dc11de3b478d"],["/categories/测试/index.html","8d58d2c60a3c38addf6b0193aec7d71d"],["/categories/测试/测试A/index.html","b7fb14520e0874bcc9adcbbbced6f26f"],["/contact/index.html","96a24e66adb5b389adde5df2c2049ebd"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/style.css","8c651c5e559da3b2381f596de70dc8b1"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","0286af3686593e7eda88cbf153723bd6"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","2841d0f738b1423702179b6282f00be1"],["/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","82fdd73b52637444e25ddf4225abadec"],["/page/2/index.html","33406aa1bd2b58771e319a0f32d9a4fa"],["/page/3/index.html","b59b2f57449c0bac1441d27cab816276"],["/sw-register.js","5554d6ea8f842a277a92944ce48bd8c2"],["/tags/ASM/index.html","c085f8d6dfac7ee99e6948b3ecd2e2b4"],["/tags/JVM/index.html","20c471b2b3951839cf11f6aba7405d96"],["/tags/Jenkins/index.html","f580dea34d5a27eed78e74471c8004f9"],["/tags/Linux/index.html","e45e302b45ccbe7ee02006d39a3721fa"],["/tags/index.html","96ef197695bd8fe5ec4d67b6e1f9520a"],["/tags/分库分表/index.html","90365a5284a8d81a22147385462949d8"],["/tags/并发编程/index.html","6637a3ef4c324e7e0d6033f5a61bbba5"],["/tags/性能优化/index.html","ed5892c682625848946af59dfc592cb1"],["/tags/毒鸡汤/index.html","067a481524c03c28e079bcd0ed56a8bf"],["/tags/测试/index.html","3351cf7b3b27dd26c4ad5e4c413fbb91"],["/tags/项目文档/index.html","2b8793b8c0fd5d66419ab5780b144dce"]];
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
