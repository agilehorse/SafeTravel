import {Switch, Route, useRouteMatch} from "react-router-dom";
import PlacesList from "./PlacesList";
import PlaceDetail from "./PlaceDetail";

export default function Places() {

    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <PlacesList/>
            </Route>
            <Route path={`${path}/:placeId`}>
                <PlaceDetail/>
            </Route>
        </Switch>
    )
}