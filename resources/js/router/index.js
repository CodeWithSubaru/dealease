import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "@/pages/auth/LoginUser.vue";
import LoginAdmin from "@/pages/auth/LoginAdmin.vue";
import Register from "@/pages/auth/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
import Home from "@/pages/Home.vue";
import axios from "axios";

const routes = [
    {
        path: "/login",
        component: LoginUser,
        name: "LoginUser",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/admin.login",
        component: LoginAdmin,
        name: "LoginAdmin",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/register",
        component: Register,
        name: "Register",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: {
            requiresAuth: true,
            isAdmin: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem("token")) {
        return { name: "LoginUser" };
    }

    if (to.meta.requiresAuth == false && localStorage.getItem("token")) {
        return { name: "Dashboard" };
    }

    if (to.meta.isAdmin == false) {
        return { name: "Dashboard" };
    }
});

export default router;
