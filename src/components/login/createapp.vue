<template>
  <div class="createapp">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="dyna-body apply-create-body" id="dynaHeight">
      <div class="constr apply-full">
        <div class="apply-bread">
          <a href="#/login/appmanage">应用管理</a>><span>{{pagetitle}}</span>
        </div>
        <div class="apply-title">
          <div class="apply-title-img">
            <img :src="tablebga" alt="" class="apply-title-img-ctt">
          </div>
          <div class="title-element">
            <div class="title-cont">{{pagetitle}}</div>
          </div>
        </div>
        <div class="apply-vm apply-form">
          <form action="" id="applyForm" method="post" novalidate="novalidate">
            <div class="fix">
              <label for="applyName" class="apply-label mt5" :class="{valid_color_common:statusFlag[0].commonflag,valide_color_red:statusFlag[0].failflag,valide_color_green:statusFlag[0].successflag}">
                <span class="apply-requried">*</span>应用名称
              </label>
              <div class="cell">
                <!-- @focus="inputfocus" @blur="inputblur" -->
                <input id="applyName" type="text" maxlength="20" v-model="appname" placeholder="最多20个字符" class="apply-input config_none" :class="{valide_border_common:statusFlag[0].commonflag,valide_border_red:statusFlag[0].failflag,valide_border_green:statusFlag[0].successflag}" @focus="inputfocus" @blur="inputblur">
                <div class="validate_input" v-if="statusFlag[0].failflag">您尚未输入  应用名称</div>
              </div>
            </div>
            <div class="apply-40">
              <div class="apply-40-content">
                <img :src="iconwarningmini" alt="">
              </div>
            </div>
            <div class="fix">
              <label for="appDesc" class="apply-label" :class="{valid_color_common:statusFlag[1].commonflag,valide_color_red:statusFlag[1].failflag,valide_color_green:statusFlag[1].successflag}">
                <span class="apply-requried">*</span>应用简介
              </label>
              <div class="cell">
                <textarea id="appDesc" maxlength="600" rows="11" v-model="appdescription" placeholder="需要说明在产品中使用小视的何种技术，以及具体的应用场景是什么(600字以内)" class="apply-textarea config_none" :class="{valide_border_common:statusFlag[1].commonflag,valide_border_red:statusFlag[1].failflag,valide_border_green:statusFlag[1].successflag}" @focus="areafocus" @blur="areablur"></textarea>
                <div class="validate_input" v-if="statusFlag[1].failflag">您尚未输入  应用简介</div>
              </div>
            </div>
            <div class="apply-40"></div>
            <div class="fix apply-select">
              <label class="apply-label" :class="{valid_color_common:statusFlag[2].commonflag,valide_color_red:statusFlag[2].failflag,valide_color_green:statusFlag[2].successflag}">
                <span class="apply-requried">*</span>应用平台
              </label>
              <div id="applyPaltform" class="cell">
                <span class="apply-check-list">
                  <input type="checkbox" id="platWeb" class="abs-clip apply-checkbox" value="1" v-model="platform">
                  <label for="platWeb" class="checkbox apply-checkbox"></label>
                  <label for="platWeb">Web</label>
                </span>
                <span class="apply-check-list">
                  <input type="checkbox" id="platIOS" class="abs-clip apply-checkbox" value="2" v-model="platform">
                  <label for="platIOS" class="checkbox apply-checkbox"></label>
                  <label for="platIOS">IOS</label>
                </span>
                <span class="apply-check-list">
                  <input type="checkbox" id="platAndroid" class="abs-clip apply-checkbox" value="3" v-model="platform">
                  <label for="platAndroid" class="checkbox apply-checkbox"></label>
                  <label for="platAndroid">Android</label>
                </span>
                <span class="apply-check-list">
                  <input type="checkbox" id="platOther" class="abs-clip apply-checkbox" value="4" v-model="platform">
                  <label for="platOther" class="checkbox apply-checkbox"></label>
                  <label for="platOther">其他</label>
                </span>
                <div class="validate_input" v-if="statusFlag[2].failflag">您尚未选择  应用平台</div>
              </div>
            </div>
            <div class="apply-40"></div>
            <div class="fix apply-select">
              <label class="apply-label" :class="{valid_color_common:statusFlag[3].commonflag,valide_color_red:statusFlag[3].failflag,valide_color_green:statusFlag[3].successflag}">
                <span class="apply-requried">*</span>应用类型
              </label>
              <div id="applyType" class="cell">
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeFunny" class="abs-clip apply-radio" value="1" v-model="appType" required>
                  <label for="typeFunny" class="radio apply-radio"></label>
                  <label for="typeFunny">娱乐</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeGame" class="abs-clip apply-radio" value="2" v-model="appType" required>
                  <label for="typeGame" class="radio apply-radio"></label>
                  <label for="typeGame">游戏</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeSafe" class="abs-clip apply-radio" value="3" v-model="appType" required>
                  <label for="typeSafe" class="radio apply-radio"></label>
                  <label for="typeSafe">安防</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeFinance" class="abs-clip apply-radio" value="4" v-model="appType" required>
                  <label for="typeFinance" class="radio apply-radio"></label>
                  <label for="typeFinance">金融</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeTool" class="abs-clip apply-radio" value="5" v-model="appType" required>
                  <label for="typeTool" class="radio apply-radio"></label>
                  <label for="typeTool">工具</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeGover" class="abs-clip apply-radio" value="6" v-model="appType" required>
                  <label for="typeGover" class="radio apply-radio"></label>
                  <label for="typeGover">政务</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeSocial" class="abs-clip apply-radio" value="7" v-model="appType" required>
                  <label for="typeSocial" class="radio apply-radio"></label>
                  <label for="typeSocial">社交</label>
                </span>
                <span class="apply-check-list apply-check-list-radio">
                  <input type="radio" id="typeOther" class="abs-clip apply-radio" value="8" v-model="appType" required>
                  <label for="typeOther" class="radio apply-radio"></label>
                  <label for="typeOther">其他</label>
                </span>
                <div class="validate_input" v-if="statusFlag[3].failflag">您尚未选择  应用类型</div>
              </div>
            </div>
            <div class="apply-40"></div>
            <div class="fix apply-select">
              <label class="apply-label" :class="{valid_color_common:statusFlag[4].commonflag,valide_color_red:statusFlag[4].failflag,valide_color_green:statusFlag[4].successflag}">
                <span class="apply-requried">*</span>接入产品类型
              </label>
              <div id="joinProductType" class="cell">
                <span class="apply-check-list">
                  <input type="checkbox" id="joinCloud" class="abs-clip apply-checkbox" value="1" v-model="productType">
                  <label for="joinCloud" class="checkbox apply-checkbox"></label>
                  <label for="joinCloud">云服务</label>
                </span>
                <span class="apply-check-list" style="width: 188px;">
                  <input type="checkbox" id="joinFaceIn" class="abs-clip apply-checkbox" value="2" v-model="productType">
                  <label for="joinFaceIn" class="checkbox apply-checkbox"></label>
                  <label for="joinFaceIn">FaceIn人脸核身</label>
                </span>
                <span class="apply-check-list">
                  <input type="checkbox" id="joinSdk" class="abs-clip apply-checkbox" value="3" v-model="productType">
                  <label for="joinSdk" class="checkbox apply-checkbox"></label>
                  <label for="joinSdk">离线SDK</label>
                </span>
                <div class="validate_input" v-if="statusFlag[4].failflag">至少选择一种接入产品类型</div>
              </div>
            </div>
            <div class="apply-40"></div>
            <div class="fix" v-if="iscreate">
              <label for="applyAddress" class="apply-label mt5">应用地址：</label>
              <div class="cell">
                <input id="applyAddress" type="url" placeholder="请填写网站地址或者真实的APP链接" class="apply-input" v-model="appaddress">
              </div>
            </div>
            <div class="fix apply-select" v-if="isedit">
              <label for="applyID" class="apply-label color-b3">AppID：</label>
              <div class="cell color-b3">{{appid}}</div>
            </div>
            <div class="apply-40" v-if="isedit"></div>
            <div class="fix apply-select" v-if="isedit">
              <label for="applyID" class="apply-label color-b3">SecretID：</label>
              <div class="cell color-b3">{{secretid}}</div>
            </div>
            <div class="apply-40" v-if="isedit"></div>
            <div class="fix apply-select" v-if="isedit">
              <label for="applyID" class="apply-label color-b3">SecretKey：</label>
              <div class="cell color-b3">{{secretkey}}</div>
            </div>
            <div class="mt30 pt30 tc">
              <input type="submit" id="createSubmit" class="abs-clip apply-submit-button" :disabled="submitdisabled">
              <label for="createSubmit" class="apply-submit-button">
                <img :src="bticonaddnew" alt="">
                <span>{{pagebuttontitle}}</span>
              </label>
            </div>
            <div class="apply-40"></div>
          </form>
        </div>
        <div class="bottom-height">
          <div></div>
          <i class="dib-vm"></i>
        </div>
      </div>
      <div class="apply-40"></div>
    </div>
  </div>
</template>

<script>

import { focus } from 'vue-focus';//自动聚焦.
import tmptablebga from '../../assets/img/login/tablebg_a.png'
import tmpiconwarningmini from '../../assets/img/login/icon_warning_mini.png'
import tmpbticonaddnew from '../../assets/img/login/bt_icon_addnew.png'

var statusArr = [{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
}];

export default {
  name: 'createapp',
  directives: { focus: focus },//自定义指令,自动聚焦.
  data () {
    return {
      msg: 'createapp',
      tablebga:tmptablebga,
      iconwarningmini:tmpiconwarningmini,
      bticonaddnew:tmpbticonaddnew,
      statusFlag:statusArr,
      pagetitle:'创建应用',
      pagebuttontitle:'创建应用',
      appname:'',
      appdescription:'',
      platform:[],
      appType:0,
      productType:[],
      appaddress:'',
      submitdisabled:true,
      appid:'',
      secretid:'',
      secretkey:'',
      isedit:false,//是否是编辑应用
      iscreate:true//是否是创建应用
    }
  },
  created () {
    // console.log('======begin');
    // console.log(this.$route.params.msg);
    var routevar = this.$route.params.msg;
    if(routevar.iscreate){
    this.pagetitle = '创建应用';
    this.pagebuttontitle = '创建应用';
    this.isedit = routevar.isedit;
    this.iscreate = routevar.iscreate;
    this.statusFlag = [{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
},{
  commonflag:true,
  failflag:false,
  successflag:false
}];
    // console.log(this.statusFlag);
    this.appname = '';
    this.appdescription = '';
    this.platform = [];
    this.appType = 0;
    this.productType = [];
    this.appaddress = '';
    this.submitdisabled = true;
  }else{
    console.log(this.$route.params.msg);
    this.pagetitle = '编辑应用';
    this.pagebuttontitle = '修改应用';
    this.isedit = routevar.isedit;
    this.iscreate = routevar.iscreate;

    this.statusFlag = [{
  commonflag:false,
  failflag:false,
  successflag:true
},{
  commonflag:false,
  failflag:false,
  successflag:true
},{
  commonflag:false,
  failflag:false,
  successflag:true
},{
  commonflag:false,
  failflag:false,
  successflag:true
},{
  commonflag:false,
  failflag:false,
  successflag:true
}];

    this.appname = routevar.appinfo.appname;
    this.appdescription = routevar.appinfo.appdec;
    var tmparr = routevar.appinfo.appplatform.split(',');
    for(var i=0;i<tmparr.length;i++){
      if (tmparr[i] == 'Web') {
        this.platform.push('1');
      }
      if (tmparr[i] == 'IOS') {
        this.platform.push('2');
      }
      if (tmparr[i] == 'Android') {
        this.platform.push('3');
      }
      if (tmparr[i] == '其他') {
        this.platform.push('4');
      }
    }
    if (routevar.appinfo.apptype == '娱乐') {
      this.appType = 1;
    }
    if (routevar.appinfo.apptype == '游戏') {
      this.appType = 2;
    }
    if (routevar.appinfo.apptype == '安防') {
      this.appType = 3;
    }
    if (routevar.appinfo.apptype == '金融') {
      this.appType = 4;
    }
    if (routevar.appinfo.apptype == '工具') {
      this.appType = 5;
    }
    if (routevar.appinfo.apptype == '政务') {
      this.appType = 6;
    }
    if (routevar.appinfo.apptype == '社交') {
      this.appType = 7;
    }
    if (routevar.appinfo.apptype == '其他') {
      this.appType = 8;
    }
    
    var tmparr = routevar.appinfo.producttype.split(',');
    for(var i=0;i<tmparr.length;i++){
      if (tmparr[i] == '云服务') {
        this.productType.push('1');
      }
      if (tmparr[i] == 'FaceIn人脸核身') {
        this.productType.push('2');
      }
      if (tmparr[i] == '离线SDK') {
        this.productType.push('3');
      }
      
    }

    this.appaddress = '';
    this.submitdisabled = false;
    this.appid = routevar.appinfo.appid;
    this.secretid = routevar.appinfo.secretid;
    this.secretkey = routevar.appinfo.secretkey;
  }
  },
  mounted () {

    // $("#applyType").mouseup(function() {
    //     $("#applyType").mouseleave(function () {
    //       if (this.appType == 0) {
    //         this.statusFlag[3].failflag = true;
    //         this.statusFlag[3].commonflag = false;
    //         this.statusFlag[3].successflag = false;
    //       }
    //     });
    // });
  },
  watch: {
    appname (val) {
      if (val == '') {
        this.submitdisabled = true;
      }else{
        if(this.appdescription != '' && this.platform.length != 0 &&
         this.appType != 0 && this.productType.length != 0){
          this.submitdisabled = false;
        }
      }
    },
    platform (val,old) {
      if (val.length == 0 && old.length == 0 ) {
        return;
      }
      if (this.platform.length == 0) {
        this.submitdisabled = true;
        this.statusFlag[2].failflag = true;
        this.statusFlag[2].commonflag = false;
        this.statusFlag[2].successflag = false;
      }else{
        this.statusFlag[2].failflag = false;
        this.statusFlag[2].commonflag = false;
        this.statusFlag[2].successflag = true;
        if(this.appdescription != '' && this.appname != 0 &&
         this.appType != 0 && this.productType.length != 0){
          this.submitdisabled = false;
        }
      }
    },
    appdescription (val) {
      if (val == '') {
        this.submitdisabled = true;
      }else{
        if(this.appname != '' && this.platform.length != 0 &&
         this.appType != 0 && this.productType.length != 0){
          this.submitdisabled = false;
        }
      }
    },
    appType (val,old) {
      if (val == 0) {
        this.submitdisabled = true;
        this.statusFlag[3].failflag = true;
        this.statusFlag[3].commonflag = false;
        this.statusFlag[3].successflag = false;
      }else{
        this.statusFlag[3].failflag = false;
        this.statusFlag[3].commonflag = false;
        this.statusFlag[3].successflag = true;
        if(this.appdescription != '' && this.platform.length != 0 &&
         this.appname != '' && this.productType.length != 0){
          this.submitdisabled = false;
        }
      }
    },
    productType (val,old) {
      if (val.length == 0 && old.length == 0 ) {
        return;
      }
      if (this.productType.length == 0) {
        this.submitdisabled = true;
        this.statusFlag[4].failflag = true;
        this.statusFlag[4].commonflag = false;
        this.statusFlag[4].successflag = false;
      }else{
        this.statusFlag[4].failflag = false;
        this.statusFlag[4].commonflag = false;
        this.statusFlag[4].successflag = true;
        if(this.appdescription != '' && this.platform.length != 0 &&
         this.appname != '' && this.appType != 0){
          this.submitdisabled = false;
        }
      }
    }
  },
  methods: {
    inputfocus: function() {
      this.statusFlag[0].failflag = false;
      this.statusFlag[0].commonflag = true;
      this.statusFlag[0].successflag = false;
    },
    inputblur: function() {
      if (this.appname == '') {
          this.submitdisabled = true;
          this.statusFlag[0].failflag = true;
          this.statusFlag[0].commonflag = false;
          this.statusFlag[0].successflag = false;
        }else{
          this.statusFlag[0].failflag = false;
          this.statusFlag[0].commonflag = false;
          this.statusFlag[0].successflag = true;
          if(this.appdescription != '' && this.platform.length != 0 &&
            this.appType != 0 && this.productType.length != 0){
            this.submitdisabled = false;
          }
        }
    },
    areafocus: function() {
      this.statusFlag[1].failflag = false;
      this.statusFlag[1].commonflag = true;
      this.statusFlag[1].successflag = false;
    },
    areablur: function() {
      if (this.appdescription == '') {
          this.submitdisabled = true;
          this.statusFlag[1].failflag = true;
          this.statusFlag[1].commonflag = false;
          this.statusFlag[1].successflag = false;
        }else{
          this.statusFlag[1].failflag = false;
          this.statusFlag[1].commonflag = false;
          this.statusFlag[1].successflag = true;
          if(this.appname != '' && this.platform.length != 0 &&
            this.appType != 0 && this.productType.length != 0){
            this.submitdisabled = false;
          }
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.createapp h1 {
  font-size: 20px;
  color: yellow;
}

.createapp div {
    display: block;
}

.createapp i, cite, em, var, address, dfn {
    font-style: italic;
}

.createapp .apply-create-body {
  padding-bottom: 0px !important;
  background-color: rgb(249,249,249);
  height: auto;
  min-height: calc(100vh - 297px);
  padding-top: 80px;
  min-width: 1208px;
}

.createapp .dyna-body {
  text-align: center;
}

.createapp .apply-full {
  white-space: nowrap;
  height: 100%;
}

.createapp .constr {
  width: 1174px;
  min-width: 1174px;
  margin-left: auto;
  margin-right: auto;
}

.createapp .apply-40 {
  width: 1174px;
  height: 40px;
}

.createapp .apply-bread {
    margin-bottom: 16px;
    border-bottom: 1px solid #e5e5e5;
    height: 47px;
    background-color: rgb(249,249,249) !important;
    line-height: 48px;
    color: #6b8099;
    font-size: 13px;
    text-decoration: none;
    padding-left: 10px;
    text-align: left;
}

.createapp .apply-title {
    height: 108px;
    width: 1174px;
    line-height: 1.0;
    background-color: #fff;
    background: url('../../assets/img/login/tablebg_b.png');
}

.createapp .apply-create-body .apply-vm {
    /*background-color: #fff;*/
    background-color: #fff;
    background: url('../../assets/img/login/tablebg_b.png');
    display: inline-block;
    /*width: 100%;*/
    white-space: normal;
    vertical-align: middle;
}

.createapp .apply-form {
    width: 1174px;
    font-size: 14px;
    text-align: left;
    color: #636363;
}

.createapp .bottom-height {
  height: 10px;
  background: url('../../assets/img/login/tablebg_c.png');
}

.createapp .apply-bread a {
  color: #6b8099;
  font-size: 13px;
  text-decoration: none;
}

.createapp a:-webkit-any-link {
  cursor: auto;
}

.createapp .apply-title-img {
  height: 20px;
}

.createapp .title-element {
  position: relative;
  top: 20px;
  background: url('../../assets/img/login/title_element.png') no-repeat;
  margin: 0 auto;
  height: 28px;
  width: 230px;
}

.createapp .apply-title-img-ctt {
  height: 10px;
  display: block;
}

.createapp img {
  border: 0;
  vertical-align: bottom;
}

.createapp .title-cont {
  font-size: 24px;
  color: #666;
}

.createapp .dib-vm {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
}

.createapp form {
    display: block;
    margin-top: 0em;
}

.createapp .apply-40 {
    width: 1174px;
    height: 40px;
}

.createapp .apply-select {
    height: 30px;
    line-height: 30px;
}

.createapp .tc {
    text-align: center;
}

.createapp .pt30 {
    padding-top: 30px;
}

.createapp .mt30 {
    margin-top: 30px;
}

/*样式动态绑定*/
.createapp .valide_color_red {
    color: #e94e56;
}

.createapp .valide_color_green {
    color: #60a7ff;
}

.createapp .valid_color_common {
  color: #333;
}

.createapp .valide_border_red {
  border: 1px solid #e94e56 !important;
}

.createapp .valide_border_green {
  border: 1px solid #60a7ff !important;
}

.createapp .valide_border_common {
  border: 1px solid #dddddd;
}
/*end.*/

.createapp .mt5 {
    margin-top: 5px;
}

.createapp .apply-label {
    width: 308px;
    margin-right: 34px;
    text-align: right;
    float: left;
}



.createapp label {
    cursor: default;
}

.createapp .cell {
    display: table-cell;
    width: 2000px;
    height: 30px;
    cursor: pointer;
}

.createapp .apply-form .apply-input {
    height: 30px;
}

.createapp .apply-input, .cell .apply-textarea {
    box-sizing: border-box;
    width: 638px;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.5;
    float: right;
    margin-right: 192px;
    /*-webkit-box-shadow: 0px;*/
    -moz-box-shadow: 0px;
    /*box-shadow: 0px;*/
    font-size: 14px;
    font-family: PingFangSC-Regular,'helvetica neue','hiragino sans gb', 'microsoft yahei', tahoma,'microsoft yahei ui', simsun,sans-serif;
}

.createapp input {
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}

.createapp input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 11px system-ui;
}

.createapp input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb;
}

.createapp .validate_input {
    clear: both;
    color: #e94e56;
    background: url('../../assets/img/login/icon_warning_mini.png') no-repeat 0;
    padding-left: 24px;
    font-size: 12px;
    position: relative;
    top: 8px;
    z-index: 1;
}

.createapp .apply-40-content {
    width: 640px;
    float: right;
    margin-right: 192px;
    padding-top: 6px;
    display: none;
}

.createapp .apply-40-content img {
    width: 18px;
    height: 18px;
}

.createapp img {
    border: 0;
    vertical-align: bottom;
}

.createapp .apply-check-list {
    width: 120px;
    height: 20px;
    float: left;
}

.createapp .abs-clip {
    position: absolute;
    clip: rect(0 0 0 0);
}

.createapp .apply-checkbox {
    width: 12px;
    height: 12px;
    /*border: 1px solid red;*/
}

.createapp .apply-form :checked + .checkbox {
    background: url('../../assets/img/login/checkbox_checked.png');
}
.createapp .apply-form :not(:checked) + .checkbox {
    background: url('../../assets/img/login/checkbox_unchecked.png');
}

.createapp .checkbox, .radio {
    display: inline-block;
    margin-right: 5px;
    vertical-align: -11px;
}

.createapp apply-form, .checkbox, .apply-form .radio {
    border: 0px;
}

.createapp .apply-radio {
    width: 13px;
    height: 13px;
}

.createapp .apply-check-list-radio {
    width: 80px !important;
}

.createapp .apply-form :not(:checked) + .radio {
    background: url('../../assets/img/login/radiobox_unchecked.png');
}

.createapp .apply-form :checked + .radio {
    background: url('../../assets/img/login/radiobox_checked.png');
}

.createapp [disabled] + .apply-submit-button {
    background-color: #add2ff;
    cursor: default;
}
.createapp .apply-submit-button {
    width: 250px;
    height: 40px;
    background-color: #3688ff;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
}

.createapp .apply-submit-button img {
    padding-bottom: 10px;
    padding-right: 5px;
}

.createapp .color-b3 {
    color: #b3b3b3;
}


</style>