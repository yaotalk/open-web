<template>
  <div class="searchmain">
    <div class="searchnode">
      <Button type="primary" @click="refreshFaceLib" long>刷新</Button>
      <div class="wyinline" style="padding: 5px;">
        <Tree :data="facelibdata" :multiple="multFlag" :show-checkbox="checkboxFlag"
              @on-check-change="getChosenLib"></Tree>
      </div>
    </div>
    <div class="searchresult">
      <div class="searchresource">
        <div class="faceimgdisplay"></div>
        <div class="uploadbut" style="margin-left: 215px;">
          <!-- <Upload
            multiple
            action="//jsonplaceholder.typicode.com/posts/" :on-success="returnfilelist" :on-error="returnfilelist">
            <Button type="primary" @click="photoimport">照片导入</Button>
          </Upload> -->
          <a href="javascript:;" class="fileupload">照片导入
            <!-- accept="image/*" -->
            <input id="img_input" type="file"/>
          </a>
        </div>
        <div class="faceimgpath">
          <Table :columns="tableitems" :data="tabledatas"></Table>
        </div>
      </div>
      <div class="searchcriteria" style="float: left;">
        <div class="scdiv" style="margin-top: 20px;">
          <span style="margin-right: 20px;margin-left: 10px;">相似度范围:</span>
          <Select v-model="leftcriteriamodel" size="small" style="width:90px"
                  @on-change="getleftsimilar">
            <Option v-for="item in similar" :value="item.value" :key="item.value">{{ item.label }}
            </Option>
          </Select>
          <span style="margin-left: 10px;margin-right: 10px;">~</span>
          <Select v-model="rightcriteriamodel" size="small" style="width:90px"
                  @on-change="getrightsimilar">
            <Option v-for="item in similar" :value="item.value" :key="item.value">{{ item.label }}
            </Option>
          </Select>

          <span style="margin-left: 100px;margin-right: 10px;">前:</span>
          <Select v-model="piecesmodel" size="small" style="width:90px" @on-change="getpieces">
            <Option v-for="item in piecesource" :value="item.value" :key="item.value">{{ item.label
              }}
            </Option>
          </Select>
          <span style="margin-left: 10px;margin-right: 20px; right: 100px;">条</span>
          <Button type="primary" @click="requirefacelib">查询</Button>
        </div>
      </div>
      <div class="recordresult">
        <!-- <span class="title">记录结果</span> -->
        <div class="rsleft"
             style="position: absolute;left: 20px;padding-top: 70px;height: 175px;width: 50px;">
          <Button type="primary" shape="circle" icon="arrow-left-a" @click="lookprevious"></Button>
        </div>
        <div class="imgcontent"
             style="position: absolute;left: 60px;right: 60px;top: 5px;height: 165px;border: 1px solid #bbbbbb;">
          <ul class="slides_container">
            <li v-for="item in imgrecordpaly">
              <a v-if="item.length>0" target=""><img :src="item[0].pic"/></a>
              <a v-if="item.length>1" target=""><img :src="item[1].pic"/></a>
              <a v-if="item.length>2" target=""><img :src="item[2].pic"/></a>
              <a v-if="item.length>3" target=""><img :src="item[3].pic"/></a>
              <a v-if="item.length>4" target=""><img :src="item[4].pic"/></a>
            </li>
          </ul>
        </div>
        <div class="rsright"
             style="position: absolute;right: 5px;padding-top: 70px;height: 175px;width: 50px;">
          <Button type="primary" shape="circle" icon="arrow-right-a" @click="looknext"></Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  // 搜索条件相似刻度
  var tsimilararr = [{
    value: '0', label: '0'
  }, {
    value: '10', label: '10'
  }, {
    value: '20', label: '20'
  }, {
    value: '30', label: '30'
  }, {
    value: '40', label: '40'
  }, {
    value: '50', label: '50'
  }, {
    value: '60', label: '60'
  }, {
    value: '70', label: '70'
  }, {
    value: '80', label: '80'
  }, {
    value: '90', label: '90'
  }, {
    value: '100', label: '100'
  }];

  var piecesarr = [{
    value: '5', label: '5'
  }, {
    value: '10', label: '10'
  }, {
    value: '15', label: '15'
  }, {
    value: '20', label: '20'
  }];


  //用于压缩图片的canvas:查询比对人脸图片
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');
  //    瓦片canvas
  var tCanvas = document.createElement("canvas");
  var tctx = tCanvas.getContext("2d");
  var maxsize = 100 * 1024;
  var compressImg = new Image();
  //图片压缩define...end.


  import defaultImg from '../../../assets/default.png'
  import {Loading} from 'element-ui';

  export default {
    name: 'face',
    data () {
      return {
        facelibdata: [],
        choosefacelib: '',
        multFlag: true,
        checkboxFlag: true,
        imgrecordpaly: [[]],//搜索结果img
        imgindex: 0,//图片查看到第几组.
        imgalltoltal: [[]],//所有要展示的照片数据
        leftcriteriamodel: 80,//相似度小值
        rightcriteriamodel: 100,//相似度大值
        similar: [],
        piecesmodel: '5',//查看条数
        piecesource: piecesarr,
        tableitems: [{title: '照片名称', key: 'path'}],
        tabledatas: [{path: 'unkown'}]
      }
    },
    created () {

      // 成员变量初始化:
      var similarArr = [];
      for (var i = 0; i <= 100; i++) {
        similarArr.push({value: i, label: i.toString()});
      }

      this.similar = similarArr;

      const _this = this;
      this.$http.get(_this.$Ip + '/api/v1/facesets', null).then(function (result) {
        var flibs = result.data.data;
        var childs = [];
        for (var j = 0; j < flibs.length; j++) {
          // console.log('facesets:==='+flibs[j]);
          childs.push({
            title: flibs[j].name,
            token: flibs[j].token,
            status: flibs[j].status,
            faceCount: flibs[j].faceCount,
            createTime: flibs[j].createTime,
            capacity: flibs[j].capacity
          });
        }
        _this.facelibdata = [{expand: true, title: '人脸库', children: childs}];

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
      $(".searchresource").height(($(".searchnav").height() - 270) + "px");
      $("imgcontent").height(($(".searchresult").height() - 10) + "px");
      $(".faceimgdisplay").height(($(".searchresource").height() - 20) + "px");
      $(".uploadbut").css({"top": ($(".faceimgdisplay").height() * 0.5) + "px"});
      $(".faceimgpath").height(($(".searchresource").height() - 20) + "px");

      const _this = this;
      $('#img_input').on('change', function (e) {
        var file = e.target.files[0]; //获取图片资源

        // 只选择图片文件
        if (!file.type.match('image.*')) {
          alert('请选择照片');
          return false;
        }

        var reader = new FileReader();

        reader.readAsDataURL(file); // 读取文件

        console.log(file.name);
        _this.tabledatas = [{path: file.name}];

        // 渲染文件
        reader.onload = function (arg) {

          // alert(arg.target.result);
          var url = reader.result;
          compressImg.src = url;
          var img = '<img class="preview" src="' + arg.target.result + '" alt="preview" style="width:180px;margin-left:10px;margin-top:10px;"/>';
          $(".faceimgdisplay").empty().append(img);
        }

      });
// end.

    },
    methods: {
      // 刷新人脸库:
      refreshFaceLib: function (val) {
        // body...
        const _this = this;
        this.$http.get(_this.$Ip + '/api/v1/facesets', null).then(function (result) {
          var flibs = result.data.data;
          var childs = [];
          for (var j = 0; j < flibs.length; j++) {
            // console.log('facesets:==='+flibs[j]);
            childs.push({
              title: flibs[j].name,
              token: flibs[j].token,
              status: flibs[j].status,
              faceCount: flibs[j].faceCount,
              createTime: flibs[j].createTime,
              capacity: flibs[j].capacity
            });
          }
          _this.facelibdata = [{expand: true, title: '人脸库', children: childs}];

        })
      },
      getChosenLib: function (libs) {
        var tmpString = '';
        if (libs.length == this.facelibdata[0].children.length + 1) {
          for (var i = 1; i < libs.length; i++) {
            // console.log(libs[i].title+libs[i].createTime);
            tmpString = tmpString + ',' + libs[i].token;
          }
        } else {
          for (var i = 0; i < libs.length; i++) {
            console.log(libs[i]);
            // console.log(libs[i].title+libs[i].createTime);
            tmpString = tmpString + ',' + libs[i].token;
          }
        }
        this.choosefacelib = tmpString.substring(1);
      },
      photoimport: function (obj) {
        // alert(obj);
        console.log(obj);
      },
      returnfilelist: function (response, file, filelist) {
        for (var i = 0; i < filelist.length; i++) {
          var fileobj = filelist[i];
          console.log('file path: ' + fileobj.name);
          console.log('file path: ' + fileobj.webkitRelativePath);
          console.log('file path: ' + fileobj.size);
        }
      },
      lookprevious: function (obj) {
        this.imgindex > 0 ? this.imgindex-- : this.imgindex;
        this.imgrecordpaly = [this.imgalltoltal[this.imgindex]];
      },
      looknext: function (obj) {
        this.imgindex < this.imgalltoltal.length - 1 ? this.imgindex++ : this.imgindex;
        this.imgrecordpaly = [this.imgalltoltal[this.imgindex]];
      },
      getleftsimilar: function (obj) {//三目运算符节联写法不支持.& 改变自身变量有问题.
        this.rightcriteriamodel = obj > this.rightcriteriamodel && obj < 100 ? obj + 1 : this.rightcriteriamodel;
        if (obj == 100) {
          this.rightcriteriamodel = 100;
        }
      },
      getrightsimilar: function (obj) {//三目运算符节联写法不支持.& 改变自身变量有问题.
        this.leftcriteriamodel = obj < this.leftcriteriamodel && obj > 0 ? obj - 1 : this.leftcriteriamodel;
        if (obj == 0) {
          this.leftcriteriamodel = 0;
        }
      },
      getpieces: function (obj) {
        console.log(this.piecesmodel);
      },
      requirefacelib: function (obj) {
        console.log(this.piecesmodel);


        const _this = this;
        let loadingInstance1;
        if ($('.ivu-table-tip').css('display') !== 'none')
          loadingInstance1 = Loading.service({target: '.imgcontent'});
        else
          loadingInstance1 = Loading.service({target: '.imgcontent'});
        // var requestdata = {
        //   facesetTokens:'',
        //   limit:_this.piecesmodel,
        //   threshold:80.0,

        // };
        // this.$http.get('http://172.16.6.20:8080/api/v1/facesets', null).then(function (result) {
        //   var plibs = result.data.data;
        //   console.log(plibs);
        // })

        var form_data = new FormData();
        var file_data = $("#img_input").prop("files")[0];


        // var img = new Image();
        // img.src = data;
        var basestr = this.compress(compressImg);

        var text = window.atob(basestr.split(",")[1]);
        var buffer = new Uint8Array(text.length);
        var pecent = 0,
          loop = null;
        for (var i = 0; i < text.length; i++) {
          buffer[i] = text.charCodeAt(i);
        }
        file_data = this.getBlob([buffer], file_data.type);


        // 把上传的数据放入form_data
        form_data.append("facesetTokens", this.choosefacelib);
        form_data.append("limit", _this.piecesmodel);
        form_data.append("threshold", this.leftcriteriamodel);
        form_data.append("imgfile", file_data);

        var tmpArr = new Array();
        $.ajax({
          type: "POST", // 上传文件要用POST
          url: _this.$Ip + "/api/v1/faceSearch",
          dataType: "json",
          crossDomain: true, // 如果用到跨域，需要后台开启CORS
          processData: false, // 注意：不要 process data
          contentType: false, // 注意：不设置 contentType
          data: form_data,
          success: function (msg) {
            var facedata = msg.data;
            var prarr = [];
            var len = facedata.length > this.piecesmodel ? this.piecesmodel : facedata.length;
            for (var i = 0; i < len; i++) {
              if (i % 5 == 0 && i != 0) {
                tmpArr.push(prarr);
                prarr = [];
              } else {
                prarr.push({pic: facedata[i].imgpath});
              }
            }

            if (prarr.length != 0) {
              tmpArr.push(prarr);
            }

            console.log(tmpArr);

            _this.imgalltoltal = tmpArr;
            _this.imgindex = 0;
            _this.imgrecordpaly = [_this.imgalltoltal[_this.imgindex]];
            loadingInstance1.close()
          },
          fail: function (msg) {
            console.log(msg);
          }
        });

      },
      compress: function (img) {
        // var initSize = img.src.length;
        var width = img.width;
        var height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
          ratio = Math.sqrt(ratio);
          width /= ratio;
          height /= ratio;
        } else {
          ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        var count;
        if ((count = width * height / 1000000) > 1) {
          count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
          //            计算每块瓦片的宽和高
          var nw = ~~(width / count);
          var nh = ~~(height / count);
          tCanvas.width = nw;
          tCanvas.height = nh;
          for (var i = 0; i < count; i++) {
            for (var j = 0; j < count; j++) {
              tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        var ndata = canvas.toDataURL('image/jpeg', 0.1);
        // console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        // console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
      },
      getBlob: function (buffer, format) {
        try {
          return new Blob(buffer, {type: format});
        } catch (e) {
          var bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder);
          buffer.forEach(function (buf) {
            bb.append(buf);
          });
          return bb.getBlob(format);
        }
      }
    },
    watch: {
      getCheckedNodes: function (node) {
        alert(node);
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

  .searchresource {
    position: relative;
    margin-left: 5px;
    margin-right: 20px;
    top: 5px;
    background: #dddddd;
  }

  .faceimgdisplay {
    position: absolute;
    left: 10px;
    width: 200px;
    top: 10px;
    border: 1px solid #bbbbbb;
  }

  .faceimgdisplay img {
    width: 150px;
    /*height: 200px;*/
  }

  /*文件上传*/
  .uploadbut {
    position: absolute;
    left: 5px;
    right: 5px;
    width: 80px;
    /*border: 1px solid #bbbbbb;*/
  }

  .fileupload {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    font-size: 10px;
  }

  .fileupload input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .fileupload:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }

  /*end.*/

  .faceimgpath {
    position: relative;
    margin-left: 310px;
    margin-right: 5px;
    top: 10px;
    border: 1px solid #bbbbbb;
  }

  .searchcriteria {
    position: absolute;
    height: 60px;
    left: 5px;
    right: 20px;
    bottom: 200px;
    background: #dddddd;
  }

  .recordresult {
    position: absolute;
    height: 175px;
    left: 5px;
    right: 20px;
    bottom: 10px;
    background: #dddddd;
    border: 1px solid #bbbbbb;
  }

  /*图片滚动显示*/
  .slides_container li {
    width: 700px;
    float: left;
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
