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
		newSetCount(state, payload) {
			if(payload.operation === 'increment') {
				state.count++
			}
			if(payload.operation === 'decrement') {
				if (state.count>1) {
					state.count--				
				}
			}
			if((payload.operation === 'set') && (payload.newCount !== 'undefined')) {
				state.count = parseInt(payload.newCount)
				if (isNaN(state.count) || state.count<1) {
					state.count = 1				
				}
			}
		},
/* 		incrementCount(state) {
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
		}, */
		setStatus(state, status){
			state.status = status;
		}
	},
	actions: {
		incrementCount(store) {
			// store.commit('incrementCount')
			store.commit('newSetCount', {'operation': 'increment'})
		},
		decrementCount(store) {
			// store.commit('decrementCount')
			store.commit('newSetCount', {'operation': 'decrement'})
		},
		setCount(store, newCount) {
			// store.commit('setCount', newCount)
			store.commit('newSetCount', {'operation': 'set', 'newCount': newCount})
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
