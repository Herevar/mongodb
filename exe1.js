

const mongo = require("mongodb");

const client = new mongo.MongoClient("mongodb://127.0.0.1:27017");

(async()=>{

    await client.connect();

    const db = client.db("meagk_music2");

    // await db.collection("songs2")

    const songs = [
        {
        artist : 'debil' ,
        track : "chujowy",
    },
    {
        artist : 'debil_drugi' ,
        track : "chujowy_bardziej",
    }
    ]
    // await db.collection("songs2").insertMany(songs);

    // for await (const song of db.collection("songs2").find()){
    //     console.log(song)
    // }


    for await(const song of db.collection('songs2').find({
        artist : 'debil',
        })){
            console.log(song)
        }

    const email = {$ne: ''} // injection notexist : ''

    for await(const song of db.collection('songs2').find({
         email : String(email), //albo email + '' zeby rzutowało na tekst a i nie moglo wstrzyknac( tutaj pobrac wszystko))
         })){
            console.log(song)
         }  


    await client.close();
})()