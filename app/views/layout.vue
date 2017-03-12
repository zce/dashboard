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
    components: { AppHeader, AppSidebar }
  }
</script>

<style>
  .content {
    position: relative;
  }

  .content-enter-active,
  .content-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity .6s ease;
  }

  .content-enter,
  .content-leave-active {
    opacity: 0
  }
</style>
