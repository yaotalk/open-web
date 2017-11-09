<template>
  <div class="searchmain">
    <h6>{{psearch}}</h6>
  </div>
</template>
<script>
  export default {
    name: 'photosearch',
    data () {
      return {
        psearch: '暂未开放'
      }
    },
    created () {
      alert('抓拍检索功能暂未开放');
    },
    mounted () {
      var winWidth = window.screen.availWidth;
      var winHeight = window.screen.availHeight;

      $(".maindiv").height((winHeight - $(".entrancenav").height() - $(".entrancefooter").height()) + "px");
      $(".searchmain").height($(".searchnav").height() + "px");
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

</style>
