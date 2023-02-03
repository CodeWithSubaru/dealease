import { createRouter, createWebHashHistory } from "vue-router";
import LoginSeller from "@/pages/auth/Seller/LoginSeller.vue";
import LoginBuyer from "@/pages/auth/Buyer/LoginBuyer.vue";
import LoginAdmin from "@/pages/auth/Admin/LoginAdmin.vue";
import RegisterNew from "@/pages/auth/RegisterNew.vue";
import RegisterExist from "@/pages/auth/RegisterExist.vue";
import NotFound from "@/pages/NotFound.vue";
import Unauthorized from "@/pages/Unauthorized.vue";
import Home from "@/pages/Buyer/Home.vue";
import MessageBuyer from "@/pages/Buyer/MessageBuyer.vue";
import ProfileBuyer from "@/pages/Buyer/ProfileBuyer.vue";
import HomeSeller from "@/pages/Seller/HomeSeller.vue";
import MessageSeller from "@/pages/Seller/MessageSeller.vue";
import ProfileSeller from "@/pages/Seller/ProfileSeller.vue";
import ChangePassword from "@/pages/ChangePassword.vue";
import Dashboard from "@/pages/Admin/Dashboard.vue";
import Users from "@/pages/Admin/Users.vue";
import Posts from "@/pages/Admin/Posts.vue";
import axios from "axios";

const routes = [
    {
        path: "/new/register",
        component: RegisterNew,
        name: "RegisterNew",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/register",
        component: RegisterExist,
        name: "RegisterExist",
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
        path: "/seller.login",
        component: LoginSeller,
        name: "LoginSeller",
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

    // Buyer
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            requiresAuth: true,
        },

        // beforeEnter: (to, from, next) => {
        //     // TESTING
        //     const userType = localStorage.getItem("userType");

        //     if (userType === "buyer") {
        //         next();
        //     } else {
        //         router.push({ name: "Unauthorized" });
        //     }
        // axios
        //     .get("/api/user")
        //     .then((resp) => {
        //         const result = resp.data;
        //     })
        //     .catch((e) => {
        //         localStorage.removeItem("user");
        //         localStorage.removeItem("token");
        //     });
        // },
    },

    {
        path: "/message",
        component: MessageBuyer,
        name: "MessageBuyer",
    },

    // beforeEnter: (to, from, next) => {
    //     const userType = localStorage.getItem("userType");

    //     if (userType === "seller") {
    //         next();
    //     } else {
    //         router.push({ name: "Unauthorized" });
    //     }

    // axios
    //     .get("/api/user")
    //     .then((resp) => {
    //         const result = resp.data;
    //         if (
    //             result.user_type === "user" &&
    //             result.seller_account === 1
    //         ) {
    //             next();
    //         } else {
    //             router.push({ name: "Unauthorized" });
    //         }
    //     })
    //     .catch((e) => {
    //         localStorage.removeItem("user");
    //         localStorage.removeItem("token");
    //     });
    // },
    {
        path: "/profile",
        component: ProfileBuyer,
        name: "ProfileBuyer",
    },

    // Seller
    {
        path: "/home/seller",
        component: HomeSeller,
        name: "HomeSeller",
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/message/seller",
        component: MessageSeller,
        name: "MessageSeller",
    },

    {
        path: "/profile/seller",
        component: ProfileSeller,
        name: "ProfileSeller",
    },

    // Admin

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: {
            requiresAuth: true,
        },

        // beforeEnter: (to, from, next) => {
        //     axios
        //         .get("/api/user")
        //         .then((resp) => {
        //             const result = resp.data;
        //             if (result.user_type === "admin") {
        //                 next();
        //             } else {
        //                 router.push({ name: "Unauthorized" });
        //             }
        //         })
        //         .catch((e) => {
        //             localStorage.removeItem("user");
        //             localStorage.removeItem("token");
        //         });
        // },
    },

    {
        path: "/users",
        component: Users,
        name: "Users",
    },

    {
        path: "/posts",
        component: Posts,
        name: "Posts",
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
    history: createWebHashHistory(),
    routes,
});

// router.beforeEach((to, from) => {
//     if (to.meta.requiresAuth && !localStorage.getItem("token")) {
//         return { name: "LoginBuyer" };
//     }

//     if (to.meta.requiresAuth == false && localStorage.getItem("token")) {
//         return { name: "Dashboard" };
//     }
// });

export default router;
