<template>
    <div class="yt-content ng-scope">
        <div class="yt-service-banner">
       <img src="../../assets/img/service/banner-coo.jpg" class="img">
       <div class="api_title wid wow animated fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
           <a :class="hover==0 ? 'hover' : '' " @click="test(0)" >全部</a>

           <a :class="hover==1 ? 'hover' : '' " @click="test(1)" >金融</a>

           <a :class="hover==2 ? 'hover' : '' " @click="test(2)" class="">安防</a>

           <a :class="hover==3 ? 'hover' : '' " @click="test(3)" >其他</a>
       </div>
       <div v-if="hover== 0" id="testDiv3" class="detail">
           <div  class="anli_con wid clearfix">
               <div class="anli_left"><img bimg="" src="http://www.cloudwalk.cn//upload/fiendImg/2016961557619.jpg" data-type="video"> </div>
               <div class="anli_right">
                   <h4><a>山东城商行联盟｜集成生物识别平台、VIP客户识别</a></h4>
                   <p>云从科技携手山东城商行联盟，通过集成生物识别平台为各城商行提供人脸识别等生物识别认证服务。同时为城商行联盟银行提供VIP识别服务</p>
               </div>
           </div>
       </div>
       <div v-if="hover== 1" id="testDiv3" class="detail">
       <div  class="anli_con wid clearfix">
           <div class="anli_left"><img bimg="" src="http://www.cloudwalk.cn//upload/fiendImg/2017228165569.jpg" data-type="video"> </div>
           <div class="anli_right">
               <h4><a>BJCA｜身份验证</a></h4>
               <p>北京数字认证股份有限公司就金融领域采用云从科技人脸识别技术，实现线上线下人员身份验证服务，简化用户业务办理流程。</p>
           </div>
       </div>
       </div>
        </div>
  </div>
</template>
<script>
    export default{
        name: 'coop',
        data () {
            return {
                hover: 0
            }
        },
        mounted:function () {
//            this.$goRoute("/developercenter/developercenter/newuser");
        },
        methods:{
            test(data){
                this.hover = data;
            }
        }
    }
</script>
<style scoped>

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

    .api_title a:hover {
        border: 1px solid #b5b5b6;
    }

    .img{
         max-width: 1200px;
         max-height: 600px;
    }
    .api_title {
        visibility: visible;
        animation-name: fadeInUp;
        text-align: center;
        margin-bottom: 73px;
    }
    .animated {
        -webkit-animation: 1s ease-in-out;
        animation: 0.8s ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .wid {
        width: 1200px;
        margin-left: -170px;
        margin-top: 50px;
    }
     .api_title a.hover {
        border: 1px solid #b5b5b6;
    }
    .api_title a {
        display: inline-block;
        width: 92px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #fff;
        border-radius: 3px;
        font-size: 18px;
        color: #898989;
        margin: 0px 24px;
        transition: .2s;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
    }
    .anli_con{
        margin-bottom: 75px;
        width: 1200px;
    }
    .clearfix:after {
        zoom: 1;
    }
    .clearfix:after {
        content: ".";
        height: 0px;
        display: block;
        clear: both;
        visibility: hidden;
    }
    .anli_con .anli_left {
        width: 339px;
        text-align: center;
        overflow: hidden;
        float: left;
    }
    .anli_con .anli_right {
        width: 536px;
        float: left;
        margin-left: 63px;
        position: relative;
        height: 279px;
    }
    .detail{
        margin-left: 145px
    }
</style>