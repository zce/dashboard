<template>
  <div class="wrapper">
    <app-header/>
    <section class="main">
      <app-sidebar/>
      <main class="content">
        <transition name="content">
          <router-view></router-view>
        </transition>
      </main>
    </section>
  </div>
</template>

<script>
  import AppHeader from '../components/header'
  import AppSidebar from '../components/sidebar'

  export default {
    name: 'layout',
    title: 'WEDN.NET | make IT better',
    components: { AppHeader, AppSidebar }
  }
</script>
