<template>
    <AdminLayout @logout="logoutAdmin">
        <template #section-title>
            <h2 class="section-title">Dashboard</h2>
        </template>
        <template #section>
            <div class="stats-wrapper">
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
            </div>
        </template>
    </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import Card from "@/components/Card.vue";
import { mapActions } from "vuex";

export default {
    components: { AdminLayout, Card },

    data() {
        return {
            isClose: false,
            isOpenDropDown: false,
        };
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
