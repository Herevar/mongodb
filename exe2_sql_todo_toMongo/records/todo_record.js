const { ObjectId } = require("mongodb");

class TodoRecord  {
    constructor(obj) {
        
        this._id = new ObjectId(obj._id) ;  
        // zmieniamy na _id bo tak w mongo jest id nazywane oraz zmieniamy w ObiectId bo inaczej to bedzie jako tekst zapisywał a nie jak to jest w monogo, ze _id jest obiektem
        //ale to chyba nie bedzie miało sensu (przynajmniej przy towrzeniu bo trzeba by zgóry znac _id a ono powstaje dopiero przy tworzeniu elementu - czy tam jak sie nazywa ta pozycja pojedyncza w mongo)
        this.title = obj.title ;
        
        this._validate()
    }

    _validate(){
        if (this.title.trim().length < 3){
            throw new Error("Task must contain description")
        }
        if (this.title.length >150){
            throw new Error("to long task descripton; limit is 150 char")
        }       
    }
}

module.exports = {
    TodoRecord,
    }