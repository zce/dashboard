<template>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style lang="less">
  .content {
    flex: 1;
    color: #373a3c;
    margin: 0 .5rem;
    padding: 1rem;
    overflow-y: auto;
    background-color: #fff;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
  }

  ::-webkit-scrollbar {
    width: .3rem;
    height: .3rem;
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .3rem;
    background-color: rgba(100, 100, 100, .5);
  }
</style>
