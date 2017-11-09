<template>
  <div class="yt-content">
    <div class="help-section">
      <div class="help-title">人脸检测</div>
      <img class="help-line" src="../../../assets/img/developer/title_line.png">
        <div class="fix  api-content" >
            <span class="l mr10">1)</span>
            <div class="cell">
                <div>接口<br>http://api.youtu.qq.com/youtu/api/detectface</div>
            </div>
        </div>
        <div class="fix mt20 api-content">
            <span class="l mr10">2)</span>
            <div class="cell">
                <div>检测给定图片(Image)中的所有人脸(Face)的位置和相应的面部属性。位置包括(x, y, w, h)，面部属性包括性别(gender), 年龄(age), 表情(expression), 魅力(beauty), 眼镜(glass)和姿态(pitch，roll，yaw).</div>
            </div>
        </div>
        <div class="fix mt20 api-content">
            <span class="l mr10">3)</span>
            <div class="cell">
                <div class="mb10">参数</div>
            </div>
        </div>
        <my-table :tableInfo="tableInfo" :tableHeight=280></my-table>
        <div class="fix mt20 api-content">
            <span class="l mr10">4)</span>
            <div class="cell">
                <div class="mb10">返回值说明</div>
            </div>
        </div>
        <my-table :tableInfo="tableInfo" :tableHeight=280></my-table>
    </div>
    </div>
</template>
<script>
  import myTable from './table.vue'
  const tableInfo = {
      head:['概念','解释'],
      table:[
             ['app_id','接入小视服务时,生成的唯一id, 用于唯一标识接入业务'],
             ['user_id','接入业务自行定义的用户id，用于唯一标识一个用户'],
             ['secret_id','标识api鉴权调用者的密钥身份'],
             ['secret_key','用于加密签名字符串和服务器端验证签名字符串的密钥，secret_key 必须严格保管避免泄露'],
             ['group_id','个体(person)以组（group）的形式存储，一个组可以包含多个个体，一个个体也可以存在于多个组。group_id即用来标识group']
      ]
  };
  const  agreeTableInfo = {
      head: ['参数名', '值', '描述'],
      table: [
          ['Host', 'api.youtu.qq.com', '小视云服务器域名'],
          ['Content-Length', '包体总长度', '整个请求包体内容的总长度，单位：字节（Byte）'],
          [' Content-Type', 'text/json', '请求格式为json'],
          ['Authorization', '鉴权签名', '具体生成方式详见鉴权服务技术方案']
      ]
  };
  const httpTableInfo={
      head: ['返回码','含义'],
              table: [
                     ['400 HTTP_BAD_REQUEST','请求不合法,包体格式错误'],
                     ['401 HTTP_UNAUTHORIZED','权限验证失败'],
                     ['403 HTTP_FORBIDDEN','鉴权信息不合法，禁止访问'],
                     ['404 HTTP_NOTFOUND','请求失败'],
                     ['411 HTTP_REQ_NOLENGTH','请求没有指定ContentLength'],
                     ['413 HTTP_REQUEST_LARGE','请求包体太大'],
                     ['423 HTTP_RESOURCE_LOCKED','请求的服务没有找到'],
                     ['424 HTTP_METHOD_NOTFOUND','请求的方法没有找到'],
                     ['425 HTTP_REQUEST_OVERFLOW','请求包体太大'],
                     ['429 HTTP_TOO_MANY_REQUEST','请求超过频率限制'],
                     ['500 HTTP_INTERNAL_SERVER_ERROR','服务内部错误'],
                     ['502 HTTP_BAD_GETWAT','网关错误，计算后台服务不可用'],
                     ['503 HTTP_SERVICE_UNAVAILABLE','服务不可用'],
                     ['504 HTTP_GATEWAY_TIME_OUT','后端服务超时']

       ]
  }
  export default{
  	name: 'apisum',
  	data () {
  	  return {
          tableInfo:tableInfo,
          agreeTableInfo:agreeTableInfo,
          httpTableInfo:httpTableInfo
  	  }
  	},
      components:{
         myTable
      }
  }
</script>
<style scoped>
  .help-title{
    font-size: 20px;
  }
  .help-section{
    /*background: url(../../../assets/img/developer/title_icon1.png) no-repeat;*/
    margin-bottom: 34px;
    overflow: hidden;
    padding-left: 50px;
  }
  .help-level-api {
      padding-left: 38px;
  }
  .l {
      float: left;
  }
  .mr10 {
      margin-right: 10px;
  }
  .mt20 {
      margin-top: 20px;
  }
  .fix:after {
      display: table;
      content: '';
      clear: both;
  }
  .cell {
      display: table-cell;
      width: 2000px;
      height: 30px;
      cursor: pointer;
  }
  .active{
    background: #f3f3f3;
  }
  .api-dot-title {
    font-size: 20px;
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #666666;
  }
  .help-section p {
    margin: 10px 0;
    line-height: 1.5;
  }
  .api-content {
    font-size: 14px;
    color: #808080;
    width:980px;
  }
</style>