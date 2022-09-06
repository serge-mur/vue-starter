<template>
    <div class="product-card">
        <img src="../assets/logo.png" alt="product">
        <div class="price">{{ price }}</div>
        <div class="counter-block">
            <button type="button" @click="decrementCount">-</button>
            <input type="text" @change="onInput" :value="count">
            <button type="button" @click="incrementCount">+</button>
        </div>
        <button type="button" @click="setStatus">{{ status }}</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState(['price', 'count', 'status'])
        },
        methods: {
            ...mapActions(['incrementCount', 'decrementCount', 'setCount', 'setStatus']),
            onInput(e){
				this.setCount(e.target.value);
			}
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