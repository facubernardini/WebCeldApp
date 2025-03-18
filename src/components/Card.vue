<template>
    <article :style="{ 'background-image': 'url('+background_url+')' }" class="card">
        <h3 class="card-title">{{ card_title }}</h3>
        <img :src="img_url" alt="Imagen">
        <p class="card-description">{{ card_description }}</p>
    </article>
</template>

<script>
export default {
    props: {
        card_title: String,
        background_url: String,
        img_url: String,
        card_description: String,
    },
};
</script>

<style scoped>
.card {
    font-family: "Montserrat", sans-serif;
    margin: 6svw 8svw;
    height: 580px;
    width: 350px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(112, 229, 255, 0.65);
    transition: 0.5s;
}

.card:hover {
    box-shadow: 0 4px 20px rgba(112, 229, 255, 0.65);
}

.card-title{
    font-size: 1.4em;
    margin-top: 25px;
}

img {
    padding: 10px 40px 40px;
    width: 100%;
    height: 65%;
    object-fit: contain;
}

.card-description {
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1.5;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    padding: 0px 15px;
}

@media (max-width: 800px) {
    .card {
        margin: 10svh 8svw;
    }
}
</style>