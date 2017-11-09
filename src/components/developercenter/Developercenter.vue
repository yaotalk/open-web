<template>
        <div class="qt2">
          <div class="xs-body">
            <div class="xs-mid">
              <div class="xs-side ng-scope">
                <dl class="xs-side-section" v-for="item in sideData">
                  <dd class="xs-side-level1 non-border-top">
                    <dl class="level1-item" :class="pselecteds.indexOf(item.name) !== -1? 'parantSelected' : ''">
                      <div class="open-image">
                        <img  :src="pselecteds.indexOf(item.name)!==-1 ? openImg : closeImg" >
                      </div>
                      <a href="javascript:void(0)" class="xs-side-api-a" :class="pselected ==item.name ? 'selected' : ''" @click="clickleve(item.name)">{{item.title}}</a>
                    </dl>
                    <dl class="xs-side-section1" :class="pselecteds.indexOf(item.name)!==-1 ? 'xsserviceopen' : ''" v-for="subitem in item.childs">
                      <dd>
                        <a class="xs-side-api-a level2-item" :class="selected==subitem.name ? 'selected' : ''" @click="clicksubitem(subitem,item.name)">{{ subitem.title }}</a>
                      </dd>
                    </dl>
                  </dd>
                </dl>
        </div>
     </div>
<<<<<<< .mine
      <router-view :selected="this.selected"  @on-result-change="resultChange"></router-view>
||||||| .r384
      <router-view></router-view>
=======
            <router-view :selected="this.selected"  @on-result-change="resultChange"></router-view>
>>>>>>> .r430
  </div>
<<<<<<< .mine

||||||| .r384

    <!-- <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop> -->
=======
>>>>>>> .r430
  </div>
</template>
<script>
    import Vue from 'vue';
    import cImg from '../../assets/img/technicalexp/bt_menu_close.png'
    import oImg from '../../assets/img/technicalexp/bt_menu_open.png'

    let sideArr = [
        {
            title:'新手指引',
            name:'new',
            childs:[{
                title:'接入流程',
                name:'newuser',
            },{
                title:'鉴权服务技术方案',
                name:'authent',
<<<<<<< .mine
            }]
||||||| .r384
            },{
                title:'开发者协议'
            },
                {
                    title:'快速开始一个应用开发'
                }
            ]
=======
            }
//            ,{
//                title:'开发者协议'
//            },
//                {
//                    title:'快速开始一个应用开发'
//                }
           ]
>>>>>>> .r430
        },
        {
            title:'开发者工具',
            name:'dev',
            childs:[{
                title:'SDK以及文档',
                name:'sdk'
            }
<<<<<<< .mine
//            ,{
//                title:'深度识别引擎订制'
//            }
           ]
||||||| .r384
            ]
=======
//            ,{
//                title:'深度识别引擎订制'
//            }
            ]
>>>>>>> .r430
        },
        {
            title:'API文档',
            name:'api',
            childs:[{
                title:'API概述',
                name:'apisum',
                childs: []
            },
                {
                    title:'人脸检测',
                    name:'detect'
                }
<<<<<<< .mine
//                ,
//                {
//                    title:'人脸比对'
//                },
//                {
//                    title:'人脸搜索'
//                }
||||||| .r384
=======
//                {
//                    title:'人脸识别'
//                }
>>>>>>> .r430
            ]
        }
    ];

    export default{
  	name: 'developercenter',
  	data () {
  	  return {
  	      test:'',
          sideData: sideArr,
          openImg:  cImg,
          closeImg: oImg,
          pselecteds:[],
          pselected:'',
          selected:''
  	  }
  	},
<<<<<<< .mine
      created :
          function () {
              let path = window.location.pathname;
              if(path.indexOf('develop') < 0) {
                  this.selected = '接入流程';
                  this.pselecteds.push('新手指引');
                  this.pselected = '新手指引';
              }
              for(let i of this.sideData){
                  for(let k of i.childs){
                      if(path.indexOf(k.name)>0){
                          this.pselecteds.push(i.title);
                          this.pselected = i.title;
                          this.selected = k.title;
                      }
                  }
              }
||||||| .r384
      mounted:function () {
         this.$goRoute("/developercenter/developercenter/newuser");
=======

      mounted:function () {
  	      this.$emit("on-result-change",'develop');
  	      if(Vue.localStorage.get('selected') !== null){
  	          this.pselecteds = JSON.parse(Vue.localStorage.get('pselecteds'));
              this.pselected = Vue.localStorage.get('pselected');
              this.selected = Vue.localStorage.get('selected');
              this.$goRoute("/develop/"+this.selected);
              return;
          }
          else {
  	       // alert(window.location.hash)
//              this.pselecteds = ['new'];
//              this.pselected = 'new';
//              this.selected = 'newuser';
//              this.$goRoute("/develop/newuser");
          }
>>>>>>> .r430
      },
      methods:{
<<<<<<< .mine
          resultChange(val){
              if(val === 'sdk') {
                  this.selected = 'SDK以及文档';
                  this.pselected = '开发者工具';
                  this.pselecteds = ['开发者工具']
              }
              else if(val === 'newuser'){
                  this.selected = '接入流程';
                  this.pselected = '新手指引';
                  this.pselecteds = ['新手指引']
              }
         },
         clickleve: function(title) {
              let index =this.pselecteds.indexOf(title);
||||||| .r384
         clickleve: function(title) {
  	         console.trace(this.pselecteds)
              let index =this.pselecteds.indexOf(title);
=======
          resultChange(obj){
                  this.selected = obj.selected;
                  this.pselected = obj.pselected;
                  this.pselecteds =obj.pselecteds;
                  Vue.localStorage.set('selected',this.selected);
                  Vue.localStorage.set('pselected',this.pselected);
                  Vue.localStorage.set('pselecteds',JSON.stringify(this.pselecteds));
          },
         clickleve: function(name) {
              let index =this.pselecteds.indexOf(name);
>>>>>>> .r430
              if(  index > -1){
                 this.pselecteds.splice(index,1);
  	             return;
             }
              this.pselecteds.push(name);
              Vue.localStorage.set('pselecteds',JSON.stringify(this.pselecteds));
        //      console.trace(Vue.localStorage.get('pselecteds'))
          },
          clicksubitem: function(item,pname) {
            this.selected  = item.name;
            this.pselected = pname;
            this.pselecteds = [];
<<<<<<< .mine
            this.pselecteds.push(ptitle);
            this.$goRoute("/develop/"+item.name);
||||||| .r384
            this.pselecteds.push(ptitle);
            this.$goRoute("/developercenter/developercenter/"+item.name);
=======
            this.pselecteds.push(pname);
            Vue.localStorage.set('selected',this.selected);
            Vue.localStorage.set('pselected',this.pselected);
            Vue.localStorage.set('pselecteds',JSON.stringify(this.pselecteds));
            this.$goRoute("/develop/"+item.name);
>>>>>>> .r430
          }
      }
  }
</script>
<style scoped>
    @import url(../../assets/css/technicalexp.css);
    .help-body .constr_non_index {
    width: 1172px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .yt-side{
    width: 280px;
    float: left;
  }
  .guide-steps p {
    margin-left: 86px;
    font-size: 16px;
    color: #999999;
  }

  /*动态绑定样式*/
  .qt2 .active {
    background-color: yellow;
  }

  .qt2 .parantSelected {
    background: #fff;
  }

  .qt2 .xsserviceopen {
    max-height: 2800px !important;
  }
</style>