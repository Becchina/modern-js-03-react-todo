'use strict';

import React from 'react';
import Todo from './todo';
import Filters from './filters';

export default class Body extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: this.props.items
    }
  }

  toggleDone(index, evt){
    const item = this.props.items[index];
    const updated = Object.assign(
      {}, item, {done: !item.done}
    );
    this.props.updateItem(updated, index);
  }

  filter(index){
    console.log(index);
    let items = [];
    switch(index){
      case 0:
        items = this.props.items;
        break;
      case 1:
        items = this.props.items.filter((e,i) => {
          return !e.done;
        });
        break;
      case 2:
        items = this.props.items.filter((e,i) => {
          return e.done;
        });
        break;
    }
    console.log(items);
    this.setState({
      items: items
    });
  }

  render(){
    return(
      <section>
        <hr />
        { this.state.items.map((e,i) => {
            return <Todo
                    key={e.id}
                    done={e.done}
                    text={e.text}
                    toggleDone={this.toggleDone.bind(this, i)} />;
        }) }
        <hr />
        <Filters
          selected="0"
          filter={this.filter.bind(this)} />
      </section>
    )
  }

}
