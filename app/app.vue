<template>
  <div id="app">
    <app-header/>
    <app-main>
      <app-sidebar/>
      <app-content/>
    </app-main>
  </div>
</template>

<script>
  import Header from './components/header'
  import Main from './components/main'
  import Sidebar from './components/sidebar'
  import Content from './components/content'

  export default {
    name: 'app',

    components: {
      'app-header': Header,
      'app-main': Main,
      'app-sidebar': Sidebar,
      'app-content': Content
    },

    data () {
      return {
        message: 'Hello Vue!'
      }
    }
  }
</script>

<style lang="less">
  #app {
    display: flex;
    flex-direction: column;
    // min-height: 100%;
    height: 100%;
    overflow: hidden;
    color: #fff;
    // background-color: #373a3c;
    background-color: #93b9cc;
    background-image: url('./assets/img/main_bg.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
