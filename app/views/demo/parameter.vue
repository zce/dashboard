<template>
  <div>
    <h1 class="content-title">{{ $t('parameters') }}</h1>
    <h3>Param: {{ $route.params.name }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'param'
  }
</script>

<style>

</style>
