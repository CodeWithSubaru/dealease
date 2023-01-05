<template>
    <Login
        :form="form"
        :errors="errors"
        :isClicked="isClicked"
        @submit-form="submit"
    >
        {{ message }}
        <template #login-img>
            <span>
                <img
                    src="../../../assets/img/user-student.png"
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
                            if (resp.data.isAdmin) {
                                localStorage.setItem(
                                    "token",
                                    resp.data.data.token
                                );
                                this.$router.push({ name: "Dashboard" });
                            }

                            this.$router.push({ name: "NotFound" });
                        }
                    })
                    .catch((e) => {
                        this.errors = e.response.data.errors;

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
