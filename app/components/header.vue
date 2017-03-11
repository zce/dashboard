<template>
  <header class="header">
    <h1 class="brand">
      <router-link to="/">{{ name }}</router-link>
    </h1>
    <nav class="toolbar">
      <menu-list :items="menus"/>
      <ul class="list">
        <li class="item">
          <a href="#">Hi, {{ user.nickname }}! <img class="avatar" :src="user.avatar" :alt="user.nickname"></a>
          <ul class="list">
            <li class="item"><a href="javascript:;">个人主页</a></li>
            <li class="item"><a href="javascript:;">编辑个人资料</a></li>
            <li class="divider"></li>
            <li class="item"><a href="javascript:;" @click.prevent="logout">登出</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MenuList from './menu'

  export default {
    name: 'header',
    components: { MenuList },
    computed: mapGetters({
      name: 'name',
      menus: 'toolbar',
      user: 'currentUser'
    }),
    methods: {
      logout () {
        this.$store.dispatch('deleteToken')
        this.$router.replace({ path: '/login' })
      }
    }
  }
</script>
