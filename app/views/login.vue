<template>
  <div class="wrapper">
    <section class="login">
      <header class="login-header">
        <h1 class="brand"><a href="#" tabindex="-1">WEDN.NET</a></h1>
        <el-alert :title="error" :description="message" v-show="error" class="alert" type="warning" show-icon/>
      </header>
      <!-- <form class="login-form">
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
      </form> -->
      <el-form :model="model" :rules="rules" class="login-form" ref="login-form" auto-complete="off" label-position="top">
        <h2 class="heading">登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button type="primary" native-type="submit" @click.prevent="submit">提交</el-button>
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
    // beforeCreate () {
    //   if (store.getters.token) {
    //     this.$router.replace({ path: this.$route.query.redirect || '/' })
    //   }
    // },
    methods: {
      submit () {
        this.error = ''
        this.$refs['login-form'].validate(valid => {
          if (!valid) return false
          this.$store.dispatch('createToken', {
            username: this.model.username,
            password: this.model.password
          })
          .then(token => {
            this.$router.replace({ path: this.$route.query.redirect || '/' })
          })
          .catch(err => {
            this.error = '错误'
            if (err.data && err.data.error) {
              switch (err.status) {
                case 401:
                  this.message = '用户名或密码错误！'
                  break
                case 500:
                  this.message = '服务器内部异常，请稍后再试！'
                  break
                default:
                  this.message = '出现异常，请稍后再试！'
              }
            } else {
              this.message = err.message
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .el-form-item {
    margin-bottom: 30px
  }

  .el-button {
    width: 100%;
  }
</style>
