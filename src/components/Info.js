import logo from "../resources/big_logo.png";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Header from "./reusable/Header";
import {Context} from "../App";
import {InitialPlacesFilterState} from "./places/PlacesFilterDialog";

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
        textAlign: 'center',
        paddingBottom: theme.spacing(10),
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
    info:{
        marginTop: theme.spacing(10),
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
        marginBottom: theme.spacing(5),
    },
    image: {
        maxWidth: '90%',
        margin: '5%'
    },
}));

