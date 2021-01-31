import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { routeGuard } from "../auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add",
    name: "Add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/BugForm"),
    beforeEnter: routeGuard,
  },

  {
    path: "/view",
    name: "View",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/BugList"),
    beforeEnter: routeGuard,
  },

  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactUs.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditBug"),
  },
];
// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
