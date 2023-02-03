<template>
    <LoginForm
        :form="form"
        :errors="errors"
        :loading="loading"
        @submit-form="submit"
        :typeOfUser="'Seller'"
        :result="result"
    >
        <template #login-img>
            <span>
                <img
                    src="../../../../assets/img/user-student.png"
                    alt="user"
                    class="login-img"
                />
            </span>
        </template>

        <template #login-route>
            <router-link to="/login" class="back-to-home">
                Go to Login Buyer
            </router-link>
        </template>
    </LoginForm>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import Button from "@/components/Button.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: { LoginForm, Button },
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
            signInSeller: "auth/signInSeller",
        }),

        submit() {
            this.signInSeller(this.form);
        },
    },
};
</script>
