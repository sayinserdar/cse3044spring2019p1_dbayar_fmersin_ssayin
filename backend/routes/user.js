let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/userController');
let loginCtrl = require('../controllers/loginController');

router.get('/',userCtrl.listUser);
router.post('/',userCtrl.createUser);
router.put('/',userCtrl.updateUser);
router.delete('/',userCtrl.deleteUser);
router.post('/login',loginCtrl.checkPassword);

module.exports = router;