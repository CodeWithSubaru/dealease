import { createRouter, createWebHashHistory } from "vue-router";
import LoginBuyer from "@/pages/auth/Buyer/LoginBuyer.vue";
import Home from "@/pages/Buyer/Home.vue";
import axios from "axios";

const routes = [
    {
        path: "/new/register",
        component: () => import("@/pages/auth/RegisterNew.vue"),
        name: "RegisterNew",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/register",
        component: () => import("@/pages/auth/RegisterExist.vue"),
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
        component: () => import("@/pages/auth/Seller/LoginSeller.vue"),
        name: "LoginSeller",
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: "/admin.login",
        component: () => import("@/pages/auth/Admin/LoginAdmin.vue"),
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
        component: () => import("@/pages/Buyer/MessageBuyer.vue"),
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
        component: () => import("@/pages/Buyer/ProfileBuyer.vue"),
        name: "ProfileBuyer",
    },

    // Seller
    {
        path: "/home/seller",
        component: () => import("@/pages/Seller/HomeSeller.vue"),
        name: "HomeSeller",
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/message/seller",
        component: () => import("@/pages/Seller/MessageSeller.vue"),
        name: "MessageSeller",
    },

    {
        path: "/profile/seller",
        component: () => import("@/pages/Seller/ProfileSeller.vue"),
        name: "ProfileSeller",
    },

    // Admin

    {
        path: "/dashboard",
        component: () => import("@/pages/Admin/Dashboard.vue"),
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
        component: () => import("@/pages/Admin/Users.vue"),
        name: "Users",
    },

    {
        path: "/posts",
        component: () => import("@/pages/Admin/Posts.vue"),
        name: "Posts",
    },

    {
        path: "/change-password",
        component: () => import("@/pages/ChangePassword.vue"),
        name: "ChangePassword",
    },

    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/NotFound.vue"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "Unauthorized",
        component: () => import("@/pages/Unauthorized.vue"),
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
