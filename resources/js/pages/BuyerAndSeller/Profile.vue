<template>
    <Settings>
        <h2>Profile</h2>
        <FormGroup>
            <template #label>First Name</template>
            <template #input>
                <input
                    type="text"
                    name=""
                    id=""
                    :value="user.first_name"
                    readonly
                />
            </template>
        </FormGroup>
        <FormGroup>
            <template #label>Middle Name</template>
            <template #input>
                <input
                    type="text"
                    name=""
                    id=""
                    :value="user.middle_name"
                    readonly
                />
            </template>
        </FormGroup>
        <FormGroup>
            <template #label>Last Name</template>
            <template #input>
                <input
                    type="text"
                    name=""
                    id=""
                    :value="user.last_name"
                    readonly
                />
            </template>
        </FormGroup>
        <FormGroup>
            <template #label>Extension Name</template>
            <template #input>
                <input
                    type="text"
                    name=""
                    id=""
                    :value="user.ext_name"
                    readonly
                />
            </template>
        </FormGroup>
        <FormGroup>
            <template #label>Birthday</template>
            <template #input>
                <input type="text" name="" id="" />
            </template>
        </FormGroup>
        <FormGroup>
            <template #label>Contact Number</template>
            <template #input>
                <input type="text" name="" id="" />
            </template>
        </FormGroup>
    </Settings>
</template>

<script>
import Settings from "./Settings.vue";
import FormGroup from "../../components/FormGroup.vue";

export default {
    components: { Settings, FormGroup },
    data() {
        return {
            user: {},
        };
    },
    mounted() {
        axios.get("api/user").then((resp) => {
            this.user = resp.data;
        });
    },
};
</script>

<style scoped>
section .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3rem 20rem 3rem 10rem;
    border: 2px solid rgba(236, 236, 240, 0.3);
    border-left: 0;
}

section .main-content .form-group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 1rem;
    margin-bottom: 5rem;
}

section .main-content {
    margin-top: 0;
    font-size: 1rem;
}

section .main-content h2 {
    margin-bottom: 4rem;
}

section .main-content .form-group :deep(.form-label) {
    margin-top: 0;
    font-size: 1rem;
    font-weight: 500;
}

section .main-content .form-group input {
    flex-basis: 30rem;
    border: none;
    outline: none;
    background: rgba(236, 236, 240, 0.3);
    padding: 1.2rem 2.2rem;
    font-family: inherit;
    letter-spacing: 0.1em;
    border-radius: 5px;
    color: #888;
}
</style>
