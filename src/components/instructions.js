import React, { Component } from 'react';

class Instructions extends React.PureComponent {
  render() {
    return <p><i>{this.props.message}</i></p>;
  }
}


export default Instructions;
