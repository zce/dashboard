<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/">{{ name }}</router-link>
    </h1>
    <nav class="menu">
      <ul class="list">
        <li class="item" v-for="item in menus">
          <router-link :to="item">
            <i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span>
          </router-link>
          <nav class="submenu" v-if="item.children">
            <ul class="list">
              <li class="item" v-for="sub in item.children">
                <router-link :to="sub">{{ sub.title }}</router-link>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
      <ul class="list right">
        <li class="item">
          <a href="javascript:;">
            <span>Hi, {{ user.nickname }}</span>
            <img class="avatar" :src="user.avatar" :alt="user.nickname">
          </a>
          <nav class="submenu">
            <ul class="list">
              <li class="item"><a href="javascript:;">编辑个人资料</a></li>
              <li class="item"><a href="javascript:;" @click.prevent="logout">登出</a></li>
            </ul>
          </nav>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'header',
    computed: mapGetters({
      menus: 'topbar',
      name: 'name',
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
