<template #navbar>
    <router-link to="/">
        <span class="material-symbols-rounded snd"> home </span>
        Home
    </router-link>

    <router-link to="/message" v-if="authenticated">
        <span class="material-symbols-rounded snd"> home </span>
        Message
    </router-link>

    <router-link to="/profile" v-if="authenticated">
        <span class="material-symbols-rounded snd"> home </span>
        Settings
    </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            authenticated: "auth/authenticated",
        }),
    },
};
</script>

<style>
.center {
    justify-content: center;
}
</style>
