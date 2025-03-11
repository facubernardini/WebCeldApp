<template>
    <nav>
        <ul>
            <li><img src="@/assets/logoCeldApp.png" alt="Logo de la página" width="180px"/></li>
            <li><a href="/">Ejecutar App</a></li>
            <li><a href="https://forms.gle/RGtXSKyGDoJ5qBki6" target="_blank" rel="noopener noreferrer">Reporte de errores</a></li>
            <li><a href="mailto:facubernardini@hotmail.com?Subject=CeldApp">Contacto</a></li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
    background: linear-gradient(180deg, #00000071, #00000000);
    border-radius: 0px 0 10px 10px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
}

nav ul li {
    padding: 15px 10px;
    margin: 0 1vw;
    text-align: center;
}

nav ul li a {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: black;
}

nav ul li a:hover {
    color: white;
}
</style>