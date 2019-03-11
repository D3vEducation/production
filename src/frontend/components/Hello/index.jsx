import React, { Component } from 'react';
import { string } from 'prop-types';

class Hello extends Component {
  static propTypes = {
    name: string.isRequired
  };

  render() {
    const { name } = this.props;

    return <h1>Hello {name}</h1>;
  }
}

export default Hello;
