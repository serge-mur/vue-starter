import { createStore } from 'vuex'

export default createStore({
	state: {
		price: 1001,
		count: 1,
		status: 'buy'
	},
	getters: {
		total(state) {
			return state.price * state.count 
		}
	},
	mutations: {
		setCount(state, newCount) {
			state.count = Math.max(1, newCount)
			// Math.min(Math.max(1, newCount), 10)

		},

/* 		newSetCount(state, payload) {
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
		}, */
		setStatus(state, status){
			state.status = status;
		}
	},
	actions: {
		incrementCount(store) {
			// store.commit('newSetCount', {'operation': 'increment'})
			store.commit('setCount', store.state.count + 1)
		},
		decrementCount({ commit, state }) {
			// store.commit('newSetCount', {'operation': 'decrement'})
			commit('setCount', state.count - 1)
		},
		setCount(store, newCount) {
			// store.commit('newSetCount', {'operation': 'set', 'newCount': newCount})
			let count = parseInt(newCount)
			store.commit('setCount', isNaN(count) ? 1 : count)
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
