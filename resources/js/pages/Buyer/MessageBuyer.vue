<template>
    <MessageComponent @logout="logout">
        <template #navbar-comp><Navbar></Navbar></template>
    </MessageComponent>
</template>

<script>
import MessageComponent from "@/components/MessageComponent.vue";
import Navbar from "@/components/NavbarBuyer/Navbar.vue";
import { mapActions } from "vuex";

export default {
    components: { MessageComponent, Navbar },

    methods: {
        ...mapActions({
            logout: "auth/logoutBuyer",
        }),
    },
};
</script>
