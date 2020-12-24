import './App.css';
import 'fontsource-roboto';
import SimpleBottomNavigation from "./components/BottomNav";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Destinations from "./components/Destinations";
import Places from "./components/places/Places";
import Info from "./components/Info";
import Paths from "./components/Paths";
import {createContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

export const Context = createContext();


export default function App() {

    const classes = useStyles();
    const [context, setContext] = useState("Praha");

    return (
        <Context.Provider value={[context, setContext]}>
            <Router>
                <div className="App">
                    <div className={classes.page}>
                        <Switch>
                            <Route path="/destinations">
                                <Destinations/>
                            </Route>
                            <Route path="/places">
                                <Places/>
                            </Route>
                            <Route path="/info">
                                <Info/>
                            </Route>
                            <Route path="/paths">
                                <Paths/>
                            </Route>
                        </Switch>
                    </div>
                    <SimpleBottomNavigation/>
                </div>
            </Router>
        </Context.Provider>
    );
}

const useStyles = makeStyles({
    page: {
        minHeight: '90vh',
        paddingBottom: 60
    },
});