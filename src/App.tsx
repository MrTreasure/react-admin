import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import UserInfo from '@/components/UserInfo'
class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <UserInfo age={2}/>
        </header>
      </div>
    );
  }
}

export default App;
