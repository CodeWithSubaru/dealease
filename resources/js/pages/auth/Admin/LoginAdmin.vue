<template>
    <Login
        :form="form"
        :errors="errors"
        :loading="loading"
        @submit-form="submit"
        :typeOfUser="'Admin'"
        :result="result"
    >
        <template #login-img>
            <span>
                <img
                    src="../../../../assets/img/user-admin.png"
                    alt="user"
                    class="login-img"
                />
            </span>
        </template>
    </Login>
</template>

<script>
import Login from "../../../components/LoginForm.vue";
import Button from "../../../components/Button.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: { Login, Button },
    data() {
        return {
            form: {
                email: "",
                password: "",
                rmb_me: false,
            },
        };
    },

    computed: {
        ...mapGetters({
            result: "auth/result",
            loading: "auth/loading",
            errors: "auth/errors",
        }),
    },

    methods: {
        ...mapActions({
            signInAdmin: "auth/signInAdmin",
        }),

        submit() {
            this.signInAdmin(this.form);
        },
    },
};
</script>
