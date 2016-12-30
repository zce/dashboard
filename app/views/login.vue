<template>
  <div id="login">
    <header class="logo">
      <h1><a class="title" href="/">WEDN.NET</a></h1>
    </header>
    <main class="container zoomIn animated">
      <form class="pure-form login-form">
        <h2 class="heading">Sign in</h2>
        <fieldset class="pure-group">
          <input type="text" class="pure-input-1" placeholder="Username" v-model="username">
          <input type="text" class="pure-input-1" placeholder="Password" v-model="password">
        </fieldset>
        <button type="button" class="pure-button pure-input-1 pure-button-primary" @click="login">Sign in</button>
      </form>
      <div class="footer">
        ← 返回到 <a href="/">WEDN.NET</a>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login () {

      }
    }
  }
</script>

<style lang="less" scoped>
  #login {
    height: 100%;
    background: #f3f3f4;
    color: #666;
    font: normal 0.875rem 'RobotoDraft', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .logo {
    padding: 4.5rem 0 3.5rem;
    text-align: center;
    letter-spacing: .125rem;

    h1 {
      margin: 0;
    }

    .title {
      margin: 0;
      font-size: 3rem;
      font-weight: 300;
      color: #666;

      &:hover {
        color: #555;
        text-decoration: none;
        text-shadow: 0 0 1rem #e0e0e0;
      }
    }
  }

  .container {
    max-width: 20rem;
    margin: 0 auto;
  }

  .login-form {
    padding: 1.5rem 1.25rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f8f8f9;
    // border: .0625rem solid #eee;
    box-shadow: 0 .125rem .375rem rgba(100, 100, 100, .2);

    > .heading {
      margin: 0 0 .75rem;
      font-weight: 400;
      font-size: 1.5rem;
    }

    > .pure-group {
      margin-bottom: 1rem;
    }

    > .pure-button {
      font-size: 1rem;
    }
  }

  .footer {
    margin: 1.5rem auto;
    padding: 1rem;
    border: .0625rem solid #e9e9e9;
    text-align: center;
  }
  // #app {
  //   > .header {
  //     display: none;
  //   }
  //   > .main {
  //     > .sidebar {
  //       display: none;
  //     }
  //     > .content {
  //       margin: 0;
  //       border-radius: 0;
  //     }
  //   }
  // }
</style>
