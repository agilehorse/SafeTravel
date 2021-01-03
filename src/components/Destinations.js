import logo from "../resources/big_logo.png"
import {InputAdornment, makeStyles, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import FilterListIcon from "@material-ui/icons/FilterList";
import React, {useContext, useState} from "react";
import {Context} from "../App";
import {useHistory, useLocation} from "react-router-dom";


export default function Destinations() {

    const classes = useStyles();
    const [context] = useContext(Context);
    const location = useLocation();
    const history = useHistory();




    const [state, setState] = useState(location.state)
    function handleChange(name, value) {
        setState({...state, [name]: value})
    }


    return (
        <div className={classes.root}>
            <img src={logo} alt="app logo" className={classes.image}/>

            <div className={classes.searchRow}>
                <TextField
                    id="input-with-icon-textfield"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="large" color="primary"
                                            onClick={() => history.push('/Places')}/>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <ExploreIcon fontSize="large" color="primary"
                                onClick={() => history.push('/Places')}/>
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                    placeholder="Kam Cestuješ?"
                />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        marginTop: theme.spacing(5),
        maxWidth: '90%',
    },
    searchRow: {
        marginTop: theme.spacing(10),
        width: '80%',
    }
}));
