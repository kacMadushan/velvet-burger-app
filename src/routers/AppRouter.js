import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BurgerBuild from '../containers/BurgerBuild/BurgerBuild';
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => (
    <Switch>
        <Route path="/" component={BurgerBuild} exact={true} />
        <Route component={NotFound} />
    </Switch>
);

export default AppRouter;