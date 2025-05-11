<script lang="ts">
	import ProjectImageBox from '$lib/components/Projects/ProjectImageBox.svelte';
	import { projectCategories } from '$lib/data/projects';
</script>

<div class="page-container page-spacing">
	<!-- Header -->
	<header class="text-center">
		<h1 class="h1">Projects</h1>
	</header>

	<hr class="divider" />

	<!-- Grid -->
	<section class="space-y-10 md:space-y-20">
		{#each projectCategories as category}
			<div class="space-y-4 md:space-y-8">
				<header class="space-y-4">
					<h2 class="h2">{category.name}</h2>
					{#if category.description}<p>{category.description}</p>{/if}
				</header>
				<div class="grid grid-cols-3 gap-4">
					{#each category.projects as project}
						<ProjectImageBox {project} {category} />
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>
