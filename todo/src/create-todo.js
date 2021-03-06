
import React, { Component } from 'react';


export default class TodosList extends React.Component {
render() {
    return (

        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What do I need to do?" ref="createInput" />
            <button>Create</button> 
        </form>
      );
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value);
    }
  }
