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
        authenticated(state) {
            if (state.user && state.token) {
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

        user(state) {
            return state.user;
        },

        errors(state) {
            return state.errors;
        },
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_USER(state, user) {
            state.user = user;
        },

        SET_RESULT(state, result) {
            state.result.message = result.successMsg;
            state.result.success = result.success;
            state.loading = result.loading;
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
                    return context.dispatch("attempt", resp.data.token);
                })
                .catch((e) => {
                    console.log(e);
                    context.commit("SET_ERR_MSG", e.response.data.errors);
                });
        },

        attempt(context, token) {
            context.commit("SET_TOKEN", token);
            axios
                .get("api/auth/user")
                .then((resp) => {
                    let authUserObj = JSON.stringify(resp.data);
                    context.commit("SET_USER", authUserObj);

                    context.dispatch("saveToLocalStorage");

                    const result = {
                        successMsg: null,
                        success: false,
                        loading: false,
                    };

                    result.successMsg =
                        "You are now loggined successfuly. You will be redirected to homepage";

                    result.success = true;
                    result.loading = true;

                    context.commit("SET_RESULT", result);

                    setTimeout(() => {
                        router.push({ name: "Home" });
                    }, 5000);
                })
                .catch((e) => {
                    context.commit("SET_ERR_MSG", e.data.errors.message);
                    context.commit("SET_TOKEN", null);
                    context.commit("SET_USER", null);
                });
        },

        saveToLocalStorage(context) {
            localStorage.setItem("user", context.state.user);
            localStorage.setItem("token", context.state.token);
        },
    },
};
