const Vue = require("vue/dist/vue.esm.js").default
const VueRouter = require("vue-router").default

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: require("./vue/Root.vue") },
	{ path: "*", component: require("./vue/NotFound.vue") }
]

module.exports = new VueRouter({
	mode: "history",
	routes
})
