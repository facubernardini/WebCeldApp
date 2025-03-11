<template>
    <button class="download-btn" @click="mostrarConsoleLog">Descargar App</button>
</template>

<script>
export default {
    name: 'DownloadButton',
    methods: {
        mostrarConsoleLog() {
            console.log('¡Gracias por descargar CeldApp!')
        }
    }
}
</script>

<style scoped>
.download-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    height: 40px;
    width: 180px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
}

.download-btn:hover {
    background-color: #0056b3;
    box-shadow: 0px 0px 15px rgba(112, 229, 255, 0.418);
}
</style>