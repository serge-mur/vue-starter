<template>
    <div class="product-grid">
        <ProductCard />
    </div>
</template>

<script>
    import ProductCard from '@/components/ProductCard.vue'

    export default {
        components: {
            ProductCard
        }
    }
</script>

<style scoped lang="scss">
    .product-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>