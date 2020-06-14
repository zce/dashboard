<template>
  <div>
    <div class="heading">
      <h1 class="title">Dashboard</h1>
    </div>
    <div class="jumbotron">
      <h2>Hello, world!</h2>
      <p>A dashboard scaffolding based on Vue.js created by Vue CLI.</p>
      <p>Source code: <a href="https://github.com/zce/dashboard">zce/dashboard</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.inner {
  height: calc(100% - 2rem);
}

.jumbotron {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  margin: 1rem 1.5rem;
  background-color: #475669;
  border-radius: .5rem;
  color: #fff;
  text-align: center;
}

h2 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
}

a {
  color: #fff;
}
</style>
