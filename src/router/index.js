import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Features from "@/components/Features.vue";
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
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/features",
      name: "Features",
      component: Features,
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
