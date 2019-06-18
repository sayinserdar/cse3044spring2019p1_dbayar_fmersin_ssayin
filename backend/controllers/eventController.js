let event = require("../modals/eventModel");

module.exports = {
  async listEvent(req, res) {
    try {
      var data = await event.getAllEvent();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  },
  async createEvent(req, res) {
    try {
      console.log("huh",req.body);
      var data = await event.insertEvent(req.body);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
    
  },
  async deleteEvent(req, res) {
    try {
      let data  = await event.deleteEvent(req.body.id);
      res.send(data);
    } catch (err) {
      console.log(err);
    } 
  },
  async updateEvent(req, res) {
       try {
       let data = await event.updateEvent(req.body);
        res.send(data);
      } catch (err) {
        console.log(err);
      } 
    
  }
};
