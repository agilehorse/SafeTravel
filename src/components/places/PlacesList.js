import Header from "../reusable/Header";
import React, {useContext, useState} from "react";
import {Context} from "../../App";
import {
    Avatar,
    Chip,
    Divider,
    Fab,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import PlacesFilterDialog, {InitialPlacesFilterState} from "./PlacesFilterDialog";
import clsx from "clsx";
import {useHistory} from 'react-router-dom';
import {NewPlace, Places} from "../../utils/mockData";
import {SortBy, Translate} from "../../utils/consts";
import AddIcon from '@material-ui/icons/Add';
import SearchInput from "../reusable/SearchInput";
import Chips from "../reusable/Chips";
import Items from "../reusable/Items";
import BottomBtn from "../reusable/BottomBtn";

export default function PlacesList() {

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

    function handleDialog(filter, active) {
        if (filter) {
            setState({...state, filter: filter, filterActive: active})
        }
        setDialogOpen(false);
    }

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    function filterFunction(items) {
        const placeName = state.placeName.toLowerCase();
        const open = state.open;
        const price = state.filter.price;
        const category = state.filter.category.value;
        const subCategory = state.filter.subCategory;
        const sortBy = state.filter.sortBy;
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(placeName) &&
            (!open || open === item.open) &&
            (!price || price === item.price) &&
            (!category || category === item.category) &&
            (!subCategory || subCategory === item.subCategory)
        )

        if (sortBy === SortBy.DISTANCE) {
            return filteredItems.sort((a, b) => a.distance - b.distance)
        } else if (sortBy === SortBy.RATING) {
            return filteredItems.sort((a, b) => b.rating - a.rating)
        }
        return filteredItems;
    }

    return (
        <div className={classes.root}>
            <Header text={"Cíle  - " + context}/>
            <div className={classes.searchRow}>
                <SearchInput
                    icons={{
                        search: {},
                        explore: {},
                        filter: {
                            onClick: () => setDialogOpen(true),
                            className: state.filterActive ? classes.filterActive : ""
                        }
                    }}
                    placeholder="Hledat cíle"
                    onChange={(event) => handleChange("placeName", event.target.value)}
                />
            </div>
            <Chips
                data={[
                    {
                        key: "open",
                        label: "Otevřené",
                        onClick: () => handleChange("open", !state.open),
                        state: state.open
                    },
                    {
                        key: "oblibene",
                        label: "Oblíbené",
                        onClick: () => handleChange("favorite", !state.favorite),
                        state: state.favorite
                    }
                ]}
            />
            <Items>
                {
                    filterFunction(Places).map(place =>
                        <ListItem key={place.id} onClick={() => history.push({pathname: 'places/' + place.id, state: place})}>
                            <ListItemAvatar>
                                <Avatar src={place.icon} className={classes.large} variant="square"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={place.name}
                                secondary={place.rating + "⭐"}
                                className={classes.listItemText}
                            />
                            <ListItemText
                                primary={Translate[place.price]}
                                secondary={place.distance + "km"}
                                className={classes.end}
                            />
                        </ListItem>
                    )
                }
            </Items>
            <BottomBtn
                path="/places/new"
                state={NewPlace}
            />
            <PlacesFilterDialog open={dialogOpen} handleClose={handleDialog}/>
        </div>
    )
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
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    listItemText: {
        marginLeft: theme.spacing(1),
    },
    end: {
        alignSelf: "flex-end",
        textAlign: "end"
    },
    selected: {
        backgroundColor: 'orange',
        fontWeight: 'bold',
    },
    filterActive: {
        backgroundColor: 'orange',
        borderRadius: '50%',
        padding: theme.spacing(0.2)
    },
}));