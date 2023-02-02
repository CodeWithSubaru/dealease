import axios from "axios";
import router from "../router/index";

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        errors: {},
        loading: false,
        result: { success: false, message: null },
    },

    getters: {
        authenticated() {
            if (localStorage.getItem("token") && localStorage.getItem("user")) {
                return true;
            }
            return false;
        },

        loading(state) {
            return state.loading;
        },

        result(state) {
            return state.result;
        },

        user() {
            return JSON.parse(localStorage.getItem("user"));
        },

        errors(state) {
            return state.errors;
        },
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_LOADING(state, loading) {
            state.loading = loading;
        },

        SET_USER(state, user) {
            state.user = user;
        },

        SET_RESULT(state, result) {
            state.result.message = result.msg;
            state.result.success = result.success;
        },

        SET_ERR_MSG(state, error) {
            state.errors = error;
        },
    },

    actions: {
        //
        signInBuyer(context, credentials) {
            context.dispatch("signIn", ["/auth/login", credentials]);
        },

        signInSeller(context, credentials) {
            context.dispatch("signIn", ["/auth/sellerLogin", credentials]);
        },

        signInAdmin(context, credentials) {
            context.dispatch("signIn", ["/auth/adminLogin", credentials]);
        },

        signIn(context, requestApiLogin) {
            axios
                .post("api" + requestApiLogin[0], requestApiLogin[1])
                .then((resp) => {
                    context.state.loading = true;
                    context.commit("SET_LOADING", context.state.loading);
                    return context.dispatch("attempt", resp.data);
                })
                .catch((e) => {
                    if (e.response.status == 500) {
                        let result = {
                            success: false,
                            msg: "Something went wrong! Please try again later",
                        };
                        context.commit("SET_RESULT", result);
                    }
                    context.commit("SET_ERR_MSG", e.response.data.errors);
                    setTimeout(() => {
                        context.commit("SET_ERR_MSG", {});
                    }, 3000);
                });
        },

        attempt(context, response) {
            try {
                context.commit("SET_TOKEN", response.token);
                context.commit("SET_USER", response.user_data);
                context.dispatch("saveToLocalStorage");

                context.state.loading = false;
                context.commit("SET_LOADING", context.state.loading);

                let result = {
                    success: true,
                    msg: "You are now loggined successfuly. You will be redirected to homepage",
                };

                context.commit("SET_RESULT", result);
                setTimeout(() => {
                    context.dispatch("redirect", "");
                    result = {};
                    context.commit("SET_RESULT", result);
                }, 3000);
            } catch (e) {
                context.state.loading = false;
                context.commit("SET_LOADING", context.state.loading);

                context.commit("SET_RESULT", result);

                context.commit("SET_ERR_MSG", e.data.errors.message);
                setTimeout(() => {
                    context.commit("SET_ERR_MSG", {});
                }, 3000);
            }
        },

        saveToLocalStorage(context) {
            localStorage.setItem("user", context.state.user);
            localStorage.setItem("token", context.state.token);
        },

        logoutBuyer(context) {
            context.dispatch("logout", "LoginBuyer");
        },

        logoutSeller(context) {
            context.dispatch("logout", "LoginSeller");
        },

        logoutAdmin(context) {
            context.dispatch("logout", "LoginAdmin");
        },

        logout(context, route) {
            axios
                .post("/api/logout")
                .then((resp) => {
                    let result = {
                        success: true,
                        msg: "Logout Successfuly!",
                    };
                    context.commit("SET_RESULT", result);

                    setTimeout(() => {
                        result = {};
                        context.commit("SET_RESULT", result);
                        context.dispatch("redirect", route);
                        setTimeout(() => {
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                        }, 3000);
                    }, 1000);
                })
                .catch((e) => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    context.dispatch("redirect", "LoginBuyer");
                });
        },

        redirect(_, route) {
            const user = JSON.parse(localStorage.getItem("user"));
            let goTo;

            if (route) {
                return router.push({ name: route });
            }

            if (user.buyer_account) {
                goTo = "Home";
            } else if (user.seller_account) {
                goTo = "HomeSeller";
            } else {
                goTo = "Dashboard";
            }
            router.push({ name: goTo });
        },
    },
};
