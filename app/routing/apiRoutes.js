var friends = require("../data/friends");
// console.log(friends[1]);

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    console.log(friends);
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
  });
};
