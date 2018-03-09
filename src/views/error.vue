<template>
  <div>
    <section class="error">
      <h1>404</h1>
      <h2>Not Found</h2>
      <footer>← 返回到 <a href="/">WEDN.NET</a></footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'not-fount',

  title: 'Not Found « WEDN.NET | make IT better'
}
</script>

<style lang="scss">
  .error {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: .125rem;

    h1,
    h2 {
      margin: 0;
      font: 300 2.5rem sans-serif;
    }

    h1 {
      font-size: 15rem;
    }

    footer {
      margin-top: 5rem;
      font-size: .75rem;
    }
  }
</style>
