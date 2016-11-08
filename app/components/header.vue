<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="brand"><router-link to="/">WEDN.NET</router-link></h1>
      <ul class="nav">
        <li class="nav-item"><router-link to="/dashboard">Dashboard</router-link></li>
        <li class="nav-item"><router-link to="/demo">Demo</router-link></li>
      </ul>
      <ul class="nav nav-right">
        <li class="nav-item"><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="less">
  @height: 3rem;

  .header .navbar {
    display: flex;
    padding: 0 1rem;
    .brand {
      margin: 0;
      a {
        font-size: 1.8rem;
        font-style: italic;
        display: inline-block;
        padding: (@height - 2rem) / 2 0;
        line-height: 2rem;
        color: rgba(255, 255, 255, .9);
        &:hover {
          color: #fff;
        }
      }
    }
    .nav {
      display: flex;
      flex: 1;
      padding: 0;
      margin: 0 0 0 .5rem;
      list-style: none;
      &-right {
        flex: 0;
      }
      &-item {
        margin-left: 1rem;
        a {
          display: inline-block;
          height: 100%;
          padding: (@height - 1.5rem) / 2 0;
          line-height: 1.5rem;
          color: rgba(255, 255, 255, .5);
        }
        &:hover a,
        a.router-link-active {
          color: rgba(255, 255, 255, .9);
        }
      }
    }
  }
</style>
