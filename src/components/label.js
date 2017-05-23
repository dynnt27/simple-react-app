import React, { Component } from 'react';

class Label extends React.PureComponent {
  render() {
    return <h2>{this.props.labelName.join()}</h2>;
  }
}


export default Label;
