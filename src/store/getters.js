/**
 * @type {import('vuex/types').GetterTree<typeof import('./state').default>}
 */
const getters = {
  /**
   * 获取页面标题
   */
  title: state => state.title,

  /**
   * 获取客户端会话信息
   */
  session: state => state.session,

  /**
   * 获取顶部工具栏
   */
  header: state => state.header,

  /**
   * 获取侧边导航栏
   */
  sidebar: state => state.sidebar,

  // ==================== DEMO ====================

  /**
   * 获取计数器值
   */
  count: state => state.count
}

export default getters
