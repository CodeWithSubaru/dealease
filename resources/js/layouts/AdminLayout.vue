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
                    <li @click.prevent="$emit('logout')">Logout</li>
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

            <slot name="section-title"></slot>

            <slot name="section"></slot>
        </section>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import SideBar from "@/components/SideBar.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
    components: { Banner, Button, SideBar, Banner, Modal },
    data() {
        return {
            showBtn: true,
            isOpenDropDown: false,
        };
    },

    mounted() {
        document.addEventListener("click", this.closeDropDown);
    },

    computed: {
        ...mapGetters({
            result: "auth/result",
            user: "auth/user",
            authenticated: "auth/authenticated",
        }),
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

main section :deep(.section-title) {
    margin: 1.5rem 2rem;
}

main section :deep(.stats-wrapper) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

main section :deep(.card) {
    margin: 0 1rem 1rem;
    padding: 2rem;
    height: 10rem;
    width: 20rem;
}

.backdrop :deep(.card) {
    padding-top: 3rem;
}
</style>
