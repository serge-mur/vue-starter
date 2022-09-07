<template>
    <nav>
        <router-link :to="{ name: 'home'}">Home</router-link> |
        <router-link :to="{ name: 'about'}">About</router-link> |
        <router-link :to="{ name: 'catalog'}">Catalog</router-link> |
        <router-link :to="{ name: 'order'}">[Order]</router-link>
    </nav>
</template>
  
<script>

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
    padding: 10px 0;
    a {
        font-weight: bold;
        text-decoration: none;
        &.router-link-exact-active {
            text-decoration: underline;
        }
    }
}
</style>