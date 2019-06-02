/* komple bakılacak*/
let express = require('express');
let router = express.Router();
let homeCtrl = require('../controllers/homepageController');

router.all('/', function (req, res) {
  res.send('smiley at Home');
});
router.get('/showAllEvent', homeCtrl.getAllEvent);


module.exports = router;