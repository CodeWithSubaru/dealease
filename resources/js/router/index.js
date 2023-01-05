import { createRouter, createWebHistory } from "vue-router";
import LoginSeller from "@/pages/auth/Seller/LoginSeller.vue";
import LoginBuyer from "@/pages/auth/Buyer/LoginBuyer.vue";
import LoginAdmin from "@/pages/auth/Admin/LoginAdmin.vue";
import Register from "@/pages/auth/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
import Home from "@/pages/Home.vue";
import axios from "axios";

const routes = [
    {
        path: "/seller.login",
        component: LoginSeller,
        name: "LoginSeller",
    },

    {
        path: "/login",
        component: LoginBuyer,
        name: "LoginBuyer",
    },

    {
        path: "/admin.login",
        component: LoginAdmin,
        name: "LoginAdmin",
    },

    {
        path: "/",
        component: Home,
        name: "Home",
    },

    {
        path: "/register",
        component: Register,
        name: "Register",
    },

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
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

export default router;
