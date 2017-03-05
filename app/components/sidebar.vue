<template>
  <aside class="sidebar" :class="{ collapse }">
    <nav class="menu">
      <ul class="list">
        <li class="title"><span>Actions</span></li>
        <template v-for="item in menus">
          <li class="divider" v-if="item.divider"></li>
          <li class="item" :class="{ active: isActive(item) }" v-else>
            <router-link :to="item">
              <i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span>
            </router-link>
            <ul class="list" v-if="item.children">
              <li class="item" v-for="sub in item.children" :class="{ active: isActive(sub) }">
                <router-link :to="sub">{{ sub.title }}</router-link>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </nav>
    <section class="footer">
      <a class="collapse" title="Collapse menu" @click="toggleCollapse"><i class="dashicons dashicons-admin-collapse"></i></a>
      <a href="http://wedn.net" class="copyright"><span>&copy; {{ copyright }}</span></a>
    </section>
  </aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'sidebar',
    computed: mapGetters({
      menus: 'sidebar',
      copyright: 'copyright',
      collapse: 'sidebarCollapse'
    }),
    methods: {
      ...mapActions({
        toggleCollapse: 'toggleSidebarCollapse'
      }),
      isActive (route) {
        function isObjectEqual (a, b) {
          const aKeys = Object.keys(a)
          const bKeys = Object.keys(b)
          if (aKeys.length !== bKeys.length) return false
          return aKeys.every(key => String(a[key]) === String(b[key]))
        }
        const isCurrent = route.name === this.$route.name && (!route.params || isObjectEqual(route.params, this.$route.params))
        if (isCurrent) return true
        if (!route.children || !route.children.length) return false
        return route.children.some(sub => sub.name === this.$route.name && (!route.params || isObjectEqual(sub.params, this.$route.params)))
      }
    }
  }
</script>
