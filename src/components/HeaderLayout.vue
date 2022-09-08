<template>
    <header class="header">
        <h1><img alt="Vue logo" height="30" src="../assets/logo.png"> test vue market</h1>
        <div class="header-block">
            <HeaderNavigation />            
            <div>
                <div>In Cart: {{ count }}</div>
                <div>Total: {{ total }}</div>                
            </div>
        </div>
    </header>
</template>
  
<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import { mapGetters } from "vuex";
export default {
	components: {
		HeaderNavigation
	},
    computed: {
        ...mapGetters('cart', {count: 'count', total: 'total'})
    }
}
</script>
  
<style scoped lang="scss">
    .header-block {
        display: flex;
        justify-content: space-between;
    }
</style>
  