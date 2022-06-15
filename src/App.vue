<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import { loginStore as useLoginStore} from '@/stores/login'

	const loginStore = useLoginStore()
</script>

<template>
	<main>
		<header>
			<div class="navbar-fixed">
				<nav class="transparent z-depth-0">
					<div class="nav-wrapper">
						<ul class="right">
							<li><router-link :to="{ name: 'home'}">Me découvrir</router-link></li>
							<li><router-link :to="{ name: 'projects'}">Mes projets</router-link></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>

		<RouterView />
	</main>
</template>

<style>
	html {
		scroll-behavior: smooth;
	}

	html, body, #app, main {
		min-height: 100%;
		height: 100%;
	}

	header {
		position: absolute;
	}

	.page {
		height: 100%;
		min-height: 100%;
	}
</style>
