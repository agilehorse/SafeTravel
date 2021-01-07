import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {useHistory, useRouteMatch} from "react-router-dom";
import {NAVIGATION} from "../utils/consts";
import {getPageNameFromURL, translateURI} from "../utils/functions";

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(translateURI(getPageNameFromURL()));

    function handleChange(newValue) {
        history.push(`/${translateURI(newValue)}`);
        setValue(newValue);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => handleChange(newValue)}
            showLabels
            className={classes.root}
        >
            {
                NAVIGATION.map((item) =>
                    <BottomNavigationAction key={item.id} label={item.name} icon={item.icon}/>
                )
            }
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
