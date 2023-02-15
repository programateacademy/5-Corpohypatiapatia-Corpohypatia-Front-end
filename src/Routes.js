import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <h1>INICIO</h1>
            </Route>
        </Switch>
    );
};

export default Routes;
