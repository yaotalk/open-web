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
    this.$router.push({name:'profile',params:{id:'profile',msg:{index:this.$route.params.msg.index,subindex:this.$route.params.msg.subindex,data:this.$route.params.msg.data}}});
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
