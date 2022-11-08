

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    // Adding a todo
    test("add_todo::Expecting todo list to be incremented by 1", () => {
        todo_service.add_todo('{"title": "T1", "description": "D1", "done": false }');
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });

    // Updating a todo
    test("update_todo::Setting status of TODO", () => {
        todo_service.update_todo(1,true);
        expect(todo_service.get_todos().todo[1].done).toEqual(true);
    });

     // Delete a todo
     test("delete_todo::Deleting a TODO. Expecing count of TODO's to be 3 after deletion.", () => {
        todo_service.delete_todo(3);
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });


    // Write all your test cases here that corresponds to software requirements


});