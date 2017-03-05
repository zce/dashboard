<template>
  <div>
    <h1 class="content-title">{{ $t('vuex') }} - Counter</h1>
    <el-row type="flex" justify="center">
      <h2>{{ counter }}</h2>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-button type="success" @click="increment">INC</el-button>
      <el-button type="warning" @click="incrementAsync">INC ASYNC</el-button>
      <el-button type="danger" @click="decrement">DEC</el-button>
      <el-button type="info" @click="decrementAsync">DEC ASYNC</el-button>
    </el-row>
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
      incrementAsync: 'incrementAsync',
      decrement: 'decrement',
      decrementAsync: 'decrementAsync'
    })
  }
</script>

<style scoped>
  h2 {
    width: 20rem;
    margin: 2rem;
    padding: 5rem;
    font-size: 10rem;
    text-align: center;
    background-color: #e0e0e0;
  }
</style>
