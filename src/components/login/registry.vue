<template>
  <div class="xslogin">
    <Modal :title="xstitle" v-model="modal" :width=300 :mask-closable="false"
           class-name="modaldiv" :styles="{top: '50px'}">
      <div slot="close">
        <a @click="shotdownModal">&times;</a>
      </div>
      <div class="panellite">
        <div class="thumbur"></div>
        <!-- <h4>用户登录</h4> -->
        <div class="form-group">
          <label class="form-label">用户名</label>
          <input type="text" required="required" class="form-control" id="xsuser" autocomplete="off">
        </div>
        <div class="form-gruop" style="margin-bottom: 20px;">
          <label class="form-label">密 码</label>
          <input type="password" class="form-control" id="xspwd" required="required" autocomplete="off">
        </div>
        <div class="form-gruop" style="margin-bottom: 20px;" v-if="isRegister">
          <label class="form-label">确认密码</label>
          <input type="password" class="form-control" id="xscompwd" required="required" autocomplete="off">
        </div>
        <div class="form-gruop" style="margin-bottom: 20px;" v-if="isRegister">
          <label class="form-label">E-mail</label>
          <input type="text" class="form-control" id="xsemail" required="required" autocomplete="off">
        </div>
        <!-- <button class="floating-btn" id="xslogin">
          <i class="icon-arrow"></i>
        </button> -->
        <div class="form-gruop" v-if="isLogin">
          <a @click="registerOpe">注册新用户</a>
        </div>
      </div>
      <div slot="footer" v-if="isLogin">
        <Button type="primary" size="large" long :loading="modal_loading" @click="loginOpe(0)">登录</Button>
      </div>
      <div slot="footer" v-if="isRegister">
        <Button type="primary" size="large" long :loading="modal_loading" @click="loginOpe(1)">注册</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'registry',
  props: {
    modalShow: Boolean
  },
  data () {
    return {
      msg: 'app manage',
      xstitle:'用户注册',
      registername:'注册',
      loginname:'登录',
      modal: this.modalShow,
      isRegister:true,
      isLogin:false
    }
  },
  created () {
    if (isRegister) {
      this.xstitle = '用户注册';
      this.isLogin = false;
    }
  },
  watch: {
      modalShow (val) {
        if (val == true) {
          this.modal = val;
        }
      },
      modal (val) {
        this.$emit('on-result-change', val)
      },
      registerShow (val) {
        this.isRegister = val;
      },
      isRegister (val) {
        this.$emit('on-register-change',val)
      }
  },
  methods: {
    loginOpe: function (obj) {
      if (obj == 0) {//登录
        this.modal = false;
      }else if(obj == 1){//注册
        alert('请查看注册邮件,确认注册!');
        this.modal = false;
        this.isRegister = false;
        this.isLogin = true;
      }
      
    },
    registerOpe: function () {
      this.isRegister = true;
      this.isLogin = false;
      this.xstitle = '用户注册';
    },
    shotdownModal: function() {
      this.modal = false;
      this.isRegister = false;
      this.isLogin = true;
      this.xstitle = '用户登录';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.xslogin h1 {
  font-size: 20px;
  color: blue;
}

.xslogin .modaldiv {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    /*top: 100;*/
  }
}

.xslogin .panellite {
  margin: 20px auto;
  max-width: 360px;
  background: #fff;
  padding: 45px 40px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  opacity: 0.85;
}

.xslogin .thumbur {
    width: 150px;
    height: 150px;
    position: relative;
    background-color: #efefef;
    /*filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FFEFEFEF', endColorstr='#FFE1E1E1');*/
    /*background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…B3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=);*/
    background-size: 100%;
    /*background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #efefef), color-stop(50%, #efefef), color-stop(50%, #e1e1e1), color-stop(100%, #e1e1e1));*/
    /*background-image: -webkit-linear-gradient(left, #efefef 0%, #efefef 50%, #e1e1e1 50%, #e1e1e1 100%);*/
    background-image: linear-gradient(to right, #efefef 0%, #efefef 50%, #e1e1e1 50%, #e1e1e1 100%);
    margin: auto;
    border-radius: 100%;
}

.xslogin .panellite h4 {
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #03a9f4;
  margin: 15px auto;
}

.xslogin .form-group {
  position: relative;
  font-size: 15px;
  color: #666;
}

.xslogin .form-group + .form-group {
    margin-top: 30px;
}

.xslogin .floating-btn {
    background: #03a9f4;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #fff;
    font-size: 32px;
    border: none;
    position: absolute;
    margin: auto;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.3) inset;
    margin: auto;
    right: -30px;
    bottom: 90px;
    cursor: pointer;
}

.xslogin .icon-arrow {
    position: relative;
    width: 13px;
    height: 13px;
    border-right: 3px solid #fff;
    border-top: 3px solid #fff;
    display: block;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    margin: auto;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.xslogin [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    /*-moz-osx-font-smoothing: grayscale;*/
}



.xslogin .form-group .form-control:invalid {
    outline: none;
}

.xslogin .form-group .form-control {
    width: 100%;
    position: relative;
    z-index: 3;
    height: 35px;
    background: none;
    border: none;
    padding: 5px 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    font-size: 15px;
    font-family: inherit;
    border-bottom: 1px solid #777;
}

.xslogin .form-group .form-label {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 5px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

</style>
