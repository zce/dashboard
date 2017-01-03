<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/">{{ name }}</router-link>
    </h1>
    <nav class="menu">
      <ul class="list">
        <router-link tag="li" class="item" active-class="active" v-for="item in menus" :to="item">
          <a><i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span></a>
          <nav class="submenu" v-if="item.children">
            <ul class="list">
              <router-link tag="li" class="item" active-class="active" v-for="sub in item.children" :to="sub"><a>{{ sub.title }}</a></router-link>
            </ul>
          </nav>
        </router-link>
      </ul>
      <ul class="list right">
        <li class="item">
          <a href="#">
            <span>Hi, {{ user.nickname }}</span>
            <img class="avatar" :src="user.avatar" :alt="user.nickname">
          </a>
          <nav class="submenu">
            <ul class="list">
              <li class="item"><a href="#">编辑个人资料</a></li>
              <li class="item"><a href="#">登出</a></li>
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
    })
  }
</script>
