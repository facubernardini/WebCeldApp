<template>
    <button class="download-btn" @click="descargarApk"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="#000000"><path d="M40-240q9-107 65.5-197T256-580l-74-128q-6-9-3-19t13-15q8-5 18-2t16 12l74 128q86-36 180-36t180 36l74-128q6-9 16-12t18 2q10 5 13 15t-3 19l-74 128q94 53 150.5 143T920-240H40Zm240-110q21 0 35.5-14.5T330-400q0-21-14.5-35.5T280-450q-21 0-35.5 14.5T230-400q0 21 14.5 35.5T280-350Zm400 0q21 0 35.5-14.5T730-400q0-21-14.5-35.5T680-450q-21 0-35.5 14.5T630-400q0 21 14.5 35.5T680-350Z"/></svg></button>
</template>

<script setup>
const descargarApk = () => {
    const apkURL = 'https://drive.google.com/file/d/1WTD0vVcPm9jfGUG41NHGKXp7SmGoteoH/view?usp=sharing';
    window.open(apkURL, '_blank');
}
</script>

<style scoped>
.download-btn {
    background-color: #9ee8f0;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.4s;
}

.download-btn:hover {
    background-color: #50b2bd;
    box-shadow: 0px 0px 8px 2px rgba(112, 229, 255, 0.4);
}
</style>