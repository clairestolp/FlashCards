import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  Deck,
  NotFound,
  Subjects,
  EditorDemo,
} from "../components/screens";

const ROUTES = [
  {
    path: "/",
    key: "LANDING",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/app",
    key: "APP_ROOT",
    component: RenderRoutes,
    routes: [
      {
        path: "/app/decks",
        key: "DECKS",
        exact: true,
        component: () => <Deck />,
      },
      {
        path: "/app/subjects",
        key: "SUBJECTS",
        exact: true,
        component: () => <Subjects />,
      },
      {
        path: "/app/editorDemo",
        key: "EDITOR_DEMO",
        exact: true,
        component: () => <EditorDemo />,
      },
    ],
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <NotFound />} />
    </Switch>
  );
}
