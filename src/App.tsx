import React from 'react';
import logo from './logo.svg';

import styles from "./styles/app.module.scss"
import Footer from './components/footer';
import Headbar from './components/Headbar';

import { CircularProgress } from '@mui/material';

function App() {
  return (
    <>
      <Headbar />
      <section className={styles.stats}>
        <CircularProgress className={styles.xp} size={120} thickness={5} color={"warning"} value={90} variant={"determinate"} />
        <p className={styles.sideText}>You have discovered 21 places so far</p>
      </section>
      <section className={styles.menu}>
        
      </section>
      <Footer />
    </>

  );
}

export default App;
