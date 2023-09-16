const express=require('express')
const { createDetails, updateDetails, deleteDetails, getDetailsById, image } = require('../controller/detail')
const { isAuthenticationUser } = require('../middleware/auth')
const {createValidate}=require('../validation/details')
const router=express.Router()


router.route('/fields').post(isAuthenticationUser,createValidate, createDetails)
router.route('/get/:userId').get(isAuthenticationUser, getDetailsById)
router.route('/update/:userId').put(isAuthenticationUser, updateDetails)
router.route('/delete/:userId').delete(isAuthenticationUser, deleteDetails)

module.exports=router