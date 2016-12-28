<template>
  <aside class="sidebar" :class="{ collapse }">
    <nav class="menu">
      <ul class="list">
        <li class="title"><span>Actions</span></li>
        <template v-for="item in menus">
          <li class="divider" v-if="item.divider"></li>
          <router-link tag="li" class="item" v-else active-class="active" :to="item">
            <a><i :class="'dashicons dashicons-' + item.icon"></i><span>{{ item.title }}</span></a>
            <ul class="list" v-if="item.children">
              <router-link tag="li" class="item" v-for="sub in item.children" active-class="active" :to="sub"><a>{{ sub.title }}</a></router-link>
            </ul>
          </router-link>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'sidebar',

    data () {
      return {
        collapse: false
      }
    },

    computed: mapGetters({
      menus: 'sidebar',
      copyright: 'copyright'
    }),

    methods: {
      toggleCollapse () {
        this.collapse = !this.collapse
      }
    }
  }
</script>
