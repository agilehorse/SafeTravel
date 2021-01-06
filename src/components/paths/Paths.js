import {Route, Switch} from "react-router-dom";

import PathsList from "./PathsList";

export default function Paths() {

    return (
        <Switch>
            <Route exact path="/paths">
                <PathsList />
            </Route>
        </Switch>
    )
}