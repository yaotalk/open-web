<template>
  <div class="searchmain">
    <div class="searchnode">
      <Button type="primary" @click="refreshCameraLib" long>刷新</Button>
      <div class="wyinline" style="padding: 5px;">
        <!-- <cameranode :list='roots' :options='cameranodetree.options' style="overflow: scroll"></cameranode> -->
        <el-tree :expand-on-click-node="true" :data="roots" :props="defaultProps"
                 :default-expand-all=true ref="tree" :highlight-current="true"
                 :render-content="renderContent" @node-click="nodeClick"></el-tree>
      </div>
    </div>
    <div class="searchresult">
      <div class="choosediv">
        <span style="margin-left: 10px;">从</span>
        <el-date-picker
          v-model="requiretime"
          type="datetimerange"
          placeholder="选择时间范围">
        </el-date-picker>
        <span style="margin-left: 50px;"></span>
        <Button type="primary" @click="requirecaputure">查询</Button>
      </div>
      <div class="resultlist">
        <div class="headdiv"
             style="position: absolute;top: 0px;height: 50px;left: 0px;right: 0px;border: 1px solid #bbbbbb;padding-top: 10px">
          <span style="margin-left: 20px;"></span>
          <!-- <Checkbox v-model="choosestatus">本页全选</Checkbox> -->
          <span style="margin-left: 50px;"></span>
          <!-- <Button type="primary" @click="nativesave">本地保存</Button> -->
        </div>
        <div class="contentdiv" id="slide">
          <ul class="slides_container">
            <li v-for="item in imgrecorddisplay">
              <a v-if="item.length>0" target=""><img :src="item[0].pic"/></a>
              <a v-if="item.length>1" target=""><img :src="item[1].pic"/></a>
              <a v-if="item.length>2" target=""><img :src="item[2].pic"/></a>
              <a v-if="item.length>3" target=""><img :src="item[3].pic"/></a>
              <a v-if="item.length>4" target=""><img :src="item[4].pic"/></a>
            </li>
          </ul>
          <span style="margin-top: 20px;"></span>
          <ul class="slides_container">
            <li v-for="item in imgrecorddisplay">
              <a v-if="item.length>5" target=""><img :src="item[5].pic"/></a>
              <a v-if="item.length>6" target=""><img :src="item[6].pic"/></a>
              <a v-if="item.length>7" target=""><img :src="item[7].pic"/></a>
              <a v-if="item.length>8" target=""><img :src="item[8].pic"/></a>
              <a v-if="item.length>9" target=""><img :src="item[9].pic"/></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="controldiv">
        <div class="pagediv" style="margin-top: 30px;margin-left: 30px;">
          <Page :total=totalpieces show-elevator show-total :page-size="10"
                @on-change="getcurrentpage"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  // camera 节点:
  var cameraArray = [{
    name: '南京', // 目录名字
    isOpen: true, // 是否初始展开目录
    hightLight: false, // 是否初始高亮
    className: undefined, // 添加自定义样式
    childs: [{
      name: '江宁', // 目录名字
      isOpen: true, // 是否初始展开目录
      hightLight: false, // 是否初始高亮
      className: undefined, // 添加自定义样式
      childs: [{
        name: '研发中心_1', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }, {
        name: '研发中心_2', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }]
    }, {
      name: '鼓楼区', // 目录名字
      isOpen: true, // 是否初始展开目录
      hightLight: false, // 是否初始高亮
      className: undefined, // 添加自定义样式
      childs: [{
        name: '省研大厦', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }]
    }], // 二级目录
    // ...{} // 其他用户额外参数
  }, {
    name: '南京', // 目录名字
    isOpen: true, // 是否初始展开目录
    hightLight: false, // 是否初始高亮
    className: undefined, // 添加自定义样式
    childs: [{
      name: '江宁', // 目录名字
      isOpen: true, // 是否初始展开目录
      hightLight: false, // 是否初始高亮
      className: undefined, // 添加自定义样式
      childs: [{
        name: '研发中心_1', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }, {
        name: '研发中心_2', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }]
    }, {
      name: '鼓楼区', // 目录名字
      isOpen: true, // 是否初始展开目录
      hightLight: false, // 是否初始高亮
      className: undefined, // 添加自定义样式
      childs: [{
        name: '省研大厦', // 目录名字
        isOpen: true, // 是否初始展开目录
        hightLight: false, // 是否初始高亮
        className: undefined, // 添加自定义样式
        childs: []
      }]
    }], // 二级目录
    // ...{} // 其他用户额外参数
  }];

  var cameraAction = {
    callback: function (node) {
      // alert('callback');
      if (node.childs.length != 0) {
        // alert(node.name);
      } else {
        // alert(node.id)
        this.choseId = node.id;
        // alert(this.choseId);
      }
    } // 自定义点击事件，callback(node)
  };

  var total = 10;//总共多少条.


  import Cameranode from '../../moniter/cameranode'
  import defaultImg from '../../../assets/default.png'
  import {Loading} from 'element-ui';
  import homepic from '../../../assets/area.jpg'
  import nodepic from '../../../assets/camera.png'
  import Onlinepic from '../../../assets/Oncamera.png'

  export default {
    name: 'photosearch',
    data () {
      return {
        psearch: '抓拍查询',
        cameranodetree: {
          list: cameraArray,
          options: cameraAction
        },
        roots: [],
        defaultProps: {
          children: 'childs',
          label: 'name'
        },
        cameraList: [],
        totalpieces: total,
        choseId: 1,//被选中的camera id.
        choosestatus: false,
        imgrecorddisplay: [[]],//当前显示的结果.
        imgallrecord: [[]],//所有查询到的结果.
        requiretime: [new Date(), new Date()],//查询时间
        currentindex: 0//当前查看的页面
      }
    },
    created () {
      // const params = new URLSearchParams();
      const _this = this;
      this.$http.get(_this.$Ip + '/api/v1/regions', null).then(function (result) {
        let regions = result.data.data;
        for (let region of regions) {
          region.isOpen = true;
          region.hightLight = false;
          region.className = undefined;
          region.childs = [];
        }
        let roots = [];
        for (let region of regions) {
          if (region.parentNode === null) {
            roots.push(region);
          }
        }
        for (let root of roots) {
          root.childs = [];
          for (let region of regions) {
            if (region.parentNode !== null) {
              _this.getNode(root, region)
            }
          }
        }
        _this.roots = roots
      })
    },
    mounted () {
      var winWidth = window.screen.availWidth;
      var winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
      $(".maindiv").width(winWidth);
      $(".searchmain").height($(".searchnav").height() + "px");
      $(".searchmain").width((winWidth - 220) + "px");
      $(".searchresult").height($(".searchnav").height() + "px");
      $(".resultlist").height(($(".searchnav").height() - 265) + "px");
      $(".contentdiv").height(($(".resultlist").height() - 50) + "px");

      let _this = this;
      this.$http.get(_this.$Ip + '/api/v1/cameras', null).then(function (result) {
        _this.cameraList = result.data.data;
        for (let root of _this.roots) {
          for (let camera of _this.cameraList) {
            camera.name = camera.deviceName;
            camera.isOpen = true;
            camera.hightLight = false;
            camera.className = undefined;
            camera.childs = [];
            _this.getCameraNode(root, camera)
          }
        }
        console.log(_this.roots);
      });
    },
    components: {
      Cameranode
    },
    methods: {
      requirecaputure: function (obj) {

        // let params = new URLSearchParams();
        let startTime = new Date(this.requiretime[0]);
        let endTime = new Date(this.requiretime[1]);
        // params.append('startTime', Math.round(startTime.getTime()));
        // params.append('endTime', Math.round(endTime.getTime()));

        // console.log(startTime);
        // console.log(endTime);

        const _this = this;
        let loadingInstance1;
        if ($('.ivu-table-tip').css('display') !== 'none')
          loadingInstance1 = Loading.service({target: '#slide'});
        else
          loadingInstance1 = Loading.service({target: '#slide'});
        var tmpArr = new Array();
        let form_data = {};
        $.ajax({
          type: "get", // 上传文件要用POST
          url: _this.$Ip + "/api/v1/snapShot",
          dataType: "json",
          crossDomain: true, // 如果用到跨域，需要后台开启CORS
          processData: false, // 注意：不要 process data
          contentType: false, // 注意：不设置 contentType
          data: "startTime=" + Math.round(startTime.getTime()) + "&endTime=" + Math.round(endTime.getTime()) + "&cameraId=" + this.choseId,
          success: function (msg) {
            if (msg.rows.length !== 0) {
              var facedata = msg.rows;
              _this.totalpieces = msg.rows.length;
              var prarr = [];
              for (var i = 0; i < msg.rows.length; i++) {
                if (i % 10 == 0 && i != 0) {
                  tmpArr.push(prarr);
                  prarr = [];
                } else {
                  prarr.push({pic: facedata[i].photoUrl});
                }
              }

              if (prarr.length != 0) {
                tmpArr.push(prarr);
              }
              _this.imgallrecord = tmpArr;
              _this.currentindex = 0;
              _this.imgrecorddisplay = [_this.imgallrecord[_this.currentindex]];
            }
            loadingInstance1.close()
          },
          fail: function (msg) {
            console.log(msg);
          }
        });
      },
      renderContent: function (h, {node, data, store}) {
        // console.log(node);
        // if (node.data.childs.length > 0) {
        //   return (
        //     < span >
        //     < span > < img
        //   style = "width:20px;height:20px;"
        //   src = {homepic} / > < / span >
        //     < span > {node.label
        // }</
        //   span >
        //   < / span >
        // )
        //   ;
        // } else {
        //   return (
        //     < span >
        //     < span > < img
        //   style = "width:20px;height:20px;"
        //   src = {nodepic} / > < / span >
        //     < span > {node.label
        // }</
        //   span >
        //   < / span >
        // )
        //   ;
        // }
        let imgSrc = homepic;
        if (node.data.childs.length > 0 || node.data.regionId === undefined) {
          imgSrc = homepic;
        }
        else if (node.data.online)
          imgSrc = Onlinepic;
        else imgSrc = nodepic;
          return (<span><span><img style="width:20px;height:20px;" src={imgSrc}/></span>&nbsp;<span>{node.label}</span></span>);
      },
      nodeClick(val){
        // console.log(val);
        if (val.regionId !== undefined)
          this.choseId = val.id;
        else
          this.choseId = 0;
        // console.log(this.choseId);
      },
      nativesave: function (obj) {
        alert(obj);
      },
      getcurrentpage: function (num) {
        // alert(num);
        this.currentindex = num - 1;
        this.imgrecorddisplay = [this.imgallrecord[this.currentindex]];
      },
      getNode(node, id){
        if (node.id === id.parentNode.id) {
//              console.log(id.fullName)
          if (node.childs === undefined) {
            node.childs = [];
          }
          node.childs.push(id);
        }
        else if (node.childs !== undefined && node.childs.length > 0) {
          for (let i in node.childs) {
            this.getNode(node.childs[i], id)
          }
        }
      },
      getCameraNode(node, id){
        if (node.id === id.regionId && node.regionId === undefined) {
          if (node.childs === undefined) {
            node.childs = [];
          }
          node.childs.push(id);
        }
        else if (node.childs !== undefined && node.childs.length > 0 && node.regionId === undefined) {
          for (let i in node.childs) {
            this.getCameraNode(node.childs[i], id)
          }
        }
      },
      refreshCameraLib: function (obj) {
        const _this = this;
        this.$http.get(_this.$Ip + '/api/v1/regions', null).then(function (result) {
          let regions = result.data.data;

          for (let region of regions) {
            region.isOpen = true;
            region.hightLight = false;
            region.className = undefined;
            region.childs = [];
          }
          let roots = [];
          for (let region of regions) {
            if (region.parentNode === null) {
              roots.push(region);
            }
          }
          for (let root of roots) {
            root.childs = [];
            for (let region of regions) {
              if (region.parentNode !== null) {
                _this.getNode(root, region)
              }
            }
          }
          _this.roots = roots

        })

        //获取节点:
        this.$http.get(_this.$Ip + '/api/v1/cameras', null).then(function (result) {
          _this.cameraList = result.data.data;
          for (let root of _this.roots) {
            for (let camera of _this.cameraList) {
              camera.name = camera.deviceName;
              camera.isOpen = true;
              camera.hightLight = false;
              camera.className = undefined;
              camera.childs = [];
              _this.getCameraNode(root, camera)
            }
          }
          console.log(_this.roots);
        });
      }

    }
  }
</script>
<style scoped>

  .searchmain {
    position: relative;
    margin-left: 210px;
    margin-right: 10px;
    top: 5px;
    background: #dddddd;
  }

  .searchnode {
    position: absolute;
    width: 200px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background: #56acd9;
    overflow: scroll;
  }

  .searchresult {
    position: relative;
    margin-left: 205px;
    margin-right: 0px;
    top: 0px;
    background: #56acd9;
  }

  .choosediv {
    position: absolute;
    left: 5px;
    right: 5px;
    top: 0px;
    padding-top: 60px;
    height: 150px;
    background: #dddddd;
  }

  .controldiv {
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 5px;
    height: 100px;
    background: #dddddd;
  }

  .resultlist {
    position: relative;
    left: 5px;
    margin-right: 10px;
    top: 155px;
    background: #dddddd;
  }

  .contentdiv {
    position: relative;
    left: 0px;
    margin-right: 0px;
    top: 50px;
    border: 1px solid #bbbbbb;
  }

  /*图片滚动显示*/
  .slides_container li {
    width: 700px;
    float: left;
    margin-top: 5px;
    margin-left: 50px;
  }

  .slides_container li a {
    display: inline-block;
    margin-left: 5px;
    width: 120px;
    height: 160px;
    border: 1px solid #fff;
  }

  .slides_container li a img {
    width: 120px;
    height: 160px;
  }

  .slides_container li a:hover {
    border: 1px solid #ff8400;
  }

  .slides_container li a:hover span {
    color: #ff8400;
  }

  /*end.*/

</style>
