<template>
    <HomeLayout>
        <template #navbar>
            <router-link to="/">
                <span class="material-symbols-rounded snd"> home </span>
                Home
            </router-link>
        </template>

        <h2 class="mb-1">Settings</h2>
        <div class="settings-wrapper">
            <nav class="sidebar-settings">
                <router-link to="/profile">Profile</router-link>
                <router-link to="/">Change Password</router-link>
                <a @click.prevent="logout">Logout</a>
            </nav>
            <div class="main-content">
                <slot />
            </div>
        </div>
    </HomeLayout>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout.vue";

export default {
    components: { HomeLayout },
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
