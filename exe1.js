

// const mongo = require("mongodb");
const {MongoClient, ObjectId} = require("mongodb");

// const client = new mongo.MongoClient("mongodb://127.0.0.1:27017");
const client = new MongoClient("mongodb://127.0.0.1:27017");

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
            // console.log(song)
        }

    const email = {$ne: ''} // injection notexist : ''

    for await(const song of db.collection('songs2').find({
         email : String(email), //albo email + '' zeby rzutowało na tekst a i nie moglo wstrzyknac( tutaj pobrac wszystko))
         })){
            console.log(song)
         }  

    const oneUser = await db.collection("songs2").findOne({
        // _id: mongo.ObjectId('6448e5056b38a6c38f91cce5')  // nie trzeba bo zimportowane/wyciagniete ObjectId
        _id: new ObjectId('6448e5056b38a6c38f91cce5')

    })
    console.log('wybdziubane z requirea' ,oneUser)

    await client.close();
})()