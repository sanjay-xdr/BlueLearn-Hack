var express = require("express");
var router = express.Router();

const {isAdmin,isSignedIn,isAuthenticated} = require("../controllers/auth")
const {getProductById,createProduct,getProduct,photo,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories} = require("../controllers/product")
const {getUserById} = require("../controllers/user")


router.param("userID",getUserById)
router.param("productID",getProductById)

router.post("/product/create/:userID",isSignedIn,isAuthenticated,isAdmin,createProduct)

router.get("/product/:productID",getProduct)
router.get("/product/photo/:productID",photo)

router.delete("/product/:productID/:userID",isSignedIn,isAuthenticated,isAdmin,deleteProduct)

router.put("/product/:productID/:userID",isSignedIn,isAuthenticated,isAdmin,updateProduct)


router.get("/products",getAllProducts)

router.get("products/categories",getAllUniqueCategories)
module.exports=router;