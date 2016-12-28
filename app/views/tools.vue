<template>
  <div>
    <h1 class="content-title">{{ $t('tool') }}</h1>
    <h2>{{ count }}</h2>
    <p>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
    </p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'tool',
    computed: mapGetters({
      count: 'count'
    }),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
