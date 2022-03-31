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
  component: Login,
}

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardLayout,
    redirect: "/home",
  },
  loginPage,
  notFoundPage,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
