import styles from "./styles/app.module.scss"
import Footer from './components/footer';


import { CircularProgress } from '@mui/material';
import MenuFloater from './components/menuBtn';
import FloatText from './components/floatText';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <MenuFloater />
      <FloatText text={"Marius"} />
      <section className={styles.stats}>
        <section className={styles.statsW}>
          <CircularProgress className={styles.xp} size={170} thickness={5} color={"warning"} value={90} variant={"determinate"} />
          <p className={styles.sideText}>You have discovered<br /> 21 places so far</p>
          <h1>2<br />Lvl.</h1>
        </section>
      </section>
      <section className={styles.menu}>
        <div className={styles.btn}>
          <LocalMallIcon fontSize="large" className={styles.icon} />
          <p>Shop</p>
        </div>
        <Link to={"/friends"}>
          <div className={styles.btn}>
            <GroupIcon fontSize="large" className={styles.icon} />
            <p>Friends</p>
          </div>
        </Link>
        <Link to={"/discoveries"}>
          <div className={styles.btn}>
            <FormatListBulletedIcon fontSize="large" className={styles.icon} />
            <p>Discoveries</p>
          </div>
        </Link>
        <div className={styles.btn}>
          <BackpackIcon fontSize="large" className={styles.icon} />
          <p>Inventory</p>
        </div>
      </section>
      <Footer />
    </>

  );
}

export default App;
