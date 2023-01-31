<template>
    <main>
        <Banner>
            <template #banner-username>
                <span></span>
            </template>
        </Banner>
        <Modal :useIcon="true" v-if="result.message" :result="result"></Modal>

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
                        <span v-if="!loading"> Login </span>
                        <span v-else>
                            <span class="material-symbols-rounded spin">
                                autorenew
                            </span>
                            Processing
                        </span>
                    </p>
                </Button>

                <div class="back-to-home-wrapper">
                    <p class="back-to-home" @click="openModal = !openModal">
                        Go to Register
                    </p>
                </div>

                <Modal :useIcon="false" v-if="openModal">
                    <div class="modal">
                        <span
                            class="material-symbols-rounded closeBtn"
                            @click="openModal = !openModal"
                        >
                            cancel
                        </span>
                        <h2>What would you like to create?</h2>

                        <div class="modal-options">
                            <div class="modal-option">
                                <router-link to="/new/register">
                                    New Account
                                </router-link>
                            </div>

                            <div class="modal-option">
                                <router-link to="/register">
                                    Existing Account
                                </router-link>
                            </div>
                        </div>
                    </div>
                </Modal>
            </form>
        </Card>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import FormGroup from "@/components/FormGroup.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";

export default {
    props: ["form", "loading", "errors", "typeOfUser", "result"],
    components: { Banner, Card, FormGroup, Button, Modal },
    data() {
        return {
            openModal: false,
        };
    },
};
</script>

<style scoped>
:deep(.banner) {
    position: sticky;
    margin-bottom: 2rem;
    width: 100%;
}

.card {
    border-radius: 14px;
    padding: 2rem;
    width: 500px;
    min-height: 500px;
    margin: auto;
}

.card h1 {
    color: #efa726;
}
.card h1 small {
    font-size: 20px;
    margin-left: 0.2rem;
    color: #efa726;
}

.login-details {
    color: #888 !important;
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
    border: 1px solid #dfdede;
    color: #888;
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
    border: 1px solid #dfdede;
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
    color: #efa726;
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
}
.login-button p {
    color: #fff !important;
}
.modal {
    flex-direction: column;
}

.modal-option {
    display: block;
}

.modal-option input {
    margin-right: 0.8rem;
}
</style>
