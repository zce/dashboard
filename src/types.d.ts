import Vue from 'vue'
import { AxiosInstance } from 'axios'
import { NProgress } from 'nprogress'
import {
  OptionService,
  TokenService,
  UserService,
  TermService,
  PostService,
  CommentService
} from './services'

interface Services {
  option: typeof OptionService
  token: typeof TokenService
  user: typeof UserService
  term: typeof TermService
  post: typeof PostService
  comment: typeof CommentService
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $nprogress: NProgress
    $services: Services
    $title: string
  }
}
