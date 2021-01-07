import {Route, Switch} from "react-router-dom";

import PathsList from "./PathsList";
import PathsDetail from "./PathsDetail";
import PathsPlaceDetail from "./PathsPlaceDetail";
import PathsNavigation from "./PathsNavigation";

export default function Paths() {

    return (
        <Switch>
            <Route exact path="/paths">
                <PathsList />
            </Route>
            <Route path="/paths/:pathId/navigation/:currentNav/place/:placeId" exact>
                <PathsPlaceDetail />
            </Route>
            <Route path="/paths/:pathId/navigation/:currentNav" exact>
                <PathsNavigation />
            </Route>
            <Route path="/paths/:pathId/navigation" exact>
                <PathsNavigation />
            </Route>
            <Route path="/paths/:pathId/:placeId" exact>
                <PathsPlaceDetail />
            </Route>
            <Route path="/paths/:pathId">
                <PathsDetail />
            </Route>
        </Switch>
    )
}