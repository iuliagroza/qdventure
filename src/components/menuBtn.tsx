import styles from '../styles/menu.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export default function MenuFloater(props: any) {
    return (
        <Link to={"/account"}>
            <div className={styles.wraper}>
                <AccountCircleIcon />
            </div>
        </Link>
    );
}