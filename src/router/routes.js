import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login';
import UserHome from '../screens/UserHome'
import Decks from '../screens/Decks'
import NotFound from '../screens/NotFound';

const ROUTES =  [
  {
    path: '/', key: 'LANDING', exact: true, component: () => <Home />
  },
  {
    path: '/login', key: 'LOGIN', exact: true, component: () => <Login />
  },
  {
    path: '/app', 
    key: 'APP_ROOT', 
    component: RenderRoutes,
    routes:[
      {
        path: '/app', key: 'HOME', exact: true, component: () => <UserHome />
      },
      {
        path: '/app/decks', key: 'DECKS', exact: true, component: () => <Decks />
      }
      
    ]
  }
  
];

export default ROUTES;

function RouteWithSubRoutes (route) {
  return <Route 
    path={route.path} 
    exact={route.exact} 
    render={(props) => <route.component {...props} routes={route.routes}/>} 
  />
}

export function RenderRoutes ({routes}) {
  return (
    <Switch>
      {routes.map(route => {
        return (<RouteWithSubRoutes key={route.key} {...route} />);
      })}
      <Route component={() => <NotFound />} />
    </Switch>
  )
}