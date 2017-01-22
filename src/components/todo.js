'use strict';

import React from 'react';

export default class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="form-check" >
        <label className="form-check-label">
          <input className="form-check-input"
            type="checkbox"
            checked={this.props.done}
            onChange={this.props.toggleDone} />
            <span> { this.props.done ?
              <s>{this.props.text}</s> : this.props.text }</span>
        </label>
      </div>
    )
  }

}
