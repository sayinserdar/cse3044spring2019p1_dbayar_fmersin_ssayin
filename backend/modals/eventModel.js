let db = require("../modals/index");

module.exports = {
  getAllEvent() {
    return new Promise(function(resolve, reject) {
      db.query("select * from EVENT_", (err, rows, fields) => {
        if (rows === undefined) {
          reject(new Error("Error rows undefined"));
        } else {
          resolve(rows);
        }
      });
    });
  },
  updateEvent(data) {
    return new Promise(function(resolve, reject) {
      console.log(data);
      db.query(
        `UPDATE EVENT_ SET event_name = '${data.event_name}',vote = ${data.vote},description = '${data.description}',map_id = ${data.map_id},event_comment = '${data.event_comment}' WHERE id = ${data.id}`,
        (err, rows, fields) => {
          console.log(err,rows, fields)
          if (rows === undefined) {
            reject(new Error("Error rows undefined"));
          } else {
            resolve(rows);
          }
        }
      );
    });
  },
  deleteEvent(id) {
    return new Promise(function(resolve, reject) {
    db.query(`DELETE FROM EVENT_ WHERE EVENT_.id = ${id}`,(err, rows, fields) => {
      if (rows === undefined) {
        reject(new Error("Error rows undefined"));
      } else {
        resolve(rows);
      }
    });
  });
  },
  insertEvent(data) {
    return new Promise(function(resolve, reject) {
     db.query(
      `INSERT INTO EVENT_ (event_name,vote,description,map_id,event_comment) VALUES('${
        data.event_name
      }', '${data.vote}', '${data.description}','${data.map_id}','${
        data.event_comment
      }')`,
      (err, rows, fields) => {
        console.log(err,rows,fields)
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
