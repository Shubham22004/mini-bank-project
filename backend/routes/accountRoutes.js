const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

router.get("/", (req,res)=>{
  res.send("API hittings properly");
})
router.post('/createAccount', controller.createAccount);
router.get('/getAccounts', controller.getAllAccounts);
router.post('/deposit', controller.deposit);
router.post('/withdraw', controller.withdraw);
router.post('/transfer', controller.transfer);


module.exports = router;