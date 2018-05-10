const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // app.get("/tables", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tables.html"));
  // });

  // app.get("/reserve", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
  // });

  // // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
  // });

  app.get('/api/friends', function(req, res) {
    res.send(JSON.stringify(path.join(__dirname, "../public/data/friends.js")));
  });
  
  app.post('/api/friends', function(req, res) {

  });
};
