/* orderCtrl düzenlenecek*/
let express = require('express');
let router = express.Router();
let eventCtrl = require('../controllers/eventController');

router.get('/',eventCtrl.listEvent);
router.post('/',eventCtrl.createEvent);
router.put('/',eventCtrl.updateEvent);
router.delete('/',eventCtrl.deleteEvent);

module.exports = router;