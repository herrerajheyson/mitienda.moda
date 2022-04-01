// Guards
import guards from "../guards/guards";

import { createWebHistory, createRouter } from "vue-router";
import Login from "/src/components/main/Login/Login.vue";
import NotFound from "/src/pages/general/NotFound.vue";
import DashboardLayout from "/src/components/layout/DashboardLayout.vue";

let notFoundPage = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: NotFound,
};

let loginPage = {
  path: "/login",
  name: "Login",
  beforeEnter: guards.auth,
  component: Login,
}

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: guards.guest,
    component: DashboardLayout,
  },
  loginPage,
  notFoundPage,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
