<template>
    <nav>
        <ul>
            <li><img src="@/assets/logoCeldApp.png" alt="Logo de la página" width="180px"/></li>
            <li class="hideOnMobile"><a href="#">Ejecutar App</a></li>
            <li class="hideOnMobile"><a href="https://forms.gle/RGtXSKyGDoJ5qBki6" target="_blank" rel="noopener noreferrer">Reporte de errores</a></li>
            <li class="hideOnMobile"><a href="mailto:facubernardini@hotmail.com?Subject=CeldApp">Contacto</a></li>
            <li class="menu-button" @click="showSidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
        <ul class="sidebar">
            <li @click="hideSidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="https://forms.gle/RGtXSKyGDoJ5qBki6" target="_blank" rel="noopener noreferrer">Reporte de errores</a></li>
            <li><a href="mailto:facubernardini@hotmail.com?Subject=CeldApp">Contacto</a></li>
            <li><DownloadButton/></li>
        </ul>
    </nav>
</template>

<script setup>
import DownloadButton from '@/components/DownloadButton.vue'

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
    height: 100vh;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: -10px 0 10px rgba(14, 14, 14, 0.15);
}

.menu-button {
    display: none;
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

@media(max-width: 400px){
    .sidebar {
        width: 100vw;
    }

    .menu-button {
        display: block;
    }
}
</style>