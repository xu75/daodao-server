const express = require("express");
const router = express.Router();
const { profile, update } = require("../controller/user.controller");
const { isUserAuthenticated } = require("../middlewares/auth");


const CLIENT_URL = "http://localhost:5000";

router.get("/data", (req, res) => {
    res.json(req);
});

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/current_user", (req, res) => {
    res.status(200).json({
        error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
  });

router.post("/update", update);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

module.exports = router;