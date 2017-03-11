/**
 * Initial state
 * @type {Object}
 */
const state = {
  /**
   * 顶部菜单
   * @type {Array}
   */
  toolbar: [
    {
      text: '0',
      icon: 'bubble',
      name: 'comments'
    },
    {
      text: '新建',
      icon: 'plus',
      name: 'posts',
      children: [
        { text: '文章', name: 'posts', params: { type: 'article' } },
        { text: '媒体', name: 'media' },
        { text: '页面', name: 'posts', params: { type: 'page' } },
        { text: '更新', name: 'users' }
      ]
    },
    // Component Pages
    {
      text: '组件',
      icon: 'lab',
      name: 'components',
      children: [
        { text: 'Icons', name: 'components-icons' },
        { text: 'Button', name: 'components-button' }
      ]
    },
    // Demo Pages
    {
      text: '演示',
      icon: 'magic-wand',
      name: 'demo',
      children: [
        { text: 'Data', name: 'demo-data' },
        { text: 'Vuex', name: 'demo-vuex' },
        { text: 'Parameter', name: 'demo-parameters', params: { name: '汪磊' } },
        { text: 'Proxy', name: 'demo-proxy' },
        { divider: true },
        { text: 'NotFound', path: 'hello-world' }
      ]
    }
  ],

  /**
   * 侧边菜单
   * @type {Array}
   */
  sidebar: [
    {
      title: 'Actions'
    },
    {
      text: '仪表盘',
      icon: 'meter',
      name: 'dashboard',
      children: [
        { text: '首页', name: 'dashboard' },
        { text: '更新', name: 'update' }
      ]
    },
    {
      divider: true
    },
    {
      text: '文章',
      icon: 'pushpin',
      name: 'posts',
      params: { type: 'article' },
      children: [
        { text: '所有文章', name: 'posts', params: { type: 'article' } },
        { text: '写文章', name: 'posts', params: { type: 'article' } },
        { text: '分类目录', name: 'posts', params: { type: 'article' } },
        { text: '标签', name: 'posts', params: { type: 'article' } }
      ]
    },
    {
      text: '页面',
      icon: 'newspaper',
      name: 'posts',
      params: { type: 'page' },
      children: [
        { text: '所有页面', name: 'posts', params: { type: 'page' } },
        { text: '新建页面', name: 'posts', params: { type: 'page' } }
      ]
    },
    {
      text: '多媒体',
      icon: 'images',
      name: 'media',
      children: [
        { text: '媒体库', name: 'media' },
        { text: '添加', name: 'media' }
      ]
    },
    {
      divider: true
    },
    {
      text: '用户',
      icon: 'users',
      name: 'users',
      children: [
        { text: '所有用户', name: 'users' },
        { text: '添加用户', name: 'users' }
      ]
    },
    {
      text: '评论',
      icon: 'bubbles',
      name: 'comments'
    },
    {
      divider: true
    },
    {
      text: '外观',
      icon: 'paint-format',
      name: 'themes',
      children: [
        { text: '主题', name: 'themes' },
        { text: '自定义', name: 'themes' },
        { text: '小工具', name: 'themes' },
        { text: '菜单', name: 'themes' }
      ]
    },
    {
      text: '插件',
      icon: 'power-cord',
      name: 'plugins',
      children: [
        { text: '已安装插件', name: 'plugins' },
        { text: '安装插件', name: 'plugins' }
      ]
    },
    {
      text: '工具',
      icon: 'wrench',
      name: 'tools',
      children: [
        { text: '可用工具', name: 'tools' },
        { text: '导入', name: 'tools' },
        { text: '导出', name: 'tools' }
      ]
    },
    {
      text: '设置',
      icon: 'equalizer',
      name: 'options',
      children: [
        { text: '常规', name: 'options' },
        { divider: true },
        { text: '撰写', name: 'options' },
        { text: '阅读', name: 'options' },
        { text: '讨论', name: 'options' },
        { text: '多媒体', name: 'options' },
        { text: '固定链接', name: 'options' }
      ]
    }
  ]
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  /**
   * 获取顶部菜单
   * @param  {Object} state Vuex状态对象
   * @return {Array}        菜单项数组
   */
  toolbar: state => state.toolbar,

  /**
   * 获取侧边菜单
   * @param  {Object} state Vuex状态对象
   * @return {Array}        菜单项数组
   */
  sidebar: state => state.sidebar
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
