// const mysql = require('mysql2/promise');

// const poolz = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'todo_data',
//     // decimalNumber: true ,
//     namedPlaceholders: true,
    
// })

// module.exports = {
//     poolz,
// }


// (async()=> {
   
//     await poolz.end();


// })();

//--------- w wersji mongo tego wyzej oczywiscie nie bedzie

const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");

client.connect();

const db = client.db("mega_todo");

const todoses = db.collection('to_do') // stała-zmienna zeby ciagle nie odwoływac sie 'db.collection' i tam find() itp

module.exports ={
    db,
    todoses,
    client
}