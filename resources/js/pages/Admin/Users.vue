<template>
    <AdminLayout @logout="logoutAdmin">
        <template #section-title>
            <h2 class="section-title">Users</h2>
        </template>
        <template #section>
            <Modal
                :useIcon="true"
                v-if="getResultMsg.message"
                :result="getResultMsg"
            ></Modal>

            <button @click="createUserModal">
                <span class="material-symbols-rounded"> add </span>
            </button>

            <CreateUser
                :createUserOpenModal="createUserOpenModal"
                :formUser="formUser"
                :errors="errors"
                @createUser="submitCreatedUser(formUser)"
                @cancel="createUserModal"
            >
            </CreateUser>

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
                            <span
                                class="material-symbols-rounded"
                                @click.prevent="editUserModal(obj.id)"
                            >
                                edit
                            </span>

                            <span
                                class="material-symbols-rounded"
                                @click.prevent="deleteUser(obj.id)"
                                >delete</span
                            >
                        </td>
                    </tr>
                    <a
                        v-for="link in getPaginate.links"
                        :key="link"
                        @click="showMoreUser(link.url)"
                        v-html="link.label"
                        :title="link.url"
                    >
                    </a>

                    <EditUser
                        :editUserOpenModal="editUserOpenModal"
                        :formEditUser="formEditUser"
                        :errors="errors"
                        @updateUser="updateUser(formUser)"
                        @cancel="editUserModal"
                    >
                    </EditUser>
                </template>
            </Table>
        </template>
    </AdminLayout>
</template>

<script>
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import CreateUser from "@/components/UserForm/CreateUser.vue";
import EditUser from "@/components/UserForm/EditUser.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        Table,
        AdminLayout,
        Card,
        Modal,
        Button,
        CreateUser,
        EditUser,
    },
    data() {
        return {
            columns: ["id", "name", "email", "actions"],
            createUserOpenModal: false,
            editUserOpenModal: false,
            formUser: {
                name: null,
                email: null,
                password: null,
            },
            formEditUser: {
                name: null,
                email: null,
                password: null,
            },
        };
    },
    computed: {
        ...mapGetters({
            getAllUserColumns: "users/getAllUserColumns",
            getPaginate: "users/getPaginate",
            getAllUsers: "users/getAllUsers",
            getEditUser: "users/getEditUser",
            getResultMsg: "users/getResultMsg",
            errors: "users/getErrMsg",
        }),
    },

    mounted() {
        this.getUsers();
    },

    methods: {
        ...mapActions({
            logoutAdmin: "auth/logoutAdmin",
            getUsers: "users/getUsers",
            showMoreUser: "users/showMoreUser",
            createUser: "users/createUser",
            editUser: "users/editUser",
            updateUser: "users/updateUser",
            deleteUser: "users/deleteUser",
            clearErr: "users/clearErr",
        }),

        createUserModal() {
            this.createUserOpenModal = !this.createUserOpenModal;
            this.clearErr();
        },

        submitCreatedUser(form) {
            this.createUser(form);

            if (this.getResultMsg.success) {
                this.createUserOpenModal = false;
                console.log("suc");
            } else {
                console.log("dd");
                this.createUserOpenModal = true;
            }
        },

        editUserModal(id) {
            this.editUserOpenModal = !this.editUserOpenModal;
            this.editUser(id);
            this.clearErr();
        },
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
