<template>
  <div>
    <h1>404</h1>
    <h2>Not Found</h2>
    <p>The page you requested was not found!</p>
  </div>
</template>

<script>
  export default {
    name: 'not-found'
  }
</script>

<style scoped>
  div {
    display: flex;
    min-height: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin: 0;
    font-size: 170px;
    font-weight: 100;
    line-height: 170px;
  }
  h2 {
    margin: 0;
    font-size: 50px;
    font-weight: 400;
  }
  p, pre { overflow: auto; color: #757575; }
</style>
