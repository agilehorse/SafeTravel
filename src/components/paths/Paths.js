import {Route, Switch} from "react-router-dom";

import PathsList from "./PathsList";
import PathsDetail from "./PathsDetail";
import PathsPlaceDetail from "./PathsPlaceDetail";

export default function Paths() {

    return (
        <Switch>
            <Route exact path="/paths">
                <PathsList />
            </Route>
            <Route path="/paths/:pathId/:placeId">
                <PathsPlaceDetail />
            </Route>
            <Route path="/paths/:pathId">
                <PathsDetail />
            </Route>
        </Switch>
    )
}