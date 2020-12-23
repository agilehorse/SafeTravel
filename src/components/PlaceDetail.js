import Header from "./Header";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import React, {useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function PlaceDetail() {

    const {placeId} = useParams();
    const location = useLocation();
    const history = useHistory();
    const [state, setState] = useState(location.state)

    if (placeId === 'new') {
        return <div>
            <Header text="Vytvoř místo" cancelAction={() => history.push('/places')} confirmAction={() => history.push('/places')}/>

        </div>
    }

    return (
        <div>
            <Header text={state.name} isCancel cancelAction={() => history.push('/places')}/>

        </div>
    )
}