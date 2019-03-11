// Dependencies
import React, { Component } from 'react';

// Components
import Hello from './components/Hello';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Hello name="Carlos" />
      </div>
    );
  }
}

export default App;
