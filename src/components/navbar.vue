<template>
  <header class="header">
    <h1 class="brand">
      <router-link to="/">{{ header.name }}</router-link>
    </h1>
    <nav class="toolbar">
      <menu-list :items="header.menus"/>
      <ul class="list">
        <li class="item" v-if="session.user">
          <a href="#">Hi, {{ session.user.name }}! <img class="avatar" :src="session.user.meta.avatar" :alt="session.user.name"></a>
          <ul class="list">
            <li class="item"><router-link :to="{ name: 'profile' }">Profile</router-link></li>
            <li class="item"><router-link :to="{ name: 'profile' }">Edit profile</router-link></li>
            <li class="divider"></li>
            <li class="item"><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuList from './menu.vue'

export default {
  name: 'navbar',
  components: { MenuList },
  computed: mapGetters({
    header: 'header',
    session: 'session'
  }),
  created () {
    this.$store.dispatch('getCurrentUser')
  },
  methods: {
    async logout () {
      await this.$store.dispatch('deleteToken')
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
@import '../theme';

.header {
  display: flex;
  padding: 0 .5rem;

  > .brand {
    margin: 0 1rem 0 0;
    font: italic ($header-height * .625) sans-serif;
    line-height: $header-height;

    > a {
      color: $brand-color;

      &:hover {
        color: $brand-hover-color;
      }
    }

    &:hover  {
      color: $brand-hover-color;
    }
  }

  > .toolbar {
    display: flex;
    flex: 1;

    > .list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      > .item {
        position: relative;

        > a {
          display: block;
          padding: 0 .625rem;
          color: $menu-item-color;
          font-size: ($header-height * .375);
          line-height: $header-height;

          &::before {
            margin-right: .3125rem;
          }

          > img {
            width: ($header-height * 0.6);
            height: ($header-height * 0.6);
            margin-top: -.25rem;
            background: $menu-image-background;
            border: $menu-image-border;
            border-radius: 50%;
            vertical-align: middle;
          }
        }

        > .list {
          display: none;
          list-style: none;
          position: absolute;
          z-index: 99;
          min-width: $header-sub-width;
          margin: 0;
          padding: .625rem;
          background: $menu-item-hover-background;

          > .divider::before {
            display: block;
            height: .0625rem;
            margin: .125rem;
            background: $menu-border-background;
            content: '';
          }

          > .item  {
            > a {
              display: block;
              padding: .125rem;
              color: $menu-item-color;
              font-size: $header-height * .375 + .0625rem;
              white-space: nowrap;
            }

            &:hover {
              > a {
                color: $menu-item-hover-color;
              }
            }
          }
        }

        &:hover {
          > a {
            background: $menu-item-hover-background;
            color: $menu-item-hover-color;
          }

          > .list {
            display: block;
          }
        }
      }

      &:last-child {
        margin-left: auto;

        > .item {
          > .list {
            right: 0;
            text-align: right;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 568px) {
  .header > .toolbar > .list:first-child {
    display: none;
  }
}
</style>
