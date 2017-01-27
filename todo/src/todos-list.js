import _ from 'lodash'; //wtf is this?
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
	renderItems() {
			return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />); // popytać o co tu chodzi
	}
render() {

    return (
    	<table>
    		<TodosListHeader />
    		<tbody>
    			{this.renderItems()}
    		</tbody>
    	</table>

      );
    }
  }
