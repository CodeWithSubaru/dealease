<template>
    <main>
        <Banner
            @expand="openDropDown"
            :isOpenDropDown="isOpenDropDown"
            :showBtn="showBtn"
        />
        <NavBar />
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
        };
    },

    mounted() {
        if (localStorage.getItem("token")) {
            this.showBtn = false;
        }

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
