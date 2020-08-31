import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default {
  prefix: "/",
  routes: [
    {
      path: "",
      exact: true,
      component: Home,
    },
    {
      path: "404",
      exact: true,
      component: NotFound,
    },
  ],
};
