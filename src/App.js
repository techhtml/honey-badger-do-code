import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text : '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 컴포넌트가 떴음
  componentWillMount() {
    // 데이터 베이스의 경로를 찾읍니다.
    const itemsRef = firebase.database().ref('items');
    // 데이터 베이스의 변경을 감지합니다.
    // 데이터 베이스의 변경이 감지되면, 그걸 스냅샷으로 보관합니다.
    itemsRef.on('value', (snapshot) => {
      // 스냅샷에서 데이터베이스 내의 아이템을 찾아옵니다.
      let items = snapshot.val();
      // 새로운 스테이트를 만듭니다.
      // 데이터베이스에서 가져온 데이터를 스테이트에 넣기 위함입니다.
      let newState = [];
      // 데이터베이스의 아이템 갯수만큼 새 객체를 만듭니다.
      for(let item in items) {
        // State에 데이터를 넣습니다.
        newState.push({
          id: item, // 아이디
          text: items[item].text // 값
        })
      }
      // 데이터베이스에 박혀있는 값들을 가져온 배열을
      // 스테이트에 지정합니다.
      this.setState({
        items: newState
      })
    });
  }
  render() {
    return (
      <div className="container">
        <h1>TodoApp</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="flex">
            <input value={this.state.text} onChange={this.handleChange} />
            <button>Add #{this.state.items.length}</button>
          </div>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    let newState = {
      text: this.state.text
    };
    itemsRef.push(newState);
    this.setState({
      text:''
    })
  }
}

export default App;
