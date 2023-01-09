<template>
    <div>
        <h1>404</h1>
        <p class="mb-2">Sorry, this page is not found</p>
        <button @click.prevent="back" class="btn">Go back</button>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
div {
    display: flex;
    max-width: 500px;
    height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

div h1 {
    font-size: 10rem;
    color: rgba(255, 255, 255, 0.1);
}

div p {
    font-size: 1.2rem;
}

div .btn {
    border: none;
    background-color: #efa726;
    padding: 1rem 2.4rem;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
}
div .btn:hover {
    background-color: #d69215;
}
</style>
