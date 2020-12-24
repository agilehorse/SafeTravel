import Header from "../reusable/Header";
import {Button, Dialog, makeStyles, Slide, Typography} from "@material-ui/core";
import React, {forwardRef, useState} from "react";
import SortIcon from '@material-ui/icons/Sort';
import FilterSection from "../reusable/FilterSection";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import TheatersIcon from '@material-ui/icons/Theaters';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ListIcon from '@material-ui/icons/List';
import {PlaceCategory, PriceRange, SortBy, Translate} from "../../utils/consts";

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

export const InitialPlacesFilterState = {
    sortBy: null,
    price: null,
    category: {value: null, subs: {}},
    subCategory: null,
}

export default function PlacesFilterDialog({open, handleClose}) {

    const classes = useStyles();
    const [state, setState] = useState({
        filter: InitialPlacesFilterState,
        active: false
    });

    function handleChange(name, value) {
        setState({filter: {...state.filter, [name]: value}, active: true})
    }

    function handleCategoryChange(name, value) {
        setState({filter: {...state.filter, [name]: value, subCategory: null}, active: true})
    }

    const subcategories = Object.keys(state.filter.category.subs).map(key => ({
        label: state.filter.category.subs[key],
        value: <Typography key={key} onClick={() => handleChange('subCategory', key)}>{Translate[key]}</Typography>
    }));

    return (
        <Dialog fullScreen open={open} onClose={() => handleClose()} TransitionComponent={Transition}>
            <Header text="Filtr" cancelAction={() => handleClose()} confirmAction={() => handleClose(state.filter, state.active)}/>
            <Button className={classes.clear} variant="contained" color="primary"
                    onClick={() => setState({filter: InitialPlacesFilterState, active: false})}>
                Vyčistit filtr
            </Button>

            <FilterSection label="Seřadit podle" labelIcon={<SortIcon className={classes.sortIcon}/>}
                           selected={state.filter.sortBy} items={
                Object.keys(SortBy).map((key) => {
                    const value = SortBy[key];
                    return {
                        label: value,
                        value: <Typography key={key} onClick={() => key !== SortBy.RELEVANCE && handleChange('sortBy', value)}>
                            {Translate[key]}
                        </Typography>
                    }
                })
            }/>
            <FilterSection label="Zvolte cenu" selected={state.filter.price} items={
                Object.keys(PriceRange).map((key) => {
                    const value = PriceRange[key];
                    return {
                        label: value,
                        value: <Typography key={key} onClick={() => handleChange('price', value)}>{Translate[key]}</Typography>
                    }
                })
            }/>
            <FilterSection label="Kategorie" itemStyle={classes.categoryStyle} selected={state.filter.category.value} items={
                Object.keys(PlaceCategory).map((value) => {
                    const category = PlaceCategory[value];
                    return {
                        label: value,
                        value: <div key={value} className={classes.category}
                                    onClick={() => handleCategoryChange('category', category)}>
                            {CategoryIcon[value]}
                            <Typography>{Translate[value]}</Typography>
                        </div>
                    }
                })
            }/>
            <FilterSection label="Subkategorie" selected={state.filter.subCategory} items={subcategories}/>
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
    },
}));