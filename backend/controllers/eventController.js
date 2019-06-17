let event = require('../modals/eventModel');

module.exports = {
  async listEvent(req, res) {
    try {
   var data = await event.getAllEvent();
   res.send(data);
  } catch(err) {
    console.log(err);
  }
  },
  createEvent(req, res) {
    event.insertEvent(req.body);
  },
  deleteEvent(req, res) {
    event.deleteEvent();
  },
  updateEvent(req, res) {
    event.updateEvent();
  }
};
