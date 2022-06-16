<script setup lang="ts">
	import type { Engine } from "tsparticles-engine"
	import { loadFull } from "tsparticles";

	async function initParticles(engine: Engine) {
		await loadFull(engine);
	}
</script>

<template>
	<div id="home" class="page d-flex align-items-center justify-content-center">
		<Particles
                id="space-welcome-particles"
				:particlesInit="initParticles"
                :options=" {
					'particles': {
						'number': {
						'value': 355,
						'density': {
							'enable': true,
							'value_area': 789.1476416322727
						}
					},
					'color': {
						'value': '#ffffff'
					},
					'shape': {
						'type': 'circle',
						'stroke': {
							'width': 0,
							'color': '#000000'
						},
						'polygon': {
							'nb_sides': 5
						}
					},
					'opacity': {
						'value': 0.48927153781200905,
						'random': false,
						'anim': {
							'enable': true,
							'speed': 0.2,
							'opacity_min': 0,
							'sync': false
						}
					},
					'size': {
						'value': 2,
						'random': true,
						'anim': {
							'enable': true,
							'speed': 2,
							'size_min': 0,
							'sync': false
						}
					},
					'line_linked': {
						'enable': false,
						'distance': 150,
						'color': '#ffffff',
						'opacity': 0.4,
						'width': 1
					},
					'move': {
						'enable': true,
						'speed': 0.2,
						'direction': 'none',
						'random': true,
						'straight': false,
						'out_mode': 'out',
						'bounce': false,
						'attract': {
							'enable': false,
							'rotateX': 600,
							'rotateY': 1200
						}
					}
				},
				'interactivity': {
					'detect_on': 'canvas',
					'modes': {
						'grab': {
							'distance': 400,
							'line_linked': {
							'opacity': 1
							}
						},
						'bubble': {
							'distance': 83.91608391608392,
							'size': 1,
							'duration': 3,
							'opacity': 1,
							'speed': 3
						},
						'repulse': {
							'distance': 200,
							'duration': 0.4
						},
						'push': {
							'particles_nb': 4
						},
						'remove': {
							'particles_nb': 2
						}
					}
				},
				'style': {
					'position': 'absolute',
					'z-index': '0'
				},
				'detectRetina': true
			}"
		/>

		<div class="row" id="space-welcome-content">
			<div class="row">
				<div class="col-12 text-center">
					<h1>Justine Martin</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12 text-center">
					<a class="btn btn-outline-light" href="#presentation">Ahahah regarde je suis intéressante :)</a>
					<a class="ms-4 btn btn-outline-light" href="#">Télécharger le CV</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	#home {
		background-image: url("/bg_1.png");
		background-size: cover;
		background-position: center;
	}

	#space-welcome-content {
		z-index: 1;
	}
</style>
