<template>
    <Modal :useIcon="false" v-if="openModal">
        <div class="modal">
            <span
                class="material-symbols-rounded closeBtn"
                @click="$emit('cancel')"
            >
                cancel
            </span>
            <h2>What would you like to create?</h2>

            <div class="modal-options">
                <div class="modal-option">
                    <router-link to="/new/register"> New Account </router-link>
                </div>

                <div class="modal-option">
                    <router-link to="/register"> Existing Account </router-link>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
    components: { Modal },
    props: ["openModal"],
};
</script>

<style>
.modal {
    flex-direction: column;
}

.modal-option {
    display: block;
}

.modal-option input {
    margin-right: 0.8rem;
}
</style>
