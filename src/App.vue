<template>
	<HeaderLayout />
	<SidebarLayout />
	<MainLayout />
	<FooterLayout />
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import SidebarLayout from '@/components/SidebarLayout.vue'
import MainLayout from '@/components/MainLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
export default {
	components: {
		HeaderLayout,
		SidebarLayout,
		MainLayout,
		FooterLayout
	}
}
</script>

<style lang="scss">
#app {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	line-height: 1;
	color: #000000;
	display: grid;
    grid-gap: 10px;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	.header {
		grid-area: header;
	}
	.sidebar {
		grid-area: sidebar;
	}
	.main {
		grid-area: main;
	}
	.footer {
		grid-area: footer;
	}
	>* {
		border: 1px solid lightgray;
		padding: 10px;
	}
	@media (max-width: 600px) {
		grid-template-areas:
        "header"
        "sidebar"
        "main"
        "footer";
	}
}
</style>
