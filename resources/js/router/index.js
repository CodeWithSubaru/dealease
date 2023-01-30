import { createRouter, createWebHistory } from "vue-router";
import LoginSeller from "@/pages/auth/Seller/LoginSeller.vue";
import LoginBuyer from "@/pages/auth/Buyer/LoginBuyer.vue";
import LoginAdmin from "@/pages/auth/Admin/LoginAdmin.vue";
import Register from "@/pages/auth/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
import Unauthorized from "@/pages/Unauthorized.vue";
import Home from "@/pages/BuyerAndSeller/Home.vue";
import HomeSeller from "@/pages/BuyerAndSeller/HomeSeller.vue";
import Message from "@/pages/BuyerAndSeller/Message.vue";
import Settings from "@/pages/BuyerAndSeller/Settings.vue";
import Profile from "@/pages/BuyerAndSeller/Profile.vue";
import ChangePassword from "@/pages/BuyerAndSeller/ChangePassword.vue";
import axios from "axios";

const routes = [
    {
        path: "/register",
        component: Register,
        name: "Register",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/seller.login",
        component: LoginSeller,
        name: "LoginSeller",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/login",
        component: LoginBuyer,
        name: "LoginBuyer",
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

        beforeEnter: (to, from, next) => {

            // TESTING
            const userType = localStorage.getItem('userType');
            // console.log(userType);
            if (userType === "user") {
                next();
            } else {
                router.push({name: 'Unauthorized'});
            }
            // axios
            //     .get("/api/user")
            //     .then((resp) => {
            //         const result = resp.data;
                // })
                // .catch((e) => {
                //     localStorage.removeItem("user");
                //     localStorage.removeItem("token");
                // });
        },
    },

    {
        path: "/home/seller",
        component: HomeSeller,
        name: "HomeSeller",
        meta: {
            requiresAuth: true,
        },

        beforeEnter: (to, from, next) => {
            axios
                .get("/api/user")
                .then((resp) => {
                    const result = resp.data;
                    if (result.user_type === "user" && result.seller_account === 1) {
                        next();
                    } else {
                        router.push({name: 'Unauthorized'});
                    }
                })
                .catch((e) => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                });
        },
    },

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: {
            requiresAuth: true,
        },

        beforeEnter: (to, from, next) => {
            axios
                .get("/api/user")
                .then((resp) => {
                    const result = resp.data;
                    if (result.user_type === "admin") {
                        next();
                    } else {
                        router.push({name: 'Unauthorized'});
                    }
                })
                .catch((e) => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                });
        },
    },

    {
        path: "/message",
        component: Message,
        name: "Message",
    },

    {
        path: "/profile",
        component: Profile,
        name: "Profile",
    },

    {
        path: "/change-password",
        component: ChangePassword,
        name: "ChangePassword",
    },

    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "Unauthorized",
        component: Unauthorized,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem("token")) {
        return { name: "LoginBuyer" };
    }

    if (to.meta.requiresAuth == false && localStorage.getItem("token")) {
        return { name: "Dashboard" };
    }
});

export default router;
