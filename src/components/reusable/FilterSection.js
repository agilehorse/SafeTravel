import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

export default function FilterSection(props) {

    const classes = useStyles();
    const items = props.items;

    function getContent() {
        const length = items.length;
        let xs = 3;
        if (length % 3 === 0) {
            xs = 4;
        } else if (length === 2) {
            xs = 6
        }
        return items.map(item =>
            <Grid item xs={xs}>
                <Paper
                    className={clsx(
                        props.selected === item.label && classes.selected, props.itemStyle || classes.paper
                    )}>
                    {item.value}
                </Paper>
            </Grid>
        )
    }

    if (!items || items.length === 0) {
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
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
}));
