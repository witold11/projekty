import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
//32:52 zakonczylem
const todos = [
{
  task: 'zrobic to do',
  isCompleted: false
},
{
  task: 'eat dinner',
  isCompleted: true
}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }


render() {
    return (
      // tu tez sie juz pogubilem co to robi (createTask={this.createTask.bind(this)} />)
        <div>
          <h1>ToDosList</h1> 
          <CreateTodo  createTask={this.createTask.bind(this)} />
          <TodosList 
            todos={this.state.todos} 
          />
        </div>
      );
    }

    createTask(task) {
      this.state.todos.push({
        task,
        isCompleted: false //isCompleted to jest cos gotowego?
      });
      this.setState({ todos: this.state.todos}); // co tu sie dzieje!? todos:
    }
  }
