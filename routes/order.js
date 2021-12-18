var express = require("express");
var router = express.Router();

const {isAdmin,isSignedIn,isAuthenticated} = require("../controllers/auth")
const {getUserById,pushOrderInPurchaseList} = require("../controllers/user")

const {updateStock}=require("../controllers/product")

const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus}=require("../controllers/order")


router.param("userID",getUserById);

router.param("orderID",getOrderById)

router.post("/order/create/:userID",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

router.get("/order/all/:userID",isSignedIn,isAuthenticated,isAdmin,getAllOrders)


router.get("/order/status/:userID",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)

router.put("/order/:orderID/status/:userID",isSignedIn,isAuthenticated,isAdmin,updateStatus)
module.exports=router;