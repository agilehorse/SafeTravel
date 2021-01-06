import logo from "../resources/big_logo.png"
import {InputAdornment, makeStyles, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import FilterListIcon from "@material-ui/icons/FilterList";
import React, {useContext, useState} from "react";
import {Context} from "../App";
import {useHistory, useLocation} from "react-router-dom";
import SearchInput from "./reusable/SearchInput";


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
                <SearchInput
                    icons={{
                        search: {
                            onClick: () => history.push('/Places')
                        },
                        explore: {
                            onClick: () => history.push('/Places')
                        }
                    }}

                    placeholder="Kam cestujete?"
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
