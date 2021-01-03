import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import React, {useContext, useState} from "react";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {Context} from "../../App";
import logo from "../../resources/big_logo.png";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    ratingBox:{
        textAlign: "center",
    },
    description:{
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        fontWeight: "bold",
        fontSize: "large",
    },
    ratingDescription:{
        fontWeight: "bold",
    },
    header:{
        textAlign: "center",
        width: "100%",
        background: '#3cb80c',
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(10),
        paddingBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(1.5),
        color: "white",
        fontWeight: "normal",
        borderBottom: "2px solid darkgrey",
        fontSize:'25px',

    },
    info:{
        marginTop: theme.spacing(15),
    },
    buttons:{
        width: '80%',
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(1.5),
        background: '#777777',

    }

}));


export default function Preferences() {

    const classes = useStyles();
    const history = useHistory();




    return (
        <div className={classes.root}>
            <h1 className={classes.header}> Nastavení </h1>
            <img src={logo} alt="app logo" className={classes.image}/>

            <p className={classes.info}>
                V nastaveních múžeš změnit nebo přispúsobit některé funkce vyhledávaní, vzhledu, upozornení
            </p>
            <Button variant="contained" color="secondary" className={classes.buttons}
                    onClick={() => history.push('/Preferences')}>
                Preference
            </Button>

            <Button variant="contained" color="secondary" className={classes.buttons}
                    onClick={() => history.push('/Preferences')} disabled={true}>
                vzhled
            </Button>

            <Button variant="contained" color="secondary" className={classes.buttons}
                    onClick={() => history.push('/Preferences')} disabled={true}>
                upozornení
            </Button>

            <Button variant="contained" color="secondary" className={classes.buttons}
                    onClick={() => history.push('/Preferences')} disabled={true}>
                váš profil
            </Button>

        </div>

    )
}



