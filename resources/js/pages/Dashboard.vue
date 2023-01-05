<template>
    <main>
        <SideBar :isClose="isClose" @click="closeBar" />
        <section>
            <Banner :name="user.name">
                <template #banner-username-img>
                    <img
                        src="../../assets/img/logo.png"
                        alt="user"
                        @click="openDropDown"
                    />
                </template>
            </Banner>

            <ul v-if="isOpenDropDown">
                <li @click.prevent="logout">Logout</li>
            </ul>

            <h2 class="section-title">Dashboard</h2>

            <div class="stats-wrapper">
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
                <Card class="card"> Hi </Card>
            </div>
        </section>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import SideBar from "@/components/SideBar.vue";
import Button from "@/components/Button.vue";

export default {
    components: { Button, Banner, Card, SideBar },

    data() {
        return {
            isClose: false,
            isOpenDropDown: false,
            user: {},
        };
    },
    beforeCreate() {
        axios.get("/api/user").then((res) => {
            this.user = res.data.name.split(" ")[0];
        });
    },

    methods: {
        closeBar() {
            this.isClose = !this.isClose;
        },

        openDropDown(e) {
            this.isOpenDropDown = !this.isOpenDropDown;
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
main {
    display: flex;
}

main nav {
    position: sticky;
    top: 0;
    flex: 1;
}

main section {
    flex: 2;
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
}

main section .section-title {
    margin: 1.5rem 2rem;
}

main section .stats-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

main section .card {
    margin: 0 1rem 1rem;
    padding: 2rem;
    height: 10rem;
    width: 20rem;
}

.banner-user img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    cursor: pointer;
}

ul {
    position: absolute;
    top: 4.5rem;
    right: 3rem;
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
