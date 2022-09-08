export default {
	namespaced: true,
	state: {
        products: []
	},
	getters: {
        count(state) {
            return state.products.length
        },
        total(state) {
            return 'xz'
        },
		has: state => id => state.products.some(pr => pr.id === id)
		/* has(state){
			return function(id){
				return state.products.some(pr => pr.id === id);
			}
		} */
	},
	mutations: {
		add(state, id){
			state.products.push({ id, cnt: 1 });
		},
		remove(state, id){
			state.products = state.products.filter(pr => pr.id !== id);
		}
	},
	actions: {
		add(store, id){
			if(!store.getters.has(id)){
				store.commit('add', id);
			}
		},
		remove(store, id){
			if(store.getters.has(id)){
				store.commit('remove', id);
			}
		}
	}
}