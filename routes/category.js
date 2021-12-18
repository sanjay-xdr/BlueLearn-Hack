const express=require("express");
const router=express.Router()

const {isAuthenticated,isAdmin,isSignedIn}=require("../controllers/auth")
const {getCategoryById,createCategory,getAllCategory,getCategory,updateCategory,removeCategory}=require("../controllers/category")
const {getUserById}=require("../controllers/user")


//params
router.param("userID",getUserById);
router.param("categoryID",getCategoryById)


//actual routes
//create
router.post("/category/create/:userID",isSignedIn,isAuthenticated,isAdmin,createCategory)

//read
router.get("/category/:categoryID",getCategory);
router.get("/categories",getAllCategory);
//update
router.put("/category/:categoryID/:userID",isSignedIn,isAuthenticated,isAdmin,updateCategory)
//delete
router.delete("/category/:categoryID/:userID",isSignedIn,isAuthenticated,isAdmin,removeCategory)



module.exports=router;