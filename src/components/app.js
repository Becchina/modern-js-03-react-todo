'use strict';

import React from 'react';
import {Todos} from './../data';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: Todos
    }
  }

  render(){
    return (
      <section>

      </section>
    )
  }
}
