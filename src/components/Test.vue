<template>
  <div class="qt" style="padding-top: 80px">
    <div :class="{ active: isActive }">{{ msg }}</div>
    <button @click="change" style="margin: 30px;">change</button>
    <div class="xs-body">
      <div class="xs-mid">
        <div class="xs-side ng-scope" ng-controller="expSideNavController">
          <dl class="xs-side-section" v-for="(sideitem,index) in sideData">
            <dd class="xs-side-level1 non-border-top" @click="clickleve(index)">
              <dl class="level1-item level1-item-selected" ng-class>
                <div class="open-image">
                  <img :src="sideitem.img" :ng-src="sideitem.img">
                </div>
                <a href="javascript:void(0)" class="xs-side-api-a" :class="{selected: sideitem.clickstatus}" ng-class ng-click>{{sideitem.suptitle}}</a>
              </dl>
              <dl class="xs-side-section1 xs-service-open" ng-class v-for="(subitem,index) in sideitem.subChilds">
                <dd>
                  <a class="xs-side-api-a level2-item" @click="clicksubitem(subitem,index)">{{ subitem.title }}</a>
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
        <div class="ng-scope" ng-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import tmpcloseimg1 from '../assets/img/technicalexp/bt_menu_close.png'
import tmpopenimg2 from '../assets/img/technicalexp/bt_menu_open.png'

var sideArr = [
  {
    openflag:true,
    suptitle:'人脸设别技术',
    img:tmpopenimg2,
    clickstatus:true,
    choosestatus:true,
    subChilds:[{
      status:true,
      title:'人脸检测与分析'
    },{
      status:false,
      title:'五官定位'
    },{
      status:false,
      title:'人脸设别'
    }
    ]
  },
  {
    openflag:false,
    suptitle:'图像设别技术',
    img:tmpcloseimg1,
    clickstatus:false,
    choosestatus:false,
    subChilds:[{
      status:false,
      title:'图像内容设别'
    },{
      status:false,
      title:'深度识别引擎定制'
    },{
      status:false,
      title:'智能鉴黄'
    }
    ]
  }
];
export default {
  name: 'test',
  data () {
    return {
      msg: 'the vue file for testing',
      isActive: true,
      sideData: sideArr
    }
  },
  methods: {
    change: function (argument) {
      // body...
      if (this.isActive) {
        this.isActive = false;
      }else{
        this.isActive = true;
      }
    },
    clickleve: function(obj) {
      var dic = this.sideData[obj];
      if (dic.openflag) {
        dic.openflag = false;
        dic.img = tmpcloseimg1;
      }else {
        dic.openflag = true;
        dic.img = tmpopenimg2;
      }
    },
    clicksubitem: function(obj,index) {
      console.log(index);
      console.log(obj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*动态绑定样式*/
  .active {
    background-color: yellow;
  }
  .level1-item-selected {
    background: #fff;
  }
  .xs-service-open {
    max-height: 2800px !important;
  }
/*end.*/

  /** {
    line-height: 1.42858;
    font-size: 14px;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: PingFangSC-Regular,'helvetica neue','hiragino sans gb', 'microsoft yahei', tahoma,'microsoft yahei ui', simsun,sans-serif;
    color: #252525;
  }*/
  ul, ol, p, h1, h2, h3, h4, h5, h6, dd, dl {
    margin: 0;
  }
  .xs-body {
    position: relative;
    padding: 110px 0 0;
    background: #fff;
    margin-bottom: 60px;
    min-height: calc(100vh - 190px);
    min-width: 1208px;
  }

  .xs-mid {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }

  .xs-side {
    position: relative;
    width: 268px;
    float: left;
    border: 1px solid #d9d9d9;
    overflow: visible;
  }
  dl {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  .xs-side-section {
    padding-top: 0;
    position: relative;
  }

  .xs-side .non-border-top {
    border-top: 0 solid #d9d9d9 !important;
  }

  .xs-side-level1 {
    position: relative;
    border-top: 1px solid #d9d9d9;
    overflow: hidden;
  }

  .xs-side .level1-item {
    font-size: 20px;
    color: #737373;
    padding-left: 30px;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
  }

  .xs-side-section1 {
    position: relative;
    max-height: 0;
    margin-left: 50px;
    overflow: hidden;
  }

  .xs-side .open-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 42px;
    height: 100%;
  }

  .open-image img {
    vertical-align: middle;
  }

  img {
    border: 0;
    /*vertical-align: bottom;*/
  }

  .xs-side .selected {
    color: #207bec !important;
    font-weight: bold;
  }

  .xs-side-api-a {
    position: relative;
    display: block;
    color: #737373;
  }

  a {
    /*color: #207BEC;*/
    text-decoration: none;
  }
  a:-webkit-any-link {
    /*color: -webkit-link;*/
    cursor: auto;
    /*text-decoration: underline;*/
  }

  a:focus {
    outline: none;
  }

  .xs-side-api-a:hover {
    color: #207BEC;
    text-decoration: none;
  }

  .xs-side .level2-item {
    position: relative;
    font-size: 14px;
    color: #737373;
    height: 30px;
    line-height: 30px;
  }
  
</style>