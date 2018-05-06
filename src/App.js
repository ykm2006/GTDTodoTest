import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import TodoAppBar from './TodoAppBar';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

class App extends Component {
  render() {
    return (
      <div className="root">
        <TodoAppBar />
        <AddTodo />
        <ListTodo />
      </div>
    );
  }
}

export default App;
