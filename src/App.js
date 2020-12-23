import './App.css';
import 'fontsource-roboto';
import SimpleBottomNavigation from "./components/SimpleBottonNavigation";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Destinations from "./components/Destinations";
import Places from "./components/Places";
import Info from "./components/Info";
import Paths from "./components/Paths";
import {createContext, useState} from "react";

export const Context = createContext();

function App() {

    const [context, setContext] = useState("Praha");

    return (
        <Context.Provider value={[context, setContext]}>
            <Router>
                <div className="App">
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
                    <SimpleBottomNavigation/>
                </div>
            </Router>
        </Context.Provider>
    );
}

export default App;
