var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup,signin,isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Username must be atleast 3 character long").isLength({
      min: 3,
    }),
    check("email", " Invalid Email ").isEmail(),
    check("password","password must be atleast 4 character long").isLength({min:4})
  ],
  signup
);



router.post(
    "/signin",
    [

      check("email", " Invalid Email ").isEmail(),
      check("password","password is required").isLength({min:1})
    ],
    signin
  );

router.get("/signout", signout);
router.get("/testroute",isSignedIn, (req,res)=>{
    res.json(req.auth)
});

module.exports = router;
