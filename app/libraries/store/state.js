import { local as storage } from '../utils/storage'

export default {
  /**
   * 站点名称
   * @type {String}
   */
  name: 'WEDN.NET',

  /**
   * 版权所属
   * @type {String}
   */
  copyright: 'WEDN.NET',

  /**
   * 是否收起边栏
   * @type {Boolean}
   */
  sidebar_collapse: storage.get('wedn_net_sidebar_collapse') || false,

  // ==================== DEMO ====================

  /**
   * 计数器
   * @type {Number}
   */
  count: storage.get('wedn_net_demo_count') || 0
}
