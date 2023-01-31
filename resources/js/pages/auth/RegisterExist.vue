<template>
    <Register @register="register">
        <template #form-bottom>
            <div class="form-bottom">
                <div class="account-details">
                    <h3>Account Details</h3>
                    <hr />
                    <FormGroup>
                        <template #label> Email * </template>
                        <template #input>
                            <input
                                type="email"
                                name="email"
                                v-model="form.email"
                                required
                            />
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.email">
                        {{ errors.email[0] }}
                    </small>

                    <FormGroup>
                        <template #label>Password * </template>
                        <template #input>
                            <input
                                type="password"
                                name="password"
                                v-model="form.password"
                                required
                            />
                        </template>
                    </FormGroup>

                    <small class="errMsg" ref="errMsg" v-if="errors.password">
                        {{ errors.password[0] }}
                    </small>
                </div>
            </div>
        </template>
    </Register>
</template>

<script>
import Register from "@/components/RegisterForm.vue";
import FormGroup from "@/components/FormGroup.vue";
export default {
    components: { Register, FormGroup },
    data() {
        return {
            form: {
                email: null,
                password: null,
            },

            loading: false,
            errors: {},
        };
    },

    methods: {
        register() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                axios
                    .post("/api/register", this.form)
                    .then((resp) => {
                        this.$router.push({
                            name: "LoginUser",
                            params: {
                                message: JSON.stringify(resp),
                            },
                        });
                    })
                    .catch((e) => {
                        this.errors = e.response.data.errors;
                    });
            }, 500);
        },
    },
};
</script>
