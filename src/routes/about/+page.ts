import type { PageLoad } from './$types';
import professionalProfileMarkdown from '$lib/data/markdown/professional-profile.md?raw';
import { markdownToHtml } from '$lib/utils/markdown-to-html';

export const load: PageLoad = async () => {
	const professionalProfileHtml = await markdownToHtml(professionalProfileMarkdown);

	return {
		html: professionalProfileHtml
	};
};
