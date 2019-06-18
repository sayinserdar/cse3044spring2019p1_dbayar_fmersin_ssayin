let user = require('../modals/userModel');

  exports.listUser = async function(req, res) {
    try {
      var data = await user.getAllUser();
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };
  exports.createUser = async function(req, res) {
    try {
      var data = await user.insertUser(req.body);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };
  exports.deleteUser = async function(req, res) {
    try {
      var data = await user.deleteUser(req.body.id);
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };
  exports.updateUser = async function (req, res) {
    try {
      var data = await uuser.updateUser(req.body.id)
      res.send(data);
    } catch (err) {
      console.log(err);
    }
  };