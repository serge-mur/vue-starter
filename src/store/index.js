import { createStore } from 'vuex'

export default createStore({
	state: {
		count: 1
	},
	getters: {
		// count(state) {
		// 	return state.count
		// },
		// count: state => state.count,
		x2(state) {
			return state.count * 2
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	actions: {
		increment(store) {
			store.commit('increment')
		}
	},
	modules: {
	}
})
