<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">{{ $t('demo.parameters') }}</h1>
    </div>
    <h3>Param: {{ $route.params.name }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'demo-parameters'
  }
</script>
