<template>
    <ProfileComponent :user="user" @logout="logout">
        <template #navbar-comp>
            <Navbar></Navbar>
        </template>
    </ProfileComponent>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
import Navbar from "@/components/NavbarBuyer/Navbar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: { ProfileComponent, Navbar },

    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },

    methods: {
        ...mapActions({
            logout: "auth/logoutBuyer",
        }),
    },
};
</script>
