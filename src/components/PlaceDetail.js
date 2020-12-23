import {useParams} from 'react-router-dom';

export default function PlaceDetail() {

    const {placeId} = useParams();

    if (placeId === 'new') {
        return <div></div>
    }

    return (
        <div></div>
    )
}