let event = require('../modals/eventModel');

module.exports = {
  listEvent(req, res) {
    event.getAllEvent().then((data) => {
      res.send(data);
    });
  },
  createEvent(req, res) {
    event.insertEvent(req.body).then((data) => {
      res.send(data);
    });
  },
  deleteEvent(req, res) {
    event.deleteEvent().then((data) => {
      res.send(data);
    });
  },
  updateEvent(req, res) {
    event.updateEvent().then((data) => {
      res.send(data);
    });
  }

};
