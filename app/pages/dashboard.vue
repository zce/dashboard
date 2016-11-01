<template>
  <div>
    <h1>Dashboard</h1>
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
    name: 'dashboard',

    path: '/dashboard',

    default: true,

    data () {
      const todos = []
      for (let i = 0; i < 100; i++) {
        todos.push({ text: 'JavaScript ' + i, competed: i % 2 })
      }
      return { todos }
    }
  }
</script>
