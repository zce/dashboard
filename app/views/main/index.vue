<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
  import Layout from 'components/layout'

  export default {
    name: 'main',
    components: { Layout }
  }
</script>
