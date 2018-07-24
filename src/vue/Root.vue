<template>
	<div class="root-container">
		<Hello></Hello>
	</div>
</template>

<script>
	const Hello = require("./components/Hello.vue")

	module.exports = {
		components: {
			Hello
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
		}
	}
</script>

<style scoped>
	.root-container {
	}
</style>
