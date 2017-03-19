<template>
  <div class="wrapper">
    <section class="login">
      <header class="login-header">
        <h1 class="brand"><router-link to="/" tabindex="-1">WEDN.NET</router-link></h1>
        <el-alert :title="error.title" :description="error.message" v-if="error" class="alert" type="warning" show-icon/>
      </header>
      <el-form :model="model" :rules="rules" class="login-form" ref="login-form" auto-complete="off" label-position="top">
        <h2 class="heading">登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading" @click.prevent="submit">{{ loading ? '登陆中...' : '登录' }}</el-button>
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
      const model = {
        username: 'admin',
        password: 'password'
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

      return {
        model: model,
        rules: rules,
        error: null,
        loading: false
      }
    },

    methods: {
      submit () {
        // form validate
        this.$refs['login-form'].validate(valid => {
          if (!valid) return false

          // validated
          this.loading = true
          this.error = null

          // create token from remote
          this.$store.dispatch('createToken', this.model)
          .then(token => {
            this.loading = false
            this.$router.replace({ path: this.$route.query.redirect || '/' })
          })
          .catch(err => {
            this.loading = false
            this.error = { title: '发生错误', message: '出现异常，请稍后再试！' }
            switch (err.response.status) {
              case 401:
                this.error.message = '用户名或密码错误！'
                break
              case 500:
                this.error.message = '服务器内部异常，请稍后再试！'
                break
            }
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
