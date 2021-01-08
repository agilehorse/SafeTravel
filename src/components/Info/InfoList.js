import React, {useContext} from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import Header from "../reusable/Header";
import {Context} from "../../App";
import SearchInput from "../reusable/SearchInput";
import Chips from "../reusable/Chips";
import Items from "../reusable/Items";
import {INFO} from "../../utils/mockData";
import {useHistory} from "react-router-dom";
import BottomBtn from "../reusable/BottomBtn";

import {StarHalf} from '@material-ui/icons';

export default function InfoList() {
    const classes = useStyles();
    const [context] = useContext(Context);
    const history = useHistory();

    return (
        <section className={classes.root}>
            <Header text={"Info  - " + context}/>
            <div className={classes.searchRow}>
                <SearchInput
                    icons={{
                        search: {},
                        explore: {
                            onClick: () => {}
                        }
                    }}

                    placeholder="Vyhledej si Info"
                />
            </div>
            <Chips
                data={[
                    {
                        key: "info",
                        label: "Info",
                        onClick: () => {},
                        state: false
                    },
                    {
                        key: "varovani",
                        label: "Varovní",
                        onClick: () => {},
                        state: false
                    },
                    {
                        key: "tip",
                        label: "Tip",
                        onClick: () => {},
                        state: false
                    }
                ]}
            />
            <Items>
                {
                    INFO.map((info, i) =>
                        <ListItem key={info.id} onClick={() => history.push(`/info/${i}`)}>
                            <ListItemAvatar>
                                <Avatar alt={info.name} src={info.icon} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={info.name}
                                secondary={
                                    <>
                                        <span className={classes.rating}>
                                            <StarHalf className={classes.starIco} />{info.rating}
                                        </span>
                                        <span className={classes.description}>{info.description}</span>
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
