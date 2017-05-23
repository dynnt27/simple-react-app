import React, { Component } from 'react';

class Dropdown extends React.PureComponent {

  render() {
    return <div>
            {this.props.dropdownLabel}

            <select id="operator">
                {
                    this.props.defaultOperator.map((item, index) => {
                        console.log(item);
                        return <option key={index} value={item}>{item}</option>;
                    })
                }
            </select>
        </div>;
  }
}


export default Dropdown;
