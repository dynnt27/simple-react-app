import React, { Component } from 'react';

class Header extends React.PureComponent {
  render() {
    return <h2>{this.props.message}</h2>;
  }
}


export default Header;
