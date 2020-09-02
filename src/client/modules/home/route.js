import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import ShowProducts from "./pages/ShowProducts";
import Room from "./pages/Room";

export default {
  prefix: "/",
  routes: [
    {
      path: "",
      exact: true,
      component: Home,
    },
    {
      path: "about",
      exact: true,
      component: About,
    },
    {
      path: "user",
      exact: true,
      component: User,
    },
    {
      path: "product",
      exact: true,
      component: ShowProducts,
    },
    {
      path: "room",
      exact: true,
      component: Room,
    },
    {
      path: "showproduct",
      exact: true,
      component: ShowProducts,
    },
    {
      path: "404",
      exact: true,
      component: NotFound,
    },
  ],
};
