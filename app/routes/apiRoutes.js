var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (rew, res) {
        // function paramiters go in here
    });

    app.post("/api/clear", function() {
        // function clear goes here
    });
};