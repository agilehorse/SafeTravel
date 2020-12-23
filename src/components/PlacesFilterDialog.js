import Header from "./Header";
import {Button, Dialog, makeStyles, Slide, Typography} from "@material-ui/core";
import React, {forwardRef, useState} from "react";
import SortIcon from '@material-ui/icons/Sort';
import FilterSection from "./FilterSection";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import TheatersIcon from '@material-ui/icons/Theaters';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ListIcon from '@material-ui/icons/List';
import {PlaceCategory, PriceRange, SortBy, Translate} from "../utils/consts";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryIcon = {
    FOOD: <RestaurantIcon/>,
    COFFEE: <FreeBreakfastIcon/>,
    SIGHTS: <LocationCityIcon/>,
    NATURE: <NaturePeopleIcon/>,
    CULTURE: <TheatersIcon/>,
    SPORT: <FitnessCenterIcon/>,
    PARTY: <LocalBarIcon/>,
    OTHER: <ListIcon/>
}


const initialState = {
    sortBy: null,
    price: null,
    category: {value: null, subs: []},
    subCategory: null,
}

export default function PlacesFilterDialog({open, handleClose}) {

    const classes = useStyles();
    const [state, setState] = useState(initialState);

    function handleChange(name, value) {
        setState({...state, [name]: value})
    }

    const subcategories = state.category.subs;
    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <Header text="Filtr" cancelAction={handleClose} confirmAction={() => handleClose(state)}/>
            <Button className={classes.clear} variant="contained" color="primary"
                    onClick={() => setState(initialState)}>
                Vyčistit filtr
            </Button>

            <FilterSection label="Seřadit podle" labelIcon={<SortIcon className={classes.sortIcon}/>}
                           selected={state.sortBy} items={
                Object.keys(SortBy).map((key) => {
                    const value = SortBy[key];
                    return {
                        label: value,
                        value: <Typography onClick={() => handleChange('sortBy', value)}>{Translate[key]}</Typography>
                    }
                })
            }/>
            <FilterSection label="Zvolte cenu" selected={state.price} items={
                Object.keys(PriceRange).map((key) => {
                    const value = PriceRange[key];
                    return {
                        label: value,
                        value: <Typography onClick={() => handleChange('price', value)}>{Translate[key]}</Typography>
                    }
                })
            }/>
            <FilterSection label="Kategorie" itemStyle={classes.categoryStyle} selected={state.category.value} items={
                Object.keys(PlaceCategory).map((value) => {
                    const category = PlaceCategory[value];
                    return {
                        label: value,
                        value: <div className={classes.category} onClick={() => handleChange('category', category)}>
                            {CategoryIcon[value]}
                            <Typography>{Translate[value]}</Typography>
                        </div>
                    }
                })
            }/>
            {subcategories.length > 0 &&
            <FilterSection label="Subkategorie" selected={state.subCategory} items={
                subcategories.map(sub => {
                    return {
                        label: sub,
                        value: <Typography onClick={() => handleChange('subCategory', sub)}>{Translate[sub]}</Typography>
                    }
                })
            }/>}
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    sortIcon: {
        marginLeft: theme.spacing(0.5),
    },
    sorted: {
        width: '100%',
    },
    category: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    categoryStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(1, 0, 0.5, 0),
        border: "1px solid darkgrey"
    },
    clear: {
        alignSelf: "flex-end",
        margin: theme.spacing(1),
    }
}));