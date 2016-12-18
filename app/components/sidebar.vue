<template>
  <aside class="sidebar" :class="{ collapse }">
    <nav class="menu">
      <ul class="list">
        <li class="title"><span>Actions</span></li>
        <template v-for="menu in menus">
          <li class="divider" v-if="!menu"></li>
          <router-link tag="li" class="item" v-else active-class="active" :to="menu">
            <a><i :class="'dashicons dashicons-' + menu.icon"></i><span>{{ menu.title }}</span></a>
            <ul class="list" v-if="menu.submenus">
              <router-link tag="li" class="item" v-for="submenu in menu.submenus" active-class="active" :to="submenu"><a>{{ submenu.title }}</a></router-link>
            </ul>
          </router-link>
        </template>
      </ul>
    </nav>
    <section class="footer">
      <a href="#" class="collapse" title="Collapse menu" @click="toggleCollapse"><i class="dashicons dashicons-admin-collapse"></i></a>
      <a href="#" class="copyright"><span>&copy; WEDN.NET</span></a>
    </section>
  </aside>
</template>

<script>
  export default {
    name: 'sidebar',

    data () {
      const systemMenu = [
        {
          title: '仪表盘',
          icon: 'dashboard',
          name: 'dashboard',
          submenus: [
            { title: '首页', name: 'dashboard' },
            { title: '更新', name: 'dashboard' }
          ]
        }
      ]

      const contentMenu = [
        {
          title: '文章',
          icon: 'admin-post',
          name: 'component',
          submenus: [
            { title: '所有文章', name: 'component' },
            { title: '写文章', name: 'component' },
            { title: '分类目录', name: 'component' },
            { title: '标签', name: 'component' }
          ]
        },
        {
          title: '多媒体',
          icon: 'admin-media',
          name: 'demo',
          submenus: [
            { title: '媒体库', name: 'component' },
            { title: '添加', name: 'component' }
          ]
        },
        {
          title: '页面',
          icon: 'admin-page',
          name: 'param',
          submenus: [
            { title: '所有页面', name: 'component' },
            { title: '新建页面', name: 'component' }
          ]
        }
      ]

      const siteMenu = [
        {
          title: '用户',
          icon: 'admin-users',
          name: 'proxy',
          submenus: [
            { title: '所有用户', name: 'component' },
            { title: '添加用户', name: 'component' }
          ]
        },
        {
          title: '评论',
          icon: 'admin-comments',
          name: 'about'
        }
      ]

      const optionMenu = [
        {
          title: '外观',
          icon: 'admin-appearance',
          name: 'demo',
          submenus: [
            { title: '主题', name: 'component' },
            { title: '自定义', name: 'component' },
            { title: '小工具', name: 'component' },
            { title: '菜单', name: 'component' }
          ]
        },
        {
          title: '插件',
          icon: 'admin-plugins',
          name: 'param',
          submenus: [
            { title: '已安装插件', name: 'component' },
            { title: '安装插件', name: 'component' }
          ]
        },
        {
          title: '工具',
          icon: 'admin-tools',
          name: 'param',
          submenus: [
            { title: '可用工具', name: 'component' },
            { title: '导入', name: 'component' },
            { title: '导出', name: 'component' }
          ]
        },
        {
          title: '设置',
          icon: 'admin-settings',
          name: 'param',
          submenus: [
            { title: '常规', name: 'component' },
            { title: '撰写', name: 'component' },
            { title: '阅读', name: 'component' },
            { title: '讨论', name: 'component' },
            { title: '多媒体', name: 'component' },
            { title: '固定链接', name: 'component' }
          ]
        }
      ]

      return {
        collapse: false,
        menus: [...systemMenu, false, ...contentMenu, false, ...siteMenu, false, ...optionMenu]
      }
    },

    methods: {
      toggleCollapse () {
        this.collapse = !this.collapse
      }
    }
  }
</script>
