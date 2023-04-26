const { TodoRecord } = require("../records/todo_record");
const { poolz } = require("../utils/db2");
const {v4: uuid} = require('uuid');

class TodoRepo  {

static _checkRecord(record){
    if (!record instanceof TodoRecord){
        throw new Error("record must be instance of TodoRecord")
    }
}

static async insert(record) {

    TodoRepo._checkRecord(record)
    
}
static async delete(){
    TodoRepo._checkRecord(record)
   
}

static async find(id) { //podajemy z zewnatrz ( nie bierze pod uwage this. - chyba)
    const [result] = await poolz.execute("SELECT * FROM `todo` WHERE `id` = :id", {
        id: id
    })
    return result.length === 1 ? new TodoRecord(result[0]) : null // TWORZYMY NOWA INSTACJE KLASE ZEBY TEGO UZYC / jezeli jest to zwracamy a jezeli nie ma (bo np w id podalismy byle co) to zwroci null
}

static async findAll(){
   
    const [all] = await poolz.execute("SELECT * FROM `todo`")
    return all.map(result => new TodoRecord(result)) // kazdy wynik/pozycje zamienia w obiekt klasy TodoRecord
}

static async update(recor) {
    TodoRepo._checkRecord(record)
    if (!record.id){
        throw new Error("no such id in todo's")
    }
    
    this._validate()

    await poolz.execute("UPDATE `todo` SET `task` = :title WHERE `id`= :id", {
        title: record.title,
        id : record.id, 
    })
    return this.id

}
}

module.exports = {
TodoRepo,
}