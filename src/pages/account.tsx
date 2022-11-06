import styles from "../styles/account.module.scss"
import Footer from '../components/footer';


import { CircularProgress } from '@mui/material';
import MenuFloater from '../components/menuBtn';
import FloatText from '../components/floatText';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BackpackIcon from '@mui/icons-material/Backpack';

function Account() {
  return (
    <>
      <FloatText text={""} back/>
      <section className={styles.stats}>
        <section className={styles.statsW}>
          <p className={styles.sideText}>Marius</p>
          <h1>2<br />Lvl.</h1>
          <CircularProgress className={styles.xp} size={170} thickness={5} color={"warning"} value={90} variant={"determinate"} />
        </section>

        <section className={styles.menu}>
            <div className={styles.menuItem}>
                <p>Personal Information</p>
            </div>
            <div className={styles.menuItem}>
                <p>Notifications</p>
            </div>
            <div className={styles.menuItem}>
                <p>Privacy</p>
            </div>
            <div className={styles.menuItem}>
                <p>Get Help</p>
            </div>
            <div className={styles.menuItem}>
                <p>Give us Feedback</p>
            </div>
            <div className={styles.menuItem}>
                <p>Terms of Service</p>
            </div>
            <div className={styles.menuItem}>
                <p>Privacy Policy</p>
            </div>
        </section>
      </section>

      <Footer />
    </>

  );
}

export default Account;
