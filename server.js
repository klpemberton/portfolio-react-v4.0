const next = require("next");
const express = require("express");
// const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();

	server.get("/", (req, res) => {
		return app.render(req, res, "/", req.query);
	});

	server.get("/about", (req, res) => {
		return app.render(req, res, "/about", req.query);
	});

	server.get("/portfolio", (req, res) => {
		return app.render(req, res, "/portfolio", req.query);
	});

	server.get("/contact", (req, res) => {
		return app.render(req, res, "/contact", { id: req.params.id });
	});

	server.get("*", function(req, res) {
		res.send("/_error", 404);
	});

	server.listen(3000);
});
