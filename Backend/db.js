import mysql from "mysql2";



 const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SalamOrxan1.",
    database:"intranet",
    insecureAuth : true

})


db.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});


export default db;