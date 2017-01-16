'use strict';

import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.addItem}>
          <input className="form-control"
          placeholder="Add element and press enter"
          value={this.props.text}
          onChange={this.props.writing} />
        </form>
        <p>Summary:
          Total <span className="badge badge-pill badge-default">
            {this.props.total}
          </span> - 
          Done <span className="badge badge-pill badge-primary">
            {this.props.done}
          </span>
        </p>
      </div>
    )
  }
}
