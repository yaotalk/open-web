<template>
  <div>
    <div style="padding-top: 80px">
      <!-- Carousel================================================== -->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <!-- <img class="first-slide" :src="banner1" alt="First slide"> -->
            <div class="first-slide"></div>
            <div class="container">
                <div class="carousel-caption">
                    <h1>『小视科技』人脸识别再创世界纪录</h1>
                    <br>
                    <br>
                    <p>在LFW无限制条件下人脸验证测试中，小视提交的最新成绩为99.80%。</p>
                    <p>在国际权威海量人脸识别数据库MegaFace中，以83.290%的最新成绩
                        <br>在100万级别人脸识别测试中拔得头筹。</p>
                    <p><a class="btn btn-lg btn-primary" role="button" @click="faceDetection(0)">体验事例</a><span style="margin-left: 30px;margin-right: 30px;"></span><a class="btn btn-lg btn-primary" role="button">免费接入</a></p>
                </div>
            </div>
        </div>
        <div class="item">
            <!-- <img class="second-slide" :src="banner2" alt="Second slide"> -->
            <div class="second-slide"></div>
            <div class="container">
                <div class="carousel-caption">
                    <h1>人脸识别技术</h1>
                    <br>
                    <br>
                    <p>自研Uface人脸识别引擎，LFW 99.80%</p>
                    <p>数亿用户每日识别验证，全面的人脸识别技术</p>
                    <p>为产品提供丰富的服务，加速产品、行业的智能化发展</p>
                    <p><a class="btn btn-lg btn-primary" role="button" @click="faceDetection(1)">体验事例</a><span style="margin-left: 30px;margin-right: 30px;"></span><a class="btn btn-lg btn-primary" role="button">免费接入</a></p>
                </div>
            </div>
        </div>
        <div class="item">
            <!-- <img class="third-slide" :src="banner3" alt="Third slide"> -->
            <div class="third-slide"></div>
            <div class="container">
                <div class="carousel-caption">
                    <h1>图片识别技术</h1>
                    <br>
                    <br>
                    <p>图片内容识别，OCR证件识别，为产品提供丰富的智能图片服务</p>
                    <p>快速订制深度识别引擎，解决不同行业的订制需求</p>
                    <p>色情、暴恐图片识别，为互联网提供更干净的环境</p>
                    <p><a class="btn btn-lg btn-primary" role="button" @click="faceDetection(2)">体验事例</a><span style="margin-left: 30px;margin-right: 30px;"></span><a class="btn btn-lg btn-primary" role="button">免费接入</a></p>
                </div>
            </div>
        </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
</div>
<!-- /.carousel -->
    </div>
    <div class="qt content-wrapper">
    <div class="home-content">
        <!-- 最新动态 -->
        <div class="xs-home-news">
            <div class="xs-mid" style="width: 1180px;">
                <div class="xs-home-news-title">最新动态:</div>
                <div class="xs-home-news-content">
                    <div id="newsFirst" class="xs-home-news-wrapper news-roll" style="top: 0;">
                        <div class="xs-home-news-item">
                            <a href="http://tech.qq.com/a/20170330/033980.htm" target="_blank">准确率99.80%！腾讯小视再次刷新人脸识别世界纪录</a>
                        </div>
                    </div>
                    <div id="newsSecond" class="xs-home-news-wrapper news-roll" style="top: 70px;">
                        <div class="xs-home-news-item">
                            <a href="http://www.toutiao.com/i6401269364233863681/?tt_from=weixin&utm_campaign=client_share&from=groupmessage&app=news_article&utm_source=weixin&isappinstalled=0&iid=8923116196&utm_medium=toutiao_ios&wxshare_count=4&pbid=1490421595" target="_blank">腾讯小视运用人脸识别AI技术寻亲 平台上线当月即寻回3人</a>
                        </div>
                    </div>
                </div>
                <div class="xs-home-news-more">
                    <a href="/welcome/news" style="float: right;">查看更多</a>
                </div>
            </div>
        </div>
        <div class="xs-home-tech">
            <div class="center">
                <div class="mt40-wrapper">
                    <ol class="xs-home-tech-ul">
                        <li class="xs-home-tech-li">
                            <i class="xs-icon-tech">
                    <a href="/service/vip">
                      <i class="xs-icon-tech-icon xs-icon-tech-face"> </i>
                            </a>
                            </i>
                            <p class="xs-h306 xs-mt40 xs-ln0">企业VIP服务</p>
                            <a class="xs-home-tech-button" href="/welcome/service#/vip">了解详情</a>
                        </li>
                        <li class="xs-home-tech-li">
                            <i class="xs-icon-tech">
                    <a href="/welcome/service#/solution-facecheck">
                      <i class="xs-icon-tech-icon xs-icon-tech-recognize"></i>
                            </a>
                            </i>
                            <p class="xs-h306 xs-mt40 xs-ln0">行业解决方案</p>
                            <a class="xs-home-tech-button" href="/welcome/service#/solution-facecheck">了解详情</a>
                        </li>
                        <li class="xs-home-tech-li">
                            <i class="xs-icon-tech">
                    <a href="/welcome/service#/solution-facein">
                      <i class="xs-icon-tech-icon xs-icon-tech-image"></i>
                            </a>
                            </i>
                            <p class="xs-h306 xs-mt40 xs-ln0">智能产品</p>
                            <a class="xs-home-tech-button" href="/welcome/service#/solution-facein">了解详情</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- 我们的优势 -->
        <div class="xs-home-superiority">
            <div class="xs-mid1200">
                <div class="xs-home-superiority-content">
                    <div class="title"></div>
                    <ol class="xs-home-superiority-ul">
                        <li class="xs-home-superiority-li">
                            <i class="xs-icon-superiority xs-icon-superiority-quantity"></i>
                            <h6 class="xs-ln0">每日数亿的调用量</h6>
                            <p>为腾讯众多业务打造服务，如QQ空间、QQ浏览器、QQ、天天P图等等。每日的调用量达到数亿。效果优质，服务稳定。</p>
                        </li>
                        <li class="xs-home-superiority-li no-first">
                            <i class="xs-icon-superiority xs-icon-superiority-model"></i>
                            <h6 class="xs-ln0">最好的人脸训练模型</h6>
                            <p>立足腾讯社交数据大平台，收集标注了千万数据，拥有海量数据分析与人脸、图片训练集。独创UFACE深度人脸识别模型，准确率世界领先。</p>
                        </li>
                        <li class="xs-home-superiority-li no-first">
                            <i class="xs-icon-superiority xs-icon-superiority-solution"></i>
                            <h6 class="xs-ln0">全套的技术方案</h6>
                            <p>拥有人脸检测、人脸五官定位、人脸特征提取、人脸对比、活体检测、图片识别、语音识别等一整套技术方案。</p>
                        </li>
                        <li class="xs-home-superiority-li no-first">
                            <i class="xs-icon-superiority xs-icon-superiority-tech"></i>
                            <h6 class="xs-ln0">世界领先的技术水平</h6>
                            <p>人脸识别、图像识别、音频识别技术多次在国际比赛中刷新世界纪录，并在实际业务中落地应用。</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- 合作案例 -->
        <div class="xs-home-partner">
            <div class="xs-mid1200">
                <div class="xs-home-partner-content">
                    <div class="title"></div>
                    <div class="xs-home-partner-more">
                        <a href="/welcome/service#/example">更多案例</a>
                    </div>
                    <ol class="xs-home-partner-ul">
                        <li class="xs-home-partner-li">
                          <i class="icon-partner xs-icon-partner-webank"></i>
                          <p>微众银行</p>
                        </li>
                        <li class="xs-home-partner-li no-first">
                          <i class="icon-partner xs-icon-partner-njpolice"></i>
                          <p class="text">南京公安</p>
                        </li>
                        <li class="xs-home-partner-li no-first">
                          <i class="icon-partner xs-icon-partner-ttpic"></i>
                          <p>天天P图</p>
                        </li>
                        <li class="xs-home-partner-li no-first">
                          <i class="icon-partner xs-icon-partner-qzone"></i>
                          <p>QQ空间相册</p>
                        </li>
                        <li class="xs-home-partner-li no-first">
                          <i class="icon-partner xs-icon-partner-qq"></i>
                          <p>手机QQ</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="xs-home-contact">
          <div class="xs-mid1200">
            <div class="qr-coder"></div>
            <div class="label-group">
              <div class="qq-group"></div>
              <div class="email"></div>
              <div class="wechat"></div>
            </div>
          </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import Vue from 'vue';
  export default{
  	name: 'homepage',
  	data () {
  	  return {
        msg: 'homepage1',
        msg2: 'homepage2',
        value2: 0
  	  }
  	},
    created () {
      Vue.localStorage.set('currentroute', 'homepage');
    },
    mounted () {
      this.gcurrentgIndex = 0;
      for(var i=0;i<5;i++){
        $($($('div.nav ul li').children()[i]).children()[1]).removeClass();
        $($($($('div.nav ul li').children()[i]).children()[0]).children()[0]).removeClass();
      }
      $($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[1]).addClass('nav-item-selected');
      $($($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[0]).children()[0]).addClass('nav-text-selected');
    },
    updated () {
     console.log('====homepage === updated =======');
    },
    methods:{
      faceDetection:function (obj) {
          // body...
          // alert(obj);
          this.gcurrentgIndex = 1;
          for(var i=0;i<5;i++){
        $($($('div.nav ul li').children()[i]).children()[1]).removeClass();
        $($($($('div.nav ul li').children()[i]).children()[0]).children()[0]).removeClass();
      }
      $($($('div.nav ul li').children()[1]).children()[1]).addClass('nav-item-selected');
        $($($($('div.nav ul li').children()[1]).children()[0]).children()[0]).addClass('nav-text-selected');
          if (obj == 0) {
            // this.$router.push('/technicalexp/technicalexp');
            //技术体验
            Vue.localStorage.set('menuindex', 0);
            Vue.localStorage.set('submenuindex', 0);
            Vue.localStorage.set('currentroute', 'experience');
            this.$router.push({name:'technicalexp',params:{id:'technicalexp',msg:{index:0,subindex:0,flag:'experience'}}});
          }else if(obj == 1){
            Vue.localStorage.set('menuindex', 0);
            Vue.localStorage.set('submenuindex', 0);
            Vue.localStorage.set('currentroute', 'experience');
            this.$router.push({name:'technicalexp',params:{id:'technicalexp',msg:{index:0,subindex:0,flag:'experience'}}});
          }else if(obj == 2){
            Vue.localStorage.set('menuindex', 1);
            Vue.localStorage.set('submenuindex', 0);
            Vue.localStorage.set('currentroute', 'experience');
            this.$router.push({name:'technicalexp',params:{id:'technicalexp',msg:{index:1,subindex:0,flag:'experience'}}});
          }
      }
    }
  }
</script>
<style scoped>
@import url(../../assets/css/carousel.css);
@import url(../../assets/css/homepage.css);
  div {
    display: block;
  }
</style>