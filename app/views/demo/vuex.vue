<template>
  <div>
    <h1 class="content-title">{{ $t('vuex') }}</h1>

    <h2>{{ counter }}</h2>

    <div>
      <button class="pure-button pure-button-primary" @click="increment">INC</button>
      <button class="pure-button pure-button-primary" @click="decrement">DEC</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'component',
    computed: mapGetters({
      counter: 'counter'
    }),
    methods: mapActions({
      increment: 'increment',
      decrement: 'decrement'
    })
  }
</script>
