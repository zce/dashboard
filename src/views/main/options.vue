<template>
  <div>
    <div class="heading">
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'options',

  computed: {
    title () {
      const dist = {
        general: '常规选项',
        writing: '撰写设置',
        reading: '阅读设置',
        discussion: '讨论设置',
        media: '多媒体选项',
        permalink: '固定链接设置'
      }
      return dist[this.$route.params.type]
    }
  }
}
</script>
