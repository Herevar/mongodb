const { ObjectId } = require("mongodb");
const { TodoRecord } = require("../records/todo_record");
// const {v4: uuid} = require('uuid');
const { todoses } = require("../utils/db2");


class TodoRepo  {

static _checkRecord(record){
    if (!record instanceof TodoRecord){
        throw new Error("record must be instance of TodoRecord")
    }
}

static async insert(record) {

    TodoRepo._checkRecord(record)
    const {insertedId} = await todoses.insertOne(record)
    record._id = insertedId  //od danego recordu id (ktore nazywamy _id - jak w mongo sie przypisuje odgornie id)
        
    //chyba returna jako tako byc nie musi no ale pozniej sie zobaczy
    
}
static async delete(record){
    TodoRepo._checkRecord(record)
    
    await todoses.deleteOne({
        _id : record._id
    })
}

static async find(id) { 
    const finded = await todoses.findOne({_id: new ObjectId(String(id))})
    //szukamy po obiekce gdzie _id jest new ObjectId() bo inaczej bedzie szukał po txt, wiec zmieniami + zabezpieczenie String()

    return finded === null ? null : new TodoRecord(finded)
    // jezeli znalazło pozycje to zwracca po prostu nowy taki obiekt - troche chyba dziwne(a moze nie) ze tworzy go na nowo jakby i zwraca ....ale moze i nie bo obiektem jest w monog a nie w kodzie tutaj ale tam jest to samo bo to js...niewazne
}

static async findAll(){
    // return await todoses.find()
    return (await ((await todoses.find()).toArray())).map(obj=> new TodoRecord(obj)) //chcemy zeby kazdy element był obiektem todorecord. Inaczej by było tablica i nie dało by sie na element zrobic od razu np.update tylko by trzeba było wyciągać kazdy element
    //zmieniamy w tablice - toarray() zeby nie zwracało jakiejś sieczki :P -> startowa.js (lekcyjka) 
}

static async update(record) {
    TodoRepo._checkRecord(record)
    
    //nie jest to dobre bo mozna dodac todo2.byleco : 'hakerman'
    await todoses.replaceOne({
        _id : record._id
    },{
        title : String(record.title)
    }, record) 

}
}

module.exports = {
TodoRepo,
}