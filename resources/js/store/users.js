import axios from "axios";
import router from "../router/index";

export default {
    namespaced: true,
    state: {
        columns: {},
        data: {},
    },

    getters: {
        getAllUsers(state) {
            return state.data;
        },

        getAllUserColumns(state) {
            return state.data;
        },
    },

    mutations: {
        SET_USERS(state, users) {
            state.data = users;
        },
    },

    actions: {
        getUsers(context) {
            axios.get("api/users").then((resp) => {
                context.commit("SET_USERS", resp.data);
            });
        },

        createUser(context) {},
    },
};
