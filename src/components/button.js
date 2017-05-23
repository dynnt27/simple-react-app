import React, { Component, ReactDOM } from 'react';

class Button extends React.PureComponent {
    constructor(props) {
        super(props);


    }
  

  render() {
    return <div>
            <button onClick={() => this.props.onCompute()}>
                {this.props.buttonLabel}
            </button>
        </div>;
  }
}


export default Button;
