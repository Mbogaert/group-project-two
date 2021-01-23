const router = require("express").Router();
// const sequelize = require("../config/connection");
// const withAuth = require("../utils/auth");

router.get("/add-dog", (req, res) => {
    res.render('add-dog');
    // to be updated once we have models made
});

// router.get("/results", (req, res) => {
//     res.render('results');
//  // to be updated
// });

module.exports = router;