import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { modulesRoute } from "./root-route";

function registerRoute(route) {
  return <Route key={route.path} {...route} />;
}

function converModulesRouteToArrList(modulesRoute) {
  if (typeof modulesRoute !== "object")
    throw TypeError("`routers` must type object");

  const routes = new Array();

  for (const property in modulesRoute) {
    const module = modulesRoute[property];
    if (module && module?.routes?.length) {
      const prefix = module?.prefix || `/${property}`;
      for (const route of module.routes) {
        routes.push({
          ...route,
          path: `${prefix}${route.path}`,
        });
      }
    }
  }

  return routes;
}

const routes = converModulesRouteToArrList(modulesRoute);

export default () => {
  return (
    <Switch>
      {routes.map((route) => {
        return registerRoute(route);
      })}
      <Route path="*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};
