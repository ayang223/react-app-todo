import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      // { id: 1, text: "placeholder", completed: true },
      // { id: 2, text: "placeholder2", completed: false },
      // { id: 3, text: "placeholder3", completed: false }
    ],
    newtodo: ""
  };

  addTodos = todo => {
    const todos = [...this.state.todos];
    if (todos.length === 0) {
      let newId = 1;
      todos.push({ id: newId, text: this.state.newtodo, completed: false });
      this.setState({ todos });
    } else {
      const index = todos.length - 1;
      let newId = todos[index].id + 1;
      todos.push({ id: newId, text: this.state.newtodo, completed: false });
      this.setState({ todos });
    }
  };

  handleCheck = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
        handleCheck={this.handleCheck}
      />
    ));

    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        {todoItems}
        <br />
        <div className="flex">
          <input
            className="form-control"
            type="text"
            value={this.state.newtodo}
            name="newtodo"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary btn-sm"
            id="button"
            onClick={this.addTodos}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default App;
