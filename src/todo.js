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