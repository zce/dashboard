<template>
  <div>
    <h1 class="page-title">HTTP {{ $t('proxy') }} - {{ top250.title }}</h1>
    <div>
      <button @click="fetch()">Fetch douban api by proxy</button>
    </div>
    <div v-if="error">
      <h2>{{ error.status }} - {{ error.statusText }}</h2>
      <p>{{ error.body }}</p>
    </div>
    <ul v-if="!error">
      <li v-for="movie in top250.subjects">
        <span>{{ movie.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'proxy',

    data () {
      return { top250: {}, error: false }
    },

    mounted () { },

    methods: {
      fetch () {
        this
          .$http
          .get('/v2/movie/top250')
          .then(res => { this.top250 = res.data })
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
