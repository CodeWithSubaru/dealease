<template>
    <div class="backdrop">
        <Card class="card">
            <slot>
                <span
                    class="material-symbols-rounded"
                    v-if="result.success"
                    v-show="useIcon"
                >
                    check_circle
                </span>
                <span class="material-symbols-rounded" v-else> error </span>
                <div class="card__inner_wrapper">
                    <h2>
                        <span v-if="result.success">Success</span>
                        <span v-else>Error</span>
                    </h2>
                    <p v-html="result.message"></p>
                </div>
            </slot>
        </Card>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
    props: ["result", "useIcon"],
    components: { Card },
};
</script>

<style scoped>
.backdrop {
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    display: flex;
    padding: 4rem 2.5rem;
    background: rgb(236, 236, 240);
    color: black;
    max-width: 25rem;
    min-height: 10rem;
    border-radius: 5px;
    transition: all 1s;
    animation: none;
}
.material-symbols-rounded {
    color: green;
    font-size: 40px;
    margin-right: 1rem;
}

:deep(.closeBtn) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    color: green;
    font-size: 30px;
    margin-top: -2.5rem;
    margin-right: -1rem;
    cursor: pointer;
}
</style>
