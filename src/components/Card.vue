<template>
    <article :style="{ 'background-image': 'url('+background_url+')' }" class="card">
        <h3 class="title">{{ title }}</h3>
        <img :src="img_url" alt="Imagen">
        <p class="description">{{ description }}</p>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        background_url: String,
        img_url: String,
        description: String,
    },
};
</script>

<style scoped>
.card {
    margin: 6vw 8vw;
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

img {
    padding: 50px;
    width: 100%;
    height: 65%;
    object-fit: contain;
}

.title{
    margin-top: 25px;
    font-family: "Montserrat", sans-serif;
    font-size: 22px
}

.description {
    padding: 0px 15px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>