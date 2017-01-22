'use strict';

import React from 'react';
import Todo from './todo';

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

  render(){
    return(
      <section>
        <hr />
        { this.props.items.map((e,i) => {
            return <Todo
                    key={e.id}
                    done={e.done}
                    text={e.text}
                    toggleDone={this.toggleDone.bind(this, i)} />;
        }) }
      </section>
    )
  }

}
