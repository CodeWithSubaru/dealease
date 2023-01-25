<template>
    <nav>
        <slot />
        <router-link to="/">
            <span class="material-symbols-rounded"> home </span>
            Home
        </router-link>
        <router-link to="/message">
            <span class="material-symbols-rounded snd"> chat </span>
            Message
        </router-link>
        <router-link to="/profile">
            <span class="material-symbols-rounded"> settings </span>
            Settings
        </router-link>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    background: #121627;
    box-shadow: 0rem 0 2rem #0c1123;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    width: 100%;
    z-index: 10;
}

nav a {
    display: flex;
    flex-direction: column;
    left: 0;
    font-size: 12px;
    align-items: center;
    text-decoration: none;
    padding: 0.6rem 1rem;
    color: rgba(236, 236, 240, 0.3);
}

nav a.router-link-active,
nav a.router-link-active .material-symbols-rounded {
    color: #efa726;
    font-variation-settings: "FILL" 1;
}

@media screen and (min-width: 1024px) {
    nav {
        position: sticky;
        top: 5.2rem;
        left: 0;
        margin-bottom: 2rem;
        transform: translateX(0);
        width: 100%;
        justify-content: space-evenly;
        box-shadow: unset;
    }

    nav a {
        display: flex;
        justify-content: center;
        flex-direction: row;
        column-gap: 0.3rem;
        font-size: 1rem;
        width: 100%;
        transition: all 0.4s ease-in;
    }
}
</style>
