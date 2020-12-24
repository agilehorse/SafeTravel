import Header from "../reusable/Header";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import React, {useState} from "react";
import noImage from "../../resources/noimage.jpg"
import {makeStyles} from "@material-ui/core";
import DetailSection from "../reusable/DetailSection";
import {Translate} from "../../utils/consts";

export default function PlaceDetail() {

    const classes = useStyles();
    const {placeId} = useParams();
    const location = useLocation();
    const history = useHistory();
    const [state, setState] = useState(location.state)

    if (placeId === 'new') {
        return <div>
            <Header text="Vytvoř místo" cancelAction={() => history.push('/places')}
                    confirmAction={() => history.push('/places')}/>
            <img src={noImage} alt="place detail"/>
        </div>
    }

    return (
        <div>
            <Header text={state.name} isCancel cancelAction={() => history.push('/places')}/>
            <img src={noImage} alt="place detail" className={classes.image}/>
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
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: '100%',
        filter: 'brightness(70%)'
    },
}));