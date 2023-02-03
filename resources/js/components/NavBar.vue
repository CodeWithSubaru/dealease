<template>
    <nav>
        <slot></slot>
    </nav>
</template>

<style scoped>
/* Mobile */
nav {
    display: flex;
    padding: 0.6rem;
    justify-content: space-around;
    background: #121627;
    box-shadow: 0 0 2rem #0c1123;
    background-color: #fff;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    bottom: 1px;
    width: 100%;
    z-index: 10;
}

nav :deep(a) {
    display: flex;
    flex-direction: column;
    left: 0;
    font-size: 12px;
    align-items: center;
    text-decoration: none;
    padding: 0.6rem 2rem;
    color: #424144;
}

nav :deep(a.router-link-active) {
    border-bottom: 10px solid #009688;
}

nav :deep(a.router-link-active),
nav :deep(a.router-link-active .material-symbols-rounded) {
    color: #424144;
    font-variation-settings: "FILL" 1;
}

/* Desktop  */
@media screen and (min-width: 1024px) {
    nav {
        position: sticky;
        top: 4.5rem;
        left: 0;
        margin-bottom: 2rem;
        transform: translateX(0);
        width: 100%;
        box-shadow: unset;
        display: flex;
        column-gap: 0.5rem;
        justify-content: space-around;
        background-color: transparent;
    }

    nav :deep(a) {
        border-radius: 25px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        column-gap: 0.3rem;
        font-size: 1rem;
        width: 100%;
        border: 2px solid #009688;
        transition: all 0.4s ease-in;
        background-color: #fff;
    }
}
</style>
