<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">仪表盘</h1>
    </div>
    <div class="jumbotron">
      <h2>Hello, world!</h2>
      <p>Coming soon...</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    created () {
      this.$store.dispatch('changeTitle', '仪表盘')
    }
  }
</script>

<style scoped>
  .inner {
    display: flex;
    flex-direction: column;
    height: calc(100% - 2rem);
  }

  .jumbotron {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 1.5rem;
    /*background-color: #E5E9F2;*/
    background-color: #475669;
    border-radius: .5rem;
    color: #fff;
    text-align: center;
  }

  h2 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
  }
</style>
