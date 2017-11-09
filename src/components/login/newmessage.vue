<template>
  <div class="nmess">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="message-body">
      <div class="constr">
        <div class="message-vm">
          <div class="apply-tit" style="padding-top:0px;">
            <img :src="iconnotice" alt="">
            <span class="f24" style="color:#666666;">消息</span>
          </div>
          <div class>
            <div id="msgTable" class="table message-table z">
              <div class="info_container" style="height: 779px;">
                <div v-for="(item,index) in messageData">
                <ul class="info_append">
                  <li class="info_row1">
                    <p class="info_title">{{item.title}}</p>
                    <p class="info_time">{{item.mestime}}</p>
                  </li>
                  <li class="info_content">{{item.mescontent}}</li>
                </ul>
                <div class="info_bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt30 tc f16">
            <a href="javascript:" id="msgMore" class="tdl dn" data-number="3">更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import tmpiconnotice from '../../assets/img/message/icon_notice.png'

var tmpMessageArr = [{
  title:'人脸识别算法 惊艳升级',
  mestime:'2017-02-22 11:28:47',
  mescontent:'小视开放平台人脸识别算法全面升级。在人脸检测与人脸识别方面做了深入的优化。欢迎大家体验试用。目前没有做强制升级，只有2017年2月之后接入的应用，会开始调用新版本算法。 后续小视开放平台会持续为大家提供更多免费的优质服务，感谢大家的支持。'
},{
  title:'人脸识别算法 惊艳升级',
  mestime:'2017-02-22 11:28:47',
  mescontent:'小视开放平台人脸识别算法全面升级。在人脸检测与人脸识别方面做了深入的优化。欢迎大家体验试用。目前没有做强制升级，只有2017年2月之后接入的应用，会开始调用新版本算法。 后续小视开放平台会持续为大家提供更多免费的优质服务，感谢大家的支持。'
},{
  title:'人脸识别算法 惊艳升级',
  mestime:'2017-02-22 11:28:47',
  mescontent:'小视开放平台人脸识别算法全面升级。在人脸检测与人脸识别方面做了深入的优化。欢迎大家体验试用。目前没有做强制升级，只有2017年2月之后接入的应用，会开始调用新版本算法。 后续小视开放平台会持续为大家提供更多免费的优质服务，感谢大家的支持。'
}];

export default {
  name: 'newmessage',
  data () {
    return {
      msg: 'new message',
      iconnotice:tmpiconnotice,
      messageData:tmpMessageArr
    }
  },
  created () {
    // this.$router.push({path: '/login/newmessage'});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nmess h1 {
  font-size: 20px;
  color: red;
}

.nmess div {
    display: block;
}

.nmess ul, ol, p, h1, h2, h3, h4, h5, h6, dd, dl {
    margin: 0;
}

.nmess .message-body {
    padding: 140px 0 80px;
    /*background-color: #fff;*/
    min-height: calc(70vh);
    background-color: rgb(249,249,249);
}

.nmess .constr {
    width: 1174px;
    min-width: 1174px;
    margin-left: auto;
    margin-right: auto;
}

.nmess .apply-tit {
    padding: 30px 0 24px 0px;
    overflow: hidden;
}

.nmess img {
    border: 0;
    vertical-align: bottom;
}

.nmess .f24 {
    font-size: 24px;
}

.nmess .tc {
    text-align: center;
}

.nmess .f16 {
    font-size: 16px;
}

.nmess .mt30 {
    margin-top: 30px;
}

.nmess .tdl {
    text-decoration: underline;
}

.nmess .dn {
    display: none;
}

.nmess a {
    color: #207BEC;
    /*text-decoration: none;*/
}

.nmess a:-webkit-any-link {
    /*color: -webkit-link;*/
    cursor: auto;
    /*text-decoration: underline;*/
}

.nmess .message-table {
    font-size: 20px;
    color: #636363;
}

.nmess .info_append {
    box-sizing: border-box;
    width: 1174px;
    padding: 25px 27px 28px;
    background: url('../../assets/img/login/tablebg_a.png'), url('../../assets/img/login/tablebg_b.png'), url('../../assets/img/login/tablebg_c.png');
    background-repeat: no-repeat, repeat, no-repeat;
    font-size: 15px;
}

.nmess ul, ol {
    list-style-type: none;
    /*padding: 0;*/
}

.nmess ul, menu, dir {
    display: block;
    /*list-style-type: disc;*/
    -webkit-margin-before: 1em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}

.nmess .info_bottom {
    background: url('../../assets/img/login/tablebg_c.png');
    height: 10px;
    /*margin-bottom: 15px;*/
}

.nmess .info_row1 {
    height: 30px;
}

.nmess li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.nmess .info_content {
    margin-top: 10px;
    color: #999999;
}

.nmess .info_title {
    display: inline-block;
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    line-height: 30px;
}

.nmess .info_time {
    line-height: 30px;
    float: right;
    color: #8cc0ff;
    background: url('../../assets/img/message/icon_calendar.png') no-repeat 0px;
    padding-left: 40px;
}




</style>