let login = require('../modals/loginModel');

module.exports = {
  checkPassword(req, res) {
    event.checkPassword().then((data) => {
      res.send(data);
    });
  },
  

};