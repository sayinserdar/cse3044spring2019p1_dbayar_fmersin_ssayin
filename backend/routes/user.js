let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/userController');

router.get('/',userCtrl.listUser);
router.post('/',userCtrl.createUser);
router.put('/',userCtrl.updateUser);
router.delete('/',userCtrl.deleteUser);

module.exports = router;