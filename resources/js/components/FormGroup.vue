<template>
    <div class="form-group">
        <label for="" class="form-label"><slot name="label" /></label>
        <slot name="input"> </slot>
    </div>
</template>

<script>
export default {
    props: ["type"],
};
</script>

<style scoped>
.form-group label {
    display: inline-block;
    color: #efa726;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin: 1.2rem 0.2rem 0.8rem;
}
</style>
