<template>
  <header class="header">
    <h1 class="brand">
      <router-link to="/">{{ header.name }}</router-link>
    </h1>
    <nav class="toolbar">
      <menu-list :items="header.menus"/>
      <ul class="list">
        <li class="item">
          <a href="#">Hi, {{ user.nickname }}! <img class="avatar" :src="user.avatar" :alt="user.nickname"></a>
          <ul class="list">
            <li class="item"><router-link :to="{ name: 'profile' }">个人主页</router-link></li>
            <li class="item"><router-link :to="{ name: 'profile' }">编辑个人资料</router-link></li>
            <li class="divider"></li>
            <li class="item"><a @click.prevent="logout">登出</a></li>
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
      header: 'header',
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
