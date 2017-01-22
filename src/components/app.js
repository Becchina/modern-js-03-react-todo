'use strict';

import React from 'react';
import {Todos} from './../data';
import Header from './header';
import Body from './body';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: Todos,
      text: ''
    }
  }

  filterDone(list){
    const done = list.filter((e,i) => {
      return e.done;
    })
    return done.length;
  }

  writing(evt){
    this.setState({
      text: evt.target.value
    });
  }

  // Get last item in an array list
  getLast(list){
    return list[list.length - 1];
  }

  addItem(evt){
    evt.preventDefault();

    // Create new todo object
    const todo = {
      id: this.getLast(this.state.todos).id + 1,
      text: this.state.text,
      done: false
    };

    // "push" the element in array in an immutable way
    this.setState({
      text: '',
      todos: this.state.todos.concat([todo])
    });
  }

  updateItem(item, index){
    console.log(item, index);
    const next = this.state.todos.slice(0);
    next[index] = item;
    this.setState({
      todos: next
    });
  }


  render(){
    // Passing contextualized methods as properties to child components
    return (
      <section>
        <Header
          text={this.state.text}
          total={this.state.todos.length}
          done={this.filterDone(this.state.todos)}
          addItem={this.addItem.bind(this)}
          writing={this.writing.bind(this)} />
        <Body
          items={this.state.todos}
          updateItem={this.updateItem.bind(this)} />
      </section>
    )
  }
}
