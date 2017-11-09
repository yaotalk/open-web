<template>
    <div class="yt-content">
        <div class="help-section">
            <div class="help-title">鉴权服务技术方案</div>
            <img class="help-line" src="../../../assets/img/developer/title_line.png">
                <p class="api-content">小视小视开放平台通过签名来验证请求的合法性。开发者通过将签名授权给客户端，使其具备使用小视小视开放平台能力。
                    密钥的获取及签名的生成方法如下：</p>
                <div class="api-dot-title">1 申请应用密钥</div>
                <p class="api-content"><span class="l mr5">(1)</span>登录 open.youtu.qq.com, 进入应用管理页面。
                </p>
                <p class="api-content"><span class="l mr5">(2)</span>如用户未创建应用，可通过新建应用功能创建应用，获取AppID、SecretID和SecretKey。
                </p>
                <p class="api-content"><span class="l mr5">(3)</span>如用户已创建应用，则可直接获取AppID、SecretID和SecretKey。
                </p>
                <div class="api-dot-title">2 签名样例</div>
                <p class="api-content">
                    签名生成后，放入http请求的头部,并以Authorization为key；签名的生成，推荐使用我们提供的各语言SDK,SDK里含有完整的签名流程</p>

                <p class="api-content">我们提供以下几种语言的SDK：
                    <a href="https://github.com/TencentYouTu/php_sdk" target="_blank">php</a>,
                    <a href="https://github.com/TencentYouTu/java_sdk" target="_blank">java</a>,
                    <a href="https://github.com/TencentYouTu/nodejs_sdk" target="_blank">nodejs</a>,
                    <a href="https://github.com/TencentYouTu/python_sdk" target="_blank">python</a>,
                    <a href="https://github.com/TencentYouTu/Cplusplus_sdk" target="_blank">c++</a>
                </p>
                <div class="api-dot-title">3 签名算法</div>
                <p class="api-content">如果用户要自己实现签名算法，以人脸检测接口说明如下：</p>

                <p class="api-content">使用的API版本:v1</p>

                <p class="api-content"> 开发者的UIN: 10000 </p>

                <p class="api-content"> 人脸检测接口的URL为 http://api.youtu.qq.com/youtu/api/facedetect</p>

                <p><strong>3.1</strong> 通过1.1你已经获取了AppID、SecretID和SecretKey；这里假设分别是：</p>
                <div class="help-level-2">
                <pre class="api-content">AppID =2011541224
SecretID= AKID2ZkOXFyDRHZRlbPo93SMtzVY79kpAdGP
SecretKey=ckKU7P4FwB4PBZQlnB9hfBAcaKZMeUge</pre>
                </div>
                <p><strong>3.2</strong> 拼接有效签名串</p>
                <div class="help-level-2">
                    <pre class="api-content">u=10000&amp;a=2011541224&amp;k=AKID2ZkOXFyDRHZRlbPo93SMtzVY79kpAdGP&amp;e=1432970065&amp;t=1427786065&amp;r=270494647&amp;f=</pre>

                    <p class="api-content">u为开发者创建应用时的QQ号</p>

                    <p class="api-content">a为用户的AppID</p>

                    <p class="api-content">k为用户的SecretID</p>

                    <p class="api-content">t为当前时间戳，是一个符合UNIX Epoch时间戳规范的数值，单位为秒</p>

                    <p class="api-content">
                        e为此签名的凭证有效期，是一个符合UNIX Epoch时间戳规范的数值，单位为秒, e应大于t, 生成的签名在 t 到 e 的时间内 都是有效的. 如果是0,
                        则生成的签名只有再t的时刻是有效的.</p>

                    <p class="api-content">r为随机串，无符号10进制整数，用户需自行生成，最长10位。</p>

                    <p class="api-content">f为空</p>
                    <div class="api-content">
                        拼接有效签名串的结果,下文称之为orignal
                    </div>
                </div>
                <p><strong>3.3</strong> 生成签名串</p>
                <div class="help-level-2">
                    <p class="api-content"><span class="l mr5">(1)</span>小视小视开放平台 使用 HMAC-SHA1 算法对请求进行签名。
                    </p>
                    <p class="api-content"><span class="l mr5">(2)</span>签名串需要使用 Base64 编码。</p>
                    <p class="api-content">
                        根据签名方法Sign= Base64(HMAC-SHA1(SecretKey, orignal) +
                        original)，其中SecretKey为1.3.1获取，orignal为1.3.2中拼接好的签名串，对orignal使用HMAC-SHA1算法进行签名，然后将orignal附加到签名结果的末尾，再进行Base64编码，得到最终的sign。
                        注：此处使用的是标准的Base64编码，不是urlsafe的Base64编码，请注意。
                        以 PHP 语言为例,其他语言参见SDK下载链接.
                    </p>

                    <pre class="api-content">
                        $SecretID = 'AKID2ZkOXFyDRHZRlbPo93SMtzVY79kpAdGP';
                        $secretKey = 'ckKU7P4FwB4PBZQlnB9hfBAcaKZMeUge';
                        $orignal='u=10000&amp;a=2011541224&amp;k=AKID2ZkOXFyDRHZRlbPo93SMtzVY79kpAdGP&amp;e=1432970065&amp;t=1427786065&amp;r=270494647&amp;f=';
                        $signStr = base64_encode(hash_hmac('sha1', $srcStr, $secretKey, true).$srcStr);
                        echo $signStr."\n";
                                        </pre>
                    <p class="api-content">
                        使用其它程序设计语言开发时, 可用上面示例中的原文进行签名验证, 得到的签名串与例子中的一致即可。
                    </p>
                </div>

                <p><strong>3.4</strong> 使用签名串</p>
                <div class="help-level-2">
                    <div class="api-content">
                        以PHP语言为例, 使用如下语法进行人脸检测请求：
                    </div>

                    <pre class="api-content">// 需要检测的人脸图片数据
                          $image = file_get_contents('test.jpg');
                          // 请求数据,是JSON格式的, 文件等二进制数据 需要转换成 base64 编码
                          $post_data = json_encode(
                          array(
                          "app_id" =&gt;  2011541224,
                          "image" =&gt;  base64_encode($image),
                          ));
                          // 生成的签名 添加在请求头部的 Authorization 字段里面
                          $req = array(
                          'url' =&gt; 'http://api.youtu.qq.com/youtu/api/facedetect',
                          'method' =&gt; 'post',
                          'timeout' =&gt; 10,
                          'data' =&gt; $post_data,
                          'header' =&gt; array(
                          'Authorization: '.$signStr,
                          ),
                          );
                          // 向服务端发送请求
                          $rsp  = Http::send($req);
                          Http::send为SDK里面定义的方法，具体参见示例
                </pre>
                </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'authent',
        data () {
            return {
            }
        },
        mounted:function () {
            let obj = {};
            obj.selected = 'authent',
            obj.pselected = 'new';
            obj.pselecteds = ['new']
            this.$emit('on-result-change', obj)
        },
        refreashPage:function () {
            
        }
    }
</script>
<style scoped>
    .help-title{
        font-size: 20px;
    }
    .help-section {
        /*background: url(../../../assets/img/developer/title_icon1.png) no-repeat;*/
        margin-bottom: 34px;
        overflow: hidden;
        padding-left: 50px;
    }
    .help-section p {
        margin: 10px 0;
        line-height: 1.5;
    }
    .api-dot-title {
        font-size: 20px;
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 15px;
        color: #666666;
    }
    .api-content {
        font-size: 14px;
        color: #808080;
    }
</style>