const express = require("express");
const router = express.Router();
const { profile, update ,getPartner,getAllUser} = require("../controller/user");
const { isUserAuthenticated } = require("../middlewares/auth");

const CLIENT_URL = "https://daodao-f2e-pi.vercel.app";

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

router.get("/", getPartner);

router.get("/:id", getPartner);

router.put("/:id", update);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });

module.exports = router;