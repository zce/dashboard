<template>
  <aside class="sidebar">
    <!-- <section class="search"></section> -->
    <nav class="navbar">
      <ul class="nav">
        <li class="nav-title">Actions</li>
        <li class="nav-item" v-for="menu in menus"><router-link :to="menu"><i :class="'dashicons dashicons-' + menu.icon"></i><span>{{ menu.title }}</span></router-link></li>
      </ul>
    </nav>
    <section class="meta">
      <p>&copy; WEDN.NET</p>
    </section>
  </aside>
</template>

<script>
  export default {
    name: 'sidebar',

    data () {
      return {
        menus: [
          { title: this.$t('dashboard'), icon: 'dashboard', name: 'dashboard' },
          { title: this.$t('components'), icon: 'admin-post', name: 'component' },
          { title: this.$t('demo'), icon: 'admin-media', name: 'demo' },
          { title: this.$t('proxy'), icon: 'admin-page', name: 'proxy' },
          { title: this.$t('parameters'), icon: 'admin-comments', name: 'param', params: { id: 1 } },
          { title: this.$t('options'), icon: 'admin-appearance', name: 'option' }
        ]
      }
    }
  }
</script>

<style lang="less">
  @width: 10rem;
  @height: 2.5rem;

  .sidebar {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: @width;
    color: #fff;
    margin-left: -@width;
    transition: margin-left .3s ease;
    .search {
      padding: .8rem .6rem;
    }
    .navbar {
      display: flex;
      flex: 1;
      .nav {
        flex: 1;
        margin: 0;
        padding: 0;
        .nav-title {
          padding: .5rem 1rem;
          font-size: .75rem;
          color: rgba(255, 255, 255, .4);
        }
        .nav-item {
          a {
            display: block;
            color: rgba(255, 255, 255, .7);
            i {
              display: inline-block;
              width: 1.25rem;
              height: 1.25rem;
              padding: (@height - 1.25rem) / 2;
            }
            span {
              display: inline-block;
              padding: (@height - 1.5rem) / 2 0;
              font-size: .875rem;
              line-height: 1.5rem;
            }
            &:hover {
              color: rgba(255, 255, 255, .9);
              background-color: fade(#fff, 5%);
            }
          }
        }
      }
    }
    .meta {
      color: #ccc;
      padding: 0 1rem;
      font-size: .8rem;
    }
  }

  @media screen and (min-width: 720px) {
    .sidebar {
      margin-left: 0;
    }
  }
</style>
