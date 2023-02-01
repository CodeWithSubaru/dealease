import { createStore } from "vuex";
import auth from "./auth";

const store = createStore({
    state: {},
    getters: {},
    modules: { auth },
});

export default store;
