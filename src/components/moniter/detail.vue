<template>
  <div>
    <Modal title="抓拍详细信息" v-model="modal" :width=700 :mask-closable="false" :closable="false"
           class-name="modaldiv" :styles="{top: '50px'}" @on-ok="shutdownmodal"
           @on-cancel="shutdownmodal">
      <div class="modalmaindiv">
        <div class="updiv">
          <div class="upleft">
            <img class="imgDiv" :src="snapImg"/>
          </div>
          <div class="upright">
            <div class="alarmfacediv">
              <img class="match" v-bind:src="snapImg" alt="">
            </div>
            <div class="alarmfaceinfo">
              <span style="font-size: 10px;">相识度值:</span>
              <span>{{snapConfidence}}</span>
            </div>
            <div class="alarmmatchdiv">
              <img class="match" v-bind:src="matchimg" alt="">
            </div>
            <div class="infocontent">
              <li><span>抓拍时间:</span><span>{{snaptime}}</span></li>
              <li><span>摄像机名称:</span><span>{{cameraname}}</span></li>
              <li><span>记录类型:</span><span>{{recordtype}}</span></li>
            </div>
            <div class="infocontent2">
              <li><span>姓名:</span><span>{{manname}}</span></li>
              <li><span>性别:</span><span>{{mansex}}</span></li>
              <li><span>身份证:</span><span>{{mancardid}}</span></li>
            </div>
          </div>
          <div class="updown"></div>
        </div>
        <div class="downdiv">
          <div class="downmiddle">
            <!-- <img class="picRecord" :src="picShow(image)"/><br>
            <span>姓名:{{image.name}}</span><br>
            <span>相似度:{{image.confidence}}</span> -->
            <ul class="slides_container">
              <li v-for="item in imgrecordpaly">
                <a v-if="item.length>0" target=""><img
                  :src="item[0].pic"/><span>{{item[0].value}}</span></a>
                <a v-if="item.length>1" target=""><img
                  :src="item[1].pic"/><span>{{item[1].value}}</span></a>
                <a v-if="item.length>2" target=""><img
                  :src="item[2].pic"/><span>{{item[2].value}}</span></a>
                <a v-if="item.length>3" target=""><img
                  :src="item[3].pic"/><span>{{item[3].value}}</span></a>
                <a v-if="item.length>4" target=""><img
                  :src="item[4].pic"/><span>{{item[4].value}}</span></a>
              </li>
            </ul>
          </div>
          <div class="downdown" style="float: left;padding-top: 5px;">
            <span style="margin-left: 10px;margin-top: 20px;"></span>
            <Select v-model="piecesmodel" size="small" style="width:90px;" @on-change="getpieces">
              <Option v-for="item in piecesource" :value="item.value" :key="item.value">
                {{ item.label }}
              </Option>
            </Select>
            <span style="margin-left: 5px;margin-top: 20px;"></span>
            <span style="margin-left: 350px;margin-top: 20px;"></span>
            <Button type="primary" shape="circle" icon="arrow-left-a"
                    @click="lookprevious"></Button>
            <span style="margin-left: 50px;margin-top: 20px;"></span>
            <Button type="primary" shape="circle" icon="arrow-right-a" @click="looknext"></Button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
  import defaultImg from '../../assets/default.png'
  import loadingImg from '../../assets/loading.gif'
  import {Loading} from 'element-ui';
  export default {
    props: {
      modalShow: Boolean,
      logId: String,//记录id
      snapImg: String,//抓拍或者告警照片
      isSnap: Boolean,
      snaptime: String,//抓拍时间
      recordtype: String,
      mansex: String,
      snapConfidence: Number,
      cameraname: String,
      mancardid: String,
      manname: String,
      matchimg: String
    },
    data () {
      return {
        images: [],
        imageOri: [],
        modal: this.modalShow,
        srcConfidence: '',
        imgindex: 0,//查看第几组图片
        piecesmodel: '5',//查看前n条
        piecesource: [
          {
            value: '5',
            label: '前5条'
          },
          {
            value: '10',
            label: '前10条'
          },
          {
            value: '50',
            label: '前50条'
          }
        ],
        model1: '',
        imgalltoltal: [[]],//所有要展示的照片数据
        imgrecordpaly: [[]]//当前展示的照片
      }
    },
    create(){

    },
    methods: {
      showalarmmatchinfo: function (obj) {
      },
      getalarmfacesdata: function () {

        let loadingInstance1;
        if ($('.ivu-table-tip').css('display') !== 'none')
          loadingInstance1 = Loading.service({target: '.downmiddle'});
        else
          loadingInstance1 = Loading.service({target: '.downmiddle'});
        var params = new Object();
        const _this = this;
        params.logid = this.logId;
        params.limit = this.piecesmodel;
        var tmpArr = new Array();
        this.$http.get(_this.$Ip + '/api/v1/alarmFaces', {params}).then(function (result) {
          var facedata = result.data.data;
          var prarr = [];

          var len = facedata.length;
          for (var i = 0; i < len; i++) {
            if (i % 5 == 0 && i != 0) {
              tmpArr.push(prarr);
              prarr = [];
            } else {
              prarr.push({pic: facedata[i].userImgUrl, value: facedata[i].confidence});
            }
          }
          if (prarr.length != 0) {
            tmpArr.push(prarr);
          }
          if (tmpArr.length != 0) {
            var tempArr = tmpArr[0];
            if (tempArr.length == 1) {
              _this.srcConfidence = tempArr[0].value;
            } else if (tempArr.length > 1) {
              if (tempArr[0].value < 1.0) {
                _this.srcConfidence = tempArr[0].value;
              } else {
                _this.srcConfidence = tempArr[1].value;
              }
            }
          }
          _this.imgalltoltal = tmpArr;
          _this.imgindex = 0;
          _this.imgrecordpaly = [_this.imgalltoltal[_this.imgindex]];
          loadingInstance1.close()
        })
      },
      page: function (page) {
        this.images = this.pagination(page, 5, this.imageOri)
        this.current = page
      },
      shutdownmodal: function () {
        this.modal = false
      },
      picShow: function (item) {
        return this.$Ip + '/people/' + item.userImgUrl
      },
      getpieces: function (obj) {
        console.log(this.piecesmodel);
        this.getalarmfacesdata();
      },
      lookprevious: function () {
        this.imgindex > 0 ? this.imgindex-- : this.imgindex;
        this.imgrecordpaly = [this.imgalltoltal[this.imgindex]];
      },
      looknext: function () {
        this.imgindex < this.imgalltoltal.length - 1 ? this.imgindex++ : this.imgindex;
        this.imgrecordpaly = [this.imgalltoltal[this.imgindex]];
      }
    },
    watch: {
      modalShow (val) {
        if (val == true) {
          this.modal = val;
          if (!this.isSnap) {
            this.getalarmfacesdata();
          }
          else {
            this.imageOri = [];
            this.current = 1;
            this.images = [];
            this.srcConfidence = '';
            this.total = 0;
            this.imgalltoltal = [[]];
            this.imgrecordpaly = [[]];
          }
        }
      },
      modal (val) {
        this.$emit('on-result-change', val)
      }
    }
  }
</script>
<style scoped lang="less">

  .modaldiv {
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal {
      /*top: 100;*/
    }
  }

  .modalmaindiv {
    width: 660px;
    height: 450px;
    /*left: 0px;
    top: 0px;*/
    background: #cccccc;
  }

  .updiv {
    position: absolute;
    width: 650px;
    height: 250px;
    left: 20px;
    top: 75px;
    border: 1px solid #aaaaaa;
  }

  .upleft {
    position: absolute;
    width: 250px;
    height: 200px;
    left: 5px;
    top: 5px;
    border: 1px solid #5a6bcc;
  }

  .upright {
    position: absolute;
    width: 380px;
    height: 200px;
    left: 265px;
    top: 5px;
    border: 1px solid #5a6bcc;
  }

  .alarmfacediv {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 5px;
    top: 0px;
    border: 1px solid #ff00ff;
  }

  .alarmfacediv img {
    width: 110px;
    height: 90px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .alarmfaceinfo {
    position: absolute;
    width: 120px;
    height: 100px;
    padding-top: 40px;
    left: 125px;
    top: 0px;
    border: 1px solid #ff00ff;
  }

  .alarmmatchdiv {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 245px;
    top: 0px;
    border: 1px solid #ff00ff;
  }

  .alarmmatchdiv img {
    width: 110px;
    height: 90px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .infocontent {
    position: absolute;
    width: 180px;
    margin-left: 5px;
    top: 100px;
    height: 100px;
    border: 1px solid #ff00ff;
  }

  .infocontent li {
    list-style-type: none;
    margin-top: 10px;
  }

  .infocontent2 {
    position: absolute;
    width: 180px;
    margin-left: 190px;
    top: 100px;
    height: 100px;
    border: 1px solid #ff00ff;
  }

  .infocontent2 li {
    list-style-type: none;
    margin-top: 10px;
  }

  .updown {
    position: absolute;
    width: 640px;
    height: 30px;
    top: 210px;
    left: 5px;
    border: 1px solid #5a6bcc;
  }

  .downdiv {
    position: absolute;
    width: 650px;
    height: 190px;
    left: 20px;
    top: 325px;
    border: 1px solid #aaaaaa;
  }

  .downmiddle {
    position: absolute;
    width: 640px;
    height: 140px;
    top: 5px;
    left: 5px;
    border: 1px solid #ff00ff;
  }

  .downdown {
    position: absolute;
    width: 640px;
    height: 40px;
    top: 145px;
    left: 5px;
    border: 1px solid #ff00ff;
  }

  .imgDiv {
    margin-left: 25px;
    margin-top: 10px;
    width: 200px;
    height: 180px;
  }

  /*图片滚动显示*/
  .slides_container li {
    width: 700px;
    float: left;
  }

  .slides_container li a {
    display: inline-block;
    margin-left: 10px;
    width: 110px;
    height: 120px;
    border: 1px solid #fff;
  }

  .slides_container li a img {
    width: 110px;
    height: 120px;
  }

  .slides_container li a:hover {
    border: 1px solid #ff8400;
  }

  .slides_container li a:hover span {
    color: #ff8400;
  }

  /*end.*/


</style>
