class TodoRecord  {
    constructor(obj) {
        
        this.id = obj.id ;
        this.title = obj.task ;
        
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