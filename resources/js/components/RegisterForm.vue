<template>
    <main>
        <Banner>
            <template #banner-username>
                <span></span>
            </template>
        </Banner>

        <Card class="card">
            <h1>Register</h1>

            <div class="register-description mb-1">
                <p class="register-details">Please provide your details</p>
                <Card class="card register-note">
                    <span class="material-symbols-rounded bulb">
                        tips_and_updates
                    </span>
                    <ul>
                        <h4>Take Note:</h4>
                        <li>All fields with asterisk (*) are required</li>
                    </ul>
                </Card>
                <slot name="login-img" />
            </div>

            <form class="form">
                <slot name="form-top"></slot>
                <slot name="form-bottom"></slot>

                <Button
                    class="my-2 register-button btn"
                    ref="btn"
                    @click.prevent="$emit('register')"
                >
                    <p>
                        <span v-if="!loading"> Register </span>
                        <span v-else>
                            <span class="material-symbols-rounded spin">
                                autorenew
                            </span>
                            Processing
                        </span>
                    </p>
                </Button>

                <div class="back-to-home-wrapper">
                    <router-link to="/login" class="back-to-home">
                        Go to Login
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

export default {
    components: { Banner, Card, FormGroup, Button },
    props: ["form", "loading"],

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
                        console.log(e.response.data);
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
:deep(.banner) {
    position: sticky;
    margin-bottom: 2rem;
    width: 100%;
}

main {
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
    width: 850px;
    margin: 0.4rem auto;
    background: #fff;
}

.card h1,
:deep(.personal-details),
:deep(.account-details),
:deep(.address-details) {
    color: #efa926;
}

.register-description {
    display: flex;
    flex-direction: column;
}

:deep(.account-details),
:deep(.personal-details) {
    flex: 1;
}
.register-details {
    color: rgba(236, 236, 240, 0.3);
}

.register-note {
    background: #efa926 !important;
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    column-gap: 2rem;
}

.register-note .bulb {
    display: flex;
    font-size: 1.4rem;
    margin-top: 0.3rem;
}

.register-note ul h4 {
    margin-left: -1.2rem;
    margin-bottom: 0.5rem;
}

.form h3 {
    margin-bottom: 5px;
}
.form hr {
    height: 2px;
    background: #999;
    border: none;
}

.form :deep(.form-top) {
    display: flex;
    column-gap: 2rem;
    margin-bottom: 1rem;
}

.form :deep(.account-details),
.form :deep(.address-details) {
    flex: 1;
}

.form .form-bottom {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.5rem;
}

.form :deep(.form-group input:not(.remember_me)),
.form :deep(.form-group select) {
    display: block;
    width: 100%;
    padding: 0.8rem 1.4rem;
    border-radius: 14px;
    outline: 0;
    border: 1px solid #dfdede;
    background: rgba(236, 236, 240, 0.1);
    color: #888;
}

.form :deep(.form-group select) {
    appearance: none;
}

.form .form-group select > option {
    color: #888;
    font-size: 16px;
}

.form :deep(.form-group select ~ .expand_more) {
    float: right;
    clear: both;
    position: relative;
    right: 10px;
    top: -30px;
    font-size: 20px;
}

.register-button {
    padding: 0.8rem 1.4rem;
    font-size: 0.8rem;
    background: #efa726;
    color: #fff;
}

.register-button p,
.register-button p span {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.2rem;
    color: #fff;
}

.register-button:hover {
    background: #d69215;
}

.back-to-home-wrapper {
    display: flex;
    justify-content: flex-end;
}

.back-to-home {
    color: #efa726;
    text-decoration: none;
    font-size: 0.8rem;
}
</style>
