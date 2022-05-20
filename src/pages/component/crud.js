import React, { Component } from 'react';
import TodoItem from "./todoItem.js";

class crud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      title: ''
    }
  }

  setDummy = () => {
    fetch("http://localhost:8000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data })
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }

  addTodo = () => {
    const newTodo = { title: this.state.title, done: false }

    fetch('http://localhost:8000/data', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    }).then(() => {

      this.setState({ title: '' })
      console.log('new todo added.')
    });
  }

  componentDidMount() {
    this.setDummy()
  }

  render() {

    console.log('data', this.state.data)
    return (
      <div style={{ padding: 30 }}>
        <div>
          <div id="todo-header" className="header">
            <h2 style={{ color: 'white', marginBottom: 20 }}>Simple Todo App</h2>
            <input
              type="text"
              name="title"
              onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            />
            <span
              className="add-button"
              onClick={() => this.addTodo()}
            >
              Add
            </span>
          </div>
        </div>
        <div>
          <ul id="todo-list">
            {this.state.data.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default crud;