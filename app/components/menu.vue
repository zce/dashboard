<template>
  <ul class="list">
    <template v-for="item in items">
      <li class="divider" v-if="item.divider"></li>
      <li class="title" v-else-if="item.title">{{ item.title }}</li>
      <li class="item" v-else :class="{ active: activeClass && isActive(item) }">
        <router-link :to="item" :class="'icon-before icon-' + item.icon" :title="item.text">{{ item.text }}</router-link>
        <ul class="list" v-if="item.children">
          <template v-for="sub in item.children">
            <li class="divider" v-if="sub.divider"></li>
            <li class="item" v-else :class="{ active: activeClass && isActive(item) }"><router-link :to="sub" :title="sub.text">{{ sub.text }}</router-link></li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script>
  export default {
    name: 'menu-list',
    props: {
      items: Array,
      activeClass: Boolean
    },
    methods: {
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
