<template>
  <div class="maindiv">
    <detail :modalShow="isShow" :logId="logId" :snapImg="snapImg" :isSnap="isSnap"
            @on-result-change="onShowResultChange" :snaptime="susnaptime" :recordtype="surecordtype"
            :mansex="sumansex" :snapConfidence="susnapConfidence" :cameraname="sucameraname"
            :mancardid="sumancardid" :manname="sumanname" :matchimg="sumatchimg"></detail>
    <div class="cameranode">
      <Button type="primary" @click="refreshCameraLib" long>刷新</Button>
      <div class="wyinline" style="padding: 5px;">
        <!-- <cameranode :list='roots' :options='cameranodetree.options'></cameranode> -->
        <el-tree :expand-on-click-node="true" :data="roots" :props="defaultProps"
                 :default-expand-all=true ref="tree" :highlight-current="true"
                 :render-content="renderContent" @node-click="nodeClick"></el-tree>
      </div>
    </div>
    <div class="cameralive">
      <object class="liveplayobject" id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="/">
      <param name="movie" value="static/video/flvplayer.swf">
      <param name="quality" value="high">
      <param name="allowFullScreen" value="true">
      <param name="FlashVars" :value="playurl">
      <embed src="static/video/flvplayer.swf" allowfullscreen="true" :flashvars="playurl" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="800" height="400"></embed>
      </object>
    </div>
    <div class="inforecord">
      <div class="photorecord">
        <ul class="matchdisplay">
          <li v-for="item in photorecarr.dataStore">
            <img class="match" v-bind:src="picShow(item)" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="buttomdiv">
      <div class="infomatch">
        <ul class="matchdisplay">
          <li>
            <img class="match" v-bind:src="snapShow(0)" alt="">-->
          </li>
          <li>
            <img class="match" v-bind:src="snapShow(1)" alt="">
          </li>
        </ul>
      </div>
      <div class="recordlist">
        <Table size="small" height="160" stripe border :columns="recorditems" :data="recordcontents"
               @on-row-dblclick="rowdbClick"
               @on-row-click="rowclick"></Table>
      </div>
    </div>
  </div>
</template>
<script>
  import Stomp from 'stompjs'
  import qs from 'qs';
  // camera 节点:

  var cameraAction = {
    callback: function (node, vm) {
      // alert('callback');
      if (node.childs.length != 0) {

      } else {
        console.log('click node: ' + node);
      }
      return node.id;
    }
  };

  let recordInfoArr = [{
    title: '抓拍时间',
    key: 'timestamp',
    width: 160
  },
    //   {
    //   title: 'ID',
    //   key: 'id',
    //   width: 100,
    //   fixed: 'left'
    // },
    {
      title: '记录类型',
      key: 'id',
      width: 120,
      render: function (h, data) {
        if (this.row.snapshot !== undefined) {
          return '告警'
        }
        else {
          return '抓拍'
        }
      }
    },
    {
      title: '姓名',
      key: 'name',
      width: 80,
      render: function () {
        let name = '';
        if (this.row.face !== undefined) {
          name = this.row.face.name
        }
        else {
          name = ''
        }
        return name
      }
    },
    {
      title: '性别',
      key: 'sex',
      width: 100
    }, {
      title: '身份证号',
      key: 'idCard',
      width: 180
    },
    {
      title: '相似度值',
      key: 'confidence',
      width: 100
    }, {
      title: '摄像机名称',
      key: 'deviceName',
      width: 150
    }, {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 120,
      render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'text',
              size: 'small'
            },
            on: {
              click: () => {
                // this.show(params.index)
                console.log('操作: ' + params)
              }
            },
            style: {
              color: 'red',
              fontSize: '18px'
            }
          }, '查看')
        ]);
      }
    }];

  import Cameranode from './cameranode'
  import defaultImg from '../../assets/default.png'
  import detail from './detail.vue'
  import homepic from '../../assets/area.jpg'
  import nodepic from '../../assets/camera.png'
  import Onlinepic from '../../assets/Oncamera.png'
  export default {
    name: 'rtimemoniter',
    data () {
      return {
        //vcastr_file=http://192.168.123.81:8090/test.flv
        playurl: 'vcastr_file=',
        cameranodetree: {
          list: [],
          options: cameraAction
        },
        client: Stomp.client('ws://' + this.websocket + '/client'),
        livearr: [],
        infomatcharr: Object,
        photorecarr: [],
        recorditems: recordInfoArr,
        recordcontents: [],
        receiveData: Object,
        isShow: false,
        logId: '0',
        snapImg: '',
        isSnap: true,
        cameraList: [],
        roots: [],
        defaultProps: {
          children: 'childs',
          label: 'name'
        },
        // matchimginfo: '',
        susnaptime: '',//抓拍时间
        surecordtype: '',
        sumansex: '',
        susnapConfidence: 0,
        sucameraname: '',
        sumancardid: '',
        sumanname: '',
        sumatchimg: '',
        testtmpvalue: 0//测试字段
      }
    },
    created () {
      let data = {'name': 'test'};
      const _this = this;
      this.$http.get('/api/v1/regions', qs.stringify(data)).then(function (result) {
        if (result.data.data !== undefined) {
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
        }
      })
      this.connect();
    },
    mounted () {
      let winWidth = window.screen.availWidth;
      let winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
      $(".maindiv").width(winWidth);
      $(".cameralive").height($(".cameranode").height() + "px");
      $(".liveplayobject").width($(".cameralive").width());
      $(".liveplayobject").height($(".cameralive").height());

      let _this = this;
      this.$http.get('/api/v1/cameras', null).then(function (result) {
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
      });


    },
    components: {
      Cameranode, detail
    },
    methods: {
      onResultChange(val){
        this.cameranodetree.list = val.list;
        this.cameranodetree.options = val.options;
      },
      nodeClick(node){
        // console.log(node);
        // console.log(node.regionId);
        if(node.childs.length != 0){
          return;
        }
        var vpUrl = '';
        if (node.videoPlayUrl != null) {
          vpUrl = node.videoPlayUrl;
        }
        // console.log(vpUrl);
          this.playurl = 'vcastr_file=' + vpUrl;
          var playhtml = '<object class=\"liveplayobject\" id=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"/\"> \
      <param name=\"movie\" value=\"static/video/flvplayer.swf\"> \
      <param name=\"quality\" value=\"high\"> \
      <param name=\"allowFullScreen\" value=\"true\"> \
      <param name=\"FlashVars\" value=\"'+'vcastr_file=' + vpUrl +'\"> \
      <embed src=\"static/video/flvplayer.swf\" allowfullscreen=\"true\" flashvars=\"'+ vpUrl +'\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\"400\" height=\"300\"></embed> \
      </object>';
      // console.log(playhtml);
          $('.cameralive').html(playhtml);
          $(".liveplayobject").width($(".cameralive").width());
          $(".liveplayobject").height($(".cameralive").height());
          // console.log('height: ' + $(".cameralive").height());
          // console.log('width: '+$(".cameralive").width());
      },
      connect: function () {
        let headers = {
          'login': "test",
          'passcode': "test",
          'client-id': "client"
        };
         this.client.debug = null;//去除 stompjs日志.
        this.client.connect(headers, this.onConnected, this.onFailed)
      },
      onConnected: function (frame) {
        let snap = '/c/snapshot';
        let alarm = '/c/alarm';
        this.receiveData = new this.Queue(6);
        this.photorecarr = new this.Queue(6);
        this.client.subscribe(snap, this.responseCallback, this.onFailed);
        this.client.subscribe(alarm, this.responseCallback, this.onFailed)
      },
      onFailed: function (frame) {
      },
      responseCallback: function (frame) {
        let json = JSON.parse(frame.body);
        if (json.snapshot !== undefined) {
          json.cameraIp = this.getCameraName(json.snapshot.cameraId);
          json.timestamp = this.DateFormate(json.snapshot.timestamp)
        }
        else {
          json.cameraIp = this.getCameraName(json.cameraId);
          json.timestamp = this.DateFormate(json.timestamp);
          this.photorecarr.dataStore.reverse();
          this.photorecarr.enqueue(json);
          this.photorecarr.dataStore.reverse();
        }
        this.receiveData.dataStore.reverse();
        this.receiveData.enqueue(json);
        this.receiveData.dataStore.reverse();

        // var recordTempArr = [];
        let recordTempArr = this.receiveData.dataStore;
        this.infomatcharr = recordTempArr[0];
        for (let i = 0; i < recordTempArr.length; i++) {
          let tempObj = recordTempArr[i];
          if (tempObj.cameraId !== undefined) {
            for (let j = 0; j < this.cameraList.length; j++) {
              let obj = this.cameraList[j];
              if (obj.id !== undefined && obj.id == tempObj.cameraId) {
                tempObj.deviceName = obj.deviceName;
                tempObj.name = '';
                tempObj.sex = '';
                tempObj.idCard = '';
              }
            }
          } else if (tempObj.snapshot !== undefined && tempObj.face !== undefined) {
            for (let j = 0; j < this.cameraList.length; j++) {
              let obj = this.cameraList[j];
              if (obj.id !== undefined && obj.id == tempObj.snapshot.cameraId) {
                tempObj.deviceName = obj.deviceName;
                if (tempObj.snapshot.confidence && tempObj.snapshot.confidence !== undefined) {
                  tempObj.confidence = tempObj.snapshot.confidence;
                } else {
                  tempObj.confidence = '';
                }
                if (tempObj.face.name && tempObj.face.name !== undefined) {
                  tempObj.name = tempObj.face.name;
                } else {
                  tempObj.name = '';
                }
                if (tempObj.face.sex && tempObj.face.sex !== undefined) {
                  tempObj.sex = tempObj.face.sex;
                } else {
                  tempObj.sex = '';
                }
                if (tempObj.face.idCard && tempObj.face.idCard !== undefined) {
                  tempObj.idCard = tempObj.face.idCard;
                } else {
                  tempObj.idCard = '';
                }
              }
            }
          }
        }
        this.recordcontents = recordTempArr;
      },
      picShow: function (data) {
        return data.photoUrl;
      },
      snapShow: function (data) {
        if (this.infomatcharr.snapshot !== undefined) {
          if (data === 0) {
            return this.infomatcharr.snapshot.photoUrl
          }
          else if (data === 1) {
            return this.infomatcharr.face.imgUrl;
          }
        }
        else {
          if (data === 0 && this.infomatcharr.photoUrl !== undefined) {
            return this.infomatcharr.photoUrl;
          }
          else {
            return defaultImg
          }
        }
      },
      onShowResultChange(val){
        this.isShow = val
      },
      rowdbClick(data){
        let snapImg = defaultImg;
        this.susnaptime = data.timestamp;
        this.sucameraname = data.deviceName;
        this.sumanname = data.name;
        this.sumansex = data.sex;
        this.sumancardid = data.idCard;
        this.susnapConfidence = data.confidence;
        if (data.snapshot !== undefined) {
          this.surecordtype = '告警';
          this.sumatchimg = data.face.imgUrl
        } else {
          this.surecordtype = '抓拍';
          this.sumatchimg = '';
        }

        if (data.snapshot !== undefined) {
          this.logId = data.id;
          this.isSnap = false;
          snapImg = data.snapshot.photoUrl
        }
        else {
          this.isSnap = true;
          snapImg = data.photoUrl;
        }
        this.isShow = true;
        this.snapImg = snapImg;
      },
      rowclick(data){
        this.infomatcharr = data
      },
      getCameraName(id){
        for (let item of this.cameraList) {
          if (id === item.id) {
            return item.deviceIp;
          }
        }
      },
      getNode(node, id){
        if (node.id === id.parentNode.id) {
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
      refreshCameraLib: function (obj) {
        //获取区域:
        const _this = this;
        this.$http.get('/api/v1/regions', null).then(function (result) {
            alert(result)
          if (result.data.data !== undefined) {
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
          }
        })

        //获取节点:
        this.$http.get('/api/v1/cameras', null).then(function (result) {
          if (result.data.data !== undefined) {
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
          }
        });


      }
    }
  }
</script>
<style scoped>
  .maindiv {
    position: relative;
    width: 100%;
    background: #999999;
    margin-top: 65px; /*这里的值与entrancenav的高度相关*/
    margin-bottom: 5px;
  }

  .cameranode {
    position: absolute;
    width: 200px;
    left: 5px;
    top: 10px;
    bottom: 190px;
    background: #dddddd;
    overflow: scroll;
  }

  .inforecord {
    position: absolute;
    width: 300px;
    right: 5px;
    top: 10px;
    bottom: 190px;
    background: #dddddd;
  }

  .cameralive {
    position: relative;
    margin-left: 210px;
    margin-right: 310px;
    top: 10px;
    /*margin-bottom: 190px;*/
    background: #dddddd;
  }

  .buttomdiv {
    position: absolute;
    height: 180px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: #dddddd;
  }

  .infomatch {
    position: absolute;
    width: 260px;
    height: 160px;
    left: 10px;
    top: 10px;
    border: 1px solid #bbbbbb;
    /*border-style:solid;
          border-width: 1px;
          border-color:yellow;*/
  }

  .recordlist {
    position: relative;
    height: 160px;
    margin-left: 280px;
    margin-right: 10px;
    top: 10px;
    /*background:blue;*/
    border: 1px solid #bbbbbb;
  }

  .photorecord {
    position: absolute;
    width: 280px;
    right: 15px;
    top: 10px;
    bottom: 10px;
    border: 1px solid #bbbbbb;
  }

  /*照片显示样式*/
  img.match {
    margin: 10px;
    width: 120px;
    height: 120px;
    border: 0;
  }

  ul.matchdisplay,
  li {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .matchdisplay {
    width: 260px;
  }

  .matchdisplay li {
    float: left;
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }

  /*视频显示样式*/
  ul.livedisplay,
  li {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .livedisplay {
    width: 800px;
  }

  .livedisplay li {
    float: left;
    width: 320px;
    height: 240px;
    margin-right: 5px;
    margin-top: 5px;
    margin-left: 5px;
  }
</style>
