<template>
    <header class="header">
        <h1><img alt="Vue logo" height="30" src="../assets/logo.png"> test vue (learn)</h1>
        <HeaderNavigation />
    </header>
</template>
  
<script>
import HeaderNavigation from "./HeaderNavigation.vue";
export default {
	components: {
		HeaderNavigation
	}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
  