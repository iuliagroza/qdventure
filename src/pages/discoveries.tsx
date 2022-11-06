import styles from "../styles/discoveries.module.scss"
import Footer from '../components/footer';
import pfp from "../pfp.jpg"

import { CircularProgress } from '@mui/material';
import MenuFloater from '../components/menuBtn';
import FloatText from '../components/floatText';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BackpackIcon from '@mui/icons-material/Backpack';

function Discoveries() {
  var classNames = require('classnames');
  return (
    <>
      <MenuFloater />
      <FloatText text={"Your Friends"} back />
      <section className={styles.stats}>


        <section className={styles.menu}>
          <div className={styles.menuItem}>
            <img src={"https://www.q-perior.com/wp-content/uploads/2019/06/muenchen-office-logo-2-480x480.jpg"} alt="pfp" height={150} width={150} />
            <h1>Q_Perior Office</h1>
          </div>
          <div className={classNames(styles.menuItem, styles.left)}>
            <h1>Biserica Piarista</h1>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/8/83/Piarista_kolozsvar.jpg"} alt="pfp" height={150} width={150} />

          </div>
          <div className={styles.menuItem}>
            <img src={"https://fastly.4sqi.net/img/general/600x600/535284425_yvA1Ks4z_sYu5Avk6dJ3562qECAWsNw1p-kGJt98oGw.jpg"} alt="pfp" height={150} width={150} />
            <h1>FORM Cafe</h1>
          </div>
          <div className={classNames(styles.menuItem, styles.left)}>
            <h1>The Guild Hall</h1>
            <img src={"https://d2fdt3nym3n14p.cloudfront.net/venue/2993/gallery/12925/conversions/KMT_0329-big.jpg"} alt="pfp" height={150} width={150} />

          </div>


        </section>
      </section>

      <Footer />
    </>

  );
}

export default Discoveries;


