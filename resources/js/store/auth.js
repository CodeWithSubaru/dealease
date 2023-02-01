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
            return localStorage.getItem("user");
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
            state.result.message = result.successMsg;
            state.result.success = result.success;
        },

        SET_ERR_MSG(state, error) {
            state.errors = error;
        },
    },

    actions: {
        //
        signIn(context, credentials) {
            axios
                .post("api/auth/login", credentials)
                .then((resp) => {
                    context.state.loading = true;
                    context.commit("SET_LOADING", context.state.loading);
                    return context.dispatch("attempt", resp.data);
                })
                .catch((e) => {
                    context.state.loading = true;
                    context.commit("SET_LOADING", context.state.loading);
                    setTimeout(() => {
                        context.state.loading = false;
                        context.commit("SET_LOADING", context.state.loading);
                        context.commit("SET_ERR_MSG", e.response.data.errors);
                    }, 1000);
                });
        },

        attempt(context, response) {
            try {
                context.commit("SET_TOKEN", response.token);
                context.commit("SET_USER", response.user_data);
                context.dispatch("saveToLocalStorage");

                let result = {
                    success: true,
                    successMsg:
                        "You are now loggined successfuly. You will be redirected to homepage",
                };

                context.state.loading = false;
                context.commit("SET_LOADING", context.state.loading);

                context.commit("SET_RESULT", result);

                setTimeout(() => {
                    router.push({ name: "Home" });
                    result = {};
                    context.commit("SET_RESULT", result);
                }, 3000);
            } catch (e) {
                context.commit("SET_ERR_MSG", e.data.errors.message);
            }
        },

        saveToLocalStorage(context) {
            localStorage.setItem("user", context.state.user);
            localStorage.setItem("token", context.state.token);
        },

        logout(context) {
            axios
                .post("/api/logout")
                .then((resp) => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    let result = {
                        success: true,
                        successMsg: "Logout Successfuly!",
                    };

                    context.commit("SET_RESULT", result);

                    setTimeout(() => {
                        result = {};
                        context.commit("SET_RESULT", result);
                        router.push({ name: "LoginBuyer" });
                    }, 1000);
                })
                .catch((e) => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    router.push({ name: "LoginBuyer" });
                });
        },
    },
};
