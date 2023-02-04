<template>
    <table>
        <thead>
            <tr>
                <slot name="thead"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ["columns", "data"],
};
</script>

<style scoped>
table {
    min-width: 500px;
    color: #888;
    border: 1px solid #dfdede;
    border-radius: 5px;
}

table :deep(thead),
table :deep(tbody) {
    border-collapse: collapse;
}

table :deep(thead tr th) {
    border-bottom: 1px solid #dfdede;
    text-align: left;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
}

table :deep(thead tr th:first-child),
table :deep(tbody tr td:first-child) {
    padding: 0.5rem 1.2rem;
    width: 1rem;
}

table :deep(tbody tr td) {
    padding: 1.4rem 2rem;
    color: rgba(0, 0, 0, 0.7);
}

table :deep(tbody tr:not(:last-child) td) {
    border-bottom: 1px solid #dfdede;
}
</style>
