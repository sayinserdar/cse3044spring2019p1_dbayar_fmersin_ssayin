let db = require('../modals/index');

module.exports = {
   getAllEvent(result) {
     db.query('select * from EVENT_', (err,results) => {
      console.log(results);
    })
  },
  updateEvent(data) {
    return db.any(`UPDATE EVENT_ 
    SET
    event_name = ${data.event_name},
    vote = ${data.vote},
    description = ${data.description},
    map_id = ${data.map_id},
    event_comment = ${data.event_comment}
    WHERE id = ${data.id}`);
  },
  deleteEvent(id) {
    return db.any(`DELETE FROM EVENT_ WHERE EVENT_.id = ${id}`);
  },
  insertEvent(data) {
    return db.query(`INSERT INTO EVENT_ (event_name,vote,description,map_id,event_comment) VALUES('${data.event_name}', '${data.vote}', '${data.description}','${data.map_id}','${data.event_comment}')`);
  },
};
