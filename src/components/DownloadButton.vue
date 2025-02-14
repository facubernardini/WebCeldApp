<template>
    <button class="download-btn" @click="handleClick">Descargar App</button>
</template>

<script setup>
</script>

<style scoped>
.download-btn {
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