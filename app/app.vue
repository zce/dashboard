<template>
  <transition name="app">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default { name: 'app' }
</script>

<style>
  .app-enter-active,
  .app-leave-active {
    transition: opacity .3s;
  }
  .app-enter,
  .app-leave-active {
    opacity: 0;
  }
</style>
