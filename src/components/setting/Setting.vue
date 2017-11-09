<template>
  <div class="maindiv">
    <h6>{{message}}</h6>
  </div>
</template>
<script>
  export default {
    name: 'setting',
    data () {
      return {
        message: '暂未开放'
      }
    },
    created () {
      alert('系统设置功能暂未开放');
    },
    mounted () {
      var winWidth = window.screen.availWidth;
      var winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
    }
  }
</script>
<style scoped>
  .maindiv {
    position: relative;
    width: 100%;
    background: #dddddd;
    margin-top: 65px;
    /*这里的值与entrancenav的高度相关*/
    margin-bottom: 5px;
  }

</style>
