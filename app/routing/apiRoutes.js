var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Create New Reservation - takes in JSON input
  app.post("/api/new", function(req, res) {
    var newFriend= req.body;
  });
};
