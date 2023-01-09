<template>
    <main>
        <Banner>
            <template #banner-title> Fisher</template>
            <template #banner-username>
                <router-link to="/login" class="login-button-home">
                    Login
                </router-link>
                <router-link to="/register" class="signup-button-home">
                    Sign up
                </router-link>
            </template>
            <template #banner-username-img>
                <LightDarkMode
                    :switchColor="switchColor"
                    :lightMode="lightMode"
                />
            </template>
        </Banner>
        <NavBar />
        <Modal :result="result" v-if="result" />

        <section><slot /></section>
    </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";
import LightDarkMode from "@/components/LightDarkMode.vue";
import Modal from "@/components/Modal.vue";

export default {
    components: {
        Banner,
        Button,
        Modal,
        LightDarkMode,
        NavBar,
    },
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
    position: relative;
    padding: 0 1.5rem 1rem;
}

.banner .banner-user .login-button-home,
.banner .banner-user .signup-button-home {
    border-radius: 5px;
    box-shadow: none;
    outline: 0;
    width: 8rem;
    padding: 1rem 0.8rem;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    transition: all 0.3s ease-in;
}

.banner .banner-user .login-button-home {
    background: #efa726;
}
.banner .banner-user .signup-button-home {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    margin: 0 1rem;
}

.banner .banner-user .login-button-home:hover {
    background: #d69215;
}
.banner .banner-user .signup-button-home:hover {
    background: #d69316;
    outline: 2px solid #d69316;
    color: #fff;
}

.banner .banner-user .lightDarkMode {
    width: 55px;
}

section {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
}

section .settings-wrapper {
    display: flex;
}

section .sidebar-settings {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 15%;
    border: 2px solid rgba(236, 236, 240, 0.3);
}

section nav a.router-link-active {
    color: #efa726;
    font-variation-settings: "FILL" 1;
}

section .sidebar-settings a {
    font-size: 1.1rem;
    margin: 0 0.8rem;
    text-decoration: none;
    color: #fff;
    padding: 0.4rem 0.6rem;
}

section .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3rem 20rem 3rem 10rem;
    border: 2px solid rgba(236, 236, 240, 0.3);
    border-left: 0;
}
</style>
