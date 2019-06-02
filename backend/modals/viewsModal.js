let db = require('../modals/index');

module.exports = {
  getAllEvent(req, res) {
    return db.any('SELECT * FROM EVENT_');
  },

};