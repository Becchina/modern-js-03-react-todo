'use strict';

import React from 'react';

export default class Filters extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: parseInt(this.props.selected)
    }
  }

  getClasses(current){
    const active = current === this.state.selected ? 'btn-primary' : 'btn-secondary';
    return `btn ${active}`;
  }

  change(index){
    this.setState({
      selected: index
    });
    this.props.filter(index);
  }

  render(){
    return(
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button"
          className={this.getClasses(0)}
          onClick={() => this.change(0)}>All</button>
        <button type="button"
          className={this.getClasses(1)}
          onClick={() => this.change(1)}>Todo</button>
        <button type="button"
          className={this.getClasses(2)}
          onClick={() => this.change(2)}>Completed</button>
      </div>
    )
  }

}
