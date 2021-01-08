import './App.css';
import 'fontsource-roboto';
import SimpleBottomNavigation from "./components/BottomNav";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Destinations from "./components/Destinations";
import Places from "./components/places/Places";
import Info from "./components/Info/Info";
import Paths from "./components/paths/Paths";
import Preferences from "./components/settings/Preferences";
import SettingsPage from "./components/settings/Settings";

import React, {createContext, useState} from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export const Context = createContext();

export default function App() {

    const classes = useStyles();
    const [context, setContext] = useState("Praha");

    return (
        <ThemeProvider theme={theme}>
            <Context.Provider value={[context, setContext]}>
                <Router>
                    <div className="App">
                        <div className={classes.page}>
                            <Switch>
                                <Route path="/places">
                                    <Places/>
                                </Route>
                                <Route path="/info">
                                    <Info/>
                                </Route>
                                <Route path="/paths">
                                    <Paths/>
                                </Route>
                                <Route path="/settings">
                                    <SettingsPage/>
                                </Route>
                                <Route path="/destinations">
                                    <Destinations/>
                                </Route>
                                <Route path="/">
                                    <Preferences/>
                                </Route>
                            </Switch>
                        </div>
                        <SimpleBottomNavigation/>
                    </div>
                </Router>
            </Context.Provider>
        </ThemeProvider>
    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3cb80c',
            contrastText: '#fff'
        },
        // secondary: {
            // light:'#fff',
            // main: '#fff',
            // dark : '#fff',
            // contrastText: '#fff'
        // }
    },
});

const useStyles = makeStyles({
    page: {
        minHeight: '90vh',
        paddingBottom: 60
    },
});
