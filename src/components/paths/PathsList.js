import React, {useContext} from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import Header from "../reusable/Header";
import {Context} from "../../App";
import SearchInput from "../reusable/SearchInput";
import Chips from "../reusable/Chips";
import Items from "../reusable/Items";
import {Translate} from "../../utils/consts";
import {NewPlace, PATHS} from "../../utils/mockData";
import {useHistory} from "react-router-dom";
import BottomBtn from "../reusable/BottomBtn";

import { StarHalf } from '@material-ui/icons';

export default function PathsList() {
    const classes = useStyles();
    const [context] = useContext(Context);
    const history = useHistory();

    return (
        <section className={classes.root}>
            <Header text={"Cesty  - " + context}/>
            <div className={classes.searchRow}>
                <SearchInput
                    icons={{
                        search: {},
                        explore: {
                            onClick: () => {}
                        }
                    }}

                    placeholder="Vyhledej si cestu"
                />
            </div>
            <Chips
                data={[
                    {
                        key: "zazitkove",
                        label: "Zážitkové",
                        onClick: () => {},
                        state: false
                    },
                    {
                        key: "sportovni",
                        label: "Sportovní",
                        onClick: () => {},
                        state: false
                    },
                    {
                        key: "po pamatkach",
                        label: "Po památkách",
                        onClick: () => {},
                        state: false
                    }
                ]}
            />
            <Items>
                {
                    PATHS.map((path, i) =>
                        <ListItem key={path.id} onClick={() => history.push(`/paths/${i}`)}>
                            <ListItemAvatar>
                                <Avatar alt={path.name} src={path.picture} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={path.name}
                                secondary={
                                    <>
                                        <span className={classes.rating}>
                                            <StarHalf className={classes.starIco} />{path.rating}
                                        </span>
                                        <span className={classes.description}>{path.description}</span>
                                    </>
                                }
                                className={classes.listItemText}
                            />
                        </ListItem>
                    )
                }
            </Items>
            <BottomBtn />
        </section>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column'
    },
    searchRow: {
        margin: theme.spacing(1),
    },
    listItemText: {
        marginLeft: theme.spacing(1),
    },
    rating: {
        color: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        top: theme.spacing(1.6),
        right: theme.spacing(2)
    },
    starIco: {
        marginRight: theme.spacing(0.5)
    },
    description: {
        paddingTop: theme.spacing(1),
        display: "block"
    }
}));