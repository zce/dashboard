import { storage } from '../utils'

export default {
  /**
   * 客户端会话信息
   * @type {object}
   */
  session: storage.get('session') ?? {},

  /**
   * 顶部工具栏
   * @type {object}
   */
  header: {
    /**
     * 站点名称
     * @type {string}
     */
    name: import.meta.env.VITE_NAME,

    /**
     * 顶部菜单
     * @type {object[]}
     */
    menus: [
      {
        text: '0',
        icon: 'bubble',
        name: 'comments'
      },
      {
        text: 'New',
        icon: 'plus',
        name: 'new',
        params: { type: 'blog' },
        children: [
          { text: 'Post', name: 'new', params: { type: 'blog' } },
          { text: 'Media', name: 'upload' },
          { text: 'Page', name: 'new', params: { type: 'page' } },
          { text: 'User', name: 'users' }
        ]
      },
      // Component Pages
      {
        text: 'Components',
        icon: 'lab',
        name: 'components',
        children: [
          { text: 'Icons', name: 'components-icons' },
          { text: 'Button', name: 'components-button' },
          { text: 'Table', name: 'components-table' }
        ]
      },
      // Demo Pages
      {
        text: 'Demo',
        icon: 'magic-wand',
        name: 'demo',
        children: [
          { text: 'Data', name: 'demo-data' },
          { text: 'Params', name: 'demo-params', params: { name: '汪磊' } },
          { text: 'Vuex', name: 'demo-vuex' },
          { text: 'I18n', name: 'demo-i18n' },
          { divider: true },
          { text: 'Proxy', name: 'demo-proxy' },
          { text: 'CORS', name: 'demo-cors' },
          { divider: true },
          { text: 'NotFound', path: '/hello-world' }
        ]
      }
    ]
  },

  /**
   * 侧边导航栏
   * @type {object}
   */
  sidebar: {
    /**
     * 版权所属
     * @type {string}
     */
    copyright: import.meta.env.VITE_NAME,

    /**
     * 是否收起边栏
     * @type {boolean}
     */
    collapse: window.innerWidth < 768 || storage.get('sidebar_collapse'),

    /**
     * 侧边菜单
     * @type {object[]}
     */
    menus: [
      {
        title: 'Actions'
      },
      {
        text: 'Dashboard',
        icon: 'meter',
        name: 'home',
        children: [
          { text: 'Home', name: 'home' },
          { text: 'Update', name: 'update' }
        ]
      },
      {
        divider: true
      },
      {
        text: 'Posts',
        icon: 'pushpin',
        name: 'posts',
        params: { type: 'blog' },
        children: [
          { text: 'All posts', name: 'posts', params: { type: 'blog' } },
          { text: 'New post', name: 'new', params: { type: 'blog' } },
          { text: 'Categories', name: 'terms', params: { type: 'blog-category' } },
          { text: 'Tags', name: 'terms', params: { type: 'blog-tag' } }
        ]
      },
      {
        text: 'Pages',
        icon: 'newspaper',
        name: 'posts',
        params: { type: 'page' },
        children: [
          { text: 'All pages', name: 'posts', params: { type: 'page' } },
          { text: 'New page', name: 'new', params: { type: 'page' } }
        ]
      },
      {
        text: 'Media',
        icon: 'images',
        name: 'media',
        children: [
          { text: 'Media library', name: 'media' },
          { text: 'Upload', name: 'upload' }
        ]
      },
      {
        divider: true
      },
      {
        text: 'Users',
        icon: 'users',
        name: 'users',
        children: [
          { text: 'All users', name: 'users' },
          { text: 'Roles', name: 'roles' },
          { text: 'Permissions', name: 'permissions' }
        ]
      },
      {
        text: 'Comments',
        icon: 'bubbles',
        name: 'comments'
      },
      {
        divider: true
      },
      {
        text: 'Themes',
        icon: 'paint-format',
        name: 'themes',
        children: [
          { text: 'Themes', name: 'themes' },
          { text: 'Customization', name: 'customize' },
          { text: 'Widgets', name: 'widgets' },
          { text: 'Navigation', name: 'navigation' }
        ]
      },
      {
        text: 'Plugins',
        icon: 'power-cord',
        name: 'plugins',
        children: [
          { text: 'Installed plugins', name: 'plugins' },
          { text: 'Install plugin', name: 'install', params: { type: 'plugin' } }
        ]
      },
      {
        text: 'Tools',
        icon: 'wrench',
        name: 'tools',
        children: [
          { text: 'Available tools', name: 'tools' },
          { text: 'Import', name: 'import' },
          { text: 'Export', name: 'export' }
        ]
      },
      {
        text: 'Settings',
        icon: 'equalizer',
        name: 'options',
        params: { type: 'general' },
        children: [
          { text: 'General', name: 'options', params: { type: 'general' } },
          { divider: true },
          { text: 'Writing', name: 'options', params: { type: 'writing' } },
          { text: 'Reading', name: 'options', params: { type: 'reading' } },
          { text: 'Discussion', name: 'options', params: { type: 'discussion' } },
          { text: 'Media', name: 'options', params: { type: 'media' } },
          { text: 'Permalink', name: 'options', params: { type: 'permalink' } }
        ]
      }
    ]
  },

  // ==================== DEMO ====================

  /**
   * 计数器
   * @type {number}
   */
  count: storage.get('demo_count') ?? 0
}
