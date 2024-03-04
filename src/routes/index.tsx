import React, { Suspense, Fragment } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";
import authentication from "./authentication";
import utils from "./utils";
import dashboard from "./dashboard";

type RouteComponent = React.ComponentType<any>;
type RouteGuard = React.ComponentType<any> | typeof Fragment;
type RouteLayout = React.ComponentType<any>;
type CustomRouteItem = {
  component: RouteComponent;
  guard?: RouteGuard;
  layout?: RouteLayout;
} & RouteProps;

export const renderRoutes = (routes: CustomRouteItem[] = []) => (
  <Suspense fallback={<div>loaderrrrrrrrrrr</div>}>
    <Routes>
      {routes.map((route, index) => {
        const Component = route.component;
        const Guard = route.guard || Fragment;
        const Layout = route.layout;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Guard>
                {Layout ? (
                  <Layout>
                    <Component />
                  </Layout>
                ) : (
                  <Component />
                )}
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: CustomRouteItem[] = [...dashboard, ...authentication, ...utils];

export default routes;
