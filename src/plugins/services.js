import {
  OptionService,
  TokenService,
  UserService,
  TermService,
  PostService,
  CommentService
} from '../services'

export default Vue => {
  // alias
  const services = {
    option: OptionService,
    token: TokenService,
    user: UserService,
    term: TermService,
    post: PostService,
    comment: CommentService
  }

  // mount the services to Vue
  Object.defineProperties(Vue, {
    services: { get: () => services }
  })

  // mount the services to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $services: { get: () => services }
  })
}
