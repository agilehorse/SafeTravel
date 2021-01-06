import React from "react";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

export default function ({path, state}) {
    const classes = useStyle();
    const history = useHistory();

    return (
        <div className={classes.fabContainer}>
            <Fab color="primary" aria-label="add"
                 onClick={() => history.push({pathname: path, state: state})}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

const useStyle = makeStyles((theme)=>({
    fabContainer: {
        position: 'fixed',
            right: theme.spacing(1),
            bottom: theme.spacing(8),
            justifyContent: "flex-end"
    }
}));