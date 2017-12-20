import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.PureComponent {
    onChange = (e) => {
        this.props.store.filter = e.target.value;
    }
    onCreate = (e) => {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value = '';
        }
    }
    toggleComplete = (todo) => {
        todo.completed = !todo.completed;
    }
    render() {
        const { clearCompleted, filteredTodos } = this.props.store;
        return (
            <div>
                <input className="create" onKeyPress={this.onCreate} />
                <input className="filter" onChange={this.onChange} />
                <ul>
                    {filteredTodos.map(todo => (
                        <li key={todo.id}>
                            <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={() => this.toggleComplete(todo)} />
                            {todo.value}
                        </li>
                    ))}
                </ul>
                <a href="#" onClick={clearCompleted}>clear completed</a>
            </div>
        );
    }
}