<template>
  <aside class="sidebar" :class="{ collapse: sidebar.collapse }">
    <nav class="menu">
      <menu-list :items="sidebar.menus" active-class/>
    </nav>
    <footer class="footer">
      <a class="toggle icon-before icon-circle-left" title="Toggle navigation menu" @click="toggleCollapse"></a>
      <router-link class="copyright" :to="{ name: 'about' }" :title="'About ' + sidebar.copyright">&copy; {{ sidebar.copyright }}</router-link>
    </footer>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuList from './menu.vue'

export default {
  name: 'sidebar',
  components: { MenuList },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  methods: mapActions({
    toggleCollapse: 'toggleSidebarCollapse'
  })
}
</script>

<style lang="scss">
@import '../theme';

.sidebar {
  display: flex;
  flex-direction: column;
  width: $sidebar-width;
  transition: width .3s;

  > .menu {
    flex: 1;

    > .list {
      list-style: none;
      margin: 0;
      padding: 0;

      > .title {
        padding: .25rem .75rem;
        color: $menu-title-color;
        font-size: .75rem;
        text-shadow: 0 0 .125rem $menu-title-background;
      }

      > .divider::before {
        display: block;
        height: .5rem;
        content: '';
        // background: $menu-border-background;
        // box-shadow: inset .0625rem .0625rem .125rem darken($menu-border-background, 5%);
      }

      > .item {
        position: relative;

        > a {
          display: block;
          color: $menu-item-color;
          font-size: .875rem;
          line-height: $sidebar-item-height;
          white-space: nowrap;
          overflow: hidden;

          > i,
          &::before {
            padding: 0 (($sidebar-min-width - 1rem) / 2);
            font-size: 1rem;
          }
        }

        > .list {
          display: none;
          list-style: none;
          padding: .625rem .875rem;

          > .divider::before {
            display: block;
            height: .0625rem;
            margin: .125rem;
            background: $menu-border-background;
            content: '';
          }

          > .item {
            > a {
              display: block;
              padding: .25rem;
              font-size: .8125rem;
              color: $menu-item-color;
              white-space: nowrap;
              overflow: hidden;
            }

            &.active a {
              color: darken($menu-item-hover-color, 6%);
            }

            &:hover a {
              color: $menu-item-hover-color;
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
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 99;
            min-width: $sidebar-sub-width;

            // Sidebar hover arrow
            @if $sidebar-enable-arrow {
              background: darken($menu-item-hover-background, 4%);

              // right bubble
              @if $sidebar-enable-radius {
                border-radius: .25rem;
                left: 95%;
              }

              &::before {
                display: inline-block;
                position: absolute;
                top: 0;
                left: -.875rem;
                margin: (($sidebar-item-height - .875rem) / 2) 0;
                border: (.875rem / 2) solid transparent;
                border-right-color: darken($menu-item-hover-background, 4%);
                content: '';
              }
            } @else {
              background: $menu-item-hover-background;
            }
          }
        }

        &.active {
          > a {
            color: $menu-item-active-color;
            background: $menu-item-active-background;

            // Sidebar active arrow
            @if $sidebar-enable-arrow {
              &::after {
                display: inline-block;
                position: absolute;
                right: 0;
                margin: (($sidebar-item-height - .875rem) / 2) 0;
                border: (.875rem / 2) solid transparent;
                border-right-color: $content-background;
                content: '';
              }
            }
          }

          > .list {
            display: block;
            position: static;
            background: lighten($menu-item-hover-background, 6%);

            > .divider::before {
              background: lighten($menu-item-hover-background, 2%);
            }
          }
        }
      }
    }
  }

  > .footer {
    width: $sidebar-width;
    border-top: .0625rem solid $menu-border-background;
    line-height: 2rem;

    > .toggle {
      display: inline-block;
      padding: 0 (($sidebar-min-width - 1rem) / 2);
      border-right: .0625rem solid $menu-border-background;
      color: darken($menu-item-color, 40%);
      font-size: 1rem;
      transition: transform .3s;

      &:hover {
        color: $menu-item-color;
      }
    }

    > .copyright {
      display: inline-block;
      padding-left: .5rem;
      color: darken($menu-item-color, 40%);
      font-size: .75rem;

      &:hover {
        color: $menu-item-color;
      }
    }
  }
}

@mixin collapse {
  width: $sidebar-min-width;

  .title {
    display: none;
  }

  .menu {
    margin-top: .625rem;

    > .list {
      > .item {
        &:not(:hover) {
          > .list {
            display: none;
          }
        }

        &.active {
          // // mini sidebar active arrow
          // > a::after {
          //   display: none;
          // }

          > .list {
            position: absolute;
            background: $menu-item-hover-background;
          }
        }
      }
    }
  }

  .toggle {
    transform: rotate(180deg);
  }
}

.sidebar.collapse {
  @include collapse;
}

// @media screen and (max-width: 768px) {
//   .sidebar {
//     @include collapse;
//   }
// }
</style>
