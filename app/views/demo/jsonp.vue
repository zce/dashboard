<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">JSONP</h1>
    </div>
    <div>
      <button @click="fetch()">Fetch typicode api by jsonp</button>
    </div>
    <div v-if="error">
      <h2>{{ error.status }} - {{ error.statusText }}</h2>
      <p>{{ error.body }}</p>
    </div>
    <ul v-if="!error">
      <li v-for="item in photos">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demo-jsonp',

    data () {
      return { photos: {}, error: false }
    },

    mounted () { },

    methods: {
      fetch () {
        this.$http.jsonp('http://jsonplaceholder.typicode.com/photos')
          .then(res => {
            this.photos = res.data
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
