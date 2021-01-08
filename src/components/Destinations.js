import logo from "../resources/big_logo.png"
import {Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import SearchInput from "./reusable/SearchInput";
import Items from "./reusable/Items";
import {DESTINATION} from "../utils/mockData";
import Button from "@material-ui/core/Button";
import Header from "./reusable/Header";


export default function Destinations({changeBottomNav}) {

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
        <>
            <Header text={"Destinace"}/>
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




                <Items>
                    {
                        DESTINATION.map((dest, i) =>
                            <ListItem key={dest.id} >
                                <ListItemAvatar>
                                    <Avatar alt={dest.name} src={dest.picture}  className={classes.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={dest.name}
                                    secondary={
                                        <>
                                            <span className={classes.description}>{dest.description}</span>
                                        </>
                                    }
                                    className={classes.listItemText}
                                />
                                <Button variant="contained" color="first" onClick={() => {
                                    history.push('/places');
                                    changeBottomNav(1);
                                }}>
                                    VYBRAT
                                </Button>
                            </ListItem>
                        )
                    }
                </Items>

            </div>
        </>
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

    },
    avatar:{
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginRight: '10px',
    }
}));
