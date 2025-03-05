<template>
    <article class="card">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>

<style scoped>
.card {
    height: 500px;
    width: 320px;
    background-color:beige;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px 0 rgba(112, 229, 255, 0.65);
    transition: 0.5s;
}

.card:hover {
    box-shadow: 0 4px 30px rgba(112, 229, 255, 0.65);
}

.title{
    font-family: "Montserrat", sans-serif;
}

.description {
    font-family: "Montserrat", sans-serif;
}
</style>