<template>
    <div>
        <h1>401</h1>
        <p class="mb-1">Unauthorized</p>
        <router-link to="../" class="btn">Go back</router-link>
    </div>
</template>

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
    background-color: #efa726;
    padding: 1rem 2.4rem;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
}
div .btn:hover {
    background-color: #d69215;
}
</style>
