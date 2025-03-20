<template>
    <main class="homeAboutView">

        <section class="manual-usuario">
            <h1>Manual de usuario</h1>
        </section>

        <section class="modulo-container">
            <h3 class="modulo">Modulo Procesos de Cristalizacion</h3>
        </section>

        <section class="modulo-container">
            <h3 class="modulo">Modulo Estructuras Cristalinas</h3>
        </section>

        <section class="modulo-container">
            <h3 class="modulo">Modulo Diagramas de Fase</h3>
        </section>

        <section class="modulo-container">
            <h3 class="modulo">Modulo Realidad Aumentada</h3>
        </section>
    </main>
</template>

<script setup>
</script>

<style scoped>
.homeAboutView {
    position: relative;
    z-index: 1;
    background-color: grey;
    font-family: "Montserrat", sans-serif;
    padding-top: 10vh;
    min-height: 100dvh;
}

.manual-usuario {
}

.modulo-container {
    padding: 3vh;
}

.modulo {
    font-weight: normal;
}
</style>