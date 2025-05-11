<script lang="ts">
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import { getImageLink } from '$lib/data/images';

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<!-- App Bar -->
<header>
	<div
		class="page-container !max-w-7xl mx-auto grid grid-cols-[1fr_auto_auto] md:grid-cols-[48px_1fr_48px] md:place-items-center items-center gap-4 p-4"
	>
		<!-- Portrait -->
		<a href="/" title="Return to Homepage">
			<img
				class="rounded-full w-[48px] aspect-square overflow-hidden shadow-xl object-cover object-top"
				src={getImageLink({ id: 'mPGSvqHAqTU' })}
				alt="Portfolio"
			/>
		</a>

		<!-- --------------------- -->

		<!-- 
			View the implementation of the following in `layout.svelte`.
			- On desktop, the Navigation.svelte component is shown via the slot below.
			- On mobile, we'll switch to using the Drawer utility, triggered by the Menu button.
		-->

		<!-- Navigation (desktop only) -->
		<section class="hidden md:block">
			<slot />
		</section>

		<!-- Menu (mobile only) -->
		<section class="block md:hidden">
			<button class=" btn variant-filled-primary" on:click={drawerOpen}>
				<i class="fa-solid fa-bars" />
				<span>Menu</span>
			</button>
		</section>

		<!-- --------------------- -->

		<!-- Lightswitch -->
		<LightSwitch
			bgDark="variant-filled-primary"
			ring="ring-none"
			class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl shadow-xl"
		/>
	</div>
</header>
