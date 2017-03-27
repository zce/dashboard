<docs>
  * https://github.com/auth0-blog/vue-jwt-authentication
  * https://auth0.com/blog/build-an-app-with-vuejs/
</docs>

<template>
  <div class="wrapper">
    <section class="login">
      <header class="login-header">
        <h1 class="brand"><router-link to="/" tabindex="-1">WEDN.NET</router-link></h1>
        <el-alert :title="error.title" :description="error.message" v-if="error" class="alert" type="warning" show-icon/>
      </header>
      <el-form class="login-form" auto-complete="off" ref="login-form" label-position="top" :model="model" :rules="rules">
        <h2 class="heading">登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button type="primary" :loading="loading" @click="submit('login-form')">{{ loading ? '登陆中...' : '登录' }}</el-button>
      </el-form>
      <footer class="login-footer">
        ← 返回到 <a href="/">WEDN.NET</a>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'login',

    data () {
      // form model
      // TODO: remove default values
      const model = {
        username: 'zce',
        password: 'wanglei'
      }

      // form validate rules
      const rules = {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 2, max: 16, message: '长度在 2 到 16 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符' }
        ]
      }

      return { model: model, rules: rules, error: null, loading: false }
    },

    methods: {
      submit (ref) {
        // form validate
        this.$refs[ref].validate(valid => {
          if (!valid) return false

          // validated
          this.error = null
          this.loading = true

          // create token from remote
          this.$store.dispatch('createToken', this.model)
            .then(token => {
              this.$router.replace({ path: this.$route.query.redirect || '/' })
              this.loading = false
            })
            .catch(err => {
              console.error(err)
              this.error = { title: '发生错误', message: '出现异常，请稍后再试！' }
              switch (err.response && err.response.status) {
                case 401:
                  this.error.message = '用户名或密码错误！'
                  break
                case 500:
                  this.error.message = '服务器内部异常，请稍后再试！'
                  break
              }
              this.loading = false
            })
        })
      }
    }
  }
</script>

<style scoped>
  .el-button {
    margin-top: .5rem;
    width: 100%;
  }
</style>
