<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title">{{ $t('demo') }}</h1>
    </div>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.competed">
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demo',

    data () {
      const todos = []
      for (let i = 0; i < 100; i++) {
        todos.push({ text: 'JavaScript ' + i, competed: i % 2 })
      }
      return { todos }
    }
  }
</script>

<style>

</style>
