<template>
  <div id="login">
    <header class="logo">
      <h1><a class="title" href="/">WEDN.NET</a></h1>
    </header>
    <main class="container">
      <el-alert :title="error" :description="message" v-show="error" class="alert" type="warning" show-icon/>
      <el-form :model="model" :rules="rules" class="login-form" ref="login-form" auto-complete="off" label-position="top">
        <h2 class="heading">登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button class="form-button" type="primary" native-type="submit" @click.prevent="submit">提交</el-button>
      </el-form>
      <div class="footer">← 返回到 <a href="/">WEDN.NET</a></div>
    </main>
  </div>
</template>

<script>
  import storage from '../libraries/storage'

  export default {
    name: 'login',
    data () {
      return {
        error: '',
        message: '',
        model: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名' },
            { min: 2, max: 16, message: '长度在 2 到 16 个字符' }
          ],
          password: [
            { required: true, message: '请输入密码' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符' }
          ]
        }
      }
    },
    methods: {
      submit () {
        this.$refs['login-form'].validate(valid => {
          if (!valid) return false
          this.$store.dispatch('createToken', {
            username: this.model.username,
            password: this.model.password
          })
          .then(token => {
            storage.set('toooken', token)
            this.$router.replace({ path: this.$route.query.redirect })
          })
          .catch(err => {
            this.message = err.message
            this.error = '发生错误'
          })
        })
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

  .alert {
    margin-bottom: 1rem;
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

    > .form-group {
      // margin-bottom: 1.25rem;
    }

    > .form-button {
      width: 100%;
    }
  }

  .footer {
    margin: 1.5rem auto;
    padding: 1rem;
    border: .0625rem solid #e9e9e9;
    text-align: center;
  }
</style>
