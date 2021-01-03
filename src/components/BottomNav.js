import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WarningIcon from '@material-ui/icons/Warning';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingIcon from '@material-ui/icons/Settings';
import {useHistory} from "react-router-dom";

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    function handleChange(newValue) {
        let targetUrl;
        switch (newValue) {
            case 1: {
                targetUrl = "/places"
                break;
            }
            case 2: {
                targetUrl = "/info"
                break;
            }
            case 3: {
                targetUrl = "/paths"
                break;
            }
            case 4: {
                targetUrl = "/settings"
                break;
            }
            default :
                targetUrl = "/destinations"
                break;
        }
        history.push(targetUrl)
        setValue(newValue);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => handleChange(newValue)}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Destinace" icon={<SearchIcon/>}/>
            <BottomNavigationAction label="Cíle" icon={<LocationCityIcon/>}/>
            <BottomNavigationAction label="Info" icon={<WarningIcon/>}/>
            <BottomNavigationAction label="Cesty" icon={<TrendingUpIcon/>}/>
            <BottomNavigationAction label="Nastavení" icon={<SettingIcon/>}/>


        </BottomNavigation>
    );
}

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '2px solid darkgrey'
    },
});
