<template>
	<div v-if="hasProduct" class="product">	
		<h1>{{ product.title }}</h1>

		<div>price: {{ product.price }}</div>
		<br>
		<div>
			<router-link :to="{ name: 'catalog'}">return to catalog</router-link>
		</div>
	</div>
	<E404 v-else title="Product not found"></E404>
</template>

<script>
    import E404 from '@/components/E404.vue'
	import { mapGetters } from 'vuex'

    export default {
        components: {
            E404
        },
		computed: {
			...mapGetters('products', { productProxy: 'item'}),
			id() {
				return this.$route.params.id
			},
			product() {
				return this.productProxy(this.id)
			},
			hasProduct() {
				return this.product !== undefined
			}
		}
    }
</script>