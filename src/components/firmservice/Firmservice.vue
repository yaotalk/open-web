<template>
  <div class="qt2">
    <div class="xs-body">
      <div class="xs-mid">
        <div class="xs-side ng-scope">
          <dl class="xs-side-section" v-for="item in sideData">
            <dd class="xs-side-level1 non-border-top">
              <dl class="level1-item" :class="pselecteds.indexOf(item.title) !== -1? 'parantSelected' : ''">
                <div v-if="item.childs.length>0" class="open-image">
                  <img  :src="pselecteds.indexOf(item.title)!==-1 ? openImg : closeImg" >
                </div>
                <a href="javascript:void(0)" class="xs-side-api-a" :class="pselected ==item.title ? 'selected' : ''" @click="clickleve(item)">{{item.title}}</a>
              </dl>
              <dl class="xs-side-section1" :class="pselecteds.indexOf(item.title)!==-1 ? 'xsserviceopen' : ''" v-for="subitem in item.childs">
                <dd>
                  <a class="xs-side-api-a level2-item" :class="selected==subitem.title ? 'selected' : ''" @click="clicksubitem(subitem,item.title)">{{ subitem.title }}</a>
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
    import cImg from '../../assets/img/technicalexp/bt_menu_close.png'
    import oImg from '../../assets/img/technicalexp/bt_menu_open.png'

    const sideArr = [
        {
            title:'企业VIP服务',
            name:'enterprise',
            childs:[]
        },
        {
            title:'产品行业解决方案',
            childs:[
//                {
//                title:'安防监控',
//            },{
//                title:'深度识别引擎订制'
//            }
            ]
        },
        {
            title:'合作案例',
            name:'cooperation',
            childs:[]
        }
    ];

    export default{
        name: 'firmservice',
        data () {
            return {
                sideData: sideArr,
                openImg:  cImg,
                closeImg: oImg,
                pselecteds:[],
                pselected:'',
                selected:''
            }
        },
        mounted:function () {
<<<<<<< .mine
//            this.pselected = '企业VIP服务'
        //   this.$goRoute("/firmservice/firmservice/enterprise");
||||||| .r384
           this.$goRoute("/firmservice/firmservice/enterprise");
=======
           this.$goRoute("/firmservice/enterprise");
>>>>>>> .r430
        },
        methods:{
            clickleve: function(item) {
                if(item.childs.length ===0){
                    this.pselected = item.title;
<<<<<<< .mine
                    this.$goRoute("/service/"+item.name);
||||||| .r384
                    this.$goRoute("/firmservice/firmservice/"+item.name);
=======
                    this.$goRoute("/firmservice/"+item.name);
>>>>>>> .r430
                    return;
                }
                let index =this.pselecteds.indexOf(item.title);
                if(  index > -1){
                    this.pselecteds.splice(index,1);
                    return;
                }
                this.pselecteds.push(item.title);
            },
            clicksubitem: function(item,ptitle) {
                this.selected  = item.title;
                this.pselected = ptitle;
                this.pselecteds = [];
                this.pselecteds.push(ptitle);
<<<<<<< .mine
                this.$goRoute("/service/"+item.name);
||||||| .r384
                this.$goRoute("/firmservice/firmservice/"+item.name);
=======
                this.$goRoute("/firmservice/"+item.name);
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
  .guide-steps p {
    margin-left: 86px;
    font-size: 16px;
    color: #999999;
  }
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
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