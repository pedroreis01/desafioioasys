import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Loader from '../components/Loader';
import Route from './Route';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

const Routes: React.FC = () => (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} isPrivate />
        </Switch>
    </Suspense>
);

export default Routes;
