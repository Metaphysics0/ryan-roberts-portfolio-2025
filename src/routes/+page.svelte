<script lang="ts">
	import Social from '$lib/components/Social/Social.svelte';
	import { getUnsplashImageLink } from '$lib/data/images';
</script>

<div class="page-container page-spacing">
	<!-- Hero -->
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
		<div class="order-2 md:order-1 max-w-2xl space-y-8">
			<h1 class="h1">Hello, I'm Ryan.</h1>
			<p class="text-2xl opacity-75">
				A software developer with over 6 years of industry experience helping businesses create
				responsive and user-friendly web applications. With a strong passion for everything I do,
				including music, calisthenics, and veganism.
			</p>
			<Social />
		</div>
		<!-- src="https://source.unsplash.com/mPGSvqHAqTU/400x400" -->
		<img
			class="order-1 md:order-2 rounded-full w-32 md:w-[400px] aspect-square overflow-hidden shadow-xl object-cover object-top"
			src={getUnsplashImageLink({ id: 'mPGSvqHAqTU' })}
			alt="Portfolio"
		/>
	</header>

	<hr class="divider" />

	<!-- Stats -->
	<section>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">6+</span>
				<p class="text-primary-500">Years Experience</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">1k+</span>
				<p class="text-primary-500">Contributions</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">20k+</span>
				<p class="text-primary-500">Commits</p>
			</div>
			<div class="space-y-1">
				<span class="font-heading-token text-7xl">300+</span>
				<p class="text-primary-500">GitHub Stars</p>
			</div>
		</div>
	</section>

	<hr class="divider" />

	<!-- Skills -->
	<section class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-screwdriver-wrench text-4xl text-primary-500" />
			<h3 class="h3">Development</h3>
			<p class="opacity-75">
				I possess a wide range of skills that enable me to develop visually appealing and
				interactive user interfaces for web applications.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-palette text-4xl text-primary-500" />
			<h3 class="h3">Design</h3>
			<p class="opacity-75">
				Over the years, I have honed my ability to create visually appealing interfaces that are
				both user-friendly and intuitive.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="fa-solid fa-users text-4xl text-primary-500" />
			<h3 class="h3">User Experience</h3>
			<p class="opacity-75">
				I understand the importance of creating a seamless UX for end-users. Which includes a solid
				understanding user behavior.
			</p>
		</div>
	</section>

	<hr class="divider" />

	<!-- Call to Action -->
	<section class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4">
		<p class="text-center md:text-left">Ready to begin on your first project?</p>
		<a href="mailto:ryan@fullstackservices.io" class="btn md:btn-lg variant-filled-primary">
			<i class="fa-solid fa-envelope" />
			<span>Contact Me</span>
		</a>
	</section>
</div>
