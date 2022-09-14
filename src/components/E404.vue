<template>
    <div class="error404">
        <h1>{{ title }}</h1>
        <p> <router-link :to="{ name: 'home' }">to main page</router-link></p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Page not found"
            }
        }
    }
</script>