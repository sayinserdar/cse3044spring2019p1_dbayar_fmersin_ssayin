//password check yapmaya çalıştım ama olmadı sanırım
let db = require('../modals/index');

module.exports = {
  checkPassword(data) {
    return db.any('select * from EVENT_ WHERE EVENT_.username = ${data.username} and EVENT_.password_ = ${data.password_}');
  },
  
};