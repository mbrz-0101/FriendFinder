const path = require("path");
const fs = require("fs");

const friendsArray = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
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

  app.get('/api/friends', function (req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  });

  app.post('/api/friends', function (req, res) {
    var newFriend = req.body;
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var current = 50;
    var index = 0;

    for (var i = 0; i < friendsArray.length; i++) {
      var test = newFriend.scores.reduce(reducer) - friendsArray[i].scores.reduce(reducer);
      if (test < 0) {
        test = test * -1;
      }
      if (test < current) {
        current = test;
        index = i;
      }
    }

    var bestFriend = friendsArray[index];
    res.send(JSON.stringify(bestFriend));
    friendsArray.push(req.body);
    fs.writeFile('./app/data/friends.js', `const friendsArray = ${JSON.stringify(friendsArray)}; \nmodule.exports = friendsArray`, (err) => {
      if (err) throw err;
    });
  });
};
