<template>
  <div class="exp">
    <div class="xs-intro">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'experience',
  data () {
    return {
      msg: 'experience'
    }
  },
  created () {
    console.log('created:\n');
    console.log(this.$route.params);


    
  },
  mounted () {
      console.log('===experience === mounted =======');
      this.gcurrentgIndex = 1;
      for(var i=0;i<5;i++){
        $($($('div.nav ul li').children()[i]).children()[1]).removeClass();
        $($($($('div.nav ul li').children()[i]).children()[0]).children()[0]).removeClass();
        // $($($('div.nav ul li').children()[i]).children()[0]).children()[0]
      }
      $($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[1]).addClass('nav-item-selected');
      $($($($('div.nav ul li').children()[this.gcurrentgIndex]).children()[0]).children()[0]).addClass('nav-text-selected');
    },
    updated () {
     console.log('====experience === updated =======');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.exp h1, h2 {
  font-weight: normal;
}

.exp .xs-intro {
  position: relative;
  background: #fff;
  width: 100%;
}

</style>