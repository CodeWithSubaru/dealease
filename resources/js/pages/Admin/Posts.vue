<template>
    <AdminLayout @logout="logoutAdmin">
        <template #section-title>
            <h2 class="section-title">Posts</h2>
        </template>
        <template #section>
            <Table></Table>
        </template>
    </AdminLayout>
</template>

<script>
import Table from "@/components/Table.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { mapActions } from "vuex";

export default {
    components: { Table, AdminLayout },

    methods: {
        ...mapActions({
            logoutAdmin: "auth/logoutAdmin",
        }),
    },
};
</script>
