import Header from "../reusable/Header";
import React, {useContext, useState} from "react";
import {Context} from "../../App";
import {
    Avatar,
    Chip,
    Divider,
    Fab,
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
import PlacesFilterDialog, {InitialPlacesFilterState} from "./PlacesFilterDialog";
import clsx from "clsx";
import {useHistory} from 'react-router-dom';
import {NewPlace, Places} from "../../utils/mockData";
import {SortBy, Translate} from "../../utils/consts";
import AddIcon from '@material-ui/icons/Add';

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
        console.log(filter)
        if (filter) {
            setState({...state, filter: filter, filterActive: active})
        }
        setDialogOpen(false);
    }

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    function filterFunction(items) {
        console.log(state)
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
                            <InputAdornment position={"end"}>
                                <ExploreIcon fontSize="large"/>
                                <FilterListIcon fontSize="large" onClick={() => setDialogOpen(true)}
                                                className={state.filterActive ? classes.filterActive: ""}/>
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                    placeholder="Hledat cíle"
                    onChange={(event) => handleChange("placeName", event.target.value)}
                />
            </div>
            <div className={classes.tags}>
                <div onClick={() => handleChange("open", !state.open)}>
                    <Chip variant="outlined" label="Otevřené"
                          className={clsx(classes.tag, state.open && classes.selected)}
                    />
                </div>
                <div onClick={() => handleChange("favorite", !state.favorite)}>
                    <Chip variant="outlined" label="Oblíbené"
                          className={clsx(classes.tag, state.favorite && classes.selected)}
                    />
                </div>
            </div>
            <List className={classes.list}>
                <Divider/>
                {filterFunction(Places).map(place =>
                    <React.Fragment key={place.id}>
                        <ListItem onClick={() => history.push({pathname: 'places/' + place.id, state: place})}>
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
                        <Divider/>
                    </React.Fragment>
                )}
            </List>
            <div className={classes.fabContainer}>
                <Fab color="primary" aria-label="add" className={classes.fab}
                     onClick={() => history.push({pathname: '/places/new', state: NewPlace})}>
                    <AddIcon/>
                </Fab>
            </div>
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
    list: {
        flexGrow: 1,
        marginBottom: 60
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
    },
    fabContainer: {
        position: 'fixed',
        right: theme.spacing(1),
        bottom: theme.spacing(8),
        justifyContent: "flex-end"
    },
    filterActive: {
      backgroundColor: 'orange',
        borderRadius: '50%',
        padding: theme.spacing(0.2)
    },
}));