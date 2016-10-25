<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: 'main'
  }
</script>

<style>
  .main {
    display: flex;
    flex: 1;
  }
</style>
