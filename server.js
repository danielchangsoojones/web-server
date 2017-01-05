var express = require("express");
var app = express();
var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("about us!");
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
	console.log("express server started");
});