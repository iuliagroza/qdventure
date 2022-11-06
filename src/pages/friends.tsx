import styles from "../styles/friends.module.scss"
import Footer from '../components/footer';
import pfp from "../pfp.jpg"

import { CircularProgress } from '@mui/material';
import MenuFloater from '../components/menuBtn';
import FloatText from '../components/floatText';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BackpackIcon from '@mui/icons-material/Backpack';

function Friends() {
  return (
    <>
      <MenuFloater />
      <FloatText text={"Your Friends"} back/>
      <section className={styles.stats}>
        

        <section className={styles.menu}>
            <div className={styles.menuItem}>
                <img src={pfp} alt="pfp" height={100} width={100} />
                <h1>Mircea <br/><span>200 Places Visited</span></h1>
            </div>
            <div className={styles.menuItem}>
                <img src={pfp} alt="pfp" height={100} width={100} />
                <h1>Mirela <br/><span>20 Places Visited</span></h1>
            </div>
            <div className={styles.menuItem}>
                <img src={pfp} alt="pfp" height={100} width={100} />
                <h1>Matei <br/><span>2 Places Visited</span></h1>
            </div>
            <div className={styles.menuItem}>
                <img src={pfp} alt="pfp" height={100} width={100} />
                <h1>Mihai <br/><span>220 Places Visited</span></h1>
            </div>
            <div className={styles.menuItem}>
                <img src={pfp} alt="pfp" height={100} width={100} />
                <h1>Mark <br/><span>222 Places Visited</span></h1>
            </div>
            
        </section>
      </section>

      <Footer />
    </>

  );
}

export default Friends;
