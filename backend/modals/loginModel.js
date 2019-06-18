//password check yapmaya çalıştım ama olmadı sanırım
let db = require('../modals/index');

module.exports = {
  checkPassword(data) {
    return new Promise(function(resolve, reject) {
     db.query(`select * from USER_ WHERE USER_.username = '${data.username}' and USER_.password_ = '${data.password_}'`, function(err,rows, fields) {
       if(rows === undefined) {
         reject(new Error("Error rows undefined"));
       }else {
         console.log(rows);
         resolve(rows);
       }
     });
    });
  },
  
};