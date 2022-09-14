<template>
	<div class="order">
		<h1>This is an order page</h1>
		<table>
			<tr>
				<th>title</th>
				<th>price</th>
				<th>cnt</th>
				<th>total</th>
				<th>actions</th>
			</tr>
			<tr v-for="product in products" :key="product.id">
				<th>{{ product.title}}</th>
				<th>{{ product.price}}</th>
				<th>{{ product.cnt }}</th>
				<th>{{ product.price * product.cnt }}</th>
				<th>
					<button @click="setCount({ id: product.id, cnt: product.cnt - 1 })">-</button>
					<button @click="setCount({ id: product.id, cnt: product.cnt + 1 })">+</button>
					<button @click="remove(product.id)">remove</button>
				</th>
			</tr>
		</table>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters('cart', { products: 'productDetailed' })
	},
	methods: {
		...mapActions('cart', ['setCount', 'remove'])
	}
}
</script>