import { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../pages/dashboard/Test")),
    guard: lazy(() => import("../guards/SupabaseConnectionGuard")),
  },
];

export default routes;
