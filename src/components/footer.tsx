import { Link } from "react-router-dom";
import styles from "../styles/footer.module.scss"

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MapIcon from '@mui/icons-material/Map';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export default function Footer(props: any) {
    return (
        <div className={styles.footer}>
            <div className={styles.floater}>
                <Link to="/qr"><QrCodeScannerIcon fontSize="large" className={styles.icon} /></Link>
            </div>
            <Link to="/leaderboard"><LeaderboardIcon fontSize="large" className={styles.icon} /></Link>

            <Link to="/map" className={styles.link}><MapIcon fontSize="large" className={styles.icon} /></Link>

        </div>
    );
}

