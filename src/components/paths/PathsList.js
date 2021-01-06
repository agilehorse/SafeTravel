import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core";
import Header from "../reusable/Header";
import {Context} from "../../App";
import SearchInput from "../reusable/SearchInput";

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