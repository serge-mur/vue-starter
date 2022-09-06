<template>
    <div class="cart">
		<div>In cart: {{ count }}</div>
		<div>Total: {{ total }}</div>
    </div>
</template>

<script>

    import { mapState, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapState(['count']),
            ...mapGetters(['total'])
        }
    }
</script>

<style scoped lang="scss">
    .product-card {
        .counter-block {
            display: flex;
        }
    }
</style>