import type { Component } from 'solid-js';

import styles from './App.module.css';
import BasicTable from './components/BasicTable';

const App: Component = () => {
  document.title = 'My super app ! 🚀'
  return (
    <div class={styles.App}>
      <header class={styles.header}>
       🖐 Hey there !
      </header>
      <div class={styles.body}>
        <BasicTable/>
      </div>
    </div>
  );
};

export default App;
