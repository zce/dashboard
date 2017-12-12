import { axios, storage } from '../utils'

const state = {
  /**
   * 客户端会话信息
   * @type {Object}
   * TODO: storage - local or session
   */
  session: storage.get('wedn_net_session_info') || {},

  /**
   * 顶部工具栏
   * @type {Object}
   */
  header: {
    /**
     * 站点名称
     * @type {String}
     */
    name: 'WEDN.NET',

    /**
     * 顶部菜单
     * @type {Array}
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
   * @type {Object}
   */
  sidebar: {
    /**
     * 版权所属
     * @type {String}
     */
    copyright: 'WEDN.NET',

    /**
     * 是否收起边栏
     * @type {Boolean}
     */
    collapse: storage.get('wedn_net_sidebar_collapse'),

    /**
     * 侧边菜单
     * @type {Array}
     */
    menus: [
      {
        title: 'Actions'
      },
      {
        text: 'Dashboard',
        icon: 'meter',
        name: 'dashboard',
        children: [
          { text: 'Home', name: 'dashboard' },
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
          { text: 'All', name: 'posts', params: { type: 'blog' } },
          { text: 'New', name: 'new', params: { type: 'blog' } },
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
          { text: 'Write', name: 'options', params: { type: 'writing' } },
          { text: 'Read', name: 'options', params: { type: 'reading' } },
          { text: 'Discuss', name: 'options', params: { type: 'discussion' } },
          { text: 'Media', name: 'options', params: { type: 'media' } },
          { text: 'Permalink', name: 'options', params: { type: 'permalink' } }
        ]
      }
    ]
  },

  // ==================== DEMO ====================

  /**
   * 计数器
   * @type {Number}
   */
  count: storage.get('wedn_net_demo_count') || 0
}

if (state.session && state.session.token) {
  // init axios headers
  axios.defaults.headers.Authorization = `Bearer ${state.session.token}`
}

export default state
