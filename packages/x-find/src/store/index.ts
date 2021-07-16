import Vue from 'vue'
import Vuex from 'vuex'
import modules from './moudels'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules
})
