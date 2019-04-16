

var express = require("express");

var router = express.Router();

var db = require("../models");

router.post("/api/posts", function (req, res) {
    db.Post.create({
        body: req.body.body,
        imgLink: req.body.imgLink,
        location: req.body.location,
        season: req.body.season
    }, function (result) {
        console.log(result, "Post created")
    })
})

router.get("/api/posts/location/:location", function (req, res) {
    db.Post.findAll({
        where: {
            location: req.params.location
        }
    }).then(function (dbPost) {
        console.log(dbPost.length);
        var hbs = {
            table: dbPost,
            test: "Something"
        }
        res.render("search2", hbs)
    })
})

router.get("/api/posts/season/:season", function (req, res) {
    db.Post.findAll({
        where: {
            season: req.params.season
        }
    }).then(function (dbPost) {
        var hbs = {
            table: dbPost
        }
        res.render("search", hbs)
    })
})


module.exports = router;