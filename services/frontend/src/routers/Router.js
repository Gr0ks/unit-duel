import { Switch, Route, } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";

export default function Routes() {
    /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
    return (
        < Switch >
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch >
    )
}