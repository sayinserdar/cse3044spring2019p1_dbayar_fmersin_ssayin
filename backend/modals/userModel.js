let db = require("../modals/index");

module.exports = {
  getAllUser() {
    return new Promise(function(resolve, reject) {
     db.query("select * from USER_", (err, rows, fields) => {
      if (rows === undefined) {
        reject(new Error("Error rows undefined"));
      } else {
        resolve(rows);
      }
    });
  });
  },
  updateUser(data) {
    return new Promise(function(resolve, reject) {

    db.query(
      `UPDATE USER_ 
    SET
    name = '${data.name}',
    username = ${data.username},
    birthyear = ${data.birthyear},
    gender = '${data.gender}',
    phone_number = ${data.phone_number},
    email = '${data.email}',
    WHERE id = ${data.id}`,
      (err, rows, fields) => {
        console.log(err,rows,fields);
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  });
  },
  deleteUser(id) {
    return new Promise(function(resolve, reject) {
    db.query(
      `DELETE FROM USER_ WHERE USER_.id = ${id}`,
      (err, rows, fields) => {
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  });
  },
  insertUser(data) {
    return new Promise(function(resolve, reject) {
     db.query(
      `INSERT INTO USER_ (name, username, password_,birthyear,gender,phone_number, email) VALUES
      ('${data.name}','${data.username}','${data.password_}','${data.birthyear}','${data.gender}','${data.phone_number}','${data.email}')`,
      (err, rows, fields) => {
        console.log(err,rows,fields);
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  });
  }
};
