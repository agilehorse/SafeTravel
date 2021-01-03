import logo from "../resources/big_logo.png";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Header from "./reusable/Header";
import {Context} from "../App";
import {InitialPlacesFilterState} from "./places/PlacesFilterDialog";
import Rating from "@material-ui/lab/Rating";

export default function Info() {



    const classes = useStyles();
    const [context] = useContext(Context);
    const history = useHistory();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [state, setState] = useState({
        placeName: '',
        open: false,
        favorite: false,
        filter: InitialPlacesFilterState,
        filterActive: false
    })


    return (
        <div className={classes.root}>
            <div className={classes.divHeader}>
                <Header text={"Cíle  - " + context} />
            </div>

            <img src={logo} alt="app logo" className={classes.image}/>

            <p className={classes.info}>
                Info ti poskytuje základní vědomosti a skušenosti s danou oblastí
            </p>
            <Button variant="contained" color="secondary" className={classes.buttons}>
                TIPY
            </Button>

            <Button variant="contained" color="secondary" className={classes.buttons}>
                VAROVÁNÍ
            </Button>

            <Button variant="contained" color="secondary" className={classes.buttons}>
                DOPORUČENÍ
            </Button>


        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
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
        background: '#ffffff',
        color: '#3cb80c',
        fontWeight: "Bold",
        border: "black",

    },
    divHeader:{
        width: '100%',
    }
}));

