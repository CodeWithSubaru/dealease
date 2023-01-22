<template>
    <main>
        <SideBar :isClose="isClose" @menu="closeBar" />
        <section>
            <Banner
                :name="user.name"
                @expand="openDropDown"
                :isOpenDropDown="isOpenDropDown"
            >
                <template #banner-title><span></span></template>
            </Banner>

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

    mounted() {
        document.addEventListener("click", this.closeDropDown);
    },

    methods: {
        closeBar() {
            this.isClose = !this.isClose;
        },

        openDropDown() {
            this.isOpenDropDown = !this.isOpenDropDown;
        },

        closeDropDown(e) {
            if (e.target.id !== "dropdown") {
                this.isOpenDropDown = false;
            }
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

main section :deep(.banner) p {
    justify-content: flex-end;
    display: flex;
    column-gap: 1rem;
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
</style>
