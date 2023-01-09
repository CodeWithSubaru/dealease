<template>
    <div class="banner">
        <h1>
            <slot name="banner-title" class="banner-title"> Dealease </slot>
        </h1>
        <p class="banner-user">
            <slot name="banner-username">Hi, {{ name }}</slot>
            <slot name="banner-username-img" />
        </p>
    </div>
</template>

<script>
export default {
    props: ["name"],
};
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem;
    background: #121627;
    box-shadow: 0 0.4rem 1rem #0c1123;
    z-index: 10;
}

.banner-user {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
    color: rgba(236, 236, 240, 0.7);
}
</style>
