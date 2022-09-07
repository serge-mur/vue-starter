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
					<button type="button" @click="">del</button>
					<button type="button" @click="">add</button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'; 
	export default {
		computed: {
			...mapState('products', {products: 'items'})
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
