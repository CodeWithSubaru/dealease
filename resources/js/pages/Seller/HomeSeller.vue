<template>
    <HomeLayout @logout="logoutSeller">
        <template #navbar>
            <Navbar></Navbar>
        </template>
        <Modal :useIcon="true" v-if="result.message" :result="result"></Modal>
        <div class="container">
            <div class="card-wrapper-post-input">
                <Card class="card-post">
                    <div class="post-inner_wrapper">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            class="post-textarea"
                            placeholder="Create Post..."
                        ></textarea>
                        <button class="post-button">Post</button>
                    </div>
                </Card>
            </div>

            <div class="card-wrapper-contents">
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
                            {{ text }}
                        </p>
                        <Button @click.prevent="makeDeal"> Make a Deal </Button>
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
                        {{ first_name }}

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
            </div>
        </div>
    </HomeLayout>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout.vue";
import Card from "../../components/Card.vue";
import FormGroup from "../../components/FormGroup.vue";
import Modal from "../../components/Modal.vue";
import Navbar from "@/components/NavbarSeller/Navbar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    components: { Card, HomeLayout, FormGroup, Modal, Navbar },
    data() {
        return {
            text: "₱ 1,200 Lorem, ipsum dolor sit amet consectetu adipisicing elit. Eos, veniam. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos maiores voluptatum distinctio asperiores dicta delectus explicabo repellendus facilis accusantium temporibus?",
        };
    },

    computed: {
        ...mapGetters({
            result: "auth/result",
        }),
    },

    mounted() {
        if (this.text.length >= 100) {
            this.text = this.text.substring(0, 100).concat("...");
        }
    },

    methods: {
        ...mapActions({
            logoutSeller: "auth/logoutSeller",
        }),

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
        },
    },
};
</script>

<style scoped>
:deep(section) .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.card-wrapper-post-input {
    margin: 0 10rem;
}

.container .card-wrapper-contents {
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
    background: rgba(255, 255, 255, 0.087);
    cursor: pointer;
    position: relative;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    border-radius: 5px;
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
    position: absolute;
    bottom: 50%;
    left: 50%;
    display: block;
    padding: 0.8rem 1.5rem;
    background: #121627;
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
    font-size: 1rem;
    padding: 1.3rem;
    background: #efa726;
    color: #fff;
    transition: all 0.3s ease-in;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-family: inherit;
    font-weight: 500;
}

.card-detail button:hover {
    background: #d69316;
}

.banner-user img {
    width: 3rem;
    height: 3rem;
}

.card-post .post-inner_wrapper {
    position: relative;
}

.card-post .post-inner_wrapper .post-textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 4rem;
    padding: 1rem 6rem 1rem 1rem;
    font-family: inherit;
    border: 2px solid rgba(236, 236, 240, 0.3);
    background: rgba(236, 236, 240, 0.3);
    position: relative;
    resize: none;
    color: #fff;
    border-radius: 5px;
    transition: 0.3s all ease-in;
    font-size: 1.2rem;
}

.card-post .post-inner_wrapper .post-textarea:focus {
    height: 10rem;
    font-size: 1rem;
}

.card-post .post-inner_wrapper .post-textarea::placeholder {
    color: #a9a9a9;
    display: flex;
    align-items: center;
}

.card-post .post-inner_wrapper .post-button {
    outline: none;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: #fff;
    background: #efa726;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
}
</style>
