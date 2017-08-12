import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => {
          return (
            <Todo item={item} key={item.id} />
          )
        })}
      </div>
    )
  }
}

export default TodoList