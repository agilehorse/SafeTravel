import logo from "../resources/big_logo.png"
import {makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import SearchInput from "./reusable/SearchInput";


export default function Destinations() {

    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState({hidden : true})



    function showSearch(data){
        console.log(data)
        if ("praha".includes(data.toString()) ){
            setState({...state, ["hidden"]: false})
        }
    }


    return (
        <div className={classes.root}>
            <img src={logo} alt="app logo" className={classes.image}/>

            <div className={classes.searchRow}>
                <SearchInput
                    onChange={(event) => showSearch( event.target.value)}
                    icons={{
                        search: {},
                        explore: {}
                    }}

                    placeholder="Kam cestujete?"
                />
            </div>
            <div hidden={state.hidden} className={classes.search}
                 onClick={() => history.push('/places')} >Praha</div>

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
    },
    search:{
        border: "solid",
        borderRadius: '4%' ,
        color: '#3cb80c',
        borderWidth: "thin" ,
        width: '79%',
        textAlign: "center",
        paddingBottom: '8px',
        paddingTop: '8px',

    }
}));
