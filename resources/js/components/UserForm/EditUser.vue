<template>
    <Modal :useIcon="false" v-if="editUserOpenModal" :result="''">
        <div class="modal">
            <span
                class="material-symbols-rounded closeBtn"
                @click="$emit('cancel')"
            >
                cancel
            </span>
            <h2>Edit User</h2>

            <div class="modal-form">
                <div>
                    <label for="">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="formEditUser.name"
                    />

                    <small class="errMsg" v-if="errors.name">
                        {{ errors.name[0] }}
                    </small>
                </div>

                <div>
                    <label for="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        v-model="formEditUser.email"
                    />

                    <small class="errMsg" v-if="errors.email">
                        {{ errors.email[0] }}
                    </small>
                </div>

                <div>
                    <label for="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        v-model="formEditUser.password"
                    />
                    <small class="errMsg" v-if="errors.password">
                        {{ errors.password[0] }}
                    </small>
                </div>

                <Button @click.prevent="$emit('updateUser')">Submit</Button>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue";
import Button from "../Button.vue";

export default {
    props: ["editUserOpenModal", "formEditUser", "errors"],
    components: { Modal, Button },

    // editUser(obj.id)
};
</script>
