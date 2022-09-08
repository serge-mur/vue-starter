<template>
	<div class="catalog">
		<h1>This is an catalog page</h1>
		<div class="products-grid">

			<div
				v-for="product in products"
				:key="product.id"
				class="product-card"
			>
				<img src="../assets/logo.png" alt="product">
				<router-link :to="`/catalog/${product.id}`">
					<div class="name">{{ product.title }}</div>				
				</router-link>
				<div class="price">{{ product.price }}</div>
				<div>
					<button type="button" @click="remove(product.id)">remove</button>
					<button type="button" @click="add(product.id)">add</button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import { mapActions, mapState, mapGetters } from 'vuex'; 
	export default {
		computed: {
			...mapState('products', { products: 'items' }),
			...mapGetters('cart', { inCart: 'has' })
		},
		methods: {
			...mapActions('cart', { add: 'add', remove: 'remove' })
		}
	}
</script>

<style scoped lang="scss">
.products-grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	.product-card {
		.price {
			font-weight: bold;
		}
	}
}
</style>
