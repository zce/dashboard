<template>
  <aside class="sidebar" :class="{ collapse }">
    <nav class="menu">
      <menu-list :items="menus" active-class/>
    </nav>
    <footer class="footer">
      <a class="toggle icon-before icon-circle-left" title="Toggle navigation menu" @click="toggleCollapse"></a>
      <router-link class="copyright" :to="{ name: 'about' }" :title="'About' + copyright">&copy; {{ copyright }}</router-link>
    </footer>
  </aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import MenuList from './menu'

  export default {
    name: 'sidebar',
    components: { MenuList },
    computed: mapGetters({
      menus: 'sidebar',
      copyright: 'copyright',
      copyrightLink: 'copyrightLink',
      collapse: 'sidebarCollapse'
    }),
    methods: mapActions({
      toggleCollapse: 'toggleSidebarCollapse'
    })
  }
</script>
