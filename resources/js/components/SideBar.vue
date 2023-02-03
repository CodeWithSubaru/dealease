<template>
    <nav class="sidebar" :class="{ close: isClose }">
        <div class="title-wrapper">
            <h1>Dealease</h1>
            <span class="material-symbols-rounded" @click="$emit('menu')">
                menu
            </span>
        </div>

        <router-link to="/dashboard" class="nav-link">
            <span class="material-symbols-rounded"> dashboard </span>
            <span class="link-title"> Dashboard</span>
        </router-link>
        <router-link to="/users" class="nav-link">
            <span class="material-symbols-rounded"> person </span>
            <span class="link-title"> Users</span>
        </router-link>
        <router-link to="/posts" class="nav-link">
            <span class="material-symbols-rounded"> dashboard </span>
            <span class="link-title">Posts</span>
        </router-link>
        <router-link to="/incident-report" class="nav-link">
            <span class="material-symbols-rounded"> dashboard </span>
            <span class="link-title">Incident Report</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    props: ["isClose"],
};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    background: #121627;
    max-width: 300px;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0.4rem 0 1rem #0c1123;
    padding: 1.5rem;
    z-index: 12;
    transition: all 0.3s ease-in;
}

.sidebar .title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.sidebar .title-wrapper span {
    cursor: pointer;
    align-self: center;
}

.sidebar.close {
    align-items: center;
    max-width: 80px;
}

.sidebar.close .title-wrapper {
    flex-direction: column-reverse;
    justify-content: space-between;
    row-gap: 1.5rem;
    font-size: 0.6rem;
    transition: all 0.3s ease-in;
}

.sidebar.close .link-title {
    visibility: hidden;
    width: 0;
    height: 0;
    transition: all 0.3s ease-in;
}

nav .nav-link {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
    font-size: 1rem;
    text-decoration: none;
    color: rgba(236, 236, 240, 0.3);
    padding: 0.8rem;
    transition: all 0.3s ease-in;
}

nav .nav-link:hover {
    color: #fff;
}

@media screen and (max-width: 632px) {
    .sidebar {
        align-items: center;
        max-width: 100px;
    }
    .sidebar .link-title {
        display: none;
    }

    .sidebar .title-wrapper {
        flex-direction: column-reverse;
        justify-content: space-between;
        row-gap: 1.5rem;
        font-size: 0.8rem;
        transition: all 0.3s ease-in;
    }
}

@media screen and (max-width: 425px) {
    .sidebar .title-wrapper {
        font-size: 0.4rem;
    }
}
</style>
