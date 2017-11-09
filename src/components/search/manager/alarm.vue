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
        <div class="topdiv">
          <div class="block">
            <span class="demonstration" style="margin-left: 10px;margin-right: 5px">时间范围:</span>
            <el-date-picker style="width: 29.5%"
                            v-model="searchTime"
                            type="datetimerange"
                            placeholder="选择时间范围">
            </el-date-picker>
          </div>
        </div>
        <div class="middlediv">
          <span style="margin-left: 10px;margin-right: 5px;">记录类型:</span>
          <Select v-model="rtvalue" style="width:90px" @on-change="getrecordtypeva"
                  required="required">
            <Option v-for="item in recordtype" :value="item.value" :key="item.value">{{ item.label
              }}
            </Option>
          </Select>
          <span style="margin-left: 10px;margin-right: 5px;">姓名:</span>
          <Input v-model="nameinput" placeholder="请输入..." style="width: 80px"/>
          <span style="margin-left: 30px;margin-right: 5px;">性别:</span>
          <Select v-model="saxyvalue" style="width:90px" @on-change="getsaxyvalue">
            <Option v-for="item in recordsaxy" :value="item.value" :key="item.value">{{ item.label
              }}
            </Option>
          </Select>
        </div>
        <div class="bottomdiv">
          <span style="margin-left: 20px;margin-right: 50px;"></span>
          <Button type="primary" @click="requirerecord">查询</Button>
          <span style="margin-left: 30px;margin-right: 50px;"></span>
          <!-- <Button type="primary" @click="recordexport">导出</Button> -->
          <span style="margin-left: 70px;margin-right: 20px;"></span>
          <!-- <Button type="primary" @click="caputuredownload">抓拍下载</Button> -->
        </div>
      </div>
      <div class="resultlist">
        <Table id="mytable" ref="table" stripe :height="rcheight" :columns="recorditems"
               :data="recordcontents" @on-row-click="rowclick"></Table>
      </div>
      <div class="photodisplay">
        <div class="catchphoto">
          <img class="match preview-img" v-for="(item,index) in catchphotoimg" :src="item.src"
               alt="" @click="$preview.open(0, catchphotoimg)">
        </div>
        <div class="libphoto">
          <img class="match preview-img" v-for="(item,index) in libphotoimg" :src="item.src" alt=""
               @click="$preview.open(0, libphotoimg)">
        </div>
      </div>
      <div class="controldiv">
        <div class="pagediv" style="margin-top: 30px;margin-left: 30px;">
          <Page :total=totalpieces show-elevator show-total :page-size="10"
                @on-change="page"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let cameraAction = {
    callback: function (node, vm) {
      if (node.regionId !== undefined) {
        vm.$parent.cameraId = node.id;
      }
      else   vm.$parent.cameraId = 0;
      if (node.childs.length !== 0) {

      } else {
        // alert(node.name)
      }
      return node.id;
    }
  };

  // 记录类型
  const rtypearr = [{
    value: '0', label: '告警'
  }, {
    value: '1', label: '抓拍'
  }];

  //性别
  let rsaxyarr = [{
    value: 'all', label: '全部'
  }, {
    value: '0', label: '男'
  }, {
    value: '1', label: '女'
  }];

  //记录列表
  let tmprecorditems = [{
    title: 'ID',
    key: 'id'
  }, {
    title: '抓拍时间',
    key: 'emergengyTime'
  }, {
    title: '记录类型',
    key: 'type'
  }, {
    title: '姓名',
    key: 'username'
  }, {
    title: '性别',
    key: 'sex',
    render: function () {
      if (this.row.sex === '0') {
        return '男'
      }
      else if (this.row.sex === '1') {
        return '女'
      }
      else return '未知'
    }
  }, {
    title: '身份证号',
    key: 'idCard'
  }, {
    title: '相似度值',
    key: 'confidence'
  }];

  import {Loading} from 'element-ui';
  import Cameranode from '../../moniter/cameranode'
  import XLSX from 'xlsx';
  import FileSaver from  'FileSaver'
  import homepic from '../../../assets/area.jpg'
  import nodepic from '../../../assets/camera.png'
  import Onlinepic from '../../../assets/Oncamera.png'
  export default {
    name: 'photosearch',
    data () {
      return {
        psearch: '报警查询',
        cameranodetree: {
          list: [],
          options: cameraAction
        },
        catchphotoimg: [],
        libphotoimg: [],
        totalpieces: 0,
        recordtype: rtypearr,
        rtvalue: '0',
        nameinput: '',//姓名
        recordsaxy: rsaxyarr,
        saxyvalue: 'all',//性别
        recorditems: tmprecorditems,
        recordcontents: [],
        rcheight: '200',
        roots: [],
        searchTime: [new Date(), new Date()],
        pages: 1,
        cameraId: 0,
        defaultProps: {
          children: 'childs',
          label: 'name'
        }
      }
    },
    created () {
      const _this = this;
      this.$http.get(this.$Ip + '/api/v1/regions', null).then(function (result) {
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
    },
    mounted () {
      let winWidth = window.screen.availWidth;
      let winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
      $(".maindiv").width(winWidth);
      $(".searchmain").height($(".searchnav").height() + "px");
      $(".searchmain").width((winWidth - 220) + "px");
      $(".searchresult").height($(".searchnav").height() + "px");
      $(".wyinline").height(($(".searchnav").height() - 50) + "px");
      $(".resultlist").height(($(".searchnav").height() - 265) + "px");
      $(".catchphoto").height(($(".photodisplay").height() * 0.5 - 10) + "px");
      $(".libphoto").height(($(".photodisplay").height() * 0.5 - 10) + "px");
      this.rcheight = $(".resultlist").height();
      const _this = this;
      this.$http.get(this.$Ip + '/api/v1/cameras', null).then(function (result) {
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
    },
    components: {
      Cameranode
    },
    methods: {
      getrecordtypeva: function (obj) {
        console.log(obj);
      },
      getsaxyvalue: function (obj) {
        console.log(obj);
      },
      requirerecord: function (obj) {
        if (this.cameraId === 0) {
          this.$message({
            message: '请选择一个摄像机',
            type: 'warning'
          });
          return;
        }
        let params = {};
        let startTime = new Date(this.searchTime[0]);
        let endTime = new Date(this.searchTime[1]);
        params.startTime = Math.round(startTime.getTime());
        params.endTime = Math.round(endTime.getTime());
        params.cameraId = this.cameraId;
        if (this.nameinput !== '')
          params.name = this.nameinput;
        if (this.saxyvalue !== '' && this.saxyvalue !== 'all')
          params.sex = this.saxyvalue;
        params.logType = this.rtvalue;
        params.offset = (this.pages - 1) * 10;
        params.limit = 10;
        let _this = this;
        let loadingInstance1;
        if ($('.ivu-table-tip').css('display') !== 'none')
          loadingInstance1 = Loading.service({target: '.ivu-table-tip'});
        else
          loadingInstance1 = Loading.service({target: '.ivu-table-body'});
        if (this.rtvalue === '0') {
          this.$http.get(this.$Ip + '/api/v1/alarm', {params}).then(function (result) {
            if (result.data.rows !== undefined) {
              _this.recordcontents = result.data.rows;
              for (let data of _this.recordcontents) {
                data.emergengyTime = _this.DateFormate(data.snapshot.timestamp);
                data.username = data.face.name;
                data.sex = data.face.sex;
                data.confidence = data.snapshot.confidence;
                data.type = '报警';
              }
              _this.totalpieces = result.data.total;
            }
            else {
              _this.recordcontents = [];
              _this.totalpieces = 0;
            }
            loadingInstance1.close()
          })
        }
        else  this.$http.get(this.$Ip + '/api/v1/snapShot', {params}).then(function (result) {
          if (result.data.rows !== undefined) {
            _this.recordcontents = result.data.rows;
            for (let data of _this.recordcontents) {
              data.emergengyTime = _this.DateFormate(data.timestamp);
              data.type = '抓拍';
              _this.totalpieces = result.data.total;
            }
          }
          else {
            _this.recordcontents = [];
            _this.totalpieces = 0;
          }
          loadingInstance1.close()
        })
      },
      recordexport: function (obj) {
        let tbl = document.getElementById('mytable');
        let wb = XLSX.utils.table_to_book(tbl);
        let wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
        FileSaver.saveAs(new Blob([this.s2ab(wbout)], {type: "application/octet-stream"}), 'alarm.xlsx');
      },
      caputuredownload: function (obj) {
        alert(obj);
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
        console.log(val);
        if (val.regionId !== undefined)
          this.cameraId = val.id;
        else
          this.cameraId = 0;
      },
      page: function (page) {
        this.pages = page;
        this.requirerecord();
      },
      rowclick: function (data) {
        this.libphotoimg.shift();
        this.catchphotoimg.shift();
        let obj = {};
        obj.src = data.face === undefined ? null : data.face.imgUrl;
        obj.h = 900;
        obj.w = 1200;
        this.libphotoimg.push(obj);
        let catchObj = {};
        catchObj.h = 900;
        catchObj.w = 1200;
        catchObj.src = data.snapshot !== undefined ? data.snapshot.photoUrl : data.photoUrl;
        this.catchphotoimg.push(catchObj);
      },
      getCheckedNodes(data) {
      },
      refreshCameraLib: function (obj) {
        //获取区域:
        // const params = new URLSearchParams();
        const _this = this;
        this.$http.get(_this.$Ip + '/api/v1/regions', null).then(function (result) {
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
        this.$http.get(_this.$Ip + '/api/v1/cameras', null).then(function (result) {
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
        })
      },
      s2ab(s) {
        if (typeof ArrayBuffer !== 'undefined') {
          let buf = new ArrayBuffer(s.length);
          let view = new Uint8Array(buf);
          for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        } else {
          let buf = new Array(s.length);
          for (let i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        }
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
    right: 210px;
    top: 0px;
    height: 150px;
    background: #dddddd;
  }

  .topdiv {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    padding-top: 10px;
    height: 50px;
    border: 1px solid #bbbbbb;
  }

  .middlediv {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50px;
    padding-top: 10px;
    height: 50px;
    border: 1px solid #bbbbbb;
  }

  .bottomdiv {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 100px;
    height: 50px;
    padding-top: 10px;
    border: 1px solid #bbbbbb;
  }

  .photodisplay {
    position: absolute;
    right: 5px;
    top: 0px;
    bottom: 110px;
    width: 200px;
    background: #dddddd;
  }

  .catchphoto {
    height: 200px !important;
    position: absolute;
    right: 5px;
    width: 190px;
    top: 5px;
    border: 1px solid #bbbbbb;
  }

  .libphoto {
    position: absolute;
    right: 5px;
    width: 190px;
    top: 270px;
    border: 1px solid #bbbbbb;
  }

  img.match {
    margin-top: 20px;
    width: 180px;
    height: 180px;
    border: 0;
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
    margin-right: 215px;
    top: 155px;
    background: #dddddd;
  }

</style>
