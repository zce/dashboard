<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">HTTP代理</h1>
    </div>
    <div>
      <p>本示例只有在本地开发环境工作，线上托管环境没有代理配置。</p>
      <button @click="fetch()">Fetch typicode api by proxy</button>
    </div>
    <div v-if="error">
      <h2>{{ error.status }} - {{ error.statusText }}</h2>
      <p>{{ error.body }}</p>
    </div>
    <ul v-if="!error">
      <li v-for="item in posts">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demo-proxy',

    data () {
      return { posts: {}, error: false }
    },

    mounted () { },

    methods: {
      fetch () {
        this.$http
          .get('/api/posts')
          .then(res => {
            this.posts = res.data
          })
          .catch(err => {
            this.error = err
          })
      }
    }
  }
</script>

<style>

</style>
