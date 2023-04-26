// npm start trzeba zeby uruchomiło "start" z package.json

const mongo = require("mongodb") ;

const client = new mongo.MongoClient("mongodb://127.0.0.1:27017") ;

(async()=> {


    await client.connect();
    console.log('baza polaczona')
    const db = client.db("megak_music")

    const songs = db.collection('songs').find()
    // // const songs = db.collection('songs').find({}).toArray();
    console.log(await songs.next())
    // const oneSong = db
    // .collection("songs")
    // .findOne({artysta : "filemon"});
    // console.log(oneSong);

    

    await client.close()
})();











// ----------------------

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
