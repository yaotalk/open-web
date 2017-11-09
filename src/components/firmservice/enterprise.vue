<template>
       <div class="yt-content ng-scope">
           <div class="yt-service-banner">
               <div class="yt-service-image"></div>
               <div class="yt-server-dyn">
                   <div class="box">
                       <div class="title">
                           小视云•万象小视
                       </div>
                       <div class="content">
                           <p>企业级图片处理大平台&nbsp;&nbsp;全面的图片处理解决方案</p>
                       </div>
                   </div>
               </div>
           </div>
           <div class="yt-service-h2 yt-mt40">
               关于企业服务
           </div>
           <div class="yt-line yt-mt10"></div>
           <div class="yt-content-section yt-mt30">
               <div class="yt-h24">
                   <p class="yt-p0">1.什么是企业版服务</p>
               </div>
               <div class="content">
                   <div class="yt-t14">
                       <p class="yt-paragraph yt-mt14">更强大的计算服务，更优的算法服务</p>
                       <ul class="yt-spacing4">
                           <li>
                               <p class="yt-paragraph">365x24服务保障，让您的产品Always Online</p>
                           </li>
                           <li class="yt-spacing4">
                               <p class="yt-paragraph">海量运维能力 跨域异地容灾，减少95%受灾损失</p>
                           </li>
                           <li class="yt-spacing4">
                               <p class="yt-paragraph">高性能安全服务，国民级应用的安全待遇</p>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="yt-content-section">
               <div class="yt-h24">
                   <p class="yt-p0">2.万象小视—企业级图片处理平台</p>
               </div>
               <div class="yt-t14 yt-mt14">
                   <p class="yt-paragraph">万象小视是小视小视和小视云携手打造的企业级图片处理大平台，产品融合了小视团队在图片处理领域顶级的技术方案。同时结合小视云存储业务，CDN业务为企业级客户提供一站式的AI云服务。</p>
                   <!--<p class="yt-paragraph">万象小视提供365x24服务保障，拥有海量运维能力跨域异地容灾。让您的产品Always Online</p>-->
               </div>
               <div class="yt-t14 yt-mt14">
                   <p class="yt-paragraph"><span style="font-weight:bold">适用客户类型：</span> 1)企业级客户  2)对接口有大并发要求的客户</p>
               </div>
               <div class="yt-t14 yt-mt14">
                   <p class="yt-paragraph">收费策略: <a href="https://www.qcloud.com/document/product/275/1490" target="_blank" class="yt-service-t00">https://www.qcloud.com/document/product/275/1490</a> </p>
               </div>
               <div class="link-div">
                   <a href="http://www.qcloud.com/product/ci.html" target="_blank" class="yt-service-t00">了解更多</a>
               </div>
           </div>
           <div class="yt-service-h2 yt-mt40">
               FAQ
           </div>
           <div class="yt-line yt-mt10"></div>
           <div class="yt-content-section yt-mt30">
               <div class="yt-service-QA yt-mt0">
                   <div class="yt-service-Q yt-p0">
                       <span class="Q"> Q：</span><span class="content">如何订制需求？</span>
                   </div>
                   <div class="yt-service-A">
                <span class="A">
                    A：
                </span>
                       <div class="content">
                           <p class="yt-paragraph">小视开放平台主要针对个人，以及轻量级的产品提供服务。我们承诺开平的服务免费开放。开放平台所有的计算服务资源根据每日接入的应用动态分配。资源有限。</p>
                           <p class="yt-paragraph2">小视云上小视服务是面向企业级产品提供的人工智能服务以及行业解决方案。7x24不间断云服务保障，拥有更大的并发量，更稳定的服务。</p>
                       </div>
                   </div>
               </div>

               <div class="yt-service-QA">
                   <div class="yt-service-Q yt-p0">
                       <span class="Q"> Q：</span><span class="content">如何迁移企业版？</span>
                   </div>
                   <div class="yt-service-A">
                <span class="A">
                    A：
                </span>
                       <div class="content">
                           <p class="yt-paragraph">开放平台免费版本和小视云企业版本，采用相同的秘钥鉴权方式，可共用一套开发秘钥。因此您无需修改产品秘钥，开发代码。仅更换服务地址为云服务器地址，既可平滑接入企业版。</p>
                           <p class="yt-paragraph2">开发者可以先通过开放平台体验试用免费版本，根据产品情况灵活选择升级企业VIP服务</p>
                       </div>
                   </div>
               </div>

               <div class="yt-service-QA">
                   <div class="yt-service-Q yt-p0">
                       <span class="Q"> Q：</span><span class="content">如何订制需求？</span>
                   </div>
                   <div class="yt-service-A">
                <span class="A">
                    A：
                </span>
                       <div class="content">
                           <p class="yt-paragraph">订制需求的客户请先加入小视开放平台群：454785085，请按照合作需求模板填需求，发送至youtu@tencent.com 我们会有专门的商务同事和您联系</p>
                       </div>
                   </div>
               </div>
           </div>
  </div>
</template>
<script>
    export default{
        name: 'service',
        data () {
            return {
            }
        },
        mounted:function () {
        },
        methods:{
            nodeClick(data){
                this.$goRoute("/service/"+data);
            }
        }
    }
</script>
<style scoped>

    .xs-section{
        margin-left: 300px;
        width: 1000px;
    }
    .yt-content {
        margin-left: 300px;
        padding-left: 50px;
        width: 870px;
        min-height: calc(100vh - 217px);
        font-size: 16px;
        color: #636363;
        overflow: hidden;
        background: #fff;
    }
    .yt-service-banner {
        position: relative;
        width: 100%;
        height: 270px;
    }
    .yt-service-image {
        background: url(../../assets/img/service/banner_qy1.jpg)!important;
        position: absolute;
        width: 100%;
        height: 100%;
        background: no-repeat center center;
        background-size: cover;
    }
    .yt-server-dyn {
        position: absolute;
        width: 100%;
        height: 100%;
        display: table;
        user-select: none;
    }
    .yt-server-dyn .box {
        position: relative;
        left: 40px;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
    }
    .yt-server-dyn .title {
        position: relative;
        /* margin-top: 75px; */
        color: #fff;
        font-size: 34px;
        line-height: 34px;
    }
    .yt-server-dyn .content {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 15px;
        color: #fff;
    }
    .yt-server-dyn .content p {
        line-height: 1.6;
    }
    .yt-service-h2 {
        font-size: 30px;
        color: #333;
        line-height: 1.0;
        font-weight: bold;
    }
    .yt-mt40 {
        margin-top: 40px;
    }

    .yt-line {
        position: relative;
        height: 0;
        border-top: 1px solid #999;
    }
    .yt-mt10 {
        margin-top: 10px;
    }
    .yt-content-section {
        position: relative;
    }
    .yt-mt30 {
        margin-top: 30px !important;
    }
    .yt-content-section {
        position: relative;
        margin-top: 24px;
    }
    .yt-service-h2 {
        font-size: 30px;
        color: #333;
        line-height: 1.0;
        font-weight: bold;
    }
    .yt-mt40 {
        margin-top: 40px;
    }
    .yt-line {
        position: relative;
        height: 0;
        border-top: 1px solid #999;
    }
    .yt-mt10 {
        margin-top: 10px;
    }
    .yt-content-section {
        position: relative;
        margin-top: 24px;
    }
    .yt-mt30 {
        margin-top: 30px !important;
    }
</style>