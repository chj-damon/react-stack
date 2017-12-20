import { observable, autorun, computed } from 'mobx';

class Todo {
    @observable value;
    @observable id;
    @observable completed;

    constructor(value) {
        this.value = value;
        this.id = new Date().getTime();
        this.completed = false;
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = '';

    @computed get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }

    createTodo(value) {
        this.todos.push(new Todo(value));
    }

    clearCompleted = () => {
        const incompletedTodos = this.todos.filter(todo => !todo.completed);
        this.todos.replace(incompletedTodos); // observable array的特殊地方
    }
};

const store = window.store = new TodoStore();

export default store;

// autorun(() => {
//     console.log(store.filter);
//     console.log(store.todos[0]);
// });