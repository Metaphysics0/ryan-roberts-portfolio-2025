<script lang="ts">
	import type { Category, Project } from '$lib/data/projects';
	import { generateRandomBackgroundTailwindClass } from '$lib/utils/tailwind';
	export let project: Project;
	export let category: Category;

	let backgroundClass = generateRandomBackgroundTailwindClass();
</script>

<a
	href="/projects/{category.path}/{project.slug}"
	class="aspect-square rounded-container-token overflow-hidden group shadow-xl {backgroundClass} transition-all duration-700 ease-in-out"
	on:mouseleave={() => {
		backgroundClass = generateRandomBackgroundTailwindClass();
	}}
>
	{#if project.needsWhiteBg}
		<div class="w-full h-full bg-white flex items-center justify-center">
			<img
				class="w-5/6 h-5/6 aspect-square object-contain transition-all duration-[200] group-hover:-translate-y-[101%] {project.additionalThumbnailStyles ||
					''}"
				src={project.thumbnail}
				alt={project.name}
			/>
		</div>
	{:else}
		<img
			class="w-full h-full aspect-square object-cover transition-all duration-[200] group-hover:-translate-y-[101%] {project.additionalThumbnailStyles ||
				''}"
			src={project.thumbnail}
			alt={project.name}
		/>
	{/if}
	<caption
		class="w-full h-full flex justify-center items-center group-hover:-translate-y-full text-lg md:text-xl"
	>
		{project.name}
	</caption>
</a>
