<template>
  <div>
    <div style="padding-top: 80px">
      <h1>{{ msg }}</h1>
    </div>
    <div class="content-wrapper">
      <h2>{{ msg2 }}</h2>
    </div>
  </div>
</template>
<script>
  export default{
  	name: 'aboutxs',
  	data () {
  	  return {
        msg: 'aboutxs1',
        msg2: 'aboutxs2'
  	  }
  	}
  }
</script>
<style scoped>
  .content-wrapper {
  	position: relative;
    /* width: 100%; */
    /* min-width: 1200px; */
  }
</style>