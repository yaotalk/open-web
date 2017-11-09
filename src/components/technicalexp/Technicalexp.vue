<template>
<<<<<<< .mine
  <div class="qt2">
    <div class="xs-body">
      <div class="xs-mid">
        <div class="xs-side ng-scope">
          <dl class="xs-side-section" v-for="(sideitem,index) in sideData">
            <dd class="xs-side-level1 non-border-top">
              <dl class="level1-item" :class="{ level1itemselected: sideitem.clickstatus}">
                <div class="open-image">
                  <img :src="sideitem.img">
||||||| .r384
  <div class="qt2">
    <div class="xs-body">
      <div class="xs-mid">
        <div class="xs-side ng-scope" ng-controller="expSideNavController">
          <dl class="xs-side-section" v-for="(sideitem,index) in sideData">
            <dd class="xs-side-level1 non-border-top">
              <dl class="level1-item" :class="{ level1itemselected: sideitem.clickstatus}" ng-class>
                <div class="open-image">
                  <img :src="sideitem.img" :ng-src="sideitem.img">
=======
    <div class="qt2">
        <div class="xs-body">
            <div class="xs-mid">
                <div class="xs-side ng-scope" ng-controller="expSideNavController">
                    <dl class="xs-side-section" v-for="(sideitem,index) in sideData">
                        <dd class="xs-side-level1 non-border-top">
                            <dl class="level1-item" :class="{ level1itemselected: sideitem.clickstatus}" ng-class>
                                <div class="open-image">
                                    <img :src="sideitem.img" :ng-src="sideitem.img">
                                </div>
                                <a href="javascript:void(0)" class="xs-side-api-a" :class="{selected: sideitem.clickstatus}" ng-class ng-click @click="clickleve(index)">{{sideitem.suptitle}}</a>
                            </dl>
                            <dl class="xs-side-section1" :class="{xsserviceopen:sideitem.clickstatus}" ng-class v-for="(subitem,subindex) in sideitem.subChilds">
                                <dd>
                                    <a class="xs-side-api-a level2-item" :class="{selected: subitem.status}" @click="clicksubitem(subitem.title,index,subindex)">{{ subitem.title }}</a>
                                </dd>
                            </dl>
                        </dd>
                    </dl>
>>>>>>> .r430
                </div>
<<<<<<< .mine
                <a href="javascript:void(0)" class="xs-side-api-a" :class="{selected: sideitem.clickstatus}"   @click="clickleve(index)">{{sideitem.suptitle}}</a>
              </dl>
              <dl class="xs-side-section1" :class="{xsserviceopen:sideitem.clickstatus}" ng-class v-for="(subitem,subindex) in sideitem.subChilds">
                <dd>
                  <a class="xs-side-api-a level2-item" :class="{selected: subitem.status}" @click="clicksubitem(subitem.title,index,subindex)">{{ subitem.title }}</a>
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
        <div class="ng-scope">
          <div class="xs-content ng-scope">
            <div class="xs-exp-tap">
              <el-radio-group v-model="isCollapse" size="large" @change="techcontent" style="margin-bottom: 20px;">
                <el-radio-button label="技术介绍" name="profile"><span style="margin-left: 20px;margin-right: 20px;">技术介绍</span></el-radio-button>
                <el-radio-button v-if="isexperience" label="技术体验" name="exprience"><span style="margin-left: 20px;margin-right: 20px;">技术体验</span></el-radio-button>
                <el-radio-button v-if="ismatch" label="人脸对比" name="match"><span style="margin-left: 20px;margin-right: 20px;">人脸对比</span></el-radio-button>
                <el-radio-button v-if="isverify" label="人脸识别" name="verify"><span style="margin-left: 20px;margin-right: 20px;">人脸识别</span></el-radio-button>
              </el-radio-group>
            </div>
            <!-- <div class="xs-intro">
||||||| .r384
                <a href="javascript:void(0)" class="xs-side-api-a" :class="{selected: sideitem.clickstatus}" ng-class ng-click @click="clickleve(index)">{{sideitem.suptitle}}</a>
              </dl>
              <dl class="xs-side-section1" :class="{xsserviceopen:sideitem.clickstatus}" ng-class v-for="(subitem,subindex) in sideitem.subChilds">
                <dd>
                  <a class="xs-side-api-a level2-item" :class="{selected: subitem.status}" @click="clicksubitem(subitem.title,index,subindex)">{{ subitem.title }}</a>
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
        <div class="ng-scope" ng-view>
          <div class="xs-content ng-scope">
            <div class="xs-exp-tap">
              <el-radio-group v-model="isCollapse" size="large" @change="techcontent" style="margin-bottom: 20px;">
                <el-radio-button label="技术介绍" name="profile"><span style="margin-left: 20px;margin-right: 20px;">技术介绍</span></el-radio-button>
                <el-radio-button v-if="isexperience" label="技术体验" name="exprience"><span style="margin-left: 20px;margin-right: 20px;">技术体验</span></el-radio-button>
                <el-radio-button v-if="ismatch" label="人脸对比" name="match"><span style="margin-left: 20px;margin-right: 20px;">人脸对比</span></el-radio-button>
                <el-radio-button v-if="isverify" label="人脸识别" name="verify"><span style="margin-left: 20px;margin-right: 20px;">人脸识别</span></el-radio-button>
              </el-radio-group>
            </div>
            <!-- <div class="xs-intro">
=======
                <div class="ng-scope" ng-view>
                    <div class="xs-content ng-scope">
                        <div class="xs-exp-tap">
                            <!-- <el-radio-group v-model="isCollapse" size="large" @change="techcontent" style="margin-bottom: 20px;">
                                <el-radio-button label="技术介绍" name="profile"><span style="margin-left: 20px;margin-right: 20px;">技术介绍</span></el-radio-button>
                                <el-radio-button v-if="isexperience" label="技术体验" name="exprience"><span style="margin-left: 20px;margin-right: 20px;">技术体验</span></el-radio-button>
                                <el-radio-button v-if="ismatch" label="人脸对比" name="match"><span style="margin-left: 20px;margin-right: 20px;">人脸对比</span></el-radio-button>
                                <el-radio-button v-if="isverify" label="人脸识别" name="verify"><span style="margin-left: 20px;margin-right: 20px;">人脸识别</span></el-radio-button>
                            </el-radio-group> -->
                            <RadioGroup v-model="isCollapse" type="button" size="large" @on-change="techcontent">
                                <Radio label="技术介绍"></Radio>
                                <Radio v-if="isexperience" label="技术体验"></Radio>
                                <Radio v-if="ismatch" label="人脸对比"></Radio>
                                <Radio v-if="isverify" label="人脸识别"></Radio>
                            </RadioGroup>
                        </div>
                        <!-- <div class="xs-intro">
>>>>>>> .r430
              <router-view></router-view>
            </div> -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import tmpcloseimg1 from '../../assets/img/technicalexp/bt_menu_close.png'
import tmpopenimg2 from '../../assets/img/technicalexp/bt_menu_open.png'

var sideArr = [{
        openflag: true,
        suptitle: '人脸识别技术',
        img: tmpopenimg2,
        clickstatus: true,
        choosestatus: true,
        subChilds: [{
                status: true,
                title: '人脸检测与分析',
                isexperience: true
            }, {
                status: false,
                title: '五官定位',
                isexperience: true
            }, {
                status: false,
                title: '人脸识别',
                isexperience: false,
                ismatch: true,
                isverify: true
            },
            {
                status: false,
                title: '活体检测',
                isexperience: false
            },
            {
                status: false,
                title: '人脸关键点追踪',
                isexperience: true
            }
        ]
    },
    {
        openflag: false,
        suptitle: '图片识别技术',
        img: tmpcloseimg1,
        clickstatus: false,
        choosestatus: false,
        subChilds: [{
            status: false,
            title: '图像内容设别',
            isexperience: true
        }, {
            status: false,
            title: '深度识别引擎定制',
            isexperience: false
        }]
    },
    {
        openflag: false,
        suptitle: 'OCR设别技术',
        img: tmpcloseimg1,
        clickstatus: false,
        choosestatus: false,
        subChilds: [{
            status: false,
            title: '身份证OCR',
            isexperience: true
        }]
    }
];
export default {
    name: 'technicalexp',
    data() {
        return {
            sideData: sideArr,
            isCollapse: '技术介绍',
            isexperience: true,
            ismatch: false,
            isverify: false,
            currentIndex: 0,
            currentSubIndex: 0
        }
    },
<<<<<<< .mine
    created () {
        for(let i of this.sideData) {
            i.clickstatus = false;
            for(let k of i.subChilds){
                k.status = false;
            }
        }
        this.sideData[0].clickstatus = true;
        this.sideData[0].subChilds[0].status = true;
      if (Object.keys(this.$route.params).length == 0) {
        // this.$router.push({path: '/tech/profile'});
        this.$router.push({name:'profile',params:{id:'profile',msg:{index:this.currentIndex,subindex:this.currentSubIndex,data:this.sideData}}});
        return;
      }
||||||| .r384
    created () {
      
      if (Object.keys(this.$route.params).length == 0) {
        // this.$router.push({path: '/tech/profile'});
        this.$router.push({name:'profile',params:{id:'profile',msg:{index:this.currentIndex,subindex:this.currentSubIndex,data:this.sideData}}});
        return;
      }
=======
    created() {
>>>>>>> .r430

        var routename = this.$route.name

        //这段逻辑可以整理优化.
        if (Vue.localStorage.get('currentroute') == 'homepage') { //从首页跳转过来.

            //Vue.localStorage.get('token');
            if (Object.keys(this.$route.params).length == 0) {
                // this.$router.push({path: '/tech/profile'});
                this.$router.push({ name: 'profile', params: { id: 'profile', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });

            } else if (this.$route.params.msg.index !== undefined) {
                for (var i = 0; i < this.sideData.length; i++) {
                    var dic = this.sideData[i];
                    if (i == this.$route.params.msg.index) {
                        dic.openflag = true;
                        dic.clickstatus = true;
                        dic.choosestatus = true;
                        dic.img = tmpopenimg2;
                        this.currentIndex = this.$route.params.msg.index;
                        for (var j = 0; j < dic.subChilds.length; j++) {
                            var subdic = dic.subChilds[j];
                            if (j == this.$route.params.msg.subindex) {
                                subdic.status = true;
                                this.isexperience = subdic.isexperience;
                                this.isCollapse = '技术体验';
                                this.currentSubIndex = this.$route.params.msg.subindex;
                                if (subdic.ismatch !== undefined) {
                                    this.ismatch = subdic.ismatch;
                                } else {
                                    this.ismatch = false;
                                }
                                if (subdic.isverify !== undefined) {
                                    this.isverify = subdic.isverify;
                                } else {
                                    this.isverify = false;
                                }

                            } else {
                                subdic.status = false;
                            }
                        }
                    } else {
                        dic.openflag = false;
                        dic.clickstatus = false;
                        dic.choosestatus = false;
                        dic.img = tmpcloseimg1;
                        for (var j = 0; j < dic.subChilds.length; j++) {
                            var subdic = dic.subChilds[j];
                            subdic.status = false;
                        }
                    }

                }
                this.$router.push({ name: this.$route.params.msg.flag, params: { id: this.$route.params.msg.flag, msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            } else {
                this.$router.push({ name: this.$route.params.msg.flag, params: { id: this.$route.params.msg.flag, msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            }
        } else { ////捕捉刷新逻辑

            for (var i = 0; i < this.sideData.length; i++) {
                var dic = this.sideData[i];
                if (i == Vue.localStorage.get('menuindex')) {
                    dic.openflag = true;
                    dic.clickstatus = true;
                    dic.choosestatus = true;
                    dic.img = tmpopenimg2;
                    this.currentIndex = Vue.localStorage.get('menuindex');
                    for (var j = 0; j < dic.subChilds.length; j++) {
                        var subdic = dic.subChilds[j];
                        if (j == Vue.localStorage.get('submenuindex')) {
                            subdic.status = true;
                            this.isexperience = subdic.isexperience;
                            this.isCollapse = '技术体验';
                            this.currentSubIndex = Vue.localStorage.get('submenuindex');
                            if (subdic.ismatch !== undefined) {
                                this.ismatch = subdic.ismatch;
                            } else {
                                this.ismatch = false;
                            }
                            if (subdic.isverify !== undefined) {
                                this.isverify = subdic.isverify;
                            } else {
                                this.isverify = false;
                            }

                        } else {
                            subdic.status = false;
                        }
                    }
                } else {
                    dic.openflag = false;
                    dic.clickstatus = false;
                    dic.choosestatus = false;
                    dic.img = tmpcloseimg1;
                    for (var j = 0; j < dic.subChilds.length; j++) {
                        var subdic = dic.subChilds[j];
                        subdic.status = false;
                    }
                }

            }


            if (Vue.localStorage.get('currentroute') == 'experience') { //体验
                this.isCollapse = '技术体验';
                this.sideData[this.currentIndex].subChilds[this.currentSubIndex].experience = true;
            } else if (Vue.localStorage.get('currentroute') == 'match') { //比对
                this.isCollapse = '人脸对比';
                this.sideData[this.currentIndex].subChilds[this.currentSubIndex].ismatch = true;
            } else if (Vue.localStorage.get('currentroute') == 'verify') { //验证
                this.isCollapse = '人脸识别';
                this.sideData[this.currentIndex].subChilds[this.currentSubIndex].isverify = true;
            } else if (Vue.localStorage.get('currentroute') == 'profile') { //介绍
                this.isCollapse = '技术介绍';
            }

            this.$router.push({ name: Vue.localStorage.get('currentroute'), params: { id: Vue.localStorage.get('currentroute'), msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
        }

    },
    mounted() {
        //      console.log('===technicalexp === mounted =======');
        this.gcurrentgIndex = 1;
        for (var i = 0; i < 5; i++) {
            $($($('div.nav ul li').children()[i]).children()[1]).removeClass();
            $($($($('div.nav ul li').children()[i]).children()[0]).children()[0]).removeClass();
            // $($($('div.nav ul li').children()[i]).children()[0]).children()[0]
        }
        $($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[1]).addClass('nav-item-selected');
        $($($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[0]).children()[0]).addClass('nav-text-selected');
    },
    updated() {},
    methods: {
<<<<<<< .mine
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
        dic.clickstatus = false;
        dic.choosestatus = false;
        dic.img = tmpcloseimg1;
        dic.subChilds[0].status = false;
      }else {
        dic.openflag = true;
        dic.clickstatus = true;
        dic.choosestatus = true;
        dic.img = tmpopenimg2;
      }
    },
    clicksubitem: function(title,index,subindex) {
      for(var i=0;i<this.sideData.length;i++){
        var dic = this.sideData[i];
        if(i == index){
          dic.openflag = true;
          dic.clickstatus = true;
          dic.choosestatus = true;
          dic.img = tmpopenimg2;
          this.currentIndex = index;
          for(var j=0;j<dic.subChilds.length;j++){
          var subdic = dic.subChilds[j];
          if(j == subindex){
            subdic.status = true;
            this.isexperience = subdic.isexperience;
            this.isCollapse = '技术介绍';
            this.currentSubIndex = subindex;
            if (subdic.ismatch !== undefined) {
              this.ismatch = subdic.ismatch;
            }else{
              this.ismatch = false;
||||||| .r384
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
        dic.clickstatus = false;
        dic.choosestatus = false;
        dic.img = tmpcloseimg1;
        dic.subChilds[0].status = false;
      }else {
        dic.openflag = true;
        dic.clickstatus = true;
        dic.choosestatus = true;
        dic.img = tmpopenimg2;
      }
    },
    clicksubitem: function(title,index,subindex) {
      // console.log(index);
      // console.log(subindex);
      // console.log(title);
      for(var i=0;i<this.sideData.length;i++){
        var dic = this.sideData[i];
        if(i == index){
          dic.openflag = true;
          dic.clickstatus = true;
          dic.choosestatus = true;
          dic.img = tmpopenimg2;
          this.currentIndex = index;
          for(var j=0;j<dic.subChilds.length;j++){
          var subdic = dic.subChilds[j];
          if(j == subindex){
            subdic.status = true;
            this.isexperience = subdic.isexperience;
            this.isCollapse = '技术介绍';
            this.currentSubIndex = subindex;
            if (subdic.ismatch !== undefined) {
              this.ismatch = subdic.ismatch;
            }else{
              this.ismatch = false;
=======
        change: function(argument) {
            // body...
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
>>>>>>> .r430
            }
        },
        clickleve: function(obj) {
            var dic = this.sideData[obj];
            if (dic.openflag) {
                dic.openflag = false;
                dic.clickstatus = false;
                dic.choosestatus = false;
                dic.img = tmpcloseimg1;
                dic.subChilds[0].status = false;
            } else {
                dic.openflag = true;
                dic.clickstatus = true;
                dic.choosestatus = true;
                dic.img = tmpopenimg2;
            }
        },
        clicksubitem: function(title, index, subindex) {
            console.log(index);
            console.log(subindex);
            // console.log(title);
            Vue.localStorage.set('menuindex', index);
            Vue.localStorage.set('submenuindex', subindex);
            Vue.localStorage.set('currentroute', 'profile');
            for (var i = 0; i < this.sideData.length; i++) {
                var dic = this.sideData[i];
                if (i == index) {
                    dic.openflag = true;
                    dic.clickstatus = true;
                    dic.choosestatus = true;
                    dic.img = tmpopenimg2;
                    this.currentIndex = index;
                    for (var j = 0; j < dic.subChilds.length; j++) {
                        var subdic = dic.subChilds[j];
                        if (j == subindex) {
                            subdic.status = true;
                            this.isexperience = subdic.isexperience;
                            this.isCollapse = '技术介绍';
                            this.currentSubIndex = subindex;
                            if (subdic.ismatch !== undefined) {
                                this.ismatch = subdic.ismatch;
                            } else {
                                this.ismatch = false;
                            }
                            if (subdic.isverify !== undefined) {
                                this.isverify = subdic.isverify;
                            } else {
                                this.isverify = false;
                            }

                            this.$router.push({ name: 'blank', params: { id: 'blank', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });

                        } else {
                            subdic.status = false;
                        }
                    }
                } else {
                    dic.openflag = false;
                    dic.clickstatus = false;
                    dic.choosestatus = false;
                    dic.img = tmpcloseimg1;
                    for (var j = 0; j < dic.subChilds.length; j++) {
                        var subdic = dic.subChilds[j];
                        subdic.status = false;
                    }
                }

            }
        },
        techcontent: function(obj) {
            console.log('==============');
            console.log('================' + this.isCollapse);
            // console.log(obj);
            // 携带的数据结构:(请求所需要的参数)
            // {index,subindex,profile}
            //console.log('===eeee====='+ Vue.localStorage.get('currentroute'));
            if (obj == '技术介绍') { //0
                //技术介绍
                Vue.localStorage.set('currentroute', 'profile');
                this.$router.push({ name: 'profile', params: { id: 'profile', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            } else if (obj == '技术体验') { //1
                //技术体验
                Vue.localStorage.set('currentroute', 'experience');
                this.$router.push({ name: 'experience', params: { id: 'experience', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            } else if (obj == '人脸对比') { //2
                Vue.localStorage.set('currentroute', 'match');
                this.$router.push({ name: 'match', params: { id: 'match', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            } else if (obj == '人脸识别') { //3
                Vue.localStorage.set('currentroute', 'verify');
                this.$router.push({ name: 'verify', params: { id: 'verify', msg: { index: this.currentIndex, subindex: this.currentSubIndex, data: this.sideData } } });
            }
        }
    }
}
</script>
<style scoped>
@import url(../../assets/css/technicalexp.css);



/*动态绑定样式*/

.qt2 .active {
    background-color: yellow;
}

.qt2 .level1itemselected {
    background: #fff;
}

.qt2 .xsserviceopen {
    max-height: 2800px !important;
}
</style>