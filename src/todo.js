export const Todo = () => {
    let title = '';
    let description = '';
    let dueDate = new Date();
    let subTodos = [];
    let isDone = false;

    const addSubTodo = (subTodo) => {
        subTodos.push(subTodo);
    }

    const deleteSubTodo = (index) => {
        return subTodos.splice(index, 1);
    }

    const findSubTodo = (subTodo) => {
        return subTodos.find((currTodo) => {
            return currTodo === subTodo;
        });
    }

    return {
        title,
        description,
        dueDate,
        isDone,
        subTodos,
        addSubTodo,
        deleteSubTodo,
        findSubTodo,
    }
};

export function TodoFrom(JSON) {
    let todo = Todo();
    todo.title = JSON.title;
    todo.description = JSON.description;
    todo.dueDate = new Date(JSON.dueDate);
    todo.isDone = JSON.isDone;
    for(const jsonSubTodo of JSON.subTodos) {
        todo.addSubTodo(TodoFrom(jsonSubTodo));
    }    
    return todo;
}