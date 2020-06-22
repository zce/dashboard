<template>
  <transition name="fade">
    <router-view class="wrapper"/>
  </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './theme';

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
