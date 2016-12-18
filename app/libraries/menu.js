import Vue from 'vue'

const Menu = {}

Menu.sidebar = [
  {
    title: '仪表盘',
    icon: 'dashboard',
    name: 'dashboard',
    children: [
      { title: '首页', name: 'dashboard' },
      { title: '更新', name: 'dashboard' }
    ]
  },
  {
    divider: true
  },
  {
    title: '文章',
    icon: 'admin-post',
    name: 'post',
    children: [
      { title: '所有文章', name: 'post' },
      { title: '写文章', name: 'post' },
      { title: '分类目录', name: 'post' },
      { title: '标签', name: 'post' }
    ]
  },
  {
    title: '多媒体',
    icon: 'admin-media',
    name: 'media',
    children: [
      { title: '媒体库', name: 'media' },
      { title: '添加', name: 'media' }
    ]
  },
  {
    title: '页面',
    icon: 'admin-page',
    name: 'param',
    children: [
      { title: '所有页面', name: 'param' },
      { title: '新建页面', name: 'param' }
    ]
  },
  {
    divider: true
  },
  {
    title: '用户',
    icon: 'admin-users',
    name: 'user',
    children: [
      { title: '所有用户', name: 'user' },
      { title: '添加用户', name: 'user' }
    ]
  },
  {
    title: '评论',
    icon: 'admin-comments',
    name: 'comment'
  },
  {
    divider: true
  },
  {
    title: '外观',
    icon: 'admin-appearance',
    name: 'theme',
    children: [
      { title: '主题', name: 'theme' },
      { title: '自定义', name: 'theme' },
      { title: '小工具', name: 'theme' },
      { title: '菜单', name: 'theme' }
    ]
  },
  {
    title: '插件',
    icon: 'admin-plugins',
    name: 'plugin',
    children: [
      { title: '已安装插件', name: 'plugin' },
      { title: '安装插件', name: 'plugin' }
    ]
  },
  {
    title: '工具',
    icon: 'admin-tools',
    name: 'tool',
    children: [
      { title: '可用工具', name: 'tool' },
      { title: '导入', name: 'tool' },
      { title: '导出', name: 'tool' }
    ]
  },
  {
    title: '设置',
    icon: 'admin-settings',
    name: 'setting',
    children: [
      { title: '常规', name: 'setting' },
      { title: '撰写', name: 'setting' },
      { title: '阅读', name: 'setting' },
      { title: '讨论', name: 'setting' },
      { title: '多媒体', name: 'setting' },
      { title: '固定链接', name: 'setting' }
    ]
  }
]

Menu.topbar = [
  {
    title: '0',
    icon: 'admin-comments',
    name: 'comment'
  },
  {
    title: '新建',
    icon: 'admin-plus',
    name: 'post',
    children: [
      { title: '文章', name: 'post' },
      { title: '媒体', name: 'media' },
      { title: '文章', name: 'post/page' },
      { title: '更新', name: 'user' }
    ]
  }
]

Menu.install = function (Vue, options) {
  Vue.sidebarMenus = this.sidebar
  Vue.topbarMenus = this.topbar
}

Vue.use(Menu)

export default Menu
