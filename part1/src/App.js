import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { todos: [] }
  addNew = (todo) => {
    const todos = this.state.todos.concat([todo]);
    this.setState({ todos });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To of started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <AddTodo addNew={this.addNew} />
          <ShowList elements={this.state.todos} />
        </ul>
      </div>
    );
  }
}

class AddTodo extends Component {
  state = { todo: '' }
  //static propTypes = { addNew: React.PropTypes.func.isRequired }
  updateTodo = (e) => {
    this.setState({ todo: e.target.value });
  }
  addNew = () => {
    this.props.addNew(this.state.todo);
    this.setState({ todo: '' });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.todo} onChange={this.updateTodo} />
        <button onClick={this.addNew}>Add todo</button>
      </div>
    );
  }
}

class ShowList extends Component {
  state = { elements: [] }
  render() {
    let listItems = this.props.elements.map(x => (<li> {x} </li>));
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default App;
