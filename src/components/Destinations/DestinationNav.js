import {Route, Switch} from "react-router-dom";

import Destinations from "./Destinations";
import DestinationDetail from "./DestinationDetail";


export default function DestinationNav({changeBottomNav}) {

    return (
        <Switch>
            <Route exact path="/destinations">
                <Destinations changeBottomNav={changeBottomNav} />
            </Route>
            <Route path="/destinations/:destinationsId">
                <DestinationDetail changeBottomNav={changeBottomNav}/>
            </Route>
        </Switch>
    )
}
