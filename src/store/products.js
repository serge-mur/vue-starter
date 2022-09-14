export default {
	namespaced: true,
	state: {
		items: [
            {"id":100,"title":"Ipnone 200","price":12000,"rest":10},
            {"id":101,"title":"Samsung AAZ8","price":22000,"rest":5},
            {"id":103,"title":"Nokia 3310","price":5000,"rest":2},
            {"id":105,"title":"Huawei ZZ","price":15000,"rest":8}
        ]
	},
	getters: {
		itemsMap(state) {
			let map = {}
			state.items.forEach((pr, i) => {
				map[pr.id.toString()] = i
			})
			return map
		},
		item: (state, getters) => id => state.items[getters.itemsMap[id]]
	},
	mutations: {
		
	},
	actions: {

	}
}