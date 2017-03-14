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

    methods: {
      fetch () {
        this.$axios
          .get('/posts')
          .then(res => {
            console.log(res.data)
            console.log(res.status)
            console.log(res.statusText)
            console.log(res.headers)
            console.log(res.config)
            this.posts = res.data
          })
          .catch(err => {
            console.dir(err)
            this.error = err
          })
      }
    }
  }
</script>

<style>

</style>
