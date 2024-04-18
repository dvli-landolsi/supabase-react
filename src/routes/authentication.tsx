import { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    guard: lazy(() => import("../guards/GuestGuard")),
  },
  {
    exact: true,
    path: "/user/register",
    component: lazy(() => import("../pages/auth/Register")),
    guard: lazy(() => import("../guards/GuestGuard")),
    layout: lazy(() => import("../layout/authLayout")),
  },
];

export default routes;
