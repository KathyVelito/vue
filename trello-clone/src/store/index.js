import { createStore } from 'vuex'
import { createLogger } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default createStore({
  plugins: [createLogger()],
  state,
  getters,
  mutations,
  actions
})
