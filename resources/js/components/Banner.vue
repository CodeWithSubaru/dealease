<template>
    <div class="banner">
        <h1>
            <slot name="banner-title" class="banner-title"> Dealease </slot>
        </h1>
        <slot name="banner-username" class="banner-user">
            <div>
                <p class="banner-act-btn" v-if="!authenticated">
                    <router-link to="/login" class="login-button-home">
                        Login
                    </router-link>
                    <span class="signup-button-home" @click="handleOpenModal">
                        Sign up
                    </span>
                </p>

                <SignUpMessage
                    :openModal="openModal"
                    @cancel="handleOpenModal"
                ></SignUpMessage>

                <p class="banner-username" v-if="authenticated">
                    Hi, <slot name="user-name"> </slot>
                    <span
                        @click="$emit('expand')"
                        class="material-symbols-rounded expand"
                        id="dropdown"
                    >
                        expand_more
                    </span>
                </p>
                <ul v-if="isOpenDropDown" id="dropdown-container">
                    <slot name="logout"></slot>
                </ul>
            </div>
        </slot>
    </div>
</template>

<script>
import SignUpMessage from "./SignUpMessage.vue";

export default {
    props: ["isOpenDropDown", "authenticated", "userFirstName"],
    components: { SignUpMessage },
    data() {
        return {
            openModal: false,
        };
    },
    methods: {
        handleOpenModal() {
            this.openModal = !this.openModal;
        },
    },
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
    min-height: 80px;
    background: #121627;
    color: #ffff;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
    z-index: 11;
}

.banner-user {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: rgba(236, 236, 240, 0.7);
    position: relative;
}

.banner-act-btn {
    display: flex;
    align-items: center;
}

div {
    display: flex;
    column-gap: 1.4rem;
}

.banner-username {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
    text-transform: capitalize;
}

.banner-username :deep(.user-name) {
    text-transform: capitalize;
}

.login-button-home,
.signup-button-home {
    border-radius: 5px;
    box-shadow: none;
    outline: 0;
    width: 8rem;
    padding: 0.8rem;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    transition: all 0.3s ease-in;
}

.login-button-home {
    background: #efa726;
}
.signup-button-home {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    margin: 0 1rem;
}

.login-button-home:hover {
    background: #d69215;
}
.signup-button-home:hover {
    background: #d69316;
    outline: 2px solid #d69316;
    color: #fff;
}

.expand {
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.087);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

ul {
    position: absolute;
    top: 4.6rem;
    right: 1.2rem;
    width: 10rem;
    padding: 0.6rem 0;
    background: #fff;
    color: #424144;
    list-style: none;
    border-radius: 5px;
    box-shadow: 0.4rem 0 1rem #0c1123;
}

ul::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 80%;
    margin-left: -1px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

ul :deep(li) {
    padding: 0.5rem 1rem;
    cursor: pointer;
}

ul :deep(li):hover {
    background: #009688;
    color: #fff;
}
</style>
