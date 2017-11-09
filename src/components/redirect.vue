<template>
  <div class="blank">
    <div class="xs-intro">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blank',
  data () {
    return {
      msg: 'blank'
    }
  },
  created () {
//      let path = window.location.path;
//      if(path.indexOf("/homepage") > 0){
//          this.$router.push('/homepage');
//      }
//    this.$router.push('/develop/newuser');
      this.$router.push('/homepage');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blank h1, h2 {
  font-weight: normal;
}

.blank .xs-intro {
  position: relative;
  background: #fff;
  width: 100%;
}

</style>
