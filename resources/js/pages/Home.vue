<template>
    <main>
        <Banner>
            <template #banner-title> Fisher</template>
            <template #banner-username>Hi, Joey</template>
            <template #banner-username-img>
                <img src="../../assets/img/logo.png" alt="user" />
            </template>
        </Banner>
        <NavBar />

        <section>
            <Card class="card">
                <div class="card-wrapper">
                    <img
                        src="../../assets/img/bangus.jpg"
                        class="card-image"
                        alt=""
                    />
                </div>

                <div class="card-detail">
                    <p>
                        ₱ 1,200 Lorem, ipsum dolor sit amet consectetu
                        adipisicing elit. Eos, veniam. Lorem ipsum dolor sit
                        amet. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Molestias, dolore? Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Dignissimos
                        maiores voluptatum distinctio asperiores dicta delectus
                        explicabo repellendus facilis accusantium temporibus?
                    </p>
                    <Button> Message </Button>
                </div>
            </Card>

            <Card class="card">
                <div class="card-wrapper">
                    <img
                        src="../../assets/img/bangus.jpg"
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
                        src="../../assets/img/bangus.jpg"
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
                        src="../../assets/img/bangus.jpg"
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
                        src="../../assets/img/bangus.jpg"
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
        </section>
    </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";

export default {
    components: { NavBar, Banner, Button },
};
</script>

<style scoped>
main {
    min-height: 1000px;
    position: relative;
    padding: 0 1.5rem 1rem;
}

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
}

.card {
    margin: 4rem;
    margin-top: 6rem;
    width: 25rem;
    min-height: 25rem;
    display: block;
    background: rgba(255, 255, 255, 0.087);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
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
    height: 100%;
    display: flex;
    margin: auto auto;
    flex-direction: column;
    justify-content: space-between;
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
}

.card-detail button:hover {
    background: #d69316;
}

.banner-user img {
    width: 3rem;
    height: 3rem;
}
</style>
