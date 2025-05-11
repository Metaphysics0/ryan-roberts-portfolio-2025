<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { navigation } from '$lib/data/navigation';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<!-- Close navigation drawer on window resize -->
<svelte:window on:resize={drawerClose} />

<!-- Nav Menu -->
<nav
	class="
        flex flex-col md:flex-row gap-2
        border md:border-0 border-surface-100-800-token
        bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-lg
        rounded-bl-container-token rounded-br-container-token md:rounded-token
        p-2 shadow-xl
	"
>
	{#each navigation as route}
		<a
			href={route.path}
			class="btn md:btn-sm hover:variant-soft-primary"
			class:!variant-filled-primary={$page.url.pathname.split('/')[1] === route.path.replace('/', '')}
			on:click={drawerClose}
		>
			{route.label}
		</a>
	{/each}
</nav>
