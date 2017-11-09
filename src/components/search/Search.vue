<template>
  <div class="maindiv">
    <div class="searchnav">
      <Menu :theme="theme" width="auto" active-name="1" @on-select="chooseMenu">
        <Menu-group title="检索管理">
          <Menu-item name="1">
            <Icon type="person"></Icon>
            人脸检索
          </Menu-item>
          <Menu-item name="2">
            <Icon type="camera"></Icon>
            抓拍检索
          </Menu-item>
        </Menu-group>
        <Menu-group title="查询管理">
          <Menu-item name="3">
            <Icon type="ios-alarm"></Icon>
            报警查询
          </Menu-item>
          <Menu-item name="4">
            <Icon type="social-instagram"></Icon>
            抓拍查询
          </Menu-item>
        </Menu-group>
      </Menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        theme: 'light'
      }
    },
    created () {
      this.$router.push('/manager/face');
    },
    mounted () {
      var winWidth = window.screen.availWidth;
      var winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
    },
    methods: {
      chooseMenu: function (val) {
        // body...
        if (val == 1) {
          // alert('人脸检索');
          this.$goRoute('/manager/face')
        } else if (val == 2) {
          // alert('抓拍检索');
          this.$goRoute('/manager/photosearch')
        } else if (val == 3) {
          // alert('报警查询');
          this.$goRoute('/manager/alarm')
        } else if (val == 4) {
          // alert('抓拍查询');
          this.$goRoute('/manager/photorequire')
        }
      }
    },
    watch: {}
  }
</script>
<style scoped>
  .maindiv {
    position: relative;
    width: 100%;
    background: #999999;
    margin-top: 65px;
    /*这里的值与entrancenav的高度相关*/
    margin-bottom: 5px;
  }

  .searchnav {
    position: absolute;
    width: 200px;
    left: 5px;
    top: 5px;
    bottom: 5px;
    background: #56acd9;
  }

</style>
