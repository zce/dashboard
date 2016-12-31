<template>
  <router-view v-if="route.name === 'login'"></router-view>
  <div id="app" v-else>
    <app-header/>
    <app-main>
      <app-sidebar/>
      <app-content/>
    </app-main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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
    computed: mapState({
      route: 'route'
    })
  }
</script>
