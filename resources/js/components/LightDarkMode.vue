<template>
    <Button class="lightDarkMode" title="light_mode" @click="switchColor">
        <span class="material-symbols-rounded mode">
            <span v-if="lightMode"> light_mode</span>
            <span v-else> dark_mode</span>
        </span>
    </Button>
</template>

<script>
import Button from "./Button.vue";

export default {
    props: ["switchColor", "lightMode"],
    components: { Button },
};
</script>

<style scoped>
.lightDarkMode {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
