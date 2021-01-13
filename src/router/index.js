import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
