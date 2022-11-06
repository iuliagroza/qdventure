import styles from '../styles/menu.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
 
export default function FloatText(props: any) {
    return (
        <div className={styles.floaterTextWraper}>
            {props.back? <><Link to={"/"}><ArrowCircleLeftIcon style={{fontSize: "2rem"}}/><br/></Link></> : null}
            <p className={styles.floaterText}>{props.text}</p>
        </div>
    );
}