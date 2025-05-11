<script lang="ts">
	import type { Category, Project } from '$lib/data/projects';
	import { generateRandomBackgroundTailwindClass } from '$lib/utils/tailwind';
	export let project: Project;
	export let category: Category;

	let backgroundClass = generateRandomBackgroundTailwindClass();
</script>

<a
	href="/projects/{category.path}/{project.slug}"
	class="aspect-square rounded-container-token overflow-hidden group shadow-xl {backgroundClass}"
	on:mouseleave={() => {
		backgroundClass = generateRandomBackgroundTailwindClass();
	}}
>
	<img
		class="w-full aspect-square transition-all duration-[200] group-hover:-translate-y-[101%] {project.additionalThumbnailStyles ||
			''}"
		src={project.thumbnail}
		alt={project.name}
	/>
	<caption class="w-full h-full flex justify-center items-center group-hover:-translate-y-full">
		{project.name}
	</caption>
</a>
