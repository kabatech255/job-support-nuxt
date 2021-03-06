import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { length } from '@/config/validationRule/util'

export default (_context: Context, inject: Inject) => {
  inject('formCounter', length)
}
