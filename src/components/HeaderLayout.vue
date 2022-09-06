<template>
    <header class="header">
        <h1><img alt="Vue logo" height="30" src="../assets/logo.png"> test vue (learn)</h1>
        <div class="header-block">
            <HeaderNavigation />
            <Cart />            
        </div>
    </header>
</template>
  
<script>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import Cart from '@/components/Cart.vue'
export default {
	components: {
		HeaderNavigation,
        Cart
	}
}
</script>
  
<style scoped lang="scss">
    .header-block {
        display: flex;
        justify-content: space-between;
    }
</style>
  