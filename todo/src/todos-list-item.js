import React, { Component } from 'react';


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false //to jest funkcja isEditing?
        };
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
                );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
            );
    }


render() {
    return (
    	
    	<tr>
            <td>{this.props.task}</td> 
            {this.renderActionsSection()}
    	</tr>//czym tu jest props?
    	
      );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }
    onCancelClick() {
        this.setState({ isEditing: false });
    }
  }
