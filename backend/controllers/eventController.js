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
      var data = await event.insertEvent(req.body);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
    
  },
  async deleteEvent(req, res) {
    //  Id needs to be passed to this function
    try {
      let data  = await event.deleteEvent();
      res.send(data);
    } catch (err) {
      console.log(err);
    } 
  },
  async updateEvent(req, res) {
       //  Id needs to be passed to this function
       try {
       let data = await event.updateEvent();
        res.send(data);
      } catch (err) {
        console.log(err);
      } 
    
  }
};
