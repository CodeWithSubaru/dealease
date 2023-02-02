<template>
    <HomeLayout @logout="logout">
        <template #navbar>
            <router-link to="/">
                <span class="material-symbols-rounded snd"> home </span>
                Home
            </router-link>
        </template>

        <Modal :useIcon="true" v-if="result.message" :result="result"></Modal>

        <Card class="card">
            <div class="card-wrapper">
                <img
                    src="../../../assets/img/bangus.jpg"
                    class="card-image"
                    alt=""
                />
            </div>

            <div class="card-detail">
                <p>
                    <span v-html="lessText"></span>
                    <span @click="seeMore" v-if="showSeeMoreBtn"
                        >See more...</span
                    >
                </p>
                <Button @click.prevent="makeDeal">
                    <span class="material-symbols-rounded"> handshake </span>
                    Make a Deal
                </Button>
            </div>
        </Card>

        <Card class="card">
            <div class="card-wrapper">
                <img
                    src="../../../assets/img/bangus.jpg"
                    class="card-image"
                    alt=""
                />
            </div>

            <div class="card-detail">
                <p>
                    <span @click="seeMore" v-if="showSeeMoreBtn"
                        >See more...</span
                    >
                </p>
                <Button @click.prevent="makeDeal">
                    <span class="material-symbols-rounded"> handshake </span>
                    Make a Deal
                </Button>
            </div>
        </Card>

        <Card class="card sold">
            <div class="card-wrapper">
                <img
                    src="../../../assets/img/bangus.jpg"
                    class="card-image"
                    alt=""
                />
            </div>

            <div class="card-detail">
                <p>₱ 1,200</p>
                <Button> Message </Button>
            </div>
        </Card>

        <Card class="card sold">
            <div class="card-wrapper">
                <img
                    src="../../../assets/img/bangus.jpg"
                    class="card-image"
                    alt=""
                />
            </div>

            <div class="card-detail">
                <p>₱ 1,200</p>
                <Button> Message </Button>
            </div>
        </Card>

        <Card class="card sold">
            <div class="card-wrapper">
                <img
                    src="../../../assets/img/bangus.jpg"
                    class="card-image"
                    alt=""
                />
            </div>

            <div class="card-detail">
                <h2>Bangus</h2>
                <p>₱ 1,200</p>
                <Button> Message </Button>
            </div>
        </Card>
    </HomeLayout>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout.vue";
import Card from "../../components/Card.vue";
import NavBar from "../../components/NavBar.vue";
import Modal from "../../components/Modal.vue";
import Table from "../../components/Table.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { Card, HomeLayout, NavBar, Modal, Table },
    data() {
        return {
            data: "",
            lessText: "",
            showSeeMoreBtn: true,
        };
    },
    computed: {
        ...mapGetters({
            result: "auth/result",
        }),
    },

    beforeMount() {
        window.addEventListener("offline", function () {
            if (!navigator.onLine) {
                console.log("You are in offline mode");
            }
        });
    },
    mounted() {
        if (!this.lessText) {
            this.showSeeMoreBtn = false;
        }

        if (this.data.length >= 100) {
            this.lessText = this.data.substring(0, 100);
        }
    },

    methods: {
        ...mapActions({
            logout: "auth/logout",
        }),

        seeMore() {
            this.lessText = this.data;
            this.showSeeMoreBtn = false;
        },

        makeDeal() {
            if (!localStorage.getItem("token")) {
                this.result = {
                    success: false,
                    message:
                        "Sorry, You must login first before you make a deal. <br><br><b>We will redirect you to login...</b>",
                };
                setTimeout(() => {
                    this.$router.push({ name: "LoginBuyer" });
                }, 5000);
            }

            this.$router.push({ name: "Message" });
        },
    },
};
</script>

<style scoped>
:deep(section) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.card {
    margin: 4rem;
    margin-top: 6rem;
    width: 25rem;
    display: block;
    background: #f8f8f8;
    color: #424144;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    cursor: pointer;
    position: relative;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    border-radius: 10px;
    overflow: hidden;
}

.card-image {
    height: 100%;
    width: 100%;
    transition: all 0.4s ease-in;
}

.card.sold::before {
    content: "";
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
}

.card.sold::after {
    content: "Sold Out";
    color: red;
    border: 2px solid black;
    font-weight: bold;
    position: absolute;
    bottom: 50%;
    left: 50%;
    display: block;
    padding: 0.8rem 1.5rem;
    background: transparent;
    border-radius: 0.8rem;
    font-size: 1.5rem;
    transform: rotate(-45deg) translate(-50%, -50%);
    transition: all 0.3s ease-in;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
}

.card.sold:hover::after {
    transform: rotate(-45deg) translate(-50%, -50%) scale(1.09);
}

.card-image:hover {
    scale: 1.05;
}

.card-detail {
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 15rem;
}

.card-detail p {
    flex: 1;
    margin-bottom: 1rem;
}

.card-detail button {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
    padding: 1rem;
    color: #424144;
    background: transparent;
    transition: all 0.3s ease-in;
    border: 2px solid #009688;
    outline: none;
    cursor: pointer;
    border-radius: 25px;
    font-family: inherit;
    font-weight: 500;
}

.card-detail button:hover {
    background: #009688;
    color: #fff;
}
</style>
