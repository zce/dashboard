<template>
  <div>
    <div class="heading">
      <h1 class="title">安装{{ title }}</h1>
    </div>
    <p>暂时不考虑！</p>
  </div>
</template>

<script>
export default {
  name: 'install',

  computed: {
    title () {
      const dist = {
        plugin: '插件',
        theme: '主题'
      }
      return dist[this.$route.params.type]
    }
  }
}
</script>
