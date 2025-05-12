<script lang="ts">
	import { page } from '$app/stores';
	import { projectCategories, type Category, type Project } from '$lib/data/projects';

	let category: Category | undefined;
	let project: Project | undefined;

	// Page
	page.subscribe((p) => {
		// Find category via page parameter
		category = projectCategories.find((c) => c.path === p.params.category);
		// Find project via page parameter
		if (category) project = category.projects.find((project) => project.slug === p.params.slug);
	});
</script>

<div class="page-container page-spacing">
	{#if category && project}
		<!-- Header -->
		<header class="text-center space-y-10">
			<h1 class="h1">{project.name}</h1>
			<div class="flex justify-center gap-4">
				<a class="btn md:btn-lg variant-soft-primary" href="/projects">
					<i class="fa-solid fa-arrow-left" />
					<span>Browse</span>
				</a>
				<a
					class="btn md:btn-lg variant-filled-primary"
					href={project.url}
					target="_blank"
					rel="noreferrer"
				>
					<span>{project.launchButtonText || 'Launch'}</span>
					<i class="fa-solid fa-arrow-up-right-from-square" />
				</a>
			</div>
		</header>

		<!-- Description -->
		<article class="space-y-8 prose prose-p:text-lg md:prose-p:text-xl">
			{@html project.description}
		</article>

		<hr class="divider" />

		{#each project?.videos || [] as video}
			<div class="w-full">
				<iframe
					src={video.src}
					class="w-full aspect-video bg-black/30 border border-black/30 shadow-xl rounded-xl"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					loading="lazy"
				/>
				{#if video.caption}<caption class="block mt-3 text-xs text-center opacity-60"
						>{@html video.caption}</caption
					>{/if}
			</div>
		{/each}
		<!-- Banner -->
		{#if project.banner}
			<img
				class="bg-black w-full aspect-video rounded-container-token overflow-hidden shadow-lg {project?.additionalStyles ||
					''}"
				src={project.banner}
				alt={project.name}
			/>
		{/if}

		<!-- Debugging -->
		<!-- <pre class="pre">{JSON.stringify(project)}</pre> -->
	{/if}
</div>
