//Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route files tell server how to respond when user visits or requests data from a URL
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  