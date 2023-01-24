<template>
    <div class="banner">
        <h1>
            <slot name="banner-title" class="banner-title"> Dealease </slot>
        </h1>
        <slot name="banner-username" class="banner-user">
            <div>
                <LightDarkMode
                    :switchColor="switchColor"
                    :lightMode="lightMode"
                />

                <p class="banner-act-btn" v-if="showBtn">
                    <router-link to="/login" class="login-button-home">
                        Login
                    </router-link>
                    <router-link to="/register" class="signup-button-home">
                        Sign up
                    </router-link>
                </p>

                <p class="banner-username" v-if="!showBtn">
                    Hi, Jay{{ name }}
                    <span
                        @click="$emit('expand')"
                        class="material-symbols-rounded expand"
                        id="dropdown"
                    >
                        expand_more
                    </span>
                </p>
            </div>
        </slot>
    </div>

    <ul v-if="isOpenDropDown" id="dropdown-container">
        <li @click.prevent="logout">Logout</li>
    </ul>
</template>

<script>
import LightDarkMode from "./LightDarkMode.vue";

export default {
    props: ["name", "isOpenDropDown", "showBtn"],
    components: { LightDarkMode },

    data() {
        return {
            lightMode: true,
        };
    },

    methods: {
        switchColor() {
            this.lightMode = !this.lightMode;
            document.querySelector(".mode").classList.add("spinOneTime");
            setTimeout(() => {
                document.querySelector(".mode").classList.remove("spinOneTime");
            }, 800);
        },

        logout() {
            axios
                .post("/api/logout")
                .then((resp) => {
                    localStorage.removeItem("token");
                    this.$router.push({ name: "LoginAdmin" });
                })
                .catch((e) => {
                    console.log("Something went wrong, Please try again later");
                });
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
    box-shadow: 0 0.4rem 1rem #0c1123;
    z-index: 10;
}

.banner-user {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: rgba(236, 236, 240, 0.7);
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
    background: rgba(255, 255, 255, 0.087);
    color: #fff;
    list-style: none;
    z-index: 11;
    border-radius: 5px;
    box-shadow: 0.4rem 0 1rem #0c1123;
}

ul::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 85%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.087) transparent;
    box-shadow: 0.4rem 0 1rem #0c1123;
}

ul li {
    padding: 0.5rem 1rem;
    cursor: pointer;
}

ul li:hover {
    background: rgba(255, 255, 255, 0.087);
}
</style>
