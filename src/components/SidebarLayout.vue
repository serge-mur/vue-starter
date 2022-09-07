<template>
    <sidebar class="sidebar">
        <p>sidebar</p>
        <div v-if="routeName=='catalog'">
            catalog sidebar
        </div>
    </sidebar>
</template>
  
<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>
  
<style scoped lang="scss">
</style>
  