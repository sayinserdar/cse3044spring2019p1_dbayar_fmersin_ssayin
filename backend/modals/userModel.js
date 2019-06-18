let db = require("../modals/index");

module.exports = {
  getAllUser() {
    return db.any("select * from USER_", (err, rows, fields) => {
      if (rows === undefined) {
        reject(new Error("Error rows undefined"));
      } else {
        resolve(rows);
      }
    });
  },
  updateUser(data) {
    return db.any(
      `UPDATE USER_ 
    SET
    name = ${data.name},
    username = ${data.username},
    password_ = ${data.password_},
    birthdate = ${data.birthdate},
    gender = ${data.gender},
    phone_number = ${data.phonenumber},
    email = ${data.email},
    WHERE id = ${data.id}`,
      (err, rows, fields) => {
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  },
  deleteUser(id) {
    return db.any(
      `DELETE FROM USER_ WHERE USER_.id = ${id}`,
      (err, rows, fields) => {
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  },
  insertUser(data) {
    return db.any(
      `INSERT INTO USER_ (name, username, password_,bithdate,gender,phone_number, email) VALUES('${
        data.name
      }', '${data.username}', '${data.password_}','${data.birthdate}',,'${
        data.gender
      }','${data.phone_number}','${data.email}')`,
      (err, rows, fields) => {
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      }
    );
  }
};
