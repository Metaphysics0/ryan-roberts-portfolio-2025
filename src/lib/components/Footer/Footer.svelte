<script>
	import Social from '$lib/components/Social/Social.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-surface-50-900-token p-10 space-y-8 flex flex-col items-center">
	<Social />
	<p class="text-xs text-primary-500">&copy; Copyright {currentYear}. All rights reserved.</p>
</footer>
