<template>
    <Login
        :form="form"
        :errors="errors"
        :isClicked="isClicked"
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
            isClicked: false,
            errors: [],
            result: { success: false, message: null },
        };
    },

    methods: {
        submit() {
            this.isClicked = true;
            setTimeout(() => {
                this.isClicked = false;
                axios
                    .post("/api/login", this.form)
                    .then((resp) => {
                        if (resp.data.success) {
                            localStorage.setItem("user", resp.data.user_data);
                            localStorage.setItem("token", resp.data.token);
                            this.result.success = true;
                            this.result.message =
                                "You are now loggined successfuly. You will be redirected to homepage";
                            setTimeout(() => {
                                this.$router.push({ name: "Home" });
                            }, 2000);
                        }
                    })
                    .catch((e) => {
                        this.errors = e.response.data.errors;
                        if (e.response.status === 500) {
                            this.result.message =
                                "Sorry, something went wrong. Please try again later";
                        }

                        setTimeout(() => {
                            this.errors.email = null;
                            this.errors.password = null;
                        }, 5000);
                    });
            }, 500);
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
