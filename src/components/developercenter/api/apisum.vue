<template>
  <div class="yt-content">
    <div class="help-section">
      <div class="help-title">接入流程</div>
      <img class="help-line" src="../../../assets/img/developer/title_line.png">
      <my-table :tableInfo="pubTableInfo" :tableHeight=280></my-table>
      <div class="api-dot-title">• 协议与参数说明</div>
          <p class="api-content"><span class="l ml20">(1)</span>接入服务中传递的图片数据为base64编码的二进制数据。</p>
          <p class="api-content"><span class="l ml20">(2)</span>一个app_id下建立的group_id数量限制为10000个（2017年2月前接入的应用，调用的是旧版本服务，group_id个数限制为5000）。</p>
          <p class="api-content"><span class="l ml20">(3)</span>一个group_id下建立的person_id数量限制为20000个（2017年2月前接入的应用，调用的是旧版本服务，person_id个数限制为1000）。</p>
          <p class="api-content"><span class="l ml20">(4)</span>一个person_id下建立的人脸数量限制为20个。</p>
          <p class="api-content"><span class="l ml20">(5)</span>每个请求的包体大小限制为2MB。</p>
          <p class="api-content"><span class="l ml20">(6)</span>开放平台的请求方式为post。</p>
          <div class="api-dot-title">• 协议头部</div>
          <div class="help-level-2">
            <p class="api-content">开放平台的所有请求都要求含有下表列出的头部信息</p>
      </div>
      <my-table :tableInfo="agreeTableInfo" :tableHeight=280></my-table>
      <div class="api-dot-title">• 鉴权</div>
      <div class="help-level-2">
        <p class="api-content">小视开放平台通过签名来验证请求的合法性。开发者通过签名授权，使其具备调用小视计算服务的能力。开发者获取到SecretId/SecretKey之后，需要自行实现生成签名的功能，具体生成方式详见<a href="/welcome/developer#/new-authentication">鉴权服务技术方案</a></p>
      </div>
      <div class="api-dot-title">• HTTP返回码</div>
      <my-table :tableInfo="httpTableInfo" :tableHeight=380></my-table>
    </div>
    </div>
</template>
<script>
  import myTable from './table.vue'
  const pubTableInfo = {
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
          pubTableInfo:pubTableInfo,
          agreeTableInfo:agreeTableInfo,
          httpTableInfo:httpTableInfo
  	  }
  	},
      components:{
         myTable
      },
      mounted:function () {
          let obj = {};
          obj.selected = 'apisum';
          obj.pselected = 'api';
          obj.pselecteds = ['api']
          this.$emit('on-result-change', obj)
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