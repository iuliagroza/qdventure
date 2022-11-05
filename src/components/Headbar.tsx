import '../styles/_headbar.scss';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
 
export default function Headbar() {
    return (
        <div className="Headbar_Wrapper">
            <LeaderboardIcon sx={{fontSize: 40}} className="Icon_Style"/>
            <QrCode2Icon sx={{fontSize: 40}} className="Icon_Style"/>
            <Link to="/" className='Icon_Style'><HomeIcon sx={{fontSize: 40}}/></Link>
        </div>
    );
}