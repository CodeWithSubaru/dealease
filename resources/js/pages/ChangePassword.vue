<template>
    <Settings>
        <h2>Profile</h2>

        <label for="">Old Password</label>
        <input type="text" id="" name="" /><br /><br />
        <label for="">New Password</label>
        <input type="text" id="" name="" /><br /><br />
        <label for="">Confirm Password</label>
        <input type="text" id="" name="" /><br /><br />
        <input type="submit" value="Submit" />
    </Settings>
</template>

<script>
import Settings from "@/pages/Settings.vue";
import Table from "@/components/Table.vue";

export default {
    components: { Table, Settings },
};
</script>
