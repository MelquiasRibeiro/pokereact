import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Info from './pages/Info/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/info/:pokemon" component={Info} />
        </Switch>
    );
}
