<template>
  <main class="content">
    <transition name="content">
      <slot/>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style lang="scss">
  .content {
    position: relative;

    &-enter-active,
    &-leave-active {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: opacity .3s ease;
    }

    &-enter,
    &-leave-active {
      opacity: 0
    }
  }
</style>
