<template>
  <aside class="sidebar">
    <!-- <section class="search"></section> -->
    <nav class="navbar">
      <ul class="nav">
        <li class="nav-title">Actions</li>
        <li class="nav-item" v-for="menu in menus"><router-link :to="menu"><i :class="menu.icon"></i> {{ menu.title }}</router-link></li>
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
          { title: 'Dashboard', icon: 'fa fa-tachometer', name: 'dashboard' },
          { title: 'Components', icon: 'fa fa-codepen', name: 'component' },
          { title: 'Demo', icon: 'fa fa-chrome', name: 'demo' },
          { title: 'Proxy', icon: 'fa fa-star', name: 'proxy' },
          { title: 'Parameters', icon: 'fa fa-list-ul', name: 'param', params: { id: 1 } },
          { title: 'Options', icon: 'fa fa-cog', name: 'option' }
        ]
      }
    }
  }
</script>

<style lang="less">
  @width: 12rem;
  @height: 2.5rem;
  @color: fade(#fff, 5%);

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
            padding: (@height - 1.5rem) / 2 1rem;
            color: rgba(255, 255, 255, .7);
            font-size: .875rem;
            line-height: 1.5rem;
            i {
              vertical-align: baseline;
              margin-right: .5rem;
            }
            &:hover {
              color: rgba(255, 255, 255, .9);
              background-color: @color;
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
