import React from 'react';
import logo from './logo.svg';

import styles from "./styles/app.module.scss"
import Footer from './components/footer';
import Headbar from './components/Headbar';

function App() {
  return (
    <>
      <section className={styles.stats}></section>
      <section className={styles.menu}></section>
      <Footer />
    </>

  );
}

export default App;