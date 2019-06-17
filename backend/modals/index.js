var mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'citycyclers',
  insecureAuth : true
 });
 
db.connect((err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('Connection established');
});

module.exports = db;
