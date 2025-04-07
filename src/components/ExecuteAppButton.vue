<template>
    <button @click="executeWebApp()"><a>Ejecutar</a><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#000000"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const executeWebApp = () => {
    let ruta = "/app";
    router.push(ruta);
};
</script>

<style scoped>
button {
    padding-right: 1.8em;
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
    margin: 0em 1.3em;
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