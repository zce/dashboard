<template>
  <div>
    <h1 class="content-title">{{ $t('parameters') }}</h1>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
  export default {
    name: 'param'
  }
</script>

<style>

</style>
