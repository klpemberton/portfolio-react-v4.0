const routes = require("next-routes");

module.exports = routes()
	.add("about")
	.add("/")
	.add("portfolio")
	.add("contact")
	.add("404");
