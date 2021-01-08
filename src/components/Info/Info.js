import {Route, Switch} from "react-router-dom";

import InfoList from "./InfoList";
import InfoDetail from "./InfoDetail";


export default function Info() {

    return (
        <Switch>
            <Route exact path="/info">
                <InfoList />
            </Route>
            <Route path="/info/:infoId">
                <InfoDetail />
            </Route>
        </Switch>
    )
}
