<template>
    <AdminLayout @logout="logoutAdmin">
        <template #section-title>
            <h2 class="section-title">Users</h2>
        </template>
        <template #section>
            <Table></Table>
        </template>
    </AdminLayout>
</template>

<script>
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { mapActions } from "vuex";

export default {
    components: { Table, AdminLayout, Card },

    methods: {
        ...mapActions({
            logoutAdmin: "auth/logoutAdmin",
        }),
    },
};
</script>

<style scoped>
table {
    margin: 0 auto;
    background: #fff;
    min-width: 900px;
}
</style>
