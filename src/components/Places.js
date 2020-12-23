import Header from "./Header";
import React, {cloneElement, useContext, useState} from "react";
import {Context} from "../App";
import {
    Avatar,
    Chip,
    Divider,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    TextField
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from '@material-ui/icons/Explore';
import FilterListIcon from '@material-ui/icons/FilterList';
import PizzaPicture from "../resources/pizza.jpg"
import PlacesFilterDialog from "./PlacesFilterDialog";

export default function Places() {

    const classes = useStyles();
    const [context] = useContext(Context);
    const [dialogOpen, setDialogOpen] = useState(false);

    function generate(element) {
        return [0, 1, 2, 3].map(value =>
            cloneElement(element, {
                key: value,
            }),
        );
    }

    function handleDialog(filter) {
        // apply filter,
        setDialogOpen(false);
    }

    return (
        <div>
            <Header text={"Cíle  - " + context} />
            <div className={classes.searchRow}>
                <TextField
                    id="input-with-icon-textfield"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="large"/>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <div>
                                <InputAdornment position={"end"}>
                                    <ExploreIcon fontSize="large"/>
                                    <FilterListIcon fontSize="large" onClick={() => setDialogOpen(true)}/>
                                </InputAdornment>
                            </div>
                        )
                    }}
                    fullWidth
                    placeholder="Hledat cíle"
                />
            </div>
            <div className={classes.tags}>
                <Chip variant="outlined" label="Otevřené" className={classes.tag}/>
                <Chip variant="outlined" label="Oblíbené" className={classes.tag}/>
            </div>

            <List>
                <Divider/>
                {generate(
                    <React.Fragment>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={PizzaPicture} className={classes.large} variant="square"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Pizzeria Gangster"}
                                secondary={"Muzeum"}
                                className={classes.listItemText}
                            />
                            <ListItemText
                                primary={"8.6⭐"}
                                secondary={"0.5km"}
                                className={classes.end}
                            />
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                )}
            </List>
            <PlacesFilterDialog open={dialogOpen} handleClose={handleDialog}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    searchRow: {
        margin: theme.spacing(1),
    },
    tags: {
        display: "flex",
        margin: theme.spacing(0, 1),
        justifyContent: "flex-start"
    },
    tag: {
        margin: theme.spacing(0, 0.5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    listItemText: {
        marginLeft: theme.spacing(1),
    },
    end:{
        alignSelf: "flex-end",
        textAlign: "end"
    }
}));