import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  state = {};

  completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  render() {
    const { text, completed, handleCheck } = this.props;
    return (
      <div className="todo-item">
        {console.log(this.props)}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleCheck(this.props.id)}
        />
        <p style={completed ? this.completedStyle : null} id="placeholder-p">
          {text}
        </p>
      </div>
    );
  }
}

export default TodoItem;
