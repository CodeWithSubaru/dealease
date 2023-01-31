<template>
    <table>
        <thead>
            <tr>
                <th v-for="(title, i) in titles" :key="i">{{ title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="obj of data" :key="obj.id">
                <td>{{ obj.id }}</td>
                <td>{{ obj.name }}</td>
                <td>Edit Delete</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import DataTable from "datatables.net-vue3";

export default {
    components: { DataTable },
    data() {
        return {
            columns: [{ data: "id" }, { data: "name" }],
            data: [{ id: 1, name: "Tiger Nixon" }],
            titles: ["Id", "Name", "Action"],
            data: [
                { id: 1, name: "Admin" },
                { id: 2, name: "User" },
            ],
        };
    },
};
</script>

<style scoped>
table {
    min-width: 500px;
    border: 1px solid #dfdede;
    color: #888;

    border-radius: 5px;
}

table thead,
table tbody {
    border-collapse: collapse;
}

table thead tr th {
    border-bottom: 1px solid #dfdede;
    text-align: left;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
}

table thead tr th:first-child,
table tbody tr td:first-child {
    padding: 0.5rem 1.2rem;
    width: 1rem;
}

table tbody tr td {
    padding: 1.4rem 2rem;
    color: rgba(0, 0, 0, 0.7);
}

table tbody tr:not(:last-child) td {
    border-bottom: 1px solid #dfdede;
}
</style>
