class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(latestTodo){
        var newTodo = JSON.parse(latestTodo);
        this.todos.todo.push(newTodo);
    }

    delete_todo(id){
        //delete this.todos.todo[id];
        this.todos.todo.splice(id,1);
    }

    update_todo(id, status){
        this.todos.todo[id].done=true;
    }
}


module.exports= todoservice;