import { createRouter, createWebHashHistory } from "vue-router";
import daybookRouter from "../modules/daybook/router";
import authRouter from "@/modules/auth/router";
import isAuthenticatedGuard from "@/views/auth-guard";
import HomeRouter from "../modules/home/router"

const routes = [
  {
    path: "/",
    ...HomeRouter
  },
  {
    path: "/daybook",
    beforeEnter: [isAuthenticatedGuard],
    ...daybookRouter,
  },
  {
    path: "/auth",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
