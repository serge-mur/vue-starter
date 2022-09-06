import { createStore } from 'vuex'

export default createStore({
	state: {
		price: 1001,
		count: 2,
		status: 'buy'
	},
	getters: {
		total(state) {
			return state.price * state.count 
		}
	},
	mutations: {
		incrementCount(state) {
			state.count++
		},
		decrementCount(state) {
			if (state.count>1) {
				state.count--				
			}
		},
		setCount(state, newCount) {
			state.count = parseInt(newCount)
			if (isNaN(state.count) || state.count<1) {
				state.count = 1				
			}
		},
		setStatus(state, status){
			state.status = status;
		}
	},
	actions: {
		incrementCount(store) {
			store.commit('incrementCount')
		},
		decrementCount(store) {
			store.commit('decrementCount')
		},
		setCount(store, newCount) {
			store.commit('setCount', newCount)
		},
		setStatus(store, status) {
			setTimeout(() => {
				store.commit('setStatus', 'done');
			}, 500);
		}
	},
	modules: {
	}
})
