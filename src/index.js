const Vue = require("vue/dist/vue.esm.js").default

const store = require("./store.js")
const router = require("./router.js")

new Vue({
	store,
	router
}).$mount("#root")
