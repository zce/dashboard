/**
 * Initial state
 * @type {Object}
 */
const state = {
  sidebar: [
    {
      title: '仪表盘',
      icon: 'dashboard',
      name: 'dashboard',
      children: [
        { title: '首页', name: 'dashboard' },
        { title: '更新', name: 'update' }
      ]
    },
    {
      divider: true
    },
    {
      title: '文章',
      icon: 'admin-post',
      name: 'posts',
      params: { type: 'article' },
      children: [
        { title: '所有文章', name: 'posts', params: { type: 'article' } },
        { title: '写文章', name: 'posts', params: { type: 'article' } },
        { title: '分类目录', name: 'posts', params: { type: 'article' } },
        { title: '标签', name: 'posts', params: { type: 'article' } }
      ]
    },
    {
      title: '页面',
      icon: 'admin-page',
      name: 'posts',
      params: { type: 'page' },
      children: [
        { title: '所有页面', name: 'posts', params: { type: 'page' } },
        { title: '新建页面', name: 'posts', params: { type: 'page' } }
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
      divider: true
    },
    {
      title: '用户',
      icon: 'admin-users',
      name: 'users',
      children: [
        { title: '所有用户', name: 'users' },
        { title: '添加用户', name: 'users' }
      ]
    },
    {
      title: '评论',
      icon: 'admin-comments',
      name: 'comments'
    },
    {
      divider: true
    },
    {
      title: '外观',
      icon: 'admin-appearance',
      name: 'themes',
      children: [
        { title: '主题', name: 'themes' },
        { title: '自定义', name: 'themes' },
        { title: '小工具', name: 'themes' },
        { title: '菜单', name: 'themes' }
      ]
    },
    {
      title: '插件',
      icon: 'admin-plugins',
      name: 'plugins',
      children: [
        { title: '已安装插件', name: 'plugins' },
        { title: '安装插件', name: 'plugins' }
      ]
    },
    {
      title: '工具',
      icon: 'admin-tools',
      name: 'tools',
      children: [
        { title: '可用工具', name: 'tools' },
        { title: '导入', name: 'tools' },
        { title: '导出', name: 'tools' }
      ]
    },
    {
      title: '设置',
      icon: 'admin-settings',
      name: 'options',
      children: [
        { title: '常规', name: 'options' },
        { title: '撰写', name: 'options' },
        { title: '阅读', name: 'options' },
        { title: '讨论', name: 'options' },
        { title: '多媒体', name: 'options' },
        { title: '固定链接', name: 'options' }
      ]
    }
  ],
  topbar: [
    {
      title: '0',
      icon: 'admin-comments',
      name: 'comments'
    },
    {
      title: '新建',
      icon: 'plus',
      name: 'posts',
      children: [
        { title: '文章', name: 'posts', params: { type: 'article' } },
        { title: '媒体', name: 'media' },
        { title: '页面', name: 'posts', params: { type: 'page' } },
        { title: '更新', name: 'users' }
      ]
    },
    {
      title: 'Demo',
      icon: 'welcome-view-site',
      name: 'demo',
      children: [
        { title: 'Components', name: 'components' },
        { title: 'Vuex', name: 'vuex' },
        { title: 'Parameter', name: 'parameter', params: { name: '汪磊' } },
        { title: 'Proxy', name: 'proxy' }
      ]
    }
  ]
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  sidebar: state => state.sidebar,
  topbar: state => state.topbar
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {

}

/**
 * Actions
 * @type {Object}
 */
const actions = {

}

// Export module
export default { state, getters, mutations, actions }
