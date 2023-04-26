const { TodoRecord } = require("./records/todo_record");
const { TodoRepo } = require("./repozitory/todo_repo");
const { poolz } = require("./utils/db2");



(async()=> {
   


    const foundTodo = await TodoRepo.find("jakies id trzeba tu wpisac/podac");
    console.log(foundTodo)

    //wczesniej by było foundTodo.delete() , a teraz ;
    await TodoRepo.delete(foundTodo);

    //-----werja niestatic -----////
     // const pick = await TodoRecord.find('123') // po stworzeniu obiektu tej instacji, pozniej this.id przymuje id tego co tu podalismy
    // await pick.delete()

    await poolz.end();


})();


