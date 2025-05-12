import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export async function markdownToHtml(markdown: string): Promise<string> {
	const html = await marked(markdown);
	return DOMPurify.sanitize(html);
}
