<template>
  <div class="wrapper" v-if="frameless">
    <slot/>
  </div>
  <div class="wrapper" v-else>
    <app-header/>
    <app-main>
      <app-sidebar/>
      <app-content>
        <slot/>
      </app-content>
    </app-main>
  </div>
</template>

<script>
  import AppHeader from './header'
  import AppSidebar from './sidebar'
  import AppMain from './main'
  import AppContent from './content'

  export default {
    name: 'layout',
    props: {
      frameless: Boolean
    },
    components: { AppHeader, AppSidebar, AppMain, AppContent }
  }
</script>
