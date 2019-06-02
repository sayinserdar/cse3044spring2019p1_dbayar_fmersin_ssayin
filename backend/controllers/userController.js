let user = require('../modals/userModel');


  exports.listUser = function(req, res) {
    user.getAllUser().then((data) => {
    res.send(data);
    });
  };
  exports.createUser = function(req, res) {
    
    user.insertUser(req.body).then((data) => {
      console.log(req.body);
      res.send(data);
    });
  };
  exports.deleteUser =  function(req, res) {
    console.log(req.body.id);
    user.deleteUser(req.body.id)
      .then((data) => {
      res.send(data);

    })
      .catch((err) => {
        console.log(err);
      });
  };
  exports.updateUser = function (req, res) {
    user.updateUser().then((data) => {
      res.send(data);
    });
  };