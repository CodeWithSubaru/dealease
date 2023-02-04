<template>
    <AdminLayout @logout="logoutAdmin">
        <template #section-title>
            <h2 class="section-title">Users</h2>
        </template>
        <template #section>
            <button>
                <span class="material-symbols-rounded" @click="openModal">
                    add
                </span>
            </button>

            <Modal :useIcon="false" v-if="!openModal">
                <div class="modal">
                    <span
                        class="material-symbols-rounded closeBtn"
                        @click="$emit('cancel')"
                    >
                        cancel
                    </span>
                    <h2>Create User</h2>

                    <div class="modal-form">
                        <div>
                            <label for="">Name</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label for="">Email</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div>
                            <label for="">Password</label>
                            <input type="password" name="" id="" />
                        </div>
                    </div>
                </div>
            </Modal>

            <Table>
                <template #thead>
                    <th v-for="column of columns" :key="column">
                        {{ column }}
                    </th>
                </template>
                <template #tbody>
                    <tr v-for="obj in getAllUsers" :key="obj.id">
                        <td>{{ obj.id }}</td>
                        <td>{{ obj.name }}</td>
                        <td>{{ obj.email }}</td>
                        <td>
                            <span class="material-symbols-rounded"> edit </span>
                            <span class="material-symbols-rounded">delete</span>
                        </td>
                    </tr>
                </template>
            </Table>
        </template>
    </AdminLayout>
</template>

<script>
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { Table, AdminLayout, Card, Modal },
    data() {
        return {
            columns: ["id", "name", "email", "actions"],
            openModal: false,
        };
    },
    computed: {
        ...mapGetters({
            getAllUserColumns: "users/getAllUserColumns",
            getAllUsers: "users/getAllUsers",
        }),
    },

    mounted() {
        this.getUsers();
    },

    methods: {
        ...mapActions({
            logoutAdmin: "auth/logoutAdmin",
            getUsers: "users/getUsers",
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

table tr th:last-child,
table tr td:last-child {
    text-align: center;
    display: flex;
    column-gap: 0.4rem;
    color: #888;
}

table tr td:last-child {
    cursor: pointer;
}

/* Modal */

.card {
    min-height: unset;
}

.modal {
    padding-top: 3rem;
    flex-direction: column;
}

.modal-form {
    display: block;
}

.modal-form input {
    margin-right: 0.8rem;
}
</style>
