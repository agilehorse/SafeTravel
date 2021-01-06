import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core";
import Header from "../reusable/Header";
import {Context} from "../../App";
import SearchInput from "../reusable/SearchInput";
import Chips from "../reusable/Chips";

export default function PathsList() {
    const classes = useStyles();
    const [context] = useContext(Context);

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
    }
}));