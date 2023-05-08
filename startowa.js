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




// Krótka instrukcja dla tych którzy chcą to ogarniać bez myślenia:
// 1. https://www.mongodb.com/try/download/community - pobierzcie
// 2. https://www.mongodb.com/try/download/shell - pobierzcie
// 3. Zainstalujcie mongodb z odznaczeniem tego serwisu jak kuba pokazywał na filmie, a tego mongo shella wrzućcie gdzie tam chcecie, ja wrzuciłem do folderu MongoDB tam gdzie się zainstalował.
// 4. (prawdopodobnie opcjonalny) Zgodnie z tym linkiem https://www.mongodb.com/docs/mongodb-shell/install/ zróbcie to co wam poleca w punkcie 4. czyli dodajcie sobie w tym systemie ścieżki do mongod.exe i mongosh.exe oczywiście bez nich, czyli tam np. "C:\Program Files\MongoDB\Server\6.0\bin" dla mongod i "C:\Program Files\MongoDB\mongosh\bin" dla mongosh.
// 5. Teraz utwórzcie sobie na dysku C folder "data" i w nim podfolder "db".
// 6. Od tej chwili możecie odpalić mongod.exe i to startuje serwer. A po odpaleniu mongosh.exe macie nakładkę jakby do sterowania tym serwerem.
// 7. Na koniec możecie sobie dodać do WebStorma skrypty na odpalanie tego:
// "start-mongod": "cd /d C:\\Program Files\\MongoDB\\Server\\6.0\\bin && mongod.exe",
// "start-mongosh": "cd /d C:\\Program Files\\MongoDB\\mongosh\\bin && mongosh.exe"
// Oczywiście ścieżki sobie sami tam ustawcie albo zainstalujcie jak ja to kopiujcie