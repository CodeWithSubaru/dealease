<template>
    <Login
        :form="form"
        :errors="errors"
        :loading="loading"
        @submit-form="submit"
        :result="result"
    >
        {{ message }}

        <template #login-img>
            <span>
                <img
                    src="../../../../assets/img/user-student.png"
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    components: { Login, Button },
    props: ["message"],
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
            signIn: "auth/signIn",
        }),

        submit() {
            this.signIn(this.form);
        },
    },
};
</script>

<style scoped>
.login-img {
    height: 50px;
    width: 50px;
    display: inline-block;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: #efa726;
}
</style>
