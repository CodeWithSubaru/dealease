<template>
    <main class="loading">
        <Banner
            @expand="openDropDown"
            :isOpenDropDown="isOpenDropDown"
            :showBtn="showBtn"
        >
            <template #logout>
                <li @click.prevent="$emit('logout')">Logout</li>
            </template>

            <template #user-name>
                {{ first_name }}
            </template>
        </Banner>

        <NavBar>
            <template #home> <slot name="navbar"></slot></template>
        </NavBar>
        <Modal :result="result" v-if="result" />

        <section><slot /></section>
    </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";

export default {
    components: {
        Banner,
        Button,
        Modal,
        NavBar,
    },
    data() {
        return {
            showBtn: true,
            isOpenDropDown: false,
            first_name: null,
        };
    },

    beforeCreate() {
        axios.get("api/user").then((resp) => {
            localStorage.setItem("first_name", resp.data.first_name);
            this.first_name = localStorage.getItem("first_name");
        });
    },

    mounted() {
        if (localStorage.getItem("token")) {
            this.showBtn = false;
        }

        this.first_name = localStorage.getItem("first_name");

        document.addEventListener("click", this.closeDropDown);
    },

    methods: {
        openDropDown() {
            this.isOpenDropDown = !this.isOpenDropDown;
        },

        closeDropDown(e) {
            if (e.target.id !== "dropdown") {
                this.isOpenDropDown = false;
            }
        },
    },
};
</script>

<style scoped>
main {
    position: relative;
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
