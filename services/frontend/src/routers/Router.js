import { Switch, Route, } from "react-router-dom";

import Home from "../components/Home";
import Room from "../components/Room";
import User from "../components/User";
import Login from "../components/Login";


export default function Routes() {
    /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
    return (
        <div className="main">
            < Switch >
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/room">
                    <Room />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch >
        </div>
    )
}