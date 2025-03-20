<template>
	<div class="container">
		<Transition name="nav">
			<header v-if="cargado" class="header">
				<NavBar/>
			</header>
		</Transition>

		<router-view></router-view>
		
		<footer>
			<article>
				<h2 class="footer">© 2025 CeldApp. Todos los derechos reservados</h2>
			</article>
		</footer>
	</div>

</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue';

const cargado = ref(false);

onMounted(() => {
  setTimeout(() => {
    cargado.value = true;
  }, 300);
});
</script>

<style scoped>
.container {
	position: relative;
	display: flex;
	flex-direction: column;
}

.header {
	position: absolute;
	width: 100%;
	z-index: 10;
}

.footer {
	position: absolute;
	align-self: flex-end;
	left: 0;
	right: 0;
	bottom: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(0.7em, 3vw, 1em);
    font-weight: lighter;
    text-align: center;
    padding: 1.6svh 0svw;
	z-index: 5;
}

/* Animaciones de entrada */
.nav-enter-active {
    transition: opacity 1s ease-out, transform 0.8s ease-out;
}
.nav-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
</style>