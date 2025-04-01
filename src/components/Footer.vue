<template>
    <footer>
        <article class="footer-container">
            <h2 class="footer">© 2025 CeldApp.</h2>
            <a href="mailto:facubernardini@hotmail.com?Subject=CeldApp" class="boton-mail"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="2em" height="2em"><path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"/></svg></a>
            <a href="https://www.linkedin.com/in/facundobernardini" target="_blank" rel="noopener noreferrer" class="boton-linkedin"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="2em" height="2em">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg></a>
        </article>
	</footer>
</template>

<script setup>
</script>

<style scoped>
.footer-container {
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

.footer {
	left: 0;
	right: 0;
	bottom: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(0.7em, 3vw, 1em);
    font-weight: lighter;
    text-align: center;
    margin: 1.6vh 0vw;
	z-index: 5;
}

.boton-linkedin {
    margin-top: 0.3em;
}

.boton-mail {
    margin: 0.3em 0.5em 0em 2em;
}
</style>