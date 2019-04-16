



// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render('index');
  });

  app.get("/search", function (req, res) {
    res.render('search');
  });
};


