// This services pulls images from a CDN, such as Unsplash.
// Source: https://unsplash.com/
// Image Source: https://unsplash.com/photos/{imageId}

import { CONCERT_PHOTO_1_URL, HEADSHOT_IMAGE_URL } from '$lib/constants';

type ImageKey = keyof typeof images;

type ImageLinkArgs = {
	/** Image ID */
	id: ImageKey;
	/** Image Height */
	h?: number;
	/** Image Width */
	w?: number;
	/** Adds the fit=max query param */
	max?: boolean;
};

/** Retreive the desired image by ID at the desired height/width.  */
export function getUnsplashImageLink({ id, w, h, max }: ImageLinkArgs): string {
	const path = images[id].raw;
	if (!w || !h) return path;

	return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
}

export const images = {
	mPGSvqHAqTU: {
		raw: HEADSHOT_IMAGE_URL
	},
	// Workstation
	'3uqauucYhjQ': {
		raw: CONCERT_PHOTO_1_URL
	},
	// Projects
	zNRITe8NPqY: {
		raw: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3'
	},
	'DtDlVpy-vvQ': {
		raw: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3'
	},
	KiEiI2b9GkU: {
		raw: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3'
	},
	ubIWo074QlU: {
		raw: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3'
	},
	IyaNci0CyRk: {
		raw: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.0.3'
	},
	LPWl2pEVGKc: {
		raw: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3'
	},
	ZSPBhokqDMc: {
		raw: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3'
	},
	'tZc3vjPCk-Q': {
		raw: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3'
	},
	'hLit2zL-Dhk': {
		raw: 'https://images.unsplash.com/photo-1581291518570-03a26006fb21?ixlib=rb-4.0.3'
	}
} as const;
