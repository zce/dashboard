<template>
  <aside class="sidebar">
    <section class="search">
      <el-input placeholder="请输入内容">
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </section>
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
          { title: 'Dashboard', icon: 'el-icon-star-on', name: 'dashboard', params: { id: 1 } },
          { title: 'Components', icon: 'el-icon-menu', name: 'component' }
        ]
      }
    }
  }
</script>

<style lang="less">
  @height: 2.5rem;
  @color: fade(#93b9cc, 10%);

  .sidebar {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 14rem;
    color: #fff;
    transform: translateX(-14rem);
    transition: translateX 1s ease;
    .search {
      padding: .8rem .6rem;
      .el-input {
        font-size: .8rem;
        line-height: 1.5rem;
      }
      .el-input__inner {
        color: #fff;
        height: 2rem;
        background-color: @color;
        border-color: @color;
      }
      .el-input-group__append {
        background-color: @color;
        border-color: @color;
      }
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
      transform: translateX(0);
    }
  }
</style>
