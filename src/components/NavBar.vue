<template>
    <nav>
        <ul>
            <li><a href="/"><img src="@/assets/logoCeldApp.png" alt="Logo de la página" width="180px"/></a></li>
            <li class="hideOnMobile"><a href="/">Inicio</a></li>
            <li class="hideOnMobile"><router-link to="/modulos">Módulos</router-link></li>
            <li class="hideOnMobile"><a href="https://forms.gle/RGtXSKyGDoJ5qBki6" target="_blank" rel="noopener noreferrer">Reporte de errores</a></li>
            <li class="hideOnMobile"><a href="#about">Acerca de</a></li>
            <li class="menu-button" @click="showSidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li> 
        </ul>
        <ul class="sidebar">
            <li class="close-button" @click="hideSidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="/">Inicio</a></li>
            <li><router-link to="/modulos" @click="hideSidebar">Módulos</router-link></li>
            <li><a href="https://forms.gle/RGtXSKyGDoJ5qBki6" target="_blank" rel="noopener noreferrer">Reporte de errores</a></li>
            <li><a href="#about" @click="hideSidebar">Acerca de</a></li>
            <div class="botones-descarga-container">
                <li><DownloadButtonAndroid @click="hideSidebar"/></li>
                <li><ExecuteAppButton @click="hideSidebar"/></li>
            </div>
        </ul>
    </nav>
</template>

<script setup>
import DownloadButtonAndroid from '@/components/DownloadButtonAndroid.vue'
import ExecuteAppButton from '@/components/ExecuteAppButton.vue'

function showSidebar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex';
}

function hideSidebar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none';
}

</script>

<style scoped>
nav {
    background: linear-gradient(180deg, #00000071, #00000000);
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
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    color: black;
    transition: 0.3s;
}

nav ul li a:hover {
    color: white;
}

.sidebar {
    display: none;
    position: fixed;
    list-style: none;
    top: 0;
    right: 0;
    height: 100svh;
    width: 15em;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
}

.menu-button {
    display: none;
}

.close-button {
    align-self: flex-end;
}

.botones-descarga-container {
    width: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    padding-left: 1.3em;
}

@media(max-width: 800px){
    
    nav ul {
        justify-content: space-between;
    }

    .hideOnMobile {
        display: none;
    }

    .menu-button {
        display: block;
    }
}
</style>