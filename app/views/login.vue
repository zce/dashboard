<template>
  <layout frameless>
    <section class="login">
      <header class="login-header">
        <h1 class="brand"><a href="#" tabindex="-1">WEDN.NET</a></h1>
        <div class="alert alert-danger" role="alert">
          <strong>错误：</strong>
          用户名或密码错误！
          <a class="alert-link" href="#">忘记密码？</a>
          <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
      </header>
      <form class="login-form">
        <h2 class="heading">登录</h2>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" class="form-control form-control-md" placeholder="用户名">
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" class="form-control" placeholder="密码">
        </div>
        <button class="btn btn-primary btn-block">登录</button>
      </form>
      <footer class="login-footer">
        ← 返回到 <a href="/">WEDN.NET</a>
      </footer>
    </section>
  </layout>
</template>

<script>
  import Layout from 'components/layout'

  export default {
    name: 'login',
    components: { Layout }
  }
</script>
