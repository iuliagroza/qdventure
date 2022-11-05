import '../styles/_headbar.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
 
export default function Headbar(props: any) {
    return (
        <div className="Headbar_Wrapper">
            <div className="User_Wrapper">
                <AccountCircleIcon className="Margin"/>
                <p>Marius</p>
            </div>
            <SettingsIcon className="Settings"/>
        </div>
    );
}