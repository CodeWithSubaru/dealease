<template>
    <main>
        <SideBar :isClose="isClose" @menu="closeBar" />

        <section>
            <Banner
                @expand="openDropDown"
                :isOpenDropDown="isOpenDropDown"
                :authenticated="authenticated"
            >
                <template #banner-title><span></span></template>
                <template #logout>
                    <li @click.prevent="logoutAdmin">Logout</li>
                </template>
                <template #user-name>
                    {{ user.first_name }}
                </template>
            </Banner>

            <Modal
                :useIcon="true"
                v-if="result.message"
                :result="result"
            ></Modal>

            <h2 class="section-title">Dashboard</h2>

            <div class="stats-wrapper">
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
            </div>
        </section>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import SideBar from "@/components/SideBar.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: { Button, Card, SideBar, Banner, Modal },

    data() {
        return {
            isClose: false,
            isOpenDropDown: false,
        };
    },

    computed: {
        ...mapGetters({
            result: "auth/result",
            user: "auth/user",
            authenticated: "auth/authenticated",
        }),
    },

    mounted() {
        document.addEventListener("click", this.closeDropDown);
    },

    methods: {
        ...mapActions({
            logoutAdmin: "auth/logoutAdmin",
        }),

        closeBar() {
            this.isClose = !this.isClose;
        },

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
    display: flex;
}

main nav {
    position: sticky;
    top: 0;
    flex: 1;
}

main section {
    flex: 2;
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
}

main section :deep(.banner) p {
    justify-content: flex-end;
    display: flex;
    column-gap: 1rem;
}

main section .section-title {
    margin: 1.5rem 2rem;
}

main section .stats-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

main section .card {
    margin: 0 1rem 1rem;
    padding: 2rem;
    height: 10rem;
    width: 20rem;
}
</style>
