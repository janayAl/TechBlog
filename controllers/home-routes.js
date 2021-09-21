const router = require("express").Router();
const sequelize = require("../config/connection");
const { BlogPost, User } = require("../models");
const withAuth = require('../utils/helpers');

// renders homepage
router.get("/", async (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// volunteer-signup form
router.get("/BlogPost, (req, res) => {
    try {
    res.render("blog-post");
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

// Login route
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login-page");
});

//logs org out
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
    try {
        console.log(req.session.user_id)
        // Find the logged in organization based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
        });

        const user = userData.get({ plain: true });

        res.render("user", {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//add route for logout
module.exports = router;