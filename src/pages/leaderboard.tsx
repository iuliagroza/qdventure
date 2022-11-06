import styles from "../styles/friends.module.scss"
import Footer from '../components/footer';
import pfp from "../pfp.jpg"

import { CircularProgress } from '@mui/material';
import MenuFloater from '../components/menuBtn';
import FloatText from '../components/floatText';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ClassNames } from "@emotion/react";

function Leaderboard() {
    var classNames = require('classnames');
    return (
        <>
            <MenuFloater />
            <FloatText text={"Leaderboard"} back />
            <section className={styles.stats}>


                <section className={styles.menu}>
                    <div className={classNames(styles.menuItem)}>
                        <img className={styles.icon} src={pfp} alt="pfp" height={100} width={100} />
                        <h1>Mark <br /><span>222 Places Visited</span></h1>
                        
                    </div>
                    <div className={styles.menuItem}>
                        <img src={pfp} alt="pfp" height={100} width={100} />
                        <h1>Mihai <br /><span>220 Places Visited</span></h1>
                    </div>
                    <div className={styles.menuItem}>
                        <img src={pfp} alt="pfp" height={100} width={100} />
                        <h1>Mircea <br /><span>200 Places Visited</span></h1>
                    </div>
                    <div className={styles.menuItem}>
                        <img src={pfp} alt="pfp" height={100} width={100} />
                        <h1>Marius <br /><span>22 Places Visited</span></h1>
                    </div>
                    <div className={styles.menuItem}>
                        <img src={pfp} alt="pfp" height={100} width={100} />
                        <h1>Matei <br /><span>2 Places Visited</span></h1>
                    </div>



                </section>
            </section>

            <Footer />
        </>

    );
}

export default Leaderboard;
