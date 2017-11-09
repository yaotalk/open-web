<template>
  <div id="test2">
    <button class="test" @click="test" value="测试">测试</button>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    $("button").width(100 + "px");
    $("button").height(100 + "px");

    var $div = $("button.test");
      /* 绑定鼠标左键按住事件 */
      $div.bind("mousedown",function(event){
        /* 获取需要拖动节点的坐标 */
        var offset_x = $(this)[0].offsetLeft;//x坐标
        var offset_y = $(this)[0].offsetTop;//y坐标
        /* 获取当前鼠标的坐标 */
        var mouse_x = event.pageX;
        var mouse_y = event.pageY;        

        /* 绑定拖动事件 */
        /* 由于拖动时，可能鼠标会移出元素，所以应该使用全局（document）元素 */
        $(document).bind("mousemove",function(ev){
          /* 计算鼠标移动了的位置 */
          var _x = ev.pageX - mouse_x;
          var _y = ev.pageY - mouse_y;
          
          /* 设置移动后的元素坐标 */
          var now_x = (offset_x + _x ) + "px";
          var now_y = (offset_y + _y ) + "px";          
          /* 改变目标元素的位置 */
          $div.css({
            top:now_y,
            left:now_x
          });
        });
      });
      /* 当鼠标左键松开，接触事件绑定 */
      $(document).bind("mouseup",function(){
        $(this).unbind("mousemove");
      });
  },
  methods: {
    test: function (argument) {
      // body...
      // alert('test');
      if ($("button.test").val() == '返回') {
        $("button.test").val('测试');
        $("button.test").text('测试');
        this.$router.push('/');
      }else{
        $("button.test").val('返回');
        $("button.test").text('返回');
        this.$router.push('/test');
      }
      
    }
  }
}
</script>

<style>
#test2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
button.test {
  position: absolute;
  right: 10px;
}
</style>
