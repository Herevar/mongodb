const { TodoRecord } = require("./records/todo_record");
const { TodoRepo } = require("./repozitory/todo_repo");
const { client } = require("./utils/db2");




(async()=> {
   
    try{

        // const todo1 = new TodoRecord({
        //     // _id : "1234",   //bo tak w mongo jest _id  ... i tak nie podajemy bo musi byc odpowiedni format no ale moze pozniej sie to przyda do czegos to info tutaj
        //     task : "wyrzuć smieci",

        // })


        // await TodoRepo.insert(todo1)
        // console.log(todo1);


        // console.log(await TodoRepo.findAll())


        // const todo2 = await TodoRepo.find('644a2b68e1ce21721158f8f3');
        // todo2.title = "zajechac do sklepu";
        // //nie jest to dobre bo mozna dodac todo2.byleco : 'hakerman'
        // await TodoRepo.update(todo2);


        console.log("po update ", await TodoRepo.find('644a2b68e1ce21721158f8f3'));

        await TodoRepo.delete(todo2)

        console.log("po delete ",await TodoRepo.find('644a2b68e1ce21721158f8f3'));

    }finally{
        client.close()
    }

})();


