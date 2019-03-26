import React, { Component } from 'react';
import { string } from 'prop-types';
import styles from './Hello.scss';

class Hello extends Component {
  static propTypes = {
    name: string
  };

  render() {
    const { name = 'World' } = this.props;

    return <h1 className={styles.Hello}>Hello {name}</h1>;
  }
}

export default Hello;
