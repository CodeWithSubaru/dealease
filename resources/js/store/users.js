import axios from "axios";
import router from "../router/index";

export default {
    namespaced: true,
    state: {
        columns: {},
        data: [],
        paginate: {},
        edit_user: {},
        errors: {},
        result: { success: false, message: null },
    },

    getters: {
        getAllUsers(state) {
            return state.data;
        },

        getPaginate(state) {
            return state.paginate;
        },

        getEditUser(state) {
            return state.edit_user;
        },

        getAllUserColumns(state) {
            return state.data;
        },

        getResultMsg(state) {
            return state.result;
        },

        getErrMsg(state) {
            return state.errors;
        },
    },

    mutations: {
        SET_USERS(state, users) {
            state.data = users;
        },

        SET_PAGINATE(state, paginate) {
            state.paginate = paginate;
        },

        SET_EDIT_USER(state, user) {
            state.edit_user = user;
        },

        SET_RESULT_MSG(state, result) {
            state.result.success = result.success;
            state.result.message = result.message;
        },

        SET_ERR_MSG(state, errors) {
            state.errors = errors;
        },
    },

    actions: {
        getUsers(context) {
            axios.get("api/users").then((resp) => {
                context.commit("SET_PAGINATE", resp.data);
                context.commit("SET_USERS", resp.data.data);
            });
        },

        showMoreUser(context, request) {
            axios.get(request).then((resp) => {
                context.commit("SET_PAGINATE", resp.data);
                context.commit("SET_USERS", resp.data.data);
            });
        },

        createUser(context, form) {
            axios
                .post("api/users", form)
                .then((resp) => {
                    const result = {
                        success: true,
                        message: resp.data.message,
                    };

                    context.commit("SET_RESULT_MSG", result);
                    return context.state.data.unshift(resp.data.data);
                })
                .catch((e) => {
                    context.commit("SET_ERR_MSG", e.response.data.errors);
                    setTimeout(() => {
                        context.commit("SET_ERR_MSG", {});
                    }, 3000);
                });
        },

        editUser(context, id) {
            axios.get("api/users/" + id + "/edit").then((resp) => {
                context.commit("SET_EDIT_USER", resp.data);
            });
        },

        updateUser(context, form) {
            console.log(form);
        },

        deleteUser(context, id) {
            axios.delete("api/users/" + id).then((resp) => {
                const indexOfId = context.state.data
                    .map((user) => {
                        return user.id;
                    })
                    .indexOf(id);

                context.state.data.splice(indexOfId, 1);
            });
        },

        clearErr(context) {
            context.commit("SET_ERR_MSG", {});
        },
    },
};
