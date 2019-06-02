var mysql = require('mysql');

 var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CITY_CYCLER'
 });
 
db.connect((err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log('Connection established');
});

db.end((err) => {

});


