import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/index';
import Info from './pages/Info/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/info" exact component={Info} />
            </Switch>
        </BrowserRouter>
    );
}
