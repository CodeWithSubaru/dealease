<template>
    <main>
        <Banner>
            <template #banner-title>Fisher</template>
            <template #banner-username>
                <LightDarkMode
                    :switchColor="switchColor"
                    :lightMode="lightMode"
                />
            </template>
        </Banner>
        <Card class="card">
            <h1>
                Login <small> {{ typeOfUser }}</small>
            </h1>
            <div class="login-description">
                <p class="login-details">Please login your credentials</p>
                <slot name="login-img" />
            </div>

            <form class="form">
                <FormGroup>
                    <template #label
                        >Email
                        <small class="errMsg" ref="errMsg" v-if="errors.email">
                            {{ errors.email[0] }}
                        </small>
                    </template>
                    <template #input>
                        <input
                            type="email"
                            name="email"
                            v-model="form.email"
                            placeholder="Email"
                            required
                            autofocus
                        />
                    </template>
                </FormGroup>

                <FormGroup>
                    <template #label
                        >Password
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.password"
                        >
                            {{ errors.password[0] }}
                        </small>
                    </template>
                    <template #input>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            v-model="form.password"
                            pattern=".{8,}"
                            required
                        />
                    </template>
                </FormGroup>

                <FormGroup class="remember_me-wrapper">
                    <template #input>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="remember-me"
                            class="remember_me"
                            v-model="form.rmb_me"
                        />
                    </template>

                    <template #label> Remember Me </template>
                </FormGroup>
                <Button
                    class="mb-2 login-button"
                    @click.prevent="$emit('submitForm')"
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

                <div class="back-to-home-wrapper">
                    <router-link to="/register" class="back-to-home">
                        Go to Register
                    </router-link>
                </div>
            </form>
        </Card>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import FormGroup from "@/components/FormGroup.vue";
import Button from "@/components/Button.vue";
import LightDarkMode from "@/components/LightDarkMode.vue";

export default {
    props: ["form", "isClicked", "errors", "typeOfUser"],
    components: { Banner, Card, FormGroup, Button, LightDarkMode },
    data() {
        return {
            lightMode: true,
        };
    },
    methods: {
        switchColor() {
            this.lightMode = !this.lightMode;
            document.querySelector(".mode").classList.add("spinOneTime");
            setTimeout(() => {
                document.querySelector(".mode").classList.remove("spinOneTime");
            }, 800);
        },
    },
};
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding: 0 0.6rem;
}

.card {
    border-radius: 14px;
    padding: 2rem;
    width: 500px;
    min-height: 500px;
    margin: 0.4rem;
}

.card h1 small {
    font-size: 20px;
    margin-left: 0.2rem;
    color: rgba(236, 236, 240, 0.3);
}

.login-details {
    color: rgba(236, 236, 240, 0.3);
}

.login-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form .form-group input:not(.remember_me) {
    display: block;
    width: 100%;
    padding: 0.8rem 1.4rem;
    border-radius: 14px;
    outline: none;
    border: none;
    background: rgba(236, 236, 240, 0.1);
    color: #fff;
}
.remember_me-wrapper {
    display: flex;
    align-items: center;
}

.remember_me-wrapper .remember_me {
    appearance: none;
    border-radius: 6px;
    font-weight: 900;
    padding: 0.6rem;
    height: 1rem;
    width: 1rem;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    order: -1;
    margin-right: 0.8rem;
    background: rgba(236, 236, 240, 0.1);
    font-size: 0.8rem;
}

.remember_me-wrapper .remember_me::after {
    content: "🗸";
    color: #fff;
    display: none;
}
.remember_me-wrapper .remember_me:hover {
    background: rgba(236, 236, 240, 0.1);
}
.remember_me-wrapper .remember_me:checked {
    background: #efa726;
}
.remember_me-wrapper .remember_me:checked:after {
    display: inline-block;
}

.back-to-home-wrapper {
    display: flex;
    justify-content: flex-end;
}

.back-to-home {
    color: rgba(236, 236, 240, 0.3);
    text-decoration: none;
    font-size: 0.8rem;
}
</style>
