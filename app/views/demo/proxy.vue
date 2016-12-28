<template>
  <div>
    <h1 class="content-title">HTTP {{ $t('proxy') }}</h1>
    <div>
      <button @click="fetch()">Fetch cnode api by proxy</button>
    </div>
    <div v-if="error">
      <h2>{{ error.status }} - {{ error.statusText }}</h2>
      <p>{{ error.body }}</p>
    </div>
    <ul v-if="!error">
      <li v-for="topic in topics.data">
        <span>{{ topic.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'proxy',

    data () {
      return { topics: {}, error: false }
    },

    mounted () { },

    methods: {
      fetch () {
        this
          .$http
          .get('/api/v1/topics')
          .then(res => { this.topics = res.data })
          .catch(err => {
            console.log(err)
            this.error = err
          })
      }
    }
  }
</script>

<style>

</style>
