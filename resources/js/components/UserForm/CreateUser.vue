<template>
    <Modal :useIcon="false" v-if="createUserOpenModal" :result="''">
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
                    <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="formUser.name"
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
                        v-model="formUser.email"
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
                        v-model="formUser.password"
                    />
                    <small class="errMsg" v-if="errors.password">
                        {{ errors.password[0] }}
                    </small>
                </div>

                <Button @click.prevent="$emit('createUser')">Submit</Button>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "../Modal.vue";
import Button from "../Button.vue";

export default {
    props: ["createUserOpenModal", "formUser", "errors"],
    components: { Modal, Button },
};
</script>
