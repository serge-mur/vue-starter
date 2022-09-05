<template>
    <div class="home">
        <h1>This is an vuex page</h1>

        <p>counter: {{ count }}</p>
        <p>counter*2: {{ x2 }}</p>

        <!-- <button @click="$store.commit('increment')">count +1</button> -->
        <button @click="increment">count +1</button>

    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['x2'])

        // count() {
        //     return this.$store.state.count
        // },
        // x2() {
        //     return this.$store.getters.x2
        // }

    },
    methods: {
        ...mapActions(['increment'])
    }
}
</script>