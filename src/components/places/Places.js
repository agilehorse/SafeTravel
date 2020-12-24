import {Route, Switch} from "react-router-dom";
import PlacesList from "./PlacesList";
import PlaceDetail from "./PlaceDetail";

export default function Places() {

    return (
        <Switch>
            <Route exact path="/places">
                <PlacesList/>
            </Route>
            <Route path="/places/:placeId">
                <PlaceDetail/>
            </Route>
        </Switch>
    )
}