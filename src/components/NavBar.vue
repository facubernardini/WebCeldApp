<template>
    <nav>
        <ul>
            <li><img src="@/assets/logoCeldApp.png" alt="Logo de la página" width="180px"/></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Ejecutar App</a></li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
    background-color:rgba(110, 110, 110, 0.4);
    border-radius: 0px 0 10px 10px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
}

nav ul li {
    padding: 10px;
    margin: 0 40px;
    text-align: center;
}

nav ul li a {
    text-decoration: none;
    color: black;
    font-size: 20px;
}
</style>