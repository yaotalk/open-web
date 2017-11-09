<template>
  <div id="app">
    <div class="entrancenav">
      <Menu mode="horizontal" :theme="theme" active-name="1" @on-select="clickMenu">
        <Menu-item name="1">
          <Icon type="videocamera"></Icon>
          实时监控
        </Menu-item>
        <Menu-item name="2">
          <Icon type="search"></Icon>
          查询检索
        </Menu-item>
        <Menu-item name="3">
          <Icon type="settings"></Icon>
          系统设置
        </Menu-item>
        <!-- <Submenu name="4">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu> -->
      </Menu>
    </div>
    <router-view></router-view>
    <div class="entrancefooter">
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <span>2017-{{xsdate}} Copyright&copy; <a
                href="http://www.minivision.cn">小视科技</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  var newdate = new Date();
  var xiaoshidate = newdate.getFullYear();

  import Hello from './components/Hello'
  import Rtimemoniter from './components/moniter/Rtimemoniter'
  export default {
    name: 'app',
    data () {
      return {
        xsdate: xiaoshidate,
        theme: 'primary'
      }
    },
    components: {
      Hello,
      Rtimemoniter
    },
    created () {
      // this.$router.push('/hello');
      this.$router.push('/moniter/rtimemoniter');
      // this.$router.push('/search/search');
    },
    mounted () {
      let winWidth = window.screen.availWidth;
      let winHeight = window.screen.availHeight;
      $(".entrancenav").width(winWidth);
      $(".entrancefooter").width(winWidth);
    },
    methods: {
      clickMenu: function (val) {
        // body...
        var routeName = this.$route.name;
        if (val == 1) {
          // alert('实时监控');
          if (routeName == 'rtimemoniter') {
            return;
          }
          this.$goRoute('/moniter/rtimemoniter')
        } else if (val == 2) {
          // alert('查询检索');
          // alert(this.$route.name);
          if (routeName == 'face' || routeName == 'photosearch' ||
            routeName == 'alarm' || routeName == 'photorequire') {
            return;
          }
          this.$goRoute('/search/search')
        } else if (val == 3) {
          if (routeName == 'setting') {
            return;
          }
          this.$goRoute('/setting/setting')
        }
      }
    }
  }
</script>

<style>

</style>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    background: #fdfdfd;
    /*margin-top: 60px;*/
  }

  .entrancenav {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 60px;
    background: #999999;
  }

  .entrancefooter {
    position: absolute;
    margin-bottom: -10px;
    width: 100%;
    height: 60px;
    background: #999999;
  }

  .copyright {
    background: #999999;
    font-size: 13px;
    text-align: center;
    color: #111111;
    padding-top: 28px;
    padding-bottom: 28px;
    border-top: 1px solid #bbbbbb;
  }

</style>
