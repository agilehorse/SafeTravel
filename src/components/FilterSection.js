import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

export default function FilterSection(props) {

    const classes = useStyles();

    function getContent() {
        const items = props.items
        const length = items.length;
        if (length > 0) {
            const xs = length % 2 > length % 3 ? 4 : 3;
            return items.map(item =>
                <Grid item xs={xs}>
                    <Paper
                        className={clsx(props.selected === item.label && classes.selected, props.itemStyle || classes.paper)}>
                        {item.value}
                    </Paper>
                </Grid>
            )
        }
    }

    if (!props.items) {
        return <React.Fragment/>;
    }

    return (
        <React.Fragment>
            {props.label && <Typography className={classes.label}>{props.label}{props.labelIcon}</Typography>}
            <Grid container spacing={0} className={classes.container}>
                {getContent()}
            </Grid>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
    },
    label: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
        display: "flex",
        alignItems: "center",
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(1.5, 0),
        border: "1px solid darkgrey",
    },
    selected: {
        backgroundColor: 'yellow'
    }
}));
