import Header from "../reusable/Header";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import React, {useState} from "react";
import {makeStyles, MenuItem, TextField} from "@material-ui/core";
import DetailSection from "../reusable/DetailSection";
import {PriceRange, PriceToString, Translate} from "../../utils/consts";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';

export default function PlaceDetail() {

    const classes = useStyles();
    const {placeId} = useParams();
    const location = useLocation();
    const history = useHistory();
    const [state, setState] = useState(location.state)

    function handleChange(event) {
        const eventTarget = event.target
        setState({...state, [eventTarget.name]: eventTarget.value})
    }

    if (placeId === 'new') {
        return <React.Fragment>
            <Header text="Vytvoř místo" cancelAction={() => history.push('/places')}
                    confirmAction={() => history.push('/places')}/>
            <ValidatorForm className={classes.root} autoComplete="off">
                <TextField
                    variant="outlined"
                    label="Název"
                    fullWidth
                    onChange={handleChange}
                    name="name"
                    value={state.name}
                    className={classes.textField}
                />
                <TextValidator
                    variant="outlined"
                    label="Hodnocení"
                    fullWidth
                    onChange={handleChange}
                    name="rating"
                    value={state.rating}
                    className={classes.textField}
                    validators={['minNumber:0', 'maxNumber:10', 'matchRegexp:^\\d+(\\.\\d+)?$']}
                    errorMessages={['Nejmenší hodnocení je 0', 'Nejvyšší hodnocení je 10', 'Hodnocení musí být číslo s maximálne jednou desetinou, např. 8.5']}
                />

                <TextField
                    variant="outlined"
                    label="Cena"
                    onChange={handleChange}
                    name="price"
                    fullWidth
                    value={state.price}
                    className={classes.textField}
                    select
                >
                    {Object.keys(PriceRange).map((key) => {
                        const value = PriceRange[key];
                        return <MenuItem key={value} value={value}>
                            {PriceToString[value]} {Translate[value]}
                        </MenuItem>
                    })}
                </TextField>
                <TextField
                    variant="outlined"
                    label="Popis"
                    onChange={handleChange}
                    name="description"
                    fullWidth
                    multiline
                    value={state.description}
                    className={classes.textField}
                />
            </ValidatorForm>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <Header text={state.name} isCancel cancelAction={() => history.push('/places')}/>
            <img src={state.picture} alt="place detail" className={classes.image}/>
            <DetailSection header="Hlavní info" items={[
                {left: "Hodnocení", right: state.rating},
                {left: "Cena", right: Translate[state.price]},
                {left: "Vzdálenost", right: state.distance + "km"}
            ]}/>
            <DetailSection header="Otevírací hodiny" items={[
                {left: "Po-Pá", right: "10-22:00"},
                {left: "So-Ne", right: "10-20:00"},
            ]}/>
            <DetailSection header="Popis" items={[
                {right: state.description},
            ]}/>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
    },
    image: {
        maxWidth: '100%',
        filter: 'brightness(70%)'
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}));