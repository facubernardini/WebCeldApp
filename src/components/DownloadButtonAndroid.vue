<template>
    <button @click="descargarApk"><a>Descargar</a><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#000000"><path d="M40-240q9-107 65.5-197T256-580l-74-128q-6-9-3-19t13-15q8-5 18-2t16 12l74 128q86-36 180-36t180 36l74-128q6-9 16-12t18 2q10 5 13 15t-3 19l-74 128q94 53 150.5 143T920-240H40Zm240-110q21 0 35.5-14.5T330-400q0-21-14.5-35.5T280-450q-21 0-35.5 14.5T230-400q0 21 14.5 35.5T280-350Zm400 0q21 0 35.5-14.5T730-400q0-21-14.5-35.5T680-450q-21 0-35.5 14.5T630-400q0 21 14.5 35.5T680-350Z"/></svg></button>
</template>

<script setup>
const descargarApk = () => {
    const apkURL = 'https://github.com/facubernardini/ProyectoFinalDeCarrera/releases/download/v1.0.0/CeldApp.apk';
    window.open(apkURL, '_blank');
}
</script>

<style scoped>
button {
    padding-right: 1.6em;
    display: flex;
    justify-content: center;
    width: 13em;
    height: 3.5em;
    background-color: #9ee8f0;
    color: black;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.4s;
}

button:hover {
    background-color: #50b2bd;
    box-shadow: 0px 0px 8px 2px rgba(112, 229, 255, 0.4);
}

a {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;
    font-weight: 500;
    align-self: center;
    margin: 0em 1em;
}

svg {
    align-self: center;
}

@media(max-width: 800px){

    button {
        width: 12em;
    }

    a {
        font-size: 1em;
        margin: 0em 1em;
    }
}
</style>