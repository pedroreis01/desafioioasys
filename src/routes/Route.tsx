import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Switch,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
        <ReactDOMRoute
          {...rest}
          render={() => {
            let page = <Component />;
            if (isPrivate && user === undefined) {
              page = <Redirect to="/" />;
            }
            return page;
          }}
        />
  );
};

interface RouteWithSubRoutesProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    subroutes: RouteProps[];
}

export const RouteWithSubRoutes: React.FC<RouteWithSubRoutesProps> = ({
  subroutes,
  ...route
}) => {
  const routesComponent: React.FC = () => (
        <Switch>
            {subroutes.map((props, i) => (
                <Route key={i} {...props} />
            ))}
        </Switch>
  );

  return <Route {...route} component={routesComponent} />;
};

export default Route;
