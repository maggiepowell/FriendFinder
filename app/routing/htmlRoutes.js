var path = require("path");

module.exports = function(app) {
// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
//    * A default, catch-all route that leads to `home.html` which displays the home page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
};