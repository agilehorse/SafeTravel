import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {useHistory, useRouteMatch} from "react-router-dom";
import {NAVIGATION} from "../utils/consts";
import {getPageNameFromURL, translateURI} from "../utils/functions";

export default function SimpleBottomNavigation({value, setValue}) {
    const classes = useStyles();
    const history = useHistory();

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
                NAVIGATION.map((item) => {
                    const itemEl = <BottomNavigationAction key={item.id} label={item.name} icon={item.icon}/>;
                    if (value===0) {
                        if (item.id===0)
                            return itemEl;
                        return null;
                    }
                    return itemEl;
                })
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
