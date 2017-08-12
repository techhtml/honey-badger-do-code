import React, { Component } from 'react';
import firebase from './firebase';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <div className="todo-item" key={this.state.id}>
        {this.state.text}
        <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }
  handleDelete() {
    const itemRef = firebase.database().ref('items/' + this.state.id);
    itemRef.remove();
  }
}

export default Todo;