<template>
    <Login :form="form">
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

        <template #login-button> 
            <Button
                    class="mb-2 login-button btn"
                    ref="btn"
                    @click.prevent="submit"
                >
                    <p>
                        <span v-if="!isClicked"> Login </span>
                        <span v-else>
                            <span class="material-symbols-rounded spin">
                                autorenew
                            </span>
                            Processing
                        </span>
                    </p>
                </Button>
            </template>
    </Login>
</template>

<script>
import Login from "../../components/LoginForm.vue";
import Button from "../../components/Button.vue";

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