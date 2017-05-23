import React, { Component } from 'react';

class Input extends React.PureComponent {
  render() {
    return <div>
            {this.props.inputLabel}
            <input type="number" id="myInput" />
        </div>;
  }
}


export default Input;
