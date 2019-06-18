let login = require('../modals/loginModel');

module.exports = {
 async checkPassword(req, res) {
    try {
      let data = await login.checkPassword(req.body);
      res.send(data);
    }catch(err) {
      res.send(err);
    }
  },
  

};