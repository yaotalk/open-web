<template>
  <div class="aman">
    <div class="apply-myapp-body">
      <div class="constr apply-full">
        <div class="apply-vm">
          <div class="apply-tit" v-if="haveappflag">
            <img :src="iconmanage" alt="">
            <span class="f24" style="color:#666666;">应用管理</span>
            <a @click="addapplication" class="add-app-btn join_up" title="添加应用">
              <i class="add-icon"></i>添加应用
            </a>
          </div>
          <div class="app-list" v-if="haveappflag">
            <div v-for="(item,index) in applists">
            <table cellspacing="0" cellpadding="0" border="0" class="a-table">
              <tbody>
                <tr class="thead-title">
                  <td colspan="5">
                    <span class="app-tit">{{item.appname}}</span>
                    <span class="app-time f11">{{item.createtime}}</span>
                  </td>
                  <td>
                    <a href="javascript:;" class="app-edit-btn f14 edit_app" title="编辑应用" @click="editapp(index)"><span style="margin-left: 20px;">编辑</span></a>
                    <span style="margin-left: 50px;"></span>
                    <a href="javascript:" class="myappRemove app-del-btn f14 ml16" @click="deleteapp(index)"><span style="margin-left: 20px;">删除</span></a>
                  </td>
                </tr>
                <tr class="app-detail-row1">
                  <td>
                    <span class="app-name app-col80">AppID:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col190">{{item.appid}}</span>
                  </td>
                  <td>
                    <span class="app-name app-col80">SecretID:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col350">{{item.secretid}}</span>
                  </td>
                  <td>
                    <span class="app-name app-col110">SecretKey:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col350">{{item.secretkey}}</span>
                  </td>
                </tr>
                <tr class="app-detail-row2">
                  <td>
                    <span class="app-name app-col80">应用平台:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col190">{{item.appplatform}}</span>
                  </td>
                  <td>
                    <span class="app-name app-col80">应用类型:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col350">{{item.apptype}}</span>
                  </td>
                  <td>
                    <span class="app-name app-col110">接入产品类型:</span>
                  </td>
                  <td>
                    <span class="app-detail app-col350">{{item.producttype}}</span>
                  </td>
                </tr>
                <tr class="app-detail-row2">
                  <td>
                    <span class="app-name app-col80">应用简介:</span>
                  </td>
                  <td colspan="5">
                    <div>
                      <span class="app-text-con app-text-all">{{item.appdec}}</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div class="back-bottom"></div>
            </div>
          </div>
          <div id="myappNull" class="app-no" v-if="noappflag">
            <div class="apply-bread" style="background-color: #fff;">
              <a href="#/login/appmanage">应用管理</a>
            </div>
            <div class="apply-empty-tit">
              <img :src="iconmanage" alt="">
              <span class="f24">应用管理</span>
            </div>
            <i class="app-icon"></i>
            <div class="apply-empty-text">
              <p class>您还没有应用</p>
              <p>单击“添加应用”按钮，创建新应用</p>
            </div>
            <!-- javascript:; -->
            <!-- href="#/login/createapp" -->
            <a @click="addapplication" class="apply-add-app-btn join_up" title="添加应用">
              <i class="add-icon"></i>添加应用
            </a>
          </div>
        </div>
        <i class="dib-vm"></i>
      </div>
    </div>
  </div>
</template>

<script>

import tmpiconmanage from '../../assets/img/login/icon_manage.png'

var tmplist = [{
        appname:'测试1',
        createtime:'2017-09-14 10:35:23',
        appid:'10092356',
        secretid:'AKIDEt0aUZZDNZdzGMn5Mj6MYq7ZrssMtT5b',
        secretkey:'qkVTK4gO487HY0pJtKsvSp4O0kdPRMI3',
        appplatform:'IOS,Android',
        apptype:'工具',
        producttype:'云服务',
        appdec:'某家fff计较'
      },{
        appname:'应用1',
        createtime:'2017-09-14 11:35:23',
        appid:'10346776',
        secretid:'RTIDEt0aUrtgfgfgrjhjn5Mj6MYq7ZrssMtT5b',
        secretkey:'gtVTK4gO487HYaafaffvSp4O0kdPRMI3',
        appplatform:'IOS,Android',
        apptype:'工具',
        producttype:'云服务',
        appdec:'某家fff计较'
      },{
        appname:'测试1',
        createtime:'2017-09-14 10:35:23',
        appid:'10092356',
        secretid:'AKIDEt0aUZZDNZdzGMn5Mj6MYq7ZrssMtT5b',
        secretkey:'qkVTK4gO487HY0pJtKsvSp4O0kdPRMI3',
        appplatform:'IOS',
        apptype:'工具',
        producttype:'云服务',
        appdec:'某家fff计较'
      },{
        appname:'应用1',
        createtime:'2017-09-14 11:35:23',
        appid:'10346776',
        secretid:'RTIDEt0aUrtgfgfgrjhjn5Mj6MYq7ZrssMtT5b',
        secretkey:'gtVTK4gO487HYaafaffvSp4O0kdPRMI3',
        appplatform:'IOS',
        apptype:'工具',
        producttype:'云服务',
        appdec:'某家fff计较'
      }];

export default {
  name: 'appmanage',
  data () {
    return {
      msg: 'app manage',
      iconmanage: tmpiconmanage,
      haveappflag:true,
      noappflag:false,
      applists:tmplist
    }
  },
  created () {
      const _this = this;
      this.$http.get("api/appmanage/applist").then(function (json) {
          console.log(json.data.data);
          _this.applists = json.data.data;
      })
  },
  methods:{
    addapplication:function (obj) {//添加应用
      // body...
      // this.$router.push('/login/createapp');
      this.$router.push({name:'createapp',params:{id:'createapp',msg:{iscreate:true,isedit:false,appinfo:{appname:'',createtime:'',appid:'',secretid:'',secretkey:'',appplatform:'',apptype:'',producttype:'',appdec:''}}}});
    },
    editapp:function (obj) {//编辑应用
      // alert('编辑应用');
      this.$router.push({name:'createapp',params:{id:'createapp',msg:{iscreate:false,isedit:true,appinfo:this.applists[obj]}}});
    },
    deleteapp:function (obj) {//删除应用
      alert('删除应用');
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aman div {
  display: block;
}

.aman ul, ol, p, h1, h2, h3, h4, h5, h6, dd, dl {
    margin: 0;
}

.aman p {
    display: block;
    /*-webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;*/
}
.aman .f24 {
  font-size: 24px;
}
.aman h1 {
  font-size: 20px;
  color: blue;
}

.aman i, cite, em, var, address, dfn {
  font-style: italic;
}

.aman .apply-myapp-body {
  min-width: 1208px;
  min-height: calc(100vh - 160px);
  padding-bottom: 0px !important;
  background-color: rgb(249,249,249);
  /*height: auto;
  padding-top: 80px;*/
}

.aman .apply-check-body, .apply-myapp-body, .apply-create-body {
  height: auto;
  min-height: calc(100vh - 297px);
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #fff;
}

.aman .apply-full {
  white-space: nowrap;
  height: 100%;
}

.aman .constr {
  width: 1174px;
  min-width: 1174px;
  margin-left: auto;
  margin-right: auto;
}

.aman .apply-vm {
  display: inline-block;
  width: 100%;
  white-space: normal;
  vertical-align: middle;
}

.aman .dib-vm {
  display: inline-block;
  width: 0;
  height: 100%;
  vertical-align: middle;
}

.aman .app-list {
  overflow: hidden;
}

.aman .app-no {
  padding: 0px 0;
  text-align: center;
}

.aman .apply-bread {
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

.aman .apply-empty-tit {
    color: #666;
    overflow: hidden;
    float: left;
}

.aman .app-no .app-icon {
  display: block;
  width: 250px;
  height: 180px;
  background: url('../../assets/img/login/icon_empty.png') no-repeat;
  margin: 160px auto 0;
}

.aman .apply-empty-text {
  height: 72px;
  padding-top: 28px;
  /*后增加*/
  margin-bottom: 28px;
}

.aman .apply-add-app-btn {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    background: #3688ff;
    border: solid 1px #3688ff;
    cursor: pointer;
    width: 250px;
    height: 40px;
    display: block;
    text-align: center;
    border-radius: 5px;
    margin-left: -125px;
    position: relative;
    left: 50%;
    line-height: 40px;
}

.aman a {
    /*color: #207BEC;*/
  text-decoration: none;
}

.aman img {
    border: 0;
    vertical-align: bottom;
}

.aman .add-icon {
  width: 20px;
  height: 20px;
  background: url('../../assets/img/login/icons-checked.png') no-repeat 0 -60px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}

.aman .app-no .apply-empty-text p {
  font-size: 14px;
  color: #999;
  line-height: 1.8;
}

.aman .apply-tit {
    padding: 30px 0 24px 0px;
    overflow: hidden;
}

.aman .add-app-btn {
    width: 120px;
    height: 34px;
    background-color: #3688ff;
    display: block;
    float: right;
    text-align: center;
    line-height: 34px;
    color: #fff;
    border-radius: 17px;
}

.aman .back-bottom {
    background-image: url('../../assets/img/login/appbg_c.png');
    width: 1174px;
    height: 20px;
    margin-bottom: 15px;
}

.aman .app-list .a-table {
    width: 100%;
    padding: 0px 27px;
    font-size: 16px;
    color: #636363;
    background-image: url('../../assets/img/login/appbg_a.png'), url('../../assets/img/login/appbg_b.png');
    background-position: 0 0, 0 0;
    background-repeat: no-repeat, repeat-y;
    min-height: 205px;
}

.aman table[Attributes Style] {
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
}

.aman table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}

.aman tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

.aman td, th {
    display: table-cell;
    vertical-align: inherit;
}

.aman .app-tit {
    line-height: 24px;
    font-size: 18px;
    word-break: break-all;
    color: #333333;
    font-weight: bold;
}

.aman .app-tit, .app-time {
    display: block;
}

.aman .app-time {
    line-height: 18px;
}

.aman .f11 {
    font-size: 11px;
}

.aman .thead-title {
    height: 86px;
    width: 1174px;
}

.aman tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

.aman a:-webkit-any-link {
    /*color: -webkit-link;*/
    cursor: auto;
    /*text-decoration: underline;*/
}

.aman .app-detail-row1 {
    color: #8cc0ff;
    margin-bottom: 5px;
    line-height: 36px;
    height: 36px;
}

.aman .app-detail-row2 {
    color: #999999;
    margin-bottom: 5px;
    line-height: 36px;
    height: 36px;
}

.aman .app-del-btn {
    background: url('../../assets/img/login/bt_delete_normal.png') no-repeat 10px 5px;
    border: 1px solid #ffd9db;
    border-radius: 17px;
    width: 74px;
    height: 28px;
    margin-top: 6px;
    float: left;
    text-align: center;
    line-height: 28px;
    color: #f05960;
}

.aman .f14 {
    font-size: 14px;
}

.aman .ml16 {
    margin-left: 16px;
}

.aman .app-edit-btn {
    background: url('../../assets/img/login/bt_edited_normal.png') no-repeat 10px 5px;
    border: 1px solid #cce3ff;
    border-radius: 17px;
    width: 74px;
    height: 28px;
    margin-top: 6px;
    float: left;
    text-align: center;
    line-height: 28px;
    color: #338fff;
}

.aman .app-name {
    display: block;
    float: left;
    font-weight: bold;
    color: #666666;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}

.aman .app-detail {
    font-size: 14px;
    font-weight: bold;
    display: block;
    word-break: break-all;
    line-height: 30px;
}

.aman .app-col80 {
    width: 80px;
}

.aman .app-col190 {
    width: 190px;
}

.aman .app-col350 {
    width: 350px;
}

.aman .app-col110 {
    width: 110px;
}

.aman .app-col310 {
    width: 310px;
}

.aman .app-text-all {
    word-break: break-all;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 3em;
}

.aman .app-text-con {
    width: 1010px;
    float: left;
    font-size: 14px;
    padding-top: 5px;
    /*line-height: 1.5;*/
    word-wrap: break-word;
}

.aman .app-detail-row2 td {
    vertical-align: top;
}


</style>
